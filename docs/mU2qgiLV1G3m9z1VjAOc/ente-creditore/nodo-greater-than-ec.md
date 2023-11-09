# Nodo -> EC

## Validazione sintattica

| paaInviaRT            | <p>PAA_SINTASSI_EXTRAXSD<br>PAA_SINTASSI_XSD</p> |
| --------------------- | ------------------------------------------------ |
| paaVerificaRPT        | <p>PAA_SINTASSI_EXTRAXSD<br>PAA_SINTASSI_XSD</p> |
| paaAttivaRPT          | <p>PAA_SINTASSI_EXTRAXSD<br>PAA_SINTASSI_XSD</p> |
| paaChiediNumeroAvviso | <p>PAA_SINTASSI_EXTRAXSD<br>PAA_SINTASSI_XSD</p> |
| paVerifyPaymentNotice | PAA\_SINTASSI\_EXTRAXSD                          |
| paGetPayment          | PAA\_SINTASSI\_EXTRAXSD                          |
| paSendRT              | PAA\_SINTASSI\_EXTRAXSD                          |
| paGetPaymentV2        | PAA\_SINTASSI\_EXTRAXSD                          |
| paDemandPaymentNotice | <p>PAA_SINTASSI_EXTRAXSD<br>PAA_SINTASSI_XSD</p> |

## Errore configurazione chiamante

| paaInviaRT            | <p>PAA_ID_DOMINIO_ERRATO<br>PAA_ID_INTERMEDIARIO_ERRATO<br>PAA_STAZIONE_INT_ERRATA<br></p> |
| --------------------- | ------------------------------------------------------------------------------------------ |
| paaVerificaRPT        | <p>PAA_ID_DOMINIO_ERRATO<br>PAA_ID_INTERMEDIARIO_ERRATO<br>PAA_STAZIONE_INT_ERRATA<br></p> |
| paaAttivaRPT          | <p>PAA_ID_DOMINIO_ERRATO<br>PAA_ID_INTERMEDIARIO_ERRATO<br>PAA_STAZIONE_INT_ERRATA<br></p> |
| paaChiediNumeroAvviso | <p>PAA_ID_DOMINIO_ERRATO<br>PAA_ID_INTERMEDIARIO_ERRATO<br>PAA_STAZIONE_INT_ERRATA<br></p> |
| paVerifyPaymentNotice | <p>PAA_ID_DOMINIO_ERRATO<br>PAA_ID_INTERMEDIARIO_ERRATO<br>PAA_STAZIONE_INT_ERRATA<br></p> |
| paGetPayment          | <p>PAA_ID_DOMINIO_ERRATO<br>PAA_ID_INTERMEDIARIO_ERRATO<br>PAA_STAZIONE_INT_ERRATA<br></p> |
| paSendRT              | <p>PAA_ID_DOMINIO_ERRATO<br>PAA_ID_INTERMEDIARIO_ERRATO<br>PAA_STAZIONE_INT_ERRATA<br></p> |
| paGetPaymentV2        | <p>PAA_ID_DOMINIO_ERRATO<br>PAA_ID_INTERMEDIARIO_ERRATO<br>PAA_STAZIONE_INT_ERRATA</p>     |
| paDemandPaymentNotice | <p>PAA_ID_DOMINIO_ERRATO<br>PAA_ID_INTERMEDIARIO_ERRATO<br>PAA_STAZIONE_INT_ERRATA</p>     |

## Messaggio duplicato

|            |                         |
| ---------- | ----------------------- |
| paaInviaRT | PAA\_RT\_DUPLICATA      |
| paSendRT   | PAA\_RECEIPT\_DUPLICATA |

## Validazione semantica / Altri controlli

| paaInviaRT            | <p>PAA_RPT_SCONOSCIUTA<br>PAA_SEMANTICA</p>                                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| paaVerificaRPT        | <p>PAA_PAGAMENTO_SCONOSCIUTO<br>PAA_PAGAMENTO_DUPLICATO<br>PAA_PAGAMENTO_IN_CORSO<br>PAA_PAGAMENTO_ANNULLATO<br>PAA_PAGAMENTO_SCADUTO<br>PAA_SEMANTICA</p>                                      |
| paaAttivaRPT          | <p>PAA_PAGAMENTO_SCONOSCIUTO<br>PAA_PAGAMENTO_DUPLICATO<br>PAA_PAGAMENTO_IN_CORSO<br>PAA_PAGAMENTO_ANNULLATO<br>PAA_PAGAMENTO_SCADUTO<br>PAA_ATTIVA_RPT_IMPORTO_NON_VALIDO<br>PAA_SEMANTICA</p> |
| paaChiediNumeroAvviso | <p>PAA_PAGAMENTO_SCONOSCIUTO<br>PAA_PAGAMENTO_DUPLICATO<br>PAA_PAGAMENTO_IN_CORSO<br>PAA_PAGAMENTO_ANNULLATO<br>PAA_PAGAMENTO_SCADUTO<br>PAA_SEMANTICA</p>                                      |
| paVerifyPaymentNotice | <p>PAA_PAGAMENTO_SCONOSCIUTO<br>PAA_PAGAMENTO_DUPLICATO<br>PAA_PAGAMENTO_IN_CORSO<br>PAA_PAGAMENTO_SCADUTO<br>PAA_PAGAMENTO_ANNULLATO<br>PAA_SEMANTICA</p>                                      |
| paGetPayment          | <p>PAA_PAGAMENTO_SCONOSCIUTO<br>PAA_PAGAMENTO_DUPLICATO<br>PAA_PAGAMENTO_IN_CORSO<br>PAA_PAGAMENTO_SCADUTO<br>PAA_PAGAMENTO_ANNULLATO<br>PAA_SEMANTICA</p>                                      |
| paSendRT              | <p><br>PAA_SEMANTICA</p>                                                                                                                                                                        |
| paGetPaymentV2        | <p>PAA_PAGAMENTO_SCONOSCIUTO<br>PAA_PAGAMENTO_DUPLICATO<br>PAA_PAGAMENTO_IN_CORSO<br>PAA_PAGAMENTO_SCADUTO<br>PAA_PAGAMENTO_ANNULLATO<br>PAA_SEMANTICA</p>                                      |
| paDemandPaymentNotice | <p>PAA_PAGAMENTO_SCONOSCIUTO<br>PAA_PAGAMENTO_DUPLICATO<br>PAA_PAGAMENTO_IN_CORSO<br>PAA_PAGAMENTO_ANNULLATO<br>PAA_PAGAMENTO_SCADUTO<br>PAA_SEMANTICA</p>                                      |

## Altro

| paaInviaRT            | PAA\_SYSTEM\_ERROR |
| --------------------- | ------------------ |
| paaVerificaRPT        | PAA\_SYSTEM\_ERROR |
| paaAttivaRPT          | PAA\_SYSTEM\_ERROR |
| paaChiediNumeroAvviso | PAA\_SYSTEM\_ERROR |
| paVerifyPaymentNotice | PAA\_SYSTEM\_ERROR |
| paGetPayment          | PAA\_SYSTEM\_ERROR |
| paSendRT              | PAA\_SYSTEM\_ERROR |
| paGetPaymentV2        | PAA\_SYSTEM\_ERROR |
| paDemandPaymentNotice | PAA\_SYSTEM\_ERROR |

