---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/t7UU6OMWc3V12nDNAZlV/per-iniziare/flusso-operativo-completo
---

# Il Flusso Operativo Completo

Il Flusso Operativo Completo prevede:

* L'Ente Creditore aderente alla piattaforma pagoPA,&#x20;
* PagoPA (che agisce come Service Provider del Creditore e gestore del repository)
* Il Service Provider del Debitore
* l'utente finale.

## Prerequisito: Attivazione dell'Utente

L'intero processo può avvenire solo se l'utente finale (Debitore) ha preventivamente dato il proprio consenso a ricevere le notifiche SRTP tramite il proprio Service Provider, come descritto nel processo di **Attivazione**.&#x20;

{% hint style="info" %}
È onere del Service Provider dell'Ente Debitore fornire all'utente finale (Debitore) informazioni chiare sulle modalità di revoca del consenso.
{% endhint %}

## Invio del Messaggio SRTP

PagoPA S.p.a., agendo come Service Provider per l'Ente Creditore, identifica la nuova posizione debitoria. Il sistema verifica se il Debitore associato a quell'avviso ha un'attivazione RTP valida. In caso affermativo, PagoPA S.p.A.:

1. Codifica un avviso di pagamento (`pain.013`) conforme allo standard SRTP.
2. Inoltra la richiesta al Service Provider del Debitore corretto, utilizzando le informazioni di raggiungibilità presenti nel proprio registro.

## Ricezione e Presentazione all'Utente (Azione del SP Debitore)

Il Service Provider del Debitore riceve la richiesta di pagamento tramite l'endpoint `POST /sepa-request-to-pay-requests`. A questo punto, il suo compito è:

1. Validare la richiesta in ingresso.
2. Processare i dati contenuti nel messaggio.
3. **Presentare la richiesta di pagamento all'utente finale** all'interno del proprio canale digitale (es. home banking), mostrando chiaramente tutti i dettagli quali l’Ente Creditore beneficiario,l'importo, la scadenza e l'oggetto del pagamento.

## Risposta dell'Utente e Notifica di Stato (Azione del SP Debitore)

L'utente visualizza il messaggio e decide se accettarla o rifiutarla. Il Service Provider del Debitore ha il compito di comunicare questa scelta al Service Provider del Creditore. Per farlo, invia un messaggio di stato asincrono, tramite una chiamata all'endpoint di **callback** del mittente, contenente un messaggio `pain.014` con l'esito della richiesta.



## Riconciliazione tramite Cancellazione

Quando il pagamento dell'avviso avviene tramite un canale diverso da quello che ha ricevuto il messaggio SRTP, (ad esempio, se l'utente riceve la notifica sull'app della sua banca, ma poi paga lo stesso avviso presso un altro prestatore), una volta registrato il pagamento, PagoPA invia una richiesta di cancellazione (`POST /sepa-request-to-pay-requests/{id}/cancellation-requests`) al Service Provider originale per invalidare il messaggio. Quest'ultimo, ricevuta la cancellazione, aggiorna lo stato della richiesta nella propria applicazione, chiudendo il ciclo.
