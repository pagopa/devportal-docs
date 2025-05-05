# Esempio di export di un E-service

Poniamo di aver esportato il seguente pacchetto attraverso la funzionalità di esportazione.

{% file src="../.gitbook/assets/import_export_e-service_example.zip" %}

Come si vede, presenta il seguente file di configurazione:

```
{
  "name" : "E-service erogazione inversa esempio",
  "description" : "Questo è un esempio di un e-service di erogazione inversa per documentare la funzionatità dell'importazione-esportazione e-service",
  "technology" : "REST",
  "mode" : "RECEIVE",
  "descriptor" : {
    "interface" : {
      "prettyName" : "Specifica API",
      "path" : "api.yaml"
    },
    "docs" : [
      {
        "prettyName" : "Documento tecnico esempio 01",
        "path" : "documents/example_documentation_1.pdf"
      },
      {
        "prettyName" : "Documento tecnico esempio 02",
        "path" : "documents/example_documentation_2.pdf"
      }
    ],
    "audience" : [
      "api/v1/test"
    ],
    "voucherLifespan" : 600,
    "dailyCallsPerConsumer" : 100000,
    "dailyCallsTotal" : 10000000,
    "description" : "Inseriti i primi due endpoint per la ricezione dei dati",
    "agreementApprovalPolicy" : "AUTOMATIC"
  },
  "riskAnalysis" : [
    {
      "name" : "La mia prima finalità",
      "riskAnalysisForm" : {
        "version" : "2.0",
        "singleAnswers" : [
          {
            "key" : "institutionalPurpose",
            "value" : "Come previsto dalla norma XX/YYYY"
          },
          {
            "key" : "purpose",
            "value" : "INSTITUTIONAL"
          },
          {
            "key" : "usesPersonalData",
            "value" : "NO"
          },
          {
            "key" : "usesThirdPartyPersonalData",
            "value" : "NO"
          }
        ],
        "multiAnswers" : [
        ]
      }
    }
  ]
}
```

Una struttura di cartella ben formattata, che permetta di trovare sia i due file `docs` che il file `interface`, secondo come sono mappati all'interno del file di configurazione, è la seguente:

```
- configuration.json
- api.yaml // Il file di interfaccia
- documents/
  - example_documentation_1.pdf
  - example_documentation_2.pdf
```

Il `voucherLifespan` dura 600 secondi, dunque la scadenza del voucher dei fruitori è impostata su 10 minuti.

La tecnologia impostata nel campo technology è REST, e dunque il file di interfaccia caricato è uno .yaml, concordemente con&#x20;

Inoltre, all'interno del file si vede che il `mode` dell'e-service è `RECEIVE`, e dunque si tratta di un e-service in erogazione inversa. Per questo motivo, il campo `riskAnalysis` presenta un'analisi del rischio compilata (il numero di analisi del rischio è discrezionale, ma non può essercene meno di una).

La struttura del `riskAnalysisForm` varia in base alla versione e al tipo di ente che la compila (se PA o non PA). Per un elenco completo dei campi presenti nelle `riskAnalysis` si rimanda direttamente alla [codebase](https://github.com/pagopa/interop-be-monorepo/tree/bca7ff2cf1504fc22c8cbce8f7f7f33764d2b70c/packages/commons/src/risk-analysis/rules). Si sconsiglia fortemente di generare manualmente l'analisi del rischio; i campi da riempire sono potenzialmente molti e cambiano in base alle risposte date nelle domande precedenti.
