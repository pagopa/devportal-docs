# v. 2 produzione

## PDND Interoperability API (vv2)

### Server URLs

* https://api.interop.pagopa.it/v2

### Authentication

* **bearerAuth**: http

### Endpoints

#### GET /agreements

Retrieve a list of Agreements based on filters

**operationId**: `getAgreements`

**Parameters**

| Parameter                                      | Description                                                                               |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **states** (_query_, _optional_, _array_)      | Filter Agreements by states. If not specified, return Agreements in any state             |
| **producerIds** (_query_, _optional_, _array_) | Filter Agreements by producer IDs. If not specified, return Agreements for any producer   |
| **consumerIds** (_query_, _optional_, _array_) | Filter Agreements by consumer IDs. If not specified, return Agreements for any consumer   |
| **eserviceIds** (_query_, _optional_, _array_) | Filter Agreements by E-Service IDs. If not specified, return Agreements for any E-Service |
| **offset** (_query_, **required**, _integer_)  | Pagination starting position                                                              |
| **limit** (_query_, **required**, _integer_)   | Maximum number of results to return                                                       |

**Responses**

| HTTP Code | Description          |
| --------- | -------------------- |
| 200       | Agreements retrieved |
| 400       | Bad Request          |
| 401       | Unauthorized         |
| 429       | Too Many Requests    |

***

#### POST /agreements

Create a new Agreement in Draft state

**operationId**: `createAgreement`

**Responses**

| HTTP Code | Description       |
| --------- | ----------------- |
| 201       | Agreement created |
| 400       | Bad Request       |
| 401       | Unauthorized      |
| 403       | Forbidden         |
| 409       | Conflict          |
| 429       | Too Many Requests |

***

#### GET /agreements/{agreementId}

Retrieve an Agreement

**operationId**: `getAgreement`

**Responses**

| HTTP Code | Description         |
| --------- | ------------------- |
| 200       | Agreement retrieved |
| 400       | Bad Request         |
| 401       | Unauthorized        |
| 403       | Forbidden           |
| 404       | Not Found           |
| 429       | Too Many Requests   |

***

#### POST /agreements/{agreementId}/approve

Approve an Agreement that is in Pending state, transitioning it to Active state

**operationId**: `approveAgreement`

**Responses**

| HTTP Code | Description        |
| --------- | ------------------ |
| 200       | Agreement approved |
| 400       | Bad Request        |
| 401       | Unauthorized       |
| 403       | Forbidden          |
| 404       | Not Found          |
| 409       | Conflict           |
| 429       | Too Many Requests  |

***

#### POST /agreements/{agreementId}/reject

Reject an Agreement that is in Pending state, transitioning it to Rejected state

**operationId**: `rejectAgreement`

**Responses**

| HTTP Code | Description        |
| --------- | ------------------ |
| 200       | Agreement rejected |
| 400       | Bad Request        |
| 401       | Unauthorized       |
| 403       | Forbidden          |
| 404       | Not Found          |
| 429       | Too Many Requests  |

***

#### POST /agreements/{agreementId}/submit

Submit an Agreement that is in Draft state, transitioning it to Active state if all requirements are satisfied, to Pending otherwise

**operationId**: `submitAgreement`

**Responses**

| HTTP Code | Description               |
| --------- | ------------------------- |
| 200       | Draft agreement submitted |
| 400       | Bad Request               |
| 401       | Unauthorized              |
| 403       | Forbidden                 |
| 404       | Not Found                 |
| 409       | Conflict                  |
| 429       | Too Many Requests         |

***

#### POST /agreements/{agreementId}/suspend

Suspend an Agreement that is in Active or Suspended state, transitioning it to Suspended state An Agreement may already be in Suspended state when previously suspended by the consumer or the producer

**operationId**: `suspendAgreement`

**Responses**

| HTTP Code | Description                |
| --------- | -------------------------- |
| 200       | Active agreement suspended |
| 400       | Bad Request                |
| 401       | Unauthorized               |
| 403       | Forbidden                  |
| 404       | Not Found                  |
| 429       | Too Many Requests          |

***

#### POST /agreements/{agreementId}/unsuspend

