# Finalità

### Perché creare una finalità?

Per recuperare le informazioni dall'API dell'erogatore, abbiamo visto che per prima cosa un fruitore deve inoltrare e vedersi attivata una richiesta di fruizione per un determinato e-service. A questo punto, per poterlo utilizzare, deve creare almeno una finalità da associare a questo e-service. Come indicato nel glossario, il ruolo della finalità per il fruitore è "dettagliare le sue ragioni e modalità di accesso alle informazioni in possesso dell'erogatore". Una volta creata una finalità, è possibile associare uno o più client sui quali verrà caricato il materiale crittografico necessario a ottenere un voucher valido da spendere presso l'erogatore. L'erogatore riceverà sempre indicazione della finalità per la quale il fruitore sta facendo una determinata richiesta di dati.

### Creare una finalità per e-service che eroga dati

Un fruitore può creare una nuova finalità andando su _Fruizione > Le tue finalità_ e cliccando _Crea nuovo_. Una finalità è composta essenzialmente da alcune informazioni generali, dalla stima di carico legata all'impiego delle risorse dell'erogatore, dall'analisi del rischio rispetto all'utilizzo dei dati e dai client associati. Una volta pubblicata la finalità, le informazioni generali e l'analisi del rischio non sono modificabili, mentre sarà possibile aggiornare i client utilizzati e la stima di carico.

La stima di carico che viene stabilita dall'erogatore si conta sempre per fruitore, questo vuol dire che se un fruitore crea più client e li associa alla stessa finalità, il numero di chiamate API si andrà a sommare tra i diversi client.

Nel momento in cui si crea la finalità, sarà necessario indicare l'e-service per il quale la finalità sarà attiva. Dall'elenco, si potranno scegliere solo gli e-service per i quali l'ente ha una richiesta di fruizione attiva.

