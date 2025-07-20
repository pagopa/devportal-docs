# Come un erogatore verifica un voucher

### Step 1 - Estrarre il voucher&#x20;

L'erogatore di un e-service deve poter verificare la legittimità di qualsiasi richiesta riceva dai fruitori. Prima di tutto, estrae il voucher rilasciato da PDND Interoperabilità dall'header `Authorization: Bearer` della richiesta, e lo deserializza.

### **Step 2 -Verificare la firma**

L'erogatore scarica la lista di chiavi in uso da un file esposto nella cartella `.well-known` di PDND Interoperabilità (l'URL corretta è disponibile sull'interfaccia nel back office all'interno della scheda di ogni singolo e-service e cambia in funzione dell'ambiente; a titolo esemplificativo, [questa](https://interop.pagopa.it/.well-known/jwks.json) è quella di produzione).

All'interno del file, l'erogatore cerca l'oggetto che ha lo stesso kid presente nell'header del voucher. In quello stesso oggetto troverà la chiave pubblica al parametro n. Effettuerà dunque una verifica della firma, che la chiave privata usata per firmare il voucher corrisponda a quella pubblica appena ottenuta.

### **Step 3 - Verifiche standard da effettuare sul payload**

I claim di interesse ai fini delle verifiche standard sono:

* `iss`: l'issuer deve essere PDND Interoperabilità;
* `nbf`: la data di inizio validità del voucher, che il voucher sia in corso di validità;
* `exp`: la scadenza del voucher, anche in questo caso che il voucher sia in corso di validità.

### Step 4 - Verifiche sulla corrispondenza della propria risorsa sul payload

Per verificare la legittimità della richiesta per la specifica risorsa, è consigliato effettuare la verifica in uno di questi due modi:

* affiancare alla verifica dell'audience (campo `aud` ) quella del `producerId`. In questo modo, c'è la doppia certezza che la risorsa richiesta sia quella corretta, e che appartenga effettivamente al proprio ente
* verificare la corrispondenza di `eserviceId` e `descriptorId` rispetto alla propria risorsa. In questa maniera si ottiene una maggiore granularità di verifica.&#x20;

L'una o l'altra modalità possono essere consigliate in base alle proprie architetture e configurazioni per valutare le richieste in ingresso.

### **Step 5 -Reperire e conservare gli identificativi**

