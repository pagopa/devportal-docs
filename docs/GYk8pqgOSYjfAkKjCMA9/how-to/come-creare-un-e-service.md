# Come creare un e-service

{% hint style="warning" %}
Ogni e-service contiene al suo interno una specifica - definita file di interfaccia - che dettaglia il contenuto dell'API dell'erogatore. Un e-service eroga dati quando tutti gli endpoint di quell'API sono predisposti per erogare dati; mentre un e-service riceve dati quando tutti gli endpoint di quell'API sono predisposti per ricevere dati.
{% endhint %}

## Step 1 - Creazione di un nuovo e-service

Chi ha i permessi di amministrazione o di operatore API può accedere alla voce di menu _**Erogazione > I tuoi e-service**_**&#x20;>&#x20;**_**Crea nuovo**_.&#x20;

<figure><img src="../.gitbook/assets/nuovo e-service.png" alt=""><figcaption></figcaption></figure>

## Step 2 - Compilazione del Form Generale

Per la creazione dell'e-service sono richiesti:

* **nome e descrizione:** saranno esposti all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità (è consigliato leggere prima la [guida alle buone pratiche](https://italia.github.io/pdnd-guida-nomenclatura-eservice/));
* **protocollo** con cui viene esposta l'API, se REST o SOAP;

{% hint style="info" %}
Al fine di assicurare la conformità delle API pubblicate agli standard del Modello di Interoperabilità Tecnica per la Pubblica Amministrazione Italiana, è stato creato uno strumento di verifica del file OpenAPI (quindi per gli e-service che utilizzano tecnologia REST).

È possibile trovare l'API checker a questo link: [https://italia.github.io/api-oas-checker/](https://italia.github.io/api-oas-checker/) e prima di usare lo strumento è consigliato leggere le [Guide per l’utilizzo](https://github.com/italia/api-oas-checker-rules).
{% endhint %}

* **la tipologia di e-service:** se l'e-service eroga o riceve dati (in questo caso eroga);

<figure><img src="../.gitbook/assets/creazione e-service erogatore standard.jpg" alt=""><figcaption><p>Fase 1</p></figcaption></figure>

## **Step 3 - Compilazione del Form Finalità**

{% hint style="danger" %}
Questo step va eseguito **solo** per gli e-service **che ricevono dati**
{% endhint %}

Per la creazione di un e-service che eroga i dati bisogna procedere alla creazione di una o più finalità con relativa analisi del rischio che vengono esposte al fruitore dell'e-service.

<figure><img src="../.gitbook/assets/finalità e-procurement.jpg" alt=""><figcaption><p>Come appare la schermata per un erogatore che crea un e-service che riceve dati</p></figcaption></figure>

L'erogatore deve indicare il caso d'uso per cui intende raccogliere i dati e compilare il questionario.

<figure><img src="../.gitbook/assets/analisi del rischio e-procurement.jpg" alt=""><figcaption><p>Esempio di analisi del rischio</p></figcaption></figure>

## Step 4 - Compilazione del Form Versione

* **descrizione della versione attuale dell'e-service:** sia che si tratti della prima bozza che di quelle successive, andando a descrivere i cambiamenti rispetto alle versioni precedenti;
* una serie di richieste più tecniche:
  1. **audience**: il parametro _audience (aud)_ che i fruitori dovranno inserire all'interno del token per le richieste che effettueranno verso questa versione dell'e-service. È discrezione dell'erogatore stabilire la policy relativa alle audience: è possibile utilizzare la stessa audience per più versioni, audience diverse per ogni versione, etc.;
  2. **durata della validità del voucher**: dopo quanto tempo scade il voucher rilasciato da PDND Interoperabilità valido per accedere a questo servizio;
  3. **soglia delle chiamate API:** si rimanda alla descrizione del meccanismo della [stima di carico](come-creare-un-e-service.md#gestire-il-carico-infrastrutturale-di-una-versione-di-e-service);
* **la policy relativa alle richieste di fruizione** che l'erogatore riceve: se l'opzione è attiva significa che anche se il fruitore possiede già tutti gli attributi necessari all'attivazione della richiesta di fruizione, l'erogatore si riserverà il diritto di attivarla manualmente. In caso contrario l'attivazione è automatica. Questo meccanismo funziona nel caso in cui il fruitore possegga tutti gli attributi necessari nel momento di inoltro della richiesta di fruizione, altrimenti servirà sempre un'attivazione manuale da parte dell'erogatore;

<figure><img src="../.gitbook/assets/UI versioni e-service.png" alt=""><figcaption><p>Fase 2</p></figcaption></figure>

## Step 5 - Compilazione del Form Attributi

Elencare gli [attributi](../guida-tecnica/attributi/#come-funzionano) che l'ente fruitore deve avere per poter inoltrare la richiesta di fruizione;

<figure><img src="../.gitbook/assets/nuova UI attributi.png" alt=""><figcaption><p>Fase 3</p></figcaption></figure>

## Step 6 - Caricamento della documentazione

Caricare il file di specifica dell'API per questa versione dell'e-service: dovrà essere un file OpenAPI per i servizi REST e WSDL per i servizi SOAP, come indicato all'interno del perimetro di sicurezza del ModI.

Caricare eventuale documentazione tecnica aggiuntiva (manuale d'uso, esempi, etc.).

<figure><img src="../.gitbook/assets/UI documentazione.png" alt=""><figcaption><p>Fase 4</p></figcaption></figure>

Alla fine del processo è disponibile un riepilogo di tutti i dati inseriti durante la creazione dell'e-service e si può decidere se modificare la bozza, pubblicarla o eliminarla.
