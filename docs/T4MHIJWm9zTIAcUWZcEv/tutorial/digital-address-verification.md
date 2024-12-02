# Digital Address Verification

Per eseguire correttamente il flusso di Digital Address Verification bisogna:

* Creare ‘Voucher Interop' ed inserirlo all’interno del Header come Bearer Token.
* Contattare l'API di Data Preparation per inserire i dati di test all’interno del database.\
  Nell'esempio di comando curl, è possibile modificare i seguenti parametri:
  * x-correlation-id: aggiornare con un dato valido, come indicato nella sezione ‘Dettaglio’.
  * authorization: aggiornare con un token valido.
  * digest: aggiornare con un dato valido, come indicato nella sezione ‘Dettaglio’.
  * apikey: aggiornare con un dato valido, come indicato nella sezione ‘Dettaglio’.
  * data: JSON della richiesta; è possibile modificare tutti i dati al suo interno, mantenendo invariati i nomi degli attributi. Ad esempio, se si desidera inviare una nuova richiesta aggiornando il codice fiscale, si deve modificare il valore dell’attributo "codiceFiscale" con "NUOVO\_CODICE”.

`curl --location 'http://eservices.att.interop.pagopa.it/digital-address-verification/data-preparation' \`

`--header 'x-correlation-id: id' \`

`--header 'Content-Type: application/json' \`

`--header 'Content-Encoding: identity' \`

`--header 'digest: SHA-256=your_digest' \`

`--header 'apikey: your_api_key' \`

`--header 'Authorization: Bearer bearerToken-dav' \`

`--data-raw '{ "codiceFiscale": "RRANGL74M28R701B", "since": "2017-07-21T17:32:28Z", "digitalAddress": [ { "digitalAddress": "example@pec.it", "practicedProfession": "AVVOCATO", "usageInfo": { "motivation": "CESSAZIONE_VOLONTARIA", "dateEndValidity": "2017-07-21T17:32:28Z" } } ] }'`

* Contattare l’API 'listDigitalAddress':

\
`curl --location 'http://eservices.att.interop.pagopa.it/digital-address-verification/listDigitalAddress' \`

`--header 'Content-Type: application/json' \`

`--header 'Content-Encoding: identity' \`

`--header 'digest: SHA-256=your_digest' \`

`--header 'apikey: your_api_key' \`

`--header 'Authorization: Bearer {{bearerToken-inad}}' \`

`--data '{ "codiciFiscali": [ "RRANGL74M28R701B" ], "praticalReference": "abc123" }'`

* Nell’Header della response verrà tornato un campo ‘LOCATION' che rappresenta l’endopoint da interrogare per analizzare lo stato della presa in carico.
* Contattare API di ‘state', per conoscere lo stato di avanzamento della richiesta, usando l’endpoint 'LOCATION' precedentemente recuperato:

\
`curl --location --request GET 'http://eservices.att.interop.pagopa.it/digital-address-verification/listDigitalAddress/state/0eb432f8-d358-401b-8475-3686a531fdc0' \`

`--header 'Content-Type: application/json' \`

`--header 'Content-Encoding: identity' \`

`--header 'digest: SHA-256=your_digest' \`

`--header 'apikey: your_api_key' \`

`--header 'Authorization: Bearer {{bearerToken-inad}}' \`

`--data '{ "codiciFiscali": [ "RRANGL74M28R701Z" ], "praticalReference": "abc123" }'`

Quando la response è disponibile, nell’header della precedente chiamata troviamo il path da chiamare per ottenere il dato.

* Infine contattare API di ‘response' per recuperare l'elenco dei domicili digitali individuato dal codice identificativo univoco.

\
curl --location 'http://eservices.att.interop.pagopa.it/digital-address-verification/listDigitalAddress/response/3fdfdc3d-9c17-46d1-8dfc-8c840f0147e8' \\

\--header 'Content-Type: application/json' \\

\--header 'Content-Encoding: identity' \\

\--header 'apikey: your\_api\_key' \\

\--header 'Authorization: Bearer \{{bearerToken-inad\}}'

* Inoltre Il servizio permette di verificare se il domicilio digitale era associato al codice fiscale indicato basandosi su una data di riferimento passata in input all’API…\


`curl --location 'http://eservices.att.interop.pagopa.it/digital-address-verification/verify/RRANGL74M28R701B?digital_address=example%40pec.it&since=2017-05-21T17%3A32%3A28Z&practicalReference=12' \`

`--header 'Content-Type: application/json' \`

`--header 'Content-Encoding: identity' \`

`--header 'apikey: your_api_key' \`

`--header 'Authorization: Bearer {{bearerToken-inad}}'`

* … e permette anche di estrapolare il domicilio digitale corrispondente al codice fiscale al momento della consultazione e anche l'attività professionale esercitata:

\
`curl --location 'http://eservices.att.interop.pagopa.it/digital-address-verification/extract/RRANGL74M28R701B?practicalReference=abc001' \`

`--header 'Content-Type: application/json' \`

`--header 'Content-Encoding: identity' \`

`--header 'apikey: your_api_key' \`

`--header 'Authorization: Bearer {{bearerToken-inad}}'`
