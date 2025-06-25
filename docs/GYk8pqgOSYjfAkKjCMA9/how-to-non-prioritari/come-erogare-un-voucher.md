# Come erogare un voucher

### Step 1 - Il fruitore impacchetta le informazioni complementari

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

### Step 2 - Il fruitore calcola l'hash

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

{% hint style="warning" %}
NB: la flag `-n` che viene passata nel primo comando indica che vengano rimosse eventuali "newline" non viste dall'operatore. Un'eventuale "newline" presente nel token fa cambiare il valore dell'hash che poi non corrisponderà all'atto della verifica dell'erogatore.
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

### Step 4 - Il fruitore richiede un voucher a PDND Interoperabilità

In questo passaggio non ci sono variazioni rispetto al flusso standard. Il fruitore fa una richiesta di voucher al server autorizzativo di PDND Interoperabilità inviando la client assertion.

### Step 5 - PDND Interoperabilità restituisce un voucher al fruitore

Anche in questo passaggio non ci sono variazioni. Da notare che l'unica verifica che PDND Interoperabilità effettua sul campo digest è che rispetti la lunghezza della stringa prevista da `SHA256` (64 caratteri).

### Step 6 - Il fruitore fa una richiesta di dati all'erogatore

Il fruitore costruisce una richiesta verso il servizio dell'erogatore secondo quanto descritto nel file di interfaccia e nella documentazione tecnica a corredo fornita dall'erogatore attraverso PDND Interoperabilità.&#x20;

Nella richiesta inserisce l'header standard `Authorization` che deve contenere come `Bearer` token il voucher rilasciato da PDND Interoperabilità allo step precedente. Inoltre, il fruitore deve inserire il `JWS` che contiene le informazioni complementari all'interno di un secondo header denominato `Agid-JWT-TrackingEvidence`.&#x20;

### Step 7 - L'erogatore effettua le verifiche standard

Per questo passaggio, si veda la [sezione dedicata](come-erogare-un-voucher.md#verifica-di-un-voucher-da-parte-di-un-erogatore-di-e-service) nel flusso standard.

### Step 8 - L'erogatore effettua le verifiche aggiuntive sul JWS

Dopo aver completato le verifiche standard, l'erogatore può effettuare le verifiche aggiuntive necessarie a garantire l'attendibilità delle informazioni complementari inserite nel `JWS` aggiuntivo.

Può verificare l'autenticità e la validità della chiave privata con la quale è firmato il JWS. Per farlo l'erogatore deve:

1. autenticarsi sulle API di Interoperabilità come descritto nel [flusso dedicato](come-erogare-un-voucher.md#richiesta-di-un-voucher-spendibile-presso-le-api-di-interoperabilita);
2. effettuare una chiamata `keys/{kid}` dove kid è valorizzato con il kid inserito nell'header del `JWS`;
3. ottienere da PDND Interoperabilità una chiave pubblica in risposta all'interno del campo `n`;
4. verificare la firma del `JWS`, effettuata dal fruitore con la chiave privata, con la chiave pubblica appena ottenuta.

Se l'erogatore ottiene un errore con status code `404 - Not found`, significa che la chiave non è presente su PDND Interoperabilità e dunque la richiesta è da ritenersi inattendibile.

### Step 9 - L'erogatore calcola e confronta l'hash

Se la chiave è presente e corrisponde, può procedere ad una seconda verifica, ossia quella notarile: verifica che la traccia depositata su PDND Interoperabilità corrisponda a quella inserita all'interno del voucher rilasciato da PDND Interoperabilità.&#x20;

Se c'è corrispondenza, vuol dire che le informazioni complementari inserite all'interno del JWS sono effettivamente quelle che il fruitore ha dichiarato su PDND Interoperabilità di aver inserito.

Per verificare la traccia, l'erogatore:

* &#x20;effettua la stessa operazione effettuata dal fruitore nel secondo passaggio, ma sul JWS
* ottiene l'hash non reversibile del JWS
* confronta l'hash ottenuto con quello presente all'interno del campo `digest.value` del voucher rilasciato da PDND Interoperabilità presente nell'header `Authorization`.&#x20;

Se i due hash sono uguali, il fruitore ha reso una dichiarazione che corrisponde ed è tracciata su PDND Interoperabilità.
