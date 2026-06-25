# OpenAPI endpoint di recupero dei contenuti remotizzati

{% hint style="info" %}
Leggi [questa pagina](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md) per saperne di più sui messaggi a contenuto remoto.
{% endhint %}

{% hint style="warning" %}
Prima di poter inviare messaggi a contenuto remoto è necessario seguire la procedura illustrata in [condivisione-configurazione-remota.md](../setup-iniziale/condivisione-configurazione-remota.md "mention")
{% endhint %}

Nello scenario di invio tradizionale di un messaggio su IO, l'Ente richiama l'API esposta per la creazione del messaggio e IO procede alla sua gestione completa in app:

<figure><img src="../.gitbook/assets/[Sequence] Messaggi con contenuto statico.png" alt=""><figcaption></figcaption></figure>

Nel diagramma che segue ti mostriamo la sequenza di eventi che vede coinvolti il suo sistema e quello di IO nello scambio di informazioni col destinatario di un **messaggio a contenuto remoto**:

<figure><img src="../.gitbook/assets/[Sequence] Messaggi con contenuto remoto (alto livello).png" alt=""><figcaption><p>Messaggi a contenuto remoto: sequenza di alto livello</p></figcaption></figure>

<details>

<summary>Diagramma dettagliato</summary>

Segue, con maggiore livello di dettaglio, la sequenza degli eventi che costituiscono il ciclo di vita di un messaggio a contenuto remoto:

<img src="../.gitbook/assets/[Sequence] Messaggi con contenuto remoto.png" alt="" data-size="original">

Nei capitoli successivi troverai le sequenze di dettaglio di ciascuna fase.

</details>

## Endpoint di recupero delle precondizioni all'apertura del messaggio

