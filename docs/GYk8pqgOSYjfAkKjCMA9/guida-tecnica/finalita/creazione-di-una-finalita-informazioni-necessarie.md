# Creazione di una finalità: informazioni necessarie

Le finalità sono composte da alcune informazioni non variabili come:

* l'**e-service** a cui si intende accedere;
* l'**analisi del rischio**, ossia la dichiarazione della modalità del trattamento dei dati dei quali si viene in possesso;
* l'eventuale **accesso a titolo gratuito** e la sua **motivazione**.

{% hint style="info" %}
Per le Pubbliche amministrazioni, l'accesso è sempre a titolo gratuito. Come motivazione, si può lasciare il default impostato nel campo, ossia "Sono una Pubblica Amministrazione".
{% endhint %}

Inoltre, hanno alcune informazioni variabili, quali:

* il **nome** e la **descrizione**, che servono al fruitore a orientarsi tra le finalità che ha inoltrato;
* la **stima del carico** che si intende porre sull'infrastruttura dell'erogatore, cioè il numero di chiamate al giorno che si stima di effettuare verso l'API esposta dall'e-service;
* i **client** associati, cioè quelli attraverso i quali è possibile ottenere un voucher valido.

### Creare una finalità

Nel momento in cui si crea la finalità, sarà necessario indicare l'e-service per il quale la finalità sarà attiva. Dall'elenco si potranno scegliere solo gli e-service per i quali l'ente ha una richiesta di fruizione attiva.

Si dovranno inoltre indicare un nome e una motivazione, il titolo gratuito, e la stima di carico.

### Creare una finalità per e-service che eroga dati

Se l'e-service per il quale si crea la finalità eroga dati, significa che a riceverli sarà il fruitore. Sarà dunque il fruitore a dover compilare l'analisi del rischio.

### Creare una finalità per e-service che riceve dati

Se l'e-service riceve invece dati, è l'erogatore che compila un'analisi del rischio per ogni finalità per la quale riceverà dati dai fruitori. Questa compilazione avviene durante la fase di creazione dell'e-service.

Il fruitore, nel creare la finalità, non compilerà dunque l'analisi del rischio. Dovrà però scegliere, tra le finalità proposte dall'erogatore, per quale tra quelle invierà dati all'erogatore. L'analisi del rischio sarà quella ammessa dalla finalità.

Per fare un esempio: l'erogatore prevede una finalità "per fini istituzionali" e una seconda finalità "per fini statistici". Quando il fruitore creerà la finalità, dovrà scegliere una delle due finalità, e quando invierà i dati all'erogatore, questo sarà tenuto a trattarli in conformità con quanto dichiarato nella finalità scelta dal fruitore.
