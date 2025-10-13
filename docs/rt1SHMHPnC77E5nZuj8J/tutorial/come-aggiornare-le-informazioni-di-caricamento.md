# Come aggiornare le informazioni di caricamento

Questo tutorial spiega come modificare i dati di un prodotto già presente sulla piattaforma. La procedura di aggiornamento si basa sul ricaricamento delle informazioni tramite un nuovo file CSV.

### Principio di funzionamento

La piattaforma identifica ogni prodotto in modo univoco tramite il suo **Codice GTIN/EAN**.

Non esiste una funzione di modifica manuale a schermo; per aggiornare un prodotto, è sufficiente caricare un nuovo file CSV che contenga una riga con lo stesso **Codice GTIN/EAN** del prodotto da modificare. Il sistema interpreterà questa operazione come una sostituzione (`replace`) e sovrascriverà i dati precedenti con quelli nuovi.

### Procedura di aggiornamento

#### Step 1 - Preparare il file CSV di aggiornamento

Il Produttore deve creare un nuovo file `.csv` che contenga una o più righe, una per ogni prodotto da aggiornare.

Per ogni prodotto da modificare, la riga deve:

1. Riportare lo **stesso, identico Codice GTIN/EAN** del prodotto già esistente.
2. Contenere nelle altre colonne i **nuovi valori** con cui si desidera aggiornare il prodotto.

È possibile includere nello stesso file sia prodotti da aggiornare che prodotti nuovi, non ancora presenti sulla piattaforma.

#### Step 2 - Caricare il file

Una volta preparato il file, il Produttore deve seguire la procedura standard di caricamento, esattamente come descritto nel tutorial [Come caricare un elenco di prodotti](come-caricare-un-elenco-di-prodotti.md).

#### Cosa succede dopo l'aggiornamento

Una volta che il file di aggiornamento viene processato con successo:

* Il sistema riconosce i Codici GTIN/EAN già esistenti e sostituisce le vecchie informazioni con quelle appena caricate.
* Il prodotto aggiornato viene nuovamente sottomesso al flusso di approvazione di Invitalia. Il suo stato tornerà a **"Da Esaminare"** e seguirà l'iter di verifica come se fosse un nuovo inserimento.

Il Produttore può monitorare lo stato di approvazione del prodotto aggiornato consultando la lista dei propri prodotti o lo storico dei caricamenti.
