# Attributi

## Come funzionano?

I fruitori possono accedere all'e-service dell'erogatore attraverso la sottoscrizione di una richiesta di fruizione. Questa richiesta è soggetta alla verifica di alcuni attributi, cioè caratteristiche che il fruitore deve possedere, o dimostrare di possedere, a norma di legge. All'atto della creazione di un nuovo e-service, all'erogatore sarà richiesto di definire gli attributi da richiedere al fruitore quale condizione necessaria per inoltrare una richiesta di fruizione.

Gli attributi possono essere di tre tipi: certificati, dichiarati e verificati.

<figure><img src="../.gitbook/assets/attributi.png" alt=""><figcaption><p>Come si vedono gli attributi in una bozza di richiesta di fruizione</p></figcaption></figure>

Per le pubbliche amministrazioni e i gestori di pubblici servizi gli attributi certificati vengono attribuiti automaticamente all'aderente in base alle informazioni presenti nei database delle fonti autoritative a disposizione di PDND Interoperabilità. In questo momento l'unica fonte presente è il [catalogo IPA](https://indicepa.gov.it/ipa-portale/). La verifica del possesso di questi attributi da parte del fruitore viene effettuata automaticamente da PDND Interoperabilità e non è suscettibile di correttivi da parte di PagoPA. Se il fruitore ritiene che IPA gli abbia erroneamente non riconosciuto un attributo, dovrà contattare autonomamente il gestore del servizio per richiedere una modifica.

Per i gestori privati di e-procurement invece bisogna controllare di aver completato il [processo](https://www.agid.gov.it/it/piattaforme/procurement/certificazione-componenti-piattaforme) di certificazione dei componenti delle piattaforme pubblicato da AgID in modo che, una volta completato, venga comunicato a PDND Interoperabilità il nome dell'ente a cui associare gli attributi certificati richiesti dall'erogatore. Allo stesso modo, anche le PA e i gestori di pubblici servizi che vogliono vedersi riconosciuti gli attributi necessari per accedere ai servizi ANAC dovranno seguire il processo di riconoscimento tramite AgID.

Per gli attributi dichiarati, il fruitore dovrà dichiarare sotto la propria responsabilità di avere il requisito richiesto. La veridicità di questa dichiarazione è a carico esclusivamente del fruitore, e non necessita di verifica da parte dell'erogatore. Una volta che l'aderente entra in possesso di uno specifico attributo dichiarato, non dovrà dichiararlo nuovamente se dovesse essere richiesto per l'iscrizione ad un altro e-service.

Gli attributi verificati sono invece attributi che l'erogatore dovrà verificare sulla base della documentazione che il fruitore presenterà all'atto dell'inoltro della richiesta di fruizione. Per questo tipo di attributi, l'erogatore può anche decidere di avvalersi della verifica effettuata da un altro erogatore per lo stesso fruitore, e di non ripetere la verifica. Questo meccanismo permette il riutilizzo degli attributi, alleggerendo l'onere amministrativo.

Tutti gli attributi sono organizzati in "gruppi". Se viene aggiunto più di un attributo allo stesso gruppo, sarà sufficiente che il fruitore ne possegga uno per ritenere soddisfatto il requisito di accesso all'e-service. A scopo esemplificativo, se un e-service richiede un gruppo di attributi certificati definito come "Comune" _oppure_ "Regione", ogni ente che abbia come attributo certificato quello di "Comune" oppure quello di "Regione" soddisferà il requisito.

## Un esempio di utilizzo degli attributi

Di seguito viene riportato un esempio di fantasia con due casi. Il primo serve a spiegare il senso degli attributi ed il suo meccanismo di verifica. Il secondo, un'elaborazione del primo, dimostra alcuni ulteriori meccanismi utili ad una migliore comprensione del ragionamento che sta dietro ad alcune scelte di progettazione di questa componente.

Per entrambi la cornice normativa è la seguente: l'[Ordinanza 16A08472](https://www.gazzettaufficiale.it/atto/serie\_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2016-12-03\&atto.codiceRedazionale=16A08472\&elenco30giorni=false) del 15 novembre 2016 identifica i Comuni oggetto di interventi urgenti a causa degli eventi sismici del 2016. Il rimborso per le attività di ricostruzione legate al sisma potrebbero essere erogate sia da Regione Abruzzo che da Agenzia delle Entrate (di seguito AdE) in funzione di un monitoraggio costante dello stato lavori. Il sistema di monitoraggio prevede l’utilizzo di un e-service erogato da AdE e da uno erogato dalla Regione Abruzzo al quale possono accedere solo i Comuni aderenti all'Ordinanza 16A08472.

### Caso d'uso degli attributi

**Erogazione**: AdE pubblica su PDND Interoperabilità un e-service sul quale i Comuni dichiareranno l'andamento dei lavori. Sulla base della cornice normativa, gli attributi per l'accesso a fruire di questo e-service saranno dunque due:

* che l'ente sia un Comune;
* che l'ente possa accedere all'Ordinanza 16A08472.

Il primo attributo, accertare che il fruitore sia un Comune, è una delle categorie messe a disposizione dal [Catalogo IPA](https://indicepa.gov.it/ipa-portale/dati-statistiche/dettaglio-numeri-ipa) con l'etichetta _Comuni e loro Consorzi e Associazioni_. PDND Interoperabilità sfrutta questa fonte quale autorità per determinare se un ente possegga o meno requisiti di questo tipo. AdE valuta che sia appropriato fidarsi della fonte autoritativa e inserisce il requisito "Comune" come attributo certificato.

Per il secondo attributo AdE ha due possibilità: prendersi la responsabilità di effettuare la verifica, inserendo l'attributo come "verificato", oppure obbligare il fruitore a prendersi la responsabilità della dichiarazione resa, inserendolo come "dichiarato". Per aderenza alla norma di legge, AdE valuta rilevante accertare che il fruitore sia tra quelli interessati dall'Ordinanza 16A08472 e determina di inserire l'attributo come "verificato". È la prima volta che viene inserita questa Ordinanza su PDND Interoperabilità, dunque AdE non la trova tra gli attributi verificati già presenti nella ricerca. Crea quindi ex novo l'attributo verificato, e lo inserisce.

AdE finalizza tutta la documentazione e pubblica l'e-service.

**Fruizione**: il Comune di Celano decide di aderire all'iniziativa di AdE. Non era già registrato su PDND Interoperabilità, ed effettua l'adesione. Accede quindi al catalogo degli e-service, trova quello di suo interesse e inoltra una richiesta di fruizione.

Per il primo attributo, certificato, ossia possedere l'attributo "Comune", la verifica viene effettuata da PDND Interoperabilità, che controlla gli attributi posseduti dal Comune di Celano sul Catalogo IPA. In questo caso l'ente possiede l'attributo, e PDND Interoperabilità ne prende atto e registra l'esito della verifica.

Per il secondo attributo, verificato, relativo all'Ordinanza 16A08472, il Comune di Celano allega la documentazione necessaria che viene inoltrata ad AdE. Per questo attributo, dovrà attendere le verifiche di AdE. AdE completa le sue verifiche, e manualmente segnala a PDND Interoperabilità che la verifica ha avuto esito positivo verificando l'attributo. AdE, constatato che il Comune di Celano ha tutti gli attributi necessari, attiva la richiesta di fruizione. A questo punto il Comune di Celano può creare tutte le finalità necessarie a fruire dell'e-service.

### Caso a dimostrazione dei meccanismi di funzionamento degli attributi

Inseriamo un'ulteriore variabile nell'esempio precedente. Oltre ad AdE, dicevamo sopra che l'Ordinanza identifica anche Regione Abruzzo quale erogatore.

**Erogazione**: Regione Abruzzo dunque crea un e-service gemello di quello di AdE, con due differenze. Per prima cosa, trova l'Ordinanza tra gli attributi verificati disponibili in database, perché l'aveva già creato AdE; secondo, indica che desidera "sfruttare la verifica eseguita da un altro ente, se presente". Questo vuol dire che, se l'ente che inoltrerà la richiesta di fruizione avrà lo stesso attributo già verificato da un altro erogatore, questo si intenderà automaticamente verificato. Sarà comunque facoltà di Regione Abruzzo modificare indipendentemente lo stato di verifica di quest'attributo in ogni momento.

Regione Abruzzo finalizza la documentazione e pubblica l'e-service.

**Fruizione**: lo stesso Comune di Celano decide di aderire anche all'iniziativa di Regione Abruzzo. Ha già effettuato l'adesione a PDND Interoperabilità, dunque va direttamente sul catalogo e inoltra una richiesta di fruizione per questo nuovo e-service.

L'attributo certificato, essere "Comune", viene nuovamente attribuito in maniera automatica da PDND Interoperabilità dopo le dovute verifiche della piattaforma presso le fonti autoritative.

L'attributo verificato, in questo caso, viene a sua volta attribuito automaticamente. Regione Abruzzo ha indicato di voler "sfruttare la verifica eseguita da un altro ente, se presente". AdE aveva già effettuato la verifica su questo stesso attributo verificato per questo stesso ente, con esito positivo. Dunque Regione Abruzzo riconosce automaticamente l'attributo verificato al Comune di Celano.

In questo caso, visto che tutti gli attributi richiesti per l'e-service sono attribuiti automaticamente, la richiesta di fruizione si attiva da sé. Tutto questo meccanismo ha due vantaggi evidenti:

* la riduzione dell'onere amministrativo a carico di fruitori e soprattutto erogatori;
* la riduzione dei tempi di erogazione del servizio, che in questo secondo caso viene reso disponibile pochi secondi dopo l'inoltro della richiesta di fruizione.

Gli attributi hanno ulteriori meccanismi di dettaglio che dipendono dalla loro categorizzazione come certificati, verificati o dichiarati. Sono spiegati uno per uno nelle rispettive sezioni di questa documentazione.

## Meccanismi comuni

Tutti i meccanismi di seguito elencati trovano corrispondenti elementi sull'interfaccia del back office che ne implementano il comportamento.

### Creazione di un nuovo attributo

Se l'attributo richiesto non è presente nel database è possibile aggiungerlo ex novo e utilizzarlo immediatamente. Tutti gli erogatori che verranno dopo lo troveranno già in archivio attraverso il campo di ricerca e potranno utilizzarlo a loro volta.

Questo meccanismo è comune agli attributi verificati e dichiarati.

### Revoca e riattivazione di un attributo

È facoltà sia dell'erogatore che del fruitore revocare ed eventualmente riattivare un attributo. La revoca di un attributo ha come conseguenza la sospensione di tutte le richieste di fruizione per le quali l'attributo era un requisito di accesso.

Per converso, la riattivazione dell'attributo prevede la riattivazione di tutte le richieste di fruizione precedentemente sospese. La riattivazione della richiesta di fruizione non viene effettuata solo nei casi in cui ci siano altri elementi ostativi. Ad esempio, se la richiesta di fruizione era già stata manualmente sospesa prima della revoca di un attributo, non sarà sufficiente la riattivazione dell'attributo per riattivarla; sarà necessario anche riattivare la richiesta di fruizione stessa.

Questo meccanismo è comune agli attributi certificati e dichiarati.

### Rifiuto di un attributo

Se l'erogatore valuta che il fruitore non possegga i requisiti per vedersi riconosciuto l'attributo, può rifiutarlo. Se almeno un attributo è stato rifiutato, non si potrà attivare la richiesta di fruizione.

L'erogatore potrà quindi decidere di negare l'attivazione della richiesta di fruizione, di fatto rendendola inutilizzabile. Sarà facoltà del fruitore presentare una nuova richiesta di fruizione per lo stesso e-service, motivando la decisione.

Questo meccanismo è comune agli attributi certificati e verificati, posto che l'erogatore abbia richiesto di verificare autonomamente il requisito (senza quindi appoggiarsi alla verifica di un ente certificatore o di un altro ente erogatore, nel caso dei verificati).

### Ritardo nell'aggiornamento dello stato di un attributo

L'aggiornamento del cambio di stato degli attributi è, per ragioni tecniche, asincrono. Questo vuol dire che potrebbe esserci un ritardo tra il momento in cui si richiede la revoca/riattivazione di un attributo ed il momento in cui si propaga a tutte le componenti di PDND Interoperabilità.

## Attributi certificati

Come detto in introduzione, la particolarità di questa tipologia di attributi è che ci si avvale di una fonte autoritativa che certifica il possesso di un dato attributo da parte di un aderente a PDND Interoperabilità. La responsabilità ricade dunque sulla fonte autoritativa.

Per fare un esempio: uno degli attributi messi a disposizione sul Catalogo IPA è _Comuni e loro Consorzi e Associazioni_. Un erogatore inserisce questo attributo, come certificato, tra i requisiti di accesso per un suo e-service. Quando un ente inoltra una richiesta di fruizione, PDND Interoperabilità verificherà presso le sue fonti autoritative che il potenziale fruitore possieda effettivamente questo attributo. PDND Interoperabilità riporterà l'esito della sua verifica sulla piattaforma.

## Attributi verificati

La responsabilità della verifica di questi attributi è dell'erogatore, previa presentazione della documentazione da parte del fruitore. Questa tipologia di attributo è quella più complessa a livello di meccanica.

### Verifica implicita o esplicita di un attributo verificato

Quando inserisce un attributo come verificato, l'erogatore ha due possibilità: effettuare una verifica autonoma su quello stesso attributo, oppure appoggiarsi alla verifica effettuata da un altro erogatore, se presente. Nel primo caso, riceverà tutta la documentazione rilevante dal fruitore e valuterà in maniera autonoma se questi possiede effettivamente il requisito di accesso. Nel secondo, possono esserci due sottocasi. Se nessun erogatore ha mai riconosciuto quell'attributo al fruitore, si ricade nel primo caso, e l'erogatore dovrà effettuare una verifica autonoma. Se invece esiste almeno un erogatore che abbia riconosciuto allo stesso fruitore quell'attributo, PDND Interoperabilità lo intenderà verificato automaticamente.

Questo meccanismo, noto come "riutilizzo delle istruttorie" o "circolarità degli attributi" permette il riutilizzo delle verifiche all'interno della Pubblica Amministrazione sfruttando PDND Interoperabilità come garante. L'obiettivo è di ridurre l'onere amministrativo, specialmente a carico degli erogatori, e di ridurre i tempi di accesso alle informazioni per gli aventi diritto.

{% hint style="info" %}
Sarà sempre facoltà degli erogatori revocare e riattivare autonomamente gli attributi verificati attraverso questo meccanismo di verifica implicita.
{% endhint %}

### Caricamento della documentazione

Nel processo di sottoscrizione di una richiesta di fruizione, verrà richiesto al fruitore di caricare o fornire il link alla documentazione che permetta all'erogatore di verificare il possesso del requisito.

## Attributi dichiarati

Per questa tipologia di attributi, la responsabilità ricade interamente sul dichiarante, ossia sul fruitore.

Un erogatore può decidere di richiedere al fruitore diversi attributi dichiarati. Per ognuno di questi, il fruitore dichiarerà sotto la propria responsabilità di possedere il requisito prima di inoltrare la richiesta di fruizione all'erogatore. La dichiarazione viene registrata da PDND Interoperabilità sotto forma di "click". Non è dunque una dichiarazione implicita, ma richiede un'azione esplicita del fruitore.

È possibile indicare nuovamente il possesso di un attributo dichiarato precedentemente revocato, o revocare il possesso di un attributo dichiarato, dalla vista _Anagrafica ente_. Verranno chiaramente indicate in una modale le conseguenze dell'azione. La revoca di un attributo dichiarato prevede la sospensione immediata e automatica da parte di PDND Interoperabilità di tutte le richieste di fruizione nelle quali l'attributo revocato è richiesto dall'erogatore.&#x20;
