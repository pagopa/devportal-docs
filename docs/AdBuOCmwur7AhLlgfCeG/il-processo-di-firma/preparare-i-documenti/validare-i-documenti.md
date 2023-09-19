# Validare i documenti

Una volta preparato il documento, puoi **verificare che sia stato preparato correttamente**!&#x20;

Per farlo, basta effettuare una richiesta `HTTP POST` con `Content-Type` `multipart/form-data` verso l'endpoint `/api/v1/sign/validate-document` inserendo nel corpo della richiesta:

1. il documento PDF da validare
2. un documento JSON, contenente i campi firma individuati precedentemente, se presenti

#### Esempio

```http
POST /api/v1/sign/validate-document
Content-Type: multipart/form-data; boundary=----exampleBoundary

-----exampleBoundary
Content-Disposition: form-data; name="document"; filename="document.pdf";
Content-Type: application/pdf

DOCUMENT-DATA-HERE

-----exampleBoundary
Content-Disposition: form-data; name="fields"; filename="fields.json";
Content-Type: application/json

[
    {
        "clause": {
            "title": "clause 1",
            "type": "REQUIRED"
        },
        "attrs":{
          "coordinates":{
             "x":85,
             "y":676
          },
          "size":{
             "w":177,
             "h":77
          },
          "page":3
       }
    }
]
-----exampleBoundary--
```

#### Risposta

```json
{
   "is_valid": "false",
   "violations": [
      "(clause 1) incompatible coordinates: unable to find page 3 in the uploaded document"
   ]
}
```

{% hint style="info" %}
Se il documento non è stato preparato correttamente, riceverai la motivazione e potrai modificare il documento così che sia pronto per la firma!&#x20;
{% endhint %}
