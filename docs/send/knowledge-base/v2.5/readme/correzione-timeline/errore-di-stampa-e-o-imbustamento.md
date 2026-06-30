# Errore di stampa e/o imbustamento

Questo tipo di errore si verifica quando, durante la stampa o l’imbustamento, viene rilevata una non conformità, la quale non viene correttamente scartata dallo stampatore negli appositi controlli, né rifiutata in fase di accettazione dei flussi da parte del recapitista: a titolo di esempio il ​recapito di una busta con indirizzo non leggibile nell’apposita finestrella o assenza dello spazio per il verbale di indagine in loco.

Le principali casistiche sono le seguenti:

* **Difformità dei supporti fisici:** uso di buste prive del layout normativo previsto, per esempio senza il riquadro per le indagini in loco.&#x20;
* **Difetti di leggibilità:** indirizzo del destinatario non visibile o parzialmente coperto nella finestrella del plico.&#x20;

## Casi di errore oggetto di correzione

Nel caso di indirizzo non leggibile l'esito dell'invio della raccomandata sarà non consegnata per indirizzo insufficiente.

Nel caso di difformità dei supporti fisici verranno comunque considerate valide le raccomandate consegnate in quanto l'utente ha tutte le informazioni contenute nella busta per accedere alla notifica.

In tutti i casi abbiamo una irreperibilità che può essere decretata al primo invio o al secondo invio.

## Caso di errore nel 1° invio

La notifica si è perfezionata per irreperibilità al primo invio (il secondo invio non è stato effettuato per mancanza di un indirizzo differente dal primo sull'indagine dell'addetto al recapito o recuperato dai registri pubblici).

In questo caso:

* vengono invalidati tutti gli eventi dell'invio cartaceo e quelli successivi di perfezionamento.
* sono acquisiti i nuovi esiti e la notifica riprende il suo iter. Per esempio potrebbe esserci una compiuta giacenza e un perfezionamento per decorrenza termini.

## Caso di errore nel 2° invio

La notifica si è perfezionata per irreperibilità al secondo invio (anche il primo invio ha dato un esito di irreperibilità).

I casi di correzione possono essere:

* **​sul 1° invio** che può ​terminare nuovamente con una mancata consegna ed eventualmente portare ad un 2° invio (se viene recuperato un indirizzo differente dal 1° invio), oppure si conclude con una consegna, o una restituzione al mittente.
* ​**sul 2° invio** che può ​terminare nuovamente con una mancata consegna e il workflow termina con una irreperibilità, oppure si conclude con una consegna, o una restituzione al mittente.

## Eventi invalidati

Per l'errore di stampa e/o imbustamento tutti gli eventi che riguardano l'invio della raccomandata e i successivi conseguenti l'esito sono invalidati.

Eventi relativi all'invio analogico:

* `PREPARE_ANALOG_DOMICILE`
* `PREPARE_ANALOG_DOMICILE_FAILURE`
* `SEND_ANALOG_DOMICILE`
* `SEND_ANALOG_PROGRESS`
* `SEND_ANALOG_FEEDBACK`
* `ANALOG_SUCCESS_WORKFLOW`
* `ANALOG_FAILURE_WORKFLOW`

Eventi successivi all'invio analogico:

* `SCHEDULE_REFINEMENT`
* `REFINEMENT`
* `COMPLETELY_UNREACHABLE_CREATION_REQUEST`
* `COMPLETELY_UNREACHABLE`
* `ANALOG_WORKFLOW_RECIPIENT_DECEASED`
