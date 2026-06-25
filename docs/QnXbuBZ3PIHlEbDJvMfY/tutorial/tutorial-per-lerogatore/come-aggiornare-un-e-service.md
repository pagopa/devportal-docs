# Come Aggiornare un e-service

Mantenere un e-service aggiornato è fondamentale per garantire che i Fruitori dispongano sempre di informazioni corrette e che l'integrazione con i loro sistemi funzioni come previsto. Le API e le condizioni di servizio possono evolvere nel tempo, e queste modifiche devono essere riflesse tempestivamente nel catalogo di PDND Interoperabilità.

La piattaforma distingue due tipi di aggiornamento, a seconda dell'impatto che la modifica ha sui Fruitori che già utilizzano il servizio: aggiornamenti minori che modificano la versione corrente e aggiornamenti sostanziali che richiedono la creazione di una nuova versione.

### Distinguere tra Aggiornamento e Nuova Versione

Prima di procedere, è cruciale capire quale tipo di modifica si intende apportare.

#### Aggiornamenti che NON richiedono una nuova versione

Sono modifiche non strutturali (_non-breaking changes_) che non alterano il contratto dell'API. I Fruitori possono continuare a utilizzare il servizio senza dover modificare la loro integrazione. Esempi includono:

* Modifica della **descrizione** dell'e-service.
* Aggiornamento delle **soglie di carico** (base e massima).
* Modifica dell'indirizzo dell'endpoint, a patto che l'interfaccia non cambi.

#### Aggiornamenti che RICHIEDONO una nuova versione

Sono modifiche strutturali (_breaking changes_) che cambiano l'interfaccia o il comportamento dell'API. Creare una nuova versione permette ai Fruitori esistenti di continuare a usare la vecchia versione senza interruzioni, dando loro il tempo di migrare alla nuova. Esempi includono:

* Modifica del **file OpenAPI**, come l'aggiunta o la rimozione di endpoint, parametri o risposte.
* Cambio della **modalità di fruizione** o della **tecnologia** sottostante.

### Procedura di aggiornamento

#### Step 1: Selezionare l'e-service da modificare

Dal menu principale del back-office, accedere alla sezione "Erogazione". Individuare l'e-service di interesse nell'elenco e fare clic sul suo nome per accedere alla pagina di dettaglio.

#### Step 2: Scegliere l'azione: "Modifica" o "Crea Nuova Versione"

Dalla pagina di dettaglio dell'e-service, si hanno a disposizione due pulsanti:

* **Modifica**: Per applicare cambiamenti non strutturali alla versione corrente.
* **Crea Nuova Versione**: Per introdurre cambiamenti strutturali.

#### → Se si sceglie "Modifica" (senza nuova versione)

#### Step 3: Apportare le modifiche non strutturali

Una volta in modalità di modifica, aggiornare i campi desiderati (es. descrizione, soglie di carico). Si noterà che i campi strutturali, come il file OpenAPI, non sono modificabili.

#### Step 4: Salvare le modifiche

Fare clic su "Salva" per applicare gli aggiornamenti. Le modifiche saranno immediatamente effettive per la versione corrente dell'e-service.

#### → Se si sceglie "Crea Nuova Versione"

#### Step 3: Creare la bozza della nuova versione

Facendo clic su "Crea Nuova Versione", la piattaforma crea una copia della versione corrente in stato di "Bozza". Si verrà reindirizzati alla pagina di modifica di questa nuova bozza.

#### Step 4: Apportare le modifiche strutturali

Modificare tutti i campi necessari, incluso il caricamento di un nuovo file OpenAPI che descriva la nuova interfaccia API.

#### Step 5: Pubblicare la nuova versione\*\*

Una volta completate le modifiche, fare clic su "Pubblica". La nuova versione diventerà quella principale nel catalogo. I nuovi Fruitori utilizzeranno questa versione, mentre i Fruitori esistenti dovranno effettuare un'azione esplicita per aggiornare la loro richiesta di fruizione alla nuova versione.
