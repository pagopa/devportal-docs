# External API

{% hint style="warning" %}
Le API descritte in questa sezione saranno disponibili negli ambienti di Collaudo e Produzione a partire dal 18/03/2024.
{% endhint %}

{% hint style="info" %}
Le API descritte in questa sezione hanno lo scopo di sostituire la vecchia primitiva deprecata [nodoChiediInformativaPA](https://docs.pagopa.it/sanp/appendici/primitive#nodochiediinformativapa). ([Funzionalità deprecate](https://docs.pagopa.it/sanp/appendici/funzionalita-deprecate))
{% endhint %}

{% hint style="success" %}
Lo swagger delle API è disponibile qui [https://github.com/pagopa/pagopa-api/blob/SANP3.7.0/openapi/openapi\_backoffice\_external.json](https://github.com/pagopa/pagopa-api/blob/SANP3.7.0/openapi/openapi\_backoffice\_external.json)
{% endhint %}

Questa sezione descrive le API che gli Intermediari / Partner Tecnologici possono utilizzare per accedere alle seguenti informazioni:

* Elenco di tutti gli IBAN degli Enti Creditori intermediati dallo specifico Partner Tecnologico / Intermediario&#x20;
* Elenco di tutti gli EC e delle loro Stazioni intermediati dallo specifico Partner Tecnologico / Intermediario

**All IBAN API**

{% hint style="warning" %}
Questa API verrà rilasciata successivamente al 18/3.
{% endhint %}

{% hint style="info" %}
Questa API prevede in input (`brokerCode`) il codice fiscale dell'Intermediario / Partner Tecnologico. Viene eseguito un controllo di autorizzazione tra il codice fornito e quanto presente all'interno dell'API Key.&#x20;
{% endhint %}

I dati che vengono restituiti dall'API sono i seguenti:

<table><thead><tr><th width="414">Nome Campo Logico</th><th width="181">Nome Campo API</th><th>Descrizione</th></tr></thead><tbody><tr><td>denominazioneEnte</td><td>ciName</td><td>denominazione dell'Ente Creditore</td></tr><tr><td>codiceFiscale</td><td>ciFiscalCode</td><td>codice fiscale dell'Ente Creditore</td></tr><tr><td>iban</td><td>iban</td><td>IBAN </td></tr><tr><td>stato</td><td>status</td><td>stato di attivazione dell'IBAN</td></tr><tr><td>dataAttivazioneIban</td><td>validityDate</td><td>data di attivazione dell'IBAN (coincide con il campo "data inizio" che si valorizza in fase di inserimento come descritto in <a href="broken-reference">Aggiungi Iban</a>)</td></tr><tr><td>descrizione</td><td>description</td><td>eventuale descrizione dell'IBAN</td></tr><tr><td>etichetta</td><td>label</td><td>etichetta che identifica se l'IBAN è di tipo "Stand IN" o "CUP".</td></tr></tbody></table>

**EC by Broker API**

I dati che vengono restituiti dall'API sono i seguenti:

{% hint style="info" %}
Questa API prevede in input (`brokerCode`) il codice fiscale dell'Intermediario / Partner Tecnologico. Viene eseguito un controllo di autorizzazione tra il codice fornito e quanto presente all'interno dell'API Key.&#x20;
{% endhint %}

<table><thead><tr><th width="251">Nome Campo Logico</th><th width="196">Nome Campo API</th><th>Descrizione</th></tr></thead><tbody><tr><td>denominazione EC</td><td>companyName</td><td>Ragione sociale EC</td></tr><tr><td>codiceFiscale EC</td><td>taxCode</td><td>Codice fiscale/p.iva EC</td></tr><tr><td>intedermediato</td><td>intermediated</td><td>EC diretto/indiretto true|false</td></tr><tr><td>denominazione PT</td><td>brokerCompanyName</td><td>Ragione sociale intermediario/partner</td></tr><tr><td>codiceFiscale PT</td><td>brokerTaxCode</td><td>Codice fiscale intermediario/partner</td></tr><tr><td>modello</td><td>model</td><td>Impostato fisso a 3</td></tr><tr><td>auxDigit</td><td>auxDigit</td><td>Aux Digit associato alla stazione</td></tr><tr><td>codice Segregazione</td><td>segregationCode</td><td>Codice segregazione associato alla stazione</td></tr><tr><td>codice Applicativo</td><td>applicationCode</td><td>Application code associato alla stazione</td></tr><tr><td>codice CBILL</td><td>cbillCode</td><td>Codice CBILL Ente</td></tr><tr><td>ID stazione</td><td>stationId</td><td>Id stazione associata all’ente</td></tr><tr><td>Stato stazione</td><td>stationState</td><td>Stato associazione attivo/disattivo</td></tr><tr><td>Data attivazione</td><td>activationDate</td><td>Data stato attivazione della stazione</td></tr><tr><td>versione</td><td>version</td><td>Versione della stazione</td></tr><tr><td>broadcast</td><td>broadcast</td><td>Stazione di broadcast true|false</td></tr><tr><td>Pagamento presso PSP</td><td>PSPpayment</td><td>Flag che indica se EC permette pagamento presso PSP</td></tr></tbody></table>

