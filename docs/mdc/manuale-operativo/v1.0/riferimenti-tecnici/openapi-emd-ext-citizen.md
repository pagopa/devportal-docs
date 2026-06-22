# API Reference - CITIZEN

**Versione:** 1.0.6\
**Titolo:** Gestione attivazione/disattivazione dell'Utente - PSP Integration\
**Contatto:** PagoPA S.p.A. - messaggidicortesia@assistenza.pagopa.it

***

## Panoramica

Questa API consente ai PSP di gestire **attivazione/disattivazione degli Utenti** all'interno del sistema EMD (Messaggi di Cortesia). Tutte le operazioni sono circoscritte all'identificativo del PSP chiamante (`tppId`), garantendo che ogni PSP possa operare esclusivamente sulle attivazioni/disattivazioni dell'Utente.

Le funzionalità principali sono:

* Salvataggio dell'avvenuta attivazione del Servizio nell'app bancaria di uno specifico PSP da parte di un Utente
* Lettura dello stato di attivazione di un Utente
* Aggiornamento (toggle) dello stato di attivazione
* Recupero dell'elenco degli Utenti che hanno attivato il Servizio nell'app bancaria di uno specifico PSP

***

## Ambienti

| Ambiente                   | URL Base                                              |
| -------------------------- | ----------------------------------------------------- |
| Development (DEV)          | `https://api-emd.dev.cstar.pagopa.it/emd/mil/citizen` |
| User Acceptance Test (UAT) | `https://api-emd.uat.cstar.pagopa.it/emd/mil/citizen` |
| Produzione (PROD)          | `https://api-emd.cstar.pagopa.it/emd/mil/citizen`     |

***

## Autenticazione

Tutte le operazioni richiedono autenticazione tramite **OAuth2 con flusso Client Credentials**. Il token JWT (Bearer) deve essere incluso nell'header `Authorization` di ogni richiesta.

***

## Endpoint

### 1. Salva lo stato di attivazione/disattivazione dell'Utente

**`POST /{fiscalCode}/{tppId}`**

Salva lo statos attivazione/disattivazione di un Utente identificato tramite il codice fiscale di un PSP specifico.

**Parametri di path:**

| Parametro    | Tipo   | Obbligatorio | Descrizione                                                               |
| ------------ | ------ | ------------ | ------------------------------------------------------------------------- |
| `fiscalCode` | string | Sì           | Codice fiscale o P.IVA del'Utente (11-16 caratteri alfanumerici)          |
| `tppId`      | string | Sì           | Identificativo univoco del PSP sui sistemi PagoPA S.p.A. (1-50 caratteri) |

**Parametri di header:**

| Header            | Tipo   | Obbligatorio | Descrizione                                           |
| ----------------- | ------ | ------------ | ----------------------------------------------------- |
| `Accept-Language` | string | Sì           | Lingua della risposta (es. `it-IT`). Default: `it-IT` |

**Risposta di successo (`200 OK`):**

```json
{
  "fiscalCode": "RSSMRO92S18L048H",
  "consents": {
    "0e3bee29-8753-447c-b0da-1f7965558ec2-1706867960900": {
      "tppState": true,
      "tcDate": "2024-11-01T11:25:40.695Z"
    }
  }
}
```

***

### 2. Recupera lo stato di attivazione/disattivazione dell'Utente

**`GET /{fiscalCode}/{tppId}`**

Restituisce il dettaglio dello stato di attivazione/disattivazione dell'Utente per un PSP specifico.

**Parametri di path:**

| Parametro    | Tipo   | Obbligatorio | Descrizione                                                               |
| ------------ | ------ | ------------ | ------------------------------------------------------------------------- |
| `fiscalCode` | string | Sì           | Codice fiscale o P.IVA dell'Utente (11-16 caratteri alfanumerici)         |
| `tppId`      | string | Sì           | Identificativo univoco del PSP sui sistemi PagoPA S.p.A. (1-50 caratteri) |

**Parametri di header:**

| Header            | Tipo   | Obbligatorio | Descrizione                                           |
| ----------------- | ------ | ------------ | ----------------------------------------------------- |
| `Accept-Language` | string | Sì           | Lingua della risposta (es. `it-IT`). Default: `it-IT` |

**Risposta di successo (`200 OK`):**

```json
{
  "fiscalCode": "RSSMRO92S18L048H",
  "consents": {
    "0e3bee29-8753-447c-b0da-1f7965558ec2-1706867960900": {
      "tppState": true,
      "tcDate": "2024-11-01T11:25:40.695Z"
    }
  }
}
```

***

### 3. Aggiorna lo stato di attivazione/disattivazione dell'Utente

**`PUT /{fiscalCode}/{tppId}`**

Inverte lo stato di attivazione/disattivazione dell'Utente: se `tppState` è `true` diventa `false` e viceversa.

**Parametri di path:**

