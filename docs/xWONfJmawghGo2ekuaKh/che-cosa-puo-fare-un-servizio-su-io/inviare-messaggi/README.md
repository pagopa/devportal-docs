# Inviare messaggi

I messaggi inviati dagli enti in IO sono sempre **comunicazioni di carattere personale**, in quanto indirizzate a uno specifico utente.&#x20;

L'ente può interrogare il back end rispetto al Codice Fiscale di un utente di cui è a conoscenza e a cui ha qualcosa di personale da comunicare. Se il Codice Fiscale risulta presente tra gli utenti dell'app e ha il servizio attivo, l'ente è autorizzato a procedere e inviare la propria comunicazione.&#x20;

Ne consegue che **è escluso sia l’invio di comunicazioni massive** alla totalità dell’utenza di IO, **sia l’invio a utenti che non siano destinatari diretti** dei servizi erogati.

![Esempio di messaggi inviati a un utente su IO](../../.gitbook/assets/msg.png)

{% hint style="danger" %}
**No alle informazioni personali nel titolo**&#x20;

Non inserire informazioni personali o dati sensibili all'interno del titolo di un messaggio e assicurati che al suo interno ci siano solo i dati strettamente necessari.
{% endhint %}

### Tipologie di messaggi

In generale, i messaggi possono essere:

* **messaggi informativi**: messaggi di testo che possono riguardare un aggiornamento relativo, ad esempio, a un nuovo documento disponibile o a un’istanza presentata all’ente;
* **messaggi che veicolano un pagamento**: messaggi che contengono informazioni relative a una posizione debitoria, con il promemoria della data di scadenza entro cui effettuare il pagamento e il pulsante “Vedi avviso” per procedere al pagamento. Per questo tipo di messaggi è necessario inserire i campi relativi al `payment_data` (Codice Avviso, importo da pagare, data di scadenza);
* **messaggi che veicolano una scadenza**: messaggi che contengono una data di scadenza o da ricordare (come il promemoria della scadenza di un documento da rinnovare o la data entro cui iscriversi a un servizio). Per questo tipo di messaggi è necessario utilizzare il campo `due_date` nel payload del messaggio.

{% hint style="info" %}
Per facilitare l'elaborazione dei messaggi e configurare i servizi su IO è possibile far riferimento a [questi modelli](../../catalogo-dei-servizi-e-modelli/i-modelli-dei-servizi-piu-frequenti/). \


I modelli sono standard di esempio che non hanno carattere vincolante per l’ente e sui quali la Società declina qualsiasi responsabilità, avendo valore meramente esemplificativo.
{% endhint %}

### Funzionalità Premium

Se in fase di adesione è stato sottoscritto l'accordo Premium, è possibile usufruire di funzionalità aggiuntive legate alla gestione e invio dei messaggi.&#x20;

Rispetto al piano base, l'offerta Premium permette di:

* inviare messaggi con **allegati in formato PDF**;
* verificare in ogni momento l'invio, la ricezione e la **lettura** di un messaggio;
* in caso di presenza di un avviso di pagamento, verificare in ogni momento lo **stato di pagamento**;
* ricordare al cittadino di **aprire un messaggio non ancora letto** (se il cittadino ha dato il consenso a questa funzionalità messa a disposizione dall'app IO);
* ricordare al cittadino di **pagare un avviso in prossimità della scadenza** (se il cittadino ha dato il consenso a questa funzionalità messa a disposizione dall'app IO).

Ecco un riassunto dei vantaggi dell'offerta Premium rispetto al piano base:

<table><thead><tr><th width="353">Funzionalità</th><th>Base</th><th>Premium</th></tr></thead><tbody><tr><td>Inviare un messaggio di testo in formato markdown</td><td>✅</td><td>✅</td></tr><tr><td>Allegare un avviso di pagamento</td><td>✅</td><td>✅</td></tr><tr><td>Definire una data di scadenza legata al messaggio</td><td>✅</td><td>✅</td></tr><tr><td>Allegare un file in formato PDFo</td><td>❌</td><td>✅</td></tr><tr><td>Verificare che il messaggio sia stato inviato, ricevuto o letto </td><td>❌</td><td>✅</td></tr><tr><td>Verificare che l'avviso di pagamento allegato al messaggio sia stato pagato</td><td>❌</td><td>✅</td></tr><tr><td>Inviare una notifica push per ricordare di aprire un messaggio non letto</td><td>❌</td><td>✅</td></tr><tr><td>Inviare una notifica push per ricordare di pagare un avviso in prossimità della scadenza</td><td>❌</td><td>✅</td></tr></tbody></table>

