# Più opzioni di pagamento con scadenze differenti

Questo scenario aggiunge la possibilità di inserire all’interno della posizione debitoria più OdP con date di scadenza differenti, ed anche altri dati come ad esempio l’amount che potrebbero differire.

{% hint style="info" %}
La scelta da parte del cittadino di una tra le diverse **OdP** disponibili, disabilita le altre **OdP** che risultano non più pagabili.
{% endhint %}

Esempio di response che gli EC devono fornire per questa casistica:

```json
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - Opzione Unica - Piano Rateale",
        "numberOfInstallments": 3,
        "amount": 120,
        "dueDate": "2024-12-31T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": non pagato,
        "statusReason": "desc",
        "allCCP": "false",
        "installments": [
          {
            "nav": "347000000880099993",
            "iuv": "47000000880099993",
            "amount": 40,
            "description": "rata 1",
            "dueDate": "2024-10-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": non pagato,
            "statusReason": "desc"
          },
          {
            "nav": "347000000880099993",
            "iuv": "46000000880099993",
            "amount": 40,
            "description": "rata 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": non pagato,
            "statusReason": "desc"
          },
          {
            "nav": "345000000880099993",
            "iuv": "46000000880099993",
            "amount": 40,
            "description": "rata 3",
            "dueDate": "2024-12-31T23:59:59",
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
