# Attributi

I fruitori possono accedere agli e-service degli erogatori condizionatamente al possesso di specifici attributi, ossia requisiti previsti dalla normativa che il fruitore deve possedere o dimostrare di avere. Durante la creazione di un nuovo e-service, l'erogatore deve definire quali attributi sono richiesti come condizione necessaria affinché il fruitore possa presentare la richiesta di fruizione.

Gli attributi possono essere di tre tipi:

* **certificati**: questi attributi sono certificati da una fonte autoritativa;
* **verificati**: necessitano di verifica da parte dell'erogatore;
* **dichiarati**: sono autodichiarazioni presentate dal fruitore.

Tutti gli attributi sono organizzati in "gruppi". Se viene aggiunto più di un attributo allo stesso gruppo, è sufficiente che il fruitore ne possegga uno per ritenere soddisfatto il requisito di accesso all'e-service.&#x20;

A scopo esemplificativo, se un e-service richiede un gruppo di attributi certificati definito come "Comune" _oppure_ "Regione", ogni ente che abbia come attributo certificato quello di "Comune" oppure quello di "Regione" soddisfa il requisito.

#### Attributi certificati

La particolarità di questa tipologia di attributi è che ci si avvale di una fonte autoritativa che certifica il possesso di un dato attributo da parte di un aderente a PDND Interoperabilità. Tale fonte autoritativa prende il nome di **ente certificatore**.&#x20;

La responsabilità del corretto riconoscimento dell'attributo ricade dunque sull'ente certificatore.

Per fare un esempio: uno degli attributi messi a disposizione sul Catalogo IPA, che è un ente certificatore, è _Comuni e loro Consorzi e Associazioni_. Un erogatore inserisce questo attributo tra i requisiti di accesso per un suo e-service. Quando un ente inoltra una richiesta di fruizione, viene fatta una verifica. PDND Interoperabilità controlla presso l'ente certificatore che il potenziale fruitore possieda effettivamente questo attributo e riporta l'esito sulla piattaforma.

Per le **pubbliche amministrazioni e i gestori di pubblici servizi** la fonte autoritativa principale ad oggi è il [catalogo IPA](https://indicepa.gov.it/ipa-portale/). La verifica del possesso di questi attributi da parte del fruitore viene effettuata automaticamente da PDND Interoperabilità e non è suscettibile di correttivi da parte di PagoPA. Se il fruitore ritiene che IPA non gli abbia erroneamente riconosciuto un attributo, deve contattare autonomamente il gestore del servizio per richiedere una modifica.

Per i **gestori privati** **di e-procurement**, l'attribuzione dipende dal [processo](https://www.agid.gov.it/it/piattaforme/procurement/certificazione-componenti-piattaforme) di certificazione dei componenti delle piattaforme pubblicato da AgID. Una volta completato, viene comunicato a PDND Interoperabilità il nome dell'ente a cui associare gli attributi certificati richiesti dall'erogatore. Allo stesso modo, anche le PA e i gestori di pubblici servizi che vogliono vedersi riconosciuti gli attributi necessari per accedere ai servizi ANAC devono seguire il processo di riconoscimento tramite AgID.

#### Attributi verificati

La responsabilità della verifica di questi attributi è a carico dell'erogatore secondo i propri processi di istruttoria.

Laddove rilevante, il fruitore carica o indica la documentazione necessaria alle valutazioni da parte dell'erogatore. È possibile farlo attraverso appositi campi che sono presenti nella bozza di richiesta di fruizione.

#### Attributi Dichiarati

Per questa tipologia di attributi, la responsabilità ricade interamente sul dichiarante, ossia sul fruitore.

Un erogatore può decidere di richiedere al fruitore diversi attributi dichiarati. Per ognuno di questi, il fruitore deve dichiarare di possedere il requisito prima di inoltrare la richiesta di fruizione all'erogatore. La dichiarazione viene registrata da PDND Interoperabilità sotto forma di "click". Non è dunque una dichiarazione implicita, poiché richiede un'azione esplicita del fruitore.

Una volta che l'aderente entra in possesso di uno specifico attributo dichiarato, non deve dichiararlo nuovamente se dovesse essere richiesto per l'iscrizione ad un altro e-service.
