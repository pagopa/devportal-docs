# Come migrare alla Nuova Connettività

### Introduzione

La migrazione verso la cosiddetta **Nuova Connettività** nasce dall’esigenza di superare l'attuale sistema di interconnessione basato sull’uso delle Porte di Dominio (PdD, PddE) e GAD in favore di una connettività Internet (HTTP over TLS 1.2). Questo vale sia per le comunicazioni in ingresso che in uscita.

Infatti, le attuali API di comunicazione con il Nodo dei Pagamenti sono veicolate tramite vari oggetti che presentano dei limiti e **non sono adeguati alle Linee Guida (LLGG) di AgID** in termini di interoperabilità (nello specifico: PdD, PddE, GAD). Inoltre, le informazioni di autenticazione sono trasmesse nel body di ogni chiamata SOAP aumentando i rischi rispetto alla sicurezza.

Infine, lasciare le PdD/PddE oltre a non risultare conforme alle nuove LLGG AgID, in termini di interoperabilità, implica maggiori costi di manutenzione sia per PagoPA che per gli EC/PSP dovuti alla complessità di questi sistemi.

Al fine di razionalizzare la migrazione verso la Nuova Connettività sono stati identificati tre (3) casi d’uso:

<table><thead><tr><th>Caso d’Uso (Pagamento Avviso)</th><th width="271.3333333333333">Tipo di Connettività Richiesta</th><th>Note</th></tr></thead><tbody><tr><td>Pagamento di un Avviso presso PSP</td><td>Connettività in ingresso verso pagoPA</td><td>Precedentemente definito modello 3 </td></tr><tr><td>Pagamento da touchpoint PagoPA</td><td>Connettività in uscita da PagoPA</td><td>Precedentemente definito modello 1</td></tr><tr><td>Pagamento presso frontend dell’EC</td><td>Connettività sia in ingresso che in uscita per e da PagoPA</td><td>Precedentemente definito modello 1</td></tr></tbody></table>

{% hint style="info" %}
In base al/ai caso/i d’uso di interesse bisognerà procedere a migrare il tipo di connessione richiesta.
{% endhint %}

### Tutorial&#x20;

In questo tutorial vedremo passo dopo passo tutto ciò che occorre fare per implementare questa migrazione.&#x20;

{% hint style="info" %}
&#x20;I passi riportati di seguito sono necessari sia per l’accesso alla Nuova Connettività in ambiente di Collaudo che di Produzione
{% endhint %}

#### Connettività in Ingresso

{% hint style="info" %}
Per connettività in ingresso si intende il traffico generato dall’EC/PSP verso PagoPA.
{% endhint %}

1.  **Registrazione su pagoPA Platform (opzionale):** se non si dispone ancora di una utenza  **pagoPA** Platform. La registrazione può essere seguita online via browser accedendo alla URL del portale stesso, in base all’ambiente di interesse (Collaudo e/o Produzione), e selezionando la voce **Sign Up**.  In fase di registrazione verranno chieste le seguenti informazioni (tutte mandatorie):\
    email; Password; Nome; Cognome. La registrazione si perfeziona inserendo correttamente una CAPTCHA di verifica e con l’Accettazione dei termini d’uso.\


    {% hint style="info" %}
    La password dovrà essere inserita due volte per evitare eventuali typo in fase di inserimento.
    {% endhint %}

    \
    Conclusa con successo la fase di inserimento dati, il sistema invierà automaticamente un messaggio, per la validazione della casella di posta elettronica dichiarata contenente le istruzioni per perfezionare  la registrazione.\


    {% hint style="info" %}
    Per la registrazione su pagoPA Platform di Produzione è necessario autenticarsi tramite SPID.
    {% endhint %}



    {% hint style="info" %}
    L’accesso alla pagoPA Platform di Produzione di regola viene concesso solo alla conclusione positiva dei test nell’ambiente di Collaudo.
    {% endhint %}


2. **Accesso alla pagoPA Platform:** accedere alla pagoPA Platform dell’ambiente che si intende configurare con le credenziali registrate.



1. **Sottoscrizione alla Nuova Connettività**: nel menù che si presenta in alto a destra bisogna accedere alla voce Products e scegliere tra i prodotti proposti **Nodo dei Pagamenti (Nuova Connettività).** Una volta fatta questa scelta sarà possibile sottoscrivere la connettività attraverso i seguenti passaggi:
   1. Inserire nella textbox riportante il messaggio Your new product description name il nome che si intende dare alla connettività stessa (si consiglia di seguire una nomenclatura del tipo NC\<nomePSP/EC>\<UAT/Prod> come, per esempio, NCBestPSPEverUAT)
   2. Confermare con il bottone Subscribe .
   3. Attendere il messaggio di conferma della corretta attivazione della sottoscrizione.
   4. La sottoscrizione appena confermata sarà elencata sotto la voce Profile del menu.\
      \

2. **Accesso e Gestione delle Chiave Primaria e Secondaria:**\
   Le funzioni disponibili per ogni sottoscrizione sono:
   1. show: per visualizzare le singole chiavi
   2. regenerate: nel caso si voglia generare nuovamente le chiavi.\

