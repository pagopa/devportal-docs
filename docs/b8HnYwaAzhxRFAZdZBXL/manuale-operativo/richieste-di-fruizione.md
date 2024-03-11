# Richieste di fruizione

### Fruitore: sottoscrivere una richiesta di fruizione

Il primo passaggio è trovare l'e-service per il quale si vuole presentare una richiesta di fruizione, andando su _Fruizione > Catalogo e-service_ e selezionando quello di interesse. Se non è possibile che l'aderente si iscriva a fruire dell'e-service perché non in possesso di uno o più attributi certificati richiesti, sarà chiaramente indicato.

<figure><img src="../.gitbook/assets/catalogo e-service.png" alt=""><figcaption><p>Come appare il catalogo degli e-service</p></figcaption></figure>

A questo punto, il potenziale fruitore clicca su _Richiedi fruizione_ e crea una bozza di richiesta di fruizione. Questa bozza sarà aggiornabile a piacimento e non sarà visibile all'erogatore. In qualsiasi momento sarà anche possibile eliminarla.

Prima di inviare la richiesta di fruizione dovrà essere compilata in tutte le sue parti. Quelle di interesse per il fruitore sono potenzialmente due:

1. gli attributi dichiarati: per poter presentare una richiesta di fruizione dovrà avere tutti gli attributi dichiarati con spunta verde, ossia dovrà aver esplicitamente dichiarato che l'aderente li possiede;
2. la documentazione a corredo e il messaggio per l'erogatore: per permettere all'erogatore di verificare gli attributi verificati richiesti, il potenziale fruitore deve caricare la documentazione necessaria alla verifica e/o segnalare all'interno del campo libero di "messaggio per l'erogatore" tutte le circostanze e i link rilevanti ai fini della verifica.

Se la richiesta è compilata correttamente, sarà possibile inoltrarla. A questo punto, non potrà essere ulteriormente manipolata dal potenziale fruitore, – neanche per cancellarla, – fino a che non ci sia una verifica da parte dell'erogatore, o PDND Interoperabilità non si accorga di modifiche allo stato degli attributi posseduti dal potenziale fruitore.

È sempre possibile verificare lo stato delle richieste di fruizione presentate andando su _Fruizione > Le tue richieste_.

<figure><img src="../.gitbook/assets/richieste di fruizione e-service.png" alt=""><figcaption></figcaption></figure>

### Erogatore: approvare una richiesta di fruizione

L'approvazione di una richiesta di fruizione può avvenire in due modi: automaticamente o manualmente. Se all'atto della creazione di una versione di un e-service l'erogatore ha indicato di voler attivare manualmente le richieste di fruizione, l'attivazione sarà sempre e comunque manuale, indipendentemente dalle circostanze. Se invece ha optato per una gestione automatica, PDND Interoperabilità gestirà, laddove possibile, le richieste automaticamente.

Una richiesta di fruizione può essere attivata automaticamente solo se all'atto della presentazione da parte del fruitore, il fruitore possiede già tutti gli attributi verificati richiesti. In caso contrario, sarà l'erogatore a dovergli riconoscere gli attributi verificati mancanti e, a valle della verifica, attivare manualmente la richiesta.

Tutte le richieste pervenute dai fruitori e non ancora attivate sono in stato "in attesa di approvazione". Entrando all'interno di una singola richiesta, potrà gestire gli attributi verificati e lo stato della richiesta. Cliccando su _Attiva_, attiverà la richiesta di fruizione.

L'erogatore trova tutte le richieste di fruizione pervenute dai fruitori per i suoi e-service nella sezione _Erogazione > Richieste di fruizione._ Viene inoltre notificata attraverso il canale degli eventi in pull.

### Erogatore: rifiutare una richiesta di fruizione

Oltre ad attivarla, l'erogatore ha la possibilità di rifiutare una richiesta di fruizione se, a suo giudizio, il fruitore ha dimostrato di non possedere tutti i requisiti necessari all'accesso. Per farlo, potrà cliccare su _Rifiuta_ e inserire la motivazione del rifiuto. Sarà facoltà del fruitore eventualmente presentare una nuova richiesta aggiornando la documentazione e/o le motivazioni.

### Fruitore: aggiornare una richiesta di fruizione

Ogni richiesta di fruizione è fortemente legata alla versione di e-service per la quale è stata presentata. Se una richiesta di fruizione è stata presentata per un e-service in versione 5, nel momento in cui questo viene aggiornato alla versione 6, PDND Interoperabilità segnalerà al fruitore che è possibile effettuare un aggiornamento.

Nel momento in cui il fruitore, unilateralmente, decide di aggiornare la richiesta di fruizione alla versione più recente dell'e-service tutte le sue finalità saranno migrate, e da quel momento utilizzeranno la nuova versione. L'operazione è irreversibile.

Bisogna prestare particolare attenzione: l'aggiornamento della versione dell'e-service da parte dell'erogatore in genere prevede estensioni ma anche modifiche all'API esposta. Questo significa che, se si effettua un aggiornamento "alla leggera", è possibile che alcuni servizi del fruitore interrompano il servizio verso i propri utenti finali. Si ricorda che è sempre a disposizione l'ambiente di test per fare delle prove prima di portare eventuali aggiornamenti in produzione.

