# Soglie e approvazioni

Quando un erogatore crea una nuova versione di e-service, imposta due **soglie di tolleranza** per la propria infrastruttura:

* il numero massimo di chiamate API/giorno consentite al **singolo fruitore**;
* il numero massimo **totale** di chiamate API/giorno sommate su **tutti i fruitori**.

Queste soglie, previste dalle Linee Guida, favoriscono il corretto dimensionamento del servizio e la continuità operativa.

{% hint style="info" %}
Obiettivi:

* pianificazione delle risorse dell’erogatore;
* guida ai fruitori verso stime coerenti;
* modello d’uso sostenibile e osservabile nel tempo.
{% endhint %}

È inoltre possibile definire delle soglie più stringenti, basate sui requisiti di accesso. Questa impostazione vale solo per gli **attributi certificati**. Per fare un esempio, se un e-service è aperto a tutti gli enti che possiedono l'attributo certificato _Comuni e loro Consorzi e Associazioni_ oppure l'attributo certificato _Regioni_, è possibile assegnare due soglie diverse per queste due tipologie di enti. Maggiori dettagli nell'[esempio pratico](soglie-e-approvazioni.md#soglia-per-requisito-di-accesso) sotto.

## Considerazioni amministrative e di privacy

Le soglie e le stime di carico sono **strumenti tecnici** a supporto dell’operatività. Quando si trattano **dati personali**, la quantità di dati estratti e le relative motivazioni vanno indicate nell’**analisi del rischio**, che include la domanda:

> “Indicare se si conosce la quantità di dati personali di cui si entrerà in possesso attraverso la fruizione del presente e-service.”

Eventuali giustificazioni sono riportate in quella sede.

## Approvazione manuale

Un fruitore con una richiesta di fruizione **attiva** può dichiarare nuove **finalità** fino al raggiungimento di una delle due soglie. Al superamento di una soglia, le **nuove finalità** entrano in stato _in attesa di approvazione_.

L’erogatore verifica la stima dichiarata e può **attivare manualmente** le finalità. Se la richiesta supera la capacità dichiarata, l’erogatore **contatta il fruitore** o comunica una **data stimata** per l’adeguamento dell’infrastruttura.

## Aggiornamento delle soglie

L’erogatore può **aggiornare le soglie** in qualsiasi momento **senza** creare una nuova versione dell’e-service. L’aggiornamento si applica **immediatamente** e riguarda **solo** le finalità ricevute **dopo** la modifica.

Le finalità che risultavano _in attesa di approvazione_ **prima** della modifica vanno approvate **manualmente**.

## Esempi pratici

### Soglia per fruitore

1. Versione 1 di “E-service esempio”: **2.000** chiamate API/giorno per fruitore e **50.000** totali.
2. Ente B si iscrive e la richiesta viene attivata.
3. Ente B crea tre finalità: **1.000**, **1.000** e **1** chiamata/giorno.

La terza finalità è _in attesa di approvazione_ (somma = **2.001** > **2.000** per fruitore). L’erogatore può **approvare** manualmente o **innalzare** la soglia per fruitore.

### Soglia per requisito di accesso

L'e-service ha come requisiti di accesso gli attributi certificati _Comuni e loro Consorzi e Associazioni_ e _Regioni_.

1. Versione 1 di “E-service esempio”: **2.000** chiamate API/giorno per fruitore e **50.000** totali; inoltre, imposta una soglia personalizzata a **10.000** chiamate API/giorno per Regioni.
2. Ente Comune X e Ente Regione Y si iscrivono e le richieste vengono attivate.
3. Ente Comune X crea una finalità: **3.000** chiamate/giorno.
4. Ente Regione Y crea una finalità: **9.000** chiamate/giorno.

La finalità di Ente Comune X è _in attesa di approvazione_ (**3.000** > **2.000** per fruitore). L’erogatore può **approvare** manualmente o **innalzare** la soglia per fruitore.

