# Glossario e checklist di conformità

## 3.9.1 Glossario

| Termine                    | Definizione                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Attestato Elettronico**  | Sinonimo italiano di _credenziale digitale_: insieme strutturato di attributi dell'utente, firmato crittograficamente da un Credential Issuer. |
| **Authorization Endpoint** | Endpoint del Wallet Instance che riceve la richiesta di autorizzazione dal Relying Party.                                                      |
| **Combined Presentation**  | Rappresentazione di una credenziale SD-JWT al momento della presentazione, nella forma `<Issuer-JWT>~<Disclosure_1>~...~<KB-JWT>`.             |
| **Credential Issuer**      | Ente autorizzato a emettere una credenziale digitale. Per il PID italiano: il PID Provider gestito da IPZS.                                    |
| **DCQL**                   | _Digital Credentials Query Language_. Linguaggio di query strutturato definito da OpenID4VP 1.0 §6 per richiedere credenziali e claim.         |
| **Disclosure**             | Stringa base64url che decodifica in `[salt, claim_name, claim_value]`, rivelata al Relying Party solo per i claim richiesti.                   |
| **EC**                     | _Entity Configuration_. Documento JWT firmato che il RP pubblica all'endpoint `/.well-known/openid-federation`.                                |
| **EUDIW**                  | _European Digital Identity Wallet_. Iniziativa europea cui IT-Wallet si allinea.                                                               |
| **Entity Identifier**      | URL HTTPS che identifica univocamente un'entità nella federazione (es. `https://relying-party.example.org`).                                   |
| **Federation Key**         | Chiave EC P-256 utilizzata dal Relying Party per firmare l'Entity Configuration.                                                               |
| **HAIP**                   | _OpenID4VC High Assurance Interoperability Profile_. Profilo di interoperabilità adottato da IT-Wallet.                                        |
| **IPZS**                   | _Istituto Poligrafico e Zecca dello Stato_. Gestore dell'infrastruttura di trust di IT-Wallet, ruolo di Trust Anchor.                          |
| **Issuer-Signed-JWT**      | JWT firmato dal Credential Issuer che costituisce il primo segmento della Combined Presentation.                                               |
| **JWE**                    | _JSON Web Encryption_. Standard di cifratura JOSE utilizzato per la risposta del Wallet al `response_uri`.                                     |
| **JWK**                    | _JSON Web Key_. Rappresentazione JSON di una chiave crittografica.                                                                             |
| **JWK Thumbprint**         | Digest SHA-256 della rappresentazione canonica di una JWK (RFC 7638). Utilizzato come `kid`.                                                   |
| **JWT**                    | _JSON Web Token_. Standard di token firmato in JOSE.                                                                                           |
| **KB-JWT**                 | _Key Binding JWT_. JWT firmato dal Wallet Instance che attesta il possesso della chiave privata e la freschezza della presentazione.           |
| **OpenID4VP**              | _OpenID for Verifiable Presentations_. Standard del protocollo di presentazione di credenziali verificabili.                                   |
| **OpenID Federation**      | Standard OpenID che definisce il modello di trust della federazione.                                                                           |
| **PID**                    | _Personal Identification Data_. Credenziale fondante dell'ecosistema italiano (`vct: urn:eudi:pid:it:1`).                                      |
| **PID Provider**           | Credential Issuer del PID italiano (gestito da IPZS).                                                                                          |
| **Protocol Key**           | Chiave EC P-256 utilizzata dal Relying Party per firmare i Request Object e decifrare le risposte del Wallet.                                  |
| **Registration Number**    | Identificativo univoco assegnato da IPZS al Relying Party al termine dell'onboarding (formato `ITWALLET-XXXXXX`).                              |
| **Relying Party** (RP)     | Fornitore di servizi che richiede credenziali al Wallet dell'utente. Sinonimo di _Credential Verifier_ in OpenID4VP.                           |
| **Request Object**         | JWT firmato dal Relying Party che dichiara la richiesta di presentazione.                                                                      |
| **SD-JWT**                 | _Selective Disclosure JWT_. Formato JWT che supporta la rivelazione selettiva dei claim tramite digest e Disclosure.                           |
| **Selective Disclosure**   | Meccanismo crittografico che consente di rivelare al RP solo i claim effettivamente richiesti, mantenendo invisibili gli altri.                |
| **Status List**            | Struttura dati a bit utilizzata per la verifica dello stato di revoca delle credenziali.                                                       |
| **Subordinate Statement**  | JWT firmato dal Trust Anchor IPZS che certifica un'entità subordinata della federazione.                                                       |
| **Trust Anchor**           | Entità radice della federazione. Per IT-Wallet: IPZS.                                                                                          |
| **Trust Chain**            | Catena di JWT che certifica la posizione di un'entità nella federazione. Nel profilo italiano è sempre a 2 hop.                                |
| **Trust Mark**             | JWT firmato dal Trust Anchor che attesta l'affidabilità di un'entità per un ruolo specifico.                                                   |
| **VCT**                    | _Verifiable Credential Type_. Identificatore semantico del tipo di credenziale (es. `urn:eudi:pid:it:1`).                                      |
| **vp\_token**              | Oggetto JSON nella risposta del Wallet, con chiavi DCQL `id` e valori array di Combined Presentation.                                          |
| **Wallet Attestation**     | Attestato del Wallet Provider che certifica il Wallet Instance.                                                                                |
| **Wallet Instance**        | Istanza specifica del Wallet sul dispositivo dell'utente.                                                                                      |
| **Wallet Provider**        | Ente che gestisce una Wallet Solution riconosciuta dalla federazione.                                                                          |
| **Wallet Solution**        | Implementazione di un Wallet riconosciuta da IPZS. In Italia, distribuita attualmente tramite l'app IO di PagoPA.                              |

