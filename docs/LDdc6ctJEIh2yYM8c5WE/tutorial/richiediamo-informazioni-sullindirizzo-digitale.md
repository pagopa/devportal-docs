# Richiediamo informazioni sull'indirizzo digitale

L'e-service “Attestazione - Verifica indirizzo digitale” pubblicato sul catalogo, consente **di verificare la presenza e la correttezza di un determinato indirizzo digitale**, simulando un ente che possiede tutte le informazioni anagrafiche legate agli indirizzi digitali dei soggetti.

In questo tutorial vedremo un caso reale di applicazione di questo servizio.

## Il caso d'uso

{% hint style="danger" %}
**Problema:** Come fruitore ho la necessità di arricchire la mia base dati aggiungendo gli indirizzi digitali dei soggetti.

**Soluzione:** Effettuo la sottoscrizione all'e-service “Attestazione - Digital Address” essendo l'ente che possiede tali informazioni a livello nazionale. L'e-service espone dei metodi che permettono di effettuare anche un'estrazione massiva, utile proprio a risolvere il nostro problema.
{% endhint %}

L'e-service in oggetto mi permette di recuperare tali dati grazie all’invocazione del seguente set di API:

{% code lineNumbers="true" %}
```
POST /digital-address-verification/list
GET /digital-address-verification/list/state/{id}
GET /digital-address-verification/list/response/{id}
```
{% endcode %}

I metodi sopra esposti permettono di effettuare un’estrazione massiva degli indirizzi, a partire dagli id soggetto indicati all’interno della request.

## Data preparation

La prima cosa da fare è la configurazione dei dati: procediamo alla fase di Data Preparation.

Supponiamo di avere la seguente base dati all’interno della nostra applicazione:

<table><thead><tr><th width="189.78125">ID</th><th>Nome</th><th>Cognome</th><th>PEC</th></tr></thead><tbody><tr><td>RSSMRA80A01H501U</td><td>Mario</td><td>Rossi</td><td>NULL</td></tr><tr><td>LGUBCH80A01H501B</td><td>Luigi</td><td>Bianchi</td><td>NULL</td></tr></tbody></table>

In accordo a questa effettuiamo la Data Preparation simulando il seguente scenario:

* L’id **RSSMRA80A01H501U** è un soggetto noto a cui è associata una PEC ancora valida
* L’id **LGUBCH80A01H501B** è un soggetto noto a cui è associata una PEC non più valida

Replichiamo la configurazione desiderata nel seguente modo:

```
POST /digital-address-verification/data-preparation
```

<details>

<summary><strong>Input</strong></summary>

**Header**:

```
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```

#### **Payload**:

{% code lineNumbers="true" %}
```json
{
    "idSubject": "RSSMRA80A01H501U",
    "from": "2017-07-21T17:32:28Z",
    "digitalAddress": [
        {
            "digitalAddress": "example_1@pec.it",
            "profession": "Doctor",
            "information": {
                "reason": "CESSAZIONE_UFFICIO",
                "endDate": "2999-12-31T17:32:28Z"
            }
        }
    ]
}
```
{% endcode %}

</details>

<details>

<summary><strong>Output</strong></summary>

**Response**:

**Status codes:**

* **201** - Configurazione salvata con successo
* **400** - Errore formato dati input

</details>

Abbiamo configurato il primo soggetto, procediamo alla configurazione del secondo:

<details>

<summary>Input</summary>

#### **Header:**

```json
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```

#### **Payload:**

{% code lineNumbers="true" %}
```json
{
    "idSubject": "LGUBCH80A01H501B",
    "from": "2017-07-21T17:32:28Z",
    "digitalAddress": [
        {
            "digitalAddress": "example_2@pec.it",
            "profession": "Doctor",
            "information": {
                "reason": "CESSAZIONE_VOLONTARIA",
                "endDate": "2004-12-31T17:32:28Z"
            }
        }
    ]
}
```
{% endcode %}

