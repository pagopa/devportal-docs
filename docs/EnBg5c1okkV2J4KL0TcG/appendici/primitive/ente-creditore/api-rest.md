# API REST

Per la gestione degli errori fare riferimento a [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").

{% hint style="info" %}
I campi contrassegnati con﹡sono obbligatori
{% endhint %}

Per i dettagli [https://github.com/pagopa/pagopa-api/tree/SANP3.9.1](https://github.com/pagopa/pagopa-api/tree/SANP3.9.1)



## paVerifyPaymentOptions <a href="#pagetpayment" id="pagetpayment"></a>



{% openapi src="../../../.gitbook/assets/openapi EC.json" path="/payment-options/organizations/{paTaxCode}/notices/{noticeId}" method="post" %}
[openapi EC.json](<../../../.gitbook/assets/openapi EC.json>)
{% endopenapi %}







## EC Checkout API

{% openapi src="../../../.gitbook/assets/checkout (5).yaml" path="/carts" method="post" %}
[checkout (5).yaml](<../../../.gitbook/assets/checkout (5).yaml>)
{% endopenapi %}

## Nuove API - Gestione Flussi di Rendicontazione&#x20;

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml" path="/info" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml" path="/organizations/{organizationId}/fdrs" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml" path="/organizations/{organizationId}/fdrs/{fdr}/revisions/{revision}/psps/{pspId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml" path="/organizations/{organizationId}/fdrs/{fdr}/revisions/{revision}/psps/{pspId}/payments" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_organization.yaml)
{% endopenapi %}

## getOrganizationReceipt

Recupero della ricevuta mediante il codice `IUR`

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml" path="/organizations/{organizationfiscalcode}/receipts/{iur}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml)
{% endopenapi %}

Recupero della ricevuta mediante i codici `IUV`

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml" path="/organizations/{organizationfiscalcode}/receipts/{iur}/paymentoptions/{iuv}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml)
{% endopenapi %}

## paCreatePosition

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-aca-service/refs/heads/main/api-spec/aca-api.yaml" path="/paCreatePosition" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-aca-service/refs/heads/main/api-spec/aca-api.yaml](https://raw.githubusercontent.com/pagopa/pagopa-aca-service/refs/heads/main/api-spec/aca-api.yaml)
{% endopenapi %}

