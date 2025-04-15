---
description: >-
  Il cittadino paga l’avviso di pagamento relativo alla prestazione sanitaria
  direttamente tramite IO, entro i termini previsti.
---

# 5️⃣ Pagamento della prestazione sanitaria

## Cosa succede lato ente

Il sistema dell’ente crea una **posizione debitoria pagoPA**, associata al messaggio di conferma appuntamento.

Nel messaggio IO, l'ente, tramite i propri sistemi, deve ricordarsi di inserire:

* il campo [`payment_data`](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body#payment_data) per permettere al cittadino di pagare direttamente in app;
* un oggetto chiaro e leggibile dal cittadino (es. “Ticket sanitario”);
* le date di scadenza previste per il pagamento compilando il campo [`due_date`](https://docs.pagopa.it/sanp/appendici/primitive#pagetpayment) .

### Da ricordare 💡

* il cittadino vedrà data e oggetto del pagamento che sono stati popolati alla creazione della posizione debitoria.&#x20;
  * Evita pertanto di inserire date fittizie (es. 31/12/2099)
* La ricevuta non richiede un messaggio di conferma separato: viene inviata automaticamente;
* Se l’ente, tramite i propri sistemi, vuole inibire il pagamento dopo una determinata data, è necessario usare correttamente gli [stati di errore](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è scaduto.

## Cosa vede il cittadino

Il cittadino che riceve il messaggio di conferma appuntamento tramite IO può:&#x20;

* pagare la prestazione direttamente in app scegliendo il metodo di pagamento preferito;
* dopo aver effettuato il pagamento, nella sezione **Pagamenti** di IO, visualizzare la ricevuta e scaricarla in formato PDF;
  * Mostrare la ricevuta al CUP in fase di accettazione, evitando code e attese.
