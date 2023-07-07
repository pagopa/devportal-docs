# Immodificabilità dei documenti informatici memorizzati

I documenti informatici prodotti dalla PA vengono archiviati temporaneamente in un bucket S3 con legal hold e retention di 7 giorni. Legal hold rende i documenti immodificabile da parte di PagoPA fino allo scadere della retention, quando i documenti verranno eliminati automaticamente da sistema. I documenti sono sottoposti a versioning.

Quando la PA richiede la creazione della notifica, una volta stabilito lo IUN, i documenti, associati dalla PA alla notifica attraverso la lista di SHA-256, vengono associati logicamente all notifica appena creata. Sui documenti viene aggiornata la retention a 120 giorni. Alla data di perfezionamento della notifica la retention viene nuovamente aggiornata a 120 giorni successivi a tale data.

Gli SHA-256 dei documenti vengono memorizzati nel record di notifica e nell’attestazione opponibile ai terzi di perfezionamento per il mittente. Il record di notifica contiene anche la versione esatta di ciascun documento.

Gli atti opponibili ai terzi vengono creati, firmati digitalmente e marcati temporalmente ed archiviati. Viene posto il legal hold e retention a 10 anni. La versione del documento viene memorizzata nel record di timeline corrispondente all’evento che lo ha generato. Entro un anno dalla creazione del documento, esso viene inviato alla conservazione a norma.

I documenti relativi alla notificazione analogica e digitale forniti dall’operatore postale vengono archiviati da PN. Viene posto il legal hold e retention a 10 anni. La versione del documento viene memorizzata nel record di timeline corrispondente all’evento che lo ha generato. Entro un anno dalla creazione del documento, esso viene inviato alla conservazione a norma.
