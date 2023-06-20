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

Per la fase di sperimentazione, l'**API Key** viene trasmessa cifrata in fase di stipula contrattuale ai canali indicati dell'ente secondo le modalità previste dal contratto stesso.&#x20;

Per decifrare la chiave è necessario avere `openssl` installato ed eseguire il seguente comando, dando in input la chiave cifrata e il `secret` trasmesso da PagoPA.

```bash
echo "<ENCRYPTED_API_KEY_HERE>" | openssl aes-256-cbc -d -pbkdf2 -a
```

L'API Key deve essere inclusa in ogni richiesta utilizzando l'header:&#x20;

```
Ocp-Apim-Subscription-Key : "<API_KEY_HERE>"
```

### **Come installare openssl?**

<details>

<summary>Se usi Windows</summary>

Installa openssl utilizzando una versione precompilata della libreria (.exe) Qui trovi una [guida](https://medium.com/swlh/installing-openssl-on-windows-10-and-updating-path-80992e26f6a1) per Windows 10.

</details>

<details>

<summary>Se usi Mac</summary>

Su **Mac** trovi già una versione installata di default, ma ti consigliamo di installare comunque l'ultima versione seguendo [questa guida](https://yasar-yy.medium.com/installing-openssl-library-on-macos-catalina-6777a2e238a6).

</details>

<details>

<summary>Se usi Linux</summary>

Su **Linux** è installato di default. Puoi comunque installare l'ultima versione seguendo [questa guida](https://medium.com/@brunoosiek/updating-openssl-latest-and-greatest-version-in-ubuntu-18-04-8f10ba4e2377).

</details>
