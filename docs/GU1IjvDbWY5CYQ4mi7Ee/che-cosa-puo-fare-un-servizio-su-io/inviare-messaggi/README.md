# Inviare messaggi

I messaggi inviati dagli enti in IO sono sempre **comunicazioni di carattere personale**, in quanto indirizzate a uno specifico utente.&#x20;

L'ente può interrogare il back end rispetto al Codice Fiscale di un utente di cui è a conoscenza e a cui ha qualcosa di personale da comunicare. Se il Codice Fiscale risulta presente tra gli utenti dell'app e ha il servizio attivo, l'ente è autorizzato a procedere e inviare la propria comunicazione.&#x20;

Ne consegue che **è escluso sia l’invio di comunicazioni massive** alla totalità dell’utenza di IO, **sia l’invio a utenti che non siano destinatari diretti** dei servizi erogati.

<figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption><p>Esempio di messaggi inviati a un utente su IO</p></figcaption></figure>

## Tipologie di messaggi

I messaggi che vengono inviati su IO possono essere di diverse tipologie e arricchiti a seconda di:

* Quale tipologia di contenuto viene veicolato: _informativo, di pagamento o di scadenza;_
* Come viene gestito il contenuto del messaggio: _statico o da remoto;_
* Quale tipologia di contratto è stato firmato dall'ente: _standard o Premium._

***

## Contenuto dei messaggi

In generale, i messaggi possono essere:

* [**messaggi informativi**](messaggi-informativi.md): messaggi di testo che possono riguardare un aggiornamento relativo, ad esempio, a un nuovo documento disponibile o a un’istanza presentata all’ente;
* [**messaggi che veicolano un pagamento**](messaggi-che-veicolano-un-pagamento/): messaggi che contengono informazioni relative a una posizione debitoria, con il promemoria della data di scadenza entro cui effettuare il pagamento e il pulsante “Vedi avviso” per procedere al pagamento. Per questo tipo di messaggi è necessario inserire i campi relativi al `payment_data` (Codice Avviso, importo da pagare, data di scadenza);
* [**messaggi che veicolano una scadenza**](messaggi-che-veicolano-una-scadenza.md): messaggi che contengono una data di scadenza o da ricordare (come il promemoria della scadenza di un documento da rinnovare o la data entro cui iscriversi a un servizio). Per questo tipo di messaggi è necessario utilizzare il campo `due_date` nel payload del messaggio.

### Gestione del contenuto&#x20;

Oltre alle categorizzazioni precedentemente descritte, i messaggi sono identificabili in due tipologie, **secondo la modalità di gestione del contenuto** prevista dal tuo Ente:

* **Messaggi tradizionali**, ovvero i messaggi il cui contenuto è invariabile nel tempo e definito al momento del loro invio;
* **Messaggi a contenuto remoto**, ovvero i messaggi il cui contenuto non è gestito direttamente da IO ma fornito dai tuoi sistemi al momento della loro fruizione da parte del destinatario. In particolare, i messaggi a contenuto remoto sono pensati per le comunicazioni che veicolano informazioni sensibili.&#x20;

Puoi trovare informazioni di dettaglio sui messaggi a contenuto remoto nella [sezione dedicata della Guida tecnica di IO](https://app.gitbook.com/s/sUBZStlCQZzLI6ZesbND/funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto).

{% hint style="danger" %}
**Attenzione alle informazioni sensibili**

**In caso di informazioni sensibili da veicolare nei messaggi di IO, puoi usare i messaggi a contenuto remoto.** Non inserire informazioni personali o dati sensibili all'interno del titolo di un messaggio tradizionale e assicurati che al suo interno ci siano solo i dati strettamente necessari. Scopri di più nella sezione dedicata alle [Informazioni sensibili](../../i-servizi-in-io/informazioni-sensibili.md).
{% endhint %}

***

## Tipologia di contratto

Gli enti possono avvalersi di messaggi standard oppure firmare il contratto avente ad oggetto la funzionalità Premium di app IO.

Rispetto ai messaggi Standard, quelli Premium offrono **funzionalità** in più:

* possono contenere degli [**allegati**](messaggi-con-allegati-premium.md);
* l’ente può verificare in ogni momento se sono stati inviati, ricevuti o **letti**;
* in caso di presenza di un avviso di pagamento, l’ente può verificare in ogni momento se sono stati **pagati**;
* se il cittadino dà il suo consenso, e la posizione debitoria associata presenta una data di scadenza, possono generare notifiche push che **ricordano al cittadino che il messaggio è stato letto ma non ancora pagato**.

Al momento dell'invio, gli enti che hanno aderito al programma Premium possono indicare, per ciascun messaggio da inviare, se questo sia Premium - e dunque a pagamento, secondo le condizioni sottoscritte - oppure standard.

Ecco un riassunto delle funzionalità e la tipologia di messaggi a cui si applicano.

| Funzionalità                                                                             | Messaggi base | Messaggi premium |
| ---------------------------------------------------------------------------------------- | ------------- | ---------------- |
| Testo che contiene informazioni                                                          | ✅             | ✅                |
| Avviso di pagamento all'interno del messaggio                                            | ✅             | ✅                |
| Messaggi che contengono una data di scadenza o da ricordare                              | ✅             | ✅                |
| Allegati al messaggio                                                                    | ❌             | ✅                |
| Verifica che il messaggio sia stato inviato, ricevuto o letto                            | ❌             | ✅                |
| Verifica che l'avviso di pagamento del messaggio sia stato pagato                        | ❌             | ✅                |
| Possibilità di invio di notifiche push che ricordano che un messaggio non è stato pagato | ❌             | ✅                |

