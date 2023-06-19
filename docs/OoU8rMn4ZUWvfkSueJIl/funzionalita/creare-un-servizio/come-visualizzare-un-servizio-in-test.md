# Come visualizzare un servizio in test

È possibile accedere alla scheda di un servizio di test ancora non visibile in IO (`is_visible=false`) seguendo le istruzioni descritte in questo paragrafo.

{% hint style="info" %}
**Importante**: è necessario che l’utente sia abilitato a poter inviare messaggi al proprio codice fiscale. [Scopri come ->](../../abilitazioni/test-con-codici-fiscali-reali.md)
{% endhint %}

<details>

<summary><mark style="color:blue;">Step 1</mark> - Crea un servizio di test</summary>

Puoi farlo dal [Developer Portal](https://developer.io.italia.it/) o tramite API.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Invia un messaggio</summary>

Invia un messaggio al tuo codice fiscale usando il servizio appena creato

{% code overflow="wrap" %}
```bash
curl --location --request POST 'https://api.io.pagopa.it/api/v1/messages/FISCAL_CODE' \
--header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \
--header 'Content-Type: application/json' \
--data-raw '{k
content": {
"subject": "A new message subject",
"markdown": "A message body markdown Lorem ipsu xxxxxxx dsdfsdfdsfsdfsdfsdfdsfdsfasdasdasd on min 80 character"
}
}'
```
{% endcode %}



</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Apri il messaggio in app</summary>

Attendi l'arrivo del messaggio in app, quindi selezionalo per visualizzarne il dettaglio.&#x20;

Puoi forzare l'aggiornamento della lista messaggi scorrendo verso in basso (pull to refresh).

&#x20;<img src="../../.gitbook/assets/ezgif-5-8554f1ca1f.gif" alt="Esempio di apertura messaggio in app" data-size="original">



</details>

<details>

<summary><mark style="color:blue;">Step 4</mark> - Apri la scheda servizio</summary>

In fondo al messaggio trovi il nome del servizio che lo ha inviato: selezionalo per visualizzare la scheda del servizio.

![Esempio di apertura scheda servizio da un messaggio in app](../../.gitbook/assets/ezgif-5-59d64998d9.gif)



</details>
