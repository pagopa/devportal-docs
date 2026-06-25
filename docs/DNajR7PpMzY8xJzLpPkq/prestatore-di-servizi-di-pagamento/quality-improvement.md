# Quality Improvement

PagoPA S.p.A. ha definito un processo strutturato di Quality Improvement con l’obiettivo di stabilizzare la piattaforma pagoPA, di eliminare le inefficienze e di migliorare ulteriormente i servizi offerti. PagoPA S.p.A. ha deciso di riconoscere uno sconto sulle fatture trimestrali dei PSP che rispettano i KPI oggetto di monitoraggio (8 KPI).

Requisiti per l'ottenimento degli sconti da parte dei PSP:

* per il 2024, se vengono rispettati tutti gli 8 KPI per ogni mese del trimestre di riferimento, al PSP verrà riconosciuto uno sconto del 4% sulla fattura trimestrale; se vengono rispettati 6 o 7 KPI su 8 per ogni mese del trimestre di riferimento, al PSP verrà riconosciuto un sconto del 3% sulla fattura trimestrale;
* per il 2025 e il 2026, se vengono rispettati tutti gli 8 KPI per ogni mese del trimestre di riferimento, al PSP verrà riconosciuto un sconto del 4% sulla fattura trimestrale.

L’ avvio del programma di monitoraggio dei KPI è previsto per luglio 2024 e avverrà su base mensile, mentre  il calcolo degli sconti avverrà su base trimestrale.

Le metriche definite per l’analisi riguardano due diversi ambiti di monitoraggio:

* il processo di rendicontazione verso gli EC;
* il livello dei servizi dei metodi dei PSP.

Per ogni ambito, sulla base delle specifiche tecniche, sono state individuate delle metriche che sono esposte nei successivi paragrafi.

### Flussi di Rendicontazione inviati in ritardo \[LFDR]

Definiamo:

* flusso di rendicontazione in orario: primo invio entro D+2 o sovrascritto entro D+4;&#x20;
* flusso di rendicontazione in ritardo v1: primo invio tra D+2 e D+4;
* flusso di rendicontazione in ritardo v2: re-invio invio tra D+4 e D+10. &#x20;

Per stabilire se un pagamento ha il relativo flusso di rendicontazione in ritardo si valuta in quale giorno è stato inviato il suddetto flusso, la verifica viene fatta confrontando i dati del processo di pagamento con quelli presenti nel flusso di rendicontazione.

Soglia massima consentita: 1% sul totale dei pagamenti nel mese.

Riferimento specifiche: [rendicontazione-e-cashflow.md](../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/rendicontazione-e-cashflow.md "mention").

### Flussi di Rendicontazione non rendicontati \[NRFDR]

Definiamo:

* flusso di rendicontazione mai inviato: primo invio oltre D+10;
* flusso di rendicontazione inviato ma sovrascritto oltre i D+10;
* flusso di rendicontazione non presente nel momento della valutazione del KPI.

Il calcolo viene eseguito andando a sommare i casi di flusso di rendicontazione arrivati oltre D+10 (seguendo la verifica come sopra definita) con i casi di flusso di rendicontazione non presenti nel giorno della valutazione (10 del mese successivo).

Soglia massima consentita: 1% sul totale dei pagamenti nel mese.

Riferimento specifiche: [rendicontazione-e-cashflow.md](../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/rendicontazione-e-cashflow.md "mention").

### Flussi di Rendicontazione con numero di pagamenti errato \[WPNFDR]

Il numero di pagamenti presenti nel flusso di rendicontazione deve coincidere con il numero di pagamenti atteso, ossia il totale dei pagamenti effettuati nella giornata di riferimento del flusso di rendicontazione (D), se il flusso di rendicontazione contiene un numero di pagamenti diverso (inferiore o maggiore) viene considerato errato.

Il calcolo viene effettuato considerando, per ogni giornata di pagamento e per ogni EC, quanti pagamenti sono attesi e confrontato tale valore con il numero di pagamenti presenti nel flusso di rendicontazione.

Soglia massima consentita: 1% sul totale dei pagamenti nel mese.

Riferimento specifiche: [rendicontazione-e-cashflow.md](../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/rendicontazione-e-cashflow.md "mention").

### Flussi di Rendicontazione con importo errato \[WAFDR]

Gli importi delle singole transazioni trasmesse dal flusso di rendicontazione devono coincidere a due decimali con quelli dei pagamenti gestiti dal Nodo. Se il flusso di rendicontazione contiene un importo errato (anche solo per una singola transazione) tale flusso di rendicontazione viene considerato errato.

Il calcolo viene effettuato confrontando l’importo di ciascun pagamento presente negli archivi del Nodo con il relativo importo presente nel flusso di rendicontazione, la soddisfazione del KPI avviene nel momento in cui i due valori coincidono.

Soglia massima consentita: 1% sul totale dei pagamenti nel mese.

Riferimento specifiche: [rendicontazione-e-cashflow.md](../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/rendicontazione-e-cashflow.md "mention").

### Tempo massimo risposta a metodo pspNotifyPayment​ \[TPNP]

Non è consentito l’invio di una response a fronte di una [pspNotifyPaymentV1/V2](../appendici/primitive.md#pspnotifypayment) oltre il tempo massimo previsto da specifiche.

Soglia massima consentita: 2% su base mensile.

Riferimento specifiche: [livelli-di-servizio-psp.md](../appendici/indicatori-di-qualita-per-i-soggetti-aderenti/livelli-di-servizio-psp.md "mention") indicatore _TPNP_.

### Tempo massimo invio sendPaymentOutcome a fronte di pspNotifyPayment \[TNSPO]

Non è consentito l’invio di una [sendPaymentOutcomeV1/V2](../appendici/primitive.md#sendpaymentoutcome), a fronte della conclusione della gestione del metodo [pspNotifyPaymentV1/V2](../appendici/primitive.md#pspnotifypayment) con esito positivo, oltre il tempo massimo previsto da specifiche.

Soglia massima consentita: 2% su base mensile.

Riferimento specifiche: [livelli-di-servizio-psp.md](../appendici/indicatori-di-qualita-per-i-soggetti-aderenti/livelli-di-servizio-psp.md "mention") indicatore _TNSPO_.

### Invio sendPaymentOutcome a token scaduto \[LSPO]

Non è consentito l’invio di [sendPaymentOutcomeV1/V2](../appendici/primitive.md#sendpaymentoutcome) a token scaduto, ossia oltre il  tempo massimo di sessione.

Soglia massima consentita: 2% su base mensile.

Riferimento specifiche: [#title-text](modalita-di-integrazione/best-practice.md#title-text "mention").

### Nessun invio della sendPaymentOutcome \[DASPO]

E’ obbligatorio inviare una [sendPaymentOutcomeV1/V2](../appendici/primitive.md#sendpaymentoutcome) a  fronte di una attivazione di pagamento, a prescindere dall'esito del pagamento.

Soglia massima consentita: 2% su base mensile.

Riferimento specifiche: [#title-text](modalita-di-integrazione/best-practice.md#title-text "mention").
