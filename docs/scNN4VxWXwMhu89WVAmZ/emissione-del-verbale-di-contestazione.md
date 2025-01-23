---
description: >-
  Il cittadino non paga entro i termini, pertanto l'ente procede all'invio del
  verbale di contestazione, e del relativo avviso di pagamento, tramite SEND.
---

# 4️⃣ Emissione del verbale di contestazione

<figure><img src=".gitbook/assets/violazioni-codice-strada-step4.png" alt=""><figcaption></figcaption></figure>

## 1. Il preavviso di accertamento è scaduto

I sistemi in capo all’ente aggiornano lo stato della posizione debitoria del preavviso di accertamento su pagoPA, la contrassegnano come “scaduta” e non più disponibile.

### Da ricordare 💡&#x20;

* Controlla che i sistemi in capo all’ente riportino correttamente i messaggi di errore da restituire in fase di verifica avviso: in questo modo il cittadino capirà che l’avviso è scaduto.
* Inoltre, controlla che i sistemi in capo all’ente compilino sempre una data di scadenza per evitare che il cittadino paghi oltre i termini previsti.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/gestionedeglierrori/faultcode-e-faultstring/domino-ec) trovi le specifiche per gestire gli errori.&#x20;

[In questa pagina](https://developer.pagopa.it/pago-pa/guides/sanp/appendici/primitive) trovi le specifiche su come compilare la data di scadenza della posizione debitoria.&#x20;

## 2. L'ente crea la posizione debitoria

I sistemi in capo all’ente creano la posizione debitoria su pagoPA relativa al verbale di contestazione emesso, pagabile in due modalità (se previsto):  

* entro 5 giorni, con importo ridotto;&#x20;
* dal 6° al 60° giorno, con importo intero.

L’importo del verbale potrà comprendere spese di notifica.

### Da ricordare 💡&#x20;

* I sistemi in capo all’ente devono inserire nell’oggetto del pagamento un riferimento chiaro (es.: “Violazione Codice della Strada - Importo ridotto”).

### Scrivere i messaggi su IO

Nel [Manuale dei servizi dell'app IO](https://docs.pagopa.it/manuale-servizi), puoi trovare il [modello Multe per Violazioni al Codice della Strada](https://docs.pagopa.it/i-modelli-dei-servizi/mobilita-e-trasporti/multe-per-violazioni-al-codice-della-strada), cioè un template da cui l'ente può partire per **configurare il servizio e i relativi** [**messaggi**](https://docs.pagopa.it/i-modelli-dei-servizi/mobilita-e-trasporti/multe-per-violazioni-al-codice-della-strada#avvenuto-invio-del-verbale-di-contestazione) **al cittadino** su IO.&#x20;
