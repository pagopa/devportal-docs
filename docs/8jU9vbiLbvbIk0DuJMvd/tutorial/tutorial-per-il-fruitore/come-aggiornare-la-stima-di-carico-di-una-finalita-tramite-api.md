---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/jqqB3CsnONZdScwRg13O/tutorial/tutorial-per-il-fruitore/come-aggiornare-la-stima-di-carico-di-una-finalita-tramite-api
---

# Come aggiornare la stima di carico di una finalità tramite API

L'aggiornamento della stima di carico di una finalità (Purpose) può essere applicato direttamente, o richiedere l'approvazione dell'erogatore in caso sia superiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor).

### Prerequisiti

* Aver creato un [client API Interoperabilità](../../riferimenti-tecnici/client-e-materiale-crittografico/) e caricato nel client almeno una chiave pubblica
* Aver nominato un [amministratore del client](../../riferimenti-tecnici/api-esposte-da-pdnd/#prerequisiti-e-ruoli)

### Step 1: Aggiornare la stima di carico

**Request**

```
POST /purposes/17bfba0b-85f2-44e1-9bfc-497605a0d8c7/versions

{
    "dailyCalls": "5000"
}
```

**Response**

Se la stima di carico è inferiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor):

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
        "id": "0cd13c3d-1608-4bea-9efc-9fe12ebcc100",
        "state": "ACTIVE",
        "createdAt": "2025-06-01T00:12:34Z",
        "dailyCalls": "5000"
    }
}
```

**Response**

Se la stima di carico è superiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor):

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
        "dailyCalls": "1000"
    }
    "waitingForApprovalVersion": {
        "id": "0cd13c3d-1608-4bea-9efc-9fe12ebcc100",
        "state": "WAITING_FOR_APPROVAL",
        "createdAt": "2025-06-02T00:12:34Z",
        "dailyCalls": "5000"
    }
}
```

***

Pagina successiva [→ Come generare il corredo crittografico e caricare una chiave pubblica](come-generare-il-corredo-crittografico-e-caricare-una-chiave-pubblica.md)
