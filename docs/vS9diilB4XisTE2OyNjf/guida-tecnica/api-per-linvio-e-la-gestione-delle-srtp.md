# API per l'invio e la gestione delle SRTP

Queste API sono dedicate alla gestione del ciclo di vita di una richiesta di pagamento (SRTP), dall'invio alla cancellazione, e al reperimento di informazioni sulle richieste inviate.

## **Autenticazione**

Anche queste API richiedono autenticazione tramite OAuth2 (Client Credentials Flow).

## **Endpoints**

### Creare e inviare una nuova SRTP

```
POST /rtps
```

Questa operazione permette a un Partner Tecnologico dell'Ente Creditore di creare e inviare una nuova richiesta di pagamento basata su un avviso pagoPA.

* **Request Body:** Il corpo della richiesta deve contenere un oggetto `CreateRtp`, che include i dettagli del pagatore, del beneficiario e dell'avviso di pagamento.
*   **Risposta (Successo):** `201 Created`. L'header

    `Location` conterrà l'URL della risorsa RTP creata.
* **Risposte (Errore):**
  * `400 Bad Request`: La richiesta è malformata.
  * `422 Unprocessable Entity`: Il debitore specificato non risulta attivo al servizio RTP.

### Cercare una SRTP tramite Numero Avviso

```
GET /rtps
```

Permette di recuperare i dati di una o più SRTP associate a un determinato Numero Avviso pagoPA.

* **Query Parameters:**
  * `noticeNumber` (string, 18 cifre): Il Numero Avviso (IUV) da cercare.
*   **Risposta (Successo):** `200 OK`. Il corpo della risposta conterrà un oggetto

    `RtpList`.

### Ottenere i dettagli di una singola SRTP

```
GET /rtps/{rtpId}
```

Recupera una specifica richiesta di pagamento tramite il suo ID univoco.

* **Path Parameters:**
  * `rtpId` (UUID): L'ID univoco della SRTP.
*   **Risposta (Successo):** `200 OK`. Il corpo della risposta conterrà un oggetto

    `Rtp`.
* **Risposta (Errore):** `404 Not Found` se l'ID non esiste.

### Cancellare una SRTP

```
POST /rtps/{rtpId}/cancel
```

Annulla una richiesta di pagamento precedentemente inviata.

* **Path Parameters:**
  * `rtpId` (UUID): L'ID univoco della SRTP da cancellare.
* **Risposta (Successo):** `204 No Content`.
* **Risposte (Errore):**
  * `404 Not Found`: La SRTP specificata non esiste.
  * `422 Unprocessable Entity`: La SRTP non può essere annullata (es. perché già finalizzata).
