# Attributi e interoperabilità per enti locali (caso terremoto 2016)

Di seguito viene riportato un esempio di fantasia con due casi. Il primo serve a spiegare il senso degli attributi ed il suo meccanismo di verifica. Il secondo, un'elaborazione del primo, dimostra alcuni ulteriori meccanismi utili ad una migliore comprensione del ragionamento che sta dietro ad alcune scelte di progettazione di questa componente.

Per entrambi la cornice normativa è la seguente: l'[Ordinanza 16A08472](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2016-12-03\&atto.codiceRedazionale=16A08472\&elenco30giorni=false) del 15 novembre 2016 identifica i Comuni oggetto di interventi urgenti a causa degli eventi sismici del 2016. Il rimborso per le attività di ricostruzione legate al sisma potrebbero essere erogate sia da Regione Abruzzo che da Agenzia delle Entrate (di seguito AdE) in funzione di un monitoraggio costante dello stato lavori. Il sistema di monitoraggio prevede l’utilizzo di un e-service erogato da AdE e da uno erogato dalla Regione Abruzzo al quale possono accedere solo i Comuni aderenti all'Ordinanza 16A08472.

### Scenario 1 - Caso d'uso degli attributi

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
