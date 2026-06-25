# Come creare un client

Un **client** è un'entità logica che rappresenta una tua applicazione o un tuo componente software all'interno di PDND Interoperabilità. Funziona come un "contenitore" per le credenziali crittografiche (le chiavi pubbliche) che la tua applicazione userà per autenticarsi sulla piattaforma e richiedere i voucher necessari a chiamare le API.

Senza un client, la tua applicazione non ha un'identità e non può dimostrare alla piattaforma chi è. La creazione di un client è quindi un passo tecnico indispensabile per prepararsi all'integrazione. Esistono due tipi di client, a seconda dello scopo:

* **Client per e-service**: È il tipo più comune, utilizzato per richiedere voucher al fine di consumare gli e-service esposti da altri enti Erogatori.
* **Client per le API di Interoperabilità**: È un tipo di client specifico, utilizzato per automatizzare le operazioni sulla piattaforma stessa (es. inviare una richiesta di fruizione tramite API).

### Prerequisiti

* Aver completato l'adesione alla piattaforma.
* Accedere al back-office con un utente che abbia il ruolo di **Amministratore** o **Operatore di Sicurezza**.

### Procedura

#### Step 1: Accedere alla sezione "Fruizione"

Dal menu principale del back-office, selezionare la voce **"Fruizione"**.

#### Step 2: Accedere all'area "Client"

All'interno della pagina "Fruizione", fare clic sulla scheda **"Client"** per visualizzare l'elenco di tutti i client già creati.

#### Step 3: Avviare la creazione del client

Fare clic sul pulsante **"Crea un client"**.

#### Step 4: Compilare i dati del client

Si aprirà un modulo di creazione in cui è necessario inserire le seguenti informazioni:

* **Tipo di client**: Scegliere dal menu a tendina se si sta creando un client per "e-service" o per "API Interoperabilità", a seconda dell'uso che se ne dovrà fare.
* **Nome del client**: Assegnare un nome chiaro e riconoscibile che identifichi l'applicazione che lo utilizzerà (es. "Software Gestionale Anagrafe", "Servizio Notifiche Automatiche").
* **Descrizione**: Fornire una breve descrizione dello scopo del client e del suo contesto di utilizzo.

#### Step 5: Salvare il client

Dopo aver compilato tutti i campi, fare clic su **"Salva"**. Il nuovo client verrà creato e aggiunto all'elenco con lo stato "Attivo".

### Prossimi Passi

Il client è stato creato, ma non è ancora pronto per essere utilizzato. Per renderlo operativo, devi completare i due passaggi successivi, descritti nei prossimi tutorial:

1. [**Generare il corredo crittografico e caricare una chiave pubblica**](https://www.google.com/search?q=...): Per dotare il client delle credenziali di sicurezza.
2. [**Associare il client a una finalità**](https://www.google.com/search?q=...): Per autorizzare il client a richiedere voucher per uno scopo specifico.
