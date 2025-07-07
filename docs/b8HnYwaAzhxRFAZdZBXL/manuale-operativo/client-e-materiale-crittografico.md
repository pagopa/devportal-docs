# Client, portachiavi e materiale crittografico

{% hint style="info" %}
Puoi trovare un videotutorial su come si carica una chiave pubblica a [questo link.](https://www.youtube.com/watch?v=q6zuJ2wn8vM\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3_Q\&index=11)
{% endhint %}

## Tipi di client fruitore: e-service e api interop

Esistono due tipi di client fruitore: uno che si rivolge verso gli erogatori degli e-service, e uno verso le API esposte da PDND Interoperabilità. Il primo tipo di client, il _client e-service_, sarà associabile agli e-service per i quali un fruitore ha una richiesta di fruizione attiva. Il secondo, il _client api interop_, non andrà associato a niente e sarà direttamente utilizzabile per ottenere informazioni da PDND Interoperabilità attraverso le sue API.

## Cos'è un client e come funziona?

Un client è un contenitore che raccoglie un certo numero di utenti abilitati a caricare chiavi pubbliche e di chiavi pubbliche da questi caricate. Le chiavi pubbliche fanno parte di un corredo crittografico di cui gli aderenti si dotano per ottenere un voucher da PDND Interoperabilità. Questo potrà essere speso presso gli e-service degli erogatori nel caso di un client e-service, o presso l'API gateway di PDND Interoperabilità nel caso di un client api interop.

Ogni client e-service può essere associato a una o più finalità. Una volta associato, il materiale crittografico lì depositato sarà considerato valido per richiedere a PDND Interoperabilità un voucher per quella finalità.

È possibile aggiungere e rimuovere utenti e chiavi pubbliche da un qualsiasi client in ogni momento, così come associare o disassociare un client e-service da una finalità, anche senza eliminarlo. I comportamenti precisi di ogni casistica sono descritti più sotto nelle varie sezioni.

## Portachiavi erogatore

Lo speculare del client fruitore è il portachiavi erogatore. Anche questo è un contenitore destinato ad ospitare una lista di chiavi pubbliche, caricate da operatori di sicurezza. Queste chiavi potranno essere utilizzate dai fruitori per verificare l'integrità della risposta che un erogatore invia ad un fruitore.

## Ciclo di vita e operazioni sui client

### Creare un client e-service

È possibile creare client e-service dalla voce di menù _Fruizione > I tuoi client e-service_, e poi _Crea nuovo_. Il contenuto del client è modificabile in qualsiasi momento, inclusa l'aggiunta e la rimozione dei suoi membri. La creazione del client di per sé non ha effetto sull'accesso agli e-service. Deve essere successivamente associato ad una o più finalità per le quali le chiavi saranno utilizzabili per ottenere un voucher.

### Creare un client API Interop

Dalla voce di menù _Fruizione > I tuoi client API Interop_ e poi _Crea nuovo_. Il contenuto del client è modificabile in qualsiasi momento, inclusa l'aggiunta e la rimozione dei suoi membri.

Il client API Interop, oltre alle chiamate di lettura, può effettuare anche chiamate di scrittura su PDND Interoperabilità. Nel caso in cui si effettuino scritture, è necessario indicare uno degli amministratori come responsabile delle operazioni. In caso contrario, le richieste saranno rifiutate.

### Creare un portachiavi

Dalla voce di menù _Erogazione > I tuoi portachiavi_ e poi _Crea nuovo_. Il contenuto del portachiavi è modificabile in qualsiasi momento, inclusa l'aggiunta e la rimozione dei suoi membri.

### Eliminare un client o un portachiavi

È possibile eliminare un client dalla vista _Fruizione > I tuoi client e-service_ oppure _Fruizione > I tuoi client api interop_, cliccare sui tre pallini e selezionare l'azione _Elimina_. La stessa operazione può essere fatta sui portachiavi dalla vista _Erogazione > I tuoi portachiavi_.

{% hint style="warning" %}
L'eliminazione in toto di un client e-service prevede anche la sua rimozione da tutte le finalità alle quali è eventualmente associato e l'eliminazione di tutte le chiavi associate a quel client, che non potranno più essere utilizzate per ottenere voucher validi da spendere presso gli e-service degli erogatori.
{% endhint %}

### Gestire i membri di un client o un portachiavi

In qualsiasi momento, è possibile aggiungere o rimuovere membri da uno specifico client o portachiavi. Le persone aggiunte avranno la possibilità di caricare chiavi pubbliche.

I membri rimossi non potranno più operare all'interno di quello specifico client o portachiavi, anche se le chiavi caricate fino a quel momento rimarranno valide e attive e potranno essere rimosse da altri utenti che hanno ancora accesso al client o portachiavi. Verranno evidenziate dall'interfaccia in modo da aiutare gli altri membri ad individuarle e sostituirle, prima di eliminarle. Questo comportamento è pensato per bilanciare le necessità di sicurezza e facilitare la continuità di servizio nell'eventualità di un ricambio di personale.&#x20;

Per gestire i membri di un client, andare su _Fruizione > I tuoi client e-service_ oppure _Fruizione > I tuoi client api interop_, trovare la riga della tabella dedicata al client di interesse e cliccare su _Ispeziona_. All'interno del singolo client, selezionare la tab _Membri del client_. La stessa operazione può essere effettuata sui portachiavi erogatore dalla vista _Erogazione > I tuoi portachiavi_.

{% hint style="warning" %}
Attenzione: continuare ad utilizzare chiavi associate ad un membro che non fa più parte della tua organizzazione costituisce un pericolo per la sicurezza. Elimina sempre le chiavi, dopo averle sostituite.
{% endhint %}

### Generare il materiale crittografico

Nella vista dell'interfaccia dedicata al caricamento delle chiavi si trova anche il link ad un breve tutorial che aiuta a dotarsi del materiale crittografico necessario. I punti più rilevanti sono riportati qui per completezza.

Per generare il materiale crittografico, aprire il terminale e incollare i comandi qui sotto. Per cambiare nome alla chiave, si può sostituire la stringa `client-test-keypair` con il nome che si vuole dare al file contenente la chiave.

```
openssl genrsa -out client-test-keypair.rsa.pem 2048
openssl rsa -in client-test-keypair.rsa.pem -pubout -out client-test-keypair.rsa.pub
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in client-test-keypair.rsa.pem -out client-test-keypair.rsa.priv
```

Il comando genererà una coppia di chiave pubblica e privata, ed un certificato che in questo caso non è necessario utilizzare. La chiave pubblica sarà caricata su PDND Interoperabilità, quella privata rimarrà in mano all'aderente, che la manterrà al sicuro e la userà per firmare la richiesta per&#x20;

* nel caso di client e-service: ottenere un voucher spendibile presso un e-service dal server autorizzativo di PDND Interoperabilità;
* nel caso di client API Interop: ottenere un voucher spendibile presso l'API esposta da PDND Interoperabilità dallo stesso server autorizzativo;
* nel caso di portachiavi erogatore: firmare una risposta da inviare ad un fruitore che ha legittimamente inoltrato una richiesta corredata di un voucher e-service in corso di validità.

Per quanto riguarda i client, l'artefatto da inviare al server autorizzativo è una "client assertion". Maggiori informazioni nella [sezione dedicata](utilizzare-i-voucher.md#flusso-voucher-spendibile-presso-un-e-service-del-catalogo).&#x20;

### Caricare una chiave pubblica in un client o portachiavi

Quando un membro di un client effettua l'accesso a PDND Interoperabilità, troverà i client ai quali è associato sotto _Fruizione > I tuoi client e-service_ e _Fruzione > I tuoi client api interop_. Entrando all'interno del client di interesse, può andare nella tab _Chiavi pubbliche_ e _+ Aggiungi_ per caricare una nuova chiave. Le chiavi caricate saranno immediatamente utilizzabili. Per i client di tipo e-service, questo deve essere associato ad almeno una finalità il cui flusso di interazione con l'erogatore è attivo.

L'operazione è analoga per i portachiavi erogatore, ed disponibile nella vista _Erogazione > I tuoi portachiavi_.

Per caricare una chiave:&#x20;

1. dopo aver generato la coppia di chiavi e averle riposte al sicuro, si copia il contenuto del file della chiave pubblica (finisce in `.pub`, e il cui file inizia con `-----BEGIN PUBLIC KEY-----`);&#x20;
2. si torna su PDND Interoperabilità;&#x20;
3. all’interno della propria utenza, si trova un bottone _Carica nuova chiave_;&#x20;
4. a quel punto, dopo aver incollato la chiave nel campo di testo, si clicca su _Carica chiave_. Si riceve immediatamente riscontro se il caricamento è andato a buon fine. Se dovessero verificarsi errori, si possono seguire le istruzioni indicate nel messaggio di errore o guardare nelle [FAQ](../faq/per-i-dpo.md) di questa guida.

### Rimuovere una chiave pubblica da un client o portachiavi

Per eliminare una chiave pubblica da un client, un membro può andare su _Fruizione > I tuoi client e-service_ oppure _Fruizione > I tuoi client api interop_ e cliccare su _Ispeziona_ per il client di interesse. All'interno, nella tab _Chiavi pubbliche_ sarà disponibile l'elenco delle chiavi caricate per quel client. Cliccando sui tre pallini della chiave di interesse, è disponibile l'azione _Elimina_, che eliminerà la chiave.&#x20;

L'operazione è analoga per i portachiavi erogatore, ed disponibile nella vista _Erogazione > I tuoi portachiavi_.