</details>

<details>

<summary>Output</summary>

#### **Response**:

#### **Status codes:**

* **201** - Configurazione salvata con successo

- **400** - Errore formato dati input

</details>



Abbiamo configurato anche il secondo soggetto, specificando che la data di fina validità della PEC è antecedente alla data odierna.

Di seguito gli altri end-point per la gestione dei record presenti nella base dati:

### **Ottenimento dei dati**

Con questa chiamata è possibile ottenere la lista delle organizzazioni presenti all'interno della base dati.

```
GET /digital-address-verification/data-preparation
```

<details>

<summary>Input</summary>

#### **Header:**

```json
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```

</details>

<details>

<summary>Output</summary>

#### Response

* Status code: **200**

{% code lineNumbers="true" %}
```json
{
  "data": [
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

* Status code: **400, 401, 403, 404, 500, 503**

{% code lineNumbers="true" %}
```json
{  
  "status": "<HTTP_CODE>",
  "type": "<HTTP_STATUS>",
  "detail": "<detail_error>"
}
```
{% endcode %}

</details>

### **Eliminazione dei dati**

```
DELETE /digital-address-verification/data-preparation
```

<details>

<summary>Input</summary>

#### **Header:**

```json
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```

</details>

<details>

<summary>Output</summary>

#### Response

* Status code: **202** - Richiesta completata con successo

- Status code: **400, 401, 403, 404, 500, 503**

{% code lineNumbers="true" %}
```json
{  
  "status": "<HTTP_CODE>",
  "type": "<HTTP_STATUS>",
  "detail": "<detail_error>"
}
```
{% endcode %}

</details>

### **Ottenimento di un singolo record**

```
GET /digital-address-verification/data-preparation/:idSubject
```

<details>

<summary>Input</summary>

#### **Header:**

```json
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```

</details>

<details>

<summary>Output</summary>

#### Response

* Status code: **200**

{% code lineNumbers="true" %}
```json
{
  "data": [
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

* Status code: **400, 401, 403, 404, 500, 503**

{% code lineNumbers="true" %}
```json
{  
  "status": "<HTTP_CODE>",
  "type": "<HTTP_STATUS>",
  "detail": "<detail_error>"
}
```
{% endcode %}

</details>

### **Eliminazione di un singolo record**

```
DELETE /digital-address-verification/data-preparation/:idSubject
```

<details>

<summary>Input</summary>

#### **Header:**

```json
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```

</details>

<details>

<summary>Output</summary>

#### Response

* Status code: **200** - Richiesta completata con successo

- Status code: **400, 401, 403, 404, 500, 503**

{% code lineNumbers="true" %}
```json
{  
  "status": "<HTTP_CODE>",
  "type": "<HTTP_STATUS>",
  "detail": "<detail_error>"
}
```
{% endcode %}

</details>

Procediamo a questo punto all’invocazione delle API messe a disposizione dell’e-service.

## Invocazione e-service per estrazione massiva

Effettuo la seguente chiamata per l’id soggetto di Mario Rossi e Lugi Bianchi.

```
POST /digital-address-verification/list
```

<details>

<summary>Curl</summary>

{% code lineNumbers="true" %}
```bash
curl --location '{host}/digital-address-verification/list' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 123456' \
--header 'Authorization: Bearer xxx' \
--data '{
  "idSubjects": [
    "RSSMRA80A01H501U",
    "LGUBCH80A01H501B"
  ],
  "idRequest": "00001"
}'
```
{% endcode %}

</details>

<details>

<summary>Output</summary>

#### Response:

{% code overflow="wrap" lineNumbers="true" %}
```json
{ 
  "state": "PRESA_IN_CARICO", 
  "message": "PRESA_IN_CARICO", 
  "id": "20d0c1e1-b9c2-460b-8f8a-c8c6f264bb81", 
  "requestTimestamp": "2024-10-15T14:36:24.028Z" 
}
```
{% endcode %}

#### **Status codes:**

* **200** - Richiesta effettuata con successo

</details>

La response ci indica che la nostra richiesta di estrazione massiva è stata presa in carico. Utilizzeremo l’id presente all’interno della response per invocare la successiva API.

## Invocazione e-service per  Verifica stato esportazione massiva

Effettuiamo la seguente chiamata, utilizzando l’id ricevuto nella chiamata precedente:

```
POST /digital-address-verification/list/state/:id
```

<details>

<summary>Curl</summary>

{% code lineNumbers="true" %}
```bash
curl --location '{host}/digital-address-verification/list/state/20d0c1e1-b9c2-460b-8f8a-c8c6f264bb81' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 1' \
--header 'Authorization: Bearer xxx'
```
{% endcode %}

</details>

<details>

<summary>Output</summary>

#### Response:

```json
application/json
{
    "status": "IN_ELABORAZIONE",
    "message": "IN_ELABORAZIONE"
}
```

#### Status codes:

* **200** - Richiesta effettuata con successo

</details>

La response ci indica che la nostra richiesta di estrazione massiva è ancora in fase di elaborazione.

Effettuiamo nuovamente la chiamata, finché non riceviamo una response che indichi che l’estrazione è terminata con successo.

Non appena il campo “status” presente all’interno della response è DISPONIBILE, procediamo con la successiva invocazione.

Effettuiamo la seguente chiamata, utilizzando l’id ricevuto nella richiesta di estrazione massiva

```
POST /digital-address-verification/list/response/:id
```

<details>

<summary>Curl</summary>

{% code overflow="wrap" %}
```bash
curl --location 'host}/digital-address-verification/list/response/20d0c1e1-b9c2-460b-8f8a-c8c6f264bb81' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 1' \
--header 'Authorization: Bearer xxx'
```
{% endcode %}

</details>

<details>

<summary>Output</summary>

#### Response:

{% code lineNumbers="true" %}
```json
{
    "list": [
        {
            "idSubject": "RSSMRA80A01H501U",
            "from": "2017-07-21T17:32:28Z",
            "digitalAddress": [
                {
                    "digitalAddress": "example_1@pec.it",
                    "profession": "Doctor",
                    "information": {
                        "reason": "CESSAZIONE_UFFICIO",
                        "endDate": "2999-12-31T17:32:28Z"
                    }
                }
            ]
        },
        {
            "idSubject": "LGUBCH80A01H501B",
            "from": "2017-07-21T17:32:28Z",
            "digitalAddress": [
                {
                    "digitalAddress": "example_2@pec.it",
                    "profession": "Doctor",
                    "information": {
                        "reason": "CESSAZIONE_VOLONTARIA",
                        "endDate": "2004-12-31T17:32:28Z"
                    }
                }
            ]
        }
    ]
}
```
{% endcode %}

#### Status codes:

* **200** - Richiesta effettuata con successo

</details>

La response ci restituisce i dati presenti nella base dati dell’ente.

## Esito finale

Dopo aver interrogato l’e-service possiamo procedere all’aggiornamento della nostra base dati con le informazioni che abbiamo recuperato.

Di seguito una panoramica della situazione a seguito dell’aggiornamento

<table><thead><tr><th width="192.31640625">ID</th><th>Nome</th><th>Cognome</th><th>Pec</th></tr></thead><tbody><tr><td>RSSMRA80A01H501U</td><td>Mario</td><td>Rossi</td><td><a href="mailto:example_1@pec.it">example_1@pec.it</a></td></tr><tr><td>LGUBCH80A01H501B</td><td>Luigi</td><td>Bianchi</td><td>NULL</td></tr></tbody></table>

La nostra base dati è stata correttamente aggiornata. Non abbiamo inserito l’indirizzo digitale per il soggetto Luigi Bianchi, essendo ormai obsoleto.

## Diagramma di flusso

<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>
