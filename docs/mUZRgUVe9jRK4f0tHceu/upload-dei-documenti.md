# Upload dei documenti

In questo tutorial vedremo come effettuare l'upload tramite _REST API_ dei documenti PDF da far firmare con Firma con IO, una volta creata con successo una **Signature Request**.

L'upload dei file che dovranno essere firmati con Firma con IO, non viene effettuato direttamente sul Resource Server che espone le API di Firma con IO, ma su un Document Storage dedicato, basato su [Azure BLOB Storage](https://azure.microsoft.com/it-it/products/storage/blobs/). Pertanto, per ciascun documento da far firmare, questi sono gli step necessari:

1. Ottenere il document\_id dalla Signature request. Nell'esempio riportato in [Creazione di una Signature request](https://docs.pagopa.it/manuale-operativo-di-firma-con-io/richiedere-una-firma/creazione-di-una-signature-request) il document\_id era: "01ARZ3NDEKTSV4RRFFQ69G5FAV";

Ottenere un Upload URL specifico per il documento, dall'endpoint REST dedicato GET/api/v1/sign/signature-requests/{signature\_request\_id}/documents/{document\_id}/upload\_url;

1. Effettuare l'upload verso **Upload URL.**

#### Come effettuare l'upload verso Upload URL

Per effettuare l'upload hai due opzioni:

**Tramite SDK di Azure Storage**, utilizza l'SDK del linguaggio di programmazione di riferimento.

**Tramite richiesta http** (PUT) verso l'Upload URL indicando nell'header della richiesta x-ms-blob-type : BlockBlob e come corpo del messaggio il contenuto binario del file.

Ricorda queste informazioni importanti:

* l'Upload URL ha una validità di 15 minuti
* È legato a uno specifico documento da caricare (non può essere utilizzato per più di un documento)
* Contiene tutte le informazioni necessarie all'autenticazione verso il Document Storage.
