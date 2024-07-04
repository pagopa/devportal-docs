# Con Bollettino Postale

Qualora l'Ente Creditore abbia un conto corrente di accredito postale, le diverse rate vanno inserite dopo la porzione delle rate multiple.

Di seguito un esempio della `POST/notices/generate` da effettuare con il popolamento dei campi per la generazione del template con un numero di rate superiori a 9 con bollettino postale:

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
Per poter utilizzare il template _rate multiple (>9) con bollettino postale_, bisogna inserire nel campo template\_id la seguente stringa: **"TemplateInstalmentsPoste"**.
{% endhint %}

La sezione _Bollettino Postale_ avrà i seguenti campi:

* **Numero\_cc\_postale**: corrisponde al campo numero C/C postale indicato dall'EC sul Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md));
* **Intestatario\_conto\_corrente\_postale**: intestazione del c/c postale dell’Ente Creditore, che corrisponde al campo Intestazione c/c postale indicato dall'EC sul Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md));
* **Data\_matrix**: codice a barre bidimensionale a matrice - per le specifiche del datamatrix si rimanda al Manuale della stampa in proprio di Poste Italiane, consultabile sul sito [poste.it](https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/www.poste.it);
* **Autorizzazione**: codice autorizzativo rilasciato da Poste Italiane per la stampa in proprio dei bollettini postali, indicato dall'EC sul Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md))
* **Nome\_cognome\_destinatario**: Nome e cognome del debitore a cui è intestata la posizione debitoria;
* **Oggetto\_del\_pagamento**: definisce cosa bisogna pagare, con un testo chiaro e significativo per chi riceve l'avviso;
* **Codice\_avviso**: codice avviso;
* **Cf\_ente**: codice Fiscale o Partita IVA dell'Ente Creditore;
* **Importo**: importo del pagamento.

Maggiori informazioni circa il template con Bollettino Postale sono disponibili al link: [https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/bollettino-postale-pa](https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/bollettino-postale-pa).
