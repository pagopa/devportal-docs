# Endpoint del Relying Party

Il Relying Party espone quattro endpoint HTTPS pubblici. Tre sono richiesti dal flusso di presentazione (`/.well-known/openid-federation`, `request_uri`, `response_uri`); il quarto (`erasure_endpoint`) è obbligatorio in presenza di claim identificativi.

## 3.6.1 `/.well-known/openid-federation`

| Proprietà                       | Valore                                                 |
| ------------------------------- | ------------------------------------------------------ |
| Metodo                          | `GET`                                                  |
| `Content-Type` di risposta      | `application/entity-statement+jwt`                     |
| Codice HTTP in caso di successo | `200 OK`                                               |
| Body                            | Entity Configuration JWT firmato con la Federation Key |

L'endpoint deve essere raggiungibile pubblicamente da Internet, all'URL `<entity_id>/.well-known/openid-federation`, dove `<entity_id>` coincide con il dominio del Relying Party. Per i dettagli sulla struttura del payload, cfr. §3.2.

## 3.6.2 `request_uri`

| Proprietà                       | Valore                                                       |
| ------------------------------- | ------------------------------------------------------------ |
| Metodi                          | `GET` (raccomandato), `POST` (opzionale)                     |
| URL                             | Deve coincidere con uno dei valori in `request_uris` dell'EC |
| `Content-Type` di risposta      | `application/oauth-authz-req+jwt`                            |
| Codice HTTP in caso di successo | `200 OK`                                                     |
| Body                            | Request Object JWT firmato con la Protocol Key               |

In modalità `POST` (parametro `request_uri_method=post`), il Wallet può trasmettere `wallet_metadata` e `wallet_nonce` come form-encoded; il `wallet_nonce` deve essere incluso nel payload del Request Object emesso in risposta.

## 3.6.3 `response_uri`

| Proprietà                                    | Valore                                                          |
| -------------------------------------------- | --------------------------------------------------------------- |
| Metodo                                       | `POST`                                                          |
| URL                                          | Deve coincidere con uno dei valori in `response_uris` dell'EC   |
| `Content-Type` ricevuto                      | `application/x-www-form-urlencoded`, parametro `response=<JWE>` |
| `Content-Type` di risposta                   | `application/json`                                              |
| Codice HTTP in caso di successo              | `200 OK`                                                        |
| Codice HTTP in caso di errore di validazione | `400 Bad Request`                                               |

Per il flusso Same-Device la risposta JSON include `redirect_uri` con `response_code` opaco; per il flusso Cross-Device la risposta è `{}`.

## 3.6.4 `erasure_endpoint`

| Proprietà                                         | Valore                                                               |
| ------------------------------------------------- | -------------------------------------------------------------------- |
| Metodo                                            | `GET`                                                                |
| `Content-Type` di risposta                        | nessuno (body vuoto)                                                 |
| Codice HTTP in caso di successo                   | `204 No Content`                                                     |
| Codice HTTP in caso di identificativo non trovato | `404 Not Found`                                                      |
| Condizione di obbligatorietà                      | RP che richiede attributi identificativi univoci (es. `tax_id_code`) |

{% hint style="info" %}
**`TBD` — Meccanismo di correlazione lato RP**: il modello con cui il Relying Party associa una richiesta di erasure entrante ai dati della sessione di presentazione (identificativo opaco, riferimento alla sessione, claim utilizzato come chiave) non è coperto nelle linee guida operative v1.3.3.
{% endhint %}

## 3.6.5 Catalogo dei codici di errore

I codici di errore restituibili dal Relying Party (o restituiti dalle controparti) derivano da tre standard sovrapposti: OAuth 2.0, OpenID4VP e OpenID Federation 1.0.

### Errori OAuth 2.0 base (sul `response_uri`)

| Codice                      | Quando si verifica                                                   | Codice HTTP |
| --------------------------- | -------------------------------------------------------------------- | ----------- |
| `invalid_request`           | Request Object o response malformati, parametri obbligatori mancanti | `400`       |
| `unauthorized_client`       | Client non autorizzato per il `response_type` richiesto              | `400`       |
| `access_denied`             | Utente nega il consenso, sessione scaduta                            | `403`       |
| `unsupported_response_type` | `response_type` diverso da `vp_token`                                | `400`       |
| `invalid_scope`             | Scope non riconosciuto                                               | `400`       |
| `server_error`              | Errore interno del server                                            | `500`       |
| `temporarily_unavailable`   | Server temporaneamente non disponibile                               | `503`       |

### Errori specifici OpenID4VP

| Codice                       | Quando si verifica                                               | Codice HTTP |
| ---------------------------- | ---------------------------------------------------------------- | ----------- |
| `vp_formats_not_supported`   | Wallet non supporta il formato richiesto in `dcql_query`         | `400`       |
| `invalid_request_uri_method` | Metodo HTTP utilizzato su `request_uri` non supportato           | `400`       |
| `wallet_unavailable`         | Wallet temporaneamente non disponibile                           | `503`       |
| `invalid_transaction_data`   | Dati della transazione (sessione) non validi o non riconducibili | `400`       |

### Errori OpenID Federation 1.0 (sui endpoint del Trust Anchor)

| Codice                 | Quando si verifica                               | Endpoint                                 |
| ---------------------- | ------------------------------------------------ | ---------------------------------------- |
| `invalid_trust_anchor` | Trust Anchor indicato non riconosciuto           | `/resolve`                               |
| `invalid_trust_chain`  | Trust Chain non risolvibile o non valida         | `/resolve`                               |
| `invalid_metadata`     | Metadati dell'entità non conformi alla specifica | `/resolve`                               |
| `invalid_issuer`       | `iss` dichiarato non valido                      | `/resolve`, `/federation_fetch_endpoint` |
| `invalid_subject`      | `sub` non noto al Trust Anchor                   | `/resolve`, `/federation_fetch_endpoint` |
| `not_found`            | Entità non presente nel registro                 | `/federation_fetch_endpoint`             |

### Sintomi di scenari non-protocollari

Alcuni errori non sono codificati formalmente nei tre standard ma si manifestano come fallimenti silenziosi lato Relying Party.

| Sintomo                                     | Azione consigliata                                                |
| ------------------------------------------- | ----------------------------------------------------------------- |
| Timeout del Wallet (utente non interagisce) | Chiudere la sessione lato RP e richiedere all'utente di riprovare |
| Utente nega il consenso nel Wallet          | Mostrare un messaggio chiaro all'utente e offrire un'alternativa  |
| Sessione scaduta lato Wallet                | Chiudere la sessione lato RP e ripartire dalla Selection Page     |

{% hint style="info" %}
**`TBD` — Formato standardizzato della error response**: la specifica IT-Wallet v1.3.3 non prescrive un formato unico (RFC 7807 `application/problem+json` vs formato OAuth2 con `error` + `error_description`). Il Relying Party può adottare l'uno o l'altro; la coerenza interna è raccomandata.
{% endhint %}
