---

description: Specifications for the massive loading of debt positions
---

# Massive loading

This section provides all the information necessary for using the functions for the massive loading of the debt positions on the GPD platform.

To make it easier to enter the debt positions related to the creditors that are registered with the pagoPA platform in asynchronous mode, the massive loading function was implemented.

The following paragraphs describe the specifications related to the two interfacing methods made available:

* Loading via API
* Loading via SFTP

## Input trace specifications

Specifications related to files to be used as input for massive loading services

In order to trigger the massive loading process for the debt positions, regardless of the selected method it is necessary to create a file in JSON format according to the specifications provided below in the document.

### File trace

The template for the JSON file to be produced for massive loading is provided below:

```json
{
   "paymentPositions": [
     {
       "iupd": "string",
       "aca" : false,
       "payStandIn" : false,
       "type": "F",
       "fiscalCode": "string",
       "fullName": "string",
       "streetName": "string",
       "civicNumber": "string",
       "postalCode": "string",
       "city": "string",
       "province": "string",
       "region": "string",
       "country": "IT",
       "email": "string",
       "phone": "string",
       "switchToExpired": false,
       "companyName": "string",
       "officeName": "string",
       "validityDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
       "paymentOption": [
         {
           "iuv": "string",
           "amount": 0,
           "description": "string",
           "isPartialPayment": true,
           "dueDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
           "retentionDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
           "fee": 0,
           "transfer": [
             {
               "idTransfer": "1",
               "amount": 0,
               "organizationFiscalCode": "00000000000",
               "remittanceInformation": "string",
               "category": "string",
               "iban": "IT0000000000000000000000000",
               "postalIban": "IT0000000000000000000000000",
               "stamp": {
                 "hashDocument": "string",
                 "stampType": "st",
                 "provincialResidence": "RM"
               },
               "transferMetadata": [
                 {
                   "key": "string",
                   "value": "string"
                 }
               ]
             }
           ],
           "paymentOptionMetadata": [
             {
               "key": "string",
               "value": "string"
             }
           ]
         }
       ]
     }
   ]
 }

```

It is an array of debt positions, the fields were already described in the [Available operations](../available-operations.md) section of the SANP.

### File specifications

The file trace is common to both loading methods `API` and `SFTP`, however particular specifications have been defined below for both of them.

#### SFTP (Secure File Transfer Protocol)

* **file format** ->  `JSON`
* **file dimensions** -> max `100MB` (approx. 100K PD)
* **nomenclature** -> there are no constraints regarding file nomenclature, however the name must be univocal, it is not possible to load two files with the same name

#### API

* **file format** ->  `ZIP` (only one file `JSON` in the archive)
* **file dimensions** -> max `5MB` (approx. 100K PD)
* **nomenclature** -> there are no constraints

{% hint style="info" %} In future versions of the platform, the file dimension limits will be increased. {% endhint %}

## Loading via API

Massive loading can be triggered via API, whose specifications are indicated below.

Via the API `/organizations/{organizationFiscalCode}/debtpositions/file` it is possible to trigger the massive loading of the debt positions present in a compressed file, as described in the [Input trace specifications](massive-loading.md#specifiche-tracciato-di-input).

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="post" %} [https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test) {% endswagger %}

In a positive case, the method responds immediately with an `HTTP 202` code, and once a positive response is obtained it is possible to check the loading progress using the API `/organizations/{organizationFiscalCode}/debtpositions/file/{fileId}/status`. 

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-ID}/status" method="get" %} [https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test) {% endswagger %}

To obtain a complete report, including the outcomes for each debt positions, the API `/organizations/{organizationFiscalCode}/debtpositions/file/{fileId}/report` must be queried.

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-ID}/report" method="get" %} [https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test) {% endswagger %}

## Loading via SFTP

The procedure is described below for massive loading by uploading non-compressed files that respect the specifications described in the section [Input trace specifications](massive-loading.md#specifiche-tracciato-di-input).

### Access credentials

The first step to perform for activating the service is the request to create credentials for accessing the SFTP server.  
The request must be sent directly to the pagoPA-Core team at `pagopa-core@pagopa.it`, specifying the `nome` and `cognome` of the technical representative and an email to which the credentials will be sent.

{% hint style="info" %} It will soon be possible to obtain credentials autonomously by accessing the BackOffice-pagoPA portal {% endhint %}

Once the request is processed, the parameters will be sent for accessing the SFTP folder containing two subfolders, one for input for depositing the files containing the list of the debt positions to be loaded (ref. [Input trace specifications](broken-reference)),and one for output where the platform will provide the outcome of the loading. 

Access credentials:

* `path` - connection string e.g. `pagopadweugpsgpdsasftp.<USERNAME_INPUT>@pagopadweugpsgpdsasftp.blob.core.windows.net` 
* `password` - password referred to the user `USERNAME_INPUT`

Each partner/intermediary will therefore have a folder available, identified by the `codice fiscale`/ `partita iva` and that has the following structure:

```
/CF_BROKER_01 | CF_EC_01 | /input | /output | CF_EC_02 | /input | /output /CF_BROKER_02 | CF_EC_03 | /input | /output
```

### File loading

To trigger the process for loading the debt positions, it is necessary to connect to the folder `/CF_BROKER_ID/CF_EC_ID/input` using the access credentials and upload one or more files in `JSON` format.

{% hint style="info" %} As indicated in the _Input trace specifications_ section, the constraint of univocality of the file name must be respected. {% endhint %}

 Uploading the file to the folder triggers the massive loading process that will have a variable duration based on the size of the loaded files.

Once massive loading is complete, a receipt will be produced for each file in the folder `/CF_BROKER_ID/CF_EC_ID/input`, the receipt is structured as follows:

```json
{ &quot;uploadID&quot;: &quot;string&quot;, &quot;processedItem&quot;: &quot;integer&quot;, &quot;submittedItem&quot;: &quot;integer&quot;, &quot;responses&quot;: [ { &quot;statusCode&quot;: &quot;integer&quot;, &quot;statusMessage&quot;: &quot;string&quot;, &quot;requestIDs&quot;: [ &quot;string&quot; ] } ], &quot;startTime&quot;: &quot;string($date-time)&quot;, &quot;endTime&quot;: &quot;string($date-time)&quot; }
```

* `uploadID` - univocal identifier of the loaded file (coincides with the file name in the case of SFTP)
* `responses` - the list of the loading outcomes grouped by state code and details.
* `requestIDs` - the list of the debt position IDs.
* `startTime` - Date and time of upload process completion
* `endTime` - Date and time of upload process completion