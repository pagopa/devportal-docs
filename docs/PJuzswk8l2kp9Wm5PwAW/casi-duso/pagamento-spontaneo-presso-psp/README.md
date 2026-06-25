# Pagamento spontaneo presso PSP

Questo processo prevede che l’esecuzione del pagamento spontaneo avvenga presso le infrastrutture messe a disposizione dal PSP quali Banche e Sportelli ATM, Uffici Postali e Punti Postali, Bar, Edicole, Ricevitorie, Supermercati, Tabaccherie e altri Esercenti Convenzionati.

Solitamente l'utente dopo aver inserito i dati essenziali del servizio, utili per definire la posizione debitoria, potrà procedere con il pagamento.

<div align="left">

<img src="../../.gitbook/assets/nuovoModello4_ENG (5).png" alt="">

</div>

* La [demandPaymentNotice](../../appendici/primitive.md#demandpaymentnotice) è utilizzabile dai PSP per inviare i dati del servizio specifico inseriti dall'utente, in modo da ricevere in risposta le informazioni per avviare il processo di pagamento, tale fase è obbligatoria per i PSP;
* la [paDemandPaymentNotice](../../appendici/primitive.md#pademandpaymentnotice) è utilizzata per richiedere all’EC la creazione della posizione debitoria in base ai dati dello specifico servizio inviati, l'EC invierà in risposta il numero avviso e i dati dell'Ente Beneficiario del pagamento;
* con [l’activatePaymentNotice](../../appendici/primitive.md#activatepaymentnotice) il PSP chiede al nodo di attivare il pagamento presso l’EC, avendo cura di inserire nel tag _qrCode_ quello che ha ricevuto nella _response_ alla [demandPaymentNotice](../../appendici/primitive.md#demandpaymentnotice) sempre nel tag _qrCode_, tale fase è obbligatoria per i PSP;
* la richiesta di attivazione del pagamento giunge all’EC per mezzo della [paGetPayment](../../appendici/primitive.md#pagetpayment), a meno che l'EC non sia in grado di identificare il debitore autonomamente e compilare il tag _debtor_ in maniera corretta, è possibile utilizzare dei dati fittizi (es. "ANONIMO");
* il PSP è tenuto a fornire l'esito del pagamento **entro 2sec** con la [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome), sia in caso di pagamento effettuato con successo (outcome = OK), sia in caso di pagamento non effettuato (outcome = KO);
* tramite la primitiva [paSendRT](../../appendici/primitive.md#pasendrt) viene inoltrata agli _n_ EC interessati al pagamento la _receipt_ (ricevuta) solo se il pagamento è stato effettuato, la _receipt_ è un oggetto generato dalla piattaforma pagoPA;
* quando l'EC riceve la _receipt_ deve chiudere la posizione debitoria e considerarla interamente saldata.

Per la gestione degli errori fare riferimento a [Gestione degli errori](http://127.0.0.1:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").

{% content-ref url="catalogo-dei-servizi.md" %}
[catalogo-dei-servizi.md](catalogo-dei-servizi.md)
{% endcontent-ref %}

{% content-ref url="bollo-auto.md" %}
[bollo-auto.md](bollo-auto.md)
{% endcontent-ref %}
