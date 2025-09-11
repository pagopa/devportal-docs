# Spese di notifica SEND

Per consentire il transito sulla piattaforma pagoPA delle informazioni relative alle spese di notifica, viene utilizzata la struttura dei metadata. In questo modo, l’informazione viene inclusa e inoltrata a tutti i destinatari della receipt tramite la primitiva _**paSendRT**_.

La struttura dei metadata prevede l’inserimento di una coppia chiave/valore con il seguente formato:

```xml
<metadata>
    <mapEntry>
        <key>NOTIFICATION_FEE</key>
        <value>100</value>
    </mapEntry>
</metadata>
```

Il valore associato alla chiave NOTIFICATION\_FEE rappresenta l’importo della notifica, espresso in eurocent.
