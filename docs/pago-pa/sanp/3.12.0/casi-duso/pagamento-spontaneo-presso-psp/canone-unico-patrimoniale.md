# Canone Unico Patrimoniale

La Legge del 27 dicembre 2019, n. 160 (legge di bilancio 2020), ha introdotto il Canone Unico Patrimoniale (CUP) anche per le occupazioni permanenti con cavi e condutture per la fornitura di servizi di pubblica utilità, la cui scadenza è prevista per il 30 aprile di ogni anno, a decorrere dal 2021.

La società soggetta al predetto Canone (di seguito denominata “Corporate”), deve:

* procedere al pagamento in “autoliquidazione”;
* effettuare un'“autodichiarazione” di quanto dovuto ad ogni singolo Ente;
* effettuare il versamento tramite la piattaforma pagoPA.

L’esecuzione del pagamento del CUP, pertanto, rappresenta un caso d'uso di[ pagamento spontaneo](https://developer.pagopa.it/it/pago-pa/guides/sanp/3.12.0/casi-duso/pagamento-spontaneo-presso-psp) attivato dal touchpoint del PSP.

Il nuovo processo mira a snellire e velocizzare il flusso operativo, eliminando un passaggio superfluo da parte della Corporate verso PagoPA per la creazione delle posizioni debitorie. In tal ottica, sfruttando il modello di pagamento spontaneo già presente sulla piattaforma pagoPA, la Corporate affida al PSP l'intero onere di gestire il flusso di creazione della posizione e del relativo pagamento.

Il seguente diagramma delinea il suddetto processo:

<figure><img src="../../.gitbook/assets/Screenshot 2026-05-29 alle 12.14.46.png" alt=""><figcaption></figcaption></figure>

1. Il PSP riceve dalla Corporate i dati necessari per effettuare il versamento:
   a. codice fiscale o codice territoriale dell’Ente beneficiario;
   b. dati anagrafici della Corporate;
   c. importo.
2. La[ demandPaymentNotice](https://developer.pagopa.it/it/pago-pa/guides/sanp/3.10.0/appendici/primitive#demandpaymentnotice) viene utilizzata dal PSP per trasmettere i dati specifici forniti dalla Corporate.


Di seguito un esempio della struttura che deve transitare tramite l’elemento `datiSpecificiServizio` in formato base64.<br>

```
<pagamentoCup>
    <organizationFiscalCode>77777777777</organizationFiscalCode>    
    <companyName>Corporate S.r.l.</companyName>
    <debtorFiscalCode>01234567890</debtorFiscalCode>
    <debtorFullName>Corporate</debtorFullName>
    <debtorEmail>administration@corporate.it</debtorEmail>
    <amount>150.50</amount>
</pagamentoCup>
```
La specifica XSD è presente al seguente[ url](https://github.com/pagopa/pagopa-api/pull/1108/changes). <br>
Per la corretta compilazione, è necessario attenersi alle seguenti regole di business:
- Il blocco `<choice>` impone l'invio di uno solo dei tre identificativi previsti (codice fiscale, codice ISTAT o codice catasto).
- Il campo `<debtorEmail>` è opzionale. Qualora la Corporate decida di valorizzarlo, dovrà essere inserito esclusivamente un indirizzo email aziendale (a scopo esemplificativo l’email deve essere [info@corporate.xx](mailto:info@corporate.xx) e non indirizzo personale [nome.cognome@corporate.xx](mailto:nome.cognome@corporate.xx)).


3. Il PSP procede con il pagamento della posizione debitoria i cui riferimenti sono forniti nella risposta della[ demandPaymentNotice](https://developer.pagopa.it/it/pago-pa/guides/sanp/3.10.0/appendici/primitive#demandpaymentnotice).
4. Il PSP fornisce la ricevuta di pagamento alla Corporate.
   
   
