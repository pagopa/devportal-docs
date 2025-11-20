# Gestione Posizioni Debitorie (GPD)

| TABELLA DELLE SEZIONI                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Inserimento/Modifica/Cancellazione/Lettura](gestione-posizioni-debitorie-gpd.md#pagetpayment)                                                                            |
| [Flussi di rendicontazione - DEPRECATED ](gestione-posizioni-debitorie-gpd.md#flussi-di-rendicontazione-deprecated)                                                       |
| [Inserimento/Modifica/Cancellazione/Lettura - Gestione Massiva v1](gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura-gestione-massiva-v1)    |
| [Inserimento/Modifica/Cancellazione/Lettura - Gestione Massiva v2](gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura-gestione-massiva-v2)    |
| [Recupero ricevute](gestione-posizioni-debitorie-gpd.md#recupero-ricevute)                                                                                                |
| [Inserimento/Modifica/Cancellazione/Lettura + Opzioni di Pagamento](gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura--opzioni-di-pagamento) |

### Inserimento/Modifica/Cancellazione/Lettura <a href="#pagetpayment" id="pagetpayment"></a>

{% openapi-operation spec="pagopa-SANP3-10-0-gpd" path="/organizations/{organizationfiscalcode}/debtpositions" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd" path="/organizations/{organizationfiscalcode}/debtpositions" method="post" %}
[OpenAPI pagopa-SANP3-10-0-gpd](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd" path="/organizations/{organizationfiscalcode}/debtpositions/transfers" method="patch" %}
[OpenAPI pagopa-SANP3-10-0-gpd](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="put" %}
[OpenAPI pagopa-SANP3-10-0-gpd](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-gpd" schemas="PaymentOptionMetadataModel,PaymentOptionModel,PaymentPositionModel,Stamp,TransferMetadataModel,TransferModel,ProblemJson,PaymentOptionMetadataModelResponse,TransferMetadataModelResponse,TransferModelResponse,UpdateTransferIbanMassiveModel,UpdateTransferIbanMassiveResponse,PageInfo,PaymentOptionModelResponse,PaymentPositionModelBaseResponse,PaymentPositionsInfo,AppInfo" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-gpd](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json)
{% endopenapi-schemas %}

### Flussi di rendicontazione - DEPRECATED&#x20;

{% hint style="warning" %}
Queste API saranno dismesse a partire dal 31/12/2026
{% endhint %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-fdr" path="/organizations/{organizationId}/reportings" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-fdr](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_fdr.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-fdr" path="/organizations/{organizationId}/reportings/{flowId}/date/{date}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-fdr](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_fdr.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-gpd-fdr" schemas="FlowList,Flow" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-gpd-fdr](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_fdr.json)
{% endopenapi-schemas %}

### Inserimento/Modifica/Cancellazione/Lettura - Gestione Massiva v1

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{upload-id}/status" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-id}/report" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/files" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="post" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="put" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="delete" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-gpd-massive" schemas="AppInfo,FileIdListResponse,ProblemJson,ResponseEntry,UploadReport,UploadStatus" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive.json)
{% endopenapi-schemas %}

### Inserimento/Modifica/Cancellazione/Lettura - Gestione Massiva v2

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-id}/report" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive_v2.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-id}/status" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive_v2.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/files" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive_v2.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="post" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive_v2.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="put" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive_v2.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-massive-v2" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="delete" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive_v2.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-gpd-massive-v2" schemas="AppInfo,FileIdListResponse,ProblemJson,UploadReportDTO,UploadStatus" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-gpd-massive-v2](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_massive_v2.json)
{% endopenapi-schemas %}

### Recupero ricevute

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-payments" path="/payments/{organizationfiscalcode}/receipts" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-payments](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_payments.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-payments" path="/payments/{organizationfiscalcode}/receipts/{iuv}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-payments](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_payments.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-gpd-payments" schemas="ProblemJson,ReceiptModelResponse,ReceiptsInfo,AppInfo" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-gpd-payments](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_payments.json)
{% endopenapi-schemas %}

### Inserimento/Modifica/Cancellazione/Lettura + Opzioni di Pagamento

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-v3" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-v3](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_v3.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-v3" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="put" %}
[OpenAPI pagopa-SANP3-10-0-gpd-v3](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_v3.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-v3" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="delete" %}
[OpenAPI pagopa-SANP3-10-0-gpd-v3](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_v3.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-v3" path="/organizations/{organizationfiscalcode}/debtpositions" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd-v3](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_v3.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-v3" path="/organizations/{organizationfiscalcode}/debtpositions" method="post" %}
[OpenAPI pagopa-SANP3-10-0-gpd-v3](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_v3.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd-v3" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}/publish" method="post" %}
[OpenAPI pagopa-SANP3-10-0-gpd-v3](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_v3.json)
{% endopenapi-operation %}

{% openapi-schemas spec="pagopa-SANP3-10-0-gpd-v3" schemas="DebtorModel,InstallmentMetadataModel,InstallmentModel,PaymentOptionModelV3,PaymentPositionModelV3,Stamp,TransferMetadataModel,TransferModel,ProblemJson,InstallmentModelResponse,PageInfo,PaymentOptionModelResponseV3,PaymentPositionModelResponseV3,PaymentPositionsInfoV3,TransferMetadataModelResponse,TransferModelResponse" grouped="true" %}
[OpenAPI pagopa-SANP3-10-0-gpd-v3](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd_v3.json)
{% endopenapi-schemas %}
