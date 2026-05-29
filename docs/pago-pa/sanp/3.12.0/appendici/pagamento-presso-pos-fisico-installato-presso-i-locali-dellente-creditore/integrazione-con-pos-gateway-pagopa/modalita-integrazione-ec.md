# Modalità integrazione EC

L'integrazione dell'Ente Creditore con il POS Gateway pagoPA abilita un modello di pagamento  _real-time_ che rispetta le esigenze di immediatezza dello sportello fisico, riducendo al contempo i vincoli legati allo specifico modello di hardware (POS) adottato.

Per connettersi a questa architettura centralizzata, l'Ente dovrà allineare i propri software gestionali di sportello con le specifiche di interoperabilità del POS Gateway pagoPA.

### Workflow Logico di Integrazione

<img src="../../../.gitbook/assets/unknown (7).png" alt="" height="570" width="533">

Il flusso è progettato per garantire un'esperienza di pagamento tra il Gestionale dell'EC, il terminale POS e il POS Gateway pagoPA:&#x20;

* **FASE 1: Inizializzazione sessione**\
  L'EC interrogherà il POS Gateway pagoPA per ottenere l’identificativo della sessione di pagamento e recuperare eventualmente l'elenco dei terminali disponibili.
* **FASE 2: Inizializzazione pagamento pagoPA e POS**\
  L'EC trasmetterà i dati della posizione debitoria al POS Gateway pagoPA, che gestirà l’orchestrazione tra i diversi attori dell'ecosistema e inizializzerà il pagamento sul terminale POS.
* **FASE 3: Comunicazione esito pagamento**\
  Il gestionale dell'EC rimarrà in attesa dell'esito dell'autorizzazione finanziaria da parte del PSP per mezzo del POS Gateway pagoPA tramite callback (push).

### Resilienza del sistema

Il sistema è progettato per garantire la coerenza delle sessioni di pagamento attraverso le seguenti proprietà:

* **Coerenza dell’esito della sessione di pagamento tra i vari attori**\
  La sessione di pagamento potrà dirsi correttamente conclusa solo nel momento in cui l’esito ricevuto dal gestionale dell’EC da parte del POS Gateway pagoPA sarà coerente con l’esito autorizzativo della sessione di pagamento eseguita sul terminale POS.
* **Idempotenza**\
  Le interfacce esposte dal POS Gateway pagoPA e quelle implementate dall'EC dovranno garantire l'idempotenza. In caso di retry dovuto a errori di rete o timeout, l'EC e il POS Gateway pagoPA dovranno essere in grado di gestire la ricezione dello stesso esito senza generare duplicazioni o errori logici.
* **Scadenza sessione (Timeout)**\
  Il POS Gateway pagoPA imporrà un timeout di sessione per il completamento della fase di inizializzazione e ricezione dell’esito.
* **Retry**\
  L’invio dell’esito verso l’EC sarà oggetto di _retry_ da parte del POS Gateway pagoPA in caso di errori transitori di comunicazione.

### Integrazione tecnica e configurazione

L’EC per poter utilizzare il POS Gateway pagoPA dovrà configurare all’interno del Back Office pagoPA i parametri necessari al corretto instradamento delle chiamate:

*   **Identificazione del fornitore dei terminali POS**

    L'EC dovrà censire i dati del soggetto che fornisce il servizio di incasso tramite POS. Tale configurazione abiliterà il POS Gateway pagoPA a instradare correttamente le richieste verso il layer specifico del PSP che gestisce i terminali POS dell’EC.
* **Interfacce di comunicazione**\
  L’EC dovrà censire l’host su cui verranno esposte le API che verranno richiamate dal POS Gateway pagoPA.

<br>
