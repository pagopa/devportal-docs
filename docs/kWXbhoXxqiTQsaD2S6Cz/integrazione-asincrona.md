# Integrazione Asincrona

L’erogazione del servizio delle API asincrone è gestito mediante l'integrazione con un set specifico di API.&#x20;

Questo servizio mira a fornire una gestione tecnica delle posizioni debitorie ai Partner Tecnologici, agli Intermediari Tecnologici e, ove necessario, direttamente agli Enti Creditori (EC).&#x20;

La gestione comprende sia le operazioni di creazione, aggiornamento e cancellazione delle posizioni debitorie create dai Partner Tecnologici o dagli Enti Creditore su uno specifico layer tecnico della piattaforma pagoPA, che copre anche richieste di pagamenti spontanei, come la gestione della loro pagabilità tramite il Nodo dei Pagamenti.&#x20;

In aggiunta, il servizio aggiorna lo stato delle posizioni debitorie dopo l'interazione con la piattaforma pagoPA per l'esecuzione di pagamenti.

Adottando il servizio di integrazione Asincrona, gli EC possono semplificare significativamente l'infrastruttura tecnologica necessaria per interagire con la piattaforma pagoPA, in relazione alla gestione delle loro posizioni debitorie.&#x20;

I vantaggi principali sono:

* Rispetto delle Linee Guida: il servizio è sempre aggiornato alle ultime funzionalità della piattaforma pagoPA;
* Rispetto delle SLA: il servizio ha dei meccanismi di scalabilità basati sul carico;
* Continuità operativa: assicurare le misure di continuità operativa in conformità con gli obblighi indicati dalla Banca d'Italia (ex art. 146 T.U.B.).

Inoltre, il servizio apre la porta a nuovi casi d'uso per gli aderenti, come i servizi di pagamento spontaneo e la gestione integrata degli avvisi di pagamento.&#x20;

⚠ L’EC mantiene la responsabilità per l'accuratezza dei dati relativi alle posizioni debitorie che vengono trasmessi a PagoPA S.p.A. per l'utilizzo di questo servizio.

Nella sezione seguente verranno dettagliati i seguenti aspetti:

* Trattamento di Dati Personali&#x20;
* Passaggio alla Modalità Asincrona di un Ente Creditore
* API Disponibili per un Ente Creditore
* Ricevute di Pagamento
