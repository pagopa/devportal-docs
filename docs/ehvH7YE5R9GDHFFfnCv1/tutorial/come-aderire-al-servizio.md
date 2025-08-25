# Come aderire al servizio

Questo tutorial descrive il processo di **Onboarding**, ovvero i passaggi che un Service Provider deve seguire per aderire al servizio RTP, ottenere le credenziali necessarie per l'integrazione tecnica e diventare pienamente operativo.

```mermaid
sequenceDiagram
    autonumber

    participant SP as Service Provider
    participant PPA as PagoPA
    participant UAT as Ambiente di Certificazione

    Note over SP, PPA: Prerequisito: <br> Il SP ha già aderito allo schema EPC SRTP autonomamente.

    rect rgba(240, 240, 240, 0.7)
        note over SP, PPA: Fase 1: Adesione e Configurazione (Step 1 e 2)
        SP->>PPA: Sottoscrive Accordo di Adesione e T&C
        SP->>PPA: Fornisce le informazioni tecniche richieste
        PPA-->>SP: Invia credenziali (clientId, client_secret) al referente tecnico
    end

    rect rgba(240, 240, 240, 0.7)
        note over SP, PPA: Fase 2: Certificazione Tecnica (step 3 e 4)
        Note right of SP: Implementazione tecnica <br>dei flussi API
        SP->>+UAT: Esegue i test in ambiente di certificazione
        UAT-->>-SP: Fornisce esito dei test
        SP->>PPA: Invia la documentazione di test
    end
    
    rect rgba(240, 240, 240, 0.7)
        note over SP, PPA: Fase 3: Go-Live (step 5)
        Note left of PPA: PagoPA certifica il buon esito dei test
        SP->>PPA: Concorda la data per il passaggio in produzione
        Note over SP, PPA: Il Service Provider è operativo sul servizio reale
    end
```

## **Prerequisito: Adesione allo schema EPC**

Prima di avviare il processo di onboarding con PagoPA, è necessario che il tuo istituto abbia aderito allo schema SEPA Request-to-Pay (SRTP) seguendo le regole definite nel Rulebook dell'European Payments Council (EPC). Questa attività non è gestita da PagoPA.

## **Step 1: Sottoscrivere l'Accordo di Adesione con PagoPA**

Il primo passo consiste nel formalizzare l'adesione al servizio tramite la sottoscrizione della convenzione e dei Termini e Condizioni (T\&C) forniti da PagoPA.

## **Step 2: Fornire le Informazioni Tecniche**

Durante la fase di adesione, dovrai compilare un allegato tecnico con tutte le informazioni necessarie alla configurazione del tuo servizio sulla piattaforma. I dati richiesti includono:

* **Identificativo del Service Provider**: Il tuo Bank Identifier Code (BIC) o, in sua assenza, il codice fiscale della tua organizzazione.
* **Eventuale TPSP:** Se ti avvali di un Technical Service Provider (TPSP) per l'integrazione, dovrai fornire anche il suo identificativo.
* **Ruolo ricoperto**: In questo contesto, "Service Provider del Debitore".
* **Identificativo del canale pagoPA**: Il canale che verrà utilizzato per i pagamenti degli avvisi notificati tramite SRTP.
* **Contatti**: L'indirizzo email di un referente tecnico per il supporto all'integrazione e l'elenco degli utenti (beta-tester) che opereranno in ambiente di test.

## **Step 3: Ricevere le Credenziali di Accesso**

A seguito della sottoscrizione del contratto e della fornitura dei dati tecnici, il referente tecnico indicato riceverà via email le credenziali di accesso ai servizi. Nello specifico, verranno comunicati `clientId` e `client_secret`, indispensabili per l'autenticazione OAuth2 e per l'utilizzo delle API.

## **Step 4: Eseguire i Test in Ambiente di Certificazione (UAT)**

Una volta ottenute le credenziali, dovrai procedere con l'integrazione tecnica e la certificazione in ambiente di test (UAT). Questa fase prevede l'implementazione dei flussi API e l'esecuzione di una serie di prove per verificare il corretto funzionamento della tua integrazione, che andranno documentate secondo le modalità fornite.

## **Step 5: Pianificare il Passaggio in Produzione**

Dopo aver completato con successo la fase di test e ottenuto la certificazione, potrai concordare con PagoPA la data per il passaggio in produzione e iniziare a operare nel servizio reale.
