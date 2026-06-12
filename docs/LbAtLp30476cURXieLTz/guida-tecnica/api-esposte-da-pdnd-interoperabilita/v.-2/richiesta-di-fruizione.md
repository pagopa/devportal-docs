# Richiesta di fruizione

## Panoramica

Il documento descrive il ciclo di vita di una richiesta di fruizione, tecnicamente denominata **Agreement**, dettagliando gli stati che può assumere e le condizioni necessarie per le transizioni tra stati.

Si rimanda alla [sezione dedicata](../../richieste-di-fruizione/) per ulteriori informazioni sulle richieste di fruizione.

## Attributi

Alcuni stati e transizioni dipendono dagli attributi richiesti dall'e-service e posseduti dal fruitore.\
Nella documentazione si farà riferimento a:

* "attributi soddisfatti" come agli attributi richiesti dall'e-service ed assegnati al fruitore;
* "attributi persi" come agli attributi richiesti dall'e-service, precedentemente assegnati al fruitore e poi revocati.

Si ricorda che le tipologie di attributi sono:

* **CERTIFIED**: attributi certificati
* **DECLARED**: attributi dichiarati
* **VERIFIED**: attributi verificati

## Stati

Gli stati che un **Agreement** può assumere sono:

* [DRAFT](richiesta-di-fruizione.md#draft)
* [PENDING](richiesta-di-fruizione.md#pending)
* [ACTIVE](richiesta-di-fruizione.md#active)
* [SUSPENDED](richiesta-di-fruizione.md#suspended)
* [ARCHIVED](richiesta-di-fruizione.md#archived)
* [REJECTED](richiesta-di-fruizione.md#rejected)
* [MISSING CERTIFIED ATTRIBUTES](richiesta-di-fruizione.md#missing-certified-attributes)

I dettagli e le condizioni di transizione sono indicate nel diagramma e nelle descrizioni nelle sezioni che seguono.

<figure><img src="../../../.gitbook/assets/interop_api_v2_lifecycle_agreement.png" alt="" width="375"><figcaption><p>Diagramma di flusso che descrive i passaggi di stato</p></figcaption></figure>

### DRAFT

Stato iniziale di un Agreement creato.

**Caratteristiche:**

* Stato iniziale dei nuovi Agreement
* Può essere raggiunto solo se il fruitore soddisfa gli attributi CERTIFIED richiesti dall'e-service (se presenti)

**Transizioni possibili:**

* **ACTIVE**: tutti i requisiti sono soddisfatti non sono necessarie ulteriori validazioni
* **PENDING**: la sottomissione richiede ulteriori validazioni dell'erogatore
* **MISSING\_CERTIFIED\_ATTRIBUTES**: il fruitore perde almeno un attributo CERTIFIED richiesto
* _Cancellazione_

### PENDING

Agreement in validazione da parte dell'erogatore.

**Caratteristiche:**

* Gli attributi CERTIFIED e DECLARED del fruitore sono soddisfatti
* Esistono uno o più attributi VERIFIED non soddisfatti, oppure è richiesta l'approvazione manuale dell'erogatore
* Il cambio di stato seguente è a carico dell'erogatore

**Transizioni possibili:**

* **ACTIVE**: tutti i requisiti sono soddisfatti non sono necessarie ulteriori validazioni
* **REJECTED**: l'erogatore rifiuta la richiesta
* **DRAFT**: il fruitore perde almeno un attributo DECLARED richiesto
* **MISSING CERTIFIED ATTRIBUTES**: il fruitore perde almeno un attributo CERTIFIED richiesto

### ACTIVE

Agreement operativo.

**Caratteristiche:**

* Unico stato che consente la generazione del voucher
* Tutti gli attributi sono soddisfatti

**Transizioni possibili:**

* **SUSPENDED**: sospensione manuale o perdita dei requisiti necessari
* **ARCHIVED**: archiviazione manuale da parte del fruitore, oppure automatica a seguito di un upgrade

### SUSPENDED

Sospensione temporanea dell'Agreement. Raggiungibile a seguito di una o più delle seguenti condizioni:

* sospensione manuale da parte del fruitore
* sospensione manuale da parte dell'erogatore
* sospensione da parte della piattaforma a seguito della perdita di uno o più attributi del fruitore

**Caratteristiche:**

* Agreement temporaneamente non operativo
* Stato reversibile

**Transizioni possibili:**

* **ACTIVE**: non sospeso dal fruitore, e non sospeso dall'erogatore, e il fruitore soddisfa tutti gli attributi richiesti
* **SUSPENDED**: ancora sospeso dal fruitore, o dall'erogatore, o il fruitore non soddisfa tutti gli attributi richiesti
* **ARCHIVED**: archiviazione manuale da parte del fruitore, oppure dopo l'upgrade

### ARCHIVED

Agreement non più in uso. Se il Fruitore desidera accedere nuovamente all'e-service, sarà necessario creare un nuovo Agreement.

**Caratteristiche:**

* Stato non reversibile

**Transizioni possibili:**

* Nessuna transizione possibile

### REJECTED

La richiesta di fruizione è stata rifiutata da parte dell'erogatore. È possibile per il fruitore sottomettere una nuova richiesta di fruizione rispettando le indicazioni dell'erogatore.

**Caratteristiche:**

* Stato non reversibile

**Transizioni possibili:**

* Nessuna transizione possibile

### MISSING CERTIFIED ATTRIBUTES

Il fruitore ha perso uno o più attributi CERTIFIED richiesti quando l'Agreement non era ancora stato attivato. L'Agreement non può essere modificato fino al ripristino degli attributi mancanti.

**Caratteristiche:**

* Non sono possibili operazioni sull'Agreement da parte del fruitore o dell'erogatore

**Transizioni possibili:**

* **DRAFT**: il fruitore soddisfa tutti gli attributi CERTIFIED richiesti
* _Cancellazione_

## Operazioni

### Aggiornamento di una richiesta di fruizione

L'aggiornamento di una richiesta di fruizione (**upgrade**) è un'operazione che permette al fruitore che sta utilizzando una versione deprecata di un e-service, di aggiornare la richiesta di fruizione per utilizzare una versione più recente dell'e-service.\
L'operazione di upgrade consiste in:

* creazione di un nuovo Agreement collegato alla nuova versione dell'e-service, e che mantiene lo stato dell'Agreement esistente;
* archiviazione dell'Agreement esistente.
