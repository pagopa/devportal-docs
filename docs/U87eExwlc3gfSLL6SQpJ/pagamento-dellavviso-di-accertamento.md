---
description: >-
  Il cittadino deve pagare l'avviso di pagamento relativo all'avviso di
  accertamento ricevuto, o in forma scontata o intera. Se non avviene il
  pagamento, l'ente procederà con il recupero del pagamento.
---

# 8️⃣ Pagamento dell'avviso di accertamento

<figure><img src=".gitbook/assets/tari-step8.png" alt=""><figcaption></figcaption></figure>

## **1.1 Il cittadino paga il verbale scontato entro i termini previsti ✅**

I sistemi in capo all’ente aggiornano lo stato della posizione debitoria su pagoPA e la contrassegnano come “pagata”.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è stato pagato.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;

## **1.2 Il cittadino non paga verbale scontato entro i termini previsti ❌**

I sistemi in capo all’ente aggiornano lo stato della posizione debitoria e la contrassegnano come “scaduta” su pagoPA e non più disponibile.

I sistemi in capo all’ente possono prevedere una nuova notifica con le stesse modalità.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è scaduto.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;
