# Processo di notificazione

Il processo di notificazione inizia con la PA mittente che richiede a Piattaforma Notifiche (PN) di prendere in carico l’effettuazione di una notifica.

Questa operazione avviene in tre fasi:&#x20;

* caricamento dei documenti
* creazione della notifica
* verifica dei dati forniti

Nella prima **fase di caricamento dei documenti** la PA fornisce a PN gli atti da notificare unitamente agli avvisi pagoPA, se previsto il pagamento da parte del destinatario.

Nella **fase di** **creazione della notifica** la PA genera la richiesta di creazione, fornendo per ogni destinatario i dati necessari.

PN ricevute queste informazioni, verifica che siano sintatticamente corrette e che non ci siano stati utilizzati combinazioni di numero di protocollo (paProtocolNumber)/identificativo univoco generato dal sistema di integrazione del mittente (IdempotenceToken) oppure Codice Avviso/Codice Fiscale dell’Ente creditore già utilizzati in altre notifiche non annullate. Nel caso in cui le verifiche abbiano successo restituisce al mittente un token (notificationRequestId) che servirà, in alternativa all'utilizzo degli stream, alla PA stessa per ricevere l’esito delle successive attività di verifica poste in atto da PN.

La piattaforma permette di inserire molteplici avvisi di pagamento (es. per gestire le rate della TARI), dando la possibilità al destinatario di selezionare quali avvisi pagare.\
<mark style="background-color:blue;">Per il caso d'uso relativo alle sanzioni al codice della strada saranno inserite, per ciascun destinatario, le due coppie di Codice Avviso e Codice Fiscale dell’Ente creditore contenti l'avviso che deve essere pagato entro 5 giorni dalla data di perfezionamento della notifica e quello che contiene l'avviso che deve esser pagato passati i 5 giorni e comunque entro i 60 giorni dal perfezionamento. Il destinatario vedrà entrambi i pagamenti disponibili e sceglierà quale pagare.</mark>

Nell'ultima **fase di verifica**, PN verifica che lo SHA-256 fornito dalla PA coincida con quello calcolato da PN a partire dai documenti allegati. PN effettua inoltre un'attività di verifica e normalizzazione dell'indirizzo fisico fornito per ciascun destinatario allo scopo di garantire la possibilità di notificare al destinatario in forma cartacea. L'indirizzo originale fornito dalla PA mittente verrà riportato nelle attestazioni opponibili ai terzi mentre l'indirizzo normalizzato verrà utilizzato per l'avvio in postalizzazione. Nel caso in cui l'indirizzo fisico fornito dalla PA mittente non sia postalizzabile, la notifica viene rifiutata.&#x20;

Se le verifiche hanno successo, PN genera  il codice che identifica la notifica (**IUN**) che viene restituito alla PA mittente unitamente al token generato all’atto di creazione della notifica.&#x20;

La generazione dello IUN **conclude il processo di deposito/creazione della notifica** su PN e perfeziona la notifica per la PA mittente. Nel caso in cui, invece, le verifiche non abbiano successo, PN informa la PA della presenza di errori nella richiesta inoltrata inviando un codice di errore unitamente al token   generato all’atto di creazione della notifica.

I documenti allegati devono essere in formato PDF e conformi a quanto richiesto dagli articoli 20 e 21 del CAD, perciò firmati digitalmente dalla PA mittente. I documenti trasmessi dalla PA mittente vengono conservati per 120 giorni a partire dalla data di perfezionamento della notifica per il destinatario.&#x20;

PN genera un’attestazione opponibile ai terzi contenenti le informazioni relative alla data e all’ora di ricezione della richiesta di creazione della notifica da parte del mittente ed agli indirizzi forniti dal mittente per raggiungere il destinatario. La messa a disposizione di questa attestazione conferma **l’inizio delle operazioni di notificazione.**

<mark style="background-color:blue;">Nel caso in cui la PA mittente non sia in grado di determinare se un Codice Fiscale appartenga ad una persona fisica o ad una persona giuridica, si suggerisce di assumere che il Codice Fiscale appartenga alla persona fisica</mark>.

