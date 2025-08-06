# Integrazioni

PDND Interoperabilità è costituita di una piattaforma centrale (core) e una serie di integrazioni, previste nelle Linee Guida AgID.

## Signal Hub

Chiamato _Processo di distribuzione dei segnali di variazione_ nelle Linee Guida AgID (allegato 4), il Signal Hub permette ad un erogatore di inviare una notifica a PDND Interoperabilità quando un dato all'interno della propria base dati varia.&#x20;

Dall'altra parte, permette ai fruitori interessati a quel dato, di sapere in tempo reale che il dato è variato. Il fruitore potrà poi recuperare il dato aggiornato dall'e-service dell'erogatore.&#x20;

Anche in questo caso, i dati degli e-service non transitano mai attraverso l'infrastruttura di PDND Interoperabilità. Per maggiori informazioni, si veda la [guida dedicata](https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-signal-hub).

## Tracing

Fornisce supporto agli aderenti nel dimensionare correttamente la propria infrastruttura. Inoltre, consente a PDND Interoperabilità di monitorare l'andamento reale del traffico tra erogatori e fruitori, valutando l'efficacia della piattaforma stessa.

Sono gli aderenti che inviano a PDND Interoperabilità il tracciato relativo alle chiamate API effettuate o ricevute durante una giornata. Il tracciato include solamente il numero di chiamate effettuate o ricevute e lo status code relativo alla chiamata stessa.

L'uso del servizio è obbligatorio per gli aderenti, e maggiori informazioni sono disponibili nella [guida dedicata](https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-tracing).&#x20;

## Probing

Fornisce informazioni in tempo quasi reale sullo stato di salute delle API erogate attraverso gli e-service. Il servizio permette di sapere se un'API è attualmente disponibile oppure se ci sono problemi tecnici temporanei che ne inficiano il funzionamento. Comunemente è quella che è chiamata "Status page".

Il servizio di Probing non è ancora attualmente in produzione.
