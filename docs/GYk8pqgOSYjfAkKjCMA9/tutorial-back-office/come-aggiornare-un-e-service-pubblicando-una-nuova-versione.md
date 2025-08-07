# Come aggiornare un e-service pubblicando una nuova versione

{% hint style="danger" %}
**Conseguenze** Quando viene pubblicata una nuova versione di e-service a catalogo, viene richiesto a tutti i fruitori di aggiornare la richiesta di fruizione.
{% endhint %}

## Step 1 - Entrare nella scheda dell'e-service da modificare

Nella vista _**Erogazione > I miei e-service**_ cliccare sui tre pallini alla voce dell'e-service di interesse e selezionare _**Crea bozza**_.&#x20;

Non è possibile avere più bozze dello stesso e-service contemporaneamente.

<figure><img src="../.gitbook/assets/crea bozza nuova versione.png" alt=""><figcaption><p>Schermata di creazione di una bozza di nuova versione di e-service</p></figcaption></figure>

## Step 2 - Compilazione del form di versione dell'e-service

* **descrizione della versione attuale dell'e-service:** sia che si tratti della prima bozza che di quelle successive, andando a descrivere i cambiamenti rispetto alle versioni precedenti;
* **la policy relativa alle richieste di fruizione** che l'erogatore riceve: se l'opzione è attiva significa che anche se il fruitore possiede già tutti gli attributi necessari all'attivazione automatica della richiesta di fruizione, l'erogatore si riserverà il diritto di attivarla manualmente. In caso contrario l'attivazione è automatica;
* una serie di richieste più tecniche:
  1. **audience**: l'identificativo della risorsa da consumare. Corrisponde al parametro _audience (aud)_ che l'erogatore troverà nel voucher di PDND Interoperabilità nelle richieste API che gli arriveranno dai fruitori;
  2. **durata della validità del voucher**: dopo quanto tempo scade il voucher rilasciato da PDND Interoperabilità valido per accedere a questo servizio;
  3. **soglie delle chiamate API, per singolo fruitore e totale:** le soglie oltre le quali le finalità non vengono più attivate automaticamente dalla piattaforma.

<figure><img src="../.gitbook/assets/UI versioni e-service.png" alt=""><figcaption><p>Fase 2</p></figcaption></figure>

## Step 3 - Compilazione del form degli attributi

Ogni e-service prevede dei requisiti di accesso che il fruitore deve possedere per potersi iscrivere a fruirne. In questo step si elencano questi requisiti, definiti attributi.

<figure><img src="../.gitbook/assets/nuova UI attributi.png" alt=""><figcaption><p>Fase 3</p></figcaption></figure>

## Step 4 - Caricamento del file di interfaccia e della documentazione tecnica

Caricare il file di specifica dell'API per questa versione dell'e-service: dovrà essere un file OpenAPI per i servizi REST e WSDL per i servizi SOAP, come indicato all'interno del perimetro di sicurezza del ModI.

{% hint style="info" %}
Al fine di assicurare la conformità delle API pubblicate agli standard del Modello di Interoperabilità Tecnica per la Pubblica Amministrazione Italiana, è stato creato uno strumento di verifica del file OpenAPI (quindi per gli e-service che utilizzano tecnologia REST).

È possibile trovare l'API checker a questo link: [https://italia.github.io/api-oas-checker/](https://italia.github.io/api-oas-checker/) e prima di usare lo strumento è consigliato leggere le [Guide per l’utilizzo](https://github.com/italia/api-oas-checker-rules).
{% endhint %}

Si richiede inoltre di caricare altra documentazione tecnica aggiuntiva (manuale d'uso, esempi, etc.).

<figure><img src="../.gitbook/assets/UI documentazione.png" alt=""><figcaption><p>Fase 4</p></figcaption></figure>

Alla fine del processo è disponibile un riepilogo di tutti i dati inseriti durante la creazione della versione di e-service e si può decidere se modificare la bozza, pubblicarla o eliminarla.

Per il dettaglio sui singoli campi o sui meccanismi relativi all'e-service, si veda la [sezione dedicata](../guida-tecnica-prodotto/e-service/).

