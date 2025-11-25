# Passaporto

L’esecuzione del pagamento del passaporto è un processo che rappresenta uno dei casi d'uso di pagamento spontaneo attivato dal touchpoint del PSP.

L'utente, dopo aver inserito/fornito i dati che saranno inviati all'ente _Ministero dell'Interno_ per la creazione della posizione debitoria, potrà procedere con il pagamento. In particolare l'utente dovrà fornire:

* codice fiscale, nome e cognome dell'intestatario del passaporto
* codice fiscale, nome e cognome del pagatore.

<figure><img src="../../.gitbook/assets/Screenshot 2025-11-04 alle 15.59.42.png" alt=""><figcaption></figcaption></figure>

* La [demandPaymentNotice](../../appendici/primitive/#demandpaymentnotice) è utilizzabile dai PSP per inviare i dati del servizio specifico inseriti dall'utente, che nel caso attuale sono essenzialmente:&#x20;
  * dati dell'intestatario del passaporto
  * dati del pagatore
  * codice pratica **A001** (che identifica in modo univoco il tipo di servizio di cui si sta usufruendo).
* la [paDemandPaymentNotice](../../appendici/primitive/#pademandpaymentnotice) è utilizzata per richiedere a _Ministero dell'Interno_ la creazione della posizione debitoria in base alle informazioni ricevute. A sua volta, _Ministero dell'Interno_ invierà in risposta il numero avviso e i dati dell'ente beneficiario del pagamento.

Di seguito un esempio di struttura che deve transitare tramite il tag _datiSpecificiServizio_ nel formato base64.

```xml
<pagamentoPratica xmlns="http://PuntoAccessoPSP.spcoop.gov.it/pagamentoPratica">
  <codicePratica>A001</codicePratica> <!-- identifica serivzio passaporto -->
  <pagatore>
    <codiceFiscalePagatore>RSSMRA80A01H501U</codiceFiscalePagatore>
    <denominazionePagatore>Mario Rossi</denominazionePagatore>
  </pagatore>
  <intestatario>
    <codiceFiscaleIntestatario>VRNGPP80A01H501U</codiceFiscaleIntestatario>
    <denominazioneIntestatario>Giuseppe Verdi</denominazioneIntestatario>
  </intestatario>
</pagamentoPratica>

```

La specifica XSD è presente [qui](https://github.com/pagopa/pagopa-api/blob/SANP3.10.0/catalogo-servizi/A001_Passaporto_1_0_0.xsd).

Inoltre, la ricevuta che il PSP invierà all'utente dovrà contenere, oltre quanto già previsto dalle specifiche, il barcode del codice avviso della posizione debitoria, in formato [GS1-128](https://gs1it.org/assistenza/standard-specifiche/simbologie-codici-a-barre/#gs1-128-per-il-pagamento-dei-bollettini) secondo le caratteristiche elencate di seguito&#x20;

| Caratteristica                     | Valore                                                          |
| ---------------------------------- | --------------------------------------------------------------- |
| Narrow                             | 0,25 / 0,30 mm                                                  |
| Wide                               | 0,625 / 0,75 mm                                                 |
| N/W ratio                          | 1 / 2.5 (vincolante, indipendentemente dalla coppia N/W scelta) |
| Altezza delle barre                | \~14 mm                                                         |
| Tolleranza larghezza barre e spazi | ± 10%                                                           |
