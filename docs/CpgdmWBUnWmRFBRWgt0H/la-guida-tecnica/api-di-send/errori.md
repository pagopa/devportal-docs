# Errori

### Upload del documento <mark style="color:red;">`<Code>SignatureDoesNotMatch</Code>`</mark> <mark style="color:red;">`<Message>The request signature we calculated does not match the signature you provided. Check your key and signing method.</Message>`</mark>

Esistono varie casistiche che generano l’errore descritto; le più frequenti sono:

1. In _uploadAllegati_ si è utilizzato uno sha256 diverso da quello utilizzato in _presignedUploadRequest_.
2. In _uploadAllegati_ è stato inserito uno sha256 che non corrisponde al documento che si desidera effettivamente inviare.
3. Lo sha256 è corretto in _presignedUploadRequest_ e coincidente con quello caricato in _uploadAllegati_, ma il secret errato.
4. Se si utilizza Postman assicurarsi che gli header siano valorizzati correttamente e che il documento che si sta caricando sia effettivamente quello dal quale è stato generato lo Sha256(a volte è necessario rimuovere e ricaricare il file dalla scheda di Postman affinchè venga recepito)&#x20;
5. Assicurarsi che gli header siano valorizzati correttamente ed inseriti nel giusto ordine (vedi 1.b del [Ciclo di vita della notifica lato mittente](https://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpagopa%2Fpn-delivery%2Fdevelop%2Fdocs%2Fopenapi%2Fapi-external-b2b-pa.yaml))

### Upload di un documento passando x-amz-checksum-sha256 del file `Value for x-amz-checksum-sha256 header is invalid`

Assicurarsi di avere eseguito i seguenti passaggi:

1. Applicare al documento l’algoritmo di crittazione, ottenendo una rappresentazione di 64 caratteri in formato esadecimale ^\[A-Fa-f0-9]{64}$
2. Ottenere la relativa rappresentazione binaria.
3. Applicare la codifica Base64.

Esempio di codice Java:

`import org.springframework.util.Base64Utils;`\
`import java.io.ByteArrayInputStream;`\
`import java.io.InputStream;`\
`import java.security.MessageDigest;`

`MessageDigest digest = MessageDigest.getInstance("SHA-256");`\
`byte[] encodedhash = digest.digest( StreamUtils.copyToByteArray( docInputStream ) );`\
`String x-amz-checksum-sha256 = Base64Utils.encodeToString( hash )`

### Verificare dello "x-amz-checksum-sha256"&#x20;

Aprire la shell di Git Bash o un terminal SSH ed eseguire il comando:

`cat <fullPathFile/filename.ext> | openssl dgst -binary -sha256 | openssl base64`

Il comando restituisce la codifica base64 della rappresentazione binaria di sha256, che può essere confrontato con quella generata dal codice.

### Messaggio **"Unauthorized"**

Il messaggio **{"message": "Unauthorized"}** indica che non sono disponibili le credenziali per utilizzare i servizi di PN o che non è stata completata l'integrazione con **PDND Interoperabilità**. \
Se non è stato già fatto, è necessario intraprendere il processo di accreditamento, contattando l'indirizzo preposto: [account@pagopa.it](mailto:account@pagopa.it)\
Se è stato già completato il processo di accreditamento, assicurarsi che si stia utilizzando correttamente l'API Key ed il Voucher.

### Chiamata API sulla pagina swagger

Le pagine Swagger sono esclusivamente ad uso di documentazione e non sono configurate per essere utilizzate per testare le API.

## Servizio [sendNewNotification](https://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpagopa%2Fpn-delivery%2Fdevelop%2Fdocs%2Fopenapi%2Fapi-external-b2b-pa.yaml#/NewNotification/sendNewNotification)&#x20;

Nel caso dei seguenti errori contatta il [supporto enti](mailto:pn-supporto-enti@pagopa.it) segnalando questa situazione:

* "Max one recipient",&#x20;
* "No recipient physical address",
* &#x20;"No recipient payment",&#x20;
* "Alternative notice code equals to notice code".

L'errore "**400: invaild request body**" è dovuto all'errata compilazione del body della request, infatti la configurazione di OpenAPI prevede che i campi null vengano ignorati e non inseriti nella request.\
In questo caso fare è necessario fare attenzione alle seguenti:

* se il campo sullo Swagger risulta opzionale ma nella request che si sta inviando è valorizzato con null, è necessario eliminare del tutto questo campo dal body ed in generale dal JSON della request.
* se il campo è di tipo enum, fare attenzione che non sia valorizzato con stringa vuota "" ma che abbia un valore coerente con quelli dell'enum di appartenenza
* se il campo è di tipo stringa, fare attenzione che non sia valorizzato come numero intero

Se si utilizza un client Java, può capitare che pur non effettuando il set di una certa proprietà, il comportamento di default in fase di serializzazione delle proprietà non settate viene definito comunque come null. In questo caso è possibile seguire una delle seguenti soluzioni

* configurare l’ObjectMapper per far sì che includa solamente i campi NON\_NULL con la seguente configurazione: _mapper.setSerializationInclusion(Include.NON\_NULL);_
* se si utilizza la libreria Jackson per la serializzazione delle request, è possibile aggiungere questa annotation a livello di Classe:\
  &#xNAN;_@com.fasterxml.jackson.annotation.JsonInclude(com.fasterxml.jackson.annotation.JsonInclude.Include.NON\_NULL)_
