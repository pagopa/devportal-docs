# Manage Service: Delete

## Descrizione

Questa API ti permette di eliminare definitivamente un servizio. Per funzionare correttamente richiede l'inserimento del **`service_id`** come path parameter.

{% hint style="info" %}
Devi usare la nuova chiave [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage.md) per la gestione dei servizi.&#x20;
{% endhint %}

{% hint style="warning" %}
Per utilizzare questa API è necessario richiedere un'[abilitazione specifica.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}" method="delete" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Risorse utili

[https://developer.io.italia.it/openapi.html#operation/cmsDeleteService](https://developer.io.italia.it/openapi.html#operation/cmsDeleteService)
