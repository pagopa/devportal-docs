# External API

{% hint style="info" %}
Le API descritte in questa sezione hanno lo scopo di sostituire la vecchia primitiva deprecata [nodoChiediInformativaPA](https://docs.pagopa.it/sanp/appendici/primitive#nodochiediinformativapa). ([Funzionalità deprecate](https://docs.pagopa.it/sanp/appendici/funzionalita-deprecate))
{% endhint %}

{% hint style="success" %}
Lo swagger delle API è disponibile qui&#x20;

[https://developer.pagopa.it/pago-pa/api/elenco-IBAN-stazioni#/](https://developer.pagopa.it/pago-pa/api/elenco-IBAN-stazioni#/)
{% endhint %}

Questa sezione descrive le API che i PSP possono utilizzare per accedere alle seguenti informazioni:

* Elenco di tutti gli IBAN degli Enti Creditori aderenti alla piattaforma

**All IBAN API**

I dati che vengono restituiti dall'API sono i seguenti:

<table><thead><tr><th width="414">Nome Campo Logico</th><th width="181">Nome Campo API</th><th>Descrizione</th></tr></thead><tbody><tr><td>denominazioneEnte</td><td>ciName</td><td>denominazione dell'Ente Creditore</td></tr><tr><td>codiceFiscale</td><td>ciFiscalCode</td><td>codice fiscale dell'Ente Creditore</td></tr><tr><td>iban</td><td>iban</td><td>IBAN </td></tr><tr><td>stato</td><td>status</td><td>stato di attivazione dell'IBAN</td></tr><tr><td>dataAttivazioneIban</td><td>validityDate</td><td>data di attivazione dell'IBAN (coincide con il campo "data inizio" che si valorizza in fase di inserimento come descritto in <a href="broken-reference">Aggiungi Iban</a>)</td></tr><tr><td>descrizione</td><td>description</td><td>eventuale descrizione dell'IBAN</td></tr><tr><td>etichetta</td><td>label</td><td>etichetta che identifica se l'IBAN è di tipo "Stand IN" o "CUP".</td></tr></tbody></table>

