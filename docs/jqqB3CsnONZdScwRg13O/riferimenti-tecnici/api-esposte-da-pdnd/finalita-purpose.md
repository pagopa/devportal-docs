# Finalità (Purpose)

Questa sezione illustra i concetti e le operazioni relative alla **finalità** nell’ambito delle **API di PDND Interoperabilità**. Per l’inquadramento funzionale e il ciclo di vita della finalità nella piattaforma, consultare la [sezione dedicata](../finalita/).

### Versioni della finalità e gestione della stima di carico

Una **Purpose** può comprendere più **versioni**:

* `currentVersion`: se presente, è **ACTIVE** oppure **SUSPENDED**;
* `waitingForApprovalVersion`: se presente, è **WAITING\_FOR\_APPROVAL**;
* `rejectedVersion`: se presente, è l’ultima versione **REJECTED**.

Possono inoltre esistere altre versioni:

* **ARCHIVED**: contiene una **stima di carico precedente**;
* **REJECTED**: versione la cui stima è stata **rifiutata** dall’erogatore.

La **modifica della stima di carico** genera **sempre** una **nuova versione** della Purpose.\
Se la stima è **inferiore alle soglie** previste dalla versione dell’**e-service (EServiceDescriptor)**, **oppure** viene **approvata** dall’erogatore, la **versione precedente** della Purpose viene **archiviata**.

### Stati e transizioni — Quadro di insieme

<table><thead><tr><th width="144.378173828125">Stato</th><th>Descrizione</th><th>Transizioni in uscita</th></tr></thead><tbody><tr><td><strong>DRAFT</strong></td><td>Stato iniziale della <strong>prima versione</strong> di una Purpose creata.</td><td><p>→ <strong>ACTIVE</strong> (stima ≤ soglie dell’EServiceDescriptor);</p><p>→ <strong>WAITING_FOR_APPROVAL</strong> (stima > soglie dell’EServiceDescriptor);</p><p>→ <em>cancellazione</em>.</p></td></tr><tr><td><strong>WAITING_FOR_APPROVAL</strong></td><td>Stima di carico <strong>sopra soglie</strong> e <strong>in attesa di approvazione</strong> dell’erogatore. La <strong>currentVersion</strong> (se <strong>ACTIVE</strong>) resta utilizzabile per il <strong>voucher</strong>; l’<strong>attivazione</strong> archivia la versione corrente; <strong>cancellazione</strong> e <strong>rifiuto</strong> non incidono sulla versione corrente.</td><td><p>→ <strong>ACTIVE</strong> (stima approvata dall’erogatore);</p><p>→ <strong>REJECTED</strong> (stima rifiutata; eventuale versione corrente invariata);</p><p>→ <em>cancellazione</em>.</p></td></tr><tr><td><strong>ACTIVE</strong></td><td>Purpose <strong>operativa</strong>; <strong>unico stato</strong> che consente la <strong>generazione del voucher</strong>.</td><td><p>→ <strong>ACTIVE</strong> (aggiornamento stima ≤ soglie: si crea <strong>nuova versione</strong> e la precedente viene <strong>archiviata</strong>);</p><p>→ <strong>WAITING_FOR_APPROVAL</strong> (aggiornamento stima > soglie: si crea <strong>nuova versione</strong>, la precedente resta invariata);</p><p>→ <strong>SUSPENDED</strong> (sospensione manuale);</p><p>→ <strong>ARCHIVED</strong> (archiviazione manuale o automatica dopo attivazione nuova stima).</p></td></tr><tr><td><strong>SUSPENDED</strong></td><td>Sospensione <strong>temporanea</strong> (manuale del fruitore o dell’erogatore). Stato <strong>reversibile</strong>.</td><td><p>→ <strong>ACTIVE</strong> (se <strong>non sospesa</strong> dall’erogatore e <strong>riattivata</strong> dal fruitore con stima ≤ soglie; <strong>oppure</strong> se <strong>riattivata dall’erogatore</strong> indipendentemente dalla stima);</p><p>→ <strong>WAITING_FOR_APPROVAL</strong> (non sospesa dall’erogatore, riattivata dal fruitore con stima > soglie: si crea <strong>nuova versione</strong>, la precedente resta invariata);</p><p>→ <strong>SUSPENDED</strong> (permane la sospensione, o riattivazione da un solo lato);</p><p>→ <strong>ARCHIVED</strong> (archiviazione manuale o automatica dopo attivazione nuova stima).</p></td></tr><tr><td><strong>ARCHIVED</strong></td><td>Versione <strong>non più in uso</strong>; stato <strong>non reversibile</strong>. Se non esiste una <strong>currentVersion</strong>, la Purpose è <strong>definitivamente archiviata</strong>.</td><td>— (nessuna transizione).</td></tr><tr><td><strong>REJECTED</strong></td><td>Stima di carico <strong>rifiutata</strong> dall’erogatore; lo stato è <strong>non reversibile</strong>. Il fruitore può <strong>richiedere nuovamente</strong> una modifica della stima.</td><td>— (nessuna transizione).</td></tr></tbody></table>

