# API per la ricezione delle richieste SRTP

Questa sezione descrive le API che un **Service Provider del Debitore** deve implementare per agire come **API server** all'interno dell'ecosistema SRTP. Le specifiche sono basate sullo standard ufficiale dell'European Payments Council  [EPC133-22 v3.1](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2023-06/EPC137-22%20v3.1%20-%20SRTP%20related%20API%20Specifications%20-%20Preliminary%20Information.pdf)

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

**Corpo della Richiesta** \
Il corpo della richiesta conterrà un oggetto `SepaRequestToPayRequestResource`, che incapsula il messaggio `pain.013.001.10` con tutti i dettagli della richiesta. È fondamentale che il tuo endpoint salvi l'`Idempotency-key` per prevenire doppie elaborazioni. La struttura dettagliata dei messaggi è descritta nel capitolo **Riferimento ai Messaggi (Dataset ISO 20022)**.

**Risposte**

* **`201 Created`**: La risposta da inviare se la richiesta è stata accettata e processata correttamente. L'header `Location` deve contenere l'URL della risorsa appena creata.
* **`400 Bad Request`**: La risposta da inviare se la richiesta è malformata o non valida secondo le regole dello schema SRTP. Il corpo della risposta deve contenere un oggetto `SepaRequestToPayErrorResponseResource_DS04b`.
* **`409 Conflict`**: La risposta da inviare se la richiesta è un duplicato (stessa `Idempotency-key` e stesso payload) di una richiesta già processata. L'header `Location` deve contenere l'URL della risorsa originale.

### **Fornire i dettagli di una richiesta di pagamento**

```http
GET /sepa-request-to-pay-requests/{sepaRequestToPayRequestResourceId}
```

Questo endpoint permette al mittente di recuperare i dettagli di una SRTP inviata in precedenza. Il tuo servizio deve implementarlo per restituire la risorsa richiesta.

**Parametri Path**

* `sepaRequestToPayRequestResourceId` (string, obbligatorio): L'identificativo univoco della risorsa SRTP da recuperare.

**Risposte**

* **`200 OK`**: La risposta da inviare se la risorsa viene trovata. Il corpo deve contenere l'oggetto `SepaRequestToPayRequestResource` originale.
* **`404 Not Found`**: La risposta da inviare se la risorsa con l'ID specificato non esiste.

### **Ricevere una richiesta di cancellazione**

```http
POST /sepa-request-to-pay-requests/{sepaRequestToPayRequestResourceId}/cancellation-requests
```

Questo endpoint viene invocato da PagoPA per richiedere l'annullamento di una SRTP. Il tuo servizio deve ricevere la richiesta, processarla e aggiornare lo stato della SRTP nei tuoi sistemi.

**Corpo della Richiesta** Il corpo della richiesta conterrà un oggetto `SepaRequestToPayCancellationRequestResource`, che incapsula il messaggio `camt.055.001.08`. La struttura dettagliata è descritta nel capitolo **Riferimento ai Messaggi (Dataset ISO 20022)**.

**Risposte**

* **`201 Created`**: La risposta da inviare se la richiesta di cancellazione è stata accettata. A seguito di questa operazione, il tuo servizio dovrà inviare la conferma asincrona tramite callback.
* **`422 Unprocessable Entity`**: La risposta da inviare se non è possibile annullare la SRTP (es. perché già in uno stato finale).
