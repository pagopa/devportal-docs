# \[Note di sezione]

#### Sulla Sezione 4

La struttura adottata raggruppa i riferimenti in 6 schede:

1. **Specifiche IT-Wallet** (9 voci) — main page + 8 file `.rst` referenziati direttamente dal repository ufficiale, perché il manuale punta a sezioni puntuali della specifica e non solo alla pagina principale.
2. **Standard OpenID** (3 voci) — Federation, OpenID4VP, HAIP.
3. **Standard IETF** (8 voci) — RFC 5280 X.509, RFC 6749 OAuth 2.0, RFC 7515-7519 famiglia JOSE, RFC 7638 JWK Thumbprint.
4. **Standard ISO** (1 voce) — 18013-5 per il formato `mso_mdoc` opzionale.
5. **Linee guida operative IPZS** (2 voci) — `registration.html` per pre-prod e prod.
6. **Raccomandazioni di settore sulla crittografia** (2 voci) — NIST SP 800-131A e BSI TR-02102-1, citate dalla risposta SME al GAP-06.

#### Nota editoriale finale sul quadro normativo

Ho chiuso la sezione con un blockquote che esplicita due punti, in coerenza con la natura tecnica del manuale:

1. **Il manuale non fornisce orientamento normativo**: assunzione esplicita di responsabilità editoriale.
2. **La responsabilità di conformità resta in capo all'organizzazione titolare**: chiarisce il perimetro di applicabilità del manuale e protegge sia il lettore (che non deve aspettarsi guidance legale) sia chi pubblica il manuale (PagoPA).

Questa nota non era nella risposta SME al GAP-02, ma è una buona pratica documentale per evitare ambiguità di scope.

#### Disclosure di confidenza

| Categoria          | Stato                                                                                                                                                                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Confermato**     | Tutti gli URL e i riferimenti puntano a documenti reali e indicati nel materiale sorgente o nelle risposte SME (Appendice A9 del sorgente, risposta GAP-06 per NIST e BSI).                                                                                    |
| **Dedotto**        | L'inclusione di RFC 7515, 7516, 7518 e 6749 — non esplicitamente citati nel sorgente ma fondamenta tecniche dei contenuti trattati (firma JWS, cifratura JWE, algoritmi JWA, errori OAuth 2.0 in §3.6.5). La nota editoriale di chiusura sul quadro normativo. |
| **Non confermato** | Nessuna voce inventata. Tutti gli URL sono verificabili.                                                                                                                                                                                                       |

**Confidenza complessiva**: alta.
