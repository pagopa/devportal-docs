# Accertamento Residenza

Il servizio Accertamento Residenza simula, a partire da un criterio di ricerca, l’ottenimento dei dati di residenza di un cittadino.

Per eseguire correttamente il flusso bisogna:

* Creare ‘Voucher Interop' ed inserirlo all’interno del Header come Bearer Token.
* Contattare l'API di Data Preparation per inserire i dati di test all’interno del database:\
  Nell'esempio di comando curl, è possibile modificare i seguenti parametri:
  * x-correlation-id: aggiornare con un dato valido, come descritto nella sezione ‘Dettaglio’.
  * authorization: aggiornare con un token valido.
  * digest: aggiornare con un dato valido, come descritto nella sezione ‘Dettaglio’.
  * data: JSON della richiesta; è possibile modificare tutti i dati al suo interno, mantenendo invariati i nomi degli attributi. Ad esempio, se si desidera inviare una nuova richiesta aggiornando il codice fiscale, si deve modificare il valore dell’attributo "codiceFiscale" con "NUOVO\_CODICE”.

```
curl--location 'http://eservices.att.interop.pagopa.it/residence-verification/data-preparation'\
    --header 'x-correlation-id: 123'\
    --header 'Content-Type: application/json'\
    --header 'Content-Encoding: identity'\
    --header 'digest: SHA-256=50b79db5561e64c8165374f2ae3ef6b8160ecbe81b85393d4c8efd7482ced6a3'\
    --header 'Authorization: Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiIsInVzZSI6InNpZyIsImtpZCI6IjBlNWUxMDZlLTA4MDYtNDQwMi05ZTkzLTFlMGRlN2MwZTQ1OCJ9.eyJhdWQiOiJpbnRlcm9wLWF0dC1lc2VydmljZXMtcmVzLXZlciIsInN1YiI6Ijg1MzJkZTJiLTM4NmYtNGFhYy1hZGZjLWU0NmQzMzRkM2FkMCIsIm5iZiI6MTcxODc4MTU5NCwicHVycG9zZUlkIjoiZWJhYzEzNGMtNzI0Zi00MzgxLTgxODAtN2YyZTFlYmZlNDY4IiwiaXNzIjoiYXR0LmludGVyb3AucGFnb3BhLml0IiwiZXhwIjoxNzE4Nzg4Nzk0LCJpYXQiOjE3MTg3ODE1OTQsImNsaWVudF9pZCI6Ijg1MzJkZTJiLTM4NmYtNGFhYy1hZGZjLWU0NmQzMzRkM2FkMCIsImp0aSI6IjIwYTY0Njc3LTA2ZjYtNGYwMi1iZWQzLWQ4MmNmODM0ODVkZCJ9.TsUUKIKgbQHYR7Qw6F9G9bSaR3IKSpa7sUPWi5GCJnRMnu_7TYY_DTTqbtfZlRmSPMf68-G3vDXSNmjc9CqOD716mxPIoZB5F2a12W5R7ezTFomGVv-2qMvPa88eq2yqW3Ajv4KMEB3GPmFdYkHGQkgi_HJLmENVE_uQ4P1bKJfG2i543u5laWq8hzae_mWoexi6sNFHpkX4ZpEhOVID5YBQrb088bB0w5buSopDd-hi0wXE__4sfqZGN4a_SBxEcPl4SQh6nE7vkYAI-zgjJe5xydTQCfuHKGO50T_iZoJz1lZPx7slVaDTH4G1KM6VzZTpBQfIVfcDKqg5w-kXxQ'\
    --data '{ "soggetto": { "codiceFiscale": "ABCDEF01G02H3456", "id": "123", "nome": "Pluto", "cognome": "Rossi", "sesso": "M", "datiNascita": { "dataEvento": "2021-11-15", "luogoNascita": { "comune": { "nomeComune": "Roma" }, "localita": { "codiceStato": "ITA" } } } }, "residenza": { "tipoIndirizzo": "Via", "noteIndirizzo": "N/D", "indirizzo": { "cap": "00100", "comune": { "nomeComune": "Roma", "codiceIstat": "123456", "siglaProvinciaIstat": "RM", "descrizioneLocalita": "N/D" }, "frazione": "N/D", "toponimo": { "codSpecie": "1", "specie": "Via", "specieFonte": "N/D", "codToponimo": "1", "denominazioneToponimo": "Via Roma", "toponimoFonte": "N/D" }, "numeroCivico": { "codiceCivico": "N/D", "civicoFonte": "N/D", "numero": "10", "metrico": "N/D", "progSNC": "N/D", "lettera": "A", "esponente1": "N/D", "colore": "N/D", "civicoInterno": { "corte": "N/D", "scala": "N/D", "interno1": "N/D", "espInterno1": "N/D", "interno2": "N/D", "espInterno2": "N/D", "scalaEsterna": "N/D", "secondario": "N/D", "piano": "N/D", "nui": "N/D", "isolato": "N/D" } } }, "localitaEstera": { "indirizzoEstero": { "cap": "12345", "localita": { "descrizioneLocalita": "N/D", "descrizioneStato": "N/D", "codiceStato": "N/D", "provinciaContea": "N/D" }, "toponimo": { "denominazione": "N/D", "numeroCivico": "N/D" } }, "consolato": { "codiceConsolato": "N/D", "descrizioneConsolato": "N/D" } }, "presso": "N/D", "dataDecorrenzaResidenza": "2021-11-15" } }' // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}
```



