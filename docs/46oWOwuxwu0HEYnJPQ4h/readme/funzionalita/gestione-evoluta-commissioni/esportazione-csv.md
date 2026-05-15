# Esportazione CSV

Questa funzionalità offre la possibilità di esportare in formato csv tutte le tipologie di pacchetto.&#x20;

La funzionalità è accessibile direttamente dalla pagina di gestione dei pacchetti cliccando sul pulsante "Scarica lista".

<figure><img src="../../../../pago-pa/manuale-bo-psp/v1.0/.gitbook/assets/Screenshot 2024-11-19 alle 09.38.35.png" alt=""><figcaption></figcaption></figure>

Una volta schiacciato il pulsante viene proposta la maschera di scelta dell'export da eseguire, se totale oppure se specifico di una tipologia di pacchetto.

<figure><img src="../../../../pago-pa/manuale-bo-psp/v1.0/.gitbook/assets/Screenshot 2024-11-19 alle 09.39.00.png" alt=""><figcaption></figcaption></figure>

L' output del csv è così strutturato:

* ID -> identificativo tecnico del pacchetto (rif. IdBundle in[https://docs.pagopa.it/sanp/appendici/primitive#pspnotifypayment-versione-2](https://docs.pagopa.it/sanp/appendici/primitive#pspnotifypayment-versione-2))
* Nome -> Nome del pacchetto
* Descrizione -> Descrizione del pacchetto
* Tipologia -> Tipologia del pacchetto (Per tutti, Su richiesta, Su invito)
* Commissione -> Fee del pacchetto
* Importo pagamento minimo&#x20;
* Importo pagamento massimo
* Tipo di pagamento ->&#x20;

![](<../../../../pago-pa/manuale-bo-psp/v1.0/.gitbook/assets/Screenshot 2024-11-19 alle 09.53.40.png>)

* Touchpoint ->

&#x20;![](<../../../../pago-pa/manuale-bo-psp/v1.0/.gitbook/assets/Screenshot 2024-11-19 alle 09.53.56 (1).png>)

* Valido da -> data di inizio validità del pacchetto
* Valido a -> data di fine validità del pacchetto
* Ultima modifica -> data ultima modifica del pacchetto
* ID canale -> identificativo del canale del PSP
* Nome PSP -> Ragione sociale del PSP
* Codice Fiscale PSP -> Codice fiscale del PSP
* Gestione carrello di pagamenti -> Flag indicante se il pacchetto è valido anche per pagamenti con carrello&#x20;
* Pagamento con marca da bollo -> Flag indicante se il pacchetto vale anche per pagamenti che includono una marca da bollo
* Pagamento solo con marca da bollo ->  Flag indicante se il pacchetto vale solo per pagamenti che includono marca da bollo



Un esempio di file csv è il seguente

{% file src="../../../../pago-pa/manuale-bo-psp/v1.0/.gitbook/assets/PSP-DEMO_2024-11-19_tutti_bundle-export.csv" %}

