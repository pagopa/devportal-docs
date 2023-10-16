# Le tipologie di servizio

## Servizi standard e speciali&#x20;

I servizi di IO possono essere di due tipi: **standard** o **speciali**. Gli enti possono scegliere quale dei due utilizzare a seconda delle proprie esigenze.

### Servizi standard&#x20;

I servizi standard possono sfruttare tutte le funzionalità previste da IO. Lo stato della comunicazione di questo tipo di servizi segue la configurazione generale (rapida o manuale) o può essere gestito servizio per servizio nella relativa scheda.

{% hint style="info" %}
Trovi maggiori informazioni sulle due modalità di configurazione al paragrafo "Cosa possono fare i cittadini con i servizi in IO?" nella sezione [**Chi sono i destinatari dei servizi su** **IO**](../gli-attori-di-io/chi-sono-i-destinatari-dei-servizi-su-io.md).
{% endhint %}

### Servizi speciali

Rispetto ai servizi standard, quelli speciali prevedono un **flusso di iscrizione ad hoc da parte dell'utente**. L'utente può iscriversi tramite un pulsante presente all'interno della scheda servizio o tramite un canale terzo, ad esempio il sito dell'ente o della singola iniziativa.

Iscriversi a questi servizi comporta l'attivazione "automatica" dell'opzione "Contattarti in app". Questa infatti è considerata una componente necessaria per il corretto utilizzo del servizio e quindi non è disattivabile, a prescindere dalla configurazione generale scelta dall'utente. Viceversa, la disiscrizione dal servizio permette di nuovo di gestire manualmente l'opzione "Contattarti in app".&#x20;

{% hint style="info" %}
**Un esempio: la Carta Giovani Nazionale**

La Carta Giovani Nazionale è un servizio speciale. All'interno della sua scheda si trova il pulsante "Richiedi CGN". Una volta richiesta e ottenuta la CGN, l'opzione "Contattarti in app" si attiva in automatico e il pulsante della scheda servizio diventa "Disattiva la carta". Da quel momento, l'opzione "Contattarti in app" non può essere disattivata se non disattivando la carta.
{% endhint %}

Una volta pubblicati, tutti i servizi sono visibili nella sezione "Servizi" di IO come voci delle liste dei servizi Nazionali o dei servizi Locali e sono associati al nome dell'ente che li eroga. Premendo sul nome di un servizio, l'utente visualizza la scheda servizio, dove sono esposte le informazioni sul servizio e si può gestirne la comunicazione.

<figure><img src="../.gitbook/assets/servizi.png" alt=""><figcaption><p>La sezione Servizi dell'app</p></figcaption></figure>

[<mark style="color:blue;">**Per scoprire come creare un servizio, leggi la guida tecnica -->**</mark>](http://127.0.0.1:5000/s/coSKRte21UjDBRWKLtEs/funzionalita/creare-un-servizio)&#x20;

## Le preferenze dei cittadini

Nella sezione "Preferenze" dell'app, i cittadini possono personalizzare alcune preferenze che hanno un impatto su quali servizi possono inviargli comunicazioni e come. Vediamole insieme.

### Le due tipologie di configurazioni

Un servizio può contattare un utente solo se questo ha dichiarato di voler ricevere comunicazioni dallo stesso. Questa preferenza può essere espressa in due modi:

* **al primo accesso o dalla sezione Profilo>Preferenze di IO**, selezionando la configurazione rapida che prevede di attivare la comunicazione di tutti i servizi di IO, presenti e futuri;
* **dalla scheda di ogni servizio**, attivando l'opzione "Contattarti in app" alla voce "Questo servizio può".

Se l'utente ha selezionato la configurazione manuale o non ha attivato l'opzione "Contattarti in app" di un servizio, questo non potrà inviargli messaggi.&#x20;

{% hint style="info" %}
L'ente può **conoscere lo stato di attivazione** del servizio invocando l'apposita [API](http://127.0.0.1:5000/s/coSKRte21UjDBRWKLtEs/api/api-messaggi/get-a-user-profile-using-post).
{% endhint %}

### Le notifiche push&#x20;

L'invio di un messaggio scatena la ricezione di una notifica push sul dispositivo dell'utente. L'attivazione delle notifiche push può avvenire in due modi:&#x20;

* **a livello generale**, attivando l'opzione di notifica push per l'app IO dalle impostazioni del proprio dispositivo
* **dalla scheda di ogni servizio**, attivando l'opzione "Inviarti notifiche push" alla voce "Questo servizio può".

Alla sezione **Profilo>Preferenze>Notifiche push**, gli utenti possono inoltre personalizzare le notifiche che ricevono, scegliendo di:

* vedere nelle notifiche push l'anteprima del messaggio, ovvero l'ente che l'ha inviato e l'oggetto;
* ricevere, su richiesta dell'ente, notifiche push in prossimità di scadenze o quando ha dei messaggi non letti.

### L'inoltro dei messaggi all'indirizzo e-mail

L'utente può inoltre scegliere di ricevere una copia di ogni messaggio che gli arriva in app al proprio indirizzo e-mail. In questo caso, l'abilitazione dell'inoltro avviene nella sezione **Profilo>Preferenze di IO** alla voce "Inoltro dei messaggi via e-mail".

Questa scelta è a livello di app e non di singolo servizio: se attiva, tutti i servizi manderanno sia un messaggio in app che un messaggio e-mail. Se non abilitata, nessun servizio invierà messaggi e-mail.

{% hint style="info" %}
**Un'eccezione: i servizi sensibili**

I servizi che veicolano informazioni ritenute sensibili, come i dati sanitari, non possono inviare e-mail o notifiche push con l'anteprima del messaggio a prescindere dalla preferenza generale espressa dall'utente.
{% endhint %}
