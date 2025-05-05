# Voucher

## Ciclo di vita

L'intero ciclo di vita dei voucher si compone di una serie di interazioni _machine to machine_. Il flusso è diverso se l'aderente sta richiedendo un voucher da spendere su un e-service del catalogo in qualità di fruitore o se vuole dialogare con le API di PDND Interoperabilità per ottenere informazioni.

I voucher sono di fatto dei token JWT. Il flusso di autenticazione implementato è un OAuth 2.0 che fa riferimento all'[RFC6750](https://datatracker.ietf.org/doc/html/rfc6750) per quanto riguarda l'uso del Bearer token e all'[RFC7521](https://datatracker.ietf.org/doc/html/rfc7521) per l'autorizzazione del client tramite client assertion.&#x20;

Il paradigma utilizzato per l'implementazione di tutte le API esposte di PDND Interoperabilità è REST.

{% hint style="info" %}
Ulteriori prove autorizzative o informazioni legate al dominio del fruitore possono essere previste nella comunicazione tra erogatore e fruitore, a discrezione delle parti.
{% endhint %}

### Richiesta di un voucher

L'aderente costruisce una client assertion e la firma con una chiave privata la cui omologa pubblica è nota a PDND Interoperabilità. Successivamente, chiama il server autorizzativo di PDND Interoperabilità richiedendo un voucher valido per quell'asserzione firmata. In caso tutti i controlli diano riscontro positivo, PDND Interoperabilità restituisce un voucher all'aderente.

### Flusso voucher spendibile presso le API di Interoperabilità

L'aderente fa richiesta di un voucher. Una volta ottenuto, lo inserisce come header autorizzativo nelle successive chiamate verso le API di PDND Interoperabilità.

### Flusso voucher spendibile presso un e-service del catalogo

Il fruitore fa richiesta di un voucher. Una volta ottenuto, lo inserisce come header autorizzativo nelle chiamate che effettua verso l'e-service di un erogatore.

L'erogatore, ricevuta la richiesta con il voucher, effettua i debiti controlli. È possibile che alcuni di questi controlli richiedano il recupero di informazioni detenute da Interoperabilità. In quel caso, l'erogatore stesso dovrà richiedere un voucher spendibile presso le API di Interoperabilità. Una volta terminati i controlli, l'erogatore autorizza il fruitore all'accesso al servizio per la specifica finalità richiesta.

## Implementazione

Si suggerisce di fare sempre riferimento alla guida passo passo implementata nel back office di PDND Interoperabilità. Alcune informazioni sono tuttavia riportate anche qui per completezza.

<figure><img src="../../.gitbook/assets/Screen guida ottenere voucher" alt=""><figcaption><p>La guida in tre passi per ottenere l'accesso al token si trova sotto "I tuoi client e-service". Se si vuole aggiungere ad un Client già creato si deve cliccare su "Ispeziona", altrimenti su "Crea nuovo".</p></figcaption></figure>

### Richiesta di un voucher spendibile presso le API di Interoperabilità

Il pre-requisito per poter ottenere un voucher valido è aver caricato almeno una chiave pubblica, parte del proprio materiale crittografico, all'interno di un client api interop (disponibile sull'interfaccia del back office alla voce _Fruizione > I tuoi client api interop_). Per saperne di più, leggi la [s](../client-e-materiale-crittografico.md)[ezione dedicata](../client-e-materiale-crittografico.md).

