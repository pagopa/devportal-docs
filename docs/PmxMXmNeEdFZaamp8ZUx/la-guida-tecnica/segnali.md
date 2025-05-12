# Segnali

## Tipologie dei segnali

Le comunicazioni tra produttore e consumatore in forma di segnali appartengono alle seguenti categorie:

* segnali legati al ciclo di vita di una entità: la variazione e/o il raggiungimento di uno stato finale di una entità. L'evento di creazione di una entità può essere gestito tramite la funzionalità di erogazione inversa della PDND
* segnali di agevolazione delle comunicazioni tra produttore e consumatore: fanno parte di questa categoria le comunicazioni che permettono al produttore di allineare il consumatore sulle **modalità di pseudonimizzazione** (funzione di hashing, seme)

La tipologia viene codificata nell'attributo`signalType` dell'oggetto `SignalPayload` (il segnale inviato dal produttore). Per i dettagli di implementazione, vedi sezione "[Come depositare un segnale](../tutorial/come-depositare-un-segnale.md)".
