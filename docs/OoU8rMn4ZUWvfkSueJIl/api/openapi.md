# OpenAPI

### **Specifiche**

Sono disponibili all'indirizzo: [https://developer.io.italia.it/openapi.htm](https://developer.io.italia.it/openapi.html#operation/createService)l

### **File**

Il file openAPI 2.0 è disponibile all'indirizzo: [https://github.com/pagopa/io-functions-services/blob/master/openapi/index.yaml](https://github.com/pagopa/io-functions-services/blob/master/openapi/index.yaml)

### Note

Sono presenti alcune estensioni custom che non saranno bene interpretate da tool aderenti allo standard openAPI 2.0 (fka swagger [https://swagger.io/specification/v2/](https://swagger.io/specification/v2/)):

* `x-extensible-enum`: dove utilizzata sostituisce quello che nello standard è espresso con enum è in corso la sua sostituzione con enum standard.
* `x-import`: per alcune definition specifica dove si trova la definizione del tipo nelle librerie di PagoPA (Typescript), non ha un corrispettivo nello standard OpenAPI. Non è immediatamente evidente quali siano i requisiti di formato di un campo specifico e si deve recuperare manualmente la definizione puntata dalla reference.
* `x-one-of`: usato in combinazione con allOf sta ad indicare che allOf non rappresenta una intersezione dei tipi elencati ma piuttosto si comporta come oneOf introdotto con la versione 3 dello standard OpenAPI. È utilizzato nel tipo ServicePayload
* `x-example`: aggiunge un esempio dove lo standard non permette di utilizzare il tag example

