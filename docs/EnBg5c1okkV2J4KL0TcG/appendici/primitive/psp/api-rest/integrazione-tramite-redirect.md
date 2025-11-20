# Integrazione tramite redirect

{% openapi-operation spec="pagopa-SANP3-10-0-redirect" path="/redirections" method="post" %}
[OpenAPI pagopa-SANP3-10-0-redirect](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/redirect.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-redirect" path="/redirections/refunds" method="post" %}
[OpenAPI pagopa-SANP3-10-0-redirect](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/redirect.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-redirect" path="/redirections/{idTransaction}/outcomes" method="post" %}
[OpenAPI pagopa-SANP3-10-0-redirect](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/redirect.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-redirect" schemas="ProblemJson,HttpStatusCode,RedirectUrlRequest,RedirectUrlResponse,RefundResponse,AmountEuroCents,PagopaIdTransaction,RefundOutcome,TransactionResultRequest,TransactionResultDetails,TransactionAuthorizedOutcomeDetails,TransactionDeniedOutcomeDetails,TransactionResultResponse,AuthorizationOutcome,AuthorizationResponseOutcome,RefundRequest" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-redirect](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/redirect.json)
{% endopenapi-schemas %}
