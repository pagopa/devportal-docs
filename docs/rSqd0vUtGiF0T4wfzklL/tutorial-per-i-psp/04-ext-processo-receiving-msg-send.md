# Come viene gestito un messaggio

Questo documento descrive il processo con cui la piattaforma EMD riceve i messaggi di cortesia inviati dalla piattaforma SEND e li instrada verso le PSP che hanno il consenso attivo del cittadino destinatario.

Quando un Ente pubblica una notifica tramite SEND, quest'ultima invia il messaggio all'EMD. L'EMD si occupa di verificare che il cittadino destinatario abbia almeno un canale abilitato (consenso attivo verso una PSP attiva). Solo in questo caso il messaggio viene preso in carico e inoltrato alla coda; in caso contrario viene scartato.

### **Requisiti EMD**

* EMD deve rispondere a SEND con **200 OK** se il messaggio viene preso in carico
* EMD deve rispondere a SEND con **202 Accepted** - NO\_CHANNELS\_ENABLED se il cittadino non ha canali abilitati

### **Post-condizioni**

* Se l'utente ha disattivato il servizio non riceverà il Messaggio di cortesia
* Se il messaggio viene preso in carico (200 OK), EMD avvia il processo di inoltro verso la PSP
* Se il messaggio viene scartato (202 - NO\_CHANNELS\_ENABLED), SEND non ritenta l'invio

```mermaid
sequenceDiagram
    %%title Processo di Invio del Messaggio di Cortesia in modalità PUSH - TPP/PSP
    autonumber
    
    actor Cittadino
    participant BE_TPP as Backend TPP/PSP
    participant EMD
    participant SEND

    SEND->>EMD: Invio messaggio di un cittadino
    EMD->>EMD: Verifica consensi attivi del cittadino
    
    alt Nessun canale abilitato
        EMD-->>SEND: response (202 - NO_CHANNELS_ENABLED)
    else Canali OK
        EMD-->>SEND: response (200 - msg preso in carico OK)
        EMD->>EMD: Verifica quali PSP sono attive
        EMD->>EMD: Salvataggio messaggio (stato: IN_PROGRESS) <br/>per ogni PSP attiva
        Note over Cittadino,EMD: Inizio di processo e invio messaggio a TPP/PSP
    end
```

***

## Step 1: Ottenere l'AccessToken (Autenticazione)

Come per tutte le operazioni verso la piattaforma, il primo passo consiste nell'ottenere un token di autenticazione valido.

1. Effettuare una chiamata al server di autenticazione PagoPA utilizzando lo schema **OAuth 2.0 Client Credentials flow**.
2. Includere nella richiesta il _client\_id e il client\_secret_, che hai ricevuto durante il processo di adesione.
3. Il server risponderà con un AccessToken da utilizzare nel passo successivo.

## Step 2: Preparare il corpo della richiesta

SEND dovrà preparare il messaggio da passare seguendo questa struttura :

| Campo                  | Tipo    | Obbligatorio       | Validazione                                     | Descrizione                                                                                                                                                                |
| ---------------------- | ------- | ------------------ | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `messageId`            | string  | Sì                 | Lunghezza: 1-100 caratteri                      | ID univoco del messaggio                                                                                                                                                   |
| `recipientId`          | string  | Sì                 | Lunghezza: 1-100 caratteri                      | Codice fiscale del destinatario                                                                                                                                            |
| `triggerDateTime`      | string  | Sì                 | Formato: ISO 8601 date-time                     | Data e ora in cui l'Ente ha richiesto l'invio                                                                                                                              |
| `senderDescription`    | string  | Sì                 | Lunghezza: 1-250 caratteri, supporta UTF-8      | Nome dell'Ente mittente (es. "Comune di Roma")                                                                                                                             |
| `messageUrl`           | string  | Sì                 | Lunghezza: 1-2048 caratteri, formato URI valido | URL per visualizzare il messaggio originale                                                                                                                                |
| `originId`             | string  | Sì                 | Lunghezza: 1-100 caratteri                      | IUN - Identificativo Univoco Notifica                                                                                                                                      |
| `title`                | string  | Sì                 | Lunghezza: 1-250 caratteri, supporta UTF-8      | Titolo del messaggio                                                                                                                                                       |
| `content`              | string  | Sì                 | Lunghezza: 1-100000 caratteri, formato Markdown | Corpo del messaggio (dinamico in base a `workflowType`: `ANALOG` include scadenza per evitare raccomandata cartacea; `DIGITAL` include informazioni sulla consegna legale) |
| `workflowType`         | string  | Sì                 | Valori ammessi: `ANALOG` o `DIGITAL`            | Tipo di notifica                                                                                                                                                           |
| `associatedPayment`    | boolean | No                 | —                                               | Indica se è presente un pagamento PagoPA associato                                                                                                                         |
| `analogSchedulingDate` | string  | **Condizionale**\* | Formato: ISO 8601 date-time                     | Scadenza dei 5 giorni (obbligatorio solo se `workflowType` è `ANALOG`)                                                                                                     |
| `channel`              | string  | No                 | Valori ammessi: `SEND`                          | Canale sorgente                                                                                                                                                            |

