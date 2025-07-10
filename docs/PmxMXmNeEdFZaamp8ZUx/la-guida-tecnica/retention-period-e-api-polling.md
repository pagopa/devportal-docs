# Retention Period e API polling

Il segnale depositato su Signal Hub ha un _retention period_ di 30 giorni, al termine del quale il segnale verrà eliminato e non sarà più recuperabile.

Supponendo che venga depositato un segnale il 01/01/2025 alle `08:00:00`  questo segnale sarà disponibile e recuperabile sino al 31/01/2025 `08:00:00` ; dal 31/01/2025 `08:00:01` non sarà più possibile recuperarlo.

In un’ottica di **API polling**, cioè di invocazione dell’endpoint di recupero dei segnali a intervalli di tempo regolari si **raccomanda** **una frequenza** **minima** **di 1 richiesta/giorno**, in modo da non perdere i segnali di variazione depositati, evitarne l'accumulo, ottenere un livello minimo di aggiornamento dei dati. Sulla base del _retention period_ impostato a 30 giorni, si suggerisce di effettuare **almeno** una lettura dei segnali al giorno.