Il primo passo è costruire una _client assertion_ valida e firmarla con la propria chiave privata (che deve essere l'omologa della chiave pubblica depositata sul client su PDND Interoperabilità). La client assertion è composta da un header e un payload.&#x20;

Nell'header andranno inseriti tre camp&#x69;_:_

* `kid`: l'id della chiave che si usa per firmare l'asserzion&#x65;_,_ reperibile su PDND Interoperabilità;
* `alg`: l'algoritmo usato per firmare il JWT (per ora, sempre `RS256`);
* `typ`: il tipo di oggetto che si sta inviando (sempre `JWT`).

Nel payload ci saranno invece sei campi:&#x20;

* `iss`: l'issuer, in questo caso il _clientId;_
* `sub`: il subject, in questo caso sempre il _clientId;_
* `aud`: l'audience, reperibile su PDND Interoperabilità;
* `jti`: il JWT ID, un id unico random assegnato da chi vuole creare il token, si usa per tracciare il token stesso. Deve essere cura del chiamante assicurarsi che l'id di questo token sia unico per quanto riguarda la client assertion;
* `iat`: l'issued at, il timestamp riportante data e ora in cui viene creato il token, espresso in [UNIX epoch](https://datatracker.ietf.org/doc/html/rfc3339) (valore numerico, non stringa);
* `exp`: l'expiration, il timestamp riportante data e ora di scadenza del token, espresso in [UNIX epoch](https://datatracker.ietf.org/doc/html/rfc3339) (valore numerico, non stringa).

Una volta firmata l'asserzione, prendere l'output e tenerlo da parte.

Il secondo passaggio è chiamare il server autorizzativo di PDND Interoperabilità con la client assertion per ottenerne in cambio un voucher spendibile presso l'API di di PDND Interoperabilità (ossia un token valido). L'URL dell'endpoint cambia in funzione dell'ambiente e sarà chiaramente visibile sull'interfaccia all'interno del back office. L'endpoint andrà chiamato con alcuni parametri in body:

* `client_id`: di nuovo il _clientId_ usato nell'assertion;
* `client_assertion`: il contenuto dell'asserzione firmata nel primo passaggio;
* `client_assertion_type`: il formato della client assertion, come indicato in RFC (sempre `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`);
* `grant_type`_:_ la tipologia di flusso utilizzato, come indicato in RFC (sempre `client_credentials`).

Se tutto è impostato correttamente, PDND Interoperabilità risponderà con un voucher valido all'interno del body della risposta alla proprietà `access_token`. Sempre nella risposta, sarà contenuta anche la durata di validità del token in secondi (es. `"expires_in": 600` indica un token con validità 10 minuti, 10 \* 60 secondi = 600).

Il token andrà inserito nell'header di tutte le chiamate successive verso le API gateway di PDND Interoperabilità come header `Authorization: Bearer`.

### Richiesta di un voucher spendibile presso un e-service del catalogo

Le istruzioni sono essenzialmente uguali a quelle del paragrafo precedente, con due eccezioni.

La prima è che il pre-requisito per poter ottenere un voucher valido è aver caricato almeno una chiave pubblica all'interno di un client e-service associato ad una finalità attiva, invece di un client api interop. Anche qui, si veda la [sezione dedicata](../client-e-materiale-crittografico.md#caricare-una-chiave-pubblica-in-un-client).

La seconda è che all'interno del payload della client assertion va specificato anche il `purposeId`, ossia l'id della finalità per la quale si richiede il voucher. Questo parametro è disponibile nel back office di PDND Interoperabilità.

### Verifica di un voucher da parte di un erogatore di e-service

L'erogatore di un e-service deve ovviamente poter verificare la legittimità di qualsiasi richiesta riceva. Prima di tutto, estrae il voucher dalla richiesta, dall'header `Authorization: Bearer` nel quale arriva, e lo deserializza.&#x20;

#### Contenuto di un voucher

A titolo esemplificativo, di seguito un esempio di contenuto di voucher deserializzato.

Header:

```
{
  "alg": "RS256",
  "kid": "ZmYxZGE2YjQtMzY2Yy00NWI5LThjNGItMDJmYmQyZGIyMmZh",
  "typ": "at+jwt"
}
```

Payload:

```
{
  "iss": "interop.pagopa.it", 
  "nbf": 1616170668,
  "iat": 1616170068,
  "exp": 1616170668,
  "jti": "12297ac1-c192-4573-8350-207a4213e5ac",
  "aud": "https://erogatore.example/ente-example/v1",
  "sub": "9b361d49-33f4-4f1e-a88b-4e12661f2309",
  "purposeId": "1b361d49-33f4-4f1e-a88b-4e12661f2300",
  "client_id": "9b361d49-33f4-4f1e-a88b-4e12661f2309"
}
```

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

Il parametro `purposeId` dà il riferimento della finalità per la quale il fruitore fa richiesta all'erogatore. Attraverso successive chiamate all'API gateway di PDND Interoperabilità è possibile richiedere tutte le informazioni di contesto, in caso siano necessarie (ossia i client associati, la richiesta di fruizione e l'e-service di riferimento, ecc).

## Trasmettere e tracciare dati complementari alla richiesta

Per l'erogatore può essere necessario ottenere informazioni aggiuntive che non fanno parte dei campi standard previsti da PDND Interoperabilità all'interno della client assertion. Un esempio può essere l'indirizzo IP del chiamante, oppure informazioni relative all'operatore che sta effettuando la richiesta.

Il meccanismo messo a punto permette all'erogatore di verificare che il fruitore abbia depositato una traccia su PDND Interoperabilità, che agisce da notaio in questo processo. Allo stesso tempo, le informazioni sono scambiate direttamente tra il fruitore e l'erogatore, senza che PDND Interoperabilità ne sia a conoscenza.

Per maggiori informazioni rimandiamo alla [documentazione di AgID sui pattern di sicurezza](https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2023/05/23/aggiornati-i-pattern-sicurezza-linee-guida-sullinteroperabilita-tecnica-pa).&#x20;

{% hint style="info" %}
Per poter vedere il "Documento operativo - Pattern di sicurezza" e relativi esempi contenuti nell'allegato "Linee guida sull’interoperabilità tecnica delle Pubbliche Amministrazioni" è necessario che lo stesso venga scaricato sul proprio pc e aperto con l'applicazione Adobe Acrobat. \
In questo modo si avrà un indice di tutti gli allegati contenuti nel document come da screen.

<img src="../../.gitbook/assets/Screenshot 2024-05-20 alle 10.17.36.png" alt="" data-size="original">
{% endhint %}

### Indicazioni architetturali

Il meccanismo descritto al passaggio 8 della guida nella sezione precedente ha un limite: per ogni verifica di voucher, sarebbe necessario ottenere la chiave pubblica corrispondente al `kid` da PDND Interoperabilità, con evidenti ripercussioni sulle performance e sostenibilità del sistema.

Per ovviare, suggeriamo agli erogatori che sfruttano questa funzionalità di dotarsi di una cache nella quale conservare una copia delle chiavi pubbliche e dei relativi `kid`.&#x20;

Per supportare gli erogatori in quest'attività, PDND Interoperabilità mette a disposizione un secondo endpoint sulle proprie API:`/events/keys`.

#### Come funzionano gli eventi sulle chiavi?

Gli eventi sulle chiavi hanno lo stesso meccanismo di funzionamento di quello degli altri eventi, descritto nella [sezione dedicata](../informazioni-utili/api-esposte-da-pdnd-interoperabilita.md#endpoint-di-notifica-eventi). In sostanza, è possibile chiamare l'endpoint `/events/keys` passando come parametri `lastEventId` (richiesto) e `limit` (opzionale, default a 100). Il primo indica l'id dell'ultimo evento scaricato, il secondo quanti eventi si intende scaricare.

Ogni risultato ha la seguente struttura:

```
{
  eventId: integer
  eventType: "ADDED" | "DELETED"
  objectType: "KEY"
  objectId: {
    kid: string
  }
}
```

NB: L'endpoint deve essere chiamato dall'aderente in modalità polling.

#### Un esempio di logica di business per l'implementazione della cache

Utilizzando l'endpoint `/events/keys` è possibile chiamare puntualmente l'endpoint `/keys/{kid}` per recuperare tutte le chiavi nuove che vengono aggiunte (quelle con `eventType == "ADDED"`).&#x20;

Quelle chiavi per le quali l'evento è `DELETED` vanno rimosse dalla propria cache. Se si vuole ottenere una controprova, anche qui è possibile chiamare l'endpoint `/keys/{kid}` con il `kid` della chiave che si è riscontrato essere stata cancellata, e il sistema restituirà uno status code `404 - Not Found`.

### Dove viene indicato se sono richieste informazioni aggiuntive?

La richiesta e il dettaglio implementativo delle informazioni aggiuntive dovranno essere esplicitate dall'erogatore all'interno della documentazione tecnica a corredo dell'e-service.

## Garanzia dell'integrità della risposta

È possibile per gli erogatori mettere a disposizione dei fruitori un ulteriore livello di sicurezza, che garantisca l'integrità della risposta fornita.

In sostanza, gli erogatori firmano la propria risposta con una chiave privata, la cui corrispondente chiave pubblica è depositata su PDND Interoperabilità per le dovute verifiche.

Il meccanismo di caricamento e gestione delle chiavi è analogo a quello dei client, ed è disponibile nella sezione _Erogazione > I tuoi portachiavi_. Si rimanda alla [sezione dedicata](../client-e-materiale-crittografico.md) per tutte le operazioni legate alla gestione di un portachiavi.

### Precondizioni&#x20;

* l'erogatore deve avere creato un portachiavi;
* deve averlo associato ad un e-service attraverso la tab "Portachiavi" disponibile all'interno della scheda e-service (_Erogazione > I tuoi e-service_);
* un suo operatore di sicurezza o amministratore deve aver caricato almeno una chiave pubblica all'interno di quel portachiavi.

Sarà quindi possibile per l'erogatore firmare la propria risposta con la propria chiave privata. Il fruitore potrà verificare la corrispondente chiave pubblica depositata su PDND Interoperabilità.

{% hint style="info" %}
Il ModI lascia discrezione all'erogatore nell'indicare qual debba essere la procedura corretta di firma del payload e verifica da parte del fruitore. Per questa ragione, PDND Interoperabilità non impone alcun vincolo in questo senso ad accezione dell'utilizzo di chiavi asimmetriche di tipo RSA in conformità con gli standard di sicurezza già adottati.
{% endhint %}

Di seguito riportiamo a titolo di esempio una possibile gestione del meccanismo di firma del payload di risposta di un e-service.

### Definizione della struttura della risposta

Questa sezione descrive come firmare un payload di risposta HTTP utilizzando RSA, per garantire che i dati provenienti da un e-service e non siano stati modificati.&#x20;

La risposta JSON che l'erogatore invia al fruitore sarà strutturata come segue:

```
{
  "data": {
    "campo1": "valore1",
    "campo2": "valore2"
  },
  "signature": "<firma_rsa_in_base64>",
  "kid": "<id_chiave_pubblica>"
}

```

dove

* **data**: contiene il payload, ossia i dati effettivi che l'e-service trasmette verso i fruitori;
* **signature**: contiene la firma digitale del campo data, calcolata dall'e-service utilizzando una chiave privata RSA (appartenente ad un portachiavi all'e-service) e codificata in formato base64;
* **kid**: identificatore della chiave usata per la firma; consente al fruitore di sapere quale chiave pubblica utilizzare per verificare la firma.

### Erogatore: firmare una risposta

#### Creazione dell'hash

Il contenuto del campo _data_ viene convertito in una stringa di byte e sottoposto a una funzione di hash utilizzando un algoritmo come SHA-256.

#### Firma dell'hash

L’hash calcolato è poi firmato utilizzando una delle chiavi RSA, identificata univocamente tramite _kid_, appartenente ad un portachiavi associato all'e-service. La firma garantisce che solo chi possiede la chiave privata corrispondente a _kid_ (erogatore) possa generare la firma specifica per quel contenuto. Il _kid_ della chiave pubblica che si è caricata è disponibile all'interno del portachiavi, aprendo la pagina relativa alla singola chiave (_Erogazione > I tuoi portachiavi_, clicchi sul portachiavi di interesse, tab _Chiavi pubbliche_, e clicchi sulla chiave di tuo interesse).

#### Integrazione della firma nella risposta

La firma è codificata in base64 e inclusa nel payload JSON nel campo _signature_, mentre _kid_ identifica univocamente la chiave usata, per consentire al fruitore di selezionare la chiave pubblica corretta per la verifica.

### Fruitore: verifica di una firma

Il fruitore può verificare l’autenticità e l’integrità dei dati ricevuti nella risposta utilizzando la chiave pubblica RSA associata all'e-service. All'interno della risposta troverà il campo _kid_, che identifica la chiave pubblica corrispondente alla privata che l'erogatore ha utilizzato per firmare la risposta.&#x20;

#### Identificazione della chiave corretta

La chiave corrispondente al kid è disponibile sulle [API esposte da PDND Interoperabilità](../informazioni-utili/api-esposte-da-pdnd-interoperabilita.md) al path `GET /keys/{kid}`, dal quale otterrà la chiave pubblica corrispondente al _kid_ in formato JWK.

#### Ricalcolo dell'hash

&#x20;Il fruitore calcola l’hash del contenuto di data usando lo stesso algoritmo utilizzato dell'erogatore (SHA-256).

#### Verifica della firma

Con la chiave pubblica individuata tramite _kid_, il fruitore verifica che la firma (campo _signature_) sia valida rispetto all’hash calcolato. Se corrispondono, il payload è autentico e integro; in caso contrario, potrebbe essere stato alterato o non provenire dall'e-service.

### Sicurezza e standard di riferimento

Il processo di firma e verifica segue specifiche internazionali che garantiscono la sicurezza. Gli standard di riferimento includono:

* [RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017) (PKCS #1): definisce le modalità di utilizzo dell’algoritmo RSA per la firma digitale;
* [RFC 7518](https://datatracker.ietf.org/doc/html/rfc7518) (JSON Web Algorithms): specifica gli algoritmi di firma, come RSA e SHA-256;
* [RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517) (JSON Web Key — JWK): questo documento specifica il formato JSON per rappresentare le chiavi crittografiche, sia pubbliche che private.
