# Controllo pre-invio

## A cosa serve il controllo pre-invio?

Prima di inviare un messaggio ad un cittadino è necessario effettuare i seguenti controlli:

* il cittadino è iscritto ad IO;
* il cittadino non ha disattivato le comunicazioni del servizio (di default i cittadini sono iscritti a tutti i servizi, ma è possibile che un cittadino abbia disattivato le comunicazioni da un servizio).

{% hint style="info" %}
Gli utenti di IO possono decidere se usare una configurazione rapida dei servizi (ed essere iscritti di default a tutti i servizi presenti e futuri) oppure una configurazione manuale, che prevede un'attivazione a uno a uno di tutti i servizi.
{% endhint %}

## Come si effettua?

Il controllo pre-invio può essere effettuato in due modalità.

### API `Get a User Profile`

È possibile utilizzare l’API [`Get a User Profile using POST`](https://developer.io.italia.it/openapi.html#operation/getProfileByPOST) per ogni codice fiscale a cui si vuole inviare un messaggio e controllare i valori della risposta. La risposta è ritenuta positiva se entrambe le condizioni sono verificate:

* lo status code della risposta è **`200`**
* nel body di risposta il campo **`sender_allowed=true`**

{% hint style="danger" %}
Il metodo [`Get a User Profile`](https://developer.io.italia.it/openapi.html#operation/getProfile) è deprecato. Ti consigliamo di non usarla ed eventualmente di sostituirla con [`Get a User Profile using POST`](https://developer.io.italia.it/openapi.html#operation/getProfileByPOST)
{% endhint %}

### API `Get Subscriptions Feed`

{% hint style="info" %}
Questa modalità è riservata agli enti centrali o di livello nazionale.
{% endhint %}

L'API [`Get Subscriptions Feed`](https://developer.io.italia.it/openapi.html#operation/getSubscriptionsFeedForDate) permette di effettuare il download degli hash dei codici fiscali dei cittadini iscritti/disiscritti ad un servizio in un determinato giorno.&#x20;

Lo scopo del subscription feed è mettere a disposizione degli enti centrali (es.: ministeri, enti di livello nazionale, ecc) uno strumento per minimizzare le chiamate verso l'infrastruttura di IO attraverso un filtro costruito dall’ente stesso.&#x20;

Le informazioni del subscription feed sono aggiornate al giorno precedente. Per la costruzione del subscription feed è necessario interrogare il servizio per ogni giorno a partire dalla data del 24/03/2020 fino alla data attuale.&#x20;

## Esempi

Esempio d’uso con la versione `POST` di [`Get a User Profile using POST`](https://developer.io.italia.it/openapi.html#operation/getProfileByPOST):

{% code overflow="wrap" %}
```shell
### REQUEST
curl --location --request POST 'https://api.io.pagopa.it/api/v1/profiles' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{
"fiscal_code": "AAAAAA00A00A000A"
}'
```
{% endcode %}

risposta corretta con `status 200`:

{% code overflow="wrap" %}
```shell
### RESPONSE
{
"sender_allowed": true
}
```
{% endcode %}

