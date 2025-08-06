# Come richiedere un voucher Bearer per le API di un erogatore (base)

Maggiori informazioni su questa implementazione nella [sezione dedicata](../guida-tecnica-prodotto/utilizzare-i-voucher/tipi-di-richiesta-di-voucher.md#bearer-token-spendibile-presso-le-api-di-un-erogatore-base).

## Il flusso in breve <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

In sostanza, il processo end-to-end richiede cinque passaggi:

1. il fruitore genera la client assertion;
2. il fruitore chiede il voucher al server autorizzativo di PDND;
3. il server autorizzativo di PDND effettua le verifiche necessarie. In caso di esito positivo, restituisce un voucher;
4. il fruitore fa una richiesta verso le API dell'erogatore;
5. l'erogatore effettua le verifiche necessarie. In caso di esito positivo, elabora la richiesta del fruitore.

## Prerequisiti <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

Si assume che il fruitore abbia:

* creato un client di tipo e-service ([vedi tutorial](../tutorial-back-office/come-creare-un-client.md));
* generato almeno un set di materiale crittografico e caricato la relativa chiave pubblica su PDND Interoperabilità all'interno del client ([vedi tutorial](../tutorial-back-office/come-generare-corredo-crittografico-e-caricare-chiavi-pubbliche.md));
* associato il client alla finalità per la quale vuole ottenere o inviare dati all'erogatore ([vedi tutorial](../tutorial-back-office/come-associare-un-client-ad-una-finalita.md)).

## Step 1 - Generazione della client assertion <a href="#il-flusso-in-breve" id="il-flusso-in-breve"></a>

Il primo passo è costruire una _client assertion_ valida. La client assertion è composta da un header e un payload, contenenti i seguenti campi.

Header:

<table><thead><tr><th width="128.4140625">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>kid</code></td><td>l'id della chiave che si usa per firmare l'asserzione<em>,</em> reperibile su PDND Interoperabilità</td></tr><tr><td><code>alg</code></td><td>l'algoritmo usato per firmare il JWT (per ora, sempre <code>RS256</code>)</td></tr><tr><td><code>typ</code></td><td>il tipo di oggetto che si sta inviando (sempre <code>JWT</code>)</td></tr></tbody></table>

Payload:

<table><thead><tr><th width="127.37109375">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td>iss</td><td>l'issuer, in questo caso il <em>clientId</em></td></tr><tr><td>sub</td><td>il subject, in questo caso sempre il <em>clientId</em></td></tr><tr><td>aud</td><td>l'audience, reperibile su PDND Interoperabilità</td></tr><tr><td>jti</td><td>il JWT ID, un id unico random assegnato da chi vuole creare il token, si usa per tracciare il token stesso. Deve essere cura del chiamante assicurarsi che l'id di questo token sia unico per quanto riguarda la client assertion</td></tr><tr><td>iat</td><td>l'issued at, il timestamp riportante data e ora in cui viene creato il token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td>exp</td><td>l'expiration, il timestamp riportante data e ora di scadenza del token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td>purposeId</td><td>l'id della singola finalità per la quale si vuole ottenere un voucher, disponibile sul back office</td></tr></tbody></table>

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
  "purposeId": "34f1624b-91cb-4b05-b8c0-cad208a30222"
}
```

Dopo aver costruito una _client assertion_ valida, questa deve essere firmata con la propria chiave privata (che deve essere l'omologa della chiave pubblica depositata sul client su PDND Interoperabilità).

A scopo esemplificativo, è stato pubblicato uno script Python per dimostrare come eseguire l'operazione. Tutte le istruzioni sono disponibili nel back office, all'interno del proprio client.

È inoltre disponibile una funzione per verificare la validità della propria client assertion ed evidenziare eventuali errori. Lo strumento è disponibile nel back office su _**Fruizione > Debug client assertion**_.

## Step 2 - Richiedere il voucher al server autorizzativo

Il secondo passaggio è chiamare il server autorizzativo di PDND Interoperabilità con la client assertion firmata per ottenerne in cambio un voucher spendibile presso le API di PDND Interoperabilità.&#x20;

L'URL dell'endpoint alla quale si trova il server autorizzativo cambia in funzione dell'ambiente in cui ci si trova e sarà chiaramente visibile sull'interfaccia all'interno del back office.&#x20;

L'endpoint andrà chiamato con alcuni parametri nel body:

| Nome campo              | Significato                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `client_id`             | di nuovo il _clientId_ usato nell'assertion                                                                               |
| `client_assertion`      | il contenuto dell'asserzione firmata nel primo passaggio                                                                  |
| `client_assertion_type` | il formato della client assertion, come indicato in RFC (sempre `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`) |
| `grant_type`            | la tipologia di flusso utilizzato, come indicato in RFC (sempre `client_credentials`)                                     |

## Step 3 - Il server autorizzativo verifica, e rilascia il voucher

Se tutto è impostato correttamente, PDND Interoperabilità risponderà con un voucher valido all'interno del body della risposta alla proprietà `access_token`.&#x20;

Sempre nella risposta, sarà contenuta anche la durata di validità del voucher in secondi (es. `"expires_in": 600`  indica un voucher con validità 10 minuti, 10 \* 60 secondi = 600). La durata del voucher è scelta dall'erogatore sulla base delle proprie considerazioni di sicurezza, e può variare da un e-service all'altro.

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
  "descriptorId": "9525a54b-9157-4b46-8976-ec66f20b7d7e"
}
```

## Step 4 - Richiedere i dati all'erogatore

Il voucher andrà inserito nell'header di tutte le chiamate successive verso le API dell'erogatore. Andrà inserito nell'header di `Authorization`, come segue:

```
Authorization: Bearer <voucher>
```

## Step 5 - Attendere le verifiche dell'erogatore

L'erogatore effettua tutte le verifiche necessarie. Se tutto è in ordine, elabora la richiesta del fruitore, restituiendogli i dati richiesti in caso di e-service che eroga dati, oppure accettando i dati dal fruitore in caso di e-service che riceve dati.

Per consultare le verifiche consigliate agli erogatori, si veda la [sezione dedicata](../guida-tecnica-prodotto/utilizzare-i-voucher/verifiche-su-un-voucher-bearer-da-parte-di-un-erogatore.md).
