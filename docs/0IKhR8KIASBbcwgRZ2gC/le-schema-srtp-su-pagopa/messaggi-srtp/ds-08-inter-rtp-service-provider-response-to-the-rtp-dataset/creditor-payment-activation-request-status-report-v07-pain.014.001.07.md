# Creditor Payment Activation Request Status  Report V07 (pain.014.001.07)

Di seguito un esempio del formato ISO20022 per l'accettazione/rifiuto  di una SRTP.

```json

Document": {
        "CdtrPmtActvtnReqStsRpt": {
        "GrpHdr": {
        "MsgId": "string",
        "CreDtTm": "string",
        "InitgPty": {}
        "InitgPty": {
        "Nm": "Mario Rossi"
        "Id": {
                "OrgId": {
                "AnyBIC": null,
                "LEI": null,
                "Othr": {
                "Id": "codice fiscal",
                "SchmeNm": {
                "Cd": POID
                },
                "Issr": null
                }
                }
                }
        
        },
        "OrgnlGrpInfAndSts": {
                "OrgnlMsgId": "ab85fbb7a48a4a669b5436ee5b497036",
                "OrgnlMsgNmId": "pain.013.001.10",
                "OrgnlCreDtTm": "2024-11-11T07:46:34.139037273Z"
        },
        "OrgnlPmtInfAndSts": [
                {
                        "OrgnlPmtInfId": "ab85fbb7a48a4a669b5436ee5b497036",
                        "TxInfAndSts" :{
                                "StsId": "string",
                                "OrgnlInstrId": "9b9e6b24-ba43-4545-8df3-f6340553b8d4",
                                "OrgnlEndToEndId": "302001234876234678" --NumeroAvviso
                                 "TxSts": "ACCP",
                                 "StsRsnInf" : {
                                         "Orgtr": {
                                                "Id": {
                                                "OrgId": {
                                                        "AnyBIC": null,
                                                        "LEI": null,
                                                        "Othr": {
                                                        "Id": "codice fiscal",
                                                        "SchmeNm": {
                                                        "Cd": POID
                                                        },
                                                        "Issr": null
                                                        }
                                                        }
                                                        }
                                                }
                                        "AddtlInf": null
                                         },
                                 },
                                 "OrgnlTxRef": { --> Copied from DS-02
                                                "Amt": {},
                                                "ReqdExctnDt": {},
                                                "XpryDt": {},
                                                "PmtTpInf": {},
                                                "RmtInf": {},
                                                "DbtrAgt": {},
                                                "CdtrAgt": {},
                                                "Cdtr": {},
                                                "CdtrAcct": {}
                                }
                        }
                       
                }
        ]
}
```
