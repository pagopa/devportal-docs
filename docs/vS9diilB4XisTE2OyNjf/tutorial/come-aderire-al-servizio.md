# Come aderire al servizio

Questo tutorial descrive il processo di [Onboarding](../guida-tecnica/glossario.md#onboarding), ovvero i passaggi che un Service Provider (sia del Creditore sia del Debitore) deve seguire per aderire al servizio RTP e ottenere le credenziali necessarie per l'integrazione tecnica.

Prima di iniziare, assicurati di avere a disposizione le seguenti informazioni, che saranno richieste durante il processo di onboarding:

* **Identificativo del Service Provider:** il tuo Bank Identifier Code (BIC) o, se non disponibile, il codice fiscale della tua organizzazione.
* **Ruolo ricoperto:** specifica se intendi operare come Service Provider del Creditore, del Debitore o entrambi.
* **Identificativo del canale pagoPA:** il canale che verrà utilizzato per i pagamenti degli avvisi notificati tramite SRTP.
* **Contatti:** l'indirizzo email di un referente tecnico per le questioni di integrazione e l'elenco degli utenti (beta-tester) che opereranno in ambiente di test.

## **Step 1: Sottoscrivere l'Accordo di Adesione**

Il primo passo è di natura amministrativa. È necessario sottoscrivere la convenzione e i Termini e Condizioni (T\&C) del servizio per formalizzare l'adesione alla piattaforma.

## **Step 2: Fornire le Informazioni Tecniche**

Durante la fase di adesione, ti verrà richiesto di compilare un allegato tecnico con tutte le informazioni raccolte nella sezione "Prerequisiti". Questi dati sono essenziali per configurare correttamente la tua utenza sulla piattaforma e garantire l'interoperabilità con gli altri attori del sistema.

## **Step 3: Ricevere le Credenziali di Accesso**

A seguito della sottoscrizione del contratto e della fornitura dei dati tecnici, il referente tecnico indicato riceverà via email le credenziali di accesso ai servizi. Nello specifico, verranno comunicati

`clientId` e `client_secret`.

Queste credenziali sono indispensabili per l'autenticazione OAuth2 e per utilizzare le interfacce del servizio.

## **Step 4: Eseguire i Test in Ambiente di Test (UAT)**

Una volta ottenute le credenziali, dovrai procedere con l'integrazione tecnica e la certificazione in ambiente di test (UAT). Questa fase prevede l'implementazione dei flussi API e l'esecuzione di una serie di prove per verificare il corretto funzionamento della tua integrazione.

## **Step 5: Pianificare il Passaggio in Produzione**

Dopo aver completato con successo la fase di test e ottenuto la certificazione, potrai concordare con PagoPA la data per il passaggio in produzione e iniziare a operare nel servizio reale.
