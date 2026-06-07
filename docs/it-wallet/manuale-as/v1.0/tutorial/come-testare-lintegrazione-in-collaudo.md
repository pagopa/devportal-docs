# Come testare l'integrazione in collaudo

Il collaudo costituisce la prova generale del servizio. Sebbene il passo non sia obbligatorio, la sua omissione comporta il rischio di individuare eventuali anomalie direttamente in produzione, con impatto sugli utenti e costi di correzione superiori. Le verifiche in questa sede rappresentano pertanto la modalità più efficiente di **riduzione del rischio**.

Il passo consiste nel verificare l'integrazione dei componenti configurati nelle fasi precedenti: la corretta erogazione dei dati, la propagazione delle variazioni di stato e la resa dell'attestato nel wallet. I test vanno eseguiti **quando l'Issuer è disponibile** in collaudo; in caso di indisponibilità, è possibile procedere e rieseguirli successivamente.

## Verifiche da effettuare

{% stepper %}
{% step %}
### Erogazione dei dati

Interrogare l'e-service in collaudo e verificare che restituisca i campi attesi, nel formato corretto e con valori coerenti con il dataset. Costituisce la verifica principale, in quanto conferma l'effettivo funzionamento del «contratto» tecnico.
{% endstep %}

{% step %}
### **Gestione del ciclo di vita**

Generare una variazione di stato e verificare, tramite **Signal Hub**, la corretta emissione e ricezione del segnale: è il meccanismo che mantiene allineato l'EAA nel wallet alla variazione del dato (→ [Signal hub: soglie di carico, probing e tracing](../riferimenti-tecnici/signal-hub-soglie-di-carico-probing-e-tracing.md)  e il caso d'uso → [Gestire un cambio di stato in esercizio](../casi-duso/gestire-un-cambio-di-stato-in-esercizio.md) ).
{% endstep %}

{% step %}
### Credential Offer (ove sviluppato)

Verificare il corretto funzionamento del percorso di ottenimento guidato, tipicamente rilevante quando l'EAA è ottenuto dal touchpoint dell'Ente.
{% endstep %}

{% step %}
### Resa grafica

Con il Wallet Provider (es. PagoPA per la soluzione pubblica), verificare la leggibilità e la presentazione dell'attestato nell'app. Attività facoltativa, utile ai fini dell'esperienza utent
{% endstep %}
{% endstepper %}

{% hint style="info" %}
**Suggerimento.** È opportuno concordare anticipatamente con l'Issuer la finestra di test: la disponibilità dell'Issuer in collaudo è spesso il fattore che determina la tempistica di esecuzione delle verifiche. Si raccomanda di documentare gli esiti, a supporto dell'autorizzazione interna al rilascio in produzione.
{% endhint %}

Superati i test, ove eseguiti, si dispone degli elementi necessari alla decisione di passaggio in produzione.

Acquisito l'esito dei test, è possibile procedere alla [**pubblicazione in produzione**](come-pubblicare-in-produzione.md).
