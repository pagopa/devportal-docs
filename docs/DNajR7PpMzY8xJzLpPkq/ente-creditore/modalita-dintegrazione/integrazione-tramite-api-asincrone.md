# Integrazione tramite API asincrone

Se gli Enti Creditori e/o i loro Intermediari Tecnologici e/o Partner Tecnologici si avvalgono dell’integrazione tramite API Asincrone, tale integrazione è resa disponibile per il tramite del servizio di Gestione delle Posizioni Debitorie (GPD), il cui obiettivo è quello di offrire la gestione tecnica delle posizioni debitorie dell’Ente Creditore.

Con l'adesione al servizio di Integrazione Asincrona, l’Ente Creditore, con riferimento all’attività di gestione delle proprie posizioni debitorie, ha il vantaggio di semplificare l'infrastruttura tecnologica necessaria per l'interazione con la piattaforma pagoPA, e segnatamente:

* rispettare le Linee Guida (il servizio è sempre aggiornato alle ultime funzionalità della piattaforma pagoPA);
* garantire gli SLA (il servizio ha dei meccanismi di scalabilità basati sul carico);
* assicurare le misure di continuità operativa che devono essere adottate dai gestori di sistemi di pagamento e dai fornitori critici di infrastrutture o servizi tecnici, in conformità con gli obblighi ex art. 146 T.U.B. di sorveglianza svolta dalla Banca d'Italia.

Il servizio abilita, inoltre, nuovi casi d'uso per gli aderenti, ad esempio riguardo ai servizi di pagamento spontaneo e alla gestione degli avvisi di pagamento, che è integrata nel servizio.

Il servizio non si pone come obiettivo quello di fornire soluzioni specifiche per gli Enti Creditori e/o per i loro Intermediari Tecnologici e/o Partner Tecnologici, come ad esempio l’interoperabilità con contabilità e/o con software gestionali ovvero l’integrazione con SIOPE+ ovvero la postalizzazione degli avvisi di pagamento.

L’Ente Creditore resta in ogni caso responsabile della correttezza dei dati delle posizioni debitorie comunicati alla PagoPA S.p.A. ai fini del presente servizio.

Con riferimento al trattamento dei dati personali, l’Ente Creditore è titolare del trattamento dei dati personali della posizione debitoria e, salvo diversa indicazione da formalizzarsi per iscritto, fa proprio l’ “Accordo sul trattamento dei dati personali da parte del responsabile del trattamento ai sensi dell’articolo 28 del Regolamento (UE) 2016/679”, nominando, pertanto, la PagoPA S.p.A. quale Responsabile del Trattamento. L'accordo è disponibile al seguente link:

{% file src="../../.gitbook/assets/DPA_PagoPA_posizioni-debitorie_v1 (1).pdf" %}

Qualora l’Ente Creditore si avvalga di un Intermediario Tecnologico e/o Partner Tecnologico come responsabile del trattamento dei dati personali della posizione debitoria, sarà quest’ultimo a far proprio l’Accordo summenzionato,  salvo diversa  indicazione da formalizzarsi per iscritto. PagoPA S.p.A. agirà, quindi, come sub-responsabile dell’Ente Creditore, presupposta per tale specifica fattispecie una autorizzazione generale dal Titolare al Responsabile di avvalersi di altri responsabili.

Nel caso in cui l’Ente Creditore comunichi di non voler far proprio l’Accordo sul Trattamento dei Dati e/o sue successive eventuali modifiche e aggiornamenti, l’adesione al servizio resterà sospesa fintanto che il trattamento dei dati personali non sia disciplinato da altro accordo ai sensi dell’art. 28 del Regolamento (UE) 2016/679.

Per maggiori dettagli sulle funzionalità offerte dal servizio, si rimanda all'appendice[ Posizioni Debitorie](https://docs.pagopa.it/sanp/appendici/posizioni-debitorie), nonché, con riferimento ad ogni altro aspetto riguardante tale integrazione, si invita a contattare il gestore della Piattaforma al seguente indirizzo [https://pagopa.atlassian.net/servicedesk/customer/portal/3](https://pagopa.atlassian.net/servicedesk/customer/portal/3) .

### Ricezione sincrona della ricevuta

In considerazione del fatto che la[ paSendRT vers. 2](https://docs.pagopa.it/sanp/appendici/primitive#pasendrt) viene inoltrata:&#x20;

* alla stazione dell'Ente Creditore primario, da cui è stato attivato il pagamento;
* alle stazioni di tutti gli Enti Creditori configurate come broadcast;

l'Ente Creditore, anche se si integra con la piattaforma in modalità asincrona, potrebbe attivare una stazione di broadcast per la ricezione sincrona della receipt.

### Interazione con SEND

L’aderente a pagoPA che si avvale dell’integrazione asincrona, nel caso in cui sia anche aderente alla piattaforma di cui all’art. 26 del D.L. n. 76/2020 (c.d. “SEND”), beneficia, grazie all’interazione delle due piattaforme, di un servizio di aggiornamento dei costi di notificazione che prevede che l’Aderente indichi - correttamente - durante la fase di validazione della notifica, per ogni IUV presente nella notifica stessa, se tale IUV è gestito in modalità sincrona o asincrona.

L’aderente a pagoPA, che si avvale dell’integrazione asincrona, e che sia anche aderente a _SEND_ (di seguito congiuntamente per le due piattaforme “Aderente”), accetta e riconosce che:

**a)** PagoPA S.p.A. non effettua verifiche sulla sincronicità/asicronicità relativa agli IUV dichiarata dall’Aderente stesso in fase di creazione della notifica e, pertanto:

**i.** nel caso in cui ad una notifica dichiarata come asincrona siano, invece, associati IUV sincroni, la notifica non sarà generata perché il sistema restituirà un errore;

**ii.** nel caso in cui ad una notifica dichiarata come sincrona siano, invece, associati IUV asincroni, questi ultimi non saranno aggiornati, e conseguentemente il costo complessivo delle notifiche non sarà attualizzato.&#x20;

**b)** nel caso di cui alla lett. a, ii., che precede, PagoPA S.p.A. è, pertanto, legittimata a rendicontare e fatturare i costi dalla stessa anticipati per la notifica, anche se non pagati dal destinatario all’Aderente a causa della erronea qualificazione della notifica come sincrona da parte dell’Aderente stesso.
