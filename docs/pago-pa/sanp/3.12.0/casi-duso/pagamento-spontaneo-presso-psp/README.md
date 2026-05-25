---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/casi-duso/pagamento-spontaneo-presso-psp
---

# Pagamento spontaneo presso PSP

Questo processo prevede che l’esecuzione del pagamento spontaneo avvenga presso le infrastrutture messe a disposizione dal PSP quali Banche e Sportelli ATM, Uffici Postali e Punti Postali, Bar, Edicole, Ricevitorie, Supermercati, Tabaccherie e altri Esercenti Convenzionati.

Solitamente l'utente dopo aver inserito i dati essenziali del servizio, utili per definire la posizione debitoria, potrà procedere con il pagamento.

<figure><img src="../../.gitbook/assets/Screenshot 2026-01-20 alle 12.28.38.png" alt=""><figcaption></figcaption></figure>

* La [demandPaymentNotice](../../appendici/primitive/psp/api-soap.md#demandpaymentnotice) è utilizzabile dai PSP per inviare i dati del servizio specifico inseriti dall'utente, in modo da ricevere in risposta le informazioni per avviare il processo di pagamento, tale fase è obbligatoria per i PSP;
* la [paDemandPaymentNotice](../../appendici/primitive/ente-creditore/api-soap.md#pademandpaymentnotice) è utilizzata per richiedere all’EC la creazione della posizione debitoria in base ai dati dello specifico servizio inviati, l'EC invierà in risposta il numero avviso e i dati dell'Ente Beneficiario del pagamento;
* con [l’activatePaymentNotice](../../appendici/primitive/psp/api-soap.md#activatepaymentnotice-1) il PSP chiede al nodo di attivare il pagamento presso l’EC, avendo cura di inserire nel tag _qrCode_ quello che ha ricevuto nella _response_ alla [demandPaymentNotice](../../appendici/primitive/psp/api-soap.md#demandpaymentnotice) sempre nel tag _qrCode_, tale fase è obbligatoria per i PSP;
* la richiesta di attivazione del pagamento giunge all’EC per mezzo della [paGetPayment](../../appendici/primitive/ente-creditore/api-soap.md#pagetpayment), a meno che l'EC non sia in grado di identificare il debitore autonomamente e compilare il tag _debtor_ in maniera corretta, è possibile utilizzare dei dati fittizi (es. "ANONIMO");
* il PSP è tenuto a fornire l'esito del pagamento **entro 2sec** con la [sendPaymentOutcome](../../appendici/primitive/psp/api-soap.md#sendpaymentoutcome), sia in caso di pagamento effettuato con successo (outcome = OK), sia in caso di pagamento non effettuato (outcome = KO);
* tramite la primitiva [paSendRT](../../appendici/primitive/ente-creditore/api-soap.md#pasendrt) viene inoltrata agli _n_ EC interessati al pagamento la _receipt_ (ricevuta) solo se il pagamento è stato effettuato, la _receipt_ è un oggetto generato dalla piattaforma pagoPA;
* quando l'EC riceve la _receipt_ deve chiudere la posizione debitoria e considerarla interamente saldata.

Per la gestione degli errori fare riferimento a [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").

{% content-ref url="catalogo-dei-servizi.md" %}
[catalogo-dei-servizi.md](catalogo-dei-servizi.md)
{% endcontent-ref %}

{% content-ref url="bollo-auto.md" %}
[bollo-auto.md](bollo-auto.md)
{% endcontent-ref %}
