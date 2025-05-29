# API

## **Attestazione - Verifica indirizzo digitale:  List**&#x20;

#### **Endpoint URL**:

```
POST /digital-address-verification/list
```

#### **Descrizione**:

Recupera informazioni per verificare la presenza e la correttezza per più indirizzi digitali.

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th width="208">Header</th><th width="81">Type</th><th width="124">Required</th><th>Descr</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token per autenticazione.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

**Body:**

{% code lineNumbers="true" %}
```json
{
  "idSubjects": [
    "VRANGL74M28R701X"
  ],
  "idRequest": "abc123"
}
```
{% endcode %}

**Status Codes**:

| Code | Descr                            |
| ---- | -------------------------------- |
| 200  | Request succeeded.               |
| 400  | Invalid user\_id or bad request. |
| 401  | Unauthorized.                    |
| 403  | Forbidden.                       |
| 404  | User not found                   |
| 500  | Internal server error.           |
| 503  | Service unavailable              |

#### **Response**:

**200**:

{% code lineNumbers="true" %}
```json
{
  "state": "PRESA_IN_CARICO",
  "message": "List request",
  "id": "d9c3de3d-1fea-4f5c-a8b0-29f63c4c3455",
  "requestTimestamp": "2017-07-21T17:32:28Z"
}
```
{% endcode %}

**400, 401, 403, 404, 500, 503:**

{% code lineNumbers="true" %}
```json
{
  "status": "<HTTP_CODE>",
  "type": "<HTTP_STATUS>",
  "detail": "<detail_error>"
}
```
{% endcode %}

#### **Esempio**:

