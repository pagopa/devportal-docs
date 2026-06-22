# Service Level Agreement (SLA)

### 1. Finalità e ambito di applicazione

Il presente SLA definisce gli impegni minimi in termini di disponibilità, performance, gestione delle segnalazioni, sicurezza e interoperabilità per il Servizio "Messaggi di Cortesia".

I livelli di servizio qui definiti si applicano esclusivamente nei rapporti tra **PagoPA S.p.A.** e i **PSP**. Non sono opponibili né generano diritti a favore di utenti finali o soggetti terzi.

**I Messaggi di Cortesia** rientrano nella gestione dei messaggi **Informativi/Commerciali** del PSP (es.: Saldo settimanale, comunicazioni di marketing, aggiornamenti sui servizi).

***

### 2. Orario di disponibilità e manutenzione

_A carico di PagoPA S.p.A. e dei PSP._

| Metrica                             | Obiettivo                                                                                                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Disponibilità Servizi**           | H24 / 7 giorni su 7 (eccetto cause di forza maggiore)                                                                                                           |
| **Finestra manutenzione ordinaria** | Preferibilmente 22:00–06:00. Fatte salve esigenze specifiche comunicate via email: **messaggidicortesia@assistenza.pagopa.it**                                  |
| **Preavviso manutenzione**          | ≥ 5 giorni lavorativi                                                                                                                                           |
| **Manutenzioni straordinarie**      | Preavviso tempestivo (entro 3 ore dal sorgere della necessità), con fallback se possibile. Comunicazione via email: **messaggidicortesia@assistenza.pagopa.it** |

***

### 3. Livelli di disponibilità dei servizi

_A carico di PagoPA S.p.A. e dei PSP._

| Metrica                            | Obiettivo                                                              |
| ---------------------------------- | ---------------------------------------------------------------------- |
| **Disponibilità mensile**          | ≥ 99,5% (richieste correttamente elaborate / totale richieste inviate) |
| **Interruzione massima tollerata** | ≤ 2 ore e 10 minuti al mese                                            |
| **Periodi esclusi**                | Finestre di manutenzione regolarmente notificate allo SMO              |

### 4. Definizione dei Timestamp

I punti di passaggio (Timestamp) che i sistemi devono registrare in modo univoco per ogni messaggio sono:

