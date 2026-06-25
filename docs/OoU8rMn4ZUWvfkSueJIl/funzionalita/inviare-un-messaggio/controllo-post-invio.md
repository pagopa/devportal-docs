# Controllo post-invio

Il controllo dell’invio del messaggio avviene tramite l’utilizzo dell’ID del messaggio ottenuto nel passaggio descritto in [invio-messaggio.md](invio-messaggio.md "mention"), contestualmente al codice fiscale del cittadino.&#x20;

Per effettuare la verifica viene usata l’api [`Get Message`](https://developer.io.italia.it/openapi.html#operation/getMessage).

{% hint style="warning" %}
È importante verificare lo status del messaggio, che dovrà trovarsi nello status di `Processed` verificabile dalla risposta ottenuta dalla API.
{% endhint %}

## Esempi

Esempio d’uso con la versione `GET` di [`Get Message`](https://developer.io.italia.it/openapi.html#operation/getMessage) utilizzando `CURL`:

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

