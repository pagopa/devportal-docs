# Invio di un avviso TARI a un cittadino e gestione del pagamento

Questo caso d'uso illustra il ciclo di vita completo di una richiesta di pagamento, dall'attivazione del servizio da parte di un cittadino fino alla riconciliazione finale dopo il pagamento. Lo scenario coinvolge tre attori principali:

* Laura, una cittadina.
* La sua banca, che agisce come Service Provider del Debitore (PSP).
* Il Comune di Milano, che agisce come Ente Creditore.

L'obiettivo è mostrare come le diverse componenti del servizio RTP collaborano per creare un'esperienza fluida, digitale e integrata, basata sulle API RESTful definitive.

## **Fase 1: Attivazione del Servizio (Enrollment e Activation)**

Laura, all'interno della sua app di home banking, decide di attivare il servizio per ricevere le notifiche di pagamento da parte della Pubblica Amministrazione.

1. **Azione del Cittadino:** Laura fornisce il suo consenso esplicito a ricevere le richieste di pagamento (RTP) sul canale della sua banca.
2. **Azione del Service Provider (la banca):** I sistemi della banca registrano la volontà di Laura. Subito dopo, invocano l'endpoint `POST /activations` delle API di PagoPA, comunicando con un semplice payload JSON che Laura (identificata dal suo Codice Fiscale) è ora attiva sul loro canale per la ricezione delle SRTP.

_Per i dettagli tecnici di questa operazione, consulta il tutorial:_ [Come attivare un utente alla ricezione delle SRTP](../tutorial/psp/come-attivare-un-utente-alla-ricezione-delle-srtp.md).

## **Fase 2: Invio della Richiesta di Pagamento (SRTP)**

Qualche settimana dopo, il Comune di Milano emette la rata annuale della TARI per Laura.

1. **Azione dell'Ente Creditore:** Il Comune genera la Posizione Debitoria per Laura nel sistema di gestione degli avvisi di PagoPA.
2. **Azione del Partner Tecnologico dell'EC:**
   * Il sistema del partner (o PagoPA stessa, agendo come SP del Creditore) interroga il registro e scopre che Laura è attiva al servizio tramite la sua banca.
   * Prepara un semplice oggetto JSON (`CreateRtp`) con i dati dell'avviso (Numero Avviso, importo, oggetto, scadenza) e lo invia tramite una chiamata sincrona all'endpoint `POST /rtps`.
   * È la piattaforma PagoPA che si occupa di tradurre questa richiesta nello standard SRTP e di inoltrarla alla banca di Laura. Il partner non deve più costruire il complesso messaggio `pain.013`.

_Per i dettagli tecnici di questa operazione, consulta il tutorial:_ [Come inviare una richiesta di pagamento](../tutorial/ec/come-inviare-una-richiesta-di-pagamento.md).

## **Fase 3: Ricezione e Accettazione da parte del Cittadino**

1. **Azione del Service Provider (la banca):** La banca di Laura riceve la notifica e invia una notifica push a Laura.
2. **Azione del Cittadino:** Laura apre la sua app e visualizza la richiesta di pagamento TARI precompilata. Verifica i dati e "Accetta" la richiesta.
3. **Azione del Service Provider (la banca):** A seguito dell'azione di Laura, la banca invia una notifica di stato asincrona (`pain.014`) all'endpoint di callback del mittente, comunicando che la richiesta è stata accettata.

_Per i dettagli tecnici di questa operazione, consulta il tutorial:_ [Come inviare una notifica di stato](../tutorial/psp/come-inviare-una-notifica-di-stato.md).

## **Fase 4: Pagamento e Riconciliazione (Cancellazione)**

Il giorno della scadenza, Laura paga l'avviso TARI direttamente dalla sua app tramite il flusso pagoPA.

1. **Azione del Cittadino:** Laura autorizza il pagamento.
2. **Azione di PagoPA e dei PSP:** Il pagamento viene processato e la Posizione Debitoria di Laura viene aggiornata come "Pagata".
3. **Azione di Riconciliazione (Cancellazione SRTP):** Poiché l'avviso è stato pagato, la richiesta RTP originale non è più valida. Per riconciliare lo stato, il sistema del Partner Tecnologico dell'EC effettua una chiamata sincrona all'endpoint `POST /rtps/{rtpId}/cancel`, dove `{rtpId}` è l'identificativo della richiesta originale. Questa singola chiamata, che non richiede un corpo del messaggio, annulla la richiesta con esito immediato. Di conseguenza, il PSP di Laura aggiorna lo stato nell'app, mostrando la richiesta come "Pagata" o "Annullata" e impedendo ulteriori azioni.

_Per i dettagli tecnici di questa operazione, consulta il tutorial:_ [Come cancellare una richiesta di pagamento](../tutorial/ec/come-cancellare-una-richiesta-di-pagamento.md).

## **Conclusione**

Il ciclo si è concluso con successo, sfruttando API moderne e semplici. Laura ha ricevuto e pagato il suo avviso in modo fluido, il Comune ha ottimizzato l'incasso e i partner tecnologici hanno interagito tramite interfacce RESTful standard, senza doversi preoccupare della complessità dei formati sottostanti.
