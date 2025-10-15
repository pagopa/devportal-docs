# Come creare un nuovo e-service

{% hint style="info" %}
Solamente gli enti di tipo PA, GSP o SCP possono erogare e-service negli ambienti di collaudo e produzione. Nell'ambiente di attestazione, non esistono invece limitazioni. Per maggiori informazioni, si veda la [sezione dedicata](../../per-iniziare/primo-accesso-e-configurazione-iniziale.md#comprendere-gli-ambienti-operativi).
{% endhint %}

### Step 1: Creazione di un nuovo e-service

Chi ha i permessi di amministrazione o di operatore API può accedere alla voce di menu _**Erogazione > I miei e-service**_**&#x20;>&#x20;**_**Crea nuovo**_.&#x20;

### Step 2: Compilazione del form di informazioni generali

Per la creazione dell'e-service sono richiesti:

* **nome e descrizione:** saranno esposti all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità (è consigliato leggere prima la [guida alle buone pratiche](https://italia.github.io/pdnd-guida-nomenclatura-eservice/));
* **tecnologia** con cui viene esposta l'API, se REST o SOAP;
* **modalità:** se l'e-service eroga o riceve dati. Se eroga dati, tutti gli endpoint dell'API dell'erogatore restituiscono dati; se li riceve, tutti gli endpoint ricevono dati. Per limitazioni di privacy, non è possibile avere un e-service che eroghi e riceva dati contemporaneamente;
* **autorizzazione al conferimento di deleghe**: se l'erogatore permette che il fruitore deleghi un'altra PA a compiere le operazioni amministrative per proprio conto;
* **presenza del servizio di notifica di variazioni dei dati (Signal Hub)**: se l'e-service offre ai fruitori la possibilità di rimanere aggiornati se un dato di loro interesse cambia.

### **Step 3: Compilazione del form delle finalità**

{% hint style="info" %}
Questo step va eseguito **solo** per gli e-service **che ricevono dati**.
{% endhint %}

Per la creazione di un e-service che riceve dati bisogna procedere alla creazione di una o più finalità con relativa analisi del rischio.

È necessario perché, nel caso di ricezione dati, è l'erogatore a ricevere dati dai fruitori e a doverne dichiarare le modalità di trattamento.

Per ogni finalità di utilizzo prevista per questo e-service, l'erogatore deve compilare un questionario. Sarà poi facoltà del fruitore scegliere la finalità adatta dopo aver presentato la richiesta di fruizione.

### Step 4: Compilazione del form di versione dell'e-service

* **descrizione della versione attuale dell'e-service:** sia che si tratti della prima bozza che di quelle successive, andando a descrivere i cambiamenti rispetto alle versioni precedenti;
* **la policy relativa alle richieste di fruizione** che l'erogatore riceve: se l'opzione è attiva significa che anche se il fruitore possiede già tutti gli attributi necessari all'attivazione automatica della richiesta di fruizione, l'erogatore si riserverà il diritto di attivarla manualmente. In caso contrario l'attivazione è automatica;
* una serie di richieste più tecniche:
  1. **audience**: l'identificativo della risorsa da consumare. Corrisponde al parametro _audience (aud)_ che l'erogatore troverà nel voucher di PDND Interoperabilità nelle richieste API che gli arriveranno dai fruitori;
  2. **durata della validità del voucher**: dopo quanto tempo scade il voucher rilasciato da PDND Interoperabilità valido per accedere a questo servizio;
  3. **soglie delle chiamate API, per singolo fruitore e totale:** le soglie oltre le quali le finalità non vengono più attivate automaticamente dalla piattaforma.

### Step 5: Compilazione del form degli attributi

Ogni e-service prevede dei requisiti di accesso che il fruitore deve possedere per potersi iscrivere a fruirne. In questo step si elencano questi requisiti, definiti attributi.

### Step 6: Caricamento del file di interfaccia e della documentazione tecnica

Caricare il file di specifica dell'API per questa versione dell'e-service: dovrà essere un file OpenAPI per i servizi REST e WSDL per i servizi SOAP, come indicato all'interno del perimetro di sicurezza del ModI.

{% hint style="info" %}
Al fine di assicurare la conformità delle API pubblicate agli standard del Modello di Interoperabilità Tecnica per la Pubblica Amministrazione Italiana, è stato creato uno strumento di verifica del file OpenAPI (quindi per gli e-service che utilizzano tecnologia REST).

È possibile trovare l'API checker a questo link: [https://italia.github.io/api-oas-checker/](https://italia.github.io/api-oas-checker/) e prima di usare lo strumento è consigliato leggere le [Guide per l’utilizzo](https://github.com/italia/api-oas-checker-rules).
{% endhint %}

Si consiglia inoltre di caricare tutta la documentazione tecnica necessaria a facilitare l'attività di integrazione da parte dei fruitori e riducendo al minimo eventuali frizioni.

Al termine del processo è disponibile un riepilogo di tutti i dati inseriti durante la creazione dell'e-service e si può decidere se modificare la bozza, pubblicarla o eliminarla.

Per il dettaglio sui singoli campi o sui meccanismi relativi all'e-service, si veda la [sezione dedicata](../../riferimenti-tecnici/e-service/).

***

Pagina successiva [→ Come aggiornare un e-service](come-aggiornare-un-e-service.md)
