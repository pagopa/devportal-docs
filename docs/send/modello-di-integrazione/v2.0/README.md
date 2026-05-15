# Modello di integrazione di Piattaforma Notifiche Digitali

Questo documento descrive i diversi scenari di integrazione di Piattaforma Notifiche Digitali (da qui in poi Piattaforma Notifiche o PND). Questi scenari si differenziano sulla base della tipologia di notifica inviata, la presenza o meno di un pagamento e le modalità previste per il pagamento stesso. Il documento fornisce anche indicazioni circa l'accesso a Piattaforma Notifiche attraverso PDND Interoperabilità.

## Integrazione manuale <a href="#_ynbukwngtbvv" id="_ynbukwngtbvv"></a>

In questo tipo di integrazione non è prevista alcuna forma di comunicazione tra i sistemi informatici di Piattaforma Notifiche e quelli dell’ente. L’effetto collaterale di questa assenza è l’impossibilità di verificare automaticamente lo stato della notifica stessa, verifica che richiede perciò l’accesso manuale alle notifiche e l’eventuale recupero, anch’esso manuale, delle attestazioni comprovanti la regolare esecuzione della notifica. Manuale sarà anche la verifica dei dati di fatturazione che PagoPA manderà periodicamente all’ente mittente. Ancora più rilevante è l’impossibilità di adeguare tempestivamente i costi di notifica eventualmente posti a carico del destinatario: senza un’integrazione automatica, infatti, è elevato il rischio che al destinatario, al momento del pagamento, venga imputato un costo di notifica inferiore rispetto al costo reale.&#x20;

In uno scenario di questo tipo quindi, l’integrazione con PND di tipo manuale risulterebbe accettabile, sia per l’Ente sia per la qualità del servizio erogato da PND, per la gestione di notifiche prive di pagamento o senza spese di notifica per il destinatario. Inoltre, tale tipologia di processo d’integrazione rimane applicabile anche nel caso in cui, per indicazione di legge, venga imputato un costo di notifica forfettario; in tutti questi casi, infatti, l’ammontare che deve essere versato dal destinatario rimane costante durante il processo di notifica.&#x20;

In ogni caso è opportuno sottolineare che la scelta di questa tipologia di percorso d’integrazione comporterebbe la necessità di realizzare una successiva fase/attività di sviluppo per l’integrazione dei casi d’uso in cui non è possibile predeterminare l’ammontare che deve essere versato dal destinatario.

Inoltre, viste le difficoltà introdotte da una gestione puramente manuale del processo di notificazione e quanto sopra specificato circa la verifica della fatturazione, si sconsiglia l’approccio manuale se non in caso di volumi di notificazione molto bassi, ad esempio nei casi in cui già oggi non è previsto l’utilizzo di un sistema di gestione documentale a supporto del processo di notifica.

Per sintetizzare, i casi di notifica che possono essere gestiti in questa modalità sono i seguenti:

* Notifiche di atti che non richiedono un pagamento e per i quali l’ente si accolla i costi di notifica
* Notifiche di atti che richiedono un pagamento e per i quali l’ente si accolla i costi di notifica
* Notifiche di atti che non richiedono un pagamento e per i quali l’ente applica un costo di notifica forfettario
* Notifiche di atti che richiedono un pagamento e per i quali l’ente applica un costo di notifica forfettario

## Integrazione automatica <a href="#_1qjpydr3xdu1" id="_1qjpydr3xdu1"></a>

In questo tipo di integrazione i sistemi informatici di Piattaforma Notifiche sono messi in comunicazione con quelli dell’ente. In questa situazione possono essere gestiti automaticamente sia lo stato della notifica, con relativo recupero delle attestazioni comprovanti la regolare esecuzione della notifica, sia l’attualizzazione dei costi di notifica. Sarà inoltre possibile la verifica automatica dei dati di fatturazione. Con questo tipo di integrazione è possibile gestire qualsiasi tipologia di notifica e di modalità di pagamento.

Esistono diverse sotto-varianti di questa integrazione automatica, differenti sulla base della modalità di aggiornamento del costo di notifica e del numero di servizi informatici presenti nell’ente o da chi gestisce gli stessi.

### Aggiornamento del costo di notifica <a href="#_jxjslxh5w326" id="_jxjslxh5w326"></a>

Sono presenti due diverse possibili modalità di aggiornamento:

#### Aggiornamento sulla base delle informazioni di cambio stato della notifica <a href="#_yen3q7ftn0b5" id="_yen3q7ftn0b5"></a>

In questo scenario, il sistema informatico che si occupa della gestione della notifica è collegato allo stream che riporta le variazioni di stato di ogni singola notifica, incluse quelle che comportano un cambio del costo della notifica stessa. A fronte della ricezione di questi eventi questo sistema informatico ricalcola l’ammontare delle posizioni debitorie connesse alla notifica e contatta il sistema di gestione delle posizioni debitorie per provvedere alla loro attualizzazione.

