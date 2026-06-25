# Creditor Payment Activation Request V10 (pain.013.001.10)

Di seguito un esempio di compilazione del messaggio ISO20022 per l'invio di una SRTP.

<pre class="language-json"><code class="lang-json">{
 "resourceId": "ab85fbb7a48a4a669b5436ee5b497036",
 "callbackUrl": "http://spsrtp.api.cstar.pagopa.it",
  "Document": {
    "CdtrPmtActvtnReq": {
      "GrpHdr": {
        "MsgId": "ab85fbb7a48a4a669b5436ee5b497036",
        "CreDtTm": "2024-11-11T07:46:34.139037273Z", /*S012 - Date and Time Stamp of the RTP */
        "NbOfTxs": "1",
        "InitgPty": {
          "Nm": "PagoPA"
          "Id" : null
        }
      },
      "PmtInf": [
        {
          "PmtInfId": "ab85fbb7a48a4a669b5436ee5b497036", /* Payment Information */
          "PmtMtd": "TRF",
          "ReqdAdvcTp" : null, 
          "ReqdExctnDt": { /*T013 Requested Execution Date/Time of the payment to be initiated*/
            "Dt": "2024-12-10",
            "DtTm" : null
          },
          "XpryDt": { /* S005 Expiry Date/Time of the RTP*/
            "Dt": "2024-12-10",
            "DtTm" : null
          },
          "Dbtr": { 
            "Nm": "Mario Rossi", /*- P001 Name of the Payer*/ 
            "PstlAdr" : null
            "Id": {
              "OrgId" : null
              "PrvtId": {
                "Othr": [
                  {
                    "Id": "RSSMRA74D22A001Q" , /*- P009 Identifier of the Payer",*/ 
                    "SchmeNm": {
                      "Cd": "POID",
                      "Prtry" : null
                    }
                  }
                ]
              }
            }
          },
          "DbtrAcct":null,
          "DbtrAgt": {
            "FinInstnId": {
              "BICFI": "UNCRITMMXXX", /* N001 Identifier of the Payer’s RTP Service Provider"*/
              "LEI" : null,
              "Othr": null
            }
          },
          "CdtTrfTx": [
            {
              "PmtId": {
                "InstrId" : "9b9e6b24-ba43-4545-8df3-f6340553b8d4" , /*AT-S011 Additional unique reference provided
by the Payee’s RTP Service Provider.*/
                "EndToEndId": "302001234876234678" /*S002- Payee End-to-end id-  Numero Avviso*/
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
              "PmtCond" : null,
              "ReqdExctnDt" : null,
              "Amt": {
                "InstdAmt": "100.0 " , /*T002 Amount of the RTP"*/
              },
              "ChrgBr": "SLEV",
              "CdtrAgt": {
                "FinInstnId": {
                  "BICFI": null,
                  "LEI" : null,
                  "<a data-footnote-ref href="#user-content-fn-1">Othr</a>": {
                    "Id": "15376371009 ", /*N002 - Identifier of the Payee’s RTP Service Provider , i.e. PagopA LEI*/
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
                  "IBAN": "XXIBAN_FITTIZIOXX" /* - C001 IBAN of the Payee. Not used for the payment but to identify. */
                }
              },
              "UltmtCdtr" : null,
              "InstrForCdtrAgt": [
                {
                  "InstrInf":"ATR113/fsldcsdlcvsoi123". /*R113 Payee’s associated RTP transaction reference*/
                }
              ],
              "Purp": null,
              "RltdRmtInf" : null,
              "RmtInf": { /*Remittance Information*/
                "Ustrd": [
                  "oggetto /302001234876234678",  /* T009-RTP Remittance Information to be inserted in the payment / 
                   S002 -Payee's end to end reference  */
                  "ATS001/TARI 2025 rata unica " /*- S001 Remittance Information for the Payer*/
                ],
                "Strd" : null
              },
              "NclsdFile" : [ ]
            }
          ]
        }
      ]
    }
  },
"_links" : null
}
</code></pre>



[^1]: Utilizziamo il Codice Fiscale per identificare il Service Provider PagoPA

