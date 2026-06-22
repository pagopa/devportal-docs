# Come avviene il pagamento associato ad un messaggio

Dopo aver effettuato l’accesso al portale SEND tramite SPID o CIE e aver perfezionato la notifica, nel caso in cui la stessa preveda un pagamento, sarà possibile per l'Utente procedere al pagamento stesso.

{% hint style="warning" %}
\[**Vincolo di integrazione tra PSP e SEND**]

* È possibile accedere a SEND esclusivamente tramite l'apertura di un browser, sia all'interno dell'app bancaria che direttamente sul sistema operativo.
* Non è consentito l'utilizzo di WebView o iFrame, a causa delle restrizioni imposte dalla nostra Content Security Policy (CSP).
{% endhint %}

### **Pre-condizioni**

* L’Utente deve essersi autenticato tramite SPID o CIE alla piattaforma SEND
* L’Utente deve aver perfezionato la notifica sul portale SEND
* La notifica deve avere un pagamento pagoPA associato

### **Requisiti**

* L'Utente deve poter accedere alla notifica. A tal fine, il sistema **SEND** interroga **EMD** per eseguire le verifiche necessarie e determinare se l’Utente ha l’autorizzazione per visualizzare la notifica e procedere con il pagamento associato.
* **Scelta del metodo di Pagamento**: L’Utente deve poter selezionare il metodo di pagamento desiderato tra quelli disponibili ("Paga con la tua Banca" utilizzando **pagoPA** o **CBILL**) oppure tramite **Checkout**.
* Non sarà consentito effettuare il pagamento di eventuali F24 associati alla notifica ma solo di avvisi di pagamento di tipo pagoPA.
* **Consapevolezza delle alternative**: l’interfaccia deve informare l’Utente della possibilità di utilizzare metodi di pagamento alternativi a quello suggerito relativo all'App bancaria del PSP.
* **Canale di pagamento visualizzato**: Il metodo di pagamento del canale (app bancaria) da cui l’Utente è giunto sul portale SEND sarà visualizzato come opzione predefinita, ferma rimanendo la possibilità di concludere l'operazione di pagamento anche attraverso ceckout. Se l’Utente clicca sul bottone "Paga con la tua Banca" verrà richiamato il layer EMD che indirizzerà l'Utente all’App bancaria del PSP da cui ha attivato il flusso per concludere il pagamento.
* Il timer di 120 ore partirà dal momento in cui SEND invia il messaggio di cortesia e l'EMD darà risposta positiva.

