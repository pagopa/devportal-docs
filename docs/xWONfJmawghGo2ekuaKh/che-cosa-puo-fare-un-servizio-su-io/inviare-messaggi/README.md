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

Esistono due tipologie di messaggi che si possono inviare su IO - Base e Premium - la cui disponibilità dipende dal contratto sottoscritto in fase di adesione.

In generale, i messaggi possono essere:

* **messaggi informativi**: messaggi di testo che possono riguardare un aggiornamento relativo, ad esempio, a un nuovo documento disponibile o a un’istanza presentata all’ente;
* **messaggi che veicolano un pagamento**: messaggi che contengono informazioni relative a una posizione debitoria, con il promemoria della data di scadenza entro cui effettuare il pagamento e il pulsante “Vedi avviso” per procedere al pagamento. Per questo tipo di messaggi è necessario inserire i campi relativi al `payment_data` (Codice Avviso, importo da pagare, data di scadenza);
* **messaggi che veicolano una scadenza**: messaggi che contengono una data di scadenza o da ricordare (come il promemoria della scadenza di un documento da rinnovare o la data entro cui iscriversi a un servizio). Per questo tipo di messaggi è necessario utilizzare il campo `due_date` nel payload del messaggio.

{% hint style="info" %}
Per facilitare l'elaborazione dei messaggi e configurare i servizi su IO è possibile far riferimento a [questi modelli](../../catalogo-dei-servizi-e-modelli/i-modelli-dei-servizi-piu-frequenti/). \


I modelli sono standard di esempio che non hanno carattere vincolante per l’ente e sui quali la Società declina qualsiasi responsabilità, avendo valore meramente esemplificativo.
{% endhint %}

### Messaggi Premium

Rispetto ai messaggi Base, quelli Premium offrono queste **funzionalità** in più:

* possono contenere degli **allegati**;
* l’ente può verificare in ogni momento se sono stati inviati, ricevuti o **letti**;
* in caso di presenza di un avviso di pagamento, l’ente può verificare in ogni momento se sono stati **pagati**;
* se il cittadino dà il suo consenso, possono generare notifiche push che **ricordano al cittadino che il messaggio non è stato letto**;
* se il cittadino dà il suo consenso, possono generare notifiche push che **ricordano al cittadino che il messaggio è stato letto ma non ancora pagato**.

Ecco un riassunto delle funzionalità e la tipologia di messaggi a cui si applicano.

| Funzionalità                                                                             | Messaggi base | Messaggi premium |
| ---------------------------------------------------------------------------------------- | ------------- | ---------------- |
| Testo che contiene una serie di informazioni                                             | ✅             | ✅                |
| Avviso di pagamento all'interno del messaggio                                            | ✅             | ✅                |
| Messaggi che contengono una data di scadenza o da ricordare                              | ✅             | ✅                |
| Allegati al messaggio                                                                    | ❌             | ✅                |
| Verifica che il messaggio sia stato inviato, ricevuto o letto                            | ❌             | ✅                |
| Verifica che l'avviso di pagamento del messaggio sia stato pagato                        | ❌             | ✅                |
| Possibilità di invio di notifiche push che ricordano che un messaggio non è stato letto  | ❌             | ✅                |
| Possibilità di invio di notifiche push che ricordano che un messaggio non è stato pagato | ❌             | ✅                |
