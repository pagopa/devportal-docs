# 🎥 Come sapere se un Cittadino ha abilitata la ricezione dei messaggi per un Servizio

Prima di spedire un messaggio a un Cittadino, come mittente devi accertarti che il tuo destinatario sia su IO e che abbia abilitato la ricezione per il tuo servizio.

{% embed url="https://www.youtube.com/watch?feature=youtu.be&v=m8t9npjya4c" %}
Video Tutorial
{% endembed %}

{% hint style="info" %}
In questo tutorial useremo [Postman](https://www.postman.com/downloads/); nella realtà, saranno i sistemi della tua Organizzazione a invocare programmaticamente l'API di IO.
{% endhint %}

{% hint style="warning" %}
Non usare REST client basati su web per testare l'API di IO: non potresti controllare l'indirizzo IP col quale ti presenteresti. Usa invece l'applicazione desktop.
{% endhint %}

1. **Imposta il verb REST**: per questa API ti serve il `POST`
2. **Immetti la URL dell'endpoint di IO**: [https://api.io.pagopa.it/api/v1/profiles](https://api.io.pagopa.it/api/v1/profiles)&#x20;
3. **Aggiungi nell'header la API Key del servizio**: recuperala dalla scheda servizio nell'[Area Riservata](https://selfcare.pagopa.it/), puoi usare indifferentemente la chiave primaria o quella secondaria e aggiungila come header con nome `Ocp-Apim-Subscription-Key`
4. **Imposta l'header Content-Type**: deve contenere `application/json`
5. **Compila il body della richiesta**: per questa API è sufficiente il Codice Fiscale del Cittadino del quale vuoi ottenere informazioni
6. **Invia la richiesta verso IO**: il sistema la processerà in pochi istanti
7. **Osserva la risposta**: nota il valore del campo `sender_allowed`, se `true` significa che quel Cittadino ha abilitato la ricezione dei messaggi per il tuo servizio

{% hint style="info" %}
All'interno della [Guida Tecnica](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/get-a-user-profile-using-post) trovi tutta la documentazione necessaria per l'utilizzo di dell' API di integrazione.
{% endhint %}
