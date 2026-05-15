---
description: >-
  L'ente, tramite i propri sistemi, crea la posizione debitoria per la retta del
  Trasporto scolastico e la comunica al cittadino tramite un messaggio sull'app
  IO.
---

# 2️⃣ Emissione retta

<figure><img src="../../solutions/mensa-e-trasporto-scolastico/.gitbook/assets/Stepper_2_1.png" alt=""><figcaption></figcaption></figure>

## 1. L'ente calcola l'importo della retta e crea la posizione debitoria

L'ente, tramite i propri sistemi, calcola l’importo della retta che il cittadino deve versare per il servizio mensile.

L’ente, tramite i propri sistemi, crea una posizione debitoria e genera un codice avviso relativo alla retta del trasporto scolastico al cittadino che ha effettuato la domanda di iscrizione per il minore.

### Da ricordare 💡

* L'ente, tramite i propri sistemi, deve inserire nelle posizioni debitorie le rispettive date di scadenza della retta. Considera eventuali giorni di festività, che estendono la data di scadenza;
* All’interno del messaggio l'ente, tramite i propri sistemi, deve fornire un codice avviso per permettere al cittadino di pagare direttamente in app o presso qualsiasi canale abilitato a pagoPA;
* L'ente, tramite i propri sistemi, deve inserire nell’oggetto del pagamento un riferimento chiaro (es. “Trasporto scolastico - Rata Gennaio 2024”).

### Documentazione tecnica

[In questa pagina](https://developer.pagopa.it/pago-pa/guides/sanp/appendici/primitive) trovi le specifiche su come compilare il metadato **`dueDate.`**

[In questa pagina](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body#payment_data) trovi le specifiche su come valorizzare il campo **`payment_data`**  per permettere al cittadino di pagare in app.&#x20;

Inoltre se vuoi offrire la possibilità di pagare più avvisi in un'unica transazione, [in questa pagina](https://developer.pagopa.it/pago-pa/guides/sanp/ente-creditore/modalita-dintegrazione/integrazione-touch-point-dellec-con-checkout) trovi le specifiche su come farlo tramite pagoPA Checkout.

## 4. L'ente comunica l'avviso di pagamento

L'ente, tramite i propri sistemi, comunica al cittadino l’avviso di pagamento per la retta del trasporto scolastico tramite messaggio su IO.

### Scrivere i messaggi su IO

Nel [Manuale dei servizi dell'app IO](https://docs.pagopa.it/manuale-servizi) puoi trovare il modello [Trasporto scolastico](https://docs.pagopa.it/i-modelli-dei-servizi/educazione-e-formazione/trasporto-scolastico), cioè un template da cui l'ente può partire per **configurare il servizio e i relativi messaggi al cittadino** su IO, come ad esempio:&#x20;

* messaggio di [**avviso di pagamento**](https://docs.pagopa.it/i-modelli-dei-servizi/educazione-e-formazione/trasporto-scolastico#pagamento).
