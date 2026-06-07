# Come progettare le caratteristiche dell'EAA

In questa fase si definisce l'esperienza offerta all'utente: i dati esposti, le modalità di ottenimento dell'attestato, il comportamento in caso di errore o di variazione di stato. Le scelte tecniche delle fasi successive discendono da tali definizioni; una progettazione accurata riduce le revisioni a valle.

**Prerequisiti.** Lettura delle [Specifiche Tecniche](https://italia.github.io/eid-wallet-it-docs/versione-corrente/it/introduction.html) ; disponibilità del dataset di origine;[ download del file di progettazione](../riferimenti-tecnici/il-file-di-progettazione-delleaa.md).

## Passaggi

{% stepper %}
{% step %}
### **Scaricare e duplicare il file**

Duplicare il file per ciascun EAA e rinominare ogni copia secondo la convenzione `progettazione_caratteristiche_eaa_[Nome Ente]_[Nome EAA]`.
{% endstep %}

{% step %}
### **Definire le modalità di ottenimento dell'EAA**

Nella sezione `casi d'uso`, indicare la discovery — **catalogo** o **touchpoint dell'Ente** — e la modalità di risposta dell'e-service: **sincrona** (preferibile) o **differita**.
{% endstep %}

{% step %}
### **Identificare i casi d'uso**

Definire gli scenari **da remoto** (cross-device/same-device) e **in prossimità** (supervisionata/non supervisionata). La scelta orienta il formato di emissione: **SD-JWT-VC** (remoto) o **mdoc-CBOR** (prossimità)
{% endstep %}

{% step %}
### **Modellare il Data Model**

Compilare la sezione `dataset` applicando i **4 principi** e i **Template del Data Model** (Appendice B di A1). Organizzare gli attributi nei **quattro blocchi** (`identityClaims`, `userClaims`, `attributeClaims`, `metadataClaims`) nel rispetto del limite di **15 Core + 15 Dettaglio**.&#x20;

Dettaglio in → [Data model: attributi e stati dell'EAA](../riferimenti-tecnici/data-model-attributi-e-stati-delleaa.md);&#x20;

Requisiti del relativo OpenAPI in → [Requisiti dell'OpenAPI YAML e dell'e-service](../riferimenti-tecnici/requisiti-dellopenapi-yaml-e-delle-service.md).
{% endstep %}

{% step %}
### **Mappare le casistiche di errore**

(`mappatura errori`; dettaglio in → [Codici di errore dell'e-service](../riferimenti-tecnici/codici-di-errore-delle-service.md))
{% endstep %}

{% step %}
### **Definire la gestione degli stati**

(`mappatura stati`; dettaglio in → [Data model: attributi e stati dell'EAA](../riferimenti-tecnici/data-model-attributi-e-stati-delleaa.md))
{% endstep %}

{% step %}
### **Compilare assistenza e testi informativi**&#x20;

(`assistenza`; dettaglio in → [Assistenza, referenti e glossario](../riferimenti-tecnici/assistenza-referenti-e-glossario.md))
{% endstep %}

{% step %}
### **Validare il file**&#x20;

(JSON Schema, Linter, campi obbligatori, naming).&#x20;

La validazione è **obbligatoria** ai fini del passaggio allo Step 2
{% endstep %}
{% endstepper %}

## I 4 principi di progettazione

* **Valore** — l'EAA presenta uno scopo chiaro e un'utilità concreta.
* **Verificabilità** — gli attributi rappresentano in modo attendibile la condizione o il diritto dell'utente.
* **Comprensibilità** — il linguaggio è semplice e accessibile.
* **Pertinenza** — sono inclusi i soli attributi essenziali.

Disponendo del file di progettazione validato, è possibile accedere alla piattaforma: il tutorial seguente descrive [l'adesione a PDND e la predisposizione dell'ambiente](come-aderire-alla-pdnd-e-configurare-lambiente.md).
