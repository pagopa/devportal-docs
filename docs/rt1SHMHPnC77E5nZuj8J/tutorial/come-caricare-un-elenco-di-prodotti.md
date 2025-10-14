# Come caricare un elenco di prodotti

Questo tutorial spiega come caricare un file in formato **CSV** contenente un lotto di prodotti da sottoporre a validazione per l'inserimento nell'Elenco del Bonus Elettrodomestici.

### Prerequisiti

Prima di procedere con il caricamento, è fondamentale che il file `.csv` segua scrupolosamente le indicazioni fornite. La struttura del file varia a seconda che i prodotti siano registrati o meno sulla banca dati europea EPREL.

Per i dettagli sulla compilazione, consultare la sezione [Specifiche del file CSV](../riferimenti-tecnici/specifiche-del-file-csv.md).

### Procedura

Per caricare un nuovo lotto di prodotti, seguire i seguenti passaggi:

#### **Step 1 - Accedere alla sezione di caricamento**&#x20;

Per caricare un nuovo lotto di prodotti, selezionare la voce **"Carica .csv"** nella sezione **"Prodotti"** dalla pagina **"Panoramica".**

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

#### **Step 2 - Selezionare la tipologia di prodotti**&#x20;

Dopo aver cliccato sul pulsante Carica .csv i Produttori vengono reindirizzati ad una maschera di caricamento dei prodotti che andranno a comporre l’Elenco informatico degli elettrodomestici.

Le categorie dei Prodotti che potranno essere caricate sono: apparecchi di refrigerazione (frigoriferi e congelatori), asciugatrici, cappe da cucina, forni, lavasciuga, lavastoviglie, lavatrici e piani cottura.

Per quanto riguarda le categorie appena descritte è necessario fare un’ulteriore distinzione:

* **Piani Cottura** → verranno eseguiti solamente i controlli formali. Non è necessaria alcuna autodichiarazione del Produttore in quanto i dati caricati dal Produttore sono regolamentati dall’Art. 65, comma 1, lett. b) Codice Amministrazione Digitale
* **tutte le altre categorie** ad eccezione dei Piani Cottura → ciascun record dei file csv verrà verificato su EPREL al fine di garantire la correttezza e la possibilità a quel prodotto di partecipare all’iniziativa;

<figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

#### **Step 3 - Selezionare e caricare il file**&#x20;

Fare clic su **"Seleziona dal tuo computer"** per selezionare dal proprio computer il file `.csv` corrispondente alla tipologia scelta. Una volta selezionato, il nome del file apparirà a schermo.

#### **Step 4 - Avviare il processo**&#x20;

Fare clic sul pulsante **"Carica"** per inviare il file al sistema. Un messaggio di conferma notificherà l'avvenuta presa in carico del file.

{% hint style="danger" %}
I controlli formali sul file verranno eseguiti in maniera sincrona; laddove ci siano problematiche, ne verrà data evidenza al Produttore che potrà procedere con un ulteriore caricamento;

I controlli EPREL saranno eseguiti in asincrono; pertanto, il file caricato dal Produttore verrà messo in una coda, fino a quando non passerà un servizio che lo elaborerà e al termine informerà il Produttore dell’esito del caricamento.
{% endhint %}

&#x20;Il Produttore non riceve un esito immediato, ma può monitorare lo stato di avanzamento del processo nella sezione **"Storico Caricamenti"**, come descritto nel tutorial [Come consultare lo storico dei caricamenti](come-consultare-lo-storico-dei-caricamenti.md).

Nel caso in cui un Prodotto viene escluso dai controlli automatici, il Produttore riceverà una mail in cui verrà informato del caricamento parziale e verrà invitato ad accedere al portale al fine di capire la problematica impattante e [gestire gli errori](come-gestire-gli-errori-di-caricamento.md).
