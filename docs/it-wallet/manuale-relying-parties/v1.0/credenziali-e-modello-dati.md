# Credenziali e modello dati

## 3.4.1 Catalogo degli Attestati Elettronici

Il _Catalogo degli Attestati Elettronici_ è la fonte autoritativa delle credenziali emettibili nell'ecosistema IT-Wallet. È esposto dal Trust Anchor come endpoint consultabile in tempo reale dal Relying Party.

| Endpoint                                         | Scopo                                                  |
| ------------------------------------------------ | ------------------------------------------------------ |
| `<trust_anchor>/.well-known/credential-catalog`  | Elenco delle credenziali disponibili con `vct` e claim |
| `<trust_anchor>/.well-known/credential-taxonomy` | Tassonomie a cui le credenziali appartengono           |

L'esempio storico (v1.3.3) utilizzava `<trust_anchor>/.well-known/it-wallet-registry` con `credential_catalog` nel payload. La forma di esposizione del catalogo può evolvere; il Relying Party deve consultare gli endpoint indicati al momento dell'integrazione come fonte aggiornata.

## 3.4.2 Personal Identification Data (PID)

Il PID è la credenziale fondante dell'ecosistema italiano: l'utente deve possedere il PID prima di poter ottenere qualunque altra credenziale.

| Proprietà             | Valore              |
| --------------------- | ------------------- |
| `vct`                 | `urn:eudi:pid:it:1` |
| Formato baseline      | `dc+sd-jwt`         |
| Issuer di riferimento | PID Provider IPZS   |

### Claim selectively disclosable (presenti nell'array `_sd` dell'Issuer-Signed-JWT)

Tutti gli attributi utente del PID sono selectively disclosable. Il Relying Party può richiederne un sottoinsieme tramite query DCQL.

| Claim                            | Tipo            | Obbligatorio                                   | Note                                                                   |
| -------------------------------- | --------------- | ---------------------------------------------- | ---------------------------------------------------------------------- |
| `given_name`                     | String          | Sì                                             | Nome corrente                                                          |
| `family_name`                    | String          | Sì                                             | Cognome corrente                                                       |
| `birthdate`                      | String          | Sì                                             | Formato `YYYY-MM-DD`. La grafia esatta è `birthdate`, non `birth_date` |
| `place_of_birth`                 | Object          | Sì                                             | Almeno uno fra `country`, `region`, `locality`                         |
| `nationalities`                  | Array of String | Sì                                             | Codici ISO 3166-1 alpha-2                                              |
| `personal_administrative_number` | String          | Sì se assente `tax_id_code`                    | Identificativo ANPR                                                    |
| `tax_id_code`                    | String          | Sì se assente `personal_administrative_number` | Codice fiscale in formato ETSI: `TINIT-<codice_fiscale>`               |

### Claim sempre in chiaro (presenti nel payload dell'Issuer-Signed-JWT)

| Claim               | Descrizione                                                                |
| ------------------- | -------------------------------------------------------------------------- |
| `iss`               | URL del PID Provider                                                       |
| `vct`               | Tipo di credenziale                                                        |
| `iat`               | Timestamp di emissione                                                     |
| `exp`               | Timestamp di scadenza tecnica                                              |
| `issuing_country`   | Codice paese emittente: `"IT"`                                             |
| `issuing_authority` | Nome dell'autorità emittente                                               |
| `date_of_expiry`    | Scadenza amministrativa della credenziale                                  |
| `cnf`               | Chiave pubblica del Wallet Instance, utilizzata per la verifica del KB-JWT |
| `status`            | Riferimento alla Status List per il controllo di revoca                    |
| `verification`      | Trust framework e assurance level (estensione italiana)                    |

## 3.4.3 Formato `dc+sd-jwt`

Il formato baseline obbligatorio per il flusso remoto, basato su JSON + JWT (JOSE).

Una credenziale `dc+sd-jwt` esiste in due rappresentazioni:

**Rappresentazione completa** (presente solo sul Wallet Instance):

```
<Issuer-Signed-JWT con _sd di tutti i claim> ~ <Disc. given_name> ~ <Disc. family_name> ~ ... ~ <Disc. tax_id_code>
```

**Rappresentazione di presentazione** (inviata al Relying Party):

```
<Issuer-Signed-JWT> ~ <Disc. claim_richiesto_1> ~ <Disc. claim_richiesto_2> ~ <KB-JWT>
```

Le Disclosure dei claim non richiesti non vengono mai trasmesse al Relying Party. Questo è il meccanismo crittografico che implementa il principio di minimizzazione del GDPR (art. 5 §1 lett. c).

### Struttura di una Disclosure

Una Disclosure è una stringa base64url che decodifica in un array JSON:

```json
["<salt_random>", "<claim_name>", "<claim_value>"]
```

L'hash SHA-256 della codifica base64url della Disclosure compare nell'array `_sd` dell'Issuer-Signed-JWT.

## 3.4.4 Formato `mso_mdoc`

Codifica binaria CBOR/COSE definita da ISO 18013-5. Utilizzata per il flusso di prossimità (NFC/BLE) e non per il flusso remoto. Il supporto a `mso_mdoc` da parte del Relying Party è opzionale e non rientra nella baseline obbligatoria di IT-Wallet v1.3.3.
