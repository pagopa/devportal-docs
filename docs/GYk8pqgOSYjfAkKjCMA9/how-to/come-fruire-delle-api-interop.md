# Come fruire delle API Interop

## Adempimenti preliminari

I seguenti step andranno eseguiti solo una volta, prima della prima fruizione dell'e-service, mentre la sezione successiva inerente alla creazione del voucher deve essere seguita ogni volta che si desidera fare una chiamata ad un e-service.

### Step 1 - Creazione di un client Interop

Per saperne di più, leggi la [s](../guida-tecnica/client-e-materiale-crittografico/)[ezione dedicata](../guida-tecnica/client-e-materiale-crittografico/) ai client Api interop.

### Step 2 - Caricamento di una chiave pubblica nel client

Caricare una chiave pubblica parte del proprio materiale crittografico, all'interno di un client API Interop.&#x20;

## Come richiedere un voucher a PDND Interoperabilità per le API di PDND Interoperabilità

Il prerequisito per poter ottenere un voucher valido è aver caricato almeno una chiave pubblica, parte del proprio materiale crittografico, all'interno di un client API Interop associato ad una finalità attiva.&#x20;

### Step 1 - Client assertion

Il fruitore deve costruire una _client assertion_ valida e firmarla con la propria chiave privata (che deve essere l'omologa della chiave pubblica depositata sul client su PDND Interoperabilità). La client assertion è composta da un header e un payload.&#x20;

Nell'header andranno inseriti tre camp&#x69;_:_

* `kid`: l'id della chiave che si usa per firmare l'asserzion&#x65;_,_ reperibile su PDND Interoperabilità;
* `alg`: l'algoritmo usato per firmare il JWT (per ora, sempre `RS256`);
* `typ`: il tipo di oggetto che si sta inviando (sempre `JWT`).

Nel payload ci saranno invece i seguenti campi:&#x20;

* `iss`: l'issuer, in questo caso il _clientId;_ chi ha staccato il voucher.
* `iat`: l'issued at, il timestamp riportante data e ora in cui viene creato il token, espresso in [UNIX epoch](https://datatracker.ietf.org/doc/html/rfc3339) (valore numerico, non stringa);
* `exp`: l'expiration, il timestamp riportante data e ora di scadenza del token, espresso in [UNIX epoch](https://datatracker.ietf.org/doc/html/rfc3339) (valore numerico, non stringa).
* `sub`: il subject, in questo caso sempre il _clientId;_
* `aud`: l'audience, reperibile su PDND Interoperabilità; per quale risorsa è valido
* `jti`: il JWT ID, un id unico random assegnato da chi vuole creare il token, si usa per tracciare il token stesso. Deve essere cura del chiamante assicurarsi che l'id di questo token sia unico per quanto riguarda la client assertion;

Un `JWS` di esempio può avere header

```
{
  "alg": "RS256",
  "kid": "ZmYxZGE2YjQtMzY2Yy00NWI5LThjNGItMDJmYmQyZGIyMmZh",
  "typ": "JWT"
}
```

Il payload sarà invece costituito dalle informazioni aggiuntive che il fruitore vuole trasmettere all'erogatore. Il fruitore firma quindi il `JWS` con una chiave privata. La chiave pubblica corrispondente deve essere depositata su PDND Interoperabilità e avere per `kid` quello inserito nell'header del `JWS`.

{% hint style="warning" %}
Questa chiave e questo `kid` non devono necessariamente essere gli stessi con i quali si firma la client assertion al passaggio 3.
{% endhint %}

Una volta firmata l'asserzione, salvare l'output.

### Step 2 - Il fruitore costruisce la client assertion

Il fruitore prende l'hash ottenuto e lo inserisce nel payload della client assertion nel campo `digest.value`. Il campo `digest.alg` accetta solamente il valore `SHA256` (corrispondente all'algoritmo di hashing che è stato applicato al `JWS`).

```
{
  ...[altri campi della client assertion da flusso standard],
  "digest": {
    "alg": "SHA256",
    "value": "5db26201b684761d2b970329ab8596773164ba1b43b1559980e20045941b8065"
  }
}
```

L'header della client assertion rimane invece invariato rispetto al flusso standard. La client assertion deve essere firmata con la chiave privata corrispondente alla pubblica caricata su PDND Interoperabilità.&#x20;

ll `kid` è nell'header dell'asserzione.

### Step 3 - Il fruitore richiede un voucher a PDND Interoperabilità

In questo passaggio non ci sono variazioni rispetto al flusso standard. Il fruitore fa una richiesta di voucher al server autorizzativo di PDND Interoperabilità inviando la client assertion.

### Step 4 - PDND Interoperabilità restituisce un voucher al fruitore

Anche in questo passaggio non ci sono variazioni. Da notare che l'unica verifica che PDND Interoperabilità effettua sul campo digest è che rispetti la lunghezza della stringa prevista da `SHA256` (64 caratteri).

### Step 5 - Richiesta all'erogatore

Il fruitore può usare il voucher per effettuare una richiesta verso un servizio dell'erogatore
