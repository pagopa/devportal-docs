# PN-Test di validazione avvenuta integrazione con Piattaforma Notifiche

Scopo di questo documento è di raccogliere i test che una PA mittente, o il suo partner tecnologico, devono effettuare e documentare per validare l’avvenuta integrazione con Piattaforma Notifiche (PN)

**TC-INVIO-01: Creazione di una notifica che richiede un pagamento per un singolo destinatario**

* La PA mittente produce almeno due documenti PDF (atto/i notificato/i e avviso pagoPA)
* La PA definisce la denominazione del destinatario (es. Nome e Cognome) ed il suo Codice Fiscale&#x20;
* La PA definisce il domicilio digitale speciale del destinatario
* La PA definisce l’indirizzo fisico del destinatario
* La PA definisce la modalità dell’invio cartaceo
* La PA definisce i dati relativi all’avviso pagoPA (Codice Fiscale ente creditore e codice avviso)
* La PA precarica i documenti PDF utilizzando le API fornite da PN
* La PA invoca l’API di creazione di una notifica
* La PA riceve l’esito della creazione, in caso di successo memorizza la requestID

Evidenze da produrre: Report del Validator tool; in alternativa, i documenti e metadati utilizzati per generare la notifica e requestID ottenuto

**TC-INVIO-01bis: Creazione di una notifica che non richiede un pagamento per un singolo destinatario**

* La PA mittente produce almeno un documento PDF (atto/i notificato/i)
* La PA definisce la denominazione del destinatario (es. Nome e Cognome) ed il suo Codice Fiscale&#x20;
* La PA definisce il domicilio digitale speciale del destinatario
* La PA definisce l’indirizzo fisico del destinatario
* La PA definisce la modalità dell’invio cartaceo
* La PA precarica i documenti PDF utilizzando le API fornite da PN
* La PA invoca l’API di creazione di una notifica
* La PA riceve l’esito della creazione, in caso di successo memorizza la requestID

Evidenze da produrre: Report del Validator tool; in alternativa, i documenti e metadati utilizzati per generare la notifica e requestID ottenuto

**TC-INVIO-02: Ricezione dello IUN e degli stati di una notifica**\
Prerequisito: La PA mittente definisce uno stream attraverso il quale ricevere i dati relativi agli elementi di timeline di una notifica

* La PA configura uno stream che permetta la ricezione di tutti gli eventi di timeline
* La PA interroga lo stream utilizzando l’API fornita da PN
* La PA riceve tra gli eventi quello di conferma della creazione della notifica ed il relativo IUN&#x20;
* La PA riceve gli eventi successivi relativi alla notifica

Evidenza da produrre: Report del Validator tool; in alternativa, il requestID della notifica che ha avuto successo e lo IUN corrispondente; inoltre fornisce, per quello IUN, la data e tipologia di tutti gli eventi ricevuti ed il relativo timestamp (quello restituito dall’API). Viene verificato che le chiamate all’API rispettano le indicazioni fornite attraverso il parametro retry-after

**TC-INVIO-03: Scaricamento attestazioni opponibili ai terzi e ricevute** \
Prerequisito: La PA mittente ha ricevuto gli eventi di timeline di una notifica

* La PA utilizza le API per effettuare il download di file utilizzando le informazioni presenti negli elementi di timeline

Evidenza da produrre: Report del Validator tool; in alternativa, per ogni elemento di timeline contenente un riferimento ad un documento vengono forniti IUN, tipologia dell’elemento di timeline, timestamp e documento scaricato

**TC-COSTO-01: Attualizzazione della componente costo della notifica associata alla posizione debitoria**

_**Scenario 1**_: La PA mittente ha creato una notifica di test nella quale l’ente creditore per il pagamento coincide con la PA mittente. Si procede all’accesso alla notifica attraverso il portale Destinatario oppure si effettua il pagamento di uno degli IUV associati alla notifica

* La PA mittente riceve la richiesta di validazione della posizione debitoria e richiede attraverso API NotificationPrice la data di perfezionamento ed il costo della notifica

Evidenza da produrre: Report del Validator tool; in alternativa, IUN, timestamp della richiesta di validazione, timestamp del perfezionamento restituito dall’API, costo della notifica restituito dall’API

_**Scenario 2**_: La PA mittente ha creato una notifica di test nella quale l’ente creditore per il pagamento non coincide con la PA mittente (ad esempio nel caso esista un Ente Riscossore diverso dall’Ente mittente della notifica). La Pa mittente del processo d’integrazione verso PN ha provveduto ad includere l’ente creditore responsabile per l’attualizzazione della posizione debitoria. Si procede all’accesso alla notifica attraverso il portale Destinatario oppure si effettua il pagamento di uno degli IUV associati alla notifica

* L’ente creditore riceve la richiesta di validazione della posizione debitoria e si coordina con la PA mittente per effettuare l’attualizzazione attraverso l’invocazione dell' API NotificationPrice, che restituisce la data di perfezionamento ed il costo della notifica

Evidenza da produrre: Report del Validator tool; in alternativa, IUN, timestamp della richiesta di validazione, timestamp del perfezionamento, costo della notifica restituito dall’API
