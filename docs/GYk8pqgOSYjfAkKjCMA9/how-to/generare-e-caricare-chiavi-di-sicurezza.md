# Come generare e caricare chiavi di sicurezza di un voucher

## Come generare le chiavi

Aprire il terminale e incollare i seguenti comandi. \
Per cambiare nome alla chiave, sostituire "client-test-keypair" con il filename che si vuole dare alla chiave.

```
openssl genrsa -out client-test-keypair.rsa.pem 2048
openssl rsa -in client-test-keypair.rsa.pem -pubout -out client-test-keypair.rsa.pub
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in client-test-keypair.rsa.pem -out client-test-keypair.rsa.priv
```

## Come caricare le chiavi

1. Dopo aver generato la coppia di chiavi e averle riposte al sicuro, copiare l'intero contenuto del file della chiave pubblica (quella che finisce in .pub); assicurarsi di includere anche le parti iniziale e finale (inizia con `-----BEGIN PUBLIC KEY-----` e finisce con `-----END PUBLIC KEY-----`);
2. tornare sulla piattaforma;
3. all'interno della tab _**Chiavi pubbliche**_ nel client di interesse, cliccare sul bottone _**+ Aggiungi**_;
4. cliccare su _**Carica;**_

Si riceve immediatamente il riscontro sull'esito del caricamento.&#x20;

Se dovessero verificarsi errori, seguire le istruzioni indicate nel messaggio di "feedback".
