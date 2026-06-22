# API Reference - PAYMENT

**Versione:** 1.4.1\
**Titolo:** EMD Payment API - PSP Integration\
**Contatto:** PagoPA S.p.A. - messaggidicortesia@assistenza.pagopa.it

***

## Panoramica

Questa API gestisce il flusso di **pagamento integrato** all'interno del sistema EMD (Messaggi di Cortesia). Permette ai PSP di generare un token di recupero (`retrievalToken`) associato al messaggio di cortesia, recuperarne i dettagli, e redirezionare l'Utente verso l'app bancaria del PSP tramite deep link per completare il pagamento.

Il flusso tipico è:

1. Il PSP riceve un messaggio di cortesia e chiama `POST /retrievalTokens` per salvare le informazioni di recupero, ottenendo un `retrievalId`.
2. Il `retrievalId` viene incluso nel link mostrato all'Utente che effettua una redirect verso la piattaforma SEND
3. Quando l'Utente entra nella piattaforma SEND cliccando sulla CTA "Paga con la tua Banca", viene chiamato `GET /token` (redirect) che genera il deep link verso l'app bancaria del PSP.

***

## Ambienti

| Ambiente                   | URL Base                                          |
| -------------------------- | ------------------------------------------------- |
| Development (DEV)          | `https://api-emd.dev.cstar.pagopa.it/emd/payment` |
| User Acceptance Test (UAT) | `https://api-emd.uat.cstar.pagopa.it/emd/payment` |
| Produzione (PROD)          | `https://api-emd.cstar.pagopa.it/emd/payment`     |

***

## Autenticazione

Le operazioni `POST /retrievalTokens` e `GET /retrievalTokens/{retrievalId}` richiedono autenticazione tramite **OAuth2 con flusso Client Credentials**. Il token JWT Bearer deve essere incluso nell'header `Authorization`.

L'endpoint `GET /token` (redirect) è **pubblico** e non richiede autenticazione.

***

## Endpoint

### 1. Salva il retrieval payload

**`POST /retrievalTokens`**

Crea e salva un payload di recupero associato a un messaggio di cortesia. Restituisce un `retrievalId` univoco da utilizzare nei successivi passaggi del flusso di pagamento.

**Parametri di header:**

| Header            | Tipo   | Obbligatorio | Descrizione                                           |
| ----------------- | ------ | ------------ | ----------------------------------------------------- |
| `Accept-Language` | string | Sì           | Lingua della risposta (es. `it-IT`). Default: `it-IT` |

**Body della richiesta (`application/json`):**

```json
{
  "agent": "iOS",
  "originId": "XRUZ-GZAJ-ZUEJ-202407-W-1",
  "linkVersion": "v1"
}
```

| Campo         | Tipo   | Obbligatorio | Descrizione                                                                                                                     |
| ------------- | ------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `agent`       | string | Sì           | Identificatore del sistema operativo sorgente (es. `iOS`, `Android`). 2-50 caratteri alfanumerici                               |
| `originId`    | string | Sì           | Identificatore univoco del messaggio originale. 24-36 caratteri alfanumerici con trattini                                       |
| `linkVersion` | string | No           | Versione del deep link da utilizzare. Se non fornita, viene usata la versione predefinita concordata con il PSP. 1-50 caratteri |

**Risposta di successo (`200 OK`):**

```json
{
  "retrievalId": "0e4c6629-8753-234s-b0da-1f796999ec2-15038637960920"
}
```

Il `retrievalId` è una stringa di esattamente 50 caratteri che identifica univocamente il payload salvato.

***

### 2. Recupera il retrieval payload

**`GET /retrievalTokens/{retrievalId}`**

Recupera i dettagli completi di un payload di recupero precedentemente salvato, inclusi il deep link generato e le informazioni sul PSP.

**Parametri di path:**

| Parametro     | Tipo   | Obbligatorio | Descrizione                                                             |
| ------------- | ------ | ------------ | ----------------------------------------------------------------------- |
| `retrievalId` | string | Sì           | Identificativo univoco del retrieval payload (esattamente 50 caratteri) |

**Parametri di header:**

| Header            | Tipo   | Obbligatorio | Descrizione                                           |
| ----------------- | ------ | ------------ | ----------------------------------------------------- |
| `Accept-Language` | string | Sì           | Lingua della risposta (es. `it-IT`). Default: `it-IT` |

**Risposta di successo (`200 OK`):**

```json
{
  "retrievalId": "0e4c6629-8753-234s-b0da-1f796999ec2-15038637960920",
  "tppId": "0e3bee29-8753-447c-b0da-1f7965558ec2-1706867960900",
  "deeplink": "https://example.com/deeplink/123e4567-e89b-12d3-a456-426614174000?userId=1234567890&session=abcdef",
  "pspDenomination": "Banca1",
  "originId": "XRUZ-GZAJ-ZUEJ-202407-W-1",
  "isPaymentEnabled": true
}
```

| Campo              | Tipo    | Descrizione                                                                          |
| ------------------ | ------- | ------------------------------------------------------------------------------------ |
| `retrievalId`      | string  | ID univoco del retrieval (50 caratteri)                                              |
| `tppId`            | string  | ID univoco del PSP sui sistemi PagoPA S.p.A.(50 caratteri)                           |
| `deeplink`         | string  | URL deep link per redirigere l'utente all'app bancaria del PSP (10-128 caratteri)    |
| `pspDenomination`  | string  | Nome del provider di pagamento mostrato come etichetta del pulsante (1-15 caratteri) |
| `originId`         | string  | ID del messaggio originale (24-36 caratteri)                                         |
| `isPaymentEnabled` | boolean | Indica se il PSP ha abilitato la funzionalità di pagamento                           |

