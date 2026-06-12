# Template di e-service

Per standardizzare la creazione di e-service in casi d'uso ricorrenti, la piattaforma introduce il concetto di **template**. Se molti enti diversi hanno la necessità di erogare lo stesso servizio (ad esempio, un servizio anagrafico standard definito a livello nazionale), è possibile creare un template per assicurare che tutte le implementazioni siano conformi alla stessa interfaccia API e condividano caratteristiche comuni.

I template sono creati da enti specifici (definiti "API co-design manager" nelle Linee Guida AgID) e sono resi disponibili in un catalogo apposito, distinto da quello degli e-service. Qualsiasi ente autorizzato può quindi consultare questo catalogo e creare la propria "istanza" di e-service a partire da un template, ereditandone le caratteristiche predefinite.

### Relazione tra Template e Istanza

* **Creazione**: Qualsiasi ente autorizzato a erogare può sia creare nuovi template, sia creare istanze di e-service a partire da template esistenti.
* **Indipendenza degli Stati**: Lo stato di un template e quello di un'istanza da esso derivata sono **completamente indipendenti**. Se un template viene sospeso, un'istanza già attiva creata da esso rimane attiva. Allo stesso modo, un'istanza può essere archiviata senza alcun impatto sul template di origine.

### Struttura e Campi

La creazione di un template è simile a quella di un e-service, ma i suoi campi si dividono in tre categorie per definire cosa l'ente che lo istanzia può o deve modificare.

1. **Campi Vincolati**: Vengono definiti dal creatore del template e **non possono essere modificati** dall'ente che crea l'istanza. Garantiscono l'uniformità del servizio. Includono:
   * Nome, descrizione e tecnologia dell'e-service.
   * Interfaccia API, attributi e durata del voucher per la versione.
2. **Campi Suggeriti**: Sono valori preimpostati dal creatore del template che l'ente che crea l'istanza può decidere di **accettare o modificare** a propria discrezione. Riguardano aspetti gestionali. Includono:
   * Soglie di carico (chiamate API giornaliere).
   * Politica di approvazione delle richieste (automatica o manuale).
3. **Campi da Completare**: Sono informazioni specifiche che **devono essere compilate** dall'ente che crea l'istanza, in quanto dipendono dalla sua infrastruttura. Includono:
   * Audience del voucher.
   * URL del server (endpoint).

### Ciclo di Vita di un Template

Un template attraversa un proprio ciclo di vita, i cui stati principali sono:

* **Bozza (Draft)**: Il template è in fase di creazione ed è visibile solo al suo creatore.
* **Attivo (Active)**: Il template è pubblicato nel catalogo ed è disponibile per essere istanziato da altri enti.
* **Sospeso (Suspended)**: Il template è temporaneamente ritirato dal catalogo e non può essere usato per creare nuove istanze. Non ha impatto sulle istanze già esistenti.

### Gestione degli Aggiornamenti

Un template può essere aggiornato nel tempo. Le modalità di propagazione delle modifiche alle istanze dipendono dalla natura dell'aggiornamento.

* **Aggiornamenti Minori**: Modifiche non strutturali (es. la correzione di un errore nella descrizione). **Si propagano automaticamente e immediatamente** a tutte le istanze esistenti.
* **Aggiornamenti Critici**: Modifiche strutturali che richiedono una nuova versione del template (es. una modifica all'interfaccia API). **Non si propagano automaticamente**. Ogni ente che ha creato un'istanza riceve una notifica e deve **aggiornare manualmente** la propria istanza alla nuova versione del template. Questo processo, a sua volta, richiederà a tutti i Fruitori di quell'istanza di aggiornare la loro richiesta di fruizione, come per un normale e-service.

Il creatore del template ha a disposizione una dashboard per monitorare lo stato di allineamento di tutte le istanze derivate, verificando chi ha recepito gli aggiornamenti critici e chi no.
