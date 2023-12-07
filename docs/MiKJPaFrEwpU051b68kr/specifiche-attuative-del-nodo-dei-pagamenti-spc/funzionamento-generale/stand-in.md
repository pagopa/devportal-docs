---
description: Migliorare l'Accessibilità ai Pagamenti pagoPA
---

# Stand In

## Processo di pagamento in Stand In

Lo Stand In è una funzionalità che consente ai cittadini di effettuare i pagamenti degli avvisi pagoPA anche quando i sistemi degli Enti Creditori (EC) non sono disponibili. Questo significa che, in situazioni in cui i sistemi degli EC sono temporaneamente indisponibili,  gli utenti possono comunque procedere con i pagamenti senza interruzioni. L'implementazione di questa funzionalità è finalizzata a migliorare le performance e la disponibilità della piattaforma pagoPA.&#x20;

<figure><img src="../../.gitbook/assets/image (53).png" alt=""><figcaption></figcaption></figure>

### Funzionalità di Stand In per i pagamenti attivati presso PSP

La funzionalità di Stand In può essere attivata per il caso [pagamento-di-un-avviso-presso-psp.md](../../casi-duso/pagamento-di-un-avviso-presso-psp.md "mention"), in particolare valutando le primitive [paVerifyPaymentNotice](../../appendici/primitive.md#pagetpayment) e [paGetPaymentV1/V2](../../appendici/primitive.md#pagetpayment-1).&#x20;

In caso l'EC non risponda alle richieste relative a queste due primitive entro il tempo massimo previsto, la piattaforma attiva automaticamente la funzionalità di Stand In, il nodo dei pagamenti procede a verificare la presenza dell'avviso di pagamento in [#archivio-centralizzato-avvisi](../../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md#archivio-centralizzato-avvisi "mention").&#x20;

Se l'avviso di pagamento è stato correttamente caricato nell'ACA, la piattaforma pagoPA conferma l'importo dell'avviso e consente al cittadino di procedere al pagamento.&#x20;

In questo caso il pagamento viene gestito in modalità Stand In, al termine del pagamento pagoPA effettua l'invio della ricevuta tramite la [paSendRTV1/V2](../../appendici/primitive.md#pasendrt) utilizzando le modalità standard dettagliate in [Fase invio della ricevuta](../../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md#fase-invio-ricevuta).&#x20;

Tuttavia, se l'avviso di pagamento non è presente in ACA, il cittadino non è in grado di procedere al pagamento poiché pagoPA non dispone dei dati necessari.

### Tracciamento dei pagamenti in Stand In

Per identificare e distinguere i pagamenti gestiti tramite il processo di Stand In da quelli gestiti mediante il processo standard, gli EC ed i PSP, che vogliono ricevere tale informazione, devono adeguare il proprio software per la gestione del nuovo flag.&#x20;

Il flag _standin_ viene valorizzato nelle primitive:

* [verifyPaymentNotice](../../appendici/primitive.md#verifypaymentnotice) response
* [verificaBollettino](../../appendici/primitive.md#verificabollettino) response
* [activatePaymentNoticeV1/V2](../../appendici/primitive.md#activatepaymentnotice) response
* [pspNotifyPaymentV1/V2](../../appendici/primitive.md#pspnotifypayment) request
* [paSendRTV1/V2](../../appendici/primitive.md#pasendrt) request

il suddetto flag può assumere uno dei seguenti due valori:

* _standin = true_: questo valore è assegnato ai pagamenti che sono avvenuti tramite il processo di Stand In;
* _standin = false_: questo valore è assegnato ai pagamenti che sono avvenuti con il processo standard.

L'utilizzo di questo flag permette un tracciamento efficiente delle due tipologie di modalità di pagamento, consentendo di distinguere chiaramente tra i due processi.

### Rendicontazione dei pagamenti gestiti in Stand In

I pagamenti che vengono elaborati con successo mediante il processo di Stand In sono successivamente riversati sull'IBAN dell'EC precedentemente configurato, inoltre, questi pagamenti sono riportati nel flusso di rendicontazione con il codice esito 4.

## Impatti per gli EC derivanti dall'attivazione dello Stand In

### Aggiornamento della posizione debitoria su ACA

È necessario che gli EC mantengano aggiornata la posizione debitoria su ACA per garantire un'adeguata gestione dell'attualizzazione dell'importo e dell'annullamento delle posizioni debitorie; tutte le indicazioni per poter adempiere a tale compito sono disponibili in[#archivio-centralizzato-avvisi](../../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md#archivio-centralizzato-avvisi "mention").

### Gestione degli avvisi di pagamento pagati in Stand In

Gli EC devono essere in grado di gestire importi potenzialmente non attualizzati relativi agli avvisi di pagamento pagati in modalità Stand In, questo si verifica perché potrebbe essere necessario gestire pagamenti in cui l'importo non è stato precedentemente aggiornato su ACA.

### Gestione manuale dei pagamenti multi-beneficiario

Il meccanismo Stand In, attivato quando la stazione dell'Ente Creditore (EC) è temporaneamente indisponibile, recupera le informazioni necessarie per il pagamento in ACA.

L’integrazione con ACA prevede la comunicazione delle seguenti informazioni:

* _fiscalCodePA_: codice fiscale dell’Ente Creditore che ha creato la posizione debitoria;
* _entityUniqueIdentifierType_: tipologia del debitore (F=persona fisica, G=persona giuridica);
* _entityUniqueIdentifierValue_: codice fiscale del debitore;
* _fullName_: Nome e Cognome del debitore;
* _IUV_: identificativo univoco versamento;
* _amount_: importo (non è possibile censire una posizione con un importo uguale a zero);
* _description_: causale;
* _dueDate_: data di scadenza della posizione debitoria.

La struttura dei dati conferma che vi è un solo importo totale comunicato dall’EC, quest’ultimo rappresenta la somma degli importi presenti nei vari _transfer_ della posizione debitoria originaria. Questo implica che la funzionalità di Stand In non può gestire la suddivisione degli importi di una posizione debitoria di tipo multi-beneficiario, in quanto non vengono fornite solo le informazioni necessarie per l’esecuzione del pagamento.

{% hint style="warning" %}
Qualora il pagamento di una posizione debitoria di tipo multi-beneficiario avvenga in modalità di Stand In, verrà effettuato un unico riversamento all’EC primario con l’importo totale, sarà responsabilità di quest’ultimo assicurare una suddivisione accurata delle quote di pagamento tra i singoli EC secondari.
{% endhint %}

### Definizione di un IBAN di default per pagamenti in Stand In

Gli EC devono definire un IBAN di default tramite backoffice pagoPA per la gestione di pagamenti in modalità Stand In, garantendo un corretto instradamento dei riversamenti, se l’EC non dichiara un IBAN di default, viene utilizzato l’IBAN con la data di modifica più recente.

{% hint style="info" %}
Per accedere alla guida dettagliata sull'inserimento dell'IBAN da utilizzare durante le operazioni Stand In, ti invitiamo a fare clic sul seguente [link](http://127.0.0.1:5000/o/KXYtsf32WSKm6ga638R3/c/fnIGqK6nKjgyWE7E3k13).
{% endhint %}

## **Attivazione dello Stand In**

Le logiche per attivare la funzionalità si fondano sulle primitive [paVerifyPaymentNotice](../../appendici/primitive.md#pagetpayment) e [paGetPaymentV1/V2](../../appendici/primitive.md#pagetpayment-1). Di queste primitive si monitorano i seguenti faultCode:

* _PPT\_STAZIONE\_INT\_PA\_IRRAGGIUNGIBILE_
* _PPT\_STAZIONE\_INT\_PA\_TIMEOUT_
* _PPT\_STAZIONE\_INT\_PA\_SERVIZIO\_NON\_ATTIVO_

La stazione viene monitorata per un periodo di 30 minuti per valutare la sua disponibilità, se al termine di questa finestra temporale la stazione presenta una disponibilità inferiore al 50%, viene attivata la modalità di Stand In.

## **Pricing per posizione debitoria gestita**

Per i pagamenti effettuati in modalità di Stand In viene applicata una tariffa secondo le seguenti condizioni:

* _dati presenti in ACA_: nel caso in cui i dati siano comunicati dall’EC ad ACA ed il pagamento sia effettuato tramite la funzionalità di Stand In, all'EC viene addebitato un importo fisso di 1 centesimo per ciascun pagamento effettuato;
* _dati NON presenti in ACA_: nel caso in cui i dati NON siano dall’EC comunicati ad ACA, lo Stand In non potrà essere attivato. In tale contesto all'EC viene addebitato un importo fisso di 5 centesimi per ciascun pagamento, funzionale alla gestione del processo fuori da Stand In.

Ai fini della fatturazione dello Stand In vale l’anagrafica delle EC fornita in sede di adesione alla piattaforma pagoPA ovvero quella risultante alla data del 1 gennaio 2025 in caso di aggiornamento della stessa anagrafica da parte dell’Ente antecedentemente a tale data.
