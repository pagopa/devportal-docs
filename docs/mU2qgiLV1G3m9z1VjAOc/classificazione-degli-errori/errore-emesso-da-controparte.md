# Errore emesso da controparte

![](<../.gitbook/assets/image (2).png>)

Per errore emesso da controparte si intende un **faultBean** valido emesso dalla controparte, valido vuol dire che:

1. la validazione sintattica della response è stata eseguita con successo dalla piattaforma;
2. la validazione semantica della response è stata eseguita con successo dalla piattaforma (ad esempio se esito è OK non può esserci un faultBean).

La piattaforma pagoPA ad oggi non effettua alcun controllo sui **faultCode** emessi dalla controparte.

La piattaforma pagoPA rileva un errore (valido) emesso dalla controparte e restituisce in response al chiamante un [..](../ "mention") con le seguenti caratteristiche:

* **id** = \<idPSP> (se controparte è PSP) / \<idDominio> (se controparte è PA)
* **faultCode** = _PPT\_CANALE\_ERRORE_ (se controparte è PSP) / _PPT\_ERRORE\_EMESSO\_DA\_PAA_ (se controparte è EC)
* **faultString** = _"Errore restituito dal canale"_ (se controparte è PSP) / _"Errore restituito dall’ente creditore"_ (se controparte è EC)
* **description** = _\<description>_
* **serial** = (se necessario)
* **originalFaultCode** = _\<faultCode emesso da controparte>_
* **originalFaultString** = _\<faultString emesso da controparte>_
* **originalDescription** = _\<description emessa da controparte>_

L'errore emesso da controparte è l'unico caso per cui il nodo restituisce come **id** quello del soggetto che emette l'errore.

Questo tipo di errore è l’unico che contempla il **faultBean** esteso, la presenza dei 3 campi “**original…**” dipende dalla configurazione del chiamante (in particolare la configurazione dell’Intermediario):

* se il soggetto è configurato con struttura dei faultBean estesa vengono popolati i 3 campi "**original...**";
* se il soggetto non è configurato con struttura dei faultBean estesa viene fatto un _toString_ del **faultBean** emesso da controparte e riportato in **description**.
