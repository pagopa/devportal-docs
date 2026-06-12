---
description: Procedura per il caricamento massivo delle posizioni debitorie su GPD
---

# 📥 Gestione massiva tramite SFTP

## Credenziali di accesso

Il primo step da eseguire per l'attivazione del servizio consiste nella richiesta di creazione delle credenziali per l'accesso al server SFTP.\
La richiesta deve essere inoltrata direttamente al team pagoPA-Core utilizzando la casella di posta `pagopa-core@pagopa.it` specificando `nome` e `cognome` del referente tecnico e una mail alla quale verranno inviate le credenziali.

{% hint style="info" %}
Prossimamente sarà possibile ottenere le credenziali in autonomia accedendo al portale BackOffice-pagoPA
{% endhint %}

Una volta elaborata la richiesta, alla mail indicata verranno inviati i parametri per l'accesso al folder SFTP contenente due subfolders, uno di input su cui depositare i file contenenti l'elenco delle posizioni debitorie da caricare (rif. [Specifiche tracciato di input](specifiche-tracciato-di-input.md)), e uno di output dove la piattaforma fornirà l'esito del caricamento.&#x20;

Credenziali di accesso:

* `path` - connection string es. `pagopadweugpsgpdsasftp.<USERNAME_INPUT>@pagopadweugpsgpdsasftp.blob.core.windows.net`&#x20;
* `password` - password riferite all'utente `USERNAME_INPUT`

Ogni partner/intermediario avrà dunque a disposizione un folder identificato dal `codice fiscale`/ `partita iva` avente la seguente struttura:

```
/CF_BROKER_01
    | CF_EC_01
        | /input
        | /output
    | CF_EC_02
        | /input
        | /output
/CF_BROKER_02
    | CF_EC_03
        | /input
        | /output
```

## Caricamento file

Per innescare il processo di caricamento delle posizioni debitorie è necessario connettersi al folder `/CF_BROKER_ID/CF_EC_ID/input` utilizzando le relative credenziali di accesso ed effettuare l'upload di uno o più file in formato `JSON`.

{% hint style="info" %}
Come riportato nella sezione _Specifiche tracciato input_ va rispettato il vincolo di univocità del nome del file.
{% endhint %}

&#x20;L'upload dei file sulla cartella innesca il processo di creazione, aggiornamento ed eliminazione  massivo che avrà una durata variabile in funzione della dimensione dei file caricati.

Una volta terminato il caricamento massivo, per ogni file viene prodotta una ricevuta all'interno del folder `/CF_BROKER_ID/CF_EC_ID/output`, la ricevuta è strutturata nel seguente modo:

```json
{
  "uploadID": "string",
  "processedItem": "integer",
  "submittedItem": "integer",
  "responses": [
    {
      "statusCode": "integer",
      "statusMessage": "string",
      "requestIDs": [
        "string"
      ]
    }
  ],
  "startTime": "string($date-time)",
  "endTime": "string($date-time)"
}
```

* `uploadID` - identificativo univoco del file caricato (coincide con il nome del file nel caso SFTP)
* `responses` - la lista degli esiti del caricamento raggruppati per codice di stato e dettaglio.
* `requestIDs` - la lista degli identificativi delle posizioni debitorie, ovvero `IUPD`
* `startTime` - Data e ora completamento processo di upload
* `endTime` - Data e ora completamento processo di upload
