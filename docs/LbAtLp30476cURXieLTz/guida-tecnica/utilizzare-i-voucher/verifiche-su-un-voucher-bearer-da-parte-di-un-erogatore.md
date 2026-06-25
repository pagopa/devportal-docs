# Verifiche su un voucher Bearer da parte di un erogatore

L'erogatore di un e-service deve poter verificare la legittimità di qualsiasi richiesta ricevuta. Di seguito sono riportate le verifiche che PDND Interoperabilità suggerisce di fare per i voucher Bearer. È sempre facoltà dell'erogatore di valutare quali verifiche implementare, o implementarne altre aggiuntive, in base alla propria architettura applicativa.

Prima di tutto, l'erogatore estrae dall'header della richiesta del fruitore il voucher rilasciato da PDND Interoperabilità, e lo deserializza.&#x20;

## Esempio di voucher Bearer rilasciato da PDND Interoperabilità deserializzato

Header:

```
{
  "typ": "at+jwt",
  "alg": "RS256",
  "kid": "{KID_CHIAVE_PDND}"
}
```

Payload:

```
{
  "iss": "interop.pagopa.it", 
  "nbf": 1747408537,
  "iat": 1747408537,
  "exp": 1747409537,
  "jti": "12297ac1-c192-4573-8350-207a4213e5ac",
  "aud": "https://eservice.pa.it/api/v1",
  "sub": "9b361d49-33f4-4f1e-a88b-4e12661f2309",
  "client_id": "9b361d49-33f4-4f1e-a88b-4e12661f2309",
  "purposeId": "1b361d49-33f4-4f1e-a88b-4e12661f2300",
  "producerId" : "0e9e2dab-2e93-4f24-ba59-38d9f11198ca",
  "consumerId" : "69e2865e-65ab-4e48-a638-2037a9ee2ee7",
  "eserviceId" : "b8c6d7ad-93fc-4eaf-9018-3cd8bf98163f",
  "descriptorId": "9525a54b-9157-4b46-8976-ec66f20b7d7e"
}
```

### Significato dei campi

Nell'header si troveranno tre camp&#x69;_:_

<table><thead><tr><th width="123.4765625">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>kid</code></td><td>l'id della chiave che usato per firmare il voucher<em>,</em> reperibile sul well known di PDND Interoperabilità (vedi sotto <a href="verifiche-su-un-voucher-bearer-da-parte-di-un-erogatore.md#verifica-sulla-firma">Verifica sulla firma</a>)</td></tr><tr><td><code>alg</code></td><td>l'algoritmo usato per firmare il JWT ( <code>RS256</code>)</td></tr><tr><td><code>typ</code></td><td>il tipo di oggetto che si sta inviando (<code>at+jwt</code>)</td></tr></tbody></table>

Nel payload ci saranno invece tredici campi obbligatori, e uno opzionale:&#x20;

<table><thead><tr><th width="152.84765625">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>iss</code></td><td>l'issuer, rappresenta il dominio corrispondente all'authorization server di PDND Interoperabilità che ha rilasciato il voucher (ad esempio, l'issuer dell'ambiente di produzione è <code>interop.pagopa.it</code>)</td></tr><tr><td><code>nbf</code></td><td>not before, il timestamp dal quale è valido il voucher, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa). Per i voucher di PDND Interoperabilità, l'<code>nbf</code> corrisponde allo <code>iat</code>, ossia il voucher è spendibile immediatamente</td></tr><tr><td><code>iat</code></td><td>issued at, il timestamp nel quale è stato rilasciato il voucher, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td><code>exp</code></td><td>l'expiration, il timestamp riportante data e ora di scadenza del token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa). La durata del voucher (ossia la differenza tra <code>nbf</code> ed <code>exp</code>) dipende dal valore che l'erogatore ha impostato nella configurazione dell'e-service</td></tr><tr><td><code>jti</code></td><td>il JWT ID, un id unico random assegnato da PDND Interoperabilità</td></tr><tr><td><code>aud</code></td><td>l'audience, ossia l'indicazione di quale servizio dell'erogatore il fruitore intenda consumare con il voucher. Il valore riportato è quello che l'erogatore ha inserito nella configurazione dell'e-service</td></tr><tr><td><code>sub</code></td><td>il subject, in questo caso l'id del client che ha richiesto il voucher a PDND Interoperabilità</td></tr><tr><td><code>client_id</code></td><td>l'identificativo unico del client del fruitore che ha richiesto il voucher a PDND Interoperabilità (corrisponde al <code>sub</code>)</td></tr><tr><td><code>purposeId</code></td><td>l'identificativo unico della finalità per la quale è rilasciato il voucher</td></tr><tr><td><code>producerId</code></td><td>l'identificativo unico dell'erogatore dell'e-service</td></tr><tr><td><code>consumerId</code></td><td>l'identificativo unico del fruitore</td></tr><tr><td><code>eserviceId</code></td><td>l'identificativo unico dell'e-service</td></tr><tr><td><code>descriptorId</code></td><td>l'identificativo unico della versione di e-service</td></tr></tbody></table>

NB: il `client_id` è presente nel token e utilizza lo snake case invece del camel case per coerenza con l'RFC di riferimento.

## Verifiche di base

### Verifiche sugli header

Il voucher deve essere di tipo `at+jwt`.

### Verifica sulla firma

L'erogatore scarica la lista di chiavi in uso da un file esposto nella cartella `.well-known` di PDND Interoperabilità. L'URL corretta è disponibile sull'interfaccia nel back office all'interno della scheda di ogni singolo e-service e varia in funzione dell'ambiente nel quale è stata fatta la richiesta (collaudo, attestazione, produzione).&#x20;

A titolo di esempio, [https://interop.pagopa.it/.well-known/jwks.json](https://interop.pagopa.it/.well-known/jwks.json) è quella di produzione.&#x20;

<figure><img src="../../.gitbook/assets/screen well-known" alt="" width="563"><figcaption><p>Esempio in ambiente di test su dove si trova il .well-known, <br>si apre la tendina cliccando sulla voce "Vedi i dettagli tecnici dell'e-service"</p></figcaption></figure>

All'interno del file, l'erogatore cerca l'oggetto che ha lo stesso `kid` presente nell'header del voucher. In quello stesso oggetto troverà la chiave pubblica al parametro `n`. Effettuerà dunque una verifica della firma, che la chiave privata usata per firmare il voucher corrisponda a quella pubblica appena ottenuta.

### Verifiche sul payload

Quelli che interessano ai fini della verifica sono:

* `iss`: l'issuer del voucher, che deve rappresentare il dominio corrispondente all'authorization server di PDND Interoperabilità che ha rilasciato il voucher stesso (ad esempio, l'issuer di produzione è `interop.pagopa.it`);
* `exp`: la scadenza del voucher;
* `aud`: l'audience, ossia l'indicazione di quale servizio dell'erogatore il fruitore intenda consumare con il voucher.

## Best practice sulla verifica della risorsa richiesta

Le best practice emerse prevedono che l’erogatore possa fare una delle seguenti due verifiche:

* verificare l’audience (campo `aud`) assieme al `producerId` (l'id dell'erogatore). In questo modo, c'è la doppia certezza che la risorsa richiesta sia quella corretta, e che appartenga effettivamente al proprio ente;
* verificare la corrispondenza di `eserviceId` e `descriptorId` (id dell'e-service e della versione di e-service) rispetto alla propria risorsa. In questa maniera si ottiene una maggiore granularità di verifica.

Per maggiori informazioni, si veda il [webinar dedicato](https://developer.pagopa.it/webinars/DevTalks-PDNDInterop-voucher).
