# PSP

Questa sezione contiene le guide pratiche pensate specificamente per i Prestatori di Servizi di Pagamento (PSP) che agiscono come Service Provider del Debitore. I seguenti tutorial ti accompagneranno passo dopo passo in tutte le fasi di integrazione del servizio RTP, dalla configurazione iniziale fino alla gestione delle richieste di pagamento all'interno dei tuoi canali digitali.



*   [Come attivare un utente alla ricezione delle SRTP](come-attivare-un-utente-alla-ricezione-delle-srtp.md)

    **Obiettivo**: Scoprire come registrare il consenso di un tuo utente a ricevere le richieste di pagamento. La guida mostra come utilizzare le API di attivazione per comunicare a PagoPA che un nuovo debitore è operativo sul tuo canale.
*   [Come ricevere e processare una richiesta di pagamento (`pain.013`)](come-ricevere-e-processare-una-richiesta-di-pagamento.md)

    **Obiettivo**: Imparare a gestire una richiesta di pagamento in entrata. Questo tutorial spiega come esporre un endpoint, validare il messaggio `pain.013` ricevuto e processare i dati per presentarli correttamente al tuo utente finale.
*   [Come inviare una notifica di stato (`pain.014`)](come-inviare-una-notifica-di-stato.md)

    **Obiettivo**: Descrivere come comunicare l'esito di una richiesta a seguito della decisione del tuo utente. Imparerai a costruire e inviare il messaggio di stato `pain.014` per notificare l'accettazione o il rifiuto della richiesta.
*   [Come ricevere e gestire una richiesta di cancellazione (`camt.055`)](come-ricevere-e-gestire-una-richiesta-di-cancellazione.md)

    **Obiettivo**: Scoprire come gestire una notifica di annullamento per una richiesta già ricevuta. Il tutorial spiega come processare il messaggio `camt.055` e aggiornare lo stato dell'avviso sulla tua interfaccia per evitare pagamenti non dovuti.

