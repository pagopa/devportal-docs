# 🎥 Come allegare documenti a un Messaggio (Funzionalità Premium)

## Indice dei contenuti

* [#video-tutorial](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#video-tutorial "mention")
* [#panoramica](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#panoramica "mention")
* [#caso-duso-esempio](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#caso-duso-esempio "mention")

## Video tutorial

{% embed url="https://www.youtube.com/watch?v=TwG83D53SjI" %}
Video tutorial - Parte 1
{% endembed %}

{% embed url="https://www.youtube.com/watch?v=ZtZ_KZDzC7I" %}
Video tutorial - Parte 2
{% endembed %}

## Panoramica

Nell'ambito dell'integrazione con la piattaforma IO, la funzionalità Premium relativa agli allegati è offerta secondo un modello che prevede che i file risiedano presso i sistemi della tua Organizzazione; App IO preleverà i file portandoli sul dispositivo del Cittadino e il trasferimento avviene solo quando il Cittadino decide di aprire un Allegato dal dettaglio del relativo Messaggio.

{% hint style="info" %}
I file degli Allegati non sono trasmessi al momento dell'invio del Messaggio, né sono memorizzati sui sistemi di IO
{% endhint %}

{% hint style="warning" %}
È compito della tua Organizzazione garantire la presenza nel tempo, nei propri sistemi, degli Allegati dichiarati in un Messaggio: in caso contrario, il Cittadino visualizzerà un messaggio di errore al posto dell'elenco dei file
{% endhint %}

Per consentire questo scambio di dati dovrai fornire alcune informazioni in sede di _onboarding_ ed esporre un'API REST che sarà richiamata da IO (_callback_). Il diagramma che segue riporta la sequenza delle operazioni coinvolte nell'integrazione tra la tua Organizzazione e IO per il supporto agli Allegati.

<figure><img src="../../.gitbook/assets/image (7).png" alt=""><figcaption><p>Integrazione: sequenza degli eventi</p></figcaption></figure>

Nel diagramma, le frecce in colore blu rappresentano le chiamate che IO fa al _backend_ della tua Organizzazione e corrispondono alle API di _callback_ che dovrai esporre; le frecce in colore verde rappresentano il momento in cui i byte dei tuoi allegati sono trasmessi al Cittadino.

### I dati di configurazione

Dopo aver definito il Servizio che userai per spedire i tuoi Messaggi, per abilitarlo all'invio di Allegati dovrai [comunicare a IO](https://docs.pagopa.it/area-riservata-enti-app-io/area-riservata-enti-app-io/processo-di-adesione-a-app-io/processo-di-adesione-a-app-io-premium) alcuni dati chiave:

*   `serviceId`: è l'identificativo del Servizio IO, puoi recuperarlo accedendo alla sezione Servizi dell'Area Riservata\


    <figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption><p>Dove puoi trovare il serviceId</p></figcaption></figure>
* `baseUrl`: IO necessita di richiamare il tuo backend per ottenere le informazioni sugli allegati al tuo Messaggio. La URL che IO utilizzerà per questo scopo è costituita da una parte fissa, `baseUrl`, e una variabile a seconda dello scenario e del messaggio. Esempio di `baseUrl`: `https://integrazione.mioente.it/io`
* `API Key`: è la chiave di autenticazione che IO utilizzerà per richiamare i tuoi endpoint di callback
  * :warning: Fai attenzione, _non_ si tratta di una delle chiavi, primaria o secondaria, del tuo Servizio!
  * :information\_source: Puoi concordare con IO il nome del header che veicolerà la API Key

IO memorizzerà queste informazioni e le utilizzerà successivamente nel colloquio con la tua Organizzazione.

### L'identificativo `{third_party_data.id}`

Quando invierai un Messaggio che contiene allegati, seguendo [quanto riportato nella Guida Tecnica](https://docs.pagopa.it/io-guida-tecnica/funzionalita/inviare-un-messaggio/aggiungere-allegati-premium), dovrai indicare a IO la presenza dei file associati stabilendo un identificativo (`third_party_data.id`) che consentirà il successivo colloquio tra il _backend_ di IO e quello della tua Organizzazione.

{% hint style="warning" %}
Sei tu a decidere il valore di `third_party_data.id`, ma tieni presente che **deve essere univoco all'interno dell'insieme dei tuoi Servizi IO che condividono il medesimo`baseUrl`** comunicato in fase di onboarding.
{% endhint %}

Trasmetterai l'identificativo nella richiesta di invio del messaggio e sarà poi utilizzato nell'intero colloquio tra la tua Organizzazione e IO, come riportato nella sequenza illustrata in [#panoramica](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#panoramica "mention").

### Esposizione callback

Come accennato nella [#panoramica](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#panoramica "mention"), la tua Organizzazione dovrà esporre delle _callback_ (endpoint REST) alle quali l'infrastruttura di IO potrà far capo nel momento in cui dovrà recuperare determinate informazioni relative agli allegati.

In particolare, gli _endpoint_ previsti dal protocollo sono due:

1. quello per il **recupero dei metadati** che descrivono gli allegati a un Messaggio IO: è invocato quando il Cittadino richiede l'apertura di un Messaggio in app e IO si aspetta di ricevere un elenco di entità ciascuna delle quali descrive un Allegato (id univoco, nome e URL relativa)
2. quello per il **recupero dei dati binari** di un determinato allegato a un Messaggio IO: è invocato quando il Cittadino richiede l'apertura di un Allegato dal dettaglio del Messaggio e IO si aspetta di ricevere i byte del file fisico ospitato sui sistemi della tua Organizzazione

Entrambi saranno protetti da autenticazione con API Key, come illustrato in [#i-dati-di-configurazione](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#i-dati-di-configurazione "mention").

Nelle chiamate a entrambi gli endpoint IO aggiungerà l'header `fiscal_code` riportante il codice fiscale del Cittadino destinatario del Messaggio per cui sta richiedendo gli Allegati. Questo ti dà l'opportunità di verificare che il cittadino sia il reale destinatario degli allegati.

{% hint style="info" %}
Trovi tutte le informazioni di dettaglio circa gli _endpoint_ di _callback_ nella [Guida Tecnica](https://docs.pagopa.it/io-guida-tecnica/funzionalita/inviare-un-messaggio/aggiungere-allegati-premium/specifiche-degli-endpoint-di-recupero-degli-allegati).
{% endhint %}

## Caso d'uso (esempio)

Il risultato che vogliamo ottenere in questo esempio è che il Cittadino riceva un Messaggio IO simile a quello mostrato di seguito:

<figure><img src="../../.gitbook/assets/image (8).png" alt=""><figcaption><p>Esempio di Messaggio con Allegati</p></figcaption></figure>

Nota la presenza della sezione "Allegati" con l'elenco dei documenti che accompagnano il messaggio.

### Step 1 - Preparazione degli Allegati

Come prima cosa, una volta implementata l'integrazione tra i sistemi della tua Organizzazione e quelli di IO come riportato in [#panoramica](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#panoramica "mention"), dovrai assicurarti che i file dei tuoi allegati siano a disposizione degli _endpoint_ che avrai esposto verso IO: quando IO ti invocherà utilizzando [#lidentificativo-third\_party\_data.id](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#lidentificativo-third\_party\_data.id "mention") che avrai comunicato in sede di invio del Messaggio, i tuoi sistemi dovranno individuare il set di allegati corrispondente e tornare le relative informazioni secondo il protocollo stabilito.

In questo tutorial, gli esempi prevedono che a fronte di un `third_party_data.id` con valore `000003` i tuoi sistemi "sappiano" che gli allegati per questo Messaggio sono due:

1. un documento con nome "ricevuta.pdf"
2. un documento con nome "evento.pdf"

{% hint style="info" %}
È responsabilità della tua Organizzazione persistere i file degli allegati ai suoi Messaggi IO; il processo di integrazione con IO si limita al consentire il recupero fisico dei file in app.
{% endhint %}

{% hint style="warning" %}
È compito della tua Organizzazione garantire che determinati allegati siano diretti a un determinato Cittadino/utente, nel rispetto dell'Accordo Premium siglato con PagoPA e delle vigenti normative sulla riservatezza dei dati.
{% endhint %}

### Step 2 - Invio del Messaggio

#### Request

<pre class="language-json" data-overflow="wrap"><code class="lang-json">curl --location --request POST 'https://api.io.pagopa.it/api/v1/messages' \
--header 'Ocp-Apim-Subscription-Key: 217d66f7a83642578111d733e1741813' \
--header 'Content-Type: application/json' \
--data-raw '
{
<strong>    "feature_level_type": "ADVANCED",
</strong>    "time_to_live": 3600,
    "content": {
        "subject": "Partecipazione Evento",
        "markdown": "Gentile Mario Rossi,\n\r\n\rabbiamo accettato la tua richiesta di partecipazione all'\''evento e ti inviamo in allegato la ricevuta del pagamento della tua quota e la brochure con tutte le informazioni utili.\n\rA Ti aspettiamo!\n\rL'\''Amministrazione Comunale di Ipazia.",
        "third_party_data": {
            "id": "000003",
            "has_attachments": true
        }
    },
    "fiscal_code": "RSRNOU70S54S000L"
}'
</code></pre>

*   Il valore del header `Ocp-Apim-Subscription-Key` è la chiave (primaria o secondaria) del tuo Servizio IO: puoi recuperarla accedendo all'Area Riservata e cercando la scheda del tuo Servizio nella pagina "Servizi"\


    <figure><img src="../../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>
* Il valore `"ADVANCED"` per `feature_level_type` identifica un Messaggio Premium: impostalo così per poter aggiungere Allegati al tuo Messaggio
* Componi il tuo messaggio (`subject`, `markdown`) seguendo i consigli riportati nel [Manuale dei Servizi di IO](https://docs.pagopa.it/manuale-servizi/)
* La presenza della struttura `third_party_data` indica a IO che il tuo Messaggio veicola uno o più Allegati:
  1. `id` è il [#lidentificativo-third\_party\_data.id](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#lidentificativo-third\_party\_data.id "mention")
  2. `has_attachments` va obbligatoriamente impostato a `true`
* `fiscal_code` è il Codice Fiscale del destinatario del Messaggio

{% hint style="info" %}
Se il Servizio IO che stai utilizzando non è pubblicato, dovrai [chiederci di abilitarlo all'invio di messaggi verso uno o più codici fiscali specifici](https://docs.pagopa.it/io-guida-tecnica/abilitazioni/test-con-codici-fiscali-reali). Queste persone, che non dovranno essere cittadini/utenti finali ma membri della tua Organizzazione o comunque incaricati dei test, riceveranno i messaggi che invierai direttamente sulla loro App IO.
{% endhint %}

{% hint style="danger" %}
Se il Servizio è [pubblicato](https://docs.pagopa.it/manuale-servizi/come-si-crea-un-servizio/pubblicazione-validazione-e-modifica-di-un-servizio/pubblicazione), non sarà necessaria alcuna procedura autorizzativa e potrai inviare messaggi a qualsiasi codice fiscale destinatario. Poni la massima attenzione a questo scenario!
{% endhint %}

#### Response

```
{
    "id": "01GS8744E24EZDG3XD5ECXB9RG"
}
```

{% hint style="info" %}
Prendi sempre nota dell'identificativo del messaggio ritornato in fase di invio: ti servirà successivamente per [recuperarne lo stato e le informazioni di lettura e pagamento](https://docs.pagopa.it/io-guida-tecnica/api/api-messaggi/get-message).
{% endhint %}

### Step 3 - Visualizzazione del Messaggio in App

In seguito alla richiesta di invio del Messaggio, come visto in [#step-2-invio-del-messaggio](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#step-2-invio-del-messaggio "mention"), l'App IO del destinatario lo riceverà segnalandone la presenza con una notifica "push" (se abilitata sul dispositivo specifico).

Toccando la notifica, oppure aprendo manualmente App IO e toccando il nuovo messaggio nell'elenco dei messaggi ricevuti, l'utente accederà al dettaglio: se tutto sarà andato come previsto, IO avrà contattato i tuoi sistemi per recuperare i metadati degli allegati (numero, nomi e URL relative), potendo così costruire la pagina da mostrarti: nota la sezione Allegati con l'elenco dei tuoi file.

<figure><img src="../../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

**A livello di integrazione** il backend di IO avrà effettuato una richiesta GET all'indirizzo `https://integrazione.mioente.it/io/messages/000003`, che avrà costruito come segue (come previsto dalle relative [specifiche OpenAPI](https://editor.swagger.io/?url=https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml)):

* `https://integrazione.mioente.it/io` --> URL di base comunicata all'onboarding (vedi [#i-dati-di-configurazione](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#i-dati-di-configurazione "mention"))
* `/messages/` --> percorso costante
* `000003` --> [#lidentificativo-third\_party\_data.id](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#lidentificativo-third\_party\_data.id "mention")

L'endpoint avrà risposto con questi dati:

{% code overflow="wrap" %}
```json
{
  "attachments": [
    {
      "id": "1",
      "url": "attachments/ricevuta.pdf",
      "content_type": "application/pdf",
      "name": "ricevuta.pdf"
    },
    {
      "id": "2",
      "url": "attachments/evento.pdf",
      "content_type": "application/pdf",
      "name": "evento.pdf"
    }
  ]
}
```
{% endcode %}

* il campo `id` sarà usato da IO in evoluzioni future. Per il momento è richiesto solo che sia valorizzato in modo univoco, ad esempio puoi usare una nuova [GUID](https://it.wikipedia.org/wiki/GUID)<img src="broken-reference" alt="" data-size="line"> generata allo scopo
* Il campo `url` deve contenere il percorso relativo per il download dell’allegato, come vedremo meglio in dettaglio tra poco in [#step-4-visualizzazione-di-un-allegato](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#step-4-visualizzazione-di-un-allegato "mention")
* Il campo `content_type` deve necessariamente contenere il valore “application/pdf”, in quanto IO supporta unicamente allegati in formato PDF/A (consigliamo ai Mittenti di adottare il formato PDF/A-1a, che garantisce la massima sicurezza e accessibilità per i propri documenti)
* Il campo `name` sarà mostrato come nome dell’allegato nell’elenco in App: sceglilo con cura per comunicare correttamente col tuo utente finale! Deve essere, come nell’esempio, il nome del file che l’utente si ritroverà sul proprio dispositivo se sceglierà di scaricarlo dopo averlo visualizzato: puoi dunque usare un nome del tipo "Ricevuta Evento.pdf" o semplicemente "ricevuta.pdf", _la cosa importante è includere l'estensione ".pdf"_ per consentire all'app e al sistema operativo del dispositivo di trattare correttamente il file eventualmente scaricato dal destinatario

### Step 4 - Visualizzazione di un Allegato

Toccando uno dei file allegati al tuo Messaggio, il destinatario avvierà il processo per cui IO richiederà alla tua Organizzazione i byte del file corrispondente utilizzando l'apposito endpoint che avrai esposto ([#esposizione-callback](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#esposizione-callback "mention")).

Dopo alcuni secondi, necessari affinché il file sia trasferito dai tuoi sistemi a IO e quindi all'App di destinazione, all'utente sarà mostrato il visualizzatore di PDF integrato in App IO:

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

Potrà quindi utilizzare i gesti di zoom e spostamento per esaminare l'allegato più in dettaglio, così come potrà scegliere di:

* condividere l'allegato utilizzando una delle app installate sul suo dispositivo
* salvare il file sul suo dispositivo (viene selezionata automaticamente la cartella dei "download")
* aprire l'allegato con una delle app installate che supporti i documenti in formato PDF

**A livello di integrazione** il backend di IO avrà effettuato una richiesta GET all'indirizzo `https://integrazione.mioente.it/io/messages/000003/attachments/evento.pdf`, che avrà costruito come segue (nel rispetto delle [specifiche OpenAPI](https://editor.swagger.io/?url=https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml)):

* `https://integrazione.mioente.it/io` --> URL di base comunicata all'onboarding (vedi [#i-dati-di-configurazione](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#i-dati-di-configurazione "mention"))
* `/messages/` --> percorso costante
* `000003` --> [#lidentificativo-third\_party\_data.id](come-allegare-documenti-a-un-messaggio-funzionalita-premium.md#lidentificativo-third\_party\_data.id "mention")
* `/` --> costante
* `/attachments/evento.pdf` --> valore del campo `url` prelevato dalla response del primo endpoint

L'endpoint avrà risposto con lo stream di byte in formato binario del documento `evento.pdf`, al quale avrà aggiunto l'header `content-type` col valore `application/pdf`.
