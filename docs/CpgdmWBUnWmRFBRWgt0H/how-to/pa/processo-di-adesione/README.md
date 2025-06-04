# Processo di adesione

Di seguito si riporta l’elenco delle attività che l’Ente e il Partner Tecnologico (PT) sono tenuti a seguire per portare a termine in maniera corretta il processo di adesione e integrazione alla piattaforma:

* [**Adempimenti amministrativi e preliminari** ](adempimenti-preliminari.md)**(Owner: Ente)**: messa a disposizione e sottoscrizione dell’accordo di adesione dell’Ente e dell'ulteriore documentazione necessaria, attestazione PT, fatturazione.
* [**Generazione API Key**](gestione-api-key.md) **(Owner: Ente)** fornire le API key generate in ambiente di produzione al PT SEND;
* [**Scelta dello use-case**](scelta-dello-use-case.md) **(Owner: Ente)**: Individuazione degli use-case per i quali utilizzare SEND, a valle di un assessment interno che aiuti l’Ente a identificare gli impatti dell’utilizzo di SEND sui propri sistemi interni.
* [**Analisi del processo attuale** ](analisi-del-processo-attuale.md)**(Owner: Ente; PT):** Censimento dell’attuale processo di notifica interno attraverso una mappatura effettuata inizialmente da un punto di vista funzionale, e successivamente da un punto di vista tecnologico, se già digitalizzato anche solo in parte.
* [**Sviluppo del processo TO-BE**](sviluppo-del-processo-to-be.md) **(Owner: Ente; PT)**: Definizione di un processo di notifica digitale TO-BE con chiara individuazione degli impatti sui sistemi dell’Ente. È auspicabile che l’Ente non trasli il processo fisico, ma che lo «ripensi digitalmente».

***

* **Generazione dei client** a partire dalla documentazione Swagger per la pagina API B2B per le Pubbliche Amministrazioni;
* (Se prevista) [integrazione a SEND tramite PDND Interoperabilità](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/guida-alladesione):thumbsup:
  * Configurazione dell’accesso a PDND Interoperabilità;
  * Creazione richiesta di generazione Voucher per SEND - UAT (Piattaforma Notifiche).
* Creazione e gestione degli **stream** per recupero esiti.
* **Inserimento della notifica**: caricamento documenti e inserimento notifica.&#x20;
* Dove richiesto,[ attualizzazione della posizione debitoria](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/).[ ](https://docs.pagopa.it/pnvalidator/)

***

* [**Test E2E**](test-di-integrazione.md) **(Owner: PT o Ente):** Test del corretto invio della notifica digitale attraverso il dispiegamento di almeno i test case prescelti da PagoPA S.p.A.. Tali test sono da effettuare a livello di singolo Ente.

***

* Ottimento report generato tramite il  **Validator Tool** e invio a PagoPA  S.p.A. del buon esito tramite [ticket Jira](https://pagopa.atlassian.net/servicedesk/customer/portal/5/group/28/create/150).
* PagoPA S.p.A. invierà **conferma dell'avvenuta integrazione** in UAT.

***

* [**Rilascio in produzione e avvio in esercizio** ](rilascio-in-produzione-e-avvio-in-esercizio.md)**(Owner: Ente; PT)**: il processo viene rilasciato in produzione ed utilizzato per le attività legate agli use-case considerati.





