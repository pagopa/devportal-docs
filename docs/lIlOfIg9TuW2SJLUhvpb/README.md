# Panoramica del Servizio

## Cos'è

Il BackOffice di “Messaggi di Cortesia” è un portale verticale integrato nella piattaforma Area Riservata di PagoPA, pensato specificamente per la gestione del prodotto "Messaggi di Cortesia".

Il portale è rivolto a tutti gli Enti aderenti a pagoPA - Pubbliche Amministrazioni, Gestori di Pubblico Servizio, Prestatori di Servizi di Pagamento (PSP), Società a Controllo Pubblico e Partner Tecnologici - e permette di gestire e configurare il servizio di messaggistica destinato ai cittadini, a supporto delle comunicazioni inviate tramite la piattaforma SEND.

Il portale nasce con un obiettivo preciso: offrire un punto di accesso unico per attivare, configurare e gestire il prodotto, garantendo piena autonomia operativa agli Enti e ai loro delegati.

{% hint style="info" %}
Il BackOffice "Messaggi di Cortesia" è accessibile esclusivamente attraverso la piattaforma Area Riservata di PagoPA e richiede che l’Ente abbia previamente aderito al prodotto.
{% endhint %}

### I vantaggi per gli Enti e i PSP

Integrare il BackOffice "Messaggi di Cortesia" consente di semplificare la gestione del servizio e offre un’esperienza di configurazione centralizzata, sicura e allineata agli standard PagoPA.

* **Gestione centralizzata**: un unico punto di accesso per configurare tutti i parametri tecnici — endpoint, API Key, dati di contatto — senza necessità di interventi manuali su sistemi separati.
* **Controllo degli accessi basato sui ruoli**: la piattaforma distingue le responsabilità tra Amministratore e Operatore, garantendo che ciascuna figura abbia visibilità e operatività appropriate al proprio livello.
* Integrazione nativa con l’Area Riservata: l’accesso avviene in modalità Single Sign-On tramite Token Exchange, eliminando la necessità di credenziali separate e garantendo la continuità di sessione.

### Standard di sicurezza e interoperabilità

Il sistema si basa sull’integrazione con la piattaforma Area Riservata (Self Care) di PagoPA e con i servizi EMD (Enterprise Message Dispatcher). L’adesione al BackOffice richiede standard elevati:

* **Sicurezza**: autenticazione tramite identità digitale (SPID o CIE) per l’accesso all’Area Riservata e meccanismo di Token Exchange (RFC 8693) per l’accesso al BackOffice.
* &#x20;**Autenticazione**: protocolli OAUTH2 e JWT per l’integrazione tecnica tra i sistemi.
* **Uniformità di design:** interfaccia grafica realizzata con il tema MUI Italia, conforme agli standard di design di PagoPA.

### Flusso operativo: i protagonisti del sistema

<table><thead><tr><th>Attore</th><th width="512.02734375">Ruolo nel sistema</th></tr></thead><tbody><tr><td>PSP/Ente</td><td>Soggetto che aderisce al prodotto "Messaggi di Cortesia" tramite il BackOffice, configura gli endpoint tecnici e gestisce gli utenti abilitati per il proprio Ente.</td></tr><tr><td>Area Riservata (Self Care)</td><td>Piattaforma PagoPA da cui si accede al BackOffice tramite autenticazione SSO. Gestisce identità digitali, ruoli e sessioni utente.</td></tr><tr><td>Backoffice</td><td>Portale verticale integrato nell’Area Riservata che consente ai PSP/Enti di gestire in autonomia la configurazione del servizio Messaggi di Cortesia.</td></tr><tr><td>Cittadino</td><td>Destinatario finale del servizio. La corretta configurazione del PSP nel BackOffice consente al cittadino di ricevere i messaggi di cortesia SEND direttamente sull’App bancaria</td></tr></tbody></table>

