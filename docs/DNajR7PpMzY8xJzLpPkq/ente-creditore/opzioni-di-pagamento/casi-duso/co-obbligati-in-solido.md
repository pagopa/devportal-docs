# Co-obbligati in solido

In questo scenario, ciascun debitore può provvedere all'adempimento per la totalità della posizione debitoria. Il primo debitore che effettua il pagamento chiude la posizione debitoria. Lo scenario prevede che ogni debitore deve poter visualizzare le proprie posizioni debitorie e mai quelle degli altri debitori co-obbligati. L’ente creditore dovrà restituire in output soltanto le Opzioni di Pagamento del debitore intestatario del NAV utilizzato dal chiamante (PSP) per interrogare il servizio.&#x20;

{% hint style="info" %}
Il primo debitore che effettua il pagamento chiude la posizione debitoria.
{% endhint %}

Esempio di response che gli EC devono fornire per questa casistica:

```javascript
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - Opzione 1 - CO-Obbligato 1",
        "numberOfInstallments": 1,
        "amount": 120,
        "dueDate": "2024-10-30T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": non pagato,
        "statusReason": "desc",
        "allCCP": "false",
        "installments": [
          {
            "nav": "347000000880099993",
            "iuv": "47000000880099993",
            "amount": 120,
            "description": "Test Opt Inst - unica opzione",
            "dueDate": "2024-10-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": non pagato,
            "statusReason": "desc"
          }
        ]
      }
    ]
  }
]

```
