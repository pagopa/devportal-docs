# ✅ Verificare lo stato di una firma

Per verificare lo stato di una firma, dovrai effettuare una richiesta `HTTP GET` all'endpoint `/api/v1/sign/signature-requests/{signature_request_id}` specificando il `signature_request_id` e gli header necessari all'autenticazione.

La risorsa restituita conterrà la proprietà `status` che può contenere i seguenti valori:

* `DRAFT` - la richiesta di firma è stata creata, ma **non è ancora stata finalizzata**. In questo caso, è necessario caricare i documenti o marcarla esplicitamente come `READY`;
* `READY` - La richiesta di firma è stata finalizzata e sarà analizzata e preparata per l'invio al cittadino;
* `WAIT_FOR_SIGNATURE` - la richiesta di firma è stata analizzata, può pertanto essere inviata al cittadino. Questo stato persiste fintanto che il cittadino non completa il processo di firma;
* `CANCELLED` - la richiesta di firma è stata cancellata dall'ente, non sarà più possibile per il cittadino procedere con il processo di firma;
* `WAIT_FOR_QTSP` - il cittadino ha completato il processo di firma e i documenti sono in attesa di firma da parte del Qualified Trust Service Provider;
* `SIGNED` - tutti i documenti contenuti nella richiesta di firma sono stati firmati;
* `REJECTED` - non è stato possibile procedere con la firma dei documenti.&#x20;

{% hint style="warning" %}
Nel caso in cui la `signature_request` risulti `REJECTED`, troverai la motivazione.all'interno del campo `rejected_reason` .&#x20;

In questo caso, dovrai risolvere i problemi segnalati nella `rejected_reason` e procedere con una nuova [richiesta di firma](richiedere-una-firma/). Ad esempio, potresti dover ripetere la procedura di preparazione del documento per una corretta identificazione dei campi firma.
{% endhint %}

{% hint style="info" %}
In alcuni casi, quando l'errore non dipende dall'app ma da un problema esterno (come ad esempio un problema durante l'emissione del certificato di firma), viene suggerito all'utente di contattare l'ente, fornendo l'email di assistenza.\
È importante quindi, per fornire il giusto supporto agli utenti, indicare in fase di adesione dell'ente a Firma con IO un indirizzo di assistenza valido e che venga monitorato.
{% endhint %}

### Ottenere la lista delle Richieste di Firma create, a partire da un Dossier

Se non disponi di un `signature_request_id` per interrogare l'endpoint `GET /api/v1/sign/signature-requests/{signature_request_id}` è possibile recuperarlo a partire dall'`id` del `dossier` a cui la Richiesta di Firma è associata.

In questo caso, dovrai effettuare una chiamata `HTTP GET` all'endpoint `/api/v1/sign/dossiers/{dossier_id}/signature-requests` per ottenere la Lista delle Richieste di Firma associate a quel dossier.

Una volta ottenuta la lista, potrai filtrarla a partire dal `signer_id` , `created_at` e/o `status` in modo da ottenere il `signature_request_id` utile a recuperare il dettaglio della Richiesta di Firma, come sopra indicato.

{% hint style="info" %}
L'endpoint descritto è paginato e dunque restituisce, per ciascuna chiamata, un numero limitato di risultati. Nei casi in cui il numero di Richieste di Firma disponibili per quel dossier è maggiore al numero di elementi presenti in pagina, viene restituito un `continuation_token` da utilizzare come "cursore" per scorrere la lista nelle chiamate successive.

Il `continuation_token` è stateless e "immutabile", dunque può essere conservato nel tuo sistema per interrogazioni successive.
{% endhint %}
