---
description: Decodifica del campo deliveryDetailCode degli eventi di invio digitale
---

# Decodifiche SEND\_DIGITAL

Gli eventi SEND\_DIGITAL\_PROGRESS e SEND\_DIGITAL\_FEEDBACK contengono il campo `deliveryDetailCode` all'interno dell'elemeto `details` che riporta il motivo specifico del successo, del fallimento o l'avanzamento della spedizione digitale.

## Tabella decodifica deliveryDetailCode digitale

<table data-header-hidden><thead><tr><th width="232">deliveryDetailCode</th><th>Descrizione</th></tr></thead><tbody><tr><td><strong>deliveryDetailCode</strong></td><td><strong>Descrizione</strong></td></tr><tr><td><code>C000</code></td><td>COMUNICAZIONE CON SERVER PEC AVVENUTA (senza busta)</td></tr><tr><td><code>C001</code></td><td>ACCETTAZIONE (con busta)</td></tr><tr><td><code>C002</code></td><td>NON_ACCETTAZIONE (con busta)</td></tr><tr><td><code>C003</code></td><td>AVVENUTA_CONSEGNA (con busta)</td></tr><tr><td><code>C004</code></td><td>ERRORE_CONSEGNA (con busta)</td></tr><tr><td><code>C005</code></td><td>PRESA_IN_CARICO (senza busta)</td></tr><tr><td><code>C006</code></td><td>RILEVAZIONE_VIRUS (con busta)</td></tr><tr><td><code>C007</code></td><td>PREAVVISO_ERRORE_CONSEGNA (senza busta)</td></tr><tr><td><code>C008</code></td><td>ERRORE_COMUNICAZIONE_SERVER_PEC - con retry da parte di PN (senza busta)</td></tr><tr><td><code>C009</code></td><td>ERRORE_DOMINIO_PEC_NON_VALIDO - senza retry: indica un dominio pec non valido; (senza busta)</td></tr><tr><td><code>C010</code></td><td>ERROR_INVIO_PEC - con retry da parte di PN: indica un errore generico di invio pec (senza busta)</td></tr><tr><td><code>DP00</code></td><td>Tentativo reinvio richiesto: codice interno a delivery push che indica una richiesta di ritentativo</td></tr><tr><td><code>DP10</code></td><td>Scaduto timeout di invio a ext-channel, senza ottenere un evento di risposta OK/KO/RETRY_PROGRESS</td></tr></tbody></table>

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
