# Come richiedere un voucher Bearer per le API di un erogatore (con informazioni aggiuntive)

Il JWS contenente le informazioni aggiuntive rispetta l'[RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) e il pattern individuato, cioè quello previsto da AgID nel ModI (_Audit REST 02)_. Per maggiori informazioni, si veda la [sezione dedicata](../guida-tecnica/utilizzare-i-voucher/ciclo-di-vita.md#bearer-token-spendibile-presso-le-api-di-un-erogatore-con-informazioni-aggiuntive-pattern-modi-audit).

## Il flusso in breve <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

In sostanza, il processo end-to-end richiede sette passaggi:

1. il fruitore genera un token a partire dalle informazioni aggiuntive
2. il fruitore calcola un hash a partire dal token;
3. il fruitore genera la client assertion inserendo al suo interno l'hash che si riferisce al token;
4. il fruitore chiede il voucher al server autorizzativo di PDND;
5. il server autorizzativo di PDND effettua le verifiche necessarie. In caso di esito positivo, restituisce un voucher;
6. il fruitore fa una richiesta verso le API dell'erogatore;
7. l'erogatore effettua le verifiche necessarie. In caso di esito positivo, elabora la richiesta del fruitore.

## Prerequisiti <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

Si assume che il fruitore abbia:

* creato un client di tipo e-service ([vedi tutorial](../tutorial-back-office/come-creare-un-client.md));
* generato almeno un set di materiale crittografico e caricato la relativa chiave pubblica su PDND Interoperabilità all'interno del client ([vedi tutorial](../tutorial-back-office/come-generare-corredo-crittografico-e-caricare-chiavi-pubbliche.md));
* associato il client alla finalità per la quale vuole ottenere o inviare dati all'erogatore ([vedi tutorial](../tutorial-back-office/come-associare-un-client-ad-una-finalita.md)).

## Step 1 - Generazione del token contenente le informazioni aggiuntive <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

Il fruitore costruisce un `JWS` , inserendo nell'header il `kid` di una chiave pubblica depositata su PDND Interoperabilità. Con la chiave privata corrispondente a quella pubblica firmerà questo `JWS`. Nel corpo (payload) del `JWS` inserisce le informazioni complementari da inviare all'erogatore.

Un `JWS` di esempio può avere header

```
{
  "alg": "RS256",
  "kid": "ZmYxZGE2YjQtMzY2Yy00NWI5LThjNGItMDJmYmQyZGIyMmZh",
  "typ": "JWT"
}
```

NB: la chiave privata che firma e il  `kid` della pubblica corrispondente depositata su PDND Interoperabilità non devono necessariamente essere gli stessi con i quali si firma la client assertion allo step 3.

## Step 2 - Calcolare l'hash del JWS <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

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

## Step 3 - Generazione della client assertion <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

Va quindi costruita una _client assertion_ valida. La client assertion è composta da un header e un payload, contenenti i seguenti campi.

Header:

<table><thead><tr><th width="128.4140625">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>kid</code></td><td>l'id della chiave che si usa per firmare l'asserzione<em>,</em> reperibile su PDND Interoperabilità</td></tr><tr><td><code>alg</code></td><td>l'algoritmo usato per firmare il JWT (per ora, sempre <code>RS256</code>)</td></tr><tr><td><code>typ</code></td><td>il tipo di oggetto che si sta inviando (sempre <code>JWT</code>)</td></tr></tbody></table>

Payload:

<table><thead><tr><th width="127.37109375">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td>iss</td><td>l'issuer, in questo caso il <em>clientId</em></td></tr><tr><td>sub</td><td>il subject, in questo caso sempre il <em>clientId</em></td></tr><tr><td>aud</td><td>l'audience, reperibile su PDND Interoperabilità</td></tr><tr><td>jti</td><td>il JWT ID, un id unico random assegnato da chi vuole creare il token, si usa per tracciare il token stesso. Deve essere cura del chiamante assicurarsi che l'id di questo token sia unico per quanto riguarda la client assertion</td></tr><tr><td>iat</td><td>l'issued at, il timestamp riportante data e ora in cui viene creato il token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td>exp</td><td>l'expiration, il timestamp riportante data e ora di scadenza del token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td>purposeId</td><td>l'id della singola finalità per la quale si vuole ottenere un voucher, disponibile sul back office</td></tr><tr><td>digest</td><td>il campo digest ha due valori: <code>alg</code>, l'algoritmo di hashing, che è sempre SHA256; <code>value</code>, l'hash calcolato allo step 2</td></tr></tbody></table>

