# Come costruire e firmare il Request Object

**Obiettivo**: produrre il Request Object — un JWT firmato che il Wallet recupera tramite `request_uri` — dichiarando le credenziali e i claim richiesti con il principio di minimizzazione.

**Prerequisiti**: Aver completato il processo descritto in → [Come implementare gli endpoint di presentazione](come-implementare-gli-endpoint-di-presentazione.md).

**Durata indicativa**: mezza giornata di lavoro.

{% stepper %}
{% step %}
### Generare `nonce` e `state` per la sessione

Per ciascuna richiesta di presentazione, generare due valori freschi con entropia crittograficamente sicura (almeno 32 caratteri base64url):

{% tabs %}
{% tab title="Python" %}
```python
import secrets

nonce = secrets.token_urlsafe(32)   # binding alla risposta (KB-JWT)
state = secrets.token_urlsafe(32)   # protezione CSRF
```
{% endtab %}

{% tab title="Node.js" %}
```javascript
import { randomBytes } from 'crypto'

const nonce = randomBytes(32).toString('base64url')
const state = randomBytes(32).toString('base64url')
```
{% endtab %}

{% tab title="Java" %}
```java
import java.security.SecureRandom;
import java.util.Base64;

SecureRandom rng = new SecureRandom();
byte[] buf = new byte[32];
rng.nextBytes(buf);
String nonce = Base64.getUrlEncoder().withoutPadding().encodeToString(buf);
rng.nextBytes(buf);
String state = Base64.getUrlEncoder().withoutPadding().encodeToString(buf);
```
{% endtab %}
{% endtabs %}

Conservare entrambi i valori in una sessione lato server per la successiva validazione: alla ricezione della risposta, `state` consente di verificare la coerenza della sessione (protezione CSRF) e `nonce` consente di verificare il binding crittografico della presentazione tramite il KB-JWT.
{% endstep %}

{% step %}
### Comporre la query DCQL

DCQL (_Digital Credentials Query Language_, OpenID4VP §6) esprime in modo strutturato quali credenziali e quali claim sono richiesti. Il principio guida è la **minimizzazione**: includere solo gli attributi strettamente necessari al servizio.

Esempio di query che richiede tre claim del PID:

```json
"dcql_query": {
  "credentials": [
    {
      "id": "pid",
      "format": "dc+sd-jwt",
      "meta": {
        "vct_values": ["urn:eudi:pid:it:1"]
      },
      "claims": [
        {"path": ["given_name"]},
        {"path": ["family_name"]},
        {"path": ["birthdate"]}
      ]
    }
  ]
}
```

Per il catalogo completo degli attributi del PID e dei relativi tipi, _cfr. §3.4_. Per altre credenziali, consultare il _Catalogo degli Attestati Elettronici_ presso il Trust Anchor.
{% endstep %}

{% step %}
### Costruire il payload del Request Object

```json
{
  "iss": "https://relying-party.example.org",
  "iat": 1718207217,
  "exp": 1718210817,
  "client_id": "openid_federation:https://relying-party.example.org",
  "response_type": "vp_token",
  "response_mode": "direct_post.jwt",
  "response_uri": "https://relying-party.example.org/response_uri",
  "nonce": "<nonce_generato>",
  "state": "<state_generato>",
  "dcql_query": { ... }
}
```

Vincoli obbligatori sui claim:

| Claim           | Requisito                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------ |
| `client_id`     | Prefisso `openid_federation:` seguito dall'Entity Identifier.                              |
| `response_type` | Valore costante `vp_token`.                                                                |
| `response_mode` | Valore costante `direct_post.jwt`.                                                         |
| `response_uri`  | Deve coincidere con uno degli URL registrati in `response_uris` nell'Entity Configuration. |
| `nonce`         | Almeno 32 caratteri base64url, fresco per ogni richiesta.                                  |
| `exp`           | Definisce la finestra di validità del Request Object e regola la replay-protection.        |

Il `wallet_nonce` va incluso solo se ricevuto dal Wallet via `POST` al `request_uri` (modalità opzionale, vedi step 1 di  → [Come implementare gli endpoint di presentazione](come-implementare-gli-endpoint-di-presentazione.md)).
{% endstep %}

{% step %}
### Costruire l'header del Request Object

L'header dichiara l'algoritmo, l'identificativo della Protocol Key utilizzata per la firma, la catena X.509 e la Trust Chain.

```json
{
  "alg": "ES256",
  "typ": "oauth-authz-req+jwt",
  "kid": "<protocol_key_kid>",
  "x5c": [
    "<DER_base64_cert_RP>",
    "<DER_base64_cert_IPZS>"
  ],
  "trust_chain": [
    "<EntityConfiguration_Leaf_JWT>",
    "<SubordinateStatement_IPZS_JWT>"
  ]
}
```
{% endstep %}

{% step %}
### Firmare il Request Object

Firmare il JWT con la **Protocol Key** privata utilizzando ES256. Il `kid` nell'header deve corrispondere alla Protocol Key dichiarata nei metadati `openid_credential_verifier.jwks` dell'Entity Configuration.

Servire il JWT prodotto sull'endpoint `request_uri` con `Content-Type: application/oauth-authz-req+jwt`.
{% endstep %}
{% endstepper %}

## ✅ Verifica

```bash
# 1. Header del Request Object — algoritmo e kid corretti
curl -s https://relying-party.example.org/request_uri \
  | cut -d'.' -f1 | base64 -d 2>/dev/null \
  | jq '{alg, typ, kid}'
# Atteso: alg="ES256", typ="oauth-authz-req+jwt"

# 2. Payload del Request Object — claim obbligatori coerenti
curl -s https://relying-party.example.org/request_uri \
  | cut -d'.' -f2 | base64 -d 2>/dev/null \
  | jq '{
      client_id,
      response_type,
      response_mode,
      response_uri,
      nonce_len: (.nonce | length),
      dcql_credentials: (.dcql_query.credentials | map({id, format, vct: .meta.vct_values[0]}))
    }'
# Atteso: response_type="vp_token", response_mode="direct_post.jwt",
#         nonce_len>=32, dcql_credentials con format="dc+sd-jwt"
```

In alternativa, incollare il JWT in [jwt.io](https://jwt.io/) e verificare la firma con la chiave pubblica della Protocol Key.

## Riferimenti

* [Protocollo di presentazione OpenID4VP](../protocollo-di-presentazione-openid4vp.md) (Request Object completo, DCQL, replay-protection)
* [Credenziali e modello dati ](../credenziali-e-modello-dati.md) (claim disponibili per il PID)
