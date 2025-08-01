# Glossario

## Adesione

Per poter usufruire delle funzionalità messe a disposizione da PDND Interoperabilità, un ente deve prima effettuare l'adesione alla piattaforma, seguendo la procedura dedicata e caricando il proprio accordo di adesione. Una volta abilitato, potrà agire sia in veste di erogatore che di fruitore.

## Amministratore (operatore amministrativo)

All'atto dell'adesione dell'ente, puoi specificare fino a tre amministratori (chiamati _operatori amministrativi_ sulle Linee Guida AgID). Questi sono di fatto delegati dal legale rappresentante ad operare con pieni poteri su PDND Interoperabilità. Utenti con questi permessi possono inoltrare, sospendere e riattivare richieste di fruizione, creare client e finalità, aggiungere, rimuovere o sospendere figure operative, compilare analisi del rischio e fare tutte le operazioni che competono a livelli di permesso inferiori.

## Attributo

Un attributo è una qualità che un aderente possiede o dichiara di possedere. L'erogatore, all'atto della creazione di un e-service, stabilisce quali sono i requisiti di accesso che il fruitore deve possedere o dichiarare di possedere per poter vedere accettata la sua richiesta di fruizione. Questi requisiti di accesso sono gli attributi.

[Come funzionano gli attributi.](attributi/#come-funzionano)

## Back office

Interfaccia utente di PDND Interoperabilità alla cui accedi attraverso l'Area Riservata di PagoPA.

## Catalogo degli e-service

È il punto di raccolta centralizzato di tutti gli e-service disponibili su PDND Interoperabilità. Ogni aderente può virtualmente iscriversi a tutti quelli per i quali soddisfa i requisiti minimi d'accesso, ossia possiede tutti gli attributi richiesti dall'erogatore.

Sulle Linee Guida AgID è denominato "Catalogo delle API".

## Client

Ogni client raccoglie un gruppo di operatori di sicurezza e un gruppo di chiavi. La composizione del client potrà essere gestita a piacimento degli amministratori dell'aderente, che potranno associare lo stesso operatore di sicurezza a uno o più client. Ogni client (e di riflesso ogni gruppo di chiavi) può essere associato ad una o più finalità.

## Codice dell'Amministrazione Digitale - C.A.D.&#x20;

Un insieme di norme che regolano l’uso delle tecnologie digitali nella Pubblica Amministrazione (PA) e nei rapporti tra cittadini, imprese e PA. L'articolo 50-ter è dedicato a PDND Interoperabilità. Altri articoli ne definiscono le basi dati di interesse nazionale e la platea degli enti aderenti.

## E-service

È il termine che indica i servizi presenti sul catalogo. Ogni e-service viene gestito da un aderente che ne definisce i requisiti di accesso (attributi), la destinazione e la struttura dell'API attraverso la quale i fruitori possono accedere alle informazioni in possesso dell'erogatore.

## Ente certificatore

Un ente accreditato per creare nuovi attributi certificati. Il certificatore può poi assegnare e revocare agli altri aderenti gli attributi che ha creato.

## Erogatore

È un aderente che rende disponibili e-service ad altri aderenti mediante le funzionalità di PDND Interoperabilità, per la fruizione di informazioni in proprio possesso o per l’integrazione di processi. Ogni aderente può essere contemporaneamente erogatore di alcuni e-service e fruitore di altri.

## Finalità

È una dichiarazione che il fruitore presenta per dettagliare le sue ragioni e modalità di accesso alle informazioni in possesso dell'erogatore. Una finalità è di norma associata a un e-service per il quale un fruitore ha una richiesta di fruizione attiva.

## Fruitore

È un aderente che fruisce degli e-service messi a disposizione da un erogatore mediante le funzionalità di PDND Interoperabilità.

## Linee Guida sull’infrastruttura tecnologica della Piattaforma Digitale Nazionale Dati per l’interoperabilità dei sistemi informativi e delle basi di dati

Disciplinano il funzionamento della PDND come strumento abilitante per l’interoperabilità tra pubbliche amministrazioni, gestori di servizi pubblici e soggetti privati che accedono o forniscono dati. Sono una delle specifiche operative che deriva dal MoDI, il Modello di Interoperabilità definito da AgID.

L'ultima versione pubblicata si trova [qui](https://trasparenza.agid.gov.it/page/103/details/5374/adozione-delle-linee-guida-sullinfrastruttura-tecnologica-della-piattaforma-digitale-nazionale-dati-per-linteroperabilita-dei-sistemi-informativi-e-delle-basi-di-dati.html).

## Modello di Interoperabilità — MoDI&#x20;

È il documento di riferimento strategico che stabilisce i principi, le regole e gli standard per garantire l’interoperabilità tra i sistemi informatici delle pubbliche amministrazioni (PA). I principi del MoDI sono tradotti in specifiche operative attraverso le Linee Guida. Tra queste, ci sono anche le _Linee Guida sull’infrastruttura tecnologica della Piattaforma Digitale Nazionale Dati per l’interoperabilità dei sistemi informativi e delle basi di dati_.

Maggiori dettagli disponibili sulla [pagina dedicata](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/zwqHiUqrZCs3zNnHdc9A/) sul sito di AgID.

## Operatore API

Un operatore API è un'utenza tecnica dedicata a un aderente che opera in modalità erogazione. Può gestire il ciclo di vita degli e-service per conto di utenze con permessi di amministrazione.

## Operatore di sicurezza

Un operatore di sicurezza è un'utenza tecnica dedicata a un aderente che opera in modalità fruizione. Può vedere solo i client ai quali è associato. Per questi client, può caricare ed eliminare chiavi pubbliche. Con le chiavi caricate, può portare a compimento la procedura per ottenere un voucher valido per tutte le finalità associate ai client sopra citati.

## Richiesta di fruizione

Domanda formale con cui un ente chiede l’accesso ad un e-service pubblicato da un altro ente tramite PDND Interoperabilità. La richiesta viene passata al vaglio della piattaforma e dell'erogatore, e attivata all'esito positivo delle verifiche. Una richiesta di fruizione attiva consente di creare le relative finalità per fruire dell'e-service.

## **Service Level Agreement —** SLA

Un **Service Level Agreement — SLA** è un **accordo sui livelli di servizio** tra un fornitore e un cliente, che definisce le prestazioni minime garantite per un servizio digitale o tecnologico.

## Voucher (token JWT)

Nel contesto di PDND Interoperabilità, un voucher è un token JWT che la piattaforma rilascia ad un fruitore. Il fruitore inserirà questo voucher in tutte le chiamate che effettuerà verso le API degli erogatori per ottenere o inviare dati.

Il voucher contiene tutte le informazioni necessarie all'erogatore per verificare l'identità del fruitore, la risorsa richiesta, e la finalità per la quale perviene la richiesta. PDND si fa garante, rilasciando il voucher ad un fruitore per una specifica finalità solo se sussistono tutte le condizioni previste dalla catena autorizzativa (e-service attivo, iscrizione all'e-service attiva, finalità compilata e attiva, client associato, chiave caricata e richiesta correttamente formattata e firmata). &#x20;
