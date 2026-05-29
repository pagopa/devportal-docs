# Archiviazione

Le posizioni debitorie, create tramite integrazione sincrona o asincrona, seguono un processo automatico di archiviazione ed eliminazione.

Questo processo si attiva rispettando due regole:

* Stato della posizione: vengono considerate solo le posizioni debitorie _pagate_, _rendicontate_ o _invalidate_ dall'Ente;
* Calcolo del tempo: la data di partenza per il calcolo delle tempistiche corrisponde sempre alla data dell'ultima modifica della posizione;

Di seguito sono riportati i tempi di archiviazione ed eliminazione suddivisi per modalità di integrazione.

| Integrazione | Ambiente | Archiviazione | Eliminazione |
| ------------ | -------- | ------------- | ------------ |
| Sincrona     | PROD     | 2 anni        | 10 anni      |
| Asincrona    | PROD     | 2 anni        | 10 anni      |

### Recupero di una posizione debitoria archiviata

Le posizioni debitorie rimangono disponibili per un periodo di 2 anni decorrenti dal passaggio di stato sopra indicato.\
Decorso tale termine, eventuali richieste di recupero saranno sottoposte a valutazione, previa esplicitazione delle relative motivazioni mediante apertura di un ticket al team di Service Management.
