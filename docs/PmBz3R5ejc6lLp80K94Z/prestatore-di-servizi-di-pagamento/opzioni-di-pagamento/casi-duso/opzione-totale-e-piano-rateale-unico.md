# Opzione totale e piano rateale (unico)

Questo scenario mette a disposizione del cittadino la possibilità di pagare la posizione debitoria mediante un’ opzione totale ed un piano rateale.&#x20;

{% hint style="info" %}
La scelta da parte del cittadino di una tra le due **OdP** disponibili (opzione totale oppure piano rateale), disabilita l'altra **OdP** che risulta non più pagabile.
{% endhint %}

Esempio di response che gli EC devono fornire e che i PSP devono esporre per questa casistica:

```json
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - Opzione 1 - Soluzione Unica",
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
            "description": "Test Opt Inst - soluzione unica",
            "dueDate": "2024-10-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": non pagato,
            "statusReason": "desc"
          }
        ]
      },
      {
        "description": "Test PayOpt - Opzione 2 - Piano Rateale",
        "numberOfInstallments": 3,
        "amount": 120,
        "dueDate": "2024-12-31T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": non pagato,
        "statusReason": "desc",
        "allCCP": "false",
        "installments": [
          {
            "nav": "346000000880099993",
            "iuv": "46000000880099993",
            "amount": 40,
            "description": "rata 1",
            "dueDate": "2024-10-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "non pagato",
            "statusReason": "desc"
          },
          {
            "nav": "345000000880099993",
            "iuv": "45000000880099993",
            "amount": 40,
            "description": "rata 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "non pagato",
            "statusReason": "desc"
          },
          {
            "nav": "344000000880099993",
            "iuv": "44000000880099993",
            "amount": 40,
            "description": "rata 3",
            "dueDate": "2024-12-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": "non pagato",
            "statusReason": "desc"
          }
        ]
      }
    ]
  }
]

```
