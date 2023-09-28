---
description: Annullamento della notifica
---

# API VERSIONE GA 2.0

La versione GA 2.0 di SEND aggiunge la funzionalità di annullamento della notifica da parte del mittente.

L'annullamento della notifica può essere effettuata da via B2B o via portale mittente.

Per supportare questa funzionalità sono state effettuati i seguenti interventi sulla API:

* Aggiunta l'operation _`notificationCancellation`_ \
  _<mark style="color:red;">PUT/delivery-push/v2.0/notifications/cancel/{iun}</mark>_: Permette l'annullamento di una notifica immettendo lo IUN nel path, restituendo una presa in carico, il processo di annullamento si completa poi in maniera asincrona.
* Aggiunti eventi di timeline collegati all'annullamento della notifica:
  * \`<mark style="color:red;">NOTIFICATION\_CANCELLATION\_REQUEST</mark>\` - Richiesta di annullamento di una notifica
  * \`<mark style="color:red;">NOTIFICATION\_CANCELLED</mark>\` - Notifica annullata
