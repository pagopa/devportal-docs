# Integrazione tramite API

{% hint style="info" %}
Per la gestione degli errori fare riferimento a [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endhint %}

## Fase di richiesta di creazione della posizione debitoria

![](<../../.gitbook/assets/demandPaymentNotice (1).png>)

La [demandPaymentNotice](../../appendici/primitive.md#demandpaymentnotice) è utilizzabile dai PSP per inviare i dati del servizio specifico inseriti dall'utente, in modo da ricevere in risposta le informazioni necessarie per avviare il processo di pagamento, in particolare:

* il numero avviso;
* il codice fiscale dell'EC da utilizzare nella fase di attivazione;
* l'importo parziale di ogni singolo pagamento;
* il codice fiscale dell’EC beneficiario di ogni singolo pagamento.

&#x20;Tale fase è obbligatoria nel caso di pagamento spontanei attivati presso i PSP.

I PSP possono recuperare i dati dello specifico servizio tramite il [catalogo-dei-servizi.md](../../casi-duso/pagamento-spontaneo-presso-psp/catalogo-dei-servizi.md "mention").

## Fase di verifica

![](../../.gitbook/assets/verifyPaymentNotice.png)

La [verifyPaymentNotice](../../appendici/primitive.md#verifypaymentnotice) è utilizzabile dai PSP che avviano il pagamento per mezzo del QR code presente nell'avviso analogico o con l’immissione manuale dei dati, con questa richiesta il PSP richiede le informazioni di pagamento relative ad un numero avviso, in particolare:

* importo parziale;
* codice fiscale dell’EC beneficiario.

La fase di verifica è opzionale per i PSP, se il Nodo riscontra che la posizione è già stata chiusa risponde con un KO per _PPT\_PAGAMENTO\_DUPLICATO_**.**

## Fase di verifica da parte di Poste Italiane

![](<../../.gitbook/assets/image (30).png>)

La [verificaBollettino](../../appendici/primitive.md#verificabollettino) è utilizzabile esclusivamente dal PSP Poste Italiane che avvia il pagamento per mezzo del Data Matrix presente nell'avviso analogico, e non per mezzo del QR Code, con questa chiamata vengono richieste le informazioni di pagamento relative ad un numero avviso, in particolare:

* importo parziale;
* codice fiscale dell’EC beneficiario;
* il parametro _allCCP_ indica a Poste Italiane se l’opzione di pagamento è associabile a tutti conti correnti postali o meno
  * _allCCP = true_: l’opzione è associabile a tutti conti correnti postali;
  * _allCCP = false_: l’opzione non è associabile a tutti conti correnti postali.

La fase di verifica è opzionale per i PSP, se il Nodo riscontra che la posizione è già stata chiusa risponde con un KO per _PPT\_PAGAMENTO\_DUPLICATO_**.**

## Fase di attivazione

![](<../../.gitbook/assets/image (29).png>)

Con l’[activatePaymentNotice](../../appendici/primitive.md#activatepaymentnotice) il PSP chiede al nodo di attivare il pagamento presso l’EC.

Attraverso questa fase il PSP è in grado di aprire una sessione di pagamento, che blocca altri tentativi di pagamento per il medesimo avviso. Attraverso la medesima chiamata, il PSP acquisisce l’importo del pagamento ed i dati necessari per il riversamento della somma, in particolare per ogni versamento:

* importo parziale;
* codice fiscale dell’EC beneficiario;
* IBAN da usare per il riversamento.

La fase di attivazione è obbligatoria per i PSP.

Il Nodo verifica lo stato della posizione:

* se è in corso un'altra sessione di pagamento il Nodo risponde con il faultCode _PPT\_PAGAMENTO\_IN\_CORSO_**;**
* se è già stata pagata il Nodo risponde con il faultCode _PPT\_PAGAMENTO\_DUPLICATO_.

Il PSP può avviare un processo di retry in caso di mancata ricezione della risposta dal Nodo, a tal proposito si fa presente che per questa chiamata può essere usata una chiave di [idempotenza](best-practice.md#title-text-2).

## Fase di inoltro del pagamento

![](../../.gitbook/assets/pspNotifyPayment.png)

I dettagli dei pagamenti eseguiti sui touchpoints di PagoPA S.p.A. vengono inoltrati al PSP tramite la [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment).

In questa fase vengono inviate le informazioni necessarie per poter procedere con invio dell'esito del pagamento e all'eventuale successivo riversamento, in particolare:

* i _paymentToken_ inclusi nella transazione di pagamento;
* gli identificativi della transazione forniti dal PSP in fase di pagamento;
* per ogni versamento:
  * importo parziale;
  * codice fiscale dell’EC beneficiario;
  * IBAN da usare per il riversamento.

Se il PSP invia un KO nella response il processo di pagamento termina e deve essere effettuato uno storno, nel caso il PSP inviasse comunque una [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome) con _outcome_ OK tale esito verrebbe rifiutato dal nodo.

Se il PSP invia un OK nella response deve inviare un _outcome_ OK nella [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome), nel caso in cui venisse inviato un KO il Nodo risponderà con un faultBean:

* faultCode _PPT\_SEMANTICA_
* faultString _Errore semantico_
* description _Esito discorde_

## Fase di invio dell'esito del pagamento

![](../../.gitbook/assets/image.png)

Il PSP è tenuto a fornire l'esito del pagamento **entro 2sec** con la [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome), sia in caso di pagamento effettuato con successo (outcome = OK), sia in caso di pagamento non effettuato (outcome = KO), l’effetto dell’invio dell’esito del pagamento è quello di “sbloccare” la posizione debitoria sulla piattaforma:

* outcome = OK → posizione debitoria “chiusa”;
* outcome = KO → posizione debitoria nuovamente “aperta”.

Per agevolare l’integrazione dei diversi sistemi di incasso la sessione di pagamento ha una durata limitata ([#title-text](best-practice.md#title-text "mention")), alla scadenza di tale tempo il pagamento si considererà non avvenuto.

Si osservi che è compito del PSP fare il possibile per notificare alla piattaforma l’esito del pagamento entro la scadenza del _token_. In particolare si hanno benefici sia per l’utente finale che per l’EC:

* in caso di esito negativo l’utente finale potrà avviare subito una nuova sessione di pagamento;
* in caso di esito positivo si eliminano le possibilità di pagamento doppio.

Il PSP ha quindi l’obbligo, in caso di mancato recapito dell’esito, di avviare un processo di retry, a tal proposito si fa presente che per questa chiamata può essere usata una chiave di [idempotenza](best-practice.md#title-text-2).

Una volta ricevuta la chiamata il Nodo verifica se esiste il token ricevuto in _request_, se non viene trovato il Nodo risponderà con il faultCode _PPT\_TOKEN\_SCONOSCIUTO_.

Se non viene usata una chiave di idempotenza ed è già presente un outcome per il pagamento il Nodo risponde con il faultCode _PPT\_ESITO\_GIA\_ACQUISITO_ e nella _description_ del faultBean vengono inseriti i dati precedentemente inviati in formato JSON.

Se la posizione è già stata pagata il Nodo restituisce il faultCode _PPT\_PAGAMENTO\_DUPLICATO, s_e, invece, non si trova alcun posizione di pagamento attivata il Nodo restituisce il faultCode _PPT\_PAGAMENTO\_SCONOSCIUTO_.

Il Nodo verifica lo stato del pagamento per capire se il token sia ancora in corso di validità o meno, nel caso sia scaduto il Nodo risponderà con il faultCode _PPT\_TOKEN\_SCADUTO_.

Al termine dell’operazione il PSP, in linea con le norme vigenti, consegna un’attestazione di pagamento la quale dovrà contenere (in aggiunta a quanto previsto dalle normative) l’identificativo della sessione di pagamento ottenuto durante le operazioni di pagamento (_paymentToken_).
