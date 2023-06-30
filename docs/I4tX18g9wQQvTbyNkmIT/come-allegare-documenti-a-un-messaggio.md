# Come allegare documenti a un Messaggio

Gli enti che hanno sottoscritto il [programma Premium](https://pagopa.atlassian.net/io-guida-tecnica/v/io-guida-tecnica-2.2/abilitazioni/funzionalita-premium) possono **includere allegati in formato PDF** nei messaggi che inviano. In questo tutorial ti spiegheremo come fare.

### Panoramica <a href="#panoramica" id="panoramica"></a>

Il modello della funzionalità Premium relativa all’invio degli allegati, prevede che i file risiedano presso i sistemi della tua organizzazione. App IO preleverà i file portandoli sul dispositivo del Cittadino e il trasferimento avverrà solo quando il Cittadino deciderà di aprire un Allegato dal dettaglio del relativo Messaggio.

I file degli Allegati non sono trasmessi al momento dell'invio del Messaggio, né sono memorizzati sui sistemi di IO.

È compito della tua Organizzazione garantire la presenza nel tempo, nei propri sistemi, degli Allegati dichiarati in un Messaggio: in caso contrario, il Cittadino visualizzerà un messaggio di errore al posto dell'elenco dei file.

Per consentire questo scambio di dati dovrai fornire alcune informazioni in sede di _onboarding_ ed esporre un'API REST che sarà richiamata da IO (_callback_). Il diagramma che segue riporta la sequenza delle operazioni coinvolte nell'integrazione tra la tua Organizzazione e IO per il supporto agli Allegati.

![](blob:https://pagopa.atlassian.net/85670c15-6988-41de-90c3-f1bfa4fc194a#media-blob-url=true\&id=c104392c-2c19-48e8-b49c-183b4acc3834\&collection=contentId-721158641\&contextId=721158641\&height=1242\&width=1173\&alt=)

**Integrazione: sequenza degli eventi**

Nel diagramma, le frecce in colore blu rappresentano le chiamate che IO fa al _backend_ della tua Organizzazione e corrispondono alle API di _callback_ che dovrai esporre; le frecce in colore verde rappresentano il momento in cui i byte dei tuoi allegati sono trasmessi al Cittadino.

#### I dati di configurazione <a href="#i-dati-di-configurazione" id="i-dati-di-configurazione"></a>

Dopo aver definito il Servizio che userai per spedire i tuoi Messaggi, per abilitarlo all'invio di Allegati dovrai [comunicare a IO](https://docs.pagopa.it/area-riservata-enti-app-io/area-riservata-enti-app-io/processo-di-adesione-a-app-io/processo-di-adesione-a-app-io-premium) alcuni dati chiave:

*   `serviceId`: è l'identificativo del Servizio IO, puoi recuperarlo accedendo alla sezione Servizi dell'Area Riservata

    ![](blob:https://pagopa.atlassian.net/28241e87-0bc3-4a62-9374-61dda955ab92#media-blob-url=true\&id=fdbf9e76-605f-4caa-8f30-da501b69a58f\&collection=contentId-721158641\&contextId=721158641\&height=618\&width=938\&alt=)

    Dove puoi trovare il `serviceId`
* `baseUrl`: IO necessita di richiamare il tuo backend per ottenere le informazioni sugli allegati al tuo Messaggio. La URL che IO utilizzerà per questo scopo è costituita da una parte fissa, `baseUrl`, e una variabile a seconda dello scenario e del messaggio. Esempio di `baseUrl`: `https://integrazione.mioente.it/io`
* `API Key`: è la chiave di autenticazione che IO utilizzerà per richiamare i tuoi endpoint di callback
  * ​⚠ Fai attenzione, _non_ si tratta di una delle chiavi, primaria o secondaria, del tuo Servizio!
  * ​ℹ Puoi concordare con IO il nome del header che veicolerà la API Key

IO memorizzerà queste informazioni e le utilizzerà successivamente nel colloquio con la tua Organizzazione.

#### L'identificativo `{third_party_data.id}` <a href="#lidentificativo-third_party_data.id" id="lidentificativo-third_party_data.id"></a>

Quando invierai un Messaggio che contiene allegati, seguendo [quanto riportato nella Guida Tecnica](https://docs.pagopa.it/io-guida-tecnica/funzionalita/inviare-un-messaggio/aggiungere-allegati-premium), dovrai indicare a IO la presenza dei file associati stabilendo un identificativo (`third_party_data.id`) che consentirà il successivo colloquio tra il _backend_ di IO e quello della tua Organizzazione.

Sei tu a decidere il valore di `third_party_data.id`, ma tieni presente che **deve essere univoco all'interno dell'insieme dei tuoi Servizi IO che condividono il medesimo**`baseUrl` comunicato in fase di onboarding.

Trasmetterai l'identificativo nella richiesta di invio del messaggio e sarà poi utilizzato nell'intero colloquio tra la tua Organizzazione e IO, come riportato nella sequenza illustrata in [**Panoramica**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#panoramica).

#### Esposizione callback <a href="#esposizione-callback" id="esposizione-callback"></a>

Come accennato nella [**Panoramica**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#panoramica), la tua Organizzazione dovrà esporre delle _callback_ (endpoint REST) alle quali l'infrastruttura di IO potrà far capo nel momento in cui dovrà recuperare determinate informazioni relative agli allegati.

In particolare, gli _endpoint_ previsti dal protocollo sono due:

1. 1.quello per il **recupero dei metadati** che descrivono gli allegati a un Messaggio IO: è invocato quando il Cittadino richiede l'apertura di un Messaggio in app e IO si aspetta di ricevere un elenco di entità ciascuna delle quali descrive un Allegato (id univoco, nome e URL relativa)
2. 2.quello per il **recupero dei dati binari** di un determinato allegato a un Messaggio IO: è invocato quando il Cittadino richiede l'apertura di un Allegato dal dettaglio del Messaggio e IO si aspetta di ricevere i byte del file fisico ospitato sui sistemi della tua Organizzazione

Entrambi saranno protetti da autenticazione con API Key, come illustrato in [**I dati di configurazione**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#i-dati-di-configurazione).

Nelle chiamate a entrambi gli endpoint IO aggiungerà l'header `fiscal_code` riportante il codice fiscale del Cittadino destinatario del Messaggio per cui sta richiedendo gli Allegati. Questo ti dà l'opportunità di verificare che il cittadino sia il reale destinatario degli allegati.

Trovi tutte le informazioni di dettaglio circa gli _endpoint_ di _callback_ nella [Guida Tecnica](https://docs.pagopa.it/io-guida-tecnica/funzionalita/inviare-un-messaggio/aggiungere-allegati-premium/specifiche-degli-endpoint-di-recupero-degli-allegati).

### Caso d'uso (esempio) <a href="#caso-duso-esempio" id="caso-duso-esempio"></a>

Il risultato che vogliamo ottenere in questo esempio è che il Cittadino riceva un Messaggio IO simile a quello mostrato di seguito:

![](blob:https://pagopa.atlassian.net/78e9a79f-e28f-4708-8674-0f44723893eb#media-blob-url=true\&id=3e819eaf-b3b0-4971-97e7-1ace8f1ba158\&collection=contentId-721158641\&contextId=721158641\&height=977\&width=465\&alt=)

Esempio di Messaggio con Allegati

Nota la presenza della sezione "Allegati" con l'elenco dei documenti che accompagnano il messaggio.

#### Step 1 - Preparazione degli Allegati <a href="#step-1-preparazione-degli-allegati" id="step-1-preparazione-degli-allegati"></a>

Come prima cosa, una volta implementata l'integrazione tra i sistemi della tua Organizzazione e quelli di IO come riportato in [**Panoramica**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#panoramica), dovrai assicurarti che i file dei tuoi allegati siano a disposizione degli _endpoint_ che avrai esposto verso IO: quando IO ti invocherà utilizzando [**L'identificativo {third\_party\_data.id}**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#lidentificativo-third\_party\_data.id) che avrai comunicato in sede di invio del Messaggio, i tuoi sistemi dovranno individuare il set di allegati corrispondente e tornare le relative informazioni secondo il protocollo stabilito.

In questo tutorial, gli esempi prevedono che a fronte di un `third_party_data.id` con valore `000003` i tuoi sistemi "sappiano" che gli allegati per questo Messaggio sono due:

1. 1.un documento con nome "ricevuta.pdf"
2. 2.un documento con nome "evento.pdf"

È responsabilità della tua Organizzazione persistere i file degli allegati ai suoi Messaggi IO; il processo di integrazione con IO si limita al consentire il recupero fisico dei file in app.

È compito della tua Organizzazione garantire che determinati allegati siano diretti a un determinato Cittadino/utente, nel rispetto dell'Accordo Premium siglato con PagoPA e delle vigenti normative sulla riservatezza dei dati.

#### Step 2 - Invio del Messaggio <a href="#step-2-invio-del-messaggio" id="step-2-invio-del-messaggio"></a>

**Request**

`curl --location --request POST 'https://api.io.pagopa.it/api/v1/messages' \ --header 'Ocp-Apim-Subscription-Key: 217d66f7a83642578111d733e1741813' \ --header 'Content-Type: application/json' \ --data-raw ' { "feature_level_type": "ADVANCED", "time_to_live": 3600, "content": { "subject": "Partecipazione Evento", "markdown": "Gentile Mario Rossi,\n\r\n\rabbiamo accettato la tua richiesta di partecipazione all'\''evento e ti inviamo in allegato la ricevuta del pagamento della tua quota e la brochure con tutte le informazioni utili.\n\rA Ti aspettiamo!\n\rL'\''Amministrazione Comunale di Ipazia.", "third_party_data": { "id": "000003", "has_attachments": true } }, "fiscal_code": "RSRNOU70S54S000L" }'`

*   Il valore del header `Ocp-Apim-Subscription-Key` è la chiave (primaria o secondaria) del tuo Servizio IO: puoi recuperarla accedendo all'Area Riservata e cercando la scheda del tuo Servizio nella pagina "Servizi"

    ![](blob:https://pagopa.atlassian.net/018bd3e1-aab6-4594-8949-d380f4050de1#media-blob-url=true\&id=ab346920-2e8f-4aa7-a72a-f91647e378c2\&collection=contentId-721158641\&contextId=721158641\&height=162\&width=720\&alt=)
* Il valore `"ADVANCED"` per `feature_level_type` identifica un Messaggio Premium: impostalo così per poter aggiungere Allegati al tuo Messaggio
* Componi il tuo messaggio (`subject`, `markdown`) seguendo i consigli riportati nel [Manuale dei Servizi di IO](https://docs.pagopa.it/manuale-servizi/)​
* La presenza della struttura `third_party_data` indica a IO che il tuo Messaggio veicola uno o più Allegati:
  1. 1.`id` è il [**L'identificativo {third\_party\_data.id}**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#lidentificativo-third\_party\_data.id)​
  2. 2.`has_attachments` va obbligatoriamente impostato a `true`
* `fiscal_code` è il Codice Fiscale del destinatario del Messaggio

Se il Servizio IO che stai utilizzando non è pubblicato, dovrai [chiederci di abilitarlo all'invio di messaggi verso uno o più codici fiscali specifici](https://docs.pagopa.it/io-guida-tecnica/abilitazioni/test-con-codici-fiscali-reali). Queste persone, che non dovranno essere cittadini/utenti finali ma membri della tua Organizzazione o comunque incaricati dei test, riceveranno i messaggi che invierai direttamente sulla loro App IO.

Se il Servizio è [pubblicato](https://docs.pagopa.it/manuale-servizi/come-si-crea-un-servizio/pubblicazione-validazione-e-modifica-di-un-servizio/pubblicazione), non sarà necessaria alcuna procedura autorizzativa e potrai inviare messaggi a qualsiasi codice fiscale destinatario. Poni la massima attenzione a questo scenario!

**Response**

`{ "id": "01GS8744E24EZDG3XD5ECXB9RG" }`

Prendi sempre nota dell'identificativo del messaggio ritornato in fase di invio: ti servirà successivamente per [recuperarne lo stato e le informazioni di lettura e pagamento](https://docs.pagopa.it/io-guida-tecnica/api/api-messaggi/get-message).

#### Step 3 - Visualizzazione del Messaggio in App <a href="#step-3-visualizzazione-del-messaggio-in-app" id="step-3-visualizzazione-del-messaggio-in-app"></a>

In seguito alla richiesta di invio del Messaggio, come visto in [**Step 2 - Invio del Messaggio**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#step-2-invio-del-messaggio), l'App IO del destinatario lo riceverà segnalandone la presenza con una notifica "push" (se abilitata sul dispositivo specifico).

Toccando la notifica, oppure aprendo manualmente App IO e toccando il nuovo messaggio nell'elenco dei messaggi ricevuti, l'utente accederà al dettaglio: se tutto sarà andato come previsto, IO avrà contattato i tuoi sistemi per recuperare i metadati degli allegati (numero, nomi e URL relative), potendo così costruire la pagina da mostrarti: nota la sezione Allegati con l'elenco dei tuoi file.

![](blob:https://pagopa.atlassian.net/484c4acc-b780-40d5-b3ca-6f140ed4bfe7#media-blob-url=true\&id=482ff6e5-e747-469e-bef4-ad6b9b93f270\&collection=contentId-721158641\&contextId=721158641\&height=977\&width=465\&alt=)

**A livello di integrazione** il backend di IO avrà effettuato una richiesta GET all'indirizzo `https://integrazione.mioente.it/io/messages/000003`, che avrà costruito come segue (come previsto dalle relative [specifiche OpenAPI](https://editor.swagger.io/?url=https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml)):

* `https://integrazione.mioente.it/io` --> URL di base comunicata all'onboarding (vedi [**I dati di configurazione**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#i-dati-di-configurazione))
* `/messages/` --> percorso costante
* `000003` --> [**L'identificativo {third\_party\_data.id}**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#lidentificativo-third\_party\_data.id)​

L'endpoint avrà risposto con questi dati:

`{ "attachments": [ { "id": "1", "url": "attachments/ricevuta.pdf", "content_type": "application/pdf", "name": "ricevuta.pdf" }, { "id": "2", "url": "attachments/evento.pdf", "content_type": "application/pdf", "name": "evento.pdf" } ] }`

* il campo `id` sarà usato da IO in evoluzioni future. Per il momento è richiesto solo che sia valorizzato in modo univoco, ad esempio puoi usare una nuova [GUID](https://it.wikipedia.org/wiki/GUID)​
*   ![](blob:https://pagopa.atlassian.net/42ca41ff-bbdc-4023-9a5f-65b6d9d69296#media-blob-url=true\&id=21d0ae46-b1db-49f9-8306-07f86ed9c999\&collection=contentId-721158641\&contextId=721158641\&height=200\&width=200\&alt=)

    Il campo `url` deve contenere il percorso relativo per il download dell’allegato, come vedremo meglio in dettaglio tra poco in [**Step 4 - Visualizzazione di un Allegato**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#step-4-visualizzazione-di-un-allegato)​
* Il campo `content_type` deve necessariamente contenere il valore “application/pdf”, in quanto IO supporta unicamente allegati in formato PDF/A (consigliamo ai Mittenti di adottare il formato PDF/A-1a, che garantisce la massima sicurezza e accessibilità per i propri documenti)
* Il campo `name` sarà mostrato come nome dell’allegato nell’elenco in App: sceglilo con cura per comunicare correttamente col tuo utente finale! Deve essere, come nell’esempio, il nome del file che l’utente si ritroverà sul proprio dispositivo se sceglierà di scaricarlo dopo averlo visualizzato: puoi dunque usare un nome del tipo "Ricevuta Evento.pdf" o semplicemente "ricevuta.pdf", _la cosa importante è includere l'estensione ".pdf"_ per consentire all'app e al sistema operativo del dispositivo di trattare correttamente il file eventualmente scaricato dal destinatario

#### Step 4 - Visualizzazione di un Allegato <a href="#step-4-visualizzazione-di-un-allegato" id="step-4-visualizzazione-di-un-allegato"></a>

Toccando uno dei file allegati al tuo Messaggio, il destinatario avvierà il processo per cui IO richiederà alla tua Organizzazione i byte del file corrispondente utilizzando l'apposito endpoint che avrai esposto ([**Esposizione callback**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#esposizione-callback)).

Dopo alcuni secondi, necessari affinché il file sia trasferito dai tuoi sistemi a IO e quindi all'App di destinazione, all'utente sarà mostrato il visualizzatore di PDF integrato in App IO:

![](blob:https://pagopa.atlassian.net/cca3cbc7-ddc2-4004-ab7e-09ccd2bd4c5b#media-blob-url=true\&id=5247777c-8e77-4de6-b6f9-f8a1b3bd0790\&collection=contentId-721158641\&contextId=721158641\&height=977\&width=465\&alt=)

Potrà quindi utilizzare i gesti di zoom e spostamento per esaminare l'allegato più in dettaglio, così come potrà scegliere di:

* condividere l'allegato utilizzando una delle app installate sul suo dispositivo
* salvare il file sul suo dispositivo (viene selezionata automaticamente la cartella dei "download")
* aprire l'allegato con una delle app installate che supporti i documenti in formato PDF

**A livello di integrazione** il backend di IO avrà effettuato una richiesta GET all'indirizzo `https://integrazione.mioente.it/io/messages/000003/attachments/evento.pdf`, che avrà costruito come segue (nel rispetto delle [specifiche OpenAPI](https://editor.swagger.io/?url=https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml)):

* `https://integrazione.mioente.it/io` --> URL di base comunicata all'onboarding (vedi [**I dati di configurazione**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#i-dati-di-configurazione))
* `/messages/` --> percorso costante
* `000003` --> [**L'identificativo {third\_party\_data.id}**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium#lidentificativo-third\_party\_data.id)​
* `/` --> costante
* `/attachments/evento.pdf` --> valore del campo `url` prelevato dalla response del primo endpoint

L'endpoint avrà risposto con lo stream di byte in formato binario del documento `evento.pdf`, al quale avrà aggiunto l'header `content-type` col valore `application/pdf`.
