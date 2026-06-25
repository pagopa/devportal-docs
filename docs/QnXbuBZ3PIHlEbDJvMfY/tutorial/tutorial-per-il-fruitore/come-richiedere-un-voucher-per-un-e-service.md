# Come richiedere un voucher per un e-service

Dopo aver completato tutta la configurazione, la tua applicazione è pronta per interagire con l'e-service dell'Erogatore. Tuttavia, per ragioni di sicurezza, non può chiamare direttamente l'API. Deve prima ottenere un **voucher**: un gettone di sicurezza a tempo (un **token JWT**) rilasciato da PDND Interoperabilità.

Questo voucher funziona come un "pass" che la tua applicazione presenta all'Erogatore. Contiene le informazioni che certificano che la tua richiesta è autorizzata per una finalità specifica e proviene da un client riconosciuto. Ottenere questo voucher è l'ultimo passo prima di poter finalmente accedere al dato. Esistono diversi livelli di sicurezza (pattern) con cui puoi richiedere e utilizzare un voucher, principalmente **Bearer** e **DPoP**.

### Prerequisiti

* Avere un **client** associato a una **finalità** attiva.
* Disporre dei seguenti identificativi:
  * `purposeId`: L'ID della finalità per cui si richiede l'accesso.
  * `clientId`: L'ID del client che effettua la richiesta.
  * `kid`: L'ID della chiave pubblica caricata sul client.
* Avere accesso alla **chiave privata** corrispondente alla chiave pubblica caricata sul client.

### Procedura

Il processo per ottenere un voucher consiste in una chiamata `POST` all'endpoint di token della piattaforma. Per effettuare questa chiamata, devi prima costruire un "client assertion", ovvero un altro JWT che serve a provare l'identità della tua applicazione.

#### Step 1: Costruire il Client Assertion JWT

Il client assertion è un JWT che la tua applicazione deve creare e firmare con la propria chiave privata. Deve contenere i seguenti "claim":

* `iss` (Issuer): Deve corrispondere al `clientId` della tua applicazione.
* `sub` (Subject): Deve corrispondere al `clientId` della tua applicazione.
* `aud` (Audience): L'URL dell'endpoint di token della piattaforma.
* `jti` (JWT ID): Un ID univoco per questa richiesta.
* `iat` (Issued At): Il timestamp di quando il JWT è stato creato.
* `exp` (Expiration Time): Il timestamp di scadenza (deve essere breve, es. 120 secondi).

L'header di questo JWT deve specificare l'algoritmo di firma (es. `RS256`) e il `kid` della chiave che stai usando.

#### Step 2: Preparare la richiesta al Token Endpoint

Una volta generato il client assertion, prepara una richiesta `POST` all'endpoint di token di PDND Interoperabilità.

| Proprietà       | Valore                                                                          |
| --------------- | ------------------------------------------------------------------------------- |
| **Metodo HTTP** | `POST`                                                                          |
| **Endpoint**    | (Varia in base all'ambiente, es. `https://auth.interop.pagopa.it/token.oauth2`) |
| **Header**      | `Content-Type: application/x-www-form-urlencoded`                               |

Il corpo della richiesta deve contenere i seguenti parametri:

* `grant_type`: `client_credentials`
* `client_assertion_type`: `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`
* `client_assertion`: Il JWT firmato che hai creato allo Step 1.
* `client_id`: L'ID del tuo client.
* `purposeId`: L'ID della finalità per cui stai chiedendo l'accesso.

#### Step 3: Gestire i diversi pattern (Bearer vs DPoP)

* **Pattern Bearer**: È il più semplice. Esegui la richiesta come descritto allo Step 2. Il voucher ottenuto potrà essere usato da chiunque ne entri in possesso ("bearer").
* **Pattern DPoP (Demonstrating Proof-of-Possession)**: Offre una sicurezza maggiore. Prima di eseguire la richiesta, devi creare un **secondo JWT**, il _DPoP proof token_, firmato con la stessa chiave privata. Questo token aggiuntivo viene inviato in un header HTTP (`DPoP`) e lega il voucher alla specifica richiesta, rendendolo inutilizzabile da altri.
* **Invio di informazioni di audit (Digest)**: Se l'Erogatore lo richiede, puoi aggiungere un header `digest` alla tua richiesta contenente un hash del payload che intendi inviare all'e-service. Questo digest verrà incluso nel voucher, permettendo all'Erogatore di verificare che il payload non sia stato alterato.

#### Step 4: Eseguire la chiamata e ottenere il voucher

Esegui la richiesta `POST`. Se tutti i dati sono corretti, la piattaforma risponderà con un JSON contenente il voucher.

Esempio di chiamata `cURL`:

```bash
curl -X POST https://auth.interop.pagopa.it/token.oauth2 \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "grant_type=client_credentials" \
-d "client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer" \
-d "client_assertion=[IL_TUO_CLIENT_ASSERTION_JWT]" \
-d "client_id=[IL_TUO_CLIENT_ID]" \
-d "purposeId=[IL_TUO_PURPOSE_ID]"
```

La risposta conterrà un campo `access_token`. Il valore di questo campo è il voucher.

#### Step 5: Utilizzare il voucher

Conserva il voucher ottenuto. Per chiamare l'API dell'Erogatore, dovrai includerlo nell'header `Authorization` della tua richiesta HTTP.

Esempio: `Authorization: Bearer [VOUCHER_OTTENUTO]`

Il voucher ha una scadenza breve. La tua applicazione dovrà essere in grado di richiederne uno nuovo quando quello corrente scade.
