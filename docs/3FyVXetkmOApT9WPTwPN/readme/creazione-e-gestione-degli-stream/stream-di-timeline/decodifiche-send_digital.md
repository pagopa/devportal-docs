---
description: Decodifica del campo deliveryDetailCode degli eventi di invio digitale
---

# Decodifiche SEND\_DIGITAL

Gli eventi SEND\_DIGITAL\_PROGRESS e SEND\_DIGITAL\_FEEDBACK contengono il campo `deliveryDetailCode` all'interno dell'elemeto `details` che riporta il motivo specifico del successo, del fallimento o l'avanzamento della spedizione digitale.

## Tabella decodifica deliveryDetailCode - Domicilio digitale PEC

| **deliveryDetailCode** | **Descrizione**                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| `C000`                 | COMUNICAZIONE CON SERVER PEC AVVENUTA (senza busta)                                                 |
| `C001`                 | ACCETTAZIONE (con busta)                                                                            |
| `C002`                 | NON\_ACCETTAZIONE (con busta)                                                                       |
| `C003`                 | AVVENUTA\_CONSEGNA (con busta)                                                                      |
| `C004`                 | ERRORE\_CONSEGNA (con busta) con \***deliveryFaliureCause**                                         |
| `C005`                 | PRESA\_IN\_CARICO (senza busta)                                                                     |
| `C006`                 | RILEVAZIONE\_VIRUS (con busta) con \*\***deliveryFaliureCause**                                     |
| `C007`                 | PREAVVISO\_ERRORE\_CONSEGNA (senza busta)                                                           |
| `C008`                 | ERRORE\_COMUNICAZIONE\_SERVER\_PEC - con retry da parte di PN (senza busta)                         |
| `C009`                 | ERRORE\_DOMINIO\_PEC\_NON\_VALIDO - senza retry: indica un dominio pec non valido; (senza busta)    |
| `C010`                 | ERROR\_INVIO\_PEC - con retry da parte di PN: indica un errore generico di invio pec (senza busta)  |
| `DP00`                 | Tentativo reinvio richiesto: codice interno a delivery push che indica una richiesta di ritentativo |
| `DP10`                 | Scaduto timeout di invio a ext-channel, senza ottenere un evento di risposta OK/KO/RETRY\_PROGRESS  |

| deliveryFailureCause | Descrizione                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| **`no-dest`**        |  dominio esistente ma casella inesistente                                                             |
| **`no-domain`**      | dominio inesistente                                                                                   |
| **`virus`**          | <ul><li>virus rilevato in fase di consegna</li><li>**virus rilevato in fase di accettazione</li></ul> |
| **`other`**          | errore generico                                                                                       |

### Esempi

L'evento SEND\_DIGITAL\_FEEDBACK riporta il codice `deliveryDetailCode=C003` corrispondente alla consegna da parte del server di destinazione.

```json
{
	"elementId": "SEND_DIGITAL_FEEDBACK.IUN_QLYM-PHLG-ZAPJ-202402-H-1.RECINDEX_0.SOURCE_SPECIAL.REPEAT_false.ATTEMPT_0",
	"timestamp": "2024-02-29T11:42:39.4248206Z",
	"legalFactsIds": [
		{
			"key": "safestorage://PN_EXTERNAL_LEGAL_FACTS-788282a3268c471b9900ea8bfe1aeb4a.xml",
			"category": "PEC_RECEIPT"
		}
	],
	"category": "SEND_DIGITAL_FEEDBACK",
	"details": {
		"recIndex": 0,
		"digitalAddress": {
			"type": "PEC",
			"address": "notifichedigitali-dev@pec.pagopa.it"
		},
		"responseStatus": "OK",
		"notificationDate": "2024-02-29T11:42:39.4248206Z",
		"deliveryDetailCode": "C003",
		"sendingReceipts": [
			{}
		]
	}
}
```

L'evento SEND\_DIGITAL\_PROGRESS riporta il campo `deliveryDetailCode=C001` corrispondente a accettazione da parte del server del mittente.

