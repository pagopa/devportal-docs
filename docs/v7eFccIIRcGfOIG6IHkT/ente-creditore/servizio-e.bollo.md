# Servizio @e.bollo

Tramite la piattaforma pagoPA è possibile richiedere pagamenti di posizioni debitorie che contengano una marca da bollo digitale (@e.bollo).

<figure><img src="../.gitbook/assets/flussoMBD_EC_PSP.png" alt=""><figcaption></figcaption></figure>

Per poter richiedere l'attivazione di un _pagamento atteso_ di una marca da bollo è necessario compilare il tag _richiestaMarcaDaBollo_ all’interno della response alla [paGetPaymentV2](../appendici/primitive.md#pagetpayment-versione-2) avendo cura di inserire:

* _tipoBollo_: tipologia del bollo;
* _hashDocumento_: contiene l’impronta informatica (digest), nel formato base64, del documento informatico o della segnatura di protocollo cui è associata la marca da bollo digitale;
* _provinciaResidenza_: sigla della provincia di residenza del soggetto pagatore.

Il tag _richiestaMarcaDaBollo_ deve essere usato in alternativa al tag _IBAN_ in ogni _transfer_, nel tag _transferAmount_ deve essere inserito l'importo della marca da bollo, non viene effettuato nessun tipo di validazione da parte del Nodo dei Pagamenti sulla cifra inserita.

Una volta conclusa la transazione di pagamento il PSP deve compilare il tag _marcheDaBollo_ all'interno della request della [sendPaymentOutcomeV2](../appendici/primitive.md#sendpaymentoutcome-versione-2) avendo cura di inserire per ogni marca da bollo digitale (tag _marcaDaBollo_):

* _paymentToken_: il paymentToken con cui è arrivata la richiesta di marca da bollo digitale;
* _idTransfer_: l'identificativo del transfer che contiene il dato _richiestaMarcaDaBollo;_
* _MBDAttachment_: il documento XML che contiene la marca da bollo digitale, nel formato base64.

Come indicato nelle linee guida pubblicate da Agenzia delle Entrate _"Le Pubbliche Amministrazioni che ricevono dal cittadino, direttamente o indirettamente, la marca da bollo digitale ed il certificato cui è associata effettuano il controllo di validità utilizzando un software di controllo locale..."_, quindi la validazione del documento XML che contiene la marca da bollo digitale è responsabilità dell'EC che lo riceve tramite la [paSendRTV2](../appendici/primitive.md#pasendrt-versione-2).

Gli importi relativi alle marche da bollo digitali non vengono inseriti nei [Flussi di Rendicontazione](../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/rendicontazione-e-cashflow.md) inviati dai PSP.

Per maggiori dettagli sul servizio @e.bollo, validità e relativi casi d’uso, fare riferimento all'apposita sezione sul [sito dell’Agenzia delle Entrate](https://www.agenziaentrate.gov.it/portale/web/guest/schede/pagamenti/imposta-di-bollo-per-le-istanze-trasmesse-alla-pa-ebollo-cittadini/che-cose-cittadini).
