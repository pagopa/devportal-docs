# Modifica di un Servizio

Tale sezione descrive lo scenario, nel quale un Service Provider ricerca e/o modifica  i propri parametri di configurazione all'interno del registro.

## API richieste in questo flusso



## Sequence Diagram

```mermaid
sequenceDiagram
  Participant sp as "Service Provider"
  Participant pagopa as "PAGOPA-DISCOVERY SERVICE"

sp ->> pagopa : GET RicercaServizio
pagopa -->> sp : 200 -OK 

sp ->> pagopa : PATCH ModificaServizio
pagopa -->> sp : 200- OK
```

