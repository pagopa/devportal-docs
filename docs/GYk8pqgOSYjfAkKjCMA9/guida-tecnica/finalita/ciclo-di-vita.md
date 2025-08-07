# Ciclo di vita

## Stati

Una **finalità** può trovarsi in uno dei seguenti stati:

* **bozza**: è in fase di creazione e non è ancora stata inviata all'erogatore;
* **attivo**: è possibile associare client e ottenere voucher da spendere presso l'API dell'erogatore per quella finalità;
* **sospeso**: l’erogatore o il fruitore ha temporaneamente bloccato l'utilizzo di questa finalità per ottenere voucher;
* **in attesa di approvazione**: la finalità intera oppure un suo adeguamento presentano una stima di carico superiore alla capacità dell'infrastruttura dell'erogatore. Necessita approvazione manuale da parte dell'erogatore per essere attivata;
* **rifiutato**: l'erogatore ha valutato che la stima di carico presentata è troppo alta rispetto alle proprie capacità, e ha rifiutato la finalità o un suo adeguamento, dandone motivazione;
* **archiviato**: il fruitore non intende più utilizzare questa finalità per ottenere voucher.

## Operazioni

### Creazione di una bozza e inoltro della richiesta

È possibile presentare nuove finalità per tutti quegli e-service per i quali si ha una richiesta di fruizione attiva. Se la finalità presentata presenta una stima di carico inferiore a entrambe le soglie impostate dall'erogatore, questa viene attivata automaticamente. Per maggior dettaglio sul meccanismo di carico e soglia, si veda la sezione dedicata.

Le finalità possono essere mantenute in bozza a tempo indefinito. Una volta che vengono inoltrate all'erogatore, vengono attivate automaticamente dalla piattaforma. Questo accade fino al raggiungimento delle soglie massime di carico impostate dall'erogatore. Quando si eccede il carico che l'erogatore ha dichiarato di poter sostenere, questo avrà facoltà di attivarle manualmente.&#x20;

L'erogatore inoltre indicare una data di attivazione prevista, in modo da comunicare al fruitore quanto tempo servirà per adeguare l'infrastruttura a reggere il nuovo carico.

### Aggiornamento della stima di carico

È sempre possibile aggiornare la propria stima di carico, aumentando o riducendo il numero di chiamate API/giorno richieste all'erogatore.

Se la richiesta supera una o entrambe le soglie che l'erogatore ha impostato nella versione del proprio e-service, quell'adeguamento non sarà immediatamente attivo e utilizzabile. Sarà facoltà dell'erogatore approvarlo manualmente. Maggiori informazioni sul meccanismo di soglia e stima nella [sezione dedicata](../e-service/soglie-e-stime-di-carico.md).

### Approvazione o rifiuto di una finalità sopra soglia

Quando il fruitore inoltra una nuova finalità, questa può essere sotto entrambe le soglie di chiamate API/giorno previste dall'erogatore. In quel caso viene attivata automaticamente. In caso contrario, dovrà essere attivata manualmente dall'erogatore.

In questo caso, l'erogatore può attivarla manualemnte, oppure rifiutarla, fornendo al fruitore apposita motivazione che sarà consultabile su PDND Interoperabilità. È comunque facoltà del fruitore presentare nuove finalità.

### Sospendere o riattivare una finalità

Una finalità può essere sospesa e riattivata indipendentemente sia dal fruitore che dall'erogatore. Per tornare in stato attivo, deve essere riattivata dall'attore che l'ha sospesa.

Ad esempio, se una finalità viene sospesa dall'erogatore, dovrà essere riattivata dall'erogatore perché torni attiva. È anche possibile che entrambi gli attori sospendano la finalità. In questo caso, dovrà essere riattivata da entrambi perché torni attiva.

Quando una finalità viene sospesa, non permette più a nessuno dei client associati di ottenere voucher per quella finalità. Questa circostanza verrà segnalata anche nello strumento di _Debug client assertion_ presente nel back office se si inserisce una client assertion relativa alla finalità sospesa.

### Archiviare una finalità

Se non sussiste più la necessità di accedere ad un e-service per una specifica finalità, è possibile archiviarla. Quest'azione è irreversibile, tuttavia sarà sempre possibile creare nuove finalità, anche in tutto e per tutto uguali a quelle archiviate.&#x20;

Il risultato dell'archiviazione sarà un alleggerimento del carico stimato sull'erogatore pari alla stima di carico prevista per quella finalità. Il fruitore potrà quindi sfruttare quel carico per eventuali altre finalità sullo stesso e-service, a patto che non si sia già superata la soglia totale dell'erogatore.

L'archiviazione di una finalità fa sì che le chiavi che erano state depositate sui client associati non siano più utilizzabili per ottenere voucher presso l'erogatore per quella finalità. Continueranno comunque a funzionare per tutte le altre finalità alle quali sono associati.

{% hint style="info" %}
Ricordati di controllare periodicamente le tue finalità, e di archiviare quelle che non usi più. Questo piccolo accorgimento garantirà una migliore qualità di servizio per tutti.
{% endhint %}
