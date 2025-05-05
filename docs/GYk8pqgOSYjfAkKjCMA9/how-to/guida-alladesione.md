# Come aderire a PDND Interoperabilità e aggiungere un operatore

## Prima dell'adesione

* **Se sei una PA o un Gestore di servizi pubblici:**

Verifica che i dati dell'ente contenuti in [IPA](https://www.indicepa.gov.it/ipa-portale/consultazione/indirizzo-sede/ricerca-ente) siano corretti prima di iniziare la procedura di adesione;

Assicurati di avere accesso alla PEC indicata come domicilio digitale all'interno del Catalogo IPA.

* **Se sei una Società a Controllo Pubblico:**

Controlla di essere in possesso di tutti i dati relativi alla società che potranno esserti richiesti al momento dell'onboarding e di avere accesso alla PEC che dovrai indicare nel form di adesione.

* **Se sei un Gestore privato di piattaforma e-procurement:**

Controlla di aver completato il [processo](https://www.agid.gov.it/it/piattaforme/procurement/certificazione-componenti-piattaforme) di certificazione dei componenti delle piattaforme pubblicato da AgID.

Per maggiori informazioni sull'e-procurement si fa riferimento a [questa news ](https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2023/09/25/procurement-pubblicato-schema-operativo-supporto-del-processo-certificazione)sul sito di AgID.

* **Se sei un impresa e/o gruppo assicurativo:**

Controlla di essere presente all'interno [dell'Albo](https://infostat-ivass.bancaditalia.it/RIGAInquiry-public/ng/#/home).&#x20;

Per maggiori informazioni si fa riferimento a questa [lettera](https://www.ivass.it/normativa/nazionale/secondaria-ivass/lettere/2023/lm-22-11/index.html?dotcache=refresh) al mercato di IVASS.

{% hint style="info" %}
Per aiutarti nel percorso di onboarding abbiamo creato un [videotutorial](https://www.youtube.com/watch?v=mLCAnUTL3QE) a completamento di questa guida all'adesione.
{% endhint %}

## Processo di adesione

### Step 1 - Naviga alla pagina di onboarding

{% embed url="https://selfcare.pagopa.it/onboarding/prod-interop" %}

### Step 2 - Effettua il login con SPID

Effettua il login con lo SPID personale o CIE, non è necessario essere Legale Rappresentante dell'ente per il quale si inizia il processo di adesione.&#x20;

È comunque garantita la legalità della procedura: l'Accordo di Adesione da firmare sarà inviato, come indicato sul Catalogo IPA, al domicilio digitale dell'ente che funge da fonte autoritativa. Non è quindi importante chi compila la form di adesione in prima istanza ed è garantito che il documento da firmare sia inviato all'indirizzo istituzionale dell'ente.

### Step 3 - Seleziona la tipologia di ente

<figure><img src="../.gitbook/assets/Selezione ente onboarding.png" alt=""><figcaption><p>La schermata di selezione della tipologia dell'ente</p></figcaption></figure>

Indica qual è la tipologia dell’Ente per il quale si sta operando ai sensi degli artt. 2 (comma 2) e 64bis (par. 6) del Codice dell'Amministrazione Digitale (CAD). Qualora l’informazione sia già disponibile attraverso IPA, sarà preselezionata. Si potrà comunque modificare la tipologia dell’ente selezionando una differente opzione.

### Step 4 - Seleziona l'ente per il quale effettuare l'adesione

<div><img src="../.gitbook/assets/selfcare.pagopa.it_onboarding_prod-interop(Macbook Pro – Screenshot).png" alt="La schermata di selezione dell&#x27;ente per PA e GSP"> <figure><img src="../.gitbook/assets/Screenshot 2024-10-09 alle 09.36.09.png" alt=""><figcaption><p>La schermata di selezione dell'ente per SCP</p></figcaption></figure></div>



* Per PA e GSP: seleziona l'ente dal campo di auto-completamento "Cerca ente". L'elenco degli enti disponibili fa riferimento al Catalogo IPA. Qualora il proprio ente non fosse presente nell'elenco, clicca sul link disponibile sotto il campo di input per scoprire come accreditarlo.
* Per SCP: inserisci il codice fiscale dell'ente, il nome apparirà una volta cliccato sul pulsante Continua.

### Step 5 - Inserisci i dati dell'ente

![La schermata nella quale indicare i dati dell'ente, abitualmente precompilata con le informazioni che vengono dal catalogo IPA](<../.gitbook/assets/uat.selfcare.pagopa.it_onboarding_prod-interop(Macbook Pro – Screenshot) (2).png>)

Tutti i campi sopra indicati appariranno precompilati quando disponibili. I campi _Ragione sociale_, _Sede legale_, _Indirizzo PEC_, _Codice fiscale_ e _Partita IVA_ non saranno modificabili se la fonte di provenienza dell'informazione è IPA. È invece possibile inserire una nuova partita IVA in caso non coincida con il codice fiscale, cliccando sulla spunta apposita.

Il campo relativo al _Codice destinatario_ è invece sempre modificabile.

### Step 6 - Indica il Legale Rappresentante

![La schermata nella quale si inseriscono le informazioni del legale rappresentante dell'ente](<../.gitbook/assets/uat.selfcare.pagopa.it_onboarding_prod-interop(Macbook Pro – Screenshot) (3).png>)

Inserisci i dati richiesti per la sezione di Legale Rappresentante. Con questa figura si identifica non necessariamente il vertice dell'ente; può essere il rappresentante pro tempore o un procuratore munito dei necessari poteri di firma. La cosa importante è che i dati della persona qui indicata corrispondano con quelli della persona che apporrà la firma digitale al documento di adesione indicato al [punto 8](guida-alladesione.md#8.-fai-firmare-digitalmente-laccordo-al-legale-rappresentante).

### Step 7 - Indica gli amministratori per Interoperabilità

![La schermata nella quale si inseriscono i dati degli utenti con privilegi di amministrazione](<../.gitbook/assets/uat.selfcare.pagopa.it_onboarding_prod-interop(Macbook Pro – Screenshot) (4).png>)

Le persone che vengono inserite in questa schermata avranno la qualifica di _Delegato_ all'interno di PDND Interoperabilità e avranno pieni poteri di amministrazione. È la stessa figura che sulle linee guida AgID è indicata come _Operatore Amministrativo_. Possono essere inserite fino a 3 amministratori per l'ambiente di produzione cliccando su _Aggiungi un altro Amministratore_.

{% hint style="info" %}
Tutte le figure operative (Operatore API e Operatore di Sicurezza) potranno essere aggiunte, rimosse e gestite in un secondo momento, una volta completata l'adesione a PDND Interoperabilità.
{% endhint %}

{% hint style="warning" %}
Ulteriori Amministratori, oltre a quelli segnalati in fase di adesione, possono essere aggiunti direttamente dalla Dashboard dell’ente per i vari ambienti, mentre per rimuoverli dall'ambiente di Produzione bisognerà compilare il documento allegato a fine pagina e inviarlo alla PEC indicata.
{% endhint %}

Per PA e GSP: una volta completato l'inserimento, clicca su _Continua._ Se non ci sono errori, viene generato e inviato alla PEC del tuo ente l'Accordo di Adesione da firmare. L'indirizzo a cui viene inviato il documento è quello indicato come domicilio digitale all'interno del Catalogo IPA.

Per SCP: una volta completato l'inserimento, clicca su _Continua._ Se non ci sono errori, viene generata e inviata alla PEC indicata in fase di adesione una mail contenente le istruzioni per completare l'adesione. Ora si tratta di attendere di essere contattati dal Team Account dedicato all'onboarding che chiederà l'inoltro dei documenti richiesti in precedenza. Controllati i documenti, il Team Account invierà sempre alla PEC indicata l'Accordo di Adesione da firmare in formato CAdES (.p7m) come indicato al punto 8.

### Step 8 - Fai firmare digitalmente l'Accordo al Legale Rappresentante

Apri la PEC che è arrivata al tuo ente. Scarica l'Accordo di Adesione allegato, che deve essere firmato per nome e per conto di chi è Legale Rappresentante. Come indicato al [punto 6](guida-alladesione.md#6.-indica-il-legale-rappresentante), i dati nella firma digitale devono corrispondere alla persona indicata come Legale Rappresentante durante la fase di compilazione del form di adesione. La firma digitale va apposta una volta all'intero documento, e lo standard da utilizzare è CAdES.

### Step 9 - Carica l'Accordo di Adesione firmato

All'interno della mail arrivata per PEC, ci sono due link.&#x20;

{% hint style="info" %}
I link all'interno della mail hanno validità 30 giorni dalla ricezione della PEC con l'Accordo di Adesione.
{% endhint %}

Il primo è per completare la procedura di adesione. Quando lo apri, atterri su una pagina nella quale puoi caricare l'Accordo di Adesione firmato, come da screenshot sotto.&#x20;

![La schermata nella quale si carica l'accordo di adesione ricevuto al domicilio digitale, firmato dal legale rappresentante dell'ente](<../.gitbook/assets/Screenshot 2022-07-28 at 17.15.59.png>)

Se il caricamento va a buon fine, avrai risposta positiva, ricevendo inoltre una mail all’indirizzo PEC che comunica il completamento dell’adesione.

In caso contrario, ti sarà segnalato l'errore. L'errore può essere di uno di questi  tipi:

1. errore generico: errore non ben individuato ma che non ha permesso di completare la registrazione;
2. errore per allegato non conforme: l’accordo di adesione non ha il formato aspettato oppure non coincide con quello inviato dalla piattaforma (per una spiegazione più esaustiva controlla le [FAQ per gli aderenti](broken-reference));
3. errore per firma digitale non riconducibile al Legale Rappresentante indicato in fase di adesione al prodotto: il firmatario non coincide con quanto dichiarato nel documento;
4. errore per invalidità dell’operazione, ossia tutti i casi in cui la richiesta sia già stata completata, cancellata o scaduta (passati i 30 giorni dall’invio della richiesta). \
   In questo caso qualora il link presente nella PEC non fosse più valido bisognerà rifare la richiesta di fruizione.

Il fatto che ti sia presentato un errore non inficia la procedura. Ad esempio, se l'errore è del terzo tipo, puoi fare firmare di nuovo il documento e usare lo stesso link per caricare l'Accordo con la sua nuova firma.

Il secondo link presente nella mail ti permette di annullare la richiesta di adesione a PDND Interoperabilità, nel caso l'avessi effettuata per errore.

## Aggiungere un operatore amministrativo a PDND Interoperabilità

Dopo aver concluso il processo di adesione a PDND Interoperabilità, è possibile aggiungere o rimuovere gli utenti con poteri di amministrazione, sempre fino ad un massimo di tre.

Per aggiungerli è necessario seguire i seguenti passsi:

1. andare dell'_**Area Riservata**_;
2. cliccare sulla voce _**Utenti  >  Crea nuovo**_;
3. inserire i dati della persona che si vuole nominare e selezionare il ruolo.

In questo caso quando si passa il cursore sopra l'icona posizionata a destra e in corrispondenza del ruolo di "Amministratore", l'utente viene informato che per la sua nomina è necessaria la firma del Legale Rappresentante. \
\
I dati anagrafici dell'attuale Legale Rappresentante verranno presentati all'utente alla fine del processo di nomina del nuovo Amministratore.&#x20;

L'utente ha la possibilità di confermare i dati presentati oppure di modificarli, inserendo quindi un Legale Rappresentante differente. Se il Legale Rappresentante è diverso da quello in memoria si aprirà una schermata per confermare la scelta.\
\
Dopo aver cliccato su _**Invia richiesta**_ o aver confermato la scelta di inserire un Legale Rappresentante differente, viene inviata una PEC all'indirizzo email dell'ente con le istruzioni per completare la richiesta. \
Cliccando sul pulsante "Completa la richiesta" presente nella PEC, l'utente ha la possibilità di scaricare il modulo di nomina e ricaricarlo, dopo avervi fatto apporre la firma digitale del Legale Rappresentante in formato p7m.&#x20;

Se il caricamento va a buon fine, il nuovo Amministratore viene aggiunto correttamente.

Il personale tecnico, identificato dalla figure di "operatore API" e "operatore di sicurezza" invece non rientra nell'accordo di adesione. Può essere gestito in qualsiasi momento dagli operatori amministrativi, i quali hanno permessi di amministrazione, sulla Piattaforma Area Riservata (Self Care). Per farlo, troveranno la voce di menù _**Utenti**_ sulla sinistra. Questa flessibilità permette di gestire più facilmente eventuali cambiamenti in corsa e personale sia in-house che esterno all'ente.

## Rimuovere un operatore amministrativo a PDND Interoperabilità

Per rimuoverli è necessario:

* scaricare il template che segue;
* compilarlo con i dati della persona per cui si sta inoltrando la richiesta;
* far firmare digitalmente il documento tramite formato CAdES alla persona indicata come Legale Rappresentante;
* inviare il documento dal domicilio digitale dell'ente, indicato all'interno del catalogo IPA, alla PEC: selfcare@pec.pagopa.it

{% file src="../.gitbook/assets/Revoca Operatore Amministativo_PDND (1).pdf" %}

{% embed url="https://www.youtube.com/watch?v=mLCAnUTL3QE" %}
