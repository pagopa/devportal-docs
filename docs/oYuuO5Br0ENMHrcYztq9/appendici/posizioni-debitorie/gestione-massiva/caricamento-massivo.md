---
description: Specifiche per il caricamento massivo delle posizioni debitorie
---

# Caricamento massivo

In questa sezione sono presenti tutte le informazioni necessarie per l'utilizzo della funzionalità di caricamento massivo delle posizioni debitorie sulla piattaforma GPD.

Al fine di facilitare l'inserimento delle posizioni debitorie relative agli enti creditori che aderiscono alla piattaforma pagoPA in modalità asincrona, è stata implementata la funzionalità di caricamento massivo.

Nei paragrafi che seguono sono descritte le specifiche relative alle due modalità d'interfacciamento rese disponibili:

* ​Caricamento tramite API​
* Caricamento tramite SFTP

## Specifiche tracciato di input

Specifiche relative file da utilizzare come input per i servizi di caricamento massivo

Al fine di innescare il caricamento il processo di massivo delle posizioni debitorie, a prescindere dalla modalità scelta è necessario costruire un file in formato JSON secondo le specifiche riportate di seguito nel documento.

### Tracciato file

Di seguito è riportato il template relativo al file JSON da produrre per il caricamento massivo:

```json
{
   "paymentPositions": [
     {
       "iupd": "string",
       "aca" : false,
       "payStandIn" : false,
       "type": "F",
       "fiscalCode": "string",
       "fullName": "string",
       "streetName": "string",
       "civicNumber": "string",
       "postalCode": "string",
       "city": "string",
       "province": "string",
       "region": "string",
       "country": "IT",
       "email": "string",
       "phone": "string",
       "switchToExpired": false,
       "companyName": "string",
       "officeName": "string",
       "validityDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
       "paymentOption": [
         {
           "iuv": "string",
           "amount": 0,
           "description": "string",
           "isPartialPayment": true,
           "dueDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
           "retentionDate": "YYYY-MM-DDThh:mm:ss.SSSZ",
           "fee": 0,
           "transfer": [
             {
               "idTransfer": "1",
               "amount": 0,
               "organizationFiscalCode": "00000000000",
               "remittanceInformation": "string",
               "category": "string",
               "iban": "IT0000000000000000000000000",
               "postalIban": "IT0000000000000000000000000",
               "stamp": {
                 "hashDocument": "string",
                 "stampType": "st",
                 "provincialResidence": "RM"
               },
               "transferMetadata": [
                 {
                   "key": "string",
                   "value": "string"
                 }
               ]
             }
           ],
           "paymentOptionMetadata": [
             {
               "key": "string",
               "value": "string"
             }
           ]
         }
       ]
     }
   ]
 }

```

Si tratta di un array di posizioni debitorie, i campi sono gli stessi descritti all'interno della sezione [Operazioni disponibili](../operazioni-disponibili.md) delle SANP.

### Specifiche file

Il tracciato del file è comune ad entrambe le modalità di caricamento `API` e `SFTP`, tuttavia per ognuna di queste sono state definite particolari specifiche descritte di seguito.

#### SFTP

* **formato file** ->  `JSON`
* **dimensioni file** -> max `100MB` (circa 100K PD)
* **nomenclatura** -> non ci sono vincoli in merito alla nomenclatura del file, tuttavia il nome deve essere univoco, non è possibile caricare due o più file con lo stesso nome

#### API

* **formato file** ->  `ZIP` (un solo file `JSON` all'interno dell'archivio)
* **dimensioni file** -> max `5MB` (circa 100K PD)
* **nomenclatura** -> non ci sono vincoli

{% hint style="info" %}
Nelle prossime versioni della piattaforma i limiti sulle dimensioni dei file verranno aumentati.
{% endhint %}

## Caricamento tramite API

Il caricamento massivo può essere innescato tramite API le cui specifiche sono riportate qui di seguito.

Mediante l'API `/organizations/{organizationFiscalCode}/debtpositions/file` è possibile innescare il caricamento massivo delle posizioni debitorie presenti all'interno di un file compresso come descritto in [Specifiche tracciato di input](caricamento-massivo.md#specifiche-tracciato-di-input).

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test)
{% endswagger %}

