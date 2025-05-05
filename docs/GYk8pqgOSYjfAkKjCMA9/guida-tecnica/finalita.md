# Finalità

Una finalità è composta da informazioni generali come:

* l'e-service a cui si intende accedere;
* la finalità e le modalità del trattamento dei dati dei quali si viene in possesso (analisi del rischio);
* la stima del carico che si intende porre sull'infrastruttura, cioè il numero di chiamate all'API dell'erogatore al giorno;
* i client associati, cioè quelli attraverso i quali è possibile ottenere un voucher valido.

Le finalità vengono attivate quando il fruitore le presenta all'erogatore, automaticamente, fino al raggiungimento delle soglie massime di carico impostate dall'erogatore. Quando si eccede il carico che l'erogatore ha dichiarato di poter sostenere, le nuove finalità non saranno più attivate automaticamente. Da quel punto in poi, l'erogatore avrà facoltà di attivarle manualmente, dichiarando anzitempo una data di attivazione, in modo da avere il tempo di adeguare l'infrastruttura a reggere il carico.

Una volta pubblicata la finalità, le informazioni generali e l'analisi del rischio non sono modificabili, mentre sarà possibile aggiornare i client utilizzati e la stima di carico.

Sarà sempre possibile mantenere la finalità in bozza o pubblicarla. Una volta pubblicata, diventerà immediatamente attiva se l'utilizzo delle risorse stimato dal fruitore è inferiore a tutte le soglie stabilite dell'erogatore. In caso contrario, dovrà invece essere approvata manualmente dall'erogatore.&#x20;

Per facilitare il compito dei fruitori rispetto alla compilazione dell'analisi del rischio, nella quale si indica "la finalità e le modalità del trattamento dei dati dei quali si viene in possesso", PDND Interoperabilità mette a disposizione un sistema di templating. In sostanza, sarà possibile esplorare le finalità sottoscritte da altri fruitori o i casi d'uso più comuni indicati dagli erogatori e creare una nuova richiesta di fruizione a partire da una già presente nell'archivio della piattaforma.

### Creare una finalità

Nel momento in cui si crea la finalità, sarà necessario indicare l'e-service per il quale la finalità sarà attiva. Dall'elenco si potranno scegliere solo gli e-service per i quali l'ente ha una richiesta di fruizione attiva.

Per recuperare le informazioni dall'API dell'erogatore per prima cosa un fruitore deve inoltrare e vedersi attivata una richiesta di fruizione per un determinato e-service. A questo punto, deve creare almeno una finalità da associare a questo e-service. Il ruolo della finalità per il fruitore è dettagliare le sue ragioni e modalità di accesso alle informazioni in possesso dell'erogatore. Una volta creata una finalità, è possibile associare uno o più client sui quali verrà caricato il materiale crittografico necessario a ottenere un voucher valido da spendere presso l'erogatore. L'erogatore riceverà sempre indicazione della finalità per la quale il fruitore sta facendo una determinata richiesta di dati.

### Creare una finalità per e-service che eroga dati

Una finalità è composta essenzialmente da alcune informazioni generali, dalla stima di carico legata all'impiego delle risorse dell'erogatore, dall'analisi del rischio rispetto all'utilizzo dei dati e dai client associati. Una volta pubblicata la finalità, le informazioni generali e l'analisi del rischio non sono modificabili, mentre sarà possibile aggiornare i client utilizzati e la stima di carico.

La stima di carico che viene stabilita dall'erogatore si conta sempre per fruitore, questo vuol dire che se un fruitore crea più client e li associa alla stessa finalità, il numero di chiamate API si andrà a sommare tra i diversi client.

Nel momento in cui si crea la finalità, sarà necessario indicare l'e-service per il quale la finalità sarà attiva. Dall'elenco, si potranno scegliere solo gli e-service per i quali l'ente ha una richiesta di fruizione attiva.

