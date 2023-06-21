---
description: >-
  Approfondimento sul tool PnValidator per facilitare il superamento dei test di
  validazione
---

# Focus sulla validazione dei test con il tool PnValidator

### Come avviare il tool in modalità "debug" per ottenere in console il dettaglio delle chiamate eseguite sul terminale

E' possibile avviare il tool in modalità "debug" con il seguente comando:

```bash
docker run -p 3000:3000 -e LOG_LEVEL=debug ghcr.io/pagopa/pn-local-emulator:latest
```

### Non riesco a portare in true le domande: "Have you created at least one valid notification?", "Have you upload two files using the information of previous step?" e "Have you uploaded one file using the information of previous step?"

In alcuni casi nonostante il tool non sollevi un'eccezione e faccia continuare l'inserimento notifica positivamente, potrebbe capitare che alcune di queste domande non vengano portate in true poichè non vengono rispettati fedelmente i passaggi collegati all'upload dei documenti.\
Di seguito alcuni consigli per superare questa fase:

* E' fondamentale associare correttamente il **ref.key** durante la fase di richiesta di inserimento notifica, il quale dovrà coincidere con quello che si ottiene nella response della chiamata al servizio di _presignedUploadRequest_ in relazione all'allegato corrispondente.
* E' fondamentale verificare che il campo **x-amz-version-id**, ottenuto come header della response collegata all'esito positivo dell'upload dell'allegato, sia valorizzato correttamente nel campo **ref.versionToken** in corrispondenza del documento ad esso associato, nella richiesta di inserimento notifica.
* Durante la fase di upload del documento bisogna fare attenzione che si stia caricando effettivamente il documento corretto, che lo sha256 sia stato generato correttamente e che questo corrisponda durante le fasi di preload documento, upload documento ed inserimento richiesta di notifica.&#x20;

### Non riesco a portare in true la domanda: "Have you honored the retry-after value?"

Questa domanda è l'unica del report che appare in true fin dall'inizio e che diventa false se non viene rispettata la logica del retry-after durante la fase di interrogazione degli stream; una volta passata in false, sarà necessario stoppare e riavviare il tool per completarne la validazione. \
Nel contesto del tool, la verifica del rispetto del parametro retry-after viene effettuata **NON** sul singolo stream ma globalmente sul servizio pertanto per semplificare questo processo, si consiglia di configurare ed utilizzare un solo stream durante la fase di convalida dei test. &#x20;

### Non riesco a portare in true le domande: "Have you downloaded the PDF of the legal facts?" e "Have you requested the metadata of the legal facts?"

Queste domande sono collegate al download dei legalFacts che vengono generati dal tool (si tratta di documenti fittizi) a seguito del buon esito dell'inserimento della notifica. Le domande passano in true se si chiama prima il servizio _retrieveLegalFact_ e subito dopo si effettua il download del documento con i meta-dati ottenuti; mentre passano in false se non corrisponde il download del documento in corrispondenza di **OGNI** chiamata al servizio _retrieveLegalFact_. \
Questo passaggio è composto da 2 fasi:

**1) Effettuare la richiesta per ottenere la url per scaricare un legalFact:**

Chiamata con metodo `GET` su endpoint `http://<urlValidator>/delivery-push/<iunDellaNotifica>/legal-facts/<legalFactType>/<legalFactId>.`



```bash
curl --request GET 'http://<urlValidator>/delivery-push/<iunDellaNotifica>/legal-facts/<legalFactType>/<legalFactId>
--header 'Accept: application/json' \
--header 'x-api-key: key-value'
```

Sostituendo i seguenti:

* **\<urlValidator>:** inserire la url del validator (se avviato con le istruzioni standard è localhost:3000)
* **\<iunDellaNotifica>:** è lo IUN della notifica inserita verso il validator
* **\<legalFactType>:** è il legalFactType del documento che si vuole scaricare
* **\<legalFactId>:** è il legalFactId del documento che si vuole scaricare

Si ottiene la seguente risposta:

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
"filename": "dummy-filename",
"contentLength": 10,
"url": "http://0.0.0.0:3000/download/sample.pdf?correlation-id=GVSJ-EDOR-XJJU-526955-P-0"
}
```

Dove **correlation-id** è un codice di riferimento per il documento richiesto ed è gestito dal tool.\
Dopo questa chiamata il check _"Have you requested the metadata of the legal facts?"_ sarà valorizzato a true.

**2) Effettuare il download del legalFact**

Effettuare una richiesta GET sull’URL restituito nella chiamata precedente:

```bash
curl --request GET 'http://0.0.0.0:3000/download/sample.pdf?correlation-id=GVSJ-EDOR-XJJU-526955-P-0' \
--header 'Accept: application/json' \
--header 'x-api-key: key-value'
```

**NOTA:** fare attenzione che il correlation-id corrisponda a quello ottenuto nella chiamata precedente

Dopo aver eseguito questa chiamata ed aver scaricato il pdf restituito in locale, il check _"Have you downloaded the PDF of the legal facts?"_ sarà valorizzato a true.

**ATTENZIONE:** Quando si richiede l’URL di download di un legalFact, il primo check sarà valorizzato a true.

**2) Effettuare il download del legalFact**

Effettuare una richiesta GET sull’URL restituito nella chiamata precedente:

```bash
curl --request GET 'http://0.0.0.0:3000/download/sample.pdf?correlation-id=GVSJ-EDOR-XJJU-526955-P-0' \
--header 'Accept: application/json' \
--header 'x-api-key: key-value'
```

**NOTA:** fare attenzione che il correlation-id corrisponda a quello ottenuto nella chiamata precedente

<mark style="color:red;">**ATTENZIONE:**</mark> Quando si richiede l’URL di download di un legalFact, il check _"Have you downloaded the PDF of the legal facts?"_ diventa false, poichè il sistema si attende che venga finalizzato il download invocando l’URL restituito dalla chiamata. \
Se per qualche motivo si perde l’URL restituito (ovvero quello che contiene **correlation-id**), non sarà più possibile far valorizzare a true il check e sarà necessario riavviare il tool ed eseguire da capo la validazione.

**NOTA:** si evidenzia che è sufficiente scaricare anche solo il legalFact con category _SENDER\_ACK_ per convalidare questo test.

