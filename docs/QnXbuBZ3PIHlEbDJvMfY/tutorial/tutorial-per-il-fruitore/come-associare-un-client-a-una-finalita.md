# Come associare un client a una finalità

Dopo aver creato una finalità e un client con le sue chiavi, è necessario collegarli. L'associazione tra un client e una finalità è l'ultimo passo di configurazione che autorizza la tua applicazione a richiedere voucher per uno scopo specifico.

Possiamo pensare a questi tre elementi in questo modo:

* La **richiesta di fruizione** è l'autorizzazione generale ("Hai il permesso di accedere a questo palazzo").
* La **finalità** è lo scopo specifico ("Il tuo permesso vale per accedere all'archivio al terzo piano").
* Il **client** è la tua applicazione con le sue credenziali ("Questa è la tessera magnetica della tua applicazione").

Associare il client alla finalità significa "programmare" la tessera magnetica per aprire la porta dell'archivio. Senza questo collegamento, la piattaforma non sa quale applicazione (client) è autorizzata per quale scopo (finalità) e, di conseguenza, non rilascerà nessun voucher di accesso.

### Prerequisiti

* Avere una **finalità** in stato "Attiva". (Vedi tutorial: [2.2 Come creare una finalità dal Back-Office](https://www.google.com/search?q=...)).
* Avere un **client** in stato "Attivo" a cui sia stata caricata almeno una chiave pubblica. (Vedi tutorial: [2.2 Come generare il corredo crittografico...](https://www.google.com/search?q=...)).
* Accedere al back-office con un utente che abbia il ruolo di **Amministratore** o **Operatore di Sicurezza**.

### Procedura

#### Step 1: Accedere alla sezione "Fruizione"

Dal menu principale del back-office, selezionare la voce **"Fruizione"**.

#### Step 2: Selezionare la richiesta di fruizione di interesse

Nell'elenco, individuare la richiesta di fruizione a cui è associata la finalità che si intende configurare e fare clic su di essa.

#### Step 3: Selezionare la finalità da associare

All'interno della pagina di dettaglio della richiesta, nella sezione dedicata alle finalità, trovare la finalità attiva a cui si vuole associare il client e fare clic su di essa.

#### Step 4: Avviare l'associazione del client

Nella pagina di dettaglio della finalità, individuare la sezione **"Client Associati"** e fare clic sul pulsante **"Associa client"**.

#### Step 5: Selezionare il client dall'elenco

Si aprirà una finestra con l'elenco di tutti i client del tuo ente che sono attivi e dotati di almeno una chiave pubblica. Selezionare il client che si desidera associare a questa finalità.

#### Step 6: Confermare l'associazione

Fare clic su **"Conferma"** per completare l'operazione. Il client apparirà ora nell'elenco dei client associati alla finalità.

### Prossimi Passi

La configurazione è completa. Il tuo client è ora pienamente operativo e autorizzato a richiedere voucher per questa specifica finalità.

Il prossimo passo è puramente tecnico e consiste nell'implementare la logica per ottenere il token di accesso, come descritto nel tutorial: [**Come richiedere un voucher per un e-service**](https://www.google.com/search?q=...).
