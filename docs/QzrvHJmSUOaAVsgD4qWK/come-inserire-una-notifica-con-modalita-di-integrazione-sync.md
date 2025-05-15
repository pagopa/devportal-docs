---
description: >-
  In questo tutorial verrà mostrato passo per passo l'inserimento e
  l'attualizzazione di una notifica con l'integrazione con il sistema pagoPa in
  maniera sincrona
---

# Come inserire una notifica con modalità di integrazione sync

In questa tipologia di integrazione la posizione debitoria è in capo all'ente creditore (EC), quindi la gestione dei costi di notifica è in carico al PT pagoPA che deve dialogare con il PT SEND per recuperare il costo di notifica e aggiungerlo all'importo dell'atto notificato.

SEND mette a disposizione una API per recuperare il costo della notifica partendo dalle coordinate del pagamento: Codice fiscale EC e numero avviso.

### Inserimento della notifica

Per richiedere il deposito della notifica su SEND è necessario invocare la API [newNotification](https://developer.pagopa.it/send/api/send-api-external-b2b-pa-bundle#/send/api/operations/sendNewNotificationV24).

Nel body della notifica o nel portale selfcare, è fondamentale:

* specificare la modalità di integrazione con pagoPa: "sincrona" o `pagoPaIntMode=SYNC` ;
* inserire nel campo payments i riferimenti della posizione debitoria: `creditorTaxId` e `noticeCode`;
* inserire nel campo payments l'indicazione `applyCost=true` sui pagamenti per i quali è richiesto l'aggiornamento delle spese di notifica;
* selezionare la politica dei costi di notifica `notificationFeePolicy` **DELIVERY\_MODE** (costo calcolato in base all'effettivo percorso di notifica)\*;
* inserire Il campo `paFee` (quota del costo di notifica a favore dei mittenti), indicato in eurocent è l'importo da applicare al mittente per coprire i costi della spedizione (Decreto Costi del  30 maggio 2022 all'art. 5, comma 1, lettera a),  l'importo predefinito è di 100 eurocent.
* inserire il campo `vat` per permettere al mittente la gestione dell'applicazione dell'IVA ai costi di invio cartaceo, in base al proprio regime fiscale,  l'importo predefinto è 22 (iva al 22%)

**\*NOTA**: in caso di `notificationFeePolicy=FLAT_RATE` non sarà effettuato alcun addebito dei costi di notifica sulla posizione debitoria. In questo caso \


<pre class="language-json"><code class="lang-json"><strong>curl --location 'https://&#x3C;baseurlAmbiente>/delivery/v2.4/requests' \
</strong>--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer &#x3C;PDNDVoucher>' \
--header 'x-api-key: &#x3C;apiKey-ente>' \
--data-raw '{
    ...
    "recipients": [
        {
           ...
            },
            "payments": [
                {
                    "pagoPa": {
                        "noticeCode": "&#x3C;numero avviso>",
                        "creditorTaxId": "&#x3C;Codice Fiscale dell'Ente Creditore>",                                        
                        "applyCost": true,
                        "attachment": {
                            ...
                        }
                    }
                }
            ]
        }
    ],
    "documents": [&#x3C;RiferimentiAiDocumenti>],
    ...
    "notificationFeePolicy": "&#x3C;FLAT_RATE/DELIVERY_MODE>",
    "pagoPaIntMode": "SYNC",
    "paFee": &#x3C;quotaDelCostoAFavoreDeiMittenti>,
    "vat":&#x3C;ivaDaApplicare>
}'
</code></pre>

Questa richiesta viene inviata al sistema SEND, che la processerà e passerà alla validazione della notifica.

## Processo di Attualizzazione delle Spese di Notifica

Le spese di notifica possono variare nel tempo, quindi è necessario attualizzare il costo prima che il destinatario effettui il pagamento.

Il nodo pagoPA, durante la fase di verifica e attivazione, invia una richiesta all'Ente Creditore per attualizzare l'importo delle spese di notifica.

Il PT pagoPA chiama un servizio predisposto dal PT SEND che si occupa del recupero delle spese di notifica chiamando l'API [notificationPrice ](https://developer.pagopa.it/send/api/send-api-external-b2b-pa-bundle#/send/api/operations/retrieveNotificationPriceV23)della Piattaforma, per ottenere il costo aggiornato delle spese di notifica.

Per recuperare il costo di notifica collegato all'avviso pagoPA sono sufficienti il Codice Fiscale dell'Ente Creditore (`taxId`) e il Numero Avviso (`noticeCode`).

Esempio:

```bash
curl --location 'https://api.uat.notifichedigitali.it/delivery/v2.3/price/<taxId>/<noticeCode>' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer <PDNDVoucher>' \
--header 'x-api-key: <apiKey-ente>'
```

Il servizio restituisce il costo attualizzato delle spese di notifica e gli altri costi parziali della notifica.

{% code overflow="wrap" %}
```json
{
"iun":"<iunNotifica>",
"partialPrice":<prezzoParialeSenzaCosti>,
"totalPrice":<prezzoTotale>,
"vat":<iva>,
"paFee":<quotaDelCostoDiNotificaAFavoreDelMittente>,
"notificationViewDate":"<dataDiVisualizzazioneNotifica>",
"sendFee":<costoBaseDiSendPerNotificazione>,
"analogCost":<costiAnalogici>
}
```
{% endcode %}

#### Aggiornamento dell'Importo

Una volta ricevuto il costo aggiornato della notifica, l'Ente Creditore aggiorna l'importo da pagare aggiungendo al pagamento il costo indicato in `totalPrice`\*.

L'importo corretto viene poi trasmesso a pagoPA, che permette al destinatario di completare il pagamento.

\*Gli importi solo tutti in eurocents.
