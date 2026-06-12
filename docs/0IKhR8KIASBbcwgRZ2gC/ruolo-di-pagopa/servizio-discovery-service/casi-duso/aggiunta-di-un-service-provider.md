# Aggiunta di un Service Provider

Tale sezione descrive lo scenario, nel quale un Service Provider inserisce  i propri parametri di configurazione all'interno del registro.

## API richieste in questo flusso



## Sequence Diagram

```mermaid
sequenceDiagram
  Participant sp as "Service Provider"
  Participant pagopa as "PAGOPA-DISCOVERY SERVICE"

sp ->> pagopa : POST AggiungiServizio
pagopa -->> sp : 200 -OK 

```

Al termine dell'opeazione, il Servizio è disp
