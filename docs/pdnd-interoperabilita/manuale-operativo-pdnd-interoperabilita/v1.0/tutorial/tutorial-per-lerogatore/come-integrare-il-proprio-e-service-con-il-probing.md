# Come integrare il proprio e-service con il Probing

Per integrare il proprio e-service con il Probing, va predisposto un endpoint di `status`, che verrà contattato da PDND ogni 5 minuti per verificarne la disponibilità.

### Step 1: Integrare l'endpoint di status

Il sistema di Probing invoca un endpoint dell’e-service costruito a partire dal `basePath` registrato a catalogo:

<table><thead><tr><th width="127.39996337890625" align="center">Tecnologia</th><th width="289.49371337890625" align="center">Metodo HTTP</th><th align="center">Path</th></tr></thead><tbody><tr><td align="center">REST</td><td align="center">GET</td><td align="center"><code>{basePath}/status</code></td></tr><tr><td align="center">SOAP</td><td align="center">POST (envelope SOAP standard)</td><td align="center"><code>{basePath}/status</code></td></tr></tbody></table>

L’endpoint deve essere esposto tramite protocollo HTTPS e deve essere coerente con la tecnologia dichiarata dall’erogatore (REST o SOAP).

#### Risposte attese

L’esito della verifica si basa esclusivamente sul codice di stato HTTP restituito dall’endpoint:

* **200**: indica che l’e-service è operativo. Non è richiesto alcun contenuto nel corpo della risposta;
* **4xx/5xx**: indicano un errore applicativo o una condizione di indisponibilità. L’e-service deve restituire una risposta conforme allo standard [RFC 7807](https://www.rfc-editor.org/rfc/rfc7807.html), utilizzando il formato `Problem JSON` per descrivere l’anomalia riscontrata;
* **errori di rete o mancata risposta**: se l’endpoint non è raggiungibile o non risponde nei tempi previsti, il servizio è considerato non disponibile.

### Step 2: verificare le richieste che arrivano da PDND

Dopo aver completato l'integrazione, è necessario verificare e autorizzare le richieste che PDND farà verso l'endpoint di `status` ogni 5 minuti. Le richieste avranno un header `Authorization` e saranno basate su access token Bearer.

Il flusso è molto simile alla verifica di un voucher di tipo Bearer (maggiori informazioni nel [tutorial dedicato](come-verificare-la-validita-di-un-voucher-bearer.md)). La differenza è che il token, che non è consumato da un fruitore ma direttamente da PDND, non conterrà i campi `eserviceId`, `descriptorId`, `producerId`, `consumerId` , `purposeId` e `client_id`.

#### Esempio di voucher Bearer utilizzato da PDND Interoperabilità deserializzato

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
  "iat": 1747408537,
  "exp": 1747409537,
  "jti": "12297ac1-c192-4573-8350-207a4213e5ac",
  "aud": "https://eservice.pa.it/api/v1"
}
```

#### Significato dei campi

Nell'header si troveranno quattro camp&#x69;_:_

<table><thead><tr><th width="123.4765625">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>kid</code></td><td>l'id della chiave che usato per firmare il voucher<em>,</em> reperibile sul well known di PDND Interoperabilità (vedi sotto <a href="come-integrare-il-proprio-e-service-con-il-probing.md#verifica-sulla-firma">Verifica sulla firma</a>)</td></tr><tr><td><code>alg</code></td><td>l'algoritmo usato per firmare il JWT ( <code>RS256</code>)</td></tr><tr><td><code>use</code></td><td>valorizzato a <code>sig</code>, indica che la chiave è destinata alla firma digitale</td></tr><tr><td><code>typ</code></td><td>il tipo di oggetto che si sta inviando (<code>at+jwt</code>)</td></tr></tbody></table>

Nel payload ci saranno invece tredici campi obbligatori, e uno opzionale:

<table><thead><tr><th width="152.84765625">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>iss</code></td><td>l'issuer, rappresenta il dominio corrispondente all'authorization server di PDND Interoperabilità che ha rilasciato il voucher (ad esempio, l'issuer dell'ambiente di produzione è <code>interop.pagopa.it</code>)</td></tr><tr><td><code>iat</code></td><td>issued at, il timestamp nel quale è stato rilasciato il voucher, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td><code>exp</code></td><td>l'expiration, il timestamp riportante data e ora di scadenza del token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa). La durata del voucher (ossia la differenza tra <code>nbf</code> ed <code>exp</code>) dipende dal valore che l'erogatore ha impostato nella configurazione dell'e-service</td></tr><tr><td><code>jti</code></td><td>il JWT ID, un id unico random assegnato da PDND Interoperabilità</td></tr><tr><td><code>aud</code></td><td>l'audience, ossia l'indicazione di quale servizio dell'erogatore PDND intenda consumare con il voucher. Il valore riportato è quello che l'erogatore ha inserito nella configurazione dell'e-service</td></tr></tbody></table>

***

Pagina successiva [→ Tutorial per il fruitore](../tutorial-per-il-fruitore/)
