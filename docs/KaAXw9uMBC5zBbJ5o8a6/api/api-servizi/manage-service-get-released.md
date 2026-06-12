# Manage Service: Get Released

## Descrizione

Questa API permette di leggere il dettaglio del servizio nella sua versione approvata e attivata, e richiede  È necessario inserire il **`service_id`** come path parameter.

{% hint style="info" %}
Devi usare la nuova chiave [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage.md) per la gestione dei servizi.&#x20;
{% endhint %}

{% hint style="warning" %}
Per utilizzare questa API è necessario richiedere un'[abilitazione specifica.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/release" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Risorse utili

[https://developer.io.italia.it/openapi.html#operation/cmsGetPublishedService](https://developer.io.italia.it/openapi.html#operation/cmsGetPublishedService)
