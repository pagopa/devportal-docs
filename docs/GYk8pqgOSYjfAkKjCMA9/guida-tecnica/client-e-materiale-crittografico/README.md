# Client

Un client è un contenitore che raccoglie gli utenti tecnici abilitati a caricare chiavi pubbliche e le chiavi pubbliche stesse.&#x20;

Il client è lo strumento che abilita l'estrazione materiale dei dati. Per questa ragione, tutte le operazioni relative all'inserimento di personale tecnico e all'associazione di client e finalità possono essere effettuate solo da un'utenza con permessi di amministratore.

Esistono due tipi di client:&#x20;

* quelli che si rivolgono verso gli erogatori degli e-service;
* quelli che si rivolgono verso le API esposte da PDND Interoperabilità.&#x20;

Il primo tipo di client, il _**client e-service**_, sarà associabile agli e-service per i quali un fruitore ha una richiesta di fruizione attiva e almeno una finalità pubblicata.

Ogni client e-service può essere associato a una o più finalità. Una volta associato, il materiale crittografico lì depositato sarà considerato valido per richiedere a PDND Interoperabilità un voucher per quella finalità.

Il secondo, il _**client API Interop**_, non andrà associato a niente e sarà direttamente utilizzabile per ottenere informazioni da PDND Interoperabilità attraverso le sue API.

È possibile aggiungere e rimuovere utenti e chiavi pubbliche da un qualsiasi client in ogni momento, così come associare o disassociare un client e-service da una finalità, anche senza eliminarlo.
