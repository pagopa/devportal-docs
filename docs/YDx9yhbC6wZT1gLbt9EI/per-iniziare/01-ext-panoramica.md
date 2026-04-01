---
title: Panoramica
description: Cos'è il servizio Messaggi di Cortesia, i vantaggi per i PSP e il ruolo dell'Enterprise Message Dispatcher (EMD).  
sidebar_label: Panoramica
sidebar_position: 1
slug: /external/per-iniziare/panoramica
---


# Messaggi di Cortesia

### La soluzione per integrare le notifiche SEND direttamente sui canali dei PSP

**Messaggi di Cortesia** è il servizio che consente ai **P**restatori di **S**ervizio di **P**agamento (**PSP**) di intercettare e mostrare ai propri clienti le comunicazioni di cortesia relative alle notifiche a valore legale presenti sulla piattaforma SEND, direttamente all'interno delle proprie applicazioni bancarie.

---

### I vantaggi

Integra i Messaggi di Cortesia per arricchire la tua offerta digitale e semplificare la vita dei tuoi clienti, offrendo un punto di accesso unico per visualizzare avvisi e gestire i relativi pagamenti.

* **Arricchimento dell'offerta digitale**:
  amplia i servizi offerti dalla tua App integrando un canale diretto con la Pubblica Amministrazione. Questo consente ai PSP di offrire un servizio a valore aggiunto, migliorando così la qualità del servizio e la fidelizzazione dei Clienti.

* **Esperienza utente fluida e integrata**:
  offrire ai cittadini la possibilità di visualizzare l'avviso e, nel caso di notifiche con avviso di pagamento PagoPA associato, di procedere al pagamento direttamente tramite l'App bancaria o sul checkout pagoPA, semplificando notevolmente il processo.

* **Comunicazione capillare ed efficace**:
  migliora l'efficacia delle comunicazioni consentendo ai cittadini di scegliere il proprio canale preferito (l'app del PSP). Questo aumenta la probabilità che gli avvisi vengano ricevuti e visualizzati rapidamente, facilitando l'accesso alle informazioni.

---

### Uno standard sicuro e interoperabile

Il sistema si basa sull'interazione con l'**Enterprise Message Dispatcher (EMD)**, un layer che armonizza le interfacce e garantisce la sicurezza. L'adesione al servizio richiede standard elevati:

* **Sicurezza:** utilizzo di **Strong Customer Authentication (SCA)** per l'attivazione del servizio da parte del cittadino.
* **Autenticazione:** protocolli **OAUTH2** per l'integrazione tecnica tra i sistemi.

> **Nota:** i messaggi visualizzati sull'App hanno natura puramente informativa e non hanno valore legale. La notifica a valore legale rimane depositata sulla piattaforma SEND.

---

### Si comincia da qui

#### Come aderire al servizio
Di seguito i passi iniziali per abilitare il tuo ente: i PSP devono essere già iscritti al contratto pagoPA e completare il processo di onboarding sui sistemi EMD fornendo i dati tecnici (es. `entityId`, `messageUrl`) e amministrativi necessari.

[Scopri di più](../tutorial/processes-psp/01-ext-processo-onboarding.mdx) 

#### Documentazione API
Esplora i microservizi e le specifiche OpenAPI per gestire l'intero ciclo di vita dell'integrazione:
* **`emd-citizen`**: Per la gestione della registrazione dei consensi dell'utente.
* **`emd-message-core`**: Per la ricezione delle notifiche push e il recupero dei dettagli del messaggio.
* **`emd-payment-core`**: Per la gestione dei token e dei flussi di pagamento.

[Vedi le API](../riferimenti-tecnici/openapi-emd-ext-message.mdx) 

#### Esplora i flussi
Comprendi i processi chiave attraverso i nostri tutorial:
1. [Come aderire al servizio da parte del PSP.](../tutorial/processes-psp/01-ext-processo-onboarding.mdx)
2. [Attivazione del servizio da parte del cittadino tramite App.](../tutorial/processes-psp/02-ext-processo-citizen-activation.mdx)
2. [Disttivazione del servizio da parte del cittadino tramite App.](../tutorial/processes-psp/03-ext-processo-citizen-deactivation.mdx)
2. [Ricezione del messaggio di cortesia in modalità PUSH.](../tutorial/processes-psp/06-ext-processo-msg-to-tpp.mdx)
3. [Flusso di pagamento opzionale tramite deeplink.](../tutorial/processes-psp/05-ext-processo-payment-psp.mdx)


```