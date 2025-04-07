# Tipologie di Attributi

Gli attributi possono essere di tre tipi:

* **certificati**: questi atributi sono certificati da  una fonte autoritativa e non necessitano di ulteriori verifiche&#x20;
* **dichiarati**: questi attributi necessitano verifica da parte di almeno un erogatore. Il fruitore potrebbe già possederne alcuni o tutti.
* **verificati**: il fruitore deve dichiarare sotto la propria responsabilità di possedere questi attributi; potrebbe già possederene alcuni o tutti

Tutti gli attributi sono organizzati in "gruppi". Se viene aggiunto più di un attributo allo stesso gruppo, sarà sufficiente che il fruitore ne possegga uno per ritenere soddisfatto il requisito di accesso all'e-service. A scopo esemplificativo, se un e-service richiede un gruppo di attributi certificati definito come "Comune" _oppure_ "Regione", ogni ente che abbia come attributo certificato quello di "Comune" oppure quello di "Regione" soddisferà il requisito.

#### Attributi certificati

La particolarità di questa tipologia di attributi è che ci si avvale di una fonte autoritativa che certifica il possesso di un dato attributo da parte di un aderente a PDND Interoperabilità. La responsabilità ricade dunque sulla fonte autoritativa.

Per fare un esempio: uno degli attributi messi a disposizione sul Catalogo IPA è _Comuni e loro Consorzi e Associazioni_. Un erogatore inserisce questo attributo, come certificato, tra i requisiti di accesso per un suo e-service. Quando un ente inoltra una richiesta di fruizione, PDND Interoperabilità verificherà presso le sue fonti autoritative che il potenziale fruitore possieda effettivamente questo attributo. PDND Interoperabilità riporterà l'esito della sua verifica sulla piattaforma.

Per le **pubbliche amministrazioni** e i gestori di pubblici servizi gli attributi certificati vengono attribuiti automaticamente all'aderente in base alle informazioni presenti nei database delle fonti autoritative a disposizione di PDND Interoperabilità. In questo momento l'unica fonte presente è il [catalogo IPA](https://indicepa.gov.it/ipa-portale/). La verifica del possesso di questi attributi da parte del fruitore viene effettuata automaticamente da PDND Interoperabilità e non è suscettibile di correttivi da parte di PagoPA. Se il fruitore ritiene che IPA gli abbia erroneamente non riconosciuto un attributo, dovrà contattare autonomamente il gestore del servizio per richiedere una modifica.

Per i **gestori privati** di e-procurement invece bisogna controllare di aver completato il [processo](https://www.agid.gov.it/it/piattaforme/procurement/certificazione-componenti-piattaforme) di certificazione dei componenti delle piattaforme pubblicato da AgID in modo che, una volta completato, venga comunicato a PDND Interoperabilità il nome dell'ente a cui associare gli attributi certificati richiesti dall'erogatore. Allo stesso modo, anche le PA e i gestori di pubblici servizi che vogliono vedersi riconosciuti gli attributi necessari per accedere ai servizi ANAC dovranno seguire il processo di riconoscimento tramite AgID.

#### Attributi Dichiarati

Per questa tipologia di attributi, la responsabilità ricade interamente sul dichiarante, ossia sul fruitore.

Un erogatore può decidere di richiedere al fruitore diversi attributi dichiarati. Per ognuno di questi, il fruitore dichiarerà sotto la propria responsabilità di possedere il requisito prima di inoltrare la richiesta di fruizione all'erogatore. La dichiarazione viene registrata da PDND Interoperabilità sotto forma di "click". Non è dunque una dichiarazione implicita, ma richiede un'azione esplicita del fruitore.

È possibile indicare nuovamente il possesso di un attributo dichiarato precedentemente revocato, o revocare il possesso di un attributo dichiarato, dalla vista _Anagrafica ente_. Verranno chiaramente indicate in una modale le conseguenze dell'azione. La revoca di un attributo dichiarato prevede la sospensione immediata e automatica da parte di PDND Interoperabilità di tutte le richieste di fruizione nelle quali l'attributo revocato è richiesto dall'erogatore.&#x20;

Per gli attributi dichiarati, il fruitore dovrà dichiarare sotto la propria responsabilità di avere il requisito richiesto dall'erogatore. La veridicità di questa dichiarazione è a carico esclusivamente del fruitore, e non necessita di verifica da parte dell'erogatore. Una volta che l'aderente entra in possesso di uno specifico attributo dichiarato, non dovrà dichiararlo nuovamente se dovesse essere richiesto per l'iscrizione ad un altro e-service.

#### Attributi verificati

La responsabilità della verifica di questi attributi è dell'erogatore, previa presentazione della documentazione da parte del fruitore. Questa tipologia di attributo è quella più complessa a livello di meccanica.

Quando inserisce un attributo come verificato, l'erogatore ha due possibilità: effettuare una verifica autonoma su quello stesso attributo, oppure appoggiarsi alla verifica effettuata da un altro erogatore, se presente. Nel primo caso, riceverà tutta la documentazione rilevante dal fruitore e valuterà in maniera autonoma se questi possiede effettivamente il requisito di accesso. Nel secondo, possono esserci due sottocasi. Se nessun erogatore ha mai riconosciuto quell'attributo al fruitore, si ricade nel primo caso, e l'erogatore dovrà effettuare una verifica autonoma. Se invece esiste almeno un erogatore che abbia riconosciuto allo stesso fruitore quell'attributo, PDND Interoperabilità lo intenderà verificato automaticamente.

Questo meccanismo, noto come "riutilizzo delle istruttorie" o "circolarità degli attributi" permette il riutilizzo delle verifiche all'interno della Pubblica Amministrazione sfruttando PDND Interoperabilità come garante. L'obiettivo è di ridurre l'onere amministrativo, specialmente a carico degli erogatori, e di ridurre i tempi di accesso alle informazioni per gli aventi diritto.

{% hint style="info" %}
Sarà sempre facoltà degli erogatori revocare e riattivare autonomamente gli attributi verificati attraverso questo meccanismo di verifica implicita.
{% endhint %}

Nel processo di sottoscrizione di una richiesta di fruizione, verrà richiesto al fruitore di caricare o fornire il link alla documentazione che permetta all'erogatore di verificare il possesso del requisito.

Gli attributi verificati sono invece attributi che l'erogatore dovrà verificare sulla base della documentazione che il fruitore presenterà all'atto dell'inoltro della richiesta di fruizione. Per questo tipo di attributi, l'erogatore può anche decidere di avvalersi della verifica effettuata da un altro erogatore per lo stesso fruitore, e di non ripetere la verifica. Questo meccanismo permette il riutilizzo degli attributi, alleggerendo l'onere amministrativo.

