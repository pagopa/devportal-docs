# Service Level Agreement (SLA)

### 1. Finalità e ambito di applicazione

Il presente SLA costituisce un allegato al Modulo di adesione e definisce gli impegni minimi in termini di disponibilità, performance, gestione delle segnalazioni, sicurezza e interoperabilità per il Servizio SEPA Request-to-Pay (RTP), destinato ai soggetti aderenti di cui all’Accordo che ne abbiano formalmente accettato le condizioni, nonché necessari per erogare e ricevere i Servizi, anche nel rispetto della documentazione di seguito elencata, come di volta in volta aggiornata ed integralmente richiamata:

* delle SANP pagoPA;
* del SEPA RTP Rulebook e delle Implementation Guidelines EPC.

I livelli di servizio di cui alla presente sezione si applicano esclusivamente nei rapporti tra PagoPA S.p.A. e i Soggetti Aderenti ai sensi del Modulo di Adesione. Gli stessi non sono opponibili né generano diritti a favore degli utenti finali o di soggetti terzi.

### 2. Orario di disponibilità e manutenzione a carico di PagoPA S.p.A. e dei soggetti aderenti firmatari.

| Metrica                         | Obiettivo                                                                                                                                                                           |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Disponibilità Servizi           | H24 / 7 giorni su 7 - ad eccezione di cause di forza maggiore                                                                                                                       |
| Finestra manutenzione ordinaria | <p>Preferibilmente 22:00–06:00</p><p>Fatte salve esigenze specifiche degli aderenti da comunicare a https://pagopa.atlassian.net/servicedesk/customer/portal/3</p>                  |
| Preavviso manutenzione          | ≥ 5 giorni lavorativi                                                                                                                                                               |
| Manutenzioni straordinarie      | Preavviso tempestivo, con fallback se possibile, entro 3 ore da quando sorge la necessità, da comunicare all’indirizzo https://pagopa.atlassian.net/servicedesk/customer/portal/3.  |

### 3. Livelli di disponibilità dei servizi a carico di PagoPA S.p.A. e dei soggetti aderenti firmatari

| Metrica                        | Obiettivo                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Disponibilità mensile          | ≥ 99,5% calcolato come percentuale di richieste correttamente elaborate rispetto al totale delle richieste inviate. |
| Interruzione massima tollerata | ≤ 2 ore e 10 minuti al mese                                                                                         |
| Periodi esclusi                | Finestre di manutenzione regolarmente notificate a SMO                                                              |

### 4. Tempi di risposta e performance

I tempi di risposta e le prestazioni del Servizio SEPA Request-to-Pay (RTP) sono determinati e misurati in conformità con gli standard tecnici e operativi stabiliti dal Rulebook SEPA Request-to-Pay (RTP) e dalle relative Implementation Guidelines dell'European Payments Council (EPC), nelle versioni di volta in volta vigenti. Tali standard costituiscono parametro di riferimento per il monitoraggio della qualità dei Servizi e per l’eventuale riscontro a richieste degli aderenti.&#x20;

### 5. Gestione incidenti e priorità

PagoPA S.p.A, per il tramite del proprio Service Management Operation (SMO) si impegna formalmente a garantire la presa in carico, la classificazione e la gestione, degli incidenti relativi al Servizio SEPA Request-to-Pay (RTP), in conformità ai criteri di priorità di seguito indicati di e alle migliori pratiche di settore.

Gli stessi SLA si intendono applicati quando è PagoPA ad aprire una segnalazione a un Aderente.

| Priorità | Definizione                                                                                                                               | Presa in carico da PagoPA S.p.A./SMO                                            | Tempo atteso per risoluzione  | Frequenza escalation   |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------- | ---------------------- |
| P1       | Indisponibilità totale del servizio RTP e del servizio repository che coinvolge tutti gli aderenti al servizio                            | ≤ 2 ora dall'evidenza del fermo del servizio sul sistema di Incident management | ≤ 8 ore lavorative            | Ogni 2 ore             |
| P2       | Malfunzionamento  parziale che non coinvolge tutti gli aderenti al servizio o che coinvolge tutti gli aderenti ma ferma tutto il servizio | ≤ 4 ore                                                                         | ≤ 16 ore lavorative           | Ogni 4 ore             |
| P3       | Problema minore mediamente impattante, che causa il degrado di prestazioni                                                                | ≤ 8 ore lavorative                                                              | ≤ 3 giorni lavorativi         | Ogni giorno            |
| P4       | Malfunzionamento marginale, non bloccante                                                                                                 | ≤ 40 ore                                                                        | ≤ 20 giorni lavorativi        | Escalation settimanale |

