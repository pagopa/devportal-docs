# Come creare e revocare gli utenti operatori

I ruoli **Operatore** sono pensati per delegare compiti tecnici specifici a membri del team senza concedere i pieni poteri di un Amministratore. Questo approccio, basato sul principio del "minimo privilegio", aumenta la sicurezza e permette una divisione chiara delle responsabilità.

Esistono due tipi di ruoli operativi:

* **Operatore API**: Un ruolo tecnico focalizzato sulla gestione del ciclo di vita di e-service e finalità. È ideale per gli sviluppatori o gli analisti che si occupano degli aspetti funzionali dei servizi.
* **Operatore di Sicurezza**: Un ruolo tecnico con permessi limitati alla gestione dei client e del materiale crittografico (es. caricamento e revoca delle chiavi pubbliche). È pensato per chi si occupa della sicurezza delle integrazioni.

Questo tutorial ti mostra come un Amministratore può creare e revocare queste utenze specializzate.

### Prerequisiti

* Per eseguire queste operazioni, devi accedere al back-office con un'utenza che sia **Amministratore**.
* Per aggiungere un nuovo Operatore, è necessario conoscere il suo **Nome**, **Cognome** e **Codice Fiscale**.

### Creazione di un nuovo operatore

#### Step 1: Accedere alla sezione "Utenti"

Dalla dashboard principale del back-office, fai clic sulla voce di menu **"Utenti"** per accedere all'elenco degli utenti correntemente abilitati.

#### Step 2: Avviare la creazione di un nuovo utente

Fai clic sul pulsante **"Aggiungi un utente"**.

#### Step 3: Inserire i dati e assegnare il ruolo

Compila il modulo con le informazioni della persona che desideri abilitare:

* **Codice Fiscale**: Inserisci il Codice Fiscale del nuovo utente.
* **Nome**: Inserisci il nome.
* **Cognome**: Inserisci il cognome.
* **Ruolo**: Seleziona dal menu a tendina il ruolo specifico che vuoi assegnare: **"Operatore API"** o **"Operatore di Sicurezza"**.

#### Step 4: Confermare la creazione

Fai clic su **"Aggiungi"** per finalizzare l'operazione. Il nuovo utente verrà aggiunto all'elenco e potrà accedere immediatamente alla piattaforma con il proprio SPID o CIE. I suoi permessi saranno limitati alle sole operazioni consentite dal ruolo di Operatore che gli è stato assegnato.

### Revoca di un operatore

#### Step 1: Accedere alla sezione "Utenti"

Dalla dashboard principale del back-office, fai clic sulla voce di menu **"Utenti"**.

#### Step 2: Individuare l'utente da revocare

Scorri l'elenco fino a trovare l'Operatore a cui desideri revocare l'accesso.

#### Step 3: Avviare la revoca

Fai clic sull'icona del cestino o sul pulsante **"Revoca"** corrispondente alla riga dell'utente.

#### Step 4: Confermare la revoca

Apparirà una finestra di dialogo per confermare l'operazione. Fai clic su **"Conferma"** per procedere.

L'accesso per quell'utente verrà immediatamente revocato e non sarà più in grado di operare sulla piattaforma.

***

Pagina successiva [→ Come rendersi disponibili a ricevere deleghe](come-rendersi-disponibili-a-ricevere-deleghe.md)
