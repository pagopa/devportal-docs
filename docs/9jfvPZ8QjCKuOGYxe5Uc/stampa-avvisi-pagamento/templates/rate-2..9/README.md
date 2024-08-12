# Rate (2..9)

Questo modello può essere utilizzato quando l'avviso di pagamento si compone di un numero di rate da 2 a 9 (maggiori dettagli in [https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/rate-multiple](https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/rate-multiple)).

Di seguito un esempio della `POST/notices/generate` da effettuare con il popolamento dei campi per la generazione del template con un numero di rate da 2 a 9:

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
Per poter utilizzare il template _rata multiple (2..9)_, bisogna inserire nel campo _template\_id_ la seguente stringa: **"TemplateInstalments"**.
{% endhint %}

\
Le sezioni di cui si compone il template con rate multiple sono le seguenti:

**Intestazione**:&#x20;

Questa sezione contiene l’oggetto dell’avviso, ossia un testo chiaro e significativo per chi riceve l’avviso:

* **Avviso.Oggetto** **->** stringa di max 90 caratteri, corrispondente al campo `subject` della `POST/notices/generate)`.

**Informazioni sull’Ente Creditore**:

Questa sezione contiene le informazioni relative all’Ente Creditore:

* **Ente.CF ->** stringa di max 16 caratteri corrispondente al campo codice fiscale recuperato dal Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md));
* **Ente.Nome ->** stringa di max 50 caratteri corrispondente al campo nome recuperato dal Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md));
* **Ente.Settore** **->** stringa di max 50 caratteri corrispondente al campo _settore_ opzionalmente valorizzato nello step preliminare sul portale Backoffice pagoPA  (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md));
* **Ente.Info** **->** riferimenti dei canali di contatto dell'Ente Creditore destinati ai cittadini, come ad esempio sito web, call center o email dedicata, informazioni inserite nello step preliminare sotto la voce _"Contatti per l'assistenza"_ sul portale Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md)).

**Informazione sul destinatario**:

Questa sezione contiene le informazioni relative al soggetto debitore:

* **Destinatario.CF** **->** stringa di max 16 caratteri che indica il codice fiscale del soggetto debitore (in assenza la p.iva del soggetto debitore) corrispondente al campo `taxCode` della `POST/notices/generate`;
* **Destinatario.NomeCompleto** **->** stringa di max 70 caratteri corrispondente al campo `fullname` della `POST/notices/generate`;
* **Destinatario.Indirizzo ->** stringa di max 140 caratteri corrispondente ai campi `address`, `postalCode`, `city,` `buildingNumber`, `province` della `POST/notices/generate`.

\
**Importo e scadenza**:

È la sezione che contiene le informazioni sul quanto pagare, in che modalità e con le relative scadenze.

* **Avviso.Rate.Info** **->** numero intero maggiore di 1 che indica il numero di rate che corrisponde a quanti oggetti sono presenti all'interno del campo `Installments` della `POST/notices/generate`;
* **Avviso.Rate.n.Importo** **->** rappresenta l’importo per la rata **n**, dove **n** indica il numero della rata;
* **Avviso.Rata.n.Data ->** rappresenta la data di scadenza della rata **n**, dove **n** indica il numero della rata.

**Dati del pagamento**:

È la sezione che contiene tutte le informazioni necessarie per effettuare il pagamento.

* **Avviso.Rata.n.Codice** **->** rappresenta il numero avviso per la rata **n**, dove **n** indica il numero della rata;
* **Avviso.Rata.n.Qrcode** **->** rappresenta il codice a barre bidimensionale per la rata **n**, dove **n** indica il numero della rata. Segue le logiche descritte in [https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/codice-qr](https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/codice-qr);
* **Avviso.Codice** **->** corrispondente al campo `code` della `POST /notices/generate`;
* **Ente.Cbill ->** codice interbancario dell'Ente Creditore, conosciuto anche come Codice SIA recuperato dal Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md)).

Tutte le specifiche tecniche per la progettazione del template con rate multiple (da 2 a 9), sono disponibili al link: [https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/rate-multiple](https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/rate-multiple).

