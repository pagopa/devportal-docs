# Retention Period

## Retention Period Policy e recupero periodico dei segnali

Il segnale depositato su Signal Hub ha un _retention period_ di 30 giorni, al termine del quale il segnale verrà eliminato e non sarà più recuperabile.

Supponendo che venga depositato un segnale il 01/01/2025 alle 08:00:00. Questo segnale sarà disponibile e recuperabile sino al 31/01/2025 08:00:00; dal 31/01/2025 08:00:01 non sarà più possibile recuperarlo.

#### API Polling recupero segnali <a href="#api-polling-recupero-segnali" id="api-polling-recupero-segnali"></a>

In un’ottica di API polling, cioè di invocazione dell’endpoint di recupero dei segnali a intervalli di tempo regolari, si suggerisce una frequenza pari a 1/3 del `retention period`, in modo da non perdere i segnali di variazione inviati. Sulla base del _retention period_ impostato a 30 giorni, si suggerisce di effettuare **almeno** una lettura dei segnali ogni 10 giorni.
