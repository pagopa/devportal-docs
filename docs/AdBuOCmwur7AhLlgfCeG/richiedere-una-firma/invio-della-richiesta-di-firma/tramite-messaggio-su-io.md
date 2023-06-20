# 📳 Tramite messaggio su IO

Se vuoi inviare la richiesta di firma **tramite messaggio su IO**, devi effettuare i seguenti passaggi :&#x20;

1. attendere alcuni secondi affinché la signature request passi dallo status `READY` allo stato `WAIT_FOR_SIGNATURE;`
2. effettuare una richiesta verso l'endpoint `PUT /api/v1/sign/signature-requests/{signature_request_id}/notification` senza specificare nulla all'interno del corpo del messaggio.

Se l'utente ha **attivato la ricezione dei messaggi** da parte del servizio **Firma con IO**,  riceverai in output il seguente messaggio contenente l'id del messaggio inviato all'utente:

```json
{
  "io_message_id": "01G7VBM888NDGCMA84ZVZYJGZQ"
}
```

### Cosa succede se l'utente ha scelto di non ricevere comunicazioni da parte di Firma con IO?

Nel caso in cui provassi ad inviare un messaggio di firma ad un utente che ha scelto di **non ricevere comunicazioni** da parte di Firma con IO (ovvero se nella scheda del servizio Firma con IO non ha il **flag “Contattarti in app” attivo**):

&#x20;                                              <img src="https://lh6.googleusercontent.com/15IqSmJ08PRqpXU_T7-I-R1T_pR3gRyGQA-JIz7g5sunM7oeXlYvesIKmcrIBAnF4R3Ni0H1f2W-FUm889qGvQEMj5is6DFXGprO41bbZy8MJUFfHi4vXY25uk-0yjANJAagx29rzMkoYVZZH445NNY" alt="" data-size="original">

Riceverai un **messaggio di errore** che non ti consentirà di proseguire con l'invio del messaggio (ovvero, il parametro "i**o\_message\_id**" non verrà restituito).

In questo caso, ti consigliamo di:

* Suggerire all'utente di **attivare la comunicazione** del servizio Firma con IO **dalla scheda servizio** presente nella sezione "Servizi" dell'app;
* Inviare la richiesta di firma tramite canali alternativi — vedi [tramite-pulsante-firma-con-io-o-qr-code.md](tramite-pulsante-firma-con-io-o-qr-code.md "mention")

Nel caso in cui, invece, l'utente **disattiva solo le notifiche push** nella scheda del servizio Firma con IO:

&#x20;                                               ![](https://lh4.googleusercontent.com/vbPQB-0JISrIXKqMWO4v8AAI-uYDmAWGLZBh2KbRQL8ur-sQn2oWnHSzFrUjS2RbUr6dn9enKTQKl4UC-QGOT-7w3YroKxpU\_VzyvBsg\_dRLrmB1aTBvqUHbmWnMz-QO8TzoafshoayjSjRbftYm3aY)

Il destinatario riceve e può visualizzare il messaggio in app, senza, però, ricevere la notifica push; per questo motivo riceverai l’io\_message\_id e non un errore.

&#x20;                                                ![](https://lh5.googleusercontent.com/6VSbL1d7AMppE1YhXvh3WYWcunbR7VKsxFuiQIut3Klpj8zECBOX36l2q3H4yxipHxJaG3QN1jBBmHw2L391\_9LI8hEHkBojkERt0BxQ7fQ7ln5rHt2fFFdpNZytvz5tF9QELYUfdV1xFkrvlAApC1M)&#x20;

\
[\
](#user-content-fn-1)[^1]

[^1]: 
