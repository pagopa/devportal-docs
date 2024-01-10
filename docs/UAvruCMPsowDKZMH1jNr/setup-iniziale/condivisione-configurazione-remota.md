# Condivisione configurazione remota

Questa configurazione è necessaria se hai intenzione di utilizzare una delle seguenti funzionalità:

1. [inviare-un-messaggio-a-contenuto-remoto.md](../funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto.md "mention")
2. [aggiungere-allegati.md](../funzionalita/inviare-un-messaggio/aggiungere-allegati.md "mention")

Per entrambe le funzionalità è infatti necessario **mettere a disposizione un **_**REST web service**_ conforme alla [relativa OpenAPI](https://editor.swagger.io/?url=https://raw.githubusercontent.com/pagopa/io-backend/master/openapi/consumed/api\_remote\_content.yaml).

Il servizio deve **esporre 2 o 3 **_**endpoint**_, a seconda del [tipo di accordo](https://docs.pagopa.it/kb-enti-accordi/domande-frequenti/domande-e-risposte-sugli-accordi#quali-sono-le-formule-contrattuali-possibili-per-aderire-allapp-io) che hai sottoscritto con PagoPA, che il backend di IO richiamerà quando necessario:

<table><thead><tr><th width="207">Accordo sottoscritto</th><th width="139" data-type="checkbox">Precondizioni</th><th width="191" data-type="checkbox">Dettagli messaggio</th><th data-type="checkbox">Allegati</th></tr></thead><tbody><tr><td>Standard</td><td>true</td><td>true</td><td>false</td></tr><tr><td>Fast</td><td>true</td><td>true</td><td>false</td></tr><tr><td>Premium</td><td>true</td><td>true</td><td>true</td></tr></tbody></table>

Per i dettagli su come progettare gli endpoint e le relative API esposte, fai riferimento a [openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md](../api-e-specifiche/openapi-endpoint-di-recupero-dei-contenuti-remotizzati.md "mention").

Una volta pronti, comunica al team di IO gli _endpoint_ (indicandone la URL di base) e la relativa [#api-key](condivisione-configurazione-remota.md#api-key "mention") che IO userà per autenticarsi presso i tuoi sistemi.

{% hint style="info" %}
Per comunicare la configurazione al team di IO devi usare l'indirizzo email [io-service-management@pagopa.it](mailto:io-service-management@pagopa.it).

Per tutte le altre richieste ricorda che l'indirizzo da usare per comunicare con IO è [onboarding@pagopa.it](mailto:onboarding@pagopa.it).
{% endhint %}
