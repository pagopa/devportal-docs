# Come individuare le informazioni di raggiungibilità di un Service Provider

Per poter inviare una SRTP a un utente, devi prima sapere a quale PSP è associato. Questo tutorial spiega come usare le API di Attivazione per "scoprire" queste informazioni.

## **Step 1: Ottenere l'AccessToken**

Come per tutte le chiamate API, ottieni un `AccessToken` valido tramite il flusso OAuth2 Client Credentials.

## **Step 2: Interrogare l'API tramite Codice Fiscale**

Effettua una chiamata `GET` all'endpoint di ricerca, inserendo il Codice Fiscale del Debitore nell'header.

### Endpoint

```
GET /activations/payer
```

#### Header Parameters

* **`PayerId` (header):** Il Codice Fiscale dell'utente per cui si cercano informazioni di attivazione.

## **Step 3: Interpretare la risposta**

* **Successo (`200 OK`):** La chiamata restituisce un oggetto `Activation`. Il campo `payer.rtpSpId` conterrà l'identificativo del PSP a cui l'utente è associato. Questo è l'identificativo che dovrai usare per l'invio della SRTP.
* **Errore (`404 Not Found`):** Nessuna attivazione trovata per l'utente. Ciò significa che non puoi inviargli una richiesta SRTP.
