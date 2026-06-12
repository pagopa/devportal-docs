---
description: >-
  Il cittadino deve pagare l'avviso di pagamento relativo al sollecito ricevuto.
  Se non avviene il pagamento, l'ente procederà con il recupero del pagamento.
---

# 7️⃣ Pagamento del sollecito

<figure><img src=".gitbook/assets/Stepper_7.png" alt=""><figcaption></figcaption></figure>

## **1.1 Il cittadino paga il sollecito entro i termini previsti ✅**

L'ente, tramite i propri sistemi, aggiorna lo stato della posizione debitoria su pagoPA e la contrassegna come “pagata”.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è stato pagato.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;

## **1.2 Il cittadino non paga il sollecito entro i termini previsti ❌**

L'ente, tramite i propri sistemi, aggiorna lo stato della posizione debitoria e la contrassegna come “scaduta” su pagoPA e non più disponibile.

L'ente, tramite i propri sistemi, può prevedere una nuova notifica con le stesse modalità.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è scaduto.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;
