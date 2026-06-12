---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/jqqB3CsnONZdScwRg13O/tutorial/tutorial-per-il-fruitore/come-presentare-una-finalita-tramite-api
---

# Come presentare una finalità tramite API

L'utilizzo di una finalità (**Purpose**) richiede la creazione di una bozza corredata dall'analisi del rischio, e una successiva attivazione.

### Prerequisiti

* Aver creato un [client API Interoperabilità](../../riferimenti-tecnici/client-e-materiale-crittografico/) e caricato nel client almeno una chiave pubblica
* Aver nominato un [amministratore del client](../../riferimenti-tecnici/api-esposte-da-pdnd/#prerequisiti-e-ruoli)

### Step 1: Creare la Purpose in DRAFT

La Purpose deve essere creata indicando l'e-service verso il quale verrà utilizzata, le informazioni della finalità, la stima di carico e l'analisi del rischio.

**Request**

```
POST /purposes

{
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "riskAnalysisForm": {
        version: 1,
        answers: [{...}]
    },
    "title": "Fruizione del servizio XYZ per norma ABC",
    "description": "<Descrizione estesa della Finalità>",
    "isFreeOfCharge": true,
    "freeOfChargeReason": "Sono una Pubblica Amministrazione",
    "dailyCalls": "1000"
}
```

Nota: attraverso il [front office](https://selfcare.pagopa.it/) di PDND Interoperabilità è disponibile uno strumento per sviluppatori che permette di generare il valore del campo `riskAnalysisForm` a partire dalla compilazione visuale del form. È disponibile sotto _Tool per lo sviluppo > Export analisi del rischio_.

La richiesta di creazione, se andata a buon fine, produce una Purpose con una versione in bozza.

**Response**

```
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "title": "Fruizione del servizio XYZ per norma ABC",
    "description": "<Descrizione estesa della Finalità>",
    "createdAt": "2025-06-01T00:12:34Z",
    "isRiskAnalysisValid": true,
    "isFreeOfCharge": true,
    "freeOfChargeReason": "Sono una Pubblica Amministrazione",
    "currentVersion": {
        "id": "b9297a6e-2d8a-4b43-b1e6-a1c74d55f1ea",
        "state": "DRAFT",
        "createdAt": "2025-06-01T00:12:34Z",
        "dailyCalls": "1000"
    }
}
```

### Step 2: Attivazione della Purpose

Completata la compilazione, è necessario sottomettere la Purpose per poterla attivare.

**Request**

```
POST /purposes/17bfba0b-85f2-44e1-9bfc-497605a0d8c7/activate

{}
```

#### Caso 1 — Stima di carico inferiore alle soglie massime

Se la stima di carico è inferiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor), la Purpose viene attivata.

**Response**

```
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "title": "Fruizione del servizio XYZ per norma ABC",
    "description": "<Descrizione estesa della Finalità>",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z",
    "isRiskAnalysisValid": true,
    "isFreeOfCharge": true,
    "freeOfChargeReason": "Sono una Pubblica Amministrazione",
    "currentVersion": {
        "id": "b9297a6e-2d8a-4b43-b1e6-a1c74d55f1ea",
        "state": "ACTIVE",
        "createdAt": "2025-06-01T00:12:34Z",
        "updatedAt": "2025-06-02T00:12:34Z",
        "dailyCalls": "1000"
    }
}
```

#### Caso 2 — Stima di carico superiore alle soglie massime

Se la stima di carico è superiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor), la Purpose passa in attesa di approvazione e richiede la conferma da parte dell'erogatore.

**Response**

```
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "title": "Fruizione del servizio XYZ per norma ABC",
    "description": "<Descrizione estesa della Finalità>",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z",
    "isRiskAnalysisValid": true,
    "isFreeOfCharge": true,
    "freeOfChargeReason": "Sono una Pubblica Amministrazione",
    "waitingForApprovalVersion": {
        "id": "b9297a6e-2d8a-4b43-b1e6-a1c74d55f1ea",
        "state": "WAITING_FOR_APPROVAL",
        "createdAt": "2025-06-01T00:12:34Z",
        "updatedAt": "2025-06-02T00:12:34Z",
        "dailyCalls": "1000"
    }
}
```

***

Pagina successiva [→ Come aggiornare la stima di carico di una finalità tramite API](come-aggiornare-la-stima-di-carico-di-una-finalita-tramite-api.md)
