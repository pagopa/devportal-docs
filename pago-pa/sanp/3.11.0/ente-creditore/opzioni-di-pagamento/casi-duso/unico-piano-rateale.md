# Unico piano rateale

Questo scenario prevede la presenza di un unico piano rateale all’interno della posizione debitoria composto da una opzione di pagamento con all’interno n Installment (rate) le cui date di inizio validità e scadenza sono gestite dall’EC. Affinché la posizione debitoria possa chiudersi è necessario che tutti gli Installment all’interno dell’opzione di pagamento siano stati pagati. &#x20;

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
            "nav": "346000000880099993",
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
            "iuv": "45000000880099993",
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
