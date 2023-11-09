# Errore connessione a controparte

## Controparte non raggiungibile <a href="#controparte-non-raggiungibile" id="controparte-non-raggiungibile"></a>

&#x20;

![](<../.gitbook/assets/image (1).png>)

La piattaforma pagoPA rileva un errore di connessione verso la controparte e restituisce in response un [..](../ "mention") con le seguenti caratteristiche:

* **id** = _NodoDeiPagamentiSPC_
* **faultCode** = _PPT\_CANALE\_IRRAGGIUNGIBILE_(se controparte è PSP) / _PPT\_STAZIONE\_INT\_PA\_IRRAGGIUNGIBILE_ (se controparte è EC)
* **faultString** = _"Errore di connessione verso il canale."_ (se controparte è PSP) / _"Errore di connessione verso la Stazione"_ (se controparte è EC)
* **description** = _\<description>_
* **serial** = (se necessario)

## Servizio non attivo <a href="#servizio-non-attivo" id="servizio-non-attivo"></a>

Di fatto significa che attraverso una configurazione esplicita la controparte dichiara di non avere attivo uno specifico servizio e quindi non è in grado di rispondere ad una chiamata del nodo.

![](<../.gitbook/assets/image (4).png>)

La piattaforma pagoPA rileva che il servizio della controparte non è attivo e restituisce in response un [..](../ "mention") con le seguenti caratteristiche:

* **id** = _NodoDeiPagamentiSPC_
* **faultCode** = _PPT\_CANALE\_SERVIZIO\_NONATTIVO_(se controparte è PSP) / _PPT\_STAZIONE\_INT\_PA\_SERVIZIO\_NONATTIVO_ (se controparte è EC)
* **faultString** = _"Il Servizio Applicativo del Canale non è attivo."_ (se controparte è PSP) / _"Il Servizio Applicativo della Stazione non è attivo"_ (se controparte è EC)
* **description** = _\<description>_
* **serial** = (se necessario)
