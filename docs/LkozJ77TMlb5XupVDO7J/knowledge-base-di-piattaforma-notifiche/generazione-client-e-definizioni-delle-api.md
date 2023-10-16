---
description: >-
  Informazioni utili sulla generazione dei client e sulle modalità di utilizzo
  delle API
---

# Generazione client e definizioni delle API

### Generazione dei client

E' possibile generare il client per tutti i linguaggi di programmazione, con il tool **openapi-generator** la cui documentazione è presente al seguente link:\
[https://openapi-generator.tech](https://openapi-generator.tech/)\
Dopo aver scaricato il tool sulla propria macchina, bisognerà lanciare il seguente comando:

```bash
openapi-generator-cli generate -i <urlFileSwagger> -g <lang> -o <dest>
```

sostituendo:

* **\<urlFileSwagger>:** con la url del file Swagger del quale si vuole generare il client. E' possibile utilizzare:
  * per la pagina API B2B per le Pubbliche Amministrazioni:&#x20;
    * [https://raw.githubusercontent.com/pagopa/pn-delivery/main/docs/openapi/api-external-b2b-pa-bundle.yaml](https://raw.githubusercontent.com/pagopa/pn-delivery/main/docs/openapi/api-external-b2b-pa-bundle.yaml)
  * per la pagina API B2B Avanzamento Notifiche:
    * [https://raw.githubusercontent.com/pagopa/pn-delivery-push/main/docs/openapi/api-external-b2b-webhook-bundle.yaml](https://raw.githubusercontent.com/pagopa/pn-delivery-push/main/docs/openapi/api-external-b2b-webhook-bundle.yaml)
* **\<lang>:** con il linguaggio per il quale si vuole generare il client
* **\<dest>:** con il path nel quale si vuole generare il client

### Client b2b Java

E' anche possibile utilizzare il [pn-b2b-client](https://github.com/pagopa/pn-b2b-client) pubblico sviluppato da PagoPA ed utilizzare le classi Java in esso contenute per sviluppare la propria soluzione

### Importare le definizioni delle API su Postman

Per importare le definizioni su Postman bisogna cliccare su "import", poi selezionare "Link" ed inserire i seguenti url:

* per la pagina **API B2B per le Pubbliche Amministrazioni**: [https://raw.githubusercontent.com/pagopa/pn-delivery/main/docs/openapi/api-external-b2b-pa-bundle.yaml](https://raw.githubusercontent.com/pagopa/pn-delivery/main/docs/openapi/api-external-b2b-pa-bundle.yaml)
* per la pagina **API B2B avanzamento notifiche**: \
  [https://raw.githubusercontent.com/pagopa/pn-delivery-push/main/docs/openapi/api-external-b2b-webhook-bundle.yaml](https://raw.githubusercontent.com/pagopa/pn-delivery-push/main/docs/openapi/api-external-b2b-webhook-bundle.yaml)

Poi modificare i seguenti parametri delle collections ottenute:

* nel tab "Variables" modificare la variables **baseUrl** con: [https://api.uat.notifichedigitali.it](https://api.uat.notifichedigitali.it) (ambiente di collaudo UAT)
* nel tab "Authorization" selezionare nella tendina "Type" il valore "API Key", poi inserire nella casella "Key" il valore **x-api-key** e nella casella "Value" il valore della key generata dalla propria area riservata (di seguito le istruzioni)
* aggiungere il `"Authorization: Bearer <PDNDVoucher>"`in ogni chiamata verso i servizi B2B (ad esclusione di quelli verso AWS) con il Voucher ottenuto da **PDND Interoperabilità** ed assicurarsi che sia sempre valido e non scaduto.

### Come creare la propria apikey?

Per creare le apikey bisognerà effettuare il log in nel portale lato PA da qui:\
[https://uat.selfcare.pagopa.it/auth/login](https://uat.selfcare.pagopa.it/auth/login)\
con le credenziali che sono state fornite durante il processo di Onboarding, andare nella sezione apikey, cliccare su “genera Apikey”, inserire il nome dell’apikey e selezionare “continua”.&#x20;

**NOTA:** Se si crea una apiKey associata ad un gruppo, diventerà obbligatorio inserire notifiche valorizzando il campo "group" con l'id del gruppo di appartenenza.

### Qual è il ciclo di vita delle apikey?

Le operazioni di creazione, rotazione ed eliminazione sulle apiKey sono dettate dal volere dell'utente che può gestirle a propria discrezione.

### Come generare il Voucher?

vedi:

{% content-ref url="focus-su-interoperabilita-e-generazione-voucher-per-send-uat-piattaforma-notifiche/focus-su-creazione-richiesta-di-fruizione-generazione-voucher-per-send-uat-piattaforma-notifiche.md" %}
[focus-su-creazione-richiesta-di-fruizione-generazione-voucher-per-send-uat-piattaforma-notifiche.md](focus-su-interoperabilita-e-generazione-voucher-per-send-uat-piattaforma-notifiche/focus-su-creazione-richiesta-di-fruizione-generazione-voucher-per-send-uat-piattaforma-notifiche.md)
{% endcontent-ref %}
