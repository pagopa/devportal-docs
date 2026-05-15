---
description: >-
  Informazioni utili sui passi da seguire per generare il Voucher che permette
  di utilizzare i servizi PND da Interoperabilità
---

# Creazione richiesta di fruizione generazione Voucher per SEND - UAT (Piattaforma Notifiche)

Di seguito vengono elencati i passaggi che permettono si generare il Voucher necessario per chiamare i servizi PND a seguito del completamento dell'adesione ad Interoperabilità.

I seguenti passaggi sono anche documentati nei quick start [https://developer.pagopa.it/pdnd-interoperabilita/quick-start](https://developer.pagopa.it/pdnd-interoperabilita/quick-start)

### Effettuare il login

E' possibile accedere ad Interoperabilità da qui:\
[https://selfcare.pagopa.it/auth/login](https://selfcare.pagopa.it/auth/login)\
inserendo le credenziali SPID/CIE dell'Amministratore. Una volta entrati, apparirà l'elenco degli Enti associati e sarà necessario selezionare quello di interesse ed accedere, poi selezionare la card:

<figure><img src="../../.gitbook/assets/image (6) (1).png" alt=""><figcaption></figcaption></figure>

e selezionare "Collaudo"

![](<../../.gitbook/assets/image (29).png>)

### Creare una richiesta di fruizione per l'e-service di SEND - UAT

Per inviare una richiesta di fruizione bisogna prima cercare l'e-service andando su _Fruizione > Catalogo e-service:_

<figure><img src="../../.gitbook/assets/image (5) (2).png" alt="" width="366"><figcaption></figcaption></figure>

poi avviare la ricerca dell'e-service di SEND - UAT e cliccare su _Richiedi fruizione_ creando una bozza di richiesta dove inserire tutte le informazioni richieste, tra cui gli attributi, che si dividono in:

* **Attributi certificati:** vengono verificati tramite le banche dati delle istituzioni.
* **Attributi Verificati:** vengono verificati dall’erogatore del servizio a seguito dell'invio della documentazione da parte del fruitore.
* **Attributi Dichiarati:** vengono dichiarati da chi effettua la richiesta di fruizione sotto la propria responsabilità

Maggiori dettagli sugli attributi sono qui: [https://docs.pagopa.it/interoperabilita-1/manuale-operativo/attributi](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/attributi)\
il video-tutorial è qui:\
[https://www.youtube.com/watch?v=zmyQIQHAo\_0\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3\_Q\&index=8](https://www.youtube.com/watch?v=zmyQIQHAo_0\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3_Q\&index=8)

Quando la richiesta di fruizione è stata compilata con successo, cliccare su "Inoltra richiesta di fruizione"

<figure><img src="../../.gitbook/assets/image (44).png" alt="" width="375"><figcaption></figcaption></figure>

Una volta che la richiesta di fruizione è stata inviata, questa verrà esaminata dall'Erogatore che dovrà approvarla. È sempre possibile verificare lo stato delle richieste di fruizione presentate andando su _Fruizione > Le tue richieste_.

### Creare una finalità per l'e-service di SEND - UAT

A seguito dell'approvazione della richiesta di fruizione per l'e-service di SEND - UAT è necessario creare una finalità andando su _Fruizione > Finalità inoltrate_ e cliccando "**+1 Crea Nuovo**"_._

<figure><img src="../../.gitbook/assets/image (11).png" alt="" width="150"><figcaption></figcaption></figure>

Compilare tutti i dati che appaiono sul Form, in particolare:

* **e-service da associare:** che dovrà corrispondere a quello di SEND - UAT
* **numero di chiamate stimate API/giorno:** corrisponde alla stima di chiamate al giorno che verranno effettuate verso l’erogatore. Questo valore potrà essere aggiornato in seguito e potrebbe essere necessaria l'attivazione manuale da parte dall’erogatore.

nella pagina successive bisogna compilare la sezione di analisi del rischio ed infine cliccare su "Crea bozza finalità" per pubblicare la finalità.

<figure><img src="../../.gitbook/assets/image (8) (1).png" alt="" width="563"><figcaption></figcaption></figure>

### Associare un client ad una finalità

Il client è un contenitore di materiale crittografico nel quale vengono inseriti un numero discrezionale di operatori di sicurezza, che sono autorizzati a caricare la chiave pubblica del materiale crittografico in loro possesso.\
Per creare un nuovo client bisogna andare nella sezione _Gestione dei Client > API e-service_ e cliccando su "**+1 Crea Nuovo**"

<figure><img src="../../.gitbook/assets/image (12).png" alt="" width="147"><figcaption></figcaption></figure>

Compilare tutti i dati che appaiono sul Form, selezionando tra gli operatori quelli abilitati ad operare nel back-office.

Una volta creato un client, sarà possibile associarlo ad una finalità, entrando in _Fruizione > Finalità inoltrate,_ poi nel tab "Client associati" cliccare su "+1 Aggiungi"

<figure><img src="../../.gitbook/assets/image (12) (1).png" alt="" width="563"><figcaption></figcaption></figure>

Infine apparirà un menù a tendina che permette di selezionare i client da associare:\\

<figure><img src="../../.gitbook/assets/image (26).png" alt="" width="302"><figcaption></figcaption></figure>

I client possono anche essere riutilizzabili su più finalità e modificati successivamente.

### Caricare una chiave pubblica

Seleziona la voce di menu _Gestione dei Client -> API e-service,_ accedere al tab "Chiavi pubbliche" e cliccare sul pulsante "+1 Aggiungi"

<figure><img src="../../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

Apparirà una finestra che permette di inserire il nome e la chiave pubblica associata al client.

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt="" width="304"><figcaption></figcaption></figure>

Per generare il materiale crittografico, bisogna aprire il terminale e incollare i comandi che seguono, uno alla volta:

```
openssl genrsa -out <nomeChiave>.rsa.pem 2048
openssl rsa -in <nomeChiave>.rsa.pem -pubout -out <nomeChiave>.rsa.pub
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in <nomeChiave>.rsa.pem -out <nomeChiave>.rsa.priv
```

Sostituendo `<nomeChiave>` con il nome che si vuole dare al file contenente la chiave.

Il comando genererà una coppia di chiave pubblica e privata, ed un certificato che in questo caso non è necessario utilizzare. La chiave pubblica appena ottenuta, deve essere copiata nel riquadro "Chiave pubblica" del pop up del client; quella privata rimarrà in mano all'aderente, che la manterrà al sicuro e la userà per firmare la richiesta per ottenere un voucher dal server autorizzativo di PDND Interoperabilità.<br>

### Generare un Voucher

A questo punto è necessario generare il Voucher da inserire come Authorization header nelle chiamate verso i servizi B2B di SEND - UAT. Per prima cosa selezionare il client creato dalla pagina _Gestione dei Client -> API e-service_ e seguire la procedura guidata.

**1) Selezione Parametri:** Sceglire finalità e chiave da utilizzare definite nei passi precedenti.

<figure><img src="../../.gitbook/assets/image (17).png" alt="" width="375"><figcaption></figcaption></figure>

**2) Client assertion:** Cliccando sul pulsante "Avanti" vengono mostrati tutti i parametri per la creazione della client assertion e un esempio di script per la generazione:

<figure><img src="../../.gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure>

**NOTA:** modificare la variabile `PATH_CHIAVE_PRIVATA` con il percorso del file contente la chiave privata generata al punto precedente. Per creare la client assertion è possibile utilizzare il codice:\
[https://github.com/pagopa/pn-b2b-client/blob/develop/create-client-assertion/src/main/java/it/pagopa/pdnd/CreateClientAssertionApp.java](https://github.com/pagopa/pn-b2b-client/blob/develop/create-client-assertion/src/main/java/it/pagopa/pdnd/CreateClientAssertionApp.java)

E' disponibile il corrispettivo codice java della classe per generare la "Client assertion" [CreateClientAssertionApp](https://github.com/pagopa/pn-b2b-client/blob/develop/create-client-assertion/src/main/java/it/pagopa/pdnd/CreateClientAssertionApp.java).

**3) Voucher**: Salviamo l'output ottenuto ed andiamo nella terza passo dove dovremo lanciare il comando che troviamo nella pagina in basso per chiedere a PDND di gererare un token "Voucher".

<figure><img src="../../.gitbook/assets/image (14).png" alt="" width="447"><figcaption></figcaption></figure>

**NOTA:** modificare la variabile `LA_TUA_CLIENT_ASSERTION` con l'output ottenuto al punto precedente 2.\
Per riprodurre il comando si può anche prendere come esempio questo codice: [https://github.com/pagopa/pn-b2b-client/blob/102ba3b4d790a3ccd378bd187525d8cb6937ff07/src/main/java/it/pagopa/pn/client/b2b/pa/impl/PnPaB2bExternalClientImpl.java#L199-L212](https://github.com/pagopa/pn-b2b-client/blob/102ba3b4d790a3ccd378bd187525d8cb6937ff07/src/main/java/it/pagopa/pn/client/b2b/pa/impl/PnPaB2bExternalClientImpl.java#L199-L212)

Come risposta al comando otterremo una response che contiene **access\_token, expires\_in** e **token\_type.**

L'elemento **token\_type** indica la tipologia di token (`Bearer)`.

L'elemento **expires\_in** indica il numero di secondi il tempo di validità del token dal momento in cui è stato richiesto.

L'elemento **access\_token** corrisponde al Voucher che potrà essere utilizzato nelle chiamate verso i servizi B2B di SEND - UAT inserendolo come Header: `"Authorization: Bearer <Voucher>"`

### Chiamare i servizi SEND - UAT

Per chiamare i servizi PND sarà necessario utilizzare la baseUrl dell'Ambiente UAT: [https://api.uat.notifichedigitali.it](https://api.uat.notifichedigitali.it)

\
Inoltre sarà necessario generare delle nuove APIKey per l'Ambiente UAT effettuando l'accesso da qui: [https://selfcare.uat.notifichedigitali.it/](https://selfcare.uat.notifichedigitali.it/) con le stesse credenziali ottenute in fase di Onboarding, poi selezionare l'Ente di riferimento, cliccare su Piattaforma Notifiche UAT:\
![](<../../.gitbook/assets/image (43).png>)

e generare le APIKey da utilizzare come header `x-api-key` unitamente al Voucher appena creato inviato con l'header `"Authorization: Bearer <Voucher>"`.
