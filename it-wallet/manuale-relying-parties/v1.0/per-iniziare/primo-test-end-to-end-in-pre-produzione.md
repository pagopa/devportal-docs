# Primo test end to end in pre-produzione

## Obiettivo

Completare un test end-to-end nel quale il Relying Party riceve una credenziale PID di test, presentata dall'app IO in ambiente di pre-produzione, e ne verifica con successo l'autenticità.

Il raggiungimento di questo traguardo dimostra che l'intera catena di integrazione — onboarding, esposizione dei metadati, flusso di richiesta e flusso di verifica — è funzionante e pronta per essere replicata in produzione.

## Durata indicativa

L'effort tecnico complessivo è dell'ordine di 2-3 giornate di lavoro. La durata percepita risulta tuttavia maggiore a causa dell'attesa della risposta IPZS alla richiesta di onboarding, che si svolge via PEC con tempi indicativi di 1-3 giornate lavorative.

| Fase                                      | Effort di lavoro | Tempi di attesa         |
| ----------------------------------------- | ---------------- | ----------------------- |
| 1. Setup locale e richiesta di onboarding | \~1 giornata     | —                       |
| 2. Risposta IPZS alla PEC                 | —                | 1-3 giornate lavorative |
| 3. Completamento onboarding               | \~0,5 giornata   | —                       |
| 4. Implementazione endpoint e flusso      | \~1 giornata     | —                       |
| 5. Conformance test e test E2E con app IO | \~0,5 giornata   | —                       |

## Le tre fasi della Quick Start

Il percorso è organizzato in tre fasi consecutive. Ciascun passo numerato rinvia al Tutorial dedicato della sezione 2 per i dettagli operativi.

{% stepper %}
{% step %}
### Fase 1 — Setup locale e onboarding presso IPZS

Obiettivo della fase: avere un Relying Party registrato e attivo nella federazione IPZS di pre-produzione.

1. Confermare la disponibilità dei prerequisiti elencati in _→_ [_Verificare i prerequisiti_](verificare-i-prerequisiti.md)
2. Generare le chiavi crittografiche (Federation Key e Protocol Key), preparare le CSR e pubblicare un Entity Configuration iniziale presso l'endpoint `/.well-known/openid-federation` del proprio dominio. _( →_ [_Come implementare gli endpoint di presentazione_](../tutorial/come-implementare-gli-endpoint-di-presentazione.md)_)_
3. Inviare la richiesta di onboarding via PEC a `identitadigitale@pec.ipzs.it`, allegando JWK Set e CSR. _( →_ [_Come onboardare il Relying Party nella federazione IPZS_](../tutorial/come-onboardare-il-relying-party-nella-federazione-ipzs.md)_)_

{% hint style="info" %}
A questo punto si entra nella **finestra di attesa** della risposta IPZS, che richiede da 1 a 3 giornate lavorative. È possibile sfruttare questo tempo per iniziare la Fase 2 in parallelo, sviluppando localmente gli endpoint del flusso senza esporli ancora pubblicamente.
{% endhint %}

4. Al ricevimento del Registration Number, completare l'onboarding: recuperare il Subordinate Statement, aggiornare l'Entity Configuration con `authority_hints`, `x5c` e Trust Mark, verificare l'iscrizione tramite l'endpoint `/list` del Trust Anchor. \
   &#xNAN;_( →_ [_Come onboardare il Relying Party nella federazione IPZS_](../tutorial/come-onboardare-il-relying-party-nella-federazione-ipzs.md)_)_
{% endstep %}

{% step %}
### Fase 2 — Implementazione del flusso di presentazione

Obiettivo della fase: avere un Relying Party che espone correttamente gli endpoint richiesti dal flusso remoto e sa costruire una richiesta di presentazione conforme.

5. Implementare gli endpoint `request_uri`, `response_uri` ed `erasure_endpoint`, registrandone gli URL nei metadati `openid_credential_verifier` dell'Entity Configuration. _( →_ [_Come implementare gli endpoint di presentazione_](../tutorial/come-implementare-gli-endpoint-di-presentazione.md)_)_
6. Costruire e firmare il Request Object con la Protocol Key, applicando il principio di minimizzazione nella selezione dei claim richiesti tramite query DCQL. _( →_ [_Come costruire e firmare il Request Object_](../tutorial/come-costruire-e-firmare-il-request-object.md)_)_
7. Implementare la Selection Page, la pagina QR Code per il flusso Cross-Device e l'Universal Link per il flusso Same-Device. _Cfr. Tutorial §2.4_.
8. Implementare la logica di verifica della risposta: decifratura del JWE, validazione della Trust Chain dell'issuer, verifica di firma, Disclosure, KB-JWT e stato di revoca. _Cfr. Tutorial §2.5_.
{% endstep %}

{% step %}
### Fase 3 — Conformance test e test end-to-end

Obiettivo della fase: confermare che il Relying Party rispetta la specifica e funziona contro un Wallet Instance reale.

9. Eseguire la suite `wallet-conformance-test` di PagoPA contro il proprio Relying Party. Risolvere eventuali fallimenti nella categoria _mandatory_ prima di procedere. _Cfr. Tutorial §2.6, sezione conformance test_.
10. Attivare la modalità sviluppatore nell'app IO, spostare l'app sull'ambiente di pre-produzione IT-Wallet e ottenere un PID di test. _Cfr. Tutorial §2.6, sezione test E2E con app IO_.
11. Eseguire un test end-to-end completo nei due flussi (Cross-Device tramite scansione del QR e Same-Device tramite Universal Link).
{% endstep %}
{% endstepper %}

## Verifica del successo

Il Quick Start si considera completato quando ricorrono **tutte** le condizioni seguenti:

* [ ] L'Entity Identifier del Relying Party compare nell'array restituito da `GET https://pre.ta.wallet.ipzs.it/list`.
* [ ] L'endpoint `/.well-known/openid-federation` restituisce un JWT con `Content-Type: application/entity-statement+jwt`, payload coerente con la specifica e Trust Chain risolvibile via `/resolve`.
* [ ] La suite `wallet-conformance-test` non riporta fallimenti nella categoria mandatory.
* [ ] L'app IO mostra correttamente il nome e il logo del Relying Party nella schermata di consenso al momento della presentazione.
* [ ] La risposta del Wallet ricevuta sul `response_uri` viene decifrata, la Trust Chain dell'issuer viene risolta e tutte le verifiche elencate al §2.5 si concludono senza errori.
* [ ] I claim richiesti vengono estratti correttamente dalle Disclosure e risultano coerenti con i valori del PID di test presentato.

Il raggiungimento di queste condizioni in pre-produzione abilita il passaggio alla fase di promozione in produzione, descritta nel Caso d'uso §5.2.

## In caso di problemi

Per i sintomi più frequenti riscontrati durante il primo test E2E — l'app IO non si apre dopo la scansione del QR, il logo non viene mostrato, il JWE non si decifra, il KB-JWT non risulta valido — si rimanda al Caso d'uso §5.4 _Diagnosticare e risolvere errori comuni_, che mappa i sintomi osservabili lato Relying Party alle cause probabili e alle azioni correttive.
