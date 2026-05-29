# Come implementare gli endpoint di presentazione

**Obiettivo**: esporre i tre endpoint richiesti dal flusso remoto (`request_uri`, `response_uri` ed `erasure_endpoint`) e registrarne gli URL nei metadati `openid_credential_verifier` dell'Entity Configuration.

**Prerequisiti**: §2.1 completato.

**Durata indicativa**: mezza giornata di lavoro.

{% stepper %}
{% step %}
### Implementare `request_uri`

L'endpoint serve il Request Object firmato quando il Wallet lo richiede. La modalità raccomandata è `GET`.

| Proprietà                     | Valore                               |
| ----------------------------- | ------------------------------------ |
| Metodo                        | `GET` raccomandato, `POST` opzionale |
| `Content-Type` della risposta | `application/oauth-authz-req+jwt`    |

Risposta in caso di `GET`:

```http
HTTP/1.1 200 OK
Content-Type: application/oauth-authz-req+jwt

eyJhbGciOiJFUzI1NiIs...
```

Se l'implementazione supporta anche `POST` con `request_uri_method=post`, il Wallet può trasmettere `wallet_metadata` e `wallet_nonce` come form-encoded; in questo caso il `wallet_nonce` ricevuto deve essere incluso nel payload del Request Object. Il supporto a `POST` rimane opzionale e può essere introdotto in iterazioni successive.
{% endstep %}

{% step %}
### Implementare `response_uri`

L'endpoint riceve la risposta cifrata del Wallet (JWE) dopo la presentazione, secondo il response mode `direct_post.jwt`.

| Proprietà                       | Valore                                                          |
| ------------------------------- | --------------------------------------------------------------- |
| Metodo                          | `POST`                                                          |
| `Content-Type` ricevuto         | `application/x-www-form-urlencoded`, parametro `response=<JWE>` |
| `Content-Type` della risposta   | `application/json`                                              |
| Codice HTTP in caso di successo | `200 OK`                                                        |

Per il flusso **Same-Device**, la risposta JSON deve includere il `redirect_uri` su cui il Wallet redirige il browser dell'utente:

```json
{
  "redirect_uri": "https://relying-party.example.org/cb?response_code=091535f699ea575c7937fa5f0f454aee"
}
```

Per il flusso **Cross-Device**, la risposta è un oggetto JSON vuoto:

```json
{}
```

In caso di errore di validazione lato Relying Party, restituire `400 Bad Request`.
{% endstep %}

{% step %}
### Implementare `erasure_endpoint`

L'endpoint riceve le richieste di cancellazione dei dati presentati. L'implementazione è **obbligatoria** se la richiesta di presentazione include attributi che identificano univocamente l'utente, come ad esempio `tax_id_code`.

| Proprietà                                         | Valore                       |
| ------------------------------------------------- | ---------------------------- |
| Metodo                                            | `GET`                        |
| Codice HTTP in caso di successo                   | `204 No Content`, body vuoto |
| Codice HTTP in caso di identificativo non trovato | `404 Not Found`              |

{% hint style="info" %}
**`TBD`** — Il meccanismo di correlazione lato Relying Party fra una richiesta di erasure entrante e i dati associati alla sessione di presentazione non è coperto in dettaglio dalle specifiche IT-Wallet v1.3.3 e sarà aggiornato in una prossima iterazione del manuale.
{% endhint %}
{% endstep %}

{% step %}
### Registrare gli URL nell'Entity Configuration

Aggiornare il blocco `openid_credential_verifier` dei metadati con gli URL dei tre endpoint e l'URL di redirect:

```json
"openid_credential_verifier": {
  "request_uris": ["https://relying-party.example.org/request_uri"],
  "response_uris": ["https://relying-party.example.org/response_uri"],
  "redirect_uris": ["https://relying-party.example.org/cb"],
  "erasure_endpoint": "https://relying-party.example.org/erasure"
}
```

Solo gli URL pre-registrati nell'Entity Configuration sono accettati dal Wallet: un `request_uri` o `response_uri` non registrato causa un errore lato Wallet.

Ripubblicare l'Entity Configuration aggiornato.
{% endstep %}
{% endstepper %}

## ✅ Verifica

```bash
# 1. request_uri attivo, risponde 200 con Content-Type corretto
curl -sI https://relying-party.example.org/request_uri | grep -E "HTTP|content-type"
# Atteso: HTTP/1.1 200 OK; content-type: application/oauth-authz-req+jwt

# 2. L'EC aggiornato espone i nuovi endpoint
curl -s https://relying-party.example.org/.well-known/openid-federation \
  | cut -d'.' -f2 | base64 -d 2>/dev/null \
  | jq '.metadata.openid_credential_verifier | {request_uris, response_uris, redirect_uris, erasure_endpoint}'

# 3. erasure_endpoint risponde 404 per un identificativo inesistente
curl -s -o /dev/null -w "%{http_code}" \
  "https://relying-party.example.org/erasure?credential_id=does-not-exist"
# Atteso: 404
```

## Riferimenti

* §3.2 Entity Configuration
* §3.6 Endpoint del Relying Party (specifiche complete e catalogo errori)