| Parametro    | Tipo   | Obbligatorio | Descrizione                                                              |
| ------------ | ------ | ------------ | ------------------------------------------------------------------------ |
| `fiscalCode` | string | Sì           | Codice fiscale o P.IVA dell'Utente (11-16 caratteri alfanumerici)        |
| `tppId`      | string | Sì           | Identificativo univoco del PSP sui sistemi PagoPA S.p.A.(1-50 caratteri) |

**Parametri di header:**

| Header            | Tipo   | Obbligatorio | Descrizione                                           |
| ----------------- | ------ | ------------ | ----------------------------------------------------- |
| `Accept-Language` | string | Sì           | Lingua della risposta (es. `it-IT`). Default: `it-IT` |

**Risposta di successo (`200 OK`):**

```json
{
  "fiscalCode": "RSSMRO92S18L048H",
  "consents": {
    "0e3bee29-8753-447c-b0da-1f7965558ec2-1706867960900": {
      "tppState": false,
      "tcDate": "2024-11-06T11:25:40.695Z"
    }
  }
}
```

***

### 4. Recupera la lista degli Utenti che hanno attivato il Servizio

**`GET /{tppId}`**

Restituisce la lista di tutti gli Utenti che hanno attivato il Servizio per il PSP specificato.

**Parametri di path:**

| Parametro | Tipo   | Obbligatorio | Descrizione                                                              |
| --------- | ------ | ------------ | ------------------------------------------------------------------------ |
| `tppId`   | string | Sì           | Identificativo univoco del PSP sui sistemi PagoPA S.p.A.(1-50 caratteri) |

**Parametri di header:**

| Header            | Tipo   | Obbligatorio | Descrizione                                           |
| ----------------- | ------ | ------------ | ----------------------------------------------------- |
| `Accept-Language` | string | Sì           | Lingua della risposta (es. `it-IT`). Default: `it-IT` |

**Risposta di successo (`200 OK`):**

```json
[
  {
    "fiscalCode": "RSSMRO92S18L048H",
    "consents": {
      "0e3bee29-8753-447c-b0da-1f7965558ec2-1706867960900": {
        "tppState": true,
        "tcDate": "2024-11-06T11:25:40.695Z"
      }
    }
  },
  {
    "fiscalCode": "VNTCCN92S18L048H",
    "consents": {
      "0e3bee29-8753-447c-b0da-1f7965558ec2-1706867960900": {
        "tppState": true,
        "tcDate": "2024-11-12T11:27:23.699Z"
      }
    }
  }
]
```

***

## Schemi dei Dati

### CitizenConsentResponseDTO

Schema di risposta per le operazioni su singolo Utente.

| Campo        | Tipo   | Obbligatorio | Descrizione                                                                                                           |
| ------------ | ------ | ------------ | --------------------------------------------------------------------------------------------------------------------- |
| `fiscalCode` | string | Sì           | Codice fiscale dell'Utente (11-16 caratteri alfanumerici)                                                             |
| `consents`   | object | Sì           | Le chiavi sono i `tppId` (UUID + timestamp). Ogni valore contiene `tppState` (boolean) e `tcDate` (data-ora ISO 8601) |

### Struttura dell'oggetto per attivazione/disattivazioneo

| Campo      | Tipo               | Obbligatorio | Descrizione                                                                                         |
| ---------- | ------------------ | ------------ | --------------------------------------------------------------------------------------------------- |
| `tppState` | boolean            | Sì           | Stato di attivazione (`true` = attivo, `false` = disattivo)                                         |
| `tcDate`   | string (date-time) | Sì           | Data e ora dell'ultimo aggiornamento dello stato, formato ISO 8601 (es. `2024-11-01T11:25:40.695Z`) |

***

## Codici di Errore

Tutti gli endpoint restituiscono errori nel seguente formato:

```json
{
  "code": "CITIZEN_NOT_ONBOARDED",
  "message": "Citizen consent not inserted"
}
```

| Codice HTTP | Codice Errore                           | Descrizione                                 |
| ----------- | --------------------------------------- | ------------------------------------------- |
| 400         | `BAD_REQUEST`                           | Richiesta malformata o parametri non validi |
| 401         | `CITIZEN_CONSENT_AUTHENTICATION_FAILED` | Autenticazione fallita o token non valido   |
| 404         | `CITIZEN_NOT_ONBOARDED`                 | Utente non attivo                           |
| 429         | `TOO_MANY_REQUESTS`                     | Superato il limite di richieste consentite  |
| 500         | `GENERIC_ERROR`                         | Errore interno del server                   |

***

## Header di Rate Limiting

Ogni risposta include i seguenti header per il controllo del traffico:

| Header                        | Tipo    | Descrizione                                                            |
| ----------------------------- | ------- | ---------------------------------------------------------------------- |
| `RateLimit-Limit`             | integer | Numero massimo di richieste consentite nel periodo corrente (max 240)  |
| `RateLimit-Reset`             | integer | Secondi rimanenti al reset del periodo corrente (max 60)               |
| `Retry-After`                 | integer | Secondi da attendere prima di effettuare una nuova richiesta (max 240) |
| `Access-Control-Allow-Origin` | string  | Indica se la risposta può essere condivisa con l'origine richiedente   |
