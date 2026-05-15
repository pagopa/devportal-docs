# API Rest

Firma con IO espone delle **API REST** che:

* sono composte da endpoint con URL _prevedibili_ basate sulle risorse;
* utilizzano _JSON_ come formato di interscambio, sia per le richieste che per le risposte HTTP;
* fanno uso di _verbs_ e _response codes_ standard di HTTP;
* utilizzano [Problem Details (RFC7807)](https://www.rfc-editor.org/rfc/rfc7807) per descrivere gli errori;
* sono documentate secondo specifica OpenAPI 3.0.

Il base URL per tutte le API è [https://api.io.pagopa.it](https://api.io.pagopa.it/api/v1/sign)

{% hint style="warning" %}
In fase di sperimentazione, il numero di chiamate API effettuabili è soggetto ad una soglia di 150 invocazioni in una finestra di cinque secondi.
{% endhint %}

### Autenticazione

Le API di Firma con IO fanno uso di una **API Key** per l'autenticazione delle richieste.

Per la fase di test, puoi generare l'**API Key** accedendo direttamente all'Area Riservata.

L'API Key deve essere inclusa in ogni richiesta utilizzando l'header:&#x20;

```
Ocp-Apim-Subscription-Key : "<API_KEY_HERE>"
```
