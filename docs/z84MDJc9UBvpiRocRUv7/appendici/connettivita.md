# Connettività

Un soggetto che intenda interagire nel sistema pagoPA, può attivare e gestire una connessione diretta con la piattaforma pagoPA. Con il termine “connessione diretta” si intende l’insieme dei collegamenti ridondati fra un sito primario e uno secondario (da attivarsi in caso di disaster recovery) del soggetto direttamente connesso ai corrispondenti siti primario e secondario con i quali la piattaforma pagoPA eroga i servizi. Il dimensionamento della connessione diretta è stabilita dal soggetto che intende connettersi direttamente, nel rispetto di requisiti di disponibilità, performance e sicurezza indicati nel presente documento.&#x20;

La piattaforma pagoPA è raggiungibile di default da rete Internet.

In ogni caso il soggetto che intende connettersi direttamente (in qualsiasi modalità lo faccia) deve garantire l’utilizzo di connettività ridondata ad alte prestazioni sia per il sito primario che per il secondario dedicato al disaster recovery.&#x20;

## Connessione a pagoPA mediante rete Internet&#x20;

Un soggetto può connettersi direttamente alla piattaforma pagoPA usufruendo della connettività mediante rete Internet, nel rispetto dei seguenti vincoli:&#x20;

* utilizzo del protocollo di trasporto https con canale cifrato e autenticato mediante Transport Layer Security (TLS) versione 1.2 o superiore, abilitando la mutua autenticazione tra le parti (client-authentication). A tal fine è obbligatorio l’utilizzo di certificati digitali x.509 per la creazione del canale TLS. Si fa presente che nel Sistema pagoPA il soggetto direttamente connesso sarà autenticato da parte della piattaforma pagoPA sia in fase di ricezione delle richieste (clientauthentication), sia in fase di spedizione delle stesse (server-authentication);
* utilizzo di una connessione adeguata a supportare il rispetto dei LdS attesi considerando il volume di transazioni che il soggetto prevede di realizzare.

## Procedura di attivazione della connessione

La procedura è identica per la connessione a ogni ambiente del sistema pagoPA: sito di test esterno, sito primario di produzione, sito secondario di disaster recovery:

1. il soggetto che intende connettersi direttamente alla piattaforma pagoPA deve dotarsi di un certificato digitale X509 emesso da una Certification Authority che compaia fra i membri del CA/Browser Forum ([https://cabforum.org/members/](https://cabforum.org/members/)). È facoltà della PagoPA S.p.A. autorizzare la connessione utilizzando un certificato emesso da differente CA e autorizzare la connessione all’ambiente di test esterno utilizzando altro tipo di certificato;
2. il campo “Subject” di ogni certificato deve contenere un CN coerente con il FQDN della URL del servizio che intende esporre;
3. il Referente Tecnico del soggetto che intende connettersi direttamente, attraverso il PdA fornirà i certificati digitali tramite apposita funzione di uploading;
4. devono essere fornite, per le opportune configurazioni nell’infrastruttura del sistema pagoPA, le seguenti informazioni:&#x20;
   * indirizzo IP e porta di esposizione dei web services esposti dal soggetto che intende connettersi direttamente;&#x20;
   * url del servizio applicativo che si intende esporre nel formato: https://FQDN/nomeservizio. Lo FQDN deve coincidere con il CN specificato al precedente 2).&#x20;

In fase di avvio della procedura di attivazione, saranno rese disponibili al soggetto che intende connettersi direttamente le seguenti informazioni: &#x20;

* indirizzo IP e porta di esposizione dei web services esposti dalla piattaforma pagoPA; &#x20;
* certificato digitale X509 della piattaforma pagoPA. La procedura di attivazione si conclude con la verifica della reciproca raggiungibilità dei sistemi.
