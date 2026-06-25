# Come aggiornare la stima di carico tramite API

Mantenere la stima di carico di una finalità allineata all'utilizzo reale è un'importante pratica di governance. Per servizi il cui volume di traffico può variare nel tempo, aggiornare questo valore in modo programmatico consente di automatizzare la gestione delle previsioni di utilizzo senza interventi manuali sul back-office.

Questa procedura permette alla tua applicazione di adeguare autonomamente la stima di carico dichiarata, garantendo che l'Erogatore abbia sempre una previsione attendibile e riducendo il rischio che le tue chiamate vengano limitate a causa del superamento di una soglia non più rappresentativa del fabbisogno attuale.

### Prerequisiti

* Avere una finalità (`purpose`) in stato **"Attiva"** e disporre del suo `purposeId`.
* Aver creato un client per le API di PDND Interoperabilità e essere in grado di ottenere un token JWT (voucher) valido per l'autenticazione.
* L'operazione deve essere eseguita da un utente con ruolo di **Amministratore** o **Operatore API**.

### Riferimenti API

Per aggiornare la stima di carico di una finalità esistente, è necessario effettuare una chiamata all'endpoint di aggiornamento.

| Proprietà           | Valore                                                |
| ------------------- | ----------------------------------------------------- |
| **Metodo HTTP**     | `POST`                                                |
| **Endpoint**        | `/purposes/{purposeId}/update/dailyCalls`             |
| **Corpo Richiesta** | Oggetto JSON contenente il nuovo valore `dailyCalls`. |
| **Autenticazione**  | `Bearer [VOUCHER]`                                    |

### Procedura

#### Step 1: Ottenere un voucher di autenticazione&#x20;

Richiedi un token JWT (voucher) valido, assicurandoti di utilizzare l'`audience` corretta per le API di servizio di PDND Interoperabilità.

#### Step 2: Preparare il corpo della richiesta

Costruisci l'oggetto JSON da inviare nel corpo della richiesta. Questo oggetto deve contenere un unico campo:

* `dailyCalls`: Il nuovo numero di chiamate API giornaliere stimate.

Ecco un esempio di corpo della richiesta:

```json
{
  "dailyCalls": 1500
}
```

#### Step 3: Eseguire la chiamata API

Effettua una chiamata `POST` all'endpoint `/purposes/{purposeId}/update/dailyCalls`, sostituendo `{purposeId}` con l'identificativo reale della finalità e includendo il voucher nell'header `Authorization`.

Ecco un esempio di chiamata utilizzando `cURL`:

```bash
# Sostituisci [PURPOSE_ID] con l'ID della finalità da aggiornare
PURPOSE_ID="b5a5c1a2-12f2-45d6-a4f6-16986baf131d"

curl -X POST \
  "https://api.interop.pagopa.it/v2/purposes/${PURPOSE_ID}/update/dailyCalls" \
  --header 'Authorization: Bearer [IL_TUO_VOUCHER]' \
  --header 'Content-Type: application/json' \
  --data '{ "dailyCalls": 1500 }'
```

#### Step 4: Verificare la risposta e lo stato della finalità

Se la chiamata ha successo, il server risponderà con `200 OK` e un corpo JSON contenente l'oggetto finalità aggiornato.

**È fondamentale controllare il campo `state` nella risposta**, poiché il suo valore dipende dal fatto che la nuova stima superi o meno le soglie definite dall'Erogatore:

*   **Caso 1: La nuova stima NON supera la soglia.** La modifica è approvata automaticamente. La finalità rimane in stato `ACTIVE` e il campo `dailyCalls` viene aggiornato.

    ```json
    {
      "id": "b5a5c1a2-12f2-45d6-a4f6-16986baf131d",
      "state": "ACTIVE",
      "dailyCalls": 1500,
      "...": "..."
    }
    ```
*   **Caso 2: La nuova stima SUPERA la soglia.** La modifica richiede l'approvazione manuale dell'Erogatore. La finalità passerà allo stato `WAITING_FOR_APPROVAL` e il campo `waitingForApprovalVersion` conterrà i dettagli della modifica in attesa.

    ```json
    {
      "id": "b5a5c1a2-12f2-45d6-a4f6-16986baf131d",
      "state": "WAITING_FOR_APPROVAL",
      "dailyCalls": 500, // Valore precedente, ancora valido
      "waitingForApprovalVersion": {
        "id": "...",
        "state": "WAITING_FOR_APPROVAL",
        "dailyCalls": 5000 // Nuovo valore in attesa
      },
      "...": "..."
    }
    ```

In questo secondo caso, la tua applicazione dovrà attendere che l'Erogatore approvi la modifica prima di poter usufruire della nuova soglia di chiamate.
