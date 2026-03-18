# Gestione Posizioni Debitorie (GPD)

{% hint style="warning" %}
Tutte le operazioni indicate sono segregate per codice fiscale dell'ente creditore (`organizationfiscalcode`).

In caso di intermediazione, è possibile associare alla _subscription key_ dell'intermediario da _1_ ad _n_ codici fiscali di enti intermediati, ciò consente agli intermediari di utilizzare una sola _subscription key_ per l'invocazione delle API per conto di tutti gli enti intermediati. Tali abilitazioni devono essere richieste a PagoPA contestualmente alla creazione della _subscription key_ o in momenti successivi.

Le _subscription key_ e le relative abilitazioni sono segregate per ambiente _UAT/PROD._
{% endhint %}

<table data-full-width="true"><thead><tr><th>TABELLA DELLE SEZIONI</th></tr></thead><tbody><tr><td><a href="gestione-posizioni-debitorie-gpd.md#pagetpayment">Inserimento/Modifica/Cancellazione/Lettura</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#flussi-di-rendicontazione-deprecated">Flussi di rendicontazione - DEPRECATED </a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura-gestione-massiva-v1">Inserimento/Modifica/Cancellazione/Lettura - Gestione Massiva v1</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura-gestione-massiva-v2">Inserimento/Modifica/Cancellazione/Lettura - Gestione Massiva v2</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#recupero-ricevute">Recupero ricevute</a></td></tr><tr><td><a href="gestione-posizioni-debitorie-gpd.md#inserimento-modifica-cancellazione-lettura--opzioni-di-pagamento">Inserimento/Modifica/Cancellazione/Lettura + Opzioni di Pagamento</a></td></tr></tbody></table>

### Inserimento/Modifica/Cancellazione/Lettura <a href="#pagetpayment" id="pagetpayment"></a>

* ​[Return the list of the organization debt positions. The due dates interval is mutually exclusive with the payment dates interval.](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/getOrganizationDebtPositions)​
* ​[The Organization creates a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/createPosition)

{% hint style="warning" %}
Il _query parameter_ `toPublish` consente di pubblicare automaticamente una posizione debitoria in fase di creazione, impostando questo parametro a `true` e valorizzando contestualmente a `null` il campo `validityDate`, la posizione debitoria andrà direttamente nello stato VALID pronta per essere pagata.
{% endhint %}

* [The Organization updates the IBANs of every updatable payment](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/updateTransferIbanMassive)​​[option's transfers](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/updateTransferIbanMassive)​
* ​[Return the details of a specific debt position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/getOrganizationDebtPositionByIUPD)​
* ​[The Organization updates a debt position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/updatePosition)​
* ​[The Organization delete a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/deletePosition)​
* ​[The Organization invalidate a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/invalidatePosition)​
* ​[The Organization publish a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/publishPosition)

{% hint style="warning" %}
E' importante porre particolare attenzione al campo `notificationFee` che contiene le spese di notifica della posizione debitoria. Questo campo viene gestito in modo esclusivo da Piattaforma Notifiche e l'eventuale importo viene aggiunto automaticamente dal sistema GPD all'importo delle posizioni debitorie.\
L'EC pertanto in fase di aggiornamento dell'importo `amount` di uno dei `transfer` presenti all'interno di una `paymentOption`, non dovrà tenere conto del valore presente all'interno del campo `notificationFee`.
{% endhint %}

### Flussi di rendicontazione - DEPRECATED&#x20;

{% hint style="warning" %}
Queste API saranno dismesse a partire dal 31/12/2026
{% endhint %}

* [getFlowList](https://developer.pagopa.it/pago-pa/api/gpd-fdr#/pago-pa/api/operations/get-organizations-organizationid-reportings)
* [getFlow](https://developer.pagopa.it/pago-pa/api/gpd-fdr#/pago-pa/api/operations/get-organizations-organizationid-reportings-flowid-date-date)

### Inserimento/Modifica/Cancellazione/Lettura - Gestione Massiva v1

* ​[Returns the debt positions upload status](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/get-debt-positions-upload-status)​
* ​[Returns the debt positions upload report](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/get-debt-positions-upload-report)​
* ​[Returns the list of fileIds for a broker/organization in the given date range (max 7 days)](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/get-debt-positions-fileids)​
* ​[The Organization creates the debt positions listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/update-debt-positions-by-file-upload)​
* ​[The Organization updates the debt positions listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/create-debt-positions-by-file-upload)​
* ​[The Organization deletes the debt positions based on IUPD listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie#/pago-pa/api/operations/delete-debt-positions-by-file-upload)

### Inserimento/Modifica/Cancellazione/Lettura - Gestione Massiva v2

* ​[Returns the debt positions upload report](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/get-debt-positions-upload-report)​
* ​[Returns the debt positions upload status](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/get-debt-positions-upload-status)​
* ​[Returns the list of fileIds for a broker/organization in the given date range (max 7 days)](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/get-debt-positions-fileids).
* ​[The Organization creates the debt positions listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/update-debt-positions-by-file-upload)​
* ​[The Organization updates the debt positions listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/create-debt-positions-by-file-upload)​
* ​[The Organization deletes the debt positions based on IUPD listed in the file](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie?spec=v2#/pago-pa/api/operations/delete-debt-positions-by-file-upload)

### Recupero ricevute

* ​[Return the list of the organization receipts](https://developer.pagopa.it/pago-pa/api/gpd-recupero-receipt#/pago-pa/api/operations/getOrganizationReceipts)​
* ​[Return the details of a specific receipt](https://developer.pagopa.it/pago-pa/api/gpd-recupero-receipt#/pago-pa/api/operations/getReceiptByIUV)

### Inserimento/Modifica/Cancellazione/Lettura + Opzioni di Pagamento

* ​[Return the details of a specific debt position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/getOrganizationDebtPositionByIUPD)​
* ​[The Organization updates a debt position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/updatePosition)​
* ​[The Organization deletes a debt position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/deletePosition)​
* ​[Return the list of the organization debt positions. The due dates interval is mutually exclusive with the payment dates interval](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/getOrganizationDebtPositions)​
* ​[The Organization creates a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/createPosition)​
* ​[The Organization publish a debt Position](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie?spec=GPD%20con%20gestione%20opzioni%20di%20pagamento#/pago-pa/api/operations/publishPosition)

