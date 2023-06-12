# Pagamento di un avviso presso PSP

Questo processo prevede che l’esecuzione del pagamento di un avviso precedentemente emesso da un EC avvenga presso le infrastrutture messe a disposizione dal PSP quali Banche e Sportelli ATM, Uffici Postali e Punti Postali, Bar, Edicole, Ricevitorie, Supermercati, Tabaccherie e altri Esercenti Convenzionati.

L’attuale workflow di pagamento presso i PSP si prefigge di gestire, ove possibile internamente alla piattaforma, le richieste provenienti dai PSP ovviando a:

* disponibilità e latenza degli EC, fornendo ove necessario servizi aggiuntivi;
* disponibilità delle informazioni essenziali per procedere all’incasso;
* possibilità di pagamenti concorrenti.

![](../.gitbook/assets/nuovoModello3\_ENG.png)

* La [verifyPaymentNotice](../appendici/primitive.md#verifypaymentnotice) è un servizio **OPZIONALE** che non modifica lo stato della posizione debitoria, utilizzabile dai PSP che avviano il pagamento per mezzo del QR code presente nell'avviso analogico o con l’immissione manuale dei dati;
* la [verificaBollettino](../appendici/primitive.md#verificabollettino) è un servizio **OPZIONALE** che non modifica lo stato della posizione debitoria, è utilizzabile esclusivamente dal PSP Poste Italiane che avvia il pagamento per mezzo del Data Matrix presente nell'avviso analogico, e non per mezzo del QR Code;
* la [paVerifyPaymentNotice](../appendici/primitive.md#paverifypaymentnotice) è utilizzata per richiedere all’EC la verifica dell’opzione di pagamento identificata dal numero avviso;
* con [l’activatePaymentNotice](../appendici/primitive.md#activatepaymentnotice) il PSP chiede al nodo di attivare il pagamento presso l’EC, tale fase è obbligatoria per i PSP;
* la richiesta di attivazione del pagamento giunge all’EC per mezzo della [paGetPayment](../appendici/primitive.md#pagetpayment);
* il PSP è tenuto MANDATORIAMENTE a fornire in tempo reale l'esito del pagamento con la [sendPaymentOutcome](../appendici/primitive.md#sendpaymentoutcome), quindi non appena l'utente finale abbia pagato o confermato sul touchpoint del PSP e comunque non oltre la scadenza del token, sia in caso di pagamento effettuato con successo (outcome = OK), sia in caso di pagamento non effettuato (outcome = KO);
* tramite la primitiva [paSendRT](../appendici/primitive.md#pasendrt) viene inoltrata agli _n_ EC interessati al pagamento la _receipt_ (ricevuta) solo se il pagamento è stato effettuato, la _receipt_ è un oggetto generato dalla piattaforma pagoPA;
* quando l'EC riceve la _receipt_ deve chiudere la posizione debitoria e considerarla interamente saldata.

Per la gestione degli errori fare riferimento a [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").
