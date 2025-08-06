# Come approvare  una richiesta di fruizione in attesa di approvazione

Sull'API lo stato _**In attesa di approvazione**_ delle richieste di fruizione (Agreement) è identificato con _**PENDING**_.&#x20;

Un Agreement in stato PENDING necessita di uno o più interventi da parte dell'Erogatore dell'E-Service.

## Caso 1 - Approvazione manuale necessaria

Da eseguire se l'attivazione di un Agreement richiede l'approvazione manuale dell'Erogatore, come configurato nell'E-Service.

Richiesta

```
POST /agreements/4ed64879-2568-4117-9b34-2322cbcdf90d/approve

{}
```

Risposta

```json
{
    "id": "4ed64879-2568-4117-9b34-2322cbcdf90d",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
    "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "state": "ACTIVE",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z"
}
```

## Caso 2 - Attributo Verificato necessario

Da eseguire se l'E-Service richiede il possesso di uno o più Attributi Verificati non ancora assegnati al Fruitore.

### Step 1 - Assegnazione di un Attributo Verificato al Fruitore

{% hint style="info" %}
API rilasciata prossimamente
{% endhint %}

L'assegnazione richiede il riferimento all'Agreement per il quale è necessario l'attributo.

```json
POST /tenants/172c89fe-62d1-4f3e-82bc-1ff034a85567/verifiedAttributes

{
    "id": "727e9cc7-de40-4c03-8f37-e604b8de32f4",
    "agreementId": "4ed64879-2568-4117-9b34-2322cbcdf90d"
}
```

### Step 2 - Approvazione dell'Agreement da parte dell'Erogatore

L'Erogatore può ora confermare l'attivazione dell'Agreement.

Richiesta

```
POST /agreements/4ed64879-2568-4117-9b34-2322cbcdf90d/approve

{}
```

Risposta

```json
{
    "id": "4ed64879-2568-4117-9b34-2322cbcdf90d",
    "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
    "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
    "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
    "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
    "state": "ACTIVE",
    "createdAt": "2025-06-01T00:12:34Z",
    "updatedAt": "2025-06-02T00:12:34Z"
}
```
