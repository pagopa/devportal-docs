# Attributi

Gli attributi sono delle caratteristiche che un aderente possiede, ad esempio "essere un Comune". Gli erogatori possono usare questi attributi per circoscrivere l'accesso ai propri e-service sulla base di questi attributi, di fatto trattandoli come requisiti di accesso.

Durante la creazione di un nuovo e-service, l'erogatore definisce quali attributi sono richiesti come condizione necessaria affinché il fruitore possa presentare la richiesta di fruizione. Se il fruitore possiede o può dimostrare di rispondere ai requisiti, può iscriversi a fruire dell'e-service.

Gli attributi possono essere di tre tipi:

* **certificati**: questi attributi sono certificati da una fonte autoritativa;
* **verificati**: necessitano di verifica da parte dell'erogatore;
* **dichiarati**: sono autodichiarazioni presentate dal fruitore.

Tutti gli attributi sono organizzati in "gruppi". Se viene aggiunto più di un attributo allo stesso gruppo, è sufficiente che il fruitore ne possegga uno per ritenere soddisfatto il requisito di accesso all'e-service.&#x20;

Per esempio, se un e-service richiede un gruppo di attributi certificati definito come "Comune" _oppure_ "Regione", ogni ente che abbia come attributo certificato quello di "Comune" oppure quello di "Regione" soddisfa il requisito.

#### Attributi certificati

La particolarità di questa tipologia di attributi è che ci si avvale di una fonte autoritativa che certifica il possesso di un dato attributo da parte di un aderente a PDND Interoperabilità. Tale fonte autoritativa prende il nome di **ente certificatore**.&#x20;

La responsabilità del corretto riconoscimento dell'attributo ricade dunque sull'ente certificatore.

Per fare un esempio: uno degli attributi messi a disposizione sul Catalogo IPA, che è un ente certificatore, è _Comuni e loro Consorzi e Associazioni_. Un erogatore inserisce questo attributo tra i requisiti di accesso per un suo e-service. Quando un ente inoltra una richiesta di fruizione, viene fatta una verifica. PDND Interoperabilità controlla presso l'ente certificatore che il potenziale fruitore possieda effettivamente questo attributo e riporta l'esito sulla piattaforma.

Per le **pubbliche amministrazioni e i gestori di pubblici servizi** la fonte autoritativa principale ad oggi è [IPA](https://indicepa.gov.it/ipa-portale/), l'Indice della Pubblica Amministrazione. La verifica del possesso di questi attributi da parte del fruitore viene effettuata automaticamente da PDND Interoperabilità e non è suscettibile di correttivi da parte di PagoPA. Se il fruitore ritiene che IPA sbagli a non aver riconosciuto un attributo al proprio ente, deve contattare autonomamente il gestore del servizio (AgID) per richiedere una modifica.

Per i **gestori privati** **di e-procurement**, l'attribuzione dipende dal [processo](https://www.agid.gov.it/it/piattaforme/procurement/certificazione-componenti-piattaforme) di certificazione dei componenti delle piattaforme pubblicato da AgID. Una volta completato, viene comunicato a PDND Interoperabilità il nome dell'ente a cui associare gli attributi certificati richiesti dall'erogatore. Allo stesso modo, anche le PA e i gestori di pubblici servizi che vogliono vedersi riconosciuti gli attributi necessari per accedere ai servizi ANAC devono seguire il processo di riconoscimento tramite AgID.

#### Attributi verificati

La responsabilità della verifica di questi attributi è a carico dell'erogatore secondo i propri processi di istruttoria.

Nella bozza della richiesta di fruizione, il fruitore ha la possibilità di caricare la documentazione necessaria per agevolare la verifica da parte dell'erogatore.

#### Attributi dichiarati

Per questa tipologia di attributi, la responsabilità ricade interamente sul dichiarante, ossia sul fruitore.

Un erogatore può decidere di richiedere al fruitore diversi attributi dichiarati. Per ognuno di questi, il fruitore deve dichiarare di possedere il requisito prima di inoltrare la richiesta di fruizione all'erogatore. La dichiarazione viene registrata da PDND Interoperabilità sotto forma di "click". Non è dunque una dichiarazione implicita, poiché richiede un'azione esplicita del fruitore.
