# Come gestire la risposta a una richiesta inviata

Questo tutorial ti spiega come, in qualità di Partner dell'Ente Creditore, devi gestire la notifica di stato (`pain.014`) che ricevi dopo l'invio di una SRTP.

## **Step 1: Esponi un endpoint di `callback`**

Il tuo sistema deve esporre un endpoint `POST` (il cui URL va specificato in fase di configurazione) per ricevere le notifiche di stato in modo asincrono.

## **Step 2: Ricevi e interpreta la notifica di stato (`pain.014`)**

Il tuo endpoint riceverà una richiesta `POST` contenente un messaggio `pain.014`. Dovrai:

* Correlare la risposta: Usa i campi `OrgnlMsgId` e `OrgnlEndToEndId` per collegare la notifica alla richiesta originale.
* Verificare lo stato: Controlla il campo `TxSts`. Un valore di `ACCP` indica che l'utente ha accettato la richiesta.

## **Step 3: Rispondi alla chiamata di `callback`**

Dopo aver processato la notifica, il tuo endpoint deve rispondere con `201 OK` per confermare la corretta ricezione.
