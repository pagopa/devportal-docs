# Creazione pacchetto "Su richiesta"

Questa sezione descrive nel dettaglio le modalità per creare un pacchetto "Su richiesta".

{% hint style="info" %}
Si ricorda che un pacchetto "Su richiesta" è un pacchetto definito dal PSP che può essere pubblicato sul Market Place visibile agli EC i quali possono decidere di aderire a quel determinato pacchetto, eventualmente indicando una commissione a proprio carico.
{% endhint %}

Accedendo alla funzionalità `"Pacchetti commissioni"` dal menu laterale di sinistra e spostandosi nel tab `"Su richiesta"` è possibile accedere alla funzione di creazione del pacchetto.

<figure><img src="../../../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

Una volta cliccato il tasto "`Crea pacchetto"` il sistema mostrerà la seguente interfaccia per poter inserire tutte le informazioni necessarie alla creazione del pacchetto

<figure><img src="../../../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

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

Compilate le informazioni di cui sopra è necessario proseguire cliccando il tasto "`Continua`" il quale attiverà il passaggio alla seconda fase di configurazione del pacchetto, ovvero la possibilità di inserire delle tassonomie specifiche per quel determinato pacchetto. (Per maggiori informazioni sulle tassonomie consultare [https://docs.pagopa.it/sanp/ente-creditore/tassonomia-dei-servizi-di-incasso](https://docs.pagopa.it/sanp/ente-creditore/tassonomia-dei-servizi-di-incasso)).

<figure><img src="../../../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Cliccando sul tasto `"Sfoglia catalogo"` è possibile accedere all'elenco delle tassonomie disponibili raggruppate per tipologia di Ente Creditore, di Area e di specifico servizio.&#x20;

<div align="center">

<figure><img src="../../../../.gitbook/assets/image (3).png" alt="" width="188"><figcaption><p>Vista tassonomia per ente creditore</p></figcaption></figure>

</div>

<figure><img src="../../../../.gitbook/assets/image (4).png" alt="" width="188"><figcaption><p>Vista tassonomia per Area</p></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/image (5).png" alt="" width="188"><figcaption><p>Vista tassonomia per servizio di incasso</p></figcaption></figure>

E' possibile indicare una singolo servizio oppure più di uno.

<figure><img src="../../../../.gitbook/assets/image (6).png" alt="" width="188"><figcaption></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/image (7).png" alt="" width="188"><figcaption></figcaption></figure>

Una volta selezionato il servizio (o i servizi) è necessario cliccare il tasto `"Aggiungi"` che porta ad una pagina di riepilogo dalla quale è possibile vedere i servizi associati al pacchetto. Dalla stessa pagina è possibile eseguire modifiche ai servizi scelti.

<figure><img src="../../../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

Cliccando il tasto`"Sfoglia catalogo"` si torna alla possibilità di scelta di ulteriori servizi come specificato nelle sezioni precedenti.&#x20;

Cliccando invece il tasto `"Rimuovi"` è possibile rimuovere l'intera categoria di servizi.

<figure><img src="../../../../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

Cliccando invece il tasto `"-"` sulla sinistra di ogni singolo servizio è possibile invece rimuovere soltanto il servizio specifico.

<figure><img src="../../../../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

Terminata la fase di selezione dei servizi di incasso è necessario proseguire cliccando il tasto "`Continua`" il quale attiverà un popup preventivo alla conferma dei dati

<figure><img src="../../../../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

Cliccando il tatso "`Conferma`" si procederà alla creazione del pacchetto "Su richiesta". Esso sarà poi visibile nella sezione "`Pacchetti commissioni`" nel tab "Su richiesta"

{% hint style="info" %}
Il pacchetto appena creato sarà visibile a partire dal giorno successivo alla creazione anche a tutti gli EC nell'apposita maschera riepilogativa di tutti i pacchetti su richiesta dalla quale l'EC ne potrà richiedere l'adesione.
{% endhint %}
