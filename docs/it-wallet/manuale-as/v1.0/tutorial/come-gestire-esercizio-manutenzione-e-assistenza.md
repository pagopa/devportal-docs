# Come gestire esercizio manutenzione e assistenza

L'EAA conserva validità finché il dato sottostante è valido: la sospensione di una patente o l'aggiornamento di un documento devono riflettersi nell'attestato presente nel wallet. Il ruolo dell'AS in esercizio consiste nel mantenere l'efficienza del servizio e la veridicità dei dati, condizione che ne determina l'affidabilità nel tempo.

## Passaggi

{% stepper %}
{% step %}
### **Garantire il funzionamento dell'e-service**

Attivare un programma di monitoraggio e aggiornamenti, per garantire il funzionamento nel tempo dell'e-service
{% endstep %}

{% step %}
### **Mantenere l'allineamento alle specifiche LTS**

L'allineamento alle specifiche LTS viene mantenuto implementando l'ultima patch disponibile
{% endstep %}

{% step %}
### **Gestire il ciclo di vita dell'e-service**

Attivare un processo di gestione del ciclo dei vita dell'e-service (`Bozza` → `Pubblicata` → `Deprecata` → `Sospesa` → `Archiviata`)
{% endstep %}

{% step %}
### Aggiornare i dati

L'aggiornamento dei dati avviene generando i relativi segnali di variazione via Signal Hub per l'issuer (come descritto in _→_ [_Signal hub: soglie di carico, probing e tracing_](../riferimenti-tecnici/signal-hub-soglie-di-carico-probing-e-tracing.md))
{% endstep %}

{% step %}
### Fornire assistenza

È importante mantenere aggiornati i referenti, i canali e le FAQ, collaborando con Issuer e Wallet Provider per la diagnosi dei malfunzionamenti (come descritto in → [Assistenza, referenti e glossario](../riferimenti-tecnici/assistenza-referenti-e-glossario.md))
{% endstep %}
{% endstepper %}

{% hint style="info" %}
**Approfondimento PDND.** [E-service — operazioni e ciclo di vita](https://www.developer.pagopa.it/it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita/riferimenti-tecnici/e-service/operazioni-e-ciclo-di-vita); [Manuale Operativo Signal Hub](https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-signal-hub).
{% endhint %}

***
