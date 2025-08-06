# Ciclo di vita

## Stati

Una richiesta di fruizione può trovarsi in uno dei seguenti stati:

* **bozza**: è in fase di creazione e non è ancora stata inoltrata all'erogatore. È sempre facoltà dell'aderente cancellare le richieste in bozza;
* **in attesa di approvazione**: è stata inoltrata all'erogatore che deve valutare la richiesta per eventualmente attivarla;
* **attiva**: la richiesta è attiva ed è stata attivata dall'erogatore oppure da PDND Interoperabilità, a seconda di come ha configurato la _policy di attivazione delle richieste di fruizione_ (per maggiori informazioni, si [vedano le impostazioni](../e-service/#informazioni-di-versione) della versione di e-service). Quando una richiesta di fruizione è attiva, è possibile creare nuove finalità per quell'e-service;
* **sospesa**: l’erogatore, il fruitore o la piattaforma hanno temporaneamente bloccato l'utilizzo di questa richiesta;
* **archiviata**: il fruitore non necessita più di accesso all'e-service, e ha ritirato la propria richiesta. Ha sempre facoltà di inoltrarne una nuova.

Esiste inoltre un altro stato, necessario solo al funzionamento tecnico della piattaforma, ossia:

* **attributi certificati mancanti**: si verifica caso in cui un aderente perda un attributo certificato necessario per l'e-service mentre la richiesta si trova in stato di bozza o in attesa di approvazione. In quella situazione l'aderente ha perso uno dei requisiti minimi di accesso e la piattaforma impedisce la presentazione della richiesta all'erogatore, almeno fino a quanto l'attributo certificato che è stato revocato non viene nuovamente conferito.

## Operazioni

### Creazione di una bozza e inoltro della richiesta

È possibile iscriversi agli e-service presenti nel Catalogo degli e-service a due condizioni:

* che il proprio ente non abbia già una richiesta di fruizione attiva per quello stesso e-service;
* che il proprio ente possegga i requisiti minimi per iscriversi.

È possibile creare una bozza di richiesta di fruizione solamente se PDND Interoperabilità verifica che l'ente possiede tutti gli attributi certificati richiesti dall'e-service. È invece a cura dell'ente:

* autodichiarare di possedere gli attributi dichiarati richiesti;
* caricare il materiale necessario affinché l'erogatore possa verificare eventuali attributi verificati.

Una volta che la bozza è completa, è possibile inoltrarla all'erogatore per approvazione.

#### Iscriversi a un proprio e-service

Un ente può sempre iscriversi ai propri e-service in qualità di fruitore saltando la parte di verifica degli attributi. Il meccanismo è pensato per permettere agli enti di iscriversi ai propri e-service senza oneri aggiuntivi, anche per semplificare le operazioni di monitoraggio.

### Approvazione o rifiuto di una richiesta di fruizione

 La richiesta di fruizione che un fruitore inoltra può essere approvata automaticamente oppure manualmente. L'erogatore può modificare quest'impostazione nella propria versione di e-service, alla voce _policy di approvazione delle richieste_ (automatica o manuale).

Se l'approvazione è manuale, sarà l'erogatore a dover attivare la richiesta manualmente. Questo avviene sia che l'ente possegga già tutti gli attributi richiesti, sia se ci sono attributi verificati che l'erogatore deve vagliare.

Se l'approvazione è automatica, sarà PDND Interoperabilità a fare le verifiche necessarie. Se il potenziale fruitore possiede già tutti gli attributi (certificati, verificati, dichiarati) richiesti, si troverà la richiesta immediatamente attivata. In caso contrario, ricadrà comunque all'interno del flusso di approvazione manuale, e dovrà attendere le verifiche dell'erogatore.

L'erogatore ha la facoltà di rifiutare una richiesta di fruizione se, a suo giudizio, il fruitore non possiede tutti gli attributi richiesti. È comunque obbligato a fornirne motivazione, e sarà facoltà del fruitore eventualmente presentare una nuova richiesta aggiornando la documentazione e/o le motivazioni.

{% hint style="info" %}
È possibile confrontarsi con l'erogatore direttamente usando i contatti presenti nella scheda _Informazioni generali_ (_Visualizza contatti erogatore_).
{% endhint %}

### Aggiornamento di una richiesta di fruizione

È necessario quando un erogatore pubblica una nuova versione di e-service. In quel caso, il fruitore troverà un pulsante _Aggiorna_ nella scheda della propria richiesta di fruizione.&#x20;

