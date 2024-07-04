# Con Bollettino Postale

Se l'Ente Creditore dispone di un conto corrente postale per gli incassi, è necessario includere anche la sezione del bollettino postale. In questo caso, si devono utilizzare due pagine differenti: una per l'importo scontato del 30%, l'altra per l'importo ridotto come indicato alle specifiche tecniche disponibili al seguente link: [https://www.figma.com/design/os2kysGJOwD5GwyZIRsG5O/Violazioni-CDS?node-id=0-1\&t=4e33Bhvs4ZKi2sA5-0](https://www.figma.com/design/os2kysGJOwD5GwyZIRsG5O/Violazioni-CDS?node-id=0-1\&t=4e33Bhvs4ZKi2sA5-0).

Di seguito un esempio della `POST/notices/generate` da effettuare con il popolamento dei campi per la generazione del template _Violazione Codice della Strada con bollettino postale:_

```json
{
  "data": {
    "creditorInstitution": {
      "taxCode": "string",
      
    },
    "debtor": {
      "address": "string",
      "buildingNumber": "string",
      "city": "string",
      "fullName": "string",
      "postalCode": "string",
      "province": "string",
      "taxCode": "string"
    },
    "notice": {
      "code": "string",
      "discountedAmount": 0,
      "dueDate": "string",
      "installments": [
        {
          "amount": 0,
          "code": "string",
          "dueDate": "string"
        }
      ],
      "paymentAmount": 0,
      "reducedAmount": 0,
      "subject": "string"
    }
  },
  "templateId": "string"
}
```

{% hint style="info" %}
Per poter utilizzare il template _rata violazione codice della strada_, bisogna inserire nel campo _template\_id_ la seguente stringa: **"TemplateCdsInfractionExtended"**.
{% endhint %}

