# Modalità integrazione PSP

Il sistema è progettato per standardizzare la comunicazione tra il POS Gateway pagoPA e il Layer POS del PSP, senza alcuna interazione diretta con il terminale fisico. Di conseguenza, proprio come avviene oggi, la gestione finanziaria della transazione e la trasmissione tempestiva degli esiti dal POS all’EC rimangono di completa competenza del fornitore del terminale di incasso.

Per connettersi a questa architettura centralizzata, il PSP dovrà adeguarsi alle specifiche di interoperabilità del POS Gateway pagoPA presenti in questa sezione.

### Workflow logico di integrazione&#x20;

<img src="../../../.gitbook/assets/unknown (9).png" alt="" height="495.32878378119835" width="602">

Il flusso si articola in fasi sequenziali tra il POS Gateway pagoPA e il Layer POS del PSP:

* **FASE 1: Recupero lista terminali POS** \
  Il POS Gateway pagoPA interrogherà il layer POS del PSP per recuperare la lista dei terminali POS disponibili per quel determinato EC.&#x20;
* **FASE 2: Inizializzazione pagamento POS**\
  Il POS Gateway pagoPA trasmetterà al Layer POS del PSP i dati utili ad attivare il pagamento sul terminale. Il Layer POS del PSP dovrà attivare il terminale POS per il pagamento con l’importo indicato.
* **FASE 3: Comunicazione esito pagamento**\
  Il Layer POS del PSP invierà l’esito e i riferimenti dell’operazione di pagamento al POS Gateway pagoPA.

In caso di esito positivo dell'operazione di pagamento sul terminale POS, il POS Gateway pagoPA trasferirà l’esito e i riferimenti dell’avvenuta transazione al nodo dei pagamenti pagoPA, al fine di trasmettere informazioni al PSP secondo le consolidate modalità di comunicazione.&#x20;

### Resilienza del sistema

Il sistema è progettato per garantire la coerenza delle sessioni di pagamento attraverso le seguenti proprietà:

* **Coerenza tra Layer POS del PSP e POS Gateway pagoPA**\
  Il POS Gateway pagoPA prevederà un meccanismo di riconciliazione con il Layer POS del PSP circa gli esiti autorizzativi delle sessioni di pagamento al fine di tenere traccia delle transazioni che non hanno raggiunto uno stato consistente. Tale attività permetterà una più agevole identificazione di potenziali casistiche di rimborso che il PSP sarà eventualmente tenuto ad effettuare.
* **Idempotenza** \
  Le interfacce del Layer POS del PSP e del POS Gateway pagoPA dovranno garantire l'idempotenza di ogni chiamata e permetterne il retry.
* **Scadenza sessione (Timeout)**\
  Il POS Gateway pagoPA imporrà un timeout di sessione sulla ricezione dell’esito autorizzativo da parte del Layer POS del PSP. Qualsiasi informazione relativa all’ esito (callback) inviata dal PSP oltre questo limite temporale sarà automaticamente rifiutata dal POS Gateway pagoPA con un codice di errore specifico.
* **Retry**\
  In caso di errore transitorio, il PSP dovrà implementare logiche di re-invio delle informazioni relative all'esito autorizzativo, per l’intera durata della sessione e fino ad ottenimento di un esito.

### Integrazione tecnica e configurazione

Il PSP per poter utilizzare il POS Gateway pagoPA dovrà configurare all’interno del Back Office pagoPA i parametri necessari al corretto instradamento delle chiamate:

* **Interfacce di comunicazione**\
  Il PSP dovrà censire l’host su cui verranno esposte le API che verranno richiamate dal POS Gateway pagoPA.

<br>

\
<br>
