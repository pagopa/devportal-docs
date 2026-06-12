---
description: Il cittadino paga direttamente su IO entro i termini previsti
---

# 5️⃣ Pagamento

## Il cittadino riceve l'avviso di pagamento

Il cittadino riceve su IO un messaggio che lo informa della possibilità di pagare la prestazione sanitaria e può procedere al pagasmento direttamente all'interno dell'app.

## Creare la posizione debitoria

L’ente, tramite i propri sistemi, deve creare una posizione debitoria per la prestazione e allegarla al messaggio di richiesta di pagamento, ricordandosi di inserire:

* Le date di scadenza previste per il pagamento compilando il campo **due\_date**
* Un oggetto del pagamento chiaro (es. Ticket sanitario).

Il cittadino vedrà sul messaggio di richiesata di pagamento data e oggetto del pagamento che sono stati popolati alla creazione della posizione debitoria, quindi vanno evitate date fittizie (es. 31/12/2999).

## Pagamento in app

Quando l’ente invia il messaggio deve valorizzare il campo **payment\_data**, per permettere al cittadino di pagare direttamente in app.&#x20;

## Segnalare la scadenza della posizione debitoria

Se l’ente, tramite i propri sistemi, vuole inibire il pagamento dopo una determinata data, è necessario usare correttamente **gli stati di errore** da restituire in fase di verifica avviso: in questo modo l’utente capirà che la posizione debitoria è scaduta.

####

#### L’avviso è scaduto e non è più possibile pagarlo

Contatta l’Ente per maggiori informazioni.









#### Evita pertanto di inserire date fittizie (es. //)

App IO nodo pagopa
