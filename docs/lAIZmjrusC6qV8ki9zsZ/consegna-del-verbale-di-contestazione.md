---
description: >-
  Creata la notifica, SEND cerca di raggiungere il cittadino sui vari canali a
  disposizione. Nell'esempio riportato, il cittadino ha l'app IO installata sul
  suo dispositivo.
---

# 5️⃣ Consegna del verbale di contestazione

<figure><img src=".gitbook/assets/image (22).png" alt="Sezione 5 di 6: Consegna del verbale di contestazione"><figcaption></figcaption></figure>

## 1. L'ente carica la notifica su SEND

I sistemi in capo all’ente caricano sul back-office SEND la notifica per il cittadino che contiene il verbale di contestazione e l'avviso di pagamento.

### Da ricordare 💡&#x20;

* I costi di notifica devono essere applicati su entrambi gli avvisi di pagamento.
* I sistemi in capo all’ente devono controllare, ad ogni verifica avviso, l’importo dei costi di notifica.
* Inoltre, per collegare uno o più pagamenti alla notifica, i sistemi in capo all’ente devono valorizzare i campi relativi all’avviso pagoPA.
* Il verbale allegato alla notifica è un atto in formato PDF/A con firma digitale PAdES.&#x20;

### Documentazione tecnica&#x20;

[In questa pagina](https://developer.pagopa.it/send/api#/send/api/operations/retrieveNotificationPriceV23) trovi le specifiche sull'API **`notificationPriceV23`**da utilizzare per conoscere l'importo dei costi di notifica da applicare agli avvisi di pagamento.&#x20;

[In questa pagina](https://developer.pagopa.it/send/api#/send/api/operations/sendNewNotificationV23) trovi le specifiche per collegare uno o più pagamenti alla notifica: i sistemi in capo dall'ente devono utilizzare il campo **`pagoPa`** all’interno dell’oggetto **`payments`** (dentro recipients), fornendo i seguenti dati:&#x20;

* **`noticeCode;`**&#x20;
* **`creditorTaxId;`**&#x20;
* **`applyCost;`**&#x20;
* **`pagoPaForm`**.

[In questa pagina](https://docs.pagopa.it/manuale-operativo/piattaforma-notifiche-digitali-manuale-operativo/il-processo-di-notificazione/specifiche-tecniche-dei-pdf-allegati-alla-notifica) trovi le specifiche tecniche dei PDF allegati alla notifica.

***

## 2. L'ente monitora la notifica

I sistemi in capo all'ente possono monitorare l'accettazione o rifiuto da parte di SEND del deposito della notifica.

### Da ricordare 💡&#x20;

* È possibile monitorare lo stato della notifica tramite API per la lettura degli stream.

### Documentazione tecnica&#x20;

[In questa pagina](https://developer.pagopa.it/send/api#/send/api/operations/consumeEventStream) trovi le specifiche tecniche per leggere i progressi delle notifiche tramite stream.

***

## 3. SEND inizia il processo di comunicazione notifica al cittadino

SEND invia un messaggio di cortesia ai recapiti (e-mail, SMS o l’app IO) se già forniti dal cittadino, invitandolo a collegarsi alla piattaforma per visualizzare la notifica.

Poi, verifica se esiste una PEC (inserita dal cittadino o presente sui registri pubblici) e, se presente, invia lì l’avviso di avvenuta ricezione, perfezionando la notifica.

***

## 4. SEND prova ad inviare il verbale su IO&#x20;

I sistemi in capo all’ente possono monitorare in ogni momento lo stato di consegna della notifica tramite SEND.

Il cittadino riceve un messaggio di cortesia su IO, che lo informa dell’esistenza di una notifica: per leggerla deve attivare il servizio “SEND - Notifiche Digitali.”

Attivando il servizio, d’ora in poi riceverà le notifiche a valore legale sull’app IO.

***

## 5. Il cittadino apre la notifica su IO

Il cittadino riceve su IO, tramite il servizio SEND notifiche digitali, un messaggio che lo informa dell’emissione della notifica per il verbale di contestazione, contenente il relativo avviso di pagamento.

Apre la notifica entro 120 ore (5 giorni) dalla consegna, pertanto la notifica si perfeziona.

### Da ricordare 💡&#x20;

* Quando la data di perfezionamento della notifica è nota, i sistemi in capo all’ente devono inserire nelle posizioni debitorie le rispettive date di scadenza, per evitare che i cittadini paghino erroneamente oltre i termini previsti.
* Tieni a mente eventuali giorni di festività, che estendono la data di scadenza.
* Inoltre, se il cittadino non legge la notifica su IO entro 120 ore dalla consegna (e non ha una PEC nota), allora SEND procederà con l’invio cartaceo della notifica.

### Documentazione tecnica&#x20;

[In questa pagina](https://docs.pagopa.it/sanp/appendici/primitive#pagetpayment-1) trovi le specifiche tecniche per compilare il campo **`dueDate`** della posizione debitoria con la data di perfezionamento della notifica.

[In questa pagina](https://developer.pagopa.it/send/api#/send/api/operations/retrieveNotificationPriceV23) trovi le specifiche tecniche per conoscere la data di perfezionamento della notifica, utilizza l’API **`notificationPriceV23.`**&#x20;

[In questa pagina](https://notifichedigitali.pagopa.it/perfezionamento) scopri come si perfeziona una notifica.

***

<figure><img src=".gitbook/assets/Diagramma SEND (1).jpg" alt="Un diagramma che spiega il processo di invio di una comunicazione tramite SEND"><figcaption><p>Invio delle comunicazioni tramite SEND</p></figcaption></figure>