Sarà sempre possibile mantenere la finalità in bozza o pubblicarla. Una volta pubblicata, diventerà immediatamente attiva se l'utilizzo delle risorse stimato dal fruitore è inferiore a tutte le soglie stabilite dell'erogatore. In caso contrario, dovrà invece essere approvata manualmente dall'erogatore. Per maggiori informazioni sul meccanismo di stima del carico, c'è una [sezione dedicata](finalita.md#aggiornare-la-stima-di-carico-di-una-finalita).

Per facilitare il compito dei fruitori rispetto alla compilazione dell'analisi del rischio, nella quale si indica "la finalità e le modalità del trattamento dei dati dei quali si viene in possesso", PDND Interoperabilità mette a disposizione un sistema di templating. In sostanza, sarà possibile esplorare le finalità sottoscritte da altri fruitori o i casi d'uso più comuni indicati dagli erogatori e creare una nuova richiesta di fruizione a partire da una già presente nell'archivio della piattaforma.

### Creare una finalità per e-service che riceve dati

Un esempio di questo tipo di e-service è quello erogato da ANAC per la gestione dell'e-procurement. In questo caso un gestore privato per creare una finalità deve seguire lo stesso percorso indicato sopra, ma a differenza degli e-service che erogano dati, per quelli che ne ricevono come nel caso dell'e-procurement l'analisi del rischio sarà precompilata dall'erogatore.

Il fruitore deve quindi selezionare la finalità prescelta dal menù a tendina (nel caso in cui l'erogatore ne abbia creata più di una) che mostrerà l'analisi del rischio corrispondente e proseguire con la compilazione della bozza di finalità fino ad arrivare al riepilogo.

<figure><img src="../.gitbook/assets/creazione finalità erogazione inversa.jpg" alt=""><figcaption><p>Esempio di creazione di una finalità per un gestore privato.</p></figcaption></figure>

A quel punto il fruitore può decidere se pubblicare la bozza di finalità e proseguire nell'iter di implementazione tecnica e accesso all'e-service.

### Associare e rimuovere i client da una finalità

È sempre possibile associare e rimuovere i client legati ad una finalità, anche dopo la sua pubblicazione. Se si intende modificare in un secondo momento uno o più client associati, il fruitore può andare su _Fruizione > Le mie finalità_, trovare la finalità desiderata e cliccare su _Ispeziona_. Nella tab _Client associati_ sarà possibile operare sui client.

<div>

<figure><img src="../.gitbook/assets/e-service client 1.png" alt=""><figcaption><p>Le mie finalità --> Ispeziona</p></figcaption></figure>

 

<figure><img src="../.gitbook/assets/e-serice client 2.png" alt=""><figcaption><p>Tab "Client associati"</p></figcaption></figure>

</div>

Una volta rimosso un client da una finalità, non sarà più possibile utilizzare le chiavi in esso contenute per ottenere voucher validi da spendere verso l'API dell'erogatore dell'e-service per quella specifica finalità.&#x20;

Per fare un esempio, se un client è associato alla finalità A e alla finalità B, entrambe a loro volta associate ad uno stesso e-service, se io rimuovo il client solo dalla finalità A, sarà possibile continuare ad ottenere voucher validi per l'e-service attraverso la finalità B.

### Aggiornare la stima di carico di una finalità

Se la motivazione per accedere ad un e-service rimane la stessa ma cambiano le necessità in termini di richieste API al giorno stimate, è possibile aggiornare la stima di carico per quella finalità. Se il risultato dell'aggiornamento è un valore sotto le soglie impostate dall'erogatore, verrà aggiornata automaticamente e sarà attiva da subito. In caso contrario, la finalità mostrerà come stato "In attesa di approvazione". Sarà facoltà esclusiva dell'erogatore decidere i tempi e le modalità di approvazione in base al carico della propria infrastruttura e ai propri processi interni.

Per aggiornare la stima di carico, bisogna entrare nella finalità di cui si vuole aggiornare il numero di chiamate API/giorno che si stima di fare, scorrere fino alla voce _Stima di carico_ e cliccare su _Richiedi cambio di piano._ Inserire la nuova stima di carico nella modale che viene aperta e cliccare su _Aggiorna_.

<figure><img src="../.gitbook/assets/UI richiedi cambio piano finalità" alt=""><figcaption><p>All'interno della finalità si trova la voce Stima di carico</p></figcaption></figure>

<figure><img src="../.gitbook/assets/Modale cambio piano finalità" alt=""><figcaption><p>Cliccando su Richiedi cambio piano si apre questo pannello laterale dove inserire la nuova stima</p></figcaption></figure>

### Finalità con stato "In aggiornamento"

Una finalità che è stata attivata può presentare come nuovo stato "In aggiornamento" quando il fruitore decide di aggiornare la stima di carico. Se la nuova stima rispetta tutte le soglie impostate dall’erogatore, la finalità vecchia con la nuova soglia sarà attivata automaticamente. In caso contrario, l’erogatore la troverà tra quelle “In attesa di approvazione” e dovrà ripetere il processo di attivazione. Fino a che la nuova soglia non viene attivata, il fruitore può continuare ad utilizzare la finalità attiva con la soglia precedente.

L'erogatore può prendere due strade: programmare una data stimata di approvazione del nuovo carico della finalità, oppure attivarla subito. La data impostata serve solo come indicazione, è modificabile e non è vincolante. Allo scadere del tempo, la nuova stima di carico non sarà attivata automaticamente, ma verrà solo ricordato all’erogatore che era prevista un’attivazione. L’attivazione di una finalità che supera una o più soglie è sempre e solo manuale ad opera dell’erogatore. L’azione di attivazione è irreversibile.

### Sospendere o riattivare una finalità

In qualsiasi momento il fruitore può unilateralmente sospendere una propria finalità. Il risultato sarà che le chiavi pubbliche in uso per quella finalità non permetteranno più di ottenere un voucher valido da spendere presso l'API dell'erogatore. Inoltre, verrà alleggerito il carico stimato sull'e-service dell'erogatore di una quota pari alla stima di carico della finalità appena sospesa.

Per sospendere una finalità, andare su _Fruizione > Le mie finalità_, cliccare sui tre pallini della finalità di interesse e selezionare l'azione _Sospendi_ o _Attiva_.

Quando una finalità viene sospesa dal fruitore, modificata e avrà così come stato "In attesa di approvazione", diventerà automaticamente attiva una volta che l'erogatore avrà approvato la nuova modifica, senza tornare allo stato di sospensione in cui si trovata prima della modifica.

### Archiviare una finalità

Se non sussiste più la necessità di accedere ad un e-service per una specifica finalità, è possibile archiviarla. Quest'azione è irreversibile, tuttavia sarà sempre possibile creare nuove finalità, anche in tutto e per tutto uguali a quelle archiviate.&#x20;

Il risultato dell'archiviazione sarà un alleggerimento del carico stimato sull'erogatore pari alla stima di carico prevista per quella finalità. Il fruitore potrà quindi sfruttare quel carico per eventuali altre finalità sullo stesso e-service, a patto che non si sia già superata la soglia globale dell'erogatore (ottenuta sommando tutti i carichi di tutte le finalità di tutti i fruitori).

L'archiviazione di una finalità fa sì che le chiavi che erano state depositate sui client associati non siano più utilizzabili per ottenere voucher presso l'erogatore per quella finalità. Continueranno comunque a funzionare per tutte le altre finalità alle quali sono associati.

Per archiviare una finalità, andare su _Fruizione > Le mie finalità_, cliccare sui tre pallini della finalità di interesse e selezionare l'azione _Archivia_.

{% hint style="info" %}
Ricordati di controllare periodicamente le tue finalità, e di archiviare quelle che non usi più. Questo piccolo accorgimento garantirà una migliore qualità di servizio per tutti.
{% endhint %}

### Eliminare una finalità

È possibile eliminare una finalità solamente quando questa è in bozza. Per eliminare una finalità in bozza, andare su _Fruizione > Le mie finalità_, cliccare sui tre pallini della finalità di interesse e selezionare l'azione _Elimina_.
