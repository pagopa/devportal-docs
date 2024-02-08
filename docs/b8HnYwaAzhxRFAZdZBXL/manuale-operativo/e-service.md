# E-service

## Ciclo di vita

Il ciclo di vita di un e-service inizia con la creazione in bozza di una sua prima versione. Successivamente è possibile pubblicarlo, aggiornarlo (con un versionamento progressivo), sospenderlo, riattivarlo, o archiviarlo. Per facilitare la creazione di servizi multipli, è prevista anche la possibilità di clonare un e-service e modificarne alcune parti prima di pubblicarlo come nuovo servizio a sé stante.

## Informazioni necessarie per la creazione di un e-service

Ogni e-service contiene al suo interno una specifica - definito file di interfaccia - e dettaglia il contenuto dell'API dell'erogatore. Si intende che un e-service eroga dati quando tutti gli endpoint di quell'API sono predisposti per erogare dati; mentre un e-service riceve dati quando tutti gli endpoint di quell'API sono predisposti per ricevere dati.

**Per l'e-service che eroga dati**

Un nuovo e-service viene creato attraverso un processo in quattro fasi dove vengono richiesti:

* un nome e una descrizione che saranno quelli esposti all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità;
* con quale tecnologia è scritta l'API attraverso la quale si intende erogare il servizio, se REST o SOAP;
* se l'e-service eroga o riceve dati (in questo caso eroga);

<figure><img src="../.gitbook/assets/creazione e-service erogatore standard.jpg" alt=""><figcaption><p>Fase 1</p></figcaption></figure>

