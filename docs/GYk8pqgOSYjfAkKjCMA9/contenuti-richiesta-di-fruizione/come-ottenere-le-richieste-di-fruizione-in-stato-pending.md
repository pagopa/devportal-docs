# Come ottenere le Richieste di Fruizione in stato PENDING

{% hint style="info" %}
È possibile ottenere solo gli Agreements ai i quali il richiedente partecipa come Fruitore o come Erogatore
{% endhint %}

## Caso 1 - Il Fruitore richiede i propri Agreements in PENDING

È utile, ma non obbligatorio indicare il parametro `consumerIds` con l'id del proprio tenant per evitare di ottenere Agreement in PENDING per i quali si è Erogatori.&#x20;

Richiesta

```
GET /agreements
    ?states=PENDING
    &consumerIds=efea2507-08df-4a5d-b4bf-263763ae03ad
    &offset=0
    &limit=2
```

Risposta

```
{
  "results": [
    {
      "id": "4ed64879-2568-4117-9b34-2322cbcdf90d",
      "eserviceId": "fd7d6c6b-c042-4d9c-926a-d5e26c815220",
      "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
      "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
      "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
      "state": "PENDING",
      "createdAt": "2025-05-01T00:12:34Z",
      "updatedAt": "2025-05-02T00:12:34Z"
    },
    {
      "id": "77eb543f-8273-4dd4-b300-1d49b40e6f9d",
      "eserviceId": "0c46fc70-9d1e-471f-a043-1b5f385fbb29",
      "descriptorId": "6a25c4df-333d-4329-b68f-1799670d44f2",
      "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
      "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
      "state": "PENDING",
      "createdAt": "2025-06-01T00:12:34Z",
      "updatedAt": "2025-06-02T00:12:34Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 2,
    "totalCount": 45
  }
}
```

## Caso 2 - L'Erogatore richiede gli Agreements PENDING per un proprio E-Service

L'Erogatore può richiedere l'elenco degli Agreements per cui è richiesta la sua approvazione.

Richiesta

```
GET /agreements
    ?states=PENDING
    &eserviceIds=2474f999-2448-4828-bfa6-3dd48168bb61
    &offset=0
    &limit=2
```

Risposta

```
{
  "results": [
    {
      "id": "4ed64879-2568-4117-9b34-2322cbcdf90d",
      "eserviceId": "2474f999-2448-4828-bfa6-3dd48168bb61",
      "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
      "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
      "consumerId": "efea2507-08df-4a5d-b4bf-263763ae03ad",
      "state": "PENDING",
      "createdAt": "2025-05-01T00:12:34Z",
      "updatedAt": "2025-05-02T00:12:34Z"
    },
    {
      "id": "77eb543f-8273-4dd4-b300-1d49b40e6f9d",
      "eserviceId": "2474f999-2448-4828-bfa6-3dd48168bb61",
      "descriptorId": "6a25c4df-333d-4329-b68f-1799670d44f2",
      "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
      "consumerId": "a2521558-5b90-4835-bc8e-2ce535e45ba0",
      "state": "PENDING",
      "createdAt": "2025-06-01T00:12:34Z",
      "updatedAt": "2025-06-02T00:12:34Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 2,
    "totalCount": 35
  }
}
```

## Caso 3 - L'Erogatore richiede gli Agreements PENDING per un proprio E-Service ed uno specifico Fruitore

L'Erogatore può ottenere l'Agreement di un determinato Fruitore verso un proprio E-Service.

Richiesta

```
GET /agreements
    ?states=PENDING
    &eserviceIds=2474f999-2448-4828-bfa6-3dd48168bb61
    &consumerIds=7b2b1d1c-0232-4576-88c6-3ff5683cf8c0
    &offset=0
    &limit=2
```

Risposta

```
{
  "results": [
    {
      "id": "4ed64879-2568-4117-9b34-2322cbcdf90d",
      "eserviceId": "2474f999-2448-4828-bfa6-3dd48168bb61",
      "descriptorId": "419adb1c-8e0e-4225-97d9-24510a9a4aac",
      "producerId": "90f45b0c-f63b-4a16-9352-80497ee88890",
      "consumerId": "7b2b1d1c-0232-4576-88c6-3ff5683cf8c0",
      "state": "PENDING",
      "createdAt": "2025-05-01T00:12:34Z",
      "updatedAt": "2025-05-02T00:12:34Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 2,
    "totalCount": 1
  }
}
```
