# PN-Test di validazione avvenuta integrazione con Piattaforma Notifiche

Scopo di questo documento è di raccogliere i test che una PA mittente, o il suo partner tecnologico, devono effettuare e documentare per validare l’avvenuta integrazione con Piattaforma Notifiche (PN)

### Istruzioni su processo di validazione dei test

Per convalidare i test descritti nel documento: "T_est di certificazione avvenuta integrazione con Piattaforma Notifiche"_ è possibile utilizzare il tool di validazione PN-Validator, la cui documentazione ed istruzioni di utilizzo sono esposti alla seguente pagina: [https://docs.pagopa.it/pnvalidator/](https://docs.pagopa.it/pnvalidator/)

Il PN-Validator genera un report in formato JSON visualizzabile contattando la url: _{basUrlValidator}/checklistresult_ dove sono elencate una serie di domande inizialmente in stato _false_, che descrivono le azioni da compiere per considerare validati i test-case. Il report verrà aggiornato di volta in volta che le chiamate effettuate dal partner soddisferanno i requisiti richiesti dal test-case di riferimento, portando le domande in true.

Quando tutte le domande appartenenti al gruppo del test-case passeranno in stato _true_, tale test-case è da considerarsi validato; una volta eseguiti positivamente tutti i test e quando tutte le domande presenti nel report saranno passate in stato _true_, potranno essere considerati convalidati tutti i test.

Come ulteriore supporto a questa fase dell'integrazione, trovate a questo link il documento Modello di integrazione di Piattaforma Notifiche Digitali:\
[https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/)  \
dove vengono descritti di diversi scenari di integrazione e le due diverse possibili modalità di aggiornamento della posizione debitoria.

NOTA: in caso l'ente mittente utilizzi esclusivamente la modalità asincrona di integrazione con il sistema pagoPA il test del PN-Validator è considerato valido anche se non sono soddisfatte le domande relative alla chiamata dell'API per l'attualizzazione del importo con i costi di notifica.

#### Validazione dei test lato Partner

In questa fase il report dovrà essere prodotto dal Partner Tecnologico utilizzando la propria soluzione di integrazione verso le API esposte dal tool PN-Validator allo scopo di produrre un report convalidato, che dovrà essere copiato all’interno di un file JSON e condiviso con il Team Supporto Enti ([pn-supporto-enti@pagopa.it](mailto:pn-supporto-enti@pagopa.it)) che provvederà a verificarne lo stato.

#### Validazione dei test lato Enti

In questa fase il report dovrà essere prodotto all’interno dell’ambiente degli Enti che si intendono convalidare, utilizzando sempre la soluzione sviluppata dal Partner verso le API esposte dal tool di validazione PN-Validator. Questa operazione può sia essere eseguita dagli Enti col supporto del Partner che direttamente dal Partner stesso, sempre rimanendo all’interno dell’ambiente dell’Ente di riferimento.\
Dopo aver completato con successo questi passaggi, per ogni Ente sarà possibile allegare i report contenenti il buon esito sul Modulo accessibile da qui: [https://pagopa.atlassian.net/servicedesk/customer/portal/5/group/28/create/150](https://pagopa.atlassian.net/servicedesk/customer/portal/5/group/28/create/150)\
Si evidenzia che sono presenti le istruzioni su come salvare e nominare il report che viene restituito dal tool, mentre nella restante parte del Modulo si richiede la compilazione delle informazioni principali dell’Ente che lo compila. Nell’ultima parte c’è la sezione dedicata al report che deve essere allegato in formato json.

#### Validazione dei test lato Enti nei casi di utilizzo soluzione SaaS

Nel caso specifico dei Partner che hanno sviluppato una soluzione SaaS, rimane comunque fondamentale completare il processo di convalida del report che è collegato all’asseveramento; pertanto è possibile procedere nel seguente modo:

_Inviare una PEC all'indirizzo_ [_pagopa@pec.governo.it_](mailto:pagopa@pec.governo.it) _che abbia nell’oggetto un riferimento al Partner Coinvolto ed al fatto che si stia utilizzando la soluzione SaaS e che contenenga i seguenti allegati:_

1. _Descrizione della Soluzione di intermediazione in SaaS di cui gli Enti associati al Partner si avvalgono._
2. _Elenco degli Enti contrattualizzati._
3. _Dichiarazione attestante che le modalità d'integrazione a PND attraverso la Soluzione SaaS di cui al punto 1, garantiscono per gli Enti in elenco di cui al punto 2 l'aderenza ai requisiti previsti dalle LLGG/Modello d'integrazione definite da PagoPA spa, in particolare per quanto riguarda:_
   * _a) Chiamata alla API per l'attualizzazione del costo della notifica_
   * _b) Avvenuta integrazione a PND tramite PDND/Interoperabilità_

_4.      Una copia del report ottenuta dal Validator tool utilizzando la Soluzione SaaS_

### Descrizione dei test case di integrazione con Piattaforma Notifiche

I passi dei test sono i seguenti:

* **`TC-INVIO-01:`** Notifiche senza pagamento collegato&#x20;
* **`TC-INVIO-02:`** Notifiche con pagamento collegato: l'esecuzione dei test differisce tra la modalità di integrazione con il sistema pagoPA
* **`TC-COSTO-01`**`:` Ricezione del costo di notifica (ignorare solo in caso in modalità asincrona di integrazione con il sistema pagoPA)
* **`TC-INVIO-03:`** Ricezione dello IUN e degli stati di una notifica
* **`TC-INVIO-04:`** Scaricamento attestazioni opponibili ai terzi e ricevute&#x20;

