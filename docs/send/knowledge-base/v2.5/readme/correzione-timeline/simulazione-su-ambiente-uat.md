# Simulazione su ambiente UAT

In questa pagina sono descritte le sequenze da utilizzare nel campo `address` per simulare i casi di test sull'ambiente di collaudo UAT di SEND.

Per ogni caso di test vengono allegati i file in formato json della notifica, compresa la timeline, al fine di verificare gli eventi che vengono generati dalla correzione che sono anche presenti sullo stream.&#x20;

Tra gli allegati è presente anche la **risposta delle API delle versioni precedenti** per evidenziare che per i client che non aggiornano la versione NON verrà emesso nell'output l'elemento di timeline con category `NOTIFICATION_TIMELINE_REWORKED`, ma saranno comunque inviati gli eventi di rettifica identificati da suffisso `_REWORK`.

Lo stesso evento di timeline con category `NOTIFICATION_TIMELINE_REWORKED` sarà esposto nella versione degli stream V29 mentre non nelle precedenti, comunque anche per le versioni precedenti saranno sempre presenti gli eventi di rettifica identificati da suffisso `_REWORK`.&#x20;

## Errore di stampa e/o imbustamento

### Caso 1 - Sequenza @FAIL-DISCOVERY\_AR\_IRR\_D

Questa sequenza simula il seguente caso di test:

* la notifica si perfeziona per irreperibilità al 2° tentativo di invio cartaceo (come conseguenza del 1° invio con esito negativo)
* viene rilevato un errore nella stampa relativa al 1° invio
* viene attivata la correzione di timeline del 1° invio
* la correzione produce
  * l’invalidazione degli stati e degli eventi del 1° invio e successivi
  * un nuovo 1° invio con esito irreperibilità
  * un nuovo 2° invio con una consegna
  * il perfezionamento per decorrenza termini

#### Allegati&#x20;

{% file src="../../.gitbook/assets/NMDX-NVHP-UEZE-202606-Y-1 (1).json" %}
Notifica in formato json prima della correzione
{% endfile %}

{% file src="../../.gitbook/assets/NMDX-NVHP-UEZE-202606-Y-1_REWORKED.json" %}
Notifica in formato json dopo la correzione con versione api V28
{% endfile %}

{% file src="../../.gitbook/assets/NMDX-NVHP-UEZE-202606-Y-1_v27.json" %}
Notifica in formato json dopo la correzione con versione api V27 (non riporta l'elemento con la category `NOTIFICATION_TIMELINE_REWORKED`)
{% endfile %}

### Caso 2 - Sequenza @FAIL\_IRREP\_RESTART\_1\_CONS\_AT1\_AR

Questa sequenza simula il seguente caso di test:

* la notifica si perfeziona per irreperibilità al 2° tentativo di invio cartaceo (come conseguenza del 1° invio con esito negativo).
* viene rilevato un errore nella stampa relativa al 1° invio
* viene attivata la correzione di timeline del 1° invio
* la correzione produce
  * l’invalidazione degli stati e degli eventi del 1° invio e successivi
  * un nuovo 1° invio che termina con una consegna&#x20;
  * il perfezionamento per decorrenza termini

#### Allegati&#x20;

{% file src="../../.gitbook/assets/QKEK-RWNX-TAHE-202606-K-1.json" %}
Notifica in formato json prima della correzione
{% endfile %}

{% file src="../../.gitbook/assets/QKEK-RWNX-TAHE-202606-K-1_REWORKED.json" %}
Notifica in formato json dopo la correzione con versione api V28
{% endfile %}

{% file src="../../.gitbook/assets/QKEK-RWNX-TAHE-202606-K-1_v27.json" %}
Notifica in formato json dopo la correzione con versione api V27 (non riporta l'elemento con la category `NOTIFICATION_TIMELINE_REWORKED`)
{% endfile %}



### Caso 3 - Sequenza @FAIL\_IRREP\_RESTART\_1\_CONS\_AT2\_AR

Questa sequenza simula il seguente caso di test:

* la notifica si perfeziona per irreperibilità al 2° tentativo di invio cartaceo (come conseguenza del 1° invio con esito negativo)
* viene rilevato un errore nella stampa del 2° invio
* la correzione produce&#x20;
  * l’invalidazione degli stati e degli eventi del 2° invio e successivi
  * un nuovo 2° invio che termina con una consegna&#x20;
  * il perfezionamento per decorrenza termini

#### Allegati&#x20;

{% file src="../../.gitbook/assets/XQJA-JYMN-KRYR-202606-N-1_REWORKED.json" %}
Notifica in formato json prima della correzione
{% endfile %}

{% file src="../../.gitbook/assets/XQJA-JYMN-KRYR-202606-N-1.json" %}
Notifica in formato json dopo la correzione con versione api V28
{% endfile %}

{% file src="../../.gitbook/assets/XQJA-JYMN-KRYR-202606-N-1_v27.json" %}
Notifica in formato json dopo la correzione con versione api V27 (non riporta l'elemento con la category `NOTIFICATION_TIMELINE_REWORKED`)
{% endfile %}

### Caso 4 - Sequenza @FAIL\_NOAT2\_RESTART\_1\_CONS\_AT1\_AR

Questa sequenza simula il seguente caso di test:

* la notifica si perfeziona per irreperibilità al 1° tentativo di invio cartaceo (il 2° invio non è stato effettuato per indirizzo non trovato sui registri nazionali).
* viene rilevato un errore nella stampa del 1° invio
* la correzione produce&#x20;
  * l’invalidazione degli stati e degli eventi del 1° invio e successivi
  * un nuovo 1° invio che termina con una consegna
  * il perfezionamento per decorrenza termini

#### Allegati&#x20;

{% file src="../../.gitbook/assets/UJRX-APEQ-UEYZ-202606-R-1_REWORKED.json" %}
Notifica in formato json prima della correzione
{% endfile %}

{% file src="../../.gitbook/assets/UJRX-APEQ-UEYZ-202606-R-1.json" %}
Notifica in formato json dopo la correzione con versione api V28
{% endfile %}

{% file src="../../.gitbook/assets/UJRX-APEQ-UEYZ-202606-R-1_v27.json" %}
Notifica in formato json dopo la correzione con versione api V27 (non riporta l'elemento con la category `NOTIFICATION_TIMELINE_REWORKED`)
{% endfile %}



