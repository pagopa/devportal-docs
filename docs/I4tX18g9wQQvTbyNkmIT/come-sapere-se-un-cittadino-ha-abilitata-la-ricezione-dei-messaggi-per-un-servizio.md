# Come sapere se un Cittadino ha abilitata la ricezione dei messaggi per un Servizio

Prima di spedire un messaggio a un Cittadino, come mittente dovrai accertarti che il tuo destinatario sia su IO e che abbia abilitato la ricezione per il tuo servizio. In questo tutorial ti spiegheremo come fare a verificare l’abilitazione alla ricezione dei messaggi da parte di uno specifico Codice Fiscale.

Per effettuare questa verifica, dovrai effettuare una chiamata ad un endpoint, che permette di controllare che il cittadino identificato tramite Codice Fiscale sia iscritto a IO e che il servizio possa inviare comunicazioni al cittadino stesso. Ecco l’endpoint a cui inviare questa chiamata:

`POST /api/v1/profiles`

Il Codice Fiscale del cittadino andrà inserito nel body della post request, e la risposta sarà ritenuta positiva se saranno verificate entrambe queste condizioni:

1. Lo status code della risposta è `200`
2. Nel body di risposta il campo `sender_allowed=true`

Ecco un esempio tramite `curl`.

`### REQUEST curl --location --request POST 'https://api.io.pagopa.it/api/v1/profiles' \ --header 'Content-Type: application/json' \ --header 'Ocp-Apim-Subscription-Key: __YOUR_API_KEY__' \ --data-raw '{ "fiscal_code": "AAAAAA00A00A000A" }' ### RESPONSE { "sender_allowed": true }`

&#x20;

### Utilizzare Postman per testare l’API <a href="#utilizzare-postman-per-testare-lapi" id="utilizzare-postman-per-testare-lapi"></a>

Per verificare il funzionamento dell’API puoi anche utilizzare l’applicazione desktop di Postman (la versione web non ti consentirebbe di controllare l’indirizzo IP con il quale ti presenteresti).

Ecco tutti i passaggi:

1. **Imposta il verb REST**: per questa API ti serve il `POST`
2. **Immetti la URL dell'endpoint di IO**: [https://api.io.pagopa.it/api/v1/profiles](https://api.io.pagopa.it/api/v1/profiles)
3. **Aggiungi nell'header la API Key del servizio**: recuperala dalla scheda servizio nell'[Area Riservata](https://selfcare.pagopa.it/), puoi usare [indifferentemente](https://docs.pagopa.it/kb-enti-servizi/domande-frequenti/domande-e-risposte-sui-servizi-io#perche-ci-sono-due-api-key-per-servizio) la chiave primaria o quella secondaria e aggiungila come header con nome `Ocp-Apim-Subscription-Key`
4. **Imposta l'header Content-Type**: deve contenere `application/json`
5. **Compila il body della richiesta**: per questa API è sufficiente il Codice Fiscale del Cittadino del quale vuoi ottenere informazioni
6. **Invia la richiesta verso IO**: il sistema la processerà in pochi istanti
7. **Osserva la risposta**: nota il valore del campo `sender_allowed`, se `true` significa che quel Cittadino ha abilitato la ricezione dei messaggi per il tuo servizio

Di seguito ti proponiamo un video tutorial che mostra sull’applicazione Postman tutti i passaggi appena descritti:



All'interno della [Guida Tecnica ](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/get-a-user-profile-using-post)trovi tutta la documentazione necessaria per l'utilizzo di dell' API di integrazione.
