---
description: >-
  Specifiche relative al file da utilizzare come input per i servizi di
  caricamento massivo
---

# 📄 Specifiche tracciato di input

Al fine di innescare il processo di caricamento massivo delle posizioni debitorie, a prescindere dalla modalità scelta è necessario costruire un file in formato `JSON` secondo le specifiche riportate di seguito nel documento.

## Tracciato file creazione e aggiornamento REST

Di seguito è riportato il template relativo al file `JSON` da produrre per il caricamento massivo via REST API:

```json
{
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

Si tratta di un array di posizioni debitorie, i campi sono gli stessi descritti all'interno della sezione [Operazioni disponibili ](../operazioni-disponibili.md)delle SANP.

## Tracciato file eliminazione REST

Di seguito è riportato il template relativo al file `JSON` da produrre per la cancellazione massiva via REST API:

```json
{
  "paymentPositionIUPDs": [
    "IUPD-string"
  ]
}
```

## Tracciato file eliminazione SFTP

Di seguito è riportato il template relativo al file `JSON` da produrre per la cancellazione massiva via SFTP:

```json
{
    "operation": "DELETE",
    "paymentPositionIUPDs": [
        "IUPD-string"
    ]
}
```

## Specifiche file

Il tracciato del file è comune ad entrambe le modalità di caricamento `API` e `SFTP`, tuttavia per ognuna di queste sono state definite particolari specifiche descritte di seguito.

### SFTP

* **formato file** ->  `JSON`
* **dimensioni file** -> max `100MB` (circa 100K PD)
* **nomenclatura** -> non ci sono vincoli in merito alla nomenclatura del file, tuttavia il nome deve essere univoco, non è possibile caricare due o più file con lo stesso nome

### API

* **formato file** ->  `ZIP` (un solo file `JSON` all'interno dell'archivio)
* **dimensioni file** -> max `5MB` (circa 100K PD)
* **nomenclatura** -> non ci sono vincoli

{% hint style="info" %}
Nelle prossime versioni della piattaforma i limiti sulle dimensioni dei file verranno aumentati.
{% endhint %}