Unsuspend an Agreement that is in Suspended state, transitioning it to Active or Suspended state An Agreement may remain in Suspended state when suspended also by the consumer or the producer

**operationId**: `unsuspendAgreement`

**Responses**

| HTTP Code | Description           |
| --------- | --------------------- |
| 200       | Agreement unsuspended |
| 400       | Bad Request           |
| 401       | Unauthorized          |
| 403       | Forbidden             |
| 404       | Not Found             |
| 429       | Too Many Requests     |

***

#### POST /agreements/{agreementId}/upgrade

Upgrade the Agreement to a newer E-Service version, if available The current Agreement will be archived and a new Agreement will be created, in the same state

**operationId**: `upgradeAgreement`

**Responses**

| HTTP Code | Description       |
| --------- | ----------------- |
| 200       | Agreement updated |
| 400       | Bad Request       |
| 401       | Unauthorized      |
| 403       | Forbidden         |
| 404       | Not Found         |
| 429       | Too Many Requests |

***

#### GET /consumerDelegations

Retrieve a list of Consumer Delegations based on filters

**operationId**: `getConsumerDelegations`

**Parameters**

| Parameter                                       | Description                                                                                                   |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **states** (_query_, _optional_, _array_)       | Filter Consumer Delegations by states. If not specified, return Consumer Delegations in any state             |
| **delegatorIds** (_query_, _optional_, _array_) | Filter Consumer Delegations by delegator IDs. If not specified, return Consumer Delegations for any delegator |
| **delegateIds** (_query_, _optional_, _array_)  | Filter Consumer Delegations by delegate IDs. If not specified, return Consumer Delegations for any delegate   |
| **eserviceIds** (_query_, _optional_, _array_)  | Filter Consumer Delegations by E-Service IDs. If not specified, return Consumer Delegations for any E-Service |
| **offset** (_query_, **required**, _integer_)   | Pagination starting position                                                                                  |
| **limit** (_query_, **required**, _integer_)    | Maximum number of results to return                                                                           |

**Responses**

| HTTP Code | Description                    |
| --------- | ------------------------------ |
| 200       | Consumer Delegations retrieved |
| 400       | Bad Request                    |
| 401       | Unauthorized                   |
| 429       | Too Many Requests              |

***

#### POST /consumerDelegations

Create a new Consumer Delegation in Waiting for Approval state

**operationId**: `createConsumerDelegation`

**Responses**

| HTTP Code | Description                 |
| --------- | --------------------------- |
| 201       | Consumer Delegation created |
| 400       | Bad Request                 |
| 401       | Unauthorized                |
| 403       | Forbidden                   |
| 409       | Conflict                    |
| 429       | Too Many Requests           |

***

#### POST /consumerDelegations/{delegationId}/accept

Accept a Consumer Delegation that is in Waiting for Approval state, transitioning it to Active state

**operationId**: `acceptConsumerDelegation`

**Responses**

| HTTP Code | Description                  |
| --------- | ---------------------------- |
| 200       | Consumer Delegation accepted |
| 400       | Bad Request                  |
| 401       | Unauthorized                 |
| 403       | Forbidden                    |
| 404       | Not Found                    |
| 409       | Conflict                     |
| 429       | Too Many Requests            |

***

#### POST /certifiedAttributes

Create a certified Attribute The Attribute must

* have a unique name across all Attributes in the Platform
* have a unique code across certified Attributes owned by the requester

**operationId**: `createCertifiedAttribute`

**Responses**

| HTTP Code | Description                 |
| --------- | --------------------------- |
| 201       | Certified Attribute created |
| 400       | Bad Request                 |
| 401       | Unauthorized                |
| 403       | Forbidden                   |
| 409       | Conflict                    |
| 429       | Too Many Requests           |

***

#### GET /certifiedAttributes/{attributeId}

Retrieve a certified Attribute

**operationId**: `getCertifiedAttribute`

**Responses**

| HTTP Code | Description                   |
| --------- | ----------------------------- |
| 200       | Certified attribute retrieved |
| 400       | Bad Request                   |
| 401       | Unauthorized                  |
| 404       | Not Found                     |
| 429       | Too Many Requests             |

