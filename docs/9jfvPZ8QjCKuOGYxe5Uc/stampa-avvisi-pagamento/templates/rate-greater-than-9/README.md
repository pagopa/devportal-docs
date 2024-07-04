# Rate (>9)

Se il numero di rate è superiore a 9, sull'avviso di pagamento non sarà presente la sezione che consente il pagamento dell'importo in un'unica soluzione.

Di seguito un esempio della `POST/notices/generate` da effettuare con il popolamento dei campi per la generazione del template con un numero di rate superiore a 9:

```json
{
  "data": {
    "creditorInstitution": {
      "taxCode": "string"
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
      "installments": [
        {
          "amount": 0,
          "code": "stringstringstring",
          "dueDate": "string"
        },
        {
          "amount": 0,
          "code": "stringstringstring",
          "dueDate": "string"
        }
      ],
      "subject": "string"
    }
  },
  "templateId": "string"
}
```

{% hint style="info" %}
Per poter utilizzare il template _rata multiple (>9)_, bisogna inserire nel campo _template\_id_ la seguente stringa: **"TemplateManyInstalments"**.
{% endhint %}

Nella sezione `notice`, i campi "`code`", "`dueDate`" e "`paymentAmout`" non saranno valorizzati.

Per le altre sezioni di cui si compone il template con rate multiple (>9) si seguono le stesse logiche descritte in [Templare con rate (2..9)](../rate-2..9/).

Tutte le specifiche tecniche per la progettazione del template con rate multiple in nnumero superiore a 9 sono disponibili al link: [https://docs.pagopa.it/avviso-pagamento/allegato-1/varianti/avviso-con-molte-rate](https://docs.pagopa.it/avviso-pagamento/allegato-1/varianti/avviso-con-molte-rate).
