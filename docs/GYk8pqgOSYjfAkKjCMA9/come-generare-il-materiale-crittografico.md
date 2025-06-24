# Come generare il materiale crittografico

Nella vista dell'interfaccia dedicata al caricamento delle chiavi si trova il link ad un breve tutorial che aiuta a dotarsi del materiale crittografico necessario. I punti più rilevanti sono riportati qui per completezza.

### Step 1 - Generare le chiavi&#x20;

Aprire il terminale e incollare i comandi qui sotto. Per cambiare nome alla chiave, si può sostituire la stringa `client-test-keypair` con il nome che si vuole dare al file contenente la chiave.

```
openssl genrsa -out client-test-keypair.rsa.pem 2048
openssl rsa -in client-test-keypair.rsa.pem -pubout -out client-test-keypair.rsa.pub
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in client-test-keypair.rsa.pem -out client-test-keypair.rsa.priv
```

Il comando genera una coppia di chiave pubblica e privata e un certificato che in questo caso non è necessario utilizzare.&#x20;

### Step 2 - Caricare la chiave

La chiave pubblica deve essere caricata su PDND Interoperabilità, quella privata rimane all'aderente, che la mantiene al sicuro . Gli usi della chiave privata sono: &#x20;

* nel caso di client e-service: firmare la richiesta per ottenere un voucher spendibile presso un e-service dal server autorizzativo di PDND Interoperabilità;
* nel caso di client API Interop: firmare la richiesta per ottenere un voucher spendibile presso l'API esposta da PDND Interoperabilità dallo stesso server autorizzativo;
* nel caso di portachiavi erogatore: firmare una risposta da inviare ad un fruitore che ha legittimamente inoltrato una richiesta corredata di un voucher e-service in corso di validità.

Per quanto riguarda i client, l'artefatto da inviare al server autorizzativo è una "client assertion". Maggiori informazioni nella [sezione dedicata](guida-tecnica/utilizzare-i-voucher/#flusso-voucher-spendibile-presso-un-e-service-del-catalogo).
