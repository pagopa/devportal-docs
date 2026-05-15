# 5️⃣ Comunicazione del referto

**Dopo aver effettuato lo screening, Lucia ha ricevuto una nuova notifica su App IO**. All’interno del messaggio, ha trovato l’esito dell’esame: negativo. Ha potuto accedere con un semplice clic al suo fascicolo sanitario per visualizzare e scaricare il referto completo. Se il risultato fosse stato positivo, avrebbe ricevuto nello stesso messaggio anche le indicazioni sui passi successivi da intraprendere, come il contatto con il medico o ulteriori accertamenti, il tutto predisposto dall’ente per garantirle supporto immediato e trasparente.

<figure><img src="../.gitbook/assets/image (4).png" alt="Immagine che mostra una schermata di app IO con il messaggio contenente il referto dello screening"><figcaption></figcaption></figure>

## **Cosa fa l'ente:**

* Carica il referto nel fascicolo sanitario e invia un messaggio con esito (positivo/negativo) tramite App IO.
* Fornisce link diretto al documento e, in caso di esito positivo, indica i successivi passaggi previsti.

## **Cosa fa il cittadino:**

* Visualizza il messaggio su IO
* Accede al referto atterrando direttamente sulla pagina senza doversi autenticare nuovamente, grazie alla funzionalità Single Sign-On (SSO)
* Se richiesto, segue le indicazioni per ulteriori accertamenti.

## **Da ricordare:**

* Utilizza il metadato [**`require_secure_channels`**](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi#require_secure_channels) per proteggere **i contenuti sensibili**:&#x20;
  * le notifiche push sui dispositivi del destinatario mostreranno un generico invito ad aprire il messaggio, senza riportare il contenuto del titolo;
  * i messaggi non verranno inoltrati via email a prescindere dalla preferenza impostata dall'utente destinatario;
* Se desideri veicolare dati personale e/o sensibili nel titolo o nel corpo del messaggio, puoi usare i [**contenuti remoti** ](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto)e mantenere il controllo sul dato all'interno dei sistemi dell'ente;

## **Benefici per l’ente e per il cittadino** ✅

* **Accesso rapido all’esito**: Il cittadino può consultare il referto in autonomia, in tempi rapidi e senza dover contattare l’ente all'esito dello screening.
* **Trasparenza e continuità del percorso**: Il referto è integrato nel Fascicolo Sanitario Elettronico, garantendo coerenza e tracciabilità nel tempo.
* **Riduzione del carico sugli sportelli**: L’accesso digitale ai risultati diminuisce le richieste telefoniche o il carico agli sportelli, per ricevere o chiarire l’esito.

## Scrivere i messaggi su IO

Nel [Manuale dei servizi dell'app IO,](https://developer.pagopa.it/app-io/guides/manuale-servizi) puoi trovare il modello [Prevenzione](https://developer.pagopa.it/app-io/guides/modelli-servizi/salute/in-arrivo) cioè un template da cui l'ente può partire per **configurare il servizio e i relativi messaggi al cittadino** su IO.&#x20;