* $$T_1$$ : Momento in cui il sistema EMD consegna il messaggio al BE del PSP (confermato da una ricevuta HTTP 200 OK o equivalente).
* $$T_2$$ : Momento in cui il BE del PSP invia la notifica push ai **Gateway Terzi** (es.: Apple - APNs, Google - FCM
* $$T_3$$ : Momento in cui l'app bancaria riceve il messaggio push e invia un segnale di "ACK" (ricevuta silenziosa) al backend del PSP stesso.

## 5. SLA Proposti (Indicatori e Target) da calcolare su base mensile

### **SLA 1: Tempo di Processing e Consegna al Gateway (KPI Principale)**

Misura l'efficienza del backend del PSP dall'evento scatenante (es. ricezione messaggio) fino al momento in cui il messaggio push viene preso in carico e inviato con successo ai gateway terzi.

**Definizione:** Intervallo tra la ricezione del messaggio da parte del PSP ( $$T_1$$ ) e l'invio ai Gateway Terzi ( $$T_2$$ ). La formula di calcolo è:

$$\Delta T = T_2 - T_1$$

| Classe Messaggio            | KPI Target (Delta T) | Target Mensile (SLA)   |
| --------------------------- | -------------------- | ---------------------- |
| **Informativi/Commerciali** | $$\leq 60$$ secondi  | $$100$$ % dei messaggi |

### **SLA 2: Tasso di Injection Success Rate** da calcolare su base mensile

Misura la capacità del sistema del PSP di processare le richieste senza generare errori interni (es. timeout del database, crash del microservizio di notifica).

* **Target:** 100% delle richieste push generate dal backend del PSP devono essere correttamente formattate e iniettate verso i gateway terzi (escludendo i token di notifica già scaduti o non validi lato app bancaria).

### **SLA 3: Tempo di Consegna End-to-End PSP (BE PSP** $$\rightarrow$$ **app bancaria)** da calcolare su base mensile

Intervallo tra la ricezione del messaggio nel BE del PSP ( $$T_1$$ ) e l'effettivo atterraggio sull'app bancaria ( $$T_3$$ ), al netto delle esclusioni di rete.

* **Target:** 100% delle notifiche push consegnate a dispositivi _online_ deve raggiungere l'app bancaria entro **120 secondi** totali da $$T_1$$ .

Resta inteso che i predetti SLA non si applicheranno al ricorrere di una delle ipotesi individuate tra i Casi di Esclusione.

### 6. Obbligo di Auditing, reportistica, contestazioni e log

* **Periodo di analisi:** Mensile solare.
* **Evidenza dell'avvenuto rispetto degli SLA:** nel caso in cui, PagoPA ne faccia richiesta, il PSP dovrà fornire un documento attestante l'avvenuto riseptto degli SLA, contenente in particolare i timestamp, i delivery log e e qualunque indicazione o traccia che dimostri anche i casi di esclusione entro 5 giorni lavorativi della richiesta stessa.
* Nel caso in cui vengano riscontrate delle violazioni dei predetti SLA, PagoPA potrà procedere con l’applicazione delle penali (nonchè intraprendere le altre azioni di cui al paragrafo 10). In siffatta ipotesi, PagoPA contesterà tramite PEC al PSP le eventuali inadempienze riscontrate e le relative penali, con diritto del PSP di fornire, in forma scritta tramite PEC, le proprie controdeduzioni entro 5 (cinque) giorni lavorativi dalla comunicazione della volontà della PagoPA di applicare le penali. PagoPA, ricevute le controdeduzioni, ne valuterà la fondatezza e adotterà le decisioni conseguenti.\
  In mancanza delle suddette controdeduzioni entro il termine stabilito o in caso di rigetto delle stesse controdeduzioni da parte di PagoPA, quest’ultima potrà procedere direttamente all’applicazione delle penali.
* **Conservazione dei dati:** Il PSP è obbligato a conservare i log dei timestamp ( $$T_1$$ , $$T_2$$ , $$T_3$$ ) per un periodo minimo di **6 mesi**.

## 7. Casi di esclusione

Per rendere lo SLA equo e applicabile, si prevede che i ritardi o i fallimenti causati dai seguenti fattori siano **esclusi** dal computo delle metriche (anche denominati "Casi di Esclusione"):

1. **Downtime dei Gateway Terzi:** Disservizi o rallentamenti dichiarati.
2. **Stato del Dispositivo Utente:** Telefono spento, modalità aereo, assenza di copertura di rete, o utente che ha revocato i permessi di notifica dall'app bancaria.
3. **Token Invalidi:** Errori derivanti da token di notifica obsoleti non ancora aggiornati dall'applicazione client.
4. **Manutenzioni Programmate:** Finestre di manutenzione comunicate dal PSP con congruo preavviso entro 5 giorni lavorativi, solitamente eseguite in ore notturne.

***

### 8. Gestione incidenti e priorità

PagoPA S.p.A., tramite il proprio **Service Management Operation (SMO)**, garantisce la presa in carico e gestione degli incidenti secondo la seguente tabella. Gli stessi SLA si applicano quando PagoPA apre una segnalazione verso un Prestatore Aderente.

| Priorità | Definizione                                                             | Presa in carico    | Risoluzione attesa     | Escalation  |
| -------- | ----------------------------------------------------------------------- | ------------------ | ---------------------- | ----------- |
| **P1**   | Indisponibilità totale del servizio MDC per tutti gli aderenti          | ≤ 2 ore            | ≤ 8 ore lavorative     | Ogni 2 ore  |
| **P2**   | Malfunzionamento parziale o totale che non coinvolge tutti gli aderenti | ≤ 4 ore            | ≤ 16 ore lavorative    | Ogni 4 ore  |
| **P3**   | Problema minore con degrado delle prestazioni                           | ≤ 8 ore lavorative | ≤ 3 giorni lavorativi  | Ogni giorno |
| **P4**   | Malfunzionamento marginale, non bloccante                               | ≤ 40 ore           | ≤ 20 giorni lavorativi | Settimanale |

#### 8.1. Modalità di gestione e responsabilità

La valutazione iniziale della priorità è effettuata da PagoPA S.p.A. che si riserva la facoltà di modificare tale priorità (es. in presenza di mitigazione, una priorità alta può scendere a medio-bassa).

#### 8.2. Esclusioni e limitazioni di responsabilità

Gli obblighi non si applicano in caso di:

* Malfunzionamenti riconducibili a soggetti terzi (es. PSP, aggregatori, fornitori esterni).
* Eventi di forza maggiore.
* Utilizzo non conforme del Servizio da parte dei PSP o degli Utenti finali.

#### 8.3. Meccanismo di escalation

In caso di mancato rispetto dei tempi di risoluzione:

1. Attivazione di escalation tecnica e/o manageriale interna.
2. Informazione tempestiva al soggetto aderente tramite i canali digitali dedicati.

{% hint style="danger" %}
SEND affida il messaggio al componente EMD, che verifica l'abilitazione del PSP ed attivazione del Servizio da parte di un Utente nell’app bancaria di quel determinato PSP in caso di esito positivo, ne prende in carico l'invio verso il PSP. EMD gestirà autonomamente fino a 3 tentativi di retry/consegna del messaggio verso il PSP;
{% endhint %}

***

### 9. Sicurezza e compliance

_A carico di PagoPA S.p.A. e dei PSP._

| Metrica                | Obiettivo                             |
| ---------------------- | ------------------------------------- |
| **API Security**       | Conforme ad API Security Guidelines   |
| **Autenticazione**     | OAuth2                                |
| **Logging e auditing** | Logging cifrato, conservazione 6 mesi |

***

### 10. Penali, sospensione del servizio e risoluzione del contratto

Fatti salvi i casi di forza maggiore, in caso di mancato rispetto dei livelli di servizio definiti, PagoPA S.p.A. potrà esercitare le seguenti facoltà:

**A. con esclusivo riferimento ai casi di violazione degli SLA relativi ai tempi di processing e consegna (SLA 1, SLA 2, SLA 3): qualora su base mensile si verifichino violazioni dei predetti SLA per una percentuale di casi superiore allo 0,5% e da tali violazioni sia derivata impossibile** per l’utente finale di visualizzare in tempo utile la notifica digitale allo stesso destinata, con conseguente invio a suo carico della raccomandata cartacea e da ciò sia derivata una contestazione da parte dell’utente finale verso PagoPA, quest’ultima applicherà al PSP una penale equivalente al costo della raccomandata cartacea stessa da liquidare come segue:\
(i) il PSP provvederà, entro il termine di 30 giorni, a rimborsare all’utente il costo della raccomandata cartacea tramite bonifico da eseguire direttamente all’IBAN intestato dall’utente finale e fornito da PagoPA; oppure, in subordine e in via residuale\
(ii) PagoPA provvederà a rimborsare direttamente l’utente finale, agendo poi in regresso verso il PSP; e in ogni caso, anche per gli altri SLA fissati nel presente manuale\
**B. sospendere immediatamente l'erogazione del Servizio;**\
**C. in caso di violazione grave e reiterata degli SLA, risolvere il contratto per inadempimento.**

***

### 11. Escalation tecnica e manageriale

#### Da PagoPA verso il PSP:

* **Escalation tecnica**: Condivisione del ticket originale a un SPO del partecipante.
* **Escalation manageriale**: Via PEC/email verso gli Amministratori entro 24 ore dalla escalation tecnica non risolta.

#### Dal PSP verso PagoPA:

* **Escalation tecnica**: Inviare email a `messaggidicortesia@assistenza.pagopa.it` indicando il numero del ticket nell'oggetto.
* **Escalation manageriale**: Via PEC verso l'indirizzo dedicato entro 24 ore dalla escalation tecnica non risolta.

***

### 12. Versionamento e modifiche

Il presente SLA può essere aggiornato da PagoPA S.p.A.:

1. Su richiesta motivata di una delle parti.
2. Almeno una volta all'anno per adeguamento evolutivo.
