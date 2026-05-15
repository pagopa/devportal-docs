# Create Service

{% hint style="danger" %}
**Deprecata**:  A partire dal 30 settembre 2023 questa API non sarà più disponibile. Sostituiscila con [manage-service-create.md](manage-service-create.md "mention")
{% endhint %}

## Descrizione

Questa API permette di creare un servizio.

{% hint style="info" %}
**Suggerimento:** ti consigliamo di usare la nuova chiave `manage` per la gestione dei servizi, perché la chiave precedente, relativa al singolo servizio, sarà deprecata a breve.
{% endhint %}

{% hint style="warning" %}
Per utilizzare questa API è necessario richiedere un'[abilitazione specifica.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/pagopa/io-services-cms/master/openapi.yaml" path="/services" method="post" %}
[https://raw.githubusercontent.com/pagopa/io-services-cms/master/openapi.yaml](https://raw.githubusercontent.com/pagopa/io-services-cms/master/openapi.yaml)
{% endswagger %}

## Esempi

Ecco un esempio con le informazioni minime per la creazione di un servizio di test:

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request POST 'https://api.io.pagopa.it/api/v1/services' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{
"service_name": "Test",
"department_name": "IT",
"organization_name": "Test",
"organization_fiscal_code": "00000000000",
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
"id": "01EYATQMGR0SQT93001Z3ACZVR-0000000000000000",
"is_visible": false,
"max_allowed_payment_amount": 0,
"organization_fiscal_code": "00000000000",
"organization_name": "Test",
"require_secure_channels": false,
"service_id": "01EYATQMGR0SQT93001Z3ACZVR",
"service_metadata": { "scope": "LOCAL" },
"service_name": "Test",
"version": 0,
"primary_key": "__YOUR_PRIMARY_API_KEY__",
"secondary_key": "__YOUR_SECONDARY_API_KEY__"
}
```
{% endcode %}

## Risorse utili

[https://developer.io.italia.it/openapi.html#operation/createService](https://developer.io.italia.it/openapi.html#operation/createService)
