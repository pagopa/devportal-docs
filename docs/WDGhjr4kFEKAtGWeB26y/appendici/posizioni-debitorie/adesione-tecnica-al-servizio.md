# Adesione tecnica al servizio

In attesa del servizio "Area Riservata" (rif. Circolare pagoPA Q2 2022) l'adesione tecnica al servizio sarà disponibile attraverso un Developer Portal, che permette l'ottenimento di una subscription key per interagire con il servizio.

## Subscription key

Una subscription key è una chiave che permette l'accesso determinate risorse (APIs).

Nel contesto del servizio di Gestione Posizioni Debitorie la subscription key ,oltre a concedere l'autorizzazione all'utilizzo dei metodi esposti, identifica anche il soggetto chiamante permettendo l'accesso solo alle proprie risorse.

Questo è possibile per mezzo del meccanismo di adesione in seguito indicato che associa il codice fiscale dell'Ente Creditore al soggetto richiedente la subscription key.

## Step del processo tecnico di adesione

1.  Un amministratore del servizio, a seguito di una richiesta formale di “onboarding“ ricevuta da un ente creditore manda un invito al referente che ne ha fatto richiesta, specificando

    * nome/cognome del referente.
    * email del referente.
    * un identificativo univoco per l’ente ( nello specifico il codice fiscale )

    e associandolo al prodotto di API di cui ha fatto richiesta di onboarding
2. All’ indirizzo specificato il referente riceverà una mail con un link in cui sarà richiesto di confermare l’iscrizione e di scegliere una password che dovrà poi essere usata per effettuare il login sul developer portal, al fine di richiedere e ottenere le proprie subscription keys.
3. Il referente una volta scelta la propria password potrà collegarsi al portale [https://portal.platform.pagopa.it/](https://portal.platform.pagopa.it/) (o [https://portal.uat.platform.pagopa.it/](https://portal.uat.platform.pagopa.it/) per l'ambiente di test)e nella sezioni “Products“, selezionarne uno tra quelli a lui associati, e fare richiesta di sottoscrizione , scegliendo un nome e facendo richiesta tramite il bottone “Subscribe“.  A questo punto le chiavi ottenute  non saranno ancora attive ma  in stato “submitted“ (che indica che la richiesta è in attesa di approvazione)
4. Una volta approvata la richiesta da parte di un amministratore, il referente riceverà una mail in cui verrà notificato che &#x20;
5. la sottoscrizione è stata attivata ed è pronta per essere utilizzata per i prodotti di cui ha fatto richiesta di onboarding

{% hint style="info" %}
Si parla di prodotti perché:

* il developer portal non è limitato al solo servizio di Gestione Posizioni Debitorie
* Il servizio di Gestione Posizioni Debitorie è suddiviso in "moduli" (prodotti appunto) per permettere agli aderenti di gestire al meglio le funzionalità richieste.
{% endhint %}