* Creare token ‘Agid-JWT-Signature' e 'Agid-JWT-TrackingEvidence’ ed inserirli nell’Header della chiamata
* Infine contattare l’API principale di Residence Verification per eseguire il test reale:

Il servizio permette la ricerca dei dati della residenza legati ad un determinato soggetto. E' possibile procedere nella ricerca mediante l’invio di alcuni campi obbligatori e altri facoltativi. All’interno del body è necessario popolare i campi obbligatori, secondo una delle tre opzioni:

* `parametriRicerca.codiceFiscale`

oppure:

* `parametriRicerca.nome`
* `parametriRicerca.cognome`
* `parametriRicerca.sesso`
* `parametriRicerca.datiNascita.dataEvento`\


Uno tra:

* `parametriRicerca.datiNascita.luogoNascita.comune.nomeComune`
* `parametriRicerca.datiNascita.luogoNascita.localita.codiceStato`\
  \
  oppure:\

* `parametriRicerca.idANPR`

```
curl--location 'http://eservices.att.interop.pagopa.it/residence-verification'\
    --header 'Content-Type: application/json'\
    --header 'Content-Encoding: identity'\
    --header 'x-correlation-id: 000'\
    --header 'Agid-JWT-Signature: eyJ0eXAiOiJKV1QiLCJraWQiOiJYMC1pX1ZINHEwN1dNam45bDNERDlQdF9LR0tjQXpkdWRHMTJsWjR2VDYwIiwiYWxnIjoiUlMyNTYifQ.eyJhdWQiOiJodHRwczovL21vZGlwYS12YWwuYW5wci5pbnRlcm5vLml0L2dvdndheS9yZXN0L2luL01pbkludGVybm9Qb3J0YUFOUFIvQzAwMS1zZXJ2aXppb05vdGlmaWNhL3YxIiwic3ViIjoiZjdjMWFkMjAtYjBkOS00MjEyLWIwYjAtNDY1OTI4ODM1NjYzIiwibmJmIjoxNzE2NTM5MjUzLCJpc3MiOiJmN2MxYWQyMC1iMGQ5LTQyMTItYjBiMC00NjU5Mjg4MzU2NjMiLCJzaWduZWRfaGVhZGVycyI6W3siZGlnZXN0IjoiU0hBLTI1Nj1mYjFrb2wwZ0lyUDNaeEE5azBCL1o4WXQ5aERCQlZoV1JWR1U4aWxXZThRPSJ9LHsiY29udGVudC10eXBlIjoiYXBwbGljYXRpb24vanNvbiJ9XSwiZXhwIjoxNzE3MTM5MjUzLCJpYXQiOjE3MTY1MzkyNTMsImp0aSI6ImU1NGRhMGY0LTc1ODgtNGRmOS1hMzZmLWFkNGIxYmE1NDlmZiJ9.WpB3xxs0t6jK2IrVnXat5LjdAmxrf1V33xLKxh0MbuvWlTZDFAdjukwT5NwIkcZsNUka9BBqiJG_n8kNI5iVYzhfJl-9EYp2CUngiiwkzfNauGPvl5BQDEzw67XaAsv1Gs0iLC1am7YLjfO6-2rOlc0PYh9CaYyMH_pLMCWeyHKbrL_QCenk_cQ54YOTcJKU_ZBg1ARf--hBPQbzJ--8pVAIeypjl_jAZKJs40LuKyqNVV9RmZYvJkRgVim0qf2lU1Qdqqb-LpUIzbni61M6fyIJgK-QPD38yowrgkRtnCuvk5UdZ7oe4jM4SUrewd78eUKDq-lO2WfvqPRq8uI6Fw'\
    --header 'Agid-JWT-TrackingEvidence: eyJ0eXAiOiJKV1QiLCJraWQiOiJYMC1pX1ZINHEwN1dNam45bDNERDlQdF9LR0tjQXpkdWRHMTJsWjR2VDYwIiwiYWxnIjoiUlMyNTYifQ.eyJhdWQiOiJodHRwczovL21vZGlwYS12YWwuYW5wci5pbnRlcm5vLml0L2dvdndheS9yZXN0L2luL01pbkludGVybm9Qb3J0YUFOUFIvQzAwMS1zZXJ2aXppb05vdGlmaWNhL3YxIiwic3ViIjoiZjdjMWFkMjAtYjBkOS00MjEyLWIwYjAtNDY1OTI4ODM1NjYzIiwibmJmIjoxNzE2NTM5MjUyLCJwdXJwb3NlSWQiOiI5MjdiYzZjZS02NTk1LTQ4NTgtOTIyYi04ODIwZTczODBmNmEiLCJpc3MiOiJmN2MxYWQyMC1iMGQ5LTQyMTItYjBiMC00NjU5Mjg4MzU2NjMiLCJ1c2VyTG9jYXRpb24iOiIyNi4yLjEyLjIzIiwiZXhwIjoxNzE3MTM5MjUyLCJkbm9uY2UiOiIxMjM0NTY3ODkwMTIzIiwidXNlcklEIjoiVXNlcjEyMyIsImlhdCI6MTcxNjUzOTI1MiwianRpIjoiYjJiZmI1MGQtNjgyMy00Y2VhLTgzMTUtODg3Zjg2OGEwODk3IiwiTG9BIjoiTE9BMyJ9.VDzFhHpZXwCxyQclFF8k2riExlAyhT2-vIykObPZkM6lTLUl2rtFDaROgu-8ZhN2WJJkDlfM2RpxsxFsZvYMMU26RDwEXgg5AaWNnJWsTUtsQo-VxnNmT1azx00wNzCPBbQGWFJPqsURjq9b7j8rJ0fyCQuv7Q8NK5o9uX0yv92dKKVayOn7QOk5ESsZKRV-e5HmBW-sReX84Jfna5bUaTdJ1NVz9E9RsusC9c2D1UuMjo8orOJAqpXBaw-uwDOzbnRSCDCgyvKaHyHyF_hA1FLX3T5CHX0s9BvuytM7WOInGi4sWBjqM0xU23s3yfSW3aNSGecM87XWA7n8T4KuwQ'\
    --header 'digest: SHA-256=fb1kol0gIrP3ZxA9k0B/Z8Yt9hDBBVhWRVGU8ilWe8Q='\
    --header 'Authorization: Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiIsInVzZSI6InNpZyIsImtpZCI6IjBlNWUxMDZlLTA4MDYtNDQwMi05ZTkzLTFlMGRlN2MwZTQ1OCJ9.eyJhdWQiOiJpbnRlcm9wLWF0dC1lc2VydmljZXMtcmVzLXZlciIsInN1YiI6Ijg1MzJkZTJiLTM4NmYtNGFhYy1hZGZjLWU0NmQzMzRkM2FkMCIsIm5iZiI6MTcxODc4MTU5NCwicHVycG9zZUlkIjoiZWJhYzEzNGMtNzI0Zi00MzgxLTgxODAtN2YyZTFlYmZlNDY4IiwiaXNzIjoiYXR0LmludGVyb3AucGFnb3BhLml0IiwiZXhwIjoxNzE4Nzg4Nzk0LCJpYXQiOjE3MTg3ODE1OTQsImNsaWVudF9pZCI6Ijg1MzJkZTJiLTM4NmYtNGFhYy1hZGZjLWU0NmQzMzRkM2FkMCIsImp0aSI6IjIwYTY0Njc3LTA2ZjYtNGYwMi1iZWQzLWQ4MmNmODM0ODVkZCJ9.TsUUKIKgbQHYR7Qw6F9G9bSaR3IKSpa7sUPWi5GCJnRMnu_7TYY_DTTqbtfZlRmSPMf68-G3vDXSNmjc9CqOD716mxPIoZB5F2a12W5R7ezTFomGVv-2qMvPa88eq2yqW3Ajv4KMEB3GPmFdYkHGQkgi_HJLmENVE_uQ4P1bKJfG2i543u5laWq8hzae_mWoexi6sNFHpkX4ZpEhOVID5YBQrb088bB0w5buSopDd-hi0wXE__4sfqZGN4a_SBxEcPl4SQh6nE7vkYAI-zgjJe5xydTQCfuHKGO50T_iZoJz1lZPx7slVaDTH4G1KM6VzZTpBQfIVfcDKqg5w-kXxQ'\
    --data '{ "idOperazioneClient": "001", "parametriRicerca": { "codiceFiscale": "ABCDEF01G02H3456" }, "richiesta": { "dataRiferimentoRichiesta": "2021-11-15", "motivoRichiesta": "string", "casoUso": "string" } }'
```



\
