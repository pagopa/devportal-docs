# Richieste di fruizione

### Panoramica&#x20;

<mark style="background-color:blue;">\[Da compilare]</mark>

### Erogatore: approvazione di una richiesta di fruizione

L'approvazione di una richiesta di fruizione può avvenire in due modi: automaticamente o manualmente. Se all'atto della creazione di una versione di un e-service l'erogatore ha indicato di voler attivare manualmente le richieste di fruizione, l'attivazione sarà sempre e comunque manuale, indipendentemente dalle circostanze. Se invece ha optato per una gestione automatica, PDND Interoperabilità gestirà, laddove possibile, le richieste automaticamente.

Una richiesta di fruizione può essere attivata automaticamente solo se all'atto della presentazione da parte del fruitore, il fruitore possiede già tutti gli attributi verificati richiesti. In caso contrario, sarà l'erogatore a dovergli riconoscere gli attributi verificati mancanti e, a valle della verifica, attivare manualmente la richiesta.

### Erogatore: rifiuto di una richiesta di fruizione

Oltre ad attivarla, l'erogatore ha la possibilità di rifiutare una richiesta di fruizione se, a suo giudizio, il fruitore ha dimostrato di non possedere tutti i requisiti necessari all'accesso. Deve inserire la motivazione del rifiuto e sarà facoltà del fruitore eventualmente presentare una nuova richiesta aggiornando la documentazione e/o le motivazioni.

### Fruitore: aggiornamento di una richiesta di fruizione

Ogni richiesta di fruizione è fortemente legata alla versione di e-service per la quale è stata presentata. Se una richiesta di fruizione è stata presentata per un e-service in versione 5, nel momento in cui questo viene aggiornato alla versione 6, PDND Interoperabilità segnalerà al fruitore che è possibile effettuare un aggiornamento.

Nel momento in cui il fruitore, unilateralmente, decide di aggiornare la richiesta di fruizione alla versione più recente dell'e-service tutte le sue finalità saranno migrate, e da quel momento utilizzeranno la nuova versione. L'operazione è irreversibile.

Bisogna prestare particolare attenzione: l'aggiornamento della versione dell'e-service da parte dell'erogatore in genere prevede estensioni ma anche modifiche all'API esposta. Questo significa che, se si effettua un aggiornamento "alla leggera", è possibile che alcuni servizi del fruitore interrompano il servizio verso i propri utenti finali. Si ricorda che è sempre a disposizione l'ambiente di test per fare delle prove prima di portare eventuali aggiornamenti in produzione.

### Sospendere o riattivare una richiesta di fruizione

La sospensione di una richiesta di fruizione può avvenire ad opera di uno o più attori: l'erogatore, il fruitore o "la piattaforma" (cioè PDND Interoperabilità). Se almeno un attore sospende una richiesta di fruizione, questa è sospesa. Solo l'attore che l'ha sospesa ha facoltà di riattivarla.

Quindi, se una richiesta di fruizione è sospesa dall'erogatore, solo l'erogatore potrà riattivarla.

&#x20;Di norma, queste sono le regole di sospensione:

* **sospensione ad opera dell'erogatore:** l'erogatore può sospendere direttamente una richiesta di fruizione in maniera manuale, oppure farlo dopo aver revocato al fruitore uno o più attributi verificati;&#x20;
* **sospensione ad opera del fruitore:** il fruitore può sospendere direttamente una richiesta di fruizione in maniera manuale;
* **sospensione ad opera della piattaforma:** PDND Interoperabilità sospende in maniera automatica una richiesta di fruizione se il fruitore perde uno o più attributi certificati e/o dichiarati.

Per poter riattivare di una richiesta di fruizione è previsto che tutti gli attori che hanno sospeso la richiesta chiedano la sua riattivazione. Se, ad esempio, una richiesta di fruizione è sospesa sia dall'erogatore che dalla piattaforma non sarà sufficiente che l'erogatore riattivi la richiesta. Sarà necessario che anche la piattaforma lo faccia.

Inoltre, è necessario che tutti gli attributi necessari per una richiesta di fruizione siano riconosciuti. Ad esempio, se un erogatore tenta di riattivare una richiesta di fruizione ad un fruitore al quale ha revocato un attributo verificato, la riattivazione non andrà a buon fine. Sarà necessario prima verificare nuovamente l'attributo, e solo successivamente riattivare la richiesta.

### Archiviare una richiesta di fruizione

L'archiviazione è automatica nel momento in cui si effettua l'aggiornamento della richiesta di fruizione. A scopo esemplificativo, se esiste una richiesta di fruizione attiva per la versione 5 di un e-service, nel momento in cui esce una versione 6 e il fruitore effettua l'aggiornamento, la richiesta di fruizione per la versione 6 diventa attiva mentre la 5 viene archiviata.



