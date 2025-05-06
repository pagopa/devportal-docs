# Segnali

## Tipologie dei segnali

Le comunicazioni tra produttore e consumatore in forma di segnali appartengono alle seguenti categorie:

* segnali legati al ciclo di vita di una entità: la variazione e/o il raggiungimento di uno stato finale di una entità. L'evento di creazione di una entità può essere gestito tramite la funzionalità di erogazione inversa della PDND
* segnali di agevolazione delle comunicazioni tra produttore e consumatore: fanno parte di questa categoria le comunicazioni che permettono al produttore di allineare il consumatore sulle **modalità di pseudonimizzazione** (funzione di hashing, seme)

La tipologia viene codificata nell'attributo`signalType` dell'oggetto `SignalPayload` (il segnale inviato dal produttore). Per i dettagli di implementazione, vedi sezione "[Come depositare un segnale](../tutorial/come-depositare-un-segnale.md)".



## Retention Period Policy e recupero periodico dei segnali

Il segnale depositato su Signal Hub ha un _retention period_ di 30 giorni, al termine del quale il segnale verrà eliminato e non sarà più recuperabile.

Supponendo che venga depositato un segnale il 01/01/2025 alle 08:00:00. Questo segnale sarà disponibile e recuperabile sino al 31/01/2025 08:00:00; dal 31/01/2025 08:00:01 non sarà più possibile recuperarlo.

#### API Polling recupero segnali <a href="#api-polling-recupero-segnali" id="api-polling-recupero-segnali"></a>

In un’ottica di API polling, cioè di invocazione dell’endpoint di recupero dei segnali a intervalli di tempo regolari, si suggerisce una frequenza pari a 1/3 del `retention period`, in modo da non perdere i segnali di variazione inviati. Sulla base del _retention period_ impostato a 30 giorni, si suggerisce di effettuare **almeno** una lettura dei segnali ogni 10 giorni.
