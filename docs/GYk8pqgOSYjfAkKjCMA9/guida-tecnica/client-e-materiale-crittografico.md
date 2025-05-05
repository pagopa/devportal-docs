# Client

{% hint style="info" %}
Puoi trovare un videotutorial su come si carica una chiave pubblica a [questo link.](https://www.youtube.com/watch?v=q6zuJ2wn8vM\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3_Q\&index=11)
{% endhint %}

Il sistema dei client è molto flessibile per garantire agli utenti di organizzare i client in base ai loro processi, piuttosto che adattare i processi ai client. Si possono scegliere diverse soluzioni nell'implementazione:&#x20;

* un client per ogni e-service;
* molti client per ogni e-service;
* un solo client per tutti gli e-service;
* un misto delle altre opzioni.

Ogni client è dotato di un nome, che può essere utilizzato per individuare il gruppo di persone che ne fa parte (per esempio i dipendenti di una software house esterna o interna all'ente).

{% hint style="warning" %}
Si suggerisce di essere sempre il più restrittivi possibile con la gestione dei client, i quali contengono permessi e chiavi per l'accesso agli e-service.&#x20;
{% endhint %}

## Tipi di client fruitore: e-service e api interop

Esistono due tipi di client fruitore: uno che si rivolge verso gli erogatori degli e-service, e uno verso le API esposte da PDND Interoperabilità. Il primo tipo di client, il _client e-service_, sarà associabile agli e-service per i quali un fruitore ha una richiesta di fruizione attiva. Il secondo, il _client api interop_, non andrà associato a niente e sarà direttamente utilizzabile per ottenere informazioni da PDND Interoperabilità attraverso le sue API.

## Cos'è un client e come funziona?

Un client è un contenitore che raccoglie un certo numero di utenti abilitati a caricare chiavi pubbliche e di chiavi pubbliche da questi caricate. Le chiavi pubbliche fanno parte di un corredo crittografico di cui gli aderenti si dotano per ottenere un voucher da PDND Interoperabilità. Questo potrà essere speso presso gli e-service degli erogatori nel caso di un client e-service, o presso l'API gateway di PDND Interoperabilità nel caso di un client api interop.

Ogni client e-service può essere associato a una o più finalità. Una volta associato, il materiale crittografico lì depositato sarà considerato valido per richiedere a PDND Interoperabilità un voucher per quella finalità.

È possibile aggiungere e rimuovere utenti e chiavi pubbliche da un qualsiasi client in ogni momento, così come associare o disassociare un client e-service da una finalità, anche senza eliminarlo. I comportamenti precisi di ogni casistica sono descritti più sotto nelle varie sezioni.

## Portachiavi erogatore

Lo speculare del client fruitore è il portachiavi erogatore. Anche questo è un contenitore destinato ad ospitare una lista di chiavi pubbliche, caricate da operatori di sicurezza. Queste chiavi potranno essere utilizzate dai fruitori per verificare l'integrità della risposta che un erogatore invia ad un fruitor

### Rimuovere una chiave pubblica da un client o portachiavi

Per eliminare una chiave pubblica da un client, un membro può andare su _Fruizione > I tuoi client e-service_ oppure _Fruizione > I tuoi client api interop_ e cliccare su _Ispeziona_ per il client di interesse. All'interno, nella tab _Chiavi pubbliche_ sarà disponibile l'elenco delle chiavi caricate per quel client. Cliccando sui tre pallini della chiave di interesse, è disponibile l'azione _Elimina_, che eliminerà la chiave.&#x20;

L'operazione è analoga per i portachiavi erogatore, ed disponibile nella vista _Erogazione > I tuoi portachiavi_.
