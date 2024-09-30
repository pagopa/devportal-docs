# Integration via synchronous API

{% hint style="info" %} To manage the errors, refer to [Error management](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention") {% endhint %}

## Centralized Notice Archive 

If the creditors and/or their technological intermediaries and/or technological partners make use of the integration via synchronous API, they are required to assign all debt position data to the Centralized Notice Archive (“ACA”), required for ensuring the measures of operational continuity that must be adopted by operators of payment systems and by critical suppliers of infrastructures or technical services in compliance with the obligations pursuant to art. 146 T.U.B. (Consolidated Banking Law) of monitoring performed by Banca d'Italia.

It remains understood that, for processing personal data connected to the Centralized Notice Archive, PagoPa S.p.A. operates as the autonomous data controller, as the cited law requires that it performs the monitoring obligations specified therein which therefore makes the latter responsible for implementing the above-mentioned purpose of operational continuity and determining the essential means of processing.

Each creditor, at the moment of creating a new debt position, must register it in the ACA using one of the following methods:

* API for creating and updating the [Debt Position Management](../../appendices/debt-positions/available-operations.md#creazione-di-una-posizione-debitoria) (“GPD”) service; 
* API [paCreatePosition](../../appendices/primitive.md#pacreateposition).

If there are cases to evaluate on an individual basis, it is possible to define exclusions from the assignment of positions to the ACA, this setting can be activated via the pagoPA backoffice.

The exclusion conditions will be defined by PagoPA S.p.A. according to an ad hoc process that will be defined in future versions of SANP.

### Assignment via the paCreatePosition

The [paCreatePosition](../../appendices/primitive.md#pacreateposition), thanks to the idempotency property makes it possible to both insert and update the position.

For the procedure for enabling the use of [paCreatePosition](../../appendices/primitive.md#pacreateposition) it is necessary to refer to the chapter [connectivity.md](../../appendices/connectivity.md "mention").

<figure><img src="https://lh3.googleusercontent.com/Vd05z8M6URcVGBWcwhOOsV0cR_Nxo3q1v-yjJnWvYVqk8pQAn9zaTkMwhhSF4PcF3CwhRjdzxEHU8hQ3hH6tMXuIAJJxHjjx0EghovLtMQdtmE-fqxNhpA9mYHAHLM57vfKk6E76vKoDk2rYENBzoo4" alt=""><figcaption></figcaption></figure>

#### **Registration phase**

The request to create a new position reaches the ACA via [ paCreatePosition](https://docs.pagopa.it/sanp/appendices/primitive#pacreateposition), providing the following data as input:

* _paFiscalCode_: fiscal code of the creditor who created the debt position;
* _entityType_: type of debtor (F=physical person, G=legal person);
* _entityFiscalCode_: fiscal code of the debtor;
* _entityFullName_: first and last name of the debtor;
* _nav_: number of the notice;
* _iuv_: univocal payment identifier;
* _amount_: amount (it is not possible to register a position with an amount equal to zero);
* _description_: reason;
* _expirationDate_: expiration date of the debt position;
* _Iban_: Repayment IBAN (optional);
* _postalIban_: Repayment postal IBAN (optional);
* _switchToExpired_: flag for indicating whether or not the dueDate is binding;
* _payStandIn_: flag for indicating whether or not the position can be paid in Stand In mode.

ACA performs a semantic check and supplements the information for the position:

* it is checked if all mandatory fields are present;
* it is checked if the creditor exists on the pagoPA platform;
* recovery of the name of the creditor;
* If the _Iban_ and _postalIban_ fields were not sent, the system recovers the IBAN that will be used during the credit phase by searching for the one configured by the creditor via the pagoPa backoffice or, if this configuration is not present, the one with the most recent change is used.

**Multi-beneficiary positions**

Also the multi-beneficiary debt positions must be sent to the ACA, with the considerations described below.

The fiscal code of the institution that created the debt position must be entered in the _fiscalCodePA_ field.

The data structure confirms that there is a single total amount communicated by the creditor, which represents the sum of the amounts present in the various transfers of the original debt position. This implies that the [stand-in.md](../../implementary-specifications-for-the-SPC-payment-node/general-operation/stand-in.md "mention") functionality, only and exclusively in the case of assignment to the ACA via the [paCreatePosition](https://docs.pagopa.it/sanp/appendices/primitive#pacreateposition), cannot manage the division of the amounts into a multi-beneficiary debt position, as the information necessary for the management of this payment structure is not provided.

{% hint style="info" %} If the payment of a multi-beneficiary debt position takes place in [stand-in.md](../../implementary-specifications-for-the-SPC-payment-node/general-operation/stand-in.md "mention") mode, only and exclusively in the case of assignment to the ACA via the [paCreatePosition](../../appendices/primitive.md#pacreateposition), a single repayment is made to the creditor that created the payment notice for the total amount (creditor indicated in the _fiscalCodePA)_ field, and the latter will be responsible for ensuring the correct division of the payment amounts among the other creditors indicated as beneficiaries according to the methods identified in agreement with secondary creditors. {% endhint %}

**Update phase**

It is mandatory to update the debt position by calling the above-mentioned [paCreatePosition](../../appendices/primitive.md#pacreateposition) API in the following cases:

* update of the amount;
* update of the status, to communicate the closure or cancellation of the position, setting the value of the _amount_ value to zero;
* update of the expiration date.

The call must be made at the same time as the change made in the creditor archive.

Each time a debt position is updated, the platform also automatically updates the information for the IBAN of credit, recovering it from the pagoPA backoffice.

**Cancellation phase**

If a position is canceled or replaced with a new one, it is mandatory to cancel the debt position, calling the above-mentioned API [paCreatePosition](../../appendices/primitive.md#pacreateposition).  

The call must be made at the same time as the change made in the creditor archive.

The cancellation can only be made by setting the value of the _amount_ field to zero.

**Closing phase**

If the debtor pays the debt position using channels different than the pagoPA platform, it is necessary to call the above-mentioned API [paCreatePosition](../../appendices/primitive.md#pacreateposition) to close it.

The position can only be closed by setting the value of the _amount_ field to zero.

## Debt position creation request phase

<figure><img src="https://lh6.googleusercontent.com/R8muVeVP_G3rvkywf5YA5e4oARyXm0EjzcqbRRLuKG4sY3KqpMscEwRnl-nWuYQ1btgpT1asT96DvGqUa59PsyW3277neqsPTx7AfajZthrEUkcqpk-hh4svPRYmZhmgNoq_wudBEy7pyig2IvFAhWQ" alt=""><figcaption></figcaption></figure>

In the case of “Spontaneous payment via a PSP” the paDemandPaymentNotice is used to request the creditor to create the debt position based on the data sent for the specific service, the creditor sends in response the information necessary to start the payment process, in particular:

* number of the notice;
* the fiscal code of the creditor to use during the activation phase;
* the amount.

During this phase the status of the debt position must still be open.

The creditors provide the data for the specific service via the service catalog.

## Verification phase

<figure><img src="https://lh6.googleusercontent.com/QTpKY_38X1xZfCDMGchbWw4m9E9SrCgz3FxNqewCNi6prxrKR4lry7D39AVyMK2llNJR6KdaRN4B8EkbQBFsc3o_jhT4WYXliF24vviYxV9EgFUEcmYTQF5gUA4e-7RS4m5S3LDcbrbY7IW7r_71ILA" alt=""><figcaption></figcaption></figure>

The paVerifyPaymentNotice is used to request the creditor to verify the payment option identified by the notice number, who sends the payment information related to the notice number, in particular:

* amount;
* fiscal code of the beneficiary creditor;
* the allCCP parameter, which indicates whether or not the payment option can be associated to all postal current accounts
  * allCCP = true: the option can be associated with all postal current accounts;
  * allCCP = false: the option cannot be associated with all postal current accounts.

During this phase the status of the debt position must still be open.

The Node performs a semantic check of the response:

* the paymentList must be present;
* the officeName tag is optional, all remaining tags are mandatory.

## Activation phase

<figure><img src="https://lh3.googleusercontent.com/EL6PukaZXmmDYTHBmjMvonObPGIWcm3s48ZO7EGdl8vSBjv1u4ECQyCKhRD0A5btX7BhXERln950nTMEITjeZmM2q8JCWTBAq_xBFgY-MWfrGPVe6mF_gD7BPm1beKi27tAAgK9ZsljL6emcH--m-Cc" alt=""><figcaption></figcaption></figure>

The request to activate the payment reaches the creditor via paGetPayment, the creditor sends the amount of the payment and the data necessary for the repayment of the amount, and in particular for each payment:

* partial amount;
* fiscal code of the beneficiary creditor;
* IBAN to use for the repayment.

During this phase the status of the debt position must still be open, the Node will inhibit other payment attempts for the same notice number.

The Node performs a semantic check of the response:

* it checks the correspondence between the value of the paymentAmount and the total of all the amounts present in the transfers;
* there must be at least one transfer occurrence;
* semantic check of the IBANs in every transfer;
* the existence of the association between fiscalCodePA and IBAN in the Node is checked;
* if there is a secondary creditor, it is checked that it is enabled on the Node.

## Receipt sending phase <a href="#fase-invio-ricevuta" id="fase-invio-ricevuta"></a>

<figure><img src="https://lh5.googleusercontent.com/ZT9xut3UrmTGF6_pcCBZJlDp00T4W3KQ12NjsxjXOzywzPVYyZcCBfe3dHfbMSx_JEgAIWzcKhPLlll_jgq2vwVIQ4Jz7GHH9PomeNpPTE4Hi8r2uLyvya8-y2CXeykMVPujEX5eA96fnFdYYG-TXmE" alt=""><figcaption></figcaption></figure>

By means of the primitive paSendRT, the receipt is sent to the n creditors involved with the payment only if the payment was made, the receipt is an object generated by the pagoPA platform.

In this phase, after receiving the receipt, the debt position must be put in the “closed” state.

If the paSendRT has a timeout/error response or if the creditor cannot be reached, a retry procedure is started to obtain a valid response from the recipient according to the logic of the following table.

| Number of attempts| Interval between each attempt|
|----------|----------|
| 48| 1 hour|

## Receipt recovery

The service is offered to all creditors who, in particular cases, need to recover a receipt that is not available in their system due to specific technical and/or processes errors.

As will be widely explained in the following sections the services is not thought to be used during all phases of the payment process, but only in specific cases and in particular after receiving the reporting flows. Throttling policies have been implemented to protect the nature of the service that limit the number of calls the same creditor can make during a period of time.

<figure><img src="https://lh4.googleusercontent.com/x871MBet02YyYODC_dW5WwseUIAFBo0oPtbrfXb00MRtmQW8G7EKwTPaBeHn3XubHyzd5Uh3hgiVHr5jU-eAQXYgg4I4IJ9EBzg7HpvIUK3Hsv5wvwz3fqGC5yOnEACic9s5atmWj59bgcfrqaMlylQ" alt=""><figcaption></figcaption></figure>

If a receipt is not available while processing the flow, the exception can be managed by attempting to recover it by invoking the getOrganizationReceipt service.

The following diagram shows instead a use case that is not permitted

<figure><img src="https://lh5.googleusercontent.com/D-1q3_OqSug3EEB3S_poUzkA8NEQIWqTnIOaZI3jRjJREnEwcBIqbBHTSgS1UUjolKAKSDI_xXIo5Tb-sAqrO3IV2f9wpLXml83y1I7ZsimqL--HoGC-xldUv5aIFwjWD7Kw67u2javu6bxfr_8y5o8" alt=""><figcaption></figcaption></figure>

It is absolutely prohibited to insert the invocation of the service getOrganizationReceipt within a loop in an indiscriminate manner without there being an error event that justifies its use.

The procedure for registering with the service is described in Registration with services with a subscription key.

After obtaining the subscription key, it is possible to start using the service by invoking the getOrganizationReceipt API.

The details of the signature of the service are provided below:

`GET /organizations/{organizationfiscalcode}/receipts/{iur}/paymentoptions/{iuv}`

As can be seen, the service performs a search for the receipt using three input parameters as a filter, setting the following path parameters as follows:

* organizationalfiscalcode: creditor fiscal code;
* iur: univocal collection identifier, included in the reporting flow received from the pagoPA node by invoking the primitive nodoChiediFlussoRendicontazione;
* iuv: univocal payment identifier, also this is included in the reporting flow.

The service is not designed for massive use, and to protect this characteristic throttling policies have been activated that permit a maximum of 10 calls during a period of 60 minutes for each subscriber to the service.

For all details concerning the correct use of the service, it is possible to refer to the primitive specifications in getOrganizationReceipt. 