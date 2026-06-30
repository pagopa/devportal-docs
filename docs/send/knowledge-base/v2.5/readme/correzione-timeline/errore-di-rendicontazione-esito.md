# Errore di rendicontazione esito

L’iter notificatorio di SEND, così come le informazioni presenti nella timeline, si basano sui metadati forniti dai recapitisti. Tuttavia, le informazioni rilevanti ai fini del perfezionamento della notifica sono esclusivamente quelle contenute nelle dematerializzazioni degli esiti fornite dai recapitisti. Quando i metadati trasmessi dai recapitisti non corrispondono alle informazioni riportate nelle dematerializzazioni degli esiti, questi verranno allineati.

## Caso: esito irreperibilità 1° tentativo errato

### Notifica senza 2° tentativo

La notifica si è perfezionata per irreperibilità al primo tentativo (il secondo tentativo non è stato effettuato per mancanza di un indirizzo differente dal primo sull'indagine dell'addetto al recapito o recuperato dai registri pubblici).

In questo caso:

* vengono invalidati tutti gli eventi dell'invio cartaceo e quelli successivi di perfezionamento.
* sono acquisiti i nuovi esiti, per esempio relativi alla compiuta giacenza e la notifica si perfeziona per decorrenza termini.

La timeline della notifica prima della correzione è la seguente

<figure><img src="../../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure>

Nella timeline viene aggiunto un elemento&#x20;

<pre class="language-json"><code class="lang-json">{
<strong> "elementId": "NOTIFICATION_TIMELINE_REWORKED.IUN_HKQP-TYHT-QNZN-202602-Q-1.RECINDEX_0.ATTEMPT_0.REWORK_0",
</strong><strong> ...
</strong> "category": "NOTIFICATION_TIMELINE_REWORKED",
 "details": {
  "recIndex": 0,
  "sentAttemptMade": 0,
  "invalidatedTimelineAndStatusHistory": [
    { "status": "DELIVERING",
      "relatedTimelineElements": [
      {}
      ]
    },
    { "status": "UNREACHABLE",
      "relatedTimelineElements": [
      {}
      ]
    },
    { "status": "EFFECTIVE_DATE",
      "relatedTimelineElements": [
      {}
      ]
    },
   {"elementId": "SEND_ANALOG_PROGRESS.IUN_HKQP-TYHT-QNZN-202602-Q-1.RECINDEX_0.ATTEMPT_0.IDX_2",
    ..
   },
   {"elementId": "SEND_ANALOG_PROGRESS.IUN_HKQP-TYHT-QNZN-202602-Q-1.RECINDEX_0.ATTEMPT_0.IDX_3",
    ..
   },
   {"elementId": "SEND_ANALOG_PROGRESS.IUN_HKQP-TYHT-QNZN-202602-Q-1.RECINDEX_0.ATTEMPT_0.IDX_4",
    ..
   },
   SEND_ANALOG_FEEDBACK.IUN_HKQP-TYHT-QNZN-202602-Q-1.RECINDEX_0.ATTEMPT_0
   PREPARE_ANALOG_DOMICILE.IUN_HKQP-TYHT-QNZN-202602-Q-1.RECINDEX_0.ATTEMPT_1
   SEND_ANALOG_DOMICILE.IUN_HKQP-TYHT-QNZN-202602-Q-1.RECINDEX_0.ATTEMPT_1
   SEND_ANALOG_PROGRESS.IUN_HKQP-TYHT-QNZN-202602-Q-1.RECINDEX_0.ATTEMPT_1.IDX_1
   
   
</code></pre>

### Caso con 2° tentativo effettuato

In questo caso la notifica ha effettura un primo tentativo di spedizione con esito **irreperibilità (KO)** e un secondo tentativo con esito Consegnato (OK), ma la scansione del primo tentativo indica una **compiuta giacenza (OK)**&#x20;

**Risultato atteso:**

Invalidati tutti gli eventi relativi al primo, al secondo tentativo e alla irreperibilità, vengono riacquisiti gli eventi relativi al primo tentativo e la notifica si perfeziona dopo la compiuta giacenza sul primo tentativo. (il secondo tentativo è rimosso e non più presente dopo la correzione)

## Caso: esito di consegna 1° tentativo errato

In questo caso una notifica con il primo tentativo di spedizione rendicontato con esito OK (es: compiuta giacenza) in cui la scansione della cartolina riporta una **irreperibilità (KO).**

In questo caso:

* vengono invalidati tutti gli eventi dell'invio della raccomandata con esito positivo di compiuta giacenza e quelli successivi di perfezionamento.
* sono acquisiti i nuovi esiti relativi all’irreperibilità
* dopo il KO sul primo tentativo viene avviato un secondo tentativo che si conclude con esito **consegnata (OK)**.



## Caso: esito irreperibilità 1° tentativo errato&#x20;

