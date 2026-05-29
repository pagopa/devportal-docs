# Come onboardare il Relying Party nella federazione IPZS

**Obiettivo**: ottenere lo status di entità trusted nella federazione IT-Wallet di pre-produzione, pubblicando un Entity Configuration certificato con `authority_hints`, catena `x5c` e Trust Mark.

**Prerequisiti**: requisiti organizzativi e tecnici elencati in §1.3.

**Durata indicativa**: 1 giornata di lavoro effettivo, più 1-3 giornate lavorative di attesa per la risposta IPZS via PEC.

{% stepper %}
{% step %}
### Generare le chiavi crittografiche

Sono necessari due tipi di chiavi su curva ellittica P-256, generate localmente.

| Tipo               | Uso                                                   | Quantità minima               |
| ------------------ | ----------------------------------------------------- | ----------------------------- |
| **Federation Key** | Firma dell'Entity Configuration                       | 2 (una attiva, una di backup) |
| **Protocol Key**   | Firma dei Request Object e decifratura delle risposte | 1                             |

Generare ciascuna chiave con OpenSSL:

```bash
# Federation Key (ripetere per la seconda chiave)
openssl ecparam -name prime256v1 -genkey -noout -out federation_key.pem
openssl ec -in federation_key.pem -pubout -out federation_key_pub.pem

# Protocol Key
openssl ecparam -name prime256v1 -genkey -noout -out protocol_key.pem
openssl ec -in protocol_key.pem -pubout -out protocol_key_pub.pem
```

La disponibilità di una seconda Federation Key consente l'attivazione del backup in caso di compromissione della chiave primaria, senza interruzione del servizio (_cfr. procedura di rotazione in §3.3_).
{% endstep %}

{% step %}
### Calcolare il `kid` come JWK Thumbprint

Il claim `kid` di ogni JWK deve coincidere con il JWK Thumbprint definito da RFC 7638, ovvero `base64url(SHA-256(canonical_jwk))`, dove la forma canonica include solo le proprietà obbligatorie (`crv`, `kty`, `x`, `y` per le chiavi EC), ordinate alfabeticamente e serializzate senza spazi.

```python
# Python (python-jose)
from jose.utils import base64url_encode
import hashlib, json

key = {"kty": "EC", "crv": "P-256", "x": "<x>", "y": "<y>"}
canonical = json.dumps({k: key[k] for k in sorted(["crv", "kty", "x", "y"])},
                       separators=(",", ":"))
kid = base64url_encode(hashlib.sha256(canonical.encode()).digest()).decode()
```

```javascript
// Node.js (jose)
import { calculateJwkThumbprint } from 'jose'

const kid = await calculateJwkThumbprint(
  { kty: 'EC', crv: 'P-256', x: '<x>', y: '<y>' }
)
```

```java
// Java (Nimbus JOSE+JWT)
import com.nimbusds.jose.jwk.ECKey;
import com.nimbusds.jose.jwk.Curve;
import com.nimbusds.jose.util.Base64URL;

ECKey ecKey = new ECKey.Builder(Curve.P_256,
    new Base64URL("<x>"), new Base64URL("<y>")).build();
String kid = ecKey.computeThumbprint().toString();
```
{% endstep %}

{% step %}
### Preparare le Certificate Signing Request

È richiesta **una CSR per ciascuna Federation Key** (non per le Protocol Key), in formato PKCS #10.

```bash
openssl req -new \
  -key federation_key.pem \
  -out federation_key.csr \
  -subj "/C=IT/ST=Lazio/L=Roma/O=Acme S.p.A./CN=relying-party.example.org/emailAddress=protocollo@pec.example.it"
```

Il `CN` deve coincidere con il Federation Entity Identifier privato dello schema `https://` e di qualsiasi path. I campi `ST`, `L`, `O` ed `emailAddress` devono riflettere i dati ufficiali dell'organizzazione come risultanti dai registri pubblici. La PEC indicata in `emailAddress` deve corrispondere alla PEC ufficiale, poiché IPZS la utilizzerà per le comunicazioni di onboarding (_cfr. specifiche del Subject X.509 in §3.3_).
{% endstep %}

