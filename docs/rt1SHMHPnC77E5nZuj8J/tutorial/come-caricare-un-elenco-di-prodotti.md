---
description: >-
  Questo tutorial spiega come caricare un file in formato CSV contenente un
  lotto di prodotti da sottoporre a validazione per l'inserimento nell'Elenco
  informatico degli elettrodomestici.
---

# Come caricare un elenco di prodotti

## Prerequisiti

Prima di procedere con il caricamento, è fondamentale che il file .csv segua scrupolosamente le indicazioni fornite. La struttura del file varia a seconda che i prodotti siano registrati o meno sulla banca dati europea EPREL, ovvero sul registro europeo delle etichette energetiche.

Per i dettagli sulla compilazione, consultare la sezione [Specifiche del file CSV](../riferimenti-tecnici/specifiche-del-file-csv.md).

## Procedura

Per caricare un nuovo lotto di prodotti, seguire i seguenti passaggi:

### **Step 1 - Accedere alla sezione di caricamento**&#x20;

Per caricare un nuovo lotto di prodotti, selezionare la voce **"Carica .csv"** nella sezione **"Prodotti"** dalla pagina **"Panoramica".**

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

### Step 2 - Selezionare la tipologia di prodotti&#x20;

Dopo aver cliccato sul pulsante **Carica .csv**, i _Produttori_ vengono reindirizzati ad una maschera di caricamento dei prodotti che andranno a comporre l’_Elenco informatico degli elettrodomestici_.

Le categorie dei prodotti che potranno essere caricate sono: apparecchi di refrigerazione (frigoriferi e congelatori), asciugatrici, cappe da cucina, forni, lavasciuga, lavastoviglie, lavatrici e piani cottura.

Per quanto riguarda le categorie appena descritte è necessario fare un’ulteriore distinzione:

* **Piani Cottura** → verranno eseguiti solamente i controlli formali. Non è necessaria alcuna autodichiarazione del _Produttore_ in quanto i dati caricati dal _Produttore_ stesso sono regolamentati dall’Art. 65, comma 1, lett. b) Codice Amministrazione Digitale;
* **tutte le altre categorie** ad eccezione dei Piani Cottura → ciascun record dei file csv verrà verificato su EPREL al fine di garantire la correttezza e la possibilità a quel prodotto di partecipare all’iniziativa.

<figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

### **Step 3 - Selezionare e caricare il file**&#x20;

Fare clic su **"Seleziona dal tuo computer"** per selezionare dal proprio computer il file .csv corrispondente alla tipologia scelta. Una volta selezionato, il nome del file apparirà a schermo.

### **Step 4 - Avviare il processo**&#x20;

Fare clic sul pulsante **"Carica"** per inviare il file al sistema. Un messaggio di conferma notificherà l'avvenuta presa in carico del file.

{% hint style="danger" %}
I controlli formali sul file verranno eseguiti in maniera sincrona; laddove ci siano problematiche, ne verrà data evidenza al _Produttore_ che potrà procedere con un ulteriore caricamento.

I controlli EPREL saranno eseguiti in modalità asincrona; pertanto, il file caricato dal _Produttore_ verrà inserito in una coda in attesa dell'elaborazione. In questa fase, il _Produttore_ non può procedere al caricamento di ulteriori file. Al termine dell'elaborazione, il _Produttore_ riceverà una comunicazione con l’esito del caricamento.
{% endhint %}

Il _Produttore,_ non ricevendo un esito immediato, può monitorare lo stato di avanzamento del processo nella sezione **"Storico Caricamenti"**, come descritto nel tutorial [Come consultare lo storico dei caricamenti](come-consultare-lo-storico-dei-caricamenti.md).

Nel caso in cui un prodotto venga escluso dai controlli automatici, il _Produttore_ riceverà una mail in cui verrà informato del caricamento parziale e verrà invitato ad accedere al portale al fine di capire la problematica impattante e [gestire gli errori](come-gestire-gli-errori-di-caricamento.md).

{% hint style="info" %}
Un file può contenere fino ad un massimo di **100** prodotti appartenenti ad una **singola** categoria. Nel caso si debbano caricare più di 100 prodotti è necessario dividere i prodotti su più file CSV.
{% endhint %}

Andato a buon fine il caricamento del file ogni singolo _Elettrodomestico_ viene verificato &#x65;_,_ una volta approvato da Invitalia S.p.A., confluisce nell'_Elenco informatico degli elettrodomestici_.
