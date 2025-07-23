# EC

Questa sezione raccoglie le guide pratiche dedicate ai Partner Tecnologici che operano per conto di un Ente Creditore. I seguenti tutorial forniscono istruzioni step-by-step per tutte le fasi di integrazione del servizio RTP, dall'adesione alla piattaforma fino all'invio e alla gestione delle richieste di pagamento.



*   [Come individuare le informazioni di raggiungibilità di un Service Provider](come-individuare-le-informazioni-di-raggiungibilita-di-un-service-provider.md)

    **Obiettivo:** Scoprire come interrogare il Discovery Service di PagoPA per ottenere l'indirizzo tecnico del PSP di un utente. Questo passaggio è fondamentale per sapere dove inoltrare correttamente una richiesta di pagamento.
*   [Come inviare una richiesta di pagamento](come-inviare-una-richiesta-di-pagamento.md)

    **Obiettivo:** Imparare a inviare una richiesta di pagamento a un utente finale. La guida spiega come costruire il messaggio `pain.013`, invocare l'API corretta e gestire la risposta di presa in carico da parte del sistema.
*   [Come gestire la risposta a una richiesta inviata](come-gestire-la-risposta-a-una-richiesta-inviata.md)

    **Obiettivo:** Questa guida ti mostra come ricevere e interpretare le notifiche di stato asincrone (`pain.014`). Imparerai a esporre un endpoint di callback e a processare le risposte di accettazione o rifiuto inviate dal PSP del debitore.
*   [Come cancellare una richiesta di pagamento](come-cancellare-una-richiesta-di-pagamento.md)

    **Obiettivo:** Scoprire come annullare una richiesta di pagamento già inviata. Il tutorial illustra come costruire il messaggio di cancellazione (`camt.055`) e gestire la conferma asincrona per chiudere correttamente il ciclo.
