# Creazione di un E-service: Informazioni necessarie

Gli e-service sono costituiti da due parti: una **parte fissa,** costituita delle informazioni di massima che non possono cambiare nel tempo e una parte **variabile**, che viene versionata automaticamente da PDND Interoperabilità e contiene quelle informazioni che invece possono cambiare e evolvere. La parte fissa può essere modificata solo fintanto che la prima versione dell'e-service non è stata pubblicata.

Nella parte fissa vengono richiesti:

* **nome:** esposto all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità (leggere la [guida alle buone pratiche](https://italia.github.io/pdnd-guida-nomenclatura-eservice/));
* **descrizione:** esposto all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità (leggere la [guida alle buone pratiche](https://italia.github.io/pdnd-guida-nomenclatura-eservice/));
* **tecnologia:** con cui è sviluppata l'API con cui si intende erogare il servizio, se REST o SOAP;

{% hint style="info" %}
Al fine di assicurare la conformità delle API pubblicate agli standard del Modello di Interoperabilità Tecnica per la Pubblica Amministrazione Italiana, è stato creato uno strumento di verifica del file OpenAPI (quindi per gli e-service che utilizzano tecnologia REST).

È possibile trovare l'API checker a questo link: [https://italia.github.io/api-oas-checker/](https://italia.github.io/api-oas-checker/) e prima di usare lo strumento è consigliato leggere le [Guide per l’utilizzo](https://github.com/italia/api-oas-checker-rules).
{% endhint %}

* **Mode**: eroga o riceve dati ;
* **Descrizione della versione corrente:** Poiché gli e-service sono organizzati in versioni, è necessaria una descrizione che copra sia la bozza iniziale che le future iterazioni. Questa descrizione deve evidenziare i cambiamenti rispetto alle versioni precedenti.
* **Parametro audience&#x20;**_**(aud)**_**:** i fruitori dovranno inserire questo parametro all'interno del token per le richieste che effettueranno verso questa versione dell'e-service. È discrezione dell'erogatore stabilire la policy relativa alle audience: è possibile utilizzare la stessa audience per più versioni, audience diverse per ogni versione, etc.;
* <mark style="background-color:blue;">**Durata della validità del voucher:**</mark> <mark style="background-color:blue;"></mark><mark style="background-color:blue;">dopo quanto tempo scade il voucher rilasciato da PDND Interoperabilità valido per accedere a questo servizio;</mark>
* <mark style="background-color:blue;">**Analisi del rischio**</mark>

<table><thead><tr><th width="158">Nome campo</th><th width="161">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Il nome dell'e-service. Lunghezza tra i 5 e i 60 caratteri, spazi inclusi. Non deve essere uguale a quello di nessun altro e-service erogato dallo stesso ente.</td></tr><tr><td>description</td><td>String</td><td>La descrizione dell'e-service. Lunghezza tra i 10 e i 250 caratteri, spazi inclusi.</td></tr><tr><td>technology</td><td>REST |  SOAP</td><td>La tecnologia dell'API che l'aderente eroga. Il file di interfaccia (descriptor.interface) dovrà avere estensione corrispondente. Ad es. se inserisco REST, il file di interfaccia atteso sarà .yaml o .json</td></tr><tr><td>mode</td><td>DELIVER | RECEIVE</td><td>La modalità dell'e-service, se erogazione diretta (DELIVER) o erogazione inversa (RECEIVE). In caso di erogazione inversa, è necessario che sia presente almeno un'analisi del rischio (riskAnalysis); in caso di erogazione diretta, non deve essercene nessuna.</td></tr><tr><td>descriptor</td><td>Descriptor</td><td>Il descrittore, ossia il contenuto della versione dell'e-service. I campi sono dettagliati sotto.</td></tr><tr><td>riskAnalysis</td><td>Array&#x3C;RiskAnalysis></td><td>Le analisi del rischio necessarie per gli e-service in erogazione inversa, come descritto nel parametro <em>mode</em>. Il valore di default è array vuoto (<code>[]</code>).</td></tr></tbody></table>

Nella parte variabile vengono richiesti:

* **Soglia delle chiamate API**: si rimanda alla descrizione del meccanismo della [stima di carico](creazione-di-un-e-service-informazioni-necessarie.md#gestire-il-carico-infrastrutturale-di-una-versione-di-e-service);
* **Policy:** è la policy relativa alle richieste di fruizione. Se è attiva l'erogatore ha il diritto di attivare manualmente la richiesta di fruizione, anche se il fruitore possiede già tutti gli attributi necessari all'attivazione della richiesta di fruizione. Se non è attiva l'attivazione è automatica. Questo meccanismo regola solo il caso in cui il fruitore possegga tutti gli attributi necessari nel momento di inoltro della richiesta di fruizione, altrimenti servirà sempre un'attivazione manuale da parte dell'erogatore;
* **Attributi:** elenco degli [attributi](../attributi/#come-funzionano) che deve avere l'ente fruitore per poter inoltrare la richiesta di fruizione;
* **File di specifica dell'API per questa versione dell'e-service**: dovrà essere caricato un file OpenAPI per i servizi REST e WSDL per i servizi SOAP, come indicato all'interno del perimetro di sicurezza del ModI;
* **Documentazione tecnica aggiuntiva** (manuale d'uso, esempi, etc.): opzionale;

È possibile modificare e aggiornare la documentazione dell'e-service anche dopo la sua pubblicazione.&#x20;

**La differenza** del processo **tra l'e-service che eroga dati e quello che ne riceve** è la creazione di una o più **finalità** con relativa analisi del rischio che il fruitore si troverà precompilata quando andrà a fruire dell'e-service.

L'erogatore deve indicare il caso d'uso per cui intende raccogliere i dati e compilare il questionario.
