# Client

{% hint style="info" %}
Puoi trovare un videotutorial su come si carica una chiave pubblica a [questo link.](https://www.youtube.com/watch?v=q6zuJ2wn8vM\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3_Q\&index=11)
{% endhint %}

Il sistema dei client è molto flessibile per garantire agli utenti di organizzare i client in base ai loro processi, piuttosto che adattare i processi ai client. Si possono scegliere diverse soluzioni nell'implementazione:

* un client per ogni e-service;
* molti client per ogni e-service;
* un solo client per molti e-service.

Ogni ente valuterà facendo un compromesso tra sicurezza e manutenibilità della propria soluzione. In linea di principio, l'organizzazione dei client associati agli e-service deve garantire che i tecnici abbiano visibilità sulle finalità per le quali operano, ma non per le altre.

Ogni client è dotato di un nome, che può essere utilizzato per individuare il gruppo di persone che ne fa parte (per esempio i dipendenti di una software house esterna o interna all'ente).

## Tipi di client fruitore: e-service e API Interop

Esistono due tipi di client fruitore: uno che si rivolge verso gli erogatori degli e-service, e uno verso le api esposte da PDND Interoperabilità. Il primo tipo di client, il _client e-service_, sarà associabile agli e-service per i quali un fruitore ha una richiesta di fruizione attiva. Il secondo, il _client API Interop_, non andrà associato a niente e sarà direttamente utilizzabile per ottenere informazioni da PDND Interoperabilità attraverso le sue API.

Il primo tipo di client, il _**client e-service**_, sarà associabile agli e-service per i quali un fruitore ha una richiesta di fruizione attiva.&#x20;

Il secondo, il _**client API Interop**_, non andrà associato a niente e sarà direttamente utilizzabile per ottenere informazioni da PDND Interoperabilità attraverso le sue API.

## Cos'è un client e come funziona

Un client è un contenitore che raccoglie un certo numero di utenti abilitati a caricare chiavi pubbliche e di chiavi pubbliche da questi caricate. Le chiavi pubbliche fanno parte di un corredo crittografico di cui gli aderenti si dotano per ottenere un voucher da PDND Interoperabilità. Questo potrà essere speso presso gli e-service degli erogatori nel caso di un client e-service, o presso le api esposte direttamente da PDND Interoperabilità nel caso di un client api Interop.

Ogni client e-service può essere associato a una o più finalità. Una volta associato, il materiale crittografico lì depositato sarà considerato valido per richiedere a PDND Interoperabilità un voucher per quella finalità.

È possibile aggiungere e rimuovere utenti e chiavi pubbliche da un qualsiasi client in ogni momento, così come associare o disassociare un client e-service da una finalità, anche senza eliminarlo. I comportamenti precisi di ogni casistica sono descritti più sotto nelle varie sezioni.
