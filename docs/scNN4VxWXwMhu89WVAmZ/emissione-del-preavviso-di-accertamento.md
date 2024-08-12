---
description: >-
  I sistemi in capo all'ente creano la posizione debitoria per il preavviso di
  accertamento. Il cittadino riceverà comunicazione della violazione avvenuta
  tramite un messaggio sull'app IO.
---

# 2️⃣ Emissione del preavviso di accertamento

<figure><img src=".gitbook/assets/violazioni-codice-strada-step2.png" alt=""><figcaption></figcaption></figure>

## 1. L'ente crea la posizione debitoria

I sistemi in capo all’ente creano su pagoPA la posizione debitoria relativa al preavviso di accertamento emesso, pagabile in due modalità (se previsto):&#x20;

* entro 5 giorni, con importo ridotto;&#x20;
* dal 6° al 15° giorno, con importo intero.

Le date di scadenza possono variare a seconda dell’ente, in entrambi i casi non sono previsti costi di notifica.

### Da ricordare 💡&#x20;

* I sistemi in capo all’ente devono inserire nelle posizioni debitorie le rispettive date di scadenza, calcolabile a partire dalla data dell’emissione del preavviso. In questo modo i cittadini eviteranno di pagare erroneamente oltre i termini previsti;
* Considera eventuali giorni di festività, che estendono la data di scadenza;
* Inoltre, i sistemi in capo all’ente devono inserire nell’oggetto del pagamento un riferimento chiaro (es. “Violazione Codice della Strada - Importo ridotto”).

### Documentazione tecnica

[In questa pagina](https://docs.pagopa.it/sanp/appendici/primitive#pagetpayment-1) trovi le specifiche su come compilare il metadato **`dueDate`.**

## 2. L'ente comunica il preavviso di accertamento

I sistemi in capo all’ente, integrati con i dati delle targhe dei mezzi dei cittadini, comunicano il preavviso di accertamento all’utente tramite messaggio su IO.

### Da ricordare 💡&#x20;

* All’interno del messaggio i sistemi in capo all’ente devono fornire un codice avviso per permettere al cittadino di pagare direttamente in app.
* Inoltre, se i sistemi in capo all’ente non sono integrati con i dati della Motorizzazione Civile, è possibile comunque creare una base dati.\
  Puoi inviare un messaggio di benvenuto agli utenti su IO, ad esempio perché sono residenti nel tuo Comune, e invitarli a registrare la targa del veicolo sul portale dell’ente.

### Documentazione tecnica

[In questa pagina](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body#payment\_data) trovi le specifiche su come valorizzare il campo **`payment_data`** per permettere al cittadino di pagare in app.&#x20;

### Scrivere i messaggi su IO &#x20;

Nel [Manuale dei servizi dell'app IO](https://docs.pagopa.it/manuale-servizi), puoi trovare il [modello Multe per Violazioni al Codice della Strada](https://docs.pagopa.it/i-modelli-dei-servizi/mobilita-e-trasporti/multe-per-violazioni-al-codice-della-strada), cioè un template da cui l'ente può partire per **configurare il servizio e i relativi** [**messaggi** ](emissione-del-preavviso-di-accertamento.md#scrivere-i-messaggi-su-io)**al cittadino** su IO.&#x20;
