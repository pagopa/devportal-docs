---
description: >-
  Procedura per il caricamento, la modifica e l'eliminazione massiva delle
  posizioni debitorie su GPD
---

# ⚙️ Gestione massiva tramite API REST

La gestione massiva può essere innescato tramite API le cui specifiche sono riportate di seguito nel documento.\
Mediante l'API `/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file` è possibile innescare il caricamento, la modifica e l'eliminazione massiva delle posizioni debitorie presenti all'interno di un file compresso come descritto in [Specifiche tracciato di input](specifiche-tracciato-di-input.md). \
Il metodo in caso positivo risponde subito con un codice `HTTP 202`, una volta ottenuta una risposta positiva è possibile verificare lo stato dell'operazione massiva mediante l'utilizzo dell'API `/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{fileId}/status`. Per ottenere un report completo, comprensivo degli esiti per ogni posizioni debitoria, è necessario interrogare l'API\
&#x20;`/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{fileId}/report`

{% hint style="info" %}
Le URI che consentono di consultare lo `status` ed il `report` dell'operazione effettuata tramite caricamento sono accessibili inserendo come path param il `fileID` contenuto nel `Location` header delle risposte alle seguenti`API`\
`POST /organizations/{organization-fiscal-code}/debtpositions/file`

`PUT /organizations/{organization-fiscal-code}/debtpositions/file`

`DELETE /organizations/{organization-fiscal-code}/debtpositions/file`

<mark style="color:blue;">"Location" : "brokers/{broker-code}/organizations/{ec-code}/debtpositions/file/{</mark><mark style="color:blue;">**fileID**</mark><mark style="color:blue;">}/status"</mark>
{% endhint %}

### Specifiche API <a href="#specifiche-api" id="specifiche-api"></a>

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="put" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="delete" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-id}/report" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-id}/status" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.8.0/openapi/gpd_massive.json)
{% endswagger %}
