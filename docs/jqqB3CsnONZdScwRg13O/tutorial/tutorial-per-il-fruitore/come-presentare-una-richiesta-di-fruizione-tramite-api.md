# Come presentare una richiesta di fruizione tramite API

La presentazione di una richiesta di fruizione (Agreement) prevede la creazione di una bozza, seguita da una sottomissione.

## Step 1 - Creare l'Agreement in DRAFT

L'Agreement deve essere creato indicando sia l'e-service che la specifica versione di e-service (EServiceDescriptor) a cui fa riferimento.

**Request**

```json
POST /agreements

{
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac"
}
```

La richiesta di creazione, se andata a buon fine, produce un Agreement in bozza.

**Response**

```json
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
    "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "state": "DRAFT",
    "createdAt": "2025-06-01T00:12:34Z"
}
```

## Step 2 - Sottomettere l'Agreement per l'attivazione

La bozza può essere sottomessa per richiederne l'attivazione.

**Request**

```
POST /agreements/17bfba0b-85f2-44e1-9bfc-497605a0d8c7/submit

{}
```

### Risposta in caso di requisiti soddisfatti

Se il Fruitore richiedente possiede i requisiti necessari, l'Agreement viene attivato.

**Response**

```json
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
    "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "state": "ACTIVE",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z"
}
```

### Risposta in caso di requisiti non soddisfatti

Se il fruitore richiedente non possiede i requisiti necessari, l'Agreement passa allo stato In attesa di approvazione (PENDING).

**Response**

```json
{
    "id": "17bfba0b-85f2-44e1-9bfc-497605a0d8c7",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
    "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "state": "PENDING",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z"
}
```

***

Pagina successiva [→ Come presentare una finalità tramite API](come-presentare-una-finalita-tramite-api.md)
