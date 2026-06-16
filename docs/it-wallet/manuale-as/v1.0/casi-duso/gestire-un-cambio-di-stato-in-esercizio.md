# Gestire un cambio di stato in esercizio

In questo caso d'uso di esempio si descrive il ciclo di vita di una variazione di stato, dal momento in cui un dato cambia presso la fonte autentica fino all'aggiornamento dell'attestato nel wallet del cittadino. Lo scenario mostra come l'e-service e il Signal Hub interagiscono durante l'esercizio per mantenere allineati tutti i sistemi.

**Attori dello scenario:**

* **La Motorizzazione Civile** (a titolo di esempio): l'Ente titolare del dato, che agisce come Authentic Source.
* **PDND (Signal Hub)**: la piattaforma che distribuisce i segnali di variazione.
* **IPZS**: il Fornitore di Attestati (Issuer), che aggiorna l'EAA nel wallet.
* **PagoPA**: il Wallet Provider della soluzione pubblica.
* **Marco**: il cittadino titolare dell'EAA della patente nel proprio wallet.

**Prerequisiti**

Perché questo flusso possa iniziare, si assume che siano già soddisfatte le seguenti condizioni:

1. L'EAA della patente è già stato emesso ed è presente nel wallet di Marco.
2. L'e-service del Titolare di Fonte Autentica è in esercizio in produzione, con Signal Hub attivo.
3. L'Issuer (IPZS) è abilitato alla fruizione dell'e-service e riceve i segnali di variazione.

### **Fase 1: Aggiornamento del dato presso l'Authentic Source**

L'evento ha origine nella fonte autentica.

1. **Azione dell'Ente**: la Motorizzazione registra la variazione nei propri sistemi, portando lo stato dell'attestato — nell'esempio — a «Sospeso».
2. **Esito**: il dato reale e quello rappresentato nell'EAA tornano a coincidere; l'e-service è ora in grado di restituire lo stato aggiornato.

{% hint style="info" %}
Per i dettagli operativi sulla gestione del dato in esercizio, consulta il tutorial: → [**Come gestire esercizio, manutenzione e assistenza**.](../tutorial/come-gestire-esercizio-manutenzione-e-assistenza.md)
{% endhint %}

### **Fase 2: Notifica della variazione tramite Signal Hub**

A seguito dell'aggiornamento, il Titolare di Fonte Autentica notifica la variazione alla piattaforma.

1. **Azione dell'Ente**: il Titolare di Fonte Autentica deposita il segnale corrispondente, indicando l'`eserviceId` e l'identificativo pseudonimizzato del dato variato.
2. **Distribuzione (lato PDND)**: PDND distribuisce il segnale ai consumatori interessati.
3. **Processamento (lato Issuer)**: IPZS, in qualità di consumatore, è informato in tempo reale e acquisisce il dato aggiornato interrogando l'e-service **per lo specifico `object_id`** segnalato, ottenendolo **indipendentemente dallo stato** (nell'esempio, `SUSPENDED`). La piattaforma veicola la sola segnalazione, mentre il dato resta presso il Titolare di Fonte Autentica.

{% hint style="info" %}
Per i dettagli tecnici sul deposito dei segnali, consulta il riferimento:  → [**Signal Hub, soglie di carico, Probing e Tracing**.](../riferimenti-tecnici/signal-hub-soglie-di-carico-probing-e-tracing.md)
{% endhint %}

### **Fase 3: Aggiornamento dell'EAA e comunicazione all'utente**

La variazione si propaga fino al wallet del cittadino.

1. **Azione dell'Issuer**: IPZS aggiorna lo stato dell'attestato nel wallet, portandolo — nell'esempio — a `SUSPENDED`. L'EAA cessa così di certificare una condizione non più veritiera.
2. **Comunicazione all'utente**: Marco riceve il messaggio che il Titolare di Fonte Autentica ha definito, in fase di progettazione, per quello specifico stato, con l'indicazione del cambiamento intervenuto e delle eventuali azioni a disposizione.
3. **Assistenza**: per eventuali chiarimenti, il Titolare di Fonte Autentica presidia i referenti e i canali dichiarati nella sezione `assistenza`, collaborando con Issuer e Wallet Provider nella diagnosi dei malfunzionamenti.

{% hint style="info" %}
Per i dettagli sugli stati dell'attestato e sul disaccoppiamento, consulta il riferimento: → [**Data model, attributi e stati dell'EAA**.](../riferimenti-tecnici/data-model-attributi-e-stati-delleaa.md)
{% endhint %}

### **Conclusione**

Il ciclo di vita della variazione è completo: lo stato reale del documento, l'e-service del Titolare di Fonte Autentica e l'attestato nel wallet di Marco sono nuovamente allineati. Grazie all'interazione standardizzata tra fonte autentica, Signal Hub e Issuer, una variazione avvenuta presso l'Ente si riflette tempestivamente nell'EAA senza che il dato lasci la titolarità del Titolare di Fonte Autentica.

{% hint style="info" %}
**Disaccoppiamento tra documento fisico ed EAA.** L'invalidazione del documento fisico invalida l'EAA, mentre la rimozione dell'EAA da parte dell'utente non incide sul documento fisico.
{% endhint %}

***
