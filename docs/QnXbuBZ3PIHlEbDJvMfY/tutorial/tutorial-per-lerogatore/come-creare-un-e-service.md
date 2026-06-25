# Come Creare un e-service

Creare un e-service è il primo e più importante passo che un ente Erogatore compie per rendere i propri dati disponibili ad altre Pubbliche Amministrazioni. Un e-service è, in pratica, la "vetrina" di un servizio digitale (API) all'interno del catalogo di PDND Interoperabilità.

Pubblicare un e-service significa descriverlo in modo standardizzato, definirne le regole di accesso e renderlo individuabile da tutti i potenziali enti Fruitori. Questo processo abilita l'attuazione del principio "once-only", permettendo ad altre PA di utilizzare le informazioni che il tuo ente già possiede, senza doverle richiedere nuovamente a cittadini e imprese.

### Prerequisiti

Prima di procedere con la creazione di un e-service sulla piattaforma, è indispensabile che l'API che si intende esporre sia:

* **Conforme al Modello di Interoperabilità (ModI)**: L'API deve rispettare le [Linee Guida sull'Interoperabilità Tecnica](https://www.google.com/search?q=https://www.agid.gov.it/it/linee-guida/linee-guida-sullinteroperabilita-tecnica-delle-pubbliche-amministrazioni) definite da AgID.
* **Validata**: La conformità dell'API deve essere verificata utilizzando gli strumenti di validazione forniti da AgID.

La creazione e la prima pubblicazione di un e-service si svolgono interamente sul back-office della piattaforma.

### Procedura

#### Step 1: Accedere alla sezione "Erogazione"

Dal menu principale del back-office, selezionare la voce "Erogazione".

#### Step 2: Avviare la creazione

Fare clic sul pulsante "Crea e-service". Si aprirà un modulo di compilazione diviso in più sezioni.

#### Step 3: Compilare le Informazioni Generali

In questa sezione vanno inseriti i dati identificativi dell'e-service:

* **Nome dell'e-service**: Un nome chiaro e comprensibile che descriva la sua funzione (es. "Verifica Residenza Anagrafica").
* **Descrizione**: Un testo che spieghi in dettaglio lo scopo del servizio, i dati forniti e il suo contesto di utilizzo.
* **Modalità di fruizione**: Scegliere la modalità con cui l'API verrà erogata.
* **Tecnologia**: Specificare la tecnologia su cui si basa l'API (es. REST).

#### Step 4: Inserire i Dettagli Tecnici e la Documentazione

Questa è la sezione più tecnica, dove si descrive il comportamento dell'API:

* **Caricare il file OpenAPI**: Effettuare l'upload del file `openapi.yaml` che descrive le specifiche tecniche dell'API. Il sistema convaliderà automaticamente il file.
* **Definire le soglie di carico**: Impostare il numero massimo di chiamate che l'e-service può gestire, definendo una soglia base e una soglia massima.
* **Specificare l'indirizzo del server**: Inserire l'URL di base (endpoint) a cui i Fruitori dovranno inviare le loro richieste.

#### Step 5: Pubblicare l'e-service

Una volta compilate tutte le informazioni, si può procedere alla pubblicazione. È possibile salvare l'e-service in stato di "Bozza" per completarlo in un secondo momento. Quando tutte le informazioni sono corrette e complete, fare clic su "Pubblica". L'e-service passerà allo stato "Pubblicato" e sarà immediatamente visibile nel catalogo a tutti gli enti aderenti.
