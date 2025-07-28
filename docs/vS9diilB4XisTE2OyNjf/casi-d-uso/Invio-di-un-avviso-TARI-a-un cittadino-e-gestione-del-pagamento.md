Questa sezione illustra, attraverso una narrazione end-to-end, il ciclo di vita completo di una richiesta di pagamento. Lo scenario mostra come le diverse API e i messaggi standard interagiscono in un caso d'uso reale, dal momento in cui una richiesta arriva a un Service Provider del Debitore fino alla sua riconciliazione finale.

**Attori dello scenario:**

  * **Laura**: una cittadina.
  * **La sua Banca**: che agisce come Service Provider del Debitore.
  * **Comune di Milano**: l'Ente Creditore.
  * **PagoPA**: che agisce come Service Provider del Creditore.

#### Prerequisiti

Perché questo flusso possa iniziare, assumiamo che due condizioni siano già state soddisfatte:

1.  Laura ha già attivato il servizio RTP tramite l'app della sua Banca.
2.  Il Comune di Milano ha già censito una posizione debitoria (es. la TARI) per Laura nell'Archivio Centralizzato Avvisi.

-----

#### Fase 1: Ricezione della Richiesta di Pagamento (`pain.013`)

Il processo inizia quando PagoPA, per conto del Comune, invia una SRTP alla Banca di Laura.

1.  **Azione**: Il sistema della Banca riceve una chiamata sull'endpoint `POST /sepa-request-to-pay-requests`. Il corpo della richiesta contiene un oggetto `SepaRequestToPayRequestResource` che incapsula un messaggio `pain.013` con tutti i dettagli della TARI di Laura.
2.  **Validazione**: La Banca valida la richiesta e risponde `201 Created` per confermare la presa in carico.
3.  **Processamento**: Il sistema della Banca processa i dati del `pain.013` e prepara la notifica da mostrare a Laura.

> Per i dettagli tecnici su come implementare questo passaggio, consulta il tutorial: **[Come ricevere e validare una Richiesta di Pagamento](https://www.google.com/search?q=./tutorial/come-ricevere-e-validare-una-richiesta-di-pagamento)**.

#### Fase 2: Interazione dell'Utente e Invio dello Stato (`pain.014`)

Laura riceve una notifica push dalla sua app bancaria.

1.  **Azione dell'Utente**: Laura apre l'app, visualizza i dettagli della richiesta di pagamento TARI precompilata (importo, scadenza, ente) e preme il pulsante "Accetta".
2.  **Azione della Banca**: A seguito dell'accettazione, il sistema della Banca ha il compito di notificare l'esito a PagoPA. Per farlo:
      * Costruisce un messaggio `pain.014.001.07` con lo stato `ACCP` (Accepted).
      * Invia questo messaggio tramite una chiamata `POST` all'URL di `callback` che era stato fornito nella richiesta originale.

> Per i dettagli tecnici su come implementare questo passaggio, consulta il tutorial: **[Come inviare una Risposta di Stato via Callback](https://www.google.com/search?q=./tutorial/come-inviare-una-risposta-di-stato)**.

#### Fase 3: Pagamento e Riconciliazione (Cancellazione)

Qualche giorno dopo, Laura procede con il pagamento dell'avviso direttamente dalla sua app, utilizzando il flusso standard di pagoPA.

1.  **Azione dell'Utente**: Laura autorizza il pagamento. La transazione viene completata con successo.
2.  **Azione di Riconciliazione (lato PagoPA)**: Una volta che il pagamento è registrato, PagoPA sa che la SRTP originale deve essere invalidata. Invia quindi una richiesta di cancellazione alla Banca di Laura.
3.  **Azione della Banca**:
      * Il sistema della Banca riceve una richiesta sull'endpoint `POST /sepa-request-to-pay-requests/{id}/cancellation-requests`.
      * Processa la richiesta, aggiornando lo stato della notifica nell'app di Laura da "Accettata" a "Pagata" (o "Annullata").
      * Infine, per completare il flusso, invia una conferma di cancellazione asincrona (`camt.029`) all'URL di callback di PagoPA.

> Per i dettagli tecnici su come implementare questo passaggio, consulta il tutorial: **[Come ricevere e gestire una Richiesta di Cancellazione](https://www.google.com/search?q=./tutorial/come-ricevere-e-gestire-una-richiesta-di-cancellazione)**.

#### Conclusione

Il ciclo di vita della richiesta è completo. Grazie all'interazione standardizzata tra i sistemi, Laura ha potuto gestire un pagamento verso la PA in modo interamente digitale e integrato, e tutti gli attori coinvolti hanno i sistemi informativi allineati sullo stato finale dell'operazione.