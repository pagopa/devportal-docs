# E-service

Gli e-service sono costituiti da due parti:&#x20;

* &#x20;una generale, di **informazioni generali**, che include le informazioni essenziali sul funzionamento dell'e-service;
* &#x20;una **versionata**, gestita tramite versionamento automatico progressivo; contiene dati soggetti a cambiamenti ed evoluzioni nel tempo.

## Informazioni essenziali

Nella parte generale vengono richiesti:

* **nome** e **breve descrizione:** esposti all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità;
* **tecnologia:** con cui è sviluppata l'API con cui si intende erogare il servizio, se REST o SOAP;
* **modalità**: la modalità con cui l'e-service gestisce i dati, se li **eroga** o li **riceve**. Se li eroga, significa che tutti gli endpoint dell'API esposta erogano dati; se li riceve, che tutti gli endpoint ricevono dati. Non è possibile avere endpoint di lettura e scrittura esposti in un unico e-service;
* **analisi del rischio**: solamente se la modalità indicata è "ricezione". In quel caso, l'erogatore deve indicare i casi d'uso per i quali intende raccogliere dati dai fruitori e compilare il questionario. Maggiori informazioni nella [sezione dedicata](../finalita/lanalisi-del-rischio.md);
* **autorizzazione al conferimento di deleghe**: indica se le Pubbliche Amministrazioni fruitrici possono delegare un'altra Pubblica Amministrazione a completare gli adempimenti amministrativi (richiesta di fruizione, finalità) per conto loro. Maggiori dettagli nella [sezione dedicata](../deleghe/);
* **presenza del servizio di notifica di variazioni dei dati (Signal Hub)**: indica ai fruitori se questo e-service è integrato con Signal Hub e offre quindi ai fruitori la possibilità di rimanere aggiornati sulla variazione di dati di loro interesse all'interno della base dati dell'erogatore. Se l'opzione è disabilitata, sarà inibita la possibilità di scrivere e leggere notifiche sul Signal Hub. Maggiori dettagli nella [guida dedicata](https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-signal-hub).

Per garantire la robustezza e la continuità del servizio nel tempo, i valori impostati in **tecnologia** e **modalità** non sono modificabili una volta pubblicata la prima versione dell'e-service. È comunque possibile creare nuovi e-service ed archiviare quelli obsoleti.

## Informazioni di versione

Nella parte versionata vengono richiesti:

* **file di specifica dell'API per questa versione dell'e-service**: dovrà essere caricato un file OpenAPI per i servizi REST, oppure un file WSDL per i servizi SOAP, come indicato all'interno del perimetro di sicurezza del ModI. Il file contiene la specifica tecnica dell'API esposta dall'erogatore in questa versione dell'e-service;
* **documentazione tecnica aggiuntiva**: l'erogatore può caricare documentazione a supporto della specifica API, come ad esempio un manuale d'uso, degli esempi, ecc. È sempre consigliato farlo;
* **changelog** ("descrizione della versione")**:** una breve descrizione testuale che evidenzia i cambiamenti della versione corrente rispetto alle versioni precedenti;
* **attributi:** elenco di requisiti di accesso che il fruitore deve possedere per potersi vedere attivata la richiesta di fruizione e accedere al servizio dell'erogatore. Maggiori informazioni nella [sezione dedicata](../attributi/);
* **policy di attivazione delle richieste di fruizione:** di default, tutte le richieste di fruizione presentate dai fruitori vengono attivate automaticamente, se questi possiedono tutti i requisiti di accesso richiesti per il servizio. L'erogatore può scegliere di attivarle manualmente anche in questo caso;
* **soglie delle chiamate API**: il carico, espresso in chiamate API/giorno, che la propria infrastruttura è in grado di sopportare. Per maggiori dettagli, si rimanda alla [sezione dedicata](soglie-e-stime-di-carico.md), che descrive in dettaglio il meccanismo della stima di carico;
* **durata della validità del voucher:** dopo quanto tempo scade il voucher rilasciato da PDND Interoperabilità valido per accedere a questo servizio;
* **parametro audience&#x20;**_**(aud)**_**:** un claim standard che rappresenta la risorsa per la quale si autorizza la richiesta. Può essere una URL o un identificativo univoco. L'erogatore riceverà questo valore all'interno del voucher rilasciato al fruitore da PDND Interoperabilità.

Tutti i parametri sono aggiornabili nel tempo anche senza creare una nuova versione di e-service, ad eccezione di tre. Il **file di specifica dell'API** e il parametro **audience** non possono essere mai modificati. Gli **attributi** possono essere modificati senza creare una nuova versione solamente se ampliano la platea dei possibili fruitori.

Maggiori informazioni sulla gestione degli aggiornamenti nel [tutorial dedicato](../../tutorial-back-office/come-aggiornare-un-e-service.md).
