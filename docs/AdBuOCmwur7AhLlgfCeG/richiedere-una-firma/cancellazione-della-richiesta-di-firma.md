# Cancellazione della richiesta di firma

Nel caso in cui sia necessario, è possibile revocare una richiesta di firma dopo averla inviata all'utente.

Per _cancellare_ la _Signature Request_, effettua una richiesta `HTTP PUT` all'**endpoint,** `/api/v1/sign/signature-requests/{signature_request_id}/status` specificando `CANCELLED` nel corpo della richiesta.

{% hint style="danger" %}
Una volta cancellata la richiesta di firma, non sarà più possibile ripristinarla.
{% endhint %}

A questo punto la richiesta di firma è stata **cancellata**. L'utente non potrà più procedere con la firma.
