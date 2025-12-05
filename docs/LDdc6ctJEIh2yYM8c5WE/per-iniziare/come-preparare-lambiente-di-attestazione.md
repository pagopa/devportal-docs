# Come preparare l'Ambiente di Attestazione

## Step 1: Accesso all'Ambiente

È necessario effettuare la login mediante SPID o CIE sul portale PagoPA [Area Riservata](https://selfcare.pagopa.it/auth/login).

Dopo aver effettuato la login e selezionato l'ente si seleziona il prodotto "Interoperabilità Attestazione".

Cliccando su “Entra” si avrà accesso a tutte le funzionalità previste all'interno del portale.

## Step 2: Sottoscrizione di un e-service

Il primo passo per poter sfruttare tutte le potenzialità di un e-service è quello di sottoscriversi allo stesso.

Navigando sul menu accediamo a _Fruizione > Catalogo e-service_ e va scelto il servizio più adatto (Tutorial per maggiori dettagli).

Si accede all'e-service e si seleziona il pulsante “Richiedi fruizione” presente sulla spalla destra.

Si segue la procedura sino a effettuare l'azione “Inoltra richiesta”.

Quando la richiesta di fruizione viene approvata e attivata, si potrà procedere alla creazione delle finalità.

## Step 3: Creazione di una finalità

Per creare una nuova finalità bisogna accedere alla voce di menu “Fruizione > Le tue finalità”, cliccare sul pulsante “Crea nuovo” e seguire la procedura guidata per la creazione.

Ogni finalità è associata a uno degli e-service a cui si ha aderito: per ognuna di esse bisogna definire uno scopo e la modalità in cui verrà utilizzato (es. numero di chiamate nell'arco di una giornata).

Con una finalità attiva si può implementare il flusso per ottenere un voucher spendibile tramite l'API dell'erogatore.

## Step 4: Creazione di un client

Completati gli step precedenti bisogna creare un client che metterà in relazione le varie entità.

Dal menu presente sulla spalla sinistra bisogna accedere alla sezione “Fruizione > I tuoi client e-service” e seguire la procedura guidata: verrà chiesto di selezionare anche una chiave pubblica ed è presente a [questo link](https://www.youtube.com/watch?v=q6zuJ2wn8vM\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3_Q\&index=11) la guida di caricamento della chiave pubblica.

Lo step di creazione del client e in particolare della chiave pubblica è un passo fondamentale per ottenere il Voucher che potrà poi essere speso presso gli e-service selezionati.

I Voucher sono di fatto dei token JWT (JSON Web Token). L'autenticazione segue il flusso di OAuth 2.0.

È possibile utilizzare la funzione di Creazione Portachiavi per salvare una lista di chiavi pubbliche da caricare sulla piattaforma di attestazione da utenti autorizzati. Tali chiavi potranno poi essere utilizzate dai fruitori per verificare l'integrità della response ricevuta dall'erogatore a fronte di una richiesta sull'e-service che integra tale funzionalità, senza modifiche all'invocazione dell'e-service.

Per la creazione portachiavi  bisogna accedere alla voce di menu “Erogazione > I tuoi portachiavi”.

## Step 5: Generazione del Voucher

Il primo passo consiste nel creare una client assertion valida e firmarla con la chiave privata, che deve corrispondere alla chiave pubblica depositata sotto la sezione “I tuoi client e-service”. La client assertion è composta da due parti principali: un header e un payload.

Nell'header andranno inseriti tre campi:

* **kid:** l'id della chiave che si usa per firmare l'asserzione, reperibile all'interno del client, sotto la sezione “Client assertion”;
* **alg:** l'algoritmo usato per firmare il JWT (valorizzare con RS256);
* **typ:** il tipo di oggetto che si sta inviando (valorizzare con JWT).

Nel payload ci saranno invece i seguenti campi:

* **iss:** l'issuer, ovvero il clientId;
* **sub:** il subject, anche in questo caso è il clientId;
* **aud:** l'audience, reperibile sempre nella sezione dedicata al client;
* **purposeId:** l'id della finalità;
* **jti:** il JWT ID, un id unico random generato a cura del chiamante;
* **iat:** l'issued at, il timestamp riportante data e ora in cui viene creato il token, espresso in [UNIX epoch](https://datatracker.ietf.org/doc/html/rfc3339) (valore numerico, non stringa);
* **exp:** l'expiration, il timestamp riportante data e ora di scadenza del token, espresso in [UNIX epoch](https://datatracker.ietf.org/doc/html/rfc3339) (valore numerico, non stringa).

Una volta firmata l'asserzione, prendere l'output e tenerlo da parte.

Il secondo passaggio è chiamare il server autorizzativo di PDND Interoperabilità con la client assertion per ottenerne in cambio un voucher spendibile presso l'e-service desiderato.

L'URL dell'endpoint per l'ambiente di attestazione è il seguente:

`https://auth.att.interop.pagopa.it/token.oauth2`

L'endpoint deve essere invocato con i seguenti parametri nel body della richiesta:

* **client\_id:** il clientId usato nell'assertion;
* **client\_assertion:** il contenuto dell'asserzione firmata ottenuta nel primo passaggio;
* **client\_assertion\_type:** il formato della client assertion, come indicato in RFC (sarà sempre urn:ietf:params:oauth:client-assertion-type:jwt-bearer);
* **grant\_type:** la tipologia di flusso utilizzato, come indicato in RFC (sempre client\_credentials).

Se tutti i passaggi sono stati effettuati in maniera corretta, PDND Interoperabilità risponderà con un voucher valido all'interno del body della risposta.

Nello specifico il voucher sarà riportato nella proprietà access\_token. Nella risposta sarà anche presente la durata di validità del token in secondi (es. "expires\_in": 600 indica un token con validità 10 minuti, 10 \* 60 secondi = 600).

Il token ottenuto dovrà essere inserito nell'header Authorization: Bearer per tutte le chiamate fatte verso l'e-service.
