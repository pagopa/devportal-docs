# Avvisi di pagamento

{% hint style="danger" %}
Questa funzionalità verrà rilasciata negli ambienti di Collaudo e Produzione nelle prossime settimane ed entro settembre 2024.
{% endhint %}

Questa sezione descrive le modalità per configurare alcuni dati necessari alla funzionalità di stampa degli avvisi di pagamento (maggiori info su SANP).

Come descritto nelle SANP per poter stampare gli avvisi di pagamento in modalità selfservice rispettando le linee guida di PagoPA (maggiori info [https://docs.pagopa.it/avviso-pagamento](https://docs.pagopa.it/avviso-pagamento)) è necessario che alcune informazioni vengano impostare sul BackOffice pagoPA.

Le informazioni da specificare sono le seguenti:

* _**Logo**_ -> immagine png o jpeg che poi viene inserita nella stampa dell'avviso di pagamento
*   _**Settore**_ -> campo opzionale che se valorizzato intende specificare l'unità organizzativa che gestisce il pagamento (specifica tecnica [https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/informazioni-sullente-creditore#ente-settore](https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/informazioni-sullente-creditore#ente-settore))



    <figure><img src="../../.gitbook/assets/Screenshot 2024-06-06 alle 12.52.36.png" alt=""><figcaption><p>Sezione del bollettino dove viene valorizzato il campo Settore</p></figcaption></figure>


* _**Dove pagare**_ -> sezione dove poter specificare se l'ente accetta pagamenti presso un suo sito web, app oppure no

<figure><img src="../../.gitbook/assets/Screenshot 2024-06-06 alle 14.09.40.png" alt=""><figcaption><p>Sezione del bollettino dove viene impostata la dicitura "sul sito, o dall'app" </p></figcaption></figure>

* _**Bollettino Postale PA**_ -> sezione dove poter specificare se l'ente accetta pagamenti presso un conto postale e quindi sono necessari i seguenti campi:
  * "Intestato a" -> facoltativo
  * "Numero C/C postale" -> campo obbligatorio dove specificare il numero del conto corrente postale per gli incassi
  * Codice autorizzazione -> codice fornito da Poste Italiane per l'autorizzazione alla stampa in proprio del bollettino (maggiori info [https://business.poste.it/business/files/1476473321195/richiesta-autorizzazione-stampa-in-proprio-bollettini.pdf](https://business.poste.it/business/files/1476473321195/richiesta-autorizzazione-stampa-in-proprio-bollettini.pdf))

{% hint style="warning" %}
Si ricorda infatti che PagoPA non ha alcuna autorizzazione per la stampa del bollettino postale ma che agisce in qualità di intermediario delegato dall'ente, il quale deve prevedere al rilascio delle autorizzazioni per la stampa
{% endhint %}

<figure><img src="../../.gitbook/assets/image (213).png" alt=""><figcaption><p>Sezione del bollettino postale</p></figcaption></figure>

* _**Contatto per l'assistenza ->**_ campo obbligatorio che specifica il canale di contatto dell'ente utile al cittadino (specifica tecnica [https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/informazioni-sullente-creditore#ente-info](https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/informazioni-sullente-creditore#ente-info))

<figure><img src="../../.gitbook/assets/Screenshot 2024-06-06 alle 14.17.12.png" alt=""><figcaption><p>Sezione del bollettino dove viene valorizzato il campo Info</p></figcaption></figure>



Le informazioni di cui sopra vanno specificate all'interno della sezione "Avvisi di pagamento"

<figure><img src="../../.gitbook/assets/image (214).png" alt=""><figcaption></figcaption></figure>

Attraverso il pulsante "Configura modello" è possibile accedere alla form in cui specificare tutti i dettagli:

<figure><img src="../../.gitbook/assets/image (215).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (218).png" alt=""><figcaption></figcaption></figure>

Una volta inseriti i vari dati è possibile procedere con il tasto "Conferma" e vedere una pagina riepilogativa dei dati inseriti.

In qualsiasi momento è possibile procedere alla modifica delle informazioni in modo che queste vengano aggiornate sulle prossime stampe degli avvisi.&#x20;

<figure><img src="../../.gitbook/assets/image (219).png" alt=""><figcaption></figcaption></figure>

