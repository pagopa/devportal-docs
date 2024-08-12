# Passaggio alla Modalità Asincrona di un Ente Creditore

Per passare alla modalità Asincrona, un EC deve seguire i seguenti passi:

1. Implementare le [API asincrone](https://developer.pagopa.it/pago-pa/guides/sanp/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone) (con riferimento alla documentazione SANP).
2. Accedere al portale Self Care e richiedere la subscription key (API key) per la connettività asincrona. Questo passo è fondamentale perché tutte le interazioni con pagoPA avvengono attraverso chiamate REST (REpresentational State Transfer) e per consentire al Nodo di accettare queste chiamate, l'EC deve inserire nello header HTTP delle chiamate la subscription key specifica per il tipo di servizi che intende utilizzare. In assenza di questa chiave, il Nodo non procederà con l'accettazione della chiamata restituendo un errore HTTP 401 (Unauthorized). La sottoscrizione consente all'EC di gestire le posizioni debitorie, inclusi la creazione, pubblicazione, aggiornamento, invalidazione e cancellazione.
3. Sempre dal portale SelfCare, configurare la Stazione di collaudo che servirà l’integrazione asincrona: la configurazione non è diversa, se non per i contenuti, da una normale stazione.
4. Una volta che la stazione è stata verificata e autorizzata dal team di Service Management, si è pronti per iniziare la fase di test
5. L’EC deve configurare le sottoscrizioni per i Flussi di Rendicontazione e per le Receipt (paSendRTV1/V2). Questo passaggio assicura che l'EC possa ricevere correttamente i dati relativi ai pagamenti e alle conferme di pagamento.
6.  Dopo aver configurato tutte le sottoscrizioni e implementati i processi proprio lato utilizzando le API REST messe a disposizione da pagoPA, è necessario che l'EC proceda con i test delle funzionalità principali:

    * creazione della posizione debitoria;
    * pubblicazione della stessa
    * il suo aggiornamento;
    * la sua cancellazione;
    * caricamenti massivi (facoltativo).

    Questi test sono fondamentali per verificare che l'integrazione con il sistema pagoPA funzioni correttamente e che le operazioni asincrone siano gestite senza problemi.
7. Appena terminati i test, fornire le evidenze a PagoPA attraverso un piano di test condiviso.
8. Completati i test con esito positivo, e dopo aver pubblicato la posizione debitoria, l'EC può procedere con il tentativo di innescare il pagamento della posizione debitoria attraverso l'inserimento di tutti i dati necessari in Checkout e verificando l'avvenuta corretta sequenza di chiamate verso pagoPA.
9. Se il pagamento viene eseguito con successo, l'EC potrà acquisire la ricevuta di pagamento. Questo passaggio è fondamentale per confermare l'avvenuto pagamento e per mantenere un record contabile e amministrativo dell'operazione.
