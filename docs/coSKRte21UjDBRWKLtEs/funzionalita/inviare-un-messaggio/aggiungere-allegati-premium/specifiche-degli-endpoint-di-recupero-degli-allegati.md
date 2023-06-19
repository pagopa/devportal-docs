# Specifiche degli endpoint di recupero degli allegati

Per permettere a IO di recuperare il contenuto di un messaggio e dei suoi allegati, **devi mettere a disposizione un **_**REST web service**_ conforme alla [relativa OpenAPI](https://editor.swagger.io/?url=https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml).

Il servizio deve esporre due _endpoint_, che il backend di IO richiamerà quando necessario.

Una volta pronti, comunica al team di IO gli _endpoint_ (baseUrl) e la relativa [#api-key](specifiche-degli-endpoint-di-recupero-degli-allegati.md#api-key "mention").

## Endpoint di **recupero dell'elenco dei metadati degli allegati**&#x20;

<figure><img src="../../../.gitbook/assets/img 1.png" alt="schema che riassume la sequenza delle operazioni coinvolte nel recupero dei dati da parte di IO."><figcaption><p> Lo schema che riassume la sequenza delle operazioni coinvolte nel recupero dei dati da parte di IO.</p></figcaption></figure>

{% swagger src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml" path="/messages/{id}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml)
{% endswagger %}

{% hint style="info" %}
L'identificativo `{id}` che riceverai in questa chiamata corrisponderà a quello che avevi specificato nel blocco [#third\_party\_data](../../../api/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#third\_party\_data "mention") in fase di invio del messaggio.
{% endhint %}

### Esempio di risposta attesa

```json
{
  "attachments": [
    {
      "id": "123456789",
      "content_type": "application/pdf",
      "name": "Nome dell'allegato",
      "url": "<percorso relativo dell'allegato>"
    },
    {
      "id": "4815162342",
      "content_type": "application/pdf",
      "name": "Nome dell'allegato 2",
      "url": "<percorso relativo dell'allegato 2>"
    }
  ]
}
```

> Il campo `content_type` deve contenere il valore "`application/pdf`" in quanto IO accetta unicamente allegati in formato **PDF** conformi allo standard **PDF/A**.

> Il campo `url` deve contenere il **percorso relativo** per il download dell’allegato. Questo perché IO scarica gli allegati tramite una richiesta `GET` all'indirizzo `{baseUrl}/{url}`, dove baseUrl è l'endpoint comunicato al team di IO.&#x20;

## Endpoint di **recupero dei byte del singolo allegato**

<figure><img src="../../../.gitbook/assets/img 2.png" alt="chema che riassume la sequenza delle operazioni coinvolte nel recupero dei byte del singolo allegato."><figcaption><p>Lo schema che riassume la sequenza delle operazioni coinvolte nel recupero dei byte del singolo allegato.</p></figcaption></figure>

{% swagger src="https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml" path="/messages/{id}/{attachment_url}" method="get" %}
[https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml](https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml)
{% endswagger %}

## Autorizzazioni

### API Key

IO garantisce che il codice fiscale nella _request_ corrisponda a quello dell'utente che sta provando a recuperare gli allegati. Il codice fiscale viene inviato attraverso l'header `fiscal_code`.

{% hint style="warning" %}
L'ente deve verificare che il Codice Fiscale dell’utente sia autorizzato ad accedere al dato richiesto.
{% endhint %}

{% hint style="info" %}
In futuro, verranno aggiunti ulteriori metodi di autenticazione (Bearer Token, OAuth Token etc.)
{% endhint %}