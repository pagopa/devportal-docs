# Come approvare una richiesta di fruizione in attesa di approvazione tramite API

Sull'API lo stato **In attesa di approvazione** delle richieste di fruizione (Agreement) è identificato con **PENDING**.

Un Agreement in stato PENDING necessita di uno o più interventi da parte dell'erogatore dell'e-service.

### Prerequisiti

* Aver creato un [client API Interoperabilità](../../riferimenti-tecnici/client-e-materiale-crittografico/) e caricato nel client almeno una chiave pubblica
* Aver nominato un [amministratore del client](../../riferimenti-tecnici/api-esposte-da-pdnd/#prerequisiti-e-ruoli)

### Caso 1 — Approvazione manuale necessaria

Da eseguire se l'attivazione di un Agreement richiede l'approvazione manuale dell'erogatore. L'approvazione manuale può essere scelta dall'erogatore all'atto della definizione di una versione di e-service. Per maggiori informazioni, si veda la [sezione dedicata](../../riferimenti-tecnici/e-service/#informazioni-di-versione).

**Request**

```
POST /agreements/4ed64879-2568-4117-9b34-2322cbcdf90d/approve

{}
```

**Response**

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

### Caso 2 — Attributo verificato necessario

Da eseguire se l'e-service richiede il possesso di uno o più attributi verificati non ancora assegnati al fruitore.

#### Step 1: Assegnazione di un attributo verificato al fruitore

{% hint style="warning" %}
Questo endpoint non è ancora disponibile, sarà rilasciato prossimamente. È comunque possibile eseguire l'operazione manualmente dal front office. Per maggiori informazioni, si veda la [sezione dedicata](../../../../../jqqB3CsnONZdScwRg13O/riferimenti-tecnici/attributi/).
{% endhint %}

L'assegnazione richiede il riferimento all'Agreement per il quale è necessario l'attributo.

**Request**

```json
POST /tenants/172c89fe-62d1-4f3e-82bc-1ff034a85567/verifiedAttributes

{
    "id": "727e9cc7-de40-4c03-8f37-e604b8de32f4",
    "agreementId": "4ed64879-2568-4117-9b34-2322cbcdf90d"
}
```

#### Step 2: Approvazione dell'Agreement da parte dell'erogatore

L'erogatore può ora confermare l'attivazione dell'Agreement.

**Request**

```
POST /agreements/4ed64879-2568-4117-9b34-2322cbcdf90d/approve

{}
```

**Response**

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

***

Pagina successiva [→ Come ottenere le richieste di fruizione in attesa di approvazione tramite API](come-ottenere-le-richieste-di-fruizione-in-attesa-di-approvazione-tramite-api.md)