***

#### POST /clients/{clientId}/purposes

Link a Client to a Purpose The Purpose must be in Active or Suspended state

**operationId**: `addClientPurpose`

**Responses**

| HTTP Code | Description                  |
| --------- | ---------------------------- |
| 204       | Client linked to the Purpose |
| 400       | Bad Request                  |
| 401       | Unauthorized                 |
| 403       | Forbidden                    |
| 404       | Not Found                    |
| 409       | Conflict                     |
| 429       | Too Many Requests            |

***

#### POST /consumerDelegations/{delegationId}/reject

Reject a Consumer Delegation that is in Waiting for Approval state, transitioning it to Rejected state

**operationId**: `rejectConsumerDelegation`

**Responses**

| HTTP Code | Description                  |
| --------- | ---------------------------- |
| 200       | Consumer Delegation rejected |
| 400       | Bad Request                  |
| 401       | Unauthorized                 |
| 403       | Forbidden                    |
| 404       | Not Found                    |
| 429       | Too Many Requests            |

***

#### GET /eservices

Retrieve a list of E-Services based on filters

**operationId**: `getEServices`

**Parameters**

| Parameter                                      | Description                                                                                                                |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **producerIds** (_query_, _optional_, _array_) | Filter E-Services by producer IDs. If not specified, return E-Services for any producer                                    |
| **templateIds** (_query_, _optional_, _array_) | Filter E-Services by template IDs. If not specified, return E-Services for any template, and E-Services without a template |
| **offset** (_query_, **required**, _integer_)  | Pagination starting position                                                                                               |
| **limit** (_query_, **required**, _integer_)   | Maximum number of results to return                                                                                        |

**Responses**

| HTTP Code | Description          |
| --------- | -------------------- |
| 200       | E-Services retrieved |
| 400       | Bad Request          |
| 401       | Unauthorized         |
| 429       | Too Many Requests    |

***

#### GET /eservices/{eserviceId}

Retrieve an E-Service

**operationId**: `getEService`

**Responses**

| HTTP Code | Description         |
| --------- | ------------------- |
| 200       | E-Service retrieved |
| 400       | Bad Request         |
| 401       | Unauthorized        |
| 404       | Not Found           |
| 429       | Too Many Requests   |

***

#### GET /eservices/{eserviceId}/descriptors

Retrieve a list of E-Service Descriptors based on filters

**operationId**: `getEServiceDescriptors`

**Parameters**

| Parameter                                     | Description                                                                     |
| --------------------------------------------- | ------------------------------------------------------------------------------- |
| **state** (_query_, _optional_, _string_)     | Filter Descriptors by states. If not specified, return Descriptors in any state |
| **offset** (_query_, **required**, _integer_) | Pagination starting position                                                    |
| **limit** (_query_, **required**, _integer_)  | Maximum number of results to return                                             |

**Responses**

| HTTP Code | Description                     |
| --------- | ------------------------------- |
| 200       | E-Service Descriptors retrieved |
| 400       | Bad Request                     |
| 401       | Unauthorized                    |
| 404       | Not Found                       |
| 429       | Too Many Requests               |

***

#### GET /eservices/{eserviceId}/descriptors/{descriptorId}

Retrieve an E-Service Descriptor

**operationId**: `getEServiceDescriptor`

**Responses**

| HTTP Code | Description                    |
| --------- | ------------------------------ |
| 200       | E-Service Descriptor retrieved |
| 400       | Bad Request                    |
| 401       | Unauthorized                   |
| 404       | Not Found                      |
| 429       | Too Many Requests              |

***

#### GET /eservices/{eserviceId}/descriptors/{descriptorId}/interface

Download the interface document of an E-Service Descriptor

**operationId**: `downloadEServiceDescriptorInterface`

**Responses**

| HTTP Code | Description                                                                                |
| --------- | ------------------------------------------------------------------------------------------ |
| 200       | E-Service Descriptor interface retrieved, a multipart containing the file and its metadata |
| 400       | Bad Request                                                                                |
| 401       | Unauthorized                                                                               |
| 404       | Not Found                                                                                  |
| 429       | Too Many Requests                                                                          |

