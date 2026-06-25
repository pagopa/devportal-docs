# Voucher (JWT) e Sicurezza

Il **Voucher** è il pilastro su cui si fonda la sicurezza delle interazioni tra Fruitore ed Erogatore. Si tratta di un **JSON Web Token (JWT)**, ovvero uno standard aperto per la creazione di gettoni di accesso (token) che affermano una serie di informazioni (dette "claim").

Il voucher viene emesso dalla piattaforma e consegnato al Fruitore, che lo deve presentare a ogni chiamata API. Per l'Erogatore, questo voucher è la prova crittografica che il Fruitore è stato autorizzato da PDND Interoperabilità ad accedere a un suo specifico e-service per una finalità ben definita. **È responsabilità critica dell'Erogatore validare scrupolosamente il voucher a ogni singola chiamata ricevuta.**

### Struttura del Voucher e Claim Principali

Un voucher JWT è composto da un header, un payload (contenente i claim) e una firma. I claim più importanti che un Erogatore deve ispezionare nel payload sono:

| Claim           | Descrizione                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **`jti`**       | (JWT ID) Un identificativo univoco per questo specifico voucher.                                                               |
| **`iss`**       | (Issuer) L'emittente del token, che è sempre l'URL della piattaforma PDND Interoperabilità.                                    |
| **`sub`**       | (Subject) Il soggetto del token, che corrisponde al `clientId` del Fruitore che lo ha richiesto.                               |
| **`aud`**       | (Audience) Il destinatario del token. **È un campo critico**: deve corrispondere all'identificativo univoco del tuo e-service. |
| **`purposeId`** | L'identificativo della finalità per cui il voucher è stato rilasciato. **È un campo critico** per le verifiche autorizzative.  |
| **`iat`**       | (Issued At) Il timestamp di emissione del voucher.                                                                             |
| **`nbf`**       | (Not Before) Il timestamp prima del quale il voucher non è valido.                                                             |
| **`exp`**       | (Expiration Time) Il timestamp di scadenza del voucher. I voucher hanno una durata breve.                                      |
| **`digest`**    | (Opzionale) Un hash del payload della richiesta del Fruitore, se previsto dall'e-service.                                      |
| **`cnf`**       | (Confirmation) Utilizzato solo nei voucher DPoP, contiene l'hash della chiave pubblica del client.                             |

### Pattern di Sicurezza: Bearer vs DPoP

#### Voucher Bearer

È il meccanismo più semplice. Il termine "bearer" (portatore) significa che chiunque entri in possesso del token può utilizzarlo per accedere alla risorsa. Sebbene sia di facile implementazione, presenta un rischio di sicurezza: se un voucher Bearer viene intercettato da un malintenzionato, può essere riutilizzato (attacco di tipo _replay attack_) fino alla sua scadenza.

#### Voucher DPoP (Demonstrating Proof-of-Possession)

È il pattern di sicurezza **raccomandato** perché previene i replay attack. DPoP lega crittograficamente il voucher a chi lo ha richiesto. Funziona così:

1. Il Fruitore, oltre al voucher, invia un header HTTP aggiuntivo (`DPoP`) contenente un altro JWT, più piccolo e a brevissima scadenza, firmato con la propria chiave privata.
2. Il voucher principale, nel claim `cnf`, contiene un hash della chiave pubblica del Fruitore.
3. L'Erogatore verifica che la chiave usata per firmare l'header `DPoP` corrisponda a quella "confermata" nel voucher.

Questo meccanismo garantisce che, anche se il voucher venisse rubato, un attaccante non potrebbe riutilizzarlo perché non possiede la chiave privata del Fruitore necessaria a generare l'header `DPoP` per ogni nuova richiesta.

### Procedure di Verifica Obbligatorie per l'Erogatore

Per ogni chiamata API ricevuta, l'Erogatore **deve** eseguire la seguente catena di verifiche sul voucher presentato:

1. **Verifica Sintattica**: Controllare che il token sia un JWT ben formato.
2. **Verifica della Firma**:
   * Estrarre il `kid` (Key ID) dall'header del JWT.
   * Reperire la chiave pubblica di PDND Interoperabilità corrispondente a quel `kid` dall'endpoint JWKS pubblico della piattaforma (`/.well-known/jwks.json`).
   * **Verificare la firma del voucher** utilizzando la chiave pubblica della piattaforma. Se la verifica fallisce, il token è falso o corrotto e va scartato.
3. **Verifica dei Claim Temporali**: Assicurarsi che il timestamp corrente sia successivo a `nbf` e precedente a `exp`.
4. **Verifica dei Claim Statici**:
   * **Verificare che il claim `aud` (audience) corrisponda esattamente all'identificativo del proprio e-service.** Questo è un controllo di sicurezza fondamentale.
   * Verificare che il claim `iss` (issuer) corrisponda all'URL atteso per PDND Interoperabilità.
5. **Verifica DPoP (se applicabile)**: Se il voucher è di tipo DPoP, eseguire le validazioni aggiuntive: verificare la firma dell'header `DPoP`, la corrispondenza tra la chiave e il claim `cnf`, e la coerenza tra la richiesta HTTP e i claim contenuti nell'header `DPoP`.
6. **Verifica del `purposeId` e Autorizzazione**: Una volta superati tutti i controlli crittografici, estrarre il `purposeId` dal voucher. Utilizzare questo ID per verificare nei propri sistemi se quel Fruitore, per quella finalità, è effettivamente autorizzato a compiere l'operazione richiesta sulla risorsa richiesta. Questo è il controllo autorizzativo a livello di business logic.
7. **Verifica del `digest` (se applicabile)**: Se il voucher contiene il claim `digest`, ricalcolare l'hash del corpo della richiesta ricevuta e confrontarlo con il valore del claim per garantire l'integrità del payload.
