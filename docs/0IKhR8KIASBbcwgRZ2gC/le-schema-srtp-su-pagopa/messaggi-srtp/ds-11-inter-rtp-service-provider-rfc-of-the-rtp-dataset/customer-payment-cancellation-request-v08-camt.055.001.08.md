# Customer Payment Cancellation Request V08  (camt.055.001.08)

Di seguito riportiamo un esempio di una richiesta di cancellazione effettuata da PagoPA richiesta a seguito di un avvenuto pagamento verso un Service Provider che è anche un PSP



{% code overflow="wrap" fullWidth="true" %}
```json
// Some code

{
  "resourceId": "string",
  "Document": {
    "CstmrPmtCxlReq": {
      "Assgnmt": {
        "Id": "string", -- Uniquely identifies the case assignment.
        "Assgnr": {
          "Pty": {
            "Id": {
              "OrgId": {
                "AnyBIC": null,
                "LEI": null,  
                "Othr": {
                  "Id": "15376371009", --Pagopa Fiscal Code
                  "SchmeNm": {
                    "Cd": "BOID",
                    "Prtry" : null
                    },
                  "Issr": null
                }
              }
            }
          },
          "Agt":null
        },
        "Assgne": { The Payer’s RTP Service Provider is the Assignee
          "Pty": null ,
          "Agt":{
            "FinInstnId" :{
              "BICFI": "UNICRR" ,
              "LEI": null,
              "Othr":null
              }
            }
          }
        },
        "CreDtTm": "string" AT-R109 Date and Time stamp of the Request for Cancellation
      },
      "Undrlyg": { SEPA Usage Rule(s) Identifies the RTP to be cancelled. Only one occurrence is allowed.
        "OrgnlPmtInfAndCxl": [
          {
            "PmtCxlId": "string",   -- Unique identification, as assigned by the assigner, to unambiguously identify the
cancellation request.
Usage: The cancellation request identification can
be used for reconciliation or to link tasks relating
to the cancellation request. -- 
            "OrgnlPmtInfId": "string",    Unique and unambiguous identifier of the original payment information block, as assigned
by the original sending party.  
            "OrgnlGrpInf": {
              "OrgnlMsgId": "ab85fbb7a48a4a669b5436ee5b497036",
              "OrgnlMsgNmId":"pain.013.001.10",
              "OrgnlCreDtTm": "2024-11-11T07:46:34.139037273Z"
            },
            "TxInf": [
              {
                "CxlId": "string", T-R108 Specific reference of the Payee’s RTP Service Provider for the RfC of the RTP. 
                "OrgnlInstrId": "9b9e6b24-ba43-4545-8df3-f6340553b8d4", AT-S011 Additional unique reference provided by the Payee’s RTP Service Provider. 
                "OrgnlEndToEndId": "302001234876234678", -- AT-S002 Payee’s end-to-end reference of the
RTP
                "CxlRsnInf": {
                  "Orgtr": { -- AT-R002 Identification of the party initiating the
response or “R” message. 
                    "Nm": "Comune di Roma ",AT-E001 Name of the Payee 
                    "Id": {  
                      "OrgId": {
                      "AnyBIC": null,  
                      "LEI": null, 
                      "Othr": {
                        "Id": "02438750586",
                        "SchmeNm": {
                          "Cd": "BOID",
                           },
                        "Issr": null
                      }
                    }}
                    "PrvtId": null
                  },
                  "Rsn": {.  --AT-R106 Reason code for the Request for Cancellation of the RTP 
                  "Cd":"PAID"
                  
                  },  
                  "AddtlInf": [
                    "ATS005/ 2024-12-10"
                  ]
                },
                "OrgnlTxRef": {
                  "Amt": {
                    "InstdAmt": "100.0 " , /*T002 Amount of the RTP"*/
                  },
                  "ReqdExctnDt": { /*T013 Requested Execution Date/Time of the payment to be initiated*/
                      "Dt": "2024-12-10",
                      "DtTm" : null
                      },
                  "PmtTpInf": {
                      "SvcLvl": {
                        "Cd": "SRTP"
                      },
                      "LclInstrm": {
                        "Cd": null,
                        "Prtry": "PAGOPA" /*S003 - Type of payment instrument requested by the Payee*/
                      },
                      "CtgyPurp" : null
                  },
                  "RmtInf": { /*Remittance Information*/
                      "Ustrd": [
                        "TARI immobile 1234 / 302001234876234678", 
                        "ATS001/TARI 2025 rata unica " 
                      ],
                      "Strd" : null
                  },
                  "DbtrAgt": {
                      "FinInstnId": {
                        "BICFI": "UNCRITMMXXX", /* N001 Identifier of the Payer’s RTP Service Provider"*/
                        "LEI" : null,
                        "Othr": null
                      }
                  },
                  "CdtrAgt": {
                        "FinInstnId": {
                          "BICFI": null,
                          "LEI" : null,
                          "Othr": {
                              "Id": "15376371009 ",
                              "SchmeNm": {
                                  "Cd": "BOID"
                                  "Prtry": null
                                },
                          "Issr": null	
        	          }
                        }
                  },
                "Cdtr": {
                    "Nm": "Comune di Roma ", /*- E001 Name of the Payee*/
                    "PstlAdr" : null,
                    "Id": {
                      "OrgId": {
                        "AnyBIC": null,
                        "LEI":null,
                        "Othr": [
                          {
                            "Id": "02438750586", /* - E005 Payee’s identification code*/
                            "SchmeNm": {
                              "Cd": "BOID",
                              "Prtry": null
                            }
                          }
                        ]
                      },
                    "PrvtId" : null
                    }
                  },
                  "CdtrAcct": {
                      "Id": {
                        "IBAN": "IT81E0300203280398564542723"
                      }
                    }
                }
              }
            ]
          }
        ]
      }
    }
  },
  "callbackUrl": "http://example.com",
}
```
{% endcode %}

