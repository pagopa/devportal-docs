# Finalità e Analisi del Rischio

La **Finalità** (chiamata `Purpose` nelle API) è l'oggetto che lega l'autorizzazione generale ottenuta con una Richiesta di Fruizione a uno specifico e concreto trattamento di dati. Se la Richiesta di Fruizione risponde alla domanda "Ho il diritto di accedere a questo dato?", la Finalità risponde alla domanda "Per quale preciso scopo utilizzerò questo dato?".

Ogni Fruitore deve creare almeno una finalità per ogni richiesta di fruizione attiva. È possibile creare più finalità per la stessa richiesta, qualora l'e-service venga utilizzato per molteplici procedimenti amministrativi distinti. La creazione di una finalità è un'operazione che richiede un'utenza con ruolo di Amministratore.

### L'Analisi del Rischio: Cos'è e Perché è Fondamentale

Il cuore della Finalità è l'**Analisi del Rischio**, un adempimento obbligatorio che guida il Fruitore in una valutazione della conformità del trattamento dei dati ai principi del **GDPR**. Non è un semplice questionario, ma uno strumento di accountability che obbliga il Fruitore a documentare e giustificare la liceità del trattamento che intende effettuare.

#### Perché va compilata

La compilazione è necessaria per:

1. **Garantire la Conformità Normativa**: Dimostra di aver valutato la base giuridica, la necessità e la proporzionalità del trattamento dei dati personali.
2. **Responsabilizzare il Fruitore**: In quanto Titolare del trattamento per i dati che riceve, il Fruitore è responsabile di utilizzarli in modo lecito, corretto e trasparente. L'analisi del rischio è la prova documentale di questa responsabilità.
3. **Trasparenza verso l'Erogatore**: Fornisce all'Erogatore (che agisce come Responsabile del trattamento per la trasmissione del dato) evidenza del fatto che il Fruitore ha condotto le dovute valutazioni di conformità.

#### Come va compilata

L'analisi del rischio è un modulo strutturato presente all'interno della finalità. Il Fruitore deve rispondere a una serie di domande precise, tra cui:

* **Finalità del trattamento**: Descrivere in dettaglio lo scopo per cui i dati vengono raccolti.
* **Base giuridica**: Indicare la base legale che rende lecito il trattamento (es. adempimento di un obbligo legale, esecuzione di un compito di interesse pubblico).
* **Necessità dei dati**: Giustificare perché ogni dato richiesto è indispensabile per raggiungere la finalità dichiarata (principio di minimizzazione).
* **Categorie di interessati e dati personali**: Specificare a chi appartengono i dati (es. cittadini, imprese) e quali tipologie di dati verranno trattate.
* **Misure di sicurezza**: Descrivere le misure tecniche e organizzative adottate per proteggere i dati da accessi illeciti o perdite.
* **Periodo di conservazione**: Indicare per quanto tempo i dati verranno conservati prima di essere cancellati o anonimizzati.

### Ciclo di Vita di una Finalità

Una finalità attraversa un ciclo di vita specifico, i cui stati principali sono:

* **Bozza (Draft)**: La finalità è in fase di creazione e non è ancora stata attivata. Può essere modificata o cancellata.
* **Attiva (Active)**: La finalità è stata attivata e può essere associata a un client per richiedere voucher.
* **Sospesa (Suspended)**: L'utilizzo della finalità è stato temporaneamente bloccato. La sospensione può essere avviata dall'Erogatore o dal Fruitore. Una finalità è sospesa se almeno uno dei due l'ha sospesa e per riattivarla entrambi devono revocare la sospensione.
* **Archiviata (Archived)**: La finalità è stata ritirata in modo permanente e non è più utilizzabile. Non è possibile riattivare una finalità archiviata.
* **In attesa di approvazione (Waiting for Approval)**: Questo stato si verifica quando il Fruitore aggiorna la stima di carico superando le soglie definite dall'Erogatore. La modifica deve essere approvata manualmente dall'Erogatore prima che la finalità torni attiva con la nuova stima.
