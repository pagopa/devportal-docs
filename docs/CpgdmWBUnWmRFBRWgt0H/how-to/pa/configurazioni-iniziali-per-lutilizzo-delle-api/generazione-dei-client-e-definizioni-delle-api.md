# Generazione dei client e definizioni delle API

## Generazione dei client con **openapi-generator** <a href="#generazione-dei-client" id="generazione-dei-client"></a>

È possibile generare il client per tutti i linguaggi di programmazione, con il tool [**openapi-generator**](https://openapi-generator.tech/)**.**&#x20;

Dopo aver scaricato il tool sulla propria macchina, bisognerà lanciare il seguente comando:

```
openapi-generator-cli generate -i <urlFileSwagger> -g <lang> -o <dest>
```

Sostituendo:

* **\<urlFileSwagger>:** con la url del file Swagger del quale si vuole generare il client. È possibile utilizzare: [https://raw.githubusercontent.com/pagopa/pn-delivery/v2.1.0/docs/openapi/api-external-b2b-pa-bundle.yaml](https://raw.githubusercontent.com/pagopa/pn-delivery/v2.1.0/docs/openapi/api-external-b2b-pa-bundle.yaml)​​
* **\<lang>:** con il linguaggio per il quale si vuole generare il client
* **\<dest>:** con il path nel quale si vuole generare il client

## Generazione dei client con b2b Java <a href="#client-b2b-java" id="client-b2b-java"></a>

È anche possibile utilizzare il [pn-b2b-client](https://github.com/pagopa/pn-b2b-client) pubblico sviluppato da PagoPA e utilizzare le classi Java in esso contenute per sviluppare la propria soluzione.

## Importare le definizioni delle API su Postman <a href="#importare-le-definizioni-delle-api-su-postman" id="importare-le-definizioni-delle-api-su-postman"></a>

Per importare le definizioni su Postman bisogna cliccare su _**import**_, poi selezionare _**Link**_ e inserire il seguente url: [https://raw.githubusercontent.com/pagopa/pn-delivery/v2.1.0/docs/openapi/api-external-b2b-pa-bundle.yaml](https://raw.githubusercontent.com/pagopa/pn-delivery/v2.1.0/docs/openapi/api-external-b2b-pa-bundle.yaml)​

Modificare i seguenti parametri delle collections ottenute:

{% content-ref url="broken-reference" %}
[Broken link](broken-reference)
{% endcontent-ref %}
