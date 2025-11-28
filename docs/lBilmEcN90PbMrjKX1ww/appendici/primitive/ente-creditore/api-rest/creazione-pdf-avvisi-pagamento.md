---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/primitive/ente-creditore/api-rest/creazione-pdf-avvisi-pagamento
---

# Creazione pdf avvisi pagamento

{% openapi-operation spec="pagopa-SANP3-10-0-print-payment-notice-service" path="/notices/folder/{folderId}" method="delete" %}
[OpenAPI pagopa-SANP3-10-0-print-payment-notice-service](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/print-payment-notice-service.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-print-payment-notice-service" path="/notices/folder/{folderId}/file/{fileId}/url" method="get" %}
[OpenAPI pagopa-SANP3-10-0-print-payment-notice-service](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/print-payment-notice-service.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-print-payment-notice-service" path="/notices/folder/{folderId}/url" method="get" %}
[OpenAPI pagopa-SANP3-10-0-print-payment-notice-service](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/print-payment-notice-service.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-print-payment-notice-service" path="/notices/folder/{folder_id}/error/{error_id}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-print-payment-notice-service](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/print-payment-notice-service.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-print-payment-notice-service" path="/notices/folder/{folder_id}/status" method="get" %}
[OpenAPI pagopa-SANP3-10-0-print-payment-notice-service](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/print-payment-notice-service.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-print-payment-notice-service" path="/notices/generate" method="post" %}
[OpenAPI pagopa-SANP3-10-0-print-payment-notice-service](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/print-payment-notice-service.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-print-payment-notice-service" path="/notices/generate-massive" method="post" %}
[OpenAPI pagopa-SANP3-10-0-print-payment-notice-service](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/print-payment-notice-service.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-print-payment-notice-service" path="/notices/templates" method="get" %}
[OpenAPI pagopa-SANP3-10-0-print-payment-notice-service](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/print-payment-notice-service.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-print-payment-notice-service" path="/notices/templates/{template_id}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-print-payment-notice-service](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/print-payment-notice-service.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-print-payment-notice-service" schemas="CreditorInstitution,Debtor,GetGenerationRequestStatusResource,GetSignedUrlResource,InstallmentData,Notice,NoticeGenerationMassiveRequest,NoticeGenerationMassiveResource,NoticeGenerationRequestItem,NoticeRequestData,ProblemJson,TemplateResource" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-print-payment-notice-service](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/print-payment-notice-service.json)
{% endopenapi-schemas %}
