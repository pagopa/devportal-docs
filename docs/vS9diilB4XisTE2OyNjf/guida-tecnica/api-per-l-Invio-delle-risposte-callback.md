# API per l'invio delle risposte (Callback)

Questa sezione descrive l'API che un **Service Provider del Debitore** deve utilizzare per inviare risposte asincrone al mittente di una richiesta (ovvero, la piattaforma PagoPA). Questo meccanismo è fondamentale per comunicare l'esito di un'operazione a seguito di un'interazione dell'utente finale o di un processo interno.

L'endpoint di callback è unico e viene utilizzato per inoltrare diversi tipi di risposte, come l'accettazione/rifiuto di una SRTP o la conferma di una cancellazione.

## **URL della Chiamata**

L'URL a cui inviare la notifica di callback **non è statico**. Deve essere recuperato dinamicamente dal campo `callbackUrl` presente nel corpo della richiesta SRTP (`SepaRequestToPayRequestResource`) originale che hai ricevuto. È tua responsabilità storicizzare questo URL e utilizzarlo per inviare la risposta corrispondente.

## Endpoint

### **Inviare una risposta asincrona**

```http
POST /send
```

Questa operazione viene utilizzata dal Service Provider del Debitore per inoltrare una risposta asincrona al Service Provider del Creditore attraverso l'URL di callback.

**Corpo della Richiesta**&#x20;

Il corpo della richiesta deve contenere un oggetto `AsynchronousSepaRequestToPayResponseResource`, che incapsula il messaggio ISO 20022 appropriato per la notifica che si sta inviando. Ad esempio:

* Per una **risposta di stato**, il wrapper conterrà un messaggio `pain.014`.
* Per una **conferma di cancellazione**, il wrapper conterrà un messaggio `camt.029`.

La struttura dettagliata dei messaggi da inserire è descritta nel capitolo **Riferimento ai Messaggi (Dataset ISO 20022)**.

**Risposte**

* **`200 OK`**: La notifica di callback è stata ricevuta e accettata correttamente dal server del mittente.
* **`400 Bad Request`**: La richiesta è malformata.
* **`403 Forbidden`**: Non sei autorizzato a effettuare l'operazione.
