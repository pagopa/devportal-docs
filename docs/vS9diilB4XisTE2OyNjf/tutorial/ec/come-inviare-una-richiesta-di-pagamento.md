# Come inviare una richiesta di pagamento

Questo tutorial ti guida nell'invio di una richiesta di pagamento (SRTP). L'API dedicata astrae la complessità dello standard ISO 20022, permettendoti di inviare un semplice oggetto JSON.

## **Step 1: Ottenere l'AccessToken**

Ottieni un `AccessToken` valido tramite il flusso OAuth2 Client Credentials.

## **Step 2: Costruire il corpo della richiesta (`CreateRtp`)**

Prepara il payload JSON con i dettagli dell'avviso, del beneficiario (Ente Creditore) e del pagatore.

### **Esempio di Payload di Invio (`CreateRtp`)**

```json
{
  "payee": {
    "payeeId": "77777777777",
    "name": "Comune di Roma",
    "payTrxRef": "TARI/2025"
  },
  "payer": {
    "payerId": "RSSMRA85T10A562S",
    "name": "Mario Rossi"
  },
  "paymentNotice": {
    "noticeNumber": "311111111112222222",
    "amount": 15000,
    "description": "Tassa sui rifiuti anno 2025 - Rata Unica",
    "subject": "TARI 2025",
    "expiryDate": "2025-10-31"
  }
}
```

## **Step 3: Invocare l'API di invio**

Effettua una chiamata `POST` all'endpoint `/rtps` con il payload JSON.

### Endpoint

```
POST /rtps
```

### Risposte

* **Successo (`201 Created`)**: La richiesta è stata creata e inviata. Conserva l'ID della risorsa (`rtpId`) restituito nell'header `Location` per operazioni future (es. cancellazione).
* **Errore (`422 Unprocessable Entity`):** L'utente non risulta attivo sul servizio RTP. Verifica lo stato dell'attivazione prima di riprovare.
