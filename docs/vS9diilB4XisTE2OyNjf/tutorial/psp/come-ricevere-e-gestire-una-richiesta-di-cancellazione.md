# Come ricevere e gestire una richiesta di cancellazione

Questo tutorial descrive come il tuo sistema deve gestire una richiesta di cancellazione in entrata, inviata quando un avviso è stato pagato altrove o annullato.

## **Step 1: Ricevi la richiesta di cancellazione**

Il tuo sistema riceverà una chiamata `POST` su un endpoint specifico che identifica la risorsa da cancellare.

### Endpoint

```
POST /rtps/{rtpId}/cancel
```

{% hint style="info" %}
**Importante**: Questa chiamata non ha un corpo della richiesta. L'operazione è triggerata dall'invocazione stessa dell'endpoint.
{% endhint %}

## **Step 2: Processa la cancellazione e aggiorna lo stato**

* Usa l'`rtpId` ricevuto nel path per identificare la richiesta di pagamento nel tuo sistema.
* Aggiorna immediatamente lo stato della richiesta nella tua applicazione, mostrandola come "Annullata" o "Già pagata". Questo è fondamentale per impedire all'utente di tentare un pagamento non più dovuto.

## **Step 3: Conferma l'avvenuta cancellazione**

Rispondi alla chiamata `POST` con uno status code `204 No Content`. Questa risposta sincrona è sufficiente a confermare che l'operazione è stata completata con successo. A differenza di quanto previsto nelle bozze precedenti, non è necessario un callback asincrono.
