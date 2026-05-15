# 4️⃣ Comunicazione del certificato

**Dopo aver effettuato la vaccinazione, Anna ha ricevuto una notifica su App IO:** l’ente le comunicava che il suo certificato vaccinale era stato caricato nel fascicolo sanitario elettronico. Direttamente dall’app, Anna ha potuto accedere con un solo tocco al documento, visualizzarlo e salvarlo per consultazioni future. Tutto è avvenuto in modo semplice e immediato, senza necessità di ulteriori autenticazioni.

<figure><img src="../.gitbook/assets/image (9).png" alt="Immagine che mostra una schermata di app IO con il messaggio contenente certificato vaccinale"><figcaption></figcaption></figure>

### **Cosa fa l'ente:**

* Carica il certificato all’interno del fascicolo sanitario elettronico.
* Invia un messaggio informativo con link diretto al documento.

### **Cosa fa il cittadino:**

* Accede al messaggio, apre il fascicolo sanitario e consulta o scarica il certificato.

## Da ricordare:

* Se desideri veicolare dati personali e/o sensibili nel titolo o nel corpo del messaggio, puoi usare i [**contenuti remoti** ](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/inviare-un-messaggio/inviare-un-messaggio-a-contenuto-remoto)e mantenere il controllo sul dato all'interno dei sistemi dell'ente;
* Utilizza il metadato [**`require_secure_channels`**](https://developer.pagopa.it/app-io/guides/io-guida-tecnica/funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi#require_secure_channels) per proteggere **i contenuti sensibili**:&#x20;
  * le notifiche push sui dispositivi del destinatario mostreranno un generico invito ad aprire il messaggio, senza riportare il contenuto del titolo;
  * i messaggi non verranno inoltrati via email a prescindere dalla preferenza impostata dall'utente destinatario;

## Migliora l'esperienza dall'inizio alla fine **💡**

* **Carica tempestivamente il certificato nel Fascicolo Sanitario Elettronico**: Idealmente, entro poche ore dalla somministrazione. Il ritardo genera richieste e insoddisfazione.
* **Invia una notifica personalizzata tramite App IO**: Il messaggio deve contenere un link diretto al documento nel Fascicolo, evitando passaggi superflui.
* **Verifica la correttezza dei dati anagrafici e clinici**: Evita incongruenze che richiedano correzioni manuali postume.
* **Prevedi un contatto per eventuali problemi**: Inserisci nella notifica un riferimento utile in caso di difficoltà con la consultazione del certificato.

## **Benefici per l’ente e per il cittadino** ✅

* **Accesso immediato al certificato**: Il cittadino riceve il documento digitale nel Fascicolo Sanitario Elettronico (FSE) subito dopo la somministrazione, senza attese né richieste aggiuntive.
* **Tracciabilità e archiviazione sicura**: Il certificato è sempre consultabile da App IO o FSE, anche per usi futuri (es. viaggi, lavoro, scuola).
* **Riduzione della burocrazia**: L’invio automatico del certificato elimina la necessità di rilasci cartacei o richieste via sportello.
* **Esperienza fluida e completa**: Il cittadino percepisce un processo moderno, semplice e chiuso ad anello: riceve l’invito, si vaccina, ottiene il certificato.

