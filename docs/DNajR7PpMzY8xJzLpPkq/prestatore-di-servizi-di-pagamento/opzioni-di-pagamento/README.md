# Opzioni di pagamento

PagoPA mette a disposizione degli Enti Creditori (EC) una funzionalità per gestire le **opzioni di pagamento**, come piani rateali, maggiorazioni o riduzioni dell’importo. L’EC in fase di verifica del pagamento può inserire una serie di opzioni di pagamento che, tramite il touchpoint del PSP da cui è partita la richiesta, il cittadino può scegliere di pagare. Grazie a questa nuova funzionalità gli EC possono gestire il proprio archivio delle posizioni debitorie contemplando la possibilità di gestire le opzioni di pagamento che possono offrire al cittadino. Ad esempio possono dare al cittadino la possibilità di pagare un avviso in modalità unica piuttosto che con dei piani rateali.&#x20;

La piattaforma pagoPA, nell’attuale processo di verifica della posizione debitoria, non prevede il concetto di opzioni di pagamento (OdP) multiple, pertanto è stato necessario implementare un nuovo servizio che preveda questo tipo di gestione. Il nuovo servizio si comporta da proxy esponendo una API che i PSP possono invocare per verificare il pagamento e recuperare le OdP disponibili nell’ambito della stessa posizione debitoria. La responsabilità del nuovo servizio è quindi quella di consentire la verifica di un avviso di pagamento e il recupero delle opzioni di pagamento disponibili per l’avviso, che devono essere esposte dal PSP.&#x20;

{% hint style="info" %}
I PSP devono restituire tutte le opzioni di pagamento disponibili per quel determinato avviso di pagamento così come indicate dall’EC.
{% endhint %}

### Processo di pagamento con opzioni di pagamento

Di seguito vengono descritti i passi principali del flusso di pagamento con la gestione delle Opzioni di pagamento (OdP):

<figure><img src="../../.gitbook/assets/fLDDJyCm3BtdL_W8XvsuxO0sLHL2Q5ib15TajUuKaILLaXRjt-EcxKZK0KNqPBlFpyyVsJYFrhSd1RerdTcPYfGoTs_v_a6uTwd16aT2Y8PHifGDQWzvbhWD7asnJKB5So44yCS6hEv7o1ewih8-5tW-aVQ7nakZtSrjG6BfPOUU9heGKnuqVOnfK2iyWdJWRKlX_m2T5s0tL80AFGPaYiwpDNkltuj9176xKopFO1LLwxKr.png" alt=""><figcaption></figcaption></figure>

1. Il PSP ha la possibilità di chiamare sia la [verifyPaymentNotice](../../appendici/primitive.md#activatepaymentnotice) che la [verifyPaymentOptions](../../appendici/primitive.md#pagetpayment);
2. nel caso venga chiamata la [verifyPaymentOptions](../../appendici/primitive.md#pagetpayment):
   1. viene attivato il microservizio dedicato;&#x20;
   2. se la configurazione della stazione dell’EC da chiamare ha il flag _"new verify"_ impostato su **true**, il microservizio esegue la chiamata all'endpoint configurato dell'ente creditore e restituisce al PSP le informazioni sulle opzioni di pagamento. Il PSP deve riportare in response le opzioni di pagamento che sono state indicate dall’ente creditore;&#x20;
   3. se il flag _"new verify"_ è impostato su **false**, il microservizio effettua la chiamata e restituisce al PSP un codice di errore, invitandolo a utilizzare la [verifyPaymentNotice](../../appendici/primitive.md#activatepaymentnotice); il codice di errore restituito al PSP è il seguente: **ODP\_STAZIONE\_INT\_VERIFICA\_ODP\_DISABILITATA** (errore fornito nel caso in cui la stazione non sia abilitata per l’utilizzo del servizio OdP). Nel caso in cui venga chiamata la [verifyPaymentNotice](../../appendici/primitive.md#activatepaymentnotice) il flusso rimane invariato.

### Funzionamento della nuova API verifyPaymentOptions - PSP

Tutti i dettagli circa il funzionamento della nuova API sono disponibili in [primitive.md](../../appendici/primitive.md "mention") alla sezione [#pagetpayment](../../appendici/primitive.md#pagetpayment "mention"). Il PSP effettua una chiamata **`GET REST`** in fase di verifica per richiedere le opzioni di pagamento disponibili per l’avviso di pagamento in oggetto:

```javascript
GET /payment-options/organizations/{fiscal-code}/notices/<notice-number>?idPsp={idPsp} 
```

In input deve essere presente l’identificativo del PSP all’interno del sistema pagoPA. In response il PSP deve poter esporre tutte le opzioni di pagamento disponibili per quel determinato avviso di pagamento così come indicate dall’EC, e descritto nei diversi [casi-duso](casi-duso/ "mention").
