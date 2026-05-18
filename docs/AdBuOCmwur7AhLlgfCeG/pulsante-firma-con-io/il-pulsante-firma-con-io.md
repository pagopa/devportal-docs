# 💡 Il Pulsante Firma con IO

## Cos’è il pulsante “Firma con IO”?

È il componente utilizzato per indirizzare l’utente verso la funzionalità di firma dell'app IO a partire da un canale messo a disposizione dall'Ente (sitoweb, app mobile ecc.).

<figure><img src="../.gitbook/assets/Screenshot 2023-04-28 alle 15.59.29.png" alt=""><figcaption></figcaption></figure>

Il flusso afferisce al prodotto Firma con IO come funzionalità che consente di firmare documenti e contratti già pre-compilati con i dati dell’utente, non consente la firma di template da compilare autonomamente in app IO. Rispetto al flusso Messaggio su IO offre una **seconda modalità di ingaggio** (dal sito dell’Ente e non tramite messaggio in app IO)

Il pulsante Firma con IO, quindi, può essere veicolato solo ad utenti già identificati (nelle aree riservate degli Enti), poiché legato ad uno **specifico codice fiscale** e ad uno specifico **dossier**. La creazione della Richiesta di Firma avviene al momento del click da parte dell’utente sul pulsante Firma con IO.

Le API di firma con IO, realizzate per il flusso messaggio, restano le stesse per entrambi i flussi. Agli Enti è però messo a disposizione anche il widget del pulsante Firma con IO

Di seguito le informazioni per integrare il pulsante Firma con IO:

### Che cos'è il pulsante Firma con IO? <a href="#differenze-con-il-flusso-standard-di-firma-con-io" id="differenze-con-il-flusso-standard-di-firma-con-io"></a>

Attraverso il pulsante Firma con IO sarà propagato un _universal link_ che consentirà:

* agli utenti che navigano da mobile e hanno installata l’app IO di risvegliare l’app e procedere con la firma.
* agli utenti che navigano da desktop di accedere ad una modale con un QR code da inquadrare con la fotocamera del proprio dispositivo per aprire l’app IO e procedere con la firma.
* agli utenti che sono registrati su IO ma non hanno l’app installata sul device di accedere alla pagina dello store dove poterla ottenere.

{% hint style="info" %}
**Ricorda di validare i documenti**

Per evitare che al click sul pulsante il flusso si interrompa a causa di problemi sui documenti caricati (es. sono stati inseriti in modo non corretto i campi firma), si consiglia di [validare sempre i documenti](../il-processo-di-firma/preparare-i-documenti/validare-i-documenti.md) da caricare tramite l'endpoint messo a disposizione.
{% endhint %}

{% content-ref url="installazione-e-uso.md" %}
[installazione-e-uso.md](installazione-e-uso.md)
{% endcontent-ref %}

{% content-ref url="linee-guida-di-utilizzo.md" %}
[linee-guida-di-utilizzo.md](linee-guida-di-utilizzo.md)
{% endcontent-ref %}

{% content-ref url="standard-grafici.md" %}
[standard-grafici.md](standard-grafici.md)
{% endcontent-ref %}
