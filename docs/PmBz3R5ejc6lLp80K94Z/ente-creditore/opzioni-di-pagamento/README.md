# Opzioni di pagamento

PagoPA mette a disposizione degli Enti Creditori (EC) una funzionalità per gestire le **opzioni di pagamento**, come piani rateali, maggiorazioni o riduzioni dell’importo. L’EC in fase di verifica del pagamento può inserire una serie di opzioni di pagamento che, tramite il touchpoint del PSP da cui è partita la richiesta, il cittadino può scegliere di pagare. Grazie a questa nuova funzionalità gli EC possono gestire il proprio archivio delle posizioni debitorie contemplando la possibilità di gestire le opzioni di pagamento che possono offrire al cittadino. Ad esempio possono dare al cittadino la possibilità di pagare un avviso in modalità unica piuttosto che con dei piani rateali. La piattaforma pagoPA, nell’attuale processo di verifica della posizione debitoria, non prevede il concetto di opzioni di pagamento (OdP) multiple, pertanto è stato necessario implementare un nuovo servizio che preveda questo tipo di gestione. Il nuovo servizio si comporta da proxy esponendo una API che i PSP possono invocare per verificare il pagamento e recuperare le OdP disponibili nell’ambito della stessa posizione debitoria. Il nuovo servizio gestisce internamente la configurazione necessaria per poter contattare l’endpoint esposto dagli EC, che dunque devono esporre un nuovo servizio mediante la seguente URL:

```javascript
<baseEcUrl>/payment-options/organizations/{fiscal-code}/notices/{notice-number}
```

Tale URL viene invocata dalla nuova componente mediante una chiamata **`GET REST`**. L’esposizione del servizio sopraindicato è in carico all’EC in caso di integrazione sincrona, o in carico a Gestione Posizioni Debitorie (GPD) in caso di integrazione asincrona. Per riassumere, gli EC che vogliono utilizzare la nuova funzionalità di OdP devono:

* configurare le stazioni per specificare se si supporta o meno il recupero delle opzioni di pagamento (per maggiori informazioni si rimanda al manuale utente del Backoffice al seguente link: [https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/readme/funzionalita/stazioni/configurazione-opzioni-di-pagamento](https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/readme/funzionalita/stazioni/configurazione-opzioni-di-pagamento));
* in caso di integrazione sincrona configurare un nuovo endpoint REST per le stazioni che supportano le opzioni di pagamento;
* implementare la logica delle opzioni di pagamento secondo quanto descritto nei [casi d'uso](casi-duso/).

Viene pertanto utilizzato il nuovo flag all’interno della configurazione delle stazioni per determinare se il servizio può restituire o meno le nuove opzioni di pagamento.

### Processo di pagamento con opzioni di pagamento

Di seguito sono descritti i passi principali del flusso di pagamento con la gestione delle opzioni di pagamento, lato Ente Creditore:

<figure><img src="../../.gitbook/assets/fLDDJyCm3BtdL_W8XvsuxO0sLHL2Q5ib15TajUuKaILLaXRjt-EcxKZK0KNqPBlFpyyVsJYFrhSd1RerdTcPYfGoTs_v_a6uTwd16aT2Y8PHifGDQWzvbhWD7asnJKB5So44yCS6hEv7o1ewih8-5tW-aVQ7nakZtSrjG6BfPOUU9heGKnuqVOnfK2iyWdJWRKlX_m2T5s0tL80AFGPaYiwpDNkltuj9176xKopFO1LLwxKr (1).png" alt=""><figcaption></figcaption></figure>

L’EC se gestisce le opzioni di pagamento (l’EC quindi ha configurato le proprie stazioni per poterle gestire), restituisce nella response della [paVerifyPaymentOptions](../../appendici/primitive.md#pagetpayment-1) le opzioni di pagamento disponibili per quel numero avviso. Se l’EC non gestisce le opzioni di pagamento, il PSP riceverà in response un messaggio di errore che lo invita ad utilizzare la primitiva [verifyPaymentNotice](../../appendici/primitive.md#activatepaymentnotice). A questo punto il flusso procede normalmente con la primitiva[ paVerifyPaymentNotice](../../appendici/primitive.md#paverifypaymentnotice) verso l’EC.

Tutti i dettagli relativi al funzionamento della nuova API [paVerifyPaymentOptions](../../appendici/primitive.md#pagetpayment-1) sono disponibili nella pagina [primitive.md](../../appendici/primitive.md "mention") alla sezione [#pagetpayment-1](../../appendici/primitive.md#pagetpayment-1 "mention").
