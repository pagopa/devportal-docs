# Deleghe

{% hint style="warning" %}
Le deleghe sono attualmente disponibili solo in ambiente di collaudo e attestazione.
{% endhint %}

## Cosa sono le deleghe?

È un meccanismo che permette di delegare l'erogazione o la fruizione di un e-service ad un altro aderente. La delega riguarda solo la funzione amministrativa e non include eventuali accordi che l'aderente stringe con partner commerciali per l'erogazione o la fruizione delle API dal punto di vista tecnico.

Negli ambienti di collaudo e produzione, le deleghe sono disponibili solamente per gli enti qualificati come Pubblica Amministrazione sul Catalogo IPA. In ambiente di attestazione, la funzionalità è invece aperta a tutti gli aderenti indistintamente.

{% hint style="warning" %}
La delega prevede che la proprietà degli oggetti e la responsabilità amministrativa nei confronti di terzi rimanga comunque sempre a carico dell'ente delegante.
{% endhint %}

## Come funzionano le deleghe?

1. Dare disponibilità: un aderente A offre la propria disponibilità a ricevere deleghe in erogazione oppure in fruizione;
2. inoltro della delega: un aderente B crea e inoltra una richiesta di delega per l'erogazione o la fruizione per uno specifico e-service all'aderente A;
3. accettazione o rifiuto della delega: l'aderente A accetta la delega (o la rifiuta, fornendone motivazione);
4. gestione del day-by-day: l'aderente A gestisce le attività amministrative relative all'erogazione o alla fruizione di un e-service per conto dell'aderente B; l'aderente B perde la possibilità di gestire le attività amministrative per l'oggetto conferito in delega;
5. revoca della delega: in qualsiasi momento, l'aderente B può revocare la delega, rientrando in possesso degli oggetti conferiti in delega.

## La delega in erogazione, in breve

La delega in erogazione permette ad un aderente di delegare le operazioni amministrative riguardanti l'erogazione di un e-service in piattaforma. La delega non riguarda la componente tecnica dell'erogazione, ossia la costruzione e gestione dell'API alla quale fa capo l'e-service e le eventuali interazioni tecniche con i fruitori. Queste possono essere gestite dal delegante come meglio ritiene.

Nel caso di delega in erogazione, il delegato:

1. crea e gestisce le versioni di e-service;
2. pubblica le versioni di e-service (previa accettazione da parte del delegante);
3. valuta e gestisce le richieste di fruizioni pervenute;
4. valuta e gestisce le finalità pervenute con relative analisi del rischio.