Se in fase di [#creazione-del-messaggio-con-contenuto-remoto](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-con-contenuto-remoto "mention") avevi incluso il flag [#has\_precondition](api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#has\_precondition "mention"), al momento della richiesta di visualizzazione in app da parte del destinatario IO dovrà recuperare titolo e testo delle precondizioni da mostrare prima di procedere con l'apertura vera e propria del messaggio; lo farà con una chiamata `GET` con cui passerà ai tuoi sistemi:&#x20;

* l'`id` di correlazione remota che avevi indicato nel blocco [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#third\_party\_data "mention") in fase di invio del messaggio;
* il codice fiscale del destinatario (come header).

Il tuo sistema potrà quindi recuperare e trasmettere a IO il contenuto delle precondizioni verificando al contempo che la richiesta pervenuta sia relativa proprio a quel destinatario.

<figure><img src="../.gitbook/assets/Sequenza recupero precondizioni remote.png" alt=""><figcaption></figcaption></figure>

IO utilizzerà la `base_url`, che avevi comunicato in fase di impostazione delle informazioni di configurazione remota, e l'identificativo di correlazione, che avevi specificato nel blocco [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#third\_party\_data "mention") in fase di invio del messaggio, per comporre una chiamata GET nella forma `{base_url}/messages/{id}/precondition:`

{% swagger src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}/precondition" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endswagger %}

{% hint style="info" %}
Per maggiori informazioni sul significato dei singoli campi , fai riferimento a [inviare-un-messaggio-a-contenuto-remoto.md](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md "mention").
{% endhint %}

## Endpoint di **recupero dei dettagli del messaggio**

Se in fase di [#creazione-del-messaggio-con-contenuto-remoto](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-con-contenuto-remoto "mention") avevi incluso il flag [#has\_remote\_content](api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#has\_remote\_content "mention") o, essendo un Ente Premium, il flag [#has\_attachments](api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#has\_attachments "mention"), IO dovrà recuperare il contenuto del messaggio dai tuoi sistemi al momento della sua visualizzazione in app, e userà l'API qui descritta; lo farà con una chiamata `GET` con cui ti restituirà:&#x20;

* l'`id` di correlazione remota che avevi indicato nel blocco [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#third\_party\_data "mention") in fase di invio del messaggio;
* il codice fiscale del destinatario (come header).

Il tuo sistema potrà quindi recuperare il contenuto del messaggio verificando al contempo che la richiesta pervenuta sia relativa proprio a quel destinatario.

<figure><img src="../.gitbook/assets/Remoted Content - Details - Sequence Diagram.png" alt=""><figcaption></figcaption></figure>

IO utilizzerà la `base_url`, che avevi comunicato al team di IO in fase di impostazione delle informazioni di configurazione remota, e l'identificativo di correlazione, che avevi specificato nel blocco [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#third\_party\_data "mention") in fase di invio del messaggio, per comporre una chiamata GET nella forma `{base_url}/messages/{id}:`

{% swagger src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endswagger %}

{% hint style="info" %}
Per maggiori informazioni sul significato dei singoli campi, fai riferimento a [inviare-un-messaggio-a-contenuto-remoto.md](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md "mention").
{% endhint %}

### Esempio di risposta attesa da IO

A seconda dei flag che avevi specificato in [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#third\_party\_data "mention") al momento della [#creazione-del-messaggio-con-contenuto-remoto](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md#creazione-del-messaggio-con-contenuto-remoto "mention"), in risposta all'API dovrai includere:

<table><thead><tr><th width="233">Se [flag]=true</th><th width="185">Struttura da inserire</th><th>Cos'è</th></tr></thead><tbody><tr><td><code>has_remote_content</code></td><td><code>details</code></td><td>Il messaggio ha contenuti remoti (titolo e corpo)</td></tr><tr><td><code>has_attachments</code></td><td><code>attachments</code></td><td>Solo per Enti Premium: il messaggio contiene allegati</td></tr></tbody></table>

{% hint style="warning" %}
Fai attenzione a rispettare i flag che dichiari: IO effettua un controllo di coerenza tra i flag che avevi indicato alla creazione del messaggio e le strutture presenti nella risposta dell'API di dettaglio al momento della sua fruizione in app
{% endhint %}

#### Struttura `details`: titolo e corpo del messaggio

Di seguito, un esempio di cosa puoi tornare nella struttura `details` in caso di messaggio a contenuto remoto se avevi specificato `has_remote_content=true`:

```json
{
  "details":
  {
    "subject": "Questo è il titolo del messaggio",
    "markdown": "Questo è il corpo del messaggio in formato **markdown**"
  }
}
```

Ecco come apparirà in app il messaggio così impostato:

<figure><img src="../.gitbook/assets/image (24).png" alt="" width="375"><figcaption><p>Come l'esempio apparirà in app</p></figcaption></figure>

{% hint style="info" %}
Il titolo mostrato nel messaggio con contenuto remoto può essere differente da quello che avevi indicato al momento della sua creazione (il campo `subject` in  [submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md](api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md "mention")): quest'ultimo, infatti, è utilizzato come titolo nell'elenco dei messaggi in app ed è statico.

:warning:Ti ricordiamo che ai sensi delle [Linee Guida IO](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto\_allegati/213121604430O\_\_OLG+Punto+accesso+telematico+servizi+PA\_3.11.2021.pdf) non deve includere informazioni sensibili nel titolo del messaggio, e ove necessarie nel corpo dovranno rispettare il principio di minimizzazione.
{% endhint %}

{% hint style="info" %}
Quando componi e trasmetti il testo del messaggio in formato markdown ricorda di impostare il charset `UTF-8` (per garantire la corretta visualizzazione dei caratteri accentati) e utilizza la sequenza "`\n\n`" per mandare a capo il testo creando un nuovo paragrafo.

Puoi usare i seguenti tag di formattazione del testo:

* `#`, `##` (seguiti da uno spazio) per le intestazioni
* \* per il corsivo
* \*\* per il grassetto
* \[Lorem Ipsum]\(https://mio.sito) per i link
{% endhint %}

#### Struttura `attachments`: allegati PDF

Se la tua organizzazione ha sottoscritto l'accordo Premium, ecco un esempio di cosa puoi indicare se nella struttura `details` avevi specificato `has_remote_content=true`:&#x20;

{% code overflow="wrap" %}
```json
{
  "attachments": [
    {
      "id": "410034f7-6cfd-43ef-b58b-2da1375ee218",
      "content_type": "application/pdf",
      "name": "Allegato 1.pdf",
      "url": "/io_attachments/410034f7-6cfd-43ef-b58b-2da1375ee218",
      "category": "DOCUMENT"
    },
    {
      "id": "0004b1f5-7414-4db8-b9e0-1e38a7730fca",
      "content_type": "application/pdf",
      "name": "Allegato 2.pdf",
      "url": "/io_attachments/0004b1f5-7414-4db8-b9e0-1e38a7730fca",
      "category": "DOCUMENT"
    }
  ]
}
```
{% endcode %}

Nella tabella puoi trovare il significato di ciascun campo:

| Campo          | Formato ammesso                   | Note                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`           | stringa                           | <p>IO richiede che il campo <code>id</code> debba contenere un <strong>identificativo del singolo allegato</strong> che sia <strong>univoco all'interno del messaggio</strong>: è tua responsabilità definire questo campo e garantirne l'univocità presso i tuoi sistemi.</p><p>L'esempio riporta, a titolo esemplificativo, l'utilizzo di una GUID.</p>                                                                                                                                                                                                                                                                                                                                                                |
| `content_type` | stringa enumerata                 | Deve contenere il valore "`application/pdf`" in quanto IO accetta unicamente allegati in formato **PDF** conformi allo standard **PDF/A-2a**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `name`         | stringa (terminata in ".pdf")     | <p>Deve contenere il nome dell'allegato come comparirà nel messaggio, all'interno della sezione "Allegati": sceglilo con cura in modo da comunicare correttamente con il tuo destinatario.<br><br><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠</span> È obbligatorio <strong>aggiungere sempre la desinenza ".pdf"</strong>.</p>                                                                                                                                                                                                                                                                                                                                                                      |
| `url`          | stringa (in formato URL parziale) | <p>Deve contenere il <strong>percorso relativo</strong> per il download dell’allegato. Questo perché IO scarica gli allegati tramite una richiesta <code>GET</code> all'indirizzo <code>{baseUrl}/messages/{id}/{url}</code>, dove:</p><ul><li><code>baseUrl</code> è la parte comune comune (iniziale) degli endpoint che hai comunicato al team di IO in fase di condivisione delle informazioni di configurazione remota;</li><li><code>id</code> è l'identificativo di correlazione remota che avevi specificato nel blocco <a data-mention href="api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data">#third_party_data</a> in fase di invio del messaggio</li></ul> |
| `category`     | stringa enumerata                 | Deve contenere il valore `"DOCUMENT"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Endpoint di **recupero dei byte del singolo allegato**

Se hai sottoscritto l'Accordo Premium e nella risposta all'API di dettaglio illustrata nel capitolo precedente hai incluso i metadati di uno o più allegati, quando il destinatario del messaggio vorrà visualizzarli, IO recuperà il contenuto presso i tuoi sistemi componendo la URL di una chiamata `GET` nel formato `{baseUrl}/{id}/{url}`, dove:

* `baseUrl` è la parte comune (iniziale) degli endpoint che hai comunicato al team di IO in fase di impostazione delle informazioni di configurazione remota;
* `{id}` è l'identificativo che avevi specificato nel blocco [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#third\_party\_data "mention") in fase di invio del messaggio;
* `{url}` è il completamento della `baseUrl` specifico per l'allegato in questione, come restituito nei metadati con l'API di dettaglio.

{% hint style="warning" %}
Fai attenzione: in questo caso l'identificativo univoco è l'`id` di **correlazione remota** che avevi indicato in [#third\_party\_data](api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#third\_party\_data "mention") in occasione dell'invio del messaggio.
{% endhint %}

<figure><img src="../.gitbook/assets/Remoted Content - Download allegato - Sequence Diagram.png" alt=""><figcaption></figcaption></figure>

{% swagger src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml" path="/messages/{id}/{attachment_url}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api_remote_content.yaml)
{% endswagger %}

{% hint style="info" %}
L'API deve restituire lo stream di byte del file allegato in formato `application/octet-stream` binario.
{% endhint %}

## Autorizzazioni

### API Key

IO garantisce che il codice fiscale nella _request_ corrisponda a quello dell'utente che sta provando a recuperare i dati del messaggio. Il codice fiscale viene inviato attraverso l'header `fiscal_code`.

{% hint style="warning" %}
È responsabilità dell'Ente individuare correttamente il codice fiscale dell'utente.
{% endhint %}

## Nota sugli header "Lollipop"

Tutte le API qui descritte prevedono opzionalmente una serie di _header_ denominati "`x-pagopa-lollipop-...`" e due header di "`signature`": tali _header_ sono riservati per l'utilizzo di un sistema di certificazione del dispositivo del destinatario di prossima introduzione, per il quale riceverai opportuna comunicazione e documentazione.

{% hint style="success" %}
Per il momento, puoi ignorarne la presenza nelle specifiche ma **ti raccomandiamo di non impedirne esplicitamente la ricezione da parte di IO**.
{% endhint %}
