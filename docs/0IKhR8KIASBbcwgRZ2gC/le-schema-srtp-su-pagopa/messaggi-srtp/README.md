# Messaggi SRTP

Di seguito viene fornito l’elenco completo dei messaggi utilizzati  per la gestione dello schema SRTP nel contesto pagoPA. \


```mermaid
sequenceDiagram 
  Participant sp_ec as "Payee's Service Provider"
 Participant sp_deb as "Payer's Service Provider"

note over sp_ec,sp_deb : Invio di una SRTP
sp_ec ->> sp_deb : POST v1/sepa-request-to-pay-requests (DS-02)
alt success
sp_deb -->> sp_ec : 201-OK ( void )
else error
sp_deb -->> sp_ec : 4xx-Error(errorModel)
end

opt UnableToProcessSRTP
sp_deb ->> sp_ec : /callback(DS-04)   
end

note over sp_ec,sp_deb : Ricezione Stato
sp_deb ->> sp_ec : POST /callBack (DS-08)
sp_ec -->> sp_deb : 201-OK


note over sp_ec, sp_deb  : Richiesta Cancellazione

sp_ec ->> sp_deb: POST v1/sepa-request-to-pay-requests/{ResourceId}/cancellation-requests (DS-11)
alt success
sp_deb -->> sp_ec : 201-OK (void Response)
sp_deb ->> sp_ec: /callback (DS-12-positiveResponse)
else error
sp_deb -->> sp_ec : 4XX-Error ( ErrorModel )


end

```

Tutte le risposte alle chiamate sono asincrone. Il Service Provider ricevere prende in carico il messaggio e successivamente invia l'esito della chiamata all'endpoint di _callback_ indicata all'interno del messaggio inviato.

| SEPA Request-to-Pay (SRTP) Rulebook                                      | ISO 20022 XML Message Standards                                          |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| DS-02 Inter-RTP Service Provider RTP Dataset                             | Creditor Payment Activation Request V10 (pain.013.001.10)                |
| DS-04 Reject of RTP Dataset                                              | Creditor Payment Activation Request Status  Report V07 (pain.014.001.07) |
| DS-08 Inter-RTP Service Provider response to  the RTP Dataset            | Creditor Payment Activation Request Status  Report V07 (pain.014.001.07) |
| DS-11 Inter-RTP Service Provider RfC of the  RTP Dataset                 | Customer Payment Cancellation Request V08  (camt.055.001.08)             |
| DS-12 Inter-RTP Service Provider response to  the RfC of the RTP Dataset | <p>Resolution 0f Investigation v09  </p><p>(camt.029.001.09)</p>         |

{% file src="../../.gitbook/assets/EPC133-22 v3.1 - SRTP scheme rulebook v3.1 related API specifications_optimized 3.yaml" %}

