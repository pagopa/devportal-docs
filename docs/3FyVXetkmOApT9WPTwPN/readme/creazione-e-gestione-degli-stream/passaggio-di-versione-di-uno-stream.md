---
description: >-
  Questa pagina descrive la procedura operativa per aggiornare uno stream dalla
  versione d'origine all'ultima versione disponibile.
---

# Passaggio di versione di uno stream

All'aggiornamento di versione di uno stream non è possibile. Se si vuole passare ad una versione più recente di stream, per recuperare i nuovi stati/eventi mancanti nella versione attuale, è necessario creare un nuovo stream utilizzando di seguenti passaggi:

1. **Identificazione Stream Originale**: È necessario identificare lo _streamId_ dello stream che si vuole aggiornare alla nuova versione. Lo _streamId_ è reperibile tramite l'API   \
   "Elenca stream di eventi" (es: GET /delivery-progresses/streams)
2. **Creazione nuovo stream**: creare un nuovo stream utilizzando l’ultima versione dell’API di creazione (es: POST /delivery-progresses/v2.8/streams) indicando col parametro _replaceStreamId_ il valore _streamId_ dello stream originale recuperato al passaggio precedente.\
   In risposta alla chiamata viene restituito il nuovo stream .\
   Contestualmente lo stream precedente (identificato da _replaceStreamId)_ viene disabilitato e non riceverà più eventi, ma rimarrà accessibile per la lettura degli eventi per un periodo di 14 giorni.
3. **Lettura ad esaurimento degli eventi sullo stream precedente**: al fine di recuperare tutti gli eventi è necessario continuare la lettura del vecchio stream finché il valore di retryAfter non restituisce un valore diverso da 0 per un tempo adeguato (es: 5 minuti o 5 chiamate successive). \
   Al termine dell'operazione di lettura di tutti gli eventi si può procedere con la rimozione dello stream, che comunque viene eliminato automaticamente dopo 14 giorni dalla sua disabilitazione.
4. **Lettura degli eventi sul nuovo stream**: attivare la lettura degli eventi sul nuovo stream avendo l'accortezza di indicare _lastEventId_ vuoto per la prima lettura e la consapevolezza che potrebbero esserci, in casi sporadici, eventi duplicati sullo stream nuovo, già recuperati sul vecchio.
