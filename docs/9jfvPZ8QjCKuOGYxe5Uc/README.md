# Stampa Avvisi Pagamento

PagoPA mette a disposizione per qualsiasi utilizzatore aderente alla piattaforma (Enti Creditori, Intermediari o Partner Tecnologici), una nuova funzionalità per stampare l’avviso di pagamento pagoPA.&#x20;

In questo modo gli aderenti alla piattaforma possono gestire l'intero ciclo di vita dell'avviso (dalla generazione alla stampa), semplificando notevolmente il processo di gestione della posizione debitoria, delegando a PagoPA il ciclo di vita della stampa dell'avviso tramite una semplice integrazione o in maniera trasparente in caso di adesione ad altre iniziative (es. Integrazione tramite API asincrone).

Per raggiungere quest’obiettivo la piattaforma mette a disposizione un servizio richiamabile da opportune API che va a generare il PDF dell'avviso di pagamento, ivi inclusa la sezione "Bollettino Postale", qualora l'EC abbia un conto corrente di accredito postale.

In questo modo è possibile ottenere per l’utilizzatore del servizio, la stampa PDF di un avviso di pagamento, fornendo i dati ed il template da utilizzare, in modo tale che si possa utilizzare con facilità un modello per l’avviso al cittadino.

I template da utilizzare seguono le linee guida e le specifiche tecniche fornite da PagoPA indicate al seguente link: [https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche](https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche).

Le prossime sezioni del documento descrivono le modalità per poter utilizzare le API native della piattaforma pagoPA al fine di stampare in autonomia gli avvisi di pagamento secondo le specifiche tecniche descritte in [https://docs.pagopa.it/avviso-pagamento](https://docs.pagopa.it/avviso-pagamento).

La sezione pertanto va a dettagliare e implementare quanto già descritto nelle SANP [https://docs.pagopa.it/sanp/ente-creditore/stampa-avvisi-pagopa](https://docs.pagopa.it/sanp/ente-creditore/stampa-avvisi-pagopa).

La stampa degli avvisi può avvenire secondo due modalità:

* Singola
* Massiva

La prima prevede che l'API fornisca in output il singolo pdf dell'avviso di pagamento richiesto, mentre la seconda dà la possibilità di stampare massivamente più avvisi contemporaneamente. Nelle sezioni successive vengono descritte nel dettaglio tutte le operazioni.

{% hint style="warning" %}
Essendo data la possibilità di stampa di avvisi che possono contemplare al loro interno la sezione "Bollettino postale" è necessario da parte degli enti / intermediari / partner tecnologici l'autorizzazione da parte di Poste secondo quanto descritto in [https://business.poste.it/business/files/1476473314849/manuale-stampa-in-proprio.pdf](https://business.poste.it/business/files/1476473314849/manuale-stampa-in-proprio.pdf).

Per maggiori info su dove inserire il codice autorizzativo di Poste si faccia riferimento a [Compilazione dati configurazione su BackOffice pagoPA](stampa-avvisi-pagamento/compilazione-dati-configurazione-su-backoffice-pagopa.md).
{% endhint %}



