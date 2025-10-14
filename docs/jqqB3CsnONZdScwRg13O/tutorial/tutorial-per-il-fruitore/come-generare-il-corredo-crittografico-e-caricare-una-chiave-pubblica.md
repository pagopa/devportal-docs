# Come generare il corredo crittografico e caricare una chiave pubblica

Questo tutorial vale a titolo di esempio, ma è possibile generare il proprio corredo crittografico in molte altre maniere. Il vincolo da rispettare è che si tratti di chiave RSA codificata in PEM di lunghezza 2048 bit.

## Step 1 - Generare il corredo crittografico&#x20;

Aprire il terminale e incollare i comandi qui sotto. Per cambiare nome alla chiave, si può sostituire tutte le occorrenze della stringa `client-test-keypair` con il nome che si vuole dare al file contenente la chiave.

```
openssl genrsa -out client-test-keypair.rsa.pem 2048
openssl rsa -in client-test-keypair.rsa.pem -pubout -out client-test-keypair.rsa.pub
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in client-test-keypair.rsa.pem -out client-test-keypair.rsa.priv
```

Il comando genera una coppia di chiave pubblica e privata e un certificato, che in questo caso non è necessario utilizzare.&#x20;

La chiave privata (`.priv`) rimane all'aderente, il quale la deve mantenere al sicuro. Quella pubblica viene invece caricata su PDND Interoperabilità, per permettere quelle verifiche che portano al rilascio di un voucher valido.

## Step 2 - Caricare la chiave pubblica

Bisogna entrare nel client di interesse dal back office, nella sezione _**Gestione dei client > API e-service**_\*, e poi entrare nel client di interesse.&#x20;

Nella tab _**Chiavi Pubbliche**_, cliccare su _**Aggiungi**_. Se non è possibile farlo, è possibile che la tua utenze non sia censita tra i membri del client.

Una volta che si apre il pannello laterale,  è necessario copiare l'intero contenuto del file della chiave pubblica (quella che finisce in `.pub`), assicurandosi di includere anche le parti iniziale e finale (incluse  `-----BEGIN PUBLIC KEY-----` e  `-----END PUBLIC KEY-----`).

\*oppure _**Gestione dei client > API Interoperabilità**_ se il client serve per interagire con le API esposte da PDND Interoperabilità.

***

Pagina successiva [→ Come richiedere un voucher Bearer per le API di PDND Interoperabilità](come-richiedere-un-voucher-bearer-per-le-api-di-pdnd-interoperabilita.md)
