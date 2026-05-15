# Verifichiamo la correttezza dell'Identificativo organizzazione

L'e-service “Attestazione - Identificativo organizzazione” pubblicato sul catalogo offre un servizio mediante il quale è possibile **verificare la presenza e la correttezza di un determinato id legato a un'organizzazione o un'azienda,** simulando un ente che possiede le informazioni aggiornate e centralizzate di tutte le anagrafiche delle organizzazioni/aziende.

In questo tutorial viene mostrato un caso reale di applicazione di questo servizio.

## Il caso d'uso

{% hint style="danger" %}
**Problema**: Come fruitore, ho la necessità di **verificare** che **gli id delle Organizzazioni** che ho sulla mia base dati sia corretto e ancora valida. &#x20;

**Soluzione**: Effettuo la sottoscrizione all’e-service “Attestazione - Identificativo organizzazione”  che consente di recuperare questi dati grazie all’invocazione della seguente API:
{% endhint %}

```
POST /organization-id-verification/check
```

## Data preparation

La prima cosa da fare è la configurazione dei dati. Procediamo dunque alla fase di Data Preparation.

**Scambio certificati**

L'e-service che desideriamo invocare prevede un ulteriore livello di sicurezza per il quale è prevista una fase di _handshake_.

Questa fase prevede lo scambio di un certificato tra fruitore ed erogatore ed è permessa dalla seguente API

```
POST /organization-id-verification/data-preparation/handshake 
```

<details>

<summary><strong>Input</strong></summary>

#### **Header:**

{% code lineNumbers="true" %}
```
Authorization: Bearer {{bearerToken}} apikey: {{apikey}}
```
{% endcode %}

#### **Payload:**

{% code lineNumbers="true" %}
```markup
multipart/form-data
form: 'certificate=@"/myLocation/cert.pem"'
```
{% endcode %}

</details>

<details>

<summary><strong>Output</strong></summary>

#### **Response:**

{% code lineNumbers="true" %}
```json
{ 
  "message": "string" 
}
```
{% endcode %}

#### **Status codes:**

* **200** - Certificato salvato con successo
* **400** - Errore formato dati input

</details>

{% hint style="info" %}
L'apikey previsto tra gli header rappresenta un identificativo per il chiamante.&#x20;

La valorizzazione è a carico del chiamante.&#x20;

Non sono previsti controlli di validazione se non quello sulla sua obbligatorietà.
{% endhint %}

Di seguito alcune informazioni sulla creazione del certificato.

### **Come generare il certificato**

