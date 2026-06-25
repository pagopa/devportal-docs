# Resolution 0f Investigation v09   (camt.029.001.09)

Di seguito riportiamo un esempio di una conferma  asincrona  ad una richiesta di cancellazione effettuata da PagoPA ; oggetto _PositiveSepaRequestToPayCancellationResponse_&#x20;

| RsltnOfInvstgtn | object (ResolutionOfInvestigationV09\_EPC259-22\_V3.0\_DS12P)                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Assgnmt         | object (CaseAssignment5\_EPC259-22\_V3.0\_DS11)                                                                            |
| Sts             | ExternalInvestigationExecutionConfirmation1Code\_II\_Wrapper (object) (InvestigationStatus5Choice\_EPC259-22\_V3.0\_DS12P) |
| CxlDtls         | object (UnderlyingTransaction22\_EPC259-22\_V3.0\_DS12P)                                                                   |



```json
// Some code

  "resourceId": "string",
  "SepaRequestToPayCancellationResponse": {
    "Document": {
      "RsltnOfInvstgtn": {
        "Assgnmt": {
          "Id": "string",
          "Assgnr": {
            "Pty": {
              "Id": {
                "OrgId": {
                  "AnyBIC": "string",
                  "LEI": "string",
                  "Othr": {}
                }
              }
            }
          },
          "Assgne": {
            "Pty": {
              "Id": {
                "OrgId": {
                  "AnyBIC": "string",
                  "LEI": "string",
                  "Othr": {}
                }
              }
            }
          },
          "CreDtTm": "string"
        },
        "Sts": {
          "Conf": "CNCL"
        },
        "CxlDtls": {
          "OrgnlPmtInfAndSts": [
            {
              "OrgnlPmtInfId": "string",
              "TxInfAndSts": [
                {
                  "OrgnlInstrId": "string",
                  "OrgnlEndToEndId": "string"
                }
              ]
            }
          ],
          "TxInfAndSts": [
            {
              "CxlStsId": "string",
              "OrgnlGrpInf": {
                "OrgnlMsgId": "string",
                "OrgnlMsgNmId": "string",
                "OrgnlCreDtTm": "string"
              },
              "OrgnlInstrId": "string",
              "OrgnlEndToEndId": "string",
              "OrgnlTxId": "string",
              "TxCxlSts": "ACCR",
              "CxlStsRsnInf": {
                "Orgtr": {
                  "Id": {}
                },
                "AddtlInf": [
                  "string"
                ]
              },
              "RsltnRltdInf": {
                "Chrgs": {
                  "Amt": 0.01,
                  "Agt": {}
                }
              },
              "OrgnlTxRef": {
                "Amt": {
                  "InstdAmt": 0
                },
                "ReqdExctnDt": {
                  "Dt": "string"
                },
                "PmtTpInf": {
                  "SvcLvl": {},
                  "LclInstrm": {}
                },
                "RmtInf": {
                  "Ustrd": "string",
                  "Strd": {}
                },
                "DbtrAgt": {
                  "FinInstnId": {}
                },
                "CdtrAgt": {
                  "FinInstnId": {}
                },
                "Cdtr": {
                  "Pty": {}
                },
                "CdtrAcct": {
                  "Id": {}
                }
              }
            }
          ]
        }
      }
    }
  },
  "_links": {
    "initialSepaRequestToPayUri": {
      "href": "string",
      "templated": false
    }
  }
}
```

