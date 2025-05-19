# Gestione del carico

Quando un erogatore crea una nuova versione di e-service, deve indicare due soglie di tolleranza per la propria infrastruttura:&#x20;

* il numero di chiamate API al giorno permesse al singolo fruitore;&#x20;
* la soglia totale data dalla somma delle chiamate di tutti i fruitori.

Il fruitore con una richiesta di fruizione attiva per una versione di e-service potrà continuare a dichiarare finalità fino al raggiungimento di una delle due soglie. Una volta superata una delle soglie, le nuove finalità non saranno più approvate automaticamente da PDND Interoperabilità.

L'erogatore potrà attivare manualmente le finalità o comunicare al fruitore una data di completamento attività entro la quale completerà le operazioni di adeguamento dell'infrastruttura. La data di completamento è modificabile unilateralmente dall'erogatore.

{% hint style="info" %}
Gli obiettivi di questa gestione sono:

* dare la possibilità all’erogatore di pianificare la disponibilità delle proprie risorse supportandolo nella mitigazione di casi di DDoS;&#x20;
* guidare i fruitori in una pratica virtuosa di dimensionamento delle proprie esigenze;
* costruire un modello che sia osservabile e nel tempo possa condurre all’ottimizzazione delle risorse.
{% endhint %}

Le soglie sono sempre modificabili dall'erogatore senza dover creare una nuova version e dell'e-service.

Maggiori informazioni sono disponibili nella sezione [Finalità](../finalita.md).
