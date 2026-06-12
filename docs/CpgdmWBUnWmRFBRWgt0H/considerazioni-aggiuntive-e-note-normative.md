# Considerazioni aggiuntive e note normative

## Rete di Assorbimento del Divario Digitale

Piattaforma Notifiche richiede che l’utente possieda SPID o CIE per potersi autenticare sul portale web di piattaforma o su App IO.&#x20;

Tramite i c.d. Servizi RADD, acronimo di Rete di Assorbimento del Divario Digitale, è consentito ai destinatari, con particolare attenzione a quelli in divario digitale, di accedere alla piattaforma tramite un soggetto terzo, opportunamente abilitato e/o individuato dalla normativa, per ottenere la copia cartacea degli atti inerenti alla notifica al fine di garantire su tutto il territorio nazionale l'accesso universale alla piattaforma e al nuovo servizio di notificazione digitale.

## Call center per destinatario irreperibile

In via transitoria, per i destinatari irreperibili assoluti che non possano accedere a Piattaforma Notifiche perché in Digital Divide e vogliano sapere se hanno notifiche destinate a loro, possono rivolgersi al servizio di call center. Tale servizio restituisce l'informazione sull'esistenza o meno di tali notifiche e, in caso affermativo, previo riconoscimento dell'utente, acquisisce un indirizzo di recapito ove inviare la/le notifica/e e i relativi documenti allegati

## Il regime di anticipazione  della commessa

Il regime dell'anticipazione è disciplinato in base a quanto previsto dall’articolo 6, comma 1, del Decreto Costi (Decreto 30 maggio 2022 emanato dalla Presidenza Del Consiglio Dei Ministri - Dipartimento per La Trasformazione Digitale). All’atto di ciascuna commessa relativa agli atti avviati alla notifica, i mittenti anticipano al gestore (di seguito “PagoPA S.p.A.”) di SEND - Servizio Notifiche Digitali (anche nota come Piattaforma Notifiche Digitali di cui all'art. 26 del decreto-legge 76/2020 s.m.i.):

* il 30% dell'ammontare delle spese relative a ciascuna notifica;
* il 30% dei costi relativi alla notifica degli avvisi in formato cartaceo, calcolato dalla Pubblica Amministrazione mittente sulla base della percentuale degli invii cartacei effettuati nell'anno antecedente a quello della commessa stessa.

Ai sensi dell’articolo 6, comma 2, del Decreto Costi, entro 30 (trenta) giorni dalla verifica di regolarità delle prestazioni relative a ciascuna commessa, i mittenti versano a PagoPA S.p.A. il saldo dell'importo dovuto a consuntivo relativamente alle prestazioni suddette.&#x20;

Tuttavia, in virtù di quanto previsto dall’art. 6, comma 3, del Decreto Costi, sull'ammontare dell'anticipazione e i tempi del saldo e del rimborso dei costi relativi alla notifica degli avvisi, sono fatti salvi i diversi accordi tra PagoPA S.p.A. e la PA mittente, contenuti nella relativa lettera di adesione (cfr. art. 2, commi 6 e ss.).

***

## **Gestione dei ricorsi**

