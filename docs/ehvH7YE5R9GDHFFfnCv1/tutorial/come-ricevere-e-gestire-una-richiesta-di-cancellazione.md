---
argomenti_correlati:
  - /docs/pago-pa-srtp/tutorial/come-inviare-richiesta-pagamento
funzione: tutorial
livello: intermedio
prodotto:
  nome: PagoPA SRTP
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': HowTo
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  description: >-
    Questo tutorial guida i Service Provider del Debitore attraverso i passaggi
    per gestire una richiesta di cancellazione (RfC) in entrata, avviata da
    PagoPA quando un avviso di pagamento viene annullato o pagato tramite altri
    canali.
  keywords:
    - cancellazione
    - RfC
    - camt.055
    - camt.029
    - callback
    - SRTP
    - SEPA Request-to-Pay
  name: Come ricevere e gestire una richiesta di cancellazione
  step:
    - '@type': HowToStep
      name: Implementa l'endpoint di ricezione della cancellazione
      text: >-
        Esporre un endpoint POST
        /sepa-request-to-pay-requests/{sepaRequestToPayRequestResourceId}/cancellation-requests
        per ricevere le richieste di cancellazione da PagoPA.
    - '@type': HowToStep
      name: Ricevi e processa il messaggio di cancellazione (camt.055)
      text: >-
        All'arrivo di una richiesta, identifica la richiesta di pagamento
        originale usando sepaRequestToPayRequestResourceId. Aggiorna lo stato
        interno a 'Annullata' per impedire ulteriori pagamenti e rispondi con
        status 201 Created.
    - '@type': HowToStep
      name: Invia la conferma di cancellazione asincrona (camt.029)
      text: >-
        Invia un messaggio di conferma camt.029 all'URL di callback del
        mittente. Imposta il campo Sts.Conf a 'CNCL' e TxCxlSts a 'ACCR' per
        confermare l'avvenuta cancellazione.
status: pubblicato
tecnologia:
  - REST API
  - HTTP
  - JSON
  - camt.055
  - camt.029
utente:
  ruolo: erogatore
  tag:
    - cancellazione
    - RfC
    - callback
    - asincrono
    - SRTP
  tipo_ente: partner_tecnologico
---

# Come ricevere e gestire una richiesta di cancellazione

Questo tutorial guida il Service Provider del Debitore attraverso i passaggi necessari per gestire correttamente una richiesta di cancellazione (RfC) in entrata. Questa operazione viene avviata da PagoPA quando un avviso di pagamento è stato annullato o pagato tramite altri canali.

Il processo prevede la ricezione di una richiesta, l'aggiornamento dello stato nei sistemi del Service Provider del Debitore e l'invio di una notifica di conferma asincrona.

```mermaid
sequenceDiagram
    autonumber
    
    participant PA as PagoPA
    participant SP as Service Provider del Debitore

    %% Flusso Sincrono: Ricezione e Presa in Carico
    PA->>+SP: POST /.../cancellation-requests <br>(messaggio camt.055)
    Note right of SP: Identifica la richiesta <br> originale e aggiorna <br> lo stato interno <br> a "Annullata"
    SP-->>-PA: 201 Created <br>(Presa in carico confermata)

    %% Flusso Asincrono: Notifica di Conferma
    SP->>PA: Invia conferma asincrona<br> (messaggio camt.029) <br> all'URL di callback
    Note left of PA: La conferma contiene lo stato<br>Sts.Conf = CNCL e TxCxlSts = ACCR
```

## **Step 1: Implementazione dell'endpoint di ricezione della cancellazione**

Il sistema del Service Provider del Debitore deve esporre un endpoint in grado di ricevere le richieste di cancellazione inviate da PagoPA.

### **Endpoint (da implementare)**

```http
POST /sepa-request-to-pay-requests/{sepaRequestToPayRequestResourceId}/cancellation-requests
```

## **Step 2: Ricezione e processamento del messaggio di cancellazione (`camt.055`)**

Quando si riceve una chiamata su questo endpoint, il corpo della richiesta contiene un oggetto `SepaRequestToPayCancellationRequestResource`, che incapsula un messaggio `camt.055.001.08`.

A seguire:

1. **Viene identificata la richiesta originale:** Si userà il `sepaRequestToPayRequestResourceId` ricevuto nel path e i dati di correlazione all'interno del messaggio (es. `OrgnlEndToEndId`) per individuare la richiesta di pagamento da annullare nel sistema.
2. **Viene aggiornato lo stato:** occorre modificare lo stato della richiesta nell'applicazione, mostrandola all'utente come "Annullata" o "Già pagata". Questo è un passaggio cruciale per impedire all'utente di tentare un pagamento non più dovuto.
3. **Rispondere alla chiamata**: viene inviata una risposta sincrona con status code **`204 No Content`** per confermare la cancellazione.
