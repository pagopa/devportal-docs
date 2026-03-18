---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/t7UU6OMWc3V12nDNAZlV/riferimenti-tecnici/subentro-del-debitore-passaggio-a-diverso-srtpsp
---

# Subentro del Debitore (Passaggio a Diverso SRTPSP)

Il Subentro, o Passaggio a diverso SRTP Service Provider (SRTPSP), è il processo che consente al Debitore (Pagatore) di cambiare il fornitore del servizio SRTP con cui è attivo, pur mantenendo l'attivazione al servizio.

Questo processo rientra tra le modalità di _Activation_ previste dallo schema SRTP.

{% hint style="info" %}
Per maggiori informazioni sulle Linee Guida relative al Subentro, è possibile consultare il [documento del CPI Request to Pay in ambito PagoPA](https://www.bancaditalia.it/compiti/sispaga-mercati/comitato-pagamenti-italia/CPI-Tavolo-Incassi-Pagamenti-Pubblici-RTP-PagoPA-ver-1.2.pdf) al punto _**3.3.3 - Passaggio a diverso SRTPSP**_
{% endhint %}

## Facoltà del Debitore

Per ogni debitore è associato un solo SRTPSP,come da documentazione del CPI. Non è possibile avere attivazioni multiple su diversi SRTPSP contemporaneamente.

Il Debitore ha la facoltà di cambiare in qualsiasi momento il proprio SRTPSP. Questo avviene effettuando un nuovo _enrolment_ presso il Service Provider subentrante (il “Nuovo SP”).

Il passaggio al nuovo SRTPSP è effettuato immediatamente.

## Flusso Operativo del Subentro

Il flusso del Subentro (denominato _Payer takeover flow_ nel protocollo tecnico) è avviato dal Nuovo Service Provider (NSP) del Debitore ed è gestito dal sistema centrale di PagoPA (l'Activation Service - AS).

### Avvio e Convalida

**1. Richiesta di Attivazione:** Il Nuovo Service Provider (NSP) invia il messaggio di attivazione (enrolment) a PagoPA, chiamando l'endpoint dedicato all'Activation Service (AS), già documentato, riceve un 409 con un otp .

&#x20;   ◦ Operazione API: POST /activations/takeover/{otp}.

&#x20;   ◦ Parametro: L'operazione è identificata come takeoverPayer.

**2. Validazione:** L'Activation Service convalida la richiesta e il _security token_ associato.

**3. Recupero Dati Pagatore:** L'AS riscatta l'OTP (One-Time Password) per recuperare il Codice Fiscale del Pagatore (fiscalCode - identificativo P009). Questo codice fiscale è utilizzato per cercare il Pagatore nel Database (DB) e recuperare le informazioni del Vecchio Service Provider (OSP).

### Finalizzazione Immediata

Una volta convalidata la richiesta, il passaggio avviene immediatamente:

1\. Disattivazione Vecchio SP: L'AS disattiva l'attivazione esistente del Pagatore associata al Vecchio Service Provider nel Database.

2\. Nuova Attivazione: L'AS crea una nuova riga di attivazione per il Pagatore nel Database, impostando lo stato su ACTIVE e associandola al Nuovo Service Provider.

3\. Tracciamento Storico: La nuova attivazione è collegata al record del Vecchio SP, garantendo una cronologia del subentro. Viene inoltre inserito un _takeover audit log_.

4\. Risposta di Successo al Nuovo SP: L'AS risponde al Nuovo Service Provider con lo stato 201 Created.

### Gestione del Vecchio Service Provider e Messaggistica Utente

A tutela della trasparenza e della corretta gestione dei messaggi pregressi, sono previsti due punti fondamentali:

1\. Notifica all'Utente: Prima del completamento del passaggio, sul canale del Debitore (Pagatore) deve essere visualizzato un messaggio informativo (_warning_), identico per tutti i SRTPSP, che avvisa l'utente dell'attivazione del nuovo SRTPSP e della contestuale disattivazione del preesistente SRTPSP.

2\. Notifica all'SRTSP Originario (OSP): Contestualmente all'aggiornamento, PagoPA (tramite l'AS) invia una notifica di disattivazione al Vecchio Service Provider.

&#x20;   ◦ Questa notifica è gestita attraverso un ciclo di notifica resiliente che prevede fino a 3 tentativi.

&#x20;   ◦ Se tutti i tentativi falliscono, il fallimento viene registrato in una tabella (failed\_takeover\_notification) per l'elaborazione _offline_ e la successiva ri-consegna.

D. Gestione delle SRTP Precedenti

In caso di subentro, le SRTP già trasmesse presso l'SRTPSP originario restano attive e disponibili fino alla chiusura del rapporto tra questo e l'utente.

PagoPA conserva l'indicazione della destinazione di recapito di ogni SRTP, garantendo che anche la messaggistica relativa a SRTP scambiate in precedenza (ad esempio, le richieste di cancellazione) sia gestita correttamente.

## Specifiche API per la Notifica di Subentro (per l'SRTPSP Originario)

Il Vecchio Service Provider (OSP), ovvero il sistema cliente che ha perso il controllo sul Debitore, deve esporre un endpoint specifico per ricevere la notifica di Subentro.

<table data-header-hidden><thead><tr><th valign="top"></th><th valign="top"></th><th valign="top"></th></tr></thead><tbody><tr><td valign="top">Dettaglio</td><td valign="top">Specifica</td><td valign="top">Riferimenti</td></tr><tr><td valign="top">Endpoint esposto dal Cliente (OSP)</td><td valign="top">POST /takeover</td><td valign="top"> </td></tr><tr><td valign="top">Obiettivo</td><td valign="top">Informare il Service Provider che non detiene più il controllo sull'utente specificato.</td><td valign="top"> </td></tr><tr><td valign="top">Operation ID</td><td valign="top">notifyUserTakeover</td><td valign="top"> </td></tr><tr><td valign="top">Payload della Richiesta</td><td valign="top">TakeoverNotification (JSON). Deve contenere i dettagli dell'operazione di subentro finalizzata.</td><td valign="top"> </td></tr><tr><td valign="top">Campi Obbligatori nel Payload</td><td valign="top">oldActivationId (UUID della vecchia attivazione); fiscalCode (Codice Fiscale del Pagatore P009); takeoverTimestamp (Timestamp in formato ISO 8601 UTC in cui il subentro è stato finalizzato).</td><td valign="top"> </td></tr><tr><td valign="top">Risposta di Successo Attesa</td><td valign="top">204 No Content (Successo. Notifica ricevuta e riconosciuta).</td><td valign="top"> </td></tr><tr><td valign="top">Risposta di Errore Comuni</td><td valign="top">400 Bad Request (Payload malformato) o 500 Internal Server Error (Errore interno del server del cliente).</td><td valign="top"> </td></tr></tbody></table>

Nota sulla sicurezza e l'identificazione: Il Codice Fiscale è usato come identificativo del Pagatore (P009) in questa fase

&#x20;
