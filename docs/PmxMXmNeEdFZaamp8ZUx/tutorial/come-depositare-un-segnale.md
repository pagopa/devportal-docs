# Come depositare un segnale

### Requisiti <a href="#requisiti.1" id="requisiti.1"></a>

Si assume che il produttore sia un aderente erogatore, che abbia un e-service abilitato a Signal Hub in erogazione, che abbia un client api (vedi [i requisiti per l'uso](../how-to/prerequisiti.md) di Signal Hub).

Si assume che il produttore di segnali abbia individuato ed esposto i dati relativi alle modalità di pseudonimizzazione, ad esempio:

| **funzione crittografica di hashing** | **seme**                               |
| ------------------------------------- | -------------------------------------- |
| `sha256`                              | `f3a7f54e-8e57-4a06-8bca-ac1857b6b045` |

Il deposito dei segnali è relativo ad ogni singolo e-service e il deposito degli stessi è determinato dalla variazione di almeno un dato relativo alle entità oggetto del singolo e-service.

Quando cambia uno stato o un fatto nel dominio dei dati del titolare, il produttore individua il dato che ha subito una variazione e ne calcola l’identificativo pseudonimizzato:

`codiceFiscale= FLZCRN65R02E202N`\
`cryptoHashFunction = sha256`\
`seed = f3a7f54e-8e57-4a06-8bca-ac1857b6b045`

`pseudonimo(codiceFiscale, cryptoHashFunction, seed) = 701c4489d6ac7fdb7...`

#### **Retention Period**

Ciascun segnale depositato su Signal Hub ha un _retention period_ (vedi [sezione specifica](../la-guida-tecnica/segnali.md#retention-period-policy-e-recupero-periodico-dei-segnali)): passato tale intervallo di tempo verrà eliminato.

#### **Identificativo e criterio di ordinamento dei segnali**

Il produttore, come titolare del dato, determina i segnali di variazione e il loro ordinamento: stabilisce cosa e in che ordine deve essere distribuito e quindi consumato dai fruitori. Il produttore deve generare e tenere traccia dell’identificativo `signalId` che vale come identificativo e criterio di ordinamento del segnale.

Il `signalId` è un numero _intero_ _positivo_ _crescente_ (rappresentato come `int64bit`). Nella generazione dei `signalId` l’erogatore non deve “riusare” identificativi già emessi o precedenti all’ultimo `signalId` inviato.

Se ad esempio l’ultimo `signalId` inviato è il 10, il servizio di deposito segnali accetterà solo `signalId` successivi a 10. Sono considerati valori NON validi: 0, 1-10. Sono considerati valori validi: 11, 12, … .

L’erogatore deve tenere traccia dei `signalId` inviati, in modo che riesca sempre a risalire all’ultimo `signalId` inviato per generare correttamente il successivo.

### Deposito del segnale <a href="#deposito-del-segnale" id="deposito-del-segnale"></a>

Rispetto alle [tipologie](../la-guida-tecnica/segnali.md) dei segnali possiamo avere:

* segnali legati al ciclo di vita di una entità
* segnali di aggiornamento delle informazioni crittografiche

#### Deposito di un segnale relativo a una entità

Il produttore ottiene il voucher api da PDND (vedi [documentazione](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/utilizzare-i-voucher#richiesta-di-un-voucher))

`voucher = eyJ0eXAiOiJhdCtqd3Q...`

Il produttore invia il segnale al servizio Deposito Segnali di Signal Hub:

`$ curl --request POST \`\
`--url https://api.signalhub.interop.pagopa.it/1.0/push/signals`` ``\`\
`--header 'Authorization: Bearer eyJ0eXAiOiJhdCtqd3Q...' \`\
`--header 'content-type: application/json' \`\
`--data '{`\
`"signalId": 1,`\
`"objectType": "``domicilio``",`\
`"objectId": "701c4489d6ac7fdb7...",`\
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`\
`"signalType": "UPDATE"`\
`}'`\


`$ { "signalId": 1 }`

Dettaglio dei dati del Segnale:

* `signalId` rappresenta l'identificativo del segnale, univoco per `eserviceId`. Il `signalId` è utilizzato come criterio di ordinamento: si assume che i segnali siano ordinati per `signalId` crescente.
* `objectId`, rappresenta l’identificativo pseudonimizzato del soggetto a cui il segnale fa riferimento.
* `signalType`rappresenta il tipo di segnale, che può assumere uno dei seguenti valori
  * `UPDATE`, nel caso in cui sia stato modificato un elemento esistente
  * `DELETE`, nel caso in cui sia stato eliminato un elemento esistente
  * `SEEDUPDATE`, nel caso di aggiornamento delle informazioni crittografiche
* `objectType`, rappresenta il tipo di oggetto a cui fa riferimento il segnale; è un campo obbligatorio ad inserimento libero in cui viene indicato l'eventuale tipo di oggetto interessati dall'evento. Nel caso in cui l’e-service esponga diverse entità, il valore di `objectType` può essere usato per discriminarle. Ad esempio in un dominio di documenti amministrativi `objectType` potrebbe assumere i valori:
  * `cartaidentità`
  * `patente`
  * `passaporto`

L’erogatore deve integrare queste informazioni nella documentazione dell’e-service in modo che il fruitore sappia come gestirlo.

* `eserviceId` rappresenta l'identificativo del servizio a cui fa riferimento il segnale

Il servizio risponde con `{ "signalId": 1 }` per indicare che il segnale è stato preso in carico per l’inserimento.

#### Deposito del segnale di aggiornamento delle informazioni crittografiche <a href="#deposito-del-segnale-di-aggiornamento-delle-informazioni-crittografiche" id="deposito-del-segnale-di-aggiornamento-delle-informazioni-crittografiche"></a>

Il servizio di deposito segnali può essere utilizzato sia per mandare segnali di insert/update/delete relativamente al ciclo di vita degli oggetti esposti dal produttore, sia per comunicare al consumatore che sono cambiate le informazioni crittografiche (hash function e seed).

A tale scopo il produttore invia il segnale al servizio Deposito Segnali di Signal Hub:

`$ curl --request POST \`\
`--url https://api.signalhub.interop.pagopa.it/v1/push/signals \`\
`--header 'Authorization: Bearer eyJ0eXAiOiJhdCtqd3Q...' \`\
`--header 'content-type: application/json' \`\
`--data '{`\
`"signalId": 2,`\
`"objectType": "-",`\
`"objectId": "-",`\
`"eserviceId": "b1817321-0486-4c75-89e5-4ee297250418",`\
`"signalType": "SEEDUPDATE"`\
`}'`

`$ { "signalId": 2 }`

Anche il segnale di aggiornamento delle informazioni crittografiche deve avere un `signalId` che rispetta l’ordinamento dei messaggi. Dal `signalId` successivo gli id pseudonimizzati nel `objectId` dovranno essere calcolati con la nuova combinazione hash + seed.

\
