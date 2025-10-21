---
argomenti_correlati:
- come-consultare-lo-storico-dei-caricamenti.md
- ../riferimenti-tecnici/elenco-dei-codici-di-errore.md
funzione: tutorial
livello: intermedio
prodotto:
  nome: PARI - Bonus Elettrodomestici
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': HowTo
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  description: Questo tutorial guida il Produttore nell'analisi del file di scarto
    generato dal sistema, spiega come interpretare i messaggi di errore, come correggere
    i dati dei prodotti rifiutati e come prepararli per un nuovo caricamento.
  keywords:
  - errori caricamento
  - file scarto
  - validazione dati
  - CSV
  - bonus elettrodomestici
  name: Come gestire gli errori di caricamento dei prodotti
  step:
  - '@type': HowToStep
    name: Analizzare il file di scarto
    text: Aprire il file CSV di scarto. Questo file contiene solo i prodotti che non
      hanno superato la validazione e una colonna aggiuntiva denominata 'Errori di
      validazione', che descrive il motivo dello scarto per ogni riga.
  - '@type': HowToStep
    name: Interpretare i messaggi di errore
    text: Leggere il messaggio nella colonna 'Errori di validazione' per identificare
      il problema specifico. Per una lista completa degli errori, consultare la documentazione
      dei Riferimenti Tecnici.
  - '@type': HowToStep
    itemListElement:
    - '@type': HowToDirection
      text: Correggere le informazioni errate direttamente nelle celle corrispondenti
        del file di scarto.
    - '@type': HowToDirection
      text: Eliminare l'intera colonna 'Errori di validazione' dal file.
    - '@type': HowToDirection
      text: Salvare il file modificato. Ora contiene solo i prodotti corretti ed è
        pronto per essere ricaricato.
    - '@type': HowToDirection
      text: Tornare alla sezione 'Caricamento lotti' e ricaricare il file appena corretto.
    name: Correggere i dati e preparare un nuovo file
  tool:
  - '@type': HowToTool
    name: Editor di testo
  - '@type': HowToTool
    name: Foglio di calcolo (es. Microsoft Excel, Google Sheets)
  yield:
  - '@type': Thing
    description: Un file CSV contenente i prodotti precedentemente scartati, ora corretti,
      ricaricato con successo nel sistema con esito finale 'Caricato'.
    name: File di caricamento corretto e inviato
status: pubblicato
tecnologia:
- CSV
utente:
  ruolo: produttore
  tag:
  - errori
  - caricamento
  - validazione
  - file di scarto
  - EPREL
  tipo_ente: partner_tecnologico
---

# Come gestire gli errori di caricamento

Questo tutorial guida il _Produttore_ nell'analisi del file di scarto generato dal sistema, spiega come interpretare i messaggi di errore, come correggere i dati dei prodotti rifiutati e come prepararli per un nuovo caricamento.

## Prerequisiti

Per seguire questa guida, il _Produttore_ deve aver scaricato un file di scarto dalla sezione **"Storico Caricamenti"**, generato dal sistema a seguito di un caricamento con esito **"Parziale".**

La procedura di download è descritta nel tutorial [Come consultare lo storico dei caricamenti](come-consultare-lo-storico-dei-caricamenti.md).

## Procedura di gestione degli errori

Il processo si articola in tre fasi principali: analisi, correzione e nuovo caricamento.

### **Step 1 - Analizzare il file di scarto**&#x20;

Aprire con un editor di testo o un foglio di calcolo il file CSV scaricato. Questo file contiene **esclusivamente le righe dei prodotti che non hanno superato la validazione**.

Rispetto al file originale, è presente una colonna aggiuntiva, denominata **"Errori di validazione"**, che descrive il motivo specifico per cui ogni prodotto è stato scartato.

### **Step 2 - Interpretare i messaggi di errore**&#x20;

Ogni messaggio di errore indica un problema specifico da risolvere. Di seguito alcuni esempi comuni:

| Messaggio errore                                                              | Categoria     | Spiegazione                                                                                                                                      |
| ----------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Il codice GTIN indicato nel file CSV è un duplicato                           | Check Interni | Il codice **GTIN/EAN** è già presente in un'altra riga dello stesso file. È necessario rimuovere la riga duplicata.                              |
| Il prodotto non è presente o caricato nell'elenco della Banca dati europea... | EPREL         | Il prodotto non risulta pubblicato su EPREL e non può essere validato. Verificare la correttezza del codice e lo stato sulla banca dati europea. |
| La classe energetica non è conforme con quella prevista...                    | EPREL         | La classe energetica dichiarata non rispetta i requisiti minimi previsti dalla normativa per accedere al bonus.                                  |

\
Per una lista completa di tutti i possibili errori e delle relative azioni correttive, consultare la sezione [Elenco dei codici di errore](../riferimenti-tecnici/elenco-dei-codici-di-errore.md) nei **Riferimenti Tecnici**.

### **Step 3 - Correggere i dati e preparare un nuovo file**&#x20;

Una volta identificati gli errori, il _Produttore_ deve:

1. **correggere le informazioni** errate direttamente nelle celle corrispondenti del file di scarto;
2. **eliminare l'intera colonna "Messaggio errore"** dal file;
3. **salvare** il file così modificato. Il file ora contiene solo i prodotti precedentemente scartati, ma con i dati corretti, ed è pronto per essere ricaricato;
4. **ricaricare il file corretto** tornando alla sezione **"Caricamento lotti"** e ripetendo la procedura di caricamento utilizzando il nuovo file appena salvato.

#### Prossimi Passi

Dopo aver inviato il file corretto, il _Produttore_ dovrà nuovamente [consultare lo storico dei caricamenti](come-consultare-lo-storico-dei-caricamenti.md) per verificare che l'esito del nuovo lotto sia **"Caricato"**.