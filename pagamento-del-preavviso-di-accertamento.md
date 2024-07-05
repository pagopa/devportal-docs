---
description: >-
  Il cittadino legge la comunicazione su IO e può pagare entro i termini
  previsti direttamente in app, risparmiando sui costi di notifica.
---

# 3️⃣ Pagamento del preavviso di accertamento

<figure><img src="docs/lAIZmjrusC6qV8ki9zsZ/.gitbook/assets/violazioni-codice-strada-step3.png" alt=""><figcaption></figcaption></figure>

## 1. Il cittadino riceve il preavviso di accertamento

Il cittadino riceve su IO un messaggio che lo informa della violazione avvenuta, l’avviso di pagamento e la relativa scadenza.

### Da ricordare 💡&#x20;

* Il cittadino vedrà come data di scadenza, quella impostata nel campo **`dueDate`** della relativa posizione debitoria. \
  Evita pertanto di inserire date fittizie (es. 31\12\2099).

***

## 2. Il cittadino riceve un promemoria

Quando la scadenza è imminente, il cittadino riceve un messaggio su IO che lo informa dell’avviso di pagamento per il preavviso di accertamento in scadenza.

{% hint style="info" %}
Aderendo all’**offerta Premium**, è possibile inviare in automatico una notifica push per ricordare al cittadino di pagare un avviso in prossimità della scadenza, senza alcuna azione da parte dei sistemi dell’ente.

[**Scopri di più sull’offerta Premium →** ](https://docs.pagopa.it/manuale-servizi/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi#funzionalita-premium)
{% endhint %}

***

## **3.1 Il cittadino paga il preavviso entro i termini previsti ✅**

I sistemi in capo all’ente aggiornano su pagoPA lo stato della posizione debitoria e la contrassegnano come “pagata”.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo l’utente capirà che l’avviso è scaduto.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;

***

## **3.2 Il cittadino non paga il preavviso entro i termini previsti ❌**

I sistemi in capo all'ente procederanno con l['emissione del verbale di contestazione](emissione-del-verbale-di-contestazione.md) relativo alla violazione commessa.
