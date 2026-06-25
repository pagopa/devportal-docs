# Processo di notifica con API B2B

PN fornisce un insieme di API che permettono l’integrazione dei sistemi gestionali della PA mittente con SEND per ottenere, dove necessario, la gestione automatica delle notifiche. Le API che permettono l’invio e gestione delle notifiche sono documentate [qui](https://developer.pagopa.it/send/api#/).

L'invio delle notifiche tramite API B2B si effettua in varie fasi:&#x20;

* nella prima fase si effettua l’upload degli allegati (atti, modelli di pagamento ed eventuali metadati), nella seconda fase si procede all’inoltro della richiesta di invio della notifica, fornendo tutte le informazioni necessarie, inclusi i riferimenti ai documenti precedentemente caricati in piattaforma e la loro hash SHA-256 calcolata dalla PA mittente ed utilizzata da SEND per confermare il contenuto del file allegato.&#x20;
* Se le informazioni fornite per la notifica sono sintatticamente corrette, SEND restituisce un identificativo temporaneo che verrà utilizzato per trasmettere alla PA l’esito delle ulteriori e successive verifiche.&#x20;
* A questo punto SEND verifica che tutti i file siano disponibili, abbiano formato PDF (firmati digitalmente) o JSON conforme allo schema (per i metadati dei modelli di pagamento F24). Verifica, inoltre, la validità dei CF prodotti dalla PA e dell’esistenza di un indirizzo fisico per ciascun destinatario e che siano utilizzabili come indirizzi per il recapito.&#x20;
* Qualora l’operazione di verifica abbia successo, viene generato lo IUN (Identificativo Univoco della Notifica) che viene restituito alla PA assieme all’identificativo temporaneo precedentemente generato. In caso contrario verrà inviato, assieme all’identificativo temporaneo, un codice di errore che indica il motivo del fallimento della verifica e il dettaglio dell'anomalia rilevata.&#x20;
* Dal momento della creazione con successo di una notifica, la PA riceverà aggiornamenti sullo stato della stessa attraverso un meccanismo di stream intelligente fornito da SEND. Ciascun aggiornamento di stato conterrà lo IUN della notifica alla quale si riferisce.

## Recupero documenti tramite API B2B

Per recuperare gli atti opponibili ai terzi o i documenti relativi alla notificazione analogica o digitale, la PA deve accedere alla timeline di una notifica attraverso il suo IUN e quindi scaricare i documenti attraverso i link forniti nella risposta.

## Annullamento notifiche tramite API B2B

La PA mittente può procedere all'annullamento di una notifica tramite l'utilizzo di API B2B. L' API che ne permette l’annullamento è documentata [qui](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/pagopa/pn-delivery/v2.1.1/docs/openapi/api-external-b2b-pa-bundle.yaml#/NotificationCancellation/notificationCancellation).