***

#### GET /eserviceTemplates/{templateId}

Retrieve an E-Service Template

**operationId**: `getEServiceTemplate`

**Responses**

| HTTP Code | Description                  |
| --------- | ---------------------------- |
| 200       | E-Service Template retrieved |
| 400       | Bad Request                  |
| 401       | Unauthorized                 |
| 404       | Not Found                    |
| 429       | Too Many Requests            |

***

#### GET /eserviceTemplates/{templateId}/versions

Retrieve a list of E-Service Template Versions based on filters

**operationId**: `getEServiceTemplateVersions`

**Parameters**

| Parameter                                     | Description                                                               |
| --------------------------------------------- | ------------------------------------------------------------------------- |
| **state** (_query_, _optional_, _string_)     | Filter Versions by states. If not specified, return Versions in any state |
| **offset** (_query_, **required**, _integer_) | Pagination starting position                                              |
| **limit** (_query_, **required**, _integer_)  | Maximum number of results to return                                       |

**Responses**

| HTTP Code | Description                           |
| --------- | ------------------------------------- |
| 200       | E-Service Template Versions retrieved |
| 400       | Bad Request                           |
| 401       | Unauthorized                          |
| 404       | Not Found                             |
| 429       | Too Many Requests                     |

***

#### GET /eserviceTemplates/{templateId}/versions/{versionId}

Retrieve an E-Service Template Version

**operationId**: `getEServiceTemplateVersion`

**Responses**

| HTTP Code | Description                          |
| --------- | ------------------------------------ |
| 200       | E-Service Template Version retrieved |
| 400       | Bad Request                          |
| 401       | Unauthorized                         |
| 404       | Not Found                            |
| 429       | Too Many Requests                    |

***

#### GET /keys/{kid}

Retrieve the JWK by kid

**operationId**: `getJWKByKid`

**Parameters**

| Parameter                                | Description                            |
| ---------------------------------------- | -------------------------------------- |
| **kid** (_path_, **required**, _string_) | The unique identifier of the Key (kid) |

**Responses**

| HTTP Code | Description   |
| --------- | ------------- |
| 200       | Key retrieved |
| 401       | Unauthorized  |
| 404       | Key not found |

***

#### GET /producerKeys/{kid}

Retrieve the Producer JWK by kid

**operationId**: `getProducerJWKByKid`

**Parameters**

| Parameter                                | Description                                     |
| ---------------------------------------- | ----------------------------------------------- |
| **kid** (_path_, **required**, _string_) | The unique identifier of the Producer Key (kid) |

**Responses**

| HTTP Code | Description            |
| --------- | ---------------------- |
| 200       | Producer Key retrieved |
| 401       | Unauthorized           |
| 404       | Producer Key not found |

***

#### POST /purposes

Create a new Purpose in Draft state

**operationId**: `createPurpose`

**Responses**

| HTTP Code | Description       |
| --------- | ----------------- |
| 201       | Purpose created   |
| 400       | Bad Request       |
| 401       | Unauthorized      |
| 403       | Forbidden         |
| 404       | Not Found         |
| 409       | Name Conflict     |
| 429       | Too Many Requests |

***

#### GET /purposes

Retrieve a list of Purposes based on filters

**operationId**: `getPurposes`

**Parameters**

| Parameter                                      | Description                                                                           |
| ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| **eserviceIds** (_query_, _optional_, _array_) | Filter Purposes by E-Service IDs. If not specified, return Purposes for any E-Service |
| **offset** (_query_, **required**, _integer_)  | Pagination starting position                                                          |
| **limit** (_query_, **required**, _integer_)   | Maximum number of results to return                                                   |

**Responses**

| HTTP Code | Description        |
| --------- | ------------------ |
| 200       | Purposes retrieved |
| 400       | Bad Request        |
| 401       | Unauthorized       |
| 429       | Too Many Requests  |

***

#### GET /purposes/{purposeId}

Retrieve a Purpose

**operationId**: `getPurpose`

**Responses**

