# Senza Scadenza

Questo template permette di stampare un bollettino senza data di scadenza secondo le [specifiche tecniche](https://www.figma.com/design/Zbjx4y41nNvS4qjFzheH0U/Rata-unica?node-id=1-865\&t=KsgeUTx3QGpWp0Sz-0).&#x20;

Di seguito un esempio della `POST/notices/generate` da effettuare con il popolamento dei campi per la generazione del template rata unica senza scadenza.

```json
{
        "templateId": <template_id>,
        "data": {
          "notice": {
            "subject": <Avviso.Oggetto>,
            "paymentAmount": <Avviso.Importo>,
            "code": <Avviso.Codice>,
            "installments": [
              {
                "code": <Avviso.Rata1.Codice>,
                "amount": <Avviso.Rata1.Importo>,
              },
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



Per poter utilizzare il template senza scadenza oltre ad utilizzare il corretto _template\_id_, bisogna non valorizzare il campo `dueDate`.

Le sezioni di cui si compone il template rata unica senza scadenza sono le seguenti:

**Intestazione**:&#x20;

Questa sezione contiene l’oggetto dell’avviso, ossia un testo chiaro e significativo per chi riceve l’avviso:

* **Avviso.Oggetto ->** stringa di max 90 caratteri, corrispondente al campo _subject_ della `POST/notices/generate)`.

**Informazioni sull’Ente Creditore**:

Questa sezione contiene le informazioni relative all’Ente Creditore:

* **Ente.CF ->** stringa di max 16 caratteri corrispondente al campo codice fiscale recuperato dal Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md));
* **Ente.Nome ->** stringa di max 50 caratteri corrispondente al campo nome recuperato dal Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md));
* **Ente.Settore** **->** stringa di max 50 caratteri corrispondente al campo settore opzionalmente valorizzato nello step preliminare sul portale Backoffice pagoPA  (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md));
* **Ente.Info** **->** riferimenti dei canali di contatto dell'Ente Creditore destinati ai cittadini, come ad esempio sito web, call center o email dedicata, informazioni inserite nello step preliminare sotto la voce _"Contatti per l'assistenza"_ sul portale Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md)).

**Informazione sul destinatario**:

Questa sezione contiene le informazioni relative al soggetto debitore:

* **Destinatario.CF ->** stringa di max 16 caratteri che indica il codice fiscale del soggetto debitore (in assenza la p.iva del soggetto debitore) corrispondente al campo `taxCode` della `POST/notices/generate`;
* **Destinatario.NomeCompleto** **->** stringa di max 70 caratteri corrispondente al campo `fullname` della `POST/notices/generate`;
* **Destinatario.Indirizzo** **->** stringa di max 140 caratteri corrispondente ai campi `address`, `postalCode`, `city`, `buildingNumber`_,_ `province` della `POST/notices/generate`.

\
**Importo e scadenza**

È la sezione che contiene le informazioni sul quanto pagare:

* **Avviso.Importo** **->** con valore massimo 999.999.999,99 corrisponde al campo `Amount` della `POST/notices/generate`;
* L’intestazione della sezione sarà soltanto _“Quanto pagare?_” mentre per gli altri template è indicata con “_Quanto e quando pagare?_”;
* **Sezione Dati per il pagamento**: rimozione del blocco “_entro il Avviso.Data_”. Se si tratta di un avviso con più rate rimozione del blocco “_entro il Avviso.Rate.n.Data_”.

**Dati del pagamento**:

È la sezione che contiene tutte le informazioni necessarie per effettuare il pagamento.

* **Avviso.QRCode** **->** segue le logiche descritte in [https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/rata-unica](https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/rata-unica);
* **Avviso.Codice ->** corrispondente al campo code della `POST /notices/generate`;
* **Ente.Cbill** **->** codice interbancario dell'Ente Creditore, conosciuto anche come Codice SIA recuperato dal Backoffice pagoPA (vedi [Compilazione dati configurazione su Backoffice pagoPA](../../compilazione-dati-configurazione-su-backoffice-pagopa.md)).

Maggiori informazioni circa il template senza scadenza sono disponibili al link: [https://docs.pagopa.it/avviso-pagamento/allegato-1/varianti/avviso-senza-scadenza](https://docs.pagopa.it/avviso-pagamento/allegato-1/varianti/avviso-senza-scadenza).

