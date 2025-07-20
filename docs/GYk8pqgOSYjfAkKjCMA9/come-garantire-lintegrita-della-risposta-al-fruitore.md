# Come garantire l'integrità della risposta al fruitore

È possibile per gli erogatori mettere a disposizione dei fruitori un ulteriore livello di sicurezza, che garantisca l'integrità della risposta fornita. In sostanza, gli erogatori firmano la propria risposta con una chiave privata, la cui corrispondente chiave pubblica è depositata su PDND Interoperabilità per le dovute verifiche. Il meccanismo di caricamento e gestione delle chiavi è analogo a quello dei client, ed è disponibile nella sezione _**Erogazione > I tuoi portachiavi**_. Si rimanda alla [sezione dedicata](https://developer.pagopa.it/pdnd-interoperabilita/guides/pdnd-manuale-operativo/manuale-operativo/client-e-materiale-crittografico) per tutte le operazioni legate alla gestione di un portachiavi.

### Step 1 -Precondizioni

* l'erogatore deve avere creato un portachiavi;
* deve averlo associato ad un e-service attraverso la tab "Portachiavi" disponibile all'interno della scheda e-service (Erogazione > I tuoi e-service);
* un suo operatore di sicurezza o amministratore deve aver caricato almeno una chiave pubblica all'interno di quel portachiavi.

Sarà quindi possibile per l'erogatore firmare la propria risposta con la propria chiave privata. Il fruitore potrà verificare la corrispondente chiave pubblica depositata su PDND Interoperabilità. Il ModI lascia discrezione all'erogatore nell'indicare qual debba essere la procedura corretta di firma del payload e verifica da parte del fruitore. Per questa ragione, PDND Interoperabilità non impone alcun vincolo in questo senso ad accezione dell'utilizzo di chiavi asimmetriche di tipo RSA in conformità con gli standard di sicurezza già adottati. Di seguito riportiamo a titolo di esempio una possibile gestione del meccanismo di firma del payload di risposta di un e-service.

### Step 2 -Definizione della struttura della risposta

Questa sezione descrive come firmare un payload di risposta HTTP utilizzando RSA, per garantire che i dati provenienti da un e-service e non siano stati modificati. La risposta JSON che l'erogatore invia al fruitore sarà strutturata come segue:

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

* data: contiene il payload, ossia i dati effettivi che l'e-service trasmette verso i fruitori;
* signature: contiene la firma digitale del campo data, calcolata dall'e-service utilizzando una chiave privata RSA (appartenente ad un portachiavi all'e-service) e codificata in formato base64;
* kid: identificatore della chiave usata per la firma; consente al fruitore di sapere quale chiave pubblica utilizzare per verificare la firma.

## Erogatore: firmare una risposta

### **Step 1 - Creazione dell'hash**

Il contenuto del campo data viene convertito in una stringa di byte e sottoposto a una funzione di hash utilizzando un algoritmo come SHA-256.

### **Step 2 - Firma dell'hash**

L’hash calcolato è poi firmato utilizzando una delle chiavi RSA, identificata univocamente tramite kid, appartenente ad un portachiavi associato all'e-service. La firma garantisce che solo chi possiede la chiave privata corrispondente a kid (erogatore) possa generare la firma specifica per quel contenuto. Il kid della chiave pubblica che si è caricata è disponibile all'interno del portachiavi, aprendo la pagina relativa alla singola chiave (Erogazione > I tuoi portachiavi, clicchi sul portachiavi di interesse, tab Chiavi pubbliche, e clicchi sulla chiave di tuo interesse).

### **Step 3 -Integrazione della firma nella risposta**

La firma è codificata in base64 e inclusa nel payload JSON nel campo signature, mentre kid identifica univocamente la chiave usata, per consentire al fruitore di selezionare la chiave pubblica corretta per la verifica.

## Fruitore: verifica di una firma

Il fruitore può verificare l’autenticità e l’integrità dei dati ricevuti nella risposta utilizzando la chiave pubblica RSA associata all'e-service. All'interno della risposta troverà il campo kid, che identifica la chiave pubblica corrispondente alla privata che l'erogatore ha utilizzato per firmare la risposta.

### **Step 1 - Identificazione della chiave corretta**

La chiave corrispondente al `kid` è disponibile sulle [API esposte da PDND Interoperabilità](https://developer.pagopa.it/pdnd-interoperabilita/guides/pdnd-manuale-operativo/manuale-operativo/api-esposte-da-pdnd-interoperabilita) al path GET /keys/{kid}, dal quale otterrà la chiave pubblica corrispondente al kid in formato JWK.

### **Step 2 -Ricalcolo dell'hash**

Il fruitore calcola l’hash del contenuto di data usando lo stesso algoritmo utilizzato dell'erogatore (SHA-256).

### **Step 3 -Verifica della firma**

Con la chiave pubblica individuata tramite kid, il fruitore verifica che la firma (campo signature) sia valida rispetto all’hash calcolato. Se corrispondono, il payload è autentico e integro; in caso contrario, potrebbe essere stato alterato o non provenire dall'e-service.

### Step 4 - Sicurezza e standard di riferimento

Il processo di firma e verifica segue specifiche internazionali che garantiscono la sicurezza. Gli standard di riferimento includono:

* [RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017) (PKCS #1): definisce le modalità di utilizzo dell’algoritmo RSA per la firma digitale;
* [RFC 7518](https://datatracker.ietf.org/doc/html/rfc7518) (JSON Web Algorithms): specifica gli algoritmi di firma, come RSA e SHA-256;
* [RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517) (JSON Web Key — JWK): questo documento specifica il formato JSON per rappresentare le chiavi crittografiche, sia pubbliche che private