| HTTP Code | Description       |
| --------- | ----------------- |
| 200       | Purpose retrieved |
| 400       | Bad Request       |
| 401       | Unauthorized      |
| 403       | Forbidden         |
| 404       | Not Found         |
| 429       | Too Many Requests |

***

#### GET /purposes/{purposeId}/versions

Retrieve a list of Purpose Versions based on filters

**operationId**: `getPurposeVersions`

**Parameters**

| Parameter                                     | Description                                                               |
| --------------------------------------------- | ------------------------------------------------------------------------- |
| **state** (_query_, _optional_, _string_)     | Filter Versions by states. If not specified, return Versions in any state |
| **offset** (_query_, **required**, _integer_) | Pagination starting position                                              |
| **limit** (_query_, **required**, _integer_)  | Maximum number of results to return                                       |

**Responses**

| HTTP Code | Description                |
| --------- | -------------------------- |
| 200       | Purpose Versions retrieved |
| 400       | Bad Request                |
| 401       | Unauthorized               |
| 403       | Forbidden                  |
| 404       | Not Found                  |
| 429       | Too Many Requests          |

***

#### POST /purposes/{purposeId}/versions

Create a new Purpose Version to update daily calls The new Version will be created in Active state if daily calls are under the E-Service threshold, in Waiting for Approval otherwise

**operationId**: `createPurposeVersion`

**Responses**

| HTTP Code | Description             |
| --------- | ----------------------- |
| 201       | Purpose Version created |
| 400       | Bad Request             |
| 401       | Unauthorized            |
| 403       | Forbidden               |
| 404       | Not Found               |
| 409       | Conflict                |
| 429       | Too Many Requests       |

***

#### GET /purposes/{purposeId}/versions/{versionId}

Retrieve a Purpose Version

**operationId**: `getPurposeVersion`

**Responses**

| HTTP Code | Description               |
| --------- | ------------------------- |
| 200       | Purpose Version retrieved |
| 400       | Bad Request               |
| 401       | Unauthorized              |
| 403       | Forbidden                 |
| 404       | Not Found                 |
| 429       | Too Many Requests         |

***

#### POST /purposes/{purposeId}/activate

Activate a Purpose that is in Draft states The new state will be Active if daily calls are under the E-Service threshold, Waiting for Approval otherwise

**operationId**: `activateDraftPurpose`

**Responses**

| HTTP Code | Description       |
| --------- | ----------------- |
| 200       | Purpose activated |
| 400       | Bad Request       |
| 401       | Unauthorized      |
| 403       | Forbidden         |
| 404       | Not Found         |
| 409       | Conflict          |
| 429       | Too Many Requests |

***

#### POST /purposes/{purposeId}/archive

Archive a Purpose that is in Active or Suspended state, transitioning it to Archived state Existing Waiting for Approval Versions will be deleted The Archived state is not reversible

**operationId**: `archivePurpose`

**Responses**

| HTTP Code | Description       |
| --------- | ----------------- |
| 200       | Purpose archived  |
| 400       | Bad Request       |
| 401       | Unauthorized      |
| 403       | Forbidden         |
| 404       | Not Found         |
| 409       | Conflict          |
| 429       | Too Many Requests |

***

#### POST /purposes/{purposeId}/approve

Approve a Purpose that is in Waiting for Approval state, transitioning it to Active state

**operationId**: `approvePurpose`

**Responses**

| HTTP Code | Description       |
| --------- | ----------------- |
| 200       | Purpose approved  |
| 400       | Bad Request       |
| 401       | Unauthorized      |
| 403       | Forbidden         |
| 404       | Not Found         |
| 409       | Conflict          |
| 429       | Too Many Requests |

***

#### POST /purposes/{purposeId}/suspend

Suspend a Purpose that is in Active or Suspended state, transitioning it to Suspended state A Purpose may already be in Suspended state when previously suspended by the consumer or the producer

**operationId**: `suspendPurpose`

**Responses**

| HTTP Code | Description       |
| --------- | ----------------- |
| 200       | Purpose suspended |
| 400       | Bad Request       |
| 401       | Unauthorized      |
| 403       | Forbidden         |
| 404       | Not Found         |
| 409       | Conflict          |
| 429       | Too Many Requests |

