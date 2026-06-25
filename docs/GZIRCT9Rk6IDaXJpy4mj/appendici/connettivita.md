# Connettività

Un soggetto che intenda interagire nel sistema pagoPA, può attivare e gestire una connessione diretta con la piattaforma pagoPA. Con il termine “connessione diretta” si intende l’insieme dei collegamenti ridondati fra un sito primario e uno secondario (da attivarsi in caso di disaster recovery) del soggetto direttamente connesso ai corrispondenti siti primario e secondario con i quali la piattaforma pagoPA eroga i servizi. Il dimensionamento della connessione diretta è stabilita dal soggetto che intende connettersi direttamente, nel rispetto di requisiti di disponibilità, performance e sicurezza indicati nel presente documento.&#x20;

La piattaforma pagoPA è raggiungibile di default da rete Internet.

In ogni caso il soggetto che intende connettersi direttamente (in qualsiasi modalità lo faccia) deve garantire l’utilizzo di connettività ridondata ad alte prestazioni sia per il sito primario che per il secondario dedicato al disaster recovery.&#x20;

## Connessione a pagoPA mediante rete Internet&#x20;

Un soggetto può connettersi direttamente alla piattaforma pagoPA usufruendo della connettività mediante rete Internet, nel rispetto dei seguenti vincoli:&#x20;

* utilizzo del protocollo di trasporto https con canale cifrato e autenticato mediante Transport Layer Security (TLS) versione 1.2 o superiore, abilitando la mutua autenticazione tra le parti (client-authentication) per quanto riguarda la connettività in uscita dal Nodo dei Pagamenti e utilizzando una api-key per quanto riguarda la connettività in ingresso nel Nodo dei Pagamenti A tal fine è obbligatorio l’utilizzo di certificati digitali x.509 per la creazione del canale TLS. Si fa presente che nel Sistema pagoPA il soggetto direttamente connesso sarà autenticato da parte della piattaforma pagoPA sia in fase di ricezione delle richieste (api-key), sia in fase di spedizione delle stesse (server-authentication);
* utilizzo di una connessione adeguata a supportare il rispetto dei LdS attesi considerando il volume di transazioni che il soggetto prevede di realizzare.



![](../.gitbook/assets/connettività.png)

## Procedura di attivazione della connessione

### Nodo dei pagamenti server

Le nuove adesioni, prima della introduzione di Area Riservata, verranno effettuate per mezzo del Developer Portal.

La procedura è identica per la connessione a ogni ambiente del sistema pagoPA, sito di test esterno, sito primario di produzione, sito secondario di disaster recovery:

1.  Un amministratore del servizio, a seguito di una richiesta formale di “onboarding“ ricevuta da un soggetto che intende connettersi direttamente, manda un invito al referente che ne ha fatto richiesta, specificando

    * nome/cognome del referente
    * email del referente

    e associandolo al prodotto di API di cui ha fatto richiesta di onboarding;
2. all’ indirizzo specificato il referente riceverà una mail con un link in cui sarà richiesto di confermare l’iscrizione e di scegliere una password che dovrà poi essere usata per effettuare il login sul developer portal, al fine di richiedere e ottenere le proprie subscription keys;
3. il referente una volta scelta la propria password potrà collegarsi al portale [https://portal.platform.pagopa.it/](https://portal.platform.pagopa.it/) (o [https://portal.uat.platform.pagopa.it/](https://portal.uat.platform.pagopa.it/) per l'ambiente di test) e nella sezioni “Products“, selezionarne uno tra quelli a lui associati, e fare richiesta di sottoscrizione , scegliendo un nome e facendo richiesta tramite il bottone “Subscribe“.  A questo punto le chiavi ottenute  non saranno ancora attive ma  in stato “submitted“ (che indica che la richiesta è in attesa di approvazione);
4. una volta approvata la richiesta da parte di un amministratore, il referente riceverà una mail in cui verrà notificato che  la sottoscrizione è stata attivata ed è pronta per essere utilizzata per i prodotti di cui ha fatto richiesta di onboarding.

In fase di avvio della procedura di attivazione, saranno quindi rese disponibili al soggetto che intende connettersi direttamente una coppia di chiavi (api-key).

La procedura di attivazione si conclude con la verifica della reciproca raggiungibilità dei sistemi.

### Nodo dei pagamenti client

La procedura è identica per la connessione a ogni ambiente del sistema pagoPA, sito di test esterno, sito primario di produzione, sito secondario di disaster recovery:

1. il soggetto che intende connettersi direttamente alla piattaforma pagoPA deve dotarsi di un certificato digitale X509 emesso da una Certification Authority che compaia fra i membri del CA/Browser Forum ([https://cabforum.org/members/](https://cabforum.org/members/)). È facoltà della PagoPA S.p.A. autorizzare la connessione utilizzando un certificato emesso da differente CA e autorizzare la connessione all’ambiente di test esterno utilizzando altro tipo di certificato;
2. il campo “Subject” di ogni certificato deve contenere un CN coerente con il FQDN della URL del servizio che intende esporre;
3. devono essere fornite, per le opportune configurazioni nell’infrastruttura del sistema pagoPA, le seguenti informazioni:&#x20;
   * indirizzo IP e porta di esposizione dei web services esposti dal soggetto che intende connettersi direttamente;&#x20;
   * url del servizio applicativo che si intende esporre nel formato: https://FQDN/nomeservizio. Lo FQDN deve coincidere con il CN specificato al precedente 2).&#x20;

In fase di avvio della procedura di attivazione, sarà reso disponibile al soggetto che intende connettersi direttamente un certificato digitale X509 della piattaforma pagoPA.&#x20;

La procedura di attivazione si conclude con la verifica della reciproca raggiungibilità dei sistemi.
