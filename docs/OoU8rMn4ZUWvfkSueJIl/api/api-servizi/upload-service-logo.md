# Upload service logo

## Descrizione

API che permette di caricare il logo di un servizio. È necessario inserire il **`service_id`** come path parameter e inserire nel body del messaggio il logo in formato base64.

{% hint style="warning" %}
È obbligatorio utilizzare l’**api-key del servizio stesso**.
{% endhint %}

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/services/{service_id}/logo" method="put" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

{% hint style="warning" %}
**Importante**: Le dimensioni del logo dovranno essere necessariamente 300x300 pixel immagine in formato png con sfondo bianco o trasparente.
{% endhint %}

{% hint style="info" %}
È possibile che eseguendo un caricamento del logo immediatamente dopo la creazione del servizio, l’API restituisca un errore 401. Attendi qualche secondo e riprova il caricamento.
{% endhint %}

Per controllare che il logo del servizio sia caricato correttamente puoi interrogare la seguente URL:

```markup
https://assets.cdn.io.italia.it/logos/services/<SERVICE_ID>.png
```

dove **`<SERVICE_ID>`** è l'[id servizio](../../funzionalita/creare-un-servizio/dati-obbligatori/attributi.md#service\_id) in lowercase.

## Esempi

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request PUT 'https://api.io.pagopa.it/api/v1/services/SERVICE_ID/logo' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{
"logo": "<<Base64ImageString>>"
}'
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{}
```
{% endcode %}

## Risorse utili

[https://developer.io.italia.it/openapi.html#operation/uploadServiceLogo](https://developer.io.italia.it/openapi.html#operation/uploadServiceLogo)