<figure><img src="../.gitbook/assets/image (130).png" alt=""><figcaption></figcaption></figure>

Una volta che una notifica è stata correttamente creata dalla PA mittente, PN genera un documento denominato **Avviso di Avvenuta Ricezione** (AAR) che contiene le informazioni relative all’esistenza della notifica, il suo IUN e le indicazioni sulle modalità che il destinatario può utilizzare per accedere agli atti notificati e depositati in piattaforma.&#x20;

PN a questo punto verifica se è possibile effettuare la **notificazione attraverso canali digitali**. Questo è possibile se:

* &#x20;la PA mittente ha fornito un domicilio digitale (speciale)
* esiste negli archivi di PN un domicilio digitale (di piattaforma) collegato al destinatario&#x20;
* è possibile reperire un domicilio digitale (generale) nei registri pubblici (IniPEC, IPA, INAD).&#x20;

Nel caso in cui i registri pubblici restituiscano più di un domicilio digitale riconducibile al destinatario PN utilizzerà solamente il primo indirizzo restituito.

Se non è possibile determinare alcun domicilio digitale, la notificazione avverrà attraverso il canale analogico.

In entrambi i casi, se il destinatario ha configurato su PN un indirizzo e-mail o l’abilitazione su app IO per gli avvisi di cortesia di PN, o un numero di cellulare al quale inviare SMS, verrà generato un avviso chiamato **Avviso di cortesia** non a valore legale, che permette al destinatario di accedere e prendere visione della notifica e dei relativi allegati anche prima di aver ricevuto la notifica attraverso i canali di comunicazione a valore legale (domicilio digitale o 890/AR).

L' avviso di cortesia contiene il link per la consultazione della notifica e dei documenti allegati sulla piattaforma, mediante lo IUN.  L’Avviso di cortesia viene inviato su tutti i recapiti disponibili.

Nel caso sia stato possibile inviare l’Avviso di cortesia ad un cittadino da raggiungere con notificazione analogica, la notificazione viene ritardata di 5 giorni (120 ore) per permettere eventualmente al cittadino di accedere alla notifica su PN e perfezionare di conseguenza la stessa. In questo caso la spedizione dell’AAR cartaceo non avviene ed il cittadino ne risparmia i costi.

Il destinatario può accedere agli atti notificati ed alle relative attestazioni opponibili a terzi con le seguenti modalità:

* accedendo al portale di PN, utilizzando la propria identità digitale e selezionando la notifica in base al relativo IUN e quindi accedendo agli atti oggetto di notifica scaricabili sul portale. Il destinatario ha inoltre la possibilità di accedere alle attestazioni opponibili ai terzi attraverso i singoli link presenti nella sezione "Stato della notifica".
* attraverso l’app IO, nel caso sia stata abilitata la ricezione degli avvisi di cortesia di PN. Selezionando il messaggio si accede al dettaglio della singola notifica che permette di accedere agli atti notificati e, nella sezione "Stato della notifica" alle relative attestazioni opponibili ai terzi;
* utilizzando il link di accesso rapido presente nell’AAR, al dettaglio della singola notifica che permette di accedere agli atti notificati e, nella sezione "Stato della notifica", alle relative attestazioni opponibili ai terzi;
* per il tramite di una persona a ciò delegata dal destinatario, previa ogni opportuna attività di delega tramite la specifica funzione sul portale di PN;
* con le modalità descritte per l’accesso a PN tramite i servizi RADD (Rete Assorbimento Digital Divide), messi a disposizione per i destinatari in digital divide.

(\*) NB Si invita la PA (nelle procedure interne precedenti al caricamento degli atti sulla Piattaforma) al rispetto della normativa vigente in materia di protocollazione, compresa l'indicazione della segnatura di protocollo.

## Notificazione Digitale

Il percorso di notificazione digitale prevede le seguenti fasi:

