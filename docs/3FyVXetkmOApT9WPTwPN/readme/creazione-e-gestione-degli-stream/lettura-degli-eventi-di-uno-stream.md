---
description: >-
  Questa pagina descrive la procedura operativa per la lattura e consumo di uno
  stream
---

# Lettura degli eventi di uno stream

I dati registrati dallo stream possono essere letti tramite l'API di consumo degli eventi registrati dallo stream. La lettura degli eventi avviene a blocchi di massimo 50 elementi. Per consumare gli elementi successivi a quelli di una lettura precedente è necessario specificare il **`lastEventId`** come descritto nei paragrafi sottostanti.

## Lettura degli eventi tramite comando CURL

### Prima interrogazione&#x20;

La prima interrogazione dello stream permetterà di ricevere i primi 50 eventi registrati dallo stream. E' importante lanciare la curl con il **--verbose** che permetterà di visualizzare nell'header della response il valore "_retry-after_" utile per la prossima chiamata.\
Lanciare il seguente comando:

```bash
curl --location 'https://<baseurlAmbiente>/delivery-progresses/v2.8/streams/<streamId>/events' \
--header 'Accept: application/json' \
--header 'x-api-key: <apiKey>' \
--header 'Authorization: Bearer <PDNDVoucher>' \
--verbose
```

**NOTA:** sostituire i seguenti:

* **`<baseurlAmbiente>`:** inserire la url dell'ambiente di riferimento, nel caso di UAT è il seguente: **https://api.uat.notifichedigitali.it**
* **`<apiKey>`:** inserire la apiKey dell'Ente di riferimento, precedentemente generata su PND
* **`<PDNDVoucher>`:** inserire inserire il Voucher generato su **PDND Interoperabilità,** assicurandosi che non sia scaduto
* **`<streamId>`:** inserire l'id dello stream che si vuole interrogare

Nella response di questo servizio, si otterrà il seguente payload che rappresenta tutti gli eventi:

```json
{
    "eventId": "00000000000000000000000000000000000001",
    "timestamp": "<timestamp>",
    "notificationRequestId": "<notificationRequestId>",
    "iun": "<iun>",
    "newStatus": "<newStatus>",
    "timelineEventCategory": "<timelineEventCategory>",
    "recipientIndex": "<recipientIndex>",
    "analogCost": <analogCost>,
    "channel": "<channel>",
    "legalfactIds": ["<legalfactIds>"],
    "validationErrors": <validationErrors>
},
[... altri eventi...]
{
    "eventId": "00000000000000000000000000000000000049",
    "timestamp": "<timestamp>",
    "notificationRequestId": "<notificationRequestId>",
    "iun": "<iun>",
    "newStatus": "<newStatus>",
    "timelineEventCategory": "<timelineEventCategory>",
    "recipientIndex": "<recipientIndex>",
    "analogCost": <analogCost>,
    "channel": "<channel>",
    "legalfactIds": ["<legalfactIds>"],
    "validationErrors": <validationErrors>
},
```

Gli eventi ottenuti dovranno essere memorizzati dal client poichè nelle successive chiamate i risultati ottenuti verranno consumati e cancellati dallo stream per lasciare il posto agli eventi successivi.

**NOTA:** nell'header della response ottenuta fare attenzione al campo "_retry-after_" che deve essere memorizzato per le successive chiamate:

* se`retryAfter = 0` è possibile richiamare immediatamente il servizio per ottenere gli eventi successivi se invece
* se`retryAfter` ≠ `0` è necessario attendere la quantità di tempo (espressa in millisecondi) del valore restituito, prima di richiamare di nuovo il servizio

E' quindi fondamentale rispettare la logica che viene rappresentata dal campo `retry-after` il quale fornisce l'indicazione al client su quando richiamare il servizio; pertanto si **sconsiglia** di creare dei processi di batch che effettuino la chiamata in un momento fisso e/o ripetuto nei giorni.

### Lettura dello stream successive alla prima

Dalle interrogazioni successive alla prima dello stream, si otterranno i 50 eventi successivi a quello del lastEventId (l'eventId dell'ultimo evento ottenuto nelle precedenti chiamate).\
Anche in questo caso è importante lanciare la curl con il **--verbose** che permetterà di visualizzare nell'header della response il valore "_retry-after_" utile per le chiamate successive.\
Lanciare il seguente comando:

```bash
curl --location 'https://<baseurlAmbiente>/delivery-progresses/v2.8/streams/<streamId>/events?lastEventId=<lastEventId>' \
--header 'Accept: application/json' \
--header 'x-api-key: <api-key>' \
--header 'Authorization: Bearer <PDNDVoucher>' \
--verbose
```

**NOTA:** sostituire i seguenti:

