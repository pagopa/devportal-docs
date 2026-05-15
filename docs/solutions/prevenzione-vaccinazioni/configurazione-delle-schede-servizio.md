# Configurazione delle schede servizio

## Come scrivere le schede servizio su IO

Per configurare correttamente le schede dei servizi **Prevenzione** e **Vaccinazioni** su IO, qui un elenco di alcuni accorgimenti da seguire.&#x20;

### 🧩 Nome, descrizione e logo del servizio

* Usa un nome **chiaro e riconoscibile** per i cittadini;
* Evita nomi tecnici o sigle interne all’ente;
* Descrivi cosa può fare il cittadino: ricevere prescrizioni, prenotare, pagare, ricevere referti.
* Aggiungi il logo del servizio (se presente).&#x20;

{% hint style="success" %}
Esplora il [**Catalogo dei servizi sanitari**](https://developer.pagopa.it/app-io/guides/v1.0-catalogo-dei-servizi/catalogo-dei-servizi-sanita) e i [**Modelli dei servizi di IO**](https://developer.pagopa.it/app-io/guides/modelli-servizi) per conoscere i servizi più importanti, significativi e frequenti in app IO
{% endhint %}

### 📬 Comunicazioni attese

Specifica nella scheda le **tipologie di messaggi** che il cittadino riceverà:

* emissione prescrizione;
* conferma appuntamento;
* promemoria per il pagamento;
* emissione del referto.

### ☎️ Contatti e assistenza

* Inserisci contatti ufficiali: email, telefono, sito web;
* Assicurati che siano **realmente presidiati**;
* Aggiorna regolarmente queste informazioni.

### 🚀 Azioni e pulsanti

* Aggiungi [pulsanti ](https://www.developer.pagopa.it/app-io/guides/manuale-servizi/come-si-crea-un-servizio/la-scheda-servizio/pulsante-con-call-to-action-cta)nella scheda servizio per invitare le persone a usufruire del servizio;
  * I pulsanti possono essere aggiunti al messaggio valorizzando il [campo cta](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/pubblicare-un-servizio/dati-obbligatori/service-metadata#cta) dei `service_metadata` ;
* Configura correttamente la sicurezza dei link e le destinazioni post-login.

{% hint style="success" %}
Con la funzionalità gratuita del Single Sign-On, il pulsante inserito può condurre un utente al sito per le prenotazioni CUP in modalità autenticata SPID/CIE.&#x20;
{% endhint %}

### 🔐 Sicurezza dei messaggi

* Usa il metadato [`require_secure_channels`](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi#require_secure_channels) per marcare i contenuti sensibili:&#x20;
  * le notifiche push sui dispositivi del destinatario mostreranno un generico invito ad aprire il messaggio, senza riportare il contenuto del titolo;
  * i messaggi non verranno inoltrati via email a prescindere dalla preferenza impostata dall'utente destinatario.
* Se l’ente desidera veicolare dati personali e/o sensibili nel titolo o corpo del messaggio è possibile usare [i contenuti remoti ](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto)e mantenere le informazioni degli utenti esclusivamente nei tuoi sistemi.
