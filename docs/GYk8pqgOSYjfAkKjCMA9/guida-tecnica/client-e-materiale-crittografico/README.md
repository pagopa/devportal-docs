# Client

Un client è un contenitore che raccoglie:

* &#x20;utenti abilitati a caricare chiavi pubbliche&#x20;
* &#x20;le relative chiavi pubbliche&#x20;

Esistono due tipi di client:&#x20;

* quelli che si rivolgono verso gli erogatori degli e-service&#x20;
* quelli che si rivolgonoverso le API esposte da PDND Interoperabilità.&#x20;

Il primo tipo di client, il _**client e-service**_, sarà associabile agli e-service per i quali un fruitore ha una richiesta di fruizione attiva.&#x20;

Ogni client e-service può essere associato a una o più finalità. Una volta associato, il materiale crittografico lì depositato sarà considerato valido per richiedere a PDND Interoperabilità un voucher per quella finalità.

Il secondo, il _**client API Interop**_, non andrà associato a niente e sarà direttamente utilizzabile per ottenere informazioni da PDND Interoperabilità attraverso le sue API.

È possibile aggiungere e rimuovere utenti e chiavi pubbliche da un qualsiasi client in ogni momento, così come associare o disassociare un client e-service da una finalità, anche senza eliminarlo.

Il sistema dei client è molto flessibile per garantire agli utenti di organizzare i client in base ai loro processi, piuttosto che adattare i processi ai client. Si possono scegliere diverse soluzioni nell'implementazione:

* un client per ogni e-service;
* molti client per ogni e-service;
* un solo client per molti e-service.

Ogni ente valuterà facendo un compromesso tra sicurezza e manutenibilità della propria soluzione. In linea di principio, l'organizzazione dei client associati agli e-service deve garantire che i tecnici abbiano visibilità sulle finalità per le quali operano, ma non per le altre.

{% hint style="warning" %}
Si consiglia di assegnare ai client un nome che possa aiutare nell'individuazione del gruppo di persone che lo utilizza (per esempio i dipendenti di una software house esterna o interna all'ente).
{% endhint %}

{% hint style="warning" %}
Si suggerisce di essere sempre il più restrittivi possibile con la gestione dei client, poiché contengono permessi e chiavi per l'accesso agli e-service.&#x20;
{% endhint %}
