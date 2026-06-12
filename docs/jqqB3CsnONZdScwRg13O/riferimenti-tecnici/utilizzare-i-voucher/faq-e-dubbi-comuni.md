# FAQ e dubbi comuni

## La mia richiesta di voucher viene rifiutata

Per identificare la causa del rifiuto, il modo più rapido è utilizzare lo **strumento di Debug Client Assertion**, disponibile nel front office alla voce: **Tool per lo sviluppo → Debug client assertion**.

### Cosa verifica lo strumento

Il sistema controlla che **tutta la catena autorizzativa** sia attiva:

* versione di e-service attiva;
* richiesta di fruizione attiva;
* finalità attiva;
* client corretto;
* client associato alla finalità attiva;
* chiave pubblica caricata all’interno del client;
* firma coerente tra chiave pubblica e privata.

Se la catena risulta valida, lo strumento verifica poi che:

* la **client assertion** contenga **solo claim ammessi**;
* i **valori** dei claim siano **del tipo corretto**.

### Claim ammessi nella client assertion

* **Header**: `kid`, `alg`, `typ`
* **Payload**: `iss`, `sub`, `aud`, `jti`, `iat`, `exp`, `purposeId`
* **Opzionale**: `digest`, che contiene due valori (`alg`, `value`)

#### Tipi di dato previsti

<table><thead><tr><th width="522.5343627929688">Campo</th><th>Tipo di dato</th></tr></thead><tbody><tr><td><code>kid</code>, <code>alg</code>, <code>typ</code>, <code>iss</code>, <code>sub</code>, <code>aud</code>, <code>jti</code>, <code>purposeId</code>, <code>digest.alg</code>, <code>digest.value</code></td><td>stringa</td></tr><tr><td><code>iat</code>, <code>exp</code></td><td>long integer</td></tr></tbody></table>

Un **esempio pratico di client assertion** è disponibile nel [tutorial dedicato](../../tutorial/tutorial-per-il-fruitore/come-richiedere-un-voucher-bearer-per-le-api-di-un-erogatore-base.md#il-flusso-in-breve-2) allo stacco del voucher.

## Il campo `nbf` non è presente

Corretto: il campo `nbf` è previsto dallo standard ma **non è tra i claim ammessi** e **non va inserito** nella client assertion.

## Dove inserire i nuovi custom claim (`producerId`, `consumerId`, `eserviceId`, `descriptorId`)?

Non è il fruitore a doverli inserire: è **PDND Interoperabilità** a restituirli **automaticamente** nel voucher rilasciato al fruitore.

## Il campo `digest` è obbligatorio?

No. Nel contesto di un **voucher di tipo Bearer Token**, il campo `digest` è **opzionale** e va inserito **solo se richiesto dall’erogatore** per uno specifico e-service.

## Come passare informazioni aggiuntive (es. `userId`, `userLocation`, ecc.)?

Queste informazioni **non devono essere inserite nella client assertion**. Si tratta di **dati aggiuntivi** richiesti da alcuni erogatori, che **rientrano nel dialogo diretto** tra erogatore e fruitore.

Per trasmetterli:

1. creare il **secondo token** previsto da **AgID Audit REST 02**;
2. inserirlo nell’header della richiesta all’erogatore, con chiave `Agid-JWT-Tracking-Evidence`;
3. calcolare l’hash del token usando **SHA256**;
4. riportare il valore ottenuto nel campo `digest` della client assertion, ad esempio:

```
digest: {
  alg: “SHA256”,
  value: “IL_MIO_HASH”
}
```

## Come verificare se la client assertion funziona?

Utilizzare lo strumento di debug: **Tool per lo sviluppo → Debug client assertion**.

## Come è fatto un voucher rilasciato da PDND Interoperabilità?

La struttura del voucher varia in base al tipo:

* **Bearer Token (**[**base**](../../tutorial/tutorial-per-il-fruitore/come-richiedere-un-voucher-bearer-per-le-api-di-un-erogatore-base.md) o [**con informazioni aggiuntive**](../../tutorial/tutorial-per-il-fruitore/come-richiedere-un-voucher-bearer-per-le-api-di-un-erogatore-con-informazioni-aggiuntive.md)**)**
* **DPoP (**[**base**](../../tutorial/tutorial-per-il-fruitore/come-richiedere-un-voucher-dpop-per-le-api-di-un-erogatore-base.md) o [**con informazioni aggiuntive**](../../tutorial/tutorial-per-il-fruitore/come-richiedere-un-voucher-dpop-per-le-api-di-un-erogatore-con-informazioni-aggiuntive.md)**)**

Ogni **tutorial dedicato** mostra il formato dettagliato del voucher corrispondente.

## Dove trovare maggiori informazioni?

* **In questo manuale tecnico**, nella [sezione dedicata](tipi-di-richiesta-di-voucher.md) ai voucher.
* **Nel** [**webinar tecnico dedicato**](https://developer.pagopa.it/webinars/DevTalks-PDNDInterop-voucher), per una dimostrazione del flusso completo.

***

Pagina successiva [→ Deleghe](../deleghe/)
