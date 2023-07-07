# Submit a Message passing the user fiscal\_code in the request body

## Descrizione

Questa API consente l’invio di messaggi verso un cittadino identificato tramite Codice Fiscale. Prima di inviare un messaggio, dovrai verificare che il cittadino sia iscritto a IO e che il servizio possa inviare comunicazioni al cittadino stesso.

{% swagger src="https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml" path="/messages" method="post" %}
[https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml](https://raw.githubusercontent.com/teamdigitale/io-functions-services/master/openapi/index.yaml)
{% endswagger %}

## **`time_to_live`**

{% hint style="danger" %}
<mark style="color:red;">**Questo parametro è deprecato.**</mark>
{% endhint %}

<table data-header-hidden><thead><tr><th width="180"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Tempo espresso in secondi che specifica il tempo di retry di delivery del messaggio</td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>3600</code></td></tr><tr><td><strong>Tipo</strong></td><td>Intero</td></tr><tr><td><strong>Esempio</strong></td><td><code>3600</code></td></tr></tbody></table>

## **`feature_level_type`**

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Indica se il messaggio è inviato nell’ambito di una sottoscrizione <strong>Premium</strong>, o se è da considerarsi un messaggio standard</td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>STANDARD</code></td></tr><tr><td><strong>Tipo</strong></td><td>Stringa enumerata</td></tr><tr><td><strong>Valori Accettati</strong></td><td><ul><li><code>STANDARD</code> -> il messaggio è da considerarsi un normale messaggio IO</li><li><code>ADVANCED</code> -> al messaggio sono correlate informazioni aggiuntive avanzate. È possibile specificare questo valore solo se si è titolari di una sottoscrizione Premium.</li></ul></td></tr><tr><td><strong>Esempio</strong></td><td><code>ADVANCED</code></td></tr></tbody></table>

## **`content`` `**<mark style="color:red;">**`*`**</mark>

### **`subject`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="186"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Titolo del messaggio, la cui lunghezza deve essere compresa tra 10 e 120 caratteri</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>Rinnova la tua carta d'identità</code></td></tr></tbody></table>

### **`markdown`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="187"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Testo del messaggio in formato markdown la cui lunghezza deve essere compresa tra 80 e 10000 caratteri</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>This is my first message to the IO app. Use body markdown format with min 80 characters.</code></td></tr></tbody></table>

{% hint style="info" %}
Per testare la sintassi in markdown, puoi utilizzare un [servizio online come Stackedit](https://stackedit.io/app).
{% endhint %}

### **`due_date`**

<table data-header-hidden><thead><tr><th width="189"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Permette di associare al messaggio un promemoria. Il formato data deve essere ISO-8601 e fuso orario UTC</td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>2018-10-13T00:00:00.000Z</code></td></tr></tbody></table>

{% hint style="warning" %}
**Fai attenzione al fuso orario!** La data deve essere espressa nel fuso orario UTC (Z). \
In Italia si usa il fuso UTC+1 quando è in vigore l'ora solare, mentre si usa il fuso UTC+2 quando è in vigore l'ora legale.

**Esempio:**

`2022-09-30T22:00:00Z` --> In Italia è la mezzanotte del 1° ottobre 2022

`2022-11-30T23:00:00Z` --> In Italia è la mezzanotte del 1° novembre 2022
{% endhint %}

{% hint style="warning" %}
**Fai attenzione all'orario!** Se la data di scadenza non prevede un orario specifico, solitamente si fa riferimento alla fine della giornata. Inserisci correttamente l'orario per evitare di mostrare una data di scadenza errata.

**Esempio:**

✅ 12 gennaio (23:59:59) --> L'utente può pagare entro la giornata del 12 gennaio

❌ 12 gennaio (00:00:01) --> L'utente può pagare entro la giornata dell'11 gennaio
{% endhint %}

### **`payment_data`**

{% hint style="info" %}
Per l’invio degli avvisi di pagamento è necessario richiedere [specifica l’abilitazione.](../../abilitazioni/test-invio-avvisi-pagopa.md)
{% endhint %}

#### **`amount`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="202"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Importo in centesimi di euro dell’avviso di pagamento emesso su piattaforma pagoPA</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì, per pagamenti pagoPA</td></tr><tr><td><strong>Tipo</strong></td><td>Intero</td></tr><tr><td><strong>Esempio</strong></td><td><code>100</code></td></tr></tbody></table>

#### **`notice_number`` `**<mark style="color:red;">**`*`**</mark>

<table data-header-hidden><thead><tr><th width="203"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Codice avviso di un avviso di pagamento emesso su piattaforma pagoPA</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì, per i pagamenti pagoPA</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>301011100007347557</code></td></tr></tbody></table>

{% hint style="warning" %}
È importante che il codice fiscale del servizio mittente corrisponda al codice fiscale dell’ente creditore che emette l’avviso pagoPA.
{% endhint %}

#### **`invalid_after_due_date`**

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>In app visualizza il pagamento come scaduto se la data attuale è successiva a <code>due_date</code></td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>false</code></td></tr><tr><td><strong>Tipo</strong></td><td>Booleano</td></tr><tr><td><strong>Esempio</strong></td><td><code>false</code></td></tr></tbody></table>

#### `payee`

{% hint style="info" %}
Questa funzionalità è in sperimentazione interna.
{% endhint %}

### `third_party_data`

#### `id`` `<mark style="color:red;">`*`</mark>

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>identificativo <em>third party</em> univoco, generato dall'ente, necessario per poter aggregare il messaggio coi suoi allegati</td></tr><tr><td><strong>Obbligatorio</strong></td><td>Sì</td></tr><tr><td><strong>Tipo</strong></td><td>Stringa</td></tr><tr><td><strong>Esempio</strong></td><td><code>false</code></td></tr></tbody></table>

#### `has_attachments`

<table data-header-hidden><thead><tr><th width="210"></th><th></th></tr></thead><tbody><tr><td><strong>Descrizione</strong></td><td>Indica la presenza di eventuali allegati relativi al messaggio.</td></tr><tr><td><strong>Obbligatorio</strong></td><td>No</td></tr><tr><td><strong>Default</strong></td><td><code>false</code></td></tr><tr><td><strong>Tipo</strong></td><td>Booleano</td></tr><tr><td><strong>Esempio</strong></td><td><code>false</code></td></tr></tbody></table>

<details>

<summary><span data-gb-custom-inline data-tag="emoji" data-code="1f6a7">🚧</span> Campi riservati per utilizzi futuri</summary>

#### `original_sender`

#### `original_receipt_date`

#### `summary`

</details>

### **`prescription_data`**

{% hint style="info" %}
Questa funzionalità è in sperimentazione interna.
{% endhint %}

### `eu_covid_cert`

{% hint style="info" %}
Questa funzionalità è riservata ai soggetti autorizzati.
{% endhint %}

### `legal_data`

{% hint style="info" %}
Questa funzionalità è in sperimentazione interna.
{% endhint %}

## **Esempi**

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request POST 'https://api.io.pagopa.it/api/v1/messages' \
--header 'Content-Type: application/json' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--data-raw '{
"content": {
"subject": "Welcome new user !",
"markdown": "# This is a markdown header\n\nto show how easily markdown can be converted to **HTML**\n\nRemember: this has to be a long text."
},
“feature_type”: “STANDARD”,
"fiscal_code": "AAAAAA00A00A000A"
}'
```
{% endcode %}

{% code overflow="wrap" %}
```shell
### RESPONSE
{
"id": "01EM6X4JB9VSZTQ8H16KMQFCEJ"
}
```
{% endcode %}

## Risorse utili

[https://developer.io.italia.it/openapi.html#operation/submitMessageforUserWithFiscalCodeInBody](https://developer.io.italia.it/openapi.html#operation/submitMessageforUserWithFiscalCodeInBody)
