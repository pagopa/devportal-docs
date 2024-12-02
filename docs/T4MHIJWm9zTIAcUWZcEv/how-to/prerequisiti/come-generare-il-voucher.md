# Come generare il Voucher

Il primo passo consiste nel creare una client assertion valida e firmarla con la chiave privata, che deve corrispondere alla chiave pubblica depositata sotto la sezione “I tuoi client e-service”. La client assertion è composta da due parti principali: un header e un payload.

Nell'header andranno inseriti tre campi:

* kid: l'id della chiave che si usa per firmare l'asserzione, reperibile all’interno del tuo client, sotto la sezione “Client assertion”;
* alg: l'algoritmo usato per firmare il JWT (valorizzare con RS256);
* typ: il tipo di oggetto che si sta inviando (valorizzare con JWT).

Nel payload ci saranno invece i seguenti campi:

* iss: l'issuer, ovvero il clientId;
* sub: il subject, anche in questo caso è il clientId;
* aud: l'audience, reperibile sempre nella sezione dedicata al tuo client;
* purposeId: l’id della finalità;
* jti: il JWT ID, un id unico random generato a cura del chiamante;
* iat: l'issued at, il timestamp riportante data e ora in cui viene creato il token, espresso in[ UNIX epoch](https://datatracker.ietf.org/doc/html/rfc3339) (valore numerico, non stringa);
* exp: l'expiration, il timestamp riportante data e ora di scadenza del token, espresso in[ UNIX epoch](https://datatracker.ietf.org/doc/html/rfc3339) (valore numerico, non stringa).

Una volta firmata l'asserzione, prendere l'output e tenerlo da parte.

Il secondo passaggio è chiamare il server autorizzativo di PDND Interoperabilità con la client assertion per ottenerne in cambio un voucher spendibile presso l’e-service desiderato.

L'URL dell'endpoint per l’ambiente di attestazione è il seguente:

https://auth.att.interop.pagopa.it/token.oauth2

L'endpoint deve essere invocato con i seguenti parametri nel body della richiesta:

* client\_id: il clientId usato nell'assertion;
* client\_assertion: il contenuto dell'asserzione firmata ottenuta nel primo passaggio;
* client\_assertion\_type: il formato della client assertion, come indicato in RFC (sarà sempre urn:ietf:params:oauth:client-assertion-type:jwt-bearer);
* grant\_type: la tipologia di flusso utilizzato, come indicato in RFC (sempre client\_credentials).

Se tutti i passaggi sono stati effettuati in maniera corretta, PDND Interoperabilità risponderà con un voucher valido all'interno del body della risposta.

Nello specifico il voucher sarà riportato nella proprietà access\_token. Nella risposta sarà anche presente la durata di validità del token in secondi (es. "expires\_in": 600 indica un token con validità 10 minuti, 10 \* 60 secondi = 600).

Il token ottenuto dovrà essere inserito nell'header Authorization: Bearer per tutte le chiamate fatte verso l’e-service.

\
