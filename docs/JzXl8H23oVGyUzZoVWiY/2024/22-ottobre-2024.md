---
description: >-
  SEND GA 2.3: Annullamento della notifica e visualizzazione cause
  irreperibilità totale
livello: amatoriale
tipologia: guida tecnica 
---

# 22 Ottobre 2024

La versione GA 2.3 di SEND aggiunge la funzionalità di annullamento della notifica da parte del mittente e la visualizzazione delle cause che conducono all'irreperibilità totale. Definizione OpenAPI Swagger



`Nuove Funzionalità`

### Annullamento della notifica&#x20;

#### A quale esigenza rispondiamo?&#x20;

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&#x20;

#### Quale soluzione adottiamo?&#x20;

L'annullamento della notifica può essere effettuata da via B2B o via portale mittente. Per supportare questa funzionalità sono state effettuati i seguenti interventi sulla API:&#x20;

* Aggiunta l'operation notificationCancellation PUT /delivery-push/v2.0/notifications/cancel/{iun}: Permette l'annullamento di una notifica immettendo lo IUN nel path, restituendo una presa in carico, il processo di annullamento si completa poi in maniera asincrona.&#x20;
* Nuova versione dell'operation retrieveSentNotificationV20 GET /delivery/v2.0/notifications/sent/{iun}: permette di visualizzare le specifiche della notifica inserendo lo IUN anche delle notifiche annullate con i dettagli di stato e di eventi relativi l'annullamento.&#x20;
* Aggiunti eventi di timeline collegati all'annullamento della notifica:
  * `NOTIFICATION_CANCELLATION_REQUEST` - Richiesta di annullamento di una notifica&#x20;
  * `NOTIFICATION_CANCELLED` - Notifica annullata&#x20;

#### Quali sono gli impatti?&#x20;

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&#x20;

#### Cosa devo fare ora?&#x20;

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

`Nuove Funzionalità`

### Visualizzazione cause irreperibilità totale&#x20;

Aggiunto elemento nuovo di timeline PREPARE\_ANALOG\_DOMICILE\_FAILURE che riporta nei dettagli nell'elemento failureCause la motivazione del fallimento:&#x20;

* D00: Indirizzo non trovato&#x20;
* D01: Indirizzo non valido&#x20;
* D02: Indirizzo coincidente con quello del primo tentativo

`Bug Fixing`

### Fix agli stream di stato e degli eventi di timeline&#x20;

Questa versione introduce:

* Lo stato CANCELLED&#x20;
* Gli elementi di timeline&#x20;
  * NOTIFICATION\_CANCELLATION\_REQUEST&#x20;
  * NOTIFICATION\_CANCELLED&#x20;
  * PREPARE\_ANALOG\_DOMICILE\_FAILURE

{% hint style="info" %}
**Nota importante**&#x20;

Per mantenere la retro-compatibilità con la versione precedente questi elementi non sono inseriti negli stream a meno che non siano esplicitamente indicati. Per cui gli stream creati senza indicazione del filtro degli stati della notifica o degli eventi di timeline NON riporteranno questi nuovi elementi. Per ottenere anche i nuovi elementi sarà necessario modificare lo stream indicando nel filtro (elemento filterValues) tutti gli stati e tutti gli eventi di timeline di interesse per i processi del mittente.
{% endhint %}
