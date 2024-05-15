# Creazione pacchetto "Per tutti"

Questa sezione descrive nel dettaglio le modalità per creare un pacchetto "Per tutti".

{% hint style="info" %}
Si ricorda che un pacchetto "Per tutti" ha validità per tutti gli EC aderenti alla piattaforma
{% endhint %}

Accedendo alla funzionalità `"Pacchetti commissioni"` dal menu laterale di sinistra e spostandosi nel tab `"Per tutti"` è possibile accedere alla funzione di creazione del pacchetto.

<figure><img src="../../../../.gitbook/assets/Screenshot 2024-05-14 alle 17.05.56.png" alt=""><figcaption></figcaption></figure>

Una volta schiacciato il pulsante `Crea pacchetto` il sistema mostrerà la seguente interfaccia per poter inserire tutte le informazioni necessarie alla creazione del pacchetto

<figure><img src="../../../../.gitbook/assets/image (218).png" alt=""><figcaption></figcaption></figure>

Le informazioni da inserire sono le seguenti:

* Nome del pacchetto
* Descrizione del pacchetto
* Tipo di pagamento (menu a tendina) (per maggiori info [https://docs.pagopa.it/dizionario-dei-metadata/dati-canale-pagamento](https://docs.pagopa.it/dizionario-dei-metadata/dati-canale-pagamento))
  * Carta di debito / credito
  * Apple Pay
  * Bancomat Pay
  * Conto Banca Popolare di Sondrio
  * Conto Banco Posta&#x20;
  * Conto Banco PostaImpresa
  * Conto Intesa Sanpaolo
  * MyBank
  * Paga con PostePay
  * Paypal
* Touchpoint (menu a tendina)
  * &#x20;IO
  * pagoPA Checkout
  * ATM
  * POS
  * Canale PSP
  * WISP
* Fascia Importo&#x20;
  * Minimo&#x20;
  * Massimo
* Commissioni
  * Importo applicato dal PSP
* Dati di connessione
  * Codice Broker -> codice fiscale del PSP&#x20;
  * Codice Canale -> codice del canale del PSP su cui far valere il pacchetto
* Marca da bollo digitale (le due opzioni sono esclusive)
  * Pagamento con marca da bollo
  * Pagamento solo con marca da bollo
* Periodo di validità del pacchetto&#x20;
  * Data inizio validità&#x20;
  * Data fine validità

{% hint style="warning" %}
N.B. Il tipo di pagamento inserito nel menu a tendina deve essere coerente con quello gestito sul canale su cui far valere il pacchetto commissionale. Qualora vi fosse infatti incongruenza il pagamento andrebbe in errore.
{% endhint %}

Compilate le informazioni di cui sopra è necessario proseguire schiacciando il pulsante "`Continua`" il quale attiverà il passaggio alla seconda fase di configurazione del pacchetto, ovvero la possibilità di inserire delle tassonomie specifiche per quel determinato pacchetto. (Per maggiori informazioni sulle tassonomie consultare [https://docs.pagopa.it/sanp/ente-creditore/tassonomia-dei-servizi-di-incasso](https://docs.pagopa.it/sanp/ente-creditore/tassonomia-dei-servizi-di-incasso))

<figure><img src="../../../../.gitbook/assets/image (176).png" alt=""><figcaption></figcaption></figure>

Schiacciando il pulsante `"Sfoglia catalogo"` è possibile accedere all'elenco delle tassonomie disponibili raggruppate per tipologia di Ente Creditore, di Area e di specifico servizio.&#x20;

<div align="center" data-full-width="false">

<figure><img src="../../../../.gitbook/assets/image (178).png" alt="" width="188"><figcaption><p>Vista tassonomie per Ente Creditore</p></figcaption></figure>

</div>

<figure><img src="../../../../.gitbook/assets/image (179).png" alt="" width="188"><figcaption><p>Vista tassonomie per Area</p></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/image (180).png" alt="" width="188"><figcaption><p>Vista tassonomia per servizio di incasso</p></figcaption></figure>

E' possibile indicare una singolo servizio oppure più di uno.

<figure><img src="../../../../.gitbook/assets/image (181).png" alt="" width="188"><figcaption><p>Seleziona singolo servizio</p></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/image (182).png" alt="" width="188"><figcaption><p>Seleziona molteplici servizi</p></figcaption></figure>

Una volta selezionato il servizio (o i servizi) è necessario schiacciare il pulsante `"Aggiungi"` che porta ad una pagina di riepilogo dalla quale è possibile vedere i servizi associati al pacchetto. Dalla stessa pagina è possibile eseguire modifiche ai servizi scelti.

<figure><img src="../../../../.gitbook/assets/image (183).png" alt=""><figcaption><p>Vista riepilogo servizi incasso</p></figcaption></figure>

Schiacciando il pulsante `"Sfoglia catalogo"` si torna alla possibilità di scelta di ulteriori servizi come specificato nelle sezioni precedenti.&#x20;

Schiacciando invece il pulsante `"carica il file"` è possibile fare l'upload di un csv contenente i codici delle tassonomie da caricare.&#x20;

Di seguito un esempio di file csv



Schiacciando invece il pulsante `"Rimuovi"` è possibile rimuovere l'intera categoria di servizi.

<figure><img src="../../../../.gitbook/assets/image (184).png" alt=""><figcaption><p>Rimozione categoria servizi</p></figcaption></figure>

Schiacciando invece il pulsante `"-"` sulla sinistra di ogni singolo servizio è possibile invece rimuovere soltanto il servizio specifico.

<figure><img src="../../../../.gitbook/assets/image (185).png" alt=""><figcaption><p>Rimozione singolo servizio</p></figcaption></figure>

Terminata la fase di selezione dei servizi di incasso è necessario proseguire schiacciando il pulsante "`Continua`" il quale attiverà un popup preventivo alla conferma dei dati

<figure><img src="../../../../.gitbook/assets/image (163).png" alt=""><figcaption><p>Popup conferma creazione pacchetto globale</p></figcaption></figure>

Schiacciando il pulsante "`Conferma`" si procederà alla creazione del pacchetto globale. Esso sarà poi visibile nella sezione "`Pacchetti commissioni`" nel tab "`Per tutti`"

{% hint style="info" %}
Il pacchetto appena creato sarà visibile anche a tutti gli EC nell'apposita maschera riepilogativa di tutti i pacchetti "Per tutti"
{% endhint %}

<figure><img src="../../../../.gitbook/assets/Screenshot 2024-05-14 alle 17.10.04.png" alt=""><figcaption></figcaption></figure>
