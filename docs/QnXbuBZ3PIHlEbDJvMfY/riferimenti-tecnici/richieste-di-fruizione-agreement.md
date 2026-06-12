# Richieste di Fruizione (Agreement)

La **Richiesta di Fruizione** (chiamata `Agreement` nelle API) è l'adempimento amministrativo che permette a un ente Fruitore di iscriversi a un e-service presente nel catalogo. Non è un'autorizzazione tecnica, ma un atto formale che stabilisce il diritto di un ente ad accedere a determinati dati per le proprie finalità istituzionali.

È all'interno di questa richiesta che l'Erogatore verifica che il Fruitore possegga tutti i requisiti di accesso (gli **attributi**) necessari. Per questa ragione, è possibile avere una sola richiesta di fruizione attiva per ogni singolo e-service. La sua compilazione e il suo inoltro sono operazioni che richiedono un'utenza con ruolo di Amministratore.

### Stati del Ciclo di Vita

Una richiesta di fruizione può trovarsi in uno dei seguenti stati:

* **Bozza (Draft)**: È in fase di creazione e non è ancora stata inoltrata all'Erogatore. Può essere cancellata in qualsiasi momento dal Fruitore.
* **In attesa di approvazione (Pending)**: È stata inoltrata e l'Erogatore deve valutarla per l'attivazione.
* **Attiva (Active)**: La richiesta è stata approvata dall'Erogatore (o automaticamente dalla piattaforma) e il Fruitore è autorizzato a creare finalità per utilizzare l'e-service.
* **Sospesa (Suspended)**: L'utilizzo della richiesta è stato temporaneamente bloccato. La sospensione può essere avviata dall'Erogatore, dal Fruitore o automaticamente dalla piattaforma (ad esempio per la revoca di un attributo).
* **Archiviata (Archived)**: Il Fruitore ha ritirato la propria richiesta perché non necessita più di accedere all'e-service. L'operazione può essere manuale o automatica (ad esempio quando si aggiorna a una nuova versione).
* **Attributi certificati mancanti (Missing Certified Attributes)**: Uno stato tecnico che si verifica se un Fruitore perde un attributo certificato necessario mentre la richiesta è in bozza o in attesa. La piattaforma impedisce l'inoltro fino al ripristino dell'attributo.

### Operazioni sul Ciclo di Vita

#### Creazione e Inoltro

Un Fruitore può creare una bozza di richiesta solo se non ne ha già una attiva per lo stesso e-service e se possiede tutti gli attributi certificati richiesti. Durante la creazione, dovrà autodichiarare gli attributi dichiarati e caricare la documentazione per quelli verificati.

#### Approvazione o Rifiuto

L'Erogatore può impostare una politica di approvazione `MANUAL` o `AUTOMATIC` per il proprio e-service.

* **Manuale**: L'Erogatore deve sempre attivare la richiesta manualmente, anche se tutti gli attributi sono già soddisfatti.
* **Automatica**: La piattaforma tenta di attivare la richiesta automaticamente. Se il Fruitore possiede già tutti gli attributi richiesti (inclusi quelli verificati, magari da una precedente richiesta), la richiesta diventa subito attiva. In caso contrario, ricade nel flusso manuale per la valutazione dell'Erogatore. L'Erogatore può sempre rifiutare una richiesta, fornendo una motivazione.

#### Aggiornamento a una nuova versione

Quando un Erogatore pubblica una nuova versione di un e-service, il Fruitore deve aggiornare la propria richiesta di fruizione per poterne beneficiare. L'operazione è irreversibile e migra automaticamente tutte le finalità collegate alla nuova versione. È fondamentale analizzare le modifiche della nuova versione (specialmente eventuali _breaking changes_ all'API) prima di procedere. L'aggiornamento avviene sempre verso l'ultima versione disponibile.

#### Sospensione e Riattivazione

La sospensione può essere eseguita da tre attori: Erogatore, Fruitore o la Piattaforma. Una richiesta è sospesa se almeno uno di loro l'ha sospesa.

* **Sospensione da Erogatore/Fruitore**: Avviene manualmente dal back-office.
* **Sospensione dalla Piattaforma**: Avviene automaticamente se viene revocato un attributo (certificato, verificato o dichiarato) necessario per la fruizione. Per riattivare la richiesta, è necessario che **tutti** gli attori che l'hanno sospesa revochino la sospensione. Ad esempio, se è sospesa sia dall'Erogatore sia dalla Piattaforma, entrambi dovranno riattivarla. Inoltre, la riattivazione non va a buon fine se le condizioni che hanno causato la sospensione (es. la mancanza di un attributo) non sono state sanate.

#### Archiviazione

L'archiviazione può essere:

* **Automatica**: Quando si aggiorna una richiesta a una nuova versione, quella precedente viene archiviata.
* **Manuale**: Quando il Fruitore decide che non ha più bisogno del servizio e la ritira. È buona prassi archiviare le fruizioni non più in uso.
