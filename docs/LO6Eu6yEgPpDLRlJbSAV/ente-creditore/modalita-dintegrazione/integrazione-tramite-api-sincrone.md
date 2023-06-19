# Integrazione tramite API sincrone

{% hint style="info" %}
Per la gestione degli errori fare riferimento a [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endhint %}

## Fase di richiesta di creazione della posizione debitoria

![](../../.gitbook/assets/paDemandPaymentNotice.png)

La [paDemandPaymentNotice](../../appendici/primitive.md#pademandpaymentnotice) è utilizzata per richiedere all’EC la creazione della posizione debitoria in base ai dati dello specifico servizio inviati, l'EC invia in risposta le informazioni necessarie per avviare il processo di pagamento, in particolare:

* il numero avviso;
* il codice fiscale dell'EC da utilizzare nella fase di attivazione;
* l'importo parziale di ogni singolo versamento;
* il codice fiscale dell’EC beneficiario di ogni singolo versamento.

Durante questa fase la posizione debitoria deve rimanere nello stato _aperta._

Gli EC mettono a disposizione i dati dello specifico servizio tramite il [catalogo-dei-servizi.md](../../casi-duso/pagamento-spontaneo-presso-psp/catalogo-dei-servizi.md "mention").

## Fase di verifica

![](../../.gitbook/assets/paVerifyPaymentNotice.png)

La [paVerifyPaymentNotice](../../appendici/primitive.md#paverifypaymentnotice) è utilizzata per richiedere all’EC la verifica dell’opzione di pagamento identificata dal numero avviso, che invia le informazioni di pagamento relative al numero avviso, in particolare:

* importo parziale;
* codice fiscale dell’EC beneficiario;
* il parametro _allCCP,_ che indica se l’opzione di pagamento è associabile a tutti conti correnti postali o meno
  * _allCCP = true_: l’opzione è associabile a tutti conti correnti postali;
  * _allCCP = false_: l’opzione non è associabile a tutti conti correnti postali.

Durante questa fase la posizione debitoria deve rimanere nello stato _aperta._

Il Nodo effettua una verifica semantica sulla response:

* deve essere presente la _paymentList_;
* il tag _officeName_ è opzionale, tutti i restanti tags sono obbligatori.

## Fase di attivazione

![](<../../.gitbook/assets/paGetPayment (2).png>)

La richiesta di attivazione del pagamento giunge all’EC per mezzo della [paGetPayment](../../appendici/primitive.md#pagetpayment), l'EC invia l’importo del pagamento ed i dati necessari per il riversamento della somma, in particolare per ogni versamento:

* importo parziale;
* codice fiscale dell’EC beneficiario;
* IBAN da usare per il riversamento.

Durante questa fase la posizione debitoria deve rimanere nello stato _aperta_, sarà cura del Nodo inibire altri tentativi di pagamento per lo stesso numero avviso.

Il Nodo effettua una verifica semantica sulla response:

* verifica la corrispondenza tra il valore di _paymentAmount_ e la somma di tutti gli _amount_ presenti nei _transfer_;
* ci deve essere almeno un'occorrenza di _transfer_;
* controllo semantico degli IBAN in ogni _transfer_;
* viene verificata l'esistenza sul Nodo dell'associazione tra _fiscalCodePA_ e _IBAN_;
* nel caso di presenza di un'EC secondario viene verificato che sia abilitato sul Nodo.

## Fase di invio della ricevuta

![](<../../.gitbook/assets/paSendRT (1).png>)

Tramite la primitiva [paSendRT](../../appendici/primitive.md#pasendrt) viene inoltrata agli _n_ EC interessati al pagamento la _receipt_ (ricevuta) solo se il pagamento è stato effettuato, la _receipt_ è un oggetto generato dalla piattaforma pagoPA.

In questa fase, dopo la ricezione della _receipt_, la posizione debitoria deve essere posta nello stato _chiusa._

## Recupero ricevuta <a href="#recupero-receipt-per-enti-creditori" id="recupero-receipt-per-enti-creditori"></a>

Il servizio è rivolto a tutti gli EC che, in casi particolari, hanno la necessità di recuperare una _receipt_ non disponibile all’interno del proprio sistema a causa di specifiche anomalie tecniche e/o di processo.

Come verrà ampiamente chiarito nelle sezioni successive, il servizio non è pensato per essere fruito durante tutte le fasi del processo di pagamento, ma soltanto in casi specifici e in modo particolare a valle della ricezione dei flussi di rendicontazione. A protezione della natura del servizio sono state implementate delle politiche di throttling che limitano il numero di chiamate _n_ in un intervallo di tempo _t_ da parte dello stesso EC.

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Qualora durante la lavorazione del flusso una _receipt_ non fosse disponibile, l’eccezione può essere gestita tentando di recuperarla mediante l’invocazione del servizio _getOrganizationReceipt_.

Il diagramma seguente riporta invece uno use case **non consentito**

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
E' assolutamente vietato inserire l’invocazione del servizio _getOrganizationReceipt_ all’interno di un loop in modo indiscriminato senza l’insorgere di un evento di errore che ne giustifichi l’utilizzo.
{% endhint %}

La procedura di adesione al servizio è descritta in [adesione-ai-servizi-con-subscription-key.md](../../appendici/adesione-ai-servizi-con-subscription-key.md "mention").

Dopo aver ottenuto la subscription key, è possibile iniziare ad utilizzare il servizio mediante l’invocazione della API _getOrganizationReceipt_.

Di seguito i dettagli della _signature_ del servizio:

`GET /organizations/{organizationfiscalcode}/receipts/{iur}/paymentoptions/{iuv}`

Come è possibile osservare il servizio effettua la ricerca della _receipt_ utilizzando come filtro tre parametri ricevuti in input tramite la valorizzazione dei seguenti _path parameters:_

* _organizationalfiscalcode_: codice fiscale EC;
* _iur_: identificativo univoco riscossione, presente all’interno del flusso di rendicontazione ricevuto dal nodo pagoPA mediante l’invocazione della primitiva [nodoChiediFlussoRendicontazione](../../appendici/primitive.md#nodochiediflussorendicontazione);
* _iuv_: Identificativo univoco versamento, anch’esso presente all’interno del flusso di rendicontazione.

Come accennato nei precedenti capitoli, il servizio non è pensato per un utilizzo massivo, a protezione di questa caratteristica sono state attivate delle politiche di _throttling_ che prevedono, per ogni sottoscrizione al servizio, un massimo di 10 chiamate nell’arco di 60 minuti.

Per i tutti i dettagli tecnici relativi al corretto utilizzo del servizio è possibile fare riferimento alle specifiche della primitiva in [#getorganizationreceipt](../../appendici/primitive.md#getorganizationreceipt "mention").\
