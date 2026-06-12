---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/t7UU6OMWc3V12nDNAZlV/tutorial/come-ricevere-e-gestire-una-richiesta-di-cancellazione
---

# Come ricevere e gestire una richiesta di cancellazione

Questo tutorial guida il Service Provider del Debitore attraverso i passaggi necessari per gestire correttamente una richiesta di cancellazione (RfC) in entrata. Questa operazione viene avviata da PagoPA quando un avviso di pagamento è stato annullato o pagato tramite altri canali.

Il processo prevede la ricezione di una richiesta, l'aggiornamento dello stato nei sistemi del Service Provider del Debitore e l'invio di una notifica di conferma asincrona.

{% @mermaid/diagram content="sequenceDiagram
    autonumber
    
    participant PA as PagoPA
    participant SP as Service Provider del Debitore

    %% Flusso Sincrono: Ricezione e Presa in Carico
    PA->>+SP: POST /.../cancellation-requests <br>(messaggio camt.055)
    Note right of SP: Identifica la richiesta <br> originale e aggiorna <br> lo stato interno <br> a "Annullata"
    SP-->>-PA: 201 Created <br>(Presa in carico confermata)

    %% Flusso Asincrono: Notifica di Conferma
    SP->>PA: Invia conferma asincrona<br> (messaggio camt.029) <br> all'URL di callback
    Note over  PA, SP : La conferma contiene lo stato<br>Sts.Conf = CNCL e TxCxlSts = ACCR" %}

## Step 1: Implementazione dell'endpoint di ricezione della cancellazione

Il sistema del Service Provider del Debitore deve esporre un endpoint in grado di ricevere le richieste di cancellazione inviate da PagoPA.

### Endpoint (da implementare)

```http
POST /sepa-request-to-pay-requests/{sepaRequestToPayRequestResourceId}/cancellation-requests
```

## Step 2: Ricezione e processamento del messaggio di cancellazione (`camt.055`)

Quando si riceve una chiamata su questo endpoint, il corpo della richiesta contiene un oggetto `SepaRequestToPayCancellationRequestResource`, che incapsula un messaggio `camt.055.001.08`.

A seguire:

1. **Identificazione della richiesta originale:** si userà il `sepaRequestToPayRequestResourceId` ricevuto nel path e i dati di correlazione all'interno del messaggio (es. `OrgnlEndToEndId`) per individuare la richiesta di pagamento da annullare nel sistema.
2. **Aggiornamento dello stato:** occorre modificare lo stato della richiesta nell'applicazione, mostrandola all'utente come "Annullata" o "Già pagata". Questo è un passaggio cruciale per impedire all'utente di tentare un pagamento non più dovuto.
3. **Risposta alla chiamata**: viene inviata una risposta sincrona con status code **`204 No Content`** per confermare la cancellazione.
