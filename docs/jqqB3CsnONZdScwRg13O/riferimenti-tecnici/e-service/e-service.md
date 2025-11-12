# Esportazione e importazione

La funzionalità di **esportazione e importazione** consente di trasferire una **versione** di e-service da un ambiente di PDND a un altro, così da facilitarne la messa in produzione, il riuso e la distribuzione tra enti che collaborano.

Questa funzionalità è utile per:

* promuovere in produzione un e-service che ha superato il collaudo;
* trasferire e-service tra ambienti gestiti dallo stesso ente;
* replicare un e-service presso più enti (ad esempio nel caso di Partner Tecnologici).

### Caveat all'importazione

Durante l’importazione, il sistema fornisce indicazioni utili al **debugging** in caso di problemi di coerenza. In particolare:

1. **Attributi** – gli attributi **non vengono trasferiti** da un ambiente all’altro; vanno riassegnati manualmente nel nuovo ambiente.
2. **Duplicazione dell’e-service** – se nell’ambiente di destinazione esiste già un e-service con **stesso nome e stesso ente**, l’importazione non viene eseguita. È possibile rinominare l’e-service nel pacchetto `.zip` prima di riprovare.
3. **Struttura dell’archivio** – il pacchetto `.zip` deve essere coerente con il **file di configurazione** (campi presenti e formattati correttamente; file indicati esistenti; assenza di file estranei non mappati).
4. **Interfaccia API** – le **URL dei server** presenti nel file di interfaccia possono variare tra ambienti, secondo le scelte infrastrutturali dell’ente.

### Struttura del pacchetto .zip

Il pacchetto di importazione contiene tutto il necessario per descrivere versione e documentazione dell’e-service.

* **`configuration.json`** – descrive il contenuto dell’e-service e la posizione degli altri file nello `.zip`. Il **nome del file non deve essere modificato**. Se non è presente, l’importazione non può proseguire.
* **`nome_file.[yaml|json|wsdl]`** – file di interfaccia (OpenAPI per REST o WSDL per SOAP). Il nome può essere cambiato, aggiornando il riferimento nel `configuration.json`.
* **Altri file** – documentazione tecnica allegata alla versione (manuali, esempi, ecc.); i percorsi devono corrispondere a quanto indicato in configurazione.

Tutti i campi del `configuration.json` sono **obbligatori**. Anche se non utilizzati, devono essere presenti con il **valore di default**.

**E-service**

<table><thead><tr><th width="155.0250244140625">Nome campo</th><th width="132.03125">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>name</code></td><td>String</td><td>Nome dell’e-service (5–60 caratteri, spazi inclusi). Deve essere <strong>univoco</strong> per ente.</td></tr><tr><td><code>description</code></td><td>String</td><td>Descrizione dell’e-service (10–250 caratteri, spazi inclusi).</td></tr><tr><td><code>technology</code></td><td>REST | SOAP</td><td>Tecnologia dell’API erogata. L’estensione del file di interfaccia deve essere coerente.</td></tr><tr><td><code>mode</code></td><td>DELIVER | RECEIVE</td><td>Modalità dell’e-service (erogazione diretta o inversa). In <strong>RECEIVE</strong> è obbligatoria almeno una voce in <code>riskAnalysis</code>; in <strong>DELIVER</strong> non devono essercene. [<strong>correzione: corretto <code>REICEVE</code> in <code>RECEIVE</code></strong>]</td></tr><tr><td><code>descriptor</code></td><td>Descriptor</td><td>Contenuto della <strong>versione</strong> dell’e-service (vedi tabella <em>Descriptor</em>).</td></tr><tr><td><code>riskAnalysis</code></td><td>Array&#x3C;RiskAnalysis></td><td>Analisi del rischio richieste per gli e-service in modalità <strong>RECEIVE</strong> (default: <code>[]</code>).</td></tr></tbody></table>

**Descriptor**

| Nome campo                | Tipo                | Descrizione                                                                                         |
| ------------------------- | ------------------- | --------------------------------------------------------------------------------------------------- |
| `description`             | String              | Descrizione della **versione** (10–250 caratteri, spazi inclusi).                                   |
| `interface`               | Document            | Documento che descrive l’**interfaccia API** erogata.                                               |
| `docs`                    | Array`<Document>`    | Documenti allegati alla versione (es. documentazione tecnica). Default: `[]`.                       |
| `audience`                | Array`<String>`      | Audience della risorsa. In genere è inserita **una sola stringa**.                                  |
| `voucherLifespan`         | Number              | Durata del **voucher** in **secondi** (valori consentiti: `60`–`86_400`, cioè **1 minuto–24 ore**). |
| `dailyCallsPerConsumer`   | Number              | Soglia chiamate **per fruitore** (chiamate API/giorno). Valori ≥ 1.                                 |
| `dailyCallsTotal`         | Number              | Soglia chiamate **totali** (API/giorno) ≥ `dailyCallsPerConsumer`.                                  |
| `agreementApprovalPolicy` | AUTOMATIC \| MANUAL | Politica di **approvazione** delle richieste di fruizione.                                          |

**Document**

| Nome campo   | Tipo   | Descrizione                                                           |
| ------------ | ------ | --------------------------------------------------------------------- |
| `prettyName` | String | Nome “parlante” mostrato agli utenti (5–60 caratteri, spazi inclusi). |
| `path`       | String | Percorso del file a partire dal `configuration.json`.                 |

**RiskAnalysis**

| Nome campo         | Tipo             | Descrizione                                              |
| ------------------ | ---------------- | -------------------------------------------------------- |
| `name`             | String           | Nome assegnato all’analisi del rischio (5–60 caratteri). |
| `riskAnalysisForm` | RiskAnalysisForm | Contenuto strutturato dell’analisi del rischio.          |

**RiskAnalysisForm**

| Nome campo      | Tipo                             | Descrizione                                              |
| --------------- | -------------------------------- | -------------------------------------------------------- |
| `version`       | String                           | Versione del modello di analisi (es. **3.0** per le PA). |
| `singleAnswers` | Array`<RiskAnalysisSingleAnswer>` | Risposte **a scelta singola**.                           |
| `multiAnswers`  | Array`<RiskAnalysisMultiAnswer>`  | Risposte **a scelta multipla**.                          |

**RiskAnalysisSingleAnswer**

| Nome campo | Tipo   | Descrizione                                                                                               |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------- |
| `key`      | String | Chiave che identifica la domanda nel template (es. `institutionalPurpose` per la finalità istituzionale). |
| `value`    | String | Risposta alla domanda identificata dalla chiave.                                                          |

**RiskAnalysisMultiAnswer**

| Nome campo | Tipo           | Descrizione                                                                 |
| ---------- | -------------- | --------------------------------------------------------------------------- |
| `key`      | String         | Chiave che identifica la domanda nel template (es. `institutionalPurpose`). |
| `values`   | Array`<String>` | Elenco delle risposte selezionate.                                          |

***

Pagina successiva [→ Soglie e approvazioni](soglie-e-approvazioni.md)