Gli identificativi unici sono diversi per ogni ambiente, cioè non sono gli stessi in ambiente di collaudo e di produzione. `producerId`, `eserviceId`, `descriptorId` e l'audience (`aud`) sono reperibili attraverso l'interfaccia del back office nella scheda e-service di erogazione (_**Erogazione > I tuoi e-service**_). `purposeId` e `consumerId` si trovano invece nella scheda finalità di erogazione (_**Erogazione > Finalità**_). Tutti i parametri sono disponibili anche sulle [API esposte da PDND Interoperablità](https://developer.pagopa.it/pdnd-interoperabilita/guides/pdnd-manuale-operativo/manuale-operativo/api-esposte-da-pdnd-interoperabilita). Gli id non cambiano nel tempo e non contengono informazioni sensibili. Si consiglia quindi di fare caching per una maggiore efficienza nella verifica.

## Verificare un voucher per un e-service in cui sono richieste informazioni non standard

### Step 1 - L'erogatore riceve una richiesta di dati dal fruitore

Il fruitore costruisce una richiesta verso il servizio dell'erogatore secondo quanto descritto nel file di interfaccia e nella documentazione tecnica a corredo fornita dall'erogatore attraverso PDND Interoperabilità.&#x20;

Nella richiesta inserisce l'header standard `Authorization` che deve contenere come `Bearer` token il voucher rilasciato da PDND Interoperabilità allo step precedente. Inoltre, il fruitore deve inserire il `JWS` che contiene le informazioni complementari all'interno di un secondo header denominato `Agid-JWT-TrackingEvidence`.&#x20;

### Step 2 - L'erogatore effettua le verifiche standard

Per questo passaggio, si veda la [sezione dedicata](come-un-erogatore-verifica-un-voucher.md#verifica-di-un-voucher-da-parte-di-un-erogatore-di-e-service) nel flusso standard.

### Step 3 - L'erogatore effettua le verifiche aggiuntive sul JWS

Dopo aver completato le verifiche standard, l'erogatore può effettuare le verifiche aggiuntive necessarie a garantire l'attendibilità delle informazioni complementari inserite nel `JWS` aggiuntivo.

Può verificare l'autenticità e la validità della chiave privata con la quale è firmato il JWS. Per farlo l'erogatore deve:

1. autenticarsi sulle API di Interoperabilità come descritto nel [flusso dedicato](come-un-erogatore-verifica-un-voucher.md#richiesta-di-un-voucher-spendibile-presso-le-api-di-interoperabilita);
2. effettuare una chiamata `keys/{kid}` dove kid è valorizzato con il kid inserito nell'header del `JWS`;
3. ottienere da PDND Interoperabilità una chiave pubblica in risposta all'interno del campo `n`;
4. verificare la firma del `JWS`, effettuata dal fruitore con la chiave privata, con la chiave pubblica appena ottenuta.

Se l'erogatore ottiene un errore con status code `404 - Not found`, significa che la chiave non è presente su PDND Interoperabilità e dunque la richiesta è da ritenersi inattendibile.

### Step 4 - L'erogatore calcola e confronta l'hash

Se la chiave è presente e corrisponde, può procedere ad una seconda verifica, ossia quella notarile: verifica che la traccia depositata su PDND Interoperabilità corrisponda a quella inserita all'interno del voucher rilasciato da PDND Interoperabilità.&#x20;

Se c'è corrispondenza, vuol dire che le informazioni complementari inserite all'interno del JWS sono effettivamente quelle che il fruitore ha dichiarato su PDND Interoperabilità di aver inserito.

Per verificare la traccia, l'erogatore:

* &#x20;effettua la stessa operazione effettuata dal fruitore nel secondo passaggio, ma sul JWS
* ottiene l'hash non reversibile del JWS
* confronta l'hash ottenuto con quello presente all'interno del campo `digest.value` del voucher rilasciato da PDND Interoperabilità presente nell'header `Authorization`.&#x20;

Se i due hash sono uguali, il fruitore ha reso una dichiarazione che corrisponde ed è tracciata su PDND Interoperabilità.

## Verificare un voucher DPoP

L'erogatore, ricevuta una richiesta in contesto DPoP, esegue i seguenti passaggi:

**Step 1:** controlla la firma del voucher e che typ="dpop+jwt";

**Step 2:** estrae cnf.jkt dal voucher;

**Step 3:** verifica la DPoP ricevuta dal fruitore, in particolare:

1. che la chiave contenuta nell'header jwk della DPoP corrisponda a quella usata per la firma della DPoP stessa;
2. che l'htm corrisponda al metodo effettivamente invocato e che l'htu corrisponda effettivamente all'endpoint chiamato;
3. che la DPoP sia stata emessa non oltre iat + 60 secondi con una tolleranza di ±10 secondi;
4. che l'id unico, il jti, non sia presente nella cache dell'e-service;
5. che l'ath combaci con l'hash calcolato sul voucher rilasciato da PDND Interoperabilità, seguendo la stessa procedura eseguita dal fruitore al passaggio 5;

**Step 4:** calcola il thumbprint della chiave pubblica contenuta nella proof (jwk) e verifica che sia identico al cnf.jkt.

Se tutte le verifiche vanno a buon fine, la richiesta è autenticata.Con questi passi, il voucher rilasciato da PDND Interoperabilità offre uno strumento efficace e standardizzato per proteggere ulteriormente le comunicazioni tra fruitore ed erogatore.
