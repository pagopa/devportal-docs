---
description: >-
  Il cittadino legge la comunicazione su IO e può pagare entro i termini
  previsti direttamente in app.
---

# 3️⃣ Pagamento retta

<figure><img src="../.gitbook/assets/Stepper_3_1.png" alt=""><figcaption></figcaption></figure>

## 1. Il cittadino riceve l'avviso di pagamento

Il cittadino riceve su IO un messaggio che lo informa della possibilità di pagare la retta del trasporto scolastico per il minore.

Per maggiore trasparenza, i sistemi in capo all’ente possono aggiungere un riferimento al calcolo della retta.

### Da ricordare 💡&#x20;

* Il cittadino vedrà come data di scadenza quella impostata nel campo **`dueDate`** della relativa posizione debitoria. Evita pertanto di inserire date fittizie (es. 31/12/2099).&#x20;
* I sistemi in capo all’ente possono attualizzare l’importo della posizione debitoria in ogni momento: per farlo non è necessario emettere un nuovo avviso.

## 2. Il cittadino riceve un promemoria&#x20;

Il cittadino riceve un messaggio su IO che lo informa dell’avviso di pagamento per la retta del trasporto scolastico in scadenza.

{% hint style="info" %}
Aderendo all’**offerta Premium**, è possibile inviare in automatico una notifica push per ricordare al cittadino di pagare un avviso in prossimità della scadenza, senza alcuna azione da parte dei sistemi dell’ente.

[**Scopri di più sull’offerta Premium →** ](https://docs.pagopa.it/manuale-servizi/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi#funzionalita-premium)
{% endhint %}

## **3.1 Il cittadino paga l'avviso entro i termini previsti ✅**

Se il cittadino paga l’avviso di pagamento per la retta del trasporto scolastico entro i termini previsti, l'ente, tramite i propri sistemi, aggiorna lo stato della posizione debitoria e la contrassegna come “pagata”.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo al tuo ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è stato pagato.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;

## **3.2 Il cittadino non paga l'avviso entro i termini previsti ❌**

Se il cittadino non paga l’avviso di pagamento per la retta del trasporto scolastico entro i termini previsti, l'ente, tramite i propri sistemi, aggiorna lo stato della posizione debitoria e la contrassegnano come “scaduta” e non più disponibile.

### Da ricordare 💡&#x20;

* Il messaggio che informa il cittadino del mancato pagamento è riferito ad **una singola retta mensile**. Se il cittadino non ha pagato le rette precedenti, l'ente dovrà ricordare i pagamenti dovuti tramite **messaggi di promemoria**, senza creare confusione al cittadino.
* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è scaduto.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;
