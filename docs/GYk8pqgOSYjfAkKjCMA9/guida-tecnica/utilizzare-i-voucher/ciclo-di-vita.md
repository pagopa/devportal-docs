# Ciclo di vita

Dal punto di vista tecnico, l'interazione si articola in alcuni passaggi, che sono di fatto una variazione sul tema rispetto al flusso standard di richiesta e verifica di un voucher. In particolare:&#x20;

1. **il fruitore costruisce la client assertion**
2. **il fruitore richiede un voucher a PDND Interoperabilità**: il fruitore inoltra a PDND Interoperabilità la richiesta per ottenere un voucher sulla base della client assertion
3. **PDND Interoperabilità restituisce un voucher al fruitore**: PDND Interoperabilità rilascia un voucher al fruitore&#x20;
4. **il fruitore fa una richiesta di dati all'erogatore**: il fruitore invia quindi una richiesta all'erogatore, inserendo il voucher di PDND Interoperabilità nell'header autorizzativo `Authorization` secondo il flusso standard.&#x20;
5. **l'erogatore effettua le verifiche standard**: l'erogatore estrae il voucher rilasciato da PDND Interoperabilità dall'header `Authorization` ed effettua le sue verifiche, come da flusso standard;

{% hint style="warning" %}
**NB:** è fatto divieto di inserire all'interno delle issue Github pubbliche le proprie client assertion o qualsiasi altro materiale di natura potenzialmente riservata o sensibile.\
Le issue che contengono informazioni potenzialmente sensibili potranno essere rimosse senza preavviso dagli amministratori.
{% endhint %}

L'intero ciclo di vita dei voucher si compone di una serie di interazioni _machine to machine_.

## Client assertion

Il fruitore deve costruire una _client assertion_ valida e firmarla con la propria chiave privata (che deve essere l'omologa della chiave pubblica depositata sul client su PDND Interoperabilità). &#x20;

## Richiesta di un voucher

L'aderente costruisce una client assertion e la firma con una chiave privata la cui omologa pubblica è nota a PDND Interoperabilità.&#x20;

### Richiesta di un voucher spendibile presso le API di Interoperabilità

Il secondo passaggio è chiamare il server autorizzativo di PDND Interoperabilità con la client assertion per ottenerne in cambio un voucher spendibile presso l'API di PDND Interoperabilità (ossia un token valido). L'URL dell'endpoint cambia in funzione dell'ambiente e sarà chiaramente visibile sull'interfaccia all'interno del back office. L'endpoint andrà chiamato con alcuni parametri in body:

* `client_id`: di nuovo il _clientId_ usato nell'assertion;
* `client_assertion`: il contenuto dell'asserzione firmata nel primo passaggio;
* `client_assertion_type`: il formato della client assertion, come indicato in RFC (sempre `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`);
* `grant_type`_:_ la tipologia di flusso utilizzato, come indicato in RFC (sempre `client_credentials`).

Se tutto è impostato correttamente, PDND Interoperabilità risponderà con un voucher valido all'interno del body della risposta alla proprietà `access_token`. Sempre nella risposta, sarà contenuta anche la durata di validità del token in secondi (es. `"expires_in": 600` indica un token con validità 10 minuti, 10 \* 60 secondi = 600).

Il token andrà inserito nell'header di tutte le chiamate successive verso le API gateway di PDND Interoperabilità come header `Authorization: Bearer`.

### Richiesta di un voucher spendibile per e-service

\[Manca]

## Richiedere dati non standard&#x20;

L'erogatore può aver necessità di ottenere informazioni che non fanno parte dei campi standard previsti da PDND Interoperabilità per poter concedere l'accesso a un e-service ai fruitori. Un esempio può essere l'indirizzo IP del chiamante, oppure informazioni relative all'operatore che sta effettuando la richiesta.

Per queste casistiche è previsto che:

* queste informazioni sia scambiate direttamente tra il fruitore e l'erogatore, senza che PDND Interoperabilità ne sia a conoscenza
* PDND Interoperabilità agisca da notaio in questo processo, poiché il fruitore deve aver depositato su PDND Interoperabilità una traccia di questi attributi

Per maggiori informazioni rimandiamo alla [documentazione di AgID sui pattern di sicurezza](https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2023/05/23/aggiornati-i-pattern-sicurezza-linee-guida-sullinteroperabilita-tecnica-pa).&#x20;

{% hint style="info" %}
Per poter vedere il "Documento operativo - Pattern di sicurezza" e relativi esempi contenuti nell'allegato "Linee guida sull’interoperabilità tecnica delle Pubbliche Amministrazioni" è necessario che lo stesso venga scaricato sul proprio pc e aperto con l'applicazione Adobe Acrobat. \
In questo modo si avrà un indice di tutti gli allegati contenuti nel document come da screen.

<img src="../../.gitbook/assets/Screenshot 2024-05-20 alle 10.17.36.png" alt="" data-size="original">
{% endhint %}

### Indicazioni architetturali

Per ogni verifica di voucher, sarebbe necessario ottenere la chiave pubblica corrispondente al `kid` da PDND Interoperabilità, con ripercussioni sulle performance e sostenibilità del sistema.

Per ovviare, suggeriamo agli erogatori che sfruttano questa funzionalità di dotarsi di una cache nella quale conservare una copia delle chiavi pubbliche e dei relativi `kid`.&#x20;

Per supportare gli erogatori in quest'attività, PDND Interoperabilità mette a disposizione un secondo endpoint sulle proprie API:`/events/keys`.

#### Gli eventi sulle chiavi

Gli eventi sulle chiavi hanno lo stesso meccanismo di funzionamento di quello degli altri eventi, descritto nella [sezione dedicata](../informazioni-utili/api-esposte-da-pdnd-interoperabilita.md#endpoint-di-notifica-eventi). In sostanza, è possibile chiamare l'endpoint `/events/keys` passando come parametri `lastEventId` (richiesto) e `limit` (opzionale, default a 100). Il primo indica l'id dell'ultimo evento scaricato, il secondo quanti eventi si intende scaricare.

Ogni risultato ha la seguente struttura:

```
{
  eventId: integer
  eventType: "ADDED" | "DELETED"
  objectType: "KEY"
  objectId: {
    kid: string
  }
}
```

{% hint style="info" %}
L'endpoint deve essere chiamato dall'aderente in modalità polling.
{% endhint %}

{% hint style="warning" %}
La richiesta e il dettaglio implementativo delle informazioni aggiuntive dovranno essere esplicitate dall'erogatore all'interno della documentazione tecnica a corredo dell'e-service.
{% endhint %}

