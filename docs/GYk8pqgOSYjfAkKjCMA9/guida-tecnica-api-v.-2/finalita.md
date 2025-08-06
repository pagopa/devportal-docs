# Finalità

## Panoramica

Il documento descrive il ciclo di vita di una finalità, tecnicamente denominata **Purpose**, dettagliando gli stati che può assumere e le condizioni necessarie per le transizioni tra stati.\
Si rimanda alla [documentazione](../guida-tecnica/finalita/) per ulteriori informazioni sulle finalità.

## Versioni di una finalità

Una Purpose è composta da una o più versioni:

* `currentVersion`: se presente, contiene una versione in stato **ACTIVE** o **SUSPENDED**
* `waitingForApprovalVersion`: se presente, contiene una versione in stato **WAITING\_FOR\_APPROVAL**
* `rejectedVersion`: se presente, contiene l'ultima versione rifiutata in stato **REJECTED**

Possono inoltre esistere ulteriori versioni all'interno di una Purpose, nei seguenti stati

* **ARCHIVED**: la versione contiene una stima di carico precedente
* **REJECTED**: la versione è stata rifiutata dall'erogatore

La modifica della stima di carico genera sempre una nuova versione all'interno della Purpose.\
Se la stima di carico è inferiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor), oppure viene approvata dall'Erogatore, la versione precedente della Purpose viene archiviata.

## Stati

Gli stati che una versione di finalità (**PurposeVersion**) può assumere sono:

* [DRAFT](finalita.md#draft)
* [WAITING\_FOR\_APPROVAL](finalita.md#waiting_for_approval)
* [ACTIVE](finalita.md#active)
* [SUSPENDED](finalita.md#suspended)
* [ARCHIVED](finalita.md#archived)
* [REJECTED](finalita.md#rejected)

I dettagli e le condizioni di transizione sono indicate nel diagramma e nelle descrizioni nelle sezioni che seguono.

<figure><img src="../.gitbook/assets/interop_api_v2_lifecycle_purpose.png" alt="" width="563"><figcaption><p>Diagramma di flusso che descrive i passaggi di stato</p></figcaption></figure>

### DRAFT

Stato iniziale della prima versione di una Purpose creata.

**Caratteristiche:**

* Stato iniziale

**Transizioni possibili:**

* **ACTIVE**: la stima di carico è inferiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor)
* **WAITING\_FOR\_APPROVAL**: la stima di carico è superiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor)
* _Cancellazione_

### WAITING\_FOR\_APPROVAL

La stima di carico supera le soglie previste dalla versione dell'e-service (EServiceDescriptor) ed è in attesa di approvazione da parte dell'erogatore.

**Caratteristiche:**

* Se la versione corrente è in stato **ACTIVE**, la Purpose può essere utilizzata per la generazione del voucher
* L'eventuale attivazione archivia la versione corrente della Purpose
* La cancellazione e il rifiuto non hanno effetti sulla versione corrente

**Transizioni possibili:**

* **ACTIVE**: la stima di carico è stata approvata dall'erogatore
* **REJECTED**: la stima di carico è stata rifiutata dall'erogatore. Se esiste una versione corrente, rimane inalterata
* _Cancellazione_

### ACTIVE

Purpose operativa.

**Caratteristiche:**

* Unico stato che consente la generazione del voucher

**Transizioni possibili:**

* **ACTIVE**: la stima di carico viene modificata e rimane inferiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor). Viene creata una nuova versione, la versione con la precedente stima di carico viene archiviata
* **SUSPENDED**: sospensione manuale
* **WAITING\_FOR\_APPROVAL**: la stima di carico aggiornata è superiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor). Viene creata una nuova versione, la versione con la precedente stima di carico rimane inalterata
* **ARCHIVED**: archiviazione manuale da parte del fruitore, oppure automatica a seguito dell'attivazione di una nuova stima di carico

### SUSPENDED

Sospensione temporanea della Purpose. Raggiungibile a seguito di una o più delle seguenti condizioni:

* sospensione manuale da parte del fruitore
* sospensione manuale da parte dell'erogatore

**Caratteristiche:**

* Purpose temporaneamente non operativa
* Stato reversibile

**Transizioni possibili:**

* **ACTIVE**: non sospesa dall'erogatore e riattivata dal fruitore e la stima di carico è inferiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor), oppure se non sospesa dal fruitore e riattivata dall'erogatore, indipendentemente dal valore della stima di carico
* **WAITING\_FOR\_APPROVAL**: non sospesa dall'erogatore, riattivata dal fruitore e la stima di carico è superiore alle soglie previste dalla versione dell'e-service (EServiceDescriptor). Viene creata una nuova versione, la versione con la precedente stima di carico rimane inalterata
* **SUSPENDED**: sospensione manuale, oppure attivazione dal fruitore ma sospesa dall'erogatore, o viceversa
* **ARCHIVED**: archiviazione manuale da parte del fruitore, oppure automatica a seguito dell'attivazione di una nuova stima di carico

### ARCHIVED

Versione della Purpose non più in uso. Raggiunto a seguito dell'archiviazione manuale o dell'attivazione di una versione con nuova stima di carico.

**Caratteristiche:**

* Stato non reversibile
* Se non esiste una versione corrente, la Purpose è considerata definitivamente archiviata

**Transizioni possibili:**

* Nessuna transizione possibile

### REJECTED

La stima di carico della versione è stata rifiutata da parte dell'erogatore.\
È possibile per il fruitore richiedere nuovamente la modifica della stima di carico.

**Caratteristiche:**

* Stato non reversibile

**Transizioni possibili:**

* Nessuna transizione possibile
