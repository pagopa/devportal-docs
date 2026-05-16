# Come aggiornare un e-service

Il modo di aggiornare l'e-service cambia in funzione del campo che deve essere aggiornato. La modifica di alcuni campi (come ad esempio il file di interfaccia API o il parametro dell'_audience_) sono considerate modifiche potenzialmente _breaking_, ossia che causerebbero rotture nelle integrazioni dei fruitori. Per modificare uno di questi campi, bisogna creare e pubblicare una nuova versione di e-service.

In caso contrario è possibile aggiornare immediatamente il campo dell'e-service, senza ulteriori oneri.&#x20;

### Step 1: Individuare il campo da modificare

#### Campi modificabili senza creare una nuova versione

* nome dell'e-service
* descrizione dell'e-service
* autorizzazione al conferimento di deleghe
* presenza del servizio di notifica di variazioni dei dati (Signal Hub)
* documentazione tecnica aggiuntiva
* changelog (descrizione della versione)
* policy di attivazione delle richieste di fruizione
* soglie delle chiamate API
* durata della validità del voucher

#### Campi modificabili solo creando una nuova versione

* file interfaccia API
* audience
* requisiti di accesso (attributi)\*

\*se gli attributi vengono estesi, è possibile modificarli anche senza creare una nuova versione. Ad esempio, se prima il requisito era solo _Comuni e loro Consorzi e Associazioni_, e oggi diventa _Comuni e loro Consorzi e Associazioni_ _oppure Regioni_, la platea viene semplicemente estesa, ed è possibile fare questa modifica senza creare una nuova versione di e-service.

#### Campi mai modificabili

* tecnologia (REST o SOAP)
* modalità (eroga o riceve dati)

Questi campi non sono mai aggiornabili. È necessario creare un nuovo e-service.

### Step 2: Operare la modifica

Se non necessita di una nuova versione, si veda il tutorial [Come aggiornare un e-service senza pubblicare una nuova versione](come-aggiornare-un-e-service-senza-pubblicare-una-nuova-versione.md). Se si necessita di una nuova versione, si veda il tutorial [Come aggiornare un e-service pubblicando una nuova versione](come-aggiornare-un-e-service-pubblicando-una-nuova-versione.md).

Maggiori informazioni anche nel [webinar dedicato](https://developer.pagopa.it/webinars/e-service-erogazione-inversa) (dal minuto 8).

***

Pagina successiva [→ Come aggiornare un e-service senza pubblicare una nuova versione](come-aggiornare-un-e-service-senza-pubblicare-una-nuova-versione.md)
