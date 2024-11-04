---
description: Timeline 2.4
---

# API VERSIONE GA24Q4.A

### Nuove funzionalità GA24Q4.A

Con l'obiettivo di rendere al mittente più semplice il calcolo del rispetto degli SLA, è stata creata la versione **stream v2.4** che arricchisce i precedenti elementi di timeline con ulteriori dati.

#### Campi aggiunti

In ogni elemento di timeline sono stati aggiunti i seguenti campi:

* **`ingestionTimestamp`**: Istante in cui l'evento è registrato sulla timeline da SEND.
* **`eventTimestamp`**: Istante in cui avviene l'evento descritto in questo elemento di timeline.
* **`notificationSentAt`**: Istante del deposito della notifica da parte del mittente (dal quale vengono calcolate le SLA).

**NOTA**: il campo `timestamp` è rimasto per retrocompabilità ma è deprecato e non deve essere utilizzato.

Le modifiche agli elementi di timeline si applicano sulle seguenti API:

**Dettagli della notifica**\
&#x20;[\
**/delivery/v2.4/notifications/sent/{iun}**](https://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpagopa%2Fpn-delivery%2Fmain%2Fdocs%2Fopenapi%2Fapi-external-b2b-pa-bundle.yaml#/SenderReadB2B/retrieveSentNotificationV24)&#x20;

_**Gestione degli stream** di eventi che PN mette a disposizione_

[**delivery-progresses/v2.4/streams**](https://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpagopa%2Fpn-delivery%2Fmain%2Fdocs%2Fopenapi%2Fapi-external-b2b-pa-bundle.yaml#/Streams/createEventStreamV24) **Crea nuovo stream di eventi**

[**delivery-progresses/v2.4/streams**](https://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpagopa%2Fpn-delivery%2Fmain%2Fdocs%2Fopenapi%2Fapi-external-b2b-pa-bundle.yaml#/Streams/listEventStreamsV24) **Elenca stream di eventi**

**GET** [**delivery-progresses/v2.4/streams/{streamId}**](https://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpagopa%2Fpn-delivery%2Fmain%2Fdocs%2Fopenapi%2Fapi-external-b2b-pa-bundle.yaml#/Streams/retrieveEventStreamV24) **Leggi metadata dello stream**

**PUT** [**delivery-progresses/v2.4/streams/{streamId}**](https://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpagopa%2Fpn-delivery%2Fmain%2Fdocs%2Fopenapi%2Fapi-external-b2b-pa-bundle.yaml#/Streams/updateEventStreamV24) **Modifica di uno Stream**

**DELETE** [**delivery-progresses/v2.4/streams/{streamId}**](https://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpagopa%2Fpn-delivery%2Fmain%2Fdocs%2Fopenapi%2Fapi-external-b2b-pa-bundle.yaml#/Streams/removeEventStreamV24) **Elimina uno Stream**

[**delivery-progresses/v2.4/streams/{streamId}/action/disable**](https://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpagopa%2Fpn-delivery%2Fmain%2Fdocs%2Fopenapi%2Fapi-external-b2b-pa-bundle.yaml#/Streams/disableEventStreamV24) **Disabilita uno stream**

_**Lettura degli eventi dagli stream**_

[**/delivery-progresses/v2.4/streams/{streamId}/events**](https://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpagopa%2Fpn-delivery%2Fmain%2Fdocs%2Fopenapi%2Fapi-external-b2b-pa-bundle.yaml#/Events/consumeEventStreamV24) **Leggi progressi notifiche**