Con questa soluzione è solamente il sistema informatico che si occupa degli atti a doversi rapportare con Piattaforma Notifiche, semplificando quindi l’integrazione. Il rischio introdotto da questa soluzione è che **se il destinatario effettuasse il pagamento con piattaforma pagoPA nel tempo che intercorre tra l’evento che determina un cambio di costo e l’effettiva attualizzazione della posizione debitoria, il destinatario non pagherebbe l’ammontare corretto**, con una possibile perdita per l’ente mittente o, ancor peggio, con la possibilità che l’ente mittente operi un’azione di rivalsa sul destinatario. E’ quindi assolutamente fondamentale che l’ente mittente garantisca l’aggiornamento in tempi ristretti **e che si assuma il rischio di eventuali pagamenti su posizioni debitorie non aggiornate**. Di conseguenza questa gestione è utilizzabile solamente nelle casistiche nelle quali l’ente si accolla le spese di notifica e di conseguenza questi costi non hanno un impatto diretto sull’ammontare della posizione debitoria.

#### Aggiornamento all’atto del pagamento in modalità sincrona

In questo scenario l’attualizzazione della posizione debitoria è prevista anche all’atto del pagamento attraverso piattaforma pagoPA in modalità sincrona, annullando di fatto la possibilità che il destinatario paghi un importo non corretto. Durante il pagamento, il Nodo pagoPA contatta l’ente creditore associato al pagamento per richiedere l’attivazione della posizione debitoria. In questa fase l’ente comunica al Nodo il valore attualizzato della posizione debitoria stessa. Per permettere l’attualizzazione, Piattaforma Notifiche prevede un’API che, dati gli estremi di un avviso pagoPA, restituisce, tra le altre cose, il costo della notifica associata a quel pagamento. **Per permettere al sistema informatico che gestisce le posizioni debitorie di utilizzare correttamente questa API è obbligatorio che lo stesso sia a conoscenza del fatto che un avviso pagoPA debba essere o meno attualizzato con i dati forniti da Piattaforma Notifiche**. Questa è un’informazione che deve essere fornita, dal sistema informatico di gestione degli atti, all’atto della creazione della posizione debitoria.

Nel momento in cui il sistema di gestione delle posizioni debitorie riceve una richiesta di attivazione da parte del Nodo pagoPA, il sistema verificherà se l’avviso deve essere attualizzato con i dati di Piattaforma Notifiche. Nel caso in cui debba essere contattata Piattaforma Notifiche, questo può avvenire richiedendo l’informazione al sistema di gestione dell’atto, che si fa tramite verso Piattaforma Notifiche

L’operazione di attualizzazione deve avvenire nell’arco di 2 secondi.

L'attualizzazione richiede la comunicazione tra sistemi diversi dell’ente. Rappresentiamo qui la soluzione raccomandata ed una proposta di API che devono essere previste per poter gestire il processo di attualizzazione.&#x20;

La soluzione permette l’attualizzazione complessiva della posizione debitoria, non solo per incorporare variazioni del costo di notifica ma anche altre variazioni (es. interessi di mora)

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

#### Aggiornamento della posizione debitoria in modalità asincrona

In questo scenario l’attualizzazione dell'importo della posizione debitoria è gestita direttamente da PagoPA grazie all'adesione dell'Ente alla modalità di integrazione asincrona ([link](https://docs.pagopa.it/sanp/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone)).

In questo tipo di integrazione la comunicazione tra i sistemi informatici di Piattaforma Notifiche e Piattaforma pagoPA è centralizzata, non è necessario alcun tipo di intervento da parte dell'Ente.

Questa forma di aggiornamento richiede che la posizione debitoria non sia composta da componenti separate di costo.

## Accesso attraverso PDND Interoperabilità <a href="#_ynbukwngtbvv" id="_ynbukwngtbvv"></a>

Al fine di rendere maggiormente certa l'identità del mittente è possibile effettuare le chiamate alle API di Piattaforma Notifiche attraverso il modello di fruizione introdotto da PDND Interoperabilità e descritto nella documentazione accessibile da questa [pagina](https://www.interop.pagopa.it/). PDND Interoperabilità offre un meccanismo di verifica dell'identità del chiamante che supera nelle LL.GG. AgID il precedente modello che utilizzava mTLS allo scopo. E' suggerito utilizzare PDND Interoperabilità come complemento agli elementi di sicurezza già previsti in Piattaforma Notifiche.

Per sfruttare questa funzionalità, l'ente mittente di Piattaforma Notifiche dovrà aderire all'utilizzo di PDND Interoperabilità attraverso il portale SelfCare e richiedere la fruizione dell'eService erogato da PagoPA S.p.A. al fine di esporre i servizi di Piattaforma Notifiche. L'eService è disponibile sia in ambiente di Collaudo che di Produzione di Interoperabilità. La fruizione nell'ambiente di Produzione sarà attivata a seguito della conclusione dei test da parte dell'Ente nell'ambiente di Collaudo e successivamente alla fornitura da parte dell'Ente delle risultanze delle verifiche effettuate utilizzando il tool di validazione di Piattaforma Notifiche.

Ulteriore documentazione relativa all'e-service di Piattaforma Notifiche sarà disponibile nel Catalogo API messo a disposizione da PDND Interoperabilità.