1. **Presa in carico**: la PA mittente richiede di effettuare la notificazione
2. **Perfezionamento per mittente**: la richiesta è accettata da PN
3. **Invio dell’AAR a mezzo PEC/SERCQ** (con un elemento di timeline per ogni cambiamento di stato fornito a PN dal provider PEC)
4. **Ricezione esito PEC/SERCQ** (con un elemento di timeline per ogni cambiamento di stato fornito a PN dal provider PEC)
5. **Messa a disposizione dell’AMR**, nel caso di mancata consegna per tutti i domicili digitali disponibili
6. **Invio dell’AAR a mezzo raccomandata semplice** (con un elemento di timeline per ogni cambiamento di stato fornito a PN dall’operatore postale)
7. **Perfezionamento per destinatario:** indica il momento in cui la notifica si è perfezionata per il destinatario, in qualsiasi circostanza questo avvenga
8. **Primo accesso all’atto** notificato da parte del destinatario
9. **Inizio e Fine di malfunzionamenti della piattaforma** che rendano impossibile l'inoltro telematico da parte dell'amministrazione dei documenti informatici destinati alla  notificazione al destinatario e delegato, l'accesso, il reperimento, la consultazione e l'acquisizione dei documenti informatici messi a disposizione

NOTA: i punti 3. e 4. si ripetono per tutti i domicili digitali noti come descritto nel [Processo di notificazione](processo-di-notificazione.md). Per i punti 3. 4. 6., PN conserva la documentazione postale (digitale/analogica) che comprova questi eventi. Questa documentazione viene acceduta e scaricata con le stesse modalità utilizzate per le attestazioni opponibili ai terzi generate da PN (vedi [Attestazioni opponibili ai terzi](../how-to/pa/stato-della-notifica-e-atti-legali-opponibili/attestazione-opponibili-ai-terzi.md))

***

In presenza di almeno un domicilio digitale, PN notifica l’AAR attraverso PEC o SERCQ. Se fosse presente più di un indirizzo digitale, sarà seguito il seguente ordine di priorità:

1. **Domicilio digitale di piattaforma**: configurato dal destinatario nella sezione "Recapiti" della piattaforma
2. **Domicilio digitale speciale:** indicato dall’ente mittente nella creazione della notifica; si invita l’ente ad informare debitamente i destinatari che abbiano eletto un domicilio speciale presso l’ente stesso relativamente alle modalità e tempistiche di aggiornamento, modifica e/o cancellazione del già menzionato domicilio, nonché degli effetti conseguenti a tali modifiche e/o cancellazioni.
3. **Domicilio digitale generale** fornito da IniPEC, IPA o INAD

PN interromperà il tentativo di invio al primo successo. Nel caso di fallimento nel primo tentativo di invio digitale (es. casella postale satura o indisponibilità momentanea a causa di disservizio del fornitore della PEC o SERCQ), la notifica in via digitale sarà ritentata dopo almeno 7 giorni dal primo fallimento. La distanza tra il primo ed il secondo tentativo può variare da 7 a 9 giorni in base al carico del sistema.

PN deve effettuare l’invio a tutti i domicili digitali individuati in fase di avvio del workflow, compresi eventuali domicili per i quali è stato individuato un cambiamento tra il primo e il secondo tentativo, questo comporta la necessità di effettuare un tentativo al nuovo indirizzo a prescindere da quale sia stato l'esito del tentativo sull'indirizzo precedente.&#x20;

Nel caso in cui il processo di notificazione attraverso PEC o SERCQ fallisca anche al secondo tentativo, la piattaforma genera e mette a disposizione un Avviso di Mancato Recapito (AMR) collegato allo IUN visibile al destinatario nel caso egli acceda al portale di PN e verifichi lo Stato della notifica.&#x20;

Per informare comunque il destinatario dell'esistenza della notifica, **PN invia l’AAR con raccomandata semplice al domicilio fisico del destinatario** (nazionale o internazionale a seconda dell'indirizzo fornito dalla PA mittente).

La notifica si perfeziona per il destinatario dopo 7 giorni dalla consegna dell’AAR attraverso PEC o SERCQ oppure 15 giorni dopo la generazione dell’AMR. In particolare, se l'avviso di avvenuta ricezione AAR è consegnato/l’eventuale AMR è generato al destinatario dopo le ore 21.00, il numero di giorni indicati in precedenza per il perfezionamento viene incrementato di 1 (art. 26 D.L. 76/2020).

