# Perfezionamento della notifica

### Perfezionamento per Mittente della notifica&#x20;

A seguito dell'inserimento di una richiesta di notifica da parte del Mittente, la Piattaforma effettua dei controlli sui dati inseriti, sia in modalità sincrona che asincrona. Superati di tali controlli, verrà generato un codice **IUN** identificativo della Notifica: in questa momento scatta il Perfezionamento per Mittente e viene generata l'**Attestazione opponibile a terzi: notifica presa in carico.**\
In presenza di almeno un domicilio digitale del Destinatario, la Piattaforma avvierà il **Workflow digitale;** in assenza di domicilio digitale invece avvierà il **Workflow analogico.**

### Perfezionamento per Destinatario della notifica nel Workflow digitale

Il Perfezionamento per Destinatario avviene nelle seguenti modalità ed in modo indipendente per ogni destinatario:

* la notifica si perfeziona per il singolo Destinatario dopo 7 giorni dalla consegna dell’AAR attraverso PEC o SERCQ con l'evento **REFINEMENT** ed il passaggio allo stato **EFFECTIVE\_DATE.**
* la notifica si perfeziona per il singolo Destinatario dopo 15 giorni dalla generazione dell’AMR, che avviene in seguito al fallimento della consegna digitale, con l'evento **REFINEMENT** ed il passaggio allo stato **EFFECTIVE\_DATE.**

Quando uno dei destinatari accede alla notifica, scatena l'evento **NOTIFICATION\_VIEWED** che rappresenta unicamente la presa visione della notifica da parte del singolo destinatario. \
Se la Presa Visione si verifica prima dell'evento **EFFECTIVE\_DATE**, si scatena il Perfezionamento per presa visione per il solo Destinatario che visualizza la notifica. \
Nei casi di multi-destinatario il Perfezionamento avviene in modo indipendente per ogni destinatario della notifica; nel caso in cui uno dei destinatari visualizzasse la notifica, questa passerebbe in status **VIEWED** tuttavia questa condizione non influisce sul Perfezionamento degli altri destinatari della notifica.

### Perfezionamento per Destinatario della notifica nel Workflow analogico

Il Perfezionamento per Destinatario avviene nelle seguenti modalità ed in modo indipendente per ogni destinatario:

* la notifica si perfeziona per il singolo Destinatario dopo 10 giorni dalla consegna dell’AAR in modalità cartacea, con l'evento **REFINEMENT** ed il passaggio allo stato **EFFECTIVE\_DATE.**
* la notifica si perfeziona per il singolo Destinatario dopo 10 giorni dalla mancata consegna dell’AAR in modalità cartacea, con l'evento **REFINEMENT** ed il passaggio allo stato **EFFECTIVE\_DATE.**

Quando uno dei destinatari accede alla notifica, scatena l'evento **NOTIFICATION\_VIEWED** che rappresenta unicamente la presa visione della notifica da parte del singolo destinatario. \
Se la Presa Visione si verifica prima dell'evento **EFFECTIVE\_DATE**, si scatena il Perfezionamento per presa visione per il solo Destinatario che visualizza la notifica. \
Nei casi di multi-destinatario il Perfezionamento avviene in modo indipendente per ogni destinatario della notifica; nel caso in cui uno dei destinatari visualizzasse la notifica, questa passerebbe in status **VIEWED** tuttavia questa condizione non influisce sul Perfezionamento degli altri destinatari della notifica.

### Perfezionamento della notifica nei casi di multi-destinatario

Nei casi di notifica con multi-destinatario, il Perfezionamento avviene in modo indipendente per ogni destinatario, seguendo le modalità descritte in precedenza. \
Si evidenzia che il Perfezionamento è una condizione del singolo destinatario e non è applicabile alla notifica, per la quale Piattaforma esprime una descrizione sintetica di stato; se ad esempio la notifica si trova in stato **VIEWED** questo significa che almeno uno dei destinatari ne ha preso visione, ma non comporta in automatico nessun tipo di Perfezionamento, il quale dovrà essere definito attraverso l'analisi degli eventi di Timeline per ciascun destinatario.

### Sequenzialità degli eventi della Timeline

Il processo di notifica con canale analogico coinvolge il postalizzatore, il quale restituisce gli eventi a Piattaforma Notifiche nella sequenza temporale in cui questi avvengono effettivamente. Anche nei casi in cui questi eventi dovessero essere recepiti con ritardo dalla Piattaforma, è comunque garantita la sequenzialità e la coerenza degli eventi, senza alcuna regressione.\
Se prendiamo ad esempio questa situazione:

1. **T1\[13/01/23]** Avvio della spedizione con canale analogico
2. **T2\[15/01/23]** Il postalizzatore consegna la raccomandata, ma non fornisce alla piattaforma informazioni sull’avvenuta consegna. (evento **DELIVERED** non ancora acclarato)
3. **T3\[28/01/23]** Il destinatario accede a Piattaforma e visualizza la notifica. In questa fase si scatena l’evento **NOTIFICATION\_VIEWED** e la notifica passa in stato **VIEWED**
4. **T4\[30/01/23]** Il postalizzatore comunica alla Piattaforma l’avvenuta consegna in data 15/01/23, il cui stato associato è **DELIVERED**

Gli eventi scatenati vengono **sempre** memorizzati nella sequenza in cui arrivano e sia gli stati che gli eventi di timeline si adeguano alle date di tali eventi; nell'esempio riportato, seppure l'evento **DELIVERED** venga acclarato in data 30/01/23, la notifica resta in stato **VIEWED** e **NON** viene riportata allo stato precedente **DELIVERED.**&#x20;
