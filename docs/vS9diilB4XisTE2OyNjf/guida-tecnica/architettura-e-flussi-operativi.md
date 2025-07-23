# Architettura e flussi operativi

L'architettura del servizio RTP si basa su un'interfaccia RESTful che utilizza il formato JSON. Il modello di comunicazione è ibrido:

1. **Operazioni Sincrone:** La maggior parte delle interazioni con le API (come la creazione, la lettura e la cancellazione delle risorse) sono sincrone. A una richiesta corrisponde una risposta immediata e definitiva che ne comunica l'esito.
2. **Operazioni Asincrone:** La notifica dello stato di una richiesta a seguito di un'azione dell'utente finale (accettazione o rifiuto) avviene in modo asincrono, tramite un meccanismo di callback (webhook).

Questo modello garantisce da un lato l'efficienza e la semplicità di un'interfaccia REST standard, dall'altro la flessibilità necessaria per gestire eventi non immediati come l'interazione dell'utente.

## **Flussi Operativi Principali**

### **Flusso di Invio di una Richiesta di Pagamento (SRTP)**

Questo flusso è sincrono. Il Partner Tecnologico dell'Ente Creditore invia una richiesta di pagamento e riceve un esito immediato.

1. **Azione del Partner EC:** Effettua una chiamata `POST /rtps` contenente un oggetto JSON `CreateRtp` con i dettagli dell'avviso.
2. **Risposta del Servizio:** Il sistema valida la richiesta.
   * In caso di successo, crea la risorsa, la inoltra al PSP del Debitore e risponde immediatamente con `201 Created`. L'header `Location` conterrà l'ID univoco della SRTP appena creata.
   * In caso di errore (es. dati malformati o utente non attivo), risponde con un codice di stato `4xx`.

### **Flusso di Gestione dello Stato (Asincrono)**

Questo flusso è asincrono e notifica l'esito di una richiesta a seguito della decisione dell'utente.

1. **Evento:** L'utente finale accetta o rifiuta la richiesta di pagamento sull'app del proprio PSP.
2. **Azione del Servizio:** Il sistema RTP riceve la notifica dal PSP e la inoltra istantaneamente al Partner Tecnologico dell'Ente Creditore.
3. **Azione del Partner EC:** Il sistema del partner riceve una chiamata `POST` sul suo endpoint di callback. Il corpo della richiesta contiene i dettagli dell'esito. Il partner deve rispondere con `201 OK` per confermare la ricezione della notifica.

### **Flusso di Cancellazione di una Richiesta di Pagamento**

Questo flusso è sincrono. Il Partner Tecnologico dell'Ente Creditore richiede di annullare una SRTP e ottiene un esito immediato.

1. **Azione del Partner EC:** Effettua una chiamata `POST /rtps/{rtpId}/cancel`, specificando nell'URL l'ID della richiesta da annullare. La chiamata non richiede un corpo della richiesta.
2. **Risposta del Servizio:** Il sistema processa la cancellazione e risponde immediatamente.
   * In caso di successo, la risposta è `204 No Content`.
   * In caso di errore (es. SRTP già finalizzata o inesistente), risponde con un codice di stato `4xx`.