All'interno delle Linee Guida per l'Interoperabilità redatte da AgID, la funzionalità è chiamata "Delegato dell'Erogatore". Maggiori dettagli sono disponibili nella [sezione dedicata](deleghe.md#delega-per-la-fruizione-gestione-del-day-by-day).

## La delega in fruizione, in breve

La delega per la fruizione permette ad un aderente di delegare le operazioni amministrative riguardanti la fruizione di un e-service.

Nel caso di delega per la fruizione:

1. il delegato presenta e gestisce la richiesta di fruizione per l'e-service per il quale ha ricevuto la delega;
2. il delegante e il delegato presentano e gestiscono le finalità con relative analisi del rischio (ognuno autonomamente);
3. il delegante associa client alle finalità che ha creato;
4. il delegato associa client alle finalità che ha creato in delega (solo se l'erogatore lo consente espressamente).

All'interno delle Linee Guida per l'Interoperabilità redatte da AgID, la funzionalità è chiamata "Delegato del Fruitore". Maggiori dettagli sono disponibili nella [sezione dedicata](deleghe.md#delega-per-la-fruizione-gestione-del-day-by-day).

{% hint style="warning" %}
La delega in fruizione è possibile solamente se l'erogatore indica esplicitamente che un proprio e-service può essere fruito per delega. È sempre possibile verificare visitando la scheda dell'e-service.
{% endhint %}

## Dare la disponibilità a divenire delegato

L'aderente che ha interesse ad essere delegato all'erogazione o alla fruizione da parte di altri aderenti, può visitare la sezione _Il tuo ente > Deleghe_, andare alla tab _Disponibilità_, e cambiare le proprie disponibilità.

<figure><img src="../.gitbook/assets/deleghe_disponibilita (1).png" alt=""><figcaption><p>La vista che mostra come modificare l'impostazione per la disponibilità alle deleghe</p></figcaption></figure>

Dare la propria disponibilità non significa che gli altri aderenti possono conferire deleghe autonomamente. Ogni delega deve essere accettata (o eventualmente rifiutata) dall'ente che ha dato la disponibilità.

Di default, la disponibilità ad essere delegato è disabilitata sia per l'erogazione che per la fruizione.

## Creazione e inoltro di una delega

L'aderente che vuole delegare un altro aderente, può andare nella sezione _Il tuo ente > Deleghe_, andare alla tab _Deleghe conferite_, e cliccare su _+1 Crea nuovo_.

Seleziona la tipologia di delega da conferire.

Seleziona quindi l'e-service per il quale conferire la delega, e l'ente da delegare. Solo per quanto riguarda le deleghe per l'erogazione, se l'e-service da delegare non esiste ancora, basterà inserire il nome perché questo sia creato e sia dunque delegabile.

{% hint style="info" %}
Sarà sempre necessario che il delegante nomini il delegato responsabile del trattamento dei dati ai sensi della GDPR. L'operazione di nomina deve essere effettuata al di fuori di PDND Interoperabilità.
{% endhint %}

Si può quindi procedere all'inoltro della richiesta di delega, che il potenziale delegato valuterà.

## Accettazione o rifiuto di una delega

L'aderente che ha ricevuto una richiesta di delega da parte di un altro aderente può andare nella sezione _Il tuo ente > Deleghe_, andare alla tab _Deleghe ricevute_, ed espandere la scheda della delega di interesse.

Può quindi valutarla e accettarla. Oppure, può rifiutarla, fornendone apposita motivazione, che viene resa nota anche al delegante.

## Revoca di una delega

L'aderente che vuole revocare una delega, può andare nella sezione _Il tuo ente > Deleghe_, andare alla tab _Deleghe conferite_, ed espandere la scheda della delega di interesse.

Può quindi cliccare sull'azione _Revoca_, ed ottenere la revoca della delega.

### Conseguenze della revoca di una delega per l'erogazione

#### Per il delegato

Il delegato perde la visibilità e la possibilità di operare sull'e-service che aveva ricevuto in gestione, e sulle richieste di fruizione e le finalità ad esso associate.

#### Per il delegante

Il delegante riacquista la possibilità di gestire l'e-service che aveva dato in gestione, e le richieste di fruizione e finalità ad esso associate. Tutti gli oggetti passano in gestione al delegante nello stesso stato nel quale si trovano (es. se la versione corrente di e-service è in stato "attivo", rimane in stato "attivo" tornando al delegante).

#### Per gli altri aderenti

Non ci sono variazioni. Un'eventuale revoca della delega in erogazione non ha impatti sui fruitori dell'e-service.&#x20;

### Conseguenze della revoca di una delega per la fruizione

#### Per il delegato

La richiesta di fruizione viene archiviate e il delegato ne perde la visibilità. Le finalità che ha creato vengono automaticamente archiviate e dunque non potranno più essere utilizzate per ottenere voucher per quella delega. Eventuali client associati alle finalità rimangono invece attivi, ma vengono disassociati dalle finalità archiviate.

#### Per il delegante

La richiesta di fruizione viene archiviata. Le finalità che ha creato vengono automaticamente archiviate e dunque non potranno più essere utilizzate per ottenere voucher per quella richiesta di fruizione. Eventuali client associati alle finalità rimangono invece attivi, ma vengono disassociati dalle finalità archiviate.

## Delega per l'erogazione: gestione del day-by-day

### Il delegato

#### Pubblicazione di un e-service o di una sua versione

L'aderente che ha ricevuto una delega per l'erogazione di un e-service gestisce interamente il suo ciclo di vita sulla piattaforma, come se ne fosse l'erogatore. L'unica eccezione è questa: la pubblicazione di una nuova versione di e-service avviene solo previa approvazione del delegante.

#### Gestione delle richieste di fruizione

Il delegato gestisce le richieste di fruizione pervenute per l'e-service ricevuto in delega per conto del delegante. Ciò significa che il delegato dovrà approvare a nome del delegante eventuali attributi verificati e avrà facoltà di sospendere e riattivare le richieste di fruizione presenti.

#### Gestione delle finalità

Il delegato gestisce le finalità ricevute per le richieste di fruizione attive. Può quindi sospenderle, riattivarle, accettare o rifiutare i cambi di piano proposti dal fruitore.

### Il delegante

#### Visibilità e operatività

Il delegante conserva la visibilità sia sull'e-service che sulle richieste di fruizione e finalità collegate. Non può agire su nessuna di queste componenti, se non per approvare o rifiutare la pubblicazione di una nuova versione di e-service, o per gestire il portachiavi erogatore.

#### Approvazione alla pubblicazione di un e-service o sua versione

Una volta che un delegato ha perfezionato una bozza di nuova versione di e-service, la inoltra al delegante per approvazione. Il delegante può approvare la versione, che dunque diventa pubblicata e presente sul catalogo degli e-service. Può anche rifiutarla, motivando la scelta. Una volta che una versione di e-service viene rifiutata, torna al delegato in stato di "bozza", con il dettaglio della ragione del rifiuto.

#### Gestione di un portachiavi erogatore

Il delegante conserva l'opportunità esclusiva di operare sul portachiavi erogatore per gli e-service dati in delega. Il delegato non avrà accesso a questa funzionalità.

## Delega per la fruizione: gestione del day-by-day

{% hint style="info" %}
La delega per la fruizione potrebbe non essere disponibile per tutti gli e-service. Per maggiori informazioni, visita la [sezione dedicata](e-service.md#impostazioni-per-le-deleghe).
{% endhint %}

### Il delegato

#### Gestione della richiesta di fruizione

Il delegato gestisce la richiesta di fruizione per l'e-service ricevuto in delega per conto del delegante. Può dichiarare eventuali attributi dichiarati e caricare documentazione per la richiesta di verifica di eventuali attributi verificati a nome del delegante. Ha facoltà di inoltrare, sospendere, riattivare o archiviare la richiesta di fruizione.

#### Gestione delle finalità

Il delegato gestisce le finalità per l'e-service ricevuto in delega per conto del delegante. Può compilare le analisi del rischio, selezionare il piano chiamate API/giorno. Può inoltrare, sospendere, riattivare o archiviare le finalità.

#### Gestione dei client e accesso al dato

Il delegato può associare client alle finalità che ha creato in delega solamente se l'erogatore ha dato espressamente il proprio consenso, autorizzando l'accesso ai dati per l'e-service. Per controprova, è possibile andare sulla scheda dell'e-service, e verificare se la voce "Accesso ai dati per l'e-service" lo consente o meno.

### Il delegante

#### Visibilità e operatività

Il delegante conserva la visibilità sia sulla richiesta di fruizione e che sulle finalità create dal delegato. Non può agire su nessuna di queste componenti, se non per associare i propri client alle finalità create dal delegato nel perimetro della delega conferita.

#### Gestione delle finalità

Il delegante può creare autonomamente le proprie finalità per la richiesta di fruizione gestita dal delegato. Le finalità create dal delegante non saranno visibili dal delegato, e vengono regolarmente gestite dal delegante, che può attivarle, sospenderle e archiviarle a propria discrezione.

#### Gestione dei client e accesso al dato

Il delegante può sempre associare i propri client sia alle finalità create dal delegato che alle proprie.



