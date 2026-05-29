# Procedura di verifica della credenziale

La procedura di verifica viene eseguita dal Relying Party al ricevimento della risposta del Wallet sull'endpoint `response_uri`. I controlli vanno eseguiti **nell'ordine indicato**: un fallimento in qualunque punto interrompe l'elaborazione e restituisce `400 Bad Request` al Wallet.

## 3.7.1 Sequenza completa in 16 passi

{% stepper %}
{% step %}
### Decifra il JWE con la Protocol Key privata del Relying Party.
{% endstep %}

{% step %}
### Verifica che `state` coincida con quello memorizzato in sessione.

Protezione CSRF.
{% endstep %}

{% step %}
### Estrai dal `vp_token` il valore corrispondente all'id DCQL della credenziale richiesta.

Primo elemento dell'array.
{% endstep %}

{% step %}
### Dividi il valore sul carattere `~`.

```
parts        = vp_token["<dcql_id>"][0].split("~")
issuer_jwt   = parts[0]
disclosures  = parts[1:-1]
kb_jwt       = parts[-1]
```
{% endstep %}

{% step %}
### Risolvi la Trust Chain dell'issuer.

```
iss          = decode(issuer_jwt).payload["iss"]
trust_chain  = resolve(iss + "/.well-known/openid-federation")
```

Verifica che l'issuer risulti autorizzato all'emissione del `vct` ricevuto, secondo le policy applicate dal Trust Anchor.
{% endstep %}

{% step %}
### Estrai la chiave pubblica dell'issuer dalla Trust Chain.

Oppure dall'header `x5c` dell'issuer\_jwt.
{% endstep %}

{% step %}
### Verifica la firma dell'issuer\_jwt con la chiave pubblica del passo 6.
{% endstep %}

{% step %}
### Verifica che `exp` del payload dell'issuer\_jwt sia nel futuro.
{% endstep %}

{% step %}
### Verifica che `vct` del payload dell'issuer\_jwt coincida con il valore atteso.

Per esempio `urn:eudi:pid:it:1` per il PID italiano.
{% endstep %}

{% step %}
### Per ciascuna disclosure in `disclosures`:

```
decoded                            = base64url_decode(disclosure)
[salt, claim_name, claim_value]   = json_parse(decoded)
hash                               = sha256(disclosure)
```

Verifica che `hash` sia presente nell'array `_sd` del payload dell'issuer\_jwt.
{% endstep %}

{% step %}
### Estrai `cnf.jwk` dal payload dell'issuer\_jwt.

È la chiave pubblica del Wallet Instance utilizzata per firmare il KB-JWT.
{% endstep %}

{% step %}
### Verifica la firma del kb\_jwt con la chiave del passo 11.
{% endstep %}

{% step %}
### Verifica `kb_jwt.payload["aud"]` == `client_id` del Relying Party.
{% endstep %}

{% step %}
### Verifica `kb_jwt.payload["nonce"]` == `nonce` inviato nel Request Object della sessione.
{% endstep %}

{% step %}
### Verifica `kb_jwt.payload["sd_hash"]` ==

```
sha256( issuer_jwt + "~" + join(disclosures, "~") + "~" )
```

codificato in base64url.
{% endstep %}

{% step %}
### Risolvi lo stato di revoca:

```
status_uri = issuer_jwt.payload["status"]["status_list"]["uri"]
idx        = issuer_jwt.payload["status"]["status_list"]["idx"]
scarica la Status List da status_uri
verifica che il bit all'indice idx non indichi credenziale
revocata.
```
{% endstep %}
{% endstepper %}

## 3.7.2 Estrazione dei claim verificati

Al completamento dei 16 passi, i valori dei claim richiesti sono disponibili nelle Disclosure decodificate al passo 10. Comporre il dizionario:

```
claims = { claim_name: claim_value for [salt, claim_name, claim_value] in decoded_disclosures }
```

I valori sono ora utilizzabili dalla logica applicativa del Relying Party.

## 3.7.3 Algoritmi supportati

| Operazione              | Algoritmo obbligatorio | Algoritmi opzionali                       |
| ----------------------- | ---------------------- | ----------------------------------------- |
| Firma JWT               | `ES256`                | `ES384`, `ES512` (solo Issuer-Signed-JWT) |
| Digest delle Disclosure | `SHA-256`              | —                                         |
| Cifratura risposta JWE  | `A256GCM`              | —                                         |

## 3.7.4 Verifica del Wallet Attestation (opzionale)

Nel profilo italiano IT-Wallet v1.3.3, il Wallet Attestation può essere veicolato nell'header del SD-JWT tramite il claim `wallet_attestation`. Quando presente, la verifica aggiuntiva consiste in:

1. estrarre il `wallet_attestation` dall'header del SD-JWT;
2. verificare la firma con la chiave pubblica del Wallet Provider (ottenuta tramite Trust Chain);
3. verificare `exp` del Wallet Attestation;
4. verificare che il `sub` del Wallet Attestation corrisponda a `cnf.jwk` del KB-JWT.

Questa verifica si colloca prima del passo 5 della sequenza precedente.
