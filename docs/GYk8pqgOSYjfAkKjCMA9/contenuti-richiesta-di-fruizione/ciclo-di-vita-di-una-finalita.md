# Ciclo di vita di una Finalità

## Panoramica

Il documento descrive il ciclo di vita di una Finalità, tecnicamente denominata **Purpose**, dettagliando gli stati che può assumere e le condizioni necessarie per le transizioni tra stati.\
Si rimanda alla [documentazione](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/finalita) per ulteriori informazioni sulle Finalità.

#### Versioni di una Purpose

Una Purpose è composta da una o più Versioni:

* currentVersion. Se presente, contiene una Versione in stato **ACTIVE** o **SUSPENDED**
* waitingForApprovalVersion. Se presente, contiene una Versione in stato **WAITING\_FOR\_APPROVAL**
* rejectedVersion. Se presente, contiene l'ultima Versione rifiutata in stato **REJECTED**

Possono inoltre esistere ulteriori Versioni all'interno di una Purpose, nei seguenti stati

* **ARCHIVED** la Versione contiene una stima di carico precedente
* **REJECTED** la Versione è stata rifiutata dall'Erogatore

La modifica della stima di carico genera sempre una nuova Versione all'interno della Purpose.\
Se la stima di carico è inferiore alle soglie previste dal Descrittore dell'E-Service, oppure viene approvata dall'Erogatore, la Versione precedente della Purpose viene archiviata.

## Ciclo di Vita

Di seguito è possibile trovare gli stati che le Versioni di una Purpose possono assumere e le condizioni di transizione, come indicato in figura.

\[DIAGRAMMA DEGLI STATI QUI]

### DRAFT

Stato iniziale della prima Versione di una Purpose creata.

**Caratteristiche:**

* Stato iniziale

**Transizioni possibili:**

* **ACTIVE**: la stima di carico è inferiore alle soglie previste dal Descrittore dell'E-Service
* **WAITING\_FOR\_APPROVAL**: la stima di carico è superiore alle soglie previste dal Descrittore dell'E-Service
* _Cancellazione_

### WAITING\_FOR\_APPROVAL

La stima di carico supera le soglie previste dal Descrittore dell'E-Service ed è in attesa di approvazione da parte dell'Erogatore.

**Caratteristiche:**

* Se la Versione corrente è in stato **ACTIVE**, la Purpose può essere utilizzata per la generazione del Voucher
* L'eventuale attivazione archivia la Versione corrente della Purpose
* La cancellazione e il rifiuto non hanno effetti sulla Versione corrente

**Transizioni possibili:**

* **ACTIVE**: la stima di carico è stata approvata dall'Erogatore
* **REJECTED**: la stima di carico è stata rifiutata dall'Erogatore. Se esiste una Versione corrente, rimane inalterata
* _Cancellazione_

### ACTIVE

Purpose operativa.

**Caratteristiche:**

* Unico stato che consente la generazione del Voucher

**Transizioni possibili:**

* **ACTIVE**: la stima di carico viene modificata e rimane inferiore alle soglie previste dal Descrittore dell'E-Service. Viene creata una nuova Versione, la Versione con la precedente stima di carico viene archiviata
* **SUSPENDED**: sospensione manuale
* **WAITING\_FOR\_APPROVAL**: la stima di carico aggiornata è superiore alle soglie previste dal Descrittore dell'E-Service. Viene creata una nuova Versione, la Versione con la precedente stima di carico rimane inalterata
* **ARCHIVED**: archiviazione manuale da parte del Fruitore, oppure automatica a seguito dell'Attivazione di una nuova stima di carico

### SUSPENDED

Sospensione temporanea della Purpose.\
Raggiungibile a seguito di una o più delle seguenti condizioni:

* sospensione manuale da parte del Fruitore
* sospensione manuale da parte dell'Erogatore

**Caratteristiche:**

* Purpose temporaneamente non operativa
* Stato reversibile

**Transizioni possibili:**

* **ACTIVE**: non sospesa dall'Erogatore e riattivata dal Fruitore e la stima di carico è inferiore alle soglie previste dal Descrittore dell'E-Service, oppure se non sospesa dal Fruitore e riattivata dall'Erogatore, indipendentemente dal valore della stima di carico
* **WAITING\_FOR\_APPROVAL**: non sospesa dall'Erogatore, riattivata dal Fruitore e la stima di carico è superiore alle soglie previste dal Descrittore dell'E-Service. Viene creata una nuova Versione, la Versione con la precedente stima di carico rimane inalterata
* **SUSPENDED**: sospensione manuale, oppure attivazione dal Fruitore ma sospesa dall'Erogatore, o viceversa
* **ARCHIVED**: archiviazione manuale da parte del Fruitore, oppure automatica a seguito dell'Attivazione di una nuova stima di carico

### ARCHIVED

Versione della Purpose non più in uso.\
Raggiunto a seguito dell'archiviazione manuale o dell'attivazione di una Versione con nuova stima di carico.

**Caratteristiche:**

* Stato non reversibile
* Se non esiste una Versione corrente, la Purpose è considerata definitivamente archiviata

**Transizioni possibili:**

* Nessuna transizione possibile

### REJECTED

La stima di carico della Versione è stata rifiutata da parte dell'Erogatore.\
È possibile per il Fruitore richiedere nuovamente la modifica della stima di carico.

**Caratteristiche:**

* Stato non reversibile

**Transizioni possibili:**

* Nessuna transizione possibile
