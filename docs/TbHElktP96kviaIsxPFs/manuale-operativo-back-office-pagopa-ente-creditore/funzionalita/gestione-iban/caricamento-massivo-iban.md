---
description: Questa funzionalità consente l'inserimento multiplo di IBAN da parte degli EC.
---

# Caricamento Massivo IBAN

{% hint style="success" %}
La funzionalità illustrata in questa sezione, descrive le azioni da compiere per poter inserire/cancellare/modificare massivamente i codici IBAN.

L'operatività rimane la stessa odierna, ovvero tramite invio di un file `csv` al gruppo di Assistenza PagoPA.

In alternativa al file `csv` è garantitala possibilità di innescare il caricamento massivo mediante un tracciato `json`, questa opzione prevede l'invio di una cartella in formato .zip con all'interno uno o più file `json`, di seguito nel documento sono descritte le specifiche relative a tale tipologia di caricamento

Nelle prossime settimane, al fine di snellire l'attuale processo, verrà rilasciata sul portale BackOffice pagoPA una feature che consentirà agli EC di caricare in autonomia il file`csv`o lo `zip` con la cartella contenente i file `json` senza dover più passare dall'Assistenza PagoPA.

La funzionalità **Caricamento Massivo IBAN** è riservata esclusivamente al **Referente dei Pagamenti.**
{% endhint %}

La funzionalità in oggetto si rende necessaria per gli EC o loro intermediari nel caso in cui si debba procedere ad un inserimento di molteplici codici IBAN.&#x20;

## Gestione mediante file CSV \[gestione attualee]

Come indicato nel box informativo in alto è possibile continuare a caricare massivamente gli IBAN seguendo la procedura in essere.&#x20;

Per comodità si riporta di seguito la struttura del file `csv` che dovrà essere adottata.

<table data-full-width="true"><thead><tr><th>Field Name</th><th>Mandatory</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>idDominio</code></td><td>Y</td><td>11 digit</td><td>Codice Fiscale dell’Ente Creditore costituito da 11 cifre con eventuali zeri (0) a sinistra</td></tr><tr><td><code>codiceIpa</code> <a data-footnote-ref href="#user-content-fn-1"><mark style="color:red;">DEPRECATED</mark></a></td><td>N</td><td>Alphanumeric</td><td>Codice IPA dell’Ente Creditore registrato nell’Indice delle PA</td></tr><tr><td><code>ragioneSociale</code></td><td>Y</td><td>Alphanumeric</td><td>Ragione Sociale dell’EC</td></tr><tr><td><code>descrizione</code></td><td>N</td><td>Alphanumeric</td><td>Eventuale descrizione associata all’IBAN (ad esempio il servizio per cui verrà utilizzato)</td></tr><tr><td><code>iban</code></td><td>Y</td><td>Alphanumeric (16)</td><td>Codice IBAN</td></tr><tr><td><code>idSellerBank</code> <mark style="color:red;">DEPRECATED</mark></td><td>N</td><td>Alphanumeric</td><td>Codice Seller Bank ovvero la banca dell’Ente Creditore nell’ambito del servizio MyBank</td></tr><tr><td><code>dataAttivazioneIban</code></td><td>Y</td><td>yyyy-mm-gg</td><td>Data alla quale l’IBAN dovrà essere attivato sul Nodo dei Pagamenti-SPC</td></tr><tr><td><code>operazione</code></td><td>Y</td><td>String (1)</td><td><p>Indica l’operazione da eseguire sull’IBAN:</p><ul><li><code>I</code> = Inserimento</li><li><code>M</code> = Modifica</li><li><code>C</code> = Cancella</li></ul></td></tr></tbody></table>



## Gestione mediante file .zip + JSON

La logica con cui il sistema eseguirà l'inserimento è la cosiddetta "UPSERT": se un record è già presente a sistema verrà eseguito l'aggiornamento del record, nel caso invece non esistesse verrà inserito il nuovo record.&#x20;

