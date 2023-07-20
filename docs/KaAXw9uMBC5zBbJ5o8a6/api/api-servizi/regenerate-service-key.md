# Regenerate Service Key

{% hint style="danger" %}
**Deprecata**: dal 30 settembre 2023 questa API non sarà più disponibile. Sostituiscila con [manage-service-regenerate-api-key.md](manage-service-regenerate-api-key.md "mention")
{% endhint %}

## Descrizione

Questa API aggiorna le api-ley di un servizio. Per funzionare correttamente richiede l'inserimento del **`service_id`** come path parameter, e la specificazione del tipo di chiave da rigenerare (`PRIMARY_KEY` o `SECONDARY_KEY`).

{% hint style="warning" %}
È obbligatorio utilizzare l’**api-key del servizio stesso**.
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/services/{service_id}/keys" method="put" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Esempi

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request PUT 'https://api.io.pagopa.it/api/v1/services/SERVICE_ID/keys' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{
"key_type": "SECONDARY_KEY"
}'
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{
"primary_key":"__YOUR_PRIMARY_API_KEY__",
"secondary_key":"__YOUR_SECONDARY_API_KEY__"
}
```
{% endcode %}

## Risorse utili <a href="#_o8mmtd1j7fhx" id="_o8mmtd1j7fhx"></a>

[https://developer.io.italia.it/openapi.html#operation/regenerateServiceKey](https://developer.io.italia.it/openapi.html#operation/regenerateServiceKey)