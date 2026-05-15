# Verifichiamo la correttezza dell'Identificativo utente

L'e-service “Attestazione - Identificativo utente” pubblicato sul catalogo offre un servizio mediante il quale è possibile verificare la presenza e la correttezza di un determinato id legato a un soggetto.

{% hint style="info" %}
_Attestazione - Identificativo utente_ è un e-service che ha lo scopo di simulare un ente che possiede le informazioni aggiornate e centralizzate di tutte le anagrafiche soggetto.
{% endhint %}

## Il caso d'uso

{% hint style="danger" %}
**Problema**: Come fruitore ho la necessità di verificare che la lista di identificativo utente che ho sulla mia base dati sia corretto e ancora valida.

**Soluzione**: Effettuo la sottoscrizione all'e-service “Attestazione - Identificativo utente” essendo erogato dall'ente che possiede tali informazioni a livello nazionale
{% endhint %}

L'e-service in oggetto mi permette infatti di effettuare questa verifica grazie all'invocazione della seguente API:

```
POST /subject-id-verification/check
```

## Data preparation

La prima cosa da fare, come abbiamo visto, è la configurazione dei dati. Procediamo dunque alla fase di Data Preparation.

**Scambio certificati**

L'e-service che desideriamo invocare prevede un ulteriore livello di sicurezza per il quale è prevista una fase di _handshake_.

Questa fase prevede, in altre parole, lo scambio di un certificato tra fruitore ed erogatore ed è permessa dalla seguente API

```
POST /subject-id-verification/data-preparation/handshake 
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
L’apikey previsto tra gli header rappresenta un identificativo per il chiamante. La valorizzazione è a carico del chiamante. Non sono previsti controlli di validazione se non quello sulla sua obbligatorietà.
{% endhint %}

Di seguito alcune informazioni sulla creazione del certificato.

### **Come generare il certificato**

Il primo passo da fare è quello di generare un certificato client.

Per farlo puoi utilizzare il tool [_OpenSSL_](https://openssl.org/). Lanciamo il comando per la generazione della chiave privata che nel nostro esempio è a 2048 bit:

```
openssl genrsa -out private-key.pem 2048
```

a questo punto possiamo procedere alla creazione del certificato, contenente al suo interno la chiave pubblica (della durata di 365 giorni nell'esempio):

```
openssl req -new -x509 -key private-key.pem -out cert.pem -days 365
```

Il certificato è pronto per essere condiviso con l'erogatore nella fase di handshake e successive chiamate.

### **Inserimento dati**

Supponiamo di avere la seguente base dati all'interno della nostra applicazione:

<table><thead><tr><th width="191.1484375">ID</th><th>Nome</th><th>Cognome</th><th>Date fine validità</th></tr></thead><tbody><tr><td>RSSMRA80A01H501U</td><td>Mario</td><td>Rossi</td><td>NULL</td></tr><tr><td>LGUBCH80A01H501B</td><td>Luigi</td><td>Bianchi</td><td>NULL</td></tr></tbody></table>

In accordo a questa effettuiamo la data preparation simulando il seguente scenario:

* L'id **RSSMRA80A01H501U** è un soggetto ancora valido
* L'id **LGUBCH80A01H501B** è un soggetto obsoleto e che quindi deve essere rimosso dalla nostra base dati

Replichiamo la configurazione desiderata nel seguente modo:

```
POST /subject-id-verification/data-preparation
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
  "idSubject": "RSSMRA80A01H501U"
}
```
{% endcode %}

</details>

<details>

<summary><strong>Output</strong></summary>

#### **Response:**

#### **Status codes:**

* **200** - Configurazione salvata con successo

```json
{
  "message": "string"
}
```

* **400** - Errore formato dati input

<pre class="language-json" data-line-numbers><code class="lang-json"><strong>{
</strong>  "detail": "Request took too long to complete.",
  "instance": "string",
  "status": 503,
  "title": "string",
  "type": "about:blank"
}
</code></pre>

</details>

### **Ottenimento dei dati**

Con questa chiamata è possibile ottenere la lista delle organizzazioni presenti all'interno della base dati.

```
GET /subject-id-verification/data-preparation
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
    "idSubject": "RSSMRA80A01H501U"
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

### **Eliminazione dei dati**

Con questo end-point è possibile eliminare una specifica organizzazione tramite il suo id dalla base dati.

```
POST /subject-id-verification/data-preparation/remove
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
  "idSubject": "RSSMRA80A01H501U" 
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



Procediamo a questo punto all'invocazione delle API messe a disposizione dell'e-service.

## Invocazione E-Service

Completata la fase di configurazione non resta che procedere all'invocazione del servizio effettuando la verifica per i due soggetti presenti nella mia base dati.

Ripeto dunque la seguente chiamata prima per l'id soggetto di Mario Rossi e dopo per Luigi Bianchi.

```
POST /subject-id-verification/check 
```

<details>

<summary><strong>Curl</strong>:</summary>

<pre class="language-bash" data-line-numbers><code class="lang-bash"><strong>curl --location '{host}/subject-id-verification/check'
</strong><strong>--cert '/myLocation/cert.pem'
</strong>--key '/myLocation/private-key.pem'
--header 'x-correlation-id: myUniqueCorrelationId'
--header 'Content-Encoding: identity'
--header 'apikey: {{apikey}}'
--header 'Content-Type: application/json'
--header 'Authorization: Bearer {{bearerToken}}'
--data '{ "idSubject": "RSSMRA80A01H501U" }'
-k
</code></pre>

</details>

<details>

<summary>Output:</summary>

#### Response:

{% code lineNumbers="true" %}
```json
{
  "idSubject": "RSSMRA80A01H501U",
  "valid": true,
  "message": "Valid id subject"
}
```
{% endcode %}

</details>

Ciò che otterremo a seguito delle due invocazioni è il seguente risultato:

* Mario Rossi: il soggetto è stato trovato e abbiamo ottenuto una risposta positiva che ci indica la validità dell'id inviato
* Luigi Bianchi: il soggetto non è stato trovato. Il servizio ci ha risposto con successo indicandoci però che l'id soggetto inviato non è più valido

## Esito Finale

Dopo aver interrogato l'e-service possiamo procedere all'aggiornamento della nostra base dati in base alle informazioni che abbiamo recuperato.

Di seguito una panoramica della situazione a seguito dell'aggiornamento

<table><thead><tr><th width="192.0703125">ID</th><th>Nome</th><th>Cognome</th><th>Data fine validità</th></tr></thead><tbody><tr><td>RSSMRA80A01H501U</td><td>Mario</td><td>Rossi</td><td>NULL</td></tr><tr><td>LGUBCH80A01H501B</td><td>Luigi</td><td>Bianchi</td><td>01/09/2024</td></tr></tbody></table>

La nostra base dati è stata correttamente aggiornata.

## Diagramma di Flusso:

<figure><img src="../.gitbook/assets/Demo - Identificativo utente.drawio.png" alt=""><figcaption><p>Diagramma del flusso per interagire con il servizio "Attestazione - Identificativo organizzazione"</p></figcaption></figure>



