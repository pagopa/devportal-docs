# Ciclo di vita

## Stati

I portachiavi non hanno veri e propri stati. Possono essere creati e distrutti, associati e disassociati dagli e-service a discrezione degli amministratori dell'ente.

## Operazioni

### Creazione di un portachiavi

I portachiavi possono essere creati da _**Erogazione > Portachiavi erogatore**_.

Per creare un portachiavi, è sufficiente inserire un nome e una descrizione che ti aiutino a identificarlo.

È possibile aggiungere ed eliminare personale tecnico dal portachiavi sia all'atto della creazione, che successivamente.

È sempre possibile creare nuovi portachiavi, anche con caratteristiche identiche a portachiavi già eliminati.

### Eliminazione di un portachiavi

È sempre possibile per un'utenza con ruolo di amministratore eliminare del tutto un portachiavi. Quando si elimina un portachiavi, questo perde immediatamente la possibilità di firmare risposte per tutti quegli e-service ai quali era associato. Tutte le chiavi pubbliche contenute nel portachiavi vengono eliminate.

### Associazione di un portachiavi ad un e-service

Le chiavi pubbliche contenute nei portachiavi possono firmare risposte solo per gli e-service ai quali il portachiavi stesso è associato.

All'interno di ogni e-service, è sempre disponibile la funzionalità per associare portachiavi. Si può entrare nella scheda del proprio e-service in modalità erogazione, nella tab _**Portachiavi**_, e cliccare su _**Aggiungi**_. Nell'elenco saranno riportati tutti i portachiavi creati in precedenza da _**Erogazione > Portachiavi erogatore**_.

Dal momento in cui un portachiavi viene associato ad un e-service, può firmare risposte verso il fruitore per le richieste che sono arrivate per quell'e-service.

Ogni portachiavi può essere contemporaneamente associato a più e-service.

### Disassociazione di un portachiavi da un e-service

È sempre possibile per un amministratore disassociare un portachiavi da una e-service. Può farlo entrando nella scheda del singolo e-service in modalità erogazione,  tab _**Portachiavi**_, selezionare il portachiavi di interesse, e disassociarlo.

Quando un portachiavi viene disassociato da una finalità non viene eliminato. Semplicemente, smette di poter firmare risposte per l'e-service dal quale è stato disassociato, mentre continuerà a funzionare correttamente su tutti gli altri e-service.

### Aggiunta di un utente ad un portachiavi

Un amministratore può sempre aggiungere nuovi utenti ad un portachiavi. È possibile aggiungere ai portachiavi solo utenti già censiti in precedenze su PDND Interoperabilità.

Se si vuole aggiungere un nuovo utente ex-novo, è necessario censirlo sulla Piattaforma Area Riservata prima. Maggiori informazioni nella [sezione dedicata](../../back-office/utenze.md).&#x20;

### Rimozione di un utente da un portachiavi

Un amministratore ha sempre facoltà di rimuovere utenti da un portachiavi. La rimozione dell'utente dal portachiavi non comporta l'eliminazione dell'utenza in toto, che va gestita dalla Piattaforma Area Riservata.

Quando un utente viene rimosso da un portachiavi, PDND Interoperabilità mette in evidenza le chiavi pubbliche caricate dall'utenza rimossa e sollecita la loro sostituzione. Questo, pper garantire che le chiavi usate per firmare le risposte siano sempre al sicuro.

### Aggiunta di una chiave pubblica

Qualsiasi utente aggiunto ad un portachiavi può caricare chiavi pubbliche. La chiave pubblica sarà una parte del corredo crittografico necessario per firmare le risposte verso i fruitori dei propri e-service.

La chiave privata corrispondente alla pubblica verrà tenuta al sicuro dall'aderente. L'aderente la userà per firmare le risposte verso i fruitori.

### Eliminazione di una chiave pubblica

Un utente che ha caricato una chiave pubblica può decidere di eliminarla. Un amministratore può eliminare le chiavi di qualunque altro membro presente nel portachiavi.

Dal momento in cui la chiave viene eliminata, non è più utilizzabile. Qualsiasi risposta che il fruitore riceve non sarà più verificabile, in quanto mancherà la chiave pubblica da utilizzare per la verifica stessa.
