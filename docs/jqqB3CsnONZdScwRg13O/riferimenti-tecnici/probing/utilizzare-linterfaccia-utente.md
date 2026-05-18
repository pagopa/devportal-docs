# Utilizzare l'interfaccia utente

### Lettura degli esiti delle verifiche

Il Probing assegna a ciascuna versione di e-service uno _stato di disponibilità_ basato sull’esito dell'ultima rilevazione effettuata. Gli stati possibili sono:

* **Disponibile**: la versione di e-service ha risposto correttamente all’ultima verifica effettuata. In questa condizione le API risultano raggiungibili.
* **Non risponde**: l’ultima rilevazione disponibile ha dato esito negativo. Questa condizione può verificarsi nei seguenti casi:
  * la risposta all'ultima rilevazione ha restituito un errore 4xx o 5xx;
  * non è stata ricevuta una risposta utile entro il tempo massimo previsto, ossia 5 secondi (timeout);
  * lo stato della versione di e-service risulta inattivo.
* **Verifica non riuscita**: non è possibile determinare lo stato della versione di e-service sulla base delle informazioni attualmente disponibili. Questa condizione può verificarsi nei seguenti casi:
  * la verifica da parte della sonda è disattivata per l’e-service;
  * le informazioni disponibili non sono sufficienti o non sono coerenti per stabilire lo stato del servizio;
  * sono trascorsi più di 15 minuti dall'ultima rilevazione utile, pertanto non è possibile determinare lo stato attuale del servizio.

### Lettura dei grafici

Sono disponibili tre grafici. Ognuno di essi evidenzia un aspetto diverso.

<figure><img src="../../.gitbook/assets/unknown (3).png" alt=""><figcaption></figcaption></figure>

#### Tempi di risposta

È un grafico a linee che serve a dare evidenza dei tempi di risposta registrati dalla sonda. Viene rappresentato un data point ogni 5 minuti. Per calcolare il data point nell'intervallo considerato, si applica la seguente logica:

* se c'è una sola rilevazione, si mostra così com'è (es. 750ms);
* se c'è più di una rilevazione e sono in prevalenza attendibili, si calcola la media aritmetica (es. una rilevazione a 1000ms e una a 500ms; il data point sarà rappresentato a 750ms);
* se le rilevazioni sono in maggioranza inattendibili, si annulla (es. due rilevazioni non riuscite, una rilevazione a 1000ms; il data point viene annullato).

Le aree nelle quali la linea è spezzata indicano che non è stato possibile definire un data point per quell'intervallo.

Il tempo di risposta viene rilevato indipendentemente dallo status code restituito dall'API dell'erogatore, anche con 4xx o 5xx.

#### Operatività

È un grafico a barre percentuale. Mostra la percentuale calcolata su tutte le rilevazioni disponibili nelle ultime 24 ore. I valori delle tre barre rappresentano:

* e-service online — blu scuro: la sonda è attiva; l'e-service è attivo; la rilevazione ha riportato un 2xx
* e-service offline — rosso: la sonda è attiva; l'e-service non è attivo _oppure_ la rilevazione ha riportato un NON-2xx
* monitoraggio sospeso — grigio: tutti gli altri casi; si intende monitoraggio sospeso se l'ultima rilevazione è antecedente a 15 minuti fa.

#### Anomalie registrate

È un grafico a una singola dimensione, temporale. È utile per verificare se in un particolare momento le API dell'erogatore non erano disponibili.

Anche in questo caso, come nel grafico "Tempi di risposta", un data point viene calcolato con un'intervallo di 5 minuti. Se all'interno dei 5 minuti c'è almeno una rilevazione che si configura come "e-service offline" — rosso, — o "monitoraggio sospeso" — grigio, — viene riportato nel grafico.
