# Specifiche tecniche

## Componenti tecniche della piattaforma <a href="#_9tvj84ovzht8" id="_9tvj84ovzht8"></a>

Il Nodo definisce modalità standard per la gestione dei flussi finanziari:

* adotta gli standard [XML ISO 20022](https://en.wikipedia.org/wiki/ISO\_20022) per i tracciati dei flussi finanziari correlati alle singole operazioni;
* introduce uno standard adottato a livello nazionale su qualunque canale di pagamento per la struttura dei dati necessari per effettuare il pagamento e della relativa ricevuta, al fine di automatizzare la tratta G2B (_Government to Bank_);
* nell’ambito delle attività legate al commercio elettronico abilita l’interconnessione con i circuiti internazionali di autorizzazione di tali pagamenti;
* assicura l’univocità del pagamento attraverso la definizione di un codice identificativo del pagamento (IUV). Al suddetto identificativo può essere associato uno o più oggetti grafici (codice a barre, glifo, QR-code, etc), al fine di consentire e facilitare l’effettuazione del pagamento attraverso qualunque canale oggi esistente;
* de-materializza tutte le ricevute di pagamento restituite all’EC;
* de-materializza gli avvisi di pagamento.

### Gestore del Workflow Applicativo

È la macro-componente principale che ha lo scopo di coordinare l’esecuzione delle richieste di servizio, richiamando componenti di utilità quali ad esempio, il modulo per la diagnostica, e di interfacciare l’infrastruttura di Rete.

Il _Gestore del Workflow Applicativo_ interfaccia sia le applicazioni degli EC da cui provengono le richieste di servizio e a cui devono essere indirizzate le relative risposte applicative, sia i PSP che abilitano il pagamento sui diversi canali.

Comprende vari agenti software tra cui i principali sono quelli che permettono:

* l’indirizzamento ai singoli servizi e/o sotto-servizi in funzione delle richieste e delle risposte previste dai diversi modelli di funzionamento;
* la memorizzazione e la gestione delle “richieste di servizio” per la tracciatura delle operazioni e la gestione delle eccezioni;
* la gestione degli errori, in base a quanto definito in [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention");
* il mantenimento del sincronismo temporale.

### Gestore della connessione

La connessione alla piattaforma pagoPA in applicazione al vigente modello di interoperabilità avviene nelle forme e nei metodi descritti nella sezione [connettivita.md](../appendici/connettivita.md "mention").

### Sistema di Monitoring

Il sistema di Monitoring svolge attività di controllo complessivo per quanto attiene alle tematiche di monitoraggio, tale componente deve essere considerata come una entità logica indipendente, con un proprio workflow specifico e proprie regole di funzionamento, in grado di verificare malfunzionamenti e condizioni di errore di qualsiasi altro modulo.&#x20;

Nel sistema di monitoring è allocata la funzione di throttling che limita l’utilizzo della piattaforma pagoPA oltre le possibilità di carico da cui possa conseguire il verificarsi di disservizi generali. Tale funzionalità viene innescata automaticamente nel caso in cui un EC tenti di avviare, nell’unità di tempo, un numero di operazioni di pagamento superiori ai fabbisogni da esso stesso dichiarati. Le regole di throttling sono indicate nella sezione [indicatori-di-qualita-per-i-soggetti-aderenti](../appendici/indicatori-di-qualita-per-i-soggetti-aderenti/ "mention").

### Checkout

La componente pagoPA Checkout è una web-app per desktop e mobile che consente di effettuare pagamenti sulla piattaforma pagoPA a partire dai dati contenuti nell'avviso di pagamento, senza alcuna registrazione da parte degli utenti.

La componente Checkout inoltre fornisce all’utilizzatore finale funzioni di supporto, introducendo vari accorgimenti per semplificare la _user experience_, anche nel caso di pagamento con dispositivi mobili. Inoltre l’utilizzatore finale potrebbe memorizzare gli strumenti di pagamento utilizzati, evitando di dover effettuare una nuova ricerca nelle occasioni successive.

## Stazioni e Canali <a href="#_wsod245r31gy" id="_wsod245r31gy"></a>

I soggetti aderenti, EC e PSP, si connettono alla piattaforma rispettivamente per mezzo di _stazioni_ e _canali,_ che rappresentano le piattaforme tecnologiche di partner ed intermediari connessi tramite public-internet.

## Specifiche API

L_'_autenticazione degli stakeholder alla piattaforma pagoPA e la relativa gestione dei certificati avviene nelle forme e nei metodi descritti nella sezione [connettivita.md](../appendici/connettivita.md "mention").
