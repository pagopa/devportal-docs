# Ciclo di vita

## Informazioni per la creazione della finalità

Le finalità sono composte da alcune informazioni non variabili come:

* l'**e-service** a cui si intende accedere;
* l'**analisi del rischio**, ossia la dichiarazione della modalità del trattamento dei dati dei quali si viene in possesso;
* l'eventuale annotazione di **accesso a titolo gratuito** e la sua **motivazione**.

{% hint style="info" %}
Per le Pubbliche Amministrazioni, l'accesso è sempre a titolo gratuito. Come motivazione, si può lasciare il default impostato nel campo, ossia "Sono una Pubblica Amministrazione".
{% endhint %}

Inoltre, hanno alcune informazioni variabili, quali:

* il **nome** e la **descrizione**, che servono al fruitore a orientarsi tra le finalità che ha inoltrato;
* la **stima del carico** che si intende porre sull'infrastruttura dell'erogatore, cioè il numero di chiamate al giorno che si stima di effettuare verso l'API esposta dall'e-service; questa stima può essere aggiornata in qualsiasi momento. Tuttavia, si possono verificare due scenari distinti:
  * **Aggiornamento di una stima già approvata:** Se la nuova richiesta supera una o entrambe le soglie stabilite dall'erogatore, la modifica passa in stato "In attesa di approvazione". Nel frattempo, il fruitore può continuare a utilizzare regolarmente la finalità con la stima precedentemente concordata, fino all'eventuale approvazione della nuova configurazione.
  * **Prima sottomissione oltre le soglie:** Se già la stima iniziale supera una o entrambe le soglie dell'erogatore, l'intera finalità viene posta "In attesa di approvazione" e non può essere utilizzata per ottenere voucher fino all'approvazione manuale da parte dell'erogatore.
* i **client** associati, cioè quelli attraverso i quali è possibile ottenere un voucher valido: è possibile associare i client solo alle finalità attive. Tutte le chiavi presenti all'interno di un client potranno essere utilizzate per ottenere voucher relativi alla finalità associata, per tutta la durata dell'associazione. È facoltà degli utenti con ruolo di _amministratore_ gestire l'associazione tra finalità e client.

### Compilazione dell'analisi del rischio

Se l'e-service per cui si crea la finalità eroga dati, il fruitore - in quanto destinatario dei dati - deve compilare l'analisi del rischio.

Se l'e-service riceve invece dati, l'erogatore durante la creazione dell'e-service deve compilare un'analisi del rischio per ogni finalità per la quale riceverà dati dai fruitori.&#x20;

Il fruitore, nel creare la finalità, non deve compilare l'analisi del rischio, deve però scegliere per quale finalità, tra quelle proposte dall'erogatore, invierà dati all'erogatore. L'analisi del rischio sarà quella ammessa dalla finalità.

Per fare un esempio: l'erogatore prevede una finalità "per fini istituzionali" e una seconda finalità "per fini statistici". Quando il fruitore crea la finalità, deve scegliere una delle due finalità. L'erogatore è tenuto a trattare i dati ricevuti in conformità con quanto dichiarato nella finalità scelta dal fruitore.

## Stati di una finalità

Una **finalità** può trovarsi in uno dei seguenti stati:

* **Bozza**: è in fase di creazione e non è ancora stata inviata all'erogatore.
* **Attivo**: è possibile associare client e ottenere voucher da spendere presso l'API dell'erogatore per quella finalità.
* **Sospeso**: l’erogatore o il fruitore ha temporaneamente bloccato l'utilizzo di questa finalità per ottenere voucher.
* **In attesa di approvazione**: la finalità, o un suo adeguamento, presentano una stima di carico superiore alla capacità dell'infrastruttura dell'erogatore. Necessita approvazione manuale dall'erogatore per essere attivata.
* **Rifiutato**: l'erogatore ha valutato che la stima di carico presentata è troppo alta rispetto alle proprie capacità, e ha rifiutato la finalità o un suo adeguamento, dandone motivazione.
* **Archiviato**: il fruitore non intende più utilizzare questa finalità per ottenere voucher.

Le finalità possono essere mantenute in bozza a tempo indefinito. Una volta che vengono inoltrate all'erogatore, vengono attivate automaticamente dalla piattaforma. Questo accade fino al raggiungimento delle soglie massime di carico impostate dall'erogatore. Quando si eccede il carico che l'erogatore ha dichiarato di poter sostenere, questo avrà facoltà di attivarle manualmente.&#x20;

L'erogatore inoltre indicare una data di attivazione prevista, in modo da comunicare al fruitore quanto tempo servirà per adeguare l'infrastruttura a reggere il nuovo carico.

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
