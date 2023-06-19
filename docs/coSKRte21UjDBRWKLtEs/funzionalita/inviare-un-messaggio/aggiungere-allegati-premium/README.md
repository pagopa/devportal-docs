# 📎 Aggiungere allegati (Premium)

## Cosa sono gli allegati

Gli enti che hanno sottoscritto il [programma Premium](../../../abilitazioni/funzionalita-premium.md) possono **includere allegati** nei messaggi che inviano. Questi allegati vengono recuperati dai sistemi dell'ente mittente nel momento in cui vengono aperti dall'utente.

<figure><img src="../../../.gitbook/assets/Allegati.png" alt="Esempio di come un utente può visualizzare un messaggio che contiene un allegato."><figcaption><p>Quando l'utente apre un messaggio vengono recuperati, oltre ai metadati del contenuto del messaggio, anche quelli relativi ai metadati (endpoint 1). Il recupero del file vero e proprio avviene tramite l'endpoint 2, ovvero con una GET all'indirizzo {baseUrl}/{url}.</p></figcaption></figure>

## Come funziona?

<details>

<summary><mark style="color:blue;">Step 0</mark> - Esponi gli endpoint di recupero degli allegati</summary>

Per permettere a IO di recuperare il contenuto di un messaggio e dei suoi allegati, **devi mettere a disposizione un **_**REST web service**_ conforme alla [relativa OpenAPI](https://editor.swagger.io/?url=https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api-third-party.yaml).

Per maggiori informazioni, leggi le [specifiche-degli-endpoint-di-recupero-degli-allegati.md](specifiche-degli-endpoint-di-recupero-degli-allegati.md "mention").

</details>

Per includere gli allegati in un messaggio, oltre agli step indicati in [..](../ "mention"), devi seguire questi step:

<details>

<summary><mark style="color:blue;">Step 1</mark> - Includi il blocco <a data-mention href="../../../api/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#third_party_data">#third_party_data</a></summary>

Includi il blocco [#third\_party\_data](../../../api/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#third\_party\_data "mention"), che contiene le informazioni necessarie per mostrare gli allegati.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Specifica il valore <code>TRUE</code> nel campo <a data-mention href="../../../api/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#has_attachments">#has_attachments</a> </summary>

Specifica il valore `TRUE` nel campo [#has\_attachments](../../../api/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#has\_attachments "mention") presente nella request.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Specifica il valore <code>ADVANCED</code> nel campo <a data-mention href="../../../api/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body.md#feature_level_type">#feature_level_type</a> </summary>

Specifica il valore `ADVANCED` nel campo [#feature\_level\_type](../../../api/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body.md#feature\_level\_type "mention") presente nella request.

</details>

### Esempi

Esempio di chiamata per l’invio di un messaggio con allegati:

{% code overflow="wrap" %}
```shell
curl --location --request POST 'https://api.io.pagopa.it/api/v1/messages' \
--header 'Ocp-Apim-Subscription-Key: <YOUR_API_KEY>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "content": {
    "subject": "Messaggio con allegati",
    "markdown": "# Titolo\n\nTesto del messaggio: contiene **allegati**!",
    "third_party_data": {
      "id": "1234567890", 
      "has_attachments": true
    }
  },
  "feature_level_type": "ADVANCED",
  "fiscal_code": "<validFiscalCode>",
}'
```
{% endcode %}

Esempio di risposta positiva:

{% code overflow="wrap" %}
```json
{
  "id": "01BX9NSMKVXXS5PSP2FATZMYYY"
}
```
{% endcode %}
