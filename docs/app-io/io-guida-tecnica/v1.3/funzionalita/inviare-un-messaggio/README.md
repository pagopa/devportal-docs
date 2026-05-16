# ✉ Inviare un messaggio

L’invio di messaggi è la prima tipologia di comunicazione messa a disposizione dalle API di IO.&#x20;

I messaggi sono comunicazioni personali dirette ad uno specifico cittadino identificato tramite il suo codice fiscale. Non è possibile inviare messaggi ad un gruppo di cittadini, ogni messaggio deve essere personale e diretto ad ogni cittadino.

Il processo di invio dei messaggi prevede di eseguire tre passaggi:

1. [controllo-pre-invio.md](controllo-pre-invio.md "mention")
2. [invio-messaggio.md](invio-messaggio.md "mention")
3. [controllo-post-invio.md](controllo-post-invio.md "mention")

Nella guida troverai una spiegazione dei controlli da effettuare per ogni passaggio, insieme a un esempio. Per la documentazione completa delle API fai riferimento alla [documentazione specifica](https://developer.io.italia.it/openapi.html).

{% hint style="danger" %}
**Importante**

Tutte le API di IO possono restituire delle risposte di errore. È necessario implementare lato client dei meccanismi per la corretta gestione di questo tipo di risposte.

_Esempio: tutte le API possono restituire lo`status code 429` che rappresenta un segnale di sovraccarico dell’infrastruttura di IO: in questo caso è necessario implementare un meccanismo di retry e diminuire il rate delle richieste inserendo delle pause._
{% endhint %}
