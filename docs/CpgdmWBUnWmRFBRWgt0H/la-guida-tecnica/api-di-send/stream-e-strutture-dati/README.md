# Stream e strutture dati

Lo stream permette di raccogliere tutti gli eventi emessi dalle notifiche che vengono inserite dalla PA a seguito della sua creazione; lo stream può immagazzinare un massimo di 50 eventi per volta, raggiunto questo limite la PA deve consumare lo stream per poter visualizzare gli altri eventi successivi.

_"Consumare gli eventi"_ consiste nella loro eliminazione dallo stream per liberare lo spazio agli eventi successivi; quindi, per conservarli è necessario che la PA li renda persistenti sulla propria base dati.

Ogni PA può configurare un massimo di 5 stream, nel caso si voglia modificare la configurazione di uno stream è necessario cancellarlo e crearne uno nuovo con la configurazione desiderata.

Se la PA non consuma gli eventi, questi vengono eliminati <mark style="color:red;">**dopo 7 giorni dalla loro creazione**</mark> (solo gli eventi creati da più di 7 giorni); a questo punto l'unico modo per poter recuperare quelli eventi è chiamare l’API [retrieveSentNotification](https://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpagopa%2Fpn-delivery%2Fdevelop%2Fdocs%2Fopenapi%2Fapi-external-b2b-pa.yaml#/SenderReadB2B/retrieveSentNotification) che restituisce tutti gli eventi di timeline di una determinata notifica. Questo processo, al contrario dell'utilizzo degli stream, non è ottimizzato, perché costringe la PA a effettuare diverse chiamate per ogni notifica inserita; pertanto, si consiglia di utilizzare sempre gli stream in ambiente di produzione.

Gli eventi restano registrati su uno stream per **7 giorni**, trascorsi i quali non potranno più essere recuperati. A questo punto sarà possibile ottenere lo stato della notifica unicamente attraverso il servizio puntuale [getNotificationRequestStatus](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/pagopa/pn-delivery/develop/docs/openapi/api-external-b2b-pa.yaml#/SenderReadB2B/retrieveNotificationRequestStatus), mentre se si conosce lo IUN si può utilizzare il servizio [getSentNotification](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/pagopa/pn-delivery/develop/docs/openapi/api-external-b2b-pa.yaml#/SenderReadB2B/retrieveSentNotification) per leggere tutti i dettagli di una notifica accettata

***

ll campo `eventType` può essere valorizzato in 2 modi:

* **STATUS:** permette di registrare gli eventi di cambiamento di stato delle notifiche
* **TIMELINE:** permette di registrare gli eventi di timeline delle notifiche.

Il campo `filterValues` può contenere il tipo di eventi che si vogliono filtrare all'interno dello stream, se lasciato vuoto `[]` permetterà di raccogliere tutti gli eventi emessi.

È possibile sapere se sono presenti altri eventi da visualizzare tramite il valore del parametro `retry-after`presente nell'header del body della response ottenuta a seguito della prima chiamata a questo servizio:&#x20;

* se`retry-after = 0` significa che sono presenti altri eventi oltre a quelli ricevuti nella response; per ottenere i successivi è necessario consumare i precedenti, effettuando una nuova chiamata a questo servizio, nella quale valorizzare il campo `lastEventId` con l'eventId dell'ultimo evento ottenuto nella precedente chiamata.
* se`retry-after` ≠ `0` significa che non sono presenti altri eventi nello stream oltre a quelli appena ottenuti, pertanto è necessario attendere la quantità di tempo (espressa in millisecondi) del valore restituito, prima di richiamare di nuovo il servizio