***

### 3. Redirect al deep link (API pubblica)

**`GET /token`**

Endpoint pubblico (senza autenticazione) che riceve i parametri di un pagamento e reindirizza il browser dell'Utente verso il deep link dell'app bancaria del PSP tramite risposta HTTP `302 Redirect`.

**Parametri di query:**

| Parametro      | Tipo   | Obbligatorio | Descrizione                                                                         |
| -------------- | ------ | ------------ | ----------------------------------------------------------------------------------- |
| `retrievalId`  | string | Sì           | ID univoco del retrieval payload (esattamente 50 caratteri)                         |
| `fiscalCode`   | string | Sì           | Codice fiscale o P.IVA dell'amministrazione mittente (11-16 caratteri alfanumerici) |
| `noticeNumber` | string | Sì           | Identificatore univoco del pagamento (18-20 caratteri, formato specifico)           |

**Parametri di header:**

| Header            | Tipo   | Obbligatorio | Descrizione                                           |
| ----------------- | ------ | ------------ | ----------------------------------------------------- |
| `Accept-Language` | string | Sì           | Lingua della risposta (es. `it-IT`). Default: `it-IT` |

**Risposta di successo (`302 Found`):**

La risposta non ha body. Il reindirizzamento avviene tramite l'header `Location` che contiene il deep link generato verso l'app bancaria del PSP.

| Header     | Descrizione                                                                             |
| ---------- | --------------------------------------------------------------------------------------- |
| `Location` | URL del deep link verso l'app bancaria del PSP (max 2048 caratteri, formato URI valido) |

***

## Schemi dei Dati

### RetrievalRequestDTO

| Campo         | Tipo   | Obbligatorio | Descrizione                                                                         |
| ------------- | ------ | ------------ | ----------------------------------------------------------------------------------- |
| `agent`       | string | Sì           | Sistema operativo sorgente (es. `iOS`, `Android`). Pattern: `^[a-zA-Z0-9_-]{2,50}$` |
| `originId`    | string | Sì           | ID del messaggio originale. Pattern: `^[a-zA-Z0-9-]{24,36}$`                        |
| `linkVersion` | string | No           | Versione del deep link. Pattern: `^[a-zA-Z0-9_-]{1,50}$`                            |

### RetrievaIdResponseDTO

| Campo         | Tipo   | Obbligatorio | Descrizione                                         |
| ------------- | ------ | ------------ | --------------------------------------------------- |
| `retrievalId` | string | Sì           | ID univoco del retrieval (esattamente 50 caratteri) |

### RetrievalResponseDTO

| Campo              | Tipo    | Obbligatorio | Descrizione                                                   |
| ------------------ | ------- | ------------ | ------------------------------------------------------------- |
| `retrievalId`      | string  | Sì           | ID univoco del retrieval (esattamente 50 caratteri)           |
| `tppId`            | string  | No           | ID univoco del PSP (esattamente 50 caratteri)                 |
| `deeplink`         | string  | No           | URL deep link verso l'app bancaria del PSP (10-128 caratteri) |
| `pspDenomination`  | string  | No           | Nome del provider di pagamento (1-15 caratteri alfanumerici)  |
| `originId`         | string  | No           | ID del messaggio originale (24-36 caratteri)                  |
| `isPaymentEnabled` | boolean | No           | Indica se il PSP ha abilitato la funzionalità di pagamento    |

***

## Codici di Errore

Tutti gli endpoint restituiscono errori nel seguente formato:

```json
{
  "code": "TPP_NOT_FOUND",
  "message": "TPP does not exist or is not active"
}
```

| Codice HTTP | Codice Errore             | Descrizione                                 |
| ----------- | ------------------------- | ------------------------------------------- |
| 400         | `BAD_REQUEST`             | Richiesta malformata o parametri non validi |
| 401         | `AUTHENTICATION_FAILED`   | Autenticazione fallita o token non valido   |
| 404         | `TPP_NOT_FOUND`           | Il TPP non esiste o non è attivo            |
| 404         | `RETRIEVAL_NOT_FOUND`     | Il retrieval non esiste o non è attivo      |
| 429         | `TOO_MANY_REQUESTS`       | Superato il limite di richieste consentite  |
| 500         | `RETRIEVAL_GENERIC_ERROR` | Errore interno del server                   |

***

## Header di Rate Limiting

Ogni risposta include i seguenti header per il controllo del traffico:

| Header                        | Tipo    | Descrizione                                                            |
| ----------------------------- | ------- | ---------------------------------------------------------------------- |
| `RateLimit-Limit`             | integer | Numero massimo di richieste consentite nel periodo corrente (max 240)  |
| `RateLimit-Reset`             | integer | Secondi rimanenti al reset del periodo corrente (max 60)               |
| `Retry-After`                 | integer | Secondi da attendere prima di effettuare una nuova richiesta (max 240) |
| `Access-Control-Allow-Origin` | string  | Indica se la risposta può essere condivisa con l'origine richiedente   |
