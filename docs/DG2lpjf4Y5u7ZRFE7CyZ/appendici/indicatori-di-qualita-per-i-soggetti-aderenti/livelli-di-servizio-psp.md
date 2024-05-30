# Livelli di Servizio PSP

## Disponibilità del servizio

Il servizio di pagamento deve essere disponibile 7/7 gg, h24 x 365 nel rispetto dei livelli di servizio sotto esposti.

Sono consentite un totale di&#x20;

* 36 ore per fermi programmati, distribuiti nel corso dell'anno solare a discrezione del PSP, da comunicare con almeno 72 ore di preavviso a PagoPA S.p.A.
* 9 ore per fermi non programmati nel corso dell'anno solare, la cui durata sarà conteggiata sulla base delle rilevazioni automatiche effettuate da parte di PagoPA S.p.A.

## Livelli di servizio dei metodi dei PSP

<table><thead><tr><th width="184.6314826872747">Acronimo</th><th width="231.71060011217054">Descrizione</th><th>Soglia su base mensile</th></tr></thead><tbody><tr><td>TPNP</td><td>Tempo massimo per l'emanazione di una response a fronte dell'invocazione del metodo <a href="../primitive.md#pspnotifypayment">pspNotifyPayment</a></td><td>98% entro e non oltre 2 secondi</td></tr><tr><td>TNSPO</td><td>Tempo massimo per l'emanazione di una <a href="../primitive.md#sendpaymentoutcome">sendPaymentOutcome</a> a fronte della conclusione della gestione del metodo <a href="../primitive.md#pspnotifypayment">pspNotifyPayment</a> con esito positivo (<em>outcome = OK</em>)</td><td>98% entro e non oltre 2 secondi</td></tr><tr><td>TPSPO</td><td>Tempo massimo per l'emanazione di una <a href="../primitive.md#sendpaymentoutcome">sendPaymentOutcome</a> a fronte della conclusione delle procedure di pagamento sul touchpoint del PSP, sia in caso di pagamento effettuato con successo (<em>outcome = OK</em>), sia in caso di pagamento non effettuato (<em>outcome = KO</em>)</td><td>98% entro e non oltre 2 secondi</td></tr></tbody></table>

## Gestione dei timeout verso i PSP

Il timeout rappresenta un periodo di tempo predeterminato trascorso il quale una data operazione è considerata conclusa dal Nodo.

Nella tabella seguente sono riportati, per ciascuna primitiva, i tempi massimi di attesa della response del PSP da parte del Nodo, ricordando, però, che ogni PSP è tenuto a rispettare i livelli di servizio indicati nel paragrafo precedente.

<table><thead><tr><th width="478.44897959183675">Primitiva</th><th align="center">Timeout in secondi</th></tr></thead><tbody><tr><td><a href="../primitive.md#pspnotifypayment">pspNotifyPayment</a></td><td align="center">7</td></tr></tbody></table>

## Disponibilità del Tavolo operativo

Il PSP deve garantire con i medesimi LdS dei sistemi, la reperibilità dei propri addetti al Tavolo Operativo, finalizzata all’interlocuzione con il Tavolo Operativo della piattaforma pagoPA e le controparti interessate.&#x20;

Il Tavolo Operativo del PSP reagisce autonomamente e con la massima tempestività in caso di eventi critici.

## &#x20;Livelli di servizio procedurali

Il flusso di sovrascrittura è ritenuto valido se inviato entro, e non oltre, le ore 24 della quarta giornata lavorativa successiva alla ricezione dell’ordine di pagamento (D+4).

<table><thead><tr><th width="150">Acronimo</th><th>Indicatore</th><th>Descrizione</th><th data-type="number">Valore</th></tr></thead><tbody><tr><td>NFER</td><td>Massimo numero di flussi errati al mese</td><td>Indica il massimo numero di flussi errati che un PSP può correggere in un mese solare.</td><td>30</td></tr><tr><td>NBI</td><td>Massimo numero di SCT integrativi per IBAN</td><td>Indica il massimo numero di coppie SCT-FdR di integrazione a fronte di un SCT parziale inviato in precedenza in un mese solare.</td><td>30</td></tr></tbody></table>
