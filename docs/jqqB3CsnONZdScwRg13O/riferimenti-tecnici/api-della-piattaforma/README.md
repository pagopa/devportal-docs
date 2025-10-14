# API della piattaforma

### Che cos’è e a cosa serve

L’API di **PDND Interoperabilità** consente l’**integrazione applicativa** con la piattaforma, offrendo un’alternativa/complemento al **front office** per **automatizzare** e **governare** i processi di **erogazione** e **fruizione** degli e-service nel rispetto dei profili autorizzativi dell’ente.

### Versione corrente

La **versione corrente** e oggetto di questa documentazione è la **v.2**. Per maggiori dettagli, si veda la [**specifica OpenAPI**](https://developer.pagopa.it/pdnd-interoperabilita/api/pdnd-core-v2#/).&#x20;

### Prerequisiti e ruoli

Le operazioni in scrittura richiedono la **nomina** di un **amministratore** dell’ente come **amministratore del client** associato; i **permessi** determinano le azioni consentite su ciascun oggetto.

### Ambito funzionale (v.2)

La v.2 espone operazioni **in lettura e scrittura** sui principali **oggetti di dominio** della piattaforma, in coerenza con i permessi dell’utenza:

* **e-service** e **versioni** (creazione, aggiornamento, gestione del ciclo di vita);
* **richieste di fruizione** e **finalità** (presentazione, gestione, stato);
* **client**, **chiavi** e **operatori di sicurezza** (associazione, gestione materiali crittografici);
* **attributi** e **analisi del rischio** (compilazione e gestione dove previsto).

### Oggetti di dominio

| Termine in API     | Significato            |
| ------------------ | ---------------------- |
| Agreement          | richiesta di fruizione |
| Attribute          | attributo              |
| Client             | client                 |
| Consumer           | ente fruitore          |
| Delegation         | delega                 |
| EService           | e-service              |
| EServiceDescriptor | versione di e-service  |
| EServiceTemplate   | template di e-service  |
| Key                | chiave pubblica        |
| Producer           | ente erogatore         |
| Purpose            | finalità               |
| PurposeVersion     | versione di finalità   |
| RiskAnalysis       | analisi del rischio    |
| Tenant             | ente aderente          |
| User               | utente                 |

### Stati

Gli oggetti di dominio possono assumere **stati** comuni (nel senso di **macchina a stati**). Non tutti gli oggetti implementano l’intero insieme degli stati; alcuni hanno stati specifici non riportati qui per brevità. I **cicli di vita** dei singoli oggetti sono illustrati nelle sezioni dedicate della guida.

| Termine in API                   | Significato               |
| -------------------------------- | ------------------------- |
| ACTIVE / PUBLISHED               | attivo                    |
| ARCHIVED                         | archiviato                |
| DRAFT                            | in bozza                  |
| PENDING / WAITING\_FOR\_APPROVAL | in attesa di approvazione |
| REJECTED                         | rifiutato                 |
| SUSPENDED                        | sospeso                   |

***

Pagina successiva [→ Richiesta di fruizione (Agreement)](richiesta-di-fruizione-agreement.md)
