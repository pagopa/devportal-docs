---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/jqqB3CsnONZdScwRg13O/riferimenti-tecnici/template-e-service/operazioni-e-ciclo-di-vita
---

# Operazioni e ciclo di vita

## Creazione e gestione delle versioni

Un **template e-service** si comporta in modo analogo a un e-service. Finché è **in bozza**, è **visibile solo al creatore** del template. Alla **pubblicazione della prima versione**, il template diventa **disponibile nel catalogo dei template** e gli aderenti possono **istanziarne** un proprio e-service.

Quando occorrono **modifiche strutturali** (es. aggiornamento del **file di interfaccia API**), si procede con la **pubblicazione di una nuova versione** del template.

La differenza principale rispetto a un e-service è la **tipologia dei campi** da compilare, suddivisi in:

* **Vincolati** (compilati dal creatore del template, **non modificabili** da chi istanzia):
  * **e-service**: nome, descrizione, tecnologia, erogazione o ricezione dati, finalità _(solo in caso di ricezione dati)_;
  * **versione di e-service**: descrizione, attributi, interfaccia API, durata voucher, documentazione tecnica.
* **Suggeriti** (parametri di gestione operativa, **adattabili** dall’erogatore):
  * **e-service**: disponibilità **Signal Hub**;
  * **versione di e-service**: soglie chiamate API/giorno, approvazione **automatica o manuale** delle richieste di fruizione.
* **Da completare** (informazioni **specifiche dell’ente**):
  * **e-service**: accettazione **deleghe**;
  * **versione di e-service**: **audience**, campi a completamento interfaccia API _(URL server, contatti, URL termini e condizioni)_.

Per maggiori dettagli sulla **struttura dell’e-service**, si veda la [sezione dedicata](../e-service/).

## Pubblicazione di una nuova versione di template

Alla **pubblicazione** di una **nuova versione** del template, la **versione precedente è ritirata automaticamente**:

* non possono essere **create nuove istanze** a partire dalla versione ritirata;
* non è più possibile **aggiornare istanze** alla versione ritirata.

## Sospensione e riattivazione

Quando un template viene **sospeso**, **cessa la possibilità** di **creare nuove istanze** a partire da esso. La sospensione **non modifica** le **istanze già create** (incluse quelle **in bozza**). Un template **sospeso** può essere **riattivato** in qualunque momento.

## Utilizzare un proprio template

L’ente che ha **creato** un template può **utilizzarne un’istanza** per sé. Resta il vincolo: è possibile **istanziarne uno solo** dallo **stesso template**, per evitare duplicazioni di **nome** e **scopo**; fanno eccezione gli **e-service in delega**, come descritto nella [sezione dedicata](../deleghe/).

## Stati

<table><thead><tr><th width="98.28121948242188">Stato</th><th>Descrizione</th><th>Azioni consentite</th></tr></thead><tbody><tr><td><strong>Bozza</strong></td><td>Il template è in preparazione ed è visibile solo al creatore; non è disponibile nel catalogo dei template.</td><td>Pubblicando la <strong>prima versione</strong> diventa <strong>attivo</strong> e istanziabile.</td></tr><tr><td><strong>Attivo</strong></td><td>Il template è pubblicato nel <strong>catalogo dei template</strong> ed è <strong>istanziabile</strong> dagli erogatori.</td><td>La <strong>pubblicazione di una nuova versione</strong> rende <strong>ritirata</strong> la versione precedente (non più instanziabile né aggiornabile). È possibile <strong>sospendere</strong> e successivamente <strong>riattivare</strong> il template.</td></tr><tr><td><strong>Sospeso</strong></td><td>Il template resta a catalogo ma <strong>non è istanziabile</strong>; le istanze già create (anche in bozza) non subiscono modifiche.</td><td>È possibile <strong>riattivarlo</strong> in qualsiasi momento per tornare allo stato <strong>attivo</strong>.</td></tr></tbody></table>

***

Pagina successiva [→ Relazione tra template e istanza](relazione-tra-template-e-istanza.md)
