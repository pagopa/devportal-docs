# Rate (>9)

Se il numero di rate è superiore a 9, sull'avviso di pagamento non sarà presente la sezione che consente il pagamento dell'importo in un'unica soluzione.

Di seguito un esempio della `POST/notices/generate` da effettuare con il popolamento dei campi per la generazione del template con un numero di rate superiore a 9:

```json
 {
        "templateId": <template_id>,
        "data": {
          "notice": {
            "subject": <Avviso.Oggetto>,
            "paymentAmount": <Avviso.Importo>,
            "dueDate": <Avviso.Data>,
            "code": <Avviso.Codice>,
            "installments": [
              {
                "code": <Avviso.Rata1.Codice>,
                "amount": <Avviso.Rata1.Importo>,
                "dueDate": <Avviso.Rata1.Data>
              },
              {
                "code": <Avviso.Rata2.Codice>,
                "amount": <Avviso.Rata2.Importo>,
                "dueDate": <Avviso.Rata2.Data>
              }
            ]
          },
          "creditorInstitution": {
            "taxCode": <Ente.CF>
          },
          "debtor": {
            "taxCode": <Destinatario.CF>,
            "fullName": <Destinatario.NomeCompleto>,
            "address": <Destinatario.Indirizzo>,
            "postalCode": <Destinatario.CodicePostale>,
            "city": <Destinatario.Citta>,
            "buildingNumber": <Destinatario.Building>,
            "province": <Destinatario.Provincia>
          }
        }
      }
```

{% hint style="info" %}
Per poter utilizzare il template _rata multiple (>9)_, bisogna inserire nel campo _template\_id_ la seguente stringa: **"TemplateManyInstalments"**.
{% endhint %}

Nella sezione `notice`, i campi "`code`", "`dueDate`" e "`paymentAmout`" non saranno valorizzati.

Per le altre sezioni di cui si compone il template con rate multiple (>9) si seguono le stesse logiche descritte in [Templare con rate (2..9)](../rate-2..9/).

Tutte le specifiche tecniche per la progettazione del template con rate multiple in nnumero superiore a 9 sono disponibili al link: [https://docs.pagopa.it/avviso-pagamento/allegato-1/varianti/avviso-con-molte-rate](https://docs.pagopa.it/avviso-pagamento/allegato-1/varianti/avviso-con-molte-rate).
