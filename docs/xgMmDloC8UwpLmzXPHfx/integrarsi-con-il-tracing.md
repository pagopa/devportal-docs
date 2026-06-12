# Integrarsi con il tracing

### Cosa si intende con tracciato?

Un tracciato identifica uno specifico caricamento CSV verso l'API di tracing. Il CSV presenterà le transazioni avvenute in una specifica giornata. L'API di tracing restituisce un `tracingId`, un identificativo univoco per quel caricamento.

In un tracciato possono rientrare un numero discrezionale di record, nel rispetto delle regole indicate nel paragrafo seguente.&#x20;

### Come è fatto il file CSV?

Il file CSV contiene l'elenco delle operazioni eseguite dagli aderenti. Per ogni riga, è necessario indicare, in quest'ordine, i seguenti campi:

<table><thead><tr><th width="200">Campo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>date</code></td><td>la data nella quale sono state eseguite le operazioni, con formato YYYY-MM-DD</td></tr><tr><td><code>purpose_id</code></td><td>l'id della finalità contenuta nella richiesta del fruitore</td></tr><tr><td><code>status</code></td><td>lo status code HTTP con il quale il servizio ha risposto al chiamante</td></tr><tr><td><code>token_id</code></td><td>l'id del token utilizzato per eseguire la richiesta HTTP verso il servizio</td></tr><tr><td><code>requests_count</code></td><td>il numero di richieste che hanno generato questo status code HTTP</td></tr></tbody></table>

#### Un esempio

Analizziamo il seguente file CSV

```
date,purpose_id,status,token_id,requests_count
2024-07-25,0e1e4c98-6f2e-4f55-90e3-45f7d3f1dbf8,500,99382e29-b0cf-412b-a060-72e421b6d167,48
2024-07-25,1cafea11-08a0-4eaf-a3ee-3e9839c8c2a9,200,8f3e3665-5d89-4600-be2f-79aeb18f702d,22
2024-07-25,1cafea11-08a0-4eaf-a3ee-3e9839c8c2a9,404,8f3e3665-5d89-4600-be2f-79aeb18f702d,34
2024-07-25,1cafea11-08a0-4eaf-a3ee-3e9839c8c2a9,500,b1968f90-db88-4929-a032-ef04379b500d,5
```

Il tracciato inviato è relativo al 25 luglio 2024, e fa riferimento a:

* la finalità `0e1e4c98-6f2e-4f55-90e3-45f7d3f1dbf8`, che ha ricevuto 48 richieste che hanno dato esito negativo, con uno status code 500; Per essere autorizzati ad eseguire tali richieste è stato utilizzato il token jwt con id `99382e29-b0cf-412b-a060-72e421b6d167`.
* la finalità `1cafea11-08a0-4eaf-a3ee-3e9839c8c2a9`, che ha ricevuto 22 richieste autorizzate dal token jwt `8f3e3665-5d89-4600-be2f-79aeb18f702d` che hanno avuto esito positivo (200) autorizzate , 34 con esito negativo per 404 (autorizzate, in questo caso, dallo stesso token jwt `8f3e3665-5d89-4600-be2f-79aeb18f702d`) e altre 5 con esito sempre negativo per 500 autorizzate dal token `b1968f90-db88-4929-a032-ef04379b500d`.

### Qual è la meccanica di funzionamento?

A partire dal primo giorno che un aderente carica un tracciato, viene attivato un job che verifica ogni giorno la presenza dei dati relativi a due giorni prima. Nel caso non fossero presenti informazioni, registra la mancanza di dati per una specifica giornata (`state = MISSING`).

Facciamo un esempio:&#x20;

* il 19 gennaio io carico i dati relativi al 18 gennaio. Va tutto a buon fine. Il 20 gennaio gira il job. Il sistema verifica che non ci sono errori.
* Il 20 gennaio NON carico i dati relativi al 19 gennaio. Arriva il 21 gennaio, e gira il job. Il job registra la mancanza dei dati previsti per il 19 gennaio, e inserisce un nuovo `tracingId` con stato `MISSING` in database.

Per caricare i dati mancanti relativi al 19 gennaio, dovrò:

1. contattare l'endpoint `GET /tracings`;
2. recuperare il `tracingId` relativo al tracciato in stato `MISSING`;
3. contattare l'endpoint `POST /tracings/{tracingId}/recover` caricando il CSV con i dati relativi al 19 gennaio.

Il sistema considera il tracciato "mancante" se, per una certa data, non è presente nemmeno un record.

### Come faccio a caricare un nuovo tracciato?

