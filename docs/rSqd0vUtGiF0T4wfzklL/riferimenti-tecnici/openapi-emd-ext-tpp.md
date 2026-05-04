# API Reference - TPP

**Versione:** 1.3.3\
**Titolo:** TPP Network Testing API - TPP Integration\
**Contatto:** PagoPA S.p.A. - messaggidicortesia@assistenza.pagopa.it

***

## Panoramica

Questa API è dedicata alla **verifica della connettività di rete** tra il TPP (Third Party Provider) e i sistemi PagoPA nell'ambito del progetto EMD (Messaggi di Cortesia). Il suo scopo principale è consentire ai TPP di validare, durante la fase di onboarding e nei collaudi successivi, che l'infrastruttura di rete sia correttamente configurata e che le chiamate verso PagoPA vengano ricevute con successo.

Questa API è tipicamente utilizzata:

* Durante la fase di **onboarding** del TPP, per verificare la raggiungibilità dell'ambiente target (DEV, UAT, PROD).
* Come **health check di rete** per diagnosticare eventuali problemi di connettività.

***

## Ambienti

| Ambiente                   | URL Base                                          |
| -------------------------- | ------------------------------------------------- |
| Development (DEV)          | `https://api-emd.dev.cstar.pagopa.it/emd/mdc/tpp` |
| User Acceptance Test (UAT) | `https://api-emd.uat.cstar.pagopa.it/emd/mdc/tpp` |
| Produzione (PROD)          | `https://api-emd.cstar.pagopa.it/emd/mdc/tpp`     |

***

## Autenticazione

L'endpoint richiede autenticazione tramite **OAuth2 con flusso Client Credentials**. Il token JWT (Bearer) deve essere incluso nell'header `Authorization` di ogni richiesta.

***

## Endpoint

### Verifica connessione di rete

**`GET /network/connection/{tppName}`**

Verifica che il TPP riesca a raggiungere i sistemi PagoPA. In caso di successo, il sistema restituisce un messaggio di conferma che include il nome del TPP passato come parametro.

**Parametri di path:**

| Parametro | Tipo   | Obbligatorio | Descrizione                                                                            |
| --------- | ------ | ------------ | -------------------------------------------------------------------------------------- |
| `tppName` | string | Sì           | Nome commerciale o identificativo dell'azienda TPP (1-70 caratteri). Esempio: `BancaX` |

**Parametri di header:**

| Header            | Tipo   | Obbligatorio | Descrizione                                           |
| ----------------- | ------ | ------------ | ----------------------------------------------------- |
| `Accept-Language` | string | Sì           | Lingua della risposta (es. `it-IT`). Default: `it-IT` |

**Risposta di successo (`200 OK`):**

```json
{
  "code": "PAGOPA_NETWORK_TEST",
  "message": "BancaX has reached our systems"
}
```

Il campo `message` conterrà il nome del TPP passato nella richiesta, confermando che la connessione è andata a buon fine.

***

## Schemi dei Dati

### TppNetworkConnectionResponse

Schema della risposta in caso di connessione verificata con successo.

| Campo     | Tipo          | Obbligatorio | Descrizione                                                           |
| --------- | ------------- | ------------ | --------------------------------------------------------------------- |
| `code`    | string (enum) | Sì           | Codice del messaggio. Valore fisso: `PAGOPA_NETWORK_TEST`             |
| `message` | string        | Sì           | Messaggio di conferma, include il nome del TPP. Massimo 250 caratteri |

### TPPErrorDTO

Schema di risposta in caso di errore.

| Campo     | Tipo          | Obbligatorio | Descrizione                                              |
| --------- | ------------- | ------------ | -------------------------------------------------------- |
| `code`    | string (enum) | Sì           | Codice identificativo dell'errore (vedi tabella sotto)   |
| `message` | string        | Sì           | Messaggio descrittivo dell'errore. Massimo 250 caratteri |

***

## Codici di Errore

In caso di errore, la risposta segue questo formato:

```json
{
  "code": "TPP_NOT_ONBOARDED",
  "message": "Tpp not onboarded"
}
```

| Codice HTTP | Codice Errore               | Descrizione                                                 |
| ----------- | --------------------------- | ----------------------------------------------------------- |
| 400         | `TPP_BAD_REQUEST`           | Richiesta malformata o parametri non validi                 |
| 401         | `TPP_AUTHENTICATION_FAILED` | Autenticazione fallita o token non valido                   |
| 404         | `TPP_NOT_ONBOARDED`         | Il TPP non è presente o non è stato sottoposto a onboarding |
| 429         | `TPP_TOO_MANY_REQUESTS`     | Superato il limite di richieste consentite nel periodo      |
| 500         | `TPP_GENERIC_ERROR`         | Errore interno del server                                   |

***

## Header di Rate Limiting

Ogni risposta include i seguenti header per il controllo del traffico:

| Header                        | Tipo    | Descrizione                                                            |
| ----------------------------- | ------- | ---------------------------------------------------------------------- |
| `RateLimit-Limit`             | integer | Numero massimo di richieste consentite nel periodo corrente (max 240)  |
| `RateLimit-Reset`             | integer | Secondi rimanenti al reset del periodo corrente (max 60)               |
| `Retry-After`                 | integer | Secondi da attendere prima di effettuare una nuova richiesta (max 240) |
| `Access-Control-Allow-Origin` | string  | Indica se la risposta può essere condivisa con l'origine richiedente   |

***

## Note Operative

Questo endpoint è particolarmente utile durante la fase di onboarding. Si raccomanda di eseguire questo test su ogni ambiente (DEV, UAT, PROD) prima di procedere con l'integrazione completa, in modo da verificare che le regole firewall, i certificati e le configurazioni di rete siano correttamente predisposte da entrambe le parti.
