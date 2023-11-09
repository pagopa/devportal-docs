# Fault Bean

Il **faultBean** è l'oggetto restituito in _response_ a qualunque primitiva in caso di errore.

## La struttura faultBean <a href="#la-struttura-faultbean" id="la-struttura-faultbean"></a>

Per la gestione degli errori all'interno dei messaggi scambiati tra i soggetti aderenti (**EC** e **PSP**) ed il **NodoSPC** viene utilizzata la struttura **faultBean** composta così come indicato nella seguente tabella.

<table><thead><tr><th width="238.83869028788337">Componente</th><th>Descrizione</th></tr></thead><tbody><tr><td>id</td><td>Soggetto che emette l'errore</td></tr><tr><td>faultCode</td><td>Codice di errore</td></tr><tr><td>faultString</td><td>Dettaglio del codice di errore</td></tr><tr><td>description</td><td>Descrizione aggiuntiva</td></tr><tr><td>serial</td><td>Posizione dell’elemento nella lista a cui fa riferimento</td></tr><tr><td>originalFaultCode</td><td>Codice di errore generato dalla controparte</td></tr><tr><td>originalFaultString</td><td>Dettaglio del codice di errore generato dalla controparte</td></tr><tr><td>originalDescription</td><td>Descrizione aggiuntiva errore generato da controparte</td></tr></tbody></table>

### id <a href="#id" id="id"></a>

Soggetto che emette l'errore.

Formato: stringa.

Valori Ammessi:

* _NodoDeiPagamentiSPC_: costante che identifica il NodoSPC
* _identificativoDominio_: identifica l'Ente Creditore che emette il fault
* _identificativoPSP_: identifica il PSP che emette il fault

### faultCode <a href="#faultcode" id="faultcode"></a>

Codice di errore, proprio del soggetto che lo emette.

Formato: stringa.

Maggiori dettagli in [fault-code.md](struttura-degli-errori/fault-code.md "mention").

### faultString <a href="#faultstring" id="faultstring"></a>

Dettaglio del codice di errore, proprio del soggetto che lo emette.

Formato: stringa.

Valori ammessi: [relazione-tra-faultcode-e-faultstring.md](faultcode-e-faultstring/relazione-tra-faultcode-e-faultstring.md "mention").

### description <a href="#description" id="description"></a>

Descrizione del codice di errore, proprio del soggetto che lo emette. Non è regolamentato. Il soggetto che emette l’errore può inserire in questo campo quello che preferisce.

Formato: stringa.

### serial <a href="#serial" id="serial"></a>

Posizione dell’elemento nella lista a cui fa riferimento. Utile quando si fornisce un parametro in forma di vettore (ad esempio nella primitiva _nodoInviaCarrelloRPT_). Nel caso in cui l'errore sia generato dall'EC o dal PSP, il dato riporta il valore del dato faultBean.serial impostato dall'EC o dal PSP.

Formato: Numerico intero.

### originalFaultCode <a href="#originalfaultcode" id="originalfaultcode"></a>

Codice di errore generato dalla controparte. Non è presente se l'errore è generato dal NodoSPC.

Formato: stringa.

Maggiori dettagli in [fault-code.md](struttura-degli-errori/fault-code.md "mention").

Emesso solo in caso di [errore-emesso-da-controparte.md](classificazione-degli-errori/errore-emesso-da-controparte.md "mention")e se il chiamante è configurato adeguatamente.

### originalFaultString <a href="#originalfaultstring" id="originalfaultstring"></a>

Dettaglio del codice di errore generato dalla controparte. Non è presente se l'errore è generato dal NodoSPC.

Formato: stringa.

Emesso solo in caso di [errore-emesso-da-controparte.md](classificazione-degli-errori/errore-emesso-da-controparte.md "mention") e se il chiamante è configurato adeguatamente.

### originalDescription <a href="#originaldescription" id="originaldescription"></a>

Descrizione aggiuntiva dell’errore generato dalla controparte. Non è presente se l'errore è generato dal NodoSPC.

Formato: stringa.

Emesso solo in caso di [errore-emesso-da-controparte.md](classificazione-degli-errori/errore-emesso-da-controparte.md "mention") e se il chiamante è configurato adeguatamente.
