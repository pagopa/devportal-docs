# Come gestire un e-service

## Come creare un e-service

Ogni e-service contiene al suo interno una specifica - definita file di interfaccia - che dettaglia il contenuto dell'API dell'erogatore.&#x20;

Un e-service eroga dati quando tutti gli endpoint di quell'API sono predisposti per erogare dati; mentre un e-service riceve dati quando tutti gli endpoint di quell'API sono predisposti per ricevere dati.

### Step 1 - Crea nuovo

Chi ha i permessi di amministrazione o da operatore API, troverai la voce di menu _**Erogazione > I tuoi e-service**_**&#x20;>&#x20;**_**Crea nuovo**_.&#x20;

<figure><img src="../.gitbook/assets/nuovo e-service.png" alt=""><figcaption></figcaption></figure>

### Step 2 - Compilazione Form&#x20;

Durante la creazione dell'e-service vengono richiesti:

* un nome e una descrizione che saranno quelli esposti all'interno del catalogo degli e-service sulla piattaforma PDND Interoperabilità (è consigliato leggere prima la [guida alle buone pratiche](https://italia.github.io/pdnd-guida-nomenclatura-eservice/));
* il protocollo con cui viene esposta l'API, se REST o SOAP;

{% hint style="info" %}
Al fine di assicurare la conformità delle API pubblicate agli standard del Modello di Interoperabilità Tecnica per la Pubblica Amministrazione Italiana, è stato creato uno strumento di verifica del file OpenAPI (quindi per gli e-service che utilizzano tecnologia REST).

È possibile trovare l'API checker a questo link: [https://italia.github.io/api-oas-checker/](https://italia.github.io/api-oas-checker/) e prima di usare lo strumento è consigliato leggere le [Guide per l’utilizzo](https://github.com/italia/api-oas-checker-rules).
{% endhint %}

* la tipologia di e-service, se l'e-service eroga o riceve dati (in questo caso eroga);

<figure><img src="../.gitbook/assets/creazione e-service erogatore standard.jpg" alt=""><figcaption><p>Fase 1</p></figcaption></figure>

