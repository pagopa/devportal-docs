# Come generare il corredo crittografico e caricare una chiave pubblica

Il client che hai creato nel tutorial precedente è, al momento, un contenitore vuoto. Per poterlo utilizzare, devi dotarlo di un'identità crittografica. Questo si ottiene attraverso una coppia di chiavi asimmetriche (pubblica e privata) che funzionano insieme per garantire la sicurezza:

* La **chiave privata** è un file segreto che risiede sulla tua applicazione. Verrà usata per "firmare" le richieste, dimostrando in modo inequivocabile che provengono da te. **Questa chiave non deve mai essere condivisa**.
* La **chiave pubblica** è la sua controparte, che può essere condivisa pubblicamente. La caricherai sul client all'interno della piattaforma, che la userà per verificare le firme apposte con la tua chiave privata.

Questo meccanismo garantisce che solo la tua applicazione, in possesso della chiave privata, possa utilizzare il client per autenticarsi e richiedere voucher.

### Prerequisiti

* Aver creato un client sul back-office (Vedi tutorial: [2.2 Come creare un client](https://www.google.com/search?q=...)).
* Avere accesso a un ambiente a riga di comando (terminale) con il software **OpenSSL** installato.
* Accedere al back-office con un utente che abbia il ruolo di **Amministratore** o **Operatore di Sicurezza**.

### Procedura

La procedura si divide in due parti: la generazione delle chiavi in locale e il caricamento della chiave pubblica sulla piattaforma.

### Parte 1: Generazione della Coppia di Chiavi

#### Step 1: Aprire un terminale

Apri una finestra del terminale o del prompt dei comandi sul tuo computer.

#### Step 2: Generare la chiave privata

Esegui il seguente comando per generare una chiave privata RSA a 4096 bit. Verrà creato un file chiamato `private.pem`.

```bash
openssl genrsa -out private.pem 4096
```

> **ATTENZIONE**: Il file `private.pem` è un segreto. Trattalo con la massima cura, non condividerlo mai e conservalo in un luogo sicuro accessibile solo alla tua applicazione.

#### Step 3: Estrarre la chiave pubblica

Ora, estrai la chiave pubblica corrispondente dalla chiave privata appena creata. Questo comando leggerà il file `private.pem` e creerà un nuovo file `public.pem` contenente solo la chiave pubblica.

```bash
openssl rsa -in private.pem -pubout -out public.pem
```

Il file `public.pem` è quello che dovrai caricare sulla piattaforma ed è sicuro da condividere.

### Parte 2: Caricamento della Chiave Pubblica sulla Piattaforma

#### Step 4: Accedere alla gestione del client

Torna sul back-office di PDND Interoperabilità. Naviga in **"Fruizione"** → **"Client"** e fai clic sul client che hai creato in precedenza.

#### Step 5: Avviare il caricamento della chiave

All'interno della pagina di dettaglio del client, individua la sezione relativa alle chiavi pubbliche e fai clic sul pulsante per aggiungerne una (es. "Aggiungi una chiave pubblica").

#### Step 6: Caricare il file e salvare

Si aprirà un modulo di caricamento.

1. Seleziona il file `public.pem` che hai generato allo Step 3.
2. Fai clic su "Conferma" o "Salva" per completare l'upload.

#### Step 7: Salvare l'identificativo della chiave (kid)

Dopo il caricamento, la piattaforma assocerà la chiave al client e le assegnerà un identificativo univoco chiamato **Key ID (`kid`)**. Questo `kid` è estremamente importante: dovrà essere utilizzato dalla tua applicazione ogni volta che costruirà una richiesta di voucher.

**Copia questo `kid` e conservalo in modo sicuro insieme alla tua chiave privata.**

### Prossimi Passi

Ora il tuo client ha un'identità crittografica. L'ultimo passo per renderlo pienamente operativo è associarlo a uno scopo specifico, come descritto nel prossimo tutorial: [**Come associare un client a una finalità**](https://www.google.com/search?q=...).
