# Esempi decodifiche SEND\_DIGITAL

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
		"digitalAddressSource": "SPECIAL",
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
