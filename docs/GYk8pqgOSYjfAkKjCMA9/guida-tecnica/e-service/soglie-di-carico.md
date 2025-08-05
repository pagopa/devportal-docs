# Soglie e stime di carico

Quando un erogatore crea una nuova versione di e-service, deve indicare due soglie di tolleranza per la propria infrastruttura:&#x20;

* il numero di chiamate API al giorno permesse al singolo fruitore;&#x20;
* la soglia totale data dalla somma delle chiamate API al giorno di tutti i fruitori.

Questa misura è prevista nelle Linee Guida AgID per tutelare l'infrastruttura dell'erogatore e supportarlo nel corretto dimensionamento della propria infrastruttura rispetto al carico atteso dai fruitori.

{% hint style="info" %}
Gli obiettivi di questa gestione sono:

* dare la possibilità all’erogatore di pianificare la disponibilità delle proprie risorse;
* guidare i fruitori in una pratica virtuosa di dimensionamento delle proprie esigenze;
* costruire un modello che sia osservabile e nel tempo possa condurre all’ottimizzazione delle risorse.
{% endhint %}

## Considerazioni amministrative e di privacy

Si ricorda che il meccanismo di soglia e stima di carico è uno strumento tecnico a supporto degli aderenti di PDND Interoperabilità ed al regolare funzionamento dei servizi per tutti.&#x20;

Possono esserci delle considerazioni amministrative e di privacy rispetto alla quantità di dati estratti, in caso vengano trattati dati personali. Lo strumento corretto per tracciare quest'informazione non sono le soglie e la stima di carico, bensì la dichiarazione che il fruitore fa nell'analisi del rischio. Nell'analisi del rischio è presente la domanda "Indicare se si conosce la quantità di dati personali di cui si entrerà in possesso attraverso la fruizione del presente E-service." Eventuali giustificazioni e motivazioni possono essere dibattute in quella sede.

## Approvazione manuale

Il fruitore con una richiesta di fruizione attiva per una versione di e-service potrà continuare a dichiarare finalità fino al raggiungimento di una delle due soglie. Una volta che dovesse superare una delle soglie, non si vedrà più approvate automaticamente le nuove finalità.

Sarà compito dell'erogatore attivare manualmente le finalità dopo aver verificato il carico dichiarato. Se la richiesta del fruitore è eccessiva, sarà facoltà dell'erogatore contattare il fruitore oppure comunicare una data entro la quale prevede di aver adeguato la propria infrastruttura per reggere il nuovo carico. La data di completamento delle attività è indicativa ed è modificabile unilateralmente dall'erogatore attraverso la UI o le API di PDND Interoperabilità.

## Aggiornamento delle soglie

L'erogatore può sempre aggiornare le proprie soglie senza dover creare una nuova versione dell'e-service. Questa modifica si applica immediatamente ed agisce solo sulle finalità ricevute da quel momento in poi.&#x20;

Le finalità che erano _In attesa di approvazione_ prima dell'aggiornamento, dovranno comunque essere approvate manualmente dall'erogatore.

## Esempi pratici

### Soglia per fruitore

1. La versione 1 dell'e-service _E-service esempio_ erogato da Ente A prevede 2.000 chiamate API/giorno per fruitore e 50.000 chiamate API/giorno totali;
2. Ente B si iscrive come fruitore; la richiesta di fruizione viene attivata;
3. Ente B crea e inoltra una prima finalità per _E-service esempio_, _Finalità 1_, con 1.000 chiamate API/giorno;
4. la finalità viene attivata automaticamente dalla piattaforma;
5. Ente B crea e inoltra una seconda finalità per _E-service esempio_, _Finalità 2_, sempre con 1.000 chiamate API/giorno;
6. la finalità viene attivata automaticamente dalla piattaforma;
7. Ente B crea e inoltra una terza finalità per _E-service esempio_, _Finalità 3_, con 1 chiamata API/giorno.

In questo caso, _Finalità 3_ viene messa dalla piattaforma in stato _In attesa di approvazione_. Sarà facoltà dell'erogatore attivarla manualmente. Finalità 1 e 2 continuano a funzionare regolarmente.

Questo avviene perché sommando le chiamate API/giorno delle tre finalità del fruitore Ente B (1.000 + 1.000 + 1) si supera la soglia per fruitore impostata dall'erogatore (2.000). Questa soglia agisce solo su questo e-service e non sugli altri e-service erogati dallo stesso erogatore.

Tutte le finalità successive che arriveranno da quel fruitore per quella versione di e-service dovranno essere attivate manualmente dall'erogatore, a meno che questo non decida di **innalzare la propria soglia per fruitore**.

### Soglia totale

1. La versione 1 dell'e-service _E-service esempio_ erogato da Ente A prevede 5.000 chiamate API/giorno per fruitore e 10.000 chiamate API/giorno totali;
2. Ente B si iscrive come fruitore; la richiesta di fruizione viene attivata;
3. Ente B crea e inoltra una finalità per _E-service esempio_, _Finalità 1_, con 5.000 chiamate API/giorno;
4. la finalità viene attivata automaticamente dalla piattaforma;
5. Ente C si iscrive come fruitore; la richiesta di fruizione viene attivata;
6. Ente C crea e inoltra una finalità per _E-service esempio_, _Finalità 1_, con 5.000 chiamate API/giorno;
7. la finalità viene attivata automaticamente dalla piattaforma;
8. Ente D si iscrive come fruitore; la richiesta di fruizione viene attivata;
9. Ente D crea e inoltra una finalità per _E-service esempio_, _Finalità 1_, con 1 chiamata API/giorno.