La finalità di Ente Regione Y è attiva (**9.000** < **10.000** per soglia dedicata alle Regioni).

### Soglia totale

1. Versione 1 di “E-service esempio”: **5.000** chiamate API/giorno per fruitore e **10.000** totali.
2. Ente B, C e D si iscrivono e le richieste vengono attivate.
3. Ente B e Ente C creano una finalità ciascuno da **5.000** chiamate/giorno, e raggiungono **10.000** chiamate/giorno complessive.
4. Ente D crea una finalità da **1** chiamata/giorno.

La finalità di Ente D va _in attesa di approvazione_. L’erogatore può **approvare** manualmente o **innalzare** la soglia totale.

### Aggiornamento della stima di carico di una finalità

* Ente B passa una finalità da **1.000** a **5.000** chiamate/giorno.
* La finalità resta **attiva** a **1.000** e **in attesa di approvazione** a **5.000**.\
  → Il fruitore continua a operare con la **vecchia stima** fino all’approvazione della nuova.\
  Se la nuova stima rimane **sotto entrambe le soglie**, viene **attivata automaticamente**.

### Aggiornamento di una soglia dell'e-service

1. La versione 1 dell'e-service _E-service esempio_ erogato da Ente A prevede 5.000 chiamate API/giorno per fruitore e 10.000 chiamate API/giorno totali;
2. Ente B si iscrive come fruitore; la richiesta di fruizione viene attivata;
3. Ente B crea e inoltra una finalità per _E-service esempio_, _Finalità 1_, con 5.000 chiamate API/giorno;
4. la finalità viene attivata automaticamente dalla piattaforma;
5. Ente C si iscrive come fruitore; la richiesta di fruizione viene attivata;
6. Ente C crea e inoltra una finalità per _E-service esempio_, _Finalità 1_, con 5.000 chiamate API/giorno;
7. la finalità viene attivata automaticamente dalla piattaforma;
8. Ente D si iscrive come fruitore; la richiesta di fruizione viene attivata;
9. Ente D crea e inoltra una finalità per _E-service esempio_, _Finalità 1_, con 1 chiamata API/giorno;
10. l'erogatore, Ente A, innalza la soglia totale a 15.000 chiamate API/giorno.

In questo caso, la finalità _Finalità 1_ di Ente D rimane _In attesa di approvazione_ e dovrà essere approvata manualmente dall'erogatore.

Se però un qualsiasi ente iscritto all'e-service dovesse creare nuove finalità che, sommate, rimangano sotto alla nuova disponibilità, quell'ente si troverà le finalità direttamente _Attive_. La nuova disponibilità è di 5.000 chiamate API/giorno (originariamente 10.000, innalzata a 15.000).

## Gestione dei picchi di chiamate

Il modello di soglie è pensato per la **pianificazione** del carico nel tempo; i **picchi** (es. “click day”) e la **gestione real time** vanno gestiti con strumenti di **monitoraggio** e **controllo** dell’erogatore.

### Best practice per evitare i picchi

* preferire **invii distribuiti nel tempo** rispetto a chiamate sincrone simultanee;
* utilizzare **code** e **processi asincroni** interni per diluire il carico;
* definire **finestre orarie** e **priorità** per gestire volumi elevati.

{% hint style="info" %}
Per supportare meglio gli aderenti in questo caso, le nuove Linee Guida prevedono una funzionalità di scambi asincroni/massivi. La funzionalità è in via di sviluppo.
{% endhint %}

## Monitoraggio

Gli erogatori e i fruitori **conservano la traccia** di tutte le chiamate API ricevute, come previsto nel MoDI, così da:

* analizzare l’**andamento** del carico;
* identificare **pattern ricorrenti** (es. picchi in finestre orarie specifiche);
* confrontare **stima dichiarata** e **traffico effettivo**.

Maggiori informazioni nella [sezione dedicata](../tracing.md).

***

Pagina successiva [→ Portachiavi](portachiavi.md)
