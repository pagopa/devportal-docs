# Accettare un Buono sconto online

Questo tutorial descrive la procedura step-by-step per l'accettazione di un buono sconto in un contesto e-commerce. A differenza della gestione tramite portale (per i negozi fisici), questa procedura è destinata ai venditori che integrano la gestione dei buoni direttamente nei loro sistemi di vendita online tramite API.

Il flusso copre i passaggi necessari per validare il buono, bloccarlo e confermare la vendita dopo il pagamento.

## Prerequisiti

Per seguire questa procedura, devi essere in possesso di:

* Un **Bearer Token** valido per l'autenticazione, da includere nell'header `Authorization` di ogni chiamata.
* Il **Codice Buono** (`trxCode`) fornito dal cliente al momento del checkout.
* L'importo totale della spesa (`amountCents`).
* Il codice **GTIN** del prodotto (`productGtin`) che il cliente sta acquistando.

***

## Procedura

### Step 1: (Facoltativo) Recuperare i prodotti ammessi

Se il tuo sistema e-commerce non è già allineato con l'elenco dei prodotti ammessi all'iniziativa, puoi recuperare la lista completa.

1. Chiama l'endpoint [`GET /products`](https://developer.pagopa.it/pari/api/pari-e-commerce#/pari/api/operations/getProducts).
2. Utilizza la risposta per ottenere un `productGtin` valido da usare nei passaggi successivi.

### Step 2: Validare il buono (Preview)

Questo passaggio ti permette di verificare la validità del `trxCode` e di calcolare l'importo dello sconto applicabile, **senza bloccare il buono**.

1. Chiama l'endpoint [`PUT /transactions/bar-code/{trxCode}/preview`](https://developer.pagopa.it/pari/api/pari-e-commerce#/pari/api/operations/previewPayment), inserendo il `trxCode` del cliente nell'URL.
2.  Invia un body JSON contenente i dettagli del prodotto e l'importo:

    ```json
    {
      "productName": "Forno Elettrico Classe A", /* opzionale */
      "productGtin": "GTIN123456789",
      "amountCents": 120000
    }
    ```
3. Se la chiamata ha successo (risposta `200 OK`), riceverai un JSON con i dettagli della transazione, l'importo originale, lo sconto (`rewardCents`) e l'importo residuo (`residualAmountCents`).
4. Mostra al cliente nel carrello il prezzo finale scontato.

### Step 3: Autorizzare la transazione (Authorize)

Una volta che il cliente conferma di voler procedere con l'acquisto, devi "bloccare" il buono per riservarlo a questa transazione. Questo passaggio cambia lo stato della transazione da `CREATED` ad `AUTHORIZED`.

1. Chiama l'endpoint [`PUT /transactions/bar-code/{trxCode}/authorize`](https://developer.pagopa.it/pari/api/pari-e-commerce#/pari/api/operations/authPaymentBarCode), utilizzando lo stesso `trxCode`.
2.  Invia un body JSON con l'importo e un ID transazione del tuo sistema (acquirer):

    ```json
    {
      "amountCents": 120000,
      "idTrxAcquirer": "TUO_ID_ORDINE_UUID",
      "additionalProperties": { "productGtin": "8024651207962" } 
    }
    ```
3. Se la chiamata ha successo (`200 OK`), il buono è ora bloccato (stato `AUTHORIZED`) e non può essere utilizzato da nessun altro.
4. Reindirizza il cliente al tuo sistema di pagamento per saldare l'importo residuo.

### Step 4: Catturare la transazione (Capture)

Questo è l'atto finale che conferma la vendita. Devi eseguire questo passaggio **solo dopo aver ricevuto la conferma di avvenuto pagamento** da parte del cliente.

Questo passaggio cambia lo stato della transazione da `AUTHORIZED` a `CAPTURED`, confermando l'utilizzo definitivo del buono.

1. Chiama l'endpoint [`PUT /transactions/bar-code/{trxCode}/capture`](https://developer.pagopa.it/pari/api/pari-e-commerce#/pari/api/operations/capturePayment).
2. Una risposta `200 OK` conferma che la transazione è completata e il buono è stato speso.

A questo punto la vendita è conclusa. La transazione è in stato `CAPTURED` ed è pronta per il flusso di rimborso all'esercente. Per i passaggi successivi si può fare riferimento ai tutorial specifici sulla gestione dei rimborsi.
