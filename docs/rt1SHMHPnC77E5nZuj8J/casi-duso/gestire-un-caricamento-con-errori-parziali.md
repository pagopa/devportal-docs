# Gestire un caricamento con errori parziali

Questo caso d'uso illustra lo scenario end-to-end più comune: il Produttore carica un file CSV che contiene sia prodotti validi sia prodotti con errori. L'obiettivo è mostrare il flusso completo per identificare, correggere e ricaricare con successo solo i prodotti che sono stati inizialmente scartati.

### Scenario

Un Produttore deve caricare un lotto di 10 nuovi elettrodomestici. Prepara il file `lotto_prodotti_q4.csv`, ma due delle righe contengono errori: una ha un codice EPREL non valido e l'altra un codice GTIN duplicato.

***

### Procedura&#x20;

#### Step 1 - Il Produttore carica il lotto iniziale

Il Produttore accede alla piattaforma e segue la procedura descritta nel tutorial [Come caricare un lotto di prodotti](../tutorial/come-caricare-un-elenco-di-prodotti.md). Seleziona la tipologia corretta (es. "Prodotti registrati su EPREL") e carica il suo file `lotto_prodotti_q4.csv`. Il sistema prende in carico il file per l'elaborazione.

#### Step 2 - Il Produttore verifica l'esito del caricamento

Dopo alcuni minuti, il Produttore accede alla sezione "Storico Caricamenti" per controllare lo stato dell'operazione, come spiegato in [Come consultare lo storico dei caricamenti](../tutorial/come-consultare-lo-storico-dei-caricamenti.md). Trova una nuova riga per il file `lotto_prodotti_q4.csv` con esito **"Caricato Parzialmente"**. Questo conferma che alcuni prodotti sono stati accettati, mentre altri no. Clicca sull'icona di download per scaricare il file di scarto, che il sistema nomina `scarto_lotto_prodotti_q4.csv`.

#### Step 3 - Il Produttore analizza gli errori e corregge il file

Il Produttore apre il file `scarto_lotto_prodotti_q4.csv`. Il file contiene solo le due righe che non sono state accettate, con una colonna aggiuntiva "Messaggio errore":

| Codice EPREL | Codice GTIN/EAN | ... | Messaggio errore                                                              |
| ------------ | --------------- | --- | ----------------------------------------------------------------------------- |
| 9999999      | 8003437042311   | ... | Il prodotto non è presente o caricato nell'elenco della Banca dati europea... |
| 2416729      | 8003437042399   | ... | Il codice GTIN indicato nel file CSV è un duplicato                           |

```
Seguendo le indicazioni del tutorial [Gestire gli errori di caricamento](placeholder-link), il Produttore:
1.  Corregge il codice EPREL errato (9999999) con quello giusto.
2.  Rimuove la riga con il GTIN duplicato.
3.  **Elimina la colonna "Messaggio errore"**.
4.  Salva il file corretto, che ora contiene una sola riga valida, con il nome `correzione_lotto_q4.csv`.
```

#### Step 4 - Il Produttore ricarica solo i prodotti corretti

Il Produttore torna alla sezione "Caricamento lotti" e carica il nuovo file `correzione_lotto_q4.csv`.

#### Step 5 - Il Produttore effettua la verifica finale

Infine, torna nello "Storico Caricamenti". Ora vede una nuova riga relativa al file `correzione_lotto_q4.csv`. Questa volta, l'esito è **"Caricato"**.

#### Conclusione

Il processo è completo. Tutti i 10 prodotti originali sono stati caricati con successo sulla piattaforma: 8 con il primo caricamento e i restanti 2 (dopo la correzione) con il secondo. Tutti i prodotti sono ora nello stato **"Da Esaminare"** e attendono la validazione da parte di Invitalia.
