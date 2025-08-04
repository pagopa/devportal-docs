# Finalità

È una dichiarazione che il fruitore presenta per dettagliare le sue ragioni e modalità di accesso alle informazioni in possesso dell'erogatore, nonché del loro trattamento. Una finalità è di norma associata ad un e-service per il quale un fruitore ha una richiesta di fruizione attiva.I punti salienti di una finalità sono 4:

1. a quale e-service si intende accedere;
2. la finalità, le modalità del trattamento e della conservazione dei dati dei quali si viene in possesso (questionario di _analisi del rischio_);
3. il carico che si intende porre sull'infrastruttura dell'erogatore (_stima di carico_, definita in numero di chiamate all'API dell'erogatore al giorno stimate);
4. i client associati, cioè quelli attraverso i quali è possibile ottenere un voucher valido.

Le finalità vengono attivate progressivamente quando sono presentate dal fruitore all'erogatore, in modo automatico, fino al raggiungimento delle soglie massime di carico impostate dall'erogatore.

* il **nome** e la **descrizione**, che servono al fruitore a orientarsi tra le finalità che ha inoltrato;
* la **stima del carico** che si intende porre sull'infrastruttura dell'erogatore, cioè il numero di chiamate al giorno che si stima di effettuare verso l'API esposta dall'e-service; questa stima può essere aggiornata in qualsiasi momento. Tuttavia, si possono verificare due scenari distinti:
  * **Aggiornamento di una stima già approvata:** Se la nuova richiesta supera una o entrambe le soglie stabilite dall'erogatore, la modifica passa in stato "In attesa di approvazione". Nel frattempo, il fruitore può continuare a utilizzare regolarmente la finalità con la stima precedentemente concordata, fino all'eventuale approvazione della nuova configurazione.
  * **Prima sottomissione oltre le soglie:** Se già la stima iniziale supera una o entrambe le soglie dell'erogatore, l'intera finalità viene posta "In attesa di approvazione" e non può essere utilizzata per ottenere voucher fino all'approvazione manuale da parte dell'erogatore.
* i **client** associati, cioè quelli attraverso i quali è possibile ottenere un voucher valido: è possibile associare i client solo alle finalità attive. Tutte le chiavi presenti all'interno di un client potranno essere utilizzate per ottenere voucher relativi alla finalità associata, per tutta la durata dell'associazione. È facoltà degli utenti con ruolo di _amministratore_ gestire l'associazione tra finalità e client.

Inoltre, hanno alcune informazioni variabili, quali:

{% hint style="info" %}
Per le Pubbliche Amministrazioni, l'accesso è sempre a titolo gratuito. Come motivazione, si può lasciare il default impostato nel campo, ossia "Sono una Pubblica Amministrazione".
{% endhint %}

* l'**e-service** a cui si intende accedere;
* l'**analisi del rischio**, ossia la dichiarazione della modalità del trattamento dei dati dei quali si viene in possesso;
* l'eventuale annotazione di **accesso a titolo gratuito** e la sua **motivazione**.

Le finalità sono composte da alcune informazioni non variabili come:

## Informazioni per la creazione della finalità

\
