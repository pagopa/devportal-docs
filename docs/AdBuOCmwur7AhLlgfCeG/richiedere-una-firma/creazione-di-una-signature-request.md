# Creazione di una Signature request

Per creare la "Signature request", ovvero la richiesta di firma, dovrai avere con te:

* il [**dossier\_id**](../creare-il-dossier.md)
* il [**signer\_id**](recupero-id-del-cittadino.md).

Se lo desideri, puoi anche indicare la **data di scadenza** della richiesta di firma, ovvero il tempo massimo concesso all'utente per firmare. Se deciderai di inviare la richiesta di firma[ tramite messaggio su IO](invio-della-richiesta-di-firma/tramite-messaggio-su-io.md), la data di scadenza sarà presente nel corpo del messaggio che verrà inviato all'utente.&#x20;

{% hint style="info" %}
Se non indichi una scadenza, la richiesta di firma avrà una validità default di **3 mesi**.
{% endhint %}

#### Vuoi inserire dei campi firma diversi rispetto a quelli del dossier?

Nella fase di creazione di una signature request, potresti avere la necessità di avere dei campi firma diversi rispetto a quelli del relativo dossier. Hai pertanto la possibilità di inserire dei **metadati specifici per quella signature request**, che andranno a sovrascrivere quelli del dossier. `documents_metadata` è un campo **opzionale**.

Di seguito, trovi un esempio di chiamata verso l'endpoint: `POST /api/v1/sign/signature-requests`

Con corpo del messaggio:&#x20;

```json
{
  "dossier_id": "01GG4NFBCN4ZH8ETCCKX3766KX",
  "signer_id": "01GG4TG9FP2D3JPWFTAM0WEFTG",
  "expires_at": "2023-01-01T00:00:00.000Z",
  "documents_metadata": [
    {
      "title": "Firma contratto 150 ore",
      "signature_fields": [
        {
          "attrs": {
            "coordinates": {
              "x": 112,
              "y": 510
            },
            "size": {
              "w": 140,
              "h": 40
            },
            "page": 0
          },
          "clause": {
            "title": "Firma contratto",
            "type": "REQUIRED"
          }
        }
      ]
    }
  ]
}
```

{% hint style="warning" %}
Presta attenzione al **formato della data**!\
La data ed ora segue lo standard **ISO 8601.** Puoi indicare SEMPRE data e orari **nel fuso orario UTC** oppure indicando la differenza rispetto a UTC con la notazione standard ("Z" o "+hh:mm").
{% endhint %}

La risposta sarà la seguente:

```json
{
   "id": "01ARZ3NDEKTSV4RRFFQ69G5FAV",
   "dossier_id": "01GG4NFBCN4ZH8ETCCKX3766KX",
   "signer_id": "01GG4TG9FP2D3JPWFTAM0WEFTG",
   "status": "DRAFT",
   "created_at": "2022-12-05T00:00:00.000Z",
   "updated_at": "2022-12-05T00:00:00.000Z",
   "expires_at": "2023-01-01T00:00:00.000Z",
   "documents": [
      {
         "id": "01ARZ3NDEKTSV4RRFFQ69G5FAV",
         "status": "WAIT_FOR_UPLOAD",
         "metadata": {
            "title": "Firma contratto 150 ore",
            "signature_fields": [
               {
                  "attrs": {
                     "coordinates": {
                        "x": 112,
                        "y": 510
                     },
                     "size": {
                        "w": 140,
                        "h": 40
                     },
                     "page": 0
                  },
                  "clause": {
                     "title": "Firma contratto",
                     "type": "REQUIRED"
                  }
               }
            ]
         },
         "created_at": "2022-12-05T00:00:00.000Z",
         "updated_at": "2022-12-05T00:00:00.000Z"
      }
   ]
}
```

All'interno della risposta riceverai la Signature request creata con il relativo `signature_request_id` associato.

{% hint style="warning" %}
Prendi nota del`signature_request_id`: ti servirà nella fase successiva.
{% endhint %}
