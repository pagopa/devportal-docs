# Manage Service: Regenerate api key

## Descrizione

Questa API aggiorna le api-ley di un servizio. Per funzionare correttamente richiede l'inserimento del **`service_id`** e del del tipo di chiave da rigenerare **`keyType`** (`PRIMARY` o `SECONDARY`) come path parameter.

{% hint style="info" %}
Devi usare la nuova chiave [`manage`](../../funzionalita/pubblicare-un-servizio/chiave-manage.md) per la gestione dei servizi.&#x20;
{% endhint %}

{% hint style="warning" %}
Per utilizzare questa API è necessario richiedere un'[abilitazione specifica.](../../abilitazioni/gestione-dei-servizi.md)
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml" path="/manage/services/{serviceId}/keys/{keyType}" method="put" %}
[https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/pagopa/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Risorse utili <a href="#_o8mmtd1j7fhx" id="_o8mmtd1j7fhx"></a>

[https://developer.io.italia.it/openapi.html#operation/cmsRegenerateServiceKey](https://developer.io.italia.it/openapi.html#operation/cmsRegenerateServiceKey)
