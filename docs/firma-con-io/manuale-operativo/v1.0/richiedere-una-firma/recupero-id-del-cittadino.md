# Recupero ID del cittadino

Per recuperare l'**ID del Cittadino** (`signer_id`) devi effettuare una chiamata verso l'**endpoint** `POST /api/v1/sign/signers`

All'interno del corpo del messaggio dovrai specificare il **Codice Fiscale** dell'utente:

```json
{ 
  "fiscal_code": "AAABBB00A00A000A"
}
```

Riceverai come output il `signer_id` dell'utente:

```json
{ 
  "id": "01GG4TG9FP2D3JPWFTAM0WEFTG"
}
```

{% hint style="warning" %}
In fase di test, solo i Codici Fiscali inseriti nel Back Office sull'Area Riservata verranno abilitati al servizio, e pertanto sarà possibile recuperare l'id solo di questi.
{% endhint %}
