# Inviare le richieste di rimborso

Dopo aver accettato un buono sconto, l'Operatore del Punto Vendita deve terminare la procedura di acquisto caricando la fattura dell'ordine per dare la possibilità al Venditore di [inviare la richiesta di rimborso](../tutorial-per-il-venditore/gestire-i-rimborsi.md) all'ente deputato ai controlli Invitalia S.p.A.&#x20;

### Prerequisiti

* La transazione deve essere in stato "[Fattura da caricare](../riferimenti-tecnici/stati-delle-transazioni.md)".
* Se la transazione è avvenuta online, devono essere trascorsi 14 giorni dalla consegna, così da garantire il [diritto di recesso previsto dal Codice del consumo](https://www.mimit.gov.it/it/assistenza/domande-frequenti/diritto-di-recesso-domande-frequenti-faq).

***

### Step 1 - Seleziona una transazione

Nella sezione "Gestione acquisti", selezionare la transazione di riferimento cliccando sulla relativa freccia blu, poi su "Carica la fattura".

<figure><img src="../.gitbook/assets/Dettaglio transazione - fattura da caricare.png" alt="Dettaglio di una transazione, su cui compare il pulsante &#x22;Carica la fattura&#x22; o &#x22;Storna&#x22;"><figcaption></figcaption></figure>

***

### Step 2 - Carica la fattura

È necessario caricare una fattura elettronica, in formato `XML` o `PDF` e inserire il relativo numero fattura.

La fattura dovrà contenere al suo interno:

* il riferimento al ritiro RAEE;
* codice sconto usato in fase d'acquisto (riportato nel [documento di pre-autorizzazione)](accettare-un-buono-sconto-in-negozio.md#step-5-stampa-il-documento-di-pre-autorizzazione).

<figure><img src="../.gitbook/assets/Carica la fattura (1).png" alt="Schermata di caricamento della fattura"><figcaption></figcaption></figure>

Completato il caricamento, la transazione passerà in stato "[Presa in carico](../riferimenti-tecnici/stati-delle-transazioni.md)": il Venditore dovrà quindi [effettuare la richiesta di rimborso](../tutorial-per-il-venditore/gestire-i-rimborsi.md).&#x20;

***

### (opzionale) Step 3 - Modifica la fattura

È possibile sostituire una fattura errata con quella corretta in qualsiasi momento purché lo stato del lotto non sia **Approvato**.

Per farlo, l'operatore deve cliccare sulla freccia blu dell'operazione e quindi su "Modifica documento". Dopo aver modificato la fattura, la transazione verrà spostata al lotto successivo nello stato **Da Controllare**.

<figure><img src="../.gitbook/assets/Modifica documento (2) (1).png" alt="Schermata in cui è possibile modificare una fattura già caricata"><figcaption></figcaption></figure>

