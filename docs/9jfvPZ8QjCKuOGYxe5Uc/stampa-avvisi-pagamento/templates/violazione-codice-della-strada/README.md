# Violazione Codice della Strada

Nel caso di avvisi di pagamento in cui le date di scadenza dipendono dalla data di notifica, e quest'ultima non è nota al momento dell'invio (o non è possibile attualizzare l'importo a posteriori), è necessario esplicitare i seguenti campi:

* **Importo scontato del 30% -> i**mporto da saldare nel caso in cui il pagamento avvenga entro il quinto giorno dalla data di notifica, corrisponde al campo `discounted.Amount` della `POST/notices/generates`;
* **Importo ridotto ->** importo da saldare nel caso in cui il pagamento avvenga tra il sesto e il sessantesimo giorno dalla data di notifica, corrisponde al campo `reduced.Amount` della `POST/notices/generates`.

Le sezioni di cui si compone il template violazione codice della strada per tutti gli altri campi seguono le stesse logice descritte nel modello [rata unica](../rata-unica/).

Di seguito un esempio della `POST/notices/generate` da effettuare con il popolamento dei campi per la generazione del template _Violazione Codice della Strada:_

```json
{
  "templateId": "<template_id>",
  "data": {
    "notice": {
      "subject": <Avviso.Oggetto>,
      "reduced": {
        "amount": <Avviso.ImportoRidotto>,
        "code": <Avviso.CodiceRidotto>
      },
      "discounted": {
          "amount": <Avviso.ImportoScontato>,
          "code": <Avviso.CodiceScontato>
      }
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
Per poter utilizzare il template _violazione codice della strada_, bisogna inserire nel campo _template\_id_ la seguente stringa: **"TemplateCdsInfraction"**.
{% endhint %}

Maggiori informazioni circa il template violazioni codici della strada sono disponibili al link: [https://docs.pagopa.it/avviso-pagamento/allegato-1/varianti/violazioni-codice-della-strada](https://docs.pagopa.it/avviso-pagamento/allegato-1/varianti/violazioni-codice-della-strada).
