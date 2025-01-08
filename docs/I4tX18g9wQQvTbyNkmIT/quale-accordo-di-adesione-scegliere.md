# Quale accordo di Adesione scegliere

L'adesione a IO è regolata dall'Accordo IO Base, che deve essere necessariamente sottoscritto dall'Ente. Una volta aderito a IO Base, l'Ente può scegliere se inviare messaggi "Fast", regolati da appositi [Termini Aggiuntivi](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FJoLAQtlwdR2Hyoolafog%2Fuploads%2F4NGXc58EcLkKj7z8AB7T%2FTERMINI%20AGGIUNTIVI%20PER%20LA%20FUNZIONALITA%CC%80%20%E2%80%9CMESSAGGI%20BASE%20E%20MESSAGGI%20FAST%E2%80%9D.pdf?alt=media\&token=03c399ce-8317-48f0-b7ef-28e3d0620241), o messaggi "Premium", aderendo all'Accordo Premium, che include alcune funzionalità aggiuntive, come ad esempio la possibilità di inserire allegati nei messaggi.

Vediamo nel dettaglio le caratteristiche di ciascun Accordo.

### L’Accordo Base

L'**Accordo Base** include le caratteristiche di integrazione standard, nel dettaglio:

1. l'accesso alle procedure di adesione a IO, tramite l'apposita [Area Riservata](https://selfcare.pagopa.it/) dell'omonimo portale
2. [la creazione e la manutenzione di Servizi su IO](https://docs.pagopa.it/io-guida-tecnica/funzionalita/inviare-un-messaggio)
3. [l'invio di Messaggi](https://docs.pagopa.it/io-guida-tecnica/funzionalita/inviare-un-messaggio), nel rispetto delle linee guida in vigore
4. il recupero delle informazioni sullo [stato di processamento dei Messaggi inviati ](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/get-message)(preso in carico, consegnato al Cittadino etc.)
5. il recupero delle informazioni sullo [stato di un Cittadino rispetto al suo profilo in app](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/get-a-user-profile-using-post) (effettiva presenza su IO, abilitazione di un Servizio a contattare quel Cittadino etc.)

La connettività API è fornita da PagoPA verificando che il rateo di chiamate (per account) non superi una soglia predeterminata, al fine di preservare l'integrità della piattaforma.

L'adesione a IO Base è **gratuita** per l'Ente.

Nei [**Termini Aggiuntivi "Fast"**](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FJoLAQtlwdR2Hyoolafog%2Fuploads%2F4NGXc58EcLkKj7z8AB7T%2FTERMINI%20AGGIUNTIVI%20PER%20LA%20FUNZIONALITA%CC%80%20%E2%80%9CMESSAGGI%20BASE%20E%20MESSAGGI%20FAST%E2%80%9D.pdf?alt=media\&token=03c399ce-8317-48f0-b7ef-28e3d0620241), la cui attivazione deve essere espressamente richiesta dall'Ente in fase di compilazione dell'Accordo, è prevista una connettività API di integrazione con rateo di invocazione potenziato (\~250 chiamate API ogni 5 secondi a livello di account).

L'attivazione dei messaggi "Fast" prevede un modello di **tariffazione** come dettagliato nel testo dei Termini Aggiuntivi all'Accordo; pertanto, tutti i Messaggi inviati dall'Ente saranno fatturati di conseguenza.

### L’Accordo Premium

L'**Accordo Premium**, che può essere sottoscritto in aggiunta a quello base e, in alternativa, ai Termini Aggiuntivi Fast, prevede le seguenti caratteristiche avanzate:

1. **Stato di lettura**: la possibilità di conoscere, in fase di recupero delle informazioni su un Messaggio inviato, se questo sia stato aperto in app dal destinatario
2. **Stato di pagamento**: la possibilità di conoscere, in fase di recupero delle informazioni su un Messaggio inviato, se l'eventuale avviso di pagamento da questo veicolato sia stato saldato
3. **Reminder**: l'invio da parte del sistema di promemoria push automatici al Cittadino se non paga un eventuale avviso ad esso allegato all'approssimarsi della relativa [scadenza](https://docs.pagopa.it/manuale-servizi/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi/messaggi-che-veicolano-una-scadenza), se dichiarata dall'Ente
4. **Allegati**: la possibilità di [allegare documenti PDF/A ai Messaggi](https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi-io#come-si-aggiungono-allegati-a-un-messaggio)

L'adesione a IO Premium prevede una **tariffazione** specifica con possibilità di acquisto di **carnet di Messaggi prepagati** oltre alla normale **tariffazione a consumo**, secondo quanto dettagliato nel testo del relativo Accordo.
