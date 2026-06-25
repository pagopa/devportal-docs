# Servizi per Minori

Sarà a breve disponibile su IO la possibilità di indicare un Servizio come **abilitato ai minori**. In questo modo, un utente minorenne (14-17) potrà:

* visualizzare il servizio nella lista servizi
* trovare il servizio nella ricerca dei servizi
* ricevere messaggi da tale servizio o essere contattato dal servizio stesso

Onde tutelare i Cittadini di minore età, tutti i nuovi servizi e gli esistenti saranno di default abilitati ai soli Cittadini maggiorenni. Di conseguenza:

* i Cittadini minorenni non visualizzeranno i servizi destinati ai maggiorenni nella lista servizi
* i Cittadini minorenni non ritroveranno un servizio destinato ai maggiorenni nell’esito di una ricerca dei servizi
* i servizi destinati ai maggiorenni riceveranno un errore se provano a mandare un messaggio ad un Cittadino minorenne o se provano a contattare un Cittadino minorenne

Se ritieni che il tuo servizio possa essere rivolto anche ai Cittadini di minore età, dovrai provvedere ad identificarlo come tale.&#x20;

Sarà altresì possibile in qualsiasi momento richiedere la restrizione di un servizio ai solo Cittadini maggiorenni, se questo era stato precedentemente abilitato ai Cittadini minorenni. Nota che, in tal caso, i messaggi già inviati ai Cittadini minorenni nel periodo in cui il servizio era verso di essi abilitato rimarranno comunque accessibili e consultabili da parte loro.

### Tramite CMS dei servizi

* ti basta entrare nella pagina di dettaglio del tuo servizio, impostare la spunta su "Servizio abilitato ai minori" e richiedere la pubblicazione del servizio

### Tramite Developer portal

* non sarà possibile creare Servizi abilitati ai minori ne tantomeno abilitare (verso i minori) Servizi esistenti tramite il Developer portal

### Tramite API

* puoi richiedere la modifica del servizio attraverso il flag `suitable_for_minors` (le API programmatiche richiedono a loro volta, in seguito, la pubblicazione)