{% step %}
### Pubblicare l'Entity Configuration iniziale

Prima dell'invio della richiesta via PEC, l'Entity Configuration iniziale deve essere pubblicato e raggiungibile su `<entity_id>/.well-known/openid-federation`. Il file è un JWT firmato con la Federation Key e servito con `Content-Type: application/entity-statement+jwt`.

Il payload iniziale contiene solo i claim essenziali: `iss`, `sub`, `iat`, `exp`, `jwks`, `metadata`. I claim `authority_hints` e `trust_marks` vengono aggiunti **dopo** la risposta IPZS (passo 7).

<details>

<summary>Template del payload iniziale</summary>

```json
{
  "iat": 1718207217,
  "exp": 1718293617,
  "iss": "https://relying-party.example.org",
  "sub": "https://relying-party.example.org",
  "jwks": {
    "keys": [
      {
        "kid": "<jwk_thumbprint>",
        "kty": "EC",
        "crv": "P-256",
        "x": "<x_coordinate_base64url>",
        "y": "<y_coordinate_base64url>"
      }
    ]
  },
  "metadata": {
    "federation_entity": {
      "organization_name": "Acme S.p.A.",
      "homepage_uri": "https://relying-party.example.org",
      "policy_uri": "https://relying-party.example.org/privacy",
      "logo_uri": "https://relying-party.example.org/logo.svg",
      "contacts": ["protocollo@pec.example.it"],
      "federation_resolve_endpoint": "https://relying-party.example.org/resolve"
    },
    "openid_credential_verifier": {
      "application_type": "web",
      "client_id": "https://relying-party.example.org",
      "client_name": "Acme S.p.A.",
      "logo_uri": "https://relying-party.example.org/compact-logo.svg",
      "contacts": ["protocollo@pec.example.it"],
      "request_uris": ["https://relying-party.example.org/request_uri"],
      "response_uris": ["https://relying-party.example.org/response_uri"],
      "encrypted_response_enc_values_supported": ["A256GCM"],
      "vp_formats_supported": {
        "dc+sd-jwt": {
          "sd-jwt_alg_values": ["ES256"],
          "kb-jwt_alg_values": ["ES256"]
        }
      },
      "jwks": {
        "keys": [
          {
            "kid": "<protocol_key_kid>",
            "kty": "EC",
            "crv": "P-256",
            "x": "<x_coordinate_base64url>",
            "y": "<y_coordinate_base64url>"
          }
        ]
      }
    }
  }
}
```

Per lo schema completo dell'Entity Configuration con tutti i campi opzionali e le regole di obbligatorietà condizionale, _cfr. §3.2_.

</details>
{% endstep %}

{% step %}
### Inviare la richiesta di onboarding via PEC

Inviare una email all'indirizzo `identitadigitale@pec.ipzs.it` contenente i dati seguenti.

| Campo                                   | Contenuto                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------- |
| Federation Entity Identifier            | URL base del Relying Party (es. `https://pre.relying-party.example.org` per pre-produzione) |
| PEC dell'organizzazione                 | PEC ufficiale                                                                               |
| Identificativo fiscale                  | Codice Fiscale o P.IVA per entità private; Codice IPA per entità pubbliche                  |
| Federation Entity Public Keys (JWK Set) | Array JSON con le Federation Key in formato JWK                                             |
| CSR                                     | Una per ciascuna JWK, in formato PKCS #10 (allegato)                                        |

IPZS verifica la coerenza dei dati e la presenza dell'Entity Configuration pubblicato. In assenza di anomalie, risponde con un Registration Number nel formato:

```json
{ "registrationNumber": "ITWALLET-XXXXXX" }
```

