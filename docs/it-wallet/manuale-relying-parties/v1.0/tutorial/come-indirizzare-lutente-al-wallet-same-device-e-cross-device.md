# Come indirizzare l'utente al wallet same device e cross device

**Obiettivo**: instradare l'utente verso il Wallet, sia esso sullo stesso dispositivo del browser (_Same-Device_) o su un dispositivo distinto (_Cross-Device_), recuperando i metadati delle Wallet Solution riconosciute dal Registry IT-Wallet.

**Prerequisiti**: §2.3 completato.

**Durata indicativa**: mezza giornata di lavoro.

{% stepper %}
{% step %}
### Recuperare l'elenco delle Wallet Solution dal Registry

L'endpoint `/list` del Trust Anchor restituisce un JSON con l'array degli Entity Identifier delle entità trusted, incluse le Wallet Solution disponibili.

```http
GET /list HTTP/1.1
Host: pre.ta.wallet.ipzs.it
```

Per ciascuna Wallet Solution rilevante, recuperare l'Entity Configuration corrispondente per ottenere i metadati operativi (logo, denominazione, `authorization_endpoint`):

```http
GET /.well-known/openid-federation HTTP/1.1
Host: <wallet_solution_entity_id>
```

Il payload del JWT contiene il blocco `metadata` con il logo e gli endpoint necessari all'instradamento. Questa procedura segue OpenID Federation 1.0 (federation discovery).

{% hint style="info" %}
Per la frequenza di aggiornamento della cache locale delle Wallet Solution e la gestione del ciclo di vita (entità rimosse dal Registry), _cfr. §3.1_.
{% endhint %}
{% endstep %}

{% step %}
### Implementare la Selection Page

La pagina che precede la richiesta deve consentire all'utente di scegliere la propria Wallet Solution. I requisiti UX previsti dalla specifica sono:

* Visualizzazione di **tutte** le Wallet Solution disponibili nel Registry con logo e nome.
* Ordinamento **casuale** della lista a ogni rendering, per evitare di privilegiare implementazioni specifiche.
* Logica di instradamento basata sui metadata della Wallet Solution selezionata:
  * se `authorization_endpoint` è un URL HTTPS, utilizzare un **Universal Link** (flusso Same-Device);
  * in caso contrario, utilizzare lo schema custom `openid4vp://` oppure `haip-vp://`, entrambi supportati dal Wallet.
{% endstep %}

{% step %}
### Implementare la pagina QR Code per il flusso Cross-Device

Generare un QR Code in formato SVG su sfondo bianco con i parametri raccomandati:

| Parametro                    | Valore     |
| ---------------------------- | ---------- |
| Dimensione minima            | 150×150 px |
| Dimensione raccomandata      | 300×300 px |
| Livello di correzione errori | Q (25%)    |

La pagina deve includere un pulsante di rigenerazione del QR allo scadere della sessione e un pulsante di annullamento.

L'URL codificato nel QR ha la struttura seguente, identica a quella usata per l'Universal Link Same-Device:

```
https://<wallet_authorization_endpoint>
  ?client_id=openid_federation%3Ahttps%3A%2F%2Frelying-party.example.org
  &request_uri=https%3A%2F%2Frelying-party.example.org%2Frequest_uri
  &request_uri_method=get
```
{% endstep %}

{% step %}
### Indirizzare l'utente in modalità Same-Device

Per il flusso Same-Device il Relying Party redirige il browser dell'utente all'`authorization_endpoint` del Wallet selezionato:

```http
HTTP/1.1 302 Found
Location: https://wallet-solution.example.org/authorization
  ?client_id=openid_federation%3Ahttps%3A%2F%2Frelying-party.example.org
  &request_uri=https%3A%2F%2Frelying-party.example.org%2Frequest_uri
  &request_uri_method=get
```

Il sistema operativo intercetta l'Universal Link e apre l'app Wallet associata.
{% endstep %}
{% endstepper %}

## ✅ Verifica

* [ ] La Selection Page mostra le Wallet Solution presenti nel `/list` di IPZS con logo e nome.
* [ ] L'ordine delle Wallet Solution cambia a ogni rendering della pagina.
* [ ] Il QR Code è generato in SVG, su sfondo bianco, con dimensione minima 150×150 px.
* [ ] L'URL codificato nel QR è correttamente URL-encoded e contiene `client_id` con prefisso `openid_federation:` e `request_uri` con dominio del Relying Party.
* [ ] In modalità Same-Device, la redirezione al Wallet attiva l'apertura dell'app sul dispositivo dell'utente.

## Riferimenti

* §3.1 Trust Infrastructure (Federation Discovery)
* §3.5 Protocollo di presentazione OpenID4VP
