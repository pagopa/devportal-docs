# Partita IVA Verification

Per eseguire correttamente il flusso di PartitaIVA Verification bisogna:

* Creare ‘Voucher Interop' ed inserirlo all’interno del Header come Bearer Token.
* Modifica la curl sotto con le informazioni recuperate, quindi il bearerToken ed l’apikey
* Aggiorna il path del file contentente il certificato, con il percorso esatto dove è presente il file sulla macchina dal quale viene testato l’e-service
* Creare apikey come descritto nella sezione “Dettaglio“ ed utilizzarlo anche per le successive chiamate
* Contattare API di Handshake per inserire il certificato:

\
`curl --location "https://mtls.eservices.att.interop.pagopa.it/organizationid-verification/data-preparation/handshake"`

`--header "apikey: apikey"`

`--header "x-correlation-id: 0012"`&#x20;

`--header "Authorization: Bearer {{bearerToken}}"`

`--form "certificate=@\"C:/WORKSPACE/PagoPA/cert.pem\"" -k`

* Contattare l'API di Data Preparation per inserire i dati di test all’interno del database:\
  Nell'esempio di comando curl, è possibile modificare i seguenti parametri:
  * x-correlation-id: aggiornare con un dato valido, come indicato nella sezione ‘Dettaglio’.
  * apikey: creato nel punto precedente.
  * authorization: aggiornare con un token valido.
  * data: JSON della richiesta; è possibile modificare tutti i dati al suo interno, mantenendo invariati i nomi degli attributi. Ad esempio, se si desidera inviare una nuova richiesta aggiornando l’organizationId, si deve modificare il valore dell’attributo "organizationId" con "NUOVO\_ID”.

`curl --location "https://mtls.eservices.att.interop.pagopa.it/organizationid-verification/data-preparation"`

`--header "x-correlation-id: 0013"`

`--header "Content-Type: application/json"`

`--header "Content-Encoding: identity"`

`--header "apikey: your_api_key"`

`--header "Authorization: Bearer {{bearerToken}}"`

`--data "{\"organizationId\": \"11111111111\"}" -k`

* Contattare API per verifica della partita iva:\
  prima di eseguire la curl, aggiorna i dati:
  * cert: path del file contenente il certificato, con il percorso esatto dove è presente il file sulla macchina dal quale viene testato l’e-service
  * key: path del file contenente la key, con il percorso esatto dove è presente il file sulla macchina dal quale viene testato l’e-service

`curl --location "https://mtls.eservices.att.interop.pagopa.it/organizationid-verification/verifica"`

`--header "Content-Encoding: identity"`

`--header "apikey: apikey"`

`--header "x-correlation-id: 0014"`

`--header "Content-Type: application/json"`

`--header "Authorization: Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiIsInVzZSI6InNpZyIsImtpZCI6IjBlNWUxMDZlLTA4MDYtNDQwMi05ZTkzLTFlMGRlN2MwZTQ1OCJ9.eyJhdWQiOiJpbnRlcm9wLWF0dC1lc2VydmljZXMtcGl2YS12ZXIiLCJzdWIiOiI4NTMyZGUyYi0zODZmLTRhYWMtYWRmYy1lNDZkMzM0ZDNhZDAiLCJuYmYiOjE3MjE3NDYyMjEsInB1cnBvc2VJZCI6ImQ4YWU2NjkyLWYzMzgtNDMzYi1iNmIwLWVkOGZhMzZmMjM0MSIsImlzcyI6ImF0dC5pbnRlcm9wLnBhZ29wYS5pdCIsImV4cCI6MTcyMTc0OTgyMSwiaWF0IjoxNzIxNzQ2MjIxLCJjbGllbnRfaWQiOiI4NTMyZGUyYi0zODZmLTRhYWMtYWRmYy1lNDZkMzM0ZDNhZDAiLCJqdGkiOiIyNmZhMWQ0NC0wOWUyLTQ0OTAtOTc1NC1kOGI0YTEzOTkzMTYifQ.ThcgN5MNV1WvdgyheNJ4_N9_JPg4_bkpRIwFZOwxgyHjuzSjbiQPdNVHertYlV6uLnKSD8qRsOAsfjgUB-T-MrpeB5w_8-THYpqWCvi-yRJGrM6X2rAgg-0oAJ_lLusGReM2-eDrtQmha2SZ-FeSnaJu4VZSzO7YcXnWt-cQrUaKLwyFhjJhMqBCaH3Kgwr-TAn3rCBONU3lpNAew2hBe-lgzjH89aiQkbf3lXYWgwuMBPbimivpiZM3ZytsXdC463UmKXzsCIHNm5yVuBjC4dCEy4-tN268j_DRr9kSIBIy_psUUA1P7UOrWERa_k45RkpwXryUHtGJ6Aejkq3LQA"`

`--data "{\"organizationId\": \"11111111111\"}" -k`
