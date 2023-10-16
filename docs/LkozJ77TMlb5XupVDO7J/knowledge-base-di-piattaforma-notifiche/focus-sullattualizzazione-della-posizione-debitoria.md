---
description: >-
  Approfondimento sull'attualizzazione delle spese di notifica di Piattaforma
  Notifiche
---

# Focus sull'attualizzazione della posizione debitoria

L'attualizzazione della posizione debitoria è un'operazione che permette di integrare le spese di notifica sostenute da Piattaforma Notifiche per la spedizione, al costo richiesto dall'atto spedito dalla PA Mittente verso il destinatario. Le spese di notifica variano in base al processo di spedizione eseguito per una notifica e possono subire variazioni nel tempo; pertanto sarà necessario richiamare il servizio **notificationPrice**, che restituisce il costo sostenuto per la spedizione **aggiornato all'istante in cui viene chiamato**, durante la fase di pagamento, ovvero dopo che il destinatario ha avuto accesso alla notifica e tenta di effettuare il pagamento.

### Descrizione del processo step-by-step

<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption><p>Diagramma del processo di attualizzazione delle spese di Notifica</p></figcaption></figure>

1. **Accesso Notifica**: il destinatario/delegato accede al dettaglio della notifica e clicca sul pulsante “Paga”
2. **Pagamento**: il destinatario/delegato viene mandato sul sito checkout di pagoPA passando i dati Codice Ente Creditore, Numero Avviso.
3. **Attualizzazione**: pagoPA nella fase di verifica e nella fase di attivazione chiede all’ente creditore di attualizzare l’importo
4. **Richiesta costo notifica**: l’ente creditore chiama Piattaforma Notifiche per conoscere il costo delle spese di notifica e aggiungerli all’importo dell’atto passando i dati Codice Ente Creditore, Numero Avviso (chiamata al servizio **notificationPrice**)

Per maggiori dettagli su questo processo e sull'interazione tra Partner PagoPA e Partner PND visualizzare il **Modello di integrazione di Piattaforma Notifiche Digitali** da qui:\
[https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/)

### Ottimizzazione del processo limitando le chiamate al servizio **notificationPrice** tramite analisi degli eventi da stream di timeline <a href="#ottimizzazioni" id="ottimizzazioni"></a>

E' possibile limitare le richieste di attualizzazione delle spese di notifica, utilizzando lo stream degli eventi di timeline per intercettare il momento nel quale il costo non subirà più variazioni, eseguendo l'operazione di attualizzazione in anticipo.&#x20;

Di seguito delle linee guida per eseguire questa ottimizzazione:

* **il costo della notifica non varia** dopo il perfezionamento della notifica (per presa visione o per decorrenza termini) a seguito degli eventi **REFINEMENT** e **NOTIFICATION\_VIEWED**, cioè dopo che la notifica è transitata in stato **EFFECTIVE\_DATE** o **VIEWED**.\
  **NOTA:** si evidenza che l'evento **NOTIFICATION\_VIEWED** non corrisponde automaticamente al Perfezionamento per presa visione, ma rappresenta solamente l'atto di presa visione della notifica da parte del destinatario. Il Perfezionamento per presa visione può essere attribuito **solamente** quando la presa visione dell'atto avviene **prima** del Perfezionamento per decorrenza termini(vedi:[https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/8hvzBYw259fYwQSqzmf6/\~/changes/15/knowledge-base-di-piattaforma-notifiche/focus-sul-perfezionamento-della-notifica](focus-sul-perfezionamento-della-notifica.md)).
* **il costo della notifica può variare**:
  * Nel **workflow digitale** solo in caso di fallimento di tutti gli invii su domicilio digitale e viene inviata una raccomanda semplice.
  * Nel **workflow cartaceo** viene attribuito un primo costo per la spedizione associato al primo tentativo di invio della raccomandata AR/890. In caso di fallimento del primo tentativo potrebbe essere attribuito un altro costo, legato al secondo tentativo di invio a seguito del reperimento di un altro indirizzo attraverso l'indagine del postino o dal recupero dai registri nazionali.

E' possibile quindi ottimizzare il processo descritto al punto "**4 Richiesta costo notifica**", eseguendo l’attualizzazione delle spese di notifica chiamando il servizio **noificationPrice** al verificarsi di uno degli eventi descritto sopra (**REFINEMENT,NOTIFICATION\_VIEWED**) ed anticipare quindi questa operazione a prima che il destinatario effettui il tentativo di pagamento.\
**NOTA:** Il Partner pagoPA in questo caso però deve essere avvisato del fatto che è stata completata in anticipo l'operazione di attualizzazione delle spese di notifica, per allineare i propri terminali.
