# Utilizzare i voucher

## Ciclo di vita

L'intero ciclo di vita dei voucher si compone di una serie di interazioni machine to machine. Il flusso è diverso se l'aderente sta richiedendo un voucher da spendere su un e-service del catalogo in qualità di fruitore o se vuole dialogare con le API di PDND Interoperabilità per ottenere informazioni.

I voucher sono di fatto dei token JWT. Il flusso di autenticazione implementato è un OAuth 2.0 che fa riferimento all'[RFC6750](https://datatracker.ietf.org/doc/html/rfc6750) per quanto riguarda l'uso del Bearer token e all'[RFC7521](https://datatracker.ietf.org/doc/html/rfc7521) per l'autorizzazione del client tramite client assertion.&#x20;

Il paradigma utilizzato per l'implementazione di tutte le API esposte di PDND Interoperabilità è REST.

{% hint style="info" %}
Ulteriori prove autorizzative o informazioni legate al dominio del fruitore possono essere previste nella comunicazione tra erogatore e fruitore, a discrezione delle parti.
{% endhint %}

## Richiesta di un voucher spendibile presso un e-service del catalogo

Questo flusso descrive il processo attraverso il quale il fruitore richiede un voucher a PDND Interoperabilità, e lo spende poi presso l'erogatore di un e-service.

Il pre-requisito per poter ottenere un voucher valido è aver caricato almeno una chiave pubblica, parte del proprio materiale crittografico, all'interno di un client e-service (disponibile sull'interfaccia del back office alla voce _Fruizione > I tuoi client e-service_). Per saperne di più, leggi la [s](client-e-materiale-crittografico.md)[ezione dedicata](client-e-materiale-crittografico.md).

{% hint style="info" %}
Si suggerisce di fare sempre riferimento alla guida passo passo implementata nel back office di PDND Interoperabilità. Alcune informazioni sono tuttavia riportate anche qui per completezza.
{% endhint %}

<figure><img src="../.gitbook/assets/Screen guida ottenere voucher" alt=""><figcaption><p>La guida in tre passi per ottenere l'accesso al token si trova sotto "I tuoi client e-service". Se si vuole aggiungere ad un Client già creato si deve cliccare su "Ispeziona", altrimenti su "Crea nuovo".</p></figcaption></figure>

### Il flusso in breve

In sostanza, il processo end-to-end richiede cinque passaggi:

1. il fruitore genera la client assertion
2. il fruitore chiede il voucher al server autorizzativo di PDND
3. il server autorizzativo di PDND effettua le verifiche necessarie. In caso di esito positivo, restituisce un voucher
4. il fruitore fa una richiesta verso l'e-service dell'erogatore
5. l'erogatore effettua le verifiche necessarie. In caso di esito positivo, restituisce i dati al fruitore

### 1. Il fruitore genera una client assertion

Il primo passo è costruire una _client assertion_ valida. La client assertion è composta da un header e un payload, contenenti i seguenti campi.

Header:

<table><thead><tr><th width="128.4140625">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>kid</code></td><td>l'id della chiave che si usa per firmare l'asserzione<em>,</em> reperibile su PDND Interoperabilità</td></tr><tr><td><code>alg</code></td><td>l'algoritmo usato per firmare il JWT (per ora, sempre <code>RS256</code>)</td></tr><tr><td><code>typ</code></td><td>il tipo di oggetto che si sta inviando (sempre <code>JWT</code>)</td></tr></tbody></table>

Payload:

<table><thead><tr><th width="127.37109375">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td>iss</td><td>l'issuer, in questo caso il <em>clientId</em></td></tr><tr><td>sub</td><td>il subject, in questo caso sempre il <em>clientId</em></td></tr><tr><td>aud</td><td>l'audience, reperibile su PDND Interoperabilità</td></tr><tr><td>jti</td><td>il JWT ID, un id unico random assegnato da chi vuole creare il token, si usa per tracciare il token stesso. Deve essere cura del chiamante assicurarsi che l'id di questo token sia unico per quanto riguarda la client assertion</td></tr><tr><td>iat</td><td>l'issued at, il timestamp riportante data e ora in cui viene creato il token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td>exp</td><td>l'expiration, il timestamp riportante data e ora di scadenza del token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td>purposeId</td><td>l'id della singola finalità per la quale si vuole ottenere un voucher, disponibile sul back office</td></tr><tr><td>digest</td><td>opzionale. Da compilare solamente se l'erogatore richiede espressamente delle informazioni aggiuntive. Il campo digest ha due valori: <code>alg</code>, l'algoritmo di hashing, che è sempre SHA256; <code>value</code>, l'hash del contenuto. Per maggiori informazioni, si veda la <a href="utilizzare-i-voucher.md#trasmettere-e-tracciare-dati-complementari-alla-richiesta">sezione dedicata</a></td></tr></tbody></table>

A titolo esemplificativo, di seguito un esempio di contenuto di client assertion deserializzata.

Header:

```
{
  "alg": "RS256",
  "kid": "2MJFa7aSSveFte8ULX9U-MaaygcoL5fBIJDTXBdba64",
  "typ": "jwt"
}
```

Payload:

