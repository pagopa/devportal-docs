---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/primitive/psp/api-rest/flussi-di-rendicontazione-fdr
---

# Flussi di Rendicontazione (FdR)

{% openapi-operation spec="pagopa-SANP3-10-0-fdr-psp" path="/psps/{pspId}/created" method="get" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-fdr-psp" path="/psps/{pspId}/created/fdrs/{fdr}/organizations/{organizationId}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-fdr-psp" path="/psps/{pspId}/created/fdrs/{fdr}/organizations/{organizationId}/payments" method="get" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-fdr-psp" path="/psps/{pspId}/fdrs/{fdr}" method="post" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-fdr-psp" path="/psps/{pspId}/fdrs/{fdr}" method="delete" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-fdr-psp" path="/psps/{pspId}/fdrs/{fdr}/payments/add" method="put" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-fdr-psp" path="/psps/{pspId}/fdrs/{fdr}/payments/del" method="put" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-fdr-psp" path="/psps/{pspId}/fdrs/{fdr}/publish" method="post" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-fdr-psp" path="/psps/{pspId}/published" method="get" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-fdr-psp" path="/psps/{pspId}/published/fdrs/{fdr}/revisions/{revision}/organizations/{organizationId}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-fdr-psp" path="/psps/{pspId}/published/fdrs/{fdr}/revisions/{revision}/organizations/{organizationId}/payments" method="get" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-fdr-psp" schemas="AddPaymentRequest,CreateFlowRequest,DeletePaymentRequest,ErrorMessage,ErrorResponse,FlowByCICreated,FlowByCIPublished,FlowByPSP,FlowBySenderAndReceiver,GenericResponse,InfoResponse,Instant,LocalDate,Metadata,PaginatedFlowsBySenderAndReceiverResponse,PaginatedFlowsCreatedResponse,PaginatedFlowsPublishedResponse,PaginatedFlowsResponse,PaginatedPaymentsResponse,Payment,Receiver,ReportingFlowStatusEnum,Sender,SenderTypeEnum,SingleFlowCreatedResponse,SingleFlowResponse" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-fdr-psp](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/fdr_psp.json)
{% endopenapi-schemas %}
