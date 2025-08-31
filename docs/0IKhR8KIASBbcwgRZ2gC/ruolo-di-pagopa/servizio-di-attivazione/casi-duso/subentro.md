---
hidden: true
---

# Subentro

Tale sezione descrive la richiesta di attivazione al servizio SRTP per uno specifico soggetto debitore utilizzando il Service Provider indicato nella richiesta.

In questo scenario, il soggeto debitore è già attivato presso un diverso Service Provider (ServiceProvider\_2) . L'azione eseguita dal nuovo Service Provider sarà notificata al precedente Service Provider.

_Pre-Requisito_ :  Il soggetto debitore è già attivato presso un diverso Service Provider ; autenticazione al servizio tramite schema oAuth2-Client Credential Grant Type , utilizzando **client\_secret e secret\_id** ottenuti in fase di adesione

### API richieste per questo flusso&#x20;

* [Creazione Attivazione](../../../api-specifiche-tecniche/creazione-attivazione.md)
* [Get AccessToken](../../../api-specifiche-tecniche/get-accesstoken.md)
* TakeOver
* NotifyTakeOver

## Sequence Diagram

```mermaid
sequenceDiagram
title Esempio di richiesta di attivazione 
participant sp as "Service Provider"
participant pagopa as "PagoPA-RTP-Services"
participant sp_oth as "Service Provider 2"



sp ->> pagopa :  CreazioneAttivazione 
pagopa -->> sp: 429 - Debtor already activated

sp ->> pagopa: Subentro
pagopa -->> sp : 200 - OK
pagopa ->> sp_oth : notifyTakeOver
sp _oth -->> pagopa : 200 -Ok
```