#### **TC-INVIO-01: Creazione di una notifica che NON richiede un pagamento per un singolo destinatario**

* La PA mittente produce almeno un documento PDF (atto/i notificato/i)
* La PA definisce la denominazione del destinatario (es. Nome e Cognome) ed il suo Codice Fiscale&#x20;
* La PA definisce il domicilio digitale speciale del destinatario
* La PA definisce l’indirizzo fisico del destinatario
* La PA definisce la modalità dell’invio cartaceo
* La PA pre-carica i documenti PDF utilizzando le API fornite da PN
* La PA invoca l’API di creazione di una notifica, indicando `pagoPaIntMode=NONE`
* La PA riceve l’esito della creazione, in caso di successo memorizza la requestID

Evidenze da produrre: Report del Validator tool; in alternativa, i documenti e metadati utilizzati per generare la notifica e requestID ottenuto

#### **TC-INVIO-02: Creazione di una notifica che richiede un pagamento per un singolo destinatario**

* La PA mittente produce almeno due documenti PDF (atto/i notificato/i e avviso pagoPA)
* La PA definisce la denominazione del destinatario (es. Nome e Cognome) ed il suo Codice Fiscale&#x20;
* La PA definisce il domicilio digitale speciale del destinatario
* La PA definisce l’indirizzo fisico del destinatario
* La PA definisce la modalità dell’invio cartaceo
* La PA definisce i dati relativi all’avviso pagoPA (Codice Fiscale ente creditore e codice avviso)
* La PA pre-carica i documenti PDF utilizzando le API fornite da PN
* Per modalità di integrazione **sincrona** con pagoPA:
  * La PA invoca l’API di creazione di una notifica indicando `pagoPaIntMode=SYNC`
* Per modalità di integrazione **asincrona** con pagoPA:
  * La PA mittente deve utilizzare avvisi già creati sull'ambiente UAT pagoPA di Integrazione Asincrona (https://docs.pagopa.it/sanp/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone)
  * La PA invoca l’API di creazione di una notifica, indicando `pagoPaIntMode=ASYNC`
* La PA riceve l’esito della creazione, in caso di successo memorizza la requestID

Evidenze da produrre: Report del Validator tool; in alternativa, i documenti e metadati utilizzati per generare la notifica e requestID ottenuto

#### **TC-COSTO-01: Attualizzazione della componente costo della notifica associata alla posizione debitoria (ignorare solo per modalità integrazione asincrona con pagoPA)**

_**Scenario 1**_: La PA mittente ha creato una notifica di test nella quale l’ente creditore per il pagamento coincide con la PA mittente. Si procede all’accesso alla notifica attraverso il portale Destinatario oppure si effettua il pagamento di uno degli IUV associati alla notifica

* La PA mittente riceve la richiesta di validazione della posizione debitoria e richiede attraverso API NotificationPrice la data di perfezionamento ed il costo della notifica

Evidenza da produrre: Report del Validator tool; in alternativa, IUN, timestamp della richiesta di validazione, timestamp del perfezionamento restituito dall’API, costo della notifica restituito dall’API

_**Scenario 2**_: La PA mittente ha creato una notifica di test nella quale l’ente creditore per il pagamento non coincide con la PA mittente (ad esempio nel caso esista un Ente Riscossore diverso dall’Ente mittente della notifica). La Pa mittente del processo d’integrazione verso PN ha provveduto ad includere l’ente creditore responsabile per l’attualizzazione della posizione debitoria. Si procede all’accesso alla notifica attraverso il portale Destinatario oppure si effettua il pagamento di uno degli IUV associati alla notifica

* L’ente creditore riceve la richiesta di validazione della posizione debitoria e si coordina con la PA mittente per effettuare l’attualizzazione attraverso l’invocazione dell' API NotificationPrice, che restituisce la data di perfezionamento ed il costo della notifica

Evidenza da produrre: Report del Validator tool; in alternativa, IUN, timestamp della richiesta di validazione, timestamp del perfezionamento, costo della notifica restituito dall’API

#### **TC-INVIO-03: Ricezione dello IUN e degli stati di una notifica** Prerequisito: La PA mittente definisce uno stream attraverso il quale ricevere i dati relativi agli elementi di timeline di una notifica

* La PA configura uno stream che permetta la ricezione di tutti gli eventi di timeline
* La PA interroga lo stream utilizzando l’API fornita da PN
* La PA riceve tra gli eventi quello di conferma della creazione della notifica ed il relativo IUN&#x20;
* La PA riceve gli eventi successivi relativi alla notifica

Evidenza da produrre: Report del Validator tool; in alternativa, il requestID della notifica che ha avuto successo e lo IUN corrispondente; inoltre fornisce, per quello IUN, la data e tipologia di tutti gli eventi ricevuti ed il relativo timestamp (quello restituito dall’API). Viene verificato che le chiamate all’API rispettano le indicazioni fornite attraverso il parametro retry-after

#### **TC-INVIO-04: Scaricamento attestazioni opponibili ai terzi e ricevute** Prerequisito: La PA mittente ha ricevuto gli eventi di timeline di una notifica

* La PA utilizza le API per effettuare il download di file utilizzando le informazioni presenti negli elementi di timeline

Evidenza da produrre: Report del Validator tool; in alternativa, per ogni elemento di timeline contenente un riferimento ad un documento vengono forniti IUN, tipologia dell’elemento di timeline, timestamp e documento scaricato

