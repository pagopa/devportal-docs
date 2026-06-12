---
description: >-
  Procedura per il caricamento, la modifica e l'eliminazione massiva delle
  posizioni debitorie su GPD
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/posizioni-debitorie/gestione-massiva/gestione-massiva-tramite-api-rest
---

# ⚙️ Gestione massiva tramite API REST

Le API di gestione massiva consentono il caricamento, l'aggiornamento e la cancellazione massiva di posizioni debitorie. Tale processo consente all'Ente Creditore di gestire un massimo di 100 mila posizioni debitorie mediante il caricamento di un file che non deve superare la dimensione di 5 MB compresso in formato ZIP.

### Creazione massiva

La richiesta di creazione massiva delle posizioni debitorie prevede il caricamento di un file JSON contenente una lista di posizioni debitorie. Per i dettagli specifici del file si rimanda alla sezione [API del DevPortal](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie).

Se il caricamento del file è avvenuto correttamente e risulta valido, la risposta restituirà lo status code 202.&#x20;

Al fine di poter verificare il corretto caricamento delle posizioni debitorie in archivio è necessario utilizzare le informazioni condivise nell'header di risposta nei seguenti campi:

* Location contenente l'URL relativo per verificare lo stato di avanzamento della creazione;
* Retry-After contenente una stima di quando il processo di creazione sarà completato.

Tale API ha un rate-limit configurato pari a 1 richiesta al secondo per subscription-key.

### Aggiornamento Massivo

La richiesta dell'aggiornamento massivo richiede il caricamento di un file JSON con struttura analoga a quello utilizzato in fase di creazione.&#x20;

Verranno aggiornate esclusivamente le posizioni debitorie riconosciute, mentre quelle non presenti in archivio saranno ignorate.

Se il caricamento del file è avvenuto correttamente e risulta valido, la risposta restituirà lo status code 202.&#x20;

Al fine di poter verificare il corretto aggiornamento delle posizioni debitorie in archivio è necessario utilizzare le informazioni condivise nell'header di risposta nei seguenti campi:

* Location contenente l'URL relativo per verificare lo stato di avanzamento della creazione;
* Retry-After contenente una stima di quando il processo di creazione sarà completato.

Tale API ha un rate-limit configurato pari a 1 richiesta al secondo per subscription-key.

### Cancellazione Massiva

La richiesta di cancellazione massiva prevede il caricamento di un file JSON contenente la lista degli IUPD da cancellare.

Se il caricamento del file è avvenuto correttamente e risulta valido, la risposta restituirà lo status code 202.&#x20;

Al fine di poter verificare la corretta cancellazione delle posizioni debitorie in archivio è necessario utilizzare le informazioni condivise nell'header di risposta nei seguenti campi:

* Location contenente l'URL relativo per verificare lo stato di avanzamento della creazione;
* Retry-After contenente una stima di quando il processo di creazione sarà completato.

Tale API ha un rate-limit configurato pari a 1 richiesta al secondo per subscription-key.

### Stato delle operazioni massive

Per monitorare lo stato di avanzamento di un'operazione massiva sono disponibili due API di supporto:

* **API di recupero dell'identificativo di elaborazione:** fornisce la lista degli identificativi dei file caricati (corrispondente ad una operazione massiva) per cui è possibile richiedere lo status o il report. La lista ha una profondità di 60 giorni ed è limitata ad un range di 7 giorni.\
  Se il campo _`hasMore`_ nel body di risposta è true allora nell'header è presente il campo `x-continuation-token` necessario per richiedere la paginazione successiva.
* **API di status:** restituisce il numero di posizioni debitorie elaborate rispetto al totale di quelle sottomesse. Lo status è recuperabile per operazioni entro i 60 giorni. Quando i campi `processedItem` e `submittedItem` in risposta corrispondono allora l'elaborazione è completata.\
  Inoltre, per maggior dettaglio, nelle v2 è riportato il campo `operationStatus` contenente lo stato dell'elaborazione dell'operazione massiva assumendo i seguenti significati:
  * IN\_PROGRESS: il file è stato acquisito ma l'elaborazione è ancora in corso;
  * COMPLETED: l'elaborazione è terminata e sono state effettuate con successo tutte le operazioni massive riguardanti le posizioni debitorie specificate nel file caricato;
  * COMPLETED\_WITH\_WARNINGS: l'elaborazione è terminata ma non tutte le operazioni massive riguardanti le posizioni debitorie specificate nel file caricato hanno avuto successo;
  * COMPLETED\_UNSUCESSFULLY: l'elaborazione è terminata ma tutte le operazioni massive riguardanti le posizioni debitorie specificate nel file caricato non hanno avuto successo;
* **API di report:** fornisce un riepilogo aggregato degli status code e status message ottenuti durante l'interazione con il servizio di gestione delle posizioni debitorie.\
  Il report è recuperabile per operazioni entro i 60 giorni.

Tali API hanno un rate-limit configurato pari a 10 richieste al secondo per subscription-key.
