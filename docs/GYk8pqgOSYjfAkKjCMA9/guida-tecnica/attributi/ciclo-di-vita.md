# Ciclo di vita

### Creazione di un attributo

Gli aderenti possono creare autonomamente attributi verificati e dichiarati. Per poter creare gli attributi certificati, devono essere accreditati come **enti certificatori**.

Se durante la creazione di un nuovo e-service l'attributo desiderato non è presente nel database, è possibile crearlo e utilizzarlo immediatamente. L'attributo sarà automaticamente disponibile in archivio per tutti gli erogatori successivi, che potranno utilizzarlo per i propri e-service.

### Revoca e riattivazione di un attributo

La revoca di un attributo ha come conseguenza la sospensione di tutte le richieste di fruizione per le quali l'attributo era un requisito di accesso.

Per converso, la riattivazione dell'attributo prevede la riattivazione di tutte le richieste di fruizione precedentemente sospese. La riattivazione della richiesta di fruizione non viene effettuata solo nei casi in cui ci siano altri elementi bloccanti. Ad esempio, se la richiesta di fruizione era già stata manualmente sospesa prima della revoca di un attributo, non sarà sufficiente la riattivazione dell'attributo per riattivarla; sarà necessario anche riattivare la richiesta di fruizione stessa.

È facoltà dell'erogatore la gestione degli attributi verificati dei fruitori. È invece in capo al fruitore la gestione dei propri attributi dichiarati. Gli attributi certificati sono gestiti direttamente dall'ente certificatore.

### Rifiuto di un attributo&#x20;

Questo meccanismo si può applicare esclusivamente agli attributi verificati.&#x20;

L'erogatore può scegliere di verificare autonomamente i requisiti, senza affidarsi a enti certificatori o altri erogatori: in questo caso se l'erogatore rileva che il fruitore non soddisfa i requisiti per un attributo verificato, può rifiutarlo. La presenza di almeno un rifiuto impedisce l'attivazione della richiesta di fruizione, rendendola non utilizzabile. Il fruitore può presentare una nuova richiesta per lo stesso e-service fornendo motivazioni e richiedendo all'erogatore l'accettazione.

### Ritardo nell'aggiornamento dello stato di un attributo

L'aggiornamento del cambio di stato degli attributi è, per ragioni tecniche, asincrono. Questo può causare un ritardo, nell'ordine dei secondi, tra il momento in cui si richiede la revoca/riattivazione di un attributo e il momento in cui si propaga a tutte le componenti di PDND Interoperabilità.&#x20;
