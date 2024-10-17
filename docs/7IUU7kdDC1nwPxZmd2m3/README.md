# Test space 1

{% content-ref url="https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/snippet/6005" %}
[test snippet](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/snippet/6005)
{% endcontent-ref %}

## Create a new user

\#### hidden world

SOAP

\####hidden world

<mark style="color:green;">`POST`</mark> `/users`

\<Description of the endpoint>

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

| Name   | Type   | Description      |
| ------ | ------ | ---------------- |
| `name` | string | Name of the user |
| `age`  | number | Age of the user  |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "id": 1,
  "name": "John",
  "age": 30
}
```
{% endtab %}

{% tab title="400" %}
```json
{
  "error": "Invalid request"
}
```
{% endtab %}
{% endtabs %}
