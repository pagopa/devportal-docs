# Spese di notifica SEND

Per consentire il transito sulla piattaforma pagoPA delle informazioni relative alle spese di notifica, viene utilizzata la struttura dei metadata. In questo modo, inoltre, al momento dell’invio della ricevuta, l’informazione viene inclusa e inoltrata a tutti i destinatari della receipt tramite la primitiva **paSendRT**.

La struttura dei metadata prevede l’inserimento di una coppia chiave/valore con il seguente formato:

```xml
<metadata>
    <mapEntry>
        <key>NOTIFICATION_FEE</key>
        <value>100</value>
    </mapEntry>
</metadata>
```

Il valore associato alla chiave NOTIFICATION\_FEE rappresenta l’importo della notifica, espresso in **eurocent**.

Le spese di notifica incluse nei metadata della **paSendRT** risultano disponibili se valorizzate correttamente in fase di pagamento, secondo le modalità riportate di seguito.

* _**Integrazione asincrona**_: le spese di notifica vengono comunicate direttamente alla piattaforma pagoPA dall’applicativo **SEND**.
* _**Integrazione sincrona**_: l’ente creditore è tenuto a comunicare alla piattaforma pagoPa le spese di notifica valorizzando i metadati con il formato indicato e utilizzando i dati che gli sono stati comunicati dall’applicativo **SEND**.&#x20;
