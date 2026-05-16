---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/ehvH7YE5R9GDHFFfnCv1/guida-tecnica/api-per-la-ricezione-delle-richieste-srtp
---

# API per la ricezione delle richieste SRTP

Questa sezione descrive le API che un **Service Provider del Debitore** deve implementare per agire come **API server** all'interno dell'ecosistema SRTP. Le specifiche sono basate sullo standard ufficiale dell'European Payments Council [EPC133-22](https://www.europeanpaymentscouncil.eu/document-library/guidance-documents/default-srtp-related-api-specifications)

L'interfaccia definisce le operazioni per ricevere nuove richieste di pagamento, permetterne il recupero e gestirne la cancellazione.

## **Autenticazione e Header**

La sicurezza delle comunicazioni è garantita a livello infrastrutturale. Tutte le chiamate ricevute includeranno i seguenti header, che devono essere gestiti come da standard EPC:

* `X-Request-ID`: Un identificativo per correlare richiesta e risposta.
* `Idempotency-key`: Una chiave univoca per le operazioni `POST` per gestire in sicurezza eventuali tentativi di invio multiplo della stessa richiesta.

## Endpoints da implementare

### **Ricevere una nuova richiesta di pagamento**

```http
POST /sepa-request-to-pay-requests
```

Questo è l'endpoint principale attraverso cui il tuo servizio riceverà le nuove richieste di pagamento (SRTP) inviate da PagoPA (in qualità di SP del Creditore).

**Corpo della Richiesta**\
Il corpo della richiesta conterrà un oggetto `SepaRequestToPayRequestResource`, che incapsula il messaggio `pain.013.001.10` con tutti i dettagli della richiesta. L'endpoint deve salvare l'`Idempotency-key` per prevenire doppie elaborazioni. La struttura dettagliata dei messaggi è descritta nel capitolo [**Riferimento ai Messaggi (Dataset ISO 20022)**.](riferimento-ai-messaggi-dataset-iso-20022.md)

**Risposte**

* **`201 Created`**: La risposta da inviare se la richiesta è stata accettata e processata correttamente. L'header `Location` deve contenere l'URL della risorsa appena creata.
* **`400 Bad Request`**: La risposta da inviare se la richiesta è malformata o non valida secondo le regole dello schema SRTP. Il corpo della risposta deve contenere un oggetto `SepaRequestToPayErrorResponseResource_DS04b`.
* **`401 Unauthorized`**: Le credenziali del chiamante non sono valide o sufficienti per l'operazione.
* **`406 Not Acceptable`**: Il server non può produrre una risposta conforme agli header `Accept` inviati dal client.
* **`409 Conflict`**: La risposta da inviare se la richiesta è un duplicato (stessa `Idempotency-key` e stesso payload) di una richiesta già processata. L'header `Location` deve contenere l'URL della risorsa originale.
* **`415 Unsupported Media Type`**: Il `Content-Type` della richiesta (es. `application/json`) non è supportato dall'endpoint.
* **`422 Unprocessable Entity`**: La richiesta è formalmente corretta ma non può essere processata per motivi di business (es. `Idempotency-key` riutilizzata con un payload diverso).
* **`429 Too Many Requests`**: Il client ha superato il numero massimo di richieste consentite in un dato periodo (rate limiting).

### **Ricevere una richiesta di cancellazione**

```http
POST /sepa-request-to-pay-requests/{sepaRequestToPayRequestResourceId}/cancellation-requests
```

Questo endpoint viene invocato da PagoPA per richiedere l'annullamento di una SRTP. L'aderente deve ricevere la richiesta, processarla e aggiornare lo stato della SRTP nei tuoi sistemi.

**Corpo della Richiesta:** Il corpo della richiesta conterrà un oggetto `SepaRequestToPayCancellationRequestResource`, che incapsula il messaggio `camt.055.001.08`. La struttura dettagliata è descritta nel capitolo **Riferimento ai Messaggi (Dataset ISO 20022)**.

**Risposte**

* **`201 Created`**: La risposta da inviare se la richiesta di cancellazione è stata accettata. A seguito di questa operazione, il servizio dovrà inviare la conferma asincrona tramite callback.
* **`422 Unprocessable Entity`**: La risposta da inviare se non è possibile annullare la SRTP (es. perché già in uno stato finale).
