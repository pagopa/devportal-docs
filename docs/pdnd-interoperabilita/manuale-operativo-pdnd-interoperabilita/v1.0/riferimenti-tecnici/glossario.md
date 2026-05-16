# Glossario

### Adesione

Per utilizzare le funzionalità di **PDND Interoperabilità**, l’ente **effettua l’adesione** seguendo la procedura dedicata e **carica l’Accordo di Adesione**. A valle dell’abilitazione, l’ente può operare **sia come erogatore sia come fruitore**.

### Amministratore (operatore amministrativo)

In sede di adesione è possibile indicare **fino a tre Amministratori** (nelle Linee Guida AgID: **operatori amministrativi**), **delegati dal legale rappresentante** a operare con **pieni poteri** sulla piattaforma. Maggiori dettagli nella [sezione dedicata](../per-iniziare/primo-accesso-e-configurazione-iniziale.md#gestione-di-utenti-e-ruoli).

### Attributo

Un **attributo** è una qualità posseduta o dichiarata dall’aderente. In fase di creazione dell’**e-service**, l’erogatore **definisce i requisiti di accesso** che il fruitore deve possedere o dichiarare di possedere per l’accettazione della **richiesta di fruizione**; tali requisiti sono gli **attributi**.

### Front office

Interfaccia utente di **PDND Interoperabilità**, accessibile tramite l’**Area Riservata** di PagoPA, utilizzata per la **gestione del ciclo di vita** degli e-service e delle relative attività operative.

### Catalogo degli e-service

Punto di raccolta centralizzato di **tutti gli e-service** disponibili su PDND Interoperabilità. Ogni aderente può **iscriversi** agli e-service per i quali **soddisfa i requisiti minimi di accesso** (ovvero **possiede tutti gli attributi** richiesti dall’erogatore). Nelle Linee Guida AgID è denominato **“Catalogo delle API”**; è disponibile una [**versione pubblica**](https://www.interop.pagopa.it/catalogo) per consultazione.

### Client

Il **client** raggruppa un **insieme di operatori di sicurezza** e un **insieme di chiavi**.\
La composizione è **gestita dagli amministratori** dell’aderente; lo **stesso operatore di sicurezza** può essere **associato a uno o più client**. Ogni **client** (e, di riflesso, il suo **gruppo di chiavi**) può essere **associato a una o più finalità**.

### Codice dell’Amministrazione Digitale (CAD)

Insieme di norme che regolano l’uso delle tecnologie digitali nella **Pubblica Amministrazione** e nei rapporti tra **cittadini, imprese e PA**. L’**articolo 50-ter** disciplina **PDND Interoperabilità**; ulteriori articoli definiscono **basi di dati di interesse nazionale** e **platea degli enti aderenti**. Maggiori dettagli nella [sezione dedicata](../riferimenti-normativi/normativa-e-approfondimenti.md) alla normativa.

### E-service

È un **servizio digitale** messo a disposizione da una pubblica amministrazione o da un ente aderente, che consente lo scambio automatico e sicuro di dati e informazioni tra diverse amministrazioni o tra enti pubblici e soggetti privati autorizzati.

L’e-service rappresenta l’unità logica di erogazione e fruizione dei dati all’interno della PDND: attraverso esso, un ente può esporre (erogare) o richiedere (fruire) dati in modo standardizzato, secondo le regole tecniche e i protocolli definiti dalla piattaforma.

### Ente certificatore

Ente **accreditato** a **creare attributi certificati** e a **assegnarli o revocarli** ad altri aderenti.

### Erogatore

Aderente che **rende disponibili e-service** ad altri aderenti mediante PDND Interoperabilità, per la **fruizione di informazioni** in proprio possesso o per l’**integrazione di processi**. Un aderente può operare **contestualmente** come **erogatore** per alcuni e-service e **fruitore** per altri.

### Finalità

Dichiarazione con la quale il **fruitore** dettaglia **ragioni** e **modalità** di accesso alle informazioni in possesso dell’erogatore. La finalità è **associata** a un e-service per il quale il fruitore ha una **richiesta di fruizione attiva**.

### Fruitore

Aderente che **fruisce** degli e-service **messi a disposizione dall’erogatore** tramite PDND Interoperabilità.

### Linee Guida sull’infrastruttura tecnologica della PDND

Linee Guida che **disciplinano** il funzionamento della **PDND** come strumento abilitante per l’**interoperabilità** tra **pubbliche amministrazioni**, **gestori di servizi pubblici** e **soggetti privati** che accedono o forniscono dati.\
Costituiscono una delle **specifiche operative** derivanti dal **Modello di Interoperabilità (ModI)** di AgID. Maggiori dettagli nella [sezione dedicata](../riferimenti-normativi/normativa-e-approfondimenti.md) alla normativa.

### Modello di Interoperabilità (ModI)

Documento di riferimento strategico che definisce **principi, regole e standard** per garantire l’**interoperabilità** tra i sistemi informatici delle amministrazioni.\
I principi del ModI sono **tradotti** in **specifiche operative** attraverso le **Linee Guida**, tra cui quelle sull’infrastruttura tecnologica della PDND. Sono disponibili **maggiori dettagli** nella [pagina dedicata](https://www.agid.gov.it/it/infrastrutture/sistema-pubblico-connettivita/il-nuovo-modello-interoperabilita) di AgID e nella [sezione dedicata](../riferimenti-normativi/normativa-e-approfondimenti.md) alla normativa.

### Operatore API

**Utenza tecnica** dedicata a un aderente che opera in **modalità erogazione**. Può **gestire il ciclo di vita** degli e-service per conto delle **utenze con permessi di amministrazione**. Maggiori dettagli nella [sezione dedicata](../per-iniziare/primo-accesso-e-configurazione-iniziale.md#gestione-di-utenti-e-ruoli).

### Operatore di sicurezza

**Utenza tecnica** dedicata alla gestione del materiale crittografico. Può **visualizzare** esclusivamente i **client** e i **portachiavi** a cui è **associato** e, per tali oggetti, gestire il proprio materiale crittografico. Maggiori dettagli nella [sezione dedicata](../per-iniziare/primo-accesso-e-configurazione-iniziale.md#gestione-di-utenti-e-ruoli).

### Richiesta di fruizione

Domanda formale con cui un ente **chiede l’accesso** a un e-service **pubblicato** da un altro ente tramite PDND Interoperabilità. La richiesta viene **verificata** dalla piattaforma e dall’erogatore e, in caso di **esito positivo**, è **attivata**. Una **richiesta attiva** consente di **creare le finalità** per fruire dell’e-service.

### Service Level Agreement (SLA)

Accordo sui **livelli di servizio** che **definisce le prestazioni minime** garantite per un servizio digitale o tecnologico.

### Voucher (token JWT)

Nel contesto di PDND Interoperabilità, il **voucher** è un **token JWT** rilasciato dalla piattaforma al **fruitore**, da **inserire in ogni chiamata** verso le API degli erogatori per **ottenere o inviare dati**.\
Il voucher **riporta** le informazioni necessarie all’erogatore per **verificare l'identità del fruitore**, la **risorsa richiesta**, e la **finalità** per cui è inviata la richiesta.

***

Pagina successiva [→ API della piattaforma](api-esposte-da-pdnd/)