```mermaid
sequenceDiagram
    autonumber
    
    actor User
    
    box rgb(249, 249, 255) User Device
        participant UA as User Agent
        participant Browser
    end
    
    participant TPP as PSP Server
    participant EMD as EMD Core
    participant SEND
    
    activate SEND
    SEND->>+EMD: POST /sendMessage
    Note right of SEND: header:<br/>Authorization: Bearer <access token x send><br/><br/>body:<br/>{<br/>  "messageId":"<uuid>",<br/>  "recipientId":"<cf destinatario>",<br/>  "triggerDateTime":"<trigger timestamp>",<br/>  "senderDescription":"<mittente>",<br/>  "originId":"<IUN>",<br/>  "messageUrl":"<url notifica digitale>",<br/>  "message":"<testo messaggio di cortesia>"<br/>}
    EMD->>EMD: verifica che l'utente destinatario sia abilitato
    EMD-->>-SEND: HTTP 202
    deactivate SEND
    
    EMD->>+TPP: invia messaggio di cortesia
    TPP-->>-EMD: ack
    
    rect rgb(248, 248, 255)
        Note over User,TPP: Don't care
    end
    
    activate User
    activate UA
    UA->>UA: visualizza dettagli messaggio di cortesia
    
    User->>UA: visualizza notifica digitale
    UA->>+TPP: costruisci token per accedere alla notifica digitale
    TPP->>+EMD: POST /retrievalTokens
    Note left of TPP: header:<br/>Authorization: Bearer access token x tpp<br/><br/>body:<br/>{<br/>····"agent": "agent label",<br/>····"originId": "IUN", <br/>····"linkVersion": "link version"<br/>}
    EMD->>EMD: identifica PSP da <access token x PSP>
    EMD->>EMD: ricerca <deeplink> e <psp denomination label><br/>usando <agent label> e identità del PSP
    EMD->>EMD: genera <retrieval id>
    EMD->>EMD: memorizza <retrieval payload> impostando un time-to-live
    Note right of EMD: <retrieval payload>:<br/>{<br/>  "retrievalId": "<retrieval id>",<br/>  "deeplink": "<deeplink>",<br/>  "pspDenomination": "<psp denomination label>",<br/>  "originId": "<IUN>",<br/>  "tppId": "<tppId>",<br/>  "isPaymentEnabled": "<isPaymentEnabled>"<br/>}
    EMD-->>-TPP: HTTP 201
    Note right of EMD: {<br/>  "retrievalId": "<retrieval id>"<br/>}
    TPP-->>-UA: <retrieval id>
    UA-->>User: ack
    
    UA->>+Browser: naviga verso <url notifica digitale>?<br/>retrievalId=<retrieval id>
    deactivate UA
    
    Browser->>+SEND: GET <url notifica digitale>?<br/>retrievalId=<retrieval id>
    
    rect rgb(248, 248, 255)
        Note over User,SEND: Autenticazione con CIE/SPID
    end
    
    SEND->>+EMD: GET /retrievalTokens/<retrieval id>
    Note right of SEND: header:<br/>Authorization: Bearer <access token x send>
    EMD->>EMD: ricerca <retrieval payload> per <retrieval id>
    EMD-->>-SEND: (°) HTTP 200
    Note left of EMD: <retrieval payload>:<br/>{<br/>  "retrievalId": "<retrieval id>",<br/>  "deeplink": "<deeplink>",<br/>  "pspDenomination": "<psp denomination label>",<br/>  "originId": "<IUN>",<br/>  "tppId": "<tppId>"<br/>}
    
    SEND->>SEND: costruzione pagina notifica digitale
    Note right of SEND: SEND ricercherà la notifica digitale da visualizzare tramite<br/>il campo originId contenente <IUN> recuperato<br/>nello step precedente (°).<br/><br/>Nella costruzione della pagina, SEND mostrerà un<br/>pulsante per permettere all'Utente di pagare con la propria Banca.<br/><br/><br/><br/>L'URL da adoperare per l'onclick (<onclick url>) del<br/>pulsante sarà un parametro di configurazione concordato<br/>fra SEND ed EMD e punterà sempre e soltanto ad un<br/>endpoint esposto da EMD (<emd endpoint>).<br/><br/>Questa URL deve essere completata da SEND che dovrà aggiungere:<br/><br/>1) il path param retrievalId valorizzandolo con<br/>   l'omonimo query ricevuto con la richiesta<br/><br/>2) i query param fiscalCode, noticeNumber e amount<br/>   contenenti il codice fiscale, il numero dell'avviso pagoPA<br/>   da pagare e l'importo.<br/><br/><onclick url>=<emd payment endpoint>/token?<br/>  retrievalId=<retrieval id>&<br/>  fiscalCode=<payee fiscal code>&<br/>  noticeNumber=<notice number>&<br/>  amount=<amount>
    SEND-->>-Browser: pagina
    Browser->>Browser: visualizza pagina
    
    User->>Browser: click/tap sul pulsante 'Paga con la tua Banca'
    Browser->>+EMD: GET <onclick url> ossia<br/><emd payment endpoint>/token?<br/>retrievalId=<retrieval id>&<br/>fiscalCode=<payee fiscal code>&<br/>noticeNumber=<notice number>&<br/>amount=<amount>
    Note left of Browser: ⚠️ NON AUTENTICATA!!!
    EMD->>EMD: ricerca <retrieval payload> per <retrieval id>
    Note right of EMD: <retrieval payload>:<br/>{<br/>  "retrievalId": "<retrieval id>",<br/>  "deeplink": "<deeplink>",<br/>  "pspDenomination": "<psp denomination label>",<br/>  "originId": "<IUN>",<br/>  "tppId": "<tppId>"<br/>}
    EMD-->>-Browser: HTTP 302 with Location <deeplink>?<br/>fiscalCode=<payee fiscal code>&<br/>noticeNumber=<notice number>&<br/>amount=<amount>
    Browser-->>User: ack
    Browser->>+UA: avvio del flusso di pagamento
    deactivate Browser
    
    rect rgb(248, 248, 255)
        Note over User,UA: Don't care
    end
```

## Step 1: Ottenere l'AccessToken (Autenticazione)

Il primo step per l'integrazione del Servizio da parte del PSP è ottenere un token di autenticazione valido.

1. Effettuare una chiamata al server di autenticazione PagoPA S.p.A. utilizzando lo schema **OAuth 2.0 Client Credentials flow**.
2. Includere nella richiesta il _client\_id e il client\_secret_, che hai ricevuto durante il processo di adesione.
3. Il server risponderà con un AccessToken da utilizzare nel passo successivo.

## Step 2: Preparare il corpo della richiesta

Per generare il retrieval necessario ad accedere alla notifica digitale bisognerà richiamare l'API POST `/emd/payment/retrievalTokens` fornendo il token di autorizzazione recuperato dal sistema autorizzativo. Bisognerà fornire all'API di PagoPA S.p.A. le seguenti informazioni:

