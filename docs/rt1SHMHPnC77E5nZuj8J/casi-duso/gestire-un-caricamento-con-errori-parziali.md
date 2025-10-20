# Gestire un caricamento con errori parziali

Questo caso d'uso illustra lo scenario end-to-end più comune: il _Produttore_ carica un file CSV che contiene sia prodotti validi sia prodotti con errori. L'obiettivo è mostrare il flusso completo per identificare, correggere e ricaricare con successo solo i prodotti che sono stati inizialmente scartati.

### Scenario

Un _Produttore_ deve caricare un lotto di 10 nuovi _Elettrodomestici_. Prepara il file lotto\_prodotti\_q4.csv, ma due delle righe contengono errori: una ha un codice EPREL non valido e l'altra un codice GTIN duplicato.

***

### Procedura&#x20;

#### Step 1 - Il Produttore carica il lotto iniziale

Il _Produttore_ accede alla piattaforma e segue la procedura descritta nel tutorial [Come caricare un elenco di prodotti](../tutorial/come-caricare-un-elenco-di-prodotti.md). Seleziona la tipologia corretta e carica il suo file lotto\_prodotti\_q4.csv. Il sistema prende in carico il file per l'elaborazione.

#### Step 2 - Il Produttore verifica l'esito del caricamento

Dopo alcuni minuti, il _Produttore_ accede alla sezione **"Storico Caricamenti"** per controllare lo stato dell'operazione, come spiegato in [Come consultare lo storico dei caricamenti](../tutorial/come-consultare-lo-storico-dei-caricamenti.md). Trova una nuova riga per il file lotto\_prodotti\_q4.csv con esito **"Parziale"**. Questo conferma che alcuni prodotti sono stati accettati, mentre altri no. Clicca sull'icona di download per scaricare il file di scarto.

#### Step 3 - Il Produttore analizza gli errori e corregge il file

Il _Produttore_ apre il file generato che contiene solo le due righe che non sono state accettate, con una colonna aggiuntiva indicante la motivazione di esclusione.

| Codice EPREL | Codice GTIN/EAN | ... | Messaggio errore                                                              |
| ------------ | --------------- | --- | ----------------------------------------------------------------------------- |
| 9999999      | 8003437042311   | ... | Il prodotto non è presente o caricato nell'elenco della Banca dati europea... |
| 2416729      | 8003437042399   | ... | Il codice GTIN indicato nel file CSV è un duplicato                           |

Seguendo le indicazioni del tutorial [Gestire gli errori di caricamento](../tutorial/come-gestire-gli-errori-di-caricamento.md), il _Produttore_:

1. orregge il codice EPREL errato (9999999) con quello giusto;
2. rimuove la riga con il GTIN duplicato;
3. elimina la colonna **"Errore di validazione"**;
4. salva il file corretto, che ora contiene una sola riga valida, con il nome correzione\_lotto\_q4.csv.

#### Step 4 - Il Produttore ricarica solo i prodotti corretti

Il _Produttore_ torna alla sezione "Caricamento lotti" e carica il nuovo file correzione\_lotto\_q4.csv.

#### Step 5 - Il Produttore effettua la verifica finale

Infine, torna nello "**Storico Caricamenti**", dove troverà una nuova riga relativa al file correzione\_lotto\_q4.csv con esito **"Caricato"**.

#### Conclusione

Il processo è completo. Tutti i 10 prodotti originali sono stati caricati con successo sulla _Piattaforma informatica_: 8 con il primo caricamento e i restanti 2 (dopo la correzione) con il secondo. Tutti i prodotti sono ora nello stato **"Da Esaminare"** e attendono la validazione da parte di Invitalia S.p.A. .