L’ente mittente rimarrà in qualsiasi caso la Pubblica Amministrazione verso la quale è verosimile che vengano indirizzate le istanze dei cittadini in sede di contenzioso. Qualora il contenzioso si riferisca al funzionamento del servizio di notificazione tramite SEND - Servizio Notifiche Digitali (anche nota come Piattaforma Notifiche Digitali di cui all'art. 26 del decreto-legge 76/2020 s.m.i.) e alle attività direttamente effettuate dal gestore della stessa, la Società PagoPA S.p.A. potrà essere coinvolta in sede di contenzioso. A tal proposito si richiama il disposto dell’art. 13, co. 2, del Decreto del Ministro per l’Innovazione Tecnologica e la Transizione Digitale 58/2022, in virtù del quale “Il gestore della piattaforma è responsabile del corretto funzionamento del servizio di notificazione tramite la piattaforma e delle attività direttamente effettuate, fatte salve le responsabilità dell'operatore postale ovvero del gestore del fornitore del servizio universale per le attività di rispettiva competenza”.&#x20;

Sulla base della disposizione citata, ferma restando la legittimazione passiva dell’ente mittente, in sede di eventuale contenzioso, nel caso in cui il vizio rilevato non sia imputabile all’ente ai fini di un eventuale annullamento della notifica, questo potrà avere azioni di regresso nei confronti del gestore della piattaforma, dell'operatore postale ovvero del fornitore del servizio universale, a seconda del soggetto a cui il vizio di notifica risulti imputabile.&#x20;

***

## **L'integrazione a SEND per atti che prevedono un pagamento**

L’integrazione prevista per gli atti che richiedono un pagamento è quella automatica secondo cui i sistemi informatici di SEND - Servizio Notifiche Digitali (anche nota come Piattaforma Notifiche Digitali di cui all'art. 26 del decreto-legge 76/2020 s.m.i.) sono messi in comunicazione con quelli dell’ente. Questa tipologia di integrazione prevede la gestione automatica sia dello stato della notifica, con relativo recupero delle attestazioni comprovanti la regolare esecuzione della notifica, sia dell’attualizzazione dei costi di notifica. Esistono le seguenti sotto-varianti di questa integrazione automatica, che differiscono per la modalità di aggiornamento del costo di notifica e per il numero di servizi informatici presso i sistemi dell’ente o del fornitore che gestisce gli stessi per suo conto:

### Aggiornamento sulla base delle informazioni di cambio stato della notifica

Si tratta del caso in cui il fornitore collegato alla piattaforma ha evidenza delle variazioni di stato di ogni singola notifica, incluse quelle che comportano un cambio del costo della notifica stessa. In caso di ricezione di un cambio di stato della notifica, il fornitore dovrà ricalcolare l’ammontare delle posizioni debitorie, contattando il sistema di gestione delle stesse (ex. Gestionale delle Multe) per provvedere alla loro attualizzazione con i costi di notifica.

Con questa soluzione è, pertanto, solamente il fornitore a doversi rapportare con SEND. È fondamentale che l’ente garantisca sempre l’aggiornamento della posizione debitoria in tempi ristretti e che si assuma il rischio di eventuali pagamenti su posizioni debitorie non aggiornate, in quanto se il destinatario della notifica, effettuasse il pagamento pagoPA nel tempo che intercorre tra l’evento che determina un cambio di costo e l’effettiva attualizzazione della posizione debitoria, il destinatario non pagherebbe l’ammontare corretto.

### Aggiornamento all'atto del pagamento&#x20;

L’attualizzazione della posizione debitoria è prevista all’atto del pagamento pagoPA, annullando di fatto la possibilità che il destinatario paghi un importo non corretto. Per permettere l’attualizzazione, SEND prevede un'API che, dati gli estremi di un avviso pagoPA, restituisce il costo della notifica associata a quel pagamento. \
Per permettere al sistema informatico che gestisce le posizioni debitorie di utilizzare correttamente questa API è obbligatorio che lo stesso sia a conoscenza del fatto che un avviso pagoPA debba essere o meno attualizzato con i dati forniti dalla piattaforma.&#x20;

Il contatto con SEND può avvenire richiedendo l’informazione al sistema di gestione dell’atto, che si fa attraverso la piattaforma stessa. L'attualizzazione deve avvenire in uno SLA di due secondi.&#x20;

***

## **L’integrazione a SEND per atti che non prevedono un pagamento**

Per questa casistica è possibile effettuare l’integrazione Manuale, che non prevede alcuna forma di comunicazione tra i sistemi informatici di SEND - Servizio Notifiche Digitali (anche nota come Piattaforma Notifiche Digitali di cui all'art. 26 del decreto-legge 76/2020 s.m.i.) e quelli dell’ente, escludendo quindi la possibilità di verificare automaticamente lo stato della notifica stessa. Tale verifica richiede pertanto l’accesso manuale alle notifiche e l’eventuale recupero, anch’esso manuale, delle attestazioni comprovanti la regolare esecuzione della notifica.

La scelta di questa modalità d’integrazione comporterebbe la necessità di pianificare una successiva attività di sviluppo per consentire all’Ente, in un secondo momento, di gestire tramite SEND anche i casi d’uso che richiedono un pagamento e per i quali non è possibile predeterminare l’ammontare che deve essere versato dal destinatario.

***

## **Conservazione degli atti oggetto di notificazione tramite SEND**&#x20;

Ai sensi dell’art. 15 del DPCM n. 58/2022, il Gestore conserva gli atti oggetto di notifica su SEND - Servizio Notifiche Digitali (anche nota come Piattaforma Notifiche Digitali di cui all'art. 26 del decreto-legge 76/2020 s.m.i.) per 120 giorni decorrenti dal perfezionamento della notifica per il destinatario. Pertanto, l’obbligo di conservazione degli atti rimane in capo anche al mittente in quanto decorso il suddetto periodo di 120 giorni, il destinatario interessato a recuperare i relativi atti si rivolgerà direttamente al mittente.

***

## **Esito sconosciuto**

Il D.L. n.76/20, all’Art. 26, c. 7 prevede che, qualora non sia possibile il recapito del plico contenente l'avviso di avvenuta ricezione all'indirizzo indicato, per cause diverse dalla temporanea assenza o dal rifiuto del destinatario o delle altre persone alle quali può essere consegnato il plico, l'addetto al recapito postale svolge in loco ogni opportuna indagine per accertare l'indirizzo dell'abitazione, ufficio o sede del destinatario irreperibile.&#x20;

Gli accertamenti svolti e il relativo esito sono verbalizzati e comunicati al gestore  della piattaforma. Ove dagli accertamenti svolti dall'addetto al recapito postale ovvero dalla consultazione del Registro dell'anagrafe della popolazione residente o dal Registro delle imprese sia possibile individuare un indirizzo del destinatario diverso da quello al quale è stato tentato il precedente recapito, il gestore della piattaforma invia a tale diverso indirizzo l'avviso di avvenuta ricezione; in caso contrario, deposita l'avviso di avvenuta ricezione sulla piattaforma e lo rende così disponibile al destinatario.&#x20;

Il destinatario che incorra in decadenze e dimostri di non aver ricevuto la notifica per causa ad esso non imputabile può essere rimesso in termini.\
L'avviso contiene l'indicazione delle modalità con le quali è possibile accedere a SEND - Servizio Notifiche Digitali (anche nota come Piattaforma Notifiche Digitali di cui all'art. 26 del decreto-legge 76/2020 s.m.i.) e l'identificativo univoco della notificazione (IUN) mediante il quale il destinatario può ottenere eventualmente anche la copia cartacea degli atti oggetto di notificazione. &#x20;

***

## **Notifica a destinatari di cui è nota l’irreperibilità**

Le norme di riferimento sono l’art. 26, comma 7, del D.L. 76/2020 e l’art. 6 del DPCM n. 58/2022.

In particolare, la seconda norma impone alla PA mittente, in sede di predisposizione della notifica su SEND - Servizio Notifiche Digitali (anche nota come Piattaforma Notifiche Digitali di cui all'art. 26 del decreto-legge 76/2020 s.m.i.) di fornire obbligatoriamente un indirizzo fisico del destinatario, presso il quale verrà effettuato il primo tentativo di recapito.

Invece la prima norma - applicabile anche alla casistica dell’irreperibilità assoluta conclamata in ANPR - prevede che, se non è possibile recapitare il plico contenente l’AAR all’indirizzo del destinatario indicato dalla PA mittente in sede di predisposizione della notifica su SEND per cause diverse dalla temporanea assenza oppure dal rifiuto del destinatario/delle altre persone alle quali può essere consegnato, l'addetto al recapito postale svolge in loco ogni opportuna indagine per accertare un nuovo indirizzo del destinatario irreperibile. In assenza di un nuovo indirizzo rinvenuto dal recapitista e trascritto nel relativo verbale, il gestore verifica in ANPR (per destinatari persone fisiche) ovvero in registro imprese (per destinatari persone giuridiche) se esiste un indirizzo diverso da quello fornito dalla PA mittente in sede di predisposizione della notifica su SEND.

Precisato quanto fin qui esposto, laddove la PA: 1. debba eseguire una notifica ad un destinatario persona fisica; 2. non sia in possesso di un domicilio fisico eletto dal destinatario presso la stessa PA; e 3. accedendo ad ANPR verifichi che il destinatario risulti già essere accertato come irreperibile assoluto; per poter avviare la notifica tramite SEND (rectius: fornire in via obbligatoria in sede di predisposizione della notifica su SEND un indirizzo fisico dove eseguire il primo tentativo di recapito) la PA mittente, attraverso il certificato di residenza storico, dovrà risalire all’ultimo indirizzo di residenza noto e fornire alla piattaforma tale indirizzo fisico per avviare l’iter di notifica.

***

## **Notificare tramite SEND il preavviso di ipoteca e il fermo amministrativo**

L’art. 26, comma 17, del D.L. n. 76/2020 esclude l’utilizzo di SEND - Servizio Notifiche Digitali (anche nota come Piattaforma Notifiche Digitali di cui all'art. 26 del decreto-legge 76/2020 s.m.i.) per le notifiche relative a:

* gli atti del processo civile, penale, per l’applicazione di misure di prevenzione, amministrativo, tributario e contabile;
* gli atti della procedura di espropriazione forzata disciplinata dal titolo 2, capi 2 e 4, del D.P.R. n. 602/1973, diversi da quelli di cui all’art. 50, commi 2 e 3, e all’art. 77, comma 2-bis.

Ciò premesso, si segnala che il preavviso di ipoteca è disciplinato dall’art. 77, comma 2-bis, del già menzionato D.P.R. n. 602/1973 e che il fermo amministrativo è disciplinato all'art. 86 del D.P.R. n. 602/1973, rubricato al titolo 2, capo 3; <mark style="background-color:blue;">la notifica tramite SEND è, pertanto, ammessa per entrambi.</mark>

***

## **Notifica alla società presso il curatore fallimentare**

Tramite SEND non è possibile notificare un atto destinato ad una persona giuridica (es. società Alfa) presso una persona fisica (es. presso il curatore Mario Rossi).&#x20;

É, tuttavia, possibile notificare direttamente alla persona fisica, specificandone la qualità nell’atto notificato.&#x20;

Pertanto, se una PA mittente ha la necessità di notificare un atto al curatore di una società dovrà indicare come destinatario la persona fisica (es. Mario Rossi quale professionista incaricato) e specificare direttamente nell’atto notificato la sua qualità (es. curatore della società Alfa), non essendo prevista su SEND l’indicazione di tale specifica “qualità” né nella fase di compilazione della notifica, né nelle attestazioni opponibili ai terzi, né nell'AAR.

***

## **Malfunzionamento della piattaforma**&#x20;

Il Decreto Legge n. 76/20 (c.d. Decreto Funzionamento) all’art. 26, comma 13 prevede che laddove il malfunzionamento della piattaforma (attestato dal gestore con un atto opponibile a terzi), renda impossibile l'inoltro telematico, da parte dell'amministrazione, dei documenti informatici destinati alla notificazione ovvero, al destinatario e al delegato, l'accesso, il reperimento, la consultazione e l'acquisizione dei documenti informatici messi a disposizione, comporta:

1. la sospensione del termine di prescrizione dei diritti dell'amministrazione correlati agli atti, provvedimenti, avvisi e comunicazioni oggetto di notificazione, scadente nel periodo di malfunzionamento, sino al settimo giorno successivo alla comunicazione di avvenuto ripristino delle funzionalità della piattaforma;
2. la proroga del termine di decadenza di diritti, poteri o facoltà dell'amministrazione o del destinatario, correlati agli atti, provvedimenti, avvisi e comunicazioni oggetto di notificazione, scadente nel periodo di malfunzionamento, sino al settimo giorno successivo alla comunicazione di  avvenuto ripristino delle funzionalità della piattaforma.
