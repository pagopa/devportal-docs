---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/primitive/ente-creditore/api-rest/recupero-ricevute
---

# Recupero ricevute

{% openapi-operation spec="pagopa-SANP3-10-0-bizevents" path="/organizations/{organizationfiscalcode}/receipts/{iur}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-bizevents](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/biz_events.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-bizevents" path="/organizations/{organizationfiscalcode}/receipts/{iur}/paymentoptions/{iuv}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-bizevents](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/biz_events.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-bizevents" schemas="ProblemJson,CtReceiptModelResponse,Debtor,MapEntry,Payer,TransferPA,AppInfo" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-bizevents](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/biz_events.json)
{% endopenapi-schemas %}
