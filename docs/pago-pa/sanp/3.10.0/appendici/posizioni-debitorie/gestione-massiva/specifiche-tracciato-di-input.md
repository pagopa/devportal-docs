---
description: >-
  Specifiche relative al file da utilizzare come input per i servizi di
  caricamento massivo
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/posizioni-debitorie/gestione-massiva/specifiche-tracciato-di-input
---

# 📄 Specifiche tracciato di input

Al fine di innescare il processo di caricamento massivo delle posizioni debitorie, a prescindere dalla modalità scelta è necessario costruire un file in formato `JSON` secondo le specifiche riportate di seguito nel documento.

## Specifiche file

Il tracciato del file è comune ad entrambe le modalità di caricamento `API` e `SFTP`, tuttavia per ognuna di queste sono state definite particolari specifiche descritte di seguito.

### SFTP

* **formato file ->** `JSON`
* **dimensioni file ->** max `100MB` (circa 100K PD)
* **nomenclatura ->** non ci sono vincoli in merito alla nomenclatura del file, tuttavia il nome deve essere univoco, non è possibile caricare due o più file con lo stesso nome

### API

* **formato file ->**  `ZIP` (un solo file `JSON` all'interno dell'archivio)
* **dimensioni file ->** max `5MB` (circa 100K PD)
* **nomenclatura ->** non ci sono vincoli

## Tracciato file creazione e aggiornamento SFTP

Di seguito è riportato il template relativo al file `JSON` da produrre per il caricamento massivo via SFTP:

```json
{
    "operation": "CREATE|UPDATE",
    "paymentPositions": [
      {
        "iupd": "string",
        "aca": false,
        "payStandIn": false,
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

Il formato `JSON` utilizzato vis SFTP differisce da quello `JSON` usato tramite API per la sola aggiunta dell'operazione desiderata prima delle `paymentPositions` ovvero :&#x20;

```json
  {
    "operation": "CREATE|UPDATE",
    "paymentPositions": [
      {
        ...
        ]
      }
  }
```

Di seguito un esempio che mostra la differenza tra il formato SFTP e il formato API REST:&#x20;

**SFTP**

```
{
   "operation": "CREATE",
   "paymentPositions": [
     {
       "iupd": "<IUP#1>",
       ...
       ]
     }
}

```

&#x20;**API REST**

```
POST
{
   "paymentPositions": [
     {
       "iupd": "<IUP#1>",
        ...
        ]
     }
}
```

Si deduce la corrispondenza tra le operazioni `POST` e `CREATE`  da un lato e dall'altro quella tra  `PUT` e `UPDATE`.

## Tracciato file eliminazione SFTP

Analogamente per la cancellazione delle posizione debitorie via SFTP il template relativo al file `JSON` da produrre deve specificare l’operazione `DELETE` :

```json
{
    "operation": "DELETE",
    "paymentPositionIUPDs": [
        "IUPD-string"
    ]
}
```

* **formato file** -> `ZIP` (un solo file `JSON` all'interno dell'archivio)
* **dimensioni file** -> max `5MB` (circa 100K PD)
* **nomenclatura** -> non ci sono vincoli

## Tracciato file REST

Per i tracciati dei file REST si rimanda alla sezione API del [DevPortal](https://developer.pagopa.it/pago-pa/api/gestione-massiva-delle-posizioni-debitorie).&#x20;
