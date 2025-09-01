---
argomenti_correlati:
- /docs/srtp/attivazione
- /docs/srtp/guida-tecnica/cancellazione-richieste
funzione: casi-duso
livello: intermedio
prodotto:
  nome: PagoPA SRTP
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': HowTo
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  description: Descrive il percorso completo di una richiesta di pagamento SRTP, dalla
    generazione da parte di PagoPA fino alla ricezione, pagamento e riconciliazione
    finale.
  keywords:
  - SRTP
  - SEPA Request-to-Pay
  - flusso di pagamento
  - pain.013
  - pain.014
  - callback
  name: Il Flusso Operativo Completo del Servizio SRTP
  step:
  - '@type': HowToStep
    name: 'Prerequisito: Attivazione dell''Utente'
    text: Il processo richiede che l'utente finale abbia preventivamente acconsentito
      a ricevere notifiche SRTP dal suo Service Provider.
  - '@type': HowToStep
    name: Invio del Messaggio SRTP
    text: PagoPA, per conto dell'Ente Creditore, identifica una nuova posizione debitoria,
      costruisce un messaggio pain.013 e lo invia al Service Provider del Debitore.
  - '@type': HowToStep
    name: Ricezione e Presentazione della Richiesta
    text: Il Service Provider del Debitore riceve la richiesta, la valida e la presenta
      all'utente finale nel suo canale digitale (es. home banking).
  - '@type': HowToStep
    name: Risposta dell'Utente e Notifica di Stato
    text: L'utente accetta o rifiuta la notifica. Il Service Provider comunica la
      decisione a PagoPA inviando un messaggio di stato pain.014 a un endpoint di
      callback.
  - '@type': HowToStep
    name: Pagamento dell'Avviso
    text: In caso di accettazione, l'utente procede al pagamento tramite i circuiti
      standard di pagoPA. Il pagamento non fa tecnicamente parte dello schema SRTP.
  - '@type': HowToStep
    name: Riconciliazione tramite Cancellazione
    text: Se il pagamento avviene su un canale diverso, PagoPA invia una richiesta
      di cancellazione al Service Provider originale per invalidare la notifica e
      chiudere il ciclo.
status: pubblicato
tecnologia:
- SRTP
- pain.013
- pain.014
- API REST
utente:
  ruolo: fruitore
  tag:
  - flusso operativo
  - SRTP
  - callback
  - riconciliazione
  - pain.013
  tipo_ente: partner_tecnologico
---

# Il Flusso Operativo Completo

Per comprendere come interagiscono le diverse componenti del servizio, è utile seguire il percorso completo di una richiesta di pagamento, dalla sua origine fino alla sua conclusione. Il flusso coinvolge l'Ente Creditore, la piattaforma PagoPA (che agisce come Service Provider del Creditore e gestore del repository), il Service Provider del Debitore e l'utente finale.

## Prerequisito: Attivazione dell'Utente

L'intero processo può avvenire solo se l'utente finale (Debitore) ha preventivamente dato il proprio consenso a ricevere le notifiche SRTP tramite il proprio Service Provider, come descritto nel processo di **Attivazione**.

## Invio del Messaggio SRTP

La piattaforma PagoPA, agendo come Service Provider per l'Ente Creditore, identifica la nuova posizione debitoria. Il sistema verifica se il Debitore associato a quell'avviso ha un'attivazione RTP valida. In caso affermativo, PagoPA:

1. Costruisce il messaggio di richiesta di pagamento (`pain.013`) conforme allo standard SRTP.
2. Inoltra la richiesta al Service Provider del Debitore corretto, utilizzando le informazioni di raggiungibilità presenti nel proprio registro.

## Ricezione e Presentazione all'Utente (Azione del SP Debitore)

Il Service Provider del Debitore riceve la richiesta di pagamento tramite l'endpoint `POST /sepa-request-to-pay-requests`. A questo punto, il suo compito è:

1. Validare la richiesta in ingresso.
2. Processare i dati contenuti nel messaggio.
3. **Presentare la richiesta di pagamento all'utente finale** all'interno del proprio canale digitale (es. home banking), mostrando chiaramente tutti i dettagli come l'importo, la scadenza e l'oggetto del pagamento.

## Risposta dell'Utente e Notifica di Stato (Azione del SP Debitore)

L'utente visualizza la notifica e decide se accettarla o rifiutarla. Il Service Provider del Debitore ha il compito di comunicare questa scelta. Per farlo, invia una notifica di stato asincrona, tramite una chiamata all'endpoint di **callback** del mittente, contenente un messaggio `pain.014` con l'esito della richiesta.

## Pagamento dell'Avviso

Se l'utente accetta la richiesta, può procedere al pagamento. È importante notare che il pagamento dell'avviso avviene attraverso i normali circuiti di pagoPA e non è tecnicamente parte dello schema SRTP. La notifica RTP agisce come un "promemoria intelligente" che facilita questa operazione.

## Riconciliazione tramite Cancellazione

Quando il pagamento dell'avviso avviene tramite un canale diverso da quello che ha ricevuto la notifica SRTP, (ad esempio, se l'utente riceve la notifica sull'app della sua banca, ma poi paga lo stesso avviso presso un altro prestatore), una volta registrato il pagamento, PagoPA invia una richiesta di cancellazione (`POST /sepa-request-to-pay-requests/{id}/cancellation-requests`) al Service Provider originale per invalidare la notifica. Quest'ultimo, ricevuta la cancellazione, aggiorna lo stato della richiesta nella propria applicazione, chiudendo il ciclo.