In questo caso, _Finalità 1_ di Ente D viene messa dalla piattaforma in stato _In attesa di approvazione_. Sarà facoltà dell'erogatore attivarla manualmente. Le finalità pubblicate prima da Ente B e Ente C continuano a funzionare regolarmente.

Questo avviene perché sommando le chiamate API/giorno di tre fruitori (5.000 + 5.000 + 1) si supera la soglia totale impostata dall'erogatore (10.000).

Tutte le finalità successive che arriveranno da qualsiasi fruitore per quella versione di e-service dovranno essere attivate manualmente dall'erogatore, a meno che questo non decida di **innalzare la propria soglia totale**.

### Aggiornamento della stima di carico di una finalità

1. La versione 1 dell'e-service _E-service esempio_ erogato da Ente A prevede 2.000 chiamate API/giorno per fruitore e 50.000 chiamate API/giorno totali;
2. Ente B si iscrive come fruitore; la richiesta di fruizione viene attivata;
3. Ente B crea e inoltra una prima finalità per _E-service esempio_, _Finalità 1_, con 1.000 chiamate API/giorno;
4. la finalità viene attivata automaticamente dalla piattaforma;
5. Ente B crea e inoltra una seconda finalità per _E-service esempio_, _Finalità 2_, sempre con 1.000 chiamate API/giorno;
6. la finalità viene attivata automaticamente dalla piattaforma;
7. Ente B aggiorna la propria stima di carico per la finalità _Finalità 2_, con 5.000 chiamata API/giorno invece di 1.000.

In questo caso, _Finalità 2_ ha contemporaneamente due stati:

* è _Attiva_ nella sua stima con 1.000 chiamate API/giorno;
* è _In attesa di approvazione_ nella sua stima con 5.000 chiamate API/giorno.

Questa gestione permette al fruitore di continuare ad utilizzare la finalità con la vecchia stima (1.000 chiamate API/giorno) nell'attesa che l'erogatore approvi una nuova stima che supera una delle sue soglie.

**Se l'aggiornamento della stima di carico rimane sotto entrambe le soglie impostate dall'erogatore, verrà attivata automaticamente.**

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

In questo caso, la finalità _Finalità 1_ di Ente D rimane _In attesa di approvazione_ e dovrà essere approvata manualmente dall'erogatore.&#x20;

Se però un qualsiasi ente iscritto all'e-service dovesse creare nuove finalità che, sommate, rimangano sotto alla nuova disponibilità, quell'ente si troverà le finalità direttamente _Attive_. La nuova disponibilità è di 5.000 chiamate API/giorno (originariamente 10.000, innalzata a 15.000).

## Gestione dei picchi di chiamate

Questa gestione dei picchi di carico è piuttosto semplificato, e non tiene conto di un problema molto comune: i picchi di chiamate (ad esempio durante i cosiddetti "click day").

Il modello è pensato in questa maniera per alcune ragioni, tra le quali:

1. intende offrirsi come strumento a supporto degli aderenti per dimensionare le proprie richieste e la propria infrastruttura coerentemente con il traffico atteso;
2. non intende sostituirsi agli strumenti di monitoraggio dell'erogatore;
3. PDND Interoperabilità non ha visibilità del numero di chiamate che il fruitore fa all'erogatore in tempo reale; solo in differita attraverso lo strumento di [Tracing](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/xgMmDloC8UwpLmzXPHfx/).

### Strumenti di monitoraggio dell'erogatore

Secondo le indicazioni presenti nel MoDI, l'erogatore e il fruitore sono tenuti a conservare la traccia di tutte le chiamate API ricevute.

In questa maniera, l'erogatore può nel tempo:

* monitorare l'andamento del carico sulla propria infrastruttura, anche individuando pattern ricorrenti (es. un picco di carico tutti i giovedì notte dalle 2 alle 3);
* individuare eventuali situazioni di criticità (es. la stima di carico dichiarata su PDND Interoperabilità non corrisponde alla realtà).

### Best practice per evitare il "click day"

Laddove sia possibile, si indica sempre di evitare chiamate sincrone immediate che possano portare ad un picco di carico sull'infrastruttura di un erogatore.

In molti casi, è possibile differire le chiamate, distribuendole nel tempo, oppure sfruttando servizi di _scambio massivo/asincrono\*_.

{% hint style="info" %}
\*La funzionalità degli scambi massivi/asincroni non è ancora implementata; è prevista in roadmap per la prima metà del 2026.
{% endhint %}

È possibile farlo salvando le informazioni minime e la priorità acquisita dall'utente per un tempo limitato in un proprio database. Solo in un secondo momento, fare le verifiche contattando gli e-service degli erogatori.