Sarà sempre possibile mantenere la finalità in bozza o pubblicarla. Una volta pubblicata, diventerà immediatamente attiva se l'utilizzo delle risorse stimato dal fruitore è inferiore a tutte le soglie stabilite dell'erogatore. In caso contrario, dovrà invece essere approvata manualmente dall'erogatore. Per maggiori informazioni sul meccanismo di stima del carico, c'è una [sezione dedicata](finalita.md#aggiornare-la-stima-di-carico-di-una-finalita).

Per facilitare il compito dei fruitori rispetto alla compilazione dell'analisi del rischio, nella quale si indica "la finalità e le modalità del trattamento dei dati dei quali si viene in possesso", PDND Interoperabilità mette a disposizione un sistema di templating: è possibile esplorare le finalità sottoscritte da altri fruitori o i casi d'uso più comuni indicati dagli erogatori e creare una nuova richiesta di fruizione a partire da una già presente nell'archivio della piattaforma.

### Associare e rimuovere i client da una finalità

È possibile associare e rimuovere i client legati ad una finalità una volta che questa è stata approvata dall'erogatore. Se la finalità è in stato di bozza o in attesa di approvazione non sarà possibile associare un client.

Una volta rimosso un client da una finalità, non sarà più possibile utilizzare le chiavi in esso contenute per ottenere voucher validi da spendere verso l'API dell'erogatore dell'e-service per quella specifica finalità.&#x20;

Se un client è associato a due finalità, entrambe a loro volta associate ad uno stesso e-service, se il client viene rimosso da una delle due finalità, sarà possibile continuare ad ottenere voucher validi per l'e-service attraverso l'altra finalità.

### Aggiornare la stima di carico di una finalità

La stima di carico che viene stabilita dall'erogatore è relativa al singolo fruitore, questo vuol dire che se un fruitore crea più client e li associa alla stessa finalità, il numero di chiamate API massimo  sarà la somma delle chiamate sui diversi client.

È possibile aggiornare la stima di carico per una finalità se la motivazione per accedere a un e-service rimane la stessa ma cambia la stima delle richieste API giornaliere. Se l'aggiornamento mantiene un valore sotto le soglie impostate dall'erogatore, la stima di carico verrà aggiornata automaticamente e sarà attiva da subito. In caso contrario, la finalità mostrerà come stato "In attesa di approvazione". Sarà facoltà esclusiva dell'erogatore decidere i tempi e le modalità di approvazione in base al carico della propria infrastruttura e ai propri processi interni.

### Finalità con stato "In aggiornamento"

Una finalità che è stata attivata può presentare come nuovo stato "In aggiornamento" quando il fruitore decide di aggiornare la stima di carico. Se la nuova stima rispetta tutte le soglie impostate dall’erogatore, la finalità vecchia con la nuova soglia sarà attivata automaticamente. In caso contrario, l’erogatore la troverà tra quelle “In attesa di approvazione” e dovrà ripetere il processo di attivazione. Fino a che la nuova soglia non viene attivata, il fruitore può continuare ad utilizzare la finalità attiva con la soglia precedente.

L'erogatore può prendere due strade: programmare una data stimata di approvazione del nuovo carico della finalità, oppure attivarla subito. La data impostata serve solo come indicazione, è modificabile e non è vincolante. Allo scadere del tempo, la nuova stima di carico non sarà attivata automaticamente, ma verrà solo ricordato all’erogatore che era prevista un’attivazione. L’attivazione di una finalità che supera una o più soglie è sempre e solo manuale ad opera dell’erogatore. L’azione di attivazione è irreversibile.

### Sospendere o riattivare una finalità

In qualsiasi momento il fruitore può unilateralmente sospendere una propria finalità. Il risultato sarà che le chiavi pubbliche in uso per quella finalità non permetteranno più di ottenere un voucher valido da spendere presso l'API dell'erogatore. Inoltre, verrà alleggerito il carico stimato sull'e-service dell'erogatore di una quota pari alla stima di carico della finalità appena sospesa.

Quando una finalità viene sospesa dal fruitore, modificata e avrà così come stato "In attesa di approvazione", diventerà automaticamente attiva una volta che l'erogatore avrà approvato la nuova modifica, senza tornare allo stato di sospensione in cui si trovata prima della modifica.

### Archiviare una finalità

Se non sussiste più la necessità di accedere ad un e-service per una specifica finalità, è possibile archiviarla. Quest'azione è irreversibile, tuttavia sarà sempre possibile creare nuove finalità, anche in tutto e per tutto uguali a quelle archiviate.&#x20;

Il risultato dell'archiviazione sarà un alleggerimento del carico stimato sull'erogatore pari alla stima di carico prevista per quella finalità. Il fruitore potrà quindi sfruttare quel carico per eventuali altre finalità sullo stesso e-service, a patto che non si sia già superata la soglia globale dell'erogatore (ottenuta sommando tutti i carichi di tutte le finalità di tutti i fruitori).

L'archiviazione di una finalità fa sì che le chiavi che erano state depositate sui client associati non siano più utilizzabili per ottenere voucher presso l'erogatore per quella finalità. Continueranno comunque a funzionare per tutte le altre finalità alle quali sono associati.



{% hint style="info" %}
Ricordati di controllare periodicamente le tue finalità, e di archiviare quelle che non usi più. Questo piccolo accorgimento garantirà una migliore qualità di servizio per tutti.
{% endhint %}

