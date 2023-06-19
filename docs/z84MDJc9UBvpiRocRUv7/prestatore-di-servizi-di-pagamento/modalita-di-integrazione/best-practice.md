# Best practice

## Payment Token <a href="#title-text" id="title-text"></a>

L'utilizzo del _payment token_ si prefigge i seguenti due obiettivi:

1. definire temporalmente una sessione di pagamento;
2. avere un identificativo generato dalla piattaforma pagoPA che permetta di identificare _end to end_ una sessione di pagamento.

Il valore di default della durata del _payment token_ è una configurazione comune a livello di intera piattaforma pagoPA e non può essere superiore a 30 minuti, tale parametro può essere sovrascritto  dal PSP, con un valore inferiore a 30 minuti, tramite il campo _expireTime_ inserito nella _request_ della [activatePaymentNotice](../../appendici/primitive.md#activatepaymentnotice), il valore deve essere espresso in millisecondi.

Il valore di default della durata del _payment token_ potrà essere ridefinito in base ai risultati del monitoraggio, l'aggiornamento verrà comunicato tramite la pubblicazione di una minor version del presente documento.

Il _payment token_ è fornito in _response_ dalla piattaforma pagoPA ad una [activatePaymentNotice](../../appendici/primitive.md#activatepaymentnotice), deve essere inserito dal PSP in _request_ alla [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome) e assume il significato di _identificativoUnivocoRiscossione_ nei Flussi di Rendicontazione.

## sendPaymentOutcome oltre la scadenza del Payment Token <a href="#title-text" id="title-text"></a>

A fronte di una [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome) è possibile ricadere nei casi identificati dalle seguenti risposte fornite dalla piattaforma pagoPA

| Risposta piattaforma          | Significato                                                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **OK**                        | La notifica di esito del pagamento è avvenuta entro la scadenza del token.                                                                     |
| **PPT\_TOKEN\_SCADUTO**       | La notifica di esito del pagamento è avvenuta oltre la scadenza del token e la piattaforma non conosce pagamenti concorrenti.                  |
| **PPT\_PAGAMENTO\_DUPLICATO** | La notifica di esito del pagamento è avvenuta oltre la scadenza del token e la piattaforma rileva un altro pagamento sulla medesima posizione. |

Per quanto riguarda il caso **OK** non è necessaria alcuna azione correttiva.

Per quanto riguarda il caso **PPT\_PAGAMENTO\_DUPLICATO** l’azione corretta da fare lato PSP sarebbe quella di restituire la somma all’utente. In caso di impossibilità di restituzione della somma è necessario comunque rendicontare il pagamento all'EC con _codice 9_.

Nel caso di **PPT\_TOKEN\_SCADUTO** l'azione correttiva da intraprendere da parte del PSP è quella di gestire il flusso in maniera temporalmente compatibile con la durata del _payment token_.

## Chiave di idempotenza <a href="#title-text" id="title-text"></a>

La _chiave di idempotenza_ può essere generata dal PSP per le chiamate:

* [activatePaymentNotice](../../appendici/primitive.md#activatepaymentnotice)
* [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome)&#x20;

Lo scopo della _chiave di idempotenza_ è quello di permettere l’invocazione più volte di una chiamata senza avere _side effect_ sullo stato del pagamento, l'utilizzo è sempre opzionale e circoscritto ai casi in cui non è stata ricevuta una response, per qualsiasi motivo, ad una chiamata idempotente.

Se un PSP, ad esempio, non riceve la _response_ all'attivazione del pagamento potrà rifare la stessa chiamata, avendo cura di utilizzare la stessa chiave di idempotenza, ottenendo i dati che erano a lui destinati durante la prima chiamata. Qualora non utilizzasse la medesima chiave di idempotenza otterrà invece in _response_ “pagamento in corso” e non potrà procedere con il pagamento.

La regola di generazione della _chiave di idempotenza_ è _\<CF\_PSP> + "\_" + \<RANDOM STRING>_.

La durata della _chiave di idempotenza_ è impostata dalla piattaforma pagoPA, in base ad una configurazione comune a tutti i PSP, nel caso della [activatePaymentNotice](../../appendici/primitive.md#activatepaymentnotice) la durata massima non può essere superiore a quella del p_ayment token._

Nel caso di  [activatePaymentNotice](../../appendici/primitive.md#activatepaymentnotice) la _chiave di idempotenza_ deve essere invalidata, oltre ovviamente alla scadenza della chiave stessa, anche nel momento di ricezione di un esito per il _payment token_ generato durante l’attivazione.

La _chiave di idempotenza_ una volta scaduta diventa riutilizzabile.

La piattaforma verifica il corretto utilizzo della _chiave di idempotenza,_ vengono verificati i parametri di input secondo la tabella riportata di seguito.

| Chiave di idempotenza                        | Altri parametri                  | Azione                                                          |
| -------------------------------------------- | -------------------------------- | --------------------------------------------------------------- |
| Associabile ad una richiesta _originale_     | Uguali a richiesta _originale_   | No side effect + risposta _originale_                           |
| Associabile ad una richiesta _originale_     | Diversi da richiesta _originale_ | KO: uso improprio della chiave di idempotenza                   |
| Non associabile ad una richiesta _origina_le | Indifferente                     | <p>Si tratta a tutti gli effetti di una nuova richiesta<br></p> |
