# Connettività

Un soggetto che intenda interagire nel sistema pagoPA, può attivare e gestire una connessione diretta con la piattaforma pagoPA. Con il termine “connessione diretta” si intende l’insieme dei collegamenti ridondati fra un sito primario e uno secondario (da attivarsi in caso di disaster recovery) del soggetto direttamente connesso ai corrispondenti siti primario e secondario con i quali la piattaforma pagoPA eroga i servizi. Il dimensionamento della connessione diretta è stabilita dal soggetto che intende connettersi direttamente, nel rispetto di requisiti di disponibilità, performance e sicurezza indicati nel presente documento.&#x20;

La piattaforma pagoPA è raggiungibile di default da rete Internet.

In ogni caso il soggetto che intende connettersi direttamente (in qualsiasi modalità lo faccia) deve garantire l’utilizzo di connettività ridondata ad alte prestazioni sia per il sito primario che per il secondario dedicato al disaster recovery.&#x20;

## Connessione a pagoPA mediante rete Internet&#x20;

Un soggetto può connettersi direttamente alla piattaforma pagoPA usufruendo della connettività mediante rete Internet, nel rispetto dei seguenti vincoli:&#x20;

* utilizzo del protocollo di trasporto https con canale cifrato e autenticato mediante Transport Layer Security (TLS) versione 1.2 o superiore, abilitando la mutua autenticazione tra le parti (client-authentication) per quanto riguarda la connettività in uscita dal Nodo dei Pagamenti e utilizzando una api-key per quanto riguarda la connettività in ingresso nel Nodo dei Pagamenti A tal fine è obbligatorio l’utilizzo di certificati digitali x.509 per la creazione del canale TLS. Si fa presente che nel Sistema pagoPA il soggetto direttamente connesso sarà autenticato da parte della piattaforma pagoPA sia in fase di ricezione delle richieste (api-key), sia in fase di spedizione delle stesse (server-authentication);
* utilizzo di una connessione adeguata a supportare il rispetto dei LdS attesi considerando il volume di transazioni che il soggetto prevede di realizzare.



![](../.gitbook/assets/connettività.png)

## Procedura di attivazione della connessione

### Nodo dei pagamenti server

Le nuove adesioni, prima della introduzione di Area Riservata, verranno effettuate per mezzo del Developer Portal.

La procedura di seguito descritta è valida per tutti gli ambienti del sistema pagoPA (test e produzione):

1.  Un amministratore del servizio, a seguito di una richiesta formale di “onboarding“ ricevuta da un soggetto che intende connettersi direttamente, manda un invito al referente che ne ha fatto richiesta, specificando

    * nome/cognome del referente
    * email del referente

    e associandolo al prodotto di API di cui ha fatto richiesta di onboarding;
2. all’ indirizzo specificato il referente riceverà una mail con un link in cui sarà richiesto di confermare l’iscrizione e di scegliere una password che dovrà poi essere usata per effettuare il login sul developer portal, al fine di richiedere e ottenere le proprie subscription keys;
3. il referente una volta scelta la propria password potrà collegarsi al portale [https://portal.platform.pagopa.it/](https://portal.platform.pagopa.it/) (o [https://portal.uat.platform.pagopa.it/](https://portal.uat.platform.pagopa.it/) per l'ambiente di test) e nella sezioni “Products“, selezionarne uno tra quelli a lui associati, e fare richiesta di sottoscrizione , scegliendo un nome e facendo richiesta tramite il bottone “Subscribe“.  A questo punto le chiavi ottenute  non saranno ancora attive ma  in stato “submitted“ (che indica che la richiesta è in attesa di approvazione);
4. una volta approvata la richiesta da parte di un amministratore, il referente riceverà una mail in cui verrà notificato che  la sottoscrizione è stata attivata ed è pronta per essere utilizzata per i prodotti di cui ha fatto richiesta di onboarding.

In fase di avvio della procedura di attivazione saranno rese disponibili al soggetto che intende connettersi direttamente una coppia di chiavi (api-key), é onere del richiedente custodire e gestire le chiavi secondo le best practice e non divulgare le stesse, in caso di ipotesi di furto o compromissione è necessario revocare immediatamente le chiavi dallo stesso portale e notificare ai referenti PagoPA.

Le api-key non hanno scadenza e sono entrambe valide, di norma viene utilizzata sempre quella primaria, la secondaria può tornare utile nel caso in cui sia necessario, per motivi specifici legati alla sicurezza, procedere alla rigenerazione della chiave primaria.

La chiave deve essere passata in input in tutte le chiamate SOAP o Rest che il client fa verso la piattaforma pagoPA mediante la valorizzazione dell'header HTTP `Ocp-Apim-Subscription-Key`, in caso di mancata valorizzazione dell'header HTTP o in caso di chiave errata o non più valida l'APIM risponderà con un errore http 401.

La procedura di attivazione si conclude con la verifica della reciproca raggiungibilità dei sistemi.

### Nodo dei pagamenti client

La procedura di seguito descritta è valida per tutti gli ambienti del sistema pagoPA (test e produzione):

1. il soggetto che intende connettersi direttamente alla piattaforma pagoPA, deve dotarsi di un certificato digitale x.509 emesso da una _Certification Authority_ che compaia fra i membri del CA/Browser Forum ([https://cabforum.org/members/](https://cabforum.org/members/)). È facoltà della PagoPA S.p.A. autorizzare la connessione utilizzando un certificato emesso da differente CA e autorizzare la connessione all’ambiente di test esterno utilizzando altro tipo di certificato;
2. il campo _Subject_ di ogni certificato deve contenere un CN coerente con l'FQDN della URL del servizio che intende esporre;
3. deve essere fornita, per opportuna configurazione nell’infrastruttura del sistema pagoPA, la URL del servizio applicativo che si intende esporre nel formato: _https://FQDN/nomeservizio_. \
   L'FQDN deve coincidere con il CN specificato al punto 2;
4. il sistema pagoPA, nello stabilire la connessione verso il soggetto interessato, abilita la mutua autenticazione (mTLS), il soggetto potrà scaricare pubblicamente il certificato digitale x.509 della piattaforma ai seguenti link:
   * _test_: [https://raw.githubusercontent.com/pagopa/pagopa-node-forwarder/main/certs/forwarder.uat.platform.pagopa.it.pem](https://raw.githubusercontent.com/pagopa/pagopa-node-forwarder/main/certs/forwarder.uat.platform.pagopa.it.pemhttps://raw.githubusercontent.com/pagopa/pagopa-node-forwarder/main/certs/forwarder.prod.platform.pagopa.it.pem)
   * _produzione_: [https://raw.githubusercontent.com/pagopa/pagopa-node-forwarder/main/certs/forwarder.prod.platform.pagopa.it.pem](https://raw.githubusercontent.com/pagopa/pagopa-node-forwarder/main/certs/forwarder.uat.platform.pagopa.it.pemhttps://raw.githubusercontent.com/pagopa/pagopa-node-forwarder/main/certs/forwarder.prod.platform.pagopa.it.pem)
5. come ulteriore livello di protezione, PagoPA può fornire gli indirizzi IP pubblici di ingresso e uscita della propria infrastruttura al fine di consentirne l'inserimento in whitelist;

La procedura di attivazione si conclude con la verifica della reciproca raggiungibilità dei sistemi.
