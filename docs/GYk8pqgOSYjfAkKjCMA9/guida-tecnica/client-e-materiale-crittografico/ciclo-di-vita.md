# Ciclo di vita

## Stati

I client non hanno veri e propri stati. Possono essere creati e distrutti, associati e disassociati dalle finalità a discrezione degli amministratori dell'ente.

## Operazioni

### Creazione di un client

I client e-service possono essere creati da _**Gestione del client > API e-service**_. I client per le API di PDND Interoperabilità, da _**Gestione del client > API Interoperabilità**_.

Per creare un client, è sufficiente inserire un nome e una descrizione che ti aiutino a identificarlo.

È possibile aggiungere ed eliminare personale tecnico dal client sia all'atto della creazione, che successivamente.

È sempre possibile creare nuovi client, anche con caratteristiche identiche a client già eliminati.

### Eliminazione di un client

È sempre possibile per un'utenza con ruolo di amministratore eliminare del tutto un client. Quando si elimina un client, questo perde immediatamente la possibilità di ottenere voucher per tutte le finalità alle quali era associato. Tutte le chiavi pubbliche contenute nel client vengono eliminate.

### Associazione di un client ad una finalità

Le chiavi pubbliche contenute nei client e-service possono ottenere voucher validi solo per le finalità alle quali il client stesso è associato.

All'interno di ogni finalità, è sempre disponibile la funzionalità per associare client. Si può entrare nella scheda della singola finalità, nella tab _**Client associati**_, e cliccare su _**Aggiungi**_. Nell'elenco saranno riportati tutti i client e-service creati in precedenza da _**Gestione del client > API e-service**_.

Dal momento in cui un client viene associato ad una finalità, può richiedere voucher validi da spendere presso l'e-service che fanno capo a quella finalità.

Ogni client può essere contemporaneamente associato a più finalità.

### Disassociazione di un client da una finalità

È sempre possibile per un amministratore disassociare un client da una finalità. Può farlo entrando nella singola finalità,  tab _**Client Associati**_, selezionare il client di interesse, e disassociarlo.

Quando un client viene disassociato da una finalità non viene eliminato. Semplicemente, smette di poter ottenere voucher per la finalità dal quale è stato disassociato, mentre continuerà a funzionare correttamente su tutte le altre finalità.

### Aggiunta di un utente ad un client

Un amministratore può sempre aggiungere nuovi utenti ad un client. È possibile aggiungere ai client solo utenti già censiti in precedenze su PDND Interoperabilità.

Se si vuole aggiungere un nuovo utente ex-novo, è necessario censirlo sulla Piattaforma Area Riservata prima. Maggiori informazioni nella [sezione dedicata](../back-office/utenze.md).&#x20;

### Rimozione di un utente da un client

Un amministratore ha sempre facoltà di rimuovere utenti da un client. La rimozione dell'utente dal client non comporta l'eliminazione dell'utenza in toto, che va gestita dalla Piattaforma Area Riservata.

Quando un utente viene rimosso da un client, PDND Interoperabilità mette in evidenza le chiavi pubbliche caricate dall'utenza rimossa e sollecita la loro sostituzione. Questo, pper garantire che le chiavi usate per ottenere voucher siano sempre al sicuro.

### Aggiunta di una chiave pubblica

Qualsiasi utente aggiunto ad un client può caricare chiavi pubbliche. La chiave pubblica sarà una parte del corredo crittografico necessario per ottenere voucher da PDND Interoperabilità.

La chiave privata corrispondente alla pubblica verrà tenuta al sicuro dall'aderente. L'aderente la userà per firmare le richieste per ottenere voucher da PDND Interoperabilità.

### Eliminazione di una chiave pubblica

Un utente che ha caricato una chiave pubblica può decidere di eliminarla. Un amministratore può eliminare le chiavi di qualunque altro membro presente nel client.

Dal momento in cui la chiave viene eliminata, non è più utilizzabile. Qualsiasi richiesta di voucher fatta a PDND Interoperabilità con la chiave privata corrispondente alla pubblica appena eliminata, restituirà errore.
