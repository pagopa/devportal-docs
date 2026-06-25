# Integrazione tramite API asincrone

Per gli Intermediari Tecnologici, Partner Tecnologici ed eventualmente direttamente agli Enti Creditori che ne necessitano, è resa disponibile l'integrazione con API asincrone per il tramite del servizio di Gestione delle Posizioni Debitorie (GPD), il cui obiettivo è quello di offrire la gestione tecnica delle posizioni debitorie.

Con l'adesione al servizio si ha il vantaggio di semplificare  l'infrastruttura tecnologica necessaria per l'interazione con la piattaforma pagoPA, principalmente in termini di:

* rispetto delle linee guida (il servizio è sempre aggiornato alle utlime funzionalità della piattaforma pagoPA);
* rispetto degli SLA (il servizio ha dei meccanismi di scalabilità basati sul carico);
* assicurare le misure di continuità operativa che devono essere adottate dai gestori di sistemi di pagamento e dai fornitori critici di infrastrutture o servizi tecnici in conformità con gli obblighi derivanti dall'assoggettamento ex art. 146 T.U.B. di PagoPA alla Sorveglianza svolta dalla Banca d'Italia.

Il servizio abilita inoltre nuovi casi d'uso per gli aderenti, ad esempio riguardo ai servizi di pagamento spontaneo e alla gestione degli avvisi di pagamento (rif. circolare pagoPA Q2 2022 - archivio centralizzato avvisi) che è integrata nel servizio.

Il servizio non si pone come obiettivo quello di fornire soluzioni specifiche dei Partner e Intermediari tecnologici, come ad esempio interoperabilità con contabilità, interoperabilità con software gestionali, integrazione con SIOPE + e postalizzazione degli avvisi.

Per maggiori dettagli sulle funzionalità offerte dal servizio si rimanda all'appendice [posizioni-debitorie](../../appendici/posizioni-debitorie/ "mention").

## Ricezione sincrona della ricevuta

In considerazione del fatto che la [paSendRT vers. 2](../../appendici/primitive.md#pasendrt) viene inoltrata &#x20;

* alla _stazione_ dell'EC primario, da cui è stato attivato il pagamento;
* alle _stazioni_ di tutti gli EC configurate come _broadcast_;

l'EC anche se si integra con la piattaforma in modalità asincrona potrebbe attivare una stazione di broadcast per la ricezione sincrona della _receipt_.
