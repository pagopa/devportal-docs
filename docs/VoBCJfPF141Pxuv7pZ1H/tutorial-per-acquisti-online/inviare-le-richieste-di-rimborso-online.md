# Inviare le richieste di rimborso online

{% hint style="warning" %}
Funzionalità in arrivo
{% endhint %}

Questo tutorial descrive la procedura API in due passaggi per richiedere il rimborso di un buono sconto, dopo che la vendita è stata confermata.

L'obiettivo è far avanzare la transazione dallo stato `CAPTURED` (vendita conclusa) allo stato `REWARDED` (richiesta di rimborso inoltrata), caricando la documentazione di vendita richiesta (fattura).

### **Prerequisiti**

Per seguire questa procedura, devi avere:

* Un **Bearer Token** valido per l'autenticazione.
* Il `transactionId` di una transazione che si trova nello stato `CAPTURED` (ottenuto al termine del tutorial "Accettare un buono sconto online").
* Il file della **fattura** o della documentazione di vendita da associare alla transazione.

***

### **Step 1: Caricare la fattura (Invoice)**

Questo primo passaggio associa la fattura di vendita alla transazione e ne aggiorna lo stato da `CAPTURED` a `INVOICED`.

1. Prepara una chiamata all'endpoint `POST /transactions/{transactionId}/invoice`.
2. Sostituisci `{transactionId}` nell'URL con l'ID della transazione che vuoi rimborsare.
3. Invia la richiesta utilizzando il `Content-Type: multipart/form-data`.
4. Includi il file della fattura nel corpo della richiesta, all'interno di un campo `file`.

Al successo, l'API risponderà con uno stato `204 No Content`. La transazione si troverà ora nello stato `INVOICED`.

### **Step 2: Aprire la richiesta di rimborso (Reward)**

Questo è il passaggio finale che inoltra formalmente la richiesta di rimborso all'ente. La transazione avanzerà dallo stato `INVOICED` a `REWARDED`.

1. Prepara una chiamata all'endpoint [`POST /transactions/{transactionId}/reward`](https://developer.pagopa.it/pari/api/pari-e-commerce#/pari/api/operations/rewardTransaction).
2. Utilizza lo stesso `{transactionId}` del passaggio precedente.
3. Invia la richiesta utilizzando il `Content-Type: multipart/form-data`.
4. Come da specifiche, includi nuovamente il file della fattura nel corpo della richiesta, all'interno di un campo `file`.

Al successo, l'API risponderà con uno stato `204 No Content`.

### **Conclusione**

La transazione è ora nello stato `REWARDED` ed è entrata formalmente nel ciclo di lavorazione per il rimborso. Puoi monitorare lo stato di questa e altre transazioni finalizzate utilizzando gli endpoint di consultazione.
