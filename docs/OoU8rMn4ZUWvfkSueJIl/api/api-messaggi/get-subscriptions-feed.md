# Get Subscriptions Feed

## Descrizione

API che permette di ottenere i codici fiscali in modalità hashed che si sono sottoscritti o disiscritti per una specifica data (UTC - YYYY-MM-DD). In questo modo è possibile scaricare gli utenti iscritti ad un servizio (identificato dalla API KEY), facendo una request per ogni giorno a partire dal 24/03/2020 e salvando i dati nella propria infrastruttura.

Per una risposta corretta ottengo:

1. lo status code della risposta è **200**
2. nel body di risposta il campo **subscriptions** e **unsubscriptions**

Lo scopo del subscription feed è mettere a disposizione degli enti centrali uno strumento per minimizzare le chiamate verso l'infrastruttura di IO attraverso un filtro applicato dall’ente stesso.

In nessun caso sarà possibile richiedere i codici fiscali in chiaro.

Prima che un servizio venga messo visibile in app, l'API restituirà l’elenco completo degli hash dei codici fiscali dei cittadini iscritti/disiscritti ad IO in un determinato giorno.

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/subscriptions-feed/{date}" method="get" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Esempi

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request GET 'https://api.io.pagopa.it/api/v1/subscriptions-feed/2020-02-23' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__'
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{
"dateUTC": "2020-02-23",
"subscriptions": [ "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" ],
"unsubscriptions": [ ]
}
```
{% endcode %}

## Risorse utili

[https://developer.io.italia.it/openapi.html#operation/getSubscriptionsFeedForDate](https://developer.io.italia.it/openapi.html#operation/getSubscriptionsFeedForDate)
