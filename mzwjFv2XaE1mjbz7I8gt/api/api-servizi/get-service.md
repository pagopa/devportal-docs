# Get Service

### Descrizione

API che permette di recuperare tutte le informazioni relative a un servizio. È necessario inserire il **`service_id`** come path parameter.

{% hint style="warning" %}
È obbligatorio utilizzare l’**api-key del servizio stesso**.
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/services" method="get" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

### Esempi

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request GET 'https://api.io.pagopa.it/api/v1/services/SERVICE_ID' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__'
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{
"authorized_cidrs": [],
"authorized_recipients": ["AAAAAA00A00A000A"],
"department_name": "IT",
"id": "SERVICE_ID-0000000000000000",
"is_visible": false,
"max_allowed_payment_amount": 0,
"organization_fiscal_code": "00000000000",
"organization_name": "PagoPA",
"require_secure_channels": false,
"service_id": "SERVICE_ID",
"service_name": "Test",
"version": 0,
"primary_key": "__YOUR_PRIMARY_API_KEY__",
"secondary_key": "__YOUR_SECONDARY_API_KEY__"
}
```
{% endcode %}

### Risorse utili <a href="#_oglg98gr3m66" id="_oglg98gr3m66"></a>

[https://developer.io.italia.it/openapi.html#operation/getService](https://developer.io.italia.it/openapi.html#operation/getService)
