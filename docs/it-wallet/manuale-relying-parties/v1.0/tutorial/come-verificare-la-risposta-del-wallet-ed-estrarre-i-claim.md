# Come verificare la risposta del Wallet ed estrarre i claim

**Obiettivo**: ricevere la risposta cifrata del Wallet sul `response_uri`, decifrarla, validare crittograficamente la credenziale presentata e restituire i claim verificati alla logica applicativa del Relying Party.

**Prerequisiti**: §2.4 completato.

**Durata indicativa**: 1 giornata di lavoro.

{% stepper %}
{% step %}
### 1. Ricevere la POST e decifrare il JWE

Il Wallet invia la risposta al `response_uri` come `POST` con `Content-Type: application/x-www-form-urlencoded`. Il parametro `response` contiene un JWE cifrato con la Protocol Key del Relying Party.

```http
POST /response_uri HTTP/1.1
Host: relying-party.example.org
Content-Type: application/x-www-form-urlencoded

response=eyJhbGciOiJSU0EtT0FFUC0yNTYi...
```

Decifrare il JWE con la Protocol Key privata. Il payload chiaro contiene `state` e `vp_token`:

```json
{
  "state": "<state_della_sessione>",
  "vp_token": {
    "pid": ["<SD-JWT-Combined-Presentation>"]
  }
}
```
{% endstep %}

{% step %}
### 2. Validare `state` contro la sessione

Confrontare il `state` ricevuto con quello memorizzato nella sessione al momento dell'invio del Request Object (cfr. §2.3 passo 1). In caso di mancata corrispondenza, interrompere l'elaborazione con `400 Bad Request`: la richiesta non è autentica e la sessione potrebbe essere oggetto di CSRF.
{% endstep %}

{% step %}
### 3. Estrarre la Combined Presentation dal `vp_token`

Con DCQL, `vp_token` è un oggetto JSON le cui chiavi sono gli `id` dichiarati nel `dcql_query` originale. Il valore di ciascuna chiave è un array; il primo elemento contiene la SD-JWT _Combined Presentation_ nella forma:

```
<Issuer-Signed-JWT>~<Disclosure_1>~<Disclosure_2>~...~<KB-JWT>
```

Dividere la stringa sul carattere `~` per separare le tre componenti: Issuer-Signed-JWT, array di Disclosure, KB-JWT.
{% endstep %}

{% step %}
### 4. Eseguire la sequenza di verifica della credenziale

I controlli vanno eseguiti **nell'ordine indicato**. Un fallimento in qualunque controllo interrompe l'elaborazione e restituisce `400` al Wallet.

| # | Controllo                        | Operazione                                                                                                                                                                                                                                        |
| - | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | **Trust Chain dell'issuer**      | Risolvere la Trust Chain dell'issuer (claim `iss` dell'Issuer-Signed-JWT) verso il Trust Anchor IPZS; verificare che l'issuer sia autorizzato all'emissione del `vct` ricevuto.                                                                   |
| 2 | **Firma dell'Issuer-Signed-JWT** | Verificare la firma con la chiave pubblica dell'issuer ottenuta dalla Trust Chain o dall'header `x5c`.                                                                                                                                            |
| 3 | **`vct`**                        | Verificare che il `vct` coincida con il valore atteso (es. `urn:eudi:pid:it:1` per il PID).                                                                                                                                                       |
| 4 | **Scadenza**                     | Verificare che `exp` dell'Issuer-Signed-JWT sia nel futuro.                                                                                                                                                                                       |
| 5 | **Disclosure**                   | Per ciascuna Disclosure: decodificare in `[salt, claim_name, claim_value]`, calcolare `SHA-256` del valore base64url, verificare che l'hash sia presente nell'array `_sd` dell'Issuer-Signed-JWT.                                                 |
| 6 | **Chiave del Wallet (`cnf`)**    | Estrarre `cnf.jwk` dall'Issuer-Signed-JWT — è la chiave pubblica del Wallet Instance utilizzata per firmare il KB-JWT.                                                                                                                            |
| 7 | **KB-JWT**                       | Verificare la firma con `cnf.jwk`; confermare che `aud` coincida con il `client_id` del Relying Party, `nonce` con il nonce della sessione, `sd_hash` con `SHA-256` dell'Issuer-Signed-JWT seguito dalla concatenazione delle Disclosure incluse. |
| 8 | **Stato di revoca**              | Risolvere `status.status_list.uri`, scaricare la Status List, verificare che il bit all'indice `status.status_list.idx` non indichi credenziale revocata.                                                                                         |

Per la sequenza completa in 16 passi con pseudocodice e dettagli implementativi, _cfr. §3.7_.
{% endstep %}

{% step %}
### 5. Estrarre i claim e rispondere al Wallet

Comporre il dizionario `claim_name → claim_value` a partire dalle Disclosure verificate al controllo 5. I claim sono ora utilizzabili dalla logica applicativa del Relying Party per autenticare l'utente o concedergli accesso al servizio.

Rispondere al Wallet con HTTP `200` e `Content-Type: application/json`. Per il flusso Same-Device, includere `redirect_uri` con un `response_code` opaco che il Relying Party correlerà alla sessione al momento del redirect del browser:

```json
{
  "redirect_uri": "https://relying-party.example.org/cb?response_code=091535f699ea575c7937fa5f0f454aee"
}
```

Per il flusso Cross-Device, rispondere con un oggetto JSON vuoto (`{}`).
{% endstep %}
{% endstepper %}

## ✅ Verifica

L'esecuzione end-to-end di questo Tutorial richiede una sorgente reale di `vp_token`, ottenibile solo tramite test E2E con app IO (_cfr. §2.6_). I controlli che seguono validano la robustezza dell'endpoint a livello di trasporto.

```bash
# 1. response_uri risponde 400 a body assente
curl -s -o /dev/null -w "%{http_code}" \
  -X POST https://relying-party.example.org/response_uri \
  -H "Content-Type: application/x-www-form-urlencoded"
# Atteso: 400

# 2. response_uri risponde 400 a response con state non valido
curl -s -o /dev/null -w "%{http_code}" \
  -X POST https://relying-party.example.org/response_uri \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data "response=<JWE_con_state_errato>"
# Atteso: 400
```

In fase di debug, una volta decifrato il JWE, è possibile incollare la SD-JWT Combined Presentation su [sdjwt.org](https://sdjwt.org/) per visualizzare l'Issuer-Signed-JWT, le Disclosure decodificate e il KB-JWT.

## Riferimenti

* §3.5 Protocollo di presentazione OpenID4VP (Authorization Response, KB-JWT, Status List)
* §3.7 Procedura di verifica della credenziale (sequenza completa in 16 passi)
* §3.6 Endpoint del Relying Party (catalogo errori)
