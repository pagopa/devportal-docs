# Archivio Centralizzato Avvisi (ACA)

| TABELLA DELLE SEZIONI                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Inserimento tramite vecchia primitiva paCreatePosition](archivio-centralizzato-avvisi-aca.md#pagetpayment)                                                                 |
| [Inserimento puntuale con API di Gestione Posizioni Debitorie (GDP)](archivio-centralizzato-avvisi-aca.md#inserimento-puntuale-con-api-di-gestione-posizioni-debitorie-gdp) |
| [Inserimento massivo con API di Gestione Posizioni Debitorie (GDP)](archivio-centralizzato-avvisi-aca.md#inserimento-massivo-con-api-di-gestione-posizioni-debitorie-gdp)   |

### Inserimento tramite vecchia primitiva paCreatePosition <a href="#pagetpayment" id="pagetpayment"></a>

{% openapi-operation spec="pagopa-SANP3-10-0-paCreatePosition" path="/paCreatePosition" method="post" %}
[OpenAPI pagopa-SANP3-10-0-paCreatePosition](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/paCreatePosition.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-paCreatePosition" schemas="NewDebtPositionRequest,DebtPositionResponse,AmountEuroCents,ProblemJson" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-paCreatePosition](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/paCreatePosition.json)
{% endopenapi-schemas %}

### Inserimento puntuale con API di Gestione Posizioni Debitorie (GDP)

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca" path="/organizations/{organizationfiscalcode}/debtpositions" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca" path="/organizations/{organizationfiscalcode}/debtpositions" method="post" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="put" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="delete" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}/invalidate" method="post" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}/publish" method="post" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca" path="/organizations/{organizationfiscalcode}/paymentoptions/paids/{nav}" method="post" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-gpd-4-aca" schemas="PaymentOptionMetadataModel,PaymentOptionModel,PaymentPositionModel,Stamp,TransferMetadataModel,TransferModel,ProblemJson,AlreadyPaidPaymentOptionModel,PaymentOptionMetadataModelResponse,PaymentsModelResponse,TransferMetadataModelResponse,TransferModelResponse,PageInfo,PaymentOptionModelResponse,PaymentPositionModelBaseResponse,PaymentPositionsInfo,AppInfo" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca.json)
{% endopenapi-schemas %}

### Inserimento massivo con API di Gestione Posizioni Debitorie (GDP)

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="post" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca_massive_v2.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="put" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca_massive_v2.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="delete" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca_massive_v2.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-id}/report" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca_massive_v2.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-id}/status" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca_massive_v2.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-4-aca-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/files" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca_massive_v2.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-gpd-4-aca-massive-v2" schemas="AppInfo,FileIdListResponse,ProblemJson,UploadReportDTO,UploadStatus" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-gpd-4-aca-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd-4-aca_massive_v2.json)
{% endopenapi-schemas %}
