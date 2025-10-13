# Come gestire gli errori di caricamento

Questo tutorial guida il Produttore nell'analisi del **file di scarto** generato dal sistema. Spiega come interpretare i messaggi di errore, come correggere i dati dei prodotti rifiutati e come prepararli per un nuovo caricamento.

### Prerequisiti

Per seguire questa guida, il Produttore deve aver scaricato un file di scarto dalla sezione "Storico Caricamenti", a seguito di un caricamento con esito **"Caricato Parzialmente"** o **"Rifiutato"**.

La procedura di download è descritta nel tutorial [Come consultare lo storico dei caricamenti](come-consultare-lo-storico-dei-caricamenti.md).

### Procedura di gestione degli errori

Il processo si articola in tre fasi principali: analisi, correzione e nuovo caricamento.

#### **Step 1 - Analizzare il file di scarto**&#x20;

Aprire con un editor di testo o un foglio di calcolo il file `.csv` scaricato. Questo file contiene **esclusivamente le righe dei prodotti che non hanno superato la validazione**.

Rispetto al file originale, è presente una colonna aggiuntiva, denominata **"Messaggio errore"**, che descrive il motivo specifico per cui ogni riga è stata scartata.

#### **Step 2 - Interpretare i messaggi di errore**&#x20;

Ogni messaggio di errore indica un problema specifico da risolvere. Di seguito alcuni esempi comuni:

| Messaggio errore                                                                | Categoria     | Spiegazione                                                                                                                                      |
| ------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Il codice GTIN indicato nel file CSV è un duplicato`                           | Check Interni | Il codice **GTIN/EAN** è già presente in un'altra riga dello stesso file. È necessario rimuovere la riga duplicata.                              |
| `Il prodotto non è presente o caricato nell'elenco della Banca dati europea...` | EPREL         | Il prodotto non risulta pubblicato su EPREL e non può essere validato. Verificare la correttezza del codice e lo stato sulla banca dati europea. |
| `La classe energetica non è conforme con quella prevista...`                    | EPREL         | La classe energetica dichiarata non rispetta i requisiti minimi previsti dalla normativa per accedere al bonus.                                  |

\
Per una lista completa di tutti i possibili errori e delle relative azioni correttive, consultare la sezione [Elenco dei codici di errore](../riferimenti-tecnici/elenco-dei-codici-di-errore.md) nei Riferimenti Tecnici.

#### **Step 3 - Correggere i dati e preparare un nuovo file**&#x20;

Una volta identificati gli errori, il Produttore deve:

1. **Correggere le informazioni** errate direttamente nelle celle corrispondenti del file di scarto.
2. **Eliminare l'intera colonna "Messaggio errore"** dal file.
3. **Salvare** il file così modificato. Il file ora contiene solo i prodotti precedentemente scartati, ma con i dati corretti, ed è pronto per essere ricaricato.

* **Step 4 - Ricaricare il file corretto** Tornare alla sezione **"Caricamento lotti"** e ripetere la procedura di caricamento utilizzando il nuovo file appena salvato.

#### Prossimi Passi

Dopo aver inviato il file corretto, il Produttore dovrà nuovamente [Come consultare lo storico dei caricamenti](come-consultare-lo-storico-dei-caricamenti.md) per verificare che l'esito del nuovo lotto sia **"Caricato"**.
