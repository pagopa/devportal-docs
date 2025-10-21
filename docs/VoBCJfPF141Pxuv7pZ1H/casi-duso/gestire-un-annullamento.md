# Gestire un annullamento

Questo caso d'uso descrive il flusso di una transazione che viene interrotta dopo una pre-autorizzazione del buono. Questo scenario si verifica quando il cittadino decide di non procedere più con l'acquisto.

## Obiettivo

L'**Operatore Punto Vendita (PV)** deve annullare una transazione in attesa, rilasciando il buono sconto e rendendolo nuovamente disponibile per il cittadino.

## Attori

* **Operatore Punto Vendita (PV)**: Esegue l'operazione di annullamento.
* **Cittadino**: Decide di non finalizzare l'acquisto.

## Flusso dello scenario

### Step 1 - Transazione in attesa

L'Operatore PV ha precedentemente accettato un buono sconto (come da tutorial [2.4 Accettare un buono sconto](https://www.google.com/search?q=tutorial/accettare-buono-sconto)). Esiste quindi una transazione nello stato "Da autorizzare" nella sezione "Gestione Acquisti".

### Step 2 - Decisione di annullamento

Il cittadino comunica di non voler più procedere con l'acquisto, oppure l'operazione non può essere finalizzata per altri motivi.

### Step 3 - Esecuzione dell'annullamento

L'Operatore PV individua la transazione in attesa nella "Gestione Acquisti" e, come descritto nel tutorial [2.5 Finalizzare un acquisto](https://www.google.com/search?q=tutorial/finalizzare-acquisto) (Opzione B), seleziona il pulsante **"Annulla transazione"**.

### Step 4 - Verifica nello storico (Operatore)

L'azione è irreversibile. La transazione scompare immediatamente dall'elenco delle operazioni in attesa e viene spostata nella sezione **"Gestione Rimborsi"**. Consultando lo storico (come da tutorial [2.6 Consultare lo storico delle transazioni](https://www.google.com/search?q=tutorial/consultare-storico-transazioni)), la transazione apparirà con lo stato definitivo **`Annullato`** (Vedi [3.2 Descrizione degli Stati delle Transazioni](https://www.google.com/search?q=riferimenti-tecnici/descrizione-stati-transazioni)).

### Step 5 - Rilascio del buono (Cittadino)

Contestualmente all'annullamento, il buono sconto viene **rilasciato** e torna disponibile per il cittadino. I tempi per la nuova disponibilità variano:

* **Buono dall'app IO**: Il buono torna disponibile sull'app del cittadino entro **5 minuti**.
* **Buono cartaceo (web)**: Il buono torna disponibile **immediatamente**.

Il cittadino può quindi riutilizzare il buono per un'altra transazione.
