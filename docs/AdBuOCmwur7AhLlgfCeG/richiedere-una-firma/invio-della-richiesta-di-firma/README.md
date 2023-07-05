# Invio della richiesta di firma

Per pubblicare la _Signature Request_, effettua una richiesta `HTTP PUT` all'**endpoint,** `PUT /api/v1/sign/signature-requests/{signature_request_id}/status` specificando `READY` nel corpo della richiesta.

{% hint style="danger" %}
Una volta pubblicata la richiesta di firma, non sarà più possibile modificarla né modificare i documenti allegati. Sarà solamente possibile **eliminarla**.
{% endhint %}

A questo punto la richiesta di firma è **pronta per essere inviata** all'utente. Per farlo, hai due modalità: tramite **QR code** da condividere all'utente attraverso i tuoi canali  o inviando direttamente un **messaggio sull'app IO**.

{% content-ref url="tramite-pulsante-firma-con-io-o-qr-code.md" %}
[tramite-pulsante-firma-con-io-o-qr-code.md](tramite-pulsante-firma-con-io-o-qr-code.md)
{% endcontent-ref %}

{% content-ref url="tramite-messaggio-su-io.md" %}
[tramite-messaggio-su-io.md](tramite-messaggio-su-io.md)
{% endcontent-ref %}
