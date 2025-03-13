# 📜 Come spedire il mio primo Messaggio di test

Una volta [configurato un Servizio su IO](https://docs.pagopa.it/kb-enti-servizi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-creare-un-servizio), puoi iniziare subito a sperimentare l'invio di Messaggi.

{% hint style="warning" %}
Poni attenzione al fatto che un Servizio su IO abilitato è in grado di mandare messaggi a qualsiasi codice fiscale valido: è tua responsabilità individuare e aggiornare nel tempo la base d'utenza corretta per il tuo Servizio.
{% endhint %}

{% hint style="success" %}
Puoi sapere se [un tuo utente è già su IO](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/get-a-user-profile-using-post) e [ha abilitato le comunicazioni provenienti dal tuo Servizio](https://docs.pagopa.it/kb-enti-servizi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-sapere-se-un-cittadino-ha-abilitata-la-ricezione-dei-messaggi-per-un-servizio) richiamando l'apposita API: in caso di risposta affermativa, potrai procedere con l'invio del messaggio.
{% endhint %}

**Step 1.** Come prima cosa, **componi il tuo messaggio** seguendo le linee guida del Manuale dei Servizi di IO e le [specifiche del formato Markdown supportato](https://docs.pagopa.it/io-guida-tecnica/risorse-utili/guida-al-markdown).

**Step 2.** Individua la tua **base d'utenza di test**: generalmente, dovrai individuare i codici fiscali di persone coinvolte nei processi di definizione, implementazione e test dei tuoi Servizi su IO.

**Step 3.** **Invia un messaggio di test**: usa [l'API di invio](https://docs.pagopa.it/io-guida-tecnica/funzionalita/inviare-un-messaggio) per mandare un messaggio sull'app dei tuoi utenti di test e verifica con loro il buon esito di ogni parte del messaggio ([titolo](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body#subject), [formattazione](https://docs.pagopa.it/io-guida-tecnica/risorse-utili/guida-al-markdown) e contenuto del [corpo](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body#markdown), eventuali [posizioni debitorie](https://docs.pagopa.it/kb-enti-pagamenti/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-spedire-un-avviso-di-pagamento-in-un-messaggio), [allegati PDF](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium) o [CTA](https://docs.pagopa.it/io-guida-tecnica/risorse-utili/guida-al-markdown#pulsanti-azione-cta)).
