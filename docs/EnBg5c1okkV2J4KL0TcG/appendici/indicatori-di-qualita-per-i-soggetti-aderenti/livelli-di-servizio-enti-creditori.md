# Livelli di Servizio Enti Creditori

## Disponibilità del servizio

Il servizio di pagamento deve essere disponibile 7/7 gg, h24 x 365 nel rispetto dei livelli di servizio sotto esposti.

Sono consentite un totale di&#x20;

* 36 ore per fermi programmati, distribuiti nel corso dell'anno solare a discrezione dell'EC, da comunicare con almeno 72 ore di preavviso a PagoPA S.p.A.
* 9 ore per fermi non programmati nel corso dell'anno solare, la cui durata sarà conteggiata sulla base delle rilevazioni automatiche effettuate da parte di PagoPA S.p.A.

{% hint style="warning" %}
Gli Enti Creditori sono tenuti a comunicare le indisponibilità programmate attraverso l'opportuna funzionalità all'interno del Sistema Backoffice pagoPA (per maggiori informazioni vedere [https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/manuale-operativo-back-office-pagopa-ente-creditore/funzionalita/stazioni/manutenzione-programmata](https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/manuale-operativo-back-office-pagopa-ente-creditore/funzionalita/stazioni/manutenzione-programmata)).

Si ricorda altresì che superata la quota annuale pari a 36 ore non è possibile in caso di creazione di una nuova manutenzione programmata impostare il flag "StandIN" a false. Ciò comporta che necessariamente i pagamenti dovranno  essere possibili in "StandIN" (per maggiori informazioni sul concetto di StandIn vedere [https://developer.pagopa.it/pago-pa/guides/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in](https://developer.pagopa.it/pago-pa/guides/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in))
{% endhint %}



## Livelli di servizio dei metodi degli EC

<table><thead><tr><th width="154.57879977565904">Acronimo</th><th>Descrizione</th><th>Soglia su base mensile</th></tr></thead><tbody><tr><td>TDP</td><td>Tempo massimo per l'emanazioni di una response  a fronte dell'invocazione del metodo <a href="../primitive/ente-creditore/api-soap.md#pademandpaymentnotice">paDemandPaymentNotice</a></td><td>98% entro e non oltre 2 secondi</td></tr><tr><td>TGP</td><td>Tempo massimo per l'emanazioni di una response  a fronte dell'invocazione del metodo <a href="../primitive/ente-creditore/api-soap.md#pagetpayment">paGetPayment</a></td><td>98% entro e non oltre 2 secondi</td></tr><tr><td>TSRT</td><td>Tempo massimo per l'emanazioni di una response  a fronte dell'invocazione del metodo <a href="../primitive/ente-creditore/api-soap.md#pasendrt">paSendRT</a></td><td>98% entro e non oltre 2 secondi</td></tr><tr><td>TVP</td><td>Tempo massimo per l'emanazioni di una response  a fronte dell'invocazione del metodo <a href="../primitive/ente-creditore/api-soap.md#paverifypaymentnotice">paVerifyPaymentNotice</a></td><td>98% entro e non oltre 2 secondi</td></tr></tbody></table>

## Gestione dei timeout verso gli EC

Il timeout rappresenta un periodo di tempo predeterminato trascorso il quale una data operazione è considerata conclusa dal Nodo.

Nella tabella seguente sono riportati, per ciascuna primitiva, i tempi massimi di attesa della response dell'EC da parte del Nodo, ricordando, però, che ogni EC è tenuto a rispettare i livelli di servizio indicati nel paragrafo precedente.

<table><thead><tr><th width="307.2643021236062">Primitiva</th><th align="center">Timeout in secondi</th></tr></thead><tbody><tr><td><a href="../primitive/ente-creditore/api-soap.md#pademandpaymentnotice">paDemandPaymentNotice</a></td><td align="center">7</td></tr><tr><td><a href="../primitive/ente-creditore/api-soap.md#pagetpayment">paGetPayment</a></td><td align="center">7</td></tr><tr><td><a href="../primitive/ente-creditore/api-soap.md#pasendrt">paSendRT</a></td><td align="center">15</td></tr><tr><td><a href="../primitive/ente-creditore/api-soap.md#paverifypaymentnotice">paVerifyPaymentNotice</a></td><td align="center">7</td></tr></tbody></table>

## Disponibilità del Tavolo operativo

L’EC deve garantire, con i medesimi LdS dei sistemi, la reperibilità dei propri addetti al Tavolo Operativo, finalizzata all’interlocuzione con il Tavolo Operativo della piattaforma pagoPA e le controparti interessate.&#x20;

Il Tavolo Operativo dell’EC reagisce autonomamente e con la massima tempestività in caso di eventi critici.

## Gestione IBAN di accredito&#x20;

L'EC deve comunicare qualsiasi tipo di variazione in relazione ai propri IBAN di accredito con almeno 7 giorni di anticipo rispetto alla data di decorrenza della modifica.
