---
description: >-
  Il cittadino legge la comunicazione su IO e può pagare entro i termini
  previsti direttamente in app.
---

# 4️⃣ Pagamento retta

<figure><img src="../../solutions/asili-nido/.gitbook/assets/Stepper_4.png" alt=""><figcaption></figcaption></figure>

## 1. Il cittadino riceve l'avviso di pagamento

Il cittadino riceve su IO un messaggio che lo informa della possibilità di pagare la retta dell'asilo nido per il minore.

Per maggiore trasparenza, i sistemi in capo all’ente possono aggiungere un riferimento al calcolo della retta.

### Da ricordare 💡&#x20;

* Il cittadino vedrà come data di scadenza quella impostata nel campo **`dueDate`** della relativa posizione debitoria. Evita pertanto di inserire date fittizie (es. 31/12/2099).&#x20;
* I sistemi in capo all’ente possono attualizzare l’importo della posizione debitoria in ogni momento: per farlo non è necessario emettere un nuovo avviso.

## 2. Il cittadino riceve un promemoria&#x20;

Il cittadino riceve un messaggio su IO che lo informa dell’avviso di pagamento per la retta dell'asilo nido in scadenza.

{% hint style="info" %}
Aderendo all’**offerta Premium**, è possibile inviare in automatico una notifica push per ricordare al cittadino di pagare un avviso in prossimità della scadenza, senza alcuna azione da parte dei sistemi dell’ente.

[**Scopri di più sull’offerta Premium →** ](https://docs.pagopa.it/manuale-servizi/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi#funzionalita-premium)
{% endhint %}

## **3.1 Il cittadino paga l'avviso entro i termini previsti ✅**

Se il cittadino paga l’avviso di pagamento per la retta dell'asilo nido entro i termini previsti, l'ente, tramite i propri sistemi, aggiorna lo stato della posizione debitoria e la contrassegna come “pagata”.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è stato pagato.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;

## **3.2 Il cittadino non paga l'avviso entro i termini previsti ❌**

Se il cittadino non paga l’avviso di pagamento per la retta dell'asilo nido entro i termini previsti, l'ente, tramite i propri sistemi, aggiorna lo stato della posizione debitoria e la contrassegnano come “scaduta” e non più disponibile.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è scaduto.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;

### Scrivere i messaggi su IO

Nel [Manuale dei servizi dell'app IO](https://docs.pagopa.it/manuale-servizi) puoi trovare il modello [Asilo nido](https://docs.pagopa.it/i-modelli-dei-servizi/educazione-e-formazione/asilo-nido), cioè un template da cui l'ente può partire per **configurare il servizio e i relativi messaggi al cittadino** su IO, come ad esempio:&#x20;

* messaggio di [**mancato pagamento**](https://docs.pagopa.it/i-modelli-dei-servizi/educazione-e-formazione/asilo-nido#pagamento-retta).
