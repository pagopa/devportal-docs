# 📜 Come sapere se un Messaggio è stato recapitato

Una volta che ti sarai assicurato che il tuo utente [possa ricevere le tue comunicazioni](https://docs.pagopa.it/kb-enti-servizi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-sapere-se-un-cittadino-ha-abilitata-la-ricezione-dei-messaggi-per-un-servizio) e avrai [spedito un messaggio su IO](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-spedire-un-messaggio-io) (anche [con un avviso di pagamento](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-spedire-un-avviso-di-pagamento-in-un-messaggio)), per conoscere il suo stato di processamento IO ti mette a disposizione [un'apposita API](https://docs.pagopa.it/io-guida-tecnica/api/api-messaggi/get-message) che potrai richiamare in "polling" utilizzando l'identificativo univoco tornato dall'[API di invio](https://docs.pagopa.it/io-guida-tecnica/api/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body).

1.  Aggiungi l'header `Ocp-Apim-Subscription-Key` e valorizzalo con la chiave ([primaria o secondaria](https://docs.pagopa.it/kb-enti-servizi/domande-frequenti/domande-e-risposte-sui-servizi-io#perche-ci-sono-due-api-key-per-servizio)) del tuo Servizio IO: puoi recuperarla accedendo all'[Area Riservata](https://selfcare.pagopa.it/) e cercando la scheda del tuo Servizio nella pagina "Servizi"\


    <figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>
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
    "markdown": "Gentile Mario Rossi,\n\r\n\rabbiamo accettato la tua richiesta di partecipazione all'\''evento e ti inviamo in allegato la ricevuta del pagamento della tua quota e la brochure con tutte le informazioni utili.\n\rA Ti aspettiamo!\n\rL'\''Amministrazione Comunale di Ipazia."
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
  "status": "PROCESSED"
}
```
{% endcode %}

* il campo `id` è l'eco dell'identificativo del messaggio che hai specificato in richiesta
*   il campo `sender_service_id` contiene il codice identificativo del servizio che stai usando per il messaggio:\


    <figure><img src="../../.gitbook/assets/image (16).png" alt=""><figcaption></figcaption></figure>
* il campo status assume il valore `PROCESSED` nel momento in cui il messaggio è a disposizione dell'utente nella sua App IO; consulta la Guida Tecnica per [gli altri possibili stati previsti](https://docs.pagopa.it/io-guida-tecnica/api/api-messaggi/get-message#status)

{% hint style="info" %}
Un messaggio in stato `PROCESSED` è pronto per essere visualizzato nel momento in cui il destinatario utilizzi la propria App IO; non è garanzia del fatto che abbia già ricevuto la relativa notifica _push_, che dipende anche dalle impostazioni particolari del dispositivo che sta utilizzando.
{% endhint %}
