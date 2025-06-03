# Come invocare un E-service

Una volta che sono state completate tutte le configurazioni previste dalla Data Preparation, è possibile procedere all'utilizzo dell'e-service selezionato.

Per effettuare questo step è sufficiente far riferimento alle interfacce Open API pubblicate dal fruitore e reperibili sul “catalogo e-service”.

Tutte le API esposte ai fini del trial prevedono il seguente header:

* **x-correlation-id:** il correlationId è un id unico random (di tipo UUID) generato a cura del chiamante; nello specifico, l'identificativo è utile ai fini di analisi per poter verificare il flusso di chiamate effettuato.
