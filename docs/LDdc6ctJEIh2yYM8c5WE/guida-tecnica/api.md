# API

## R**esidence Verification**

#### **Endpoint URL**:

`POST /residence-verification`

#### **Descrizione**:

Recupera informazioni per verificare la presenza e la correttezza di un determinato indirizzo fisico.

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th>Header</th><th width="136">Type</th><th width="115">Required</th><th>Description</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token for authentication.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

#### **Query Parameters**:

| Type | Required | Description |
| ---- | -------- | ----------- |
|      |          |             |
|      |          |             |

#### **Response**:



**Status Codes**:

| Code | Description                      |
| ---- | -------------------------------- |
| 200  | Request succeeded.               |
| 400  | Invalid user\_id or bad request. |
| 401  | Unauthorized.                    |
| 404  | User not found.                  |

#### **Esempio**:

→ [Verifichiamo la correttezza delle informazioni di residenza](../tutorial/verifichiamo-la-correttezza-delle-informazioni-di-residenza.md)

***

## **Digital Address Verification -  List**&#x20;

#### **Endpoint URL**:

`POST /digital-address-verification/list`

#### **Descrizione**:

<mark style="background-color:blue;">Recupera informazioni per verificare la presenza e la correttezza per più indirizzi digitali.</mark>

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th width="208">Header</th><th width="81">Type</th><th width="124">Required</th><th>Description</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token for authentication.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

#### **Query Parameters**:

| Type | Required | Description |
| ---- | -------- | ----------- |
|      |          |             |
|      |          |             |

#### **Response**:

**Status Codes**:

| Code | Description                      |
| ---- | -------------------------------- |
| 200  | Request succeeded.               |
| 400  | Invalid user\_id or bad request. |
| 401  | Unauthorized.                    |
| 404  | User not found.                  |



#### **Esempio**:

[→ Verifichiamo la correttezza delle informazioni di residenza digitale](../tutorial/richiediamo-informazioni-sullindirizzo-digitale.md)



***

## **Digital Address Verification -  State**

#### **Endpoint URL**:

`GET  /digital-address-verification/list/state/{id}`

_nel resto della documentazione le due GET sono delle POST, cosa è corretto?_

#### **Descrizione**:

Recupera informazioni per verificare la presenza e la correttezza di un determinato indirizzo digitale.

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th width="187">Header</th><th width="113">Type</th><th width="134">Required</th><th>Description</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token for authentication.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

#### **Query Parameters**:

| Type | Required | Description |
| ---- | -------- | ----------- |
|      |          |             |
|      |          |             |

#### **Response**:



**Status Codes**:

| Code | Description                      |
| ---- | -------------------------------- |
| 200  | Request succeeded.               |
| 400  | Invalid user\_id or bad request. |
| 401  | Unauthorized.                    |
| 404  | User not found.                  |

#### **Esempio**:

[→ Verifichiamo la correttezza delle informazioni di residenza digitale](../tutorial/richiediamo-informazioni-sullindirizzo-digitale.md)



***

## **Digital Address Verification -  Response**

#### **Endpoint URL**:

`GET  /digital-address-verification/list/response/{id}`

_nel resto della documentazione le due GET sono delle POST, cosa è corretto?_

#### **Descrizione**:

Recupera informazioni per verificare la presenza e la correttezza di un determinato indirizzo digitale<mark style="background-color:blue;">.</mark>

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th>Header</th><th width="94">Type</th><th width="168">Required</th><th>Description</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token for authentication.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

#### **Query Parameters**:

| Type | Required | Description |
| ---- | -------- | ----------- |
|      |          |             |
|      |          |             |

#### **Response**:



**Status Codes**:

| Code | Description                      |
| ---- | -------------------------------- |
| 200  | Request succeeded.               |
| 400  | Invalid user\_id or bad request. |
| 401  | Unauthorized.                    |
| 404  | User not found.                  |



#### **Esempio**:

[→ Verifichiamo la correttezza delle informazioni di residenza digitale](../tutorial/richiediamo-informazioni-sullindirizzo-digitale.md)



***

## Organization Id Verification

`POST /organization-id-verification/check`

#### **Descrizione**:

Recupera informazioni per verificare la presenza e la correttezza di un determinato Organization Id.

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th width="192">Header</th><th width="103">Type</th><th width="145">Required</th><th>Description</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token for authentication.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

#### **Query Parameters**:

| Type | Required | Description |
| ---- | -------- | ----------- |
|      |          |             |
|      |          |             |

#### **Response**:



**Status Codes**:

<table><thead><tr><th width="243">Code</th><th>Description</th></tr></thead><tbody><tr><td>200</td><td>Request succeeded.</td></tr><tr><td>400</td><td>Invalid user_id or bad request.</td></tr><tr><td>401</td><td>Unauthorized.</td></tr><tr><td>404</td><td>User not found.</td></tr></tbody></table>

#### **Esempio**:

→ [Verifichiamo la correttezza delle informazioni di residenza](../tutorial/verifichiamo-la-correttezza-delle-informazioni-di-residenza.md)

***

## Subject Id Verification

`POST /subject-id-verification/check`

#### **Descrizione**:

Recupera informazioni per verificare la presenza e la correttezza di un determinato Codice Fiscale.

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th width="189">Header</th><th width="149">Type</th><th width="125">Required</th><th>Description</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token for authentication.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

#### **Query Parameters**:

| Type | Required | Description |
| ---- | -------- | ----------- |
|      |          |             |
|      |          |             |

#### **Response**:

*   **Status Codes**:

    <table><thead><tr><th width="223">Code</th><th>Description</th></tr></thead><tbody><tr><td>200</td><td>Request succeeded.</td></tr><tr><td>400</td><td>Invalid user_id or bad request.</td></tr><tr><td>401</td><td>Unauthorized.</td></tr><tr><td>404</td><td>User not found.</td></tr></tbody></table>

#### **Esempio**:

[→ Verifichiamo la correttezza del Codice Fiscale](../tutorial/verifichiamo-la-correttezza-del-codice-fiscale.md)



***

## Family Status Verification

`POST /family-status`

#### **Descrizione**:

Recupera informazioni per verificare la presenza e la correttezza di un determinato Stato di famiglia.

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th>Header</th><th width="156">Type</th><th width="132">Required</th><th>Description</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token for authentication.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

#### **Query Parameters**:

| Type | Required | Description |
| ---- | -------- | ----------- |
|      |          |             |
|      |          |             |

#### **Response**:

**Status Codes**:

<table><thead><tr><th width="253">Code</th><th>Description</th></tr></thead><tbody><tr><td>200</td><td>Request succeeded.</td></tr><tr><td>400</td><td>Invalid user_id or bad request.</td></tr><tr><td>401</td><td>Unauthorized.</td></tr><tr><td>404</td><td>User not found.</td></tr></tbody></table>

#### **Esempio**:

[→ Richiediamo informazioni sullo stato di famiglia](../tutorial/richiediamo-informazioni-sullo-stato-di-famiglia.md)
