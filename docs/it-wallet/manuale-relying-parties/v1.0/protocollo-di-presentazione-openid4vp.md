# Protocollo di presentazione OpenID4VP

Il flusso di presentazione remota di IT-Wallet v1.3.3 si basa su OpenID for Verifiable Presentations (OpenID4VP) 1.0, con il profilo di interoperabilità OpenID4VC HAIP.

## 3.5.1 Request Object

JWT firmato dal Relying Party con la Protocol Key, recuperato dal Wallet tramite l'endpoint `request_uri`.

### Header

| Claim         | Obbligatorio | Valore                                                                |
| ------------- | ------------ | --------------------------------------------------------------------- |
| `alg`         | Sì           | `ES256`                                                               |
| `typ`         | Sì           | `oauth-authz-req+jwt`                                                 |
| `kid`         | Sì           | JWK Thumbprint della Protocol Key utilizzata per la firma             |
| `x5c`         | Sì           | Catena X.509 della Protocol Key (esclude il certificato root)         |
| `trust_chain` | Sì           | Array `[EntityConfiguration_Leaf_JWT, SubordinateStatement_IPZS_JWT]` |

### Payload

| Claim           | Obbligatorio | Valore                                                                                      |
| --------------- | ------------ | ------------------------------------------------------------------------------------------- |
| `iss`           | Sì           | Entity Identifier del Relying Party                                                         |
| `iat`           | Sì           | Timestamp di emissione                                                                      |
| `exp`           | Sì           | Timestamp di scadenza del Request Object (regola la replay-protection)                      |
| `client_id`     | Sì           | Stringa con prefisso `openid_federation:` seguito dall'Entity Identifier                    |
| `response_type` | Sì           | Valore costante `vp_token`                                                                  |
| `response_mode` | Sì           | Valore costante `direct_post.jwt`                                                           |
| `response_uri`  | Sì           | URL del `response_uri` del RP, deve coincidere con uno degli URL in `response_uris` dell'EC |
| `nonce`         | Sì           | Almeno 32 caratteri base64url, valore fresco per ogni richiesta                             |
| `state`         | Sì           | Valore opaco fresco per ogni richiesta, utilizzato per protezione CSRF                      |
| `wallet_nonce`  | Condizionale | Presente solo se ricevuto dal Wallet via POST al `request_uri`                              |
| `dcql_query`    | Sì           | Query DCQL strutturata (cfr. §3.5.2)                                                        |

### Modello di replay-protection

La validità del Request Object è regolata dalla combinazione `client_id` + `nonce` + `exp`. Il Wallet rifiuta il Request Object se `exp` è nel passato o se ha già ricevuto una richiesta con lo stesso `nonce` per lo stesso `client_id` (entro la finestra di validità di `exp`).

### Prefisso alternativo `x509_hash`

OpenID4VC HAIP prevede il prefisso alternativo `x509_hash` per il `client_id`, pensato per Relying Party che non intendono partecipare alla federazione. Il prefisso `openid_federation` è il percorso standard per IT-Wallet ed è l'unico documentato in questo manuale.

## 3.5.2 DCQL — Digital Credentials Query Language

OpenID4VP 1.0 §6 definisce DCQL come linguaggio di query strutturato. Il Relying Party esprime quali credenziali e quali claim richiede attraverso un oggetto `dcql_query` nel payload del Request Object.

### Struttura della query

```json
"dcql_query": {
  "credentials": [
    {
      "id": "<identificativo_locale_credenziale>",
      "format": "dc+sd-jwt",
      "meta": {
        "vct_values": ["<vct_obiettivo>"]
      },
      "claims": [
        {"path": ["<nome_claim_1>"]},
        {"path": ["<nome_claim_2>"]}
      ]
    }
  ]
}
```

