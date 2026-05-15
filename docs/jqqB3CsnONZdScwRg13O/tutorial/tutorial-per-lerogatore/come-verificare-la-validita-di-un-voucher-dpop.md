# Come verificare la validità di un voucher DPoP

L'erogatore di un e-service deve poter verificare la legittimità di qualsiasi richiesta ricevuta. Di seguito sono riportate le verifiche che PDND Interoperabilità suggerisce di fare per i voucher DPoP. È sempre facoltà dell'erogatore di valutare quali verifiche implementare, o implementarne altre aggiuntive, in base alla propria architettura applicativa.

In questo caso, le verifiche vanno effettuate su due diversi token, ossia:

* il voucher DPoP rilasciato da PDND Interoperabilità al fruitore, e che il fruitore ha inserito nell'header `Authorization` della chiamata;
* la DPoP costruita dal fruitore e inserita in un differente header `DPoP`.

Prima di tutto, l'erogatore estrae dall'header della richiesta del fruitore il voucher rilasciato da PDND Interoperabilità, e lo deserializza.

### Esempio di voucher DPoP rilasciato da PDND Interoperabilità deserializzato

Header:

```
{
  "typ": "dpop+jwt",
  "alg": "RS256",
  "use": "sig",
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
  "descriptorId": "9525a54b-9157-4b46-8976-ec66f20b7d7e",
  "cnf": {
    "jkt" : "L5TP6x6ved3p_jmIAtCiHMcNJeRrGWAusNnQkTTrnLY"
  }
}
```

dove il campo `cnf.jkt` contiene il thumbprint della chiave pubblica in formato JWK ([RFC 7638](https://datatracker.ietf.org/doc/html/rfc7638)) utilizzata nella DPoP inviata dal fruitore (client) verso PDND Interoperabilità (server autorizzativo).

Effettua quindi alcune verifiche su questo voucher.

### Verifiche di base sul voucher PDND

#### Verifiche sugli header

Il voucher deve essere di tipo `dpop+jwt`.

#### Verifica sulla firma

L'erogatore scarica la lista di chiavi in uso da un file esposto nella cartella `.well-known` di PDND Interoperabilità. L'URL corretta è disponibile sull'interfaccia nel back office all'interno della scheda di ogni singolo e-service e varia in funzione dell'ambiente nel quale è stata fatta la richiesta (collaudo, attestazione, produzione).

A titolo di esempio, [https://interop.pagopa.it/.well-known/jwks.json](https://interop.pagopa.it/.well-known/jwks.json) è quella di produzione.

<figure><img src="../../../pdnd-interoperabilita/manuale-operativo-pdnd-interoperabilita/v1.0/.gitbook/assets/screen well-known" alt="" width="563"><figcaption><p>Esempio in ambiente di test su dove si trova il .well-known,<br>si apre la tendina cliccando sulla voce "Vedi i dettagli tecnici dell'e-service"</p></figcaption></figure>

All'interno del file, l'erogatore cerca l'oggetto che ha lo stesso `kid` presente nell'header del voucher. In quello stesso oggetto troverà la chiave pubblica al parametro `n`. Effettuerà dunque una verifica della firma, che la chiave privata usata per firmare il voucher corrisponda a quella pubblica appena ottenuta.

#### Verifiche sul payload

Quelli che interessano ai fini della verifica sono:

* `iss`: l'issuer del voucher, che deve rappresentare il dominio corrispondente all'authorization server di PDND Interoperabilità che ha rilasciato il voucher stesso (ad esempio, l'issuer di produzione è `interop.pagopa.it`);
* `exp`: la scadenza del voucher;
* `aud`: l'audience, ossia l'indicazione di quale servizio dell'erogatore il fruitore intenda consumare con il voucher.

### Focus sul token DPoP

Una volta terminate le verifiche sul voucher rilasciato da PDND Interoperabilità, si concentra sul secondo token, quello presente nell'header `DPoP`.

### Esempio di DPoP costruita dal fruitore deserializzata

Header:

```
{
  "typ": "dpop+jwt",
  "alg": "ES256",
  "jwk": "{CHIAVE_PUBBLICA_CHIAMANTE}"
}
```

Payload:

```
{
  "htm": "POST",
  "htu": "https://risorsa-dell-erogatore",
  "iat": 1747406361,
  "jti": "b60203a7-6f31-4d08-a3d1-f69ba308eee0",
  "ath": "PwqX1KUo2L2S5vSc9HYfgctjaAhBDrahit_fzESH5n8"
}
```

#### Verifiche sugli header e sulla firma

La chiave contenuta nell'header `jwk` deve corrispondere a quella usata per la firma della DPoP stessa.

#### Verifiche sui payload

Ciò che interessa ai fini della verifica è:

* che l'`htm` corrisponda al metodo effettivamente invocato e che l'`htu` corrisponda effettivamente all'endpoint dell'erogatore chiamato;
* che la DPoP sia stata emessa non oltre `iat` + 60 secondi con una tolleranza di ±10 secondi;
* che l'id unico, il `jti`, non sia presente nella cache dell'e-service;

### Verifiche incrociate

Vanno infine effettuate due verifiche incrociate sui due token (voucher PDND e DPoP), ossia

#### Verifica dell'ath

Bisogna verificare che l'`ath` della DPoP combaci con l'hash calcolato a partire dal voucher rilasciato da PDND Interoperabilità.

L'hash si ottiene usando SHA256 e deve essere codificato in Base64URL, con la seguente formula:

```
BASE64URL(SHA-256(access_token_bytes))
```

#### Verifica del thumbprint

Bisogna verificare che il thumbprint della chiave pubblica contenuta nella DPoP (campo `jwk`) sia identico al valore `cnf.jkt` nel voucher di PDND Interoperabilità.

Questo garantisce che la prima e la seconda DPoP siano firmate con la stessa chiave. La prima DPoP il fruitore l'ha indirizzata a PDND Interoperabilità nella propria richiesta di autorizzazione. PDND Interoperabilità l'ha poi riportata nel voucher che ha rilasciato. La seconda DPoP, il fruitore l'ha indirizzata direttamente all'erogatore.

Se tutte le verifiche passano i controlli, si può autorizzare la richiesta.

***

Pagina successiva [→ Come verificare il digest di un voucher](come-verificare-il-digest-di-un-voucher.md)
