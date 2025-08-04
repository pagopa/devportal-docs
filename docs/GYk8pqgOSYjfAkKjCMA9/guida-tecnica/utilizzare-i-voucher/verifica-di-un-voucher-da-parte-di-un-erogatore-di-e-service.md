# Verifica di un voucher da parte di un erogatore di e-service

Le best practice emerse prevedono che l’erogatore possa fare una delle seguenti due verifiche:

* verificare l’audience (campo `aud`) assieme al `producerId` (l'id dell'erogatore). In questo modo, c'è la doppia certezza che la risorsa richiesta sia quella corretta, e che appartenga effettivamente al proprio ente; OPPURE
* verificare la corrispondenza di `eserviceId` e `descriptorId` (id dell'e-service e della versione di e-service) rispetto alla propria risorsa. In questa maniera si ottiene una maggiore granularità di verifica.



L'erogatore di un e-service deve poter verificare la legittimità di qualsiasi richiesta ricevuta. Prima di tutto, estrae il voucher dalla richiesta, dall'header `Authorization: Bearer` nel quale arriva, e lo deserializza.&#x20;

#### Verifiche sugli header

Il voucher deve essere di tipo `at+jwt`.

#### Verifica sulla firma

L'erogatore scarica la lista di chiavi in uso da un file esposto nella cartella `.well-known` di PDND Interoperabilità (l'URL corretta è disponibile sull'interfaccia nel back office all'interno della scheda di ogni singolo e-service e cambia in funzione dell'ambiente; a titolo esemplificativo, [questa](https://interop.pagopa.it/.well-known/jwks.json) è quella di produzione).&#x20;

<figure><img src="../../.gitbook/assets/screen well-known" alt=""><figcaption><p>Esempio in ambiente di test su dove si trova il .well-known, si apre la tendina cliccando sulla voce "Vedi i dettagli tecnici dell'e-service"</p></figcaption></figure>

All'interno del file, l'erogatore cerca l'oggetto che ha lo stesso `kid` presente nell'header del voucher. In quello stesso oggetto troverà la chiave pubblica al parametro `n`. Effettuerà dunque una verifica della firma, che la chiave privata usata per firmare il voucher corrisponda a quella pubblica appena ottenuta.

#### Verifiche sul payload

Quelli che interessano ai fini della verifica sono:

* `iss`: l'issuer del voucher, che deve rappresentare il dominio corrispondente all'authorization server di PDND Interoperabilità che ha rilasciato il voucher stesso (ad esempio, l'issuer di produzione è `interop.pagopa.it`)
* `exp`: la scadenza del voucher
* `aud`: l'audience, ossia l'indicazione di quale servizio dell'erogatore il fruitore intenda consumare con il voucher

Il parametro `purposeId` dà il riferimento della finalità per la quale il fruitore fa richiesta all'erogatore. Attraverso successive chiamate all'API gateway di PDND Interoperabilità è possibile richiedere tutte le informazioni di contesto, in caso siano necessarie (ossia i client associati, la richiesta di fruizione e l'e-service di riferimento, ecc.)
