# Panoramica e concetti chiave

## Cos'è IT-Wallet

IT-Wallet è il sistema italiano di identità digitale basato su credenziali verificabili, allineato all'European Digital Identity Wallet (EUDIW). Consente alle cittadine e ai cittadini italiani di conservare in modo sicuro documenti digitali sul proprio smartphone e di presentarli in forma selettiva ai fornitori di servizi che li richiedono.

L'infrastruttura di IT-Wallet è gestita dall'Istituto Poligrafico e Zecca dello Stato (IPZS) sotto la guida del Dipartimento per la Trasformazione Digitale della Presidenza del Consiglio dei Ministri. La distribuzione agli utenti finali avviene attualmente attraverso la funzionalità _Documenti su IO_ dell'app IO di PagoPA.

## Il ruolo del Relying Party

Un Relying Party (RP) è un fornitore di servizi — pubblico o privato — che richiede credenziali digitali dal Wallet dell'utente per autenticarlo o per accordargli l'accesso a uno specifico servizio. Nella terminologia di OpenID for Verifiable Presentations (OpenID4VP) lo stesso ruolo viene indicato come _Credential Verifier_.

Per integrarsi con IT-Wallet, un Relying Party deve completare quattro attività principali, descritte nella sezione Tutorial:

1. **Registrarsi nella federazione IPZS** come entità trusted (_onboarding_).
2. **Esporre metadati conformi** tramite il proprio Entity Configuration.
3. **Implementare gli endpoint** del flusso di presentazione remota.
4. **Costruire la richiesta** di presentazione, **ricevere** la risposta del Wallet e **verificarla** crittograficamente prima di concedere l'accesso.

## Concetti chiave

I termini che seguono ricorrono in tutto il manuale. Ogni voce rimanda al riferimento tecnico approfondito presente nella sezione "Riferimenti tecnici".

**Credenziale digitale (Attestato Elettronico)** — Insieme strutturato di attributi dell'utente, firmato crittograficamente da un ente autorizzato — il _Credential Issuer_. La firma garantisce autenticità e integrità del documento. \
(→ [_Credenziali e modello dati_](credenziali-e-modello-dati.md)_)_.

**PID (Personal Identification Data)** — Credenziale fondante dell'ecosistema italiano: l'utente deve possedere il PID prima di poter ottenere qualunque altra credenziale. Il Verifiable Credential Type (`vct`) normativo è `urn:eudi:pid:it:1`.  \
(→ [_Credenziali e modello dati_](credenziali-e-modello-dati.md)_)_.

**Formato `dc+sd-jwt`** — Formato baseline obbligatorio per il flusso remoto, basato su JSON e JWT (JOSE). Il formato alternativo `mso_mdoc` (binario CBOR/COSE) è opzionale ed è destinato al flusso di prossimità definito da ISO 18013-5.  \
_(→_ [_Credenziali e modello dati_](credenziali-e-modello-dati.md)_)_

**Selective Disclosure** — Caratteristica distintiva delle credenziali IT-Wallet: ogni attributo della credenziale è protetto da un digest SHA-256 nell'array `_sd` ed è rivelato solo al momento della presentazione, esclusivamente per i claim effettivamente richiesti dal Relying Party. Il meccanismo implementa a livello crittografico il principio di minimizzazione previsto dal GDPR.  \
&#xNAN;_(→_ [_Protocollo di presentazione OpenID4VP_](protocollo-di-presentazione-openid4vp.md)_)_.

**Presentazione** — Atto con cui il Wallet, su consenso esplicito dell'utente, invia una credenziale (o un sottoinsieme dei suoi claim) al Relying Party in risposta a una richiesta. Il risultato è il `vp_token`: un oggetto JSON le cui chiavi sono gli identificatori delle credenziali richieste e i cui valori sono le SD-JWT _Combined Presentation_. \
&#xNAN;_(→_ [_Protocollo di presentazione OpenID4VP_](protocollo-di-presentazione-openid4vp.md)_)_

**KB-JWT (Key Binding JWT)** — JWT allegato in coda alla presentazione che garantisce contemporaneamente: il possesso della chiave privata da parte del Wallet, la destinazione corretta della presentazione (`aud` = `client_id` del RP), la freschezza temporale (`nonce` e `iat`), l'integrità delle Disclosure rivelate (`sd_hash`). \
&#xNAN;_(→_ [_Protocollo di presentazione OpenID4VP_](protocollo-di-presentazione-openid4vp.md)_)_

**Trust Anchor** — Entità che certifica gli attori della federazione e ne garantisce l'autenticità reciproca. Per IT-Wallet il Trust Anchor è gestito da IPZS, con due istanze separate per pre-produzione e produzione. \
&#xNAN;_(→_ [_Trust Infrastructure_](trust-infrastructure.md)_)_

**Federation** — Infrastruttura di trust basata sullo standard OpenID Federation 1.0 che governa il riconoscimento reciproco delle entità — Wallet Solutions, Credential Issuers, Relying Parties — attraverso catene di certificazione (_Trust Chain_) e attestati di affidabilità (_Trust Mark_). \
&#xNAN;_(→_ [_Trust Infrastructure_](trust-infrastructure.md)_)_
