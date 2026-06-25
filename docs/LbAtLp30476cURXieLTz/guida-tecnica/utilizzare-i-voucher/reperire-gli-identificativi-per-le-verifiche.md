# Reperire gli identificativi per le verifiche

Per effettuare alcune delle verifiche previste su PDND Interoperabilità, è necessario che l'erogatore sia a conoscenza di alcuni id, relativi ad alcune componenti.

Questi identificativi unici sono diversi per ogni ambiente, cioè non sono gli stessi in ambiente di collaudo e di produzione.

`producerId`, `eserviceId`, `descriptorId` e l'audience (`aud`) sono reperibili attraverso l'interfaccia del back office nella scheda e-service di erogazione (_**Erogazione > I tuoi e-service**_).

`purposeId` e `consumerId` si trovano invece nella scheda finalità di erogazione (_**Erogazione > Finalità**_).&#x20;

Tutti i parametri sono disponibili anche sulle [API esposte da PDND Interoperablità](../api-esposte-da-pdnd-interoperabilita/).&#x20;

Gli id non cambiano nel tempo e non contengono informazioni sensibili. Si consiglia quindi di fare caching per una maggiore efficienza nella verifica, ed eventualmente sfruttare le [notifiche di aggiornamento](../api-esposte-da-pdnd-interoperabilita/#canale-di-notifica) sull'API per recepire eventuali modifiche.
