# Come aggiornare una richiesta di fruizione a una nuova versione

Gli e-service, come qualsiasi software, evolvono nel tempo. Un Erogatore può pubblicare una nuova versione di un e-service per introdurre nuove funzionalità, migliorare le performance o modificare la struttura dei dati. Quando questo accade, la tua richiesta di fruizione, che era legata alla versione precedente, deve essere aggiornata.

Aggiornare la richiesta è un'azione necessaria per poter beneficiare dei miglioramenti della nuova versione e, in alcuni casi, per garantire la continuità del servizio se l'Erogatore decidesse di dismettere la versione più vecchia. Prima di procedere, è fondamentale analizzare le modifiche introdotte per comprendere l'impatto che avranno sulla tua integrazione software.

### Prerequisiti

* Avere una richiesta di fruizione in stato **"Attiva"**.
* L'Erogatore deve aver pubblicato una nuova versione dell'e-service a cui la tua richiesta è associata. La piattaforma ti notificherà quando una nuova versione è disponibile.
* Accedere al back-office con un utente che abbia il ruolo di **Amministratore** o **Operatore API**.

### Procedura

#### Step 1: Accedere alla sezione "Fruizione"

Dal menu principale del back-office, selezionare la voce **"Fruizione"**. Qui troverai l'elenco di tutte le tue richieste di fruizione.

#### Step 2: Identificare la richiesta da aggiornare

Individua la richiesta di fruizione per la quale è disponibile un aggiornamento. La piattaforma evidenzierà visivamente le richieste che possono essere migrate a una nuova versione (ad esempio, con un'icona o un avviso specifico). Fai clic su di essa per aprirne i dettagli.

#### Step 3: Avviare l'aggiornamento

All'interno della pagina di dettaglio della richiesta di fruizione, sarà presente un banner informativo o un pulsante che ti invita ad aggiornare alla nuova versione disponibile. Fai clic sul pulsante **"Aggiorna"**.

#### Step 4: Analizzare le modifiche e confermare

Prima di finalizzare l'operazione, prenditi un momento per analizzare l'impatto delle modifiche. La piattaforma mostrerà un riepilogo delle differenze tra la vecchia e la nuova versione. È fortemente raccomandato:

* **Consultare la documentazione tecnica** della nuova versione.
* **Analizzare il nuovo file OpenAPI** per capire se sono state introdotte _breaking changes_ che richiedono una modifica al codice della tua applicazione.

#### Step 5: Confermare l'aggiornamento

Una volta compreso l'impatto delle modifiche e dopo aver pianificato gli eventuali adeguamenti tecnici, conferma la tua volontà di aggiornare. La tua richiesta di fruizione verrà immediatamente associata alla nuova versione dell'e-service.

Da questo momento, tutte le finalità e i client collegati a questa richiesta faranno riferimento alla nuova versione dell'e-service. Assicurati che le tue applicazioni siano state aggiornate di conseguenza per poterla utilizzare correttamente.