#### 5.1. Modalità di gestione e responsabilità

La valutazione iniziale della priorità di un incidente è effettuata da PagoPA S.p.A. al momento della presa in carico della segnalazione sottomessa dal soggetto aderente. PagoPA si riserva la facoltà di modificare la priorità .

In particolare, in presenza di mitigazione, le priorità alte possono scendere a priorità medio basse.

Gli obblighi di cui sopra sono in capo a PagoPA S.p.A., fatto salvo quanto previsto al successivo paragrafo 5.2.

#### 5.2. Esclusioni e limitazioni di responsabilità

Gli obblighi descritti nella presente Sezione non trovano applicazione nei casi di:&#x20;

* malfunzionamenti o interruzioni direttamente o indirettamente riconducibili a soggetti terzi (es. PSP, aggregatori, fornitori esterni);
* eventi qualificabili come di forza maggiore, così come definiti nel Modulo di Adesione;
* utilizzo del Servizio non conforme da parte dei soggetti aderenti o dei loro utenti finali.&#x20;

#### 5.3. Meccanismo di escalation

In caso di mancato rispetto dei tempi previsti per la risoluzione in funzione della priorità assegnata, PagoPA S.p.A. si impegna a:&#x20;

* attivare una escalation tecnica e/o manageriale interna;
* informare tempestivamente il soggetto aderente, laddove ne sia previsto il coinvolgimento diretto e, aggiornarlo con frequenza coerente con quanto previsto nella tabella di priorità, attraverso i mezzi digitali messi a disposizione per la sottomissione delle segnalazioni.<br>

### 6. Sicurezza e compliance a carico di PagoPA S.p.A. e dei soggetti aderenti firmatari

| Metrica            | Obiettivo                                |
| ------------------ | ---------------------------------------- |
| API Security       | Conforme ad EPC API Security Guidelines  |
| <p><br></p>        | <p><br></p>                              |
| Autenticazione     | Mutual TLS + Token-based                 |
| Logging e auditing | Logging cifrato, conservazione 3 mesi    |

***

### 7. Penali e livelli di servizio garantiti a carico dei soggetti aderenti firmatari

Fatti salvi i casi di forza maggiore o le cause direttamente o indirettamente imputabili a PagoPA S.p.A., in caso di mancato rispetto dei livelli di servizio definiti nel presente SLA, PagoPA S.p.A. avrà la facoltà di sospendere immediatamente l’erogazione del servizio.

### 8. Escalation tecnica e manageriale

Le escalation di PagoPa verso un partecipante che non risponde alle segnalazioni nei tempi previsti vanno fatte attraverso:

* Escalation tecnica: la condivisione del ticket originale a un SPO del partecipante
* Escalation manageriale: escalation via PEC/email verso l’Amministratore/gli Amministratori entro 24 ore dalla escalation tecnica non risolta.

In caso di incidenti non risolti tramite ticketing entro le tempistiche previste per la priorità, l’escalation tecnica può essere convertita in escalation manageriale mediante invio PEC o email all’indirizzo indicato dal Soggetto Aderente al momento dell’adesione. PagoPA S.p.A. risponderà entro 24 ore lavorative.<br>

Nel caso in cui l’esclation deve essere fatta dall’Aderente verranno contattati i seguenti indirizzi:

* Escalation tecnica: inviare una email all’indirizzo ticket.cstar.srtp@pagopa.it indicando nel titolo della mail il numero del ticket per cui non si ha ottenuto risposta
* Escalation manageriale: escalation via PEC verso indirizzo dedicato entro 24 ore dalla escalation tecnica non risolta

### 9. Versionamento e modifiche

Il presente SLA potrà essere aggiornato da PagoPA:

* in occasione di modifiche alle EPC Guidelines o alle SANP PagoPA che impattino direttamente sugli impegni di servizio;
* su richiesta motivata di una delle Parti, previo confronto tecnico;
* almeno una volta all’anno, per adeguamento evolutivo del servizio.