***

#### POST /purposes/{purposeId}/unsuspend

Unsuspend a Purpose that is in Suspended state, transitioning it to Active or Suspended state A Purpose may remain in Suspended state when suspended also by the consumer or the producer

**operationId**: `unsuspendPurpose`

**Responses**

| HTTP Code | Description         |
| --------- | ------------------- |
| 200       | Purpose unsuspended |
| 400       | Bad Request         |
| 401       | Unauthorized        |
| 403       | Forbidden           |
| 404       | Not Found           |
| 409       | Conflict            |
| 429       | Too Many Requests   |

***

#### GET /tenants

Retrieve a list of Tenants based on filters

**operationId**: `getTenants`

**Parameters**

| Parameter                                                      | Description                         |
| -------------------------------------------------------------- | ----------------------------------- |
| **IPACode** (_query_, _optional_, _string_)                    | IPA code of the Tenant              |
| If the Tenant is an AOO, it corresponds to "codice AOO" in IPA |                                     |
| If the Tenant is an UO, it corresponds to "codice UO" in IPA   |                                     |
| Available only for Tenants listed in IPA                       |                                     |
| Mutually exclusive with taxCode                                |                                     |
|                                                                |                                     |
| **taxCode** (_query_, _optional_, _string_)                    | Tax code of the Tenant              |
| Available only for Tenants not listed in IPA                   |                                     |
| Mutually exclusive with IPACode                                |                                     |
|                                                                |                                     |
| **offset** (_query_, **required**, _integer_)                  | Pagination starting position        |
| **limit** (_query_, **required**, _integer_)                   | Maximum number of results to return |

**Responses**

| HTTP Code | Description       |
| --------- | ----------------- |
| 200       | Tenants retrieved |
| 400       | Bad Request       |
| 401       | Unauthorized      |

***

#### GET /tenants/{tenantId}

Retrieve a Tenant

**operationId**: `getTenant`

**Responses**

| HTTP Code | Description      |
| --------- | ---------------- |
| 200       | Tenant retrieved |
| 400       | Bad Request      |
| 401       | Unauthorized     |
| 404       | Not Found        |

***

#### GET /tenants/{tenantId}/certifiedAttributes

Retrieve a list of Certified Attributes assigned to the Tenant

**operationId**: `getCertifiedAttributes`

**Parameters**

| Parameter                                     | Description                         |
| --------------------------------------------- | ----------------------------------- |
| **offset** (_query_, **required**, _integer_) | Pagination starting position        |
| **limit** (_query_, **required**, _integer_)  | Maximum number of results to return |

**Responses**

| HTTP Code | Description                           |
| --------- | ------------------------------------- |
| 200       | Tenant Certified Attributes retrieved |
| 400       | Bad Request                           |
| 401       | Unauthorized                          |
| 404       | Not Found                             |

***

#### POST /tenants/{tenantId}/certifiedAttributes

Assign a Certified Attribute to a Tenant

**operationId**: `addCertifiedAttribute`

**Responses**

| HTTP Code | Description                  |
| --------- | ---------------------------- |
| 200       | Certified Attribute assigned |
| 400       | Bad Request                  |
| 401       | Unauthorized                 |
| 403       | Forbidden                    |
| 404       | Not Found                    |
| 409       | Conflict                     |
| 429       | Too Many Requests            |

***

#### DELETE /tenants/{tenantId}/certifiedAttributes/{attributeId}

Revoke a Certified Attribute from a Tenant

**operationId**: `revokeCertifiedAttributeById`

**Responses**

| HTTP Code | Description                 |
| --------- | --------------------------- |
| 200       | Certified Attribute revoked |
| 400       | Bad Request                 |
| 401       | Unauthorized                |
| 403       | Forbidden                   |
| 404       | Not Found                   |
| 429       | Too Many Requests           |

***

#### GET /status

Retrieve the status of the API

**operationId**: `getStatus`

**Responses**

| HTTP Code | Description      |
| --------- | ---------------- |
| 200       | Status retrieved |
