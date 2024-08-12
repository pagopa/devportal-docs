# Try a service being tested

If you want to view the tab for a service being tested but not yet visible in IO, follow these instructions.

{% hint style="info" %} **Important**: make sure to be able to send messages to your fiscal code. [Discover how ->](../../enabling/test-with-rear-tax-codes.md) {% endhint %}

<details>
<summary><mark style="color:blue;">Step 1</mark>- Create a test service</summary>
If you have not yet done so, discover how [.](./ "mention").

</details>
<details>
<summary><mark style="color:blue;">Step 2</mark>- Send a message</summary>
Send a message to your fiscal code using the service that was just created.

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
<summary><mark style="color:blue;">Step 3</mark>- Open the message in app</summary>
Wait for the message to arrive in app, then select it to view the content. 

You can force the update of the message list by scrolling downward (pull to refresh).

 <img src="../../.gitbook/assets/ezgif-5-8554f1ca1f.gif" alt="Esempio di apertura messaggio in app" data-size="original">

</details>
<details>
<summary><mark style="color:blue;">Step 4</mark>- Open the service tab</summary>
At the bottom of the message, you can see the name of the service that sent it: select it to view the service tab.

![Example of opening the service tab from a message in app](../../.gitbook/assets/ezgif-5-59d64998d9.gif)

</details>