### Sospendere o riattivare una richiesta di fruizione

La sospensione di una richiesta di fruizione può avvenire ad opera di uno o più attori: l'erogatore, il fruitore o "la piattaforma" (cioè PDND Interoperabilità). Se almeno un attore sospende una richiesta di fruizione, questa è sospesa. Solo l'attore che l'ha sospesa ha facoltà di riattivarla. Ad esempio, se una richiesta di fruizione è sospesa dall'erogatore, solo l'erogatore potrà riattivarla. Di norma, queste sono le regole di sospensione:

* sospensione ad opera dell'erogatore: l'erogatore può sospendere direttamente una richiesta di fruizione in maniera manuale, oppure farlo dopo aver revocato al fruitore uno o più attributi verificati;&#x20;
* sospensione ad opera del fruitore: il fruitore può sospendere direttamente una richiesta di fruizione in maniera manuale;
* sospensione ad opera della piattaforma: PDND Interoperabilità sospende in maniera automatica una richiesta di fruizione se il fruitore perde uno o più attributi certificati e/o dichiarati.

La riattivazione di una richiesta di fruizione è l'esatto speculare di una sospensione, e prevede che nessuno degli attori abbia sospeso la richiesta. Se, ad esempio, una richiesta di fruizione era sospesa sia dall'erogatore che dalla piattaforma non sarà sufficiente che l'erogatore riattivi la richiesta. Sarà necessario che anche la piattaforma lo faccia.

Inoltre, è necessario che tutti gli attributi necessari per una richiesta di fruizione siano riconosciuti. Ad esempio, se un erogatore tenta di riattivare una richiesta di fruizione ad un fruitore al quale ha revocato un attributo verificato, la riattivazione non andrà a buon fine. Sarà necessario prima verificare nuovamente l'attributo, e solo successivamente riattivare la richiesta.

### Archiviare una richiesta di fruizione

L'archiviazione è automatica nel momento in cui si effettua l'aggiornamento della richiesta di fruizione. A scopo esemplificativo, se esiste una richiesta di fruizione attiva per la versione 5 di un e-service, nel momento in cui esce una versione 6 e il fruitore effettua l'aggiornamento, la richiesta di fruizione per la versione 6 diventa attiva mentre la 5 viene archiviata.

### Casi particolari

#### Fruizione: perdita di un attributo certificato

Se PDND Interoperabilità constata che un fruitore non possiede più un attributo precedentemente riconosciutogli dal Catalogo IPA, viene automaticamente cambiato lo stato della richiesta di fruizione.

Se la richiesta è in bozza o in attesa di approvazione, viene portata in uno stato "invalido". Per uscire da questo stato, è necessario che il Catalogo IPA riconosca nuovamente l'attributo al fruitore. In alternativa, il fruitore può eliminare la bozza.&#x20;

Se la richiesta era in attesa di approvazione prima di essere portata in stato "invalido", a valle del nuovo riconoscimento dell'attributo certificato viene riportata in stato di bozza e potrà essere nuovamente presentata all'erogatore.

#### Fruizione: perdita di un attributo verificato

Se l'erogatore revoca un attributo verificato precedentemente riconosciuto al fruitore, la richiesta non viene sospesa immediatamente. PDND Interoperabilità notifica a tutti gli enti interessati da quell'attributo verificato il fatto che ci siano discrepanze. Per fare un esempio:&#x20;

1. l'erogatore A e l'erogatore B verificano al fruitore C lo stesso attributo verificato;
2. l'erogatore B lo revoca;
3. ad A, B e C viene inviata una notifica segnalando che c'è una discrepanza tra l'interpretazione dell'erogatore A e B. PDND Interoperabilità si limita alla segnalazione, senza sospendere nessuna delle richieste di fruizione. Sarà compito degli attori coinvolti risolvere eventuali contese.

{% hint style="warning" %}
Il sistema di notifica è in corso di realizzazione e non è ancora disponibile.
{% endhint %}

#### Fruizione: perdita di un attributo dichiarato

La certificazione e la revoca degli attributi dichiarati è a carico esclusivo dei fruitori.

Se il fruitore si revoca un attributo dichiarato per una richiesta di fruizione in bozza, esistono due casi. Se l'attributo non è strettamente necessario alla presentazione della richiesta di fruizione, non succede nulla. Se l'attributo è invece necessario, non sarà possibile inoltrare la richiesta finché l'attributo non viene nuovamente dichiarato.

Se la richiesta di fruizione è attualmente in attesa di approvazione, alla revoca di un attributo dichiarato questa torna in stato di bozza presso il fruitore, che potrà presentarla nuovamente solo dopo aver dichiarato nuovamente l'attributo che si è revocato.

Se la richiesta di fruizione è attiva, viene immediatamente sospesa dalla piattaforma e non è riattivabile né dall'erogatore né dal fruitore. Verrà automaticamente riattivata quando il fruitore dichiara nuovamente il possesso dell'attributo dichiarato. Se la richiesta non viene riattivata, è possibile che sia stata sospesa anche da qualche altro attore (es. l'erogatore o il fruitore). Ogni attore che l'ha sospesa dovrà quindi procedere a riattivare manualmente la richiesta.

