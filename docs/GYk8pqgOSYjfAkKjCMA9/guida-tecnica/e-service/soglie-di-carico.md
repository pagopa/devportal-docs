# Soglie di carico

Quando un erogatore crea una nuova versione di e-service, deve indicare due soglie di tolleranza per la propria infrastruttura:&#x20;

* il numero di chiamate API al giorno permesse al singolo fruitore;&#x20;
* la soglia totale data dalla somma delle chiamate di tutti i fruitori.

Questa misura è prevista nelle Linee Guida AgID per tutelare l'infrastruttura dell'erogatore e supportarlo nel corretto dimensionamento della propria infrastruttura rispetto al carico atteso dai fruitori.

Il fruitore con una richiesta di fruizione attiva per una versione di e-service potrà continuare a dichiarare finalità fino al raggiungimento di una delle due soglie. Una volta che dovesse superare una delle soglie, non si vedrà più approvate automaticamente le nuove finalità.

Sarà compito dell'erogatore attivare manualmente le finalità dopo aver verificato il carico dichiarato. Se la richiesta del fruitore è eccessiva, sarà facoltà dell'erogatore contattare il fruitore oppure comunicare una data entro la quale prevede di aver adeguato la propria infrastruttura per reggere il nuovo carico. La data di completamento delle attività è indicativa ed è modificabile unilateralmente dall'erogatore attraverso la UI o le API di PDND Interoperabilità.

{% hint style="info" %}
Gli obiettivi di questa gestione sono:

* dare la possibilità all’erogatore di pianificare la disponibilità delle proprie risorse;
* guidare i fruitori in una pratica virtuosa di dimensionamento delle proprie esigenze;
* costruire un modello che sia osservabile e nel tempo possa condurre all’ottimizzazione delle risorse.
{% endhint %}

L'erogatore può sempre aggiornare le proprie soglie senza dover creare una nuova versione dell'e-service. Questo aggiornamento si applicherà solo alle nuove finalità. Quelle finalità che erano "in attesa di approvazione" prima dell'aggiornamento, dovranno comunque essere approvate manualmente dall'erogatore.

Maggiori informazioni sugli impatti delle soglie sui fruitori sono disponibili nella [sezione finalità](../finalita/).

## Considerazioni amministrative e di privacy

Si ricorda che il meccanismo di soglia e stima di carico è uno strumento tecnico a supporto degli aderenti di PDND Interoperabilità ed al regolare funzionamento dei servizi per tutti.&#x20;

Possono esserci delle considerazioni amministrative e di privacy rispetto alla quantità di dati estratti, in caso vengano trattati dati personali. Lo strumento corretto per tracciare quest'informazione non sono le soglie e la stima di carico, bensì la dichiarazione che il fruitore fa nell'analisi del rischio. Nell'analisi del rischio è presente la domanda "Indicare se si conosce la quantità di dati personali di cui si entrerà in possesso attraverso la fruizione del presente E-service." Eventuali giustificazioni e motivazioni possono essere dibattute in quella sede.
