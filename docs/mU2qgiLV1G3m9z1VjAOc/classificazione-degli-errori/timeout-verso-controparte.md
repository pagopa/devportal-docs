# Timeout verso controparte

Nel seguente schema il timeout è indicato nella tratta di “ritorno” (_yyy res_ nell’esempio) ma potrebbe anche avvenire nella tratta di "andata" tra pagoPA e controparte (_yyy req_ nell'esempio).

Ai fini dell'errore emesso, e quindi del **faultCode**, il comportamento del Nodo dei Pagamenti è il medesimo.

![](<../.gitbook/assets/image (3).png>)

La piattaforma pagoPA rileva un timeout nella chiamata verso la controparte e restituisce in response al chiamante un [..](../ "mention") con le seguenti caratteristiche:

* **id** = _NodoDeiPagamentiSPC_
* **faultCode** = _PPT\_CANALE\_TIMEOUT_ (se controparte è PSP) / _PPT\_STAZIONE\_INT\_PA\_TIMEOUT_ (se controparte è EC)
* **faultString** = _"Timeout in risposta dal canale"_ (se controparte è PSP) / _"Timeout risposta dalla stazione"_ (se controparte è EC)
* **description** = _\<description>_
* **serial** = (se necessario)
