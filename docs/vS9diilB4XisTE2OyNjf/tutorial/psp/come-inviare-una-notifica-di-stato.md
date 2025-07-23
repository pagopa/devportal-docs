# Come inviare una notifica di stato

Questo tutorial spiega come comunicare l'esito di una richiesta a seguito della decisione del tuo utente (accettazione o rifiuto).

## **Step 1: Raccogli la decisione dell'utente**

L'utente, all'interno della tua app, seleziona "Accetta" o "Rifiuta" per una richiesta.

## **Step 2: Costruisci il messaggio di stato `pain.014.001.07`**

Prepara il messaggio di risposta, compilando i campi di correlazione (`OrgnlMsgId`, `OrgnlEndToEndId`) con i dati della richiesta originale e impostando il campo `TxSts` su `ACCP` (accettato) o `RJCT` (rifiutato).

### **Esempio di Payload di Accettazione (`pain.014`)**

```json
{
    "Document": {
        "CdtrPmtActvtnReqStsRpt": {
            "GrpHdr": { /* ... */ },
            "OrgnlGrpInfAndSts": {
                "OrgnlMsgId": "ab85fbb7a48a4a669b5436ee5b497036",
                "OrgnlMsgNmId": "pain.013.001.10",
                "OrgnlPmtInfAndSts": [
                    {
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

## **Step 3: Invia la notifica all'endpoint di callback**

Effettua una chiamata `POST` all'URL di `callback` che hai ricevuto nel messaggio originale, inserendo il `pain.014` nel corpo. Il sistema destinatario risponderà con `201 OK` per confermare la ricezione.
