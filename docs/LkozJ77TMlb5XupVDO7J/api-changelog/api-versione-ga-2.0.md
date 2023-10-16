---
description: Annullamento della notifica, Visualizzazione cause irreperibilità totale
---

# API VERSIONE GA 2.0

La versione GA 2.0 di SEND aggiunge la funzionalità di annullamento della notifica da parte del mittente e la visualizzazione delle cause che conducono all'irreperibilità totale.

## Annullamento della notifica

L'annullamento della notifica può essere effettuata da via B2B o via portale mittente.

Per supportare questa funzionalità sono state effettuati i seguenti interventi sulla API:

* Aggiunta l'operation _`notificationCancellation`_ \
  _<mark style="color:red;">PUT/delivery-push/v2.0/notifications/cancel/{iun}</mark>_: Permette l'annullamento di una notifica immettendo lo IUN nel path, restituendo una presa in carico, il processo di annullamento si completa poi in maniera asincrona.
* Aggiunti eventi di timeline collegati all'annullamento della notifica:
  * \`<mark style="color:red;">NOTIFICATION\_CANCELLATION\_REQUEST</mark>\` - Richiesta di annullamento di una notifica
  * \`<mark style="color:red;">NOTIFICATION\_CANCELLED</mark>\` - Notifica annullata

## Visualizzazione cause irreperibilità totale

Aggiunto elemento nuovo di timeline <mark style="color:red;">PREPARE\_ANALOG\_DOMICILE\_FAILURE</mark> che riporta nei dettagli nell'elemento `failureCause`la motivazione del fallimento:

* `D00`: Indirizzo non trovato
* `D01`: Indirizzo non valido
* `D02`: Indirizzo coincidente con quello del primo tentativo

## Modifiche agli stream di stato e degli eventi di timeline

Questa versione introduce&#x20;

* lo stato <mark style="color:red;">CANCELLED</mark>
* gli elementi di timeline&#x20;
  * <mark style="color:red;">NOTIFICATION\_CANCELLATION\_REQUEST</mark>
  * <mark style="color:red;">NOTIFICATION\_CANCELLED</mark>
  * <mark style="color:red;">PREPARE\_ANALOG\_DOMICILE\_FAILURE</mark>

**NOTA**: Per mantenere la retro-compatibilità con la versione precedente questi elementi **non sono inseriti negli stream a meno che non siano esplicitamente indicati**. Per cui gli stream creati senza indicazione del filtro degli stati della notifica o degli eventi di timeline NON riporteranno questi nuovi elementi. Per ottenere anche i nuovi elementi sarà necessario modificare lo stream indicando nel filtro (elemento `filterValues`) tutti gli stati e tutti gli eventi di timeline di interesse per i processi del mittente.