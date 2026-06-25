# Come inviare una richiesta di fruizione tramite API

Per gli enti Fruitori, specialmente per i partner tecnologici che gestiscono integrazioni per conto di più PA, automatizzare il processo di richiesta di accesso agli e-service è un passo fondamentale per rendere l'onboarding più rapido ed efficiente. Inviare una richiesta di fruizione tramite API sostituisce la necessità di cercare manualmente nel catalogo e compilare il modulo sul back-office.

Questa procedura ti permette di integrare la richiesta di accesso direttamente all'interno dei tuoi sistemi o dei tuoi processi di configurazione, creando un'esperienza utente più fluida e riducendo i tempi di attivazione di un nuovo servizio.

### Prerequisiti

* Aver completato l'adesione alla piattaforma.
* Avere a disposizione l'`eserviceId` e il `descriptorId` (l'ID della versione specifica) dell'e-service a cui si desidera accedere.
* Aver creato un client per le API di PDND Interoperabilità e essere in grado di ottenere un token JWT (voucher) valido per l'autenticazione.
* L'operazione deve essere eseguita da un utente con ruolo di **Amministratore** o **Operatore API**.

### Riferimenti API

Per inoltrare una nuova richiesta di fruizione (chiamata `agreement` in API), è necessario effettuare una chiamata all'endpoint di creazione.

| Proprietà           | Valore                                                                |
| ------------------- | --------------------------------------------------------------------- |
| **Metodo HTTP**     | `POST`                                                                |
| **Endpoint**        | `/agreements`                                                         |
| **Corpo Richiesta** | Oggetto JSON contenente `eserviceId`, `descriptorId` e `description`. |
| **Autenticazione**  | `Bearer [VOUCHER]`                                                    |

### Procedura

#### Step 1: Ottenere un voucher di autenticazione

Prima di poter interagire con l'API, richiedi un token JWT (voucher) valido, assicurandoti di utilizzare l'`audience` corretta per le API di servizio di PDND Interoperabilità.

#### Step 2: Preparare il corpo della richiesta

Costruisci l'oggetto JSON da inviare nel corpo della richiesta. Questo oggetto deve contenere:

* `eserviceId`: L'identificativo dell'e-service.
* `descriptorId`: L'identificativo della specifica versione dell'e-service a cui vuoi accedere.
* `description`: Una motivazione chiara e completa che spieghi lo scopo e la base giuridica della richiesta. Questo testo sarà valutato dall'Erogatore.

Ecco un esempio di corpo della richiesta:

```json
{
  "eserviceId": "f8922621-039c-49e0-8bd4-5bab82859a89",
  "descriptorId": "e1c5b1b2-1c2b-3a4b-5c6d-7e8f9a0b1c2d",
  "description": "Richiesta per la verifica anagrafica ai fini dell'erogazione del servizio X, in conformità con la legge Y."
}
```

#### Step 3: Eseguire la chiamata API

Effettua una chiamata `POST` all'endpoint `/agreements`, includendo il voucher nell'header `Authorization` e l'oggetto JSON nel corpo della richiesta.

Ecco un esempio di chiamata utilizzando `cURL`:

```bash
curl -X POST \
  'https://api.interop.pagopa.it/v2/agreements' \
  --header 'Authorization: Bearer [IL_TUO_VOUCHER]' \
  --header 'Content-Type: application/json' \
  --data '{
    "eserviceId": "f8922621-039c-49e0-8bd4-5bab82859a89",
    "descriptorId": "e1c5b1b2-1c2b-3a4b-5c6d-7e8f9a0b1c2d",
    "description": "Richiesta per la verifica anagrafica ai fini dell erogazione del servizio X, in conformità con la legge Y."
  }'
```

#### Step 4: Verificare la risposta

Se la richiesta è stata inoltrata correttamente, il server risponderà con uno stato `201 Created` e un corpo JSON contenente i dettagli della richiesta di fruizione appena creata, con il suo `id` univoco e lo stato impostato a `PENDING`.

```json
{
  "id": "a4a4c9a8-32f2-45d6-a4f6-16986baf131d",
  "eserviceId": "f8922621-039c-49e0-8bd4-5bab82859a89",
  "descriptorId": "e1c5b1b2-1c2b-3a4b-5c6d-7e8f9a0b1c2d",
  "producerId": "c1f6b158-941c-41c3-8b8a-e14b55b9a8e9",
  "consumerId": "d0a0e5b0-8f6b-4b1e-9b0a-9e1b2c3d4e5f",
  "state": "PENDING",
  "createdAt": "2025-10-26T10:00:00.000Z"
}
```

### Prossimi Passi

La richiesta di fruizione è stata inviata ed è ora in attesa di approvazione da parte dell'Erogatore. Puoi monitorarne lo stato in modo programmatico interrogando l'endpoint `GET /agreements/{agreementId}` fino a quando non passerà allo stato `ACTIVE`.
