---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/UdBZLK0IXWx2yqcEv6ks/riferimenti-tecnici/openapi-emd-ext-message
---

# API Reference - MESSAGE

**Versione:** 1.3.1\
**Titolo:** Specifiche di Integrazione Messaggi di Cortesia (Server-to-Server) - TPP Integration\
**Contatto:** PagoPA S.p.A. - messaggidicortesia@assistenza.pagopa.it

***

## Panoramica

Questo documento descrive le specifiche tecniche per l'integrazione **server-to-server** con il sistema **Messaggi di Cortesia** (anche denominato EMD). A differenza delle altre API EMD in cui è il TPP a chiamare PagoPA, in questo caso è **PagoPA che chiama il TPP**. Il sistema EMD invia attivamente le notifiche di cortesia all'endpoint esposto dal TPP ogni volta che un messaggio deve essere recapitato a un cittadino.

Per abilitare la ricezione dei messaggi, il TPP deve esporre due endpoint:

1. **Endpoint di Autenticazione (OAuth2):** utilizzato da EMD per ottenere un token di accesso prima di inviare il messaggio.
2. **Endpoint di Ricezione Messaggi (Webhook):** il destinatario effettivo del payload del messaggio di cortesia.

***

## Flusso di Integrazione

Il flusso di una notifica in arrivo è il seguente:

1. EMD chiama l'endpoint OAuth2 del TPP per ottenere un `access_token`.
2. EMD usa il token ricevuto come `Bearer` nell'header `Authorization`.
3. EMD esegue una chiamata `POST` all'endpoint webhook del TPP, includendo il payload del messaggio.
4. Il TPP risponde con `200 OK` per confermare la ricezione e la presa in carico del Messaggio
5. Il TPP risponde con `4xx KO` (es: il messaggio non è conforme alle regole definite)

***

## 1. Configurazione dell'Autenticazione

Durante la fase di onboarding, vengono concordati e configurati con il team EMD i seguenti parametri:

* **URL dell'endpoint OAuth2:** supporta placeholder dinamici (es. `https://login.microsoftonline.com/{tenantId}/oauth2/token`).
* **Parametri del body:** le credenziali da inviare (es. `client_id`, `client_secret`, `scope`, `grant_type`) sono concordate in fase di onboarding e possono includere parametri aggiuntivi.
* **Formato della richiesta:** il body viene inviato come `application/x-www-form-urlencoded`, che è lo standard de-facto per OAuth2.
* **Formato della risposta:** il TPP deve restituire un JSON conforme allo standard OAuth2 contenente obbligatoriamente il campo `access_token`.

> **Importante:** Attualmente il servizio supporta esclusivamente il protocollo **OAuth2**.

***

## 2. Endpoint di Autenticazione

**`POST /{auth_endpoint}`**

EMD chiama questo endpoint per ottenere il token di accesso. Il path completo è la concatenazione tra il `auth_base_url` e `auth_endpoint`, entrambi configurati in fase di onboarding.

**Parametri di path:**

| Parametro       | Tipo   | Obbligatorio | Descrizione                                                                            |
| --------------- | ------ | ------------ | -------------------------------------------------------------------------------------- |
| `auth_endpoint` | string | Sì           | Parte finale del percorso dell'endpoint (es. `token`). Non includere lo slash iniziale |

**Body della richiesta (`application/x-www-form-urlencoded`):**

Il body è dinamico e contiene le credenziali concordate in fase di onboarding. Un esempio tipico:

```
client_id=CLIENT_123&client_secret=SECRET_XYZ&grant_type=client_credentials
```

I parametri sono liberi (`additionalProperties: string`), ma nella maggior parte dei casi includeranno `client_id`, `client_secret` e `grant_type`.

**Risposta di successo (`200 OK`):**

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

| Campo          | Tipo    | Obbligatorio | Descrizione                                         |
| -------------- | ------- | ------------ | --------------------------------------------------- |
| `access_token` | string  | Sì           | Token di accesso da usare nelle successive chiamate |
| `token_type`   | string  | No           | Tipo di token, solitamente `Bearer`                 |
| `expires_in`   | integer | No           | Durata in secondi della validità del token          |

***

## 3. Endpoint di Ricezione Messaggi (Webhook)

**`POST /{message_endpoint}`**

EMD chiama questo endpoint per recapitare il messaggio di cortesia al TPP. La chiamata è autenticata tramite il token ottenuto al punto precedente, passato nell'header `Authorization: Bearer <access_token>`.

**Parametri di path:**

| Parametro          | Tipo   | Obbligatorio | Descrizione                                                                                     |
| ------------------ | ------ | ------------ | ----------------------------------------------------------------------------------------------- |
| `message_endpoint` | string | Sì           | Parte finale del percorso del webhook (es. `notifiche/ricevi`). Non includere lo slash iniziale |

**Autenticazione:** Bearer token nell'header `Authorization`.

**Body della richiesta (`application/json`):**

