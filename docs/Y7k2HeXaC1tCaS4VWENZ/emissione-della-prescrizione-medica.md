---
description: >-
  I sistemi in capo all’ente comunicano tramite IO all’utente che è stata emessa
  una prescrizione medica sul Fascicolo Sanitario
---

# 1️⃣ Emissione della prescrizione medica

<figure><img src=".gitbook/assets/01 - Prescrizione.png" alt=""><figcaption><p>Un esempio di messaggio di emissione nuova prescrizione medica su IO </p></figcaption></figure>

## Cosa fa l'Ente

Il medico, tramite il sistema sanitario regionale, emette una nuova prescrizione. L’ente, tramite i propri sistemi, genera un messaggio su IO contenente:

* una descrizione sintetica (es. “Hai una nuova prescrizione medica”);
* eventuali allegati (es. ricetta in PDF);

### Da ricordare 💡

* Utilizza il metadato [**`require_secure_channels`**](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi#require_secure_channels) per proteggere **i contenuti sensibili**:&#x20;
  * le notifiche push sui dispositivi del destinatario mostreranno un generico invito ad aprire il messaggio, senza riportare il contenuto del titolo;
  * i messaggi non verranno inoltrati via email a prescindere dalla preferenza impostata dall'utente destinatario;
* Se desideri veicolare dati personale e/o sensibili nel titolo o nel corpo del messaggio, puoi usare i [**contenuti remoti** ](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto)e mantenere il controllo sul dato all'interno dei sistemi dell'ente;
* Invita le persone all'azione, puoi aggiungere al messaggio un [pulsante o Call to actio](https://www.developer.pagopa.it/app-io/guides/manuale-servizi/come-si-crea-un-servizio/la-scheda-servizio/pulsante-con-call-to-action-cta)n per compiere azioni aggiuntive come **prenotare l'appuntamento**. Con la funzionalità gratuita del [Single Sign-On](https://www.developer.pagopa.it/app-io/guides/manuale-servizi/lapp-io/le-funzionalita-di-io-a-disposizione-degli-enti/accedere-tramite-single-sign-on) (SSO), il pulsante inserito può condurre un utente al sito per le prenotazioni CUP in modalità autenticata SPID/CIE.&#x20;
  * Si possono aggiungere fino a [due pulsanti](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/risorse-utili/guida-al-markdown#pulsanti-azione-\(cta\)) opzionali all’interno di un messaggio per permettere comodamente di spostare e disdire l’appuntamento

## Cosa fa il cittadino

Il cittadino riceve una **notifica push non parlante**, apre l’app IO e trova un nuovo messaggio da leggere che contiene:

* i dettagli della prescrizione;
* eventuali allegati già consultabili (es. la ricetta);
* un pulsante che porta al sistema di prenotazione dell’ente per proseguire.

## Scrivere i messaggi su IO

Nel [Manuale dei servizi dell'app IO,](https://developer.pagopa.it/app-io/guides/manuale-servizi) puoi trovare il modello [Prestazioni Sanitarie](https://developer.pagopa.it/app-io/guides/modelli-servizi/salute/prestazioni-sanitarie), cioè un template da cui partire per **configurare il servizio e i relativi messaggi al cittadino** su IO.&#x20;
