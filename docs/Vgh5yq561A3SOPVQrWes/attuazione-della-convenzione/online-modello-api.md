# Online - Modello API

Nel caso in cui l’Operatore abbia scelto di aderire al Programma attraverso il proprio sito web e/o e-commerce e tramite il Modello API, l’identificazione del Beneficiario quale avente diritto all’agevolazione coincide con l’applicazione o il riconoscimento dell’agevolazione medesima in fase di acquisto, attraverso i seguenti passaggi:

* Il Beneficiario seleziona il bene/servizio, oggetto dell’agevolazione, sull’e-commerce dell’Operatore e arriva alla pagina di “checkout”;&#x20;
* Al momento dell’acquisto, il Beneficiario accede alla sua CGN sull’App IO, apre la schermata relativa all’agevolazione e genera un codice sconto temporaneo (OTP) per quella agevolazione, della durata di 10 minuti o fino a completamento della transazione, se precedente;&#x20;
* Il Beneficiario inserisce il codice generato nell’apposito campo predisposto dall’Operatore sul proprio e-commerce per l’applicazione di sconti e agevolazioni;&#x20;
* I sistemi dell’Operatore interrogano le API messe a disposizione da PagoPA S.p.A. per verificare la validità del codice.

In caso di risposta positiva (codice 200), l’agevolazione viene applicata alla transazione e il corrispondente OTP utilizzato viene invalidato per impedirne un ulteriore uso. In caso di risposta negativa (codice 404), l’Operatore visualizza il relativo messaggio di errore e l’agevolazione non verrà applicata.&#x20;

Gli errori collegati al fallimento della fase di validazione consistono nei seguenti stati:

* codice OTP scaduto (in caso di non utilizzo entro i 10 minuti di validità);&#x20;
* codice OTP invalido (codice 400);&#x20;
* codice OTP inesistente.

I sistemi dell’App IO che si occupano della validazione, controllo automaticamente, inoltre, che non esista già un codice OTP in corso di validità per il Beneficiario richiedente per la specifica agevolazione. Nel caso in cui esista un OTP ancora valido per quella agevolazione (perchè non utilizzato o non scaduto), viene restituito all’Operatore il codice di errore 409, che indica il conflitto con un OTP ancora valido.

Gli Operatori che intendono aderire utilizzando il Modello API, devono attenersi strettamente a quanto descritto nella presente documentazione tecnica reperibile al seguente [link](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/pagopa/io-functions-cgn-merchant/master/openapi/index.yaml), da ritenersi come parte integrante e sostanziale della Convenzione in virtù del presente riferimento.

Una volta approvata la richiesta di Convenzione da parte del Dipartimento, gli Operatori che hanno scelto il Modello API, potranno trovare le proprie API key all’interno della sezione “Profilo” nel Portale. Per qualsiasi necessità, nella medesima sezione gli Operatori possono generare nuove API key.

{% hint style="info" %}
**Importante:** Non appena le API key vengono rigenerate, quelle precedenti non saranno più utilizzabili.
{% endhint %}

#### Esperienza utente

<div align="left">

<img src="https://lh4.googleusercontent.com/_iR6quYVoorF1pW26p1O228-EUEZ5gkyMmkBXliPOUvsw23P7STZjajQHnkgNKSPjHHof0CyqA8O8dQWnGTPF7rp0KrNIFeCsbFPitqSlubXg7CYmS1JIyfHXgv8OYWsr27mUMA" alt="">

</div>

<mark style="color:purple;">**Fig. 2**</mark> <mark style="color:purple;"></mark><mark style="color:purple;">Esempio di carrello di un operatore con il campo di testo per l’inserimento del codice sconto</mark>



![](<../.gitbook/assets/Wallet - Dettaglio carta.png>)![](<../.gitbook/assets/Esercenti online.png>)![](https://lh3.googleusercontent.com/eo2VYsKM8h0frCep5A-lBvuxVuweuMhTcc0khfLNMXgf-QRbou-5-Afizl2mq0c0cT21lKfcUFKpMHmNf4tGI86zV1zZcOPro0r2EA8oysFFSprwGDjv\_Riyyy-dRw)![](<../.gitbook/assets/BS offerta - bucket mostra.png>)![](https://lh5.googleusercontent.com/dnnI6j1qoHvRp7d9Xsy9JX83zsEnLOKjc03ID5knAJQZ7Mn75CtEBo0zm83XFSPFNE-yeVLEtLHKuHgnmQBUOF8kmE3qMqjE2qtETtuxBR98G9ufouCbEBjm73f4bA)

<mark style="color:purple;">**Fig.3**</mark> <mark style="color:purple;"></mark><mark style="color:purple;">Dal dettaglio dell'agevolazione, l'utente genera un codice OTP</mark>

![](../.gitbook/assets/OTP\_01.png)![](../.gitbook/assets/OTP\_02.png)![](../.gitbook/assets/OTP\_03.png)

<mark style="color:purple;">**Fig. 4**</mark> <mark style="color:purple;"></mark><mark style="color:purple;">Il codice OTP può essere direttamente incollato nel campo dell’e-commerce. Se risulta valido, lo sconto verrà applicato al carrello</mark>

#### Formato OTP

I codici OTP generati dall’App IO per  CGN sono formati da 11 caratteri alfanumerici e utilizzano l’alfabeto maiuscolo inglese.\
Un'OTP identifica univocamente un tentativo di acquisto online e pertanto può essere utilizzato una sola volta.