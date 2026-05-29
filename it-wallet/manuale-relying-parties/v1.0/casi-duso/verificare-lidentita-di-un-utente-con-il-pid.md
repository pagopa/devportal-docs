# Verificare l'identita di un utente con il PID

## Scenario

Un Relying Party offre un servizio online che richiede l'identificazione dell'utente prima di accordargli l'accesso. Anziché ricorrere a credenziali tradizionali (SPID, CIE), il Relying Party richiede al Wallet dell'utente la presentazione di un sottoinsieme di claim del PID (`given_name`, `family_name`, `birthdate`).

Il flusso si articola in due varianti operative, scelte in funzione del dispositivo con cui l'utente sta navigando.

| Variante         | Quando si attiva                                                                                        | Sequenza tipica                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **Cross-Device** | L'utente naviga da un dispositivo (es. browser desktop) diverso da quello su cui è installato il Wallet | QR Code scansionato dall'app Wallet sullo smartphone |
| **Same-Device**  | L'utente naviga dal browser dello smartphone su cui è installato il Wallet                              | Universal Link che apre direttamente l'app Wallet    |

La decisione fra le due varianti può essere lasciata all'utente tramite Selection Page, oppure determinata automaticamente dal Relying Party in base allo User-Agent rilevato.

## Variante 1 — Flusso Cross-Device

### Sequenza

{% stepper %}
{% step %}
### Avvio della sessione

L'utente accede al servizio del Relying Party da browser desktop. Il Relying Party crea una sessione lato server, genera `nonce` e `state` con entropia di almeno 32 caratteri base64url (cfr. §2.3) e mantiene i due valori in memoria associati alla sessione.
{% endstep %}

{% step %}
### Presentazione della Selection Page

Il Relying Party recupera dal Registry IT-Wallet l'elenco delle Wallet Solution riconosciute (cfr. §2.4) e le presenta all'utente in ordine casuale, con logo e denominazione.
{% endstep %}

{% step %}
### Generazione del Request Object

Una volta selezionata la Wallet Solution, il Relying Party costruisce il Request Object: payload con `client_id`, `response_type`, `response_mode`, `nonce`, `state`, `dcql_query` con i tre claim richiesti del PID; header con `kid`, `x5c` e `trust_chain` (cfr. §3.5.1). Il JWT viene firmato con la Protocol Key e pubblicato sull'endpoint `request_uri`.
{% endstep %}

{% step %}
### Presentazione del QR Code

Il Relying Party mostra all'utente una pagina con il QR Code in formato SVG (dimensione raccomandata 300×300 px, livello di correzione errori Q). Il QR codifica l'URL dell'`authorization_endpoint` della Wallet Solution selezionata, con i parametri `client_id`, `request_uri` e `request_uri_method=get` come query string.
{% endstep %}

{% step %}
### Scansione e recupero del Request Object

L'utente scansiona il QR Code con l'app Wallet sullo smartphone. L'app contatta il `request_uri` del Relying Party in `GET` e ne recupera il Request Object firmato.
{% endstep %}

{% step %}
### Verifica lato Wallet e schermata di consenso

L'app verifica la firma del Request Object con la chiave dichiarata in `x5c`, risolve la `trust_chain` fino al Trust Anchor IPZS, e presenta all'utente la schermata di consenso con il nome del Relying Party (`client_name`), il logo SVG e l'elenco dei claim richiesti.
{% endstep %}

{% step %}
### Consenso e invio della risposta

L'utente conferma. L'app costruisce la SD-JWT Combined Presentation contenente l'Issuer-Signed-JWT del PID, le tre Disclosure richieste e il KB-JWT (firmato con la chiave del Wallet Instance corrispondente a `cnf.jwk` dell'Issuer-Signed-JWT). Il payload chiaro `{state, vp_token}` viene cifrato come JWE con `A256GCM` utilizzando la Protocol Key pubblica del Relying Party e inviato al `response_uri` come `POST` con `Content-Type: application/x-www-form-urlencoded`.
{% endstep %}

{% step %}
### Verifica lato Relying Party

Il Relying Party esegue la sequenza di 16 passi (cfr. §3.7.1): decifratura del JWE con la Protocol Key privata, validazione di `state`, risoluzione della Trust Chain dell'issuer del PID, verifica della firma dell'Issuer-Signed-JWT, validazione delle Disclosure contro l'array `_sd`, verifica del KB-JWT, controllo della Status List.
{% endstep %}

{% step %}
### Conferma al Wallet

Il Relying Party risponde al Wallet con HTTP `200` e body JSON vuoto (`{}`), poiché nel flusso Cross-Device non è richiesto alcun redirect.
{% endstep %}

{% step %}
### Aggiornamento della sessione sul desktop

Il browser desktop dell'utente, in attesa, riconosce che la presentazione è completata (tramite polling dell'endpoint applicativo del Relying Party oppure tramite Server-Sent Events o WebSocket) e l'utente viene autenticato nel servizio.
{% endstep %}
{% endstepper %}

### Punti di attenzione

