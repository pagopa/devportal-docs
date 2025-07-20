# Come fruire di un e-service

## Adempimenti preliminari

I seguenti step andranno eseguiti solo una volta, prima della prima fruizione dell'e-service, mentre la sezione successiva inerente alla creazione del voucher deve essere seguita ogni volta che si desidera fare una chiamata ad un e-service.

### Step 1 - Selezionare l'e-service

L'aderente che intende fruire di un e-service può visualizzare tutti quelli disponibili andando su _**Fruizione > Catalogo e-service**_.

### Step 2 - Invio richiesta di fruizione

Chi possiede i requisiti minimi, visualizza il pulsante _**Iscriviti**_, attraverso il quale ci si può "iscrivere all'e-service" presentando una richiesta di fruizione che deve essere sottoposta alla valutazione dell'erogatore.

### Step 3 - Creazione Finalità

Una volta che la richiesta di fruizione viene approvata ed è attiva, il fruitore può creare le finalità. In ogni finalità, bisogna indicare il dettaglio sull'accesso e sull'utilizzo dei dati (chiamato _analisi del rischio_) e la _stima di carico_, la quantità di richieste che insisteranno sull'erogatore (definito in numero di chiamate API al giorno stimate). Se la stima di carico eccede la capacità dell'infrastruttura dell'erogatore, è necessario che l'erogatore l'approvi prima che il fruitore possa utilizzare quella finalità per accedere all'e-service.

### Step 4 - Creazione di un client Interop

Per saperne di più, leggi la [s](../guida-tecnica/client-e-materiale-crittografico/)[ezione dedicata](../guida-tecnica/client-e-materiale-crittografico/) ai client Api interop.

### Step 5 - Caricamento di una chiave pubblica nel client

Caricare una chiave pubblica parte del proprio materiale crittografico, all'interno di un client e-service associato ad una finalità attiva.&#x20;

## Come richiedere un voucher a PDND Interoperabilità per un e-service

Il prerequisito per poter ottenere un voucher valido è aver caricato almeno una chiave pubblica, parte del proprio materiale crittografico, all'interno di un client e-service associato ad una finalità attiva. Per saperne di più, leggi la [sezione dedicata](../guida-tecnica/client-e-materiale-crittografico/#caricare-una-chiave-pubblica-in-un-client) ai [cliente e-service](../guida-tecnica/client-e-materiale-crittografico/#caricare-una-chiave-pubblica-in-un-client).

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
* `purposeId` (solo per gli e-service): l'id della finalità per la quale si richiede il voucher. Questo parametro è disponibile nel back office di PDND Interoperabilità.

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

### Step 2 - Richiedere un voucher a PDND Interoperabilità

Il secondo passaggio è chiamare il server autorizzativo di PDND Interoperabilità con la client assertion per ottenerne in cambio un voucher spendibile presso l'API di di PDND Interoperabilità (ossia un token valido). L'URL dell'endpoint cambia in funzione dell'ambiente e sarà chiaramente visibile sull'interfaccia all'interno del back office. L'endpoint andrà chiamato con alcuni parametri nel body:

| Nome campo              | Significato                                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| client\_id              | di nuovo il clientId usato nell'assertion                                                                               |
| client\_assertion       | il contenuto dell'asserzione firmata nel primo passaggio                                                                |
| client\_assertion\_type | il formato della client assertion, come indicato in RFC (sempre urn:ietf:params:oauth:client-assertion-type:jwt-bearer) |
| grant\_type             | la tipologia di flusso utilizzato, come indicato in RFC (sempre client\_credentials)                                    |

### Step 3 - Il server di PDND verifica e rilascia il voucher

Se tutto è impostato correttamente, PDND Interoperabilità risponderà con un voucher valido all'interno del body della risposta alla proprietà access\_token.Sempre nella risposta, sarà contenuta anche la durata di validità del voucher in secondi (es. "expires\_in": 600 indica un voucher con validità 10 minuti, 10 \* 60 secondi = 600). La durata del voucher è scelta dall'erogatore sulla base delle proprie considerazioni di sicurezza, e può variare da e-service a e-service.

### Step 4 - Richiede i dati all'erogatore

Il voucher andrà inserito nell'header di tutte le chiamate successive verso le API dell'erogatore. Andrà inserito come header, come segue:

```
Authorization: Bearer <voucher>
```

## Come richiedere un voucher a PDND Interoperabilità per un e-service in cui sono richiesti dati non standard

### **Step 1 - Impacchetta le informazioni complementari**

Un JWS di esempio può avere header

```
{
  "alg": "RS256",
  "kid": "ZmYxZGE2YjQtMzY2Yy00NWI5LThjNGItMDJmYmQyZGIyMmZh",
  "typ": "JWT"
}
```

Il payload sarà invece costituito dalle informazioni aggiuntive che il fruitore vuole trasmettere all'erogatore. Il fruitore firma quindi il JWS con una chiave privata. La chiave pubblica corrispondente deve essere depositata su PDND Interoperabilità e avere per kid quello inserito nell'header del JWS.NB: questa chiave e questo kid non devono necessariamente essere gli stessi con i quali si firma la client assertion al passaggio 3.

### **Step 2 - Calcolare l'hash**

A partire dalla codifica del JWS (ossia il JWS codificato secondo l'algoritmo inserito nell'header, in genere inizia per ey) il fruitore applica l'algoritmo di hashing SHA256 al JWS, ottenendone un hash non reversibile a lunghezza fissa.A scopo esemplificativo, è possibile inserire in un terminale il seguente comando, previa installazione del pacchetto openssl

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

{% hint style="info" %}
NB: la flag -n che viene passata nel primo comando indica che vengano rimosse eventuali "newline" non viste dall'operatore. Un'eventuale "newline" presente nel token fa cambiare il valore dell'hash che poi non corrisponderà all'atto della verifica dell'erogatore.
{% endhint %}

### Step 3 - Il fruitore costruisce la client assertion

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

### **Step 4 - Il fruitore richiede un voucher a PDND Interoperabilità**

In questo passaggio non ci sono variazioni rispetto al flusso standard. Il fruitore fa una richiesta di voucher al server autorizzativo di PDND Interoperabilità inviando la client assertion. PDND Interoperabilità verifica che il campo digest rispetti la lunghezza della stringa prevista da `SHA256` (64 caratteri).

### **Step 5 - Il fruitore fa una richiesta di dati all'erogatore**

Dopo aver ricevuto il voucher di risposta da PDND, il fruitore costruisce una richiesta verso il servizio dell'erogatore secondo quanto descritto nel file di interfaccia e nella documentazione tecnica a corredo fornita dall'erogatore attraverso PDND Interoperabilità. Nella richiesta inserirà l'header standard `Authorization` che conterrà come `Bearer` token il voucher rilasciato da PDND Interoperabilità allo step precedente. Inoltre, il fruitore inserirà il `JWS` che contiene le informazioni complementari all'interno di un secondo header denominato `Agid-JWT-TrackingEvidence`.
