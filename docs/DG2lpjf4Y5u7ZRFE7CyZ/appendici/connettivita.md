# Connettività

Un soggetto che intenda interagire nel sistema pagoPA, può attivare e gestire una connessione diretta con la piattaforma pagoPA. Con il termine “connessione diretta” si intende l’insieme dei collegamenti ridondati tra un sito primario e uno secondario (da attivarsi in caso di disaster recovery) del soggetto direttamente connesso ai corrispondenti siti primario e secondario con i quali la piattaforma pagoPA eroga i servizi. Il dimensionamento della connessione diretta è stabilita dal soggetto che intende connettersi direttamente, nel rispetto di requisiti di disponibilità, performance e sicurezza indicati nel presente documento.

La piattaforma pagoPA è raggiungibile di default da rete Internet.

In ogni caso il soggetto che intende connettersi direttamente (in qualsiasi modalità lo faccia) deve garantire l’utilizzo di connettività ridondata ad alte prestazioni sia per il sito primario che per il secondario dedicato al disaster recovery.

## Connessione a pagoPA mediante rete Internet&#x20;

Un soggetto può connettersi direttamente alla piattaforma pagoPA usufruendo della connettività mediante rete Internet, nel rispetto dei seguenti vincoli:

* utilizzo del protocollo di trasporto https con canale cifrato e autenticato mediante Transport Layer Security (TLS) versione 1.2 o superiore, abilitando la mutua autenticazione tra le parti (client-authentication) per quanto riguarda la connettività in uscita dal Nodo dei Pagamenti e utilizzando una api-key per quanto riguarda la connettività in ingresso nel Nodo dei Pagamenti A tal fine è obbligatorio l’utilizzo di certificati digitali x.509 per la creazione del canale TLS. Si fa presente che nel sistema pagoPA il soggetto direttamente connesso sarà autenticato da parte della piattaforma pagoPA sia in fase di ricezione delle richieste (api-key), sia in fase di spedizione delle stesse (server-authentication);
* utilizzo di una connessione adeguata a supportare il rispetto dei LdS attesi considerando il volume di transazioni che il soggetto prevede di realizzare.

![](../.gitbook/assets/connettività.png)

## Procedura di attivazione della connessione

### Nodo dei pagamenti server

Le nuove adesioni avverranno attraverso la generazione delle api-key sul portale BackOffice pagoPA, a cui è possibile accedere mediante [Area Riservata PagoPA](https://selfcare.pagopa.it/), per tutte le informazioni relative al processo di adesione all’Area Riservata PagoPA è possibile fare riferimento al seguente link: [Area Riservata-Come Aderire](https://docs.pagopa.it/area-riservata/area-riservata/come-aderire).&#x20;

La procedura completa per l’ottenimento delle api-key è descritta nei manuali operativi BackOffice-pagoPA dedicati agli Enti Creditori ai PSP e i Partner Tecnologici.

La procedura all’interno dei manuali è valida per tutti gli ambienti del sistema pagoPA (test e produzione).

Una volta generate, le api-key sono rese disponibili sul portale BackOffice paogPA, è onere del richiedente gestire le chiavi secondo le best practice e non divulgare le stesse, in caso di ipotesi di furto o compromissione è necessario rigenerarle immediatamente.

Le api-key non hanno scadenza e sono entrambe valide, di norma viene utilizzata sempre quella primaria, la secondaria può tornare utile nel caso in cui sia necessario, per motivi specifici legati alla sicurezza, procedere alla rigenerazione della chiave primaria.

La chiave deve essere passata in input in tutte le chiamate che il client fa verso la piattaforma pagoPA mediante la valorizzazione dell'header HTTP `Ocp-Apim-Subscription-Key`, in caso di mancata valorizzazione dell'header HTTP o in caso di chiave errata o non più valida l'APIM risponderà con un errore http 401.

La procedura di attivazione si conclude con la verifica della reciproca raggiungibilità dei sistemi.

### Nodo dei pagamenti client

La procedura di seguito descritta è valida per tutti gli ambienti del sistema pagoPA (test e produzione):

1. il soggetto che intende connettersi direttamente alla piattaforma pagoPA, deve dotarsi di un certificato digitale x.509 emesso da una Certification Authority che compaia fra i membri del CA/Browser Forum ([https://cabforum.org/members/](https://cabforum.org/members/)). È facoltà della PagoPA S.p.A. autorizzare la connessione utilizzando un certificato emesso da differente CA e autorizzare la connessione all’ambiente di test esterno utilizzando altro tipo di certificato;
2. il campo Subject di ogni certificato deve contenere un CN coerente con l'FQDN della URL del servizio che intende esporre;
3. deve essere fornita, per opportuna configurazione nell’infrastruttura del sistema pagoPA, la URL del servizio applicativo che si intende esporre e che deve rispettare il formato  \<PROTOCOL>://\<FQDN>:\<PORT>/\<CONTEXT\_PATH> esempio https://myservice.subservice.it:443//context/subcontext, l'FQDN deve coincidere con il CN specificato al punto 2;
4. il sistema pagoPA, nello stabilire la connessione verso il soggetto interessato, abilita la mutua autenticazione (mTLS), il soggetto potrà scaricare pubblicamente il certificato digitale x.509 della piattaforma ai seguenti link:

* test:[ https://raw.githubusercontent.com/pagopa/pagopa-node-forwarder/main/certs/forwarder.uat.platform.pagopa.it.pem](https://raw.githubusercontent.com/pagopa/pagopa-node-forwarder/main/certs/forwarder.uat.platform.pagopa.it.pem)​
* produzione:[ https://raw.githubusercontent.com/pagopa/pagopa-node-forwarder/main/certs/forwarder.platform.pagopa.it.pem](https://raw.githubusercontent.com/pagopa/pagopa-node-forwarder/main/certs/forwarder.platform.pagopa.it.pem)​

La procedura di attivazione si conclude con la verifica della reciproca raggiungibilità dei sistemi.

\
