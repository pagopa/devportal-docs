# FAQ e dubbi comuni

## La mia richiesta di voucher viene rifiutata

La maniera più semplice di capire perché è utilizzare lo strumento di _**Debug Client Assertion**_ presente nel back office (disponibile nel menù _**Tool per lo sviluppo**_).

Nel dettaglio, lo strumento verifica che tutta la catena autorizzativa sia attiva, ossia:

* versione di e-service attiva;
* richiesta di fruizione attiva;
* finalità attiva;
* client corretto;
* client associato alla finalità attiva;
* chiave pubblica caricata all'interno del client;
* firma corrispondente tra chiave pubblica e privata.

Se l'intera catena è attiva, verifica che nella client assertion il fruitore abbia inserito solamente claim ammessi, e che i valori dei claim siano del tipo corretto.

I claim ammessi sono i seguenti. Nell'header, `kid`, `alg` e `typ`. Nel payload, `iss`, `sub`, `aud`, `jti`, `iat`, `exp` e `purposeId`. Opzionalmente è possibile inserire il campo `digest`, con al suo interno due valori, `alg` e `value`.

I campi `kid`, `alg`, `typ`, `iss`, `sub`, `aud`, `jti` e `purposeId` devono essere stringhe. I campi `iat` ed `exp` sono long integer. Anche i campi `digest.alg` e `digest.value` sono stringhe.

Per eventuali dubbi, un esempio pratico di come è fatta una client assertion è disponibile [qui](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/utilizzare-i-voucher#un-esempio-di-client-assertion).

## Il campo "nbf" è previsto dallo standard ma non lo vedo

Corretto, il campo `nbf` non è tra i claim ammessi e non va inserito nella client assertion.

## Dove devo inserire i nuovi custom claim previsti? Intendo "producerId", "consumerId", "eserviceId", "descriptorId"

Non è il fruitore a doverli inserire. Sarà PDND Interoperabilità a restituirli automaticamente nel voucher che rilascia al fruitore.

## Il campo "digest" è obbligatorio?

No, nel contesto di un voucher di tipo Bearer Token è opzionale e va inserito solamente se l'erogatore richiede di avere informazioni aggiuntive dal fruitore per uno specifico e-service.

## Nella client assertion dovrei inserire anche i campi previsti dal "digest", come "userId", "userLocation", ecc. Come faccio?

Non vanno inseriti nella client assertion. Quei campi sono informazioni aggiuntive richieste da specifici erogatori per specifici e-service e fanno parte dell'interazione fra erogatore e fruitore, non devono essere noti a PDND Interoperabilità.

Per passarli all’erogatore, bisogna inserire quei campi nel secondo token previsto da AgID, _Audit REST 02_. Questo secondo token sarà passato all’erogatore nell’header della chiamata verso la sua API, con chiave `Agid-JWT-Tracking-Evidence`.

Dal token creato per Audit REST 02, calcolare l'hash usando l'algoritmo SHA256. A quel punto, inserire il valore risultante nel campo \`digest\` della client assertion, come

```
digest: {
  alg: “SHA256”,
  value: “IL_MIO_HASH”
}
```

## Come faccio a sapere se la mia client assertion funziona?

Puoi usare lo strumento di debug presente nel back office alla voce _**Tool per lo sviluppo > Debug client assertion**_. Nell’ambiente di Collaudo, lo strumento è già stato adeguato per rispondere correttamente alla nuova configurazione.

## Come è fatto un voucher rilasciato da PDND Interoperabilità?

Dipende dal tipo di voucher: Bearer Token ([base](../../tutorial-voucher/come-richiedere-un-voucher-bearer-per-le-api-di-un-erogatore-base.md) o [con informazioni aggiuntive](../../tutorial-voucher/come-richiedere-un-voucher-bearer-per-le-api-di-un-erogatore-con-informazioni-aggiuntive.md)) o DPoP ([base](../../tutorial-voucher/come-richiedere-un-voucher-dpop-per-le-api-di-un-erogatore-base.md) o [con informazioni aggiuntive](../../tutorial-voucher/come-richiedere-un-voucher-dpop-per-le-api-di-un-erogatore-con-informazioni-aggiuntive.md)). In ognuno dei tutorial dedicati viene indicato come è strutturato il voucher.

## Dove trovo maggiori informazioni?

In questo manuale tecnico, nella [sezione dedicata](tipi-di-richiesta-di-voucher.md). Inoltre, per un flusso completo, nel [webinar dedicato](https://developer.pagopa.it/webinars/DevTalks-PDNDInterop-voucher).