Questo avviene perché la richiesta è fortemente legata alla versione di e-service per la quale è stata presentata. Se una richiesta di fruizione è stata presentata per un e-service in versione 5, nel momento in cui questo viene aggiornato alla versione 6, è necessario effettuare un aggiornamento.

Nel momento in cui il fruitore aggiorna la richiesta di fruizione alla versione più recente dell'e-service tutte le sue finalità saranno migrate, e da quel momento utilizzeranno la nuova versione. L'operazione è irreversibile.

Bisogna prestare particolare attenzione: l'erogatore pubblica una nuova versione di e-service quando cambia qualcosa nei requisiti di accesso (attributi) oppure nell'interfaccia dell'API che espone ai fruitori. In genere si tratta di estensioni, ma è anche possibile che la nuova versione dell'API presenti modifiche "breaking", che quindi produrrebbero un'interruzione del flusso per il fruitore. È sempre buona norma verificare il changelog (descrizione della versione) della versione di e-service e il file di interfaccia aggiornato per capire cosa è cambiato, prima di aggiornare.&#x20;

Nel caso in cui l'erogatore pubblichi più versioni, l'aggiornamento è sempre da intendersi all'ultima. Facciamo un esempio:&#x20;

1. il fruitore è iscritto alla versione 3 dell'e-service;
2. l'erogatore pubblica una versione 4 dell'e-service;
3. l'erogatore pubblica una versione 5 dell'e-service.

A questo punto, se il fruitore aggiornerà la propria richiesta di fruizione, l'aggiornamento sarà direttamente sulla versione 5, saltando la 4. La logica prevista è che **ci si possa sempre e solo iscrivere alla versione dell'e-service più recente** pubblicata sul Catalogo degli e-service.

Per alcuni e-service, gli erogatori prevedono una versione in ambiente di test. In quel caso, è possibile effettuare delle prove in quell'ambiente prima di recepire eventuali aggiornamenti in produzione.

### Archiviare una richiesta di fruizione

L'archiviazione di una richiesta di fruizione può avvenire in due modi, automatico o manuale.

L'archiviazione è automatica se il fruitore aggiorna la propria richiesta all'ultima versione di e-service. In questo caso la richiesta per la versione precedente viene automaticamente archiviata, e tutte le finalità vengono associate alla nuova richiesta.

L'archiviazione della richiesta di fruizione può essere anche manuale a opera del fruitore, nel caso in cui non debba più utilizzare il servizio. Potrà comunque creare una nuova richiesta di fruizione in futuro, con l'unico vincolo che non ne abbia già una attiva per lo stesso e-service.

Sia per questioni di pulizia che di sicurezza, è buona prassi archiviare le richieste di fruizione per gli e-service che l'ente non sta più utilizzando.

### Sospendere o riattivare una richiesta di fruizione

La sospensione di una richiesta di fruizione può avvenire ad opera di uno o più attori: l'erogatore, il fruitore o "la piattaforma" (cioè PDND Interoperabilità). Se almeno un attore sospende una richiesta di fruizione, questa è sospesa. Solo l'attore che l'ha sospesa ha facoltà di riattivarla.

Quindi, se una richiesta di fruizione è sospesa dall'erogatore, solo l'erogatore potrà riattivarla.

&#x20;Di norma, queste sono le regole di sospensione:

* **sospensione ad opera dell'erogatore:** avviene se l'erogatore sospende direttamente una richiesta di fruizione in maniera manuale;
* **sospensione ad opera del fruitore:** avviene se il fruitore sospende direttamente una richiesta di fruizione in maniera manuale;
* **sospensione ad opera della piattaforma:** avviene se la piattaforma rileva che
  * l'erogatore ha revocato al fruitore uno o più attributi verificati;
  * il fruitore si è autorevocato uno o più attributi dichiarti;
  * una fonte autoritativa ha revocato al fruitore uno o più attributi certificati.

Per poter riattivare di una richiesta di fruizione è previsto che tutti gli attori che hanno sospeso la richiesta chiedano la sua riattivazione: se una richiesta di fruizione è sospesa sia dall'erogatore che dalla piattaforma non sarà sufficiente che l'erogatore riattivi la richiesta; sarà necessario che anche la piattaforma faccia lo stesso.

Inoltre, è necessario che tutti gli attributi necessari per una richiesta di fruizione siano riconosciuti: se un erogatore tenta di riattivare una richiesta di fruizione ad un fruitore al quale ha revocato un attributo verificato, la riattivazione non andrà a buon fine; sarà necessario prima verificare nuovamente l'attributo e solo successivamente riattivare la richiesta.
