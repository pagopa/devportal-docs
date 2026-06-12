# Ottenere le richieste di fruizione in attesa tramite API

Per gli enti Erogatori che gestiscono un numero elevato di e-service o che ricevono un grande volume di richieste, la gestione manuale tramite back-office può diventare inefficiente. Automatizzare il processo di approvazione è la soluzione ideale per integrare la governance di PDND Interoperabilità nei propri sistemi gestionali.

Questo tutorial spiega come eseguire il primo passo di tale automazione: recuperare in modo programmatico l'elenco di tutte le richieste di fruizione che sono in attesa di essere valutate. Ottenendo questa lista, potrai alimentare dashboard interne, sistemi di ticketing o altri processi decisionali automatizzati.

### Prerequisiti

* Aver completato l'adesione alla piattaforma.
* Aver creato un client per le API di PDND Interoperabilità e aver caricato la relativa chiave pubblica. (Vedi tutorial: [2.2 Creare un client](https://www.google.com/search?q=...)).
* Essere in grado di ottenere un token JWT (voucher) valido per l'autenticazione. (Vedi tutorial: [2.2 Richiedere un voucher per un e-service](https://www.google.com/search?q=...)).
* L'operazione deve essere eseguita da un utente con ruolo di **Amministratore** o **Operatore API**.

### Riferimenti API

Per ottenere l'elenco delle richieste di fruizione (chiamate `agreement` in API), è necessario effettuare una chiamata all'endpoint specifico della piattaforma.

| Proprietà           | Valore                                                                                                                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Metodo HTTP**     | `GET`                                                                                                                                                                                  |
| **Endpoint**        | `/agreements`                                                                                                                                                                          |
| **Parametri Query** | <p><code>states=PENDING</code> (per filtrare solo quelle in attesa)<br><code>producerId={organizationId}</code> (l'ID del tuo ente)<br><code>limit={n}</code> (per la paginazione)</p> |
| **Autenticazione**  | `Bearer [VOUCHER]`                                                                                                                                                                     |

### Procedura

#### Step 1: Ottenere un voucher di autenticazione

Prima di poter interrogare l'API, è necessario richiedere un token JWT (voucher) valido per l'autenticazione alle API di servizio della piattaforma. Assicurati di richiedere un voucher con l'`audience` corretta per le API di PDND Interoperabilità.

#### Step 2: Eseguire la chiamata API

Effettuare una chiamata `GET` all'endpoint `/agreements`, includendo il voucher nell'header `Authorization` e i parametri di query per filtrare le richieste.

Ecco un esempio di chiamata utilizzando `cURL`:

```bash
curl -X GET \
  'https://api.interop.pagopa.it/v2/agreements?states=PENDING&producerId=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX&limit=50' \
  --header 'Authorization: Bearer [IL_TUO_VOUCHER]'
```

#### Step 3: Analizzare la risposta

Se la chiamata ha successo, il server risponderà con uno stato `200 OK` e un corpo JSON contenente un array di oggetti `agreement`.

Ecco un esempio di risposta:

```json
{
  "results": [
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
      "state": "PENDING",
      "createdAt": "2025-10-26T10:00:00.000Z"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 50,
    "totalCount": 1
  }
}

```

L'informazione più importante da conservare da questa risposta è l'`id` di ogni richiesta. Questo identificativo univoco sarà necessario per la successiva fase di approvazione, descritta nel tutorial [Come approvare una richiesta di fruizione tramite API](https://www.google.com/search?q=...).
