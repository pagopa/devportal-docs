# Data model: attributi e stati dell'EAA

## Struttura della credenziale

Quattro blocchi, in **ordine fisso** nel contratto OpenAPI:

<table><thead><tr><th width="203.29296875">Blocco</th><th>Contenuto</th></tr></thead><tbody><tr><td><code>identityClaims</code></td><td>Attributi di identità del soggetto</td></tr><tr><td><code>userClaims</code></td><td>Attributi riferiti all'utente</td></tr><tr><td><code>attributeClaims</code></td><td>Attributi dell'attestato (array; <code>object_id</code> required)</td></tr><tr><td><code>metadataClaims</code></td><td>Metadati di ciclo di vita: <code>status</code> enum <code>VALID/INVALID/SUSPENDED</code>, <code>object_id</code>, <code>last_updated</code></td></tr></tbody></table>

## Stati e ciclo di vita

| Stato (progettazione) | Significato                                       | `status` OpenAPI                  |
| --------------------- | ------------------------------------------------- | --------------------------------- |
| **Valido**            | Utilizzabile, entro scadenza                      | `VALID`                           |
| **Sospeso**           | Temporaneamente non valido, reversibile           | `SUSPENDED`                       |
| **Non Valido**        | Non più valido, irreversibile                     | `INVALID`                         |
| **Scaduto**           | Scadenza amministrativa (definita dall'Ente)      | `VALID` con scadenza, o `INVALID` |
| **Da aggiornare**     | Scadenza tecnica (definita dall'Issuer, ≤ 1 anno) | da metadati/claim                 |

L'invalidazione del documento fisico invalida l'EAA; la rimozione dell'EAA dal portafoglio non incide sul documento fisico. Durata massima generale: **un anno**.
