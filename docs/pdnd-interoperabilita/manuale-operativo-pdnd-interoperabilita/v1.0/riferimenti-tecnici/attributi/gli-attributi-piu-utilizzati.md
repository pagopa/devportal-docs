# Gli attributi più utilizzati

Gli attributi sono utilizzati come requisiti di accesso agli e-service.

Per offrire maggiore granularità, gli enti presenti su IPA possiedono anche un attributo legato al nome del proprio ente. Ad esempio, Regione Lazio si troverà riconosciuto da IPA l'attributo _Regione Lazio_, che potrà essere usato come requisito per accedere ad un e-service.

Questo porta ad avere, già in partenza, una base dati di oltre 24.000 attributi certificati. Orientarsi può essere difficile.

Per questo motivo, viene qui riportata una sintesi degli attributi più frequentemente utilizzati. Questi attributi raggruppano alcuni cluster di enti con caratteristiche simili.

### Indice dei domicili digitali della Pubblica Amministrazione e dei Gestori di Pubblici Servizi

La fonte autoritativa principale di molti attributi relativi alla pubblica amministrazione è IPA. È sempre possibile verificare l’elenco completo degli enti e delle loro caratteristiche sugli [open data](https://indicepa.gov.it/ipa-dati/dataset/enti/resource/d09adf99-dc10-4349-8c53-27b1e5aa97b6) oppure nella vista di [ricerca ente](https://www.indicepa.gov.it/ipa-portale/consultazione/indirizzo-sede/ricerca-ente).

### Attributi certificati più utilizzati

1. [Amministrazioni Centrali e Costituzionali](gli-attributi-piu-utilizzati.md#amministrazioni-centrali-e-costituzionali)
2. [Enti Territoriali e Locali](gli-attributi-piu-utilizzati.md#enti-territoriali-e-locali)
3. [Giustizia, Sicurezza e Professioni](gli-attributi-piu-utilizzati.md#giustizia-sicurezza-e-professioni)
4. [Cultura, Turismo e Sport](gli-attributi-piu-utilizzati.md#cultura-turismo-e-sport)
5. [Sanità e Salute](gli-attributi-piu-utilizzati.md#sanita-e-salute)
6. [Welfare, Lavoro e Sociale](gli-attributi-piu-utilizzati.md#welfare-lavoro-e-sociale)
7. [Istruzione, Università e Ricerca](gli-attributi-piu-utilizzati.md#istruzione-universita-e-ricerca)
8. [Ambiente, Territorio e Infrastrutture](gli-attributi-piu-utilizzati.md#ambiente-territorio-e-infrastrutture)
9. [Sviluppo Economico e Servizi Pubblici](gli-attributi-piu-utilizzati.md#sviluppo-economico-e-servizi-pubblici)
10. [Pubbliche Amministrazioni](gli-attributi-piu-utilizzati.md#pubbliche-amministrazioni)
11. [Privati](gli-attributi-piu-utilizzati.md#privati)

#### Amministrazioni Centrali e Costituzionali

Include i vertici dello Stato, i Ministeri e le autorità indipendenti.

| Nome attributo su PDND                                       | Fonte autoritativa           | Esempi pratici di enti che possiedono l'attributo    |
| ------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| Presidenza del Consiglio, Ministeri e Avvocatura dello Stato | IPA — `Codice_Categoria` C1  | Ministero dell'Interno, Ministero della Giustizia    |
| Organi Costituzionali e di Rilievo Costituzionale            | IPA — `Codice_Categoria` C2  | Corte Costituzionale, CSM, CNEL                      |
| Agenzie Fiscali                                              | IPA — `Codice_Categoria` C10 | Agenzia delle Entrate, Agenzia Dogane e Monopoli     |
| Autorita' Amministrative Indipendenti                        | IPA — `Codice_Categoria` C5  | AGCM (Antitrust), Garante Privacy, ARERA, CONSOB     |
| Commissari Straordinari Governativi                          | IPA — `Codice_Categoria` L47 | Commissario ricostruzione, Commissario bonifiche     |
| Enti Pubblici Non Economici                                  | IPA — `Codice_Categoria` C3  | Enti nazionali vari (es. ACI Centrale, CRI Centrale) |

#### Enti Territoriali e Locali

Copre l'amministrazione del territorio dal livello regionale a quello comunale.

| Nome attributo su PDND                     | Fonte autoritativa           | Esempi pratici di enti che possiedono l'attributo        |
| ------------------------------------------ | ---------------------------- | -------------------------------------------------------- |
| Comuni e loro Consorzi e Associazioni      | IPA — `Codice_Categoria` L6  | Comune di Milano, Comune di Roccafiorita                 |
| Citta' Metropolitane                       | IPA — `Codice_Categoria` L45 | Città Metropolitana di Roma, Città Metropolitana di Bari |
| Regioni, Province Autonome e loro Consorzi | IPA — `Codice_Categoria` L4  | Regione Lombardia, Provincia Autonoma di Bolzano         |
| Province e loro Consorzi e Associazioni    | IPA — `Codice_Categoria` L5  | Provincia di Bergamo, Provincia di Salerno               |
| Unioni di Comuni e loro Consorzi           | IPA — `Codice_Categoria` L18 | Unione dei Comuni della Bassa Romagna                    |
| Comunita' Montane e loro Consorzi          | IPA — `Codice_Categoria` L12 | Comunità Montana Valle Brembana                          |
| Altri Enti Locali                          | IPA — `Codice_Categoria` L1  | Consorzi di servizi sociali o cimiteriali tra comuni     |
| Consorzi tra Amministrazioni Locali        | IPA — `Codice_Categoria` L36 | Consorzi intercomunali generici                          |

#### Giustizia, Sicurezza e Professioni

Ambito dedicato alla legalità, all’ordine pubblico e alla regolamentazione professionale.

| Nome attributo su PDND                                          | Fonte autoritativa           | Esempi pratici di enti che possiedono l'attributo         |
| --------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------- |
| Forze di Polizia ad Ordinamento Civile e Militare               | IPA — `Codice_Categoria` C11 | Arma dei Carabinieri, Guardia di Finanza (Comandi)        |
| Aziende ed Amministrazioni dello Stato ad Ordinamento Autonomo  | IPA — `Codice_Categoria` L46 | Corpo Nazionale dei Vigili del Fuoco, Archivi Notarili    |
| Federazioni Nazionali, Ordini, Collegi e Consigli Professionali | IPA — `Codice_Categoria` C14 | Ordine degli Avvocati, Ordine dei Medici, CNI (Ingegneri) |

#### Cultura, turismo e sport

Settore della promozione culturale, turismo e sport

| Nome attributo su PDND                | Fonte autoritativa           | Esempi pratici di enti che possiedono l'attributo |
| ------------------------------------- | ---------------------------- | ------------------------------------------------- |
| Fondazioni Lirico, Sinfoniche         | IPA — `Codice_Categoria` L16 | Teatro alla Scala, Teatro dell'Opera di Roma      |
| Teatri Stabili ad Iniziativa Pubblica | IPA — `Codice_Categoria` L31 | Teatro Stabile di Torino                          |
| Agenzie ed Enti per il Turismo        | IPA — `Codice_Categoria` L10 | ENIT, Agenzie di promozione turistica locali      |
| Automobile Club Federati ACI          | IPA — `Codice_Categoria` C13 | Automobile Club provinciali (sport/mobilità)      |

#### Sanità e Salute

Include tutte le strutture del Servizio Sanitario Nazionale.

| Nome attributo su PDND                            | Fonte autoritativa           | Esempi pratici di enti che possiedono l'attributo     |
| ------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| Aziende Sanitarie Locali                          | IPA — `Codice_Categoria` L7  | ASL Roma 1, AUSL della Romagna, ATS Milano            |
| Aziende Ospedaliere, Policlinici e IRCCS Pubblici | IPA — `Codice_Categoria` L8  | Policlinico Gemelli (parte pub.), Ospedale Cardarelli |
| Agenzie Regionali Sanitarie                       | IPA — `Codice_Categoria` L22 | ARES Puglia, Agenzia Sanitaria Regionale Abruzzo      |
| Istituti Zooprofilattici Sperimentali             | IPA — `Codice_Categoria` C12 | Istituto Zooprofilattico Sperimentale del Piemonte    |

#### Welfare, Lavoro e Sociale

Assistenza ai cittadini e gestione del mercato del lavoro

| Nome attributo su PDND                                      | Fonte autoritativa           | Esempi pratici di enti che possiedono l'attributo            |
| ----------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------ |
| Enti di Previdenza (Pubblici)                               | IPA — `Codice_Categoria` C16 | INPS, INAIL                                                  |
| Enti di Previdenza (Privati/Casse)                          | IPA — `Codice_Categoria` C17 | Casse previdenziali professionali (Cassa Forense, Inarcassa) |
| Aziende Pubbliche di Servizi alla Persona                   | IPA — `Codice_Categoria` L34 | ASP (ex IPAB), Case di riposo pubbliche                      |
| Enti Pubblici Produttori di Servizi Assistenziali/Culturali | IPA — `Codice_Categoria` C7  | Istituti per ciechi, Educandati, Centri ricreativi pubblici  |
| Agenzie ed Enti Regionali del Lavoro                        | IPA — `Codice_Categoria` L19 | Agenzia Piemonte Lavoro, ARPAL                               |
| Agenzie per la Rappresentanza Negoziale                     | IPA — `Codice_Categoria` L20 | ARAN (articolazioni regionali per contratti PA)              |

#### Istruzione, Università e Ricerca

La filiera della formazione e della scienza.

| Nome attributo su PDND                                | Fonte autoritativa           | Esempi pratici di enti che possiedono l'attributo  |
| ----------------------------------------------------- | ---------------------------- | -------------------------------------------------- |
| Istituti di Istruzione Statale di Ogni Ordine e Grado | IPA — `Codice_Categoria` L33 | Scuole statali (elementari, medie, superiori)      |
| Universita' e Istituti di Istruzione Universitaria    | IPA — `Codice_Categoria` L17 | Sapienza Università di Roma, Politecnico di Torino |
| Istituzioni Alta Formazione Artistica/Musicale (AFAM) | IPA — `Codice_Categoria` L43 | Conservatori, Accademie di Belle Arti              |
| Enti e Istituzioni di Ricerca Pubblici                | IPA — `Codice_Categoria` C8  | CNR, INFN, INAF                                    |
| Consorzi Interuniversitari di Ricerca                 | IPA — `Codice_Categoria` L28 | CINECA, Consorzio AlmaLaurea                       |
| Enti per il Diritto allo Studio Universitario         | IPA — `Codice_Categoria` L15 | DISCO Lazio, EDiSU                                 |

#### Ambiente, Territorio e Infrastrutture

Gestione fisica del territorio, delle risorse naturali e delle infrastrutture abitative.

| Nome attributo su PDND                           | Fonte autoritativa           | Esempi pratici di enti che possiedono l'attributo |
| ------------------------------------------------ | ---------------------------- | ------------------------------------------------- |
| Aziende Territoriali per l'Edilizia Residenziale | IPA — `Codice_Categoria` L39 | ATER, ALER, IACP (Case popolari)                  |
| Enti di Regolazione Servizi Idrici/Rifiuti       | IPA — `Codice_Categoria` L44 | Enti d'Ambito (ATO Rifiuti/Idrico)                |
| Autorita' di Bacino                              | IPA — `Codice_Categoria` L40 | Autorità di Bacino del Po                         |
| Consorzi di Bacino Imbrifero Montano             | IPA — `Codice_Categoria` L24 | BIM dell'Adige                                    |
| Parchi Nazionali e Aree Protette                 | IPA — `Codice_Categoria` L38 | Parco Nazionale Gran Paradiso, Ente Parco Vesuvio |
| Autorita' Portuali                               | IPA — `Codice_Categoria` L11 | Autorità di Sistema Portuale                      |
| Agenzie Regionali per l'Ambiente                 | IPA — `Codice_Categoria` L2  | ARPA (Agenzie Protezione Ambiente)                |
| Agenzie Regionali Sviluppo Agricolo              | IPA — `Codice_Categoria` L13 | ERSA, ARSAC                                       |
| Agenzie per le Erogazioni in Agricoltura         | IPA — `Codice_Categoria` L21 | Agrea, Artea                                      |

#### Sviluppo Economico e Servizi Pubblici

Include imprese, utility e stazioni appaltanti.

| Nome attributo su PDND                            | Fonte autoritativa            | Esempi pratici di enti che possiedono l'attributo               |
| ------------------------------------------------- | ----------------------------- | --------------------------------------------------------------- |
| Camere di Commercio e Unioni Regionali            | IPA — `Codice_Categoria` L35  | CCIAA di Milano, Unioncamere                                    |
| Consorzi per l'Area di Sviluppo Industriale       | IPA — `Codice_Categoria` L42  | Consorzi ASI                                                    |
| Gestori di Pubblici Servizi                       | IPA — `Codice_Categoria` L37  | Multi-utility accreditate (generiche)                           |
| Gestori di Pubblici Servizi (Società Consolidate) | IPA — `Codice_Categoria` S01G | Grandi SpA pubbliche di servizi (es. quotate o nazionali)       |
| Societa' in Conto Economico Consolidato           | IPA — `Codice_Categoria` S01  | Società partecipate inserite in elenco ISTAT (RAI, Anas)        |
| Stazioni Appaltanti                               | IPA — `Codice_Categoria` SA   | Centrali di committenza qualificate                             |
| Stazioni Appaltanti Gestori di Pubblici Servizi   | IPA — `Codice_Categoria` SAG  | Utility che operano come stazioni appaltanti (Settori Speciali) |

#### Pubbliche Amministrazioni

<table><thead><tr><th width="162.59381103515625">Nome attributo su PDND</th><th>Fonte autoritativa</th><th>Esempi pratici di enti che possiedono l'attributo</th></tr></thead><tbody><tr><td>Pubbliche Amministrazioni</td><td>IPA — <code>Tipologia</code> Pubbliche Amministrazioni</td><td>Ministero dell’Economia e delle Finanze, Comune di Roma, Regione Lombardia, Università degli Studi di Milano, Agenzia delle Entrate, Istituto Nazionale di Statistica (ISTAT)</td></tr></tbody></table>

#### Privati

<table><thead><tr><th width="220.29693603515625">Nome attributo su PDND</th><th width="283.28125">Criterio di assegnazione</th><th>Note</th></tr></thead><tbody><tr><td>Adesione dal Registro Imprese</td><td>Riconosciuto agli enti che aderiscono come "Privato" o "Società a Controllo Pubblico" attraverso Area Riservata</td><td>Per i dettagli, si veda la <a href="../../per-iniziare/guida-alladesione.md">sezione dedicata all'adesione</a>.</td></tr><tr><td>Società a Controllo Pubblico - Registro Imprese</td><td>Riconosciuto agli enti che aderiscono come "Società a Controllo Pubblico" attraverso Area Riservata</td><td>L'attributo è riconosciuto a seguito di un'istruttoria. Per i dettagli, si veda la <a href="../../per-iniziare/guida-alladesione.md">sezione dedicata all'adesione</a>.</td></tr></tbody></table>

### Disponibilità sulle API di PDND Interoperabilità

L'elenco completo degli attributi è sempre scaricabile attraverso le API di PDND Interoperabilità ([certificati](https://developer.pagopa.it/it/pdnd-interoperabilita/api/PDND-core-v3#get-/certifiedAttributes), [verificati](https://developer.pagopa.it/it/pdnd-interoperabilita/api/PDND-core-v3#get-/verifiedAttributes) e [dichiarati](https://developer.pagopa.it/it/pdnd-interoperabilita/api/PDND-core-v3#get-/declaredAttributes)).

***

Pagina successiva → [Operazioni e ciclo di vita](operazioni-e-ciclo-di-vita.md)
