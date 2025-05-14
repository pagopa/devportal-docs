---
description: >-
  In questa pagina verrà mostrato passo per passo l'inserimento e
  l'attualizzazione di una notifica con l'integrazione con il sistema pagoPa in
  maniera asincrona
---

# Inserimento notifica con modalità di integrazione async

In questa tipologia di integrazione la gestione dei costi di notifica sono gestiti in autonomia dai sistemi SEND e GPS di PagoPA.&#x20;

Prima di effettuare l'invio della notifica con la modalità d'integrazione asincrona con pagoPA è necessario caricare su GPD (Gestione Posizioni Debitorie) le posizioni debitorie utilizzate nella notifica.&#x20;

### Caricamento della posizione debitoria su GPD

Il caricamento della posizione debitoria avviene tramite la seguente API [publishPosition](https://developer.pagopa.it/pago-pa/api/gestione-posizioni-debitorie#/pago-pa/api/operations/publishPosition).

Per ulteriori informazioni su GPD è disponibile il seguente [webinar](https://developer.pagopa.it/webinars/DevTalk-pagoPA-gpd).

### Inserimento della notifica

Per richiedere il deposito della notifica su SEND è necessario invocare la API [newNotification](https://developer.pagopa.it/send/api/send-api-external-b2b-pa-bundle#/send/api/operations/sendNewNotificationV24).

Nel body della notifica o nel portale selfcare, è fondamentale:

* specificare la modalità di integrazione con pagoPa: "asincrona" o `pagoPaIntMode=ASYNC` ;
* inserire nel campo payments i riferimenti della posizione debitoria: `creditorTaxId` e`noticeCode`;
* inserire nel campo payments l'indicazione `applyCost=true` sui pagamenti per i quali è richiesto l'aggiornamento delle spese di notifica;
* selezionare la politica dei costi di notifica `notificationFeePolicy` **DELIVERY\_MODE** (costo calcolato in base all'effettivo percorso di notifica)\*
* inserire Il campo `paFee` (quota del costo di notifica a favore del mittente), indicato in eurocent è l'importo da applicare al mittente per coprire i costi della spedizione (Decreto Costi del  30 maggio 2022 all'art. 5, comma 1, lettera a),  l'importo predefinito è di 100 eurocent.
* inserire il campo **`vat`** per permettere al mittente la gestione dell'applicazione dell'IVA ai costi di invio cartaceo, in base al proprio regime fiscale,  l'importo predefinito è 22 (iva al 22%)

**\*NOTA**: in caso di `notificationFeePolicy=FLAT_RATE` non sarà effettuato alcun addebito dei costi di notifica sulla posizione debitoria. In questo caso specifico il mittente indica di aver incluso i costi di notifica fissi nella posizione debitoria stessa.

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

Nel caso non siano stati inseriti i riferimenti corretti nel payments o non siano state caricate le posizioni debitorie correttamente su GPD la notifica verrà rifiutata.

## Processo di Attualizzazione delle Spese di Notifica

Le spese di notifica possono variare nel tempo, quindi i sistemi pagoPa aggiorneranno il costo della notifica automaticamente in base al percorso effettuato dalla notifica: con un costo base per le notifiche che utilizzano la via digitale o aggiungendo il costo degli invii cartacei se l'invio digitale non è possibile.

