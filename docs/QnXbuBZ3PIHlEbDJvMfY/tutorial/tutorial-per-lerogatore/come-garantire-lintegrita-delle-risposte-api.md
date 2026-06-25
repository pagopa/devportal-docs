# Come garantire l'integrità delle risposte API

Quando un Fruitore riceve dati tramite un e-service, è fondamentale che abbia la certezza assoluta della loro provenienza e della loro integrità. Firmare le risposte delle tue API offre questa garanzia, fornendo una prova crittografica che il dato è stato inviato proprio dal tuo ente (principio di **autenticità**) e non è stato alterato durante la trasmissione (principio di **integrità**).

Questo meccanismo, inoltre, garantisce la **non ripudiabilità** della transazione: l'Erogatore non può negare di aver inviato quella specifica risposta. Per abilitare questa funzionalità, è necessario prima associare un "Portachiavi" al tuo e-service sul back-office.

### Prerequisiti

* Avere un e-service in stato "Pubblicato".
* Disporre di una coppia di chiavi (pubblica/privata) da dedicare alla firma. La chiave privata sarà usata dalla tua applicazione, mentre quella pubblica sarà caricata sulla piattaforma.
* Accedere al back-office con un utente che abbia il ruolo di **Amministratore** o **Operatore API**.

### Procedura

#### Step 1: Accedere alla sezione "Erogazione"

Dal menu principale del back-office, selezionare la voce "Erogazione".

#### Step 2: Selezionare l'e-service da configurare

Individuare l'e-service a cui si vuole abilitare la firma e fare clic sul suo nome per accedere alla pagina di dettaglio.

#### Step 3: Associare un Portachiavi

All'interno della pagina di dettaglio dell'e-service, trovare la sezione relativa ai Portachiavi e procedere con l'associazione. Questo richiederà di:

1. Fornire un identificativo per la chiave (`kid`) che verrà usato per la firma.
2. Caricare la **chiave pubblica** corrispondente alla chiave privata che utilizzerai per firmare.
3. Salvare la configurazione.

Una volta associato il Portachiavi, l'e-service è tecnicamente abilitato alla firma delle risposte.

#### Step 4: Preparare il payload della risposta

Questa parte avviene all'interno del codice della tua applicazione API ogni volta che rispondi a una chiamata di un Fruitore.

Prima di inviare la risposta, il corpo (payload) deve essere pronto. Ad esempio, un payload JSON potrebbe essere:

```json
{
  "userId": "ABCDEF12G34H567I",
  "status": "VALIDO"
}
```

#### Step 5: Calcolare il Digest del payload

Calcolare un digest del corpo della risposta utilizzando l'algoritmo SHA-256 e codificarlo in Base64. Questo digest servirà a garantire l'integrità del messaggio.

#### Step 6: Creare la firma

Utilizzando la tua **chiave privata** (corrispondente a quella pubblica caricata nel Portachiavi), firmare il digest calcolato al passo precedente. La firma deve seguire lo standard JWS (JSON Web Signature).

#### Step 7: Aggiungere gli header alla risposta

Infine, aggiungere alla risposta HTTP due header specifici prima di inviarla al Fruitore:

* `x-pagopa-digest`: Contiene il digest calcolato allo Step 5.
* `x-pagopa-signature`: Contiene la firma JWS creata allo Step 6.

Il Fruitore, ricevendo la risposta, potrà utilizzare questi header e la chiave pubblica del tuo e-service (che recupererà dalla piattaforma) per verificare l'autenticità e l'integrità del dato ricevuto.
