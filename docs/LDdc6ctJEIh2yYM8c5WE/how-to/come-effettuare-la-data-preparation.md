# Come effettuare la Data Preparation

L’ambiente di attestazione si basa su dati fittizi che possono essere configurati e personalizzati da ogni fruitore in base alle proprie esigenze.

La fase di data preparation è necessaria per poter usufruire dei singoli e-service.

La personalizzazione di tali dati è permessa da quella che viene chiamata “Data Preparation”.

Ogni fruitore, per poter invocare in maniera corretta e completa gli e-service, deve effettuare innanzitutto la propria configurazione mediante l’invocazione delle api di Data Preparation.

Tali dati e informazioni sono univoci per ogni fruitore e, nello specifico, per ogni purposeId.

I dati inseriti non hanno una scadenza. Pertanto una volta fatta la prima configurazione è possibile far riferimento ad essa per tutte le successive invocazione. L’eventuale rimozione dei dati può essere fatta utilizzato le API previste dalla Data Preparation.

Gli e-service che prevedono tale tipo di configurazione sono i seguenti:

* Check Id Subject
* Check Organization Id
* Check Digital Address
* Check Address

Vediamo i passaggi per creare ognuno di essi

## Step 1: Creazione Dati &#x20;

`POST /{baseUrl}/data-preparation`

L’api di creazione permette di effettuare la configurazione dei dati.

L’invocazione di esso è dunque essenziale per poter effettuare un corretto setup del servizio in base alle proprie esigenze.

È possibile effettuare più invocazioni di tale API in modo da creare, a esempio più entità.

Si rimanda al paragrafo[ ](https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#4.-Casi-d%E2%80%99uso)[TUTORIAL ](broken-reference)per un esempio concreto di data preparation.&#x20;

## Step 2: Recupero Dati

`GET /{baseUrl}/data-preparation`

L’api permette di recuperare tutte le configurazioni fatte.

Si tratta, dunque, di un metodo di verifica a uso del fruitore. Può essere invocato a seconda delle esigenze per analisi interne sulla configurazione effettuata sino a quelo momento.

## Step 3: Cancellazione dati massiva

`DELETE/{baseUrl}/data-preparation`

L’api permette di effettuare una cancellazione di tutti i dati configurati sino a quel momento.

## Step 4: Cancellazione dati puntuale

`POST /{baseUrl}/data-preparation/remove`

L’api permette di effettuare una cancellazione puntuale di un dato.

Nello specifico, viene effettuata una rimozione fisica del dato indicato all’interno del body della richiesta.

Per ogni e-eservice è prevista una chiave univoca che identifica l’entità (può ad esempio essere l’id del soggetto nel caso di e-service “check Id Subject)

## Step 5: Invio Certificato

`POST /{baseUrl}/data-preparation/handshake`

Questa API non è prevista da tutti gli e-service, ma solo da quelli che prevedono un meccanismo di sicurezza aggiuntivo oltre quelli già previsti da PDND Interoperabilità.

Ogni erogatore può infatti aggiungere ulteriori livelli di sicurezza sui propri servizi.

Per questi è dunque prevista una fase di configurazione e scambio di tali informazioni in modo da poter garantire la corretta invocazione di tutto il flusso previsto dal servizio.

Si rimanda al paragrafo [TUTORIAL ](broken-reference)per un esempio concreto.

Si ricorda che l’ambiente di attestazione è un ambiente di simulazione per cui i dati utilizzati in tutte le fasi non devono essere reali.

\


\
