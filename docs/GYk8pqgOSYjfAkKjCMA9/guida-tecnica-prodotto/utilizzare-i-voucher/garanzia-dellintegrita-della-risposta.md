# Garanzia dell'integrità della risposta

È possibile per gli erogatori mettere a disposizione dei fruitori un ulteriore livello di sicurezza, che garantisca loro l'integrità della risposta che ricevono.

In sostanza, gli erogatori firmano la propria risposta con una chiave privata, la cui corrispondente chiave pubblica è depositata su PDND Interoperabilità per le dovute verifiche.

La chiave pubblica viene caricata dall'erogatore all'interno di un portachiavi (disponibile all'interno della scheda del proprio e-service — _Erogazione > I tuoi e-service_, seleziona un e-service, tab _Portachiavi_). Sarà possibile per il fruitore verificare la corrispondenza chiedendo la chiave pubblica attraverso le API di PDND Interoperabilità.

Per tutte le operazioni legate alla gestione di un portachiavi, si rimanda alla [sezione dedicata](../client-e-materiale-crittografico/).

## Precondizioni&#x20;

* l'erogatore deve avere creato un portachiavi;
* deve averlo associato ad un e-service attraverso la tab _Portachiavi_ disponibile all'interno della scheda e-service;
* un suo operatore di sicurezza o amministratore deve aver caricato almeno una chiave pubblica all'interno di quel portachiavi.

Sarà quindi possibile per l'erogatore firmare la propria risposta con la propria chiave privata. Il fruitore potrà verificare la corrispondente chiave pubblica depositata su PDND Interoperabilità.

## Esempio

Il MoDI lascia discrezione all'erogatore nell'indicare qual debba essere la procedura corretta di firma del payload e verifica da parte del fruitore.&#x20;

Per questa ragione, PDND Interoperabilità non impone alcun vincolo, ad accezione dell'utilizzo di chiavi asimmetriche di tipo RSA in conformità con gli standard di sicurezza già adottati.

Nel tutorial dedicato \[TBD], si riporta a titolo di esempio una possibile gestione del meccanismo di firma del payload di risposta di un e-service.

***

## Definizione della struttura della risposta

Questa sezione descrive come firmare un payload di risposta HTTP utilizzando RSA, per garantire che i dati provenienti da un e-service e non siano stati modificati.&#x20;

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

dove

* **data**: contiene il payload, ossia i dati effettivi che l'e-service trasmette verso i fruitori;
* **signature**: contiene la firma digitale del campo data, calcolata dall'e-service utilizzando una chiave privata RSA (appartenente ad un portachiavi all'e-service) e codificata in formato base64;
* **kid**: identificatore della chiave usata per la firma; consente al fruitore di sapere quale chiave pubblica utilizzare per verificare la firma.

### Erogatore: firmare una risposta

#### Creazione dell'hash

Il contenuto del campo _data_ viene convertito in una stringa di byte e sottoposto a una funzione di hash utilizzando un algoritmo come SHA-256.

#### Firma dell'hash

L’hash calcolato è poi firmato utilizzando una delle chiavi RSA, identificata univocamente tramite _kid_, appartenente ad un portachiavi associato all'e-service. La firma garantisce che solo chi possiede la chiave privata corrispondente a _kid_ (erogatore) possa generare la firma specifica per quel contenuto. Il _kid_ della chiave pubblica che si è caricata è disponibile all'interno del portachiavi, aprendo la pagina relativa alla singola chiave (_**Erogazione > I tuoi portachiavi**_, clicchi sul portachiavi di interesse, tab _**Chiavi pubbliche**_, e clicchi sulla chiave di tuo interesse).

#### Integrazione della firma nella risposta

La firma è codificata in base64 e inclusa nel payload JSON nel campo _signature_, mentre _kid_ identifica univocamente la chiave usata, per consentire al fruitore di selezionare la chiave pubblica corretta per la verifica.

### Fruitore: verifica di una firma

Il fruitore può verificare l’autenticità e l’integrità dei dati ricevuti nella risposta utilizzando la chiave pubblica RSA associata all'e-service. All'interno della risposta troverà il campo _kid_, che identifica la chiave pubblica corrispondente alla privata che l'erogatore ha utilizzato per firmare la risposta.&#x20;

#### Identificazione della chiave corretta

La chiave corrispondente al kid è disponibile sulle [API esposte da PDND Interoperabilità](../api-esposte-da-pdnd-interoperabilita/) al path `GET /keys/{kid}`, dal quale otterrà la chiave pubblica corrispondente al _kid_ in formato JWK.

#### Ricalcolo dell'hash

&#x20;Il fruitore calcola l’hash del contenuto di data usando lo stesso algoritmo utilizzato dell'erogatore (SHA-256).

#### Verifica della firma

Con la chiave pubblica individuata tramite _kid_, il fruitore verifica che la firma (campo _signature_) sia valida rispetto all’hash calcolato. Se corrispondono, il payload è autentico e integro; in caso contrario, potrebbe essere stato alterato o non provenire dall'e-service.

### Sicurezza e standard di riferimento

Il processo di firma e verifica segue specifiche internazionali che garantiscono la sicurezza. Gli standard di riferimento includono:

* [RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017) (PKCS #1): definisce le modalità di utilizzo dell’algoritmo RSA per la firma digitale;
* [RFC 7518](https://datatracker.ietf.org/doc/html/rfc7518) (JSON Web Algorithms): specifica gli algoritmi di firma, come RSA e SHA-256;
* [RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517) (JSON Web Key — JWK): questo documento specifica il formato JSON per rappresentare le chiavi crittografiche, sia pubbliche che private.

## Implementazione

Si suggerisce di fare sempre riferimento alla guida passo passo implementata nel back office di PDND Interoperabilità. Alcune informazioni sono tuttavia riportate anche qui per completezza.

<figure><img src="../../.gitbook/assets/Screen guida ottenere voucher" alt=""><figcaption><p>La guida in tre passi per ottenere l'accesso al token si trova sotto "I tuoi client e-service". Se si vuole aggiungere ad un Client già creato si deve cliccare su "Ispeziona", altrimenti su "Crea nuovo".</p></figcaption></figure>