[→ Richiediamo informazioni sull'indirizzo digitale](../tutorial/richiediamo-informazioni-sullindirizzo-digitale.md)

***

## **Attestazione - Verifica indirizzo digitale:  State**

#### **Endpoint URL**:

```
GET  /digital-address-verification/list/state/{id_subject}
```

#### **Descrizione**:

Recupera informazioni per verificare la presenza e la correttezza di un determinato indirizzo digitale.

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th width="187">Header</th><th width="113">Type</th><th width="134">Required</th><th>Descr</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token per autenticazione.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

#### **Query Parameters**:

| Name        | Type   | Required | Descr                                 |
| ----------- | ------ | -------- | ------------------------------------- |
| id\_subject | String | Yes      | Subject id per cui si fa la richiesta |

**Status Codes**:

| Code | Descr                            |
| ---- | -------------------------------- |
| 200  | Request succeeded.               |
| 303  | Available                        |
| 400  | Invalid user\_id or bad request. |
| 401  | Unauthorized.                    |
| 403  | Forbidden.                       |
| 404  | User not found                   |
| 500  | Internal server error.           |
| 503  | Service unavailable              |

#### **Response**:

**200**:

{% code lineNumbers="true" %}
```json
{
  "state": "IN_ELABORAZIONE",
  "message": "List request in progress state"
}
```
{% endcode %}

303:

{% code lineNumbers="true" %}
```json
{
  "state": "DISPONIBILE",
  "message": "Request list available"
}
```
{% endcode %}

**400, 401, 403, 404, 500, 503:**

{% code lineNumbers="true" %}
```json
{
  "status": "<HTTP_CODE>",
  "type": "<HTTP_STATUS>",
  "detail": "<detail_error>"
}
```
{% endcode %}

#### **Esempio**:

[→ Richiediamo informazioni sull'indirizzo digitale](../tutorial/richiediamo-informazioni-sullindirizzo-digitale.md)



***

## **Attestazione - Verifica indirizzo digitale:  Response**

#### **Endpoint URL**:

```
GET  /digital-address-verification/list/response/{id_subject}
```

#### **Descrizione**:

Recupera informazioni per verificare la presenza e la correttezza di un determinato indirizzo digitale<mark style="background-color:blue;">.</mark>

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th>Header</th><th width="94">Type</th><th width="168">Required</th><th>Descr</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token per autenticazione.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

#### **Query Parameters**:

| Name        | Type   | Required | Descr                                 |
| ----------- | ------ | -------- | ------------------------------------- |
| id\_subject | String | yes      | Subject id per cui si fa la richiesta |

**Status Codes**:

| Code | Descr                            |
| ---- | -------------------------------- |
| 200  | Request succeeded.               |
| 400  | Invalid user\_id or bad request. |
| 401  | Unauthorized.                    |
| 403  | Forbidden.                       |
| 404  | User not found.                  |
| 500  | Internal server error.           |
| 503  | Service unavailable.             |

#### **Response**:

**200**:

{% code lineNumbers="true" %}
```json
{
  "list": [
    {
      "idSubject": "VRANGL74M28R701X",
      "from": "2017-07-21T17:32:28Z",
      "digitalAddress": [
        {
          "digitalAddress": "example@pec.it",
          "profession": "Doctor",
          "information": {
            "reason": "CESSAZIONE_VOLONTARIA",
            "endDate": "2017-07-21T17:32:28Z"
          }
        }
      ]
    }
  ]
}
```
{% endcode %}

**400, 401, 403, 404, 500, 503:**

{% code lineNumbers="true" %}
```json
{
  "status": "<HTTP_CODE>",
  "type": "<HTTP_STATUS>",
  "detail": "<detail_error>"
}
```
{% endcode %}

#### **Esempio**:

[→ Richiediamo informazioni sull'indirizzo digitale](../tutorial/richiediamo-informazioni-sullindirizzo-digitale.md)

***

## Attestazione - Verifica identificativo organizzazione

```
POST /organization-id-verification/check
```

#### **Descrizione**:

Recupera informazioni per verificare la presenza e la correttezza di un determinato Organization Id.

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th width="192">Header</th><th width="103">Type</th><th width="145">Required</th><th>Descr</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token per autenticazione.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

#### Body:

{% code lineNumbers="true" %}
```json
{
  "organizationId": "Org-1"
}
```
{% endcode %}

**Status Codes**:

<table><thead><tr><th width="243">Code</th><th>Description</th></tr></thead><tbody><tr><td>200</td><td>Request succeeded.</td></tr><tr><td>400</td><td>Bad request</td></tr><tr><td>401</td><td>Unauthorized.</td></tr><tr><td>403</td><td>Forbbidden</td></tr></tbody></table>

#### **Response**:

```json
{
  "organizationId": "Org-1",
  "valid": true,
  "status": "ATTIVA",
  "denomination": "Organizzazione 1",
  "dateStartActivity": "2001-01-02"
}
```

#### **Esempio**:

[→ Verifichiamo la correttezza dell'identificativo organizzazione](../tutorial/verifichiamo-la-correttezza-dellorganization-id.md)

***

## Attestazione - Verifica identificativo utente

```
POST /subject-id-verification/check
```

#### **Descrizione**:

Recupera informazioni per verificare la presenza e la correttezza di un determinato identificativo utente.

#### **Authentication**:

Richiede un Bearer Token in the `Authorization` header.

#### **Request Headers**:

<table><thead><tr><th width="189">Header</th><th width="149">Type</th><th width="125">Required</th><th>Descr</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token per autenticazione.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

**Body:**

{% code lineNumbers="true" %}
```json
{
  "idSubject": "RSSMRA80A01H501U"
}
```
{% endcode %}

**Status Codes**:

<table><thead><tr><th width="223">Code</th><th>Descr</th></tr></thead><tbody><tr><td>200</td><td>Request succeeded.</td></tr><tr><td>400</td><td>Invalid user_id or bad request.</td></tr><tr><td>401</td><td>Unauthorized.</td></tr><tr><td>403</td><td>Forbidden</td></tr></tbody></table>

#### **Response**:

{% code lineNumbers="true" %}
```json
{
  "idSubject": "RSSMRA80A01H501U",
  "valid": true,
  "message": "Valid id subject"
}
```
{% endcode %}

#### **Esempio**:

[→ Verifichiamo la correttezza dell'identificativo utente](../tutorial/verifichiamo-la-correttezza-dellorganization-id-1.md)

***

## Attestazione - Demo portachiavi: Signature

```
GET /keychain-mock/signature
```

**Descrizione**:

Offre un servizio mediante il quale è possibile vedere in azione la funzione del portachiav&#x69;**.** L'erogatore invia in risposta non solo il body della response, ma anche degli header aggiuntivi calcolati sulla base della chiave pubblica collegata al portachiavi.

#### **Request Headers**:

<table><thead><tr><th width="189">Header</th><th width="149">Type</th><th width="125">Required</th><th>Descr</th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>Yes</td><td>Bearer token per autenticazione.</td></tr><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr></tbody></table>

**Status Codes**:

<table><thead><tr><th width="223">Code</th><th>Descr</th></tr></thead><tbody><tr><td>200</td><td>Request succeeded.</td></tr><tr><td>400</td><td>Invalid user_id or bad request.</td></tr><tr><td>401</td><td>Unauthorized.</td></tr><tr><td>403</td><td>Forbidden.</td></tr><tr><td>500</td><td>Internal server error.</td></tr></tbody></table>

#### **Response Headers**:

<table><thead><tr><th width="256.0234375">Header</th><th width="149">Type</th><th>Descr</th></tr></thead><tbody><tr><td>x-payload-signature</td><td>String</td><td>Signature</td></tr><tr><td>x-payload-signature-kid</td><td>String</td><td>Key-id</td></tr><tr><td>x-payload-signature-algorythm</td><td>String</td><td>Alghoritm</td></tr></tbody></table>

**Response body**:

{% code lineNumbers="true" %}
```json
{
    "message": "risposta generata con successo"
}
```
{% endcode %}

***

## Attestazione - Demo portachiavi: Get Key

```
GET /keys/:kid
```

#### **Descrizione**:

Valorizzando il parametro :kid con il valore ottenuto nell'header _x-payload-signature-kid_ della chiamata _Signature_. L'API risponderà con la chiave pubblica associata.

Per la verifica è necessario recuperare il valore associato a x-payload-signature e applicare l'algoritmo indicato in _x-payload-signature-algorythm_ sulla signature.

***

## Attestazione - Demo portachiavi: Verify

```
POST /keychain-mock/verify
```

#### **Descrizione**:

L'e-service espone un'ulteriore API che permette di inviare verso l'erogatore il feedback a seguito della verifica della signature.

#### **Request Headers**:

<table><thead><tr><th width="189">Header</th><th width="149">Type</th><th width="125">Required</th><th>Descr</th></tr></thead><tbody><tr><td>X-Correlation-ID</td><td>String</td><td>Yes</td><td>Id unico random (di tipo UUID) generato a cura del chiamante, utile per  verificare il flusso di chiamate effettuato.</td></tr><tr><td>x-payload-signature</td><td>String</td><td>Yes</td><td>Signature</td></tr></tbody></table>

**Status Codes**:

<table><thead><tr><th width="223">Code</th><th>Descr</th></tr></thead><tbody><tr><td>200</td><td>Request succeeded.</td></tr><tr><td>400</td><td>Invalid user_id or bad request.</td></tr><tr><td>401</td><td>Unauthorized.</td></tr><tr><td>403</td><td>Forbidden.</td></tr><tr><td>500</td><td>Internal server error.</td></tr></tbody></table>

#### **Response**:

{% code lineNumbers="true" %}
```json
{
    "status": "OK",
    "message": "X-Payload-Signature verificata"
}
```
{% endcode %}

#### **Esempio**:

[→ E-Service con funzionalità "portachiavi"](../tutorial/e-service-con-funzionalita-portachiavi-trial-keychain.md)
