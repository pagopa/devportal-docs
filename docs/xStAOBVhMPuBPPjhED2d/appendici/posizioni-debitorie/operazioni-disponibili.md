# Operazioni disponibili

{% hint style="info" %}
Tutte le operazioni indicate sono segregate per codice fiscale dell'ente creditore (`organizationfiscalcode`). Il dato è recuperato in autonomia dal servizio partendo dalla _subscription key_ utilizzata.

In caso di intermediazione, è possibile associare alla _subscription key_ dell'intermediario da _1_ ad _n_ codici fiscali di enti intermediati, ciò consente agli intermediari di utilizzare una sola _subscription key_ per l'invocazione delle API per conto di tutti gli enti intermediati. Tali abilitazioni devono essere richieste a PagoPA contestualmente alla creazione della _subscription key_ o in momenti successivi.&#x20;

Le _subscription key_ e le relative abilitazioni sono segregate per ambiente _UAT/PROD._
{% endhint %}

## Gestione posizioni debitorie

Nei seguenti sequence diagram si identifica con l'acronimo GPD il servizio di Gestione Posizioni Debitorie e con APD l'Archivio delle Posizioni Debitorie (base dati).

Per i dettagli [https://github.com/pagopa/pagopa-api/tree/SANP3.4.0/openapi](https://github.com/pagopa/pagopa-api/tree/SANP3.4.0/openapi).

### Creazione di una posizione debitoria

{% swagger src="../../.gitbook/assets/gpd.yaml" path="/organizations/{organizationfiscalcode}/debtpositions" method="post" %}
[gpd.yaml](../../.gitbook/assets/gpd.yaml)
{% endswagger %}

![](<../../.gitbook/assets/createPD (1).png>)

In fase di creazione della posizione debitoria il servizio effettuerà controlli sui dati in input e controlli di eventuali duplicati.

Tra i controlli dei dati in input si rilevano:

* obbligatorietà dei dati
* coerenza date (ad esempio `due_date` ≥ `validity_date)`
* coerenza importi (ad esempio la somma degli importi dei versamenti deve essere uguale all'importo totale)
* validità della tassonomia
* validità degli IBAN (devono essere censiti sulla piattaforma pagoPA)

Tra i controlli dei duplicati ci si basa sugli identificativi di pagamento (IUPD, IUV e fiscalCode)

Il _query parameter_ `toPublish` consente di pubblicare automaticamente una posizione debitoria in fase di creazione, impostando questo parametro a `true` e valorizzando contestualmente a `null` il campo `validityDate`, la posizione debitoria andrà direttamente nello stato VALID pronta per essere pagata.

### Lettura di una lista di  posizioni debitorie e di una singola posizione debitoria

{% swagger src="../../.gitbook/assets/gpd.yaml" path="/organizations/{organizationfiscalcode}/debtpositions" method="get" %}
[gpd.yaml](../../.gitbook/assets/gpd.yaml)
{% endswagger %}

![](../../.gitbook/assets/readPDList.png)

La lettura di una lista di posizioni debitorie prevede sempre una paginazione. E' inoltre possibile filtrare per `due_date` in modo da limitare i risultati.



{% swagger src="../../.gitbook/assets/gpd.yaml" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="get" %}
[gpd.yaml](../../.gitbook/assets/gpd.yaml)
{% endswagger %}

![](<../../.gitbook/assets/readPD (2).png>)

La lettura di una posizione debitoria si basa sull'identificativo in input (IUPD). In caso lo IUPD non sia esistente verrà emesso un errore.

### Aggiornamento di una posizione debitoria

{% swagger src="../../.gitbook/assets/gpd.yaml" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="put" %}
[gpd.yaml](../../.gitbook/assets/gpd.yaml)
{% endswagger %}

![](<../../.gitbook/assets/updatePD (1).png>)

In fase di aggiornamento, oltre ai già citati controlli in fase di creazione , si verifica che la posizione sia esistente ed aggiornabile.

In particolare l'aggiornabilità della posizione debitoria dipende dallo stato della posizione stessa (ad esempio se una posizione è già stata pagata non sarà possibile aggiornarla)

### Cancellazione di una Posizione Debitoria

{% swagger src="../../.gitbook/assets/gpd.yaml" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}" method="delete" %}
[gpd.yaml](../../.gitbook/assets/gpd.yaml)
{% endswagger %}

![](<../../.gitbook/assets/deletePD (1).png>)

La cancellazione di una posizione debitoria prevede controlli sia sull'esistenza (IUPD) che sullo stato (ad esempio, una posizione debitoria non sarà cancellabile se è già stata pagata)

### Pubblicazione di una posizione debitoria

{% swagger src="../../.gitbook/assets/gpd.yaml" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}/publish" method="post" %}
[gpd.yaml](../../.gitbook/assets/gpd.yaml)
{% endswagger %}

![](<../../.gitbook/assets/publishPD (1).png>)

La pubblicazione della posizione debitoria permette il passaggio dallo stato `DRAFT` allo stato `PUBLISHED.`&#x20;

Una posizione in stato `DRAFT` (bozza) infatti non permette la normale operatività con la piattaforma pagoPA. Solo quando l'Ente Creditore pubblica la posizione, in coerenza con le date di validità e di scadenza, questa risulta pagabile sulla piattaforma.

### Invalidazione di una posizione debitoria

{% swagger src="../../.gitbook/assets/gpd.yaml" path="/organizations/{organizationfiscalcode}/debtpositions/{iupd}/invalidate" method="post" %}
[gpd.yaml](../../.gitbook/assets/gpd.yaml)
{% endswagger %}

![](../../.gitbook/assets/invalidatePD.png)

L'invalidazione di una posizione debitore consiste di fatto in una cancellazione logica. E' possibile solo partendo dagli stati `PUBLISHED` e `VALID`.

La funzionalità è utile quando si vuole dare evidenza all'utente, in fase di pagamento, della invalidazione della posizione debitoria.

## Ricevute di pagamento

Sono messe a disposizione due API per il recupero delle ricevute di pagamento:

* lista ricevute di pagamento
* dettaglio singola ricevuta

{% swagger src="../../.gitbook/assets/gpd_payments.yaml" path="/payments/{organizationfiscalcode}/receipts" method="get" %}
[gpd_payments.yaml](../../.gitbook/assets/gpd_payments.yaml)
{% endswagger %}

<figure><img src="../../.gitbook/assets/readReceiptList.png" alt=""><figcaption></figcaption></figure>

{% swagger src="../../.gitbook/assets/gpd_payments.yaml" path="/payments/{organizationfiscalcode}/receipts/{iuv}" method="get" %}
[gpd_payments.yaml](../../.gitbook/assets/gpd_payments.yaml)
{% endswagger %}

<figure><img src="../../.gitbook/assets/readReceipt.png" alt=""><figcaption></figcaption></figure>

## Flussi di rendicontazione

Sono messe a disposizione delle funzionalità di lettura dei flussi di rendicontazione:

* Lista di flussi di rendicontazione per un Ente Creditore
* Dettaglio del flusso di rendicontazione

{% swagger src="../../.gitbook/assets/gpd_fdr.yaml" path="/organizations/{organizationId}/reportings" method="get" %}
[gpd_fdr.yaml](../../.gitbook/assets/gpd_fdr.yaml)
{% endswagger %}

![](../../.gitbook/assets/readFdRList.png)

{% swagger src="../../.gitbook/assets/gpd_fdr.yaml" path="/organizations/{organizationId}/reportings/{flowId}/date/{date}" method="get" %}
[gpd_fdr.yaml](../../.gitbook/assets/gpd_fdr.yaml)
{% endswagger %}

![](<../../.gitbook/assets/readFdR (1).png>)

