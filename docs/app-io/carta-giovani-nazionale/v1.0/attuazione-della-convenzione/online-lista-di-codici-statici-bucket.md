# Online - Lista di codici statici (bucket)

Nel caso in cui l’Operatore abbia deciso di aderire al Programma attraverso il proprio sito web e/o e-commerce e tramite il _Modello lista di codici_, deve comunicare la lista (bucket) dei codici statici contestualmente alla definizione della singola agevolazione, caricando sul Portale un file in formato `.csv` contenente un numero minimo di 10.000 (diecimila) di codici. Per la corretta formattazione si veda il file di esempio allegato a questa pagina.

{% hint style="info" %}
**I codici che compongono la lista sono alfanumerici, devono contenere almeno una lettera e almeno un numero e non devono superare i 20 caratteri.**

**Importante:** agevolazioni diverse devono essere associate a liste di codici statici diversi per una maggiore sicurezza. I codici statici presenti devono essere accettati dall’Operatore sui propri sistemi fino al loro utilizzo per tutta la durata dell’agevolazione erogata ai Beneficiari.
{% endhint %}

Sono previsti dei tempi tecnici successivi al caricamento del file contenente la lista di codici per la procedura di importazione e scrittura dei codici stessi sui nostri sistemi. Nel caso questa procedura sia in corso, viene visualizzata una _progress bar_ all’interno di un apposito modulo informativo nella schermata di dettaglio dell’agevolazione. Le agevolazioni potranno essere pubblicate solo quando la procedura è completata.

L’esperienza per i beneficiari in App IO è  identica a quella del codice statico, ma per questa modalità è previsto un sistema di monitoraggio relativo al consumo dei codici sconto dalla lista, in modo tale da dare all’Operatore la possibilità di caricarne altri qualora la lista di codici sia vicino all’ esaurimento.

Al raggiungimento delle soglie del 50%, 25%, 10% di codici residui, l’Operatore viene avvisato tramite e-mail e con dei messaggi all’interno del Portale, e invitato a caricare una nuova lista di codici per consentire la fruizione delle agevolazioni collegate.&#x20;

{% hint style="info" %}
Si specifica che la "nuova" lista di codici verrà visualizzata solo dopo che saranno stati utilizzati tutti i codici precedentemente caricati.
{% endhint %}

Qualora vengano esauriti tutti i codici relativi a una certa agevolazione, l'Operatore riceverà un nuovo messaggio via e-mail. L'agevolazione rimarrà visibile per un'ulteriore settimana, con lo stato "I codici sconto per questa agevolazione saranno presto disponibili". Se al termine dei 7 giorni l'Operatore non provvede a caricare i nuovi codici, l'agevolazione passerà in stato “bozza”, quindi non più visibile in App, e se questo accade per tutte le agevolazioni, l’Operatore stesso non sarà più mostrato tra i soggetti aderenti in App fino a nuovo caricamento della lista di codici.

L’identificazione del Beneficiario da parte dell’Operatore avviene secondo questi passaggi:&#x20;

* Il Beneficiario accede alla sua CGN nell’App IO e seleziona l’Operatore di suo interesse nella lista esercenti visualizzata;&#x20;
* il Beneficiario seleziona l’agevolazione di suo interesse e, premendo l’icona dell’occhio, visualizza uno dei codici statici che verrà scelto dalla lista di codici caricati dall’Operatore relativamente a quella agevolazione, con possibilità di copiarlo direttamente dall’App per incollarlo successivamente nei sistemi dell’Operatore;&#x20;
* in fase di finalizzazione dell’acquisto sul portale dell’Operatore, il Beneficiario incolla il codice nell’apposito campo e, se non ci sono stati errori nella digitazione del codice, l’agevolazione verrà applicata al carrello.

L’esperienza utente è identica a quella generata dal modello “codice sconto statico”.

{% hint style="info" %}
**Importante:** Al momento della visualizzazione del codice sconto in App IO, lo stesso verrà considerato consumato a prescindere dal suo effettivo utilizzo sull’e-commerce dell’Operatore e pertanto non sarà mai più reso visibile ai Beneficiari (incluso allo stesso Beneficiario che dovesse visualizzare il codice per quell’agevolazione in un secondo momento).

Se l’Operatore implementa un processo di invalidazione dei codici effettivamente utilizzati sul proprio sito, raccomandiamo la massima attenzione in fase di caricamento dei codici: la lista non deve contenere codici duplicati o alcun codice già presente nelle liste precedenti in quanto questi potrebbero risultare invalidati e quindi non permettere l’accesso all’agevolazione, creando un disservizio ai Beneficiari.
{% endhint %}

{% file src="../.gitbook/assets/test-codes.csv" %}