## 3.9.2 Checklist completa di conformità

Checklist riepilogativa per il controllo _pre-flight_ prima del passaggio in produzione. Ogni voce rinvia al Tutorial o al Riferimento di dettaglio.

### Onboarding (cfr. §2.1)

* [ ] Federation Key Pair EC P-256 generate (almeno 2: attiva + backup)
* [ ] Protocol Key Pair EC P-256 generata
* [ ] JWK Thumbprint (`kid`) calcolato per ogni chiave
* [ ] CSR PKCS#10 prodotte (una per ciascuna Federation Key)
* [ ] Entity Configuration iniziale pubblicato a `/.well-known/openid-federation`
* [ ] Richiesta inviata a `identitadigitale@pec.ipzs.it` con tutti i campi richiesti
* [ ] Registration Number ricevuto da IPZS
* [ ] Subordinate Statement recuperato dal `federation_fetch_endpoint`
* [ ] Entity Configuration aggiornato con `authority_hints` + `x5c` + Trust Mark
* [ ] Entity Identifier presente nell'output di `GET /list` di IPZS

### Entity Configuration (cfr. §3.2)

* [ ] `Content-Type` di risposta: `application/entity-statement+jwt`
* [ ] `iss` == `sub` (entrambi coincidono con l'Entity Identifier)
* [ ] `authority_hints` contiene esclusivamente l'URL del Trust Anchor IPZS
* [ ] `x5c` presente in ogni Federation Key, conforme al profilo HAIP (no root certificate)
* [ ] `trust_marks` presente con almeno un Trust Mark valido
* [ ] `logo_uri` in formato SVG per entrambi i blocchi (`federation_entity` e `openid_credential_verifier`)
* [ ] `erasure_endpoint` presente se la query DCQL include attributi identificativi univoci (es. `tax_id_code`)

### Endpoint di presentazione (cfr. §2.2, §3.6)

* [ ] `request_uri` attivo, risponde 200 con `Content-Type: application/oauth-authz-req+jwt`
* [ ] `response_uri` attivo, accetta `POST` con `Content-Type: application/x-www-form-urlencoded`
* [ ] `erasure_endpoint` attivo (se applicabile), risponde 204 per identificativi validi e 404 altrimenti
* [ ] URL degli endpoint registrati nei rispettivi claim dell'EC (`request_uris`, `response_uris`, `redirect_uris`, `erasure_endpoint`)

### Request Object (cfr. §2.3, §3.5.1)

* [ ] `nonce` con entropia minima di 32 caratteri base64url
* [ ] `state` generato per ogni sessione e correlato lato server
* [ ] `client_id` con prefisso `openid_federation:`
* [ ] `response_type` = `vp_token`
* [ ] `response_mode` = `direct_post.jwt`
* [ ] `dcql_query` con `format: dc+sd-jwt` e applicazione del principio di minimizzazione
* [ ] JWT firmato con la Protocol Key (algoritmo ES256)
* [ ] Header con `trust_chain` e `x5c` valorizzati correttamente

### Verifica della risposta (cfr. §2.5, §3.7)

* [ ] `state` della risposta coincidente con la sessione (anti-CSRF)
* [ ] JWE decifrato con la Protocol Key privata
* [ ] Trust Chain dell'issuer risolta e validata
* [ ] Firma dell'Issuer-Signed-JWT verificata
* [ ] `vct` coincidente con il valore atteso
* [ ] `exp` dell'Issuer-Signed-JWT nel futuro
* [ ] Disclosure verificate (hash presente in `_sd`)
* [ ] KB-JWT verificato (firma con `cnf.jwk`, `aud`, `nonce`, `sd_hash`)
* [ ] Status List consultata, credenziale non revocata

### Conformance e test E2E (cfr. §2.6)

* [ ] Suite `wallet-conformance-test` eseguita
* [ ] Nessun fallimento nella categoria _mandatory_
* [ ] Test end-to-end con app IO in pre-produzione completato (Cross-Device + Same-Device)
* [ ] Logo del Relying Party visualizzato correttamente nell'app IO
* [ ] Claim ricevuti coerenti con i valori del PID di test
