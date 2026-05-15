---
description: >-
  Creata la notifica, SEND cerca di raggiungere il cittadino sui vari canali a
  disposizione. Nell'esempio riportato, il cittadino ha l'app IO installata sul
  suo dispositivo.
---

# 7️⃣ Consegna dell'avviso di accertamento

<figure><img src="../../solutions/riscossione-della-tari/.gitbook/assets/Stepper_07.png" alt=""><figcaption></figcaption></figure>

## 1. L'ente carica la notifica su SEND

L'ente, tramite i propri sistemi, carica tramite i sistemi di back-office la notifica per il cittadino che contiene l'accertamento e l'avviso di pagamento.&#x20;

### Da ricordare 💡&#x20;

* I costi di notifica devono essere applicati agli avvisi di pagamento.
* Inoltre, per allegare correttamente le posizioni debitorie alla notifica, i sistemi in capo all'ente devono valorizzare i campi previsti dalle specifiche di SEND descritte nel paragrafo successivo.
* L'avviso di accertamento allegato alla notifica è un atto in formato PDF/A con firma digitale PAdES.&#x20;

### Documentazione tecnica&#x20;

[In questa pagina](https://developer.pagopa.it/send/api#/send/api/operations/retrieveNotificationPriceV23) trovi le specifiche sull'API **`notificationPriceV23`**&#x64;a utilizzare per conoscere l'importo dei costi di notifica da applicare agli avvisi di pagamento.&#x20;

[In questa pagina](https://developer.pagopa.it/send/api#/send/api/operations/sendNewNotificationV23) trovi le specifiche per collegare uno o più avvisi alla notifica: i sistemi in capo dall'ente devono utilizzare il campo **`pagoPa`** all’interno dell’oggetto **`payments`** (dentro recipients), fornendo i seguenti dati:&#x20;

* **`noticeCode;`**&#x20;
* **`creditorTaxId;`**&#x20;
* **`applyCost;`**&#x20;
* **`pagoPaForm`**.

[In questa pagina](https://docs.pagopa.it/manuale-operativo/piattaforma-notifiche-digitali-manuale-operativo/il-processo-di-notificazione/specifiche-tecniche-dei-pdf-allegati-alla-notifica) trovi le specifiche tecniche dei PDF allegati alla notifica.

## 2. L'ente monitora la notifica

L'ente, tramite i propri sistemi, può monitorare l'accettazione o rifiuto da parte di SEND del deposito della notifica.

### Da ricordare 💡&#x20;

* È possibile monitorare lo stato della notifica tramite API per la lettura degli stream.

### Documentazione tecnica&#x20;

[In questa pagina](https://developer.pagopa.it/send/api#/send/api/operations/consumeEventStream) trovi le specifiche tecniche per leggere i progressi delle notifiche tramite stream.

## 3. SEND inizia il processo di comunicazione notifica al cittadino

SEND verifica se esiste una PEC (inserita dal cittadino o presente sui registri pubblici) e, se presente, invia lì l’avviso di avvenuta ricezione.

Contestualmente, SEND invia un messaggio di cortesia ai recapiti (e-mail, SMS e/o l’app IO) se già forniti dal cittadino, invitandolo a collegarsi alla piattaforma per visualizzare la notifica.

L'ente, tramite i propri sistemi, può monitorare in ogni momento lo stato di consegna della notifica tramite SEND.

## 4. SEND invia una comunicazione di cortesia su IO&#x20;

Il cittadino riceve un messaggio di cortesia su IO, che lo informa dell’esistenza di una notifica: per leggerla deve attivare il servizio “SEND - Notifiche Digitali.”

Quest'operazione va fatta soltanto una volta: attivando il servizio, da quel momento riceverà le notifiche a valore legale sull’app IO.

## 5. Il cittadino apre la notifica su IO

Non appena attiva il servizio, il cittadino riceve in app la notifica per l'avviso di accertamento, con incluso il relativo avviso di pagamento.

Apre la notifica entro 120 ore (5 giorni) dalla consegna, pertanto la notifica si perfeziona.

### Da ricordare 💡&#x20;

* Quando la data di perfezionamento della notifica è nota, i sistemi in capo all’ente devono inserire nelle posizioni debitorie le rispettive date di scadenza, per evitare che i cittadini paghino erroneamente oltre i termini previsti.
* Tieni a mente eventuali giorni di festività, che estendono la data di scadenza.
* Inoltre, se il cittadino non legge la notifica su IO entro 120 ore dalla consegna (e non ha una PEC nota), allora SEND procederà con l’invio cartaceo della notifica.

### Documentazione tecnica&#x20;

[In questa pagina ](https://developer.pagopa.it/pago-pa/guides/sanp/appendici/primitive)trovi le specifiche tecniche per compilare il campo **`dueDate`** della posizione debitoria con la data di perfezionamento della notifica.

[In questa pagina](https://developer.pagopa.it/send/api#/send/api/operations/retrieveNotificationPriceV23) trovi le specifiche tecniche per conoscere la data di perfezionamento della notifica, utilizza l’API **`notificationPriceV23`.**&#x20;

[In questa pagina](https://notifichedigitali.pagopa.it/perfezionamento) puoi approfondire come si perfeziona una notifica rispetto al canale usato dal cittadino.

<figure><img src="../../solutions/riscossione-della-tari/.gitbook/assets/image (9).png" alt="Un diagramma che rappresenta il flusso di consegna notifica tramite SEND"><figcaption><p>Invio delle comunicazioni tramite SEND</p></figcaption></figure>