* **Polling vs Server-Sent Events**. Il meccanismo con cui il browser desktop rileva il completamento della presentazione non è prescritto dalla specifica. Il Relying Party può adottare polling periodico (ogni 2-3 secondi) verso un endpoint applicativo che restituisce lo stato della sessione, oppure tecniche push come Server-Sent Events o WebSocket. La scelta dipende dall'infrastruttura del RP.
* **Scadenza della sessione**. La sessione QR Code deve avere una scadenza esplicita (tipicamente 1-3 minuti), allineata al claim `exp` del Request Object. Allo scadere, il Relying Party invalida il `nonce` lato server e offre all'utente la rigenerazione del QR.
* **Mancato consenso**. Se l'utente nega il consenso nell'app, il Wallet non invia alcuna risposta al `response_uri`. Il Relying Party rileva il timeout della sessione e ritorna l'utente alla Selection Page.

## Variante 2 — Flusso Same-Device

### Sequenza

I primi tre passi sono identici al flusso Cross-Device (avvio sessione, Selection Page, generazione del Request Object).

{% stepper %}
{% step %}
### Redirezione al Wallet

Anziché mostrare il QR Code, il Relying Party redirige direttamente il browser dell'utente all'`authorization_endpoint` della Wallet Solution selezionata, in HTTP `302 Found`:

```http
HTTP/1.1 302 Found
Location: https://wallet-solution.example.org/authorization
  ?client_id=openid_federation%3Ahttps%3A%2F%2Frelying-party.example.org
  &request_uri=https%3A%2F%2Frelying-party.example.org%2Frequest_uri
  &request_uri_method=get
```

Se la Wallet Solution selezionata non espone un `authorization_endpoint` HTTPS, il Relying Party utilizza in alternativa lo schema custom `openid4vp://` oppure `haip-vp://`. Il sistema operativo dello smartphone intercetta l'Universal Link o lo schema custom e apre automaticamente l'app Wallet associata.
{% endstep %}

{% step %}
### Verifica lato Wallet, schermata di consenso, invio della risposta

I passi corrispondono ai punti 6 e 7 del flusso Cross-Device. L'unica differenza è che il browser dell'utente resta in attesa nello stato di redirezione.
{% endstep %}

{% step %}
### Risposta del Relying Party con `redirect_uri`

Il Relying Party esegue la sequenza di verifica (cfr. §3.7.1) e risponde al Wallet con HTTP `200` e body JSON contenente un `redirect_uri` con `response_code` opaco:

```json
{
  "redirect_uri": "https://relying-party.example.org/cb?response_code=091535f699ea575c7937fa5f0f454aee"
}
```

Il `response_code` è un valore opaco che il Relying Party correla internamente alla sessione di presentazione appena conclusa con successo.
{% endstep %}

{% step %}
### Redirezione del browser

L'app Wallet redirige il browser dell'utente al `redirect_uri` ricevuto. Il Relying Party, alla ricezione della `GET /cb?response_code=...`, risolve il `response_code` nella sessione corrispondente e autentica l'utente nel servizio.
{% endstep %}
{% endstepper %}

### Punti di attenzione

* **Coerenza con `redirect_uris` dell'EC**. L'URL utilizzato nel campo `redirect_uri` della risposta JSON deve coincidere con uno degli URL registrati in `redirect_uris` nell'Entity Configuration (cfr. §3.2.3). Il Wallet rifiuta la redirezione su URL non registrati.
* **Opacità del `response_code`**. Il `response_code` non deve contenere informazioni sull'identità dell'utente né sui claim ricevuti: è un identificativo lato server. La correlazione fra `response_code` e dati di sessione è interamente gestita dal Relying Party.
* **Fallback fra `openid4vp://` e `haip-vp://`**. Entrambi gli schemi custom sono supportati dal Wallet. Se uno fallisce (es. nessuna app installata che gestisca lo schema), il sistema operativo non genera errore: la responsabilità della corretta gestione ricade sull'utente.

## Confronto sintetico fra le due varianti

| Aspetto                              | Cross-Device              | Same-Device                                         |
| ------------------------------------ | ------------------------- | --------------------------------------------------- |
| Sorgente di navigazione              | Browser desktop           | Browser smartphone                                  |
| Meccanismo di handoff al Wallet      | QR Code scansionato       | Universal Link o schema custom                      |
| Risposta del Relying Party al Wallet | `{}` (JSON vuoto)         | `{"redirect_uri": "..."}` con `response_code` opaco |
| Aggiornamento del client originario  | Polling / SSE / WebSocket | Redirezione 302                                     |
| Tipico contesto di uso               | Servizi web da desktop    | Servizi mobile-first                                |

## Riferimenti

* §2.3 Costruire e firmare il Request Object
* §2.4 Indirizzare l'utente al Wallet (Same-Device e Cross-Device)
* §2.5 Verificare la risposta del Wallet ed estrarre i claim
* §3.4.2 Personal Identification Data (PID)
* §3.5 Protocollo di presentazione OpenID4VP
* §3.7 Procedura di verifica della credenziale
