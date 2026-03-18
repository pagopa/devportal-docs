---
description: >-
  Domande e risposte sui casi d'uso più frequenti inerenti la gestione delle
  streams di Piattaforma Notifiche
---

# FAQ sugli streams

### Quando chiamo le API sulla pagina swagger ottengo errore

Le pagine Swagger sono esclusivamente ad uso di documentazione e non sono configurate per essere utilizzate per testare le API.

### Cosa devo fare se ricevo **{"message": "Unauthorized"}**?

Il messaggio indica che non sono disponibili le credenziali per utilizzare i servizi di SEND o che non è stata completata l'integrazione con **PDND Interoperabilità**.\
Se non è stato già fatto, è necessario intraprendere il processo di accreditamento, contattando l'indirizzo preposto: [account@pagopa.it](mailto:account@pagopa.it)\
Se è stato già completato il processo di accreditamento, assicurarsi che si stia utilizzando correttamente l'API Key ed il Voucher PDND.

### Se creo uno stream senza filtri ad esempio

`{`\
`"title": "NoFilteredStream",`\
`"eventType": "STATUS",`\
`"filterValues": []`\
`}`

### questo raccoglierà tutti i cambi di stato avvenuti nel tempo?

SI. Questo concetto è valido anche per gli eventi di TIMELINE.

### Dopo aver creato uno stream ed inserite alcune notifiche, come posso vedere gli eventi da esse generati?

Per ottenere gli eventi bisogna chiamare il servizio per la lettura degli eventi inserendo nel path variabile lo **streamId** dello stream che si vuole interrogare. A questo punto:

1. Se nell'header della response ottengo **retry-after = 0** significa che è possibile consumare ulteriori eventi presenti nello stream; quindi, per ottenere gli eventi successivi bisogna richiamare nuovamente lo stesso servizio, aggiungendo come query param _lastEventId_ l'**eventId** dell'ultimo evento precedentemente elaborato.
2. Se nell'header della response ottengo **retryAfter ≠ 0** ed ho eventi nel body della response, significa che lo stream non contiene altri ulteriori eventi e sarà necessario attendere che ne siano generati di nuovi, prima di poter richiamare di nuovamente il servizio sullo stesso stream. Il campo **retryAfter** restituisce il tempo in millisecondi da rispettare prima di effettuare la nuova chiamata al servizio.

### Posso ottenere più di 50 eventi da una singola chiamata?

NO, questo valore è configurato pari a 50 a livello applicativo e non può essere modificato dal consumer.

### Posso vedere di nuovo gli eventi ottenuti nella chiamata precedente?

Se la chiamata viene effettuata con il parametro _lastEventId_ vuoto o con lo stesso valore della chiamata precedente vengono restituiti gli stessi elementi, eventualmente in coda quelli che si sono stati registrati tra le due chiamate.\
Una volta passato il query param _lastEventId_ alla chiamata del servizio, tutti gli eventi con id precedenti al  _lastEventId_ sono cancellati dallo stream e non possono più essere recuperati. E' quindi fondamentale elaborare o memorizzare tutti gli eventi ottenuti da ogni chiamata, prima di richiedere i successivi.

### Per quanto tempo gli eventi restano registrati su uno stream?