```json
{
  "messageId": "8a32fa8a-5036-4b39-8f2e-47d3a6d23f9e",
  "recipientId": "RSSMRA85T10A562S",
  "triggerDateTime": "2024-06-21T12:34:56",
  "triggerDateTimeUTC": "2024-06-21T12:34:56.000Z",
  "senderDescription": "Comune di Pontecagnano",
  "messageUrl": "https://cittadini.dev.notifichedigitali.it",
  "originId": "XRUZ-GZAJ-ZUEJ-202407-W-1",
  "title": "Nuovo messaggio!",
  "content": "Ciao, hai ricevuto una notifica SEND...",
  "analogSchedulingDate": "2024-06-26T12:34:56.000Z",
  "workflowType": "ANALOG",
  "associatedPayment": true
}
```

**Risposta attesa:**

Il TPP deve rispondere con HTTP `200 OK`. Il contenuto del body di risposta non viene elaborato da EMD.

***

## Schema del Payload di Notifica (NotificationPayload)

| Campo                  | Tipo               | Obbligatorio | Descrizione                                                                                                                           |
| ---------------------- | ------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `messageId`            | string             | Sì           | ID univoco del messaggio (1-100 caratteri). Esempio: `8a32fa8a-5036-4b39-8f2e-47d3a6d23f9e`                                           |
| `recipientId`          | string             | Sì           | Codice Fiscale del destinatario (1-100 caratteri). Esempio: `RSSMRA85T10A562S`                                                        |
| `triggerDateTime`      | string (date-time) | Sì           | Data e ora locale in cui è stato richiesto l'invio. Esempio: `2024-06-21T12:34:56`                                                    |
| `triggerDateTimeUTC`   | string (date-time) | Sì           | Data e ora UTC in cui è stato richiesto l'invio, formato ISO 8601. Esempio: `2025-10-06T12:00:40.695Z`                                |
| `senderDescription`    | string             | Sì           | Descrizione del mittente del messaggio, supporta UTF-8 (1-250 caratteri). Esempio: `Comune di Pontecagnano`                           |
| `messageUrl`           | string (URI)       | Sì           | URL per accedere al messaggio originale su piattaforma SEND (1-2048 caratteri). Esempio: `https://cittadini.dev.notifichedigitali.it` |
| `originId`             | string             | Sì           | ID del messaggio originale sulla piattaforma sorgente (1-100 caratteri). Esempio: `XRUZ-GZAJ-ZUEJ-202407-W-1`                         |
| `title`                | string             | Sì           | Titolo del messaggio, supporta UTF-8 (1-250 caratteri). Esempio: `Nuovo messaggio!`                                                   |
| `content`              | string             | Sì           | Contenuto del messaggio in formato **Markdown** (1-100.000 caratteri). Il contenuto varia in base al `workflowType`                   |
| `workflowType`         | string (enum)      | Sì           | Tipo di notifica. Valori possibili: `ANALOG` oppure `DIGITAL`                                                                         |
| `associatedPayment`    | boolean            | No           | Indica se alla notifica è associato un pagamento                                                                                      |
| `analogSchedulingDate` | string (date-time) | Condizionale | Data di scadenza per la deadline di 5 giorni (ISO 8601). **Obbligatorio solo quando `workflowType` è `ANALOG`**                       |

***

## Differenza tra workflowType ANALOG e DIGITAL

Il campo `workflowType` determina il tipo di notifica ricevuta e di conseguenza il contenuto del campo `content`:

**ANALOG:** la notifica prevede una scadenza entro la quale il cittadino deve accedere al messaggio per evitare la consegna tramite raccomandata postale. Il campo `analogSchedulingDate` è obbligatorio e indica la data limite. Il campo `content` include informazioni sulla scadenza.

**DIGITAL:** la notifica è una comunicazione digitale standard senza scadenza per la consegna fisica. Include informazioni sulla consegna legale digitale. Il campo `analogSchedulingDate` non è presente.

***

## Codici di Risposta

| Codice HTTP | Descrizione                                                                          |
| ----------- | ------------------------------------------------------------------------------------ |
| 200         | Notifica ricevuta correttamente. Il payload di risposta non viene considerato da EMD |
| 401         | Token mancante o non valido nell'header Authorization                                |

***

## Schemi di Autenticazione

### AuthRequestDynamic

Schema del body per la richiesta di autenticazione. Accetta proprietà libere di tipo stringa (`additionalProperties: string`).

Esempio tipico:

| Campo           | Tipo   | Descrizione                                            |
| --------------- | ------ | ------------------------------------------------------ |
| `client_id`     | string | Identificativo del client OAuth2                       |
| `client_secret` | string | Segreto del client OAuth2                              |
| `grant_type`    | string | Tipo di grant OAuth2, solitamente `client_credentials` |

### TokenResponse

| Campo          | Tipo            | Obbligatorio | Descrizione                                  |
| -------------- | --------------- | ------------ | -------------------------------------------- |
| `access_token` | string          | Sì           | Token JWT da usare nelle chiamate successive |
| `token_type`   | string          | No           | Tipo di token (es. `Bearer`)                 |
| `expires_in`   | integer (int64) | No           | Secondi di validità del token                |
