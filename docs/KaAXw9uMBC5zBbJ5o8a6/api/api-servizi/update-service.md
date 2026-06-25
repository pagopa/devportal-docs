# Update Service

{% hint style="danger" %}
**Deprecata**: A partire dal 30 settembre 2023 questa API non sarà più disponibile. Sostituiscila con [manage-service-update.md](manage-service-update.md "mention")
{% endhint %}

## Descrizione

Questa API aggiorna le informazioni relative ad un servizio. Per funzionare correttamente richiede l'inserimento del **`service_id`** come path parameter.

{% hint style="warning" %}
È obbligatorio utilizzare l’**`api-key` del servizio stesso** o la **`chiave manage`**
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/services/{service_id}" method="put" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Esempi

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request PUT 'https://api.io.pagopa.it/api/v1/services/SERVICE_ID' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{
"service_name": "Test",
"department_name": "IT",
"organization_name": "Test",
"organization_fiscal_code": "00000000001",
"authorized_cidrs": [],
"is_visible": false,
"service_metadata": {
"scope": "LOCAL"
}
}'

```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{
"authorized_cidrs": [],
"authorized_recipients": ["AAAAAA00A00A000A"],
"department_name": "IT",
"id": "SERVICE_ID-0000000000000001",
"is_visible": false,
"max_allowed_payment_amount": 0,
"organization_fiscal_code": "00000000001",
"organization_name": "Test",
"require_secure_channels": false,
"service_id": "SERVICE_ID",
"service_metadata": { "scope": "LOCAL" },
"service_name": "Test",
"version": 1,
"primary_key": "__YOUR_PRIMARY_API_KEY__",
"secondary_key": "__YOUR_SECONDARY_API_KEY__"
}
```
{% endcode %}

## Risorse utili

[https://developer.io.italia.it/openapi.html#operation/updateService](https://developer.io.italia.it/openapi.html#operation/updateService)
