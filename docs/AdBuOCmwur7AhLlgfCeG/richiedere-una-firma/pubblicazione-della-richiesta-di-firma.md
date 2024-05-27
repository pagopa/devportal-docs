# Pubblicazione della richiesta di firma

Una volta caricati tutti i documenti nel `Document Storage` , è necessario pubblicare ufficialmente la richiesta di firma.&#x20;

Per pubblicare la _Signature Request_, effettua una richiesta `HTTP PUT` all'**endpoint,** `PUT /api/v1/sign/signature-requests/{signature_request_id}/status` specificando `READY` nel corpo della richiesta.

{% hint style="danger" %}
Una volta pubblicata la richiesta di firma, non sarà più possibile modificarla né modificare i documenti allegati.
{% endhint %}

Tra lo stato "**READY**" e il passaggio successivo, dovrà passare qualche secondo. Per verificare quando si può proseguire, effettua una richiesta HTTP GET all'endpoint:\
`GET /api/v1/sign/signature-requests/{signature_request_id}`\
specificando il `signature_request_id` e gli header necessari all'autenticazione. Verifica che lo stato della Signature Request sia passato da "**READY**" a "**WAITING\_FOR\_SIGNATURE**".
