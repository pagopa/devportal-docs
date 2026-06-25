# Opzioni con molteplici piani rateali (con o senza opzione totale)

Con questo scenario è possibile gestire diversi piani rateali, una volta che il cittadino intraprende il pagamento di un piano rateale, le OdP relative agli altri piani e/o l’eventuale opzione unica devono essere disabilitate e quindi non mostrate dal PSP, in output dovrà essere restituita soltanto l’OdP con le installment ancora da saldare. Esempio di response che gli EC devono fornire e che i PSP devono esporre per questa casistica:

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
        "description": "Test PayOpt - Opzione 2 - Piano Rateale - 2 rate",
        "numberOfInstallments": 2,
        "amount": 90,
        "dueDate": "2024-12-31T23:59:59",
        "validFrom": "2024-09-30T23:59:59",
        "status": non pagato,
        "statusReason": "desc",
        "allCCP": "false",
        "installments": [
          {
            "nav": "346000000880099993",
            "iuv": "46000000880099993",
            "amount": 30,
            "description": "rata 1",
            "dueDate": "2024-10-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": non pagato,
            "statusReason": "desc"
          },
          {
            "nav": "345000000880099993",
            "iuv": "45000000880099993",
            "amount": 30,
            "description": "rata 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": non pagato,
            "statusReason": "desc"
          }
        ]
      },
      {
        "description": "Test PayOpt - Opzione 3 - Piano Rateale - 3 rate",
        "numberOfInstallments": 3,
        "amount": 90,
        "dueDate": "2024-12-31T23:59:59",
        "validFrom": "2024-09-30T23:59:59"",
        "status": non pagato,
        "statusReason": "desc",
        "allCCP": false,
        "installments": [
          {
            "nav": "344000000880099993",
            "iuv": "44000000880099993",
            "amount": 18,
            "description": "rata 1",
            "dueDate": "2024-10-31T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": non pagato,
            "statusReason": "desc"
          },
          {
            "nav": "343000000880099993",
            "iuv": "43000000880099993",
            "amount": 18,
            "description": "rata 2",
            "dueDate": "2024-11-30T23:59:59",
            "validFrom": "2024-09-30T23:59:59",
            "status": non pagato,
            "statusReason": "desc"
          },
          {
            "nav": "342000000880099993",
            "iuv": "42000000880099993",
            "amount": 18,
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
