# Panoramica dell'API

PDND Interoperabilità rende disponibile un'API REST, che permette tutte le operazioni CRUD necessarie alla gestione delle informazioni da depositare.

L'API fa parte del parco delle API di Interoperabilità, ed è possibile accedervi dopo aver ottenuto un voucher valido relativo ad un _client API Interop_.

Il sistema permette di gestire i tracciati solo per quanto riguarda il proprio ente. L'identificazione del chiamante da parte di PDND Interoperabilità avviene a partire dalle informazioni contenute nel voucher (token JWT) incluso nell'header della chiamata, come da [pattern standard PDND](https://app.gitbook.com/s/b8HnYwaAzhxRFAZdZBXL/manuale-operativo/utilizzare-i-voucher).

### Gestione delle informazioni

Il sistema permette agli aderenti di gestire l’invio di file CSV contenenti le informazioni relative alle transazioni avvenute. Dopo aver ricevuto il singolo file, il sistema procede con la validazione del CSV.

Qualora non siano presenti errori, il sistema elabora i dati, li arricchisce con dettagli aggiuntivi e salva i singoli record.

In caso contrario, sarà possibile verificare gli errori, e sanarli. O, in caso fosse necessario, aggiornare dati precedentemente inseriti.

{% hint style="info" %}
È necessario che i dati siano caricati con una scansione giornaliera. Ad esempio, andrà caricato un CSV relativo agli scambi avvenuti il 20/01/2025, poi un altro il 21/01/2025 e così via, per tutte le giornate nelle quali sono state registrate transazioni.
{% endhint %}

### Integrazione tramite OpenAPI

Il sistema è progettato per integrare servizi tramite OpenAPI.

#### Servizi offerti

<table data-header-hidden><thead><tr><th width="97">Metodo</th><th width="329">Endpoint</th><th>Descrizione</th></tr></thead><tbody><tr><td>POST</td><td><code>/tracings/submit</code></td><td>Inserimento di un tracciato per una giornata. Restituisce il <code>tracingId</code> di quel tracciato</td></tr><tr><td>GET</td><td><code>/tracings</code></td><td>Lista dei tracciati per l'ente richiedente</td></tr><tr><td>GET</td><td><code>/tracings/{tracingId}/errors</code></td><td>Dettaglio degli errori contenuti in un singolo tracciato</td></tr><tr><td>POST</td><td><code>/tracings/{tracingId}/recover</code></td><td>Sanificazione delle informazioni in un tracciato che presenta errori o dati mancanti</td></tr><tr><td>POST</td><td><code>/tracings/{tracingId}/replace</code></td><td>Sostituzione integrale dei dati di un tracciato precedentemente caricato</td></tr></tbody></table>

#### Specifica OpenAPI

La specifica OpenAPI dell'API di tracing è disponibile al [seguente indirizzo](https://github.com/pagopa/interop-tracing-core/blob/develop/packages/api/open-api/api-external-interop-v1.yaml).
