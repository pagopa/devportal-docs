# API VERSIONE GA26Q2.B

Il rilascio GA26Q2.B introduce il nuovo elemento `NOTIFICATION_TIMELINE_REWORKED`, progettato per migliorare la tracciabilità delle correzioni nella storia degli stati di una notifica.

## CORREZIONE DI TIMELINE

L'esposizione delle modifiche varia in base alla versione delle API utilizzate dal Partner Tecnologico.

Tutti gli eventi oggetto di correzione riporteranno lo specifico suffisso `_REWORK_<n>`, che ne permette il riconoscimento immediato.

#### Implementazione API: retrieveSentNotification v2.8 e Stream v2.9

Nelle nuove versioni che utilizzano i percorsi:

* **`/delivery/v2.8/notifications/sent/{iun}`**
* **`/delivery-progresses/v2.9/streams`**

è disponibile il nuovo elemento di timeline di categoria **`NOTIFICATION_TIMELINE_REWORKED`**, che offre visibilità completa sulle operazioni di correzione e rettifica. Il campo `details.invalidatedTimelineAndStatusHistory` contiene l'elenco dettagliato di tutti gli stati e gli eventi invalidati, permettendo ai sistemi client di ricostruire con precisione la cronologia corretta della notifica.

{% code overflow="wrap" %}
```json
{
  "elementId": "NOTIFICATION_TIMELINE_REWORKED.IUN_UJRX-APEQ-UEYZ-202606-R-1.RECINDEX_0.ATTEMPT_0.REWORK_0",
  "timestamp": "2026-06-05T14:56:57.125685027Z",
  "category": "NOTIFICATION_TIMELINE_REWORKED",
  "details": {
    "recIndex": 0,
    "invalidatedTimelineAndStatusHistory": [
      {
        "status": "ACCEPTED",
        "activeFrom": "2026-06-05T14:37",
        "relatedTimelineElements": [
          {
            "elementId": "PREPARE_ANALOG_DOMICILE.IUN_UJRX-APEQ-UEYZ-20260",
            "timestamp": "2026-06-05T14:42:54.916859238Z",
            "category": "PREPARE_ANALOG_DOMICILE",
          }
        ],
      },
      {
        "status": "DELIVERING",
        "activeFrom": "2026-06-05T14:43:00.673439925Z",
        "relatedTimelineElements": [
          {
            "elementId": "SEND_ANALOG_DOMICILE.IUN_UJRX-APEQ-UEYZ-202606-R-1.RECINDEX_0.ATTEMPT_0",
            "timestamp": "2026-06-05T14:43:00.673439925Z",
            "category": "SEND_ANALOG_DOMICILE",
            {
              "elementId": "SEND_ANALOG_PROGRESS.IUN_UJRX-APEQ-UEYZ-202606-R-1.RECINDEX_0.ATTEMPT_0.IDX_2",
              "timestamp": "2026-06-05T14:44:37.214928187Z",
              "category": "SEND_ANALOG_PROGRESS",
         ....
            },
            {
              "elementId": "SEND_ANALOG_PROGRESS.IUN_UJRX-APEQ-UEYZ-202606-R-1.RECINDEX_0.ATTEMPT_0.IDX_2.REWORK_0",
              "timestamp": "2026-06-05T14:58:25Z",
              "category": "SEND_ANALOG_PROGRESS",
         ....
            },
            {
              "elementId": "SEND_ANALOG_FEEDBACK.IUN_UJRX-APEQ-UEYZ-202606-R-1.RECINDEX_0.ATTEMPT_0",
              "timestamp": "2026-06-05T14:58:25Z",
              "category": "SEND_ANALOG_FEEDBACK",
         ....
            },
            {
              "elementId": "PREPARE_ANALOG_DOMICILE_FAILURE.IUN_UJRX-APEQ-UEYZ-202606-R-1.RECINDEX_0",
              "timestamp": "2026-06-05T14:58:25Z",
              "category": "PREPARE_ANALOG_DOMICILE_FAILURE",
         ....
            }
          ],
        },
        {
          "status": "UNREACHABLE",
          "activeFrom": "2026-06-05T14:45:38.878305032Z",
          "relatedTimelineElements": [
            {
              "elementId": "COMPLETELY_UNREACHABLE.IUN_UJRX-APEQ-UEYZ-202606-R-1.RECINDEX_0",
              "timestamp": "2026-06-05T14:46:14.67662536Z",
              "eventTimestamp": "2026-06-05T14:45:38.878305032Z",
              "category": "ANALOG_FAILURE_DELIVERY"
         ....
            },     
      ...
          ]
        }
      
```
{% endcode %}

#### API versioni precedenti

Nelle versioni precedenti alle release menzionate, l'elemento `NOTIFICATION_TIMELINE_REWORKED` non è riportato, al fine di preservare i contratti esistenti. I sistemi client riceveranno solo i nuovi eventi correttivi all'interno del flusso standard.

**NOTA:** Le versioni precedenti alla v2.8 dell'API `retrieveSentNotification` mostreranno in timeline solo gli eventi del workflow rettificato, mentre gli elementi invalidati dal processo di correzione resteranno nascosti.

Per non incorrere in duplicazione degli elementId invalidati, ma comunque presenti in timeline, gli eventi successivi possono riportare nel campo `timelineElementId` il suffisso `_REWORK_<n>`.

Un esempio di elemento di timeline che può essere restituito utilizzando le API delle versioni precedenti è mostrato sotto:

```json
 {
   "elementId": "SEND_ANALOG_PROGRESS.IUN_NMDX-NVHP-UEZE-202606-Y-1.RECINDEX_0.ATTEMPT_0.IDX_1.REWORK_0",
   "timestamp": "2026-06-05T13:37:46Z",
   "category": "SEND_ANALOG_PROGRESS",
   "details": {
      "recIndex": 0,
      "notificationDate": "2026-06-05T13:37:46Z",
      "deliveryDetailCode": "CON080",
      "serviceLevel": "AR_REGISTERED_LETTER",
      "sendRequestId": "SEND_ANALOG_DOMICILE.IUN_NMDX-NVHP-UEZE-202606-Y-1.RECINDEX_0.ATTEMPT_0.REWORK_0",
      "registeredLetterCode": "2ef060d6fb4c4848b416495649b7d188"
   }
}
```
