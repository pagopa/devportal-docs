# ❓ Domande e risposte sui Servizi IO

<details>

<summary>Dove posso trovare informazioni e documentazione sui Servizi IO?</summary>

Consulta il [Manuale dei Servizi IO](https://docs.pagopa.it/manuale-servizi/) e la [Guida Tecnica per l'integrazione con IO](https://docs.pagopa.it/io-guida-tecnica/)

</details>

<details>

<summary>Posso creare un servizio utilizzando le API di integrazione?</summary>

Sì, utilizzando le [API Servizi](https://docs.pagopa.it/io-guida-tecnica/api/api-servizi).

</details>

<details>

<summary>Posso cancellare un servizio?</summary>

No, al momento non è possibile cancellare un servizio. Rinomina il servizio aggiungendo nel **`service_name`** il prefisso **`DELETED_`**.

</details>

<details>

<summary>Posso visualizzare la scheda di un servizio non ancora visibile in app?</summary>

Sì, attraverso la procedura descritta in [Visualizzare un servizio in test](https://docs.pagopa.it/io-guida-tecnica/funzionalita/creare-un-servizio/visualizzare-un-servizio-in-test).

</details>

<details>

<summary>A cosa serve l'indirizzo IP nella scheda servizio e come si configura?</summary>

È un parametro ulteriore di sicurezza che permette di assegnare uno o più indirizzi IP autorizzati all'uso dell'invio di messaggi per il servizio.

:warning: È importante utilizzare IP esterni, cioè che effettivamente fanno la chiamata verso le API di IO.

Si possono configurare più IP o range di IP utilizzando la notazione di maschere di sotto reti in formato [CIDR](https://it.wikipedia.org/wiki/Maschera\_di\_sottorete).

</details>

<details>

<summary>Perché ci sono due api-key per servizio?</summary>

Chiave primaria e secondaria sono equivalenti e sono duplicate per poter effettuare il cambio delle chiavi senza interruzione del servizio.

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

<summary>Posso usare un logo specifico per ogni mio servizio?</summary>

Sì, puoi personalizzare un servizio fornendo un logo che andrà a sostituire quello predefinito che hai caricato per la tua Organizzazione.

Puoi caricare il logo dalla scheda del servizio nell'[Area Riservata](https://selfcare.pagopa.it/), oppure programmaticamente come illustrato nella [Guida Tecnica](https://docs.pagopa.it/io-guida-tecnica/v/io-guida-tecnica-2.2/api/api-servizi/upload-service-logo) all'integrazione dei servizi.

Per sapere come creare un logo efficace fai riferimento al [Manuale dei Servizi](https://docs.pagopa.it/manuale-servizi/come-si-crea-un-servizio/la-scheda-servizio/logo).

</details>
