# Chiavi crittografiche e certificati x 509

Il Relying Party gestisce due tipologie di chiavi crittografiche con scopi distinti, su curva ellittica P-256 (algoritmo ES256).

## 3.3.1 Federation Key

| Proprietà            | Valore                                                                       |
| -------------------- | ---------------------------------------------------------------------------- |
| Tipo                 | EC P-256                                                                     |
| Algoritmo di firma   | ES256                                                                        |
| Scopo                | Firma dell'Entity Configuration                                              |
| Quantità minima      | 2 (una attiva, una di backup)                                                |
| Esposizione pubblica | Sì, nel blocco `jwks` top-level dell'Entity Configuration con relativo `x5c` |

La disponibilità di una seconda Federation Key consente l'attivazione del backup in caso di compromissione o di rotazione pianificata, senza interruzione del servizio.

## 3.3.2 Protocol Key

| Proprietà            | Valore                                                                              |
| -------------------- | ----------------------------------------------------------------------------------- |
| Tipo                 | EC P-256                                                                            |
| Algoritmo di firma   | ES256                                                                               |
| Scopo                | Firma dei Request Object e decifratura delle risposte JWE del Wallet                |
| Quantità minima      | 1                                                                                   |
| Esposizione pubblica | Sì, nel blocco `metadata.openid_credential_verifier.jwks` dell'Entity Configuration |

## 3.3.3 JWK Thumbprint come `kid`

Il claim `kid` di ogni JWK deve coincidere con il JWK Thumbprint definito da RFC 7638:

```
kid = base64url( SHA-256( canonical_jwk ) )
```

dove `canonical_jwk` è la serializzazione JSON del JWK contenente solo le proprietà obbligatorie ordinate alfabeticamente (`crv`, `kty`, `x`, `y` per le chiavi EC) e privata di spazi.

## 3.3.4 Certificato X.509 emesso da IPZS

A valle dell'onboarding, IPZS emette un certificato X.509 per ciascuna Federation Key dichiarata nella CSR. La catena di certificati viene veicolata nel claim `x5c` di ciascuna JWK.

### Subject del certificato

| Attributo      | Esempio                     | Note                                                                 |
| -------------- | --------------------------- | -------------------------------------------------------------------- |
| `C`            | `IT`                        | Country code                                                         |
| `ST`           | `Lazio`                     | State or Province                                                    |
| `L`            | `Roma`                      | Locality                                                             |
| `O`            | `Acme S.p.A.`               | Organization                                                         |
| `CN`           | `relying-party.example.org` | Common Name: **solo DNS name**, senza schema `https://` e senza path |
| `emailAddress` | `protocollo@pec.example.it` | PEC ufficiale, utilizzata da IPZS per le comunicazioni               |

### Estensioni X.509 richieste

| Estensione                     | Valore                                                           |
| ------------------------------ | ---------------------------------------------------------------- |
| Subject Alternative Name (URI) | `https://relying-party.example.org` (Entity Identifier completo) |
| Basic Constraints              | `CA:FALSE`                                                       |
| Key Usage                      | `Digital Signature`                                              |

### Profilo HAIP per `x5c`

Secondo il profilo OpenID4VC HAIP, l'array `x5c` **non deve includere il certificato root** del Trust Anchor. La catena pubblicata contiene il certificato del Relying Party in prima posizione e l'eventuale catena intermedia, escluso il certificato self-signed di IPZS.

## 3.3.5 Ciclo di vita

* **Generazione**: Le chiavi vengono generate localmente con OpenSSL o equivalente, prima dell'invio della richiesta di onboarding a IPZS. La chiave privata non lascia mai l'infrastruttura del Relying Party.
* **Certificazione**: La chiave pubblica viene certificata da IPZS al termine dell'onboarding, ricevendo un certificato X.509 firmato.
* **Utilizzo operativo**: La chiave privata firma i JWT del protocollo (Entity Configuration con la Federation Key, Request Object con la Protocol Key); la Protocol Key privata decifra il JWE di risposta del Wallet.
* **Rotazione**: La rotazione segue il modello previsto da OpenID Federation 1.0 § 11.2. La nuova chiave viene aggiunta al JWK Set dell'Entity Configuration in coesistenza con la vecchia per una finestra temporale che consente alle altre entità di propagare l'aggiornamento delle proprie cache. Al termine della finestra, la vecchia chiave viene rimossa.
* **Revoca**: In caso di compromissione, la chiave viene immediatamente rimossa dal JWK Set dell'Entity Configuration e sostituita con la chiave di backup; IPZS deve essere notificato dell'incidente.
* **Dismissione**: Le chiavi compromesse o ritirate vengono cancellate dai sistemi del Relying Party una volta confermata la propagazione dell'aggiornamento dell'Entity Configuration.

{% hint style="info" %}
**`TBD` — Tempistiche di comunicazione preventiva a IPZS**: la finestra temporale standard per la notifica preventiva di una rotazione di chiavi a IPZS non è documentata nelle linee guida operative v1.3.3.
{% endhint %}

{% hint style="info" %}
**`TBD` — Requisiti di custodia delle chiavi private**: la specifica IT-Wallet v1.3.3 non prescrive requisiti puntuali sulla custodia delle chiavi private del Relying Party (es. HSM certificato FIPS 140-2/140-3, livello CC EAL). Si raccomanda di seguire le indicazioni generali di settore (NIST SP 800-131A, BSI TR-02102-1) per dimensioni e algoritmi.
{% endhint %}
