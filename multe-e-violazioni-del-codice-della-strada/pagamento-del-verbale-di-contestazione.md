---
description: >-
  Il cittadino deve pagare l'avviso di pagamento relativo al verbale di
  contestazione ricevuto, o in forma scontata o intera. Se non avviene il
  pagamento, l'ente procederà con il recupero del pagamento.
---

# 6️⃣ Pagamento del verbale di contestazione

<figure><img src="../.gitbook/assets/image (23).png" alt="Sezione 6 di 6: Pagamento del verbale di contestazione"><figcaption></figcaption></figure>

5 giorni dopo la visualizzazione della notifica, si possono prospettare due scenari:&#x20;

## **1.1 Il cittadino paga il verbale scontato entro i termini previsti ✅**

I sistemi in capo all’ente aggiornano lo stato della posizione debitoria su pagoPA e la contrassegnano come “pagata”.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è scaduto.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;

***

## **1.2 Il cittadino non paga verbale scontato entro i termini previsti ❌**

Il cittadino potrà comunque pagare il verbale di contestazione con importo intero entro 60 giorni dopo la visualizzazione della notifica.&#x20;

***

## 2. L'ente aggiorna gli avvisi di pagamento&#x20;

Se la data di notifica è nota, i sistemi in capo all’ente disabilitano il primo avviso di pagamento con importo ridotto con scadenza dopo 5 giorni su pagoPA. Ora per il cittadino è possibile pagare solo il secondo avviso con importo intero.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è scaduto.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;

***

60 giorni dopo la visualizzazione della notifica, si possono prospettare due scenari:&#x20;

## **3.1 Il cittadino paga il verbale entro i termini previsti ✅**

I sistemi in capo all’ente aggiornano lo stato della posizione debitoria e la contrassegnano come “pagata” su pagoPA.&#x20;

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è scaduto.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;

***

## **3.2 Il cittadino non paga verbale entro i termini previsti ❌**

I sistemi in capo all’ente aggiornano lo stato della posizione debitoria e la contrassegnano come “scaduta” su pagoPA e non più disponibile.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è scaduto.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;

***

## 4. L'ente procede con il recupero del pagamento

A questo punto, i sistemi in capo all’ente possono prevedere una nuova notifica con le stesse modalità.
