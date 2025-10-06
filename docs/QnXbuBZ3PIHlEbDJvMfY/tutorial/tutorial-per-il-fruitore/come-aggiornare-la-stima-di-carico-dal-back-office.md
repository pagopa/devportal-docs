# Come aggiornare la stima di carico dal Back-Office

Le necessità di un servizio possono cambiare nel tempo. Una stima di carico iniziale, definita durante la creazione della finalità, potrebbe rivelarsi inferiore o superiore al fabbisogno reale. Aggiornare questo valore è fondamentale per due motivi principali:

1. **Per il Fruitore**: Assicura che il numero di chiamate API consentite sia adeguato all'utilizzo effettivo del servizio, evitando di incorrere in blocchi o errori dovuti al superamento delle soglie.
2. **Per l'Erogatore**: Fornisce una previsione aggiornata e più accurata del traffico che il suo e-service dovrà sostenere, permettendogli di pianificare correttamente le risorse della propria infrastruttura.

Se la nuova stima supera le soglie di carico definite dall'Erogatore, la modifica richiederà una nuova approvazione da parte sua.

### Prerequisiti

* Avere una finalità in stato **"Attiva"**.
* Accedere al back-office con un utente che abbia il ruolo di **Amministratore** o **Operatore API**.

### Procedura

#### Step 1: Accedere alla sezione "Fruizione"

Dal menu principale del back-office, selezionare la voce **"Fruizione"**.

#### Step 2: Selezionare la richiesta di fruizione di interesse

Nell'elenco, individuare la richiesta di fruizione a cui è associata la finalità che si intende modificare e fare clic su di essa per aprirne i dettagli.

#### Step 3: Selezionare la finalità da aggiornare

All'interno della pagina di dettaglio, nella sezione dedicata alle finalità, trovare la finalità specifica che si vuole modificare e fare clic su di essa.

#### Step 4: Avviare la modifica della stima di carico

Nella pagina di dettaglio della finalità, individuare il campo relativo alla stima di carico giornaliera e fare clic sull'opzione per modificarlo (es. un'icona a forma di matita o un pulsante "Modifica").

#### Step 5: Inserire il nuovo valore e salvare

Inserire il nuovo valore desiderato per le chiamate API giornaliere e confermare l'operazione salvando la modifica.

### Cosa succede dopo l'aggiornamento

* **Se la nuova stima è entro le soglie dell'Erogatore**: La modifica è immediatamente attiva.
* **Se la nuova stima supera le soglie dell'Erogatore**: La finalità passerà in uno stato di "In attesa di approvazione". L'Erogatore riceverà una notifica e dovrà approvare esplicitamente il nuovo valore prima che diventi operativo. Durante questo periodo di attesa, continuerà ad essere valida la stima di carico precedente.
