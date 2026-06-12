# 4️⃣ Modalità lista di codici statici

Nel caso in cui l’Operatore abbia deciso di aderire al Programma attraverso il proprio sito web e/o e-commerce e tramite il _Modello lista di codici_, deve comunicare la lista (bucket) dei codici statici contestualmente alla definizione della singola opportunità, caricando sul Portale un file in formato `.csv` contenente un numero minimo di 10.000 (diecimila) codici.&#x20;

Di seguito un file di esempio di corretta formattazione:&#x20;

{% file src="../../.gitbook/assets/test-codes.csv" %}
&#x20;Template per caricamento lista codici statici su Portale&#x20;
{% endfile %}

{% hint style="info" %}
I codici che compongono la lista sono **alfanumerici**, devono contenere **almeno una lettera** e **almeno un numero** e non devono superare i **20 caratteri**.
{% endhint %}

Una volta caricato il file contenente la lista di codici occorre attendere i tempi tecnici necessari per consentire l'importazione e scrittura dei codici stessi sui sistemi CGN. Durante questa procedura viene visualizzata una _progress bar_ all’interno di un apposito modulo informativo nella schermata di dettaglio dell’opportunità. Le opportunità potranno essere pubblicate solo quando la procedura è completata.

{% hint style="warning" %}
Opportunità diverse devono essere associate a liste di codici statici diversi per una maggiore sicurezza. I codici statici presenti devono essere accettati dall’Operatore sui propri sistemi fino al loro utilizzo per tutta la durata dell’opportunità erogata ai Beneficiari.
{% endhint %}

L’esperienza per i Beneficiari in App IO è identica a quella del codice statico, ma per questa modalità è previsto un sistema di monitoraggio relativo al consumo dei codici sconto dalla lista, onde consentire all’Operatore di caricare ulteriori codici da rendere disponibili ai Beneficiari delle opportunità.

In particolare, al raggiungimento delle soglie del 50%, 25%, 10% di codici residui, l’Operatore riceverà una comunicazione recante invito a caricare una nuova lista di codici per consentire la fruizione delle opportunità collegate ai beneficiari.

{% hint style="info" %}
La "nuova" lista di codici verrà visualizzata solo dopo che saranno stati utilizzati tutti i codici precedentemente caricati.
{% endhint %}

***

### Cosa succede se si esauriscono i codici? &#x20;

Qualora vengano **esauriti tutti i codici** relativi a una certa opportunità, l'Operatore riceverà - tramite Portale - un nuovo messaggio automatico via e-mail con l’invito a caricare una nuova lista di codici. **L’operatore ha a disposizione un termine di 7 giorni, dalla ricezione dell’invito, per caricare una nuova lista**. In questo periodo l'opportunità rimarrà visibile in app con lo stato "_I codici sconto per questa opportunità saranno presto disponibili_". Se al termine dei 7 giorni, l'Operatore non provvederà a caricare i nuovi codici, l'opportunità **passerà in stato "bozza"** e, quindi, **non sarà più visibile** in App

***

L’identificazione del Beneficiario da parte dell’Operatore avviene secondo questi passaggi:&#x20;

* Il Beneficiario accede alla sua CGN nell’App IO e seleziona l’Operatore di suo interesse nella lista esercenti visualizzata;&#x20;
* il Beneficiario seleziona l’opportunità di suo interesse e, premendo su "Attiva il codice sconto", visualizza uno dei codici statici che verrà scelto dalla lista di codici caricati dall’Operatore relativamente a quella opportunità, con possibilità di copiarlo direttamente dall’App per incollarlo successivamente nei sistemi dell’Operatore;&#x20;
* in fase di finalizzazione dell’acquisto sul portale dell’Operatore, il Beneficiario incolla il codice nell’apposito campo e, se non ci sono stati errori nella digitazione del codice e questo è ancora valido, l’opportunità verrà applicata al carrello.

L’esperienza utente è identica a quella generata dal modello “codice sconto statico”.

Se l’Operatore implementa un processo di invalidazione dei codici effettivamente utilizzati sui propri sistemi<mark style="color:orange;">,</mark> raccomandiamo la massima attenzione in fase di caricamento dei codici: la lista non deve contenere codici duplicati o già presenti nelle liste precedenti in quanto questi potrebbero risultare invalidati e quindi non permettere l’accesso all’opportunità, creando un disservizio ai Beneficiari.

{% hint style="warning" %}
Al momento della visualizzazione del codice sconto in App IO, lo stesso verrà considerato consumato a prescindere dal suo effettivo inserimento o utilizzo sull’e-commerce dell’Operatore, pertanto non sarà più reso visibile ai Beneficiari (incluso allo stesso Beneficiario che dovesse visualizzare il codice per quell’opportunità in un secondo momento).
{% endhint %}
