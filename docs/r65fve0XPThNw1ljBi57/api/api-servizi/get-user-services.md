# Get User Services

## Descrizione

API che restituisce la lista dei servizi di un utente (`service_id`).

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/services" method="get" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Esempi

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request GET 'https://api.io.pagopa.it/api/v1/services' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__'
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{ "items":
[
"01EWZJJ5MBJ34HKZGB2Z0733D2",
"01EYATQMGR0SQT93001Z3ACZVR"
]
}
```
{% endcode %}

## Risorse utili <a href="#_9qg9y9ak37nv" id="_9qg9y9ak37nv"></a>

[https://developer.io.italia.it/openapi.html#operation/getUserServices](https://developer.io.italia.it/openapi.html#operation/getUserServices)
