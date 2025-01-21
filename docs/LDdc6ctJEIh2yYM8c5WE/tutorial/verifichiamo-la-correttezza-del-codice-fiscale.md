# Verifichiamo la correttezza del Codice Fiscale

Il servizio Accertamento Codice Fiscale simula, a partire da un criterio di ricerca, l’ottenimento del codice fiscale di un cittadino.

Per eseguire correttamente il flusso di Accertamento Codice Fiscale bisogna:

* Creare ‘Voucher Interop' ed inserirlo all’interno del Header come Bearer Token.
* Generare un certificato client, utilizzando il tool OpenSSL, partendo dalla generazione della chiave privata (a 2048 bit nell’esempio):

```bash
openssl genrsa -out private-key.pem 2048
```

per poi generare anche il certificato, contenente al suo interno la chiave pubblica (della durata di 365 giorni nell’esempio):

{% code overflow="wrap" %}
```bash
openssl req -new -x509 -key private-key.pem -out cert.pem -days 365
```
{% endcode %}

* Modifica la curl sotto con le informazioni recuperate, quindi il bearerToken ed l’apikey
* Aggiorna il path del file contentente il certificato, con il percorso esatto dove è presente il file sulla macchina dal quale viene testato l’e-service
* Creare apikey come descritto nella sezione “Dettaglio“ ed utilizzarlo anche per le successive chiamate
* Contattare API di Handshake per inserire il certificato:\


{% code overflow="wrap" %}
```bash
curl --location 'https://mtls.eservices.att.interop.pagopa.it/fiscalcode-verification/data-preparation/handshake'
--header 'apikey: apikey'
--header 'x-correlation-id: 123'
--header 'Authorization: Bearer {{bearerToken-fcv}}'
--form 'certificate=@"/C:/Users/test-cert/cert.pem"'
```
{% endcode %}

* Contattare l'API di Data Preparation per inserire i dati di test all’interno del database.\
  Nell'esempio di comando curl, è possibile modificare i seguenti parametri:
  * x-correlation-id: aggiornare con un dato valido, come indicato nella sezione ‘Dettaglio’.
  * authorization: aggiornare con un token valido.
  * apikey: creato nel punto precedente.
  * data: JSON della richiesta; è possibile modificare tutti i dati al suo interno, mantenendo invariati i nomi degli attributi. Ad esempio, se si desidera inviare una nuova richiesta aggiornando il codice fiscale, si deve modificare il valore dell’attributo "codiceFiscale" con "NUOVO\_CODICE”.

{% code overflow="wrap" %}
```bash
curl --location 'https://mtls.eservices.att.interop.pagopa.it/fiscalcode-verification/data-preparation' \
--header 'x-correlation-id: id' \
--header 'Content-Type: application/json' \
--header 'Content-Encoding: identity' \
--header 'apikey: your_api_key' \
--header 'Authorization: Bearer {{bearerToken-fcv}}' \
--data '{ "codiceFiscale": "1231234" }'
```
{% endcode %}

* Contattare API per verifica del codice fiscale:\
  prima di eseguire la curl, aggiorna i dati:
  * cert: path del file contenente il certificato, con il percorso esatto dove è presente il file sulla macchina dal quale viene testato l’e-service
  * key: path del file contenente la key, con il percorso esatto dove è presente il file sulla macchina dal quale viene testato l’e-service

{% code overflow="wrap" %}
```bash
curl --location 'https://mtls.eservices.att.interop.pagopa.it/fiscalcode-verification/verifica' \
--cert '/mnt/c/Users/test-cert/cert.pem' \
--key '/mnt/c/Users/test-cert/private-key.pem' \
--header 'x-correlation-id: ca8f8bc9-db92-486b-9e46-6c5596f80399' \
--header 'Content-Encoding: identity' \
--header 'apikey: apikey' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiIsInVzZSI6InNpZyIsImtpZCI6IjBlNWUxMDZlLTA4MDYtNDQwMi05ZTkzLTFlMGRlN2MwZTQ1OCJ9.eyJhdWQiOiJpbnRlcm9wLWF0dC1lc2VydmljZXMtZmlzLWNvZGUtdmVyIiwic3ViIjoiODUzMmRlMmItMzg2Zi00YWFjLWFkZmMtZTQ2ZDMzNGQzYWQwIiwibmJmIjoxNzE2NTU1MTI4LCJwdXJwb3NlSWQiOiI5MTBlYmYyMC1lMDVlLTQxNzMtYjY3NC00ZWI0NTQxMDAyZTYiLCJpc3MiOiJhdHQuaW50ZXJvcC5wYWdvcGEuaXQiLCJleHAiOjE3MTY1NjIzMjgsImlhdCI6MTcxNjU1NTEyOCwiY2xpZW50X2lkIjoiODUzMmRlMmItMzg2Zi00YWFjLWFkZmMtZTQ2ZDMzNGQzYWQwIiwianRpIjoiZDAwOTcwNjctNjUwZi00N2Y3LWJlZDgtNDBiOTYyZTQwODA2In0.j15xFa05OnnfHGaYnqnWHbWJNZJ4LQ5fP0eiVp6mp0vkepShpAW8JMdyINVg883In1omHfDnDD-J89-QprotO6Yu_QZCKeQ8DteVOolawfJHwYp9azyvrGP_Qth8fagAOJNEkKzwkC5keJrDKvx9Nq4cL5EUUlFYNR1vUawAh3lzfF1cHP2z6k455ApwmY5Cz7fmos-LzOkD-K4K9Yj2GlRHfMZPSqzIWLG-7s3NPYPpN3RvSRJY5DpuIPrY8g7OCcygQIy_ZUkjiQUtUArxM_0_Pb2Zkyp56u7KlPq25Vt-CUlcSw1Qu_kXuniOk1UsuJIcwqSCv3cI_ioHGPNO9Q' \
--data '{ "codiceFiscale": "BCCBBB88R61A125S" }' \
-k
```
{% endcode %}

\
