---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/jqqB3CsnONZdScwRg13O/tutorial/tutorial-per-lerogatore/come-firmare-una-risposta-per-un-fruitore
---

# Come firmare una risposta per un fruitore

Nel ModI viene indicato come l'erogatore di un e-service possa l'implementare un pattern per firmare una risposta verso un fruitore che ha effettuato una richiesta.

Il pattern è `INTEGRITY REST 02`, e ne viene data una dimostrazione in questo tutorial. &#x20;

Per maggiori informazioni sulla garanzia della risposta, si veda la [sezione dedicata](../../riferimenti-tecnici/utilizzare-i-voucher/garanzia-dellintegrita-della-risposta.md). Per la specifica tecnica definita da AgID, si veda la versione più recente delle [Linee Guida sull'interoperabilità tecnica delle Pubbliche Amministrazioni — Pattern di sicurezza](https://www.agid.gov.it/sites/agid/files/2024-07/Linee_guida_interoperabilit%C3%A0PA_All2_Pattern_sicurezza.pdf) (paragrafo 5.3, pagg. 44 e seguenti).

### Prerequisiti

Si assume che l'erogatore abbia:

* creato un **Portachiavi erogatore** ([vedi guida](../../riferimenti-tecnici/e-service/portachiavi.md));
* generato almeno un set di materiale crittografico e caricato la relativa chiave pubblica su PDND Interoperabilità all'interno del portachiavi ([vedi tutorial](../tutorial-per-il-fruitore/come-generare-il-corredo-crittografico-e-caricare-una-chiave-pubblica.md));
* associato il **Portachiavi Erogatore** all'e-service per la quale vuole firmare la risposta al fruitore ([vedi tutorial](come-associare-un-portachiavi-ad-un-e-service.md)).

### Struttura della risposta

Nel pattern `INTEGRITY REST 02`, la risposta al fruitore è costituita da:

* header HTTP `Agid-JWT-Signature`: contiene un JWT con informazioni relative all'erogatore sulle quali basare le proprie verifiche;
* header HTTP `Digest`: contiene un digest calcolato a partire dai dati contenuti nel payload;
* header HTTP `Content-Type`: indica il `content-type` del payload;
* payload: contiene i dati veri e propri.

### Step 1: creazione dell'hash

Il contenuto del payload viene codificato in una stringa di byte e sottoposto a una funzione di hash utilizzando l'algoritmo SHA-256. Ad esempio, un payload come&#x20;

```
{"testo": "Ciao mondo"}
```

deve essere codificato come

```
SHA-256=cFfTOCesrWTLVzxn8fmHl4AcrUs40Lv5D275FmAZ96E=
```

come previsto dall'[RFC-3230](https://www.rfc-editor.org/rfc/rfc3230.html).

### Step 2: inserimento dell'hash nell'header "Digest"

L'hash appena calcolato viene inserito così com'è nell'header `Digest`, ossia:

```
Digest: SHA-256=cFfTOCesrWTLVzxn8fmHl4AcrUs40Lv5D275FmAZ96E=
```

### Step 3: definizione dell'header "Agid-JWT-Signature"

L'header `Agid-JWT-Signature` è un token che contiene alcune informazioni relative all'erogatore e alla firma, ossia

```
Agid-JWT-Signature: eyJhbGciOiJSUzI1NiIsInR5c.vz8...
```

Nello specifico, questo token contiene i seguenti campi:

#### Header

<table><thead><tr><th width="155.359375">Campo</th><th>Significato campo</th></tr></thead><tbody><tr><td><code>alg</code></td><td>l'algoritmo usato per firmare il JWT</td></tr><tr><td><code>typ</code></td><td>il tipo di oggetto che si sta inviando (sempre <code>JWT</code>)</td></tr><tr><td><code>kid</code></td><td>l'id della chiave pubblica depositata nel portachiavi erogatore corrispondente alla privata con la quale si è firmato questo JWT</td></tr></tbody></table>

#### Payload

<table><thead><tr><th width="155.359375">Campo</th><th>Significato campo</th></tr></thead><tbody><tr><td><code>aud</code></td><td>l'indirizzo della risorsa contattata</td></tr><tr><td><code>iat</code></td><td>l'issued at, il timestamp riportante data e ora in cui viene creato il token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td><code>nbf</code></td><td>(opzionale) il not before, il timestamp riportante data e ora alla quale diventa attivo il token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td><code>exp</code></td><td>l'expiration, il timestamp riportante data e ora di scadenza del token, espresso in <a href="https://datatracker.ietf.org/doc/html/rfc3339">UNIX epoch</a> (valore numerico, non stringa)</td></tr><tr><td><code>signed_headers</code></td><td>un oggetto contenente due campi: <code>digest</code> e <code>content-type</code>. <code>Digest</code> è valorizzato con l'hash calcolato allo step 2. <code>Content-type</code> è il content type del payload della risposta (ad esempio <code>application/json</code>, <code>application/octet-stream</code>) </td></tr></tbody></table>

#### Esempio

```
Header
{
 "alg": "RS256",
 "typ": "JWT",
 "kid": "199d08d2-9971-4979-a78d-e6f7a544f296"
}

Payload
{
 "aud": "https://api.erogatore.example/rest/service/v1/hello/echo"
 "iat": 1516239022,
 "nbf": 1516239022,
 "exp": 1516239024,
 "signed_headers": [
   { "digest": "SHA-256=cFfTOCesrWTLVzxn8fmHl4AcrUs40Lv5D275FmAZ96E=" },
   { "content-type": "application/json" }
 ],
}
```

### Step 4: firma del token da inserire in "Agid-JWT-Signature"

Il JWT creato al punto precedente viene firmato con la chiave privata corrispondente alla pubblica depositata nel portachiavi erogatore, il cui kid deve corrispondere a quello inserito nell'header `kid` del JWT.

### Step 5: predisposizione della risposta

La risposta sarà quindi composta da:

#### Header

```
Agid-JWT-Signature: eyJhbGciOiJSUzI1NiIsInR5c.vz8...
Digest: SHA-256=cFfTOCesrWTLVzxn8fmHl4AcrUs40Lv5D275FmAZ96E=
Content-Type: application/json
```

#### Payload

```
{"testo": "Ciao mondo"}
```

Per maggiori dettagli sulle verifiche che il fruitore farà, si rimanda al [tutorial dedicato](../tutorial-per-il-fruitore/come-verificare-una-risposta-firmata-da-un-erogatore.md).

***

Pagina successiva [→ Come verificare la validità di un voucher Bearer](come-verificare-la-validita-di-un-voucher-bearer.md)
