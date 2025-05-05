# \[Bozza] Creazione di un E-service: Informazioni necessarie

Gli e-service sono costituiti da due parti:&#x20;

* &#x20;una **generale,** che include informazioni essenziali, alcune delle quali immutabili nel tempo.
* &#x20;una **versionata**, gestita tramite versionamento automatico da PDND Interoperabilità, contenente dati soggetti a cambiamenti  ed evoluzioni.

***

Nella parte generale vengono richiesti:

* **Nome:** esposto all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità (leggere la [guida alle buone pratiche](https://italia.github.io/pdnd-guida-nomenclatura-eservice/));
* **Descrizione:** esposto all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità (leggere la [guida alle buone pratiche](https://italia.github.io/pdnd-guida-nomenclatura-eservice/));
* **Tecnologia:** con cui è sviluppata l'API con cui si intende erogare il servizio, se REST o SOAP.

{% hint style="info" %}
Al fine di assicurare la conformità delle API pubblicate agli standard del Modello di Interoperabilità Tecnica per la Pubblica Amministrazione Italiana, è stato creato uno strumento di verifica del file OpenAPI (quindi per gli e-service che utilizzano tecnologia REST).

È possibile trovare l'API checker a questo link: [https://italia.github.io/api-oas-checker/](https://italia.github.io/api-oas-checker/) e prima di usare lo strumento è consigliato leggere le [Guide per l’utilizzo](https://github.com/italia/api-oas-checker-rules).
{% endhint %}

* **Modalità**: la modalità con cui l'e-service gestisce i dati, se li eroga ai fruitori o li riceve.
* **Analisi del rischio**: solamente se la modalità indicata è "ricezione". In quel caso, l'erogatore deve indicare i caso d'uso per i quali intende raccogliere dati dai fruitori e compilare il questionario.

Per garantire la robustezza e la continuità del servizio nel tempo, i valori impostati in tecnologia e modalità non saranno più modificabili una volta pubblicata a catalogo la prima versione dell'e-service.

Nella parte versionata vengono richiesti:

* **File di specifica dell'API per questa versione dell'e-service**: dovrà essere caricato un file OpenAPI per i servizi REST, oppure un file WSDL per i servizi SOAP, come indicato all'interno del perimetro di sicurezza del ModI. Il file contiene la specifica tecnica dell'API esposta dall'erogatore in questa versione dell'e-service.
* **Documentazione tecnica aggiuntiva**: opzionalmente, l'erogatore può caricare ulteriore documentazione a supporto della specifica API, come ad esempio un manuale d'uso, degli esempi, etc.
* **Descrizione della versione corrente:** una breve descrizione testuale che evidenzia i cambiamenti rispetto alle versioni precedenti.
* **Attributi:** elenco di [requisiti di accesso](../attributi/#come-funzionano) che il fruitore deve possedere per potersi vedere attivata la richiesta di fruizione e accedere al servizio dell'erogatore;
* **Policy di attivazione delle richieste di fruizione:** di default, tutte le richieste di fruizione presentate dai fruitori vengono attivate automaticamente, se questi possiedono tutti i requisiti di accesso richiesti per il servizio. L'erogatore può scegliere di attivarle manualmente anche in questo caso.
* **Soglia delle chiamate API**: si rimanda alla descrizione del meccanismo della [stima di carico](bozza-creazione-di-un-e-service-informazioni-necessarie.md#gestire-il-carico-infrastrutturale-di-una-versione-di-e-service);
* **Durata della validità del voucher:** in quanto tempo scade il voucher rilasciato da PDND Interoperabilità valido per accedere a questo servizio;
* **Parametro audience&#x20;**_**(aud)**_**:** un claim standard che rappresenta il destinatario della richiesta. Può essere una URL o un identificativo univoco. L'erogatore riceverà questo valore all'interno del voucher rilasciato da PDND Interoperabilità al fruitore.

Per garantire la robustezza e la continuità del servizio nel tempo, il file di specifica dell'API e il parametro audience non saranno più modificabili una volta pubblicata a catalogo questa versione dell'e-service. Inoltre, sarà possibile solo aggiungere nuovi attributi, ma non modificare quelli attuali.

È sempre possibile pubblicare nuove versioni dell'e-service, evolvendolo nel tempo.