<figure><img src="../.gitbook/assets/image (91).png" alt=""><figcaption></figcaption></figure>

## Notificazione Analogica

Il percorso di notificazione analogica prevede le seguenti fasi:

1. **Presa in carico:** la PA mittente richiede di effettuare la notificazione
2. **Perfezionamento per mittente:** la richiesta è accettata da PN
3. **Invio dell’AAR a mezzo 890 o Raccomandata AR nazionale/internazionale** (con un elemento di timeline per ogni cambiamento di stato fornito a PN dall’operatore postale, incluso l’esito finale)
4. Ricezione di un nuovo indirizzo fisico per il destinatario, nel caso di mancato recapito per l'indirizzo fisico fornito dalla PA mittente
5. Invio dell’AAR a mezzo 890 o Raccomandata AR nazionale/internazionale sul nuovo indirizzo fisico (con un elemento di timeline per ogni cambiamento di stato fornito a PN dall’operatore postale, incluso l’esito finale)&#x20;
6. Irreperibilità assoluta del destinatario: questo indica che il destinatario non è raggiungibile per nessun indirizzo fisico noto
7. Perfezionamento per destinatario: indica il momento in cui la notifica si è perfezionata per il destinatario, in qualsiasi circostanza questo avvenga
8. Primo accesso all’atto notificato da parte del destinatario
9. Inizio e Fine di eventuali malfunzionamenti della piattaforma che rendano impossibile l'inoltro telematico, da parte dell'amministrazione, dei documenti  informatici  destinati  alla  notificazione ovvero, al destinatario e delegato, l'accesso, il reperimento, la  consultazione e l'acquisizione dei documenti informatici messi a disposizione

NOTA: per i punti 3. 5. 6. PN conserva la documentazione postale che comprova questi eventi. Si può accedere e scaricare questa documentazione con le stesse modalità utilizzate per le [Attestazioni opponibili ai terzi](../how-to/pa/stato-della-notifica-e-atti-legali-opponibili/attestazione-opponibili-ai-terzi.md) generate da PN&#x20;

***

In assenza di domicilio digitale e se il destinatario non ha effettuato l'accesso alla notifica entro 5 giorni (120 ore) dall'invio dell'Avviso di Cortesia, l’AAR è direttamente inoltrato all’**indirizzo fisico** del destinatario fornito dalla PA mittente, **attraverso raccomandata** ai sensi della L.890/1982 o Raccomandata A/R. È onere del mittente specificare attraverso quale delle due modalità d'invio procedere.&#x20;

Nel caso l'indirizzo fornito faccia riferimento a uno Stato estero PN invierà una Raccomandata Internazionale A/R.&#x20;

Se il primo tentativo di invio cartaceo sull'indirizzo fisico fornito dalla PA mittente fallisce per cause diverse dalla temporanea assenza o dal rifiuto del destinatario o delle altre persone alle quali può essere consegnato il plico, l'operatore postale (incaricato da PN) effettua un'indagine in loco per verificare l'esistenza di un secondo indirizzo e, se viene recuperato un nuovo indirizzo PN, procede con un ulteriore invio.&#x20;

Se invece non è stato possibile recuperare un nuovo indirizzo, PN ricerca:

* un indirizzo fisico in ANPR se il destinatario è una persona fisica
* nel Registro delle Imprese se il destinatario è una persona giuridica presente

Nel caso ANPR/Registro delle imprese restituiscano un indirizzo diverso da quello già usato per il primo invio PN procede con un ulteriore invio.

L'indirizzo fornito dall'operatore postale o quello risultante dalle banche dati pubbliche verrà sottoposto a normalizzazione allo scopo di garantire il corretto invio in postalizzazione della successiva comunicazione. Nel caso la normalizzazione dovesse fallire verrebbe utilizzato per la postalizzazione l'indirizzo originale. Nel caso l'indirizzo non sia postalizzabile (in quanto, ad esempio, errato e/o insufficiente e/o inesistente) la PA mittente riceverà un evento che la informa di questo accadimento ed il processo di notificazione terminerà.

