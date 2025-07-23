# Come ricevere e processare una richiesta di pagamento

Questo tutorial spiega come, in qualità di PSP, devi gestire una richiesta di pagamento (SRTP) in entrata, validarla e prepararla per l'utente.

## **Step 1: Esponi un endpoint per la ricezione delle SRTP**

Il tuo sistema deve esporre un endpoint `POST` sicuro, il cui URL è stato comunicato a PagoPA in fase di onboarding. Questo endpoint riceverà tutte le nuove richieste di pagamento destinate ai tuoi utenti.

## **Step 2: Ricevi e valida la richiesta in entrata**

Quando ricevi una chiamata sul tuo endpoint, esegui una validazione formale del payload JSON.

### **Esempio di Payload in Ingresso (`CreateRtp`)**

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

* Se il messaggio è valido, rispondi immediatamente con `201 OK` per confermare la presa in carico.
* Se presenta errori, rispondi con `400 Bad Request`.

## **Step 3: Processa i dati per l'utente finale**

Una volta validato il messaggio, estrai le informazioni e usale per popolare l'interfaccia della tua applicazione (home banking, app di pagamento, ecc.). Ricorda di storicizzare l'identificativo della richiesta (`rtpId` che otterrai dall'header `Location` o da chiamate `GET` successive) per le gestioni future.
