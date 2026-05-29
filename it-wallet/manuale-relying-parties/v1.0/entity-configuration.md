# Entity configuration

L'Entity Configuration è il documento JWT firmato che il Relying Party pubblica all'endpoint `/.well-known/openid-federation` del proprio dominio. Costituisce la fonte autoritativa dei metadati dell'entità nella federazione.

## 3.2.1 Schema canonico completo

```json
{
  "iat": 1718207217,
  "exp": 1749743216,
  "iss": "https://relying-party.example.org",
  "sub": "https://relying-party.example.org",
  "authority_hints": ["https://pre.ta.wallet.ipzs.it"],
  "jwks": {
    "keys": [
      {
        "kid": "<jwk_thumbprint>",
        "kty": "EC",
        "crv": "P-256",
        "x": "<x_base64url>",
        "y": "<y_base64url>",
        "x5c": ["<DER_base64_cert_RP>", "<DER_base64_cert_IPZS>"]
      }
    ]
  },
  "trust_marks": [
    {
      "trust_mark_type": "https://pre.ta.wallet.ipzs.it/openid_relying_party/public",
      "trust_mark": "<JWT_firmato_da_IPZS>"
    }
  ],
  "metadata": {
    "federation_entity": { ... },
    "openid_credential_verifier": { ... }
  }
}
```

### Vincoli di forma

| Vincolo                    | Valore                                                               |
| -------------------------- | -------------------------------------------------------------------- |
| `Content-Type` di risposta | `application/entity-statement+jwt`                                   |
| `iss` == `sub`             | Deve coincidere con l'Entity Identifier (URL base del Relying Party) |
| Algoritmo di firma         | `ES256`                                                              |
| Chiave di firma            | Federation Key                                                       |

## 3.2.2 Metadati `federation_entity`

Identificano l'organizzazione che gestisce il Relying Party agli occhi della federazione.

| Claim                         | Obbligatorio | Descrizione                                                        |
| ----------------------------- | ------------ | ------------------------------------------------------------------ |
| `organization_name`           | Sì           | Nome leggibile dell'organizzazione, come da registro imprese       |
| `homepage_uri`                | Sì           | URL del sito web istituzionale                                     |
| `policy_uri`                  | Sì           | URL della privacy policy applicabile                               |
| `logo_uri`                    | Sì           | URL del logo dell'organizzazione, **in formato SVG**               |
| `contacts`                    | Sì           | Array di indirizzi di contatto, contenente la PEC ufficiale        |
| `federation_resolve_endpoint` | Sì           | URL dell'endpoint del RP che espone la propria Trust Chain risolta |
| `tos_uri`                     | No           | URL dei termini di servizio applicabili                            |

## 3.2.3 Metadati `openid_credential_verifier`

Specificano la configurazione del Relying Party come _verificatore di credenziali_, secondo il profilo OpenID4VC HAIP.

| Claim                                     | Obbligatorio | Descrizione                                                                                                                                 |
| ----------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`                               | Sì           | Identificativo del client, coincidente con `iss` e `sub` dell'Entity Configuration                                                          |
| `client_name`                             | Sì           | Nome del Relying Party visualizzato nelle schermate di consenso del Wallet                                                                  |
| `application_type`                        | Sì           | Tipo di applicazione, valore costante `"web"`                                                                                               |
| `logo_uri`                                | Sì           | URL del logo compatto, MIME type `application/svg`                                                                                          |
| `contacts`                                | Sì           | Array di indirizzi di contatto                                                                                                              |
| `request_uris`                            | Sì           | Array di URL HTTPS dell'endpoint `request_uri`                                                                                              |
| `response_uris`                           | Sì           | Array di URL HTTPS dell'endpoint `response_uri`                                                                                             |
| `redirect_uris`                           | Sì           | Array di URL HTTPS di redirect (flusso Same-Device)                                                                                         |
| `encrypted_response_enc_values_supported` | Sì           | Algoritmi di cifratura supportati per la risposta JWE. Deve contenere almeno `"A256GCM"`                                                    |
| `vp_formats_supported`                    | Sì           | Formati di presentazione supportati. Deve includere almeno `dc+sd-jwt`                                                                      |
| `jwks`                                    | Sì           | JWK Set con le Protocol Key del Relying Party                                                                                               |
| `erasure_endpoint`                        | Condizionale | URL dell'endpoint di cancellazione. **Obbligatorio** se il RP richiede attributi che identificano univocamente l'utente (es. `tax_id_code`) |

### Esempio del blocco `vp_formats_supported`

```json
"vp_formats_supported": {
  "dc+sd-jwt": {
    "sd-jwt_alg_values": ["ES256", "ES384", "ES512"],
    "kb-jwt_alg_values": ["ES256"]
  },
  "mso_mdoc": {
    "issuerauth_alg_values": [-7, -35, -36],
    "deviceauth_alg_values": [-7, -35, -36]
  }
}
```

Il supporto a `mso_mdoc` è opzionale e si applica al flusso di prossimità (ISO 18013-5), non al flusso remoto documentato in questo manuale.

## 3.2.4 Ciclo di vita

* **Pubblicazione iniziale**: Avviene durante l'onboarding (cfr. §2.1, passo 4). La versione iniziale contiene solo i claim essenziali, senza `authority_hints`, `x5c` e `trust_marks`.
* **Aggiornamento post-onboarding**: Dopo la ricezione del Subordinate Statement da IPZS, l'Entity Configuration viene ripubblicato con i claim `authority_hints`, `x5c` e `trust_marks` valorizzati.
* **Aggiornamenti operativi**: Modifiche ai metadati (nuovi URL di endpoint, rotazione delle chiavi, logo aggiornato) richiedono la ripubblicazione del file con `iat` ed `exp` aggiornati.
* **Scadenza**: Definita dal claim `exp`. Un Entity Configuration scaduto è considerato non valido dalle altre entità della federazione e impedisce il funzionamento del flusso di presentazione.
* **Revoca implicita**: La mancata ripubblicazione di un Entity Configuration valido prima della scadenza determina l'esclusione di fatto dell'entità dalla federazione.
