# Come creare e attivare una Purpose



L'utilizzo di una Purpose richiede la creazione di una bozza corredata dall'Analisi del Rischio, e una successiva attivazione.

## Step 1 - Creare la Purpose in DRAFT

La Purpose deve essere creata indicando l'E-Service verso il quale verrà utilizzata, le informazioni della FInalità, la stima di carico e l'Analisi del Rischio.

Request

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

Nota: attraverso l'interfaccia web di Interoperabilità è disponibile il tool per sviluppatori `Export analisi del rischio`, che permette di generare il valore del campo `riskAnalysisForm` a partire dalla compilazione visuale del form.

La richiesta di creazione, se andata a buon fine, produce una Purpose con una versione in bozza.

Response

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

## Step 2 - Attivazione della Purpose Completata la compilazione, è necessario sottomettere la Purpose per poterla attivare.

```
POST /purposes/17bfba0b-85f2-44e1-9bfc-497605a0d8c7/activate

{}
```

### Caso 1 - Stima di carico inferiore alle soglie massime

Se la stima di carico è inferiore alle soglie previste dal Descrittore dell'E-Service, la Purpose viene attivata.

Response

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

### Caso 2 - Stima di carico superiore alle soglie massime

Se la stima di carico è superiore alle soglie previste dal Descrittore dell'E-Service, la Purpose passa in attesa di approvazione e richiede la conferma da parte dell'Erogatore.

Response

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
