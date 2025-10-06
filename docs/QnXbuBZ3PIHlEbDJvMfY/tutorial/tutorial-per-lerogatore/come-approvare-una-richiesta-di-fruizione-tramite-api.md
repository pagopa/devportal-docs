# Come approvare una richiesta di fruizione tramite API

Dopo aver recuperato l'elenco delle richieste in attesa, il passo successivo in un flusso di lavoro automatizzato è approvare (o rifiutare) una specifica richiesta. Questa operazione è l'equivalente programmatico del clic sul pulsante "Approva" nel back-office e rappresenta l'azione che abilita formalmente un Fruitore a utilizzare il tuo e-service.

Automatizzare questo passaggio permette di accelerare drasticamente i tempi di attivazione per i Fruitori, migliorando l'efficienza complessiva del servizio, specialmente in contesti con un alto volume di richieste.

### Prerequisiti

* Aver soddisfatto tutti i prerequisiti del tutorial precedente ([2.1 Ottenere le richieste di fruizione in attesa tramite API](https://www.google.com/search?q=...)).
* Conoscere l'identificativo univoco (`agreementId`) della richiesta di fruizione che si intende approvare. Questo ID si ottiene dalla risposta della chiamata `GET /agreements`, come spiegato nel tutorial precedente.

### Riferimenti API

Per attivare una specifica richiesta di fruizione, è necessario effettuare una chiamata all'endpoint di attivazione corrispondente.

| Proprietà           | Valore                               |
| ------------------- | ------------------------------------ |
| **Metodo HTTP**     | `POST`                               |
| **Endpoint**        | `/agreements/{agreementId}/activate` |
| **Corpo Richiesta** | Vuoto                                |
| **Autenticazione**  | `Bearer [VOUCHER]`                   |

### Procedura

#### Step 1: Identificare l'`agreementId` da approvare

Assicurati di avere l'`id` della richiesta di fruizione che vuoi attivare. Questo valore è stato ottenuto dalla chiamata `GET` descritta nel tutorial precedente.

#### Step 2: Ottenere un voucher di autenticazione

Richiedi un token JWT (voucher) valido per l'autenticazione alle API di servizio della piattaforma, assicurandoti di utilizzare l'`audience` corretta.

#### Step 3: Eseguire la chiamata API di attivazione

Effettuare una chiamata `POST` all'endpoint `/agreements/{agreementId}/activate`, sostituendo `{agreementId}` con l'identificativo reale della richiesta e includendo il voucher nell'header `Authorization`.

Ecco un esempio di chiamata utilizzando `cURL`:

```bash
# Sostituisci [AGREEMENT_ID] con l'ID della richiesta da approvare
AGREEMENT_ID="a4a4c9a8-32f2-45d6-a4f6-16986baf131d"

curl -X POST \
  "https://api.interop.pagopa.it/v2/agreements/${AGREEMENT_ID}/activate" \
  --header 'Authorization: Bearer [IL_TUO_VOUCHER]' \
  --header 'Content-Type: application/json'
```

#### Step 4: Verificare la risposta

Se la chiamata ha successo, il server risponderà con uno stato `200 OK` e un corpo JSON che rappresenta l'oggetto `agreement` aggiornato. La proprietà `state` dell'oggetto avrà ora il valore `ACTIVE`.

Ecco un esempio di risposta positiva:

```json
{
  "id": "a4a4c9a8-32f2-45d6-a4f6-16986baf131d",
  "eservice": {
    "id": "f8922621-039c-49e0-8bd4-5bab82859a89",
    "name": "Verifica Residenza Anagrafica"
  },
  "producer": {
    "id": "c1f6b158-941c-41c3-8b8a-e14b55b9a8e9",
    "name": "Comune di Milano"
  },
  "consumer": {
    "id": "d0a0e5b0-8f6b-4b1e-9b0a-9e1b2c3d4e5f",
    "name": "Comune di Roma"
  },
  "state": "ACTIVE",
  "createdAt": "2025-10-26T10:00:00.000Z",
  "updatedAt": "2025-10-26T11:30:00.000Z"
}
```

La richiesta di fruizione è ora attiva e il Fruitore è autorizzato a procedere con la creazione delle finalità per utilizzare il tuo e-service. In caso di errore (es. `404 Not Found` se l'ID è errato, o `409 Conflict` se la richiesta non è in stato `PENDING`), il server fornirà un messaggio di errore appropriato.
