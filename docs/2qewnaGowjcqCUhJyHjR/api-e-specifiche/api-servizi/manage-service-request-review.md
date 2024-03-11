# Manage Service: Request Review

## Descrizione

Questa API sottopone il servizio alla revisione di PagoPA. Per funzionare correttamente richiede l'inserimento del **`service_id`** come path parameter. Puoi richiedere che il servizio venga automaticamente attivato in caso di approvazione specificandolo nel `body` della richiesta.

{% hint style="info" %}
Devi usare la nuova chiave [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage.md) per la gestione dei servizi.&#x20;
{% endhint %}

{% hint style="warning" %}
Per utilizzare questa API è necessario richiedere un'[abilitazione specifica.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/review" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Risorse utili

[https://developer.io.italia.it/openapi.html#operation/cmsReviewService](https://developer.io.italia.it/openapi.html#operation/cmsReviewService)
