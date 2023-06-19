# ✉ Inviare un messaggio

## Cosa sono i messaggi?

L’**invio di messaggi** è la prima tipologia di comunicazione messa a disposizione dalle API di IO.&#x20;

I messaggi sono comunicazioni personali dirette a un cittadino specifico, identificato tramite il suo Codice Fiscale. Questo significa che **non è possibile** **inviare messaggi a più cittadini con una sola chiamata**.

## Che tipologie di messaggi esistono?

Ci sono due tipologie di messaggi:

* **Standard**, ovvero i messaggi che possono inviare tutti gli enti che hanno sottoscritto un contratto a regime tradizionale;
* **Premium**, ovvero i messaggi che possono inviare tutti gli enti che hanno sottoscritto un contratto a regime Premium.

Al momento dell'invio, gli enti che hanno aderito al programma Premium possono indicare, per ciascun messaggio da inviare, se questo sia Premium - e dunque scalato dal carnet, secondo le condizioni sottoscritte - oppure standard.

## Come funziona l'invio dei messaggi?

<details>

<summary><mark style="color:blue;">Step 1</mark> - Crea un servizio</summary>

Per inviare un messaggio, devi prima [creare-un-servizio](../creare-un-servizio/ "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Testa il contenuto del messaggio</summary>

Prima di andare in produzione puoi testare il contenuto dei messaggi, che verranno inviati all'indirizzo email del delegato. Leggi la pagina [messaggi-di-test.md](messaggi-di-test.md "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Verifica di poter contattare il destinatario</summary>

Ogni volta che invii un messaggio, devi assicurarti che il destinatario esista e che abbia dato il consenso a ricevere comunicazioni per quello specifico servizio.

Per maggiori informazioni scopri le API [get-a-user-profile-using-post.md](../../api/api-messaggi/get-a-user-profile-using-post.md "mention") e [get-subscriptions-feed.md](../../api/api-messaggi/get-subscriptions-feed.md "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 4</mark> - Invia il messaggio</summary>

Per farlo, usa l'API [submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](../../api/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md "mention").

Puoi anche aggiungere allegati al messaggio, sfruttando una delle funzionalità del programma Premium. Per maggiori informazioni leggi [aggiungere-allegati-premium](aggiungere-allegati-premium/ "mention").

</details>

<details>

<summary><mark style="color:blue;">Step 5</mark> - Controlla l'esito</summary>

Interroga l’API [get-message.md](../../api/api-messaggi/get-message.md "mention"), utilizzando il Codice Fiscale del destinatario e l’identificativo del messaggio ottenuto nello step precedente.

</details>

{% hint style="info" %}
Vai al [**manuale dei servizi** ](http://localhost:5000/s/zcLztiq5qDSVw9rRjW7p/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi)per approfondire quali tipologie di messaggi si possono inviare tramite IO.
{% endhint %}

## Gestione degli errori

Tutte le API di IO possono restituire delle risposte di errore, definite nelle specifiche di ciascuna API_._ **È necessario implementare lato client dei meccanismi per la corretta gestione di questo tipo di risposte.**

{% hint style="info" %}
**Esempio:** tutte le API possono restituire lo `status code 429,` che rappresenta un segnale che indica il superamento del rate consentito. In questo caso, è necessario implementare un meccanismo di retry e diminuire il rate delle richieste inserendo delle pause.
{% endhint %}
