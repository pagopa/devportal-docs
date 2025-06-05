# Processo di notifica tramite PN

L’invio manuale di una notifica si effettua premendo il tasto _**Invia una nuova notifica**_ presente nella pagina di accesso _**Notifiche**_.

<figure><img src="../../.gitbook/assets/image (38).png" alt=""><figcaption></figcaption></figure>

La pagina _**Invia una nuova notifica**_ prevede cinque sezioni di compilazione:&#x20;

* informazioni preliminari
* destinatario/i
* posizione debitoria
* dettagli posizione debitoria
* allegati

<figure><img src="../../.gitbook/assets/Screenshot 2025-03-27 at 10.27.40.png" alt=""><figcaption></figcaption></figure>

## Prima sezione - "Informazioni preliminari"

I campi obbligatori sono:&#x20;

* **il nome della PA mittente:** precompilato
* **il numero di protocollo della notifica:** potrebbe essere quello dell’Ufficio Protocollo della PA o comunque un identificativo della pratica oggetto della notifica
* **l’oggetto** della notifica
* **il codice tassonomico:** identifica il contenuto della notifica in base alla tassonomia dei servizi (rif: [https://developer.pagopa.it/send/guides/knowledge-base/tassonomia-send](https://developer.pagopa.it/send/guides/knowledge-base/tassonomia-send))
* **Modalità di invio cartaceo:** la tipologia di servizio dell'eventuale invio cartaceo (raccomandato 890 o A/R)

{% hint style="info" %}
**ATTENZIONE**: Nel caso l’operatore faccia parte di uno o più gruppi (vedi Configurazione gruppi) il relativo campo diventa obbligatorio.  Se invece l'operatore non appartiene a nessun gruppo, l'inserimento non è obbligatorio.
{% endhint %}

La _**descrizione**_ riferita all’oggetto è un campo facoltativo e, come tale liberamente valorizzabile dalla PA mittente con ulteriori dettagli che saranno visualizzati al destinatario dopo l'avvenuto accesso.

È possibile selezionare l'invio di un atto in formati bi-lingua. Notifiche, comunicazioni e atti opponibili a terzi saranno ricevuti in due lingue: Italiano e una da selezionare tra le opzioni disponibili (Tedesco, Sloveno e Francese). Rimangono a carico del mittente la compilazione in doppia lingua dei campi descrittivi della notifica (come oggetto e descrizione) e il caricamento degli allegati con il testo bi-lingue.

L’inserimento dei dati richiesti abilita il tasto _**Continua**_ per salvare e le informazioni inserite e passare alla sezione successiva.

Abbandonando la sezione senza aver premuto il tasto _**Continua**_ le informazioni fino a quel momento inserite non verranno salvate.

{% hint style="info" %}
**ATTENZIONE**: da una qualunque delle cinque sezioni previste per la creazione di una nuova notifica, premendo il tasto in alto a sinistra _**Indietro**_, l'operatore verrà riportato alla pagina di accesso a PN _**Notifiche**_ e le informazioni inserite nelle sezioni non verranno salvate.
{% endhint %}

<figure><img src="../../.gitbook/assets/image (31).png" alt=""><figcaption></figcaption></figure>

## Seconda sezione - "Destinatari"

Questo modulo prevede i seguenti campi obbligatori per ciascuno dei destinatari previsti: individuazione del soggetto giuridico destinatario (persona fisica/persona giuridica), nome, cognome, codice fiscale (anche per le persone giuridiche), indirizzo fisico del destinatario.&#x20;

Il domicilio digitale del destinatario, al contrario dell'indirizzo fisico, è un campo facoltativo.

Se la notifica riguarda più destinatari (Destinatari multipli), le informazioni richieste devono essere riportate per ciascuno di essi cliccando su _**Aggiungi un destinatario**_. È possibile inserire un massimo di cinque destinatari sulla stessa notifica.

L’inserimento dei dati richiesti abilita il tasto _**Continua**_ per passare alla sezione successiva.

Abbandonando la sezione senza aver premuto il tasto _**Continua**_ le informazioni fino a quel momento inserite non verranno salvate.

Premendo il tasto _**Torna a informazioni preliminari**_ l'operatore sarà riportato alla sezione precedente.

<figure><img src="../../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>

## Terza Sezione - "Posizione debitoria"

La terza sezione prevede la scelta della posizione debitoria da aggiungere.&#x20;

La scelta è tra quattro opzioni:&#x20;

* avviso pagoPA
* modello F24
* entrambi&#x20;
* nessun pagamento.&#x20;

Nel caso in cui la scelta sia _**Nessun pagamento**_ si procederà direttamente alla quinta sezione.

Selezionando uno dei pagamenti, si abiliterà il tasto _**Continua**_ e sarà possibile procedere inserendo le informazioni riguardanti quest'ultimo.

<figure><img src="../../.gitbook/assets/image (33).png" alt=""><figcaption></figcaption></figure>

## Quarta Sezione - "Dettaglio posizione debitoria"

Nella quarta sezione si inseriranno le informazioni relative al pagamento.

Nel primo campo si selezionerà il costo di notifica che può essere di due tipologie: forfettario (già incluso nell'atto) e puntuale (a carico del destinatario).&#x20;

Selezionando il costo puntuale si attiveranno due aree:

* _Iva:_ Gestione IVA sui costi di invio cartaceo espressa in percentuale;
* _Costo Notifica_: quota del costo di notifica a favore dei mittenti espressa in euro.

É prevista una faq in riferimento a questo punto: [https://developer.pagopa.it/send/guides/knowledge-base/readme/pagamenti-e-spese-di-notifica](https://developer.pagopa.it/send/guides/knowledge-base/readme/pagamenti-e-spese-di-notifica).

Proseguendo con il secondo campo (non presente in caso di scelta F24), si dovrà scegliere in base alla propria integrazione con il sistema pagoPA.&#x20;

* _Sincrona_: la posizione debitoria è gestita dall'ente creditore (EC).&#x20;
* _Asincrona_: la posizione debitoria è stata caricata sul sistema Gestione Posizione Debitorie (GPD) di pagoPA.

Di seguito si riporta la faq di approfondimento sul tema: [https://developer.pagopa.it/send/guides/knowledge-base/readme/pagamenti-e-spese-di-notifica/pagamenti-pagopa](https://developer.pagopa.it/send/guides/knowledge-base/readme/pagamenti-e-spese-di-notifica/pagamenti-pagopa).

Nell'ultimo campo per l'avviso pagoPa è previsto l'inserimento obbligatorio del Codice di Avviso e il Codice Fiscale dell'ente creditore e se previsto l'allegato. Invece per l'F24 sarà necessario caricare il file in [formato JSON](https://raw.githubusercontent.com/pagopa/pn-f24/main/docs/openapi/json-schema-from-deref-mod.json) e inserire il nome del file.

Se la notifica prevede più pagamenti, per ognuno di essi le informazioni richieste devono essere riportate cliccando su “+ Aggiungi codice di avviso pagoPA/Modello F24”.

Compilando correttamente la posizione debitoria si abiliterà il tasto _**Continua**_ e sarà possibile procedere all'ultima sezione.

<figure><img src="../../.gitbook/assets/image (36).png" alt=""><figcaption><p>F24</p></figcaption></figure>

## Quinta Sezione - "Documenti Allegati"

La quinta e ultima sezione prevede il caricamento in allegato di almeno un atto in formato PDF/A e firmato digitalmente dalla PA mittente, eventualmente contenente anche l’avviso di pagamento pagoPA (se non è stato già inserito nella sezione dei pagamenti).

La PA può allegare più atti nel caso in cui essi siano separati su file distinti, per un massimo di 10 allegati per notifica (atto + massimo 10 allegati).

Una volta allegati i file, verranno presentati all’utente le hash SHA-256 dei documenti che verranno inoltrate a PN per verifica (vedi I[l processo di notificazione](../../processi/processo-di-notificazione.md)).

L’inserimento dei dati richiesti abilita il tasto _**Invia**_ per completare la sessione di creazione della richiesta di notifica.

Abbandonando la sezione senza aver premuto il tasto _**Invia**_ le informazioni fino a quel momento inserite non verranno salvate.

Premendo il tasto _**Torna al dettaglio posizione debitoria**_ l'operatore sarà riportato alla sezione precedente.

<figure><img src="../../.gitbook/assets/image (37).png" alt=""><figcaption></figcaption></figure>

La richiesta di notifica viene sottoposta ad un processo di validazione che normalmente richiede qualche minuto al termine del quale, se non sono stati riscontrati errori, SEND visualizzerà la notifica, ed il relativo Identificativo Univoco della Notifica (IUN) nella lista di notifiche inviate visibile nella pagina di accesso _**Notifiche**_. Nel caso in cui la creazione non vada a buon fine, la relativa notifica non sarà presente in elenco.&#x20;

A questo punto l’operatore può visualizzare l'avanzamento del processo di notificazione nella pagina di accesso _**Notifiche**_.

<figure><img src="../../.gitbook/assets/image (76).png" alt=""><figcaption></figcaption></figure>