A titolo esemplificativo, di seguito un esempio di contenuto di client assertion deserializzata, in modo da evidenziarne il contenuto.

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

Dopo aver costruito una _client assertion_ valida, questa deve essere firmata con la propria chiave privata (che deve essere l'omologa della chiave pubblica depositata sul client su PDND Interoperabilità).

A scopo esemplificativo, è stato pubblicato uno script Python per dimostrare come eseguire l'operazione. Tutte le istruzioni sono disponibili nel back office, all'interno del proprio client.

È inoltre disponibile una funzione per verificare la validità della propria client assertion ed evidenziare eventuali errori. Lo strumento è disponibile nel back office su _**Fruizione > Debug client assertion**_.

## Step 4 - Richiedere il voucher al server autorizzativo

Il secondo passaggio è chiamare il server autorizzativo di PDND Interoperabilità con la client assertion firmata per ottenerne in cambio un voucher spendibile presso le API di PDND Interoperabilità.&#x20;

L'URL dell'endpoint alla quale si trova il server autorizzativo cambia in funzione dell'ambiente in cui ci si trova e sarà chiaramente visibile sull'interfaccia all'interno del back office.&#x20;

L'endpoint andrà chiamato con alcuni parametri nel body:

| Nome campo              | Significato                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `client_id`             | di nuovo il _clientId_ usato nell'assertion                                                                               |
| `client_assertion`      | il contenuto dell'asserzione firmata nel primo passaggio                                                                  |
| `client_assertion_type` | il formato della client assertion, come indicato in RFC (sempre `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`) |
| `grant_type`            | la tipologia di flusso utilizzato, come indicato in RFC (sempre `client_credentials`)                                     |

## Step 5 - Il server autorizzativo verifica, e rilascia il voucher

Se tutto è impostato correttamente, PDND Interoperabilità risponderà con un voucher valido all'interno del body della risposta alla proprietà `access_token`.&#x20;

Sempre nella risposta, sarà contenuta anche la durata di validità del voucher in secondi (es. `"expires_in": 600`  indica un voucher con validità 10 minuti, 10 \* 60 secondi = 600). La durata del voucher è scelta dall'erogatore sulla base delle proprie considerazioni di sicurezza, e può variare da e-service a e-service.

La risposta che il server autorizzativo di PDND Interoperabilità restituisce è la seguente:

```
{
  "access_token": "eyJ0eXAiOiJhdCtqd3QiLC...",
  "expires_in": 600
}
```

Se decodifichiamo il campo dedicato all'`access_token`, troviamo

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
  "descriptorId": "9525a54b-9157-4b46-8976-ec66f20b7d7e",
  "digest": {
    "alg": "SHA256",
    "value": "5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065"
  }
}
```

## Step 6 - Richiedere i dati all'ergoatore

Il voucher andrà inserito nell'header di tutte le chiamate successive verso le API dell'erogatore. Andrà inserito come header, come segue:

<pre><code><strong>Authorization: Bearer &#x3C;voucher>
</strong></code></pre>

Inoltre, il JWS creato allo step 1 andrà inserito all'interno di un altro header della chiamata, codificato da AgID come segue

<pre><code><strong>Agid-JWT-TrackingEvidence: &#x3C;jws>
</strong></code></pre>

## Step 7 - Attendere le verifiche dell'erogatore

L'erogatore effettua tutte le verifiche necessarie. Se tutto è in ordine, elabora la richiesta del fruitore, restituendogli i dati richiesti in caso di e-service che eroga dati, oppure accettando i dati dal fruitore in caso di e-service che riceve dati.

Per consultare le verifiche consigliate agli erogatori, si veda la [sezione dedicata](../guida-tecnica/utilizzare-i-voucher/verifiche-su-un-voucher-bearer-da-parte-di-un-erogatore.md). Inoltre, è possibile consultare le verifiche da fare per quanto riguarda il digest, specifico di questo flusso, nella [sezione dedicata](../guida-tecnica/utilizzare-i-voucher/verifiche-sul-digest-da-parte-di-un-erogatore.md).
