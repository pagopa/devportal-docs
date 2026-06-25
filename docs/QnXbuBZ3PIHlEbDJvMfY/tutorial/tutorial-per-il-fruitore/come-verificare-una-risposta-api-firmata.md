# Come verificare una risposta API firmata

Quando ricevi dati da un Erogatore, specialmente se si tratta di informazioni sensibili o legalmente rilevanti, devi avere la certezza assoluta che provengano dalla fonte dichiarata e che non siano state alterate durante la trasmissione. La firma apposta dall'Erogatore sulle risposte API serve proprio a questo.

Verificare questa firma è un passaggio di sicurezza cruciale che ti permette di fidarti del dato ricevuto. Il processo di verifica conferma crittograficamente due principi fondamentali:

* **Autenticità**: La risposta è stata generata proprio dall'Erogatore che possiede la chiave privata corrispondente.
* **Integrità**: Il corpo della risposta (il payload) non ha subito alcuna modifica, nemmeno di un singolo byte, dal momento in cui è stato inviato.

### Prerequisiti

* Aver ricevuto una risposta da un e-service che implementa la firma. La risposta HTTP conterrà, oltre al corpo (payload), due header specifici: `x-pagopa-digest` e `x-pagopa-signature`.
* Avere a disposizione una libreria crittografica in grado di gestire operazioni di hashing (SHA-256) e di verificare firme in formato JWS (JSON Web Signature).

### Procedura di Verifica

La verifica si compone di due controlli sequenziali da implementare nel codice della tua applicazione.

#### Step 1: Estrarre le informazioni dalla risposta HTTP

Dalla risposta ricevuta, estrai e memorizza separatamente tre componenti:

1. Il **corpo della risposta** (payload).
2. Il valore dell'header `x-pagopa-digest`.
3. Il valore dell'header `x-pagopa-signature`.

#### Step 2: Verificare l'integrità del payload (Controllo del Digest)

Questo passaggio assicura che il corpo della risposta non sia stato alterato.

1. Calcola il digest del **corpo della risposta** che hai ricevuto, utilizzando l'algoritmo **SHA-256**.
2. Codifica il risultato in formato **Base64**.
3. Confronta il digest che hai appena calcolato con il valore ricevuto nell'header `x-pagopa-digest`.

> **Se i due valori non corrispondono perfettamente, il payload è stato alterato.** La verifica fallisce e il dato deve essere scartato. Non procedere oltre.

#### Step 3: Reperire la chiave pubblica dell'Erogatore

Se il controllo del digest ha avuto successo, ora devi verificare la firma. Per farlo, ti serve la chiave pubblica corretta.

1. Ispeziona l'header `x-pagopa-signature`. Si tratta di un JWS (JSON Web Signature), che al suo interno contiene un header con l'identificativo della chiave usata per firmare (`kid`).
2. Utilizza l'`e-serviceId` e il `kid` per recuperare la **chiave pubblica** dell'Erogatore da PDND Interoperabilità. La piattaforma espone un endpoint specifico che, dato l'ID di un e-service, restituisce il suo "Portachiavi" con le chiavi pubbliche associate.

#### Step 4: Verificare l'autenticità della firma (Controllo JWS)

Questo passaggio assicura che la risposta provenga effettivamente dall'Erogatore.

1. Utilizza la tua libreria crittografica per verificare la firma contenuta nell'header `x-pagopa-signature`.
2. La funzione di verifica richiederà tipicamente tre input:
   * La **firma** stessa (il valore dell'header `x-pagopa-signature`).
   * Il **payload che è stato firmato**, che in questo caso è il valore del digest (l'header `x-pagopa-digest`).
   * La **chiave pubblica** dell'Erogatore che hai recuperato allo Step 3.

> **Se la funzione di verifica della firma restituisce un esito positivo, la firma è valida.**

### Conclusione

Se sia il controllo del digest (Step 2) sia quello della firma (Step 4) hanno successo, puoi considerare il dato ricevuto come **autentico e integro**, e quindi procedere al suo utilizzo in sicurezza. In caso contrario, la risposta deve essere considerata non affidabile e scartata.
