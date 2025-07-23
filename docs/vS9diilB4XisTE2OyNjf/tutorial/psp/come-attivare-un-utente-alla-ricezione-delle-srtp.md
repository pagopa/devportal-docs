# Come attivare un utente alla ricezione delle SRTP

Questo tutorial ti guida attraverso i processi di Enrollment e Attivazione di un utente (Debitore). Questa operazione, eseguita da un Service Provider, è fondamentale per registrare il consenso dell'utente a ricevere notifiche SRTP.

## **Step 1: Ottenere l'AccessToken (Autenticazione)**

Il primo passo consiste nell'ottenere un token di autenticazione valido.

1. Effettua una chiamata al server di autenticazione PagoPA utilizzando lo schema OAuth2 Client Credential Grant Type.
2. Includi nella richiesta il tuo `client_id` e `client_secret`.
3. Il server risponderà con un `AccessToken` da utilizzare nel passo successivo.

## **Step 2: Invocare l'API di Attivazione**

Una volta ottenuto l'`AccessToken`, puoi registrare il consenso dell'utente.

### Endpoint

```
POST /activations
```

Request Body Il corpo della richiesta deve contenere un oggetto `ActivationReq` con i dati del pagatore.

### **Esempio di Payload di Attivazione**

```json
{
  "payer": {
    "fiscalCode": "RSSMRA85T10A562S",
    "rtpSpId": "12345678911"
  }
}
```

* `fiscalCode`: Il Codice Fiscale dell'utente che sta dando il consenso.
* `rtpSpId`: L'identificativo (BIC o P.IVA) del tuo PSP.

### Risposte

* **Successo (`201 Created`):** L'attivazione è stata registrata. L'header `Location` della risposta conterrà l'URL univoco di questa attivazione, da conservare per future gestioni.
* **Errore (`409 Conflict`):** L'utente risulta già attivo. In questo caso, puoi usare l'URL nell'header `Location` per recuperare i dettagli dell'attivazione esistente e verificare se è gestita da te o da un altro PSP.

