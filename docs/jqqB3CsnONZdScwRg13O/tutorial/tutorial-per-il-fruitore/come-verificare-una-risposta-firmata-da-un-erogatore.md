# Come verificare una risposta firmata da un erogatore

Questo tutorial è complementare a quello [dedicato all'erogatore](../tutorial-per-lerogatore/come-firmare-una-risposta-per-un-fruitore.md).

Nel ModI viene indicato come l'erogatore di un e-service possa l'implementare un pattern per firmare una risposta verso un fruitore che ha effettuato una richiesta. Questo pattern è indicato come `INTEGRITY_REST_02`.

Per maggiori informazioni sulla garanzia della risposta, si veda la [sezione dedicata](../../riferimenti-tecnici/utilizzare-i-voucher/garanzia-dellintegrita-della-risposta.md). Per la specifica tecnica definita da AgID, si veda la versione più recente delle [Linee Guida sull'interoperabilità tecnica delle Pubbliche Amministrazioni — Pattern di sicurezza](https://www.agid.gov.it/sites/agid/files/2024-07/Linee_guida_interoperabilit%C3%A0PA_All2_Pattern_sicurezza.pdf) (paragrafo 5.3, pagg. 44 e seguenti).

La verifica della risposta firmata è una tutela in più per il fruitore, per garantire la non ripudiabilità e l'integrità dei dati, ma non è obbligatoria.

### Struttura della risposta

Se l'erogatore utilizza la funzionalità per firmare la risposta, la risposta consisterà di:

* header HTTP `Agid-JWT-Signature`: contiene un JWT con informazioni relative all'erogatore sulle quali basare le proprie verifiche;
* header HTTP `Digest`: contiene un digest calcolato a partire dai dati contenuti nel payload;
* header HTTP `Accept`: indica il `content-type` del payload;
* payload: contiene i dati veri e propri.

### Step 1: Verifica della firma

All'interno dell'header `Agid-JWT-Signature` , il fruitore troverà un JWT. Deserializzando il JWT, nell'header si troverà il campo `kid`.

È necessario verificare che la chiave privata con la quale è stato firmato il JWT corrisponda alla chiave pubblica reperibile attraverso il `kid`. La chiave è esposta sulle API di PDND Interoperabilità all'endpoint `GET /producerKeys/{kid}` ([ref. endpoint](https://developer.pagopa.it/pdnd-interoperabilita/api/pdnd-core-v2#get-/producerKeys/-kid-)) in formato JWK.

Per ottenere la chiave da PDND Interoperabilità, il fruitore deve aver:

* creato un client di tipo API Interop ([vedi tutorial](come-creare-un-client.md));
* generato almeno un set di materiale crittografico e caricato la relativa chiave pubblica su PDND Interoperabilità all'interno del client ([vedi tutorial](come-generare-il-corredo-crittografico-e-caricare-una-chiave-pubblica.md))
* aver ottenuto un voucher valido per le API di PDND Interoperabilità ([vedi tutorial](come-richiedere-un-voucher-bearer-per-le-api-di-pdnd-interoperabilita.md)).

### Step 2: Verifica del digest

Nello stesso JWT deserializzato dello step precedente, nel payload si troverà il campo `signed_headers.digest`.

È necessario verificare che questo digest corrisponda a quello che si trova all'interno dell'header HTTP `Digest` contenuto nella risposta pervenuta dall'erogatore.&#x20;

### Step 3: Verifica del payload

Si recupera a questo punto il payload della chiamata, lo si codifica in una stringa di byte e lo si sottopone a una funzione di hash utilizzando l'algoritmo SHA-256. Ad esempio, un payload come &#x20;

```
{"testo": "Ciao mondo"}
```

deve essere codificato come

```
SHA-256=cFfTOCesrWTLVzxn8fmHl4AcrUs40Lv5D275FmAZ96E=
```

come previsto dall'[RFC-3230](https://www.rfc-editor.org/rfc/rfc3230.html).

La codifica ottenuta deve corrispondere a quella contenuta nell'header HTTP `Digest`. Se c'è corrispondenza, il dato inviato dall'erogatore è esattamente quello ricevuto dal fruitore.

***

Pagina successiva [→ Tutorial generali](../tutorial-generali/)
