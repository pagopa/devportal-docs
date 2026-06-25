# Approfondimento su DPoP

## Cosa è e come funziona

Il **Demonstrating Proof-of-Possession (DPoP)** è uno **standard IETF (**[**RFC 9449**](https://datatracker.ietf.org/doc/html/rfc9449)**)** che introduce un meccanismo di sicurezza avanzato: rende un **voucher (token JWT)** inutilizzabile in caso di furto, vincolandolo a una **chiave pubblica univocamente associata al chiamante**.

È **l’erogatore** che richiede l’uso del DPoP, specificandolo nel **file di interfaccia API** del proprio e-service. Il DPoP è consigliato per i casi d’uso in cui si desidera **una protezione aggiuntiva contro furti e riutilizzo (replay)** dei token. In assenza di tale requisito, si continua a utilizzare i **voucher “Bearer”** tradizionali.

## Funzionamento sintetico

Il **fruitore** genera una **coppia di chiavi asimmetriche** dedicata al DPoP:

* la **chiave privata** resta sempre sotto il suo controllo (server o dispositivo) e **non viene mai condivisa**;
* la **chiave pubblica** è inclusa nell’intestazione della DPoP (campo `jwk`), così che possa essere verificata.

Questa coppia di chiavi:

* **non deve** essere depositata su PDND Interoperabilità,
* **non deve coincidere** con quella usata per la _client assertion_,
* **è gestita interamente dal fruitore**.

Il DPoP incoraggia l’uso di **chiavi effimere o dedicate alla sessione**: la stessa chiave può firmare tutte le richieste di una singola sessione, ma ogni chiamata API deve includere una DPoP con **identificativi univoci** (`jti`, `iat`), creando un contesto crittografico non riutilizzabile da terzi. Se necessario, la chiave DPoP può essere mantenuta per periodi più lunghi, purché resti distinta da quella utilizzata per la _client assertion_.

## Perché usare DPoP

L’adozione del DPoP:

* rafforza la **sicurezza dell’autenticazione** tra fruitore ed erogatore;
* mitiga il rischio di **riutilizzo illecito dei token**;
* consente un **controllo più fine** sul contesto di ogni richiesta;
* elimina la necessità di meccanismi complessi come l’**mTLS**, pur offrendo un livello di protezione equivalente per molti scenari.

## Flusso di richiesta e autorizzazione

Il processo end-to-end prevede **sette passaggi principali**:

1. Il fruitore genera la **client assertion standard** e la firma con la chiave privata associata al proprio client registrato su PDND Interoperabilità.
2. Costruisce la **prima DPoP**, destinata al **server autorizzativo di PDND**, firmandola con una **seconda chiave privata** (la cui pubblica è indicata nell’header `jwk`).
3. Invia la **richiesta di voucher** al server autorizzativo, includendo l’header DPoP.
4. Il **server autorizzativo di PDND** verifica la validità della richiesta e, in caso positivo, rilascia un **voucher DPoP**.
5. Il fruitore genera una **seconda DPoP**, destinata al **resource server** (l’API dell’erogatore), firmata con la stessa chiave privata del punto 2.
6. Il fruitore invia la **richiesta di dati** all’erogatore, includendo sia il **voucher** rilasciato da PDND Interoperabilità sia la **DPoP** generata per la chiamata.
7. L’erogatore esegue le **verifiche crittografiche** e, se superate, restituisce i dati richiesti al fruitore.

## Implementazione

Per il dettaglio su come implementarlo, si rimanda al [tutorial dedicato](../../tutorial/tutorial-per-il-fruitore/come-richiedere-un-voucher-dpop-per-le-api-di-un-erogatore-base.md).

***

Pagina successiva [→ Garanzia dell'integrità della risposta](garanzia-dellintegrita-della-risposta.md)
