---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/t7UU6OMWc3V12nDNAZlV/tutorial/come-aderire-al-servizio
---

# Come aderire al servizio

Questo tutorial descrive il processo di **Onboarding**, ovvero i passaggi che un Service Provider deve seguire per aderire al servizio SRTP, ottenere le credenziali necessarie per l'integrazione tecnica e diventare pienamente operativo.

{% @mermaid/diagram content="sequenceDiagram
    autonumber

    participant SP as Service Provider
    participant PPA as PagoPA
    participant UAT as Ambiente di Certificazione

    Note over SP, PPA: Prerequisito: <br> Il SP si dota di una soluzone compatibile con lo standard EPC

    rect rgba(240, 240, 240, 0.7)
        note over SP, PPA: Fase 1: Test, Adesione e Configurazione (Step 1 e 2)
        SP->>PPA: Fornisce le informazioni tecniche richieste
        SP->>PPA: Sottoscrive Accordo di Adesione e T&C
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
    end" %}

## Prerequisito: Adesione allo schema EPC

Prima di avviare il processo di onboarding con PagoPA, è necessario che l'istituto aderente abbia una soluzione conforme allo schema SEPA Request-to-Pay (SRTP) seguendo le regole definite nel Rulebook dell'European Payments Council (EPC). Questa attività non è gestita da PagoPA.

## Step 1: Fornire le Informazioni Tecniche

Prima della fase di adesione, occorrerà compilare il seguente allegato tecnico con tutte le informazioni necessarie alla configurazione del servizio sulla piattaforma.:

{% file src="../.gitbook/assets/Piano_Testing_SRTP_EPC.xlsx" %}
Scarica il documento relativo ai test da effetturare
{% endfile %}

I dati richiesti includono:

* **Identificativo del Service Provider**: Il Bank Identifier Code (BIC) o, in sua assenza, il codice fiscale dell'organizzazione.
* **Eventuale TPSP:** Se l'Istituto si avvale di un Technical Service Provider (TPSP) per l'integrazione, dovrà fornire anche il suo identificativo.
* **Ruolo ricoperto**: In questo contesto, "Service Provider del Debitore".
* **Identificativo del canale pagoPA**: Il canale che verrà utilizzato per i pagamenti degli avvisi notificati tramite SRTP.
* **Contatti**: L'indirizzo email di un referente tecnico per il supporto all'integrazione e l'elenco degli utenti (beta-tester) che opereranno in ambiente di test.

## Step 2: Sottoscrivere il modulo di Adesione con PagoPA

Il passo successivo consiste nel formalizzare l'adesione al servizio tramite la sottoscrizione del modulo di adesione fornito da PagoPA.

## Step 3: Ricevere le Credenziali di Accesso

A seguito della sottoscrizione del modulo e della trasmissione dei dati tecnici, l'Amministratore indicato riceverà una mail con scadenza contenente un link ad una cassaforte digitale dalla quale sarà possibile recuperare le informazioni necessarie. Nello specifico, verranno comunicati `clientId` e `client_secret`, indispensabili per l'autenticazione `OAuth2` e per l'utilizzo delle API.

## Step 4: Eseguire i Test in Ambiente di Certificazione (UAT)

Una volta ottenute le credenziali, occorrerà procedere con l'integrazione tecnica e la certificazione in ambiente di test (UAT). Questa fase prevede l'implementazione dei flussi API e l'esecuzione di una serie di prove per verificare il corretto funzionamento dell'integrazione, che andranno documentate secondo le modalità fornite.

## Step 5: Pianificare il Passaggio in Produzione

Dopo aver completato con successo la fase di test e ottenuto la certificazione, sarà possibile concordare con PagoPA la data per il passaggio in produzione e iniziare a operare nel servizio reale.
