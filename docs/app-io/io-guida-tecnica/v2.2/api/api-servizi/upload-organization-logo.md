# Upload organization logo

## Descrizione

API che permette di caricare il logo di una organizzazione. È necessario inserire **`organization_fiscal_code`** come path parameter. Bisogna inoltre inserire nel body del messaggio il logo in formato base64.

{% hint style="warning" %}
È obbligatorio utilizzare l’**api-key del servizio stesso**.
{% endhint %}

{% hint style="warning" %}
**Importante**

* Le dimensioni del logo dovranno essere necessariamente 300x300 pixel.&#x20;
* L'immagine deve essere in formato png con sfondo bianco o trasparente.
{% endhint %}

Per controllare che il logo dell’ente sia caricato correttamente puoi interrogare la seguente URL:

```markup
https://assets.cdn.io.italia.it/logos/organizations/<ORGANIZATION_FISCAL_CODE>.png
```

di cui **`<ORGANIZATION_FISCAL_CODE>`** è l’[`organization_fiscal_code`](../../funzionalita/creare-un-servizio/dati-obbligatori/attributi.md#organization\_fiscal\_code) **privato degli eventuali zeri** iniziali del codice fiscale dell’ente.

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/organizations/{organization_fiscal_code}/logo" method="put" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## Esempi

{% code overflow="wrap" %}
```shell
### REQUEST˙
curl --location --request PUT 'https://api.io.pagopa.it/api/v1/organizations/ORGANIZATION_FISCAL_CODE/logo' \
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

## Risorse utili <a href="#_ng5n9qrjnz38" id="_ng5n9qrjnz38"></a>

[https://developer.io.italia.it/openapi.html#operation/uploadOrganizationLogo](https://developer.io.italia.it/openapi.html#operation/uploadOrganizationLogo)
