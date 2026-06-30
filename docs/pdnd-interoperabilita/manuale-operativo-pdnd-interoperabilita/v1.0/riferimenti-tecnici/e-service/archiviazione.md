# Archiviazione

L’archiviazione consente di rimuovere definitivamente dal Catalogo API le versioni obsolete o gli e-service che non si desidera più erogare. L’obiettivo è mantenere il catalogo aggiornato, garantendo al contempo il massimo della trasparenza e della continuità per gli enti che stanno già utilizzando i servizi. ​Quando una versione viene posta in stato **archiviato**:

* non è più visibile pubblicamente nel Catalogo
* nessun ente può richiederne l'uso o sottoscrivere un nuovo accordo
* viene interrotto l'accesso al servizio, bloccando la generazione di nuovi voucher

La piattaforma gestisce l’archiviazione in due modi: automatica (attivata dal sistema) o manuale (richiesta dall’erogatore). ​

#### Archiviazione automatica

Il sistema archivia una versione quando non presenta più alcuna sottoscrizione attiva, intervenendo in due situazioni specifiche:

* al momento della pubblicazione di una nuova versione: il sistema valuta lo stato della versione precedente: se questa ha zero utilizzatori attivi, viene archiviata immediatamente;
* alla dismissione dell'ultima richiesta di fruizione: se una versione deprecata o sospesa (purché non sia l'ultima versione) perde l'ultimo fruitore rimasto, la piattaforma la archivia.

#### Archiviazione manuale

L’erogatore può decidere di avviare volontariamente l'archiviazione di una singola versione o dell’intero e-service. In questo caso si attiva un periodo di **preavviso di 90 giorni** (ridotto a 7 giorni in ambiente di collaudo) durante il quale:

* i fruitori attivi continuano a scambiare dati e possono adottare le misure necessarie per migrare verso una versione più recente del servizio;
* l'erogatore può annullare il processo entro la scadenza del preavviso; in tal caso il sistema rimuove la pianificazione e ripristina lo stato precedente;
* l'erogatore può sospendere temporaneamente la versione in archiviazione; la sospensione inibisce il traffico API ma non interrompe né mette in pausa il flusso del periodo di preavviso.

Al periodo di preavviso va sommato un tempo tecnico di elaborazione — fino a un massimo di 72 ore — necessario alla piattaforma per rendere l'operazione effettiva a sistema. Durante questo tempo tecnico di archiviazione sarà ancora possibile scambiare dati. Concluso questo periodo la versione è posta in stato **archiviato**.

L’archiviazione manuale può essere richiesta per due diversi ambiti:

* archiviazione di una singola versione;
* archiviazione dell’intero e-service.

**Archiviazione di una singola versione**

Permette di programmare la dismissione di una specifica versione del servizio. ​Si può attivare solo se la versione interessata è in stato deprecato o sospeso (solo se non si tratta dell'ultima versione pubblicata). Chi sta già usando questa versione può continuare a farlo fino alla scadenza del preavviso. La piattaforma rifiuterà invece in automatico qualsiasi nuova richiesta di utilizzo da parte di altri enti. ​

**Archiviazione dell’intero e-service**

Permette di programmare la dismissione contemporanea di tutte le versioni di un e-service. ​ L’operazione è possibile solo se la versione più recente dell’e-service si trova in stato pubblicato o sospeso. Non appena si avvia la richiesta, il sistema elimina definitivamente tutte le versioni ancora in stato bozza o in attesa di approvazione. Tutte le versioni utilizzabili entrano insieme nel periodo di preavviso e saranno archiviate contemporaneamente alla scadenza del periodo.

***

Pagina successiva [→ Soglie e approvazioni](soglie-e-approvazioni.md)
