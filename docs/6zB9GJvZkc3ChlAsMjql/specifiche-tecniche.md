# Specifiche Tecniche

## API recupero URL

{% swagger method="post" path="" baseUrl="PSP url" summary="" expanded="false" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idTransaction" required="true" type="String" %}
id della transazione

i.e. 15448fefsfsr48sr84fser84sdf
{% endswagger-parameter %}

{% swagger-parameter in="body" name="amount" type="Integer" required="true" %}
Importo in euro cents comprensivo delle fee

i.e. 12500
{% endswagger-parameter %}

{% swagger-parameter in="body" name="urlBack" required="true" %}
Url di ritorno&#x20;


{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" %}
causale del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paName" %}
descrizione dell’ente creditore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="iban" %}
Iban del conto corrente dell’utente
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
{
    "url": string - url/idPSPTransaction - id del PSP 
    "idTransaction": string - "15448fefsfsr48sr84fser84sdf",
    "amount": integer - “12500"
}
```
{% endswagger-response %}

{% swagger-response description="" status="400: Bad Request" %}
```
{
    "status": 400,​
    "detail": string - "There was an error processing the request",
    "idTransaction": string - "15448fefsfsr48sr84fser84sdf",
    "amount": integer - “12500"
}
```
{% endswagger-response %}

{% swagger-response description="" status="401: Unauthorized" %}
```
{
    "status": 401,​
    "detail": string - "Unauthorized",
    "idTransaction": string - "15448fefsfsr48sr84fser84sdf",
    "amount": integer - “12500"
}
```
{% endswagger-response %}

{% swagger-response description="" status="500: Internal Server Error" %}
```
{
    "status": 500
}
```
{% endswagger-response %}
{% endswagger %}

## Redirect

{% swagger method="get" path="" baseUrl="url/idPSPTransaction " summary="" expanded="false" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```
{
    "url": string - url/idPSPTransaction - id del PSP 
    "idTransaction": string - "15448fefsfsr48sr84fser84sdf",
    "amount": integer - “12500"
}
```
{% endswagger-response %}

{% swagger-response description="" status="400: Bad Request" %}
```
{
    "status": 400,​
    "detail": string - "There was an error processing the request",
    "idTransaction": string - "15448fefsfsr48sr84fser84sdf",
    "amount": integer - “12500"
}
```
{% endswagger-response %}

{% swagger-response description="" status="500: Internal Server Error" %}
```
{
    "status": 500
}
```
{% endswagger-response %}
{% endswagger %}

## API callback esito transazione

{% swagger method="post" path="" baseUrl="apiEsitoPagamento/idTransaction" summary="" expanded="false" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="paymentGatewayType" required="true" type="String" %}
Identificativo PSP
{% endswagger-parameter %}

{% swagger-parameter in="body" name="outcome" type="String" required="true" %}
Esito del pagamento&#x20;

OK/KO
{% endswagger-parameter %}

{% swagger-parameter in="body" name="authorizationCode" required="true" %}
Identificativo del pagamento


{% endswagger-parameter %}

{% swagger-parameter in="body" name="errorCode" %}
motivo del diniego
{% endswagger-parameter %}

{% swagger-parameter in="body" name="timestampOperation" type="Timestamp" required="true" %}
data e ora del pagamento
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
{
  "idTransaction": "string",
  "outcome": "OK",
}
```
{% endswagger-response %}

{% swagger-response description="" status="400: Bad Request" %}
```
{
    "status": 400,​
    "detail": string - "There was an error processing the request"
}
```
{% endswagger-response %}

{% swagger-response description="" status="401: Unauthorized" %}
```
{
    "status": 401,​
    "detail": string - "Unauthorized",
}
```
{% endswagger-response %}

{% swagger-response description="" status="404: Not Found" %}
```
{
    "status": 404,​
    "detail": string - "idTransaction/amount doesn't exit",
}
```
{% endswagger-response %}

{% swagger-response status="409: Conflict" description="" %}
```
{
    "status": 409,​
    "detail": string - "Conflict"

}
```
{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="" %}
```
{
    "status": 500
}
```
{% endswagger-response %}
{% endswagger %}

## API Storno

{% swagger method="delete" path="" baseUrl="apiPSPStorno" summary="" expanded="false" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idTransaction" required="true" type="String" %}
Identificativo del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="action" type="String" required="true" %}
Azione richiesta

i.e. "refund"
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
{
  "idTransaction": "string",
  "outcome": "OK",
}
```
{% endswagger-response %}

{% swagger-response description="" status="400: Bad Request" %}
```
{
    "status": 400,​
    "detail": string - "There was an error processing the request"
}
```
{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="" %}
```
{
    "status": 500
}
```
{% endswagger-response %}
{% endswagger %}
