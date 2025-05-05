# Importazione di un E-service

### Caveat all'importazione

I caveat all'importazione sono indicati all'interno del cassetto laterale. Per ragioni tecniche, non è possibile fornire all'utente un'indicazione puntuale dell'errore registrato. Vengono quindi fornite tutte le indicazioni utili per il debugging.&#x20;

Nello specifico:

1. **attributi**: non è possibile portare gli attributi da un ambiente all'altro. Di conseguenza, l'utente dovrà riassegnare manualmente gli attributi nel nuovo ambiente;
2. **duplicazione dell'e-service**: se nell'ambiente di importazione c'è già un e-service con lo stesso nome per lo stesso ente, non sarà possibile importare l'e-service. Il nome dell'e-service può essere modificato all'interno dello .zip, come spiegato nel paragrafo seguente;
3. **struttura archivio**: per assicurare la consistenza del materiale caricato, all'interno dello .zip c'è un file di configurazione, che indica i file da caricare e la loro posizione, oltre ai campi necessari per l'e-service. Se uno o più campi non sono correttamente formattati, sono mancanti, o rimandano a file non disponibili, o se viceversa nello .zip ci saranno file estranei non mappati nel file di configurazione, non sarà possibile importare l'e-service;
4. **interfaccia API**: ricorda che le URL dei server che indichi all'interno del file di interfaccia API potrebbero essere diverse da un ambiente all'altro, in base a come il tuo ente gestisce la propria infrastruttura e il processo di collaudo.

### Cosa contiene il pacchetto .zip?

Potrebbe essere utile modificare manualmente il contenuto del file .zip da importare. Per farlo, presentiamo la struttura in dettaglio. Il pacchetto .zip contiene:

* _configuration.json_: il file descrive il contenuto dell'e-service e la posizione degli altri file contenuti all'interno dello .zip e la loro funzione. Il nome di questo file non deve essere modificato. Se non viene trovato, non sarà possibile importare l'e-service;
* _nome\_file.\[yaml | json | wsdl]_: il file di interfaccia; il suo nome può essere modificato gestendo il valore corrispondente all'interno del file di configurazione;
* _gli altri file_: tutti gli altri file sono verosimilmente la documentazione tecnica allegata all'e-service, il cui percorso in cartella deve corrispondere a quanto indicato nel file di configurazione.

Tutti i campi del _configuration.json_ sono obbligatori. Anche quelli che non vengono utilizzati, devono comunque essere inseriti mantenendo il loro valore di default.

**E-service**

**Descriptor**

<table><thead><tr><th width="241">Nome campo</th><th width="169">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>description</td><td>String</td><td>La descrizione della versione di e-service. Lunghezza tra i 10 e i 250 caratteri, spazi inclusi.</td></tr><tr><td>interface</td><td>Document</td><td>Il documento che descrive l'interfaccia API erogata dall'aderente.</td></tr><tr><td>docs</td><td>Array&#x3C;Document></td><td>La lista di documenti allegati alla versione di e-service (es. documentazione tecnica). È possibile non inserire alcun documento di accompagnamento. Il valore di default è array vuoto (<code>[]</code>).</td></tr><tr><td>audience</td><td>Array&#x3C;String></td><td>L'audience della tua risorsa presso la quale sarà inoltrata la richiesta dal fruitore. Benché la struttura dati sia sotto la forma di array di stringhe, di norma viene inserita una sola stringa.</td></tr><tr><td>voucherLifespan</td><td>Number</td><td>La durata del voucher che PDND Interoperabilità rilascerà al fruitore. Il valore è espresso in secondi. Sono permessi valori tra 60 (1 minuto) e 86.400 (1.440, ossia 24 ore).</td></tr><tr><td>dailyCallsPerConsumer</td><td>Number</td><td>La soglia delle chiamate API/giorno permesse per ogni fruitore. Non è possibile impostare valori inferiori a 1.</td></tr><tr><td>dailyCallsTotal</td><td>Number</td><td>La soglia delle chiamate API/giorno permesse sommando quelle di tutti i fruitori. Il valore non può essere inferiore a quello di <em>dailyCallsPerConsumer</em>.</td></tr><tr><td>agreementApprovalPolicy</td><td>AUTOMATIC | MANUAL</td><td>La politica di approvazione delle richieste di fruizione da parte dell'e-service, automatica (ossia senza necessità di un intervento manuale da parte dell'erogatore), o manuale.</td></tr></tbody></table>

**Document**

<table><thead><tr><th width="246">Nome campo</th><th width="190">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>prettyName</td><td>String</td><td>Il nome del file che viene mostrato agli utenti, per i quali deve essere significativo. Lunghezza tra i 5 e i 60 caratteri, spazi inclusi.</td></tr><tr><td>path</td><td>String</td><td>Il percorso al quale si trova il file da caricare a partire dal punto nel quale si trova il file di configurazione.</td></tr></tbody></table>

**RiskAnalysis**

<table><thead><tr><th width="246">Nome campo</th><th width="190">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Il nome da assegnare all'analisi del rischio per facilitarne l'identificazione. Lunghezza tra i 5 e i 60 caratteri, spazi inclusi.</td></tr><tr><td>riskAnalysisForm</td><td>RiskAnalysisForm</td><td>Il contenuto dell'analisi del rischio.</td></tr></tbody></table>

**RiskAnalysisForm**

<table><thead><tr><th width="246">Nome campo</th><th width="190">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>version</td><td>String</td><td>La versione dell'analisi del rischio per quella specifica tipologia di ente. Ad esempio, l'ultima versione di analisi del rischio rilasciata per le PA è la 3.0.</td></tr><tr><td>singleAnswers</td><td>Array&#x3C;RiskAnalysisSingleAnswer></td><td>Il contenuto delle risposte a scelta singola dell'analisi del rischio.</td></tr><tr><td>multiAnswers</td><td>Array&#x3C;RiskAnalysisMultiAnswer></td><td>Il contenuto delle risposte a scelta multipla dell'analisi del rischio.</td></tr></tbody></table>

**RiskAnalysisSingleAnswer**

<table><thead><tr><th width="246">Nome campo</th><th width="190">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>key</td><td>String</td><td>La chiave che identifica la specifica domanda rispetto al template inserito nella codebase. Ad esempio la chiave <code>institutionalPurpose</code> identifica il campo di testo libero nel quale si inserisce la risposta a quale finalità si stia perseguendo.</td></tr><tr><td>value</td><td>String</td><td>La risposta alla domanda identificata dalla chiave.</td></tr></tbody></table>

**RiskAnalysisMultiAnswer**

<table><thead><tr><th width="246">Nome campo</th><th width="190">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td>key</td><td>String</td><td>La chiave che identifica la specifica domanda rispetto al template inserito nella codebase. Ad esempio la chiave <code>institutionalPurpose</code> identifica il campo di testo libero nel quale si inserisce la risposta a quale finalità si stia perseguendo.</td></tr><tr><td>values</td><td>Array&#x3C;String></td><td>Le risposte alla domanda identificata dalla chiave.</td></tr></tbody></table>