Nel caso che l'indirizzo fornito dalla PA mittente faccia riferimento ad uno Stato estero, non è prevista la ricerca di un nuovo indirizzo da parte dell’operatore postale.

<figure><img src="../.gitbook/assets/image (76).png" alt=""><figcaption></figcaption></figure>

PN riceve dall’operatore postale gli aggiornamenti sullo stato della consegna e la copia digitale conforme di ogni documento generato durante la notificazione (es. ricevuta firmata dal destinatario). Tali documenti sono memorizzati e conservati per 10 anni su PN in modo immutabile e collegati allo IUN in modo tale da poter essere reperiti accedendo al portale.

La notifica si perfeziona per il destinatario dopo 10 giorni dalla consegna dell’AAR oppure 10 giorni dall'accertamento dell'irreperibilità visibile nello Stato della notifica (evento Destinatario Irreperibile).

Nel caso in cui venga reperito per il secondo invio un indirizzo fisico estero, PN spedirà una Raccomandata Internazionale AR a prescindere da quanto precedentemente indicato dalla PA Mittente.&#x20;

Nel caso in cui l’indirizzo di destinazione appartenga ad un paese non raggiunto dai servizi di postalizzazione, l'iter notificatorio non potrà proseguire attraverso la Piattaforma.

### Secondo tentativo di invio cartaceo

Nei casi in cui sia necessario un secondo tentativo di invio analogico, la piattaforma, prima di procedere, esegue la ricerca di un nuovo indirizzo, come sopra descritto, e un controllo sulla validità dell’indirizzo ai fini della postalizzabilità.

In sintesi, nel caso di secondo tentativo di invio analogico, possono determinarsi quattro scenari alternativi:

1. **Indirizzo differente da quello del primo tentativo e validato con successo:** si procede con il secondo tentativo.
2. **Indirizzo differente da quello del primo tentativo ma che non ha superato il processo** (quindi non postalizzabile): non si procede al secondo tentativo e si determina l'irreperibilità del destinatario.
3. **Indirizzo coincidente con quello del primo tentativo:** non si procede al secondo tentativo e si determina l'irreperibilità del destinatario.
4. **Indirizzo non trovato:** non si procede al secondo tentativo e si determina l'irreperibilità del destinatario.

Per i casi 2, 3 e 4 viene inserito in timeline un elemento di aggiornamento sul mancato invio che informa sulla causa che non permette di effettuare il secondo tentativo. Tale aggiornamento è disponibile nel dettaglio della notifica, sia sul portale Mittente, sia sul portale Destinatario.

### Resa al mittente per destinatario deceduto

Durante il processo di notificazione analogica, uno tra gli eventi possibili di rendicontazione è la mancata consegna per destinatario dichiarato deceduto dall'addetto al recapito. In questo caso SEND conclude il workflow della notifica con un evento di resa al mittente e un nuovo stato della notifica di “reso al mittente”.

Si specifica che SEND si limita a riportare l'informazione fornita dall'addetto al recapito e risultante sull'esito della notifica, senza effettuare ulteriori verifiche in merito (es. verifica tramite accesso a ANPR).

Per permettere agli enti mittenti di apprendere della mancata consegna della notifica per decesso del destinatario verrà introdotto un nuovo elemento di timeline e un nuovo stato della notifica “resa al mittente".

In caso di notifica multi-destinatario, il workflow della notifica si concluderà con lo stato di "reso al mittente" solo nel caso in cui tutti i destinatari dovessero risultare deceduti.

{% hint style="info" %}
**ATTENZIONE**: Per recepire anche lo stato della timeline "reso al mittente" in caso di notifiche effettuate verso destinatari dichiarati deceduti dall'addetto al recapito, è necessario effettuare un aggiornamento tecnologico delle API SEND, come da specifiche rese disponibili su DevPortal. \
In attesa che venga effettuato da parte dell'Ente Mittente, il già menzionato adeguamento alle nuove API sarà possibile allo stesso visualizzare lo stato della notifica accedendo all’Area Riservata di SEND.
{% endhint %}

