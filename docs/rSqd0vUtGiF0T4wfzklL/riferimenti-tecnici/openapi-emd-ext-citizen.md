# API Reference - CITIZEN

**Versione:** 1.0.6\
**Titolo:** Gestione Consensi del Cittadino - TPP Integration\
**Contatto:** PagoPA S.p.A. - messaggidicortesia@assistenza.pagopa.it

***

## Panoramica

Questa API consente ai Third Party Provider (TPP) di gestire i **consensi dei cittadini** all'interno del sistema EMD (Messaggi di Cortesia). Tutte le operazioni sono circoscritte all'identificativo del TPP chiamante (`tppId`), garantendo che ogni TPP possa operare esclusivamente sui consensi dei cittadini che hanno autorizzato il proprio servizio.

Le funzionalità principali sono:

* Salvataggio del consenso di un cittadino verso un TPP specifico
* Lettura dello stato del consenso di un cittadino
* Aggiornamento (toggle) dello stato del consenso
* Recupero dell'elenco dei cittadini che hanno attivato il consenso per un determinato TPP

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

### 1. Salva il consenso del cittadino

**`POST /{fiscalCode}/{tppId}`**

Salva o aggiorna il consenso di un cittadino identificato dal codice fiscale verso un TPP specifico.

**Parametri di path:**

| Parametro    | Tipo   | Obbligatorio | Descrizione                                                         |
| ------------ | ------ | ------------ | ------------------------------------------------------------------- |
| `fiscalCode` | string | Sì           | Codice fiscale o P.IVA del cittadino (11-16 caratteri alfanumerici) |
| `tppId`      | string | Sì           | Identificativo univoco del TPP sui sistemi PagoPA (1-50 caratteri)  |

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

### 2. Recupera il consenso del cittadino

**`GET /{fiscalCode}/{tppId}`**

Restituisce il dettaglio dello stato del consenso di un cittadino per un TPP specifico.

**Parametri di path:**

| Parametro    | Tipo   | Obbligatorio | Descrizione                                                         |
| ------------ | ------ | ------------ | ------------------------------------------------------------------- |
| `fiscalCode` | string | Sì           | Codice fiscale o P.IVA del cittadino (11-16 caratteri alfanumerici) |
| `tppId`      | string | Sì           | Identificativo univoco del TPP sui sistemi PagoPA (1-50 caratteri)  |

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

### 3. Aggiorna lo stato del consenso (toggle)

**`PUT /{fiscalCode}/{tppId}`**

Inverte lo stato del consenso del cittadino: se `tppState` è `true` diventa `false` e viceversa.

**Parametri di path:**

| Parametro    | Tipo   | Obbligatorio | Descrizione                                                         |
| ------------ | ------ | ------------ | ------------------------------------------------------------------- |
| `fiscalCode` | string | Sì           | Codice fiscale o P.IVA del cittadino (11-16 caratteri alfanumerici) |
| `tppId`      | string | Sì           | Identificativo univoco del TPP sui sistemi PagoPA (1-50 caratteri)  |

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

### 4. Recupera la lista dei cittadini con consenso attivo

**`GET /{tppId}`**

Restituisce la lista di tutti i cittadini che hanno attivato il consenso per il TPP specificato.

**Parametri di path:**

| Parametro | Tipo   | Obbligatorio | Descrizione                                                        |
| --------- | ------ | ------------ | ------------------------------------------------------------------ |
| `tppId`   | string | Sì           | Identificativo univoco del TPP sui sistemi PagoPA (1-50 caratteri) |

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

Schema di risposta per le operazioni su singolo cittadino.

| Campo        | Tipo   | Obbligatorio | Descrizione                                                                                                                              |
| ------------ | ------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fiscalCode` | string | Sì           | Codice fiscale del cittadino (11-16 caratteri alfanumerici)                                                                              |
| `consents`   | object | Sì           | Mappa di consensi. Le chiavi sono i `tppId` (UUID + timestamp). Ogni valore contiene `tppState` (boolean) e `tcDate` (data-ora ISO 8601) |

### Struttura del singolo consenso

| Campo      | Tipo               | Obbligatorio | Descrizione                                                                                          |
| ---------- | ------------------ | ------------ | ---------------------------------------------------------------------------------------------------- |
| `tppState` | boolean            | Sì           | Stato attuale del consenso (`true` = attivo, `false` = disattivo)                                    |
| `tcDate`   | string (date-time) | Sì           | Data e ora dell'ultimo aggiornamento del consenso, formato ISO 8601 (es. `2024-11-01T11:25:40.695Z`) |

***

## Codici di Errore

Tutti gli endpoint restituiscono errori nel seguente formato:

```json
{
  "code": "CITIZEN_NOT_ONBOARDED",
  "message": "Citizen consent not inserted"
}
```

| Codice HTTP | Codice Errore                           | Descrizione                                   |
| ----------- | --------------------------------------- | --------------------------------------------- |
| 400         | `BAD_REQUEST`                           | Richiesta malformata o parametri non validi   |
| 401         | `CITIZEN_CONSENT_AUTHENTICATION_FAILED` | Autenticazione fallita o token non valido     |
| 404         | `CITIZEN_NOT_ONBOARDED`                 | Il consenso del cittadino non è stato trovato |
| 429         | `TOO_MANY_REQUESTS`                     | Superato il limite di richieste consentite    |
| 500         | `GENERIC_ERROR`                         | Errore interno del server                     |

***

## Header di Rate Limiting

Ogni risposta include i seguenti header per il controllo del traffico:

| Header                        | Tipo    | Descrizione                                                            |
| ----------------------------- | ------- | ---------------------------------------------------------------------- |
| `RateLimit-Limit`             | integer | Numero massimo di richieste consentite nel periodo corrente (max 240)  |
| `RateLimit-Reset`             | integer | Secondi rimanenti al reset del periodo corrente (max 60)               |
| `Retry-After`                 | integer | Secondi da attendere prima di effettuare una nuova richiesta (max 240) |
| `Access-Control-Allow-Origin` | string  | Indica se la risposta può essere condivisa con l'origine richiedente   |
