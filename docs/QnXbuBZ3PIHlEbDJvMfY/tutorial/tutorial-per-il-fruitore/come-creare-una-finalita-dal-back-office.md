# Come creare una finalità dal Back-Office

Dopo che l'Erogatore ha approvato la tua richiesta di fruizione, il passo successivo è creare una **finalità**. La finalità è un oggetto logico che collega la tua autorizzazione generale a uno scopo d'uso specifico e concreto. È il "perché" tecnico che giustifica ogni singola chiamata API che farai.

Creando una finalità, non solo dichiari in modo granulare l'utilizzo che farai dei dati, ma fornisci all'Erogatore una stima del carico di lavoro che prevedi di generare. Inoltre, la compilazione dell'**analisi del rischio** è un adempimento normativo fondamentale per garantire la conformità al GDPR e la liceità del trattamento dei dati che andrai a effettuare.

### Prerequisiti

* Avere una richiesta di fruizione in stato **"Attiva"**.
* Accedere al back-office con un utente che abbia il ruolo di **Amministratore** o **Operatore API**.

### Procedura

#### Step 1: Accedere alla sezione "Fruizione"

Dal menu principale del back-office, selezionare la voce **"Fruizione"**. Qui troverai l'elenco di tutte le richieste di fruizione che hai inviato.

#### Step 2: Selezionare la richiesta di fruizione attiva

Individua la richiesta di fruizione per la quale desideri creare una finalità (deve essere in stato "Attiva") e fai clic su di essa per aprirne i dettagli.

#### Step 3: Avviare la creazione della finalità

All'interno della pagina di dettaglio della richiesta di fruizione, troverai la sezione dedicata alle finalità. Fai clic sul pulsante **"Crea una finalità"**.

#### Step 4: Compilare i dettagli della finalità

Si aprirà un modulo di creazione dove dovrai inserire le seguenti informazioni:

* **Nome della finalità**: Assegna un nome chiaro e descrittivo che identifichi lo scopo specifico (es. "Verifica requisiti per bonus asilo nido", "Controllo anagrafico per notifica atti").
* **Stima di carico**: Inserisci il **numero di chiamate API giornaliere** che prevedi di effettuare per questa finalità. Questa stima è cruciale per permettere all'Erogatore di pianificare la capacità della propria infrastruttura.
* **Analisi del Rischio**: Questa è la parte più importante. Dovrai compilare un questionario guidato per descrivere nel dettaglio il trattamento dei dati, in conformità con i requisiti del GDPR. Dovrai specificare:
  * La base giuridica del trattamento.
  * Le categorie di dati personali trattati.
  * Le misure di sicurezza tecniche e organizzative adottate per proteggere i dati.
  * I tempi di conservazione dei dati ottenuti.

#### Step 5: Salvare e attivare la finalità

Una volta compilati tutti i campi, fai clic su **"Salva"** o **"Attiva"**. La finalità passerà allo stato "Attiva".

A questo punto, la finalità esiste ma non è ancora tecnicamente utilizzabile. Per poter richiedere un voucher e iniziare a chiamare le API, dovrai completare due passaggi finali, descritti nei prossimi tutorial:

1. **Creare un client** (se non ne hai già uno).
2. **Associare il client a questa finalità**.
