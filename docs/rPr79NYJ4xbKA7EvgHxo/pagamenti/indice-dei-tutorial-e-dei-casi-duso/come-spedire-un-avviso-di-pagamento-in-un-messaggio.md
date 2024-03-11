# 📜 Come spedire un avviso di pagamento in un Messaggio

Spedire [messaggi con avvisi di pagamento](https://docs.pagopa.it/manuale-servizi/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi/messaggi-che-veicolano-un-pagamento) è un processo del tutto simile a quello a tua disposizione per [spedire un normale messaggio su IO](../../messaggi/indice-dei-tutorial-e-dei-casi-duso/come-inviare-un-messaggio.md), con l'aggiunta di informazioni specifiche per la posizione debitoria. In questo tutorial ti mostriamo come fare.

1. Come prima cosa, fai [abilitare il tuo Servizio all'invio di avvisi di pagamento](https://docs.pagopa.it/io-guida-tecnica/abilitazioni/test-invio-avvisi-pagopa); assicurati che, a livello di codice fiscale, l'Ente che invia i messaggi su IO sia anche l'Ente creditore che emette l'avviso di pagamento
2. Se richiesto, aggiungi il [campo `due_date`](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body#due\_date) per indicare la [data di scadenza](https://docs.pagopa.it/manuale-servizi/comunicare-un-servizio/i-casi-duso/scadenze-importanti); poni attenzione al formato richiesto dalle specifiche tecniche e alle considerazioni sui fusi orari!
3. Aggiungi la [struttura `payment_data`](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body#payment\_data) alla request dell'API di invio del messaggio
   1. il campo `amount` deve contenere l'importo dell'avviso di pagamento, espresso in centesimi di Euro
   2. il campo `notice_number` deve contenere il codice IUV da 18 cifre associato alla posizione debitoria
   3. se imposti a true il campo opzionale `invalid_after_due_date`, App IO mostrerà il pagamento come "scaduto" al superamento della data di scadenza

{% code overflow="wrap" lineNumbers="true" %}
```json
{
    "feature_level_type": "STANDARD",
    "content": {
        "subject": "Partecipazione Evento",
        "markdown": "Gentile Mario Rossi,\n\r\n\rabbiamo accettato la tua richiesta di partecipazione all'\''evento e ti inviamo in allegato la fattura per il pagamento della tua quota (ricorda di saldarla entro il 31 marzo 2023) e la brochure con tutte le informazioni utili.\n\rA Ti aspettiamo!\n\rL'\''Amministrazione Comunale di Ipazia.",
        "third_party_data": {
            "id": "000003",
            "has_attachments": true
        },
        "payment_data": {
            "amount": 54000,
            "notice_number": "301011100007347557",
            "invalid_after_due_date": true
        },
        "due_date": "2023-03-30T23:59:59.000Z"
    },
    "fiscal_code": "RSRNOU70S54S000L"
}
```
{% endcode %}

* Nell'esempio:
  * l'importo richiesto è di €540,00 (espresso in centesimi)
  * la data di scadenza è impostata in modo che il Cittadino possa pagare entro il termine della giornata del 31 marzo 2023 (a marzo non è in vigore l'ora legale e dunque in Italia il fuso è UTC+1)

{% hint style="info" %}
Se hai [sottoscritto l'Accordo Premium](https://docs.pagopa.it/kb-enti-onboarding/domande-frequenti/domande-e-risposte-sullonboarding-in-io#come-posso-usufruire-del-programma-premium-di-io), puoi abilitare il tuo messaggio a usufruire delle caratteristiche avanzate offerte aggiungendo alla request il campo `"`[`feature_level_type`](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body#feature\_level\_type)`"="ADVANCED"`: potrai, ad esempio, sapere se l'avviso è stato pagato, potrai allegarvi documenti PDF (ad esempio una fattura) e il tuo utente riceverà opportuni promemoria in prossimità della scadenza.

Per conoscere tutti i vantaggi dell'offerta Premium fai riferimento alla [risposta specifica](https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi-io#che-vantaggi-avranno-i-miei-messaggi-se-aderisco-a-io-premium) sull'argomento.
{% endhint %}
