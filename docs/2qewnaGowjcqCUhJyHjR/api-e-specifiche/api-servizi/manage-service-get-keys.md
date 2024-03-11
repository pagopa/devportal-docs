# Manage Service: Get keys

## Descrizione

Questa API permette di recuperare le api-key di un servizio, che ti permetteranno di usarlo per esempio per inviare un messaggio. Per funzionare correttamente richiede l'inserimento del **`service_id`** come path parameter.

{% hint style="info" %}
Devi usare la nuova chiave [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage.md) per la gestione dei servizi
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/keys" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Risorse utili <a href="#o8mmtd1j7fhx" id="o8mmtd1j7fhx"></a>

[https://developer.io.italia.it/openapi.html#operation/cmsGetServiceKeys](https://developer.io.italia.it/openapi.html#operation/cmsGetServiceKeys)