In presenza di anomalie, IPZS risponde con l'elenco delle correzioni richieste. In quel caso occorre sanare i rilievi e rinviare la richiesta.
{% endstep %}

{% step %}
### Recuperare il Subordinate Statement da IPZS

Dopo la ricezione del Registration Number, interrogare il `federation_fetch_endpoint` del Trust Anchor:

```http
GET /federation_fetch_endpoint?sub=https://relying-party.example.org HTTP/1.1
Host: pre.ta.wallet.ipzs.it
```

La risposta è un JWT firmato da IPZS — il _Subordinate Statement_ — il cui payload contiene il claim `jwks.keys` con un campo aggiuntivo `x5c` per ciascuna Federation Key. L'`x5c` è un array di certificati X.509 in formato DER codificato Base64; il primo elemento è il certificato del Relying Party emesso dal Trust Anchor, il secondo è il certificato self-signed di IPZS che lo certifica.
{% endstep %}

{% step %}
### Aggiornare l'Entity Configuration con `authority_hints`, `x5c` e Trust Mark

L'Entity Configuration pubblicato deve essere aggiornato includendo:

1. il claim `authority_hints` valorizzato con l'URL del Trust Anchor IPZS;
2. il claim `x5c` per ciascuna Federation Key, valorizzato con la catena di certificati ricevuta nel Subordinate Statement;
3. il claim `trust_marks` valorizzato con il Trust Mark emesso da IPZS.

```json
{
  "authority_hints": ["https://pre.ta.wallet.ipzs.it"],
  "jwks": {
    "keys": [
      {
        "kid": "<jwk_thumbprint>",
        "kty": "EC", "crv": "P-256",
        "x": "...", "y": "...",
        "x5c": [
          "<DER_base64_cert_RP>",
          "<DER_base64_cert_IPZS>"
        ]
      }
    ]
  },
  "trust_marks": [
    {
      "trust_mark_type": "https://pre.ta.wallet.ipzs.it/openid_relying_party/public",
      "trust_mark": "<JWT_firmato_da_IPZS>"
    }
  ]
}
```

Secondo il profilo OpenID4VC HAIP, l'array `x5c` non deve includere il certificato root del Trust Anchor: i certificati ammessi sono il certificato del Relying Party e l'eventuale catena intermedia.

Pubblicare l'Entity Configuration aggiornato.
{% endstep %}
{% endstepper %}

## ✅ Verifica

```bash
# 1. L'Entity Identifier risulta iscritto nella federazione
curl -s https://pre.ta.wallet.ipzs.it/list | grep "relying-party.example.org"

# 2. L'Entity Configuration risponde con il Content-Type corretto
curl -sI https://relying-party.example.org/.well-known/openid-federation \
  | grep -i content-type
# Atteso: application/entity-statement+jwt

# 3. Il payload contiene i claim richiesti
curl -s https://relying-party.example.org/.well-known/openid-federation \
  | cut -d'.' -f2 | base64 -d 2>/dev/null \
  | jq '{iss, sub, authority_hints, trust_marks_n: (.trust_marks | length)}'
# Atteso: iss == sub, authority_hints con URL IPZS, trust_marks > 0

# 4. La Trust Chain si risolve senza errori
curl -s "https://pre.ta.wallet.ipzs.it/resolve?sub=https://relying-party.example.org&trust_anchor=https://pre.ta.wallet.ipzs.it" \
  | cut -d'.' -f2 | base64 -d 2>/dev/null \
  | jq '{iss, sub, exp}'
# Atteso: oggetto JSON valido, iss = Trust Anchor IPZS, exp futuro
```

Tutti e quattro i controlli devono passare prima di procedere al Tutorial §2.2.

## Riferimenti

* §3.1 Trust Infrastructure
* §3.2 Entity Configuration
* §3.3 Chiavi crittografiche e certificati X.509
* §3.7 Endpoint del Trust Anchor IPZS