```
{
  "iss": "8e9f24ca-78f5-4c69-9e4f-0efbeac7bb2b", 
  "sub": "8e9f24ca-78f5-4c69-9e4f-0efbeac7bb2b",
  "aud": "auth.interop.pagopa.it/client-assertion",
  "jti": "23387ac1-c192-4573-8350-207a4213d4be",
  "iat": 1616170068,
  "exp": 1616170668,
  "purposeId": "34f1624b-91cb-4b05-b8c0-cad208a30222",
  "digest": {
    "alg": "SHA256",
    "value": "5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065"
  }
}
```

Dopo aver costruito una _client assertion_ valida, questa deve essere firmata con la propria chiave privata (che deve essere l'omologa della chiave pubblica depositata sul client su PDND Interoperabilità).&#x20;

### 2. Il fruitore richiede un voucher a PDND

Il secondo passaggio è chiamare il server autorizzativo di PDND Interoperabilità con la client assertion per ottenerne in cambio un voucher spendibile presso l'API di di PDND Interoperabilità (ossia un token valido). L'URL dell'endpoint cambia in funzione dell'ambiente e sarà chiaramente visibile sull'interfaccia all'interno del back office. L'endpoint andrà chiamato con alcuni parametri nel body:

| Nome campo              | Significato                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `client_id`             | di nuovo il _clientId_ usato nell'assertion                                                                               |
| `client_assertion`      | il contenuto dell'asserzione firmata nel primo passaggio                                                                  |
| `client_assertion_type` | il formato della client assertion, come indicato in RFC (sempre `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`) |
| `grant_type`            | la tipologia di flusso utilizzato, come indicato in RFC (sempre `client_credentials`)                                     |

### 3. Il server di PDND verifica e rilascia il voucher

Se tutto è impostato correttamente, PDND Interoperabilità risponderà con un voucher valido all'interno del body della risposta alla proprietà `access_token`.&#x20;

Sempre nella risposta, sarà contenuta anche la durata di validità del voucher in secondi (es. `"expires_in": 600` indica un voucher con validità 10 minuti, 10 \* 60 secondi = 600). La durata del voucher è scelta dall'erogatore sulla base delle proprie considerazioni di sicurezza, e può variare da e-service a e-service.

### 4. Il fruitore richiede i dati all'erogatore

Il voucher andrà inserito nell'header di tutte le chiamate successive verso le API dell'erogatore. Andrà inserito come header, come segue:

```
Authorization: Bearer <voucher>
```

### 5. L'erogatore verifica la richiesta

{% hint style="danger" %}
Dal 3 giugno 2025 in ambiente di collaudo e dal 1° luglio in produzione saranno introdotti quattro nuovi claim. Servono a semplificare l’utilizzo della piattaforma e facilitare l’applicazione delle best practice nella verifica dei voucher erogati dalla PDND, nonché nell’uso delle relative **audience**. Tutti gli aggiornamenti saranno disponibili [qui](https://github.com/pagopa/pdnd-interop-frontend/issues/1215).
{% endhint %}

L'erogatore di un e-service deve poter verificare la legittimità di qualsiasi richiesta riceva dai fruitori. Prima di tutto, estrae il voucher rilasciato da PDND Interoperabilità dall'header `Authorization: Bearer` della richiesta, e lo deserializza.

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
  "client_id": "9b361d49-33f4-4f1e-a88b-4e12661f2309",
  "purposeId": "1b361d49-33f4-4f1e-a88b-4e12661f2300",
  "producerId" : "0e9e2dab-2e93-4f24-ba59-38d9f11198ca",
  "consumerId" : "69e2865e-65ab-4e48-a638-2037a9ee2ee7",
  "eserviceId" : "b8c6d7ad-93fc-4eaf-9018-3cd8bf98163f",
  "descriptorId": "9525a54b-9157-4b46-8976-ec66f20b7d7e",
  "digest": {
    "alg": "SHA256",
    "value": "5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065"
  }
}
```

#### Significato dei campi del voucher

Nell'header si troveranno tre camp&#x69;_:_

<table><thead><tr><th width="123.4765625">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>kid</code></td><td>l'id della chiave che usato per firmare il voucher<em>,</em> reperibile sul well known di PDND Interoperabilità (vedi sotto <a href="utilizzare-i-voucher.md#verifica-sulla-firma">Verifica sulla firma</a>)</td></tr><tr><td><code>alg</code></td><td>l'algoritmo usato per firmare il JWT ( <code>RS256</code>)</td></tr><tr><td><code>typ</code></td><td>il tipo di oggetto che si sta inviando (<code>at+jwt</code>)</td></tr></tbody></table>

Nel payload ci saranno invece tredici campi obbligatori, e uno opzionale:&#x20;

<table><thead><tr><th width="152.84765625">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>iss</code></td><td>l'issuer, rappresenta il dominio corrispondente all'authorization server di PDND Interoperabilità che ha rilasciato il voucher (ad esempio, l'issuer dell'ambiente di produzione è <code>interop.pagopa.it</code>)</td></tr><tr><td><code>nbf</code></td><td>not before, il timestamp dal quale è valido il voucher, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa). Per i voucher di PDND Interoperabilità, l'<code>nbf</code> corrisponde allo <code>iat</code>, ossia il voucher è spendibile immediatamente</td></tr><tr><td><code>iat</code></td><td>issued at, il timestamp nel quale è stato rilasciato il voucher, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td><code>exp</code></td><td>l'expiration, il timestamp riportante data e ora di scadenza del token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa). La durata del voucher (ossia la differenza tra <code>nbf</code> ed <code>exp</code>) dipende dal valore che l'erogatore ha impostato nella configurazione dell'e-service</td></tr><tr><td><code>jti</code></td><td>il JWT ID, un id unico random assegnato da PDND Interoperabilità</td></tr><tr><td><code>aud</code></td><td>l'audience, ossia l'indicazione di quale servizio dell'erogatore il fruitore intenda consumare con il voucher. Il valore riportato è quello che l'erogatore ha inserito nella configurazione dell'e-service</td></tr><tr><td><code>sub</code></td><td>il subject, in questo caso l'id del client che ha richiesto il voucher a PDND Interoperabilità</td></tr><tr><td><code>client_id</code></td><td>l'identificativo unico del client del fruitore che ha richiesto il voucher a PDND Interoperabilità (corrisponde al <code>sub</code>)</td></tr><tr><td><code>purposeId</code></td><td>l'identificativo unico della finalità per la quale è rilasciato il voucher</td></tr><tr><td><code>producerId</code></td><td>l'identificativo unico dell'erogatore dell'e-service</td></tr><tr><td><code>consumerId</code></td><td>l'identificativo unico del fruitore</td></tr><tr><td><code>eserviceId</code></td><td>l'identificativo unico dell'e-service</td></tr><tr><td><code>descriptorId</code></td><td>l'identificativo unico della versione di e-service</td></tr><tr><td><code>digest</code></td><td>il campo è opzionale. Fa parte del particolare caso d'uso nel quale l'erogatore richieda informazioni aggiuntive. Maggiori informazioni sono disponibili nella <a href="utilizzare-i-voucher.md#trasmettere-e-tracciare-dati-complementari-alla-richiesta">sezione dedicata</a></td></tr></tbody></table>

NB: il `client_id` è presente nel token e utilizza lo snake case invece del camel case per coerenza con l'RFC di riferimento.

#### Verifica sulla firma

L'erogatore scarica la lista di chiavi in uso da un file esposto nella cartella `.well-known` di PDND Interoperabilità (l'URL corretta è disponibile sull'interfaccia nel back office all'interno della scheda di ogni singolo e-service e cambia in funzione dell'ambiente; a titolo esemplificativo, [questa](https://interop.pagopa.it/.well-known/jwks.json) è quella di produzione).&#x20;

<figure><img src="../.gitbook/assets/screen well-known" alt=""><figcaption><p>Esempio in ambiente di test su dove si trova il .well-known, si apre la tendina cliccando sulla voce "Vedi i dettagli tecnici dell'e-service"</p></figcaption></figure>

All'interno del file, l'erogatore cerca l'oggetto che ha lo stesso `kid` presente nell'header del voucher. In quello stesso oggetto troverà la chiave pubblica al parametro `n`. Effettuerà dunque una verifica della firma, che la chiave privata usata per firmare il voucher corrisponda a quella pubblica appena ottenuta.

#### Verifiche standard da effettuare sul payload

I claim di interesse ai fini delle verifiche standard sono:

* `iss`: l'issuer deve essere PDND Interoperabilità;
* `nbf`: la data di inizio validità del voucher, che il voucher sia in corso di validità;
* `exp`: la scadenza del voucher, anche in questo caso che il voucher sia in corso di validità.

**Verifiche sulla corrispondenza della propria risorsa sul payload**

Per verificare la legittimità della richiesta per la specifica risorsa, è consigliato effettuare la verifica in uno di questi due modi.

Il primo è affiancare alla verifica dell'audience (campo `aud` ) quella del `producerId`. In questo modo, c'è la doppia certezza che la risorsa richiesta sia quella corretta, e che appartenga effettivamente al proprio ente.

Il secondo è verificare la corrispondenza di `eserviceId` e `descriptorId` rispetto alla propria risorsa. In questa maniera si ottiene una maggiore granularità di verifica.

L'una o l'altra modalità possono essere consigliate in base alle proprie architetture e configurazioni per valutare le richieste in ingresso.

#### Reperire e conservare gli identificativi

Gli identificativi unici sono diversi per ogni ambiente, cioè non sono gli stessi in ambiente di collaudo e di produzione.

`producerId` , `eserviceId`  e `descriptorId`  e l'audience (`aud`) sono reperibili attraverso l'interfaccia del back office nella scheda e-service di erogazione (_Erogazione > I tuoi e-service_).

`purposeId`  e `consumerId`  si trovano invece nella scheda finalità di erogazione (_Erogazione > Finalità_).

Tutti i parametri sono disponibili anche sulle [API esposte da PDND Interoperablità](api-esposte-da-pdnd-interoperabilita.md).

Gli id non cambiano nel tempo e non contengono informazioni sensibili. Si consiglia quindi di fare caching per una maggiore efficienza nella verifica.&#x20;

## Richiesta di un voucher spendibile presso le API di Interoperabilità

Questo flusso descrive il processo attraverso il quale il fruitore richiede un voucher a PDND Interoperabilità, e lo spende poi presso le API di PDND Interoperabilità.

Le istruzioni sono essenzialmente uguali a quelle del paragrafo precedente, con due eccezioni.

La prima è che il pre-requisito per poter ottenere un voucher valido è aver caricato almeno una chiave pubblica all'interno di un _client API Interop_. Anche qui, si veda la [sezione dedicata](client-e-materiale-crittografico.md#caricare-una-chiave-pubblica-in-un-client).

La seconda è che all'interno del payload della client assertion non va specificato il `purposeId`, ossia l'id della finalità per la quale si richiede il voucher. Non c'è bisogno di specificare alcuna finalità per interagire con le API di servizio esposte da PDND Interoperabilità.

Anche qui, il voucher andrà inserito nell'header di tutte le chiamate successive verso le API di PDND Interoperabilità. Andrà inserito nell'header `Authorization: Bearer`.

## Trasmettere e tracciare dati complementari alla richiesta

Per l'erogatore può essere necessario ottenere informazioni aggiuntive di audit che non fanno parte dei campi standard previsti da PDND Interoperabilità all'interno della client assertion. Un esempio può essere l'indirizzo IP del chiamante, oppure informazioni relative all'operatore che sta effettuando la richiesta.

Il meccanismo messo a punto permette all'erogatore di verificare che il fruitore abbia depositato una traccia su PDND Interoperabilità, che agisce da notaio in questo processo. Allo stesso tempo, le informazioni sono scambiate direttamente tra il fruitore e l'erogatore, senza che PDND Interoperabilità ne sia a conoscenza.

Per maggiori informazioni rimandiamo alla [documentazione di AgID sui pattern di sicurezza](https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2023/05/23/aggiornati-i-pattern-sicurezza-linee-guida-sullinteroperabilita-tecnica-pa).&#x20;

{% hint style="info" %}
Per poter vedere il "Documento operativo - Pattern di sicurezza" e relativi esempi contenuti nell'allegato "Linee guida sull’interoperabilità tecnica delle Pubbliche Amministrazioni" è necessario che lo stesso venga scaricato sul proprio pc e aperto con l'applicazione Adobe Acrobat. \
In questo modo si avrà un indice di tutti gli allegati contenuti nel document come da screen.

<img src="../.gitbook/assets/Screenshot 2024-05-20 alle 10.17.36.png" alt="" data-size="original">
{% endhint %}

### Il flusso in breve

Dal punto di vista tecnico, l'interazione si articola in alcuni passaggi, che sono di fatto una variazione sul tema rispetto al flusso standard di richiesta e verifica di un voucher, descritto [nelle sezioni sopra](utilizzare-i-voucher.md#richiesta-di-un-voucher-spendibile-presso-un-e-service-del-catalogo). In particolare:&#x20;

1. **il fruitore impacchetta le informazioni complementari**: il fruitore costruisce un `JWS` secondo la specifica definita nell'[RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) inserendo nell'header il `kid` di una chiave pubblica depositata su PDND Interoperabilità. Con la chiave privata corrispondente a quella pubblica firmerà questo `JWS`. Nel corpo (payload) del `JWS` inserisce le informazioni complementari da inviare all'erogatore;
2. **il fruitore calcola l'hash**: il fruitore calcola un hash non reversibile a partire dal `JWS` secondo l'algoritmo di hashing `SHA256`;
3. **il fruitore costruisce la client assertion**: il fruitore inserisce l'hash nel campo `digest` nella client assertion, per il resto compilata come nel flusso standard;
4. **il fruitore richiede un voucher a PDND Interoperabilità**: il fruitore inoltra a PDND Interoperabilità la richiesta per ottenere un voucher sulla base della client assertion, come da flusso standard;
5. **PDND Interoperabilità restituisce un voucher al fruitore**: PDND Interoperabilità rilascia un voucher al fruitore come nel flusso standard. Inoltre, il voucher rilasciato riporta al suo interno anche l'hash che il fruitore ha inserito nel campo `digest` client assertion inviata nella richiesta;
6. **il fruitore fa una richiesta di dati all'erogatore**: il fruitore invia quindi una richiesta all'erogatore, inserendo il voucher di PDND Interoperabilità nell'header autorizzativo `Authorization` secondo il flusso standard. Nella stessa chiamata, inserisce in un secondo header chiamato `Agid-JWT-TrackingEvidence` il `JWS` con le informazioni complementari;
7. **l'erogatore effettua le verifiche standard**: l'erogatore estrae il voucher rilasciato da PDND Interoperabilità dall'header `Authorization` ed effettua le sue verifiche, come da flusso standard;
8. **l'erogatore effettua verifiche aggiuntive sul JWS**: l'erogatore estrae il `JWS` dall'header `Agid-JWT-TrackingEvidence`. Verifica quindi sulle API di PDND Interoperabilità che la chiave pubblica corrispondente al `kid` inserito nell'header del `JWS` sia effettivamente depositata su PDND Interoperabilità e che il `JWS` sia stato firmato con la chiave privata corrispondente;
9. **l'erogatore calcola e confronta l'hash**: l'erogatore effettua la stessa operazione effettuata dal fruitore al punto 2. e calcola l'hash del `JWS`. Lo confronta quindi con quello inserito all'interno del voucher rilasciato da PDND Interoperabilità.

I due hash dovranno essere uguali, segno che quello che il fruitore ha dichiarato di aver trasmesso su PDND Interoperabilità è effettivamente ciò che l'erogatore (e lui solo) trova nelle informazioni complementari. Di seguito i passaggi nel dettaglio.

{% hint style="warning" %}
**NB:** è fatto divieto di inserire all'interno delle issue Github pubbliche le proprie client assertion o qualsiasi altro materiale di natura potenzialmente riservata o sensibile.\
Le issue che contengono informazioni potenzialmente sensibili potranno essere rimosse senza preavviso dagli amministratori.
{% endhint %}

### Il flusso in dettaglio

#### 1. Il fruitore impacchetta le informazioni complementari

Un `JWS` di esempio può avere header

```
{
  "alg": "RS256",
  "kid": "ZmYxZGE2YjQtMzY2Yy00NWI5LThjNGItMDJmYmQyZGIyMmZh",
  "typ": "JWT"
}
```

Il payload sarà invece costituito dalle informazioni aggiuntive che il fruitore vuole trasmettere all'erogatore. Il fruitore firma quindi il `JWS` con una chiave privata. La chiave pubblica corrispondente deve essere depositata su PDND Interoperabilità e avere per `kid` quello inserito nell'header del `JWS`.

NB: questa chiave e questo `kid` non devono necessariamente essere gli stessi con i quali si firma la client assertion al passaggio 3.

#### 2. Il fruitore calcola l'hash

A partire dalla codifica del `JWS` (ossia il `JWS` codificato secondo l'algoritmo inserito nell'header, in genere inizia per `ey`) il fruitore applica l'algoritmo di hashing `SHA256` al `JWS`, ottenendone un hash non reversibile a lunghezza fissa.&#x20;

A scopo esemplificativo, è possibile inserire in un terminale il seguente comando, previa installazione del pacchetto `openssl`

```
echo -n {JWS} | openssl sha256
```

per ottenere l'hash del `JWS`. Ad esempio, a fronte del JWS esempio con codifica

```
eyJhbGciOiJIUzI1NiIsImtpZCI6IlptWXhaR0UyWWpRdE16WTJZeTAwTldJNUxUaGpOR0l0TURKbVltUXlaR0l5TW1aaCIsInR5cCI6ImF0K2p3dCJ9.eyJqdGkiOiJkc2Zkc2Zkc2ZkcyIsImEiOiJiIn0.2QcY5UpoE2PgJhe1FKnHx-SZZq_NS6AKDTlfFdpVP9Q
```

si ottiene l'hash a lunghezza fissa

```
5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065
```

NB: la flag `-n` che viene passata nel primo comando indica che vengano rimosse eventuali "newline" non viste dall'operatore. Un'eventuale "newline" presente nel token fa cambiare il valore dell'hash che poi non corrisponderà all'atto della verifica dell'erogatore.

#### 3. Il fruitore costruisce la client assertion

Il fruitore prende quindi l'hash appena ottenuto, e lo inserisce nel payload della client assertion nel campo `digest.value`. Il campo `digest.alg` per adesso accetta solamente il valore `SHA256` (corrispondente all'algoritmo di hashing che è stato applicato al `JWS`).

```
{
  ...[altri campi della client assertion da flusso standard],
  "digest": {
    "alg": "SHA256",
    "value": "5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065"
  }
}
```

L'header della client assertion rimane invece invariato rispetto al flusso standard. La client assertion andrà firmata con la chiave privata corrispondente alla pubblica caricata su PDND Interoperabilità il quale `kid` è nell'header di questa asserzione.

#### 4. Il fruitore richiede un voucher a PDND Interoperabilità

In questo passaggio non ci sono variazioni rispetto al flusso standard. Il fruitore fa una richiesta di voucher al server autorizzativo di PDND Interoperabilità inviando la client assertion.

#### 5. PDND Interoperabilità restituisce un voucher al fruitore

Anche in questo passaggio non ci sono variazioni. Da notare che l'unica verifica che PDND Interoperabilità effettua sul campo digest è che rispetti la lunghezza della stringa prevista da `SHA256` (64 caratteri).

#### 6. Il fruitore fa una richiesta di dati all'erogatore

In questo passaggio, il fruitore costruisce una richiesta verso il servizio dell'erogatore secondo quanto descritto nel file di interfaccia e nella documentazione tecnica a corredo fornita dall'erogatore attraverso PDND Interoperabilità.&#x20;

Nella richiesta inserirà l'header standard `Authorization` che conterrà come `Bearer` token il voucher rilasciato da PDND Interoperabilità allo step precedente. Inoltre, il fruitore inserirà il `JWS` che contiene le informazioni complementari all'interno di un secondo header denominato `Agid-JWT-TrackingEvidence`.&#x20;

#### 7. L'erogatore effettua le verifiche standard

Per questo passaggio, si veda la [sezione dedicata](utilizzare-i-voucher.md#verifica-di-un-voucher-da-parte-di-un-erogatore-di-e-service) nel flusso standard.

#### 8. L'erogatore effettua le verifiche aggiuntive sul JWS

Dopo aver completato le verifiche standard, l'erogatore può effettuare le verifiche aggiuntive necessarie a garantire l'attendibilità delle informazioni complementari inserite nel `JWS` aggiuntivo.

Quindi verificherà l'autenticità e la validità della chiave privata con la quale è firmato il JWS. Per farlo:

1. si autentica sulle API di Interoperabilità come descritto nel [flusso dedicato](utilizzare-i-voucher.md#richiesta-di-un-voucher-spendibile-presso-le-api-di-interoperabilita);
2. effettua una chiamata `keys/{kid}` dove kid è valorizzato con il kid inserito nell'header del `JWS`;
3. ottiene da PDND Interoperabilità una chiave pubblica in risposta all'interno del campo `n`;
4. verifica la firma del `JWS`, effettuata dal fruitore con la chiave privata, con la chiave pubblica appena ottenuta.

Se l'erogatore ottiene un errore con status code `404 - Not found`, significa che la chiave non è presente su PDND Interoperabilità e dunque la richiesta è da ritenersi inattendibile.

#### 9. L'erogatore calcola e confronta l'hash

Se la chiave è presente e corrisponde, può procedere ad una seconda verifica, ossia quella notarile. In pratica, verifica che la traccia depositata su PDND Interoperabilità corrisponda a quella inserita all'interno del voucher rilasciato da PDND Interoperabilità.&#x20;

Se c'è corrispondenza, vuol dire che le informazioni complementari inserite all'interno del JWS sono effettivamente quelle che il fruitore ha dichiarato su PDND Interoperabilità di aver inserito.

Per farlo, l'erogatore prende il JWS ed effettua la stessa operazione effettuata dal fruitore nel secondo passaggio. Ottiene quindi l'hash non reversibile del JWS.

L'erogatore confronta quindi questo hash con quello presente all'interno del campo `digest.value` del voucher rilasciato da PDND Interoperabilità presente nell'header `Authorization`. Se i due hash sono uguali, il fruitore ha reso una dichiarazione che corrisponde ed è tracciata su PDND Interoperabilità.

### Indicazioni architetturali

Il meccanismo descritto al passaggio 8 della guida nella sezione precedente ha un limite: per ogni verifica di voucher, sarebbe necessario ottenere la chiave pubblica corrispondente al `kid` da PDND Interoperabilità, con evidenti ripercussioni sulle performance e sostenibilità del sistema.

Per ovviare, suggeriamo agli erogatori che sfruttano questa funzionalità di dotarsi di una cache nella quale conservare una copia delle chiavi pubbliche e dei relativi `kid`.&#x20;

Per supportare gli erogatori in quest'attività, PDND Interoperabilità mette a disposizione un secondo endpoint sulle proprie API:`/events/keys`.

#### Come funzionano gli eventi sulle chiavi?

Gli eventi sulle chiavi hanno lo stesso meccanismo di funzionamento di quello degli altri eventi, descritto nella [sezione dedicata](api-esposte-da-pdnd-interoperabilita.md#endpoint-di-notifica-eventi). In sostanza, è possibile chiamare l'endpoint `/events/keys` passando come parametri `lastEventId` (richiesto) e `limit` (opzionale, default a 100). Il primo indica l'id dell'ultimo evento scaricato, il secondo quanti eventi si intende scaricare.

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

Il meccanismo di caricamento e gestione delle chiavi è analogo a quello dei client, ed è disponibile nella sezione _Erogazione > I tuoi portachiavi_. Si rimanda alla [sezione dedicata](client-e-materiale-crittografico.md) per tutte le operazioni legate alla gestione di un portachiavi.

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

La chiave corrispondente al kid è disponibile sulle [API esposte da PDND Interoperabilità](api-esposte-da-pdnd-interoperabilita.md) al path `GET /keys/{kid}`, dal quale otterrà la chiave pubblica corrispondente al _kid_ in formato JWK.

#### Ricalcolo dell'hash

&#x20;Il fruitore calcola l’hash del contenuto di data usando lo stesso algoritmo utilizzato dell'erogatore (SHA-256).

#### Verifica della firma

Con la chiave pubblica individuata tramite _kid_, il fruitore verifica che la firma (campo _signature_) sia valida rispetto all’hash calcolato. Se corrispondono, il payload è autentico e integro; in caso contrario, potrebbe essere stato alterato o non provenire dall'e-service.

### Sicurezza e standard di riferimento

Il processo di firma e verifica segue specifiche internazionali che garantiscono la sicurezza. Gli standard di riferimento includono:

* [RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017) (PKCS #1): definisce le modalità di utilizzo dell’algoritmo RSA per la firma digitale;
* [RFC 7518](https://datatracker.ietf.org/doc/html/rfc7518) (JSON Web Algorithms): specifica gli algoritmi di firma, come RSA e SHA-256;
* [RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517) (JSON Web Key — JWK): questo documento specifica il formato JSON per rappresentare le chiavi crittografiche, sia pubbliche che private.

## Protezione avanzata del voucher con DPoP

Questa sezione spiega come attivare e usare Demonstrating Proof‑of‑Possession (DPoP) – lo standard IETF ([RFC 9449](https://datatracker.ietf.org/doc/html/rfc9449)) che rende un voucher (token JWT) inutilizzabile se sottratto, perché vincolato a una chiave pubblica posseduta dal chiamante.

### Chi decide l'uso di DPoP?

È l'erogatore a richiederlo. L'erogatore inserisce il DPoP all'interno delle informazioni del proprio file di interfaccia API. DPoP è consigliato per i casi d'uso in cui si desidera una protezione extra contro furto e replay dei token. Se non è espressamente richiesto l'uso di DPoP, si continua ad usare i voucher "Bearer" tradizionali.

### Perché usare DPoP?

<table><thead><tr><th width="160.23828125">Vantaggio</th><th>Cosa significa in pratica</th></tr></thead><tbody><tr><td>Token vincolato al chiamante</td><td>Il voucher contiene l'hash — il thumbprint — della chiave pubblica del chiamante; senza la chiave privata corrispondente non è possibile utilizzarlo.</td></tr><tr><td>Replay protetto</td><td>Ogni richiesta porta un piccolo JWT firmato (“DPoP”) con <code>htm</code> + <code>htu</code> + timestamp + <code>jti</code>; la stessa proof non può essere ri‑usata su un altro endpoint o oltre pochi minuti.</td></tr><tr><td>Zero certificati chiamante</td><td>Si ottiene un risultato simile a mTLS, ma con una semplice coppia di chiavi generata dal chiamante.</td></tr><tr><td>"Filo conduttore" crittografico</td><td>DPoP crea un legame unico tra gli attori coinvolti nel flusso OAuth2.0 attraverso la condivisione di un'informazione unica in possesso esclusivo del fruitore (chiave privata).</td></tr></tbody></table>

### Come attivare DPoP?

Il fruitore genera **una coppia di chiavi asimmetriche dedicata al DPoP**. **La chiave privata resta sempre** sul server o dispositivo del fruitore e non viene mai condivisa. Questa chiave **non deve essere depositata su PDND** né coincidere con una di quelle eventualmente registrate per la `client_assertion`: è indipendente e gestita dal fruitore.

DPoP incoraggia l’uso di chiavi **effimere o almeno separate**: la stessa chiave può firmare tutte le richieste di una "sessione", ma **ogni chiamata API** include una DPoP con `jti` e `iat` univoci, creando così un contesto crittografico distinto e non riutilizzabile da terzi.

Se necessario, il fruitore può mantenere la chiave DPoP per periodi più lunghi, purché rimanga diversa da quella usata per la client assertion.

#### Il flusso in breve

In sostanza, il processo end-to-end richiede sette passaggi:

1. il fruitore genera la client assertion standard; la firma con la chiave privata la cui pubblica è depositata sul proprio client su PDND Interoperabilità;
2. il fruitore costruisce la DPoP destinata al server autorizzativo di PDND; la firma con una seconda chiave privata la cui pubblica sarà inserita nell'intestazione della DPoP, nel campo `jwk`;
3. il fruitore chiede il voucher al server autorizzativo di PDND, aggiungendo l'header DPoP;
4. il server autorizzativo di PDND effettua le verifiche necessarie. In caso di esito positivo, restituisce un voucher di tipo DPoP;
5. il fruitore costruisce una seconda DPoP, questa volta destinata al resource server, ossia l'API dell'e-service dell'erogatore; la firma con la stessa chiava privata della DPoP al punto 2, mettendo anche qusta volta la chiave pubblica corrispondente nell'intestazione della DPoP, nel campo `jwk`;
6. il fruitore fa una richiesta verso l'e-service dell'erogatore; inserisce sia il voucher rilasciato da PDND Interoperabilità, sia la DPoP generata al punto precedente nell'header DPoP;
7. l'erogatore effettua le verifiche necessarie. In caso di esito positivo, restituisce i dati al fruitore.

Vediamoli in dettaglio.

#### 1. Il fruitore genera una client assertion

Il fruitore crea una client assertion secondo il processo standard (vedi [sezione dedicata](utilizzare-i-voucher.md#id-1.-generazione-client-assertion)).

#### 2. Il fruitore costruisce una prima DPoP

Il fruitore procede quindi alla costruzione della DPoP destinata al server autorizzativo di PDND, vale a dire un JWT con

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
  "htu": "https://auth.interop.pagopa.it/token.oauth2",
  "iat": 1747406361,
  "jti": "b60203a7-6f31-4d08-a3d1-f69ba308eee0"
}
```

Ecco nel dettaglio i campi sopra indicati:

<table><thead><tr><th width="112.5546875">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>typ</code></td><td>deve essere impostato a <code>dpop+jwt</code></td></tr><tr><td><code>alg</code></td><td>indica l'algoritmo usato per la firma della DPoP. L'algoritmo consigliato è ES256</td></tr><tr><td><code>jwk</code></td><td>la chiave pubblica in formato JWK corrispondente alla chiave privata utilizzata per firmare la DPoP</td></tr><tr><td><code>htm</code></td><td>indica il metodo HTTP che si sta invocando. Per l'ottenimento di un voucher da PDND Interoperabilità, il metodo è <code>POST</code></td></tr><tr><td><code>htu</code></td><td>indica l'URL che si sta invocando. Per l'ottenimento di un voucher da PDND Interoperabilità in ambiente di produzione è <code>https://auth.interop.pagopa.it/token.oauth2</code> (per gli ambienti di attestazione e collaudo va inserita quella specifica)</td></tr><tr><td><code>iat</code></td><td>l'issued at, il timestamp riportante data e ora in cui viene creata la DPoP, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td><code>jti</code></td><td>identificativo univoco della DPoP. Deve essere cura del fruitore assicurarsi che l'id di questo token sia unico e non venga riutilizzato</td></tr></tbody></table>

#### 3. Il fruitore richiede un voucher a PDND

Generate la DPoP e la client assertion, il fruitore può richiedere un voucher al server autorizzativo di PDND Interoperabilità secondo il processo standard ([vedi sezione dedicata](utilizzare-i-voucher.md#id-2.-richiesta-voucher-a-pdnd)), semplicemente aggiungendo nell'intestazione della richiesta l’header DPoP valorizzato con la DPoP prodotta:

<pre><code><strong>DPoP: &#x3C;DPoP_proof>
</strong></code></pre>

#### 4. Il server di PDND verifica e rilascia il voucher

Il server autorizzativo di PDND Interoperabilità effettua le verifiche necessarie, in particolare:

* verifica la `client-assertion` secondo i controlli già previsti;
* verifica la firma della DPoP utilizzando la chiave pubblica indicata nel campo `jwk` contenuto nel header;
* controlla che i campi `htm` e `htu` corrispondano ai valori attesi per la richiesta in corso;
* considera temporalmente valida una proof presentata entro 60 secondi dalla data di emissione della proof stessa (`iat`);
* verifica che il valore del campo `jti` non sia già stato utilizzato per un'altra chiamata verso il server autorizzativo di PDND Interoperabilità.

Il server autorizzativo di  PDND Interoperabilità, validata la DPoP, restituisce un voucher di tipo DPoP (campo `token_type`) firmato come JWT con header di tipo `"typ": "at+jwt"` e contenente un claim `cnf.jkt`.

La risposta che il server autorizzativo di PDND Interoperabilità restituisce è la seguente:

```
{
  "access_token": "eyJ0eXAiOiJhdCtqd3QiLC...",
  "expires_in": 600,
  "token_type": "DPoP"
}
```

Se decodifichiamo il campo dedicato all'`access_token`, troviamo

Header:

```
{
  "typ": "at+jwt",
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

#### 5. Il fruitore costruisce una seconda DPoP&#x20;

Il fruitore costruisce una seconda DPoP, che questa volta è destinata all'API dell'e-service dell'erogatore. Questa seconda DPoP è simile a quella prodotta nel secondo passaggio, con due differenze:&#x20;

* i campi `htm` e `htu` devono essere valorizzati con la risorsa che verrà chiamata sul server dell'erogatore indicata nel file di interfaccia API, invece che fare riferimento al server autorizzativo di PDND Interoperabilità;
* va inserito un altro campo, `ath` .

Il campo `ath` contiene l'hash del voucher rilasciato da PDND Interoperabilità. Questo hash è ottenuto usando SHA256 e deve essere codificato in Base64URL, con la seguente formula:

```
BASE64URL(SHA-256(access_token_bytes))
```

{% hint style="warning" %}
Questa seconda DPoP deve essere firmata con la stessa chiave privata utilizzata per la prima DPoP al secondo passaggio e destinata al server autorizzativo di PDND Interoperabilità.
{% endhint %}

#### 6. Il fruitore richiede i dati all'erogatore

Il fruitore può a questo punto procedere alla richiesta verso l'API dell'e-service. L'header Authorization, che in una chiamata standard sarebbe valorizzato con&#x20;

```
Authorization: Bearer <voucher_rilasciato_da_PDND>
```

è invece valorizzato con&#x20;

```
Authorization: DPoP <voucher_rilasciato_da_PDND>
```

Inoltre, il fruitore deve inserire anche un altro header, in particolare

<pre><code><strong>DPoP: &#x3C;DPoP_proof_generata_al_passaggio_precedente>
</strong></code></pre>

#### 7. L'erogatore verifica la richiesta

L'erogatore, ricevuta una richiesta in contesto DPoP, esegue i seguenti passaggi:

1. controlla la firma del voucher e che `typ="dpop+jwt"` ;
2. estrae `cnf.jkt` dal voucher;
3. verifica la DPoP ricevuta dal fruitore, in particolare:
   1. che la chiave contenuta nell'header `jwk` della DPoP corrisponda a quella usata per la firma della DPoP stessa;
   2. &#x20;che l'`htm` corrisponda al metodo effettivamente invocato e che l'`htu` corrisponda effettivamente all'endpoint chiamato;
   3. che la DPoP sia stata emessa non oltre `iat` + 60 secondi con una tolleranza di ±10 secondi;
   4. che l'id unico, il `jti`, non sia presente nella cache dell'e-service;
   5. che l'`ath`  combaci con l'hash calcolato sul voucher rilasciato da PDND Interoperabilità, seguendo la stessa procedura eseguita dal fruitore al passaggio 5;
4. calcola il thumbprint della chiave pubblica contenuta nella proof (`jwk`) e verifica che sia identico al `cnf.jkt`.

Se tutte le verifiche vanno a buon fine, la richiesta è autenticata.

Con questi passi, il voucher rilasciato da PDND Interoperabilità offre uno strumento efficace e standardizzato per proteggere ulteriormente le comunicazioni tra fruitore ed erogatore.

\
