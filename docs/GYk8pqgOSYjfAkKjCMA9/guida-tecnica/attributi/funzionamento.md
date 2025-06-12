# Funzionamento

I fruitori possono accedere all'e-service dell'erogatore attraverso la sottoscrizione di una richiesta di fruizione. Questa richiesta è legata al possesso di alcuni attributi, cioè requisiti di accesso che il fruitore deve avere, o dimostrare di avere, a norma di legge. All'atto della creazione di un nuovo e-service, all'erogatore sarà richiesto di definire gli attributi da richiedere al fruitore quale condizione necessaria per inoltrare una richiesta di fruizione.

### Creazione di un attributo

Gli aderenti possono creare autonomamente attributi verificati e dichiarati. Per gli attributi certificati, devono essere accreditati come **enti certificatori**.

Se l'attributo ricercato non è già presente nel database, è possibile aggiungerlo ex novo e utilizzarlo immediatamente. Tutti gli erogatori che verranno dopo lo troveranno già in archivio e potranno utilizzarlo a loro volta.

### Revoca e riattivazione di un attributo

La revoca di un attributo ha come conseguenza la sospensione di tutte le richieste di fruizione per le quali l'attributo era un requisito di accesso.

Per converso, la riattivazione dell'attributo prevede la riattivazione di tutte le richieste di fruizione precedentemente sospese. La riattivazione della richiesta di fruizione non viene effettuata solo nei casi in cui ci siano altri elementi bloccanti. Ad esempio, se la richiesta di fruizione era già stata manualmente sospesa prima della revoca di un attributo, non sarà sufficiente la riattivazione dell'attributo per riattivarla; sarà necessario anche riattivare la richiesta di fruizione stessa.

È facoltà dell'erogatore la gestione degli attributi verificati dei fruitori. È invece in capo al fruitore la gestione dei propri attributi dichiarati. Gli attributi certificati sono gestiti direttamente dall'ente certificatore.

### Rifiuto di un Attributo&#x20;

Questo meccanismo si può applicare esclusivamente agli attributi verificati.&#x20;

L'erogatore può scegliere di verificare autonomamente i requisiti, senza affidarsi a enti certificatori o altri erogatori: in questo caso se l'erogatore rileva che il fruitore non soddisfa i requisiti per un attributo verificato, può rifiutarlo. La presenza di almeno un rifiuto impedisce l'attivazione della richiesta di fruizione, rendendola non utilizzabile. Il fruitore può presentare una nuova richiesta per lo stesso e-service, fornendo motivazioni, e richedendo all'erogatore di trasformare il rifiuto in accettazione.

### Ritardo nell'aggiornamento dello stato di un attributo

L'aggiornamento del cambio di stato degli attributi è, per ragioni tecniche, asincrono. Questo vuol dire che potrebbe esserci un breve ritardo, nell'ordine dei secondi, tra il momento in cui si richiede la revoca/riattivazione di un attributo ed il momento in cui si propaga a tutte le componenti di PDND Interoperabilità.&#x20;
