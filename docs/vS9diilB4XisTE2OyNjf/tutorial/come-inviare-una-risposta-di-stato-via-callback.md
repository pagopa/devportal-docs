# Come inviare una Risposta di Stato via Callback

Dopo che un utente ha interagito con una richiesta di pagamento nella tua applicazione (accettandola o rifiutandola), in qualità di Service Provider del Debitore, hai il compito di comunicare questa decisione al mittente (PagoPA).

Questa operazione viene eseguita in modo asincrono, invocando un endpoint di callback con un messaggio di stato `pain.014`.

## **Step 1: Identifica l'URL di Callback**

L'URL a cui inviare la notifica di stato non è un indirizzo statico. Devi recuperare dinamicamente l'URL corretto dal campo `callbackUrl` presente nel corpo della richiesta di pagamento (`SepaRequestToPayRequestResource`) originale che hai ricevuto.

È fondamentale che il tuo sistema associ questo `callbackUrl` alla richiesta di pagamento per poterlo utilizzare in questo passaggio.

## **Step 2: Costruisci il corpo della richiesta (`pain.014.001.07`)**

Devi costruire un messaggio `pain.014` che contenga l'esito dell'operazione. Questo messaggio sarà incapsulato in un oggetto `AsynchronousSepaRequestToPayResponseResource`.

Campi Chiave da Valorizzare:

* Correlazione: Compila i campi `OrgnlMsgId` e `OrgnlEndToEndId` con i valori esatti ricevuti nella richiesta `pain.013` originale. Questo permette al mittente di associare la tua risposta alla richiesta corretta.
* Stato: Il campo `TxSts` è il più importante e deve essere valorizzato con:
  * `ACCP`: Se l'utente ha accettato la richiesta.
  * `RJCT`: Se l'utente ha rifiutato la richiesta.
* Motivazione: In caso di rifiuto, è buona norma compilare il blocco `StsRsnInf` per specificarne il motivo.

### **Esempio di Payload di Accettazione (`pain.014`)**

```json
{
    "Document": {
        "CdtrPmtActvtnReqStsRpt": {
            "GrpHdr": {
                "MsgId": "MSG-ID-RISPOSTA-UNIVOCO",
                "CreDtTm": "2025-07-28T17:30:00.000Z",
                "InitgPty": {
                    "Nm": "Mario Rossi",
                    "Id": { "OrgId": { "Othr": { "Id": "RSSMRA85T10A562S", "SchmeNm": { "Cd": "POID" } } } }
                }
            },
            "OrgnlGrpInfAndSts": {
                "OrgnlMsgId": "ab85fbb7a48a4a669b5436ee5b497036",
                "OrgnlMsgNmId": "pain.013.001.10",
                "OrgnlPmtInfAndSts": [
                    {
                        "OrgnlPmtInfId": "ab85fbb7a48a4a669b5436ee5b497036",
                        "TxInfAndSts": {
                            "OrgnlEndToEndId": "311111111112222222",
                            "TxSts": "ACCP"
                        }
                    }
                ]
            }
        }
    }
}
```

## **Step 3: Invia la notifica di stato**

Una volta preparato il payload, esegui la chiamata API.

### Endpoint

```
POST /send
```

1. Effettua una chiamata `POST` all'URL di `callback` recuperato nello Step 1.
2. Inserisci il payload JSON che hai costruito nel corpo della richiesta.

## **Step 4: Gestisci la risposta alla callback**

Se la tua notifica è stata ricevuta correttamente dal server di PagoPA, riceverai una risposta immediata con uno status code `200 OK`. Questo conferma che la comunicazione è avvenuta con successo.
