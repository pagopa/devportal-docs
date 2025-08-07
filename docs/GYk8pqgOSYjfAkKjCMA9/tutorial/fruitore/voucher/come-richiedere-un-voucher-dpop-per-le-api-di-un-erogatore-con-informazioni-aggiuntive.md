# Come richiedere un voucher DPoP per le API di un erogatore (con informazioni aggiuntive)

Questo tutorial spiega come richiedere un voucher che utilizza Demonstrating Proof‑of‑Possession (DPoP) – lo standard IETF ([RFC 9449](https://datatracker.ietf.org/doc/html/rfc9449)) che rende un voucher (token JWT) inutilizzabile se sottratto, perché vincolato a una chiave pubblica posseduta dal chiamante. Per maggiori dettagli, si veda l'[approfondimento](../../../guida-tecnica/utilizzare-i-voucher/approfondimento-su-dpop.md).

Il JWS contenente le informazioni aggiuntive rispetta l'[RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) e il pattern individuato, cioè quello previsto da AgID nel ModI (_Audit REST 02)_. Per maggiori informazioni, si veda la [sezione dedicata](../../../guida-tecnica/utilizzare-i-voucher/tipi-di-richiesta-di-voucher.md#dpop-spendibile-presso-le-api-di-un-erogatore-con-informazioni-aggiuntive-pattern-modi-audit-rest-02).

## Il flusso in breve <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

In sostanza, il processo end-to-end richiede nove passaggi:

1. il fruitore genera un token a partire dalle informazioni aggiuntive;
2. il fruitore calcola un hash a partire dal token;
3. il fruitore genera la client assertion inserendo al suo interno l'hash che si riferisce al token; la firma con la chiave privata la cui pubblica è depositata sul proprio client su PDND Interoperabilità;
4. il fruitore costruisce la DPoP destinata al server autorizzativo di PDND; la firma con una seconda chiave privata la cui pubblica sarà inserita nell'intestazione della DPoP, nel campo `jwk`;
5. il fruitore chiede il voucher al server autorizzativo di PDND, aggiungendo l'header DPoP;
6. il server autorizzativo di PDND effettua le verifiche necessarie. In caso di esito positivo, restituisce un voucher di tipo DPoP;
7. il fruitore costruisce una seconda DPoP, questa volta destinata al resource server, ossia l'API dell'e-service dell'erogatore; la firma con la stessa chiava privata della DPoP al punto 3, mettendo anche qusta volta la chiave pubblica corrispondente nell'intestazione della DPoP, nel campo `jwk`;
8. il fruitore fa una richiesta verso l'e-service dell'erogatore; inserisce sia il voucher rilasciato da PDND Interoperabilità nell'header `Authorization`, sia la DPoP generata al punto precedente nell'header `DPoP`, sia il JWS con le informazioni aggiuntive generato al punto 1 nell'header `AgID-JWT-TrackingEvidence`;
9. l'erogatore effettua le verifiche necessarie. In caso di esito positivo, elabora la richiesta del fruitore.

## Prerequisiti <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

Si assume che il fruitore abbia:

* creato un client di tipo e-service ([vedi tutorial](../back-office/come-creare-un-client.md));
* generato almeno un set di materiale crittografico e caricato la relativa chiave pubblica su PDND Interoperabilità all'interno del client ([vedi tutorial](../back-office/come-generare-corredo-crittografico-e-caricare-chiavi-pubbliche.md));
* associato il client alla finalità per la quale vuole ottenere o inviare dati all'erogatore ([vedi tutorial](../back-office/come-associare-un-client-ad-una-finalita.md)).

## Step 1 - Generazione del token contenente le informazioni aggiuntive <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

Il fruitore costruisce un JWS, inserendo nell'header il `kid` di una chiave pubblica depositata su PDND Interoperabilità. Con la chiave privata corrispondente a quella pubblica firmerà questo JWS. Nel corpo (payload) del JWS inserisce le informazioni complementari da inviare all'erogatore.

Un JWS di esempio può avere header

```
{
  "alg": "RS256",
  "kid": "ZmYxZGE2YjQtMzY2Yy00NWI5LThjNGItMDJmYmQyZGIyMmZh",
  "typ": "JWT"
}
```

NB: la chiave privata che firma e il  `kid` della pubblica corrispondente depositata su PDND Interoperabilità non devono necessariamente essere gli stessi con i quali si firma la client assertion allo step 3.

## Step 2 - Calcolare l'hash del JWS <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

A partire dalla codifica del JWS (ossia il JWS codificato secondo l'algoritmo inserito nell'header, in genere inizia per `ey`) il fruitore applica l'algoritmo di hashing SHA256 al JWS, ottenendone un hash non reversibile a lunghezza fissa.

A scopo esemplificativo, è possibile inserire in un terminale il seguente comando, previa installazione del pacchetto `openssl`

```
echo -n {JWS} | openssl sha256
```

per ottenere l'hash del JWS. Ad esempio, a fronte del JWS esempio con codifica

```
eyJhbGciOiJIUzI1NiIsImtpZCI6IlptWXhaR0UyWWpRdE16WTJZeTAwTldJNUxUaGpOR0l0TURKbVltUXlaR0l5TW1aaCIsInR5cCI6ImF0K2p3dCJ9.eyJqdGkiOiJkc2Zkc2Zkc2ZkcyIsImEiOiJiIn0.2QcY5UpoE2PgJhe1FKnHx-SZZq_NS6AKDTlfFdpVP9Q
```

si ottiene l'hash a lunghezza fissa

```
5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065
```

NB: la flag `-n` che viene passata nel primo comando indica che vengano rimosse eventuali "newline" non viste dall'operatore. Un'eventuale "newline" presente nel token fa cambiare il valore dell'hash che poi non corrisponderà all'atto della verifica dell'erogatore.

## Step 3 - Generazione della client assertion <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

Il primo passo è costruire una _client assertion_ valida. La client assertion è composta da un header e un payload, contenenti i seguenti campi.

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

È inoltre disponibile una funzione per verificare la validità della propria client assertion ed evidenziare eventuali errori. Lo strumento è disponibile nel back office su _**Tool per lo sviluppo > Debug client assertion**_.

## Step 4 - Generazione della prima DPoP <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

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

## Step 5 - Richiedere il voucher al server autorizzativo

Il terzo passaggio è chiamare il server autorizzativo di PDND Interoperabilità con la client assertion firmata per ottenerne in cambio un voucher spendibile presso le API di PDND Interoperabilità.

Nell'header della richiesta dovrà inserire un header DPoP, che conterrà la DPoP generata al passaggio precedente:

<pre><code><strong>DPoP: &#x3C;DPoP_proof>
</strong></code></pre>

L'URL dell'endpoint alla quale si trova il server autorizzativo cambia in funzione dell'ambiente in cui ci si trova e sarà chiaramente visibile sull'interfaccia all'interno del back office.&#x20;

L'endpoint andrà chiamato con alcuni parametri nel body:

| Nome campo              | Significato                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `client_id`             | di nuovo il _clientId_ usato nell'assertion                                                                               |
| `client_assertion`      | il contenuto dell'asserzione firmata nel primo passaggio                                                                  |
| `client_assertion_type` | il formato della client assertion, come indicato in RFC (sempre `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`) |
| `grant_type`            | la tipologia di flusso utilizzato, come indicato in RFC (sempre `client_credentials`)                                     |

## Step 6 - Il server autorizzativo verifica, e rilascia il voucher

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
  },
  "digest": {
    "alg": "SHA256",
    "value": "5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065"
  }
}
```

dove il campo `cnf.jkt` contiene il thumbprint della chiave pubblica in formato JWK ([RFC 7638](https://datatracker.ietf.org/doc/html/rfc7638)) utilizzata nella DPoP inviata dal fruitore (client) verso PDND Interoperabilità (server autorizzativo).

## Step 7 - Costruire una seconda DPoP&#x20;

Il fruitore costruisce una seconda DPoP, che questa volta è destinata alle API dell'e-service dell'erogatore. Questa seconda DPoP è simile a quella prodotta nel secondo passaggio, con due differenze:&#x20;

* i campi `htm` e `htu` devono essere valorizzati con la risorsa che verrà chiamata sul server dell'erogatore indicata nel file di interfaccia API, invece che fare riferimento al server autorizzativo di PDND Interoperabilità;
* va inserito un altro campo, `ath` .

Il campo `ath` contiene l'hash del voucher rilasciato da PDND Interoperabilità. Questo hash è ottenuto usando SHA256 e deve essere codificato in Base64URL, con la seguente formula:

```
BASE64URL(SHA-256(access_token_bytes))
```

{% hint style="warning" %}
Questa seconda DPoP deve essere firmata con la stessa chiave privata utilizzata per la prima DPoP al secondo passaggio e destinata al server autorizzativo di PDND Interoperabilità.
{% endhint %}

## Step 8 - Richiedere i dati all'ergoatore

Il voucher andrà inserito nell'header di tutte le chiamate successive verso le API dell'erogatore. Andrà inserito come header, come segue:

```
Authorization: DPoP <voucher_rilasciato_da_PDND>
```

Inoltre, il fruitore deve inserire anche due header, in particolare:

<pre><code><strong>DPoP: &#x3C;DPoP_proof_generata_al_passaggio_precedente>
</strong></code></pre>

Inoltre, il JWS creato allo step 1 andrà inserito all'interno di un altro header della chiamata, codificato da AgID come segue

<pre><code><strong>Agid-JWT-TrackingEvidence: &#x3C;jws>
</strong></code></pre>

## Step 9 - Attendere le verifiche dell'erogatore

L'erogatore effettua tutte le verifiche necessarie. Se tutto è in ordine, elabora la richiesta del fruitore, restituendogli i dati richiesti in caso di e-service che eroga dati, oppure accettando i dati dal fruitore in caso di e-service che riceve dati.

Per consultare le verifiche consigliate agli erogatori, si veda la [sezione dedicata](../../../guida-tecnica/utilizzare-i-voucher/verifiche-su-un-voucher-dpop-da-parte-di-un-erogatore.md).
