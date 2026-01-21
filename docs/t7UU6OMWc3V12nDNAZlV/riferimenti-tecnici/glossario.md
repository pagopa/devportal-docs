---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/ehvH7YE5R9GDHFFfnCv1/guida-tecnica/glossario
---

# Glossario

**Activation (Attivazione)**\
Il processo attraverso il quale il Debitore acconsente ed autorizza l'invio e la ricezione delle richieste di pagamento da parte dei Service Provider dei Creditori.

**Archivio Centralizzato Avvisi (ACA)**\
Il sistema gestito da PagoPA dove gli Enti Creditori (o i loro partner) sono tenuti a censire le posizioni debitorie prima di poter avviare un flusso RTP. È noto anche come Gestione Posizioni Debitorie (GPD).

**Callback (Webhook)**\
Il meccanismo di comunicazione **asincrona** con cui il sistema SRTP notifica a un Service Provider un evento, come l'accettazione di una richiesta da parte dell'utente finale. Richiede che il Service Provider esponga un endpoint per ricevere queste chiamate.

**CPI**\
Il Comitato Pagamenti Italia (CPI) è un forum di cooperazione presieduto dalla Banca d'Italia. Il suo scopo è promuovere lo sviluppo di un mercato dei pagamenti sicuro e innovativo. Funge da punto di riferimento per l'industria dei pagamenti italiana e si raccorda con gli organismi di governance europei.

**Creditore (Creditor/Payee)**\
Il soggetto che deve ricevere il pagamento e che avvia la richiesta di pagamento. Nel contesto di pagoPA, è tipicamente un Ente Creditore.

**Debitore (Debtor/Payer)**\
Il soggetto (cittadino o impresa) che deve effettuare il pagamento e che riceve la richiesta di pagamento.

**Discovery Service**\
Il servizio, esposto tramite le API di Attivazione, che permette a un Service Provider del Creditore di interrogare il registro centrale per **individuare le informazioni di raggiungibilità** (l'identificativo del PSP) di un utente finale, prima di inviargli una richiesta di pagamento.

**Ente Creditore**\
L'ente pubblico, il gestore di pubblici servizi.

**Enrollment**\
Processo eseguito da un Service Provider che ha già completato l'onboarding, con cui un Creditore o un Debitore viene registrato e reso operativo per utilizzare il servizio SRTP. Alla fine di questo processo, il Creditore/Debitore possiede un indirizzo SRTP.

**EPC (European Payments Council)**\
L'organismo europeo che ha definito e che gestisce lo standard SEPA Request-To-Pay (SRTP).

**Onboarding**\
Il processo con cui un Service Provider aderisce allo schema SRTP di PagoPA. Include la sottoscrizione degli accordi legali e la configurazione tecnica necessaria per operare sulla piattaforma, come l'acquisizione delle credenziali.

**PSP (Prestatore di Servizi di Pagamento)**\
Un soggetto autorizzato a prestare servizi di pagamento. Nel contesto di SRTP, il PSP agisce tipicamente come Service Provider del Debitore.

**RTP (Request to Pay)**\
Letteralmente "Richiesta di Pagamento". È il nome comune del servizio di invio di notifiche di pagamento basato sullo schema SRTP.

**Service Provider (SP)**\
Un soggetto tecnologico che aderisce allo schema SRTP per fornire servizi di invio o ricezione delle richieste di pagamento.

* **Service Provider del Creditore**: Il soggetto tecnologico che invia le richieste SRTP per conto del Creditore.
* **Service Provider del Debitore**: Il soggetto tecnologico (es. una banca) che riceve le richieste SRTP e le presenta al Debitore sui propri canali digitali.

**SRTP (SEPA Request-To-Pay)**\
È il nome ufficiale dello schema definito dall'EPC per la tramitazione delle richieste di pagamento in area SEPA.
