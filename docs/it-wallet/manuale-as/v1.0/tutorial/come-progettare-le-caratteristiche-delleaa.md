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

Nella sottosezione `emissione formato` della sezione `casi d'uso`, compilare il campo `catalogo o touchpoint EAA` — indicando se l'utente ottiene l'EAA dal **catalogo** della soluzione IT-Wallet, da un **touchpoint dell'Ente** o da entrambi — e il campo `modalità sincrona differita EAA`, indicando in quale modalità il **Titolare di Fonte Autentica risponde alla richiesta di emissione tramite e-service**: **sincrona** (preferibile) o **differita** (non preferibile; in tal caso, motivare).&#x20;

Nel file di progettazione i due campi seguono lo schema fisso `domanda` / `esempio` / `risposta`; l'Ente compila il solo campo `risposta`. Estratto della sottosezione `emissione formato`:

```json
 {
     "casi d'uso": {
       "emissione formato": {
         "catalogo o touchpoint EAA": {
           "domanda": "L’utente potrà ottenere l'EAA relativo al dataset solo dal catalogo EAA del Wallet o anche da un touchpoint gestito dall’Ente titolare?",
           "esempio": "Entrambi, sia da catalogo che da touchpoint Ente",
           "risposta": ""
         },
         "modalità sincrona differita EAA": {
           "domanda": "L'utente potrà ottenere l'EAA in modalità sincrona (preferibile) o in modalità differita? Se differita, perché?",
           "esempio": "Differita, per motivi di controlli aggiuntivi",
           "risposta": ""
         }
       }
     }
   }
```


{% endstep %}

{% step %}
### **Identificare i casi d'uso**

Definire gli scenari **da remoto** (cross-device/same-device) e **in prossimità** (supervisionata/non supervisionata). La scelta orienta il formato di emissione: **SD-JWT-VC** (remoto) o **mdoc-CBOR** (prossimità)
{% endstep %}

{% step %}
### **Modellare il Data Model**

Compilare la sezione `dataset` applicando i **4 principi** e i **Template del Data Model**. Organizzare gli attributi nei **quattro blocchi** (`identityClaims`, `userClaims`, `attributeClaims`, `metadataClaims`) nel rispetto del limite di **15 Core + 15 Dettaglio**.&#x20;

Dettaglio in → [Data model: attributi e stati dell'EAA](../riferimenti-tecnici/data-model-attributi-e-stati-delleaa.md);&#x20;

Requisiti del relativo OpenAPI in → [Requisiti dell'OpenAPI YAML e dell'e-service](../riferimenti-tecnici/requisiti-dellopenapi-yaml-e-delle-service.md).
{% endstep %}

{% step %}
### **Mappare le casistiche di errore**

Associare a ciascun esito negativo dell'e-service (dato non disponibile, utente non riconosciuto, EAA inesistente e simili) un codice di risposta, un messaggio comprensibile e l'azione suggerita all'utente. Una mappatura completa consente al wallet di comunicare con chiarezza il motivo di un mancato rilascio e di orientare l'utente verso la soluzione. Compilare a tal fine la sezione `mappatura errori` del file di progettazione.

Elenco dei codici, messaggi e relativa obbligatorietà è disponibile nel riferimento → [Codici di errore dell'e-service](../riferimenti-tecnici/codici-di-errore-delle-service.md)
{% endstep %}

{% step %}
### **Definire la gestione degli stati**

Per ciascuno stato del ciclo di vita dell'EAA (valido, sospeso, non valido, scaduto, da aggiornare) stabilire quando si applica, il messaggio da mostrare nel wallet e le eventuali azioni a disposizione dell'utente. Una corretta gestione degli stati mantiene l'attestato coerente con il dato reale e informa l'utente a ogni variazione. Compilare a tal fine la sezione `mappatura stati` del file di progettazione.

Stati, transizioni ed effetti sull'EAA in → [Data model: attributi e stati dell'EAA](../riferimenti-tecnici/data-model-attributi-e-stati-delleaa.md)
{% endstep %}

{% step %}
### **Compilare assistenza e testi informativi**&#x20;

Indicare i referenti e i canali a cui l'utente può rivolgersi e redigere i testi informativi che accompagnano l'EAA nel wallet (descrizione, note d'uso e riferimenti per il supporto). Questi contenuti garantiscono trasparenza verso l'utente e un punto di contatto in caso di difficoltà nell'ottenimento o nell'utilizzo dell'attestato. Compilare a tal fine la sezione `assistenza` del file di progettazione.

Struttura della sezione e contenuti attesi sono disponibili nel riferimento → [Assistenza, referenti e glossario](../riferimenti-tecnici/assistenza-referenti-e-glossario.md)
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