* una descrizione della versione attuale dell'e-service, sia che si tratti della prima bozza che di quelle successive, andando a descrivere i cambiamenti rispetto alle versioni precedenti;
* una serie di richieste più tecniche:
  1. audience: il parametro _audience (aud)_ che i fruitori dovranno inserire all'interno del token per le richieste che effettueranno verso questa versione dell'e-service. È discrezione dell'erogatore stabilire la policy relativa alle audience: è possibile utilizzare la stessa audience per più versioni, audience diverse per ogni versione, etc.;
  2. durata della validità del voucher: dopo quanto tempo scade il voucher rilasciato da PDND Interoperabilità valido per accedere a questo servizio;
  3. soglia delle chiamate API: si rimanda alla descrizione del meccanismo della [stima di carico](e-service.md#gestire-il-carico-infrastrutturale-di-una-versione-di-e-service);
* la policy relativa alle richieste di fruizione che l'erogatore riceve: se l'opzione è attiva significa che anche se il fruitore possiede già tutti gli attributi necessari all'attivazione della richiesta di fruizione, l'erogatore si riserverà il diritto di attivarla manualmente. In caso contrario l'attivazione è automatica. Questo meccanismo funziona nel caso in cui il fruitore possegga tutti gli attributi necessari nel momento di inoltro della richiesta di fruizione, altrimenti servirà sempre un'attivazione manuale da parte dell'erogatore;

<figure><img src="../.gitbook/assets/UI versioni e-service.png" alt=""><figcaption><p>Fase 2</p></figcaption></figure>

* quali [attributi](../guida-tecnica/attributi/#come-funzionano) deve avere l'ente fruitore per poter inoltrare la richiesta di fruizione;

<figure><img src="../.gitbook/assets/nuova UI attributi.png" alt=""><figcaption><p>Fase 3</p></figcaption></figure>

* il caricamento del file di specifica dell'API per questa versione dell'e-service: dovrà essere un file OpenAPI per i servizi REST e WSDL per i servizi SOAP, come indicato all'interno del perimetro di sicurezza del ModI;
* eventuale documentazione tecnica aggiuntiva (manuale d'uso, esempi, etc.).

<figure><img src="../.gitbook/assets/UI documentazione.png" alt=""><figcaption><p>Fase 4</p></figcaption></figure>

Alla fine del processo si arriva al riepilogo di tutti i dati inseriti durante la creazione dell'e-service e si può decidere se modificare la bozza, pubblicarla o eliminarla.

È possibile modificare e aggiornare la documentazione dell'e-service anche dopo la sua pubblicazione. È sufficiente entrare nell'e-service, scorrere in basso fino alla voce _**Specifiche tecniche e-service**_ e cliccare sulla matita alla voce _**Documentazione**_.

<figure><img src="../.gitbook/assets/modifica documentazione e-service.png" alt=""><figcaption><p>Schermata di modifica documentazione e-service</p></figcaption></figure>

### **Step 3 - E-service che ricevono dati**

La differenza del processo tra l'e-service che eroga dati e quello che ne riceve è la creazione di una o più finalità con relativa analisi del rischio che il fruitore si troverà precompilata quando andrà a fruire dell'e-service.

<figure><img src="../.gitbook/assets/finalità e-procurement.jpg" alt=""><figcaption><p>Come appare la schermata per un erogatore che crea un e-service che riceve dati</p></figcaption></figure>

L'erogatore deve quindi indicare il caso d'uso per cui intende raccogliere i dati e compilare il questionario.

<figure><img src="../.gitbook/assets/analisi del rischio e-procurement.jpg" alt=""><figcaption><p>Esempio di analisi del rischio</p></figcaption></figure>

## Come creare una nuova versione di e-service

Per creare una nuova versione, nella vista _**Erogazione > I tuoi e-service**_ si può cliccare sui tre pallini alla voce dell'e-service di interesse, e selezionare _**Crea bozza**_. Per questioni di consistenza, non è possibile avere più bozze dello stesso e-service contemporaneamente.

<figure><img src="../.gitbook/assets/crea bozza nuova versione.png" alt=""><figcaption><p>Schermata di creazione di una bozza di nuova versione di e-service</p></figcaption></figure>

Una volta selezionata la voce _**Crea bozza**_, si aprirà la schermata di creazione della nuova versione di e-service. Alcuni campi saranno precompilati come la versione precedente e si potranno modificare a proprio piacimento, come ad esempio le informazioni su voucher, soglia di carico, attributi e documentazione.

<figure><img src="../.gitbook/assets/bozza precompilata nuova versione.png" alt=""><figcaption><p>Schermata di modifica delle informazioni in una nuova versione di e-service</p></figcaption></figure>

## Come erogare un e-service

L'aderente che intende erogare un e-service potrà crearlo e gestirlo dalla voce di menu _**Erogazione > I tuoi e-service**_. Una volta pubblicato un e-service, sarà visualizzabile in modalità fruizione su _**Fruizione > Catalogo e-service**_. Gli aderenti interessati a fruire dell'e-service e in possesso dei requisiti minimi richiesti dall'erogatore (attributi), potranno iscriversi presentando una richiesta di fruizione. Ogni erogatore troverà le richieste di fruizione presentate dai Fruitori in _**Erogazione > Richieste di fruizione**_, dove potrà gestirle. Il fruitore potrà presentare delle finalità e iniziare a utilizzare l'e-service solo dopo che la richiesta è approvata.

{% hint style="info" %}
Per approfondire il funzionamento del flusso dell'erogatore si rimanda ai paragrafi successivi e alle voci [Client e materiale crittografico](../guida-tecnica/client-e-materiale-crittografico.md) e [Utilizzare i voucher](../guida-tecnica/utilizzare-i-voucher/) di questa guida.
{% endhint %}

Se una versione di e-service è archiviabile, l'opzione per farlo sarà attiva. Bisogna andare su _**Erogazione > I tuoi e-service**_, cliccare sui tre pallini della versione di e-service deprecata di interesse e su _**Archivia**_.

{% hint style="warning" %}
Questa funzionalità non è ancora stata rilasciata in ambiente di esercizio
{% endhint %}

Per cancellare un e-service o una sua versione in bozza, andare su _**Erogazione > I tuoi e-service**_, cliccare sui tre pallini della versione di e-service in bozza desiderata e su _**Elimina**_.

## Come clonare un e-service

Per facilitare la procedura di creazione di e-service molto simili, è stata disposta una funzionalità di clonazione. Per farlo, puoi andare su _**Erogazione > I tuoi e-service**_, cliccare sui tre pallini dell'e-service da clonare e selezionare _**Clona**_. È possibile clonare solo versioni di e-service in stato "attivo" o "deprecato".

L'e-service creato da questo clone non sarà pubblicato immediatamente, sarà messo in bozza. La sua numerazione di versione partirà da 1, indipendentemente dal numero di versione dell'e-service dal quale è stato clonato.

<figure><img src="../.gitbook/assets/clona_e-service.png" alt=""><figcaption></figcaption></figure>

## Come esportare e importare un e-service

È possibile esportare una versione di e-service da un ambiente di PDND Interoperabilità; quindi, la si può importare all'interno di un altro ambiente come nuovo e-service in bozza. Attualmente questa funzionalità è disponibile solo attraverso la UI.

La funzionalità è pensata per facilitare il passaggio di un e-service che ha superato la fase di collaudo ed è pronto per essere portato in produzione, ma può essere usata a discrezione per esportare e importare gli e-service da un ambiente all'altro, oppure per replicare uno stesso e-service presso più enti (nel caso, ad esempio, di Partner Tecnologici).

Un esempio pratico: c'è un e-service chiamato "Il mio e-service" in versione 5 in collaudo. È possibile esportare questa versione di e-service e reimportarla in produzione come versione 1 in bozza. L'e-service avrà lo stesso nome e le stesse caratteristiche di quello di partenza, con alcuni caveat descritti più sotto.

### Importare un e-service in bozza

Un utente con permessi di gestione per gli e-service (ossia amministratore o operatore API) può entrare nella pagina che elenca gli e-service erogati dal proprio ente _**Erogazione > I tuoi e-service**_**.** Alla sinistra dell'azione _**+1 Crea nuovo**_, si trova _**Importa**_**.**

<figure><img src="../.gitbook/assets/import_export_e-service 2.png" alt=""><figcaption><p>Vista della lista degli e-service in gestione all'ente con, in alto a destra, il pulsante "Importa"</p></figcaption></figure>

Cliccando su _**Importa**_, si apre un cassetto laterale che offre la possibilità di inserire un file zip. Una volta inserito, vengono elencate le possibili problematiche che impediscono il corretto caricamento. Una volta verificati tutti i punti, si può cliccare su _**Ho preso visione** > **Confermo**_ > _**Importa**_.&#x20;

<figure><img src="../.gitbook/assets/import_export_e-service 3.png" alt=""><figcaption><p>Vista del cassetto laterale che permette di caricare lo .zip</p></figcaption></figure>

Se tutto va a buon fine, l'utente è reindirizzato direttamente alla bozza del nuovo e-service che è stata creata a partire dallo .zip importato. In caso contrario, si riceve un feedback negativo.

### Esportare una versione di e-service

Un utente con permessi di gestione per gli e-service (ossia amministratore o operatore API) può entrare nella scheda del singolo e-service in _**Erogazione > I tuoi e-service**_. A quel punto, tra le azioni disponibili in basso nella scheda _**Informazioni generali**_, trova _**Scarica questa versione dell'e-service**_.

<figure><img src="../.gitbook/assets/import_export_e-service.png" alt=""><figcaption><p>L'azione "Scarica questa versione dell'e-service" è l'ultima in basso nella scheda "Informazioni generali"</p></figcaption></figure>

La versione di e-service viene scaricata in formato .zip, pronta per essere reimportata nell'altro ambiente.

## Come fruire di un e-service

L'aderente che intende fruire di un e-service può visualizzare tutti quelli disponibili andando su _**Fruizione > Catalogo e-service**_. Chi possiede i requisiti minimi, visualizza il pulsante _**Iscriviti**_, attraverso il quale ci si può "iscrivere all'e-service" presentando una richiesta di fruizione che deve essere sottoposta alla valutazione dell'erogatore. Una volta che la richiesta di fruizione viene approvata ed è attiva, il fruitore può creare le finalità. In ogni finalità, bisogna indicare il dettaglio sull'accesso e sull'utilizzo dei dati (chiamato _analisi del rischio_) e la _stima di carico_, la quantità di richieste che insisteranno sull'erogatore (definito in numero di chiamate API al giorno stimate). Se la stima di carico eccede la capacità dell'infrastruttura dell'erogatore, è necessario che l'erogatore l'approvi prima che il fruitore possa utilizzare quella finalità per accedere all'e-service.
