# API Gestione Posizioni Debitorie (GPD)

## Gestione Posizioni Debitorie

Versione: **0.11.59**\
Ambiente di test: `https://api.uat.platform.pagopa.it/gpd/debt-positions-service/v1/`\
Ambiente di produzione: `https://api.platform.pagopa.it/gpd/debt-positions-service/v1/`

### Descrizione

API REST per la gestione delle posizioni debitorie (creazione, aggiornamento, pubblicazione, annullamento e consultazione).

***

### Autenticazione

Queste API richiedono:

* **API Key**: da includere nell'header `Ocp-Apim-Subscription-Key`
* **JWT Bearer Token**: da includere nell'header `Authorization`

***

### Endpoints&#x20;

#### 1. `GET /organizations/{organizationfiscalcode}/debtpositions`

Restituisce l'elenco delle posizioni debitorie relative a un'organizzazione.

**Query parametri principali:**

* `limit`: max 50 (default 10)
* `page`: numero di pagina (default 0)
* `due_date_from`, `due_date_to`
* `payment_date_from`, `payment_date_to`
* `status`: stato posizione (`DRAFT`, `PAID`, ecc.)
* `orderby`, `ordering`

**Risposte:**

* `200 OK`: lista posizioni
* `400`, `401`, `429`, `500`

***

#### 2. `POST /organizations/{organizationfiscalcode}/debtpositions`

Crea una nuova posizione debitoria.\
Parametri:

* `toPublish` (booleano, default `false`)

**Body:** oggetto `PaymentPositionModel`

**Risposte:** `201 Created`, `400`, `401`, `409`, `500`

***

#### 3. `GET /organizations/{organizationfiscalcode}/debtpositions/{iupd}`

Dettaglio di una specifica posizione.\
**Risposte:** `200 OK`, `404`, `401`, `500`

***

#### 4. `PUT /organizations/{organizationfiscalcode}/debtpositions/{iupd}`

Aggiorna una posizione esistente.\
**Parametri:** `toPublish` (opzionale)\
**Body:** oggetto `PaymentPositionModel`\
**Risposte:** `200 OK`, `400`, `404`, `409`, `500`

***

#### 5. `DELETE /organizations/{organizationfiscalcode}/debtpositions/{iupd}`

Elimina una posizione.\
**Risposte:** `200 OK`, `404`, `409`, `500`

***

#### 6. `POST /organizations/{organizationfiscalcode}/debtpositions/{iupd}/publish`

Pubblica una posizione.\
**Risposte:** `200 OK`, `404`, `409`, `500`

***

#### 7. `POST /organizations/{organizationfiscalcode}/debtpositions/{iupd}/invalidate`

Annulla una posizione.\
**Risposte:** `200 OK`, `404`, `409`, `500`

***

#### 8. `GET /info`

Verifica stato applicazione (`health check`).\
**Risposte:** `200 OK`, `401`, `403`, `500`

***

### Schema Principale: PaymentPositionModel

Campi richiesti:

* `iupd`, `type`, `companyName`, `fiscalCode`, `fullName`, `switchToExpired`

Include:

* Dati anagrafici
* Stato (`DRAFT`, `PAID`, `INVALID`, ecc.)
* Opzioni di pagamento (array `paymentOption`)
* Ogni `paymentOption` include: `amount`, `iuv`, `dueDate`, `transfer`, `metadata`, ecc.

***

### Contatti e Termini

Per maggiori dettagli: [https://www.pagopa.gov.it](https://www.pagopa.gov.it)
