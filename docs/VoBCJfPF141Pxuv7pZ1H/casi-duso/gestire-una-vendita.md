# Gestire una vendita

Questo caso d'uso descrive l'intero processo di una vendita andata a buon fine, dall'arrivo del cittadino in cassa fino alla conclusione della transazione. Questo scenario collega diverse procedure (Tutorial) in un unico flusso di lavoro per l'**Operatore Punto Vendita (PV)**.

## Obiettivo

Il flusso mostra come un **Operatore PV** accetta un buono, lo finalizza dopo il pagamento del cittadino e come la transazione viene registrata nello storico.

## Attori

* **Operatore Punto Vendita (PV)**: Esegue le operazioni sul portale.
* **Cittadino**: Presenta il buono sconto.

## Flusso dello scenario

### Step 1 - Presentazione del buono

Un cittadino si presenta al Punto Vendita e intende utilizzare il suo Bonus Elettrodomestici, mostrando il codice sconto (dall'app IO o cartaceo).

### Step 2 - Avvio della procedura di accettazione

L'Operatore PV accede al Portale Operatore PV, entra nella sezione "Gestione Acquisti" e avvia la procedura di accettazione del buono. L'Operatore inserisce il codice sconto e l'importo del prodotto, come descritto nel tutorial [2.4 Accettare un buono sconto](https://www.google.com/search?q=tutorial/accettare-buono-sconto).

### Step 3 - Pre-autorizzazione del buono

Dopo aver inserito i dati, il sistema visualizza il riepilogo. L'Operatore verifica l'identità del cittadino (se necessario, in caso di buono cartaceo) e clicca su **"Accetta buono sconto"**. In questo momento, il buono viene pre-autorizzato e viene creata una transazione in attesa di finalizzazione.

### Step 4 - Finalizzazione e pagamento

Il cittadino procede con il pagamento dell'eventuale importo residuo. Subito dopo, l'Operatore PV individua la transazione in attesa e, come descritto nel tutorial [2.5 Finalizzare un acquisto](https://www.google.com/search?q=tutorial/finalizzare-acquisto), seleziona l'opzione **"Conferma pagamento"**.

### Step 5 - Conclusione e verifica nello storico

L'operazione è conclusa e il buono risulta **utilizzato definitivamente**. La transazione è ora visibile nella sezione **"Gestione Rimborsi"**, come spiegato nel tutorial [2.6 Consultare lo storico delle transazioni](https://www.google.com/search?q=tutorial/consultare-storico-transazioni). La transazione presenterà lo stato **`Completato`**, per poi passare a **`In attesa di rimborso`**.

➡️ **Prossimo passo:** [**Gestire un annullamento (Scenario)**](https://www.google.com/search?q=casi-d-uso/gestire-annullamento)
