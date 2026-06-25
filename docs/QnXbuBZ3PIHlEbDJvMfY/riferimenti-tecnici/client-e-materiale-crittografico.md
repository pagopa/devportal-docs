# Client e Materiale Crittografico

Un **client** è l'entità che rappresenta un'applicazione software all'interno di PDND Interoperabilità. Funziona come un contenitore per le chiavi pubbliche e per gli utenti tecnici autorizzati a gestirle. È lo strumento che abilita materialmente l'accesso ai dati, poiché è attraverso il client che un'applicazione si autentica per ottenere i voucher necessari a chiamare le API.

La gestione dei client è un'operazione di sicurezza critica e, per questa ragione, può essere effettuata solo da utenze con ruolo di **Amministratore** o **Operatore di Sicurezza**.

### Tipi di Client

Esistono due tipologie di client, a seconda del loro scopo specifico:

1. **Client per e-service** È il tipo più comune, progettato per essere associato a una o più finalità. Una volta associato, il materiale crittografico (le chiavi pubbliche) contenuto in questo client può essere utilizzato per richiedere voucher validi per tutti gli e-service collegati a quelle finalità.
2. **Client per le API di Interoperabilità** Questo client ha uno scopo speciale: viene utilizzato per autenticarsi e interagire con le API di servizio esposte dalla piattaforma stessa, al fine di automatizzare le operazioni di gestione (es. creare una finalità via API). A differenza del primo tipo, non necessita di essere associato ad alcuna finalità.

### Ciclo di Vita e Operazioni

I client non hanno un vero e proprio ciclo di vita con stati come "attivo" o "sospeso". Possono essere creati, modificati e eliminati in qualsiasi momento a discrezione degli amministratori.

* **Creazione**: Un client viene creato fornendo un nome e una descrizione. Durante la creazione o in un momento successivo, è possibile aggiungere gli utenti tecnici che lo gestiranno.
* **Eliminazione**: Un client può essere eliminato in qualsiasi momento. L'eliminazione è un'operazione distruttiva e irreversibile: il client perde immediatamente la capacità di ottenere voucher, tutte le chiavi pubbliche al suo interno vengono cancellate e tutte le associazioni con le finalità vengono rimosse.
* **Gestione delle Chiavi**: Qualsiasi utente tecnico associato a un client può caricarvi nuove chiavi pubbliche. Solo chi ha caricato una chiave o un Amministratore può eliminarla. Una volta eliminata, una chiave pubblica non è più utilizzabile per ottenere voucher.
* **Gestione degli Utenti**: Un Amministratore può aggiungere o rimuovere utenti tecnici da un client in qualsiasi momento. Quando un utente viene rimosso, la piattaforma evidenzia le chiavi da lui caricate, sollecitandone la sostituzione per motivi di sicurezza.

### Strategie per l'Organizzazione dei Client

Il sistema è stato progettato per essere flessibile, consentendo a ogni ente di organizzare i propri client in base ai propri processi interni, trovando il giusto compromesso tra sicurezza e manutenibilità. Le strategie più comuni sono:

* **Un client per ogni e-service**: Approccio semplice, ma può diventare difficile da manutenere con molti e-service.
* **Un client per ogni applicazione**: Una strategia comune, dove ogni software ha il proprio client e le proprie chiavi.
* **Un client per ogni team o fornitore**: Ideale per tracciare e isolare le attività di diversi gruppi di lavoro o di software house esterne. Si consiglia di assegnare al client un nome che rifletta chi lo utilizza (es. "Client per Team Sviluppo Anagrafe").

In linea di principio, l'organizzazione deve garantire che i tecnici abbiano accesso e visibilità solo sulle finalità per le quali operano.
