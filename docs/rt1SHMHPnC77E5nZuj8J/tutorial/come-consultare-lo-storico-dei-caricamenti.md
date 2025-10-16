# Come consultare lo storico dei caricamenti

Questo tutorial descrive come accedere alla sezione **"Storico Caricamenti"** per monitorare lo stato di elaborazione dei file CSV inviati e come scaricare i report in caso di errori.

### Prerequisiti

Per consultare lo storico, è necessario aver già effettuato almeno un caricamento, come descritto nel tutorial [Come caricare un lotto di prodotti](come-caricare-un-elenco-di-prodotti.md).

### Procedura di consultazione

#### **Step 1 - Accedere allo storico**&#x20;

Dal menu di navigazione, selezionare la voce **"Storico Caricamenti"**.

#### **Step 2 - Visualizzare la tabella dei caricamenti**

<figure><img src="../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

Il sistema mostrerà una tabella contenente l'elenco di tutti i caricamenti effettuati. Per ogni lotto, vengono riportate le seguenti informazioni:

* **Data di caricamento**: Giorno e ora in cui il file è stato inviato.
* **Nome file**: Il nome del file `.csv` caricato.
* **Numero record**: il numero dei record trovati e il numero di record caricati.
* **Esito**: Lo stato finale dell'elaborazione del file.

#### Analisi dell'esito

L'esito di un caricamento indica se i prodotti contenuti nel file sono stati accettati dal sistema. I possibili stati sono:

| Esito                     | Descrizione                                                                    | Azione Richiesta                                           |
| ------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| **Caricato**              | Tutti i prodotti nel file sono stati validati e presi in carico correttamente. | Nessuna azione richiesta.                                  |
| **Caricato Parzialmente** | Alcuni prodotti nel file presentavano errori e sono stati scartati.            | Scaricare il **file di scarto** per analizzare gli errori. |
| **Rifiutato**             | Nessun prodotto nel file è stato accettato a causa di errori bloccanti.        | Scaricare il **file di scarto** per analizzare gli errori. |

#### **Step 3 - Scaricare il file di scarto (se necessario)**&#x20;

In caso di esito **"Caricato Parzialmente"** o **"Rifiutato"**, nella riga corrispondente al caricamento apparirà un'icona per il download. Facendo clic su questa icona, il Produttore può scaricare un nuovo file CSV contenente solo le righe dei prodotti scartati e una colonna aggiuntiva con la descrizione dell'errore.

#### Prossimi Passi

Dopo aver scaricato il file di scarto, è necessario analizzare gli errori per correggerli. La procedura di analisi e correzione è descritta nel tutorial [Come gestire gli errori di caricamento](come-gestire-gli-errori-di-caricamento.md).