Il primo passo da fare è quello di generare un certificato client, utilizzando, per esempio, il tool [_OpenSSL_](https://openssl.org/). Lanciamo il comando per la generazione della chiave privata che nel nostro esempio è a 2048 bit:

```
openssl genrsa -out private-key.pem 2048
```

a questo punto possiamo procedere alla creazione del certificato, contenente al suo interno la chiave pubblica (della durata di 365 giorni nell’esempio):

```
openssl req -new -x509 -key private-key.pem -out cert.pem -days 365
```

Il certificato è pronto per essere condiviso con l’erogatore nella fase di handshake e successive chiamate.

### **Inserimento dati**

Supponiamo di avere la seguente base dati all’interno della nostra applicazione:

| ID    | Nome             | Data fine validità |
| ----- | ---------------- | ------------------ |
| Org-1 | Organizzazione 1 | NULL               |
| Org-2 | Organizzazione 2 | 2022-12-31         |

Effettuiamo quindi la data preparation simulando il seguente scenario:

* L’id **Org-1** è un'organizzazione ancora valido
* L’id **Org-2** è un'organizzazione obsoleta e che quindi deve essere rimossa dalla nostra base dati

Replichiamo la configurazione desiderata nel seguente modo:

```
POST /organization-id-verification/data-preparation
```

<details>

<summary><strong>Input</strong></summary>

#### **Header:**

{% code lineNumbers="true" %}
```markup
Content-Type: application/json
Content-Encoding: identity
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```
{% endcode %}

#### **Payload:**

{% code lineNumbers="true" %}
```json
{ 
  "idOrganization": "Org-1" 
}
```
{% endcode %}

</details>

<details>

<summary><strong>Output</strong></summary>

#### **Response:**

#### **Status codes:**

* **200** - Configurazione salvata con successo

{% code lineNumbers="true" %}
```json
{
  "message": "string"
}
```
{% endcode %}

* **400** - Errore formato dati input

{% code lineNumbers="true" %}
```json
{
  "detail": "Request took too long to complete.",
  "instance": "string",
  "status": 503,
  "title": "string",
  "type": "about:blank"
}
```
{% endcode %}

</details>

### **Ottenimento dei dati**

Con questa chiamata è possibile ottenere la lista delle organizzazioni presenti all'interno della base dati.

```
GET /organization-id-verification/data-preparation
```

<details>

<summary><strong>Input</strong></summary>

#### **Header:**

{% code lineNumbers="true" %}
```markup
Content-Type: application/json
Content-Encoding: identity
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```
{% endcode %}

</details>

<details>

<summary><strong>Output</strong></summary>

#### **Response:**

#### **Status codes:**

* **200** - Operazione eseguita con successo

{% code lineNumbers="true" %}
```json
[
  {
    "organizationId": "Org-1"
  }
]
```
{% endcode %}

* **400** - Errore formato dati input

{% code lineNumbers="true" %}
```json
{
  "detail": "Request took too long to complete.",
  "instance": "string",
  "status": 503,
  "title": "string",
  "type": "about:blank"
}
```
{% endcode %}

</details>

### **Eliminazione di tutti i dati**

Con questo end-point è possibile eliminare una specifica organizzazione tramite il suo id dalla base dati.

```
POST /organization-id-verification/data-preparation/remove
```

<details>

<summary><strong>Input</strong></summary>

#### **Header:**

{% code lineNumbers="true" %}
```markup
Content-Type: application/json
Content-Encoding: identity
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```
{% endcode %}

#### **Payload:**

{% code lineNumbers="true" %}
```json
{ 
  "idOrganization": "Org-1" 
}
```
{% endcode %}

</details>

<details>

<summary><strong>Output</strong></summary>

#### **Response:**

#### **Status codes:**

* **200** - Operazione eseguita  con successo

{% code lineNumbers="true" %}
```json
[
  {
    "message": "string"
  }
]
```
{% endcode %}

* **400** - Errore formato dati input

{% code lineNumbers="true" %}
```json
{
  "detail": "Request took too long to complete.",
  "instance": "string",
  "status": 503,
  "title": "string",
  "type": "about:blank"
}
```
{% endcode %}

</details>



Procediamo a questo punto all’invocazione delle API messe a disposizione dell’e-service.

## Invocazione E-Service

Completata la fase di configurazione non resta che procedere all’invocazione del servizio effettuando la verifica per i due soggetti presenti nella nostra base dati.

Ripetiamo dunque la seguente chiamata prima per l’id organizzazione di Org-1 e dopo per Org-2.

```
POST /organization-id-verification/check 
```

<details>

<summary><strong>Curl</strong>:</summary>

<pre class="language-bash" data-line-numbers><code class="lang-bash"><strong>curl --location '{host}/organization-id-verification/check'
</strong><strong>--cert '/myLocation/cert.pem'
</strong>--key '/myLocation/private-key.pem'
--header 'x-correlation-id: myUniqueCorrelationId'
--header 'Content-Encoding: identity'
--header 'apikey: {{apikey}}'
--header 'Content-Type: application/json'
--header 'Authorization: Bearer {{bearerToken}}'
--data '{ "organizationId": "Org-1" }'
-k
</code></pre>

</details>

<details>

<summary>Output:</summary>

#### Response:

{% code lineNumbers="true" %}
```json
{
  "organizationId": "Org-1",
  "valid": true,
  "status": "ATTIVA",
  "denomination": "Organizzazione 1",
  "dateStartActivity": "2001-01-02"
}
```
{% endcode %}

</details>

Ciò che otterremo a seguito delle due invocazioni è il seguente risultato:

* **Org-1**: l'organizzazione è stata trovata e abbiamo ottenuto una risposta positiva che ci indica la validità dell’id inviato
* **Org-2**: l'organizzazione non è stata trovata. Il servizio ci ha risposto con successo indicandoci però che l’id inviato non è più valido

## Esito Finale

Dopo aver interrogato l’e-service possiamo procedere all’aggiornamento della nostra base dati in base alle informazioni che abbiamo recuperato.

Di seguito una panoramica della situazione a seguito dell’aggiornamento

| Id    | Nome             | Data fine validità |
| ----- | ---------------- | ------------------ |
| Org-1 | Organizzazione 1 | NULL               |
| Org-2 | Organizzazione 2 | 01/09/2024         |

La nostra base dati è stata correttamente aggiornata.

## Diagramma di Flusso:

<figure><img src="../../pdnd-interoperabilita/manuale-operativo-attestazione/1.0/.gitbook/assets/Demo - Identificativo organizzazione.drawio.png" alt=""><figcaption><p>Diagramma del flusso per interagire con il servizio "Attestazione - Identificativo organizzazione"</p></figcaption></figure>





