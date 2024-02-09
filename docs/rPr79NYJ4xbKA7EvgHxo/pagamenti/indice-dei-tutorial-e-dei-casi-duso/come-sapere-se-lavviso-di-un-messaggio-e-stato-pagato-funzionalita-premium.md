# 📜 Come sapere se l'avviso di un Messaggio è stato pagato (Funzionalità Premium)

Una volta che ti sarai assicurato che il tuo utente [possa ricevere le tue comunicazioni](https://docs.pagopa.it/kb-enti-servizi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-sapere-se-un-cittadino-ha-abilitata-la-ricezione-dei-messaggi-per-un-servizio) e avrai [spedito un messaggio Premium su IO](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-spedire-un-avviso-di-pagamento-in-un-messaggio) [con avviso di pagamento](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-spedire-un-avviso-di-pagamento-in-un-messaggio), grazie alla tua sottoscrizione potrai sapere quando il destinatario avrà saldato.

Questa informazione è accessibile tramite [la stessa API](https://docs.pagopa.it/io-guida-tecnica/api/api-messaggi/get-message) che usi per conoscere lo stato di processamento del messaggio, che richiamerai utilizzando il suo identificativo univoco generato dall'[API di invio](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body).

1.  Aggiungi l'header `Ocp-Apim-Subscription-Key` e valorizzalo con la chiave ([primaria o secondaria](https://docs.pagopa.it/kb-enti-servizi/domande-frequenti/domande-e-risposte-sui-servizi-io#perche-ci-sono-due-api-key-per-servizio)) del tuo Servizio IO: puoi recuperarla accedendo all'[Area Riservata](https://selfcare.pagopa.it/) e cercando la scheda del tuo Servizio nella pagina "Servizi"\


    <figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>
2. Componi la URL di invocazione per l'API come nell'esempio:\
   \
   https://api.io.pagopa.it/api/v1/messages/<mark style="color:blue;">**RSRNOU70S54S000L**</mark>/<mark style="color:green;">**01GS8744E24EZDG3XD5ECXB9RG**</mark>\

   1. il parametro in <mark style="color:blue;">**blu**</mark> è il Codice Fiscale del destinatario del messaggio
   2. il parametro in <mark style="color:green;">**verde**</mark> è l'identificativo univoco del messaggio ritornato [in fase di invio](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-spedire-un-messaggio-io)
3. IO risponderà con lo stato aggiornato del messaggio:

{% code overflow="wrap" lineNumbers="true" %}
```json
{
"message": {
  "content": {
    "subject": "Partecipazione Evento",
    "markdown": "Gentile Mario Rossi,\n\r\n\rabbiamo accettato la tua richiesta di partecipazione all'\''evento e ti inviamo in allegato la fattura per il pagamento della tua quota (ricorda di saldarla entro il 31 marzo 2023) e la brochure con tutte le informazioni utili.\n\rA Ti aspettiamo!\n\rL'\''Amministrazione Comunale di Ipazia."
    },
    "created_at": "2023-03-16T08:17:01.775Z",
    "fiscal_code": "RSRNOU70S54S000L",
    "id": "01GS8744E24EZDG3XD5ECXB9RG",
    "sender_service_id": "01EYNQ0864HKYR1Q9PXPJ18W7G"
  },
  "notification": {
    "email": "SENT",
    "webhook": "SENT"
  },
  "status": "PROCESSED",
  "read_status": "READ",
  "paid_status": "PAID"
}
```
{% endcode %}

* il campo `payment_status` riporta lo stato di pagamento dell'avviso veicolato dal messaggio secondo quanto dettagliato nella [specifica tecnica](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/get-message#payment\_status)

{% hint style="info" %}
Per il significato degli altri campi, fai riferimento al [tutorial sul recupero dello stato di un messaggio](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-sapere-se-un-messaggio-e-stato-recapitato)
{% endhint %}

Lo stato di pagamento assumerà il valore `PAID` nel momento in cui il destinatario avrà saldato l'avviso utilizzando uno qualsiasi dei canali di pagamento supportati dal circuito pagoPA.