* `agent`: sistema operativo relativo all'app bancaria del PSP (es: iOS, Android) e definito durante la fase di onboarding
* `originId`: identificativo della notifica (IUN)
* `linkVersion`: versione del link da recuperare Es. v1\_1 (Se si vuole utilizzare una versione specifica è necessario utilizzare l'underscore `_` al posto del punto). Questo è un campo opzionale, se non viene definito nel corpo della chiamata sarà utilizzato il link di default del PSP.

## Step 3: Invocare l'API di generazione

Una volta ottenuto l'AccessToken e preparato il payload, sarà possibile procedere con la richiesta di generazione.

**Endpoint**

```http
POST /emd/payment/retrievalTokens
```

Occorrerà includere l'AccessToken nell'header Authorization come Bearer Token.

Il sistema EMD recupererà le informazioni del PSP presenti sul database utilizzandole per creare un retrieval payload.

## Step 4: Gestire la risposta del Servizio

L'esito della chiamata informa se la generazione del token è andata a buon fine.

* Caso di Successo (200 Created) la risposta indica che il token è stato generato con successo.
* Caso di Richiesta errata (400 Bad Request)

In caso di esito positivo la risposta sarà la seguente:

```json
{
"retrievalId": "c934c5c2-0b20-4921-b399-1581e0777988-1770911864847"
}
```

Ossia l'identificativo del token appena generato.

## Step 5: Recupero delle informazioni del token

Ottenuto il retrievalId l'Utente potrà procedere al click per accedere alla notifica digitale dove l'url di redirect verso il portale SEND sarà ottenuto concatenando il valore dell'attributo "messageUrl" del messaggio ricevuto ed il retrievalId in questo modo: `<<valore messageUrl>>?retrievalId<<valore ottenuto dallo step precedente>>`. Esempio per creare l'URL di redirect:

* "messageUrl": "https://cittadini.notifichedigitali.it/nuova-notifica-send"
* "retrievalId": "c934c5c2-0b20-4921-b399-1581e0777988-1770911864847"

Risultato della CTA da cliccare: https://cittadini.notifichedigitali.it/nuova-notifica-send?retrievalId=c934c5c2-0b20-4921-b399-1581e0777988-1770911864847

In seguito al processo di autenticazione dell'utente, SEND si occuperà di recuperare le informazioni del retrieval token e verificare se il PSP sia abilitato al pagamento.

SEND potrà accedere alle informazioni del retrieval token utilizzando la seguente API GET passando come path variable il retrievalId.

**Endpoint**

```http
GET /emd/payment/retrievalTokens/{retrievalId}
```

Occorrerà includere l'AccessToken nell'header Authorization come Bearer Token.

## Step 6: Gestire la risposta del Servizio

L'esito della chiamata informa se il recupero del token è andato a buon fine.

* Caso di Successo (200 Created) la risposta indica che il token è stato recuperato con successo.
* Caso di Richiesta errata (400 Bad Request)
* Caso di Richiesta errata (404 Not Found) la risposta indica che il token con l'identificativo specificato non è stato trovato.

```json
{
    "retrievalId": "5f89047f-c1fa-4ecc-87f4-7355d8f1fe2f-1770914315806",
    "deeplink": "https://mil.weu.internal.uat.cstar.pagopa.it/emdpaymentcore/stub/emd/payment/payment",
    "pspDenomination": "Nome PSP",
    "originId": "XRUZ-GZAJ-ZUEJ-202407-W-1",
    "tppId": "62c33e91-0584-4038-9e66-9d1ff8114368-1744118376085",
    "isPaymentEnabled": false
}
```

Ossia le informazioni del token e del PSP:

* `retrievalId`: Identificativo del token
* `deeplink`: Link dell'app bancaria del PSP
* `pspDenomination`: Denominazione del PSP
* `originId`: Identificativo della notifica (IUN)
* `tppId`: Identificativo del PSP
* `isPaymentEnabled`: Booleano che indica se il PSP ha abilitato la funzionalità di pagamento

Con queste informazioni SEND ricercherà la notifica da visualizzare tramite il campo `originId` in modo da visualizzarla nella pagina del PSP.

## Step 7: Generazione del deeplink

**Endpoint**

Una volta ottenute le informazioni dalla notifica, sarà possibile generare il deeplink per avviare il flusso di pagamento tramite la seguente API GET `/emd/payment/token`, specificando questi parametri:

* `retrievalId`: Identificativo del retrieval token
* `fiscalCode`: Codice fiscale
* `noticeNumber`: Numero avviso pagoPA da pagare
* `amount`: Importo del pagamento da gestire in eurocent (l'importo inviato dovrà essere diviso sempre per cento per ottenere il valore in euro e centesimi Es. Un valore di 1000 corrisponde a 10 euro)

**Endpoint**

```http
GET /emd/payment/token
```
