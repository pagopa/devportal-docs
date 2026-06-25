# Bollo auto

L’esecuzione del pagamento del bollo auto è un processo che rappresenta uno dei casi d'uso di pagamento spontaneo attivato dal touchpoint del PSP.

Solitamente l'utente dopo aver inserito i dati del proprio mezzo, tipologia e targa, che saranno inviati ad ACI per la creazione della posizione debitoria, potrà procedere con il pagamento.

![](../../.gitbook/assets/nuovoModello4\_demand\_ENG.png)

* La [demandPaymentNotice](../../appendici/primitive.md#demandpaymentnotice) è utilizzabile dai PSP per inviare i dati del servizio specifico inseriti dall'utente, che nel caso attuale sono essenzialmente il numero di targa e la tipologia del veicolo;
* la [paDemandPaymentNotice](../../appendici/primitive.md#pademandpaymentnotice) è utilizzata per richiedere a ACI la creazione della posizione debitoria in base al numero di targa e la tipologia del veicolo, ACI invierà in risposta il numero avviso e i dati dell'Ente Beneficiario del pagamento, infatti, verificando la residenza del proprietario del mezzo è in grado di determinare la Regione destinataria del pagamento;