Gli step necessari sono i seguenti:

### 1. Creazione File JSON

Creare un file JSON con i seguenti attributi:&#x20;

1. `creditor_institution_code` -> Codice Identificativo dell'EC
2. `description` -> Lasciare vuoto
3. `Ibans` (sezione contenente tutti gli IBAN da inserire)
   1. `iban` -> Codice IBAN
   2. `description` -> descrizione finalità IBAN (es. "Riscossione tributi")
   3. `validity_date` -> da a partire dalla quale l'IBAN è da considerarsi valido
   4. `due_date` -> data a partire dalla quale l’IBAN non sarà più valido

Esempio di file JSON

{% hint style="info" %}
Pattern del file:  "EC\_Code"+"\_"+"DateTime".JSON&#x20;

Esempio: 01307110484\_20231128160300.JSON
{% endhint %}

```json
{
  "creditor_institution_code": 01307110484 // 
  "description": "" //lasciare vuoto
  "ibans": [
    {
      "iban": "IT12A1234512345123456789012",
      "description": "iban 1 description", //es."Riscossione Tributi"
      "validity_date": "2020-07-27T11:00:00.897Z"
      "due_date": "2024-10-28T11:00:00.999Z"
    }, 
    {
      "iban": "IT12A1234512345123456789013",
      "description": "iban 2 description", //es."Riscossione Tributi"
      "validity_date": "2020-07-27T11:00:00.897Z"
      "due_date": "2024-10-28T11:00:00.999Z"
    },
  ]
} 
```

{% file src="../../../.gitbook/assets/02343920126_202311200100.json" %}
Esempio di JSON
{% endfile %}

### 2. Inserimento file nell'archivio .zip

Inserire il file (o nel caso di Intermediario EC i files) all'interno di un archivio `zip` così nominato:

{% tabs %}
{% tab title="EC Diretto" %}
"IBAN\_UPSERT"+"\_"+"EC\_Code"+"\_"+"DateTime".JSON&#x20;

Esempio: IBAN\_UPSERT\_01307110484\_20231128160300.zip

{% file src="../../../.gitbook/assets/IBAN_UPSERT_02343920126_202311200100.zip" %}
{% endtab %}

{% tab title="Intermediario EC" %}
"IBAN\_UPSERT"+"\_"+"PT\_Code"+"\_"+"DateTime".JSON

Esempio: IBAN\_UPSERT\_01307110999\_20231128160300.zip

{% file src="../../../.gitbook/assets/IBAN_UPSERT_02343920999_202311200100 .zip" %}
{% endtab %}
{% endtabs %}

### 3. Apertura ticket&#x20;

&#x20;Aprire un ticket ad Assistenza PagoPA allegando il file di cui sopra specificando la necessità di voler caricare massivamente gli IBAN.

### 4. Approvazione file

A valle dell'approvazione dei colleghi del servizio di assistenza il file verrà caricato e nella sezione IBAN potranno essere visualizzati tutti gli IBAN inseriti.

<figure><img src="../../../.gitbook/assets/Screenshot 2023-11-28 alle 16.41.19.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Se vi fossero dei problemi durante il caricamento del file il servizio di assistenza risponderà nel ticket con le evidenze del caso.&#x20;
{% endhint %}



### Controlli e vincoli

{% hint style="warning" %}
se si sta eseguendo un caricamento massivo per più di un EC (caso di Intermediari di EC) è necessario creare `n` file `json` quanti sono gli EC.
{% endhint %}

{% hint style="warning" %}
Vincoli per la creazione dei file, archivio `zip`

Max numero file per archivio: 10

Dimensione massima archivio zip: 10 MB
{% endhint %}

{% hint style="warning" %}
Si ricorda che in caso di IBAN Postale non è ammessa l'associazione a più di un EC.
{% endhint %}

[^1]: 
