# 🔢 Setup iniziale

## Iscrizione

Il primo passo per utilizzare le api di IO è l’[**iscrizione al developer portal**](https://developer.io.italia.it/)**.**&#x20;

Per completare l’iscrizione dovrai validare un indirizzo email, un numero di cellulare e inserire i dati anagrafici e di riferimento dell’ente.

<figure><img src=".gitbook/assets/0" alt="Esempio della schermata di registrazione"><figcaption></figcaption></figure>

## Creazione di un servizio

Terminata la registrazione potrai **creare il primo servizio** (o sottoscrizione):

1. Nella colonna sinistra, seleziona **“Profilo (sottoscrizioni)”**
2. **Controlla i campi precompilati** e modificali, se necesario
3. Crea un servizio selezionando il pulsante **“Aggiungi sottoscrizione”**
4. Visualizza e salva le chiavi segrete (**API key**) associate al servizio

## Sandbox

Al termine di questi passi preliminari, potrai testare soltanto le seguenti API di IO utilizzando il cittadino di test con codice fiscale **`AAAAAA00A00A000A`**:

1. [Submit a Message passing the user fiscal\_code in the request body](https://developer.io.italia.it/openapi.html#operation/submitMessageforUserWithFiscalCodeInBody)
2. [Submit a Message passing the user fiscal\_code as path parameter](https://developer.io.italia.it/openapi.html#operation/submitMessageforUser)
3. [Get Message](https://developer.io.italia.it/openapi.html#operation/getMessage)
4. [Get a User Profile using POST](https://developer.io.italia.it/openapi.html#operation/getProfileByPOST)
5. [Get a User Profile](https://developer.io.italia.it/openapi.html#operation/getProfile)

### Invio di un messaggio

{% hint style="info" %}
In questa fase preliminare, l'invio dei messaggi si tradurrà nell’invio di un'email all'indirizzo inserito in fase di registrazione al portale.
{% endhint %}

A questo punto è possibile **inviare il primo messaggio** al cittadino di test `AAAAAA00A00A000A` utilizzando le API di IO.

Di seguito viene riportato un esempio di chiamata all'API tramite il comando `curl`, eseguibile da terminale. In alternativa è possibile utilizzare software di gestione API (es. POSTMAN) avendo accortezza di compilare i dati dell’header e del Content-Type, in particolare la proprietà di API KEY identificato da `‘Ocp-Apim-Subscription-Key’`:

```shell
### REQUEST
curl --location --request POST 'https://api.io.pagopa.it/api/v1/messages/AAAAAA00A00A000A' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{
"content": {
"subject": "My first IO app message with min 10 character",
"markdown": "This is my first message to the IO app. Use body markdown format with min 80 character"
}
}'
```

```shell
### RESPONSE
{
    "id": "01EM6X4JB9VSZTQ8H16KMQFCEJ"
}
```

{% hint style="info" %}
Sostituisci il valore **`__YOUR_API_KEY__`** con una delle api-key del servizio generato in precedenza.
{% endhint %}