* **`<baseurlAmbiente>`:** inserire la url dell'ambiente di riferimento, nel caso di UAT è il seguente: **https://api.uat.notifichedigitali.it**
* **`<apiKey>`:** inserire la apiKey dell'Ente di riferimento, precedentemente generata su PND
* **`<PDNDVoucher>`:** inserire inserire il Voucher generato su **PDND Interoperabilità,** assicurandosi che non sia scaduto
* **`<streamId>`:** inserire l'id dello stream che si vuole interrogare
* **`<lastEventId>`:** inserire l'eventId dell'ultimo evento ottenuto nella precedente chiamata

Gli eventi ottenuti dovranno essere memorizzati dal client poichè nelle successive chiamate i risultati ottenuti verranno consumati e cancellati dallo stream per lasciare il posto agli eventi successivi.

**NOTA:** nella response ottenuta fare attenzione al campo "_retry-after_" che deve essere memorizzato per le successive chiamate:

* se`retryAfter = 0` è possibile richiamare immediatamente il servizio per ottenere gli eventi successivi se invece
* se`retryAfter` ≠ `0` è necessario attendere la quantità di tempo (espressa in millisecondi) del valore restituito, prima di richiamare di nuovo il servizio

E' quindi fondamentale rispettare la logica che viene rappresentata dal campo "_retry-after_" il quale fornisce l'indicazione al client su quando richiamare il servizio; pertanto si sconsiglia di creare dei processi di batch che effettuino la chiamata in un momento fisso e/o ripetuto nei giorni.

## Lettura degli eventi tramite comando CURL

### Prima lettura dello stream

La prima interrogazione dello stream permetterà di ricevere i primi 50 eventi registrati dallo stream.\
Aprire la scheda **Leggi progressi notifiche** e riprodurre questa configurazione:

<figure><img src="../../.gitbook/assets/image (58).png" alt=""><figcaption></figcaption></figure>

**NOTA:** sostituire i seguenti:

* **`<baseurl>`:** inserire la url dell'ambiente di riferimento, nel caso di UAT è il seguente: **https://api.uat.notifichedigitali.it**
* **`<streamId>`:** inserire l'id dello stream che si vuole interrogare

Nella response di questo servizio, si otterrà il seguente payload che rappresenta tutti gli eventi:

<figure><img src="../../.gitbook/assets/image (47).png" alt=""><figcaption></figcaption></figure>

Gli eventi ottenuti dovranno essere memorizzati dal client poichè nelle successive chiamate i risultati ottenuti verranno consumati e cancellati dallo stream per lasciare il posto agli eventi successivi.\
E' poi necessario selezionare il tab Headers della response per visualizzare i valori ottenuti:

<figure><img src="../../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>

**NOTA:** nell'header della response ottenuta fare attenzione al campo `retry-after` che deve essere memorizzato per le successive chiamate:

* se`retryAfter = 0` è possibile richiamare immediatamente il servizio per ottenere gli eventi successivi se invece
* se`retryAfter` ≠ `0` è necessario attendere la quantità di tempo (espressa in millisecondi) del valore restituito, prima di richiamare di nuovo il servizio

E' quindi fondamentale rispettare la logica che viene rappresentata dal campo "_retry-after_" il quale fornisce l'indicazione al client su quando richiamare il servizio; pertanto si sconsiglia di creare dei processi di batch che effettuino la chiamata in un momento fisso e/o ripetuto nei giorni.

### Letture dello stream successive alla prima

Dalle interrogazioni successive alla prima dello stream, si otterranno i 50 eventi successivi a quello del lastEventId (l'eventId dell'ultimo evento ottenuto nelle precedenti chiamate).\
Aprire la scheda **Leggi progressi notifiche** e riprodurre questa configurazione:

<figure><img src="../../.gitbook/assets/image (59).png" alt=""><figcaption></figcaption></figure>

**NOTA:** sostituire i seguenti:

* **`<baseurlAmbiente>`:** inserire la url dell'ambiente di riferimento, nel caso di UAT è il seguente: **https://api.uat.notifichedigitali.it**
* **`<streamId>`:** inserire l'id dello stream che si vuole interrogare
* **`<lastEventId>`:** inserire l'eventId dell'ultimo evento ottenuto nella precedente chiamata

Gli eventi ottenuti dovranno essere memorizzati dal client poichè nelle successive chiamate i risultati ottenuti verranno consumati e cancellati dallo stream per lasciare il posto agli eventi successivi.

**NOTA:** nella response ottenuta fare attenzione al campo "_retry-after_" che deve essere memorizzato per le successive chiamate:

* se`retryAfter = 0` è possibile richiamare immediatamente il servizio per ottenere gli eventi successivi se invece
* se`retryAfter` ≠ `0` è necessario attendere la quantità di tempo (espressa in millisecondi) del valore restituito, prima di richiamare di nuovo il servizio

E' quindi fondamentale rispettare la logica che viene rappresentata dal campo "_retry-after_" il quale fornisce l'indicazione al client su quando richiamare il servizio; pertanto si sconsiglia di creare dei processi di batch che effettuino la chiamata in un momento fisso e/o ripetuto nei giorni.
