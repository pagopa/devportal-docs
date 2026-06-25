# Template finalità

## Cosa sono e come funzionano

Un problema comune che si affronta su PDND è la compilazione del questionario di [analisi del rischio](../finalita/analisi-del-rischio.md). Per ogni finalità, il questionario deve essere compilato da capo. Spesso servono molte interazioni all'interno dell'aderente o con il proprio fornitore. **I template per la compilazione agevolata della finalità** offrono una soluzione, in quanto:

* **semplificano** la compilazione delle finalità, inclusi gli aspetti di trattamento dei dati;
* **riducono l'onere** amministrativo per gli aderenti;
* **accelerano** le fasi di istruttoria per gli erogatori, garantendo maggiore uniformità e controllo nelle procedure di accesso ai dati.

Ogni aderente può predisporre i propri template e pubblicarli su un catalogo apposito, disponibile sotto _Fruizione > Template finalità_. Da lì, è sempre possibile creare la propria finalità precompilata e utilizzarla per i servizi dei quali si intende fruire.

## Chi compila i template finalità?

### Casi d'uso comuni per gli erogatori

Gli erogatori possono verificare che i fruitori abbiano compilato l'analisi del rischio nel rispetto dei casi d'uso previsti. Questo perché ogni finalità che è derivata da un template è facilmente identificabile.

Puoi identificarla:

* sull'interfaccia del front office: nella scheda della finalità è presente il link alla scheda del template finalità di riferimento;
* sulle API di PDND Interoperabilità: tra i campi della finalità, c'è indicato il `templateId` , l'id del template dal quale proviene la finalità stessa.

Come erogatore, posso creare un template finalità e associarlo ad un mio e-service. Quando un fruitore crea una nuova finalità, trova il template disponibile, pronto da utilizzare.&#x20;

### Casi d'uso comuni per i fruitori

Oltre a utilizzare quelli messi a disposizione dagli erogatori (approccio "dall'alto"), un aderente può proporre un template per un e-service che non eroga. Lo fa sulla base della propria esperienza (approccio "dal basso"). I template che mette a disposizione possono essere riutilizzati dall'aderente stesso o da altri.

È disponibile [un tutorial](../../tutorial/tutorial-per-il-fruitore/come-generare-una-finalita-da-un-template.md) per mostrare come pubblicare una finalità a partire da un template.

## Di chi è la responsabilità?

Le Linee Guida AgID definiscono chiaramente che la responsabilità è sempre dell'ente che presenta la finalità. In questo caso, chi pubblica la finalità e non il creatore del template.

## Compilazione diretta o assegnazione

Per ogni domanda all'interno dell'analisi del rischio, il creatore del template finalità può:

1. precompilare la risposta e renderla non modificabile dall'utilizzatore;
2. precompilare la risposta fornendo una o più opzioni tra le quali l'utilizzatore può scegliere (es. "scegli tra opzione A, B o C");
3. assegnare la compilazione all'utilizzatore.

In tutti e tre i casi, il creatore del template può inserire eventuali suggerimenti e/o documentazione a corredo per ogni risposta, per supportare l'utilizzatore nella compilazione.

Questo meccanismo offre un certo grado di flessibilità. Permette di rendere il template riutilizzabile anche per casi simili ma non esattamente uguali. Funziona anche nei casi in cui alcune risposte al questionario dipendono effettivamente da caratteristiche specifiche che cambiano da un aderente a un altro.

## Per saperne di più

Oltre alla documentazione presente in queste pagine, è disponibile [un webinar](https://developer.pagopa.it/webinars/DevTalks-pdnd-finalita-agevolata) sull'argomento (registrazione obbligatoria e gratuita).

***

Pagina successiva [→ Operazioni e ciclo di vita](operazioni-e-ciclo-di-vita.md)
