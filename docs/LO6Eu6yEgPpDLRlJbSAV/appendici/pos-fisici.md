# POS Fisici

Avendo un _carattere meramente orientativo_ il contenuto della pagina corrente è immediatamente applicabile e ha lo scopo di incentivare i pagamenti con carta in tutti i possibili scenari di pagamento, fornendo indicazioni sia ai PSP sia a tutte le tipologie di EC aderenti a pagoPA, delineando le caratteristiche di un servizio di pagamento compatibile con le specifiche attuative della piattaforma pagoPA.&#x20;

<figure><img src="../.gitbook/assets/posFisiciModelloUnico.png" alt=""><figcaption></figcaption></figure>

* Presupposto del pagamento è che la posizione debitoria sia stata preventivamente creata dall'EC e comunicata al POS con i suoi dati fondamentali, _qrCode_ e _amount_;
* il _qrCode_ deve essere scambiato con il PSP, in modo che quest'ultimo possa procedere con l'attivazione;
* con [l’activatePaymentNotice](primitive.md#activatepaymentnotice) il PSP chiede al nodo di attivare il pagamento presso l’EC, tale fase è obbligatoria per i PSP;
* la richiesta di attivazione del pagamento giunge all’EC per mezzo della [paGetPayment](primitive.md#pagetpayment);
* la conferma di attivazione viene inoltrata al POS che a questo punto consente il pagamento e ne inoltra l'esito al PSP;
* il PSP è tenuto MANDATORIAMENTE a fornire in tempo reale l'esito del pagamento con la [sendPaymentOutcome](primitive.md#sendpaymentoutcome), quindi non appena l'utente finale abbia pagato o confermato sul touchpoint del PSP e comunque non oltre la scadenza del token, sia in caso di pagamento effettuato con successo (outcome = OK), sia in caso di pagamento non effettuato (outcome = KO);
* tramite la primitiva [paSendRT](primitive.md#pasendrt) viene inoltrata agli _n_ EC interessati al pagamento la _receipt_ (ricevuta) solo se il pagamento è stato effettuato, la _receipt_ è un oggetto generato dalla piattaforma pagoPA;
* quando l'EC riceve la _receipt_ deve chiudere la posizione debitoria e considerarla interamente saldata.

Per la gestione degli errori fare riferimento a [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").
