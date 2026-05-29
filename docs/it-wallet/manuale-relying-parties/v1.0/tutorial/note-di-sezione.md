# \[Note di sezione]

Ciascun Tutorial mantiene la struttura Diataxis/TechDocs:

```
Obiettivo · Prerequisiti · Durata indicativa
1. Passo
2. Passo
...
✅ Verifica
Riferimenti
```

Il **passo "Verifica"** chiude ogni Tutorial con `curl` e `jq` ispettivi, perché un developer che onboarda vuole conferma immediata di essere "in piedi" prima di passare al successivo. Questo è anche un pattern già presente nel sorgente che ho mantenuto perché efficace.

#### Cosa **non** è nei tutorial (e dov'è)

| Contenuto rimosso dai Tutorial                                                   | Dove andrà     |
| -------------------------------------------------------------------------------- | -------------- |
| Schema JSON completo dell'Entity Configuration con tutti i campi opzionali       | §3.2 Reference |
| Tabelle complete dei claim del PID (selectively disclosable vs sempre in chiaro) | §3.4 Reference |
| Sequenza di verifica in 16 passi con pseudocodice                                | §3.7 Reference |
| Catalogo formale dei codici di errore (OAuth2 + OpenID4VP + Federation 1.0)      | §3.6 Reference |
| Specifiche complete X.509 (subject DN, SAN URI, key usage, basic constraints)    | §3.3 Reference |

In ogni Tutorial questi rinvii sono espliciti come "_cfr. §3.X_". I Tutorial restano leggibili in sequenza senza obbligare il salto al Reference, ma il salto è disponibile a chi cerca il dettaglio.

#### Punti di attenzione

1. **`TBD` operativi nel testo**: ne è stato esplicitato uno solo, in §2.2 passo 3, sul meccanismo di correlazione lato RP per le richieste di erasure. Gli altri `TBD` (durata Trust Mark, tempistiche revoca, ecc.) saranno collocati nei Riferimenti Tecnici (§3.1, §3.3) perché riguardano il _ciclo di vita_ dei componenti e non i passi operativi dei Tutorial.
2. **Esempi di codice multi-linguaggio** (Python, Node.js, Java) solo nei due punti dove le librerie cambiano sostanzialmente l'API: calcolo del JWK Thumbprint (§2.1 passo 2) e generazione di `nonce`/`state` (§2.3 passo 1). Negli altri passi, il sorgente operativo è puramente `bash` + `openssl` + `curl`.
3. **Progressive disclosure**: il payload completo dell'Entity Configuration iniziale è in `<details>/<summary>` nel passo §2.1.4, per non spezzare il flusso visivo del Tutorial.
4. **Tutorial 2.4 sull'instradamento al Wallet**: integra direttamente la procedura di _federation discovery_ derivata dalle risposte SME (GAP-03) e dalla specifica OpenID Federation 1.0: prima `/list` del Trust Anchor, poi fetch dell'Entity Configuration di ciascuna Wallet Solution rilevante. Nel sorgente originale questa parte era ambigua; qui è esplicita.

#### Disclosure di confidenza

| Categoria          | Stato                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Confermato**     | Tutti i comandi `openssl`, `curl`, `jq`, gli schemi JSON minimi, i codici HTTP attesi, i parametri dei JWT, e i passi della procedura derivano direttamente dal documento sorgente `it-wallet-relying-party-integration.md` e dalle risposte SME nella `gap_analysis.md`.                                                                    |
| **Dedotto**        | La durata indicativa di ciascun Tutorial (stima editoriale calibrata sulla complessità). Il ordinamento dei controlli di verifica al termine di ciascun Tutorial (riarrangiati per coerenza tra Tutorial diversi). Il rinvio al Reference §3.7 per la sequenza di verifica completa in 16 passi (scelta editoriale per evitare ripetizione). |
| **Non confermato** | Nessun contenuto inventato. Le risposte sul meccanismo di correlazione erasure restano `TBD` come dichiarato.                                                                                                                                                                                                                                |

**Confidenza complessiva**: alta. Tutti i passi sono tracciabili al sorgente o alle risposte SME.
