# Esempi Decodifica in SEND\_ANALOG

## SEND\_ANALOG\_PROGRESS

```json
{
	"elementId": "SEND_ANALOG_PROGRESS.IUN_GPTG-NEPG-ZTET-202402-E-1.RECINDEX_0.ATTEMPT_0.IDX_1",
	"timestamp": "2024-02-29T16:10:08Z",
	"legalFactsIds": [],
	"category": "SEND_ANALOG_PROGRESS",
	"details": {
		"recIndex": 0,
		"notificationDate": "2024-02-29T16:10:08Z",
		"deliveryDetailCode": "C0N080", 
		"serviceLevel": "AR_REGISTERED_LETTER",
		"sendRequestId": "SEND_ANALOG_DOMICILE.IUN_GPTG-NEPG-ZTET-202402-E-1.RECINDEX_0.ATTEMPT_0",
		"registeredLetterCode": "e0784bcfcf2b44aa8207ea801395969e"
	}
}
```

I codici possono differire a seconda del tipo di prodotto (RIR, AR, 890).

## SEND\_ANALOG\_FEEDBACK

```json
{
	"elementId": "SEND_ANALOG_FEEDBACK.IUN_GPTG-NEPG-ZTET-202402-E-1.RECINDEX_0.ATTEMPT_0",
	"timestamp": "2024-02-29T16:10:24Z",
	"legalFactsIds": [],
	"category": "SEND_ANALOG_FEEDBACK",
	"details": {
		"recIndex": 0,
		"physicalAddress": {
			"at": "Presso",
			"address": "VIA@OK_AR",
			"addressDetails": "SCALA B",
			"zip": "87100",
			"municipality": "COSENZA",
			"municipalityDetails": "COSENZA",
			"province": "CS",
			"foreignState": "ITALIA"
		},
		"sentAttemptMade": 0,
		"responseStatus": "OK",
		"notificationDate": "2024-02-29T16:10:24Z",
		"deliveryDetailCode": "RECRN001C",
		"serviceLevel": "AR_REGISTERED_LETTER",
		"sendRequestId": "SEND_ANALOG_DOMICILE.IUN_GPTG-NEPG-ZTET-202402-E-1.RECINDEX_0.ATTEMPT_0",
		"registeredLetterCode": "e0784bcfcf2b44aa8207ea801395969e"
	}
},
```
