# \[Note di sezione]

#### Architettura del Reference

| Sotto-sezione                   | Caratteristica distintiva                                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| §3.1 Trust Infrastructure       | Struttura a 3 oggetti (Trust Anchor, Trust Chain, Trust Mark), ciascuno con sezione _Ciclo di vita_ esplicita                                     |
| §3.2 Entity Configuration       | Schema canonico in apertura + tabelle dei claim separate per `federation_entity` e `openid_credential_verifier`                                   |
| §3.3 Chiavi e certificati X.509 | Separazione netta Federation Key vs Protocol Key; X.509 con subject e estensioni in due tabelle parallele                                         |
| §3.4 Credenziali                | PID con doppia tabella (claim selectively disclosable / claim sempre in chiaro), che è la distinzione operativamente più importante               |
| §3.5 Protocollo OpenID4VP       | Sei sotto-oggetti (Request Object, DCQL, Authorization Response, Combined Presentation, KB-JWT, Status List) trattati come reference indipendenti |
| §3.6 Endpoint del RP            | Quattro tabelle uniformi per i quattro endpoint + **catalogo completo dei codici di errore** (OAuth, OpenID4VP, Federation 1.0)                   |
| §3.7 Verifica credenziale       | **Pseudocodice in 16 passi numerati**, leggibile in modalità diretta                                                                              |
| §3.8 Strumenti                  | Tre tabelle minimali (tool, librerie JOSE, conformance)                                                                                           |
| §3.9 Glossario e checklist      | 41 voci di glossario in ordine alfabetico + checklist riepilogativa di 30 controlli                                                               |

#### `TBD` chiaramente segnalati

Cinque `TBD` esplicitati nel testo, ciascuno con motivazione e perimetro:

1. **§3.1.2** Tempistiche di propagazione della revoca della Trust Chain.
2. **§3.1.3** Durata e procedura di rinnovo del Trust Mark.
3. **§3.3.5** Tempistiche di comunicazione preventiva a IPZS per la rotazione chiavi.
4. **§3.3.5** Requisiti di custodia delle chiavi private (HSM/FIPS/CC EAL).
5. **§3.6.4** Meccanismo di correlazione lato RP per le richieste di erasure.
6. **§3.6.5** Formato standardizzato della error response.

In coerenza con l'approccio editoriale concordato: il `TBD` è inline al punto, ma il manuale prosegue con il contenuto disponibile invece di interrompersi.

#### Punti di forza redazionali

1. **Sequenza di verifica in 16 passi (§3.7.1)** — riportata come **pseudocodice numerato in monospace**, con commenti inline. È il cuore tecnico del Reference perché viene linkata da §2.5 (Tutorial) e diventa la fonte autorevole per la verifica della credenziale.
2. **Catalogo codici di errore (§3.6.5)** — strutturato in 3 tabelle (OAuth 2.0 base, OpenID4VP specifici, OpenID Federation 1.0) più una tabella di "sintomi non-protocollari", coprendo l'intera gamma derivata dalla risposta SME a GAP-04.
3. **Glossario di 41 voci** — copre tutti gli acronimi e termini che compaiono nei capitoli 1, 2 e 3 del manuale. Voce per voce auto-contenuta in 1-2 righe.
4. **Cicli di vita uniformi** — ogni componente del Reference ha la stessa struttura `Creazione → Utilizzo → Rinnovo/Rotazione → Revoca/Dismissione`, anche dove le specifiche non lo prescrivono, come richiesto dalle istruzioni PagoPA.
5. **Schema HTTP completo per ogni endpoint** — tabelle uniformi con metodo, `Content-Type` request/response, codici HTTP attesi.

#### Cosa **non** è entrato

* **Esempi di codice multi-linguaggio**: non presenti nel Reference (sono nei Tutorial). Il Reference è descrittivo.
* **Comandi `curl` di verifica**: idem.
* **Storia o motivazioni delle scelte progettuali**: il Reference è austero, niente _explanation_ dentro il _reference_.

#### Disclosure di confidenza

| Categoria          | Stato                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Confermato**     | Tutti gli schemi JSON, le tabelle dei claim del PID, la sequenza di verifica in 16 passi, il subject X.509 e le estensioni, le specifiche degli endpoint del Trust Anchor, gli algoritmi crittografici e le coppie chiave-uso derivano direttamente dal documento sorgente `it-wallet-relying-party-integration.md` (in particolare dalle Appendici A1, A2, A3, A6, A7, A8) e dalle risposte SME nella `gap_analysis.md`.                                                             |
| **Dedotto**        | La strutturazione uniforme dei _Cicli di vita_ (creazione/utilizzo/dismissione) per ogni componente — scelta editoriale derivata dalle istruzioni PagoPA. La struttura del catalogo errori in tre tabelle (la risposta SME forniva gli elenchi in forma narrativa). Il posizionamento del Wallet Attestation in §3.7.4 come _opzionale_, coerente con il fatto che nel sorgente compare come passo 0 della checklist ma non è esplicitamente prescritto per RP che non lo verificano. |
| **Non confermato** | Nulla di sostanziale. I `TBD` sono dichiarati come tali.                                                                                                                                                                                                                                                                                                                                                                                                                              |

**Confidenza complessiva**: alta. Ogni voce del Reference è tracciabile al sorgente o alle risposte SME.