| Campo                           | Descrizione                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| `credentials[].id`              | Identificativo locale della credenziale richiesta. Compare come chiave nel `vp_token` di risposta |
| `credentials[].format`          | Formato richiesto. Per il flusso remoto: `dc+sd-jwt`                                              |
| `credentials[].meta.vct_values` | Array di `vct` accettati per la credenziale                                                       |
| `credentials[].claims[].path`   | Path JSON del claim richiesto nell'oggetto credenziale                                            |

### Principio di minimizzazione

L'array `credentials[].claims` deve includere esclusivamente i claim strettamente necessari al servizio. La specifica non impone un limite numerico, ma il principio è guidato dall'art. 5 §1 lett. c del GDPR.

## 3.5.3 Authorization Response

La risposta del Wallet al `response_uri` segue il response mode `direct_post.jwt`.

### Struttura HTTP

```http
POST /response_uri HTTP/1.1
Host: relying-party.example.org
Content-Type: application/x-www-form-urlencoded

response=<JWE_cifrato>
```

### Payload JWE (decifrato)

```json
{
  "state": "<state_della_sessione>",
  "vp_token": {
    "<id_credenziale_DCQL>": ["<SD-JWT_Combined_Presentation>"]
  }
}
```

Il `vp_token` è un oggetto JSON le cui chiavi sono gli `id` dichiarati nel `dcql_query` e i cui valori sono array di Combined Presentation. Per il caso base di una sola credenziale richiesta, l'array contiene un solo elemento.

### Algoritmi di cifratura

| Algoritmo JWE | Supporto     |
| ------------- | ------------ |
| `A256GCM`     | Obbligatorio |

L'algoritmo di key wrapping è determinato dalla Protocol Key del Relying Party esposta nel JWK Set dei metadati `openid_credential_verifier`.

## 3.5.4 SD-JWT Combined Presentation

La stringa restituita nel `vp_token` ha la forma:

```
<Issuer-Signed-JWT>~<Disclosure_1>~<Disclosure_2>~...~<KB-JWT>
```

Il separatore è il carattere `~`. Le componenti sono:

| Componente        | Descrizione                                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| Issuer-Signed-JWT | JWT firmato dal Credential Issuer (PID Provider), contiene `_sd`, `cnf`, `status` e i claim sempre in chiaro     |
| Disclosure        | Stringa base64url che decodifica in `[salt, claim_name, claim_value]`                                            |
| KB-JWT            | JWT firmato dal Wallet Instance che attesta il possesso della chiave privata e la freschezza della presentazione |

## 3.5.5 Key Binding JWT (KB-JWT)

JWT allegato in coda alla SD-JWT Combined Presentation, firmato dal Wallet Instance con la chiave privata corrispondente alla `cnf.jwk` dell'Issuer-Signed-JWT.

### Header

| Claim | Valore   |
| ----- | -------- |
| `alg` | `ES256`  |
| `typ` | `kb+jwt` |

### Payload

| Claim     | Obbligatorio | Valore                                                                                                           |
| --------- | ------------ | ---------------------------------------------------------------------------------------------------------------- |
| `aud`     | Sì           | `client_id` del Relying Party (incluso prefisso `openid_federation:`)                                            |
| `nonce`   | Sì           | Valore identico al `nonce` del Request Object della sessione                                                     |
| `iat`     | Sì           | Timestamp di firma del KB-JWT                                                                                    |
| `sd_hash` | Sì           | `SHA-256` della concatenazione `<Issuer-Signed-JWT>~<Disclosure_1>~...~<Disclosure_n>~`, codificata in base64url |

## 3.5.6 Status List per la revoca

Il claim `status` dell'Issuer-Signed-JWT contiene il riferimento alla Status List da consultare per verificare lo stato di revoca della credenziale.

```json
"status": {
  "status_list": {
    "uri": "<URL_della_Status_List>",
    "idx": <indice_del_bit>
  }
}
```

Il Relying Party scarica la Status List dall'URL indicato e verifica che il bit all'indice `idx` non indichi credenziale revocata.
