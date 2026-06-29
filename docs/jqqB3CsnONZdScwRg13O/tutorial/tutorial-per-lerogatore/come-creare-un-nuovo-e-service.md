# Come creare un nuovo e-service

### Step 1: Creazione di un nuovo e-service

Chi ha i permessi di amministrazione o di operatore API può accedere alla voce di menu _**Erogazione > I miei e-service**_**&#x20;>&#x20;**_**Crea nuovo**_.

### Step 2: Compilazione del form di informazioni generali

Per la creazione dell'e-service sono richiesti:

* **nome e descrizione:** saranno esposti all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità (è consigliato leggere prima la [guida alle buone pratiche](https://italia.github.io/pdnd-guida-nomenclatura-eservice/));
* **tecnologia** con cui viene esposta l'API, se REST o SOAP;
* **modalità:** se l'e-service eroga o riceve dati. Se eroga dati, tutti gli endpoint dell'API dell'erogatore restituiscono dati; se li riceve, tutti gli endpoint ricevono dati. Per limitazioni di privacy, non è possibile avere un e-service che eroghi e riceva dati contemporaneamente;
* **presenza dati personali**: se l'e-service eroga (erogazione diretta) o riceve (erogazione inversa) dati personali;
* **autorizzazione al conferimento di deleghe**: se l'erogatore permette che il fruitore deleghi un'altra PA a compiere le operazioni amministrative per proprio conto;
* **presenza del servizio di notifica di variazioni dei dati (Signal Hub)**: se l'e-service offre ai fruitori la possibilità di rimanere aggiornati se un dato di loro interesse cambia.

### **Step 3: Compilazione del form delle finalità**

{% hint style="info" %}
Questo step va eseguito **solo** per gli e-service **che ricevono dati**.
{% endhint %}

Per la creazione di un e-service che riceve dati bisogna procedere alla creazione di una o più finalità con relativa analisi del rischio.

È necessario perché, nel caso di ricezione dati, è l'erogatore a ricevere dati dai fruitori e a doverne dichiarare le modalità di trattamento.

Per ogni finalità di utilizzo prevista per questo e-service, l'erogatore deve compilare un questionario. Sarà poi facoltà del fruitore scegliere la finalità adatta dopo aver presentato la richiesta di fruizione.

### Step 4: Compilazione del form di soglie e attributi

* **soglie delle chiamate API/giorno, per singolo fruitore e totale:** le soglie oltre le quali le finalità non vengono più attivate automaticamente dalla piattaforma;
* **requisiti di accesso:** i requisiti che gli aderenti devono possedere per potersi iscrivere a fruire dell'e-service. Per i requisiti che riguardano gli attributi certificati, è possibile specificare anche una soglia (ad es. per un e-service destinato a Comuni e Regioni, è possibile stabilire delle soglie di chiamate API/giorno specifiche per questi gruppi di fruitori).
*   **attributi certificati discreti \[solo ambiente di collaudo]**: tra i requisiti di accesso è possibile aggiungere anche attributi certificati discreti. A differenza degli attributi certificati tradizionali, che hanno natura binaria (il fruitore li possiede oppure no), gli attributi certificati discreti sono caratterizzati da un **valore numerico** — ad esempio il numero di abitanti di un comune, fornito da ISTAT. Per ciascun attributo certificato discreto aggiunto, è necessario specificare:

    * l'**operatore di confronto**: maggiore di, minore di, uguale a, maggiore o uguale a, minore o uguale a, diverso da;
    * la **soglia numerica** di riferimento.

    Solo i fruitori il cui valore per quell'attributo soddisfa la condizione impostata potranno presentare richiesta di fruizione. Ad esempio, selezionando _Popolazione residente — Comuni italiani_ con operatore "maggiore di" e soglia "10000", soltanto i comuni con più di 10.000 abitanti potranno iscriversi.

    Gli attributi certificati discreti seguono le stesse logiche AND/OR già in uso per gli attributi certificati tradizionali e possono essere combinati con essi all'interno dello stesso gruppo di requisiti. Per maggiori dettagli, [consulta la sezione dedicata agli attributi certificati discreti](../../../pdnd-interoperabilita/manuale-operativo-pdnd-interoperabilita/v1.0/riferimenti-tecnici/attributi/attributi-certificati-discreti.md).

### Step 5: Compilazione del form delle specifiche tecniche

* **file di interfaccia:** il file che contiene la specifica dell'API per questa versione dell'e-service. Dovrà essere un file OpenAPI per i servizi REST e WSDL per i servizi SOAP, come indicato all'interno del perimetro di sicurezza del ModI;
* **durata della validità del voucher**: dopo quanto tempo scade il voucher rilasciato da PDND Interoperabilità valido per accedere a questa versione del servizio;
* **audience**: l'identificativo della risorsa da consumare. Corrisponde al parametro _audience (aud)_ che l'erogatore troverà nel voucher di PDND Interoperabilità nelle richieste API che gli arriveranno dai fruitori.

{% hint style="info" %}
Al fine di assicurare la conformità delle API pubblicate agli standard del Modello di Interoperabilità Tecnica per la Pubblica Amministrazione Italiana, è stato creato uno strumento di verifica del file OpenAPI (quindi per gli e-service che utilizzano tecnologia REST).

È possibile trovare l'API checker a questo link: [https://italia.github.io/api-oas-checker/](https://italia.github.io/api-oas-checker/) e prima di usare lo strumento è consigliato leggere le [Guide per l’utilizzo](https://github.com/italia/api-oas-checker-rules).
{% endhint %}

### Step 6: Compilazione del form delle informazioni aggiuntive di versione

* **descrizione della versione attuale dell'e-service:** sia che si tratti della prima bozza che di quelle successive, andando a descrivere i cambiamenti rispetto alle versioni precedenti;
* **documentazione:** la documentazione tecnica necessaria a facilitare l'attività di integrazione da parte dei fruitori e riducendo al minimo eventuali frizioni;
* **la policy relativa alle richieste di fruizione** che l'erogatore riceve: se l'opzione è attiva significa che anche se il fruitore possiede già tutti gli attributi necessari all'attivazione automatica della richiesta di fruizione, l'erogatore si riserverà il diritto di attivarla manualmente. In caso contrario l'attivazione è automatica.

### Step 7: Riepilogo

Al termine del processo è disponibile un riepilogo di tutti i dati inseriti durante la creazione dell'e-service. Per ogni sezione, viene indicato se ci sono delle informazioni mancanti che impediscono la pubblicazione della bozza. Altre azioni disponibili sono la modifica o eliminazione della bozza stessa.

Per il dettaglio sui singoli campi o sui meccanismi relativi all'e-service, si veda la [sezione dedicata](../../../pdnd-interoperabilita/manuale-operativo-pdnd-interoperabilita/v1.0/riferimenti-tecnici/e-service/).

***

Pagina successiva [→ Come aggiornare un e-service](../../../pdnd-interoperabilita/manuale-operativo-pdnd-interoperabilita/v1.0/tutorial/tutorial-per-lerogatore/come-aggiornare-un-e-service.md)