```json
{
	"elementId": "DIGITAL_PROG.IUN_QLYM-PHLG-ZAPJ-202402-H-1.RECINDEX_0.SOURCE_SPECIAL.REPEAT_false.ATTEMPT_0.IDX_1",
	"timestamp": "2024-02-29T11:42:29.18130614Z",
	"legalFactsIds": [
		{
			"key": "safestorage://PN_EXTERNAL_LEGAL_FACTS-1d1edd160f614833899bba9702b61efc.xml",
			"category": "PEC_RECEIPT"
		}
	],
	"category": "SEND_DIGITAL_PROGRESS",
	"details": {
		"recIndex": 0,
		"digitalAddress": {
			"type": "PEC",
			"address": "notifichedigitali-dev@pec.pagopa.it"
		},
		"digitalAddressSource": "SPECIAL",
		"eventTimestamp": "2024-02-29T11:42:29.18130614Z",
		"retryNumber": 0,
		"notificationDate": "2024-02-29T11:42:30.440213674Z",
		"deliveryDetailCode": "C001",
		"sendingReceipts": [
			{}
		],
		"shouldRetry": false
}
```

## Tabella decodifica deliveryDetailCode - Domicilio digitale SERCQ

Qualsiasi destinatario di notifiche (che sia persona fisica o persona giuridica) potrà abilitare **SEND** **come** **recapito legale**, senza dover possedere/impostare una PEC.

L’utente potrà abilitare SEND a domicilio digitale interagendo con un’apposita sezione nella sezione **recapiti**.

| deliveryDetailCode | Descrizione                  |
| ------------------ | ---------------------------- |
| `Q003`             | Invio concluso positivamente |
| `Q010`             | Fallimento invio a SERCQ     |
| `Q011`             | Indirizzo SERCQ errato       |

### Esempio

Nel caso di domicilio digitale SERCQ si avranno solo due eventi delle categorie:

* SEND\_DIGITAL\_DOMICILE
* SEND\_DIGITAL\_FEEDBACK

```json
{
  "elementId": "SEND_DIGITAL.IUN_WNUN-HRJQ-ZWVJ-202508-W-1.RECINDEX_0.SOURCE_PLATFORM.REPEAT_false.ATTEMPT_0",
  "timestamp": "2025-08-02T11:43:42.178756013Z",
  "ingestionTimestamp": "2025-08-02T11:43:44.439677417Z",
  "eventTimestamp": "2025-08-02T11:43:42.178756013Z",
  "notificationSentAt": "2025-08-02T11:39:41.261607760Z",
  "legalFactsIds": [],
  "category": "SEND_DIGITAL_DOMICILE",
  "details": {
    "recIndex": 0,
    "digitalAddress": {
      "type": "SERCQ",
      "address": "x-pagopa-pn-sercq:send-self:notification-already-delivered?timestamp=2025-08-02T11:43:42.178756013Z"
    },
    "digitalAddressSource": "PLATFORM",
    "retryNumber": 0
  }
},
{
  "elementId": "SEND_DIGITAL_FEEDBACK.IUN_WNUN-HRJQ-ZWVJ-202508-W-1.RECINDEX_0.SOURCE_PLATFORM.REPEAT_false.ATTEMPT_0",
  "timestamp": "2025-08-02T11:43:42.178756013Z",
  "ingestionTimestamp": "2025-08-02T11:43:45.693889411Z",
  "eventTimestamp": "2025-08-02T11:43:42.178756013Z",
  "notificationSentAt": "2025-08-02T11:39:41.261607760Z",
  "category": "SEND_DIGITAL_FEEDBACK",
  "details": {
    "recIndex": 0,
    "digitalAddress": {
      "type": "SERCQ",
      "address": "x-pagopa-pn-sercq:send-self:notification-already-delivered?timestamp=2025-08-02T11:43:42.178756013Z"
    },
    "responseStatus": "OK",
    "notificationDate": "2025-08-02T11:43:42.178756013Z",
    "deliveryDetailCode": "Q003",
    "sendingReceipts": [
      {
        "id": "9e18f38e-fabb-44fc-9b8a-52ab5e097310",
        "system": "@send-self"
      }
    ]
  }
}
```
