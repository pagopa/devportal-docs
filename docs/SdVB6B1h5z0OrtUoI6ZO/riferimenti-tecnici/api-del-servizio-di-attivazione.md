---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/t7UU6OMWc3V12nDNAZlV/riferimenti-tecnici/api-del-servizio-di-attivazione
---

# API del servizio di attivazione

Queste API sono dedicate alla gestione del ciclo di vita delle attivazioni. Un'attivazione rappresenta il consenso di un utente (Debitore o Payer) a ricevere le richieste di pagamento (SRTP) tramite un determinato Service Provider del Debitore. Le operazioni descritte di seguito permettono di creare, leggere, aggiornare, cancellare e gestire il subentro (takeover) di queste attivazioni.

## **Autenticazione**

Tutte le chiamate a queste API devono essere autenticate tramite protocollo **OAuth2 (Client Credentials Flow)**. È necessario includere un `AccessToken` valido nell'header `Authorization` di ogni richiesta.

## Endpoints

### **Creare una nuova attivazione**

```http
POST /activations
```

Questa operazione viene utilizzata dal Service Provider del Debitore per registrare il consenso di un nuovo utente al servizio RTP. Se esiste già un'attivazione per lo stesso utente (identificato dal Codice Fiscale), il servizio risponderà con un errore `409 Conflict`.

#### **Parametri Header**

* `RequestId` (UUID, obbligatorio): Identificativo univoco della richiesta.

**Corpo della Richiesta**

Il corpo della richiesta deve contenere un oggetto `ActivationReq`.

_Esempio di payload:_

```json
{
  "payer": {
    "fiscalCode": "RSSMRA85T10A562S",
    "rtpSpId": "12345678911"
  }
}
```

#### **Risposte**

* **`201 Created`**: L'attivazione è stata registrata con successo. L'header `Location` della risposta conterrà l'URL della risorsa appena creata.
* **`409 Conflict`**: Esiste già un'attivazione per l'utente indicato.

### **Ottenere un elenco di attivazioni**

```http
GET /activations
```

Restituisce un elenco paginato di tutte le attivazioni associate al Service Provider del Debitore che effettua la richiesta.

**Parametri Query**

* `page` (integer, obbligatorio): Numero della pagina richiesta.
* `size` (integer, obbligatorio): Dimensione della pagina (massimo 128).

**Risposte**

* **`200 OK`**: La richiesta è andata a buon fine. Il corpo della risposta conterrà un oggetto `PageOfActivations` con la lista delle attivazioni e i metadati di paginazione.

### **Ottenere i dettagli di una singola attivazione**

```http
GET /activations/{activationId}
```

Recupera una specifica attivazione tramite il suo ID.

**Parametri Path**

* `activationId` (UUID, obbligatorio): L'ID univoco dell'attivazione.

**Risposte**

* **`200 OK`**: La richiesta è andata a buon fine. Il corpo della risposta conterrà un oggetto `Activation` con i dettagli della risorsa.
* **`404 Not Found`**: L'attivazione con l'ID specificato non esiste o non è associata al Service Provider chiamante.

### **Cancellare un'attivazione**

```http
DELETE /activations/{activationId}
```

Elimina un'attivazione esistente, revocando di fatto il consenso dell'utente a ricevere SRTP tramite il Service Provider associato.

**Parametri Path**

* `activationId` (UUID, obbligatorio): L'ID univoco dell'attivazione da cancellare.

**Risposte**

* **`204 No Content`**: L'attivazione è stata cancellata con successo.
* **`404 Not Found`**: L'attivazione con l'ID specificato non esiste o non è associata al Service Provider chiamante.

### **Trovare un'attivazione tramite Codice Fiscale (Discovery)**

```http
GET /activations/payer
```

Permette di trovare un'attivazione esistente tramite il Codice Fiscale del pagatore. Questa operazione è utilizzata come **Discovery Service** dal Service Provider del Creditore.

**Parametri Header**

* `PayerId` (string, obbligatorio): Il Codice Fiscale dell'utente da cercare.

**Risposte**

* **`200 OK`**: È stata trovata un'attivazione per l'utente. Il corpo della risposta conterrà un oggetto `Activation`, il cui campo `payer.rtpSpId` identifica il Service Provider del Debitore a cui inviare le SRTP.
* **`404 Not Found`**: L'utente non ha attivazioni valide per il servizio RTP.
