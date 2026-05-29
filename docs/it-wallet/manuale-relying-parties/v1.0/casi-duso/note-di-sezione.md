# \[Note di sezione]

#### Caratteristiche distintive rispetto alle altre sezioni

| Aspetto                 | Differenza dai Tutorial (§2) e dai Reference (§3)                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------------- |
| **Forma**               | Narrativa end-to-end, non procedurale atomica                                                             |
| **Granularità**         | Sequenze numerate ma con prosa esplicativa fra i passi, non istruzioni asciutte                           |
| **Punti di attenzione** | Sezione dedicata in ogni caso d'uso che evidenzia trade-off operativi e scelte implementative             |
| **Rinvii**              | Linkano massivamente ai Tutorial della §2 per i dettagli operativi e ai Reference della §3 per gli schemi |
| **Decisioni**           | Mostrano _quando_ applicare una variante invece di un'altra (es. Cross-Device vs Same-Device)             |

#### Struttura adottata in ciascun Caso d'uso

```
Scenario
  → Sequenza narrativa numerata
  → Punti di attenzione operativi
  → Riferimenti
```

Per il **5.4 Troubleshooting** ho usato il pattern alternativo _sintomo → causa probabile → azione correttiva_, organizzato in 4 sotto-sezioni per fase del flusso. Questo pattern è coerente con il modo in cui un developer cerca aiuto: parte da un sintomo osservabile, non da una causa.

#### Punti di forza redazionali

1. **5.1 Confronto sintetico fra Cross-Device e Same-Device** in tabella conclusiva: consente al lettore di scegliere rapidamente la variante adatta senza rileggere entrambi i flussi.
2. **5.1 Punto di attenzione su Polling vs Server-Sent Events**: il sorgente non lo affronta esplicitamente, ma è una decisione architetturale rilevante che ogni RP deve prendere. L'ho dedotto dal contesto del flusso Cross-Device, dove il browser desktop deve essere notificato del completamento.
3. **5.2 Tabella comparativa pre-prod vs prod**: con i 4 parametri che cambiano fra i due ambienti. Strumento operativo per chi sta promuovendo.
4. **5.3 Rotazione delle chiavi descritta in 5 passi espliciti con periodo di coesistenza**: derivato dalla risposta SME a GAP-01 D2 (riferimento a OpenID Federation 1.0 § 11.2). Include esempio del JWK Set durante il periodo di coesistenza.
5. **5.4 Troubleshooting organizzato per fase del flusso** (onboarding/EC → indirizzamento → ricezione risposta → verifica credenziale): consente di entrare nel troubleshooting partendo dal punto del flusso in cui ci si è fermati.
6. **5.4 Tabella strumenti di diagnosi**: chiude il caso d'uso con una scheda operativa "cosa usare per cosa", che è il valore aggiunto pratico maggiore.

#### `TBD` segnalati nella sezione

Quattro `TBD` resi espliciti, ciascuno inline al punto rilevante:

| Localizzazione | Argomento                                                           |
| -------------- | ------------------------------------------------------------------- |
| §5.2           | Controlli aggiuntivi di produzione (SLA, audit, monitoraggio)       |
| §5.3.1         | Tempistiche di comunicazione preventiva a IPZS per rotazione chiavi |
| §5.3.2         | Meccanismo di correlazione lato RP per le richieste di erasure      |
| §5.3.3         | Procedura di rinnovo del Trust Mark                                 |

In tutti e quattro i casi il manuale non si interrompe: descrive ciò che è documentato e segnala chiaramente ciò che non lo è.

#### Cosa **non** è entrato

* **Esempi di codice multi-linguaggio**: i Casi d'uso descrivono scenari di business, non come scriverli. Il codice è nei Tutorial.
* **Schemi JSON completi**: gli schemi vivono nei Reference. Nei Casi d'uso compaiono solo frammenti di JSON minimali quando necessario per la sequenza narrativa (es. il JWK Set durante la rotazione, la risposta `{redirect_uri: ...}`).
* **Tabelle complete dei codici di errore**: già nei Reference §3.6.5. Il §5.4 si concentra sui sintomi osservabili, non sui codici formali.
* **Riferimenti normativi**: la decisione editoriale dell'utente ha ridotto la §4 a una scheda essenziale, e i Casi d'uso non vi rinviano (eccetto un accenno al principio GDPR di minimizzazione in §5.2).

#### Disclosure di confidenza

| Categoria          | Stato                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Confermato**     | Tutta la sequenza narrativa dei flussi Cross-Device e Same-Device, le differenze nella risposta del Relying Party, le configurazioni che cambiano fra pre-prod e prod, il modello di rotazione chiavi a coesistenza, e le tabelle di troubleshooting derivano dal documento sorgente, dai Tutorial già scritti in §2 e dalle risposte SME nella `gap_analysis.md`.                                                                            |
| **Dedotto**        | Punto di attenzione su _Polling vs Server-Sent Events_ in §5.1 (non esplicito nel sorgente, derivato come scelta architetturale necessaria nel Cross-Device). Le raccomandazioni "preavviso di almeno 14 giorni" per le scadenze in §5.3.3 sono buone pratiche di settore, non prescrizioni delle specifiche. La tabella delle differenze pre-prod/prod in §5.2 è composta dai parametri citati nel manuale, presentati in forma comparativa. |
| **Non confermato** | Nulla di sostanziale. I quattro `TBD` sono dichiarati come tali.                                                                                                                                                                                                                                                                                                                                                                              |

**Confidenza complessiva**: alta. Tutto il contenuto è tracciabile al sorgente, ai Tutorial già scritti o alle risposte SME approvate.
