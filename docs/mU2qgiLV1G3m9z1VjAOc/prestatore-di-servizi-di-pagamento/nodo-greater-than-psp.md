# Nodo -> PSP

## Validazione sintattica

| pspInviaRPT                 | <p>CANALE_SINTASSI_EXTRAXSD<br>CANALE_SINTASSI_XSD</p> |
| --------------------------- | ------------------------------------------------------ |
| pspInviaCarrelloRPT         | <p>CANALE_SINTASSI_EXTRAXSD<br>CANALE_SINTASSI_XSD</p> |
| pspInviaCarrelloRPTCarte    | <p>CANALE_SINTASSI_EXTRAXSD<br>CANALE_SINTASSI_XSD</p> |
| pspNotifyPayment            | <p>CANALE_SINTASSI_EXTRAXSD<br>CANALE_SINTASSI_XSD</p> |
| pspChiediAvanzamentoRPT     | CANALE\_SINTASSI\_EXTRAXSD                             |
| pspChiediRT                 | CANALE\_SINTASSI\_EXTRAXSD                             |
| pspInviaAckRT               | <p>CANALE_SINTASSI_EXTRAXSD<br>CANALE_SINTASSI_XSD</p> |
| pspChiediListaRT            | CANALE\_SINTASSI\_EXTRAXSD                             |
| pspNotificaCancellazioneRPT | <p>CANALE_SINTASSI_EXTRAXSD<br>CANALE_SINTASSI_XSD</p> |
| pspNotifyPaymentV2          | <p>CANALE_SINTASSI_EXTRAXSD<br>CANALE_SINTASSI_XSD</p> |

## Errore configurazione chiamante

| pspInviaRPT                 | <p>CANALE_PSP_ERRATO<br>CANALE_INTERMEDIARIO_ERRATO<br>CANALE_CANALE_ERRATO<br></p> |
| --------------------------- | ----------------------------------------------------------------------------------- |
| pspInviaCarrelloRPT         | <p>CANALE_PSP_ERRATO<br>CANALE_INTERMEDIARIO_ERRATO<br>CANALE_CANALE_ERRATO<br></p> |
| pspInviaCarrelloRPTCarte    | <p>CANALE_PSP_ERRATO<br>CANALE_INTERMEDIARIO_ERRATO<br>CANALE_CANALE_ERRATO<br></p> |
| pspNotifyPayment            | <p>CANALE_PSP_ERRATO<br>CANALE_INTERMEDIARIO_ERRATO<br>CANALE_CANALE_ERRATO<br></p> |
| pspChiediAvanzamentoRPT     | <p>CANALE_PSP_ERRATO<br>CANALE_INTERMEDIARIO_ERRATO<br>CANALE_CANALE_ERRATO</p>     |
| pspChiediRT                 | <p>CANALE_PSP_ERRATO<br>CANALE_INTERMEDIARIO_ERRATO<br>CANALE_CANALE_ERRATO</p>     |
| pspInviaAckRT               | <p>CANALE_PSP_ERRATO<br>CANALE_INTERMEDIARIO_ERRATO<br>CANALE_CANALE_ERRATO</p>     |
| pspChiediListaRT            | <p>CANALE_PSP_ERRATO<br>CANALE_INTERMEDIARIO_ERRATO<br>CANALE_CANALE_ERRATO</p>     |
| pspNotificaCancellazioneRPT | <p>CANALE_PSP_ERRATO<br>CANALE_INTERMEDIARIO_ERRATO<br>CANALE_CANALE_ERRATO</p>     |
| pspNotifyPaymentV2          | <p>CANALE_PSP_ERRATO<br>CANALE_INTERMEDIARIO_ERRATO<br>CANALE_CANALE_ERRATO</p>     |

## Messaggio duplicato

| pspInviaRPT | CANALE\_RPT\_DUPLICATA |
| ----------- | ---------------------- |

## Validazione semantica / Altri controlli

| pspInviaRPT                 | CANALE\_SEMANTICA                                                              |
| --------------------------- | ------------------------------------------------------------------------------ |
| pspInviaCarrelloRPT         | CANALE\_SEMANTICA                                                              |
| pspInviaCarrelloRPTCarte    | CANALE\_SEMANTICA                                                              |
| pspNotifyPayment            | CANALE\_SEMANTICA                                                              |
| pspChiediAvanzamentoRPT     | <p>CANALE_RPT_SCONOSCIUTA<br>CANALE_RPT_RIFIUTATA<br>CANALE_SEMANTICA</p>      |
| pspChiediRT                 | <p>CANALE_RPT_SCONOSCIUTA<br>CANALE_RT_NON_DISPONIBILE<br>CANALE_SEMANTICA</p> |
| pspInviaAckRT               | CANALE\_SEMANTICA                                                              |
| pspChiediListaRT            | <p>CANALE_RT_NON_DISPONIBILE<br>CANALE_SEMANTICA</p>                           |
| pspNotificaCancellazioneRPT | <p>CANALE_RPT_SCONOSCIUTA<br>CANALE_SEMANTICA</p>                              |
| pspNotifyPaymentV2          | CANALE\_SEMANTICA                                                              |

## Altro

| pspInviaRPT                 | CANALE\_SYSTEM\_ERROR |
| --------------------------- | --------------------- |
| pspInviaCarrelloRPT         | CANALE\_SYSTEM\_ERROR |
| pspInviaCarrelloRPTCarte    | CANALE\_SYSTEM\_ERROR |
| pspNotifyPayment            | CANALE\_SYSTEM\_ERROR |
| pspChiediAvanzamentoRPT     | CANALE\_SYSTEM\_ERROR |
| pspChiediRT                 | CANALE\_SYSTEM\_ERROR |
| pspInviaAckRT               | CANALE\_SYSTEM\_ERROR |
| pspChiediListaRT            | CANALE\_SYSTEM\_ERROR |
| pspNotificaCancellazioneRPT | CANALE\_SYSTEM\_ERROR |
| pspNotifyPaymentV2          | CANALE\_SYSTEM\_ERROR |
