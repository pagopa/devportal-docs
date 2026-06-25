# App IO

![](../../.gitbook/assets/appIO\_SANP.png)



* l'utente che avvia il pagamento dall'app IO <img src="../../.gitbook/assets/image (16).png" alt="" data-size="line"> deve scansionare il QR code presente sull'avviso di pagamento;
* la [paVerifyPaymentNotice](../../appendici/primitive.md#paverifypaymentnotice) è utilizzata per richiedere all’EC la verifica dell’opzione di pagamento identificata dal numero avviso;
* la richiesta di attivazione del pagamento giunge all’EC per mezzo della [paGetPayment](../../appendici/primitive.md#pagetpayment);
* una volta concluse le operazioni di pagamento effettivo da parte dell'utente il Nodo provvede ad inviare i dettagli al PSP tramite la [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment), nel caso di risposta KO da parte del PSP il processo viene interrotto e il pagamento deve essere stornato;
* nel caso il PSP inviasse una [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome) dopo aver risposto con un KO alla [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment) il Nodo risponderebbe con un KO per segnalare l'esito discorde;
* in caso di accettazione della [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment) il PSP è tenuto a fornire l'esito del pagamento  **entro 2sec** con la [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome), nel caso il PSP inviasse un outcome = KO il Nodo risponderebbe con un KO per segnalare l'esito discorde;
* tramite la primitiva [paSendRT](../../appendici/primitive.md#pasendrt) viene inoltrata agli _n_ EC interessati al pagamento la _receipt_ (ricevuta) solo se il pagamento è stato effettuato, la _receipt_ è un oggetto generato dalla piattaforma pagoPA;
* quando l'EC riceve la _receipt_ deve chiudere la posizione debitoria e considerarla interamente saldata.

Per la gestione degli errori fare riferimento a [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").
