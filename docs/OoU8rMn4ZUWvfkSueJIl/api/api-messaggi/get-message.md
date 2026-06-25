# Get Message

## Descrizione

API che controlla lo stato di invio del messaggio recuperando il contenuto. È necessario interrogare l’API con il codice fiscale del cittadino oggetto del messaggio e l’identificativo del messaggio.

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/messages/{fiscal_code}/{id}" method="get" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## **`message`**

### **`id`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Identificativo del messaggio ottenuto con la <a href="submit-a-message-passing-the-user-fiscal_code-as-path-parameter.md">Submit a message</a></td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>01EM6X4JB9VSZTQ8H16KMQFCEJ</code></td></tr></tbody></table>

### **`fiscal_code`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Codice fiscale del cittadino a cui è stato inviato il messaggio</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>AAAAAA00A00A000A</code></td></tr></tbody></table>

### **`created_at`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Data di creazione del messaggio nel formato ISO-8601 e fuso orario UTC</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>2021-02-18T08:17:01.775Z</code></td></tr></tbody></table>

### **`sender_service_id`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Identificativo del servizio associato al messaggio</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>01EYNQ0864HKYR1Q9PXPJ18W7G</code></td></tr></tbody></table>

### **`content`**

I dati relativi al content sono gli stessi inviati tramite il [submit del messaggio](submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#content).

## **`notification`**

### **`email`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Stato d'invio dell'email.<br><br>- <code>SENT</code>: email inviata correttamente;<br>- <code>THROTTLED</code>: errore temporaneo per sovraccarico, il messaggio potrà essere recapitato entro il TTL e per un massimo di 7 giorni;<br>- <code>EXPIRED</code>: raggiunto il massimo TTL del messaggio;<br>- <code>FAILED</code>: errore permanente della notifica.</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>SENT</code></td></tr></tbody></table>

### **`webhook`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Stato d'invio della notifica push.<br><br>- <code>SENT</code>: notifica inviata;<br>- <code>THROTTLED</code>: errore temporaneo per sovraccarico, il messaggio potrà essere recapitato entro il TTL e per un massimo di 7 giorni;<br>- <code>EXPIRED</code>: raggiunto il massimo TTL del messaggio;<br>- <code>FAILED</code>: errore permanente della notifica.</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>SENT</code></td></tr></tbody></table>

## **`status`**

<table data-header-hidden><thead><tr><th width="178"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Stato d'invio del messaggio.<br><br>- <code>ACCEPTED</code>: il messaggio è stato inserito in coda per il salvataggio;<br>- <code>THROTTLED</code>: errore temporaneo per sovraccarico, il messaggio potrà essere recapitato entro il TTL e per un massimo di 7 giorni;<br>- <code>FAILED</code>: errore permanente nel salvataggio del messaggio;<br>- <code>PROCESSED</code>: il messaggio è stato inviato;<br>- <code>REJECTED</code>: il messaggio è stato scartato perché il destinatario non esiste o ha bloccato le comunicazioni del servizio.</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>PROCESSED</code></td></tr></tbody></table>

## Esempi

Esempio: “PROCESSED”

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request GET 'https://api.io.pagopa.it/api/v1/messages/AAAAAA00A00A000A/01EM6X4JB9VSZTQ8H16KMQFCEJ' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__'
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{
"message": {
"content": {
"subject": "My first IO app message with min 10 character",
"markdown": "This is my first message to the IO app. Use body markdown format with min 80 character"
},
"created_at": "2021-02-18T08:17:01.775Z",
"fiscal_code": "AAAAAA00A00A000A",
"id": "01EM6X4JB9VSZTQ8H16KMQFCEJ",
"sender_service_id": "01EYNQ0864HKYR1Q9PXPJ18W7G"
},
"notification": {
"email": "SENT",
"webhook": "SENT"
},
"status": "PROCESSED"
}
```
{% endcode %}

## Risorse utili

[https://developer.io.italia.it/openapi.html#operation/getMessage](https://developer.io.italia.it/openapi.html#operation/getMessage)