Puoi usare la rotta `POST /tracings/submit`, inserendo nel body della richiesta il parametro `date` (data nella quale sono avvenute le transazioni), e il parametro `csv` (il file CSV di contenente i tracciati).&#x20;

{% hint style="info" %}
Se la data contenuta nel parametro `date` non corrisponde a quella contenuta all'interno dei record nel CSV, il sistema restituirà errore.
{% endhint %}

### Cosa succede se invio una seconda volta record per la stessa data?

Se usi la rotta `POST /tracings/submit`, il sistema verifica per prima cosa che non siano presenti caricamenti per la data indicata nel parametro `date` del body della richiesta.

Se trova un tracciato già presente in database per quella data, il sistema restituisce un errore, e il file non viene processato.&#x20;

Nello specifico, l'errore sarà:

```
{ 
  "code": "TRACING_ALREADY_EXISTS", 
  "detail": "A tracing for the current tenant already exists on this date: YYYY-MM-DD" 
}
```

### Cosa succede se il CSV contiene errori su specifici record per una data mai caricata?

Il file viene processato comunque e il caricamento va a buon fine. Il parametro `errors` contenuto nella risposta sarà valorizzato a `true`.

Sarà possibile recuperare dall'API l'indicazione dei record errati usando la rotta `GET /tracings/{tracingId}/errors`.

### Come faccio a sapere se un file che ho caricato contiene errori?

A valle di una richiesta di caricamento CSV, la risposta, oltre al `tracingId`, conterrà un parametro `errors` valorizzato a `true`. Ad esempio:

```
{
  "tracingId": "89ef5b79-cc18-4772-a318-d61c1d7644d0",
  "errors": true
}
```

indica che nel sistema sono presenti errori per questo ente.

{% hint style="warning" %}
Attenzione: `errors: true` è un'indicazione di carattere generale. Significa che per quest'ente sono presenti errori nello storico dei tracciati, non che il caricamento di questo singolo tracciato contenga degli errori.&#x20;
{% endhint %}

### Mi fai un esempio di un errore che mi viene restituito?

All'interno degli errori restituiti per uno specifico `tracingId`, viene restituito il dettaglio della finalità di riferimento (`purposeId`), il dettaglio dell'errore, e della riga nella quale si è verificato l'errore per il CSV di riferimento. Ad esempio, l'errore&#x20;

```
{
  "purposeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "errorCode": "INVALID_STATUS_CODE",
  "message": "status: Invalid HTTP status code",
  "rowNumber": 4
}
```

indica che alla riga 4, rispetto alla finalità con id `3fa85f64-5717-4562-b3fc-2c963f66afa6`, è stato indicato uno status code non riconosciuto all'interno dello standard delle risposte HTTP previste.

### Come faccio a caricare i dati relativi a una data antecedente?

Eventuali tracciati non caricati relativi a giorni precedenti sono ritenuti `MISSING`, ossia mancanti. È possibile inserire un CSV relativo ad una giornata antecedente usando la rotta `POST /tracings/{tracingId}/recover` , come descritto in una [sezione precedente](integrarsi-con-il-tracing.md#qual-e-la-meccanica-di-funzionamento).

### Ho caricato un CSV che contiene dati mancanti o non corretti. Come faccio ad aggiornarli?

È possibile sostituire i dati relativi a un tracciato che non presenta nessun errore usando la rotta `POST /tracings/{tracingId}/replace` . I record contenuti nel nuovo CSV vanno a sostituire interamente quelli precedentemente caricati.

In sostanza, vengono cancellati tutti i record presenti per quel tracciato, e poi inseriti quelli nuovi appena caricati.

***

### Segnalazione dei tracciati mancanti

Il sistema segnala i tracciati mancanti per le date in cui non è stato ricevuto alcun file CSV. La notifica è automatica e ha frequenza giornaliera.

L'informazione può essere reperita tramite l'endpoint di `GET /tracings`. Array di JSON, ognuno con data, tracingId, e un campo state valorizzato, in questo caso, a `MISSING`.

### Notifica degli errori e tracciati mancanti

Nel momento in cui l’aderente invia un nuovo file CSV, il sistema notifica se ci sono tracciati mancanti o contenenti errori relativi ai giorni precedenti.

In presenza di errori l’aderente ha la possibilità di visualizzare il dettaglio degli errori e la possibilità di inviare un nuovo CSV correttivo per aggiornare le informazioni.

In caso di tracing mancante, l’aderente ha la possibilità di inviare il tracing per la data mancante. Infine, il sistema permette la sostituzione di un tracing già inserito correttamente.
