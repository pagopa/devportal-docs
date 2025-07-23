# API del Servizio di Attivazione

Queste API sono dedicate alla gestione del ciclo di vita delle attivazioni. Un'attivazione rappresenta il consenso di un utente (Debitore) a ricevere richieste di pagamento tramite un determinato PSP (Service Provider del Debitore).

## **Autenticazione**

Tutte le chiamate a queste API devono essere autenticate tramite protocollo OAuth2 (Client Credentials Flow). È necessario includere un `AccessToken` valido nell'header `Authorization` di ogni richiesta.

## **Endpoints**

### Creare una nuova attivazione:

```
POST /activations
```

Questa operazione viene utilizzata dal PSP per registrare il consenso di un nuovo utente al servizio RTP. Se esiste già un'attivazione per lo stesso utente (Payer ID), il servizio risponderà con un errore `409 Conflict`.

* **Request Body:** Il corpo della richiesta deve contenere un oggetto `ActivationReq`.
*   **Risposta (Successo)**: `201 Created`. L'header

    `Location` della risposta conterrà l'URL della risorsa appena creata.
* **Risposte (Errore):**
  * `400 Bad Request`: La richiesta è malformata.
  * `403 Forbidden`: Le credenziali non autorizzano a operare per il PSP specificato.
  * `409 Conflict`: Esiste già un'attivazione per l'utente indicato.

### Ottenere un elenco di attivazioni:

```
GET /activations
```

Restituisce un elenco paginato di tutte le attivazioni associate al PSP che effettua la richiesta.

* **Query Parameters:**
  * `page` (integer): Numero della pagina richiesta.
  * `size` (integer): Dimensione della pagina (max 128).
*   **Risposta (Successo):** `200 OK`. Il corpo della risposta conterrà un oggetto

    `PageOfActivations`.

### Ottenere i dettagli di una singola attivazione

```
GET /activations/{activationId}
```

Recupera una specifica attivazione tramite il suo ID.

* **Path Parameters:**
  * `activationId` (UUID): L'ID univoco dell'attivazione.
*   **Risposta (Successo):** `200 OK`. Il corpo della risposta conterrà un oggetto

    `Activation`.
* **Risposta (Errore):** `404 Not Found` se l'ID non esiste o non è associato al PSP chiamante.

### Cancellare un'attivazione

```
DELETE /activations/{activationId}
```

Elimina un'attivazione esistente, revocando di fatto il consenso dell'utente.

* **Path Parameters:**
  * `activationId` (UUID): L'ID univoco dell'attivazione da cancellare.
* **Risposta (Successo):** `204 No Content`.
* **Risposta (Errore):** `404 Not Found` se l'ID non esiste o non è associato al PSP chiamante.