\*_Il campo `analogSchedulingDate` è obbligatorio solo quando `workflowType` ha valore `ANALOG`_

Questo è un esempio di un messaggio con contenuto Analogico inviato da SEND:

```json
{
  "messageId": "XXXX-XXXX-XXXX-202603-V-1_2d269359-cff4-47d1-b6c5-4f1b95fc08d8",
  "recipientId": "GRBGPP87L04L741X",
  "triggerDateTime": "2026-03-25T16:27:18.572832125Z",
  "senderDescription": "Regione Lombardia",
  "messageUrl": "https://cittadini.notifichedigitali.it/nuova-notifica-send",
  "originId": "XXXX-XXXX-XXXX-202603-V-1",
  "title": "Hai una comunicazione a valore legale su SEND",
  "content": "Ciao,  \nhai ricevuto una notifica SEND, cioè una comunicazione a valore legale emessa da un’amministrazione.\n\nPer leggerla e conoscere tutti i dettagli, accedi al sito web di SEND direttamente da questo messaggio **entro il 30/03/2026 alle 18:27**: eviterai una raccomandata cartacea e i relativi costi.",
  "associatedPayment": false,
  "analogSchedulingDate": "2026-03-30T16:27:18.319Z",
  "workflowType": "ANALOG",
  "associatedPayment": true,
  "channel": "SEND"
}
```

## Step 3: Ricezione del Messaggio da SEND

La piattaforma SEND invia il messaggio a EMD tramite una chiamata POST all'endpoint dedicato.

**Endpoint**

```http
POST /emd/message-core/sendMessage
```

L'autenticazione avviene tramite OAuth2.0: occorre includere l'AccessToken nell'header Authorization come Bearer Token.

Il body della richiesta corrisponde al payload descritto nello step precedente e contiene tutte le informazioni necessarie per identificare il destinatario e la notifica SEND associata.

## Step 4: Verifica del Cittadino

Alla ricezione del messaggio, EMD verifica se il cittadino destinatario ha almeno un canale abilitato. Il controllo avviene in cascata:

1. **Verifica presenza CF**: viene controllato se il cittadino è censito in EMD. Se non presente, il messaggio viene scartato.
2. **Verifica consensi**: vengono recuperati i consensi attivi del cittadino dal database. Vengono considerati solo i PSP attive per le quali il consenso del cittadino risulta in stato attivo.

Se il cittadino ha almeno un canale abilitato, EMD prende in carico il messaggio. In caso contrario, il messaggio viene scartato.

## Step 5: Risposta a SEND

In base all'esito del controllo precedente, EMD risponde a SEND con uno dei seguenti esiti:

**Messaggio Preso in Carico (200 OK)**

Il cittadino ha almeno un canale abilitato è il PSP è attivo. Il messaggio viene preso in carico e sarà inoltrato alla coda per la consegna al/ai PSP.

```http
HTTP/1.1 200 OK

{
  "status": "OK"
}
```

**Nessun Canale Abilitato (202 NO\_CHANNELS\_ENABLED)**

Il cittadino non ha consensi, non ha consensi attivi, oppure nessuna delle PSP associate è attiva. Il messaggio viene scartato e non sarà inoltrato.

```http
HTTP/1.1 202 Accepted

{
  "status": "NO_CHANNELS_ENABLED"
}
```

**Errore 400 nella validazione dei campi**

Il messaggio inviato da SEND contiene dei campi che non superano le regole di validazione definite.\
In questo caso si aprirà un incident e dopo le opportune verifiche si procederà alla sua risoluzione oppure ad una eventuale fix.

```http
HTTP/1.1 400

{
  "code": "INVALID_REQUEST",
  "message": "[error_field_1]: motivation_error_1; [error_field_2]: motivation_error_2"
}
```

## Step 6: Inoltro verso la PSP

Una volta superato il controllo, EMD accoda il messaggio per l'inoltro verso il/i PSP. Questo processo è descritto in dettaglio nella sezione [Invio Messaggi ai PSP](06-ext-processo-msg-to-tpp.md).

***
