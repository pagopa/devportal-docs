---
argomenti_correlati:
- /manuali/pari/come-caricare-un-elenco-di-prodotti
- /manuali/pari/riferimenti-tecnici/elenco-dei-codici-di-errore
- /manuali/pari/come-gestire-gli-errori-di-caricamento
description: Questo tutorial descrive come accedere alla sezione "Storico Caricamenti"
  per monitorare lo stato di elaborazione dei file CSV inviati e come scaricare i
  report in caso di errori.
funzione: tutorial
livello: principiante
prodotto:
  nome: PARI - Bonus Elettrodomestici - Manuale per il Produttore
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': TechArticle
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  dependencies: Aver completato la procedura 'Come caricare un elenco di prodotti'.
  description: Questo tutorial descrive come accedere alla sezione 'Storico Caricamenti'
    per monitorare lo stato di elaborazione dei file CSV inviati e come scaricare
    i report in caso di errori.
  isPartOf:
    '@type': CreativeWork
    name: PARI - Bonus Elettrodomestici - Manuale per il Produttore
    version: v1.0.0
  keywords:
  - storico caricamenti
  - file CSV
  - report
  - monitoraggio
  - file di scarto
  name: Come consultare lo storico dei caricamenti
  proficiencyLevel: Beginner
status: pubblicato
tecnologia:
- CSV
utente:
  ruolo: produttore
  tag:
  - storico caricamenti
  - file CSV
  - report
  - errori
  - file di scarto
  tipo_ente: partner_tecnologico
---

# Come consultare lo storico dei caricamenti

## Prerequisiti

Per consultare lo storico, è necessario aver già effettuato almeno un caricamento, come descritto nel tutorial [Come caricare un elenco di prodotti](come-caricare-un-elenco-di-prodotti.md).

## Procedura di consultazione

### **Step 1 - Accedere allo storico**&#x20;

Dal menu di navigazione, selezionare la voce **"Storico Caricamenti"**.

### **Step 2 - Visualizzare la tabella dei caricamenti**

<figure><img src="../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

Il sistema mostrerà una tabella contenente l'elenco di tutti i caricamenti effettuati. Per ogni lotto, vengono riportate le seguenti informazioni:

* **esito**: icona rappresentante lo stato finale dell'elaborazione del file;
* **nome file**: Il nome del file .csv caricato;
* **data di caricamento**: giorno e ora in cui il file è stato caricato;
* **numero record**: il numero dei record trovati e il numero di record caricati.

#### Analisi dell'esito

L'esito di un caricamento indica se i prodotti contenuti nel file sono stati accettati dal sistema. I possibili stati sono:

| Esito        | Descrizione                                                                    | Azione Richiesta                                                                                             |
| ------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Caricato** | Tutti i prodotti nel file sono stati validati e presi in carico correttamente. | Nessuna azione richiesta.                                                                                    |
| **Parziale** | Alcuni prodotti nel file presentavano errori e sono stati scartati.            | Scaricare il **file di scarto** per analizzare gli errori ed eventualmente eseguire un ulteriore caricamento |

### **Step 3 - Scaricare il file di scarto (se necessario)**&#x20;

In caso di esito "**Parziale"**, nella riga corrispondente al caricamento apparirà un'icona per il download. Facendo clic su questa icona, il _Produttore_ può scaricare un nuovo file CSV contenente solo le righe dei prodotti scartati e una colonna aggiuntiva con la descrizione dell'errore. E' possibile consultare la lista dei possibili errori nella sezione [Elenco dei codici di errore](../riferimenti-tecnici/elenco-dei-codici-di-errore.md).

#### Prossimi Passi

Dopo aver scaricato il file di scarto, è necessario analizzare gli errori per correggerli. La procedura di analisi e correzione è descritta nel tutorial [Come gestire gli errori di caricamento](come-gestire-gli-errori-di-caricamento.md).