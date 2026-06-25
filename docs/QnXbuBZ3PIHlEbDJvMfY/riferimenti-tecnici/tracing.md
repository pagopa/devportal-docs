# Tracing

In un ecosistema distribuito come PDND Interoperabilità, dove una singola transazione può attraversare i sistemi del Fruitore, della Piattaforma e dell'Erogatore, è fondamentale avere la capacità di tracciare il flusso di una richiesta end-to-end. La funzionalità di **Tracing** risponde a questa esigenza, fornendo un meccanismo standard per correlare le operazioni e semplificare le attività di monitoraggio, logging e troubleshooting.

### Funzionamento

Il meccanismo si basa sulla propagazione di un identificativo univoco di correlazione (`X-Correlation-ID`) attraverso tutte le chiamate che compongono una transazione.

1. Il **Fruitore** genera un `X-Correlation-ID` univoco all'inizio di un processo e lo inserisce come header in tutte le chiamate API verso l'Erogatore.
2. La **Piattaforma** intercetta questo header e lo utilizza per tracciare la richiesta nei propri log interni.
3. L'**Erogatore** riceve la richiesta con l'header `X-Correlation-ID` e ha la responsabilità di propagarlo in tutte le sue operazioni di logging e in eventuali chiamate a sistemi a valle.

Adottando questo standard, in caso di errori o comportamenti anomali, è possibile ricercare questo ID univoco nei log di tutti i sistemi coinvolti (Fruitore, Piattaforma, Erogatore) per ricostruire l'intera catena di eventi in modo rapido e preciso, identificando facilmente il punto in cui si è verificato un problema.

### Documentazione Dedicata

L'implementazione del Tracing richiede l'adozione di specifiche convenzioni nella gestione degli header HTTP. Tutti i dettagli tecnici sono disponibili in una guida dedicata.

**Per consultare la documentazione completa, si rimanda alla guida ufficiale esterna:**

{% hint style="info" %}
[**Accedi alla Documentazione sul Tracing**](https://www.google.com/search?q=LINK_ALLA_DOCUMENTAZIONE_DEDICATA)
{% endhint %}
