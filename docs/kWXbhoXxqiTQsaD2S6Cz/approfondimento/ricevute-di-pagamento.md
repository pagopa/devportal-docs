# Ricevute di pagamento

La gestione delle ricevute di pagamento può essere effettuata attraverso due metodi complementari:

* Modalità Asincrona (Pull): in questa modalità, l'EC utilizza chiamate asincrone, come precedentemente descritto, per recuperare le Ricevute Telematiche (RT) di interesse. Questo implica che l'Ente deve organizzare un processo di scheduling per controllare periodicamente la disponibilità delle ricevute e, se queste non sono ancora pronte, pianificare tentativi successivi;
* Modalità Sincrona (Push): questa modalità si avvale di una Stazione di Broadcast associata all'EC. Per ogni pagamento completato con successo, il Nodo dei Pagamenti invierà una notifica a paSendRT a tale stazione, permettendo all’EC di essere informato in tempo reale del completamento del pagamento.

Nonostante entrambe le modalità siano supportate, la modalità Asincrona richiede l'implementazione di un processo di verifica e tentativi ripetuti per il recupero delle ricevute, risultando in un approccio che può rivelarsi oneroso sia per gli Enti che per pagoPA. Di conseguenza, quando è possibile, si raccomanda di preferire l'approccio Sincrono per il recupero delle ricevute, in quanto permette un flusso di lavoro più efficiente e meno dispendioso.
