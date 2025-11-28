# Gestione Posizioni Debitorie (GPD)

{% hint style="warning" %}
Tutte le operazioni indicate sono segregate per codice fiscale dell'ente creditore (`organizationfiscalcode`).

In caso di intermediazione, è possibile associare alla _subscription key_ dell'intermediario da _1_ ad _n_ codici fiscali di enti intermediati, ciò consente agli intermediari di utilizzare una sola _subscription key_ per l'invocazione delle API per conto di tutti gli enti intermediati. Tali abilitazioni devono essere richieste a PagoPA contestualmente alla creazione della _subscription key_ o in momenti successivi.

Le _subscription key_ e le relative abilitazioni sono segregate per ambiente _UAT/PROD._
{% endhint %}

<table data-full-width="true"><thead><tr><th>TABELLA DELLE SEZIONI</th></tr></thead><tbody><tr><td><a href="gestione-posizioni-debitorie-gpd.md#pagetpayment">Inserimento/Modifica/Cancellazione/Lettura</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#flussi-di-rendicontazione-deprecated">Flussi di rendicontazione - DEPRECATED </a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura-gestione-massiva-v1">Inserimento/Modifica/Cancellazione/Lettura - Gestione Massiva v1</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura-gestione-massiva-v2">Inserimento/Modifica/Cancellazione/Lettura - Gestione Massiva v2</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#recupero-ricevute">Recupero ricevute</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura--opzioni-di-pagamento">Inserimento/Modifica/Cancellazione/Lettura + Opzioni di Pagamento</a></td></tr></tbody></table>

### Inserimento/Modifica/Cancellazione/Lettura <a href="#pagetpayment" id="pagetpayment"></a>

{% openapi-operation spec="pagopa-SANP3-10-0-gpd" path="/organizations/{organizationfiscalcode}/debtpositions" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd" path="/organizations/{organizationfiscalcode}/debtpositions" method="post" %}
[OpenAPI pagopa-SANP3-10-0-gpd](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json)
{% endopenapi-operation %}

{% hint style="warning" %}
Il _query parameter_ `toPublish` consente di pubblicare automaticamente una posizione debitoria in fase di creazione, impostando questo parametro a `true` e valorizzando contestualmente a `null` il campo `validityDate`, la posizione debitoria andrà direttamente nello stato VALID pronta per essere pagata.
{% endhint %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd" path="/organizations/{organizationfiscalcode}/debtpositions/transfers" method="patch" %}
[OpenAPI pagopa-SANP3-10-0-gpd](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="get" %}
[OpenAPI pagopa-SANP3-10-0-gpd](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json)
{% endopenapi-operation %}

{% openapi-operation spec="pagopa-SANP3-10-0-gpd" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="put" %}
[OpenAPI pagopa-SANP3-10-0-gpd](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json)
{% endopenapi-operation %}

{% hint style="warning" %}
E' importante porre particolare attenzione al campo `notificationFee` che contiene le spese di notifica della posizione debitoria. Questo campo viene gestito in modo esclusivo da Piattaforma Notifiche e l'eventuale importo viene aggiunto automaticamente dal sistema GPD all'importo delle posizioni debitorie.\
L'EC pertanto in fase di aggiornamento dell'importo `amount` di uno dei `transfer` presenti all'interno di una `paymentOption`, non dovrà tenere conto del valore presente all'interno del campo `notificationFee`.
{% endhint %}

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

