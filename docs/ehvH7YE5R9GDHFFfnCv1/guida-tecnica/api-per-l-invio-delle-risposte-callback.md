---
argomenti_correlati:
- /guida-tecnica/riferimento-messaggi-iso-20022
funzione: guida-tecnica
livello: intermedio
prodotto:
  nome: PagoPA SRTP
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': WebAPI
  description: Descrizione tecnica dell'API che un Service Provider del Debitore deve
    utilizzare per inviare risposte asincrone alla piattaforma PagoPA, recuperando
    dinamicamente l'URL di notifica dal campo callbackUrl della richiesta originale.
  isPartOf:
    '@type': SoftwareApplication
    name: PagoPA SRTP
    version: v1.0.0
  keywords:
  - callback
  - webhook
  - asincrono
  - SRTP
  - ISO 20022
  - pain.014
  name: API per l'invio delle risposte (Callback)
  potentialAction:
    '@type': Action
    expects:
      '@type': Thing
      description: Wrapper contenente un messaggio ISO 20022, ad esempio un pain.014
        per una risposta di stato.
      name: AsynchronousSepaRequestToPayResponseResource
    name: Inviare una risposta asincrona
    target:
      '@type': EntryPoint
      encodingType: application/json
      httpMethod: POST
      urlTemplate: Dinamico (dal campo callbackUrl della richiesta SRTP)
  provider:
    '@type': Organization
    name: PagoPA S.p.A.
status: pubblicato
tecnologia:
- API REST
- HTTP
- ISO 20022
utente:
  ruolo: erogatore
  tag:
  - callback
  - api
  - asincrono
  - SRTP
  - notifiche
  tipo_ente: partner_tecnologico
---

# API per l'invio delle risposte (Callback)

Questa sezione descrive l'API che un **Service Provider del Debitore** deve utilizzare per inviare risposte asincrone al mittente di una richiesta (ovvero, la piattaforma PagoPA). Questo meccanismo è fondamentale per comunicare l'esito di un'operazione a seguito di un'interazione dell'utente finale o di un processo interno.

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

La struttura dettagliata dei messaggi da inserire è descritta nel capitolo **Riferimento ai Messaggi (Dataset ISO 20022)**.

**Risposte**

* **`200 OK`**: La notifica di callback è stata ricevuta e accettata correttamente dal server del mittente.
* **`400 Bad Request`**: La richiesta è malformata.
* **`403 Forbidden`**: Non sei autorizzato a effettuare l'operazione.