3.  **Utilizzo Chiavi di Sottoscrizione:** una volta ottenute le chiavi è necessario modificare il proprio software applicativo affinché  nell’header delle richieste SOAP/REST, sia settato **Ocp-Apim-Subscription-Key** con il valore della primary o secondary key generate attraverso il Developer Portal. \
    Il parametro **Ocp-Apim-Subscription-Key** deve essere inserito nell’header di tutte le chiamate SOAP o Rest che il client fa verso la piattaforma PagoPA. In caso di mancata valorizzazione dell'header HTTP o in caso di chiave errata o non più valida l'APIM risponderà con un errore HTTP 401 (Unauthorized).



    {% hint style="info" %}
    L’endpoint da utilizzare, dipende dall’ambiente utilizzato
    {% endhint %}

| Ambiente       | Endpoint                                      |
| -------------- | --------------------------------------------- |
| Collaudo (UAT) | https://api.uat.platform.pagopa.it/nodo-auth/ |
| Produzione     | https://api.platform.pagopa.it/nodo-auth/     |

6.  **Configurazione certificato lato Client:** il **soggetto** che intende connettersi direttamente alla piattaforma pagoPA, deve dotarsi di un **certificato digitale x.509** emesso da una **Certification Authority** che compaia fra i membri del **CA/Browser Forum**. È facoltà della PagoPA S.p.A. autorizzare la connessione utilizzando un certificato emesso da differente CA e autorizzare la connessione all’ambiente di test esterno utilizzando altro tipo di certificato.


7. **Richiesta configurazione Partner:** l’attivazione della connessione deve essere richiesta a pagoPA tramite mail. In seguito tale richiesta PagoPA contatterà il Partner per raccogliere le informazioni necessarie alla corretta configurazione.

#### Connettività in Uscita

{% hint style="info" %}
&#x20;Per connettività in uscita si intende il traffico generato da pagoPA verso il soggetto partner (EC/PSP).
{% endhint %}

1.  **Download certificato PagoPA e configurazione**: scaricare il certificato pubblico messo a disposizione da PagoPA tramite le SANP e abilitare la mutua autenticazione.\
    I certificati sono pubblicati sul repository GitHub di PagoPA.\
    \


    {% hint style="info" %}
    L’utilizzo di whitelist per gli indirizzi IP è fortemente sconsigliato per la necessità di allineare tale lista ad ogni aggiornamento.
    {% endhint %}


2.  **Richiesta configurazione Partner:** al fine di perfezionare la connettività è cura del richiedente richiedere via email l’attivazione della connettività stessa. In seguito alla richiesta formale PagoPA contatterà il Partner per richiedere una serie di informazioni necessarie alla corretta configurazione. Le informazioni da fornire sono (tutti mandatori):\
    URL servizio (url della RT), URL Modello 3 (URL  dove sono esposti i metodi paVerifyPaymentNotice, paGetPayment, paSendRT), URL  di redirect.\


    {% hint style="info" %}
    Si noti che è responsabilità del richiedente garantire che il servizio esposto per PagoPA sia correttamente dimensionato rispetto al numero delle richieste stimate e adeguatamente  ridondato per la gestione dei possibili picchi.
    {% endhint %}



#### Frequently Asked Questions (FAQ)

1. **Una chiave di sottoscrizione ha una durata temporale predefinita?**\
   Attualmente le chiavi non hanno scadenza, ma per motivi di sicurezza si consiglia una loro rigenerazione e aggiornamento periodico.\

2. **Errore 401 durante l’esecuzione delle chiamate (Connettività in Ingresso)**\
   Se si presenta questo errore bisogna verificare che la chiave di autorizzazione che si sta utilizzando sia corretta e ancora attiva. In caso contrario potrebbe essere necessario procedere ad una rigenerazione della stessa.\

3. **Noi come PSS/EC abbiamo la necessità di aggiungere i server di PagoPA nella nostra whitelist. Quali sono gli IP?**\
   In generale PagoPA sconsiglia di utilizzare whitelist per gli indirizzi IP, questo perché essendo in cloud non è possibile garantire che gli stessi non varino. Pertanto, se è fondamentale usare una whitelist, è necessario verificare che l’indirizzo sia ancora valido e predisporre dei controlli periodici.

### Riferimenti utili

* **Developer Portal:**
  * [Collaudo (UAT)](https://portal.uat.platform.pagopa.it/)&#x20;
  * [Produzione](https://selfcare.pagopa.it/auth/login?onSuccess=dashboard)
* [Repository GitHub di PagoPA (Chiavi Pubbliche Nodo Client):](https://github.com/pagopa/pagopa-node-forwarder/)
* [CA/Browser Forum](https://cabforum.org/members/)
* [Checklist](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F0daUnj7noyDC76EK6Bii%2Fuploads%2FT5MievQUDpHih5uy2zZx%2FChecklist\_Migrazione\_alla\_nuova\_connettivita.pdf?alt=media\&token=dc5cb275-7551-44ab-be1a-7c17ca50ada8)
