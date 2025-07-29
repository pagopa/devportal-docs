# Glossario

**Activation (Attivazione)** \
Il processo con cui si stabilisce un accordo tra il Debitore e il Creditore (e i rispettivi Service Provider) per consentire l'invio e la ricezione delle notifiche SRTP.

**Archivio Centralizzato Avvisi (ACA)** \
Il sistema gestito da PagoPA dove gli Enti Creditori (o i loro partner) sono tenuti a censire le posizioni debitorie prima di poter avviare un flusso RTP. È noto anche come Gestione Posizioni Debitorie (GPD).

**Callback (Webhook)** \
Il meccanismo di comunicazione **asincrona** con cui la piattaforma RTP notifica a un Service Provider un evento, come l'accettazione o il rifiuto di una richiesta da parte dell'utente finale. Richiede che il Service Provider esponga un endpoint per ricevere queste chiamate.

**Creditore (Creditor/Payee)** \
Il soggetto che deve ricevere il pagamento e che avvia la richiesta di pagamento. Nel contesto di pagoPA, è tipicamente un Ente Creditore.

**Debitore (Debtor/Payer)** \
Il soggetto (cittadino o impresa) che deve effettuare il pagamento e che riceve la richiesta di pagamento.

**Discovery Service** \
Il servizio, esposto tramite le API di Attivazione, che permette a un Service Provider del Creditore di interrogare il registro centrale per **individuare le informazioni di raggiungibilità** (l'identificativo del PSP) di un utente finale, prima di inviargli una richiesta di pagamento.

**Ente Creditore** \
L'ente pubblico, il gestore di pubblici servizi o altro soggetto che emette un avviso di pagamento pagoPA e agisce come Creditore nel flusso SRTP.

**Enrollment** \
Processo, eseguito da un Service Provider che ha già completato l'onboarding, con cui un Creditore o un Debitore viene registrato e reso operativo per utilizzare il servizio SRTP. Alla fine di questo processo, il Creditore/Debitore possiede un indirizzo SRTP.

**EPC (European Payments Council)** \
L'organismo europeo che ha definito e che gestisce lo standard SEPA Request-To-Pay (SRTP).

**Onboarding** \
Il processo con cui un Service Provider aderisce allo schema RTP di PagoPA. Include la sottoscrizione degli accordi legali e la configurazione tecnica necessaria per operare sulla piattaforma, come l'acquisizione delle credenziali.

**PSP (Prestatore di Servizi di Pagamento)** \
Un soggetto autorizzato a prestare servizi di pagamento. Nel contesto di RTP, il PSP agisce tipicamente come Service Provider del Debitore.

**RTP (Request to Pay)** \
Letteralmente "Richiesta di Pagamento". È il nome comune del servizio di invio di notifiche di pagamento basato sullo schema SRTP.

**Service Provider (SP)** \
Un partner tecnologico che aderisce allo schema SRTP per fornire servizi di invio o ricezione delle richieste di pagamento.

* **Service Provider del Creditore**: Il soggetto tecnologico che invia le richieste SRTP per conto del Creditore.
* **Service Provider del Debitore**: Il soggetto tecnologico (es. una banca) che riceve le richieste SRTP e le presenta al Debitore sui propri canali digitali.

**SRTP (SEPA Request-To-Pay)** \
È il nome ufficiale dello schema definito dall'EPC per la tramitazione delle richieste di pagamento in area SEPA.

**Takeover (Subentro)** \
L'operazione, gestita tramite l'API di attivazione (`PATCH /activations/{activationId}`), con cui un PSP **subentra** a un altro nella gestione del servizio RTP per un utente che ha deciso di cambiare fornitore.
