# Con Bollettino Postale

Qualora l'Ente Creditore abbia un conto corrente di accredito postale, le diverse rate vanno inserite dopo la porzione delle rate multiple.

Di seguito un esempio della `POST/notices/generate` da effettuare con il popolamento dei campi per la generazione del template con un numero di rate da 2 a 9 con _Bollettino Postale_:

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
Per poter utilizzare il template _rate multiple (2..9) con bollettino postale_, bisogna inserire nel campo _template\_id_ la seguente stringa: **"TemplateInstalmentsPoste"**.
{% endhint %}

La sezione _Bollettino Postale_ avrà i seguenti campi:

* **Numero\_cc\_postale ->** corrisponde al campo _numero C/C postale_ indicato dall'EC sul Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md));
* **Intestatario\_conto\_corrente\_postale ->** intestazione del c/c postale dell’Ente Creditore, che corrisponde al campo _intestazione c/c postale_ indicato dall'EC sul Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md));
* **Data\_matrix ->** codice a barre bidimensionale a matrice - per le specifiche del datamatrix si rimanda al Manuale della stampa in proprio di Poste Italiane, consultabile sul sito [poste.it](https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/www.poste.it);
* **Autorizzazione ->** codice autorizzativo rilasciato da Poste Italiane per la stampa in proprio dei bollettini postali, indicato dall'EC sul Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md));
* **Nome\_cognome\_destinatario -> n**ome e cognome del debitore a cui è intestata la posizione debitoria;
* **Oggetto\_del\_pagamento ->** definisce cosa bisogna pagare, con un testo chiaro e significativo per chi riceve l'avviso;
* **Codice\_avviso ->** codice dell'avviso di pagamento;
* **Cf\_ente ->** codice fiscale o partita IVA dell'Ente Creditore;
* **Importo ->** importo del pagamento.

Maggiori informazioni circa il template con Bollettino Postale sono disponibili al link: [https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/bollettino-postale-pa](https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/bollettino-postale-pa).
