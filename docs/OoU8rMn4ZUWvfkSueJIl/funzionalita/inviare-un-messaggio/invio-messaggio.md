# Invio messaggio

I messaggi inviati dagli enti in IO sono sempre comunicazioni di carattere personale, in quanto indirizzate a uno specifico utente.&#x20;

L'ente può interrogare il backend quando è a conoscenza del Codice Fiscale di un utente a cui deve comunicare qualcosa di personale.&#x20;

L'ente è autorizzato a procedere nell'invio della propria comunicazione se vengono rispettate entrambe le seguenti condizioni:

1. il Codice Fiscale del destinatario risulta presente tra gli utenti dell'app;
2. l'utente non ha negato il consenso a ricevere comunicazioni da parte del servizio.

Per inviare un messaggio è necessario utilizzare l’api [Submit a Message passing the user fiscal\_code in the request body](https://developer.io.italia.it/openapi.html#operation/submitMessageforUserWithFiscalCodeInBody).&#x20;

{% hint style="danger" %}
**Importante**

Sconsigliamo l'uso di [Submit a Message passing the user fiscal\_code as path parameter](https://developer.io.italia.it/openapi.html#operation/submitMessageforUser) che verrà deprecata e poi rimossa.
{% endhint %}

{% hint style="danger" %}
**Importante**

L’invio del messaggio avviene in modalità asincrona per cui lo status code `201` indica che il messaggio è stato preso in carico dall’infrastruttura di IO per la successiva elaborazione. L'elaborazione può fallire per cui è necessario effettuare un controllo post-invio. Per poter effettuare il controllo post-invio sono richiesti l’ID del messaggio e il codice fiscale del cittadino a cui si riferisce il messaggio.
{% endhint %}

### Esempi

Esempio di invio messaggio utilizzando [`Submit a Message passing the user fiscal_code in the request body`](https://developer.io.italia.it/openapi.html#operation/submitMessageforUserWithFiscalCodeInBody)

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request POST 'https://api.io.pagopa.it/api/v1/messages' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{
    "content": {
        "subject": "My first IO app Premium message with min 10 character",
        "markdown": "This is my first Premium message to the IO app. Use body markdown format with min 80 character"
    },
    "feature_level_type": "ADVANCED",
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



#### &#x20;<a href="#_g6llo2xl6vp6" id="_g6llo2xl6vp6"></a>
