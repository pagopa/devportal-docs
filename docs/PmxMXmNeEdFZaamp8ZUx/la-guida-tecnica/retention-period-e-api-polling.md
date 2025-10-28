# Retention Period e API polling

Il segnale depositato su Signal Hub ha un _retention period_ di 30 giorni, al termine del quale il segnale verrà eliminato e non sarà più recuperabile.&#x20;

Supponendo che un segnale venga depositato il **2025-01-01T08:00:00Z**, questo risulterà disponibile e recuperabile fino al **2025-01-31T08:00:00Z** incluso. Dal **2025-01-31T08:00:01Z** il segnale non sarà più recuperabile.

In un’ottica di **API polling**, cioè di invocazione dell’endpoint di recupero dei segnali a intervalli di tempo regolari si **raccomanda** **una frequenza** **minima** **di 1 richiesta/giorno**, in modo da non perdere i segnali di variazione depositati, evitarne l'accumulo, ottenere un livello minimo di aggiornamento dei dati. Sulla base del _retention period_ impostato a 30 giorni, si suggerisce di effettuare **almeno** una lettura dei segnali al giorno.
