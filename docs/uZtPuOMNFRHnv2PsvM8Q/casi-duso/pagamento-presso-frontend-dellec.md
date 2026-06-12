# Pagamento presso frontend dell'EC

Questo processo viene attivato nel momento in cui l'operazione di pagamento è avviata dal front end di un EC, il workflow si prefigge lo scopo di aver minor impatto possibile su EC e PSP, infatti, le interfacce di comunicazione sono le stesse utilizzate per il pagamento presso i PSP, quindi ne condividono tutti i presupposti.

<div align="center">

<img src="../.gitbook/assets/nuovo_modello1_carrello_V3_SANP (8).png" alt="">

</div>

* quando il front end dell'EC riceve la richiesta di pagamento di uno o più avvisi la inoltra con una [redirect](../ente-creditore/modalita-dintegrazione/integrazione-touch-point-dellec-con-checkout.md) a Checkout, l'interfaccia di front end di PagoPA S.p.A.;
* Checkout invia _n_ [activatePaymentNotice](../appendici/primitive.md#activatepaymentnotice), in base al numero di avvisi che ha ricevuto, chiedendo al Nodo di attivare gli _n_ pagamenti presso l’EC;
* ogni singola richiesta di attivazione del pagamento giunge all’EC per mezzo della [paGetPayment](../appendici/primitive.md#pagetpayment);
* Checkout, ottenuti i dettagli dei pagamenti, verifica la corrispondenza dei dati delle convenzioni (_agreement_), se presenti, tra quelli ricevuti in POST e quelli ricevuti tramite metadata della [activatePaymentNotice](../appendici/primitive.md#activatepaymentnotice) _response_, nel caso non ci fosse corrispondenza viene inviato un esito negativo all'EC (outcome = KO);
* nel caso non ci siano problemi sulle eventuali convenzioni Checkout gestisce le operazioni di pagamento effettivo da parte dell'utente, una volta concluse effettua una redirect verso il frontend dell'EC e invia gli esiti al Nodo che provvede ad inviarli al PSP tramite la [pspNotifyPayment vers. 2](../appendici/primitive.md#versione-2-4), nel caso di risposta KO da parte del PSP il processo viene interrotto e il pagamento deve essere stornato;
* nel caso il PSP inviasse una [sendPaymentOutcome](../appendici/primitive.md#sendpaymentoutcome) dopo aver risposto con un KO alla [pspNotifyPayment vers. 2](../appendici/primitive.md#versione-2-4) il Nodo risponderebbe con un KO per segnalare l'esito discorde;
* in caso di accettazione della [pspNotifyPayment vers. 2](../appendici/primitive.md#versione-2-4) il PSP è tenuto a fornire l'esito del pagamento  **entro 2sec** con la [sendPaymentOutcome vers. 2](../appendici/primitive.md#versione-2-3), che contiene un singolo outcome per tutti i tokens attivati nelle fasi precedenti;
* nel caso il PSP inviasse un outcome = KO dopo aver accettato la [pspNotifyPayment vers. 2](../appendici/primitive.md#versione-2-4) il Nodo risponderebbe con un KO per segnalare l'esito discorde;
* tramite la primitiva [paSendRT](../appendici/primitive.md#pasendrt) viene inoltrata agli _n_ EC interessati al pagamento la _receipt_ (ricevuta) solo se il pagamento è stato effettuato, la _receipt_ è un oggetto generato dalla piattaforma pagoPA;
* quando l'EC riceve la _receipt_ deve chiudere la posizione debitoria e considerarla interamente saldata.

Per la gestione degli errori fare riferimento a [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").
