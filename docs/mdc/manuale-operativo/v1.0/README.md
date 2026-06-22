# Panoramica del Servizio

Cos'è il Servizio "**Messaggi di Cortesia**", i benefici per i PSP e il ruolo dell'**E**nterprise **M**essage **D**ispatcher (**EMD**).

### La soluzione per integrare l'invio dei Messaggi di Cortesia relativi alle notifiche SEND direttamente sui canali dei PSP

**Messaggi di Cortesia** è il Servizio che consente ai **P**restatori di **S**ervizi di **P**agamento (**PSP**) di mostrare ai propri clienti le comunicazioni di cortesia relative alle notifiche a valore legale presenti sulla **piattaforma SEND**, direttamente all'interno delle proprie app bancarie.

***

### I benefici

Integra i Messaggi di Cortesia per arricchire la tua offerta digitale e semplificare la vita dei tuoi clienti, offrendo un servizio che consente di visualizzare gli avvisi di cortesia relativi alle notifiche e gestire i relativi pagamenti, se previsti.

* **Esperienza utente fluida e integrata**: offrire agli Utenti la possibilità di attivare l'invio sull'app bancaria di una comunicazione circa la presenza di una notifica a valore legale da visualizzare sulla piattaforma SEND e, nel caso di notifiche con avviso di pagamento pagoPA associato, di procedere al pagamento direttamente tramite l'app bancaria.
* **Comunicazione capillare ed efficace**: migliora l'efficacia delle comunicazioni consentendo agli Utenti di scegliere il proprio canale preferito (l'app bancaria del PSP). Questo aumenta la probabilità che gli avvisi vengano visualizzati rapidamente, facilitando l'accesso alle informazioni.

***

### Uno standard sicuro e interoperabile

Il sistema si basa sull'interazione con l'**Enterprise Message Dispatcher (EMD)**, un layer che armonizza le interfacce e garantisce la sicurezza.\
L'adesione al Servizio richiede _standard_ elevati:

* **Sicurezza:** utilizzo di _Strong Customer Authentication_ (SCA) per l'attivazione del servizio da parte dell'Utente.
* **Autenticazione:** protocolli **OAUTH2** per l'integrazione tecnica tra i sistemi.

{% hint style="danger" %}
I messaggi visualizzati sull'app bancaria hanno natura puramente informativa e non hanno valore legale. La notifica a valore legale rimane depositata sulla piattaforma SEND.
{% endhint %}

***

### Si comincia da qui

#### Come aderire al servizio

Di seguito i passi iniziali: i PSP devono essere già aderenti alla piattaforma pagoPA e completare il processo di onboarding sui sistemi EMD fornendo i dati tecnici (es. `Credenziali`, `Url`, etc...) e amministrativi necessari.

[Scopri di più](tutorial-per-i-psp/01-ext-processo-onboarding.md)

#### Documentazione API

Esplora i microservizi e le specifiche OpenAPI per gestire l'intero ciclo di vita dell'integrazione:

* **`emd-citizen`**: Per la gestione dell'attivazione/disattivazione dell'Utente.
* **`emd-message-core`**: Per la ricezione delle notifiche _push_ e il recupero dei dettagli del messaggio.
* **`emd-payment-core`**: Per la gestione dei _token_ e dei flussi di pagamento.

[Vedi le API](riferimenti-tecnici/openapi-emd-ext-message.md)

#### Esplora i flussi

Comprendi i processi chiave attraverso i nostri _tutorial_:

1. [Come aderire al Servizio Messaggi di Cortesia.](tutorial-per-i-psp/01-ext-processo-onboarding.md)
2. [Come attivare un utente al Servizio.](tutorial-per-i-psp/02-ext-processo-citizen-activation.md)
3. [Come disattivare un utente al Servizio.](tutorial-per-i-psp/03-ext-processo-citizen-deactivation.md)
4. [Come inviare un Messaggio di Cortesia ai PSP.](tutorial-per-i-psp/06-ext-processo-msg-to-tpp.md)
5. [Come avviene il pagamento associato ad un messaggio.](tutorial-per-i-psp/05-ext-processo-payment-psp.md)
