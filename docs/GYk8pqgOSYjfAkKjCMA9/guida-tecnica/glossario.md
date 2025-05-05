# Glossario

## Adesione

Per poter usufruire delle funzionalità messe a disposizione da PDND Interoperabilità, un ente deve prima effettuare l'adesione alla piattaforma, seguendo la procedura dedicata. Una volta abilitato, potrà agire sia in veste di erogatore che di fruitore.

## Amministratore (operatore amministrativo)

All'atto dell'adesione dell'ente, puoi specificare fino a tre amministratori (operatori amministrativi). Questi sono di fatto delegati dal legale rappresentante ad operare con pieni poteri su PDND Interoperabilità. Utenti con questi permessi possono ad esempio inoltrare, sospendere e riattivare richieste di fruizione, creare client e finalità, aggiungere, rimuovere o sospendere figure operative, compilare analisi del rischio e fare tutte le operazioni che competono a livelli di permesso inferiori.

{% hint style="info" %}
Puoi aggiungere ulteriori operatori amministrativi in una seconda fase. L'operazione richiede la firma digitale del legale rappresentante dell'ente. Questa funzionalità non è attualmente implementata sulla Piattaforma Area Riservata (Self Care), che centralizza la gestione degli utenti per tutti i prodotti erogati da PagoPA.
{% endhint %}

## Attributo

Un attributo è una qualità che un aderente possiede o dichiara di possedere. L'erogatore, all'atto della creazione di un e-service, stabilisce quali sono gli attributi che il fruitore dovrà possedere o dichiarare di possedere per poter vedere accettata la sua richiesta di fruizione.

[Come funzionano gli attributi.](attributi/#come-funzionano)

## Back office

<mark style="background-color:blue;">Interfaccia utente alla cui accedi attraverso l'Area Riservata</mark>

## Catalogo degli e-service

È il punto di raccolta centralizzato di tutti gli e-service disponibili su PDND Interoperabilità. Ogni aderente può virtualmente iscriversi a tutti quelli per i quali soddisfa i requisiti minimi d'accesso, ossia possiede tutti gli attributi richiesti dall'erogatore.

Sulle linee guida AgID è denominato "Catalogo delle API".

## Client

Ogni client raccoglie un gruppo di operatori di sicurezza e un gruppo di chiavi. La composizione del client potrà essere gestita a piacimento degli amministratori dell'aderente, che potranno associare lo stesso operatore di sicurezza a uno o più client. Ogni client (e di riflesso ogni gruppo di chiavi) può essere associato ad una o più finalità.

## Codice dell'Amministrazione Digitale  - C.A.D.&#x20;

<mark style="background-color:blue;">\[Da compilare]</mark>

## E-service

È il termine che indica i servizi presenti sul catalogo. Ogni e-service viene gestito da un aderente che ne definisce i requisiti di accesso (attributi), la destinazione e la struttura dell'API attraverso la quale i fruitori possono accedere alle informazioni in possesso dell'erogatore

## Ente certificatore

<mark style="background-color:blue;">\[Da compilare]</mark>

## Erogatore

È un aderente che rende disponibili e-service ad altri aderenti mediante le funzionalità di PDND Interoperabilità, per la fruizione di informazioni in proprio possesso o per l’integrazione di processi. Ogni aderente può essere contemporaneamente erogatore di alcuni e-service e fruitore di altri.

## Finalità

È una dichiarazione che il fruitore presenta per dettagliare le sue ragioni e modalità di accesso alle informazioni in possesso dell'erogatore. Una finalità è di norma associata a un e-service per il quale un fruitore ha una richiesta di fruizione attiva.

## Fruitore

È un aderente che fruisce degli e-service messi a disposizione da un erogatore mediante le funzionalità di PDND Interoperabilità.

## Linee guida AgID

Definiscono il modello di interoperabilità delle pubbliche amministrazioni (ModI) che viene implementato da PagoPA in PDND Interoperabilità, coerentemente con il nuovo European Interoperability Framework.

Dal [comunicato stampa](https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2021/10/05/interoperabilita-agid-adotta-linee-guida) di AgID, le linee guida

> si focalizzano sulle tecnologie e le loro modalità di utilizzo per garantire la sicurezza delle transazioni digitali realizzate tra e verso le pubbliche amministrazioni che utilizzano le application programming interface (API) tramite rete di collegamento informatica.

## Linee Guida sull’interoperabilità tecnica delle Pubbliche Amministrazioni

Documento in cui è definito il ModI

## Modello di interoperabilità - ModI&#x20;

Definito da AgID, stabilisce il perimetro dell'interoperabilità tra pubbliche amministrazioni.

## Operatore API

Un operatore API è un'utenza tecnica dedicata a un aderente che opera in modalità erogazione. Può gestire il ciclo di vita degli e-service per conto di utenze con permessi di amministrazione.

## Operatore di sicurezza

Un operatore di sicurezza è un'utenza tecnica dedicata a un aderente che opera in modalità fruizione. Può vedere solo i client ai quali è associato. Per questi client, può caricare ed eliminare chiavi pubbliche. Con le chiavi caricate, può portare a compimento la procedura per ottenere un voucher valido per tutte le finalità associate ai client sopra citati.

## Richiesta di fruizione

L'aderente interessato a fruire di un e-service disponibile sul catalogo deve dimostrare di possedere i requisiti minimi indicati dall'erogatore. Per farlo, presenta una richiesta di fruizione, che sarà passata al vaglio della piattaforma e dell'erogatore. La richiesta sarà attivata solo a verifiche avvenute con esito positivo.

Con una richiesta di fruizione attiva, il fruitore può creare un numero di finalità a piacimento per fruire dell'e-service.

## **Service Level Agreement -** SLA

Un **Service Level Agreement - SLA -** è un **accordo sui livelli di servizio** tra un fornitore e un cliente, che definisce le prestazioni minime garantite per un servizio digitale o tecnologico.

## &#x20;Voucher (Token JWT )

L'autorizzazione all'accesso all'API dell'erogatore da parte del fruitore avviene attraverso un meccanismo di autenticazione e autorizzazione. In breve, il fruitore richiede a PDND Interoperabilità un voucher per uno specifico e-service e una specifica finalità. Questo voucher potrà essere speso presso l'e-service dell'erogatore che ne verificherà l'autenticità e il corso di validità prima di restituire le informazioni legittimamente richieste dal fruitore.&#x20;
