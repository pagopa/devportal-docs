# Service Level Agreement (SLA)

## Manuale operativo Messaggi di Cortesia (MDC)

### 1. Finalità e ambito di applicazione

Il presente SLA costituisce un allegato al Contratto di Adesione e definisce gli impegni minimi in termini di disponibilità, performance, gestione delle segnalazioni, sicurezza e interoperabilità per il Servizio Messaggi di Cortesia (MDC). Il servizio è destinato ai soggetti aderenti che abbiano formalmente accettato le condizioni.

I livelli di servizio qui definiti si applicano esclusivamente nei rapporti tra **PagoPA S.p.A.** e i **Soggetti Aderenti**. Non sono opponibili né generano diritti a favore di utenti finali o soggetti terzi.

***

### 2. Orario di disponibilità e manutenzione

_A carico di PagoPA S.p.A. e dei soggetti aderenti firmatari._

| Metrica                             | Obiettivo                                                                                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Disponibilità Servizi**           | H24 / 7 giorni su 7 (eccetto cause di forza maggiore)                                                                                |
| **Finestra manutenzione ordinaria** | Preferibilmente 22:00–06:00. Fatte salve esigenze specifiche comunicate tramite [Service Desk](sla.md)                               |
| **Preavviso manutenzione**          | ≥ 5 giorni lavorativi                                                                                                                |
| **Manutenzioni straordinarie**      | Preavviso tempestivo (entro 3 ore dal sorgere della necessità), con fallback se possibile. Comunicazione via [Service Desk](sla.md). |

***

### 3. Livelli di disponibilità dei servizi

_A carico di PagoPA S.p.A. e dei soggetti aderenti firmatari._

| Metrica                            | Obiettivo                                                              |
| ---------------------------------- | ---------------------------------------------------------------------- |
| **Disponibilità mensile**          | ≥ 99,5% (richieste correttamente elaborate / totale richieste inviate) |
| **Interruzione massima tollerata** | ≤ 2 ore e 10 minuti al mese                                            |
| **Periodi esclusi**                | Finestre di manutenzione regolarmente notificate allo SMO              |

***

### 4. Tempi di risposta e performance

I tempi di risposta e le prestazioni sono determinati e misurati in conformità con gli standard tecnici e operativi stabiliti dalle relative **xxxxxx**. Tali standard costituiscono il parametro di riferimento per il monitoraggio della qualità.

***

### 5. Gestione incidenti e priorità

PagoPA S.p.A., tramite il proprio **Service Management Operation (SMO)**, garantisce la presa in carico e gestione degli incidenti secondo la seguente tabella. Gli stessi SLA si applicano quando PagoPA apre una segnalazione verso un Aderente.

| Priorità | Definizione                                                             | Presa in carico    | Risoluzione attesa     | Escalation  |
| -------- | ----------------------------------------------------------------------- | ------------------ | ---------------------- | ----------- |
| **P1**   | Indisponibilità totale del servizio MDC per tutti gli aderenti          | ≤ 2 ore            | ≤ 8 ore lavorative     | Ogni 2 ore  |
| **P2**   | Malfunzionamento parziale o totale che non coinvolge tutti gli aderenti | ≤ 4 ore            | ≤ 16 ore lavorative    | Ogni 4 ore  |
| **P3**   | Problema minore con degrado delle prestazioni                           | ≤ 8 ore lavorative | ≤ 3 giorni lavorativi  | Ogni giorno |
| **P4**   | Malfunzionamento marginale, non bloccante                               | ≤ 40 ore           | ≤ 20 giorni lavorativi | Settimanale |

#### 5.1. Modalità di gestione e responsabilità

La valutazione iniziale della priorità è effettuata da PagoPA S.p.A. PagoPA si riserva la facoltà di modificare la priorità (es. in presenza di mitigazione, una priorità alta può scendere a medio-bassa).

#### 5.2. Esclusioni e limitazioni di responsabilità

Gli obblighi non si applicano in caso di:

* Malfunzionamenti riconducibili a soggetti terzi (es. PSP, aggregatori, fornitori esterni).
* Eventi di forza maggiore.
* Utilizzo non conforme del servizio da parte dei soggetti aderenti o utenti finali.

#### 5.3. Meccanismo di escalation

In caso di mancato rispetto dei tempi di risoluzione:

1. Attivazione di escalation tecnica e/o manageriale interna.
2. Informazione tempestiva al soggetto aderente tramite i canali digitali dedicati.

{% hint style="danger" %}
SEND affida il messaggio al componente EMD, che verifica l'abilitazione della TPP ed attivazione del Cittadino per quella TPP alla ricezione del messaggio ed a quel punto ne prende in carico l'invio verso la TPP. EMD gestirà autonomamente fino a 3 tentativi di retry/consegna del messaggio verso la TPP; **un eventuale ulteriore errore di mancata consegna sarà gestito come incident dal team EMD con blocco nell'invio dei messaggi verso quella TPP fino alla risoluzione del problema.**
{% endhint %}

***

### 6. Sicurezza e compliance

_A carico di PagoPA S.p.A. e dei soggetti aderenti firmatari._

| Metrica                | Obiettivo                             |
| ---------------------- | ------------------------------------- |
| **API Security**       | Conforme ad API Security Guidelines   |
| **Autenticazione**     | OAuth2                                |
| **Logging e auditing** | Logging cifrato, conservazione 3 mesi |

***

### 7. Penali e sospensione del servizio

Fatti salvi i casi di forza maggiore, in caso di mancato rispetto dei livelli di servizio definiti, PagoPA S.p.A. avrà la facoltà di **sospendere immediatamente l'erogazione del servizio**.

***

### 8. Escalation tecnica e manageriale

#### Da PagoPA verso l'Aderente:

* **Escalation tecnica**: Condivisione del ticket originale a un SPO del partecipante.
* **Escalation manageriale**: Via PEC/email verso gli Amministratori entro 24 ore dalla escalation tecnica non risolta.

#### Dall'Aderente verso PagoPA:

* **Escalation tecnica**: Inviare email a `messaggidicortesia@assistenza.pagopa.it` indicando il numero del ticket nell'oggetto.
* **Escalation manageriale**: Via PEC verso l'indirizzo dedicato entro 24 ore dalla escalation tecnica non risolta.

***

### 9. Versionamento e modifiche

Il presente SLA può essere aggiornato da PagoPA:

1. Su richiesta motivata di una delle Parti.
2. Almeno una volta all'anno per adeguamento evolutivo.
