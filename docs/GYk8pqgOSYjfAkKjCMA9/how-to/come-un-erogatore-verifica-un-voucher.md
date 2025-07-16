# Come un erogatore verifica un voucher

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

## Come un erogatore verifica un voucher per un e-service in cui sono richieste informazioni non standard

1. **l'erogatore calcola e confronta l'hash**: l'erogatore effettua la stessa operazione effettuata dal fruitore al punto 2. e calcola l'hash del `JWS`. Lo confronta quindi con quello inserito all'interno del voucher rilasciato da PDND Interoperabilità.

I due hash dovranno essere uguali, segno che quello che il fruitore ha dichiarato di aver trasmesso su PDND Interoperabilità è effettivamente ciò che l'erogatore (e lui solo) trova nelle informazioni complementari.&#x20;
