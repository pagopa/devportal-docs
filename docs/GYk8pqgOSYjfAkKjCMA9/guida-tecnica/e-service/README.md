# E-service

Gli e-service sono costituiti da due parti:&#x20;

* &#x20;una **generale,** che include le informazioni essenziali sul funzionamento dell'e-service
* &#x20;una **versionata**, gestita tramite versionamento automatico da PDND Interoperabilità, contenente dati soggetti a cambiamenti ed evoluzioni.

## Informazioni essenziali

Nella parte generale vengono richiesti:

* **Nome:** esposto all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità (leggere la [guida alle buone pratiche](https://italia.github.io/pdnd-guida-nomenclatura-eservice/));
* **Descrizione:** esposto all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità (leggere la [guida alle buone pratiche](https://italia.github.io/pdnd-guida-nomenclatura-eservice/));
* **Tecnologia:** con cui è sviluppata l'API con cui si intende erogare il servizio, se REST o SOAP.

{% hint style="info" %}
Al fine di assicurare la conformità delle API pubblicate agli standard del Modello di Interoperabilità Tecnica per la Pubblica Amministrazione Italiana, è stato creato uno strumento di verifica del file OpenAPI (quindi per gli e-service che utilizzano tecnologia REST).

È possibile trovare l'API checker a questo link: [https://italia.github.io/api-oas-checker/](https://italia.github.io/api-oas-checker/) e prima di usare lo strumento è consigliato leggere le [Guide per l’utilizzo](https://github.com/italia/api-oas-checker-rules).
{% endhint %}

* **Modalità**: la modalità con cui l'e-service gestisce i dati, li **eroga** o li **riceve**. Se li eroga, significa che tutti gli endpoint dell'API esposta erogano dati; se li riceve, che tutti gli endpoint ricevono dati. Non è possibile avere endpoint di lettura e scrittura esposti in un unico e-service;
* **Analisi del rischio**: solamente se la modalità indicata è "ricezione". In quel caso, l'erogatore deve indicare i casi d'uso per i quali intende raccogliere dati dai fruitori e compilare il questionario. È la parte amministrativa dell'accesso alla fruizione di un e-service. Realizzato sulla base delle misure minime indicate nelle [_Linee guida AgID_](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto_allegati/213481831510O__O20211210_LG+Infrastruttura+Interoperabilit%26%23224%3B+PDND_v1.pdf), su invito del Garante, è un questionario per lo più contenente domande relative alla privacy e ai dati cui intende accedere un fruitore. Una nuova analisi del rischio andrà compilata per ogni finalità di accesso ai dati detenuti dall'erogatore.&#x20;

Per garantire la robustezza e la continuità del servizio nel tempo, i valori impostati in **tecnologia** e **modalità** una volta pubblicata la prima versione sul catalogo degli e-service, saranno modificabili solo attraverso la creazione di una nuova versione dell'e-service.

## Versione di e-service

Nella parte versionata vengono richiesti:

* **File di specifica dell'API per questa versione dell'e-service**: dovrà essere caricato un file OpenAPI per i servizi REST, oppure un file WSDL per i servizi SOAP, come indicato all'interno del perimetro di sicurezza del ModI. Il file contiene la specifica tecnica dell'API esposta dall'erogatore in questa versione dell'e-service.
* **Documentazione tecnica aggiuntiva**: opzionalmente, l'erogatore può caricare ulteriore documentazione a supporto della specifica API, come ad esempio un manuale d'uso, degli esempi, etc.
* **Changelog:** una breve descrizione testuale che evidenzia i cambiamenti della versione corrente rispetto alle versioni precedenti.
* **Attributi:** elenco di [requisiti di accesso](../attributi/#come-funzionano) che il fruitore deve possedere per potersi vedere attivata la richiesta di fruizione e accedere al servizio dell'erogatore;
* **Policy di attivazione delle richieste di fruizione:** di default, tutte le richieste di fruizione presentate dai fruitori vengono attivate automaticamente, se questi possiedono tutti i requisiti di accesso richiesti per il servizio. L'erogatore può scegliere di attivarle manualmente anche in questo caso.
* **Soglie delle chiamate API**: si rimanda alla descrizione del meccanismo della [stima di carico](./#gestire-il-carico-infrastrutturale-di-una-versione-di-e-service);
* **Durata della validità del voucher:** in quanto tempo scade il voucher rilasciato da PDND Interoperabilità valido per accedere a questo servizio;
* **Parametro audience&#x20;**_**(aud)**_**:** un claim standard che rappresenta il destinatario della richiesta. Può essere una URL o un identificativo univoco. L'erogatore riceverà questo valore all'interno del voucher rilasciato da PDND Interoperabilità al fruitore.

Per garantire la robustezza e la continuità del servizio nel tempo, il **file di specifica dell'API** e il **parametro audience** una volta pubblicata la prima versione sul catalogo degli e-service, saranno modificabili solo attraverso la creazione di una nuova versione dell'e-service. Inoltre, sarà possibile solo aggiungere **nuovi attributi** senza aggiornare la versione dell'e-servic&#x65;**,** ma non modificare quelli attuali.

È sempre possibile pubblicare nuove versioni dell'e-service.
