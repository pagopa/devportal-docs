# Come recuperare i segnali

### Requisiti <a href="#requisiti.2" id="requisiti.2"></a>

Si assume che il consumatore sia un aderente fruitore, che possa accedere a un e-service abilitato a Signal Hub, che abbia un client api (vedi [i requisiti per l'uso di Signal Hub](../how-to/prerequisiti.md)).

Si assume che il consumatore di segnali abbia acquisito i dati relativi alle modalità di pseudonimizzazione (vedi [come ottenere le informazioni crittografiche](come-ottenere-le-informazioni-crittografiche.md)) e che si trovi ad esempio:

| **funzione crittografica di hashing** | **seme**                               |
| ------------------------------------- | -------------------------------------- |
| `sha256`                              | `f3a7f54e-8e57-4a06-8bca-ac1857b6b045` |

Si assume che il consumatore di segnali abbia calcolato gli id pseudonimizzati e sia in grado di associarli agli identificativi in chiaro dei soggetti, ad esempio:

Si assume che il consumatore di segnali sia in grado di calcolare gli id pseudonimizzati e sia in grado di associarli agli identificativi in chiaro dei soggetti, ad esempio:

| **identificativo interno** | **identificativo in chiaro** | **identificativo** **pseudonimizzato** |
| -------------------------- | ---------------------------- | -------------------------------------- |
| 1                          | `RSSMRA80A01H501U`           | `82e98709e2f96efd...`                  |
| 2                          | `FNTPPL62H44D643P`           | `F5e0f94f36a5eea4...`                  |
| 3                          | `FLZCRN65R02E202N`           | `701c4489d6ac7fdb7...`                 |

#### **Retention Period e API Polling**

Il segnale depositato su Signal Hub ha un _retention period_ (vedi sezione specifica) e oltre questo periodo non sarà più disponibile in lettura. Di conseguenza non potranno essere recuperati segnali che superano il _retention period_. Vedere la sezione relativa per le regole di polling verso le API di recupero del segnale senza perdere gli aggiornamenti.

### Recupero dei segnali <a href="#recupero-dei-segnali.1" id="recupero-dei-segnali.1"></a>

#### Recupero di un segnale legato all'entità

Il consumatore ottiene il voucher api da PDND (vedi [documentazione](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/utilizzare-i-voucher#richiesta-di-un-voucher)):

`voucher = eyJ4eBMlOiDgdDtqe6P...`

Il fruitore legge i segnali invocando il servizio di recupero segnali:

`$ curl --request GET \`\
`--url https://api.signalhub.interop.pagopa.it/1.0/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5&signalId=0 \`\
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`\
`$ {`\
`"signals": [`\
`{`\
`"signalId": 1,`\
`"signalType": "UPDATE",`\
`"objectId": "dcc7b5b8-1e1a-4014-b765-de17de08e66c",`\
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`\
`"objectType": "domicilio"`\
`},`\
`{`\
`"signalId": 2,`\
`"signalType": "UPDATE",`\
`"objectId": "9ef0f2bf-8ac4-45d6-8a41-4eacec9b1e8c",`\
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`\
`"objectType": "domicilio"`\
`},`\
`{`\
`"signalId": 3,`\
`"signalType": "UPDATE",`\
`"objectId": "5f559b8e-7851-469f-9e94-657e1702faea",`\
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`\
`"objectType": "domicilio"`\
`},`\
`{`\
`"signalId": 4,`\
`"signalType": "UPDATE",`\
`"objectId": "7b0b1ad9-6ac0-4670-86e0-eacadb3aa9d4",`\
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`\
`"objectType": "domicilio"`\
`},`\
`{`\
`"signalId": 5,`\
`"signalType": "UPDATE",`\
`"objectId": "7b0b1ad9-6ac0-4670-86e0-eacadb3aa9d4",`\
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`\
`"objectType": "domicilio"`\
`},`\
`],`\
`"lastSignalId": 5`

Nella **richiesta** al servizio dovranno essere presenti le seguenti informazioni (fare riferimento al documento OpenAPI per i valori di default, min, max)

* `eserviceId`: l'id del servizio da cui leggere i segnali
* `signalId`: l’identificativo del segnale a partire dal quale si desidera ricevere gli ulteriori segnali (escluso): se `signalId=0`, saranno restituiti i segnali con `signalId` maggiore di `0`, quindi: `1, 2, 3, 4, …`
* `size`: la quantità di segnali da ottenere nella risposta; se `size` maggiore del valore massimo, la `size` viene sovrascritta al valore massimo (in questo caso la risposta avrà un insieme di elementi minore rispetto a quello richiesto, uguale al valore massimo).&#x20;

Nella **risposta** sono presenti:

* i segnali in ordine di `signalId` crescente, a partire dal `signalId` successivo al `signalId` specificato nella richiesta, per una quantità uguale a `size` specificato nella richiesta
* il `signalId` dell’ultimo segnale restituito, denominato `lastSignalId`
* Http Status `206 - Partial Content` se esistono ancora segnali da leggere: il numero dei segnali totali è maggiore dei segnali presenti nella risposta
* Http Status `200 - OK` se la risposta se non ci sono più segnali da leggere: i segnali presenti nella risposta esauriscono i messaggi totali

**Esempio richiesta che non esaurisce i segnali in una chiamata**

Se poniamo a `10` il numero totale di segnali presenti, relativi a un e-service

Richiesta n. 1

`$ curl --request GET \`\
`--url https://api.signalhub.interop.pagopa.it/v1/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5&signalId=0 \`\
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`

Risposta n. 1\
`Http Status 206`

`$ {`\
`"signals": [`\
`...`\
`],`\
`"lastSignalId": 5`

Lo `Http Status 206` indica che esistono ancora dei segnali, quindi il consumatore creerà una nuova richiesta impostando il query param `signalId` uguale al valore di `lastSignalId` presente nella risposta:

Richiesta n. 2

`$ curl --request GET \`\
`--url https://api.signalhub.interop.pagopa.it/v1/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5&signalId=5 \`\
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`

Risposta n. 2\
`Http Status 200`

`$ {`\
`"signals": [`\
`...`\
`],`\
`"lastSignalId": 10`

Lo `Http Status 200` indica che, nello stato attuale, non ci sono più segnali da leggere: oltre il `"lastSignalId": 10` non esiste un `signalId` successivo.

In un’ottica di long polling verso il servizio, la nuova richiesta da effettuare sarà:

`$ curl --request GET \`\
`--url https://api.signalhub.interop.pagopa.it/v1/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5&signalId=10 \`\
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`

che otterrebbe questo risultato:\
`Http Status 200`

`$ {`\
`"signals": [],`\
`"lastSignalId": null`

fino a che la risposta non cambierà (`Http Status 206`, `signals` e `lastSignalId` valorizzati) , cioè fino a quando non ci saranno nuovi segnali.

**Esempio richiesta che esaurisce i segnali in una chiamata**

Se poniamo a `4` il numero totale di segnali presenti, relativi a un e-service

Richiesta n. 1

`$ curl --request GET \`\
`--url https://api.signalhub.interop.pagopa.it/v1/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5&signalId=0 \`\
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`

Risposta n. 1\
`Http Status 200`

`$ {`\
`"signals": [`\
`...`\
`],`\
`"lastSignalId": 4`

Lo `Http Status 200` indica che, nello stato attuale, non ci sono più segnali da leggere: oltre il `"lastSignalId": 4` non esiste un `signalId` successivo.

In un’ottica di long polling verso il servizio, la nuova richiesta da effettuare sarà:

`$ curl --request GET \`\
`--url https://api.signalhub.interop.pagopa.it/v1/pull/signals/b1817321-0486-4c75-89e5-4ee297250418?size=5&signalId=4 \`\
`--header 'Authorization: Bearer eyJ4eBMlOiDgdDtqe6P...'`

Otterrebbe questo risultato:

`$ {`\
`"signals": [],`\
`"lastSignalId": null`

fino a che la risposta non cambierà (`signals` e `lastSignalId` valorizzati) , cioè fino a quando non ci saranno nuovi segnali.

**Mantenimento del `lastSignalId`**

Il consumatore di segnali deve tenere traccia del valore del `lastSignalId` presente nella risposta dell’API di recupero segnali. Il `lastSignalId` consente di ottenere i segnali successivi a partire dal valore specificato. Vedi sezione “Esempio richiesta che non esaurisce i segnali in una chiamata”.

#### Elaborazione dei segnali e aggiornamento del dato <a href="#elaborazione-dei-segnali-e-aggiornamento-del-dato" id="elaborazione-dei-segnali-e-aggiornamento-del-dato"></a>

Una volta recuperata la lista dei segnali dal servizio, il consumatore la elabora attraverso il proprio stato interno per stabilire se un segnale è rilevante oppure no.

Ponendo che il consumatore abbia una propria base dati di questo tipo, capace di associare a un identificativo in chiaro (da usare per interrogare l’e-service) a un identificativo pseudonimizzato.

Ponendo che il consumatore sia capace di associare un identificativo in chiaro (da usare per interrogare l’e-service) a un identificativo pseudonimizzato, ad esempio:

| **identificativo interno** | **identificativo in chiaro** | **identificativo** **pseudonimizzato** |
| -------------------------- | ---------------------------- | -------------------------------------- |
| 1                          | `RSSMRA80A01H501U`           | `82e98709e2f96efd...`                  |
| 2                          | `FNTPPL62H44D643P`           | `F5e0f94f36a5eea4...`                  |
| 3                          | `FLZCRN65R02E202N`           | `701c4489d6ac7fdb7...`                 |

Ponendo che il consumatore abbia ricevuto questa lista di segnali:

| **signalId** | **objectId**          |
| ------------ | --------------------- |
| 1            | `715a9864rt66`        |
| 2            | `0e25dc7684d7`        |
| 3            | `82e98709e2f96efd...` |
| 4            | `7cb5786140d2`        |
| 5            | `4bdb-8b0bdfd`        |

Il consumatore potrà individuare come rilevante il segnale con `signalId = 3`, dato che è in grado di associarlo a un proprio identificato pseudonimizzato. Gli altri messaggi saranno ignorati in quanto non rilevanti, relativi a soggetti per cui il consumatore non ha procedimenti amministrativi in corso.

Il consumatore ottiene così una lista degli identificativi in chiaro dei dati soggetti a variazione:

| **identificativo interno** | **identificativo in chiaro** | **identificativo** **pseudonimizzato** |
| -------------------------- | ---------------------------- | -------------------------------------- |
| 1                          | `RSSMRA80A01H501U`           | `82e98709e2f96efd...`                  |

A partire da questa lista il consumatore invocherà l’e-service con gli identificativi in chiaro, richiedendo per ciascun soggetto il dato aggiornato. Il consumatore potrà attivare, se necessario, ulteriori processi interni dovuti alla variazione dello stato del dato.

#### Recupero di un segnale di aggiornamento delle informazioni crittografiche (tipo `seedUpdate)`  <a href="#recupero-di-un-segnale-di-tipo-seedupdate-ed-aggiornamento-delle-informazioni-crittografiche" id="recupero-di-un-segnale-di-tipo-seedupdate-ed-aggiornamento-delle-informazioni-crittografiche"></a>

Nel caso di segnale di tipo `seedUpdate`, in base al `signalId`, il fruitore potrà dedurre che tutti i segnali con `signalId` maggiore del `signalId` del `seedUpdate` saranno impattati dalla modifica al criterio di calcolo dell'`objectId`. Vedi sezione relativa al deposito segnale di aggiornamento delle informazioni crittografiche.

Ad esempio, in questa sequenza il consumatore di segnali, dopo avere letto il messaggio con `signald = 3` dovrà interrogare nuovamente l’e-service per ottenere le informazioni crittografiche, e una volta ottenute **ricalcolare** tutti gli id pseudonimizzati (vedi [come ottenere le informazioni crittografiche](come-ottenere-le-informazioni-crittografiche.md)).

| **signalId** | **objectId**   | **signalType** | <p><br><strong>hash</strong><br><strong>seed</strong></p>                       |
| ------------ | -------------- | -------------- | ------------------------------------------------------------------------------- |
| 1            | `715a9864`     | `domicilio`    | <p><code>sha256</code><br><code>f3a7f54e-8e57-4a06-8bca-ac1857b6b045</code></p> |
| 2            | `0e25dc7684d7` | `domicilio`    | <p><code>sha256</code><br><code>f3a7f54e-8e57-4a06-8bca-ac1857b6b045</code></p> |
| 3            | `-`            | `seedupdate`   |                                                                                 |
| 4            | `7cb5786140d2` | `domicilio`    | <p><code>sha512</code><br><code>cbb70351-d2aa-4781-b861-d40c94413247</code></p> |
| 5            | `4bdb-8b0b`    | `domicilio`    | <p><code>sha512</code><br><code>cbb70351-d2aa-4781-b861-d40c94413247</code></p> |

\