Gli eventi restano registrati su uno stream per **7 giorni**, trascorsi i quali non potranno più essere recuperati. A questo punto sarà possibile ottenere lo stato della notifica unicamente attraverso il servizio puntuale [getNotificationRequestStatus](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/pagopa/pn-delivery/develop/docs/openapi/api-external-b2b-pa.yaml#/SenderReadB2B/retrieveNotificationRequestStatus), mentre se si conosce lo IUN si può utilizzare il servizio [getSentNotification](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/pagopa/pn-delivery/develop/docs/openapi/api-external-b2b-pa.yaml#/SenderReadB2B/retrieveSentNotification) per leggere tutti i dettagli di una notifica accettata.

### Come faccio a capire il canale di spedizione seguito da una notifica?

Gli eventi di workflow sono differenti a seconda che il canale di spedizione sia digitale o analogico, ad esempio **SCHEDULE\_ANALOG\_WORKFLOW** determina l'inizio del workflow per invio cartaceo mentre **SCHEDULE\_DIGITAL\_WORKFLOW** per l'invio digitale.\
In base all'evento presente nello stream sarà quindi possibile dedurre il canale di spedizione utilizzato.

### In caso di destinatario multiplo, che significato ha la d**escrizione di stato sintetica della notifica**?

La descrizione di stato sintetica è così rappresentata:

* La descrizione di stato sintetica della notifica passa a `DELIVERED` quando si concludono tutti i tentativi di invio della notifica per tutti i destinatari ed almeno un destinatario è stato raggiunto (per via digitale o per via cartacea).
* La descrizione di stato sintetica della notifica passa a `UNREACHABLE` quando tutti i destinatari non sono raggiungibili.
* La descrizione di stato sintetica della notifica passa a `EFFECTIVE_DATE` se la notifica è stata consegnata ad almeno uno dei destinatari (`DELIVERED`) oppure quando tutti i destinatari non sono raggiungibili (`UNREACHABLE`) ed è trascorso il tempo necessario al perfezionamento per decorrenza termini per almeno uno di questi.\
  **NOTA**: _Si evidenzia che il passaggio della descrizione a_ `EFFECTIVE_DATE` _**NON** influenza in alcun modo il grado di perfezionamento degli altri destinatari. Infatti il Perfezionamento è una caratteristica tipica del destinatario e non è impattata in alcun modo da come viene descritto lo stato sintetico della notifica._ Per i dettagli sul perfezionamento vedi: [https://docs.pagopa.it/f.a.q.-per-integratori/knowledge-base-di-piattaforma-notifiche/focus-sul-perfezionamento-della-notifica](https://docs.pagopa.it/f.a.q.-per-integratori/knowledge-base-di-piattaforma-notifiche/focus-sul-perfezionamento-della-notifica)
* La descrizione di stato sintetica della notifica passa a `VIEWED` quando almeno uno dei destinatari ha fatto accesso alla notifica.\
  **NOTA**: _destinatari differenti possono, entrando sul dettaglio della notifica, vedere descrizioni diverse (Perfezionata per presa visione/Visualizzata) in relazione al momento di prima visualizzazione se precedente o successivo alla decorrenza termini._

### In caso di destinatario multiplo, che significato ha un evento di timeline?

Quando sono presenti destinatari multipli, ogni evento di timeline sarà specifico per ogni destinatario ed appariranno tutti nella timeline con l'indicazione del destinatario impattato dall'evento deducibile dal suffisso `RECINDEX` del _elementId_ (es: `SEND_ANALOG_DOMICILE.IUN_VPKL-WEWK-VKUW-202601-R-1.RECINDEX_4.ATTEMPT_0` è l'evento relativo al quinto destinatario) oppure l'elemento `details.recIndex`.

### In caso di destinatario multiplo, ricevo un'attestazione opponibile per ogni destinatario?

Ogni Attestazione Opponibile viene generata una volta per ogni destinatario, ad eccezione di quella della presa in carico della notifica poiché anche se con più destinatari la notifica è considerata singolarmente.\
La Piattaforma espone anche delle attestazioni prodotte da sistemi esterni, quali ricevute xml dell’esito relativo all’invio PEC o le ricevuta delle raccomandate; in questo caso possono essere generati più documenti per ogni destinatario, a seconda delle evidenze prodotte dai sistemi esterni.

### Come sono ordinati gli eventi ottenuti dagli streams?

Gli streams contengono eventi che sono ordinati in base all'**eventId;** tuttavia alcuni eventi potrebbero avere un timestamp non coerente con l'ordine degli **eventId.** Questa situazione si verifica nei casi in cui il timestamp è stato attribuito da un sistema esterno a Piattaforma Notifiche, come avviene negli eventi di _SEND\_DIGITAL\_PROGRESS_ che ricevono il timestamp dai PEC provider.

### Dove viene trasmesso lo IUN nella timeline?

Lo IUN è presente nell’evento **REQUEST\_ACCEPTED** (stato **ACCEPTED**): vengono restituiti anche i campi **iun**, **paProtocolNumber**, **idempotenceToken** e **requestId**.

{% code fullWidth="true" %}
```json
{
        "eventId": "00000000000000000000000000000000004833",
        "notificationRequestId": "<requestIdNotifica>",
        "iun": "<iunNotifica>",
        "newStatus": "ACCEPTED",
        "element": {
            "elementId": "REQUEST_ACCEPTED.IUN_PZRP-EYLE-QMGV-202510-Z-1",
            "timestamp": "2025-10-27T08:39:42.248448278Z",
            "ingestionTimestamp": "2025-10-27T08:39:42.248448278Z",
            "eventTimestamp": "2025-10-27T08:39:42.248448278Z",
            "notificationSentAt": "2025-10-27T08:36:03.646624033Z",
            "legalFactsIds": [
                {
                    "key": "safestorage://PN_LEGAL_FACTS-ba01fd672a734ef4af54348f45f31d73.pdf",
                    "category": "SENDER_ACK"
                }
            ],
            "category": "REQUEST_ACCEPTED",
            "details": {
                "notificationRequestId": "<requestIdNotifica>",
                "paProtocolNumber": "<paProtocolNumberNotifica>",
                "idempotenceToken": "<idempotenceTokenNotifica>"
            }
        }
    },
```
{% endcode %}

Se la richiesta è rifiutata **REQUEST\_REFUSED** (stato **REFUSED**), lo IUN **non** è presente: sono restituiti **paProtocolNumber**, **idempotenceToken** e **requestId** per risalire alla notifica; in **details** è fornito il motivo del rifiuto.

{% code fullWidth="true" %}
```json
{
        "eventId": "00000000000000000000000000000000004832",
        "notificationRequestId": "<requestIdNotifica>",
        "newStatus": "REFUSED",
        "element": {
            "elementId": "REQUEST_REFUSED.IUN_QNWR-UWQE-MTDZ-202510-U-1",
            "timestamp": "2025-10-22T10:35:44.231250437Z",
            "ingestionTimestamp": "2025-10-22T10:35:44.231250437Z",
            "eventTimestamp": "2025-10-22T10:35:44.231250437Z",
            "notificationSentAt": "2025-10-22T10:35:12.286397362Z",
            "category": "REQUEST_REFUSED",
            "details": {
                "notificationRequestId": "<requestIdNotifica>",
                "paProtocolNumber": "<paProtocolNumberNotifica>",
                "idempotenceToken": "<idempotenceTokenNotifica>"
                "notificationCost": 100,
                "refusalReasons": [
                    {
                        "errorCode": "PAYMENT_NOT_VALID",
                        "detail": "Payment information is not valid - creditorTaxId=00890370372 noticeCode=300202000000291312"
                    }
```
{% endcode %}
