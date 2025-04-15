---
description: >-
  Il cittadino riceve su IO un messaggio che conferma l’appuntamento che ha
  fissato tramite sito dell’ente.
---

# 3️⃣ Conferma dell’appuntamento

## Cosa succede lato ente

Una volta completata la prenotazione, l’ente, tramite i propri sistemi, invia su IO un nuovo messaggio di conferma contenente:

* la data, l’orario e la struttura della visita;
* fino a tre [pulsanti](https://www.developer.pagopa.it/app-io/guides/manuale-servizi/come-si-crea-un-servizio/la-scheda-servizio/pulsante-con-call-to-action-cta), ad esempio:
  * pagamento anticipato della prestazione;
  * modifica o disdetta appuntamento;
  * visualizzazione dell’appuntamento nel fascicolo sanitario.

### Da ricordare 💡

* Utilizza il metadato [**`require_secure_channels`**](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi#require_secure_channels) per proteggere **i contenuti sensibili**:&#x20;
  * le notifiche push sui dispositivi del destinatario mostreranno un generico invito ad aprire il messaggio, senza riportare il contenuto del titolo;
  * i messaggi non verranno inoltrati via email a prescindere dalla preferenza impostata dall'utente destinatario;
* Se desideri veicolare dati personale e/o sensibili nel titolo o nel corpo del messaggio, puoi usare i [**contenuti remoti** ](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto)e mantenere il controllo sul dato all'interno dei sistemi dell'ente;
* Invita le persone all'azione, puoi aggiungere al messaggio [un pulsante o Call to action](https://www.developer.pagopa.it/app-io/guides/manuale-servizi/come-si-crea-un-servizio/la-scheda-servizio/pulsante-con-call-to-action-cta) per compiere azioni aggiuntive come **pagare, spostare e disdire l'appuntamento**. Con la funzionalità gratuita del [Single Sign-On](https://www.developer.pagopa.it/app-io/guides/manuale-servizi/lapp-io/le-funzionalita-di-io-a-disposizione-degli-enti/accedere-tramite-single-sign-on) (SSO), il pulsante inserito può condurre un utente al sito per le prenotazioni CUP in modalità autenticata SPID/CIE.&#x20;
  * Si possono aggiungere fino a [due pulsanti](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/risorse-utili/guida-al-markdown#pulsanti-azione-\(cta\)) opzionali all’interno di un messaggio per permettere comodamente di spostare e disdire l’appuntamento;
  * Il pulsante **Paga** è aggiunto in automatico se l'ente fornisce correttamente il codice avviso nel messaggio, valorizzando il campo [`payment_data`](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body#payment_data).

## Cosa vede il cittadino

Riceve un messaggio su IO che contiene:&#x20;

* la conferma l’appuntamento preso;
* un invito all’azione tramite pulsanti dedicati: pagare, spostare, annullare, visualizzare dettagli dell'appuntamento.

## Benefici

* Migliore gestione delle liste d’attesa;
* Riduzione dei no show (assenze senza disdetta);
* Esperienza coerente e personalizzata lato cittadino.

## Scrivere i messaggi su IO

Nel [Manuale dei servizi dell'app IO,](https://developer.pagopa.it/app-io/guides/manuale-servizi) puoi trovare il modello [Prestazioni Sanitarie](https://developer.pagopa.it/app-io/guides/modelli-servizi/salute/prestazioni-sanitarie), cioè un template da cui l'ente può partire per **configurare il servizio e i relativi messaggi al cittadino** su IO.&#x20;
