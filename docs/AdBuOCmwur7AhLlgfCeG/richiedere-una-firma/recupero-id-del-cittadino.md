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

{% hint style="info" %}
Se l'utente non si è mai registrato in IO - ovvero se non ha mai effettuato il processo di autenticazione con SPID o CIE su app IO - non potrai recuperare il suo `signer_id.`Prima di procedere con l'invio di una richiesta di firma, assicurati di chiedere all'utente di effettuare il login su app IO.
{% endhint %}

{% hint style="warning" %}
In fase di sperimentazione, solo alcuni Codici Fiscali selezionati verranno abilitati al servizio, e pertanto sarà possibile recuperare l'id solo di questi.
{% endhint %}
