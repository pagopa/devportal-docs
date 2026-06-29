# Attributi

## Che cosa sono e a cosa servono

Gli **attributi** sono **caratteristiche** che un aderente **possiede** (ad esempio, “essere un Comune”). Gli **erogatori** li utilizzano per **circoscrivere l’accesso** ai propri **e-service**, trattandoli come **requisiti di accesso**.

Durante la **creazione di un e-service**, l’erogatore **definisce** gli attributi **necessari** affinché il fruitore possa **presentare la richiesta di fruizione**; se il fruitore **possiede** o può **dimostrare** di soddisfare i requisiti, può **iscriversi** a fruire dell’e-service.

## Raggruppamento degli attributi (gruppi)

Gli attributi sono organizzati in **gruppi**. Quando in uno **stesso gruppo** sono presenti **più attributi**, è sufficiente che il fruitore **possegga almeno uno** di essi per considerare **soddisfatto** il requisito di accesso.

**Esempio:** se un e-service richiede un gruppo di attributi definito come “Comune **oppure** Regione”, ogni ente che **possegga l’attributo Comune oppure l'attributo Regione** soddisfa il requisito.

## Tipologie di attributi

* **Certificati**: attributi **attestati** da una **fonte autoritativa**.
* **Verificati**: attributi che **richiedono verifica** da parte dell’**erogatore** secondo i propri processi istruttori.
* **Dichiarati**: attributi **autodichiarati** dal **fruitore** mediante **azione esplicita**.

## Attributi certificati

La certificazione si basa su una **fonte autoritativa** denominata **ente certificatore**; su tale ente **ricade la responsabilità** del **corretto riconoscimento** dell’attributo.

**Esempio operativo:** il **Catalogo IPA** (fonte autoritativa) espone l’attributo “Comuni e loro Consorzi e Associazioni” e l'elenco degli enti che lo possiedono.

Gli attributi principali riguardano:

* **Pubbliche amministrazioni (PA), Gestori di Servizi Pubblici (GSP), Società a Controllo Pubblico (SCP) e Società in Conto Economico Consolidato (SCEC):** la **fonte autoritativa principale** è [**IPA**](https://indicepa.gov.it/ipa-portale/); la **verifica** del possesso degli attributi è **automatica** su PDND Interoperabilità. **Eventuali aggiornamenti** o **correzioni** dei dati di attributo si **richiedono al gestore di IPA (AgID)** secondo le procedure previste. L'elenco viene allineato una volta ogni 24 ore.
* **Gestori privati di e-procurement:** l’attribuzione discende dal [**processo di certificazione**](https://www.agid.gov.it/it/piattaforme/procurement/certificazione-componenti-piattaforme) **dei componenti** pubblicato da **AgID**; una volta completato, viene **comunicato** a PDND Interoperabilità il **soggetto** a cui associare gli attributi certificati **richiesti** dagli erogatori.
* **Servizi ANAC:** le PA e i gestori di pubblici servizi che intendono **ottenere** gli attributi **necessari** per accedere ai servizi **ANAC** seguono il **processo di riconoscimento** tramite **AgID**.
* **Altri privati**: per l'adesione come Privato o SCP (Società a Controllo Pubblico) attraverso Area Riservata è riconosciuto l'attributo **Adesione dal Registro Imprese**. Inoltre, per i soli SCP, viene anche riconosciuto l'attributo **Società a Controllo Pubblico - Registro imprese**. Maggiori dettagli nella [sezione dedicata](../../../pdnd-interoperabilita/manuale-operativo-pdnd-interoperabilita/v1.0/riferimenti-tecnici/attributi/gli-attributi-piu-utilizzati.md#privati).&#x20;
* **Altri attributi certificati**: sono assegnati direttamente dagli aderenti ad altri aderenti secondo il flusso dedicato agli **enti certificatori**. Maggiori dettagli nella [sezione dedicata](../../../pdnd-interoperabilita/manuale-operativo-pdnd-interoperabilita/v1.0/riferimenti-tecnici/attributi/enti-certificatori.md).

Oltre a quanto appena descritto, la piattaforma gestisce anche gli **attributi certificati discreti**. Questi ereditano tutte le caratteristiche degli attributi certificati aggiungendo alla loro definizione un valore numerico che è specifico per ogni ente che lo possiede. Gli **attributi certificati discreti** sono disponibili al momento sono sull'ambiente di **collaudo**, in futuro saranno abilitati anche sull'ambiente di produzione. Maggiori informazioni nella [sezione dedicata](../../../pdnd-interoperabilita/manuale-operativo-pdnd-interoperabilita/v1.0/riferimenti-tecnici/attributi/attributi-certificati-discreti.md).

Un elenco degli attributi certificati più utilizzati è disponibile nella [sezione dedicata](../../../pdnd-interoperabilita/manuale-operativo-pdnd-interoperabilita/v1.0/riferimenti-tecnici/attributi/gli-attributi-piu-utilizzati.md).

## Attributi verificati

* La **verifica** è **in capo all’erogatore**, secondo i **propri processi di istruttoria**. Sarà dunque l'erogatore ad assegnare (ed eventualmente a revocare) l'attributo.
* Nella **bozza** della **richiesta di fruizione**, il fruitore è tenuto a **caricare eventuale documentazione** utile ad **agevolare** la verifica da parte dell’erogatore.

Nella realtà questi attributi sono poco utilizzati. Vengono preferiti gli attributi certificati conferiti dagli enti certificatori.

## Attributi dichiarati

* La **responsabilità** è **interamente** del **dichiarante (fruitore)**, ed è di fatto un'autodichiarazione.
* L’erogatore può **richiedere** uno o più **attributi dichiarati**; per ciascuno, il fruitore deve **dichiarare esplicitamente** il possesso **prima** di inoltrare la **richiesta di fruizione**.
* La dichiarazione è **registrata** su PDND Interoperabilità come **azione esplicita** mediante click necessario all'attivazione dell'attributo; non si tratta di una dichiarazione **implicita**.

***

Pagina successiva [→ Gli attributi più utilizzati](../../../pdnd-interoperabilita/manuale-operativo-pdnd-interoperabilita/v1.0/riferimenti-tecnici/attributi/gli-attributi-piu-utilizzati.md)
