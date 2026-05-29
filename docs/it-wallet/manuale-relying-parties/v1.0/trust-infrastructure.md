# Trust infrastructure

L'infrastruttura di trust di IT-Wallet è basata su OpenID Federation 1.0 e governa il riconoscimento reciproco delle entità della federazione (Wallet Solutions, Credential Issuers, Relying Parties) attraverso catene di certificazione e attestati di affidabilità emessi dall'Istituto Poligrafico e Zecca dello Stato (IPZS).

## 3.1.1 Trust Anchor IPZS

Il Trust Anchor è l'entità radice della federazione. IT-Wallet espone due istanze tecnicamente separate.

| Ambiente       | URL                             | Onboarding                           |
| -------------- | ------------------------------- | ------------------------------------ |
| Pre-produzione | `https://pre.ta.wallet.ipzs.it` | PEC a `identitadigitale@pec.ipzs.it` |
| Produzione     | `https://ta.wallet.ipzs.it`     | PEC a `identitadigitale@pec.ipzs.it` |

### Endpoint pubblici del Trust Anchor

| Endpoint                     | Metodo | Scopo                                                              |
| ---------------------------- | ------ | ------------------------------------------------------------------ |
| `/list`                      | `GET`  | Elenco di tutti gli Entity Identifier registrati nella federazione |
| `/resolve`                   | `GET`  | Risoluzione della Trust Chain per un Entity Identifier             |
| `/federation_fetch_endpoint` | `GET`  | Recupero del Subordinate Statement firmato per un'entità           |

#### `GET /list`

Restituisce un JSON con l'array degli Entity Identifier registrati. Utilizzato dai Relying Party per scoprire le Wallet Solution disponibili (cfr. §2.4) e per verificare la propria iscrizione alla federazione.

```http
GET /list HTTP/1.1
Host: pre.ta.wallet.ipzs.it
```

#### `GET /resolve`

Restituisce un JWT firmato da IPZS contenente la Trust Chain risolta per una specifica entità sub.

```http
GET /resolve?sub=https%3A%2F%2Frelying-party.example.org&trust_anchor=https%3A%2F%2Fpre.ta.wallet.ipzs.it HTTP/1.1
Host: pre.ta.wallet.ipzs.it
```

| Parametro      | Obbligatorio | Descrizione                                                   |
| -------------- | ------------ | ------------------------------------------------------------- |
| `sub`          | Sì           | Entity Identifier dell'entità di cui risolvere la Trust Chain |
| `trust_anchor` | Sì           | URL del Trust Anchor (coincide con l'host dell'endpoint)      |

In caso di successo, il payload del JWT contiene almeno: `iss` (URL del Trust Anchor), `sub` (entità risolta), `exp` (scadenza della risoluzione), `metadata_policy` (policy applicate ai metadati).

#### `GET /federation_fetch_endpoint`

Restituisce il Subordinate Statement firmato da IPZS per una specifica entità sub. Il payload contiene il claim `jwks.keys` con i certificati X.509 (`x5c`) e l'eventuale Trust Mark.

```http
GET /federation_fetch_endpoint?sub=https%3A%2F%2Frelying-party.example.org HTTP/1.1
Host: pre.ta.wallet.ipzs.it
```

## 3.1.2 Trust Chain

Nel profilo italiano IT-Wallet v1.3.3, la Trust Chain è sempre composta da due elementi:

```
[ EntityConfiguration_Leaf_JWT, Subordinate_Statement_IPZS_JWT ]
```

Il primo elemento è l'Entity Configuration firmato dall'entità stessa (foglia); il secondo è il Subordinate Statement firmato da IPZS che certifica la foglia.

**Modalità di verifica**: La Trust Chain viene verificata offline utilizzando le chiavi pubbliche di IPZS, ottenute out-of-band al momento dell'integrazione iniziale.

**Modalità di trasporto**: La Trust Chain viene veicolata nell'header dei JWT di protocollo (Request Object, Issuer-Signed-JWT) tramite il claim `trust_chain`, valorizzato come array dei due JWT in sequenza.

**Scadenza**: La validità della Trust Chain è il minimo dei due valori `exp` dei JWT che la compongono.

### Ciclo di vita

* **Creazione**: Avviene contestualmente all'onboarding del Relying Party presso IPZS (cfr. §2.1). Il Subordinate Statement viene generato da IPZS al ricevimento della richiesta via PEC e reso disponibile sul `federation_fetch_endpoint`.
* **Utilizzo**: La Trust Chain viene inclusa nell'header dei Request Object emessi dal Relying Party e viene utilizzata dal Wallet per verificare l'autenticità del RP. Specularmente, il Relying Party utilizza la Trust Chain dell'issuer per verificare l'autenticità della credenziale ricevuta in presentazione (cfr. §3.7).
* **Rinnovo**: Avviene prima della scadenza, chiamando nuovamente il `federation_fetch_endpoint` per ottenere un nuovo Subordinate Statement aggiornato e aggiornando l'Entity Configuration con i nuovi certificati.
* **Revoca implicita**: IPZS revoca un'entità non pubblicando più un Subordinate Statement valido per essa. Se `GET /federation_fetch_endpoint?sub=<entity_id>` non restituisce un JWT valido, l'entità è da considerare revocata.

{% hint style="warning" %}
**`TBD` — Tempistiche di propagazione della revoca**: la finestra temporale fra la notifica di revoca e la propagazione effettiva nella federazione non è documentata nelle linee guida operative IPZS/PagoPA v1.3.3 e sarà specificata in iterazioni successive.
{% endhint %}

## 3.1.3 Trust Mark

Il Trust Mark è un JWT firmato da IPZS che attesta l'affidabilità di un'entità per un ruolo specifico. Per i Relying Party, il ruolo dichiarato è `openid_relying_party/public`.

### Struttura

```json
"trust_marks": [
  {
    "trust_mark_type": "https://pre.ta.wallet.ipzs.it/openid_relying_party/public",
    "trust_mark": "<JWT_firmato_da_IPZS>"
  }
]
```

| Claim             | Descrizione                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `trust_mark_type` | URL che identifica il tipo di Trust Mark. Cambia in funzione dell'ambiente.                                                |
| `trust_mark`      | JWT firmato da IPZS, contenente `iss` (URL del Trust Anchor), `sub` (entità certificata), `iat`, `exp`, `trust_mark_type`. |

Il Trust Mark viene posizionato come array nel campo `trust_marks` dell'Entity Configuration.

### Ciclo di vita

* **Emissione**: Avviene contestualmente all'onboarding. Il Trust Mark viene recuperato dal Subordinate Statement chiamando il `federation_fetch_endpoint` di IPZS.
* **Esposizione**: Il Trust Mark viene esposto pubblicamente nell'Entity Configuration del Relying Party.
* **Scadenza e rinnovo**: Il Trust Mark ha una scadenza autonoma dichiarata nel claim `exp`. Alla scadenza è necessario richiedere un nuovo Trust Mark a IPZS e aggiornare l'Entity Configuration.

{% hint style="warning" %}
**`TBD` — Durata e procedura di rinnovo del Trust Mark**: la durata standard del Trust Mark e la modalità di rinnovo (automatica su iniziativa IPZS oppure su richiesta del RP) non sono documentate operativamente nelle linee guida v1.3.3.
{% endhint %}

***
