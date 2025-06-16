# API REST

Per la gestione degli errori fare riferimento a [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").

{% hint style="info" %}
I campi contrassegnati con﹡sono obbligatori
{% endhint %}

Per i dettagli [https://github.com/pagopa/pagopa-api/tree/SANP3.9.1](https://github.com/pagopa/pagopa-api/tree/SANP3.9.1)





## verifyPaymentOptions <a href="#pagetpayment" id="pagetpayment"></a>

{% openapi src="../../../.gitbook/assets/openapi (1).json" path="/payment-options/organizations/{fiscal-code}/notices/{notice-number}" method="get" %}
[openapi (1).json](<../../../.gitbook/assets/openapi (1).json>)
{% endopenapi %}

## Nuove API - Gestione Flussi di Rendicontazione

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml" path="/psps/{pspId}/created" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml" path="/psps/{pspId}/created/fdrs/{fdr}/organizations/{organizationId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml" path="/psps/{pspId}/created/fdrs/{fdr}/organizations/{organizationId}/payments" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}" method="delete" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}/payments/add" method="put" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}/payments/del" method="put" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}/publish" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml" path="/psps/{pspId}/published" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml" path="/psps/{pspId}/published/fdrs/{fdr}/revisions/{revision}/organizations/{organizationId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml" path="/psps/{pspId}/published/fdrs/{fdr}/revisions/{revision}/organizations/{organizationId}/payments" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0_01/openapi/fdr_psp.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/master/openapi/redirect.yaml" path="/redirections" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/master/openapi/redirect.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/master/openapi/redirect.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/master/openapi/redirect.yaml" path="/redirections/{idTransaction}/outcomes" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/master/openapi/redirect.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/master/openapi/redirect.yaml)
{% endopenapi %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/master/openapi/redirect.yaml" path="/redirections/refunds" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/master/openapi/redirect.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/master/openapi/redirect.yaml)
{% endopenapi %}
