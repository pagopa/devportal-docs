---
description: >-
  In seguito alla visita, il cittadino riceve un messaggio su IO che lo informa
  della pubblicazione del referto.
---

# 6️⃣ Emissione del referto

<figure><img src="../solutions/prestazioni-sanitarie/.gitbook/assets/05 - Referto.png" alt=""><figcaption><p>Un esempio di emissione referto dal messaggio su IO al sito dell'ente</p></figcaption></figure>

## Cosa fa l'Ente

Se previsto, il medico emette un referto digitale che viene reso disponibile nel fascicolo sanitario elettronico del cittadino.

L'ente, tramite i propri sistemi, invia su IO un messaggio informativo, che include:

* titolo del messaggio (es. “Hai un nuovo referto disponibile”);
* pulsante d’azione per accedere direttamente al documento.

### Da ricordare 💡

* Utilizza il metadato [**`require_secure_channels`**](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi#require_secure_channels) per **proteggere** **i contenuti sensibili**:&#x20;
  * le notifiche push sui dispositivi del destinatario mostreranno un generico invito ad aprire il messaggio, senza riportare il contenuto del titolo;
  * i messaggi non verranno inoltrati via email a prescindere dalla preferenza impostata dall'utente destinatario;
* Se desideri veicolare dati personali e/o sensibili nel titolo o nel corpo del messaggio, puoi usare i [**contenuti remoti** ](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto)e mantenere il controllo sul dato all'interno dei sistemi dell'ente;
* Invita le persone all'azione, puoi aggiungere al messaggio un [pulsante o Call to action](https://www.developer.pagopa.it/app-io/guides/manuale-servizi/come-si-crea-un-servizio/la-scheda-servizio/pulsante-con-call-to-action-cta) per compiere azioni aggiuntive come **visualizzare il referto**. Con la funzionalità gratuita del [Single Sign-On](https://www.developer.pagopa.it/app-io/guides/manuale-servizi/lapp-io/le-funzionalita-di-io-a-disposizione-degli-enti/accedere-tramite-single-sign-on) (SSO), il pulsante inserito può condurre un utente al sito per le prenotazioni CUP in modalità autenticata SPID/CIE.&#x20;

## Cosa fa il cittadino

Il cittadino riceve un messaggio su IO che lo informa dell'emissione del referto.&#x20;

Per visualizzare il referto, il cittadino può cliccare sul[ **pulsante**](https://www.developer.pagopa.it/app-io/guides/manuale-servizi/come-si-crea-un-servizio/la-scheda-servizio/pulsante-con-call-to-action-cta) a disposizione nel messaggio e atterrare nella pagina del referto contenuta nel fascicolo sanitario elettronico, senza dover effettuare una nuova autenticazione tramite SPID/ CIE grazie alla funzionalità del [Single Sign-On ](https://www.developer.pagopa.it/app-io/guides/manuale-servizi/lapp-io/le-funzionalita-di-io-a-disposizione-degli-enti/accedere-tramite-single-sign-on)(SSO).

## Scrivere i messaggi su IO

Nel [Manuale dei servizi dell'app IO,](https://developer.pagopa.it/app-io/guides/manuale-servizi) puoi trovare il modello [Prestazioni Sanitarie](https://developer.pagopa.it/app-io/guides/modelli-servizi/salute/prestazioni-sanitarie), cioè un template da cui l'ente può partire per **configurare il servizio e i relativi messaggi al cittadino** su IO.&#x20;
