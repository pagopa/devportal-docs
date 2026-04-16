---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/UdBZLK0IXWx2yqcEv6ks/tutorial-per-gli-enti-aggregatori/01-ext-processo-onboarding-ea
---

# Come aderire al servizio

## Come aderire al servizio Messaggi di Cortesia

{% hint style="danger" %}
La documentazione per la gestione degli **Enti Aggregatori** è in fase di revisione. **NON UTILIZZARLA** per esportarla all'esterno
{% endhint %}

## Premessa

Questo tutorial descrive il processo di Onboarding, ovvero i passaggi che un Service Provider deve seguire per aderire al servizio MDC, ottenere le credenziali necessarie per l'integrazione tecnica e diventare pienamente operativo.

### Prerequisito: Adesione/sottoscrizione del contratto

Prima di avviare il processo di onboarding con PagoPA....,

### Step 1: Fornire le Informazioni Tecniche

Prima della fase di adesione, occorrerà compilare l'allegato tecnico con tutte le informazioni necessarie alla configurazione del servizio sulla piattaforma.

[→ Scarica il documento relativo ai test da effettuare](https://developer.pagopa.it/mdc/tutorials/come-aderire-al-servizio)

I dati richiesti includono:

* **Identificativo del Service Provider:** Il tuo Bank Identifier Code (BIC) o, in sua assenza, il codice fiscale della tua organizzazione.
* **Eventuale TPSP:** Se ti avvali di un Technical Service Provider (TPSP) per l'integrazione, dovrai fornire anche il suo identificativo.
* **Contatti:** L'indirizzo email di un referente tecnico per il supporto all'integrazione e l'elenco degli utenti (beta-tester) che opereranno in ambiente di test.

### Step 2: Sottoscrivere l'Accordo di Adesione con PagoPA

Il passo successivo consiste nel formalizzare l'adesione al servizio tramite la sottoscrizione della convenzione e dei Termini e Condizioni (T\&C) forniti da PagoPA.

### Step 3: Ricevere le Credenziali di Accesso

A seguito della sottoscrizione del contratto e della fornitura dei dati tecnici, il referente tecnico indicato riceverà via email le credenziali di accesso ai servizi. Nello specifico, verranno comunicati `clientId` e `client_secret`, indispensabili per l'autenticazione OAuth2 e per l'utilizzo delle API.

### Step 4: Eseguire i Test in Ambiente di Certificazione (UAT)

Una volta ottenute le credenziali, dovrai procedere con l'integrazione tecnica e la certificazione in ambiente di test (UAT). Questa fase prevede l'implementazione dei flussi API e l'esecuzione di una serie di prove per verificare il corretto funzionamento della tua integrazione, che andranno documentate secondo le modalità fornite.

### Step 5: Pianificare il Passaggio in Produzione

Dopo aver completato con successo la fase di test e ottenuto la certificazione, potrai concordare con PagoPA la data per il passaggio in produzione e iniziare a operare nel servizio reale.
