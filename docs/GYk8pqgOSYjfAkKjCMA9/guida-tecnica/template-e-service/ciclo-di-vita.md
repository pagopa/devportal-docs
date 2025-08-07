# Ciclo di vita

Un template di e-service può trovarsi nei seguenti stati:

* **bozza**: il template è in fase di creazione e non è ancora disponibile agli erogatori;
* **attivo**: il template è istanziabile dagli erogatori;
* **sospeso**: il template non è istanziabile dagli erogatori;
* **archiviato** (stato non ancora disponibile): il template non è più disponibile sul catalogo dei template.

### Pubblicazione di una nuova versione di template <a href="#pubblicazione-di-una-nuova-versione-di-template" id="pubblicazione-di-una-nuova-versione-di-template"></a>

Nel momento in cui si pubblica una nuova versione di template, la versione precedente è automaticamente ritirata. Questo significa che non potranno essere create nuove istanze a partire da quella versione e non si potrà più effettuare un aggiornamento delle istanze a quella versione.

### Creazione e gestione delle versioni <a href="#creazione-e-gestione-delle-versioni" id="creazione-e-gestione-delle-versioni"></a>

Un template e-service si comporta pressoché nella stessa maniera di un e-service. Finché è in stato di bozza, è visibile solamente al creatore del template stesso. Nel momento in cui viene pubblicata la prima versione, diventa disponibile sul catalogo dei template, e gli aderenti possono istanziare un proprio e-service a partire dal template.

**Se un template e-service ha bisogno di modifiche strutturali** (es. cambiamento del file di interfaccia API), **è necessario pubblicarne una nuova versione**.

La differenza principale da un semplice e-service è che i **campi da compilare si dividono in vincolati, suggeriti e da completare**.

**I campi vincolati** vengono compilati dal creatore del template e non possono essere modificati dagli enti che istanziano gli e-service. I campi vincolati sono:

* e-service: nome, descrizione, tecnologia, erogazione o ricezione dati, finalità (solamente in caso di ricezione dati);
* versione di e-service: descrizione, attributi, interfaccia API, durata voucher, documentazione tecnica.

**I campi suggeriti** sono quelli relativi alla gestione del day-by-day in carico all'erogatore. L'ente che istanzia il template può scegliere se accettare il suggerimento del creatore del template, o adattare i valori a propria discrezione. I campi suggeriti sono:

* e-service: disponibilità [Signal Hub](https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-signal-hub);
* versione di e-service: soglie chiamate API/giorno, accettazione automatica o manuale delle richieste di fruizione.

**I campi da completare** sono le informazioni specifiche del singolo ente. In questo caso dovrà essere l'erogatore dell'e-service a compilarle. I campi da completare sono:

* e-service: accettazione deleghe;
* versione di e-service: audience, campi a completamento interfaccia API (URL server, nome e indirizzo di contatto, URL termini e condizioni).

Per maggiori dettagli sulla struttura dell'e-service, si veda la [sezione dedicata](../e-service/#informazioni-essenziali).

### Sospensione e riattivazione <a href="#sospensione-e-riattivazione" id="sospensione-e-riattivazione"></a>

Nel momento in cui un template e-service viene sospeso, non sarà più disponibile per creare nuove istanze di e-service da esso. La modifica ha effetto da quel momento in poi e non ha impatti sulle istanze create in precedenza, neanche su quelle in stato di bozza.

Un template e-service sospeso può essere riattivato in qualsiasi momento.

### Utilizzare un proprio template <a href="#utilizzare-un-proprio-template" id="utilizzare-un-proprio-template"></a>

Un ente che ha creato un template può anche utilizzarne un'istanza per se stesso. Il vincolo rimane che potrà istanziare un solo e-service da un proprio template, per evitare che l'erogatore abbia più e-service con lo stesso nome e scopo. Anche in questo caso, fanno eccezione gli e-service ricevuti in gestione per delega, come descritto nella [sezione dedicata](../deleghe/).
