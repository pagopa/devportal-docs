# Riconciliazione contabile

L’EC deve concludere il ciclo di vita del pagamento verificando che il flusso bancario corrisponda al rendicontato, per fare ciò usa l'identificativo del flusso di rendicontazione inserito nella causale del riversamento associandolo al corrispondente flusso di rendicontazione scaricato dalla piattaforma pagoPA. Dopo tale procedura rimane la parte in cui gli importi, una volta verificati, devono essere imputati alle corrette voci di bilancio, in modo da poter fare le reversali e concludere la procedura di riconciliazione contabile.

Per far transitare sulla piattaforma pagoPA le informazioni utili alla riconciliazione contabile è necessario sfruttare la struttura dei _metadata_ disponibile nelle primitive [paGetPayment vers. 2](../appendici/primitive.md#pagetpayment) e [paSendRT vers. 2](../appendici/primitive.md#pasendrt).

Per un corretto e standardizzato utilizzo dei _metadata_ è stato creato un apposito [Dizionario dei metadata](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/u6YdY319vyFX9MIvnKBa/ "mention"), in cui è presente una sezione dedicata alla riconciliazione contabile.

![](../.gitbook/assets/flussoMetadata.png)

* nella _response_ alla richiesta di attivazione del pagamento, che giunge all’EC per mezzo della [paGetPayment vers.2](../appendici/primitive.md#pagetpayment), è possibile inserire i _metadata_ per ogni singolo transfer;
* tramite la primitiva [paSendRT vers. 2](../appendici/primitive.md#pasendrt), che viene inviata agli _n_ EC interessati al pagamento tramite i loro Partner/Intermediari Tecnologici, vengono inoltrati i _metadata_ che erano stati inseriti nella [paGetPayment vers. 2](../appendici/primitive.md#pagetpayment) _response_;
* la [paSendRT vers. 2](../appendici/primitive.md#pasendrt) viene inoltrata &#x20;
  * alla _stazione_ dell'EC primario, da cui è stato attivato il pagamento;
  * alle _stazioni_ di tutti gli EC configurate come _broadcast_;

Sfruttando tale flusso ogni software degli EC coinvolti nel pagamento potrebbe ricevere la [paSendRT vers. 2](../appendici/primitive.md#pasendrt) e utilizzare il contenuto dei _metadata_ per gestire la riconciliazione contabile.
