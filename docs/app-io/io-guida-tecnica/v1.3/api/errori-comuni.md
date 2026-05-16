---
description: >-
  In questa sezione trovi alcuni dei possibili errori a fronte di un invio di
  una richiesta alle API.
---

# Errori comuni

## Errore 429

Tutte le api possono restituire lo status code 429 che rappresenta un segnale di sovraccarico dell’infrastruttura di IO: in questo caso è necessario implementare un meccanismo di retry e diminuire il rate delle richieste inserendo delle pause.

## Errore 400

{% code overflow="wrap" %}
```
{
"detail": "value [undefined] at [root.0] is not a valid [Exact<NewMessage>]\nvalue [undefined] at [root.1] is not a valid [{ time_to_live: (integer >= 3600 and < 604800 | 604800) }]",
"status": 400,
"title": "Invalid (Exact<NewMessage> & { time_to_live: (integer >= 3600 and < 604800 | 604800) })"
}
```
{% endcode %}

In questo caso l’errore è dovuto ad una errata trasmissione del body, come ad esempio un body non inviato nel formato corretto (JSON).

## Errore 401

{% code overflow="wrap" %}
```
{
"statusCode": 401,
"message": "Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription."
}
```
{% endcode %}

Accertarsi di aver inserito nell’header il valore corretto della chiave Ocp-Apim-Subscription-Key e di utilizzare una delle due chiavi presenti nella sezione Profilo (sottoscrizioni) che trovate nel Portale di gestione del Servizio.

## Errore 403

{% code overflow="wrap" %}
```
{
"detail": "You are not allowed to issue requests for the recipient.",
"status": 403,
"title": "Recipient forbidden"
}
```
{% endcode %}

Accertarsi di aver inserito un codice fiscale valido o presente nel test.

## Errore 404

{% code overflow="wrap" %}
```
{
"statusCode": 404,
"message": "Resource not found"
}
```
{% endcode %}

Accertarsi di aver scritto correttamente il path della richiesta, es: `https://api.io.pagopa.it/api/v1/profiles`

### &#x20;<a href="#_nkq4bxf7stju" id="_nkq4bxf7stju"></a>
