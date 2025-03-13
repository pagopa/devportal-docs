# ❓ Domande e risposte sui Servizi IO

<details>

<summary>Dove posso trovare informazioni e documentazione sui Servizi IO?</summary>

Consulta il [Manuale dei Servizi IO](https://docs.pagopa.it/manuale-servizi/) e la [Guida Tecnica per l'integrazione con IO](https://docs.pagopa.it/io-guida-tecnica/)

</details>

<details>

<summary>Posso creare un servizio utilizzando le API di integrazione?</summary>

Sì, utilizzando le [API Servizi](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-servizi).

</details>

<details>

<summary>Posso cancellare un servizio?</summary>

Si, puoi cancellare un servizio tramite le API utilizzando la [DELETE SERVICE](https://developer.io.italia.it/openapi.html#operation/cmsDeleteService) oppure attraverso il nuovo portale di BackOffice IO accedendo tramite Area Riservata.

Per un servizio approvato e/o pubblicato, puoi procedere ad una sua momentanea disattivazione con la de publiccazione attraverso l'API di [UNPUBLISH](https://developer.io.italia.it/openapi.html#operation/cmsUnpublishService), operazione che potrai effettuare anche attraverso il nuovo portale di Developer Portal accedendo tramite Area Riservata.

</details>

<details>

<summary>Posso visualizzare la scheda di un servizio non ancora visibile in app?</summary>

Sì, attraverso la procedura descritta in [Visualizzare un servizio in test](https://docs.pagopa.it/io-guida-tecnica/funzionalita/pubblicare-un-servizio/provare-un-servizio-in-test).

</details>

<details>

<summary>A cosa serve l'indirizzo IP nella scheda servizio e come si configura?</summary>

È un parametro ulteriore di sicurezza che permette di assegnare uno o più indirizzi IP autorizzati all'uso dell'invio di messaggi per il servizio.

:warning: È importante utilizzare IP esterni, cioè che effettivamente fanno la chiamata verso le API di IO.

Si possono configurare più IP o range di IP utilizzando la notazione di maschere di sotto reti in formato [CIDR](https://it.wikipedia.org/wiki/Maschera_di_sottorete).

Se si invocano le API da IP non censiti oppure si utilizza la funzione da Developer Portal per l'invio rapido, sempre da IP non censiti, si otterrà un errore 403.

</details>

<details>

<summary>Come utilizzare la Chiave Manage?</summary>

Le[ Api del flusso manage ](https://developer.io.italia.it/openapi.html#tag/manage)vengono utilizzata attraverso la Chiave Manage, che viene assegnata in automatico per ogni utenza del nuovo BackOffice IO accedendo da Area Riservata. Questa chiave serve per utilizzare tutte le API di creazione e gestione del servizio, tra cui la richiesta di pubblicazione e di de pubblicazione.

</details>

<details>

<summary>A cosa servono le due Api Key associate al servizio? Sono differenti?</summary>

Ogni Servizio ha a disposizione una chiave primaria e una chiave secondaria, entrambe sono equivalenti, il loro utilizzo è per la finalità di invio dei messaggi agli utenti IO.



</details>

<details>

<summary>Come avviene la pubblicazione di un servizio attraverso le API di pubblicazione?</summary>

Dopo la [creazione ](https://developer.io.italia.it/openapi.html#operation/cmsCreateService)di un servizio è possibile richiederne una [review](https://developer.io.italia.it/openapi.html#tag/manage-review) che avvia il processo di revisione del servizio da parte del nostro team. Se il servizio viene accettato e non è stata richiesta una review con parametro di pubblicazione immediata tramite `autopublish`, sarà possibile [pubblicarlo](https://developer.io.italia.it/openapi.html#operation/cmsReleaseService). Ogni nuova modifica richiederà un nuovo processo di review ma lascia inalterato il servizio pubblicato che rimarrà visibile nella versione approvata.

</details>

<details>

<summary>Come avviene la pubblicazione di un servizio attraverso il portale web?</summary>

Dopo aver inserito i parametri necessari nella scheda del servizio, in particolare la descrizione, il codice fiscale Ente, il nome del servizio, il contatto, la privacy url e gli indirizzi IP autorizzati, è possibile utilizzare il tasto apposito per inviare una richiesta di review al nostro team.

</details>

<details>

<summary>Posso migrare i servizi?</summary>

Si. Puoi migrare i servizi. Ogni servizio è afferente ad un delegato, oppure, nel nuovo modello Ente-centrico, all'Ente stesso tramite il tasto di importazione.

</details>

<details>

<summary>Posso migrare i servizi da un delegato ad un Ente?</summary>

Se vuoi migrare i servizi da un delegato ad un Ente, devi migrare i servizi attraverso il BackOffice IO che trovi accedendo in Area Riservata, la procedura potrai eseguirla direttamente da backoffice. I servizi che verranno migrati devono essere stati almeno una volta visibili per quell'Ente.

</details>

<details>

<summary>Posso migrare i servizi da un delegato ad un altro?</summary>

Se vuoi migrare i servizi da un delegato ad un Ente, devi migrare i servizi attraverso il BackOffice IO che trovi accedendo in Area Riservata, la procedura potrai eseguirla direttamente da backoffice.

Se vuoi migrare i servizi dal precedente Developer Portal, da un delegato ad un altro, dovrai inviare una mail all'assistenza e, dall'account del nuovo delegato creare almeno un servizio TEST, necessario alla corretta creazione dell'account su Developer Portal.

</details>

<details>

<summary>Ho effettuato la request to review per un servizio, quando verrà pubblicato?</summary>

Il servizio verrà pubblicato o rifiutato nel più breve tempo possibile. Ti invitiamo ad attendere e di non sottomettere altri aggiornamenti, che verranno rifiutati.

Tramite il nuovo BackOffice IO non è comunque possibile modificare un servizio in attesa di revisione.

</details>

<details>

<summary>Posso sapere se un Cittadino sia su IO?</summary>

Sì, tramite l'API [Get a User Profile using POST](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/get-a-user-profile-using-post).

</details>

<details>

<summary>Perché ricevo un errore HTTP 403 invocando l'API GetProfile?</summary>

Se il servizio relativo alla chiave che stai utilizzando è in bozza, `GetProfile` può essere invocata solo nei confronti di Codici Fiscali concordati come "di test".

Inoltre, l'indirizzo IP con cui ti presenti ai sistemi PagoPA deve essere compreso negli intervalli dichiarati in fase di onboarding.

</details>

<details>

<summary>Perché ricevo un errore HTTP 404 invocando l'API GetProfile?</summary>

L'errore 404 indica che il profilo non è presente in App IO.

</details>

<details>

<summary>Perché ricevo un errore HTTP 409 per l'update service?</summary>

Se il servizio è submitted bisogna attendere l'esito della review e pertanto non è possibile effettuare delle modifiche in corso di verifica.

</details>

<details>

<summary>Posso usare un logo specifico per ogni mio servizio?</summary>

Sì, puoi personalizzare un servizio fornendo un logo che andrà a sostituire quello predefinito che hai caricato per la tua Organizzazione.

Puoi caricare il logo dalla scheda del servizio nell'[Area Riservata](https://selfcare.pagopa.it/), oppure programmaticamente come illustrato nella [Guida Tecnica](https://docs.pagopa.it/io-guida-tecnica/v/io-guida-tecnica-2.2/api/api-servizi/upload-service-logo) all'integrazione dei servizi.

Per sapere come creare un logo efficace fai riferimento al [Manuale dei Servizi](https://docs.pagopa.it/manuale-servizi/come-si-crea-un-servizio/la-scheda-servizio/logo).

</details>

<details>

<summary>E’ possibile cambiare il nome del servizio e la sua descrizione?</summary>

L'ente può modificare una scheda servizio in ogni momento, se è in stato di bozza. Se il servizio è in stato di review, non è possibile effettuare modifiche fino alla sua approvazione o rifiuto.

Per i servizi pubblicati la modifica verrà revisionata dal team competente.

</details>

<details>

<summary>E' possibile accorpare 2 servizi o più servizi?</summary>

Si, l’ente dovrà provvedere a [rendere non visibili](domande-e-risposte-sui-servizi-io.md#posso-cancellare-un-servizio) i servizi che vuole accorpare, e modificare uno che diventerà l'unico pubblico/visibile, integrandone la descrizione.

</details>
