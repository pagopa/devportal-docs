# 🏁 Tramite pulsante Firma con IO o QR Code

Se vuoi condividere autonomamente la richiesta di firma ai tuoi utenti, senza ingaggiarli con un messaggio su IO, hai due possibilità:

1. Integrare il **pulsante Firma con IO**
2. Condividere il **QRcode** della richiesta di firma direttamente tramite altri canali (es. email)

<details>

<summary>Integrare il pulsante Firma con IO</summary>

Vai nella [sezione dedicata](broken-reference) aper scoprire come fare

</details>

<details>

<summary>Condividere il QRcode tramite altro canale</summary>

Se vuoi condividere autonomamente all'utente un QR code tramite i tuoi canali, devi:&#x20;

1. attendere alcuni secondi affinché la signature request passi dallo status `READY` allo stato `WAIT_FOR_SIGNATURE;`
2. effettuare una richiesta verso l'endpoint `GET /api/v1/sign/signature-requests/{signature_request_id}`

Riceverai in output l'intera signature request comprensiva della proprietà `qr_code_url`, da cui accedere all'url contenente l'immagine del **QR code**.

Il **QR code** è sempre legato ad una **specifica richiesta di firma** e a uno **specifico utente**. Non puoi creare QR code generici che valgano per diversi utenti.

</details>
