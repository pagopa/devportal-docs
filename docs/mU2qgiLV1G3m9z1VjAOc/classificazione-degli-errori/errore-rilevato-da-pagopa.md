# Errore rilevato da pagoPA

![](<../.gitbook/assets/image (5).png>)

La piattaforma pagoPA rileva un errore nella chiamata e restituisce in response un [..](../ "mention") con le seguenti caratteristiche:

* **id** = _NodoDeiPagamentiSPC_
* **faultCode** = _\<faultCode rilevato da nodo>_
* **faultString** = _\<faultString rilevato da nodo>_
* **description** = _\<description>_
* **serial** = (se necessario)

Tra i possibili **faultCode** che può emettere il Nodo dei Pagamenti, oltre a quelli di normale operatività, che indicano un problema previsto da specifiche, esiste il **faultCode** _PPT\_SYSTEM\_ERROR_, questo **faultCode** indica un problema effettivo del Nodo dei Pagamenti che ha impedito di processare correttamente la richiesta.&#x20;

Alcuni esempi sono:

* mancata connessione al DB;
* irraggiungibilità di alcune componenti.
