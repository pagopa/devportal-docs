# Come verificare una risposta firmata con INTEGRITY\_REST\_02

Ci sono due casi nei quali si ottiene una risposta firmata con `INTEGRITY_REST_02`:

* un erogatore ha firmato una risposta al fruitore (per maggiori informazioni, si veda il [tutorial dedicato](../tutorial-per-lerogatore/come-firmare-una-risposta-per-un-fruitore.md));
* state ricevendo una risposta dalle [API di PDND Interoperabilità v. 3](https://developer.pagopa.it/it/pdnd-interoperabilita/api/PDND-core-v3?spec=Produzione).

Per maggiori informazioni sulla garanzia della risposta, si veda la [sezione dedicata](../../riferimenti-tecnici/utilizzare-i-voucher/garanzia-dellintegrita-della-risposta.md). Per la specifica tecnica definita da AgID di `INTEGRITY_REST_02`, si veda la versione più recente delle [Linee Guida sull'interoperabilità tecnica delle Pubbliche Amministrazioni — Pattern di sicurezza](https://www.agid.gov.it/sites/agid/files/2024-07/Linee_guida_interoperabilit%C3%A0PA_All2_Pattern_sicurezza.pdf) (paragrafo 5.3, pagg. 44 e seguenti).

La verifica della risposta firmata è una tutela in più per il fruitore, per garantire la non ripudiabilità e l'integrità dei dati, ma non è obbligatorio né per l'erogatore, né per il fruitore.

### Struttura della risposta

Se la risposta è firmata, consisterà di:

* header HTTP `Agid-JWT-Signature`: contiene un JWT con informazioni sulle quali basare le proprie verifiche;
* header HTTP `Digest`: contiene un digest calcolato a partire dai dati contenuti nel payload;
* header HTTP `Content-Type`: indica il `content-type` del payload;
* payload: contiene i dati veri e propri.

### Step 1: Verifica della firma

All'interno dell'header `Agid-JWT-Signature` , il richiedente troverà un JWT. Deserializzando il JWT, nell'header si troverà il campo `kid`.

È necessario verificare che la chiave privata con la quale è stato firmato il JWT corrisponda alla chiave pubblica reperibile attraverso il `kid`. La chiave è esposta in formato JWK.

### Step 1A: Verifica della firma di una risposta firmata da un erogatore

Se si vuole verificare la risposta ottenuta da un erogatore di un e-service, la chiave è disponibile sulle API di PDND Interoperabilità all'endpoint `GET /producerKeys/{kid}` ([ref. endpoint](https://developer.pagopa.it/pdnd-interoperabilita/api/pdnd-core-v2#get-/producerKeys/-kid-)).

Per ottenere la chiave da PDND Interoperabilità, l'aderente deve aver:

* creato un client di tipo API Interop ([vedi tutorial](../tutorial-per-il-fruitore/come-creare-un-client.md));
* generato almeno un set di materiale crittografico e caricato la relativa chiave pubblica su PDND Interoperabilità all'interno del client ([vedi tutorial](../tutorial-per-il-fruitore/come-generare-il-corredo-crittografico-e-caricare-una-chiave-pubblica.md))
* aver ottenuto un voucher valido per le API di PDND Interoperabilità ([vedi tutorial](come-richiedere-un-voucher-bearer-per-le-api-di-pdnd-interoperabilita.md)).

### Step 1B: Verifica della firma di una risposta firmata da PDND Interoperabilità

Se si vuole verificare la risposta ottenuta dalle API di PDND Interoperabilità, la chiave è disponibile sul `.well-known`.  Ad esempio il well-known dell'ambiente di produzione si trova [qui](https://interop.pagopa.it/.well-known/jwks.json).

In questo caso, non è necessario configurare un client. Il `.well-known` è esposto pubblicamente come previsto dalla relativa specifica.

### Step 2: Verifica del digest

Nello stesso JWT deserializzato dello step precedente, nel payload si troverà il campo `signed_headers.digest`.

È necessario verificare che questo digest corrisponda a quello che si trova all'interno dell'header HTTP `Digest` contenuto nella risposta pervenuta.&#x20;

### Step 3: Verifica del payload

Si recupera a questo punto il payload della chiamata e se ne calcola l'hash utilizzando l'algoritmo SHA-256. Il risultato ottenuto viene poi codificato in Base64. Il valore finale (da inserire nell'header) sarà composto dal nome dell'algoritmo seguito dal valore codificato. Ad esempio, un payload come &#x20;

```
{"testo": "Ciao mondo"}
```

deve essere codificato come

```
SHA-256=cFfTOCesrWTLVzxn8fmHl4AcrUs40Lv5D275FmAZ96E=
```

come previsto dall'[RFC-3230](https://www.rfc-editor.org/rfc/rfc3230.html).

La codifica ottenuta deve corrispondere a quella contenuta nell'header HTTP `Digest`. Se c'è corrispondenza, il dato inviato dall'erogatore o dalle API di PDND Interoperabilità è esattamente quello ricevuto dall'aderente.

### Step 4: Verifica degli header

L'ultimo passaggio consiste nel verificare l'integrità degli altri header HTTP coperti dalla firma crittografica.

All'interno del payload del JWT (recuperato dall'header `Agid-JWT-Signature` allo Step 1), il claim `signed_headers` è una lista di oggetti che, oltre al `digest` (già verificato allo Step 2), include le  informazioni relative al formato (`content-type`) e alla compressione del dato originale (`content-encoding`), se presenti nella risposta.

Il fruitore deve estrarre questi valori dal JWT e accertarsi che siano identici ai valori degli omonimi header HTTP presenti nella risposta pervenuta. Se la corrispondenza è esatta, si ha la garanzia crittografica finale che né il payload né i metadati essenziali della comunicazione sono stati alterati in transito, concludendo con successo la validazione del pattern INTEGRITY\_REST\_02.

#### Verifica aggiuntiva degli header di una risposta firmata da PDND Interoperabilità

La risposta firmata da PDND Interoperabilità include nel JWT presente nell'header `Agid-JWT-Signature`  dei claim aggiuntivi:

* `client_id` corrisponde al `client_id` presente nel voucher inviato dal chiamante
* `x-correlation-id` presente nel claim `signed_headers` corrispondente all'header `X-Correlation-Id` della response

***

Pagina successiva [→ Glossario](../../riferimenti-tecnici/glossario.md)
