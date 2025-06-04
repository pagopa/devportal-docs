# La protezione dei dati

## Verifica dei dati in ingresso

PN garantisce la corretta attribuzione dei documenti informatici alla notifica attraverso l’utilizzo di hash SHA-256. La PA mittente, nel momento in cui genera la richiesta di creazione di una notifica, fornisce a PN anche lo SHA-256 del documento. PN calcola lo SHA-256 del documento ricevuto e lo confronta con ciò che la PA ha fornito. Solo in caso di coincidenza tra le due hash la richiesta di creazione della notifica è accettata.

Inoltre, PN verifica la validità dei CF forniti della PA mittente e la presenza dell'indirizzo fisico del destinatario/i per garantire la possibilità di effettuare la notificazione.

## Immodificabilità dei documenti informatici memorizzati

I documenti informatici forniti dalla PA mittente vengono archiviati temporaneamente in un bucket S3 con legal hold e retention di 7 giorni. Legal hold rende i documenti immodificabile da parte di PagoPA fino allo scadere della retention, quando i documenti verranno eliminati automaticamente da sistema. I documenti sono sottoposti a versioning.

Quando la PA mittente richiede la creazione della notifica, una volta generato lo IUN, i documenti, associati dalla PA alla notifica attraverso la lista di SHA-256, vengono associati logicamente alla notifica appena creata. Sui documenti viene aggiornata la retention a 120 giorni. Alla data di perfezionamento della notifica per il destinatario, la retention viene nuovamente aggiornata a 120 giorni successivi a tale data.

Gli SHA-256 dei documenti vengono memorizzati nel record di notifica e nell’attestazione opponibile ai terzi di perfezionamento per il mittente (Attestazione di notifica presa in carico). Il record di notifica contiene anche la versione esatta di ciascun documento.

Le attestazioni opponibili ai terzi vengono create, firmate digitalmente, marcate temporalmente ed archiviate. Viene posto il legal hold e retention a 10 anni. La versione del documento viene memorizzata nel record di timeline corrispondente all’evento che lo ha generato. Entro un anno dalla creazione del documento, esso viene inviato alla conservazione a norma.

I documenti relativi alla notificazione analogica e digitale forniti dall’operatore postale vengono archiviati da PN. Viene posto il legal hold e retention a 10 anni. La versione del documento viene memorizzata nel record di timeline corrispondente all’evento che lo ha generato. Entro un anno dalla creazione del documento, esso viene inviato alla conservazione a norma.

## Log di sistema - anonimizzazione e conservazione

PN anonimizza le informazioni che possono ricondurre all’identificazione di persone. Ad esempio, PN utilizza un servizio che genera una versione anonimizzata del CF e che mantiene permanentemente la relazione tra il CF e la sua versione anonimizzata.

Le informazioni presenti nei log di sistema e nei record di notifica sono anonimizzate.

Solo i documenti allegati alle notifiche e le attestazioni opponibili ai terzi possono contenere informazioni in chiaro.

I log di sistema vengono prodotti su database, indicizzati per versione anonimizzata del CF e partizionati per data. Ogni record di log può contenere più di un CF anonimizzato.

PN non effettua operazioni di update o delete sui record di log.

I log vengono conservati al massimo 10 anni. I log degli ultimi 120 giorni sono sempre presenti in DB per accesso rapido, i log vengono inoltre trasferiti giornalmente su file system e conservati con le stesse modalità utilizzate per gli atti opponibili ai terzi.

I log di accesso a mezzo SPID o CIE sono conservati per 24 mesi.

I log necessari per comprovare le informazioni contenute nelle attestazioni opponibili ai terzi sono conservati per 10 anni.

Gli audit log che non sono necessari per comprovare le informazioni contenute nelle attestazioni opponibili ai terzi sono conservati per 5 anni.

I log di sistema di PN non necessari per comprovare le informazioni contenute nelle attestazioni opponibili ai terzi sono conservati per 36 mesi.

## Altri dati - conservazione

I dati di navigazione, ovvero i record contenenti informazioni relativi a browser, IP e device utilizzati durante le interazioni dell’Utente sulla PN, sono conservati per 90 giorni.

I cookie sono conservati per 6 mesi.

Il codice di accettazione del Recapito di cortesia/Domicilio digitale e il codice OTP sono conservati per 1 ora.

I dati relativi alla configurazione delle utenze (ruoli, gruppi di appartenenza, domicili e Recapiti digitali, deleghe, ecc.) sono conservati per 2 anni dall’ultimo accesso.

I dati acquisiti a mezzo SPID e CIE ovvero nello specifico nome, cognome, codice fiscale, ruolo del soggetto registratosi quale Referente della PA Mittente sono conservati per 10 anni dall’ultima acquisizione.

I documenti generati dall’invio di notifiche analogiche (es. ricevute di ritorno) in formato digitale e le ricevute delle PEC sono conservati per 10 anni.