* essendo gli e-service organizzati in versioni, verrà richiesta una descrizione della versione attuale, sia che si tratti della prima bozza che eventualmente di quelle future, andando a descrivere i cambiamenti rispetto alle versioni precedenti;
* una serie di richieste più tecniche:
  1. audience: il parametro _audience (aud)_ che i fruitori dovranno inserire all'interno del token per le richieste che effettueranno verso questa versione dell'e-service. È discrezione dell'erogatore stabilire la policy relativa alle audience: è possibile utilizzare la stessa audience per più versioni, audience diverse per ogni versione, etc.;
  2. durata della validità del voucher: dopo quanto tempo scade il voucher rilasciato da PDND Interoperabilità valido per accedere a questo servizio;
  3. soglia delle chiamate API: si rimanda alla descrizione del meccanismo della [stima di carico](e-service.md#gestire-il-carico-infrastrutturale-di-una-versione-di-e-service);
* la policy relativa alle richieste di fruizione che l'erogatore riceve: se l'opzione è attiva significa che anche se il fruitore possiede già tutti gli attributi necessari all'attivazione della richiesta di fruizione, l'erogatore si riserverà il diritto di attivarla manualmente. In caso contrario l'attivazione è automatica. Questo meccanismo funziona nel caso in cui il fruitore possegga tutti gli attributi necessari nel momento di inoltro della richiesta di fruizione, altrimenti servirà sempre un'attivazione manuale da parte dell'erogatore;

<figure><img src="../.gitbook/assets/UI versioni e-service.png" alt=""><figcaption><p>Fase 2</p></figcaption></figure>

* quali [attributi](attributi.md#come-funzionano) deve avere l'ente fruitore per poter inoltrare la richiesta di fruizione;

<figure><img src="../.gitbook/assets/nuova UI attributi.png" alt=""><figcaption><p>Fase 3</p></figcaption></figure>

* il caricamento del file di specifica dell'API per questa versione dell'e-service: dovrà essere un file OpenAPI per i servizi REST e WSDL per i servizi SOAP, come indicato all'interno del perimetro di sicurezza del ModI;
* eventuale documentazione tecnica aggiuntiva (manuale d'uso, esempi, etc.).

<figure><img src="../.gitbook/assets/UI documentazione.png" alt=""><figcaption><p>Fase 4</p></figcaption></figure>

Alla fine del processo si arriva al riepilogo di tutti i dati inseriti durante la creazione dell'e-service e si può decidere se modificare la bozza, pubblicarla o eliminarla.

**Per l'e-service che riceve dati**

La differenza del processo tra l'e-service che eroga dati e quello che ne riceve è la creazione di una o più finalità con relativa analisi del rischio che il fruitore si troverà precompilata quando andrà a fruire dell'e-service.

<figure><img src="../.gitbook/assets/finalità e-procurement.jpg" alt=""><figcaption><p>Come appare la schermata per un erogatore che crea un e-service che riceve dati</p></figcaption></figure>

L'erogatore deve quindi indicare il caso d'uso per cui intende raccogliere i dati e compilare il questionario.

<figure><img src="../.gitbook/assets/analisi del rischio e-procurement.jpg" alt=""><figcaption><p>Esempio di analisi del rischio</p></figcaption></figure>

## Creare un nuovo e-service

Gli e-service sono costituiti da due parti. Una è fissa ed è costituita delle informazioni di massima che non possono cambiare nel tempo, come ad esempio il nome dell'e-service, la tecnologia che viene utilizzata per erogarlo, o i requisiti di accesso (attributi). Inoltre, c'è una parte variabile, che viene versionata automaticamente da PDND Interoperabilità. Nella parte variabile sono contenute quelle informazioni che invece possono cambiare, come la struttura dell'API del e-service, che può evolvere nel tempo e il flag di controllo manuale delle richieste di fruizione che vengono fatte per ogni versione di e-service. Per questa ragione, la parte fissa può essere modificata solo fintanto che la prima versione dell'e-service non è stata pubblicata.

Se hai permessi di amministrazione o da operatore API, troverai la voce di menù _Erogazione > I tuoi e-service_. Da lì, clicca su _Crea nuovo_. Segui la procedura guidata, inserendo le informazioni indicate. Potrai interrompere il processo di creazione in qualsiasi momento. Ad ogni passaggio è possibile salvare i dati in bozza e riprendere la compilazione in un secondo momento.

<figure><img src="../.gitbook/assets/nuovo e-service.png" alt=""><figcaption></figcaption></figure>

## Creare una nuova versione di e-service

Se un e-service esiste già in una versione pubblicata, è sempre possibile aggiornarlo creandone una nuova. La numerazione è assegnata automaticamente da PDND Interoperabilità in ordine crescente.&#x20;

Per creare una nuova versione, nella vista _Erogazione > I tuoi e-service_ si può cliccare sui tre pallini alla voce dell'e-service di interesse, e selezionare _Crea bozza nuova versione_. Per questioni di consistenza, non è possibile avere più bozze dello stesso e-service contemporaneamente.

<figure><img src="../.gitbook/assets/crea nuova bozza e-service.png" alt=""><figcaption></figcaption></figure>

## Pubblicare una versione di e-service

Un e-service in bozza può essere pubblicato immediatamente al termine della procedura guidata di creazione della versione o in un secondo momento.

Una volta pubblicata una bozza, questa diventerà la nuova versione "attiva" dell'e-service, mandando la versione precedente in stato "deprecato". Le versioni deprecate continueranno a funzionare per garantire ai fruitori continuità di servizio. Ai fruitori sarà indicato che possono aggiornare la loro richiesta di fruizione alla versione più recente dell'e-service.

## Archiviare una versione di e-service

Quando tutte le richieste di fruizione presenti su una versione di e-service sono state aggiornate ad una versione più recente, sarà possibile archiviare una versione di e-service. Quest'azione è irreversibile.&#x20;

Se una versione di e-service è archiviabile, l'opzione per farlo sarà cliccabile. Bisogna andare su _Erogazione > I tuoi e-service_, cliccare sui tre pallini della versione di e-service deprecata di interesse, e su _Archivia_.

{% hint style="warning" %}
Questa funzionalità non è ancora stata rilasciata in ambiente di esercizio
{% endhint %}

## Cancellare una bozza di e-service

È possibile cancellare una bozza in due casi distinti. Se è già stata pubblicata almeno una versione di un e-service, si potrà cancellare la bozza della nuova versione che è stata eventualmente creata. Se invece il servizio in bozza è alla prima versione e non è mai stato pubblicato, si può cancellare l'intero e-service.

Per cancellare un e-service o una sua versione in bozza, andare su _Erogazione > I tuoi e-service_, cliccare sui tre pallini della versione di e-service in bozza desiderata, e su _Elimina_.

## Sospendere o riattivare una versione di e-service

Se una versione di e-service è in stato "attivo" o "deprecato", l'erogatore può unilateralmente decidere di sospenderla. Allo stesso modo, se è in stato "sospeso", può riattivarla.

{% hint style="warning" %}
La sospensione di una versione di e-service comporta un'interruzione di servizio verso i fruitori e tutti gli utenti intermedi e finali che fruiscono dei loro e-service.
{% endhint %}

## Clonare un e-service

Per facilitare la procedura di creazione di e-service molto simili, è stata disposta una funzionalità di clonazione. Per farlo, puoi andare su _Erogazione > I tuoi e-service_, cliccare sui tre pallini dell'e-service da clonare e selezionare _Clona_. È possibile clonare solo versioni di e-service in stato "attivo" o "deprecato".

L'e-service creato da questo clone non sarà pubblicato immediatamente, sarà messo in bozza. La sua numerazione di versione partirà dalla 1, indipendentemente dal numero di versione dell'e-service dal quale è stato clonato.

<figure><img src="../.gitbook/assets/clona_e-service.png" alt=""><figcaption></figcaption></figure>

## [Gestire il carico infrastrutturale di una versione di e-service](finalita.md)

{% hint style="warning" %}
La funzionalità di filtraggio ed evasione granulare delle finalità sopra soglia è attualmente in sviluppo e sarà disponibile a breve
{% endhint %}

Quando un erogatore crea una nuova versione di e-service, deve indicare due soglie di tolleranza per la propria infrastruttura. La prima indica il numero di chiamate API al giorno permesse al singolo fruitore; la seconda la soglia totale data dalla somma delle chiamate di tutti i fruitori.

Il fruitore che ha una richiesta di fruizione attiva per una versione di e-service potrà continuare a dichiarare finalità fino al raggiungimento della prima o della seconda soglia. Una volta superata una delle due soglie, le nuove finalità non saranno più approvate automaticamente da PDND Interoperabilità. L'erogatore troverà in _Erogazione > Finalità_ l'elenco delle finalità presentate dai fruitori e potrà filtrarle per quelle che sono sopra soglia e dunque in attesa di approvazione.

L'erogatore potrà attivare manualmente ognuna di quelle finalità, o definire una data di completamento attività che sarà comunicata al fruitore, entro la quale completerà le operazioni di adeguamento dell'infrastruttura. La data di completamento è eventualmente modificabile unilateralmente dall'erogatore.

{% hint style="info" %}
Gli obiettivi di questa gestione sono:

* dare la possibilità all’erogatore di pianificare la disponibilità delle proprie risorse supportandolo nella mitigazione di casi di DDoS;&#x20;
* guidare i fruitori in una pratica virtuosa di dimensionamento delle proprie esigenze;
* costruire un modello che sia osservabile e nel tempo possa condurre all’ottimizzazione delle risorse.
{% endhint %}
