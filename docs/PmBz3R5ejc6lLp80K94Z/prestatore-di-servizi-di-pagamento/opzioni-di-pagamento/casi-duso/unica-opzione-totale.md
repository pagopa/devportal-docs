# Unica opzione totale

Versione più semplice di posizione debitoria, nel momento in cui l’opzione di pagamento viene pagata, l’intera posizione viene posta nello stato **PAID.** Questo scenario non prevede alcuna modifica alla logica di gestione del ciclo di vita della posizione debitoria.

Esempio di response che gli EC devono fornire e che i PSP devono esporre per questa casistica:

```json
[
  {
    "paTaxCode": "99999000013",
    "paFullName": "EC",
    "paOfficeName": "EC",
    "paymentOptions": [
      {
        "description": "Test PayOpt - unica opzione",
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
