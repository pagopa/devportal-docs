# Ciclo di vita di una Richiesta di Fruizione

## Panoramica

Il documento descrive il ciclo di vita di una Richiesta di Fruizione, tecnicamente denominata **Agreement**, dettagliando gli stati che può assumere e le condizioni necessarie per le transizioni tra stati.\
Si rimanda alla [documentazione](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/richieste-di-fruizione) per ulteriori informazioni sulle Richieste di Fruizione.

### Attributi

Alcuni stati e transizioni dipendono dagli Attributi richiesti dall'EService e posseduti dal Fruitore.\
Nella documentazione si farà riferimento a:

* "attributi soddisfatti" come agli Attributi richiesti dall'E-Service ed assegnati al Fruitore
* "attributi persi" come agli Attributi richiesti dall'E-Service, precedentemente assegnati al Fruitore e poi revocati

Si ricorda che le tipologie di attributi sono:

* **CERTIFIED** - attributi Certificati
* **DECLARED** - attributi Dichiarati
* **VERIFIED** - attributi Verificati

## Stati del Ciclo di Vita

Di seguito è possibile trovare gli stati che un Agreement può assumere e le condizioni di transizione, come indicato in figura.

\[DIAGRAMMA DEGLI STATI QUI]

### DRAFT

Stato iniziale di un Agreement creato.

**Caratteristiche:**

* Stato iniziale dei nuovi Agreement
* Può essere raggiunto solo se il Fruitore soddisfa gli attributi CERTIFIED richiesti dall'E-Service (se presenti)

**Transizioni possibili:**

* **ACTIVE**: tutti i requisiti sono soddisfatti non sono necessarie ulteriori validazioni
* **PENDING**: la sottomissione richiede ulteriori validazioni dell'Erogatore
* **MISSING\_CERTIFIED\_ATTRIBUTES**: il Fruitore perde almeno un attributo CERTIFIED richiesto
* _Cancellazione_

### PENDING

Agreement in validazione da parte dell'Erogatore.

**Caratteristiche:**

* Gli attributi CERTIFIED e DECLARED del Fruitore sono soddisfatti
* Esistono uno o più attributi VERIFIED non soddisfatti, oppure è richiesta l'approvazione manuale dell'Erogatore
* Il cambio di stato seguente è a carico dell'Erogatore

**Transizioni possibili:**

* **ACTIVE**: tutti i requisiti sono soddisfatti non sono necessarie ulteriori validazioni
* **REJECTED**: l'Erogatore rifiuta la Richiesta
* **DRAFT**: il Fruitore perde almeno un attributo DECLARED richiesto
* **MISSING CERTIFIED ATTRIBUTES**: il Fruitore perde almeno un attributo CERTIFIED richiesto

### ACTIVE

Agreement operativo.

**Caratteristiche:**

* Unico stato che consente la generazione del Voucher
* Tutti gli attributi sono soddisfatti

**Transizioni possibili:**

* **SUSPENDED**: sospensione manuale o perdita dei requisiti necessari
* **ARCHIVED**: archiviazione manuale da parte del Fruitore, oppure automatica a seguito di un upgrade

### SUSPENDED

Sospensione temporanea dell'Agreement.\
Raggiungibile a seguito di una o più delle seguenti condizioni:

* sospensione manuale da parte del Fruitore
* sospensione manuale da parte dell'Erogatore
* sospensione da parte della Piattaforma a seguito della perdita di uno o più attributi del Fruitore

**Caratteristiche:**

* Agreement temporaneamente non operativo
* Stato reversibile

**Transizioni possibili:**

* **ACTIVE**: non sospeso dal Fruitore, e non sospeso dall'Erogatore, e il Fruitore soddisfa tutti gli attributi richiesti
* **SUSPENDED**: ancora sospeso dal Fruitore, o dall'Erogatore, o il Fruitore non soddisfa tutti gli attributi richiesti
* **ARCHIVED**: archiviazione manuale da parte del Fruitore, oppure dopo l'upgrade

### ARCHIVED

Agreement non più in uso.\
Se il Fruitore desidera accedere nuovamente all'EService, sarà necessario creare un nuovo Agreement.

**Caratteristiche:**

* Stato non reversibile

**Transizioni possibili:**

* Nessuna transizione possibile

### REJECTED

La Richiesta di Fruizione è stata rifiutata da parte dell'Erogatore.\
È possibile per il Fruitore sottomettere una nuova Richiesta di Fruizione rispettando le indicazioni dell'Erogatore.

**Caratteristiche:**

* Stato non reversibile

**Transizioni possibili:**

* Nessuna transizione possibile

### MISSING CERTIFIED ATTRIBUTES

Il Fruitore ha perso uno o più attributi CERTIFIED richiesti quando l'Agreement non era ancora stato attivato.\
L'Agreement non può essere modificato fino al ripristino degli attributi mancanti.

**Caratteristiche:**

* Non sono possibili operazioni sull'Agreement da parte del Fruitore o dell'Erogatore

**Transizioni possibili:**

* **DRAFT**: il Fruitore soddisfa tutti gli attributi CERTIFIED richiesti
* _Cancellazione_

## Upgrade

L'upgrade è un'operazione che permette al Fruitore che sta utilizzando una versione deprecata di un EService, di aggiornare la Richiesta di Fruizione per utilizzare una versione più recente dell'EService.\
L'operazione di upgrade consiste in

* Creazione di un nuovo Agreement collegato alla nuova versione dell'EService, e che mantiene lo stato dell'Agreement esistente
* Archiviazione dell'Agreement esistente
