---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/UdBZLK0IXWx2yqcEv6ks/riferimenti-tecnici/authentication-security
---

# Gestione della Sicurezza e Autenticazione

Il flusso **Client Credentials** è il metodo standard per l'autenticazione Machine-to-Machine (M2M). È ideale per servizi backend che devono consumare le nostre API in modo sicuro senza l'intervento di un utente finale.

***

### 1. Requisiti Iniziali

Per iniziare l'integrazione, recupera le tue credenziali dal portale Area Riservata:

* **`client_id`**: L'identificativo pubblico della tua applicazione.
* **`client_secret`**: La tua chiave segreta (trattala come una password).

### 2. Ottenere l'Access Token

Invia una richiesta `POST` all'endpoint di autorizzazione per scambiare le credenziali con un token temporaneo.

**Endpoint:** `https://api-mcshared.dev.cstar.pagopa.it/auth/token`

#### Esempio di richiesta (cURL)

```bash
curl --location 'https://api-mcshared.dev.cstar.pagopa.it/auth/token' 
--header 'Content-Type: application/x-www-form-urlencoded' 
--data-urlencode 'client_secret=190xxxxxxxxxxxxx' 
--data-urlencode 'client_id=ceeexxxxxxxxxx' 
--data-urlencode 'grant_type=client_credentials'
```

#### Risposta del server

Riceverai un JSON contenente il token Bearer:

```json
{
  "access_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### 3. Utilizzo del Token

Inserisci l' access\_token nell'header HTTP Authorization per ogni chiamata verso le nostre API.

#### Esempio di chiamata API:

```http
GET /v1/risorsa HTTP/1.1
Host: api.tuodominio.com
Authorization: Bearer eyJhbGciOi...
```

### 4. Best Practice di Sicurezza

* Gestione del Token: Non richiedere un nuovo token per ogni singola chiamata. Memorizzalo e riutilizzalo fino alla sua scadenza (expires\_in).
* Protezione del Secret: Non esporre mai il client\_secret in codice sorgente pubblico o in applicazioni lato client (browser/mobile).
* HTTPS: Tutte le chiamate devono essere effettuate esclusivamente su protocollo TLS 1.2 o superiore.

### 5. Risorse Correlate

Il sito [oauth.net](https://oauth.net/2/) è la risorsa comunitaria di riferimento che raccoglie tutte le specifiche, guide e librerie relative a OAuth 2.0.
