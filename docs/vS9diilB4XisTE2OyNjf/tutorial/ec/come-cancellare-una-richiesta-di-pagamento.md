# Come cancellare una richiesta di pagamento

Questo tutorial illustra come annullare una SRTP inviata. Grazie alle nuove API, l'operazione è un'azione triggerata da un endpoint e non richiede la costruzione di un payload complesso.

## **Step 1: Ottenere l'AccessToken**

Ottieni un `AccessToken` valido.

## **Step 2: Identificare la SRTP da cancellare**

Per annullare una richiesta, devi conoscerne l'`rtpId` univoco. Puoi averlo salvato dalla risposta `201 Created` dell'invio, oppure puoi recuperarlo tramite gli endpoint `GET /rtps` o `GET /rtps/{rtpId}`.

## **Step 3: Invocare l'API di cancellazione**

Effettua una chiamata `POST` all'endpoint dedicato, specificando l'`rtpId` nel path.

### Endpoint

```
POST /rtps/{rtpId}/cancel
```

Importante: Questa chiamata non richiede un corpo della richiesta.

### Risposte

* **Successo (`204 No Content`)**: La richiesta è stata cancellata con successo. Questa risposta è sincrona e definitiva.
* **Errore (`404 Not Found`):** La SRTP con l'ID specificato non esiste.
* **Errore (`422 Unprocessable Entity`):** Non è possibile annullare la SRTP perché si trova in uno stato finale (es. già pagata o rifiutata).
