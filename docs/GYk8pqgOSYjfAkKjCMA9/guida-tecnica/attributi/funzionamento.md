# Funzionamento

I fruitori possono accedere all'e-service dell'erogatore attraverso la sottoscrizione di una richiesta di fruizione. Questa richiesta è soggetta alla verifica di alcuni attributi, cioè caratteristiche che il fruitore deve possedere, o dimostrare di possedere, a norma di legge. All'atto della creazione di un nuovo e-service, all'erogatore sarà richiesto di definire gli attributi da richiedere al fruitore quale condizione necessaria per inoltrare una richiesta di fruizione.

### Creazione di un nuovo attributo

Se l'attributo richiesto non è presente nel database è possibile aggiungerlo ex novo e utilizzarlo immediatamente. Tutti gli erogatori che verranno dopo lo troveranno già in archivio attraverso il campo di ricerca e potranno utilizzarlo a loro volta.

Questo meccanismo è comune a tutti attributi verificati e dichiarati.

### Revoca e riattivazione di un attributo

È facoltà sia dell'erogatore che del fruitore revocare ed eventualmente riattivare un attributo. La revoca di un attributo ha come conseguenza la sospensione di tutte le richieste di fruizione per le quali l'attributo era un requisito di accesso.

Per converso, la riattivazione dell'attributo prevede la riattivazione di tutte le richieste di fruizione precedentemente sospese. La riattivazione della richiesta di fruizione non viene effettuata solo nei casi in cui ci siano altri elementi ostativi. Ad esempio, se la richiesta di fruizione era già stata manualmente sospesa prima della revoca di un attributo, non sarà sufficiente la riattivazione dell'attributo per riattivarla; sarà necessario anche riattivare la richiesta di fruizione stessa.

Questo meccanismo è comune agli attributi certificati e dichiarati.

### Rifiuto di un attributo

Se l'erogatore valuta che il fruitore non possegga i requisiti per vedersi riconosciuto l'attributo, può rifiutarlo. Se almeno un attributo è stato rifiutato, non si potrà attivare la richiesta di fruizione.

L'erogatore potrà quindi decidere di negare l'attivazione della richiesta di fruizione, di fatto rendendola inutilizzabile. Sarà facoltà del fruitore presentare una nuova richiesta di fruizione per lo stesso e-service, motivando la decisione.

Questo meccanismo è comune agli attributi certificati e verificati, posto che l'erogatore abbia richiesto di verificare autonomamente il requisito (senza quindi appoggiarsi alla verifica di un ente certificatore o di un altro ente erogatore, nel caso dei verificati).

### Ritardo nell'aggiornamento dello stato di un attributo

L'aggiornamento del cambio di stato degli attributi è, per ragioni tecniche, asincrono. Questo vuol dire che potrebbe esserci un ritardo tra il momento in cui si richiede la revoca/riattivazione di un attributo ed il momento in cui si propaga a tutte le componenti di PDND Interoperabilità.
