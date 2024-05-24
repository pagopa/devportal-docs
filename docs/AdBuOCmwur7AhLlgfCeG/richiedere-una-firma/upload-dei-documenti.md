# Upload dei documenti

Una volta creata con successo una **Signature Request**, è necessario effettuare l'upload tramite _REST API_ dei documenti PDF da far firmare.

L'upload dei file non viene effettuato direttamente sul `Resource Server` che espone le API di Firma con IO, ma su un `Document Storage` dedicato, basato su [Azure BLOB Storage](https://azure.microsoft.com/it-it/products/storage/blobs/).

Per ciascun documento da far firmare, è necessario:

1. Ottenere il `document_id` dalla Signature request. Nell'esempio riportato in [Creazione di una Signature request](creazione-di-una-signature-request.md) il `document_id` era: "`01ARZ3NDEKTSV4RRFFQ69G5FAV`";
2. Ottenere un **Upload URL** specifico per il documento, dall'endpoint REST dedicato `GET/api/v1/sign/signature-requests/{signature_request_id}/documents/{document_id}/upload_url;`
3. Effettuare l'upload verso **Upload URL**
4. Verificare che il documento sia stato correttamente caricato, effettuando una richiesta `HTTP GET` all'endpoint: `/api/v1/sign/signature-requests/{signature_request_id}` specificando il signature\_request\_id e gli header necessari per l'autenticazione.&#x20;

Nell'oggetto `DOCUMENTS` troverai i riferimenti ai documenti e lo stato dell'upload ad essi associato.

### Come effettuare l'upload verso Upload URL

Per effettuare l'upload hai due opzioni:

<details>

<summary>Tramite <strong>SDK di Azure Storage</strong></summary>

Utilizza l'**SDK di Azure Storage** del linguaggio di programmazione di riferimento.

</details>

<details>

<summary>Tramite <strong>richiesta http</strong></summary>

Effettua una **richiesta http** (`PUT`) verso l'Upload URL indicando nell'header della richiesta `x-ms-blob-type : BlockBlob` e come corpo del messaggio il contenuto binario del file.&#x20;

</details>

{% hint style="warning" %}
**Upload URL** ha una validità di 15 minuti, è legato a uno specifico documento da caricare (non può essere utilizzato per più di un documento) e contiene tutte le informazioni necessarie all'autenticazione verso il `Document Storage`.
{% endhint %}
