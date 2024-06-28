---
description: >-
  I sistemi in capo all'ente creano la posizione debitoria per la prima rata e
  la comunicano al cittadino tramite un messaggio sull'app IO.
---

# 4️⃣ Emissione prima rata

<figure><img src=".gitbook/assets/image (3).png" alt="Sezione 4 di 8: emissione della prima rata"><figcaption></figcaption></figure>

## 1. L'ente crea la posizione debitoria&#x20;

I sistemi in capo all’ente creano una posizione debitoria relativa alla prima rata della TARI per l’immobile e la inviano al cittadino che ha presentato la dichiarazione.

Le date di scadenza possono variare a seconda dell’ente.

### Da ricordare 💡&#x20;

* I sistemi in capo all’ente devono inserire nelle posizioni debitorie le rispettive date di scadenza previste dal regolamento TARI. Considera eventuali giorni di festività, che estendono la data di scadenza;
* All’interno del messaggio, i sistemi in capo all’ente devono fornire un codice avviso per permettere al cittadino di pagare direttamente in app;
* I sistemi in capo all’ente devono inserire nell’oggetto del pagamento un riferimento chiaro (es. “Tassa sui rifiuti (TARI) 2024 - Rata unica”).

### Documentazione tecnica

[In questa pagina](https://docs.pagopa.it/sanp/appendici/primitive#pagetpayment-1) trovi le specifiche su come compilare il metadato **`dueDate.`**

[In questa pagina](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body#payment\_data) trovi le specifiche su come valorizzare il campo **`payment_data`** per permettere al cittadino di pagare in app.&#x20;

***

## 2. L'ente indica i beneficiari della posizione debitoria&#x20;

I sistemi in capo all’ente indicano per la stessa posizione debitoria chi sono i beneficiari e quale percentuale è destinata agli stessi:&#x20;

* al Comune che emette la posizione debitoria è indirizzata la quota TARI;&#x20;
* alla Provincia o alla Città metropolitana è indirizzata la quota TEFA.

### Da ricordare 💡&#x20;

* Per stabilire i beneficiari delle diverse quote, i sistemi in capo all’ente devono valorizzare i campi relativi all’avviso pagoPA tramite la primitiva **`paGetPayment versione 2`.**

### Documentazione tecnica

* [In questa pagina](https://docs.pagopa.it/sanp/appendici/primitive#pagetpayment-versione-2) trovi le specifiche su come compilare il metadato per ogni singolo **`transfer`**, indicando per ogni ente beneficiario: **`transferAmount, fiscalCodePA, companyName, IBAN`**.

## 4. L'ente comunica l'avviso di pagamento

I sistemi in capo all’ente comunicano l’avviso di pagamento per la prima rata all’utente tramite messaggio su IO.

***

### Scrivere i messaggi su IO

Nel [Manuale dei servizi dell'app IO](https://docs.pagopa.it/manuale-servizi), puoi trovare il modello [Tassa sui rifiuti (TARI)](https://docs.pagopa.it/i-modelli-dei-servizi/casa-e-utenze/tassa-sui-rifiuti-tari), cioè un template da cui l'ente può partire per **configurare il servizio e i relativi**[ **messaggi**](https://docs.pagopa.it/i-modelli-dei-servizi/casa-e-utenze/tassa-sui-rifiuti-tari#pagamento-a-rate-con-avviso-di-pagamento) **al cittadino** su IO.&#x20;
