---
description: >-
  Il cittadino paga l’avviso di pagamento relativo alla prestazione sanitaria
  direttamente tramite IO, entro i termini previsti.
---

# 5️⃣ Pagamento della prestazione sanitaria

<figure><img src=".gitbook/assets/04 - Pagamento.png" alt=""><figcaption><p>Pagamento di un avviso pagoPA</p></figcaption></figure>

## Cosa fa l'Ente

Il sistema dell’ente crea una **posizione debitoria pagoPA**, associata al messaggio di conferma appuntamento.

Nel messaggio IO, l'ente, tramite i propri sistemi, deve ricordarsi di inserire:

* il campo [`payment_data`](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body#payment_data) per permettere al cittadino di pagare direttamente in app;
* un oggetto chiaro e leggibile dal cittadino (es. “Ticket sanitario”);
* le date di scadenza previste per il pagamento compilando il campo [`due_date`](https://docs.pagopa.it/sanp/appendici/primitive#pagetpayment) .

### Da ricordare 💡

* Il cittadino vedrà data e oggetto del pagamento che sono stati popolati alla creazione della posizione debitoria.&#x20;
  * Evita pertanto di inserire date fittizie (es. 31/12/2099)
* La ricevuta viene inviata automaticamente, non è pertanto necessario prevedere un messaggio di conferma dedicato.
* Se l’ente, tramite i propri sistemi, vuole inibire il pagamento dopo una determinata data, è necessario dare evidenza dell'impossibilità di pagare l'avviso attraverso l'apposito stato di errore. In questo modo l’utente capirà che l’avviso è scaduto.

## Cosa fa il cittadino

Il cittadino che riceve il messaggio di conferma appuntamento tramite IO può:&#x20;

* pagare la prestazione direttamente in app scegliendo il metodo di pagamento preferito;
* dopo aver effettuato il pagamento, nella sezione **Pagamenti** di IO, visualizzare la ricevuta e scaricarla in formato PDF;
  * Mostrare la ricevuta al CUP in fase di accettazione, evitando code e attese.
