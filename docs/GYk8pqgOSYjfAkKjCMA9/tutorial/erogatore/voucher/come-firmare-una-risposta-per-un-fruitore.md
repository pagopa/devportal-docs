# Come firmare una risposta per un fruitore

Il ModI lascia discrezione all'erogatore nell'indicare qual debba essere la procedura corretta di firma del payload e verifica da parte del fruitore.&#x20;

Si riporta comunque a titolo di esempio una possibile gestione del meccanismo di firma del payload di risposta di un e-service.

Per maggiori informazioni, si veda la [sezione dedicata](../../../guida-tecnica/utilizzare-i-voucher/garanzia-dellintegrita-della-risposta.md).

## Prerequisiti

Si assume che l'erogatore abbia:

* creato un _**Portachiavi erogatore**_ ([vedi guida](../../../guida-tecnica/e-service/portachiavi/));
* generato almeno un set di materiale crittografico e caricato la relativa chiave pubblica su PDND Interoperabilità all'interno del client ([vedi tutorial](../../fruitore/back-office/come-generare-il-corredo-crittografico-e-caricare-una-chiave-pubblica.md));
* associato il _**Portachiavi Erogatore**_ all'e-service per la quale vuole firmare la risposta al fruitore ([vedi tutorial](../back-office/come-associare-un-portachiavi-ad-un-e-service.md)).

## Preparazione - Definire la struttura della risposta

L'erogatore definisce la struttura per firmare un payload di risposta HTTP utilizzando RSA, per garantire che i dati provenienti da un e-service e non siano stati modificati.&#x20;

La risposta JSON che l'erogatore invia al fruitore sarà strutturata come segue:

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

Si passa quindi alla firma della risposta.

## Step 1 - Creazione dell'hash

Il contenuto del campo `data` viene convertito in una stringa di byte e sottoposto a una funzione di hash utilizzando un algoritmo come SHA256.

## Step 2 - Firma dell'hash

L’hash calcolato è poi firmato utilizzando la chiave privata corrispondente ad una delle pubbliche caricate sul proprio _**Portachiavi erogatore**_ associato all'e-service.&#x20;

La firma garantisce che solo chi possiede la chiave privata corrispondente a `kid` (erogatore) possa generare la firma specifica per quel contenuto. Il `kid` della chiave pubblica che si è caricata è disponibile all'interno del portachiavi, aprendo la pagina relativa alla singola chiave (_**Erogazione > Portachiavi erogatore**_, tab _**Chiavi pubbliche**_, selezionando la singola chiave di interesse).

## Step 3 - Integrazione della firma nella risposta

Come definito nello step di preparazione, nel payload si inseriscono:

* `data`: i dati veri e propri;
* `signature`: la firma appena codificata in base64;
* `kid`: il kid della chiave usata per firmare.

In questo modo, il fruitore sarà in grado di identificare univocamente la chiave da utilizzare per la propria verifica. Si invia quindi la risposta al fruitore.
