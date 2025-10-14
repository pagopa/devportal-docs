# Come verificare una risposta firmata da un erogatore

Il ModI lascia discrezione all'erogatore nell'indicare qual debba essere la procedura corretta di firma del payload e verifica da parte del fruitore.&#x20;

Si riporta comunque a titolo di esempio una possibile gestione del meccanismo di firma del payload di risposta di un e-service.

Per maggiori informazioni, si veda la [sezione dedicata](../../riferimenti-tecnici/utilizzare-i-voucher/garanzia-dellintegrita-della-risposta.md).

Quando un fruitore riceve una risposta firmata dall'erogatore, può verificare l’autenticità e l’integrità dei dati ricevuti nella risposta attraverso il `kid` (id della chiave) inserito nel payload, e la chiave pubblica che l'erogatore ha depositato sul proprio _**Portachiavi erogatore**_, associato all'e-service.

### Step 1: Deserializzazione della risposta

Una volta deserializzato il payload creato dall'erogatore nel [tutorial dedicato](../tutorial-per-lerogatore/come-firmare-una-risposta-per-un-fruitore.md), il fruitore troverà la risposta JSON che l'erogatore ha inviato, strutturata come segue:

```
{
  "data": {
    "campo1": "valore1",
    "campo2": "valore2"
  },
  "signature": "<firma_rsa_in_base64>",
  "kid": "<id_chiave_pubblica>"
}

```

<table><thead><tr><th width="137.08123779296875">Nome campo</th><th>Significato</th></tr></thead><tbody><tr><td><code>data</code></td><td>contiene il payload, ossia i dati effettivi che l'e-service trasmette verso i fruitori</td></tr><tr><td><code>signature</code></td><td>contiene la firma digitale del campo data, calcolata dall'e-service utilizzando una chiave privata RSA (appartenente ad un portachiavi all'e-service) e codificata in formato base64</td></tr><tr><td><code>kid</code></td><td>identificatore della chiave usata per la firma; consente al fruitore di sapere quale chiave pubblica utilizzare per verificare la firma</td></tr></tbody></table>

Si passa quindi alla verifica della firma.

### Step 2: Individuazione della chiave pubblica

La chiave corrispondente al `kid` è reperibile sulle [API](../../riferimenti-tecnici/api-della-piattaforma/) esposte da PDND Interoperabilità.

Per ottenere la chiave da PDND Interoperabilità, il fruitore deve aver:

* creato un client di tipo API Interop ([vedi tutorial](come-creare-un-client.md));
* generato almeno un set di materiale crittografico e caricato la relativa chiave pubblica su PDND Interoperabilità all'interno del client ([vedi tutorial](come-generare-il-corredo-crittografico-e-caricare-una-chiave-pubblica.md))
* aver ottenuto un voucher valido per le API di PDND Interoperabilità ([vedi tutorial](come-richiedere-un-voucher-bearer-per-le-api-di-pdnd-interoperabilita.md)).

Il fruitore la troverà al path `GET /keys/{kid}`  in formato JWK.

### Step 3: Ricalcolo dell'hash

&#x20;Il fruitore calcola l’hash del contenuto di `data` usando lo stesso algoritmo utilizzato dell'erogatore SHA256.

### Step 4: Verifica della firma

Con la chiave pubblica ottenuta allo step 2, il fruitore verifica che la firma (campo `signature`) corrisponda all’hash calcolato nello step 3. Se i due valori corrispondono, il payload è autentico e integro; in caso contrario, potrebbe essere stato alterato o non provenire dall'e-service ed è possibile contattare l'erogatore per maggiori informazioni.

***

Pagina successiva [→ Tutorial generali](../tutorial-generali/)
