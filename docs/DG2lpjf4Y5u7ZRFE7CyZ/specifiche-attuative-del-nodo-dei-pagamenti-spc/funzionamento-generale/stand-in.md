# Stand In

## Processo di pagamento in Stand In

Lo Stand In è una funzionalità che consente di sopperire alla situazione in cui i sistemi degli EC sono temporaneamente indisponibili, affinché gli utenti possano effettuare i pagamenti degli avvisi pagoPA anche in tale situazione, a condizione che l’avviso di pagamento sia stato correttamente caricato nell’Archivio Centralizzato Avvisi (ACA).

<figure><img src="../../.gitbook/assets/image (53).png" alt=""><figcaption></figcaption></figure>

### Funzionalità di Stand In per i pagamenti attivati presso PSP

La funzionalità di Stand In può essere attivata per il caso [pagamento-spontaneo-presso-psp](../../casi-duso/pagamento-spontaneo-presso-psp/ "mention"), in particolare richiamando le primitive [paVerifyPaymentNotice](../../appendici/primitive.md#pagetpayment) e [paGetPaymentV1/V2](../../appendici/primitive.md#pagetpayment-1).

In caso l'EC non risponda all’invocazione delle citate primitive entro il tempo massimo previsto, così come indicato in [livelli-di-servizio-psp.md](../../appendici/indicatori-di-qualita-per-i-soggetti-aderenti/livelli-di-servizio-psp.md "mention"), la piattaforma attiva automaticamente la funzionalità di Stand In, successivamente il NodoSPC verifica la presenza dell'avviso di pagamento in ACA.

Se l'avviso di pagamento è stato correttamente caricato nell'ACA, la piattaforma pagoPA restituisce all’utente l'importo dell'avviso che è stato in precedenza comunicato dall’EC ad ACA e consente all’utente di procedere al pagamento.

In questo caso il pagamento viene gestito in modalità Stand In e al termine del pagamento la piattaforma pagoPA effettua l'invio della ricevuta telematica tramite la [paSendRTV1/V2](../../appendici/primitive.md#pasendrt) utilizzando le modalità standard dettagliate in [#fase-invio-ricevuta](../../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md#fase-invio-ricevuta "mention").

Tuttavia se l'avviso di pagamento non è presente in ACA l’utente non è in grado di procedere al pagamento, poiché pagoPA non dispone dei dati necessari.

Per casistiche da valutarsi caso per caso, è possibile definire delle esclusioni dalla funzionalità di Stand in, tale impostazione è attivabile tramite il backoffice pagoPA per intere porzioni di APA o puntualmente per ogni singola posizione debitoria conferita all’ACA, impostando a false il campo _payStandIn_.

Le condizioni di esclusione saranno definite da parte di PagoPA S.p.A. secondo un processo ad hoc che sarà stabilito nelle future versioni delle SANP.

### Tracciamento dei pagamenti in Stand In

Per identificare e distinguere i pagamenti gestiti tramite il processo di Stand In da quelli gestiti mediante il “processo standard”, gli EC ed i PSP, che vogliono ricevere tale informazione, devono adeguare il proprio software per la gestione del nuovo flag.

Il flag standin viene valorizzato nelle primitive:

* [verifyPaymentNotice](../../appendici/primitive.md#verifypaymentnotice) response
* [verificaBollettino](../../appendici/primitive.md#verificabollettino) response
* [activatePaymentNoticeV1/V2](../../appendici/primitive.md#activatepaymentnotice) response
* [pspNotifyPaymentV1/V2](../../appendici/primitive.md#pspnotifypayment) request
* [paSendRTV1/V2](../../appendici/primitive.md#pasendrt) request.

Il suddetto flag può assumere uno dei seguenti due valori:

* _standin = true_: questo valore è assegnato ai pagamenti che sono avvenuti tramite il processo di Stand In;
* _standin = false_: questo valore è assegnato ai pagamenti che sono avvenuti con il processo standard.

L'utilizzo di questo flag consente di distinguere chiaramente i due processi di pagamento.

### Rendicontazione dei pagamenti gestiti in Stand In

I pagamenti che vengono elaborati con successo mediante il processo di Stand In sono successivamente riversati sull'IBAN dell'EC precedentemente configurato, inoltre, questi pagamenti sono riportati nel flusso di rendicontazione con il _codice esito 4_.

## Impatti per gli EC derivanti dall'attivazione dello Stand In

### Aggiornamento della posizione debitoria su ACA

È necessario che gli EC mantengano aggiornata la posizione debitoria su ACA per garantire un'adeguata gestione dell'attualizzazione dell'importo e dell'annullamento delle posizioni debitorie; tutte le indicazioni per poter adempiere a tale compito sono disponibili in[#archivio-centralizzato-avvisi](../../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md#archivio-centralizzato-avvisi "mention").

### Gestione degli avvisi di pagamento pagati in Stand In

Gli EC devono essere in grado di gestire importi potenzialmente non attualizzati relativi agli avvisi di pagamento pagati in modalità Stand In, perché potrebbe essere necessario gestire pagamenti il cui l'importo non è stato precedentemente aggiornato su ACA.

### Gestione degli avvisi di pagamento pagati in Stand In nel caso di conferimento all’ACA tramite la paCreatePosition

Il meccanismo Stand In, attivato quando la stazione dell'EC è temporaneamente indisponibile, recupera le informazioni necessarie per il pagamento in ACA.

L’integrazione con ACA, solo ed esclusivamente nel caso di conferimento tramite la [paCreatePosition](../../appendici/primitive.md#pacreateposition), prevede la comunicazione delle seguenti informazioni:

* _fiscalCodePA_: codice fiscale dell’EC che ha creato la posizione debitoria;
* _entityUniqueIdentifierType_: tipologia del debitore (F=persona fisica, G=persona giuridica);
* _entityUniqueIdentifierValue_: codice fiscale del debitore;
* _fullName_: nome e cognome del debitore;
* _IUV_: identificativo univoco versamento;
* _amount_: importo (non è possibile censire una posizione con un importo uguale a zero);
* _description_: causale;
* _dueDate_: data di scadenza della posizione debitoria;
* _Iban_: IBAN di riversamento (opzionale);
* _postalIban_: IBAN postale di riversamento (opzionale);
* _switchToExpired_: flag per indicare se la dueDate è vincolante o meno;
* _payStandIn_: flag per indicare se la posizione è pagabile o meno in Stand In.

Nel caso non siano stati inviati i campi _Iban_ e _postalIban_, il sistema recupera autonomamente l’IBAN che verrà utilizzato in fase di accredito, viene utilizzato quello configurato dall’EC tramite backoffice pagoPa o, se non presente tale configurazione, viene utilizzato quello con la modifica più recente.

La struttura dei dati conferma che vi è un solo importo totale comunicato dall’EC, che rappresenta la somma degli importi presenti nei vari transfer della posizione debitoria originaria, questo implica che la funzionalità di Stand In, solo ed esclusivamente nel caso di conferimento all’ACA tramite la [paCreatePosition](../../appendici/primitive.md#pacreateposition), non può gestire la suddivisione degli importi di una posizione debitoria di tipo multi-beneficiario, in quanto non vengono fornite le informazioni necessarie per l’esecuzione di tale struttura di pagamento.

{% hint style="info" %}
Qualora il pagamento di una posizione debitoria di tipo multi-beneficiario avvenga in modalità di Stand In, solo ed esclusivamente nel caso di conferimento all’ACA tramite la [paCreatePosition](../../appendici/primitive.md#pacreateposition), verrà effettuato un unico riversamento all’EC che ha creato l’avviso di pagamento con l’importo totale (EC presente nel campo _fiscalCodePA)_, sarà responsabilità di quest’ultimo assicurare una suddivisione accurata delle quote di pagamento tra gli ulteriori EC inseriti come beneficiari, nelle modalità da lui individuate in accordo con gli EC secondari.
{% endhint %}

### Definizione di un IBAN di default per pagamenti in Stand In

Gli EC possono definire un IBAN di default tramite backoffice pagoPA per la gestione di pagamenti in modalità Stand In, garantendo un corretto instradamento dei riversamenti.

Se l’EC non dichiara un IBAN di default viene utilizzato l’IBAN con la data di modifica più recente.

Tali informazioni relative all’IBAN di default vengono utilizzate solo nel caso non siano stati inviati entrambi i campi _Iban_ e _postalIban_ tramite la [paCreatePosition](../../appendici/primitive.md#pacreateposition).

In caso di conferimento all’ACA tramite API di creazione e aggiornamento del servizio di [Gestione Posizione Debitorie](../../appendici/posizioni-debitorie/operazioni-disponibili.md#creazione-di-una-posizione-debitoria) (GPD) il campo _iban_ di ogni transfer è obbligatorio.

Per accedere alla guida dettagliata sull'inserimento dell'IBAN da utilizzare durante le operazioni Stand In, ti invitiamo a fare clic sul seguente[ link](https://docs.pagopa.it/manuale-back-office-pagopa/).

## **Attivazione dello Stand In**

Le logiche per attivare la funzionalità si fondano sulle primitive [paVerifyPaymentNotice](../../appendici/primitive.md#pagetpayment) e [paGetPaymentV1/V2](../../appendici/primitive.md#pagetpayment-1), di queste primitive si monitorano i seguenti faultCode:

* _PPT\_STAZIONE\_INT\_PA\_IRRAGGIUNGIBILE_
* _PPT\_STAZIONE\_INT\_PA\_TIMEOUT_
* _PPT\_STAZIONE\_INT\_PA\_SERVIZIO\_NON\_ATTIVO_

Le stazioni dell’EC sono costantemente monitorate al fine di valutare la loro disponibilità, viene attivata la modalità Stand In qualora in un intervallo di 30 minuti si verifichino tutte le seguenti condizioni

**durante le ore notturne**, comprese tra le 22:00 e le 6:00

* le stazioni presentino una disponibilità inferiore al 50%;
* il traffico totale dei pagamenti gestiti dalla stazione superi il 10% del traffico totale del NodoSPC;

**durante le ore diurne**, comprese tra le 6:00 e le 22:00

* le stazioni presentino una disponibilità inferiore al 50%;
* il traffico totale dei pagamenti gestiti dalla stazione superi il 5% del traffico totale del NodoSPC.

## **Disattivazione dello Stand In**

Le logiche per disattivare la funzionalità si fondano sulla primitiva [paVerifyPaymentNotice](../../appendici/primitive.md#pagetpayment), in particolare, nel periodo in cui la stazione si trova in Stand In, vengono effettuate chiamate tecniche per verificare il ripristino delle operatività della stazione.

Per le chiamate tecniche alla primitiva [paVerifyPaymentNotice](../../appendici/primitive.md#pagetpayment) si utilizzerà uno IUV fittizio (_000000000000000000_) in modo da ottenere _PAA\_PAGAMENTO\_SCONOSCIUTO,_ in caso di una percentuale minima del 50% di risposte positive la condizione di Stand In della stazione viene disabilitata, ripristinando la normale configurazione operativa della stazione dell'EC.

## **Pricing per posizione debitoria gestita**

Nel caso in cui i dati NON siano dall’EC comunicati ad ACA lo Stand In non potrà essere attivato, all'EC viene, pertanto, addebitato un importo fisso di 5 centesimi per ciascun pagamento, funzionale alla gestione del processo fuori da Stand In.

Ai fini della fatturazione dello Stand In vale l’anagrafica delle EC fornita in sede di adesione alla piattaforma pagoPA ovvero quella risultante alla data del 1 gennaio 2025 in caso di aggiornamento della stessa anagrafica da parte dell’Ente antecedentemente a tale data.
