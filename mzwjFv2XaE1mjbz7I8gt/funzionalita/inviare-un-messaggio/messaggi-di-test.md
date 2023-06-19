# Messaggi di test

Prima di andare in produzione puoi testare il contenuto dei messaggi, che però verranno inviati all'indirizzo email del delegato.

{% hint style="info" %}
Se vuoi inviare dei messaggi di test a cittadini reali e valutare come il messaggio viene visualizzato direttamente nell'app IO, devi richiedere un'[abilitazione specifica](../../abilitazioni/test-con-codici-fiscali-reali.md).
{% endhint %}

Il processo di invio di un messaggio di test prevede di eseguire tre passaggi:

<details>

<summary><mark style="color:blue;">Step 1</mark> - <strong>Scegli un servizio</strong></summary>

**Scegli un servizio** in bozza (`is_visible=false`) e recupera la sua chiave primaria (`primary_key`)

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Invia un messaggio di test</summary>

**Invia un messaggio** al cittadino di test con Codice Fiscale **`AAAAAA00A00A000A`**. Per farlo, usa le API come descritto in [Invio Messaggio](broken-reference).

Il messaggio verrà recapitato alla casella di posta elettronica del delegato che ha creato il servizio.

Di seguito, trovi un esempio di chiamata all'API tramite il comando `curl`, eseguibile da terminale.&#x20;

In alternativa, puoi utilizzare software di gestione API (es. POSTMAN) assicurandoti di compilare i dati dell’header e del Content-Type, in particolare la proprietà di api-key identificata da `‘Ocp-Apim-Subscription-Key’`:

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
    "fiscal_code": "AAAAAA00A00A000A"
}'
```

```shell
###RESPONSE
{ "id": "01EM6X4JB9VSZTQ8H16KMQFCEJ" }
```

Sostituisci il valore **`__YOUR_API_KEY__`** con una delle api-key del servizio che hai generato.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Accedi alla casella del delegato</summary>

Per leggere il messaggio, **accedi alla casella di posta elettronica** del delegato che ha creato il servizio in bozza.

</details>
