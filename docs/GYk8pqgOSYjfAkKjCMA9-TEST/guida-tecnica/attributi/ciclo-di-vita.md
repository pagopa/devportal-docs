# Ciclo di vita

## Stati

Un attributo può essere:

* **mai attribuito all'ente**: l'ente non lo possiede e non gli è mai stato attribuito;
* **posseduto**: l'ente possiede l'attributo;
* **non posseduto**: l'ente possedeva l'attributo, ma è stato successivamente revocato oppure l'attributo è stato rifiutato all'ente alla prima richiesta di riconoscimento.

## Operazioni

### Creazione

Gli aderenti possono creare autonomamente attributi verificati e dichiarati. Per poter creare gli attributi certificati, devono essere accreditati come **enti certificatori**. Per maggiori informazioni sulla funzionalità, si veda la [sezione dedicata](enti-certificatori.md).

Se durante la creazione di un nuovo e-service l'attributo desiderato non è presente nel database, è possibile crearlo e utilizzarlo immediatamente. L'attributo sarà automaticamente disponibile in archivio per tutti gli altri erogatori, che potranno utilizzarlo per i propri e-service.

### Revoca e riattivazione

La revoca di un attributo ha come conseguenza la sospensione di tutte le richieste di fruizione per le quali l'attributo era un requisito di accesso.

Per converso, la riattivazione dell'attributo prevede la riattivazione di tutte le richieste di fruizione precedentemente sospese. La riattivazione della richiesta di fruizione non viene effettuata solo nei casi in cui ci siano altri elementi bloccanti. Ad esempio, se la richiesta di fruizione era già stata manualmente sospesa prima della revoca di un attributo, non sarà sufficiente la riattivazione dell'attributo per riattivarla; sarà necessario anche riattivare la richiesta di fruizione stessa.

La gestione degli attributi verificati dei fruitori è a carico degli erogatori. È invece in capo al fruitore la gestione dei propri attributi dichiarati. Gli attributi certificati sono gestiti direttamente dall'ente certificatore, e la piattaforma si limita a recepire gli eventuali cambi di stato.

Maggiori dettagli sugli impatti che la revoca degli attributi ha sulle richieste di fruizione nella [sezione dedicata](revoca-attributi.md).

### Rifiuto

Questo meccanismo si può applicare esclusivamente agli attributi verificati.&#x20;

L'erogatore può scegliere di verificare autonomamente i requisiti, senza affidarsi a enti certificatori o altri erogatori: in questo caso se l'erogatore rileva che il fruitore non soddisfa i requisiti per un attributo verificato, può rifiutarlo. La presenza di almeno un rifiuto impedisce l'attivazione della richiesta di fruizione, rendendola non utilizzabile. Il fruitore può presentare una nuova richiesta per lo stesso e-service fornendo motivazioni e richiedendo all'erogatore la successiva accettazione dell'attributo precedentemente rifiutato.
