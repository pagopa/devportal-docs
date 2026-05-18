---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/UdBZLK0IXWx2yqcEv6ks/tutorial-per-i-psp/02-ext-processo-citizen-activation
---

# Come attivare un utente al servizio

Questo tutorial guida attraverso il processo tecnico di attivazione di un utente. Questa operazione è fondamentale per registrare il consenso dell'utente a ricevere i messaggi di cortesia di SEND.

Il cittadino, tramite il canale del PSP (App Bancaria), può richiedere l’attivazione del servizio di messaggi di cortesia, accettando i Termini di Servizio (ToS) e prendendo visione dell'Informativa Privacy del PSP. Si precisa sin d'ora che i ToS predisposti dal PSP dovranno contenere una descrizione della piattaforma SEND conforme a quella che verrà fornita da PagoPA, nonchè la previsione che con l'attivazione del servizio, il Cittadino accetti di eleggere domicilio ai fini dei messaggi di cortesia nell'app bancaria del PSP stesso. Una volta ottenuto il consenso, viene invocata l’API dedicata messa a disposizione da PagoPA per attivare il servizio.

L’attivazione può avvenire direttamente attraverso il canale del PSP, senza la necessità di passare per il portale SEND, poiché l'autenticazione (SCA) effettuata sui sistemi del PSP è considerata sufficiente ai fini dell’attivazione del servizio.

Il Cittadino deve avere la possibilità di modificare in qualsiasi momento le proprie preferenze di comunicazione, compresa la **disattivazione** stessa del servizio.

### **Pre-condizioni**

* L’utente effettua l’autenticazione sull'App del PSP e richiede l’attivazione del servizio di messaggi di cortesia.

### **Requisiti Utente**

* L’utente che ha attivato il servizio deve poter ricevere i messaggi di cortesia sull'App del PSP.
* Attivando il servizio, l’utente riceverà tutti i messaggi con o senza pagamento associato.
* All’utente devono essere inviati i messaggi di cortesia se ha attivato il servizio sull'app del PSP anche se non ha ancora effettuato il primo accesso a SEND.
* L’utente deve poter accettare i Termini di Servizio (ToS).
* L’utente deve avere piena consapevolezza del consenso fornito e del servizio a cui sta aderendo.
* L’utente deve poter recuperare i Termini di Servizio e l'Informativa sulla Privacy direttamente dal PSP
* L’utente deve poter modificare o disattivare il servizio in qualsiasi momento sul canale del PSP (App)

### **Post-condizioni**

* Se l’utente dopo aver ricevuto un messaggio di cortesia vuole disattivare la comunicazione del servizio, può farlo tramite il canale del PSP (App).

```mermaid
sequenceDiagram
    autonumber

%%title Attivazione Servizio da parte del Cittadino da Canale TPP/PSP    

%% Partecipanti
    actor Cittadino
    participant BETPP as Backend TPP/PSP
    participant EMD as EMD

 %% PRIMO BLOCCO: Autenticazione
    Cittadino->>BETPP: Authentication Cittadino (SCA)
    activate Cittadino
    activate BETPP
    BETPP-->>Cittadino: Authentication Cittadino (SCA) OK
    deactivate BETPP
    deactivate Cittadino

%% SECONDO BLOCCO: attivazione a cascata
    Note right of Cittadino: Inizio attivazione a cascata
    Cittadino->>BETPP: ActivateMSG
    activate Cittadino
    activate BETPP
    
    BETPP->>EMD: Richiede autenticazione (Get AccessToken)
    activate EMD
    EMD-->>BETPP: result 201 (AccessToken)
    deactivate EMD
    
    BETPP->>EMD: Salva Consensi (AccessToken+CF)
    activate EMD
    EMD-->>BETPP: Response OK Salva Consensi
    deactivate EMD
    
    BETPP-->>Cittadino: Response OK
    deactivate BETPP
    deactivate Cittadino
```

## Step 1: Ottenere l'AccessToken (Autenticazione)

Come per tutte le operazioni verso la piattaforma, il primo passo consiste nell'ottenere un token di autenticazione valido.

1. Effettuare una chiamata al server di autenticazione PagoPA utilizzando lo schema **OAuth 2.0 Client Credentials flow**.
2. Includere nella richiesta il _client\_id e il client\_secret_, che hai ricevuto durante il processo di adesione.
3. Il server risponderà con un AccessToken da utilizzare nel passo successivo.

## Step 2: Preparare il corpo della richiesta

Per attivare un utente bisognerà richiamare la API POST: `/emd/citizen/{fiscalCode}/{tppId}` fornendo il token di autorizzazione recuperato dal sistema autorizzativo. Il cittadino nel momento in cui accetterà i ToS, prenderà visione dell'Informativa Privacy e attiverà il servizio lato App Terza, fornirà alla nostra API due informazioni:

* `fiscalCode`: codice fiscale del cittadino
* `tppId`: identificativo univoco del Prestatore di Servizi di Pagamento (PSP)

## Step 3: Invocare l'API di Attivazione

Una volta ottenuto l'AccessToken e preparato il payload, sarà possibile procedere con la richiesta di attivazione.

**Endpoint**

```http
POST /emd/citizen/{fiscalCode}/{tppId}
```

Occorrerà includere l'AccessToken nell'header Authorization come Bearer Token.

## Step 4: Gestire la risposta del servizio

L'esito della chiamata informa se l'attivazione è andata a buon fine o se l'utente era già attivo.

* Caso di Successo (200 Created) La risposta indica che l'utente è stato attivato con successo.
* Caso di Richiesta errata (400 Bad Request)

In caso di esito positivo la risposta sarà la seguente:

```json
{
  "fiscalCode": "RSSMRO92S18L048H",
  "consents": {
    "0e3bee29-8753-447c-b0da-1f7965558ec2-1706867960900": {
      "tppState": true,
      "tcDate": "2024-11-01T11:25:40.695Z"
    }
  }
}
```

Ossia l'indicazione sul Codice fiscale dell'utente che ha accettato i consensi e un oggetto consents con all'interno:

* `tppState`: booleano che indica lo stato del consenso fornito (true-> aderente e false -> non aderente)
* `tcDate`: indica la data di accettazione/non accettazione dei consensi
