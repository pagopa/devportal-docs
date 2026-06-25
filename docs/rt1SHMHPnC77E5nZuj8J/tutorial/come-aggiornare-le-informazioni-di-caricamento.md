---
argomenti_correlati:
- /come-caricare-un-elenco-di-prodotti
description: Questo tutorial spiega come modificare i dati di un prodotto già presente
  sulla piattaforma. La procedura di aggiornamento si basa sul ricaricamento delle
  informazioni tramite un nuovo file CSV.
funzione: tutorial
livello: principiante
prodotto:
  nome: PARI - Bonus Elettrodomestici - Manuale per il Produttore
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': HowTo
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  description: Questo tutorial spiega come modificare i dati di un prodotto già presente
    sulla piattaforma. La procedura di aggiornamento si basa sul ricaricamento delle
    informazioni tramite un nuovo file CSV.
  keywords:
  - aggiornamento prodotto
  - CSV
  - GTIN
  - EAN
  - sostituzione dati
  name: Come aggiornare le informazioni di caricamento
  proficiencyLevel: Beginner
  step:
  - '@type': HowToStep
    name: Preparare il file CSV di aggiornamento
    text: Creare un nuovo file .csv contenente una riga per ogni prodotto da aggiornare.
      Ogni riga deve riportare lo stesso Codice GTIN/EAN del prodotto esistente e
      i nuovi valori nelle altre colonne.
  - '@type': HowToStep
    name: Caricare il file
    text: Una volta preparato il file, seguire la procedura standard di caricamento
      descritta nel tutorial 'Come caricare un elenco di prodotti'.
status: pubblicato
tecnologia:
- CSV
utente:
  ruolo: produttore
  tag:
  - aggiornamento
  - prodotto
  - CSV
  - caricamento
  - GTIN
  - EAN
  tipo_ente: partner_tecnologico
---

# Come aggiornare le informazioni di caricamento

## Principio di funzionamento

La piattaforma identifica ogni prodotto in modo univoco tramite il suo **Codice GTIN/EAN**.

Non esiste una funzione di modifica manuale a schermo; per aggiornare un prodotto, è sufficiente caricare un nuovo file CSV che contenga una riga con lo stesso **Codice GTIN/EAN** del prodotto da modificare. Il sistema interpreterà questa operazione come una sostituzione (replace) e sovrascriverà i dati precedenti con quelli nuovi.

## Procedura di aggiornamento

### Step 1 - Preparare il file CSV di aggiornamento

Il _Produttore_ deve creare un nuovo file .csv che contenga una o più righe, una per ogni prodotto da aggiornare.

Per ogni prodotto da modificare, la riga deve:

1. riportare lo **stesso, identico Codice GTIN/EAN** del prodotto già esistente;
2. contenere nelle altre colonne i **nuovi valori** con cui si desidera aggiornare il prodotto.

È possibile includere nello stesso file sia prodotti da aggiornare che prodotti nuovi, non ancora presenti sulla piattaforma.

### Step 2 - Caricare il file

Una volta preparato il file, il _Produttore_ deve seguire la procedura standard di caricamento, esattamente come descritto nel tutorial [Come caricare un elenco di prodotti](come-caricare-un-elenco-di-prodotti.md).

## Cosa succede dopo l'aggiornamento

Una volta che il file di aggiornamento viene processato con successo:

* Il sistema riconosce i codici GTIN/EAN già esistenti e sostituisce le vecchie informazioni con quelle appena caricate;
* Il prodotto aggiornato viene nuovamente sottoposto al flusso di approvazione di Invitalia S.p.A. . Il suo stato tornerà in **"Da Esaminare"** e seguirà l'iter di verifica come se fosse un nuovo inserimento.

Il _Produttore_ può monitorare lo stato di approvazione del prodotto aggiornato consultando la lista dei propri prodotti o lo storico dei caricamenti.