### Dettaglio degli stati

<figure><img src="../../../5esl1LsfE1mLepPADQoC/.gitbook/assets/interop_api_v2_lifecycle_purpose.png" alt="" width="563"><figcaption><p>Diagramma di flusso che descrive i passaggi di stato</p></figcaption></figure>

#### DRAFT

**Caratteristiche**

* Stato **iniziale** della prima versione della Purpose.

**Transizioni possibili**

* **ACTIVE**: la **stima di carico** è **inferiore o uguale** alle **soglie** dell’EServiceDescriptor.
* **WAITING\_FOR\_APPROVAL**: la **stima** è **superiore** alle **soglie**.
* _Cancellazione_.

#### WAITING\_FOR\_APPROVAL

**Caratteristiche**

* La stima **supera le soglie** dell’EServiceDescriptor ed è in **attesa** di approvazione dell’erogatore.
* Se la **versione corrente** è **ACTIVE**, la Purpose resta **utilizzabile** per la **generazione del voucher**.
* L’**attivazione** della versione approvata **archivia** la versione **corrente**.
* **Cancellazione** e **rifiuto** **non** incidono sulla versione corrente.

**Transizioni possibili**

* **ACTIVE**: stima **approvata** dall’erogatore.
* **REJECTED**: stima **rifiutata** dall’erogatore (eventuale versione corrente invariata).
* _Cancellazione_.

#### ACTIVE

**Caratteristiche**

* Purpose **operativa**.
* **Unico stato** che **consente la generazione del voucher**.

**Transizioni possibili**

* **ACTIVE**: la **stima viene modificata** e resta **≤ soglie**; si **crea una nuova versione** e la precedente viene **archiviata**.
* **WAITING\_FOR\_APPROVAL**: la **stima aggiornata** è **> soglie**; si **crea una nuova versione**, la precedente **rimane inalterata**.
* **SUSPENDED**: **sospensione manuale**.
* **ARCHIVED**: **archiviazione manuale** del fruitore **oppure** automatica dopo l’**attivazione** di una **nuova stima**.

#### SUSPENDED

**Condizioni di accesso**

* **Sospensione manuale** del **fruitore**.
* **Sospensione manuale** dell’**erogatore**.

**Caratteristiche**

* Purpose **temporaneamente non operativa**.
* Stato **reversibile**.

**Transizioni possibili**

* **ACTIVE**:
  * se **non sospesa dall’erogatore** e **riattivata dal fruitore** con **stima ≤ soglie**, **oppure**
  * se **riattivata dall’erogatore**, **indipendentemente** dalla stima.
* **WAITING\_FOR\_APPROVAL**: **non sospesa dall’erogatore**, **riattivata dal fruitore** con **stima > soglie**; si **crea nuova versione**, la precedente **resta invariata**.
* **SUSPENDED**: **permane** la sospensione (manuale o riattivazione asimmetrica).
* **ARCHIVED**: archiviazione **manuale** oppure **automatica** a seguito dell’**attivazione** di una **nuova stima**.

#### ARCHIVED

**Caratteristiche**

* Versione **non più in uso**.
* Stato **non reversibile**; se non esiste una **versione corrente (currentVersion)**, la Purpose è **definitivamente archiviata**.

**Transizioni possibili**

* Nessuna.

#### REJECTED

**Caratteristiche**

* La **stima di carico** della versione è stata **rifiutata** dall’erogatore.
* Stato **non reversibile**; il fruitore può **proporre nuovamente** una modifica della stima.

**Transizioni possibili**

* Nessuna.

***

Pagina successiva [→ E-service](../e-service/)
