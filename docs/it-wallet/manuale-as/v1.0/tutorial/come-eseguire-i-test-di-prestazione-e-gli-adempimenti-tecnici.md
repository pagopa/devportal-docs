# Come eseguire i test di prestazione e gli adempimenti tecnici

Un EAA di interesse pubblico può essere richiesto da un numero elevato di utenti in contemporanea: un'infrastruttura non adeguata determina il fallimento delle richieste e il degrado dell'esperienza proprio nel momento di utilizzo dell'attestato. I test forniscono evidenza oggettiva della prontezza del servizio; Probing e Tracing costituiscono gli strumenti di rilevazione tempestiva di eventuali disservizi.

## Attività

1. **Test di carico** — verifica della tenuta sotto picco: **300 richieste/sec per almeno 60 minuti**, con tempi di risposta **< 500 ms**.
2. **Test di long run** — verifica della stabilità nel tempo: **150 richieste/sec per almeno 12 ore consecutive**, con tempi **< 500 ms**. Consente di rilevare anomalie che si manifestano sulla durata (es. memory leak, degradi progressivi).
3. **Integrazione del Probing** — esposizione di un **endpoint di status**, interrogato periodicamente da una sonda di PDND per segnalare la disponibilità del servizio a catalogo. Dettaglio operativo in 3.5.
4. **Abilitazione del Tracing** — invio del **report giornaliero** di chiamate API e status code, a supporto del monitoraggio e del dimensionamento. Dettaglio in 3.5.

> **Suggerimento.** Si raccomanda di pianificare i test con adeguato margine temporale: l'eventuale emersione di colli di bottiglia richiede tempo per l'ottimizzazione e la ripetizione della prova prima della data di rilascio.

{% hint style="info" %}
**Approfondimento PDND.** [Come integrare il proprio e-service con il Probing](https://www.developer.pagopa.it/it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita/v1.0/tutorial/tutorial-per-lerogatore/come-integrare-il-proprio-e-service-con-il-probing).
{% endhint %}
