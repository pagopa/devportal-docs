# Requisiti dell'OpenAPI YAML e dell'e-service

Riferimento dei requisiti che l'**OpenAPI YAML** dell'e-service deve rispettare per essere pubblicabile su PDND nel Sistema IT-Wallet. L'AS produce **artefatti distinti**:&#x20;

* il **JSON di progettazione** (_→_ [_Il file di progettazione dell'EAA_](il-file-di-progettazione-delleaa.md))&#x20;
* l'**OpenAPI YAML** (contratto tecnico); nel percorso da template, la specifica è fornita dal [**Template e-service**](../tutorial/come-pubblicare-e-configurare-le-service-in-collaudo.md#procedura-operativa-creazione-delle-service-da-template)

## Ciclo di vita del YAML e creazione dell'e-service

La creazione dell'e-service può seguire **due percorsi**; in entrambi l'e-service pubblicato deve risultare **conforme** ai requisiti del presente capitolo.

**Percorso A — da Template e-service IT-Wallet.** L'AS non redige né valida un OpenAPI YAML: la specifica è fornita dal template (struttura, numero, nome e ordine dei claim) ( _→_ [_Creazione e-service da template_](../tutorial/come-pubblicare-e-configurare-le-service-in-collaudo.md#procedura-operativa-creazione-delle-service-da-template))

1. **Derivazione** dell'istanza dal template pubblicato.
2. **Personalizzazione dei valori** (configurazioni di istanza; valori popolati a livello di codice). Sulle liste di claim è ammessa la variazione del **numero di oggetti** dell'array (implementazione), non dei campi del singolo oggetto. È modificabile il solo **suffisso** del nome.
3. **Conformità per costruzione** (struttura, blocchi e allineamento al Claim Registry già garantiti). Le incongruenze sono segnalate al creatore del template.
4. **Pubblicazione** (_→_ [_Come pubblicare e configurare l'e-service in collaudo_](../tutorial/come-pubblicare-e-configurare-le-service-in-collaudo.md)_, →_ [_Come pubblicare in produzione_](../tutorial/come-pubblicare-in-produzione.md)).

**Percorso B — ex-novo.**

1. **Produzione** — l'AS redige l'OpenAPI YAML, coerente con il Data Model.
2. **Auto-validazione (consigliata)** — verifica del livello formale con il checker pubblico ([Italian OpenAPI Checker](https://italia.github.io/api-oas-checker/)).
3. **Invio** — l'AS trasmette il YAML nel flusso di onboarding.
4. **Validazione Service Management** — verifica dei tre livelli e degli anti-pattern; produzione di `_fixed.yaml` e report.
5. **Correzione** — per i requisiti non auto-correggibili, l'AS revisiona il file.
6. **Pubblicazione** ((_→_ [_Come pubblicare e configurare l'e-service in collaudo_](../tutorial/come-pubblicare-e-configurare-le-service-in-collaudo.md)_, →_ [_Come pubblicare in produzione_](../tutorial/come-pubblicare-in-produzione.md))). Il file conforme può, ove previsto, essere **promosso a Template e-service**.

```mermaid
flowchart TD
    A(["Avvio creazione e-service"]) --> B{"Template e-service<br/>disponibile?"}
    B -->|"Sì"| T["Percorso A — da template:<br/>specifica fornita dal template,<br/>conformità per costruzione"]
    T --> PUB(["Pubblicazione (collaudo, poi produzione)"])
    B -->|"No"| P1["Percorso B — ex-novo:<br/>redazione dell'OpenAPI YAML"]
    P1 --> P2["Auto-validazione del livello formale<br/>(Italian OpenAPI Checker)"]
    P2 --> P3["Invio nel flusso di onboarding"]
    P3 --> P4["Validazione Service Management<br/>(3 livelli + anti-pattern)<br/>produce _fixed.yaml + report"]
    P4 --> P5{"Conforme?"}
    P5 -->|"No: requisiti non auto-correggibili"| P6["Revisione del file"]
    P6 --> P2
    P5 -->|"Sì"| PUB
```

{% hint style="info" %}
**Relazione struttura/valori.** La specifica OpenAPI definisce **la composizione della risposta** (campi, numero, nome, `constraint`), non i **valori**: l'e-service deve restituire **esattamente** tale struttura; i valori dipendono dall'AS e dalla richiesta.
{% endhint %}

## Requisiti formali (AgID/ModI)

<table><thead><tr><th width="220.046875">Requisito</th><th>Regola</th></tr></thead><tbody><tr><td><strong>Versione OpenAPI</strong></td><td><strong>OpenAPI 3.x</strong> (Swagger 2.0 non supportato)</td></tr><tr><td><strong>Italian Guidelines</strong></td><td>Checker <strong>Spectral</strong> con ruleset <em>Italian Guidelines Full</em> e <strong>0 errori</strong></td></tr></tbody></table>

Gli errori del livello formale non sono auto-correggibili.

## Requisiti strutturali IT-Wallet (estratto)

* `POST /attribute-claims/{datasetId}` **parametrico** (i path statici non sono conformi);&#x20;
* ordine fisso dei blocchi;&#x20;
* header di sicurezza (`Agid-JWT-Signature`, `Digest`, `Agid-JWT-TrackingEvidence`);&#x20;
* **assenza di DPoP**, **Bearer** presente;&#x20;
* `metadataClaims` required;&#x20;
* `INTEGRITY_REST_02` sulla 200;&#x20;
* `info.x-api-id`/`x-summary`;&#x20;
* **server HTTPS**;&#x20;
* `operationId` univoco;&#x20;
* endpoint `/status`;&#x20;
* rate limiting;&#x20;
* error response **RFC 9457**;&#x20;
* `$ref` risolti.&#x20;

## Requisiti semantici (Claim Registry)

I nomi dei **claim** devono corrispondere a quelli del **Claim Registry IPZS** (\~60 claim, con alias). Un claim non presente genera una non conformità; l'armonizzazione passa per i team **Service Design / Service Management**.

## Anti-pattern (estratto)

Annidamento ≤ 2 livelli; stringhe root-level con `maxLength ≤ 150`; ordine dei blocchi; `unique_id` nel requestBody; `Cache-Control: no-store`; divieto di `document_url`/`pdf`/`screenshot`.

## Strumenti di validazione

* **Livello formale** — auto-validabile con l'[Italian OpenAPI Checker](https://italia.github.io/api-oas-checker/).
* **Livelli strutturale/semantico** — validatore del **Service Management** di PagoPA, che produce `_fixed.yaml` e report. Il `_fixed.yaml` è da verificare prima del caricamento.



> <mark style="color:yellow;">**Da verificare.**</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">Se per IT-Wallet la modalità ex-novo sia ammessa o sia imposta la derivazione da template; se il template pubblicato coincida con il</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">`_fixed.yaml`</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">armonizzato; accesso dell'AS al Claim Registry rispetto ai claim armonizzati dal SM.</mark>

***