Il metodo in caso positivo risponde subito con un codice `HTTP 202`, una volta ottenuta una risposta positiva è possibile verificare lo stato del caricamento mediante l'utilizzo dell'API `/organizations/{organizationFiscalCode}/debtpositions/file/{fileId}/status`.&#x20;

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-ID}/status" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test)
{% endswagger %}

Per ottenere un report completo, comprensivo degli esiti per ogni posizioni debitoria, è necessario interrogare l'API `/organizations/{organizationFiscalCode}/debtpositions/file/{fileId}/report`.

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test" path="/brokers/{broker-code}/organizations/{organization-fiscal-code}/debtpositions/file/{file-ID}/report" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/gpd_massive.json?test=test)
{% endswagger %}

## Caricamento tramite SFTP

Di seguito è descritta la procedura per il caricamento massivo delle posizioni debitorie mediante l'upload di un file non compresso che rispetti le specifiche descritte all'interno della sezione [Specifiche tracciato di input](caricamento-massivo.md#specifiche-tracciato-di-input).

### Credenziali di accesso

Il primo step da eseguire per l'attivazione del servizio consiste nella richiesta di creazione delle credenziali per l'accesso al server SFTP.\
La richiesta deve essere inoltrata direttamente al team pagoPA-Core utilizzando la casella di posta `pagopa-core@pagopa.it` specificando `nome` e `cognome` del referente tecnico e una mail alla quale verranno inviate le credenziali.

{% hint style="info" %}
Prossimamente sarà possibile ottenere le credenziali in autonomia accedendo al portale BackOffice-pagoPA
{% endhint %}

Una volta elaborata la richiesta, alla mail indicata verranno inviati i parametri per l'accesso al folder SFTP contenente due subfolders, uno di input su cui depositare i file contenenti l'elenco delle posizioni debitorie da caricare (rif. [Specifiche tracciato di input](broken-reference)), e uno di output dove la piattaforma fornirà l'esito del caricamento.&#x20;

Credenziali di accesso:

* `path` - connection string es. `pagopadweugpsgpdsasftp.<USERNAME_INPUT>@pagopadweugpsgpdsasftp.blob.core.windows.net`&#x20;
* `password` - password riferite all'utente `USERNAME_INPUT`

Ogni partner/intermediario avrà dunque a disposizione un folder identificato dal `codice fiscale`/ `partita iva` avente la seguente struttura:

```
/CF_BROKER_01
    | CF_EC_01
        | /input
        | /output
    | CF_EC_02
        | /input
        | /output
/CF_BROKER_02
    | CF_EC_03
        | /input
        | /output
```

### Caricamento file

Per innescare il processo di caricamento delle posizioni debitorie è necessario connettersi al folder `/CF_BROKER_ID/CF_EC_ID/input` utilizzando le relative credenziali di accesso ed effettuare l'upload di uno o più file in formato `JSON`.

{% hint style="info" %}
Come riportato nella sezione _Specifiche tracciato input_ va rispettato il vincolo di univocità del nome del file.
{% endhint %}

&#x20;L'upload dei file sulla cartella innesca il processo di caricamento massivo che avrà una durata variabile in funzione della dimensione dei file caricati.

Una volta terminato il caricamento massivo, per ogni file viene prodotta una ricevuta all'interno del folder `/CF_BROKER_ID/CF_EC_ID/input`, la ricevuta è strutturata nel seguente modo:

```json
{
  "uploadID": "string",
  "processedItem": "integer",
  "submittedItem": "integer",
  "responses": [
    {
      "statusCode": "integer",
      "statusMessage": "string",
      "requestIDs": [
        "string"
      ]
    }
  ],
  "startTime": "string($date-time)",
  "endTime": "string($date-time)"
}
```

* `uploadID` - identificativo univoco del file caricato (coincide con il nome del file nel caso SFTP)
* `responses` - la lista degli esiti del caricamento raggruppati per codice di stato e dettaglio.
* `requestIDs` - la lista degli identificativi delle posizioni debitorie.
* `startTime` - Data e ora completamento processo di upload
* `endTime` - Data e ora completamento processo di upload
