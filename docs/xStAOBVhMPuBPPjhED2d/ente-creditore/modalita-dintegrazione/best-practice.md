# Best practice

## Gestione della posizione debitoria <a href="#title-text" id="title-text"></a>

L’EC crea una posizione debitoria in attesa nell'archivio dei pagamenti, e vi associa un numero avviso. Nella versione attuale del software è previsto il pagamento in un’unica soluzione.&#x20;

L'EC nelle fasi intermedie del pagamento non deve modificare lo stato della posizione, che rimane sempre nello stato "aperta", è cura della piattaforma pagoPA gestire gli stati intermedi, l'EC modifica la posizione debitoria in stato “pagato” solo se il pagamento va a buon fine.

In questo caso la posizione risulta interamente saldata, esiste quindi un solo pagamento “pagato” associato alla posizione debitoria.

## Causale di versamento <a href="#title-text" id="title-text"></a>

A partire dalla versione 2.0.0 delle SACI è stato rimosso il capitolo "Formato della causale di versamento", per la composizione di tale dato si deve fare riferimento direttamente al paragrafo 7.1 delle Linee Guida.

Si raccomanda di non inserire all'interno della causale di versamento dati personali e/o dati particolari.

## Fase di verifica <a href="#title-text" id="title-text"></a>

Nella fase di verifica l'EC è sempre tenuto ad attualizzare l'importo del pagamento.

La richiesta di verifica avviene sempre per mezzo della primitiva [paVerifyPaymentNotice](../../appendici/primitive.md#paverifypaymentnotice), sia nel caso di [verificaBollettino](../../appendici/primitive.md#verificabollettino) che nel caso di [verifyPaymentNotice](../../appendici/primitive.md#verifypaymentnotice), anche perché l'EC non è a conoscenza da quale primitiva sia nata la verifica.

L’EC deve rispondere sempre con un'unica opzione di pagamento e per mezzo del parametro _allCCP_ deve sempre indicare se la posizione debitoria è associabile a tutti conti correnti postali o meno:

* _allCCP = true_ : l’opzione è associabile a tutti Conti Correnti Postali;
* _allCCP = false_: l’opzione non è associabile a tutti Conti Correnti Postali.

## Fase di attivazione

Nella fase di attivazione l'EC è sempre tenuto ad attualizzare l'importo del pagamento.

Per mezzo del parametro _transferType_ la piattaforma richiede all’EC per ogni singolo _transfer_:

* i conti correnti postali (quando disponibili) con il parametro _transferType=POSTAL;_
* qualsiasi conto corrente, a discrezione dell’EC stesso, se il parametro _transferType_ non è indicato.

Il parametro _retentionDate_ al momento viene ignorato dalla piattaforma pagoPA.

Il parametro _lastPayment_ al momento viene ignorato dalla piattaforma pagoPA.

Il parametro _paymentNote_ nel caso di [pagamento-presso-frontend-dellec.md](../../casi-duso/pagamento-presso-frontend-dellec.md "mention") viene popolato con il valore inserito dall'EC in _idCart_ contenuto nella [POST](../../appendici/primitive.md#ec-checkout-api) di redirect_._

## Bollettino Postale PA

Se l'EC dispone di almeno un conto corrente postale per gli incassi è necessario includere nell'avviso di pagamento anche il Bollettino Postale PA, in tal caso se nella request della [paGetPayment](../../appendici/primitive.md#pagetpayment) il parametro _transferType_ fosse valorizzato a _POSTAL_&#x20;

* nel caso di [pagamento-di-un-avviso-presso-psp.md](../../casi-duso/pagamento-di-un-avviso-presso-psp.md "mention") al transfer con _idTransfer = 1_ deve essere per forza associato l'IBAN di un conto corrente postale
* nel caso di [pagamento-presso-frontend-dellec.md](../../casi-duso/pagamento-presso-frontend-dellec.md "mention") a tutti i transfer dell'avviso l'EC deve associare un metadata con key [_IBANAPPOGGIO_](http://localhost:5000/s/u6YdY319vyFX9MIvnKBa/conto-corrente-alternativo) per la gestione del [_Conto Corrente Alternativo_](http://localhost:5000/s/u6YdY319vyFX9MIvnKBa/conto-corrente-alternativo) e, se possibile, deve inserire un IBAN di un conto corrente postale per ogni transfer o nel tag _IBAN_ o nel value del metadata con key _IBANAPPOGGIO_.

Per identificare la casistica specifica è possibile utilizzare il parametro _paymentNote_ come indicato in [#fase-di-attivazione](best-practice.md#fase-di-attivazione "mention").

## Coda delle receipt da risottomettere <a href="#title-text" id="title-text"></a>

In caso di una risposta alla [paSendRT](../../appendici/primitive.md#pasendrt) che porta la _receipt_  in stato _NOTICE\_PENDING_ (timeout, errore response, non raggiungibile), la _receipt_ viene inserita in una coda per essere sottomessa nuovamente all’EC.

Con la primitiva [paSendRT](../../appendici/primitive.md#pasendrt) il nodo cerca di sottomettere nuovamente le _receipt_ in questione:

* se una _receipt_ viene sottomessa nuovamente e va in uno stato finale si toglie dalla coda;
* se una _receipt_ viene sottomessa nuovamente ma rimane in uno stato non finale (_NOTICE\_PENDING_) si lascia in coda e si aumenta il contatore relativo al numero di retry.

Raggiunto il numero finale di retry (è un parametro di configurazione della piattaforma) il processo si ferma e l'elemento rimane in coda, è possibile riavviare il processo di retry con una richiesta all'assistenza di PagoPA S.p.A..\
