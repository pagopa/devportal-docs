# v. 1 — in dismissione

PDND Interoperabilità espone un set di api per effettuare verifiche in modalità machine to machine. La v.1 offre operazioni unicamente in lettura, ed una prima versione di un canale degli eventi, attraverso i quali gli aderenti possono rimanere aggiornati sui cambi di stato che avvengono sulla piattaforma per le componenti di loro interesse (es. e-service che erogano, richieste di fruizione che ricevono, ecc.).

## Obiettivi

* Dare la possibilità agli erogatori di portare a termine eventuali verifiche necessarie all'erogazione degli e-service ai fruitori;
* permettere agli aderenti di automatizzare parte del loro flusso sulla base delle informazioni reperibili.

## Filosofia

Le api sono pensate per essere il più generico ed agnostico possibile. Per questa ragione, ogni risposta restituisce gli id rilevanti degli altri oggetti ai quali è collegata, attraverso i quali è possibile fare ulteriori chiamate all'API per recuperare le informazioni di interesse.

## Dove si trovano?

L'URL del servizio e la specifica OpenAPI dell'interfaccia sono reperibili all'interno della sezione _**Fruizione > I tuoi client API interop**_, all'interno di qualsiasi client machine to machine venga creato.

{% hint style="warning" %}
La URL del server che eroga le api è diverso per ogni ambiente (collaudo, attestazione, produzione).
{% endhint %}

## Canale degli eventi

Tra gli endpoint delle proprie api, PDND Interoperabilità ne offre anche uno attraverso il quale l'aderente può ottenere una lista di eventi. Questi eventi rappresentano i cambiamenti di stato occorsi all'interno dell'infrastruttura. Possono essere usati per ottenere aggiornamenti tempestivi e impostare le proprie automazioni.

Il modello  prevede che l'erogatore si occupi di richiedere gli eventi di suo interesse in polling.

{% hint style="info" %}
All’erogatore è consentito di applicare una politica di polling a intervalli non inferiori a un minuto. È prevista una persistenza degli eventi non superiore a due mesi.
{% endhint %}

Ogni evento è identificato da un numero d’ordine crescente (id dell'evento). L'aderente può richiedere tutti gli eventi a partire da un determinato `eventId`, specificando la dimensione della paginazione, cioè il numero di eventi da restituire (`limit`) .&#x20;

L'aderente può quindi fare caching dei risultati ottenuti, e scaricare ulteriori eventi a partire dall'ultimo `eventId` ottenuto.

{% hint style="info" %}
Gli eventi coprono i cambi di stato sulle finalità (`purpose`), sulle richieste di fruizione (`agreement`) e sugli e-service (`eservices`).
{% endhint %}
