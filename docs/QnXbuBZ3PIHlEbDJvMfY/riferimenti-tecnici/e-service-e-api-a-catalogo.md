# E-service e API a Catalogo

Un **e-service** è l'oggetto centrale del catalogo di PDND Interoperabilità. Non è l'API stessa, ma la sua rappresentazione standardizzata che ne descrive ogni aspetto: dalla sua funzione, alla sua interfaccia tecnica, fino alle policy di accesso e al suo stato operativo. Questa sezione fornisce i dettagli tecnici sulla struttura e la gestione degli e-service, informazioni fondamentali per gli Erogatori che devono pubblicare e manutenere i propri servizi.

### Struttura di un E-service

Un e-service è composto da un insieme di attributi che ne definiscono le caratteristiche. Di seguito sono elencati i campi principali.

| Nome campo                  | Descrizione                                                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **name**                    | Il nome dell'e-service. Deve essere univoco per l'ente Erogatore e avere una lunghezza tra 5 e 60 caratteri.                                       |
| **description**             | Una descrizione chiara dello scopo del servizio, con una lunghezza tra 10 e 250 caratteri.                                                         |
| **technology**              | La tecnologia dell'API (es. `REST` o `SOAP`).                                                                                                      |
| **mode**                    | La modalità di erogazione: `DELIVER` (erogazione diretta) o `RECEIVE` (erogazione inversa).                                                        |
| **descriptor**              | Un oggetto che contiene i dettagli della singola versione dell'e-service, tra cui l'interfaccia OpenAPI, la documentazione e le policy di accesso. |
| **audience**                | L'audience a cui è destinato il voucher, tipicamente una stringa che identifica la risorsa protetta.                                               |
| **voucherLifespan**         | La durata di validità (in secondi) dei voucher rilasciati per questo e-service. Il valore deve essere compreso tra 60 e 86.400 (24 ore).           |
| **agreementApprovalPolicy** | La politica di approvazione delle richieste di fruizione, che può essere `AUTOMATIC` o `MANUAL`.                                                   |

### Ciclo di Vita di una Versione di E-service

Ogni e-service può avere più versioni, e ciascuna versione attraversa un ciclo di vita ben definito, gestito attraverso i seguenti stati:

* **Bozza (Draft)**: La versione è in fase di creazione o modifica e non è visibile nel catalogo. Può essere eliminata solo se non è la prima e unica versione dell'e-service.
* **Pubblicata (Published)**: La versione è attiva e diventa quella corrente nel catalogo. Le nuove richieste di fruizione verranno associate a questa versione. Quando una nuova versione viene pubblicata, la precedente passa automaticamente allo stato _Deprecata_.
* **Deprecata (Deprecated)**: La versione è ancora utilizzabile dai Fruitori già collegati, ma non è più la più recente. Non accetta nuove richieste di fruizione.
* **Sospesa (Suspended)**: L'Erogatore ha temporaneamente bloccato l'utilizzo di questa versione, interrompendo l'accesso per tutti i Fruitori collegati. Può essere riattivata.
* **Archiviata (Archived)**: La versione è stata ritirata definitivamente dal catalogo e non è più utilizzabile. Una versione viene archiviata automaticamente dalla piattaforma quando l'ultimo Fruitore ad essa collegato archivia la propria richiesta di fruizione.

### Gestione delle Soglie di Carico

Per proteggere la propria infrastruttura e pianificare correttamente le risorse, l'Erogatore deve definire due soglie di carico per ogni versione di e-service:

1. **Soglia per singolo Fruitore (`dailyCallsPerConsumer`)**: Il numero massimo di chiamate API al giorno permesse a ogni singolo Fruitore.
2. **Soglia Totale (`dailyCallsTotal`)**: Il numero massimo di chiamate API al giorno dato dalla somma di quelle di tutti i Fruitori.

Quando un Fruitore crea una nuova finalità, la piattaforma verifica che la stima di carico dichiarata, sommata a quella delle altre sue finalità attive, non superi la soglia per singolo Fruitore. Successivamente, verifica che la somma delle stime di tutti i Fruitori non superi la soglia totale. Se una di queste soglie viene superata, la finalità non viene attivata automaticamente ma passa in stato "In attesa di approvazione" e richiede un intervento manuale da parte dell'Erogatore.

L'Erogatore può aggiornare queste soglie in qualsiasi momento senza dover creare una nuova versione dell'e-service.

### Best Practice per la Nomenclatura

* **Chiarezza e Specificità**: Utilizzare un nome per l'e-service che sia immediatamente comprensibile e che ne descriva la funzione in modo non ambiguo (es. "Verifica Iscrizione Albo Professionale" è meglio di "Servizio Albo").
* **Consistenza**: Adottare una convenzione di nomenclatura coerente per tutti gli e-service erogati dal proprio ente per facilitarne l'individuazione e la gestione.
* **Evitare Acronimi**: Se non strettamente necessario e di uso comune, evitare acronimi che potrebbero non essere chiari a tutti i potenziali Fruitori.
