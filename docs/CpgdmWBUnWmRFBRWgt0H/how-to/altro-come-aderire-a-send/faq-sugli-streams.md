# FAQ sugli streams

## Stream senza filtri&#x20;

Uno stream senza filtri ad esempio

`{` \
&#x20;  `"title": "NoFilteredStream",` \
&#x20;  `"eventType": "STATUS",` \
&#x20;  `"filterValues": []` \
`}`                                                                                           &#x20;

questo raccoglierà tutti i cambi di stato avvenuti nel tempo. Questo concetto è valido anche per gli eventi di TIMELINE.

### Stream filtrati&#x20;

È meglio avere più stream filtrati, per inquadrare specifici eventi di interesse: è consigliato generare uno o più stream applicando i filtri sugli eventi di status / timeline di maggior interesse, restando nel limite massimo di 10 stream per PA. **\***&#x53;e invece si vogliono ottenere tutti gli eventi bisognerà inserire un filtro vuoto:**`"filterValues": []`**

**\*Per retro compatibilità, inserendo questo campo vuoto lo stream di tipo TIMELINE restituirà gli eventi della versione GA 1.0, se si vogliono ottenere gli eventi di timeline introdotti dalle versioni successive sarà necessario indicare tutti gli eventi d'interesse nel campo `filterValues.`**

### Visualizzazione eventi

Per ottenere gli eventi, dopo aver creato uno stream ed inserite alcune notifiche, bisogna chiamare il servizio per la lettura degli eventi inserendo nel path variabile lo **streamId** dello stream che si vuole interrogare. A questo punto:

1. Se nell'header della response ottengo **retry-after = 0** significa che è possibile consumare ulteriori eventi presenti nello stream; quindi, per ottenere gli eventi successivi bisogna richiamare nuovamente lo stesso servizio, aggiungendo come query param l'**eventId** dell'ultimo evento.
2. Se nell'header della response ottengo **retryAfter ≠ 0** ed ho eventi nel body della response, significa che lo stream non contiene altri eventi e sarà necessario attendere che ne siano generati di nuovi, prima di poter richiamare di nuovamente il servizio sullo stesso stream. Il campo **retryAfter** restituisce appunto il tempo in millisecondi da rispettare prima di effettuare la nuova chiamata al servizio



### Ho interrogato uno stream inserendo come path variabile lo _streamId_ di mio interesse ed ho ottenuto 50 eventi, ognuno con il proprio _eventId_. Ho richiamato di nuovo lo stesso servizio aggiungendo come query param l'eventId dell'ultimo evento ottenuto nella prima chiamata ed ottengo gli eventi successivi a quelli ottenuti nella prima chiamata. Posso vedere di nuovo gli eventi ottenuti dalla prima chiamata?

NO, una volta passato il query param **eventId** alla chiamata del servizio, tutti gli eventi precedenti sono cancellati dallo stream e non possono più essere recuperati. E' quindi fondamentale salvare gli eventi ottenuti da ogni chiamata, prima di richiedere i successivi.

### Testare i diversi stati ed eventi appartenenti al processo di notifica

Si possono creare 2 stream con `"`**`eventType`**`":"`**`STATUS"`** e con **`"eventType": "TIMELINE"`**, inserire una notifica ed attendere alcuni minuti per permettere alla Piattaforma di elaborare la notifica appena inserita; infatti il workflow della notifica inizia subito dopo l'inserimento con la generazione dei vari eventi legati ai passaggi che si susseguono.\
Gli eventi che si generano potranno essere consumati dallo stream ed essere utili ai fini dei test.

### Visualizzare il canale di spedizione seguito da una notifica

Gli eventi di workflow sono differenti a seconda che il canale di spedizione sia digitale o analogico, ad esempio **SCHEDULE\_ANALOG\_WORKFLOW** determina l'inizio del workflow per invio cartaceo mentre **SCHEDULE\_DIGITAL\_WORKFLOW** per l'invio digitale.\
In base all'evento presente nello stream sarà quindi possibile dedurre il canale di spedizione utilizzato.

### Destinatario multiplo

#### **Descrizione di stato sintetica della notifica**

La descrizione di stato sintetica è così rappresentata:

* La descrizione di stato sintetica della notifica passa a `DELIVERED` quando si concludono tutti i tentativi di invio della notifica per tutti i destinatari ed almeno un destinatario è stato raggiunto (per via digitale o per via cartacea).
* La descrizione di stato sintetica della notifica passa a `UNREACHABLE` quando tutti i destinatari non sono raggiungibili.
* La descrizione di stato sintetica della notifica passa a `EFFECTIVE_DATE` se la notifica è stata consegnata ad almeno uno dei destinatari (`DELIVERED`) oppure quando tutti i destinatari non sono raggiungibili (`UNREACHABLE`) ed è trascorso il tempo necessario al perfezionamento per decorrenza termini per almeno uno di questi.\
  **NOTA**: _Si evidenzia che il passaggio della descrizione a_ `EFFECTIVE_DATE` _**NON** influenza in alcun modo il grado di perfezionamento degli altri destinatari. Infatti il Perfezionamento è una caratteristica tipica del destinatario e non è impattata in alcun modo da come viene descritto lo stato sintetico della notifica._ Per i dettagli sul perfezionamento vedi: [https://docs.pagopa.it/f.a.q.-per-integratori/knowledge-base-di-piattaforma-notifiche/focus-sul-perfezionamento-della-notifica](https://docs.pagopa.it/f.a.q.-per-integratori/knowledge-base-di-piattaforma-notifiche/focus-sul-perfezionamento-della-notifica)
* La descrizione di stato sintetica della notifica passa a `VIEWED` quando almeno uno dei destinatari ha fatto accesso alla notifica.\
  **NOTA**: _destinatari differenti possono, entrando sul dettaglio della notifica, vedere descrizioni diverse (Perfezionata per presa visione/Visualizzata) in relazione al momento di prima visualizzazione se precedente o successivo alla decorrenza termini._

#### Evento di timeline

Quando sono presenti destinatari multipli, ogni evento di timeline sarà specifico per ogni destinatario ed appariranno tutti nella timeline con l'indicazione del destinatario impattato dall'evento.

#### Attestazione opponibile

L'Attestazione Opponibile viene generata una volta per ogni destinatario, ad eccezione di quella della presa in carico della notifica poiché anche se con più destinatari la notifica è considerata singolarmente. \
La Piattaforma espone anche delle attestazioni prodotte da sistemi esterni, quali ricevute xml dell’esito relativo all’invio PEC o le ricevuta delle raccomandate; in questo caso possono essere generati più documenti per ogni destinatario, a seconda delle evidenze prodotte dai sistemi esterni.

### Ordinamento degli eventi ottenuti dagli streams

Gli streams contengono eventi che sono ordinati in base all'**eventId;** tuttavia alcuni eventi potrebbero avere un timestamp non coerente con l'ordine degli **eventId.** Questa situazione si verifica nei casi in cui il timestamp è stato attribuito da un sistema esterno a Piattaforma Notifiche, come avviene negli eventi di _SEND\_DIGITAL\_PROGRESS_ che ricevono il timestamp dai PEC provider. &#x20;
