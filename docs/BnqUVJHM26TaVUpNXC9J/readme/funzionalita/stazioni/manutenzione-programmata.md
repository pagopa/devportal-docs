# Manutenzione programmata

Questa funzionalità permette di gestire le manutenzioni programmate per le stazioni.&#x20;

Si ricorda sempre di rispettare i livelli di servizio indicati in [https://docs.pagopa.it/sanp/appendici/indicatori-di-qualita-per-i-soggetti-aderenti/livelli-di-servizio-enti-creditori](https://docs.pagopa.it/sanp/appendici/indicatori-di-qualita-per-i-soggetti-aderenti/livelli-di-servizio-enti-creditori).

Di seguito i requisiti relativi ad una manutenzione:

{% hint style="info" %}
* L’EC **ha a disposizione** `36 ore` di manutenzione all’anno
* Superate le `36 ore` la creazione di una nuova manutenzione avrà le seguenti conseguenze:
  * il flag `StandIn` fisso a `true`
  * le ore saranno conteggiate come `extra`
* Una manutenzione **deve essere** programmata con minimo `72 ore` di anticipo
* Il range temporale di una manutenzione ha una granularità di `15 minuti`
* L’EC **ha la possibilità** di modificare una manutenzione _programmata_ modificando tutti i campi
* L'EC **ha la possibilità** di modificare una manutenzione _in corso_ modificando solo il campo`Data ora fine` manutenzione (non può essere precedente alla data e ora attuali)
* L’EC **ha la possibilità** di eliminare una manutenzione _programmata_
* L’EC **ha la possibilità** di programmare _più di una manutenzione per una stessa stazione ma queste non possono sovrapporsi_
* In caso di manutenzione programmata a cavallo di capodanno il conteggio delle ore sarà diviso alla mezzanotte del 31/12
{% endhint %}

Per accedere alla funzionalità entrare nella voce di menu a sinistra "Manutenzioni programmate".

All'accesso della pagina viene visualizzata un'anteprima con tutte le informazioni cumulative delle ore di manutenzione programmate, svolte, residue in funzione dell'anno di riferimento.&#x20;

{% hint style="info" %}
Si ricorda che il numero di ore massimo secondo gli attuali livelli di servizio è pari a 36. Nel caso in cui si vada oltre tale limite non è possibile quando si crea una nuova manutenzione impostare il flag "StandIN" a false in quanto necessariamente i pagamenti devono essere possibili in "StandIN".
{% endhint %}

{% hint style="warning" %}
E' possibile creare una manutenzione con almeno 72 ore di preavviso dall'avvio della stessa.
{% endhint %}

Più in basso invece vi è l'elenco delle manutenzioni programmate, suddivise con gli stati "`in corso`" e "`in programma`", e di quelle passate.

<figure><img src="../../../.gitbook/assets/image (225).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (226).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (227).png" alt=""><figcaption></figcaption></figure>

Per creare una nuova manutenzione è necessario cliccare sul pulsante "`Nuova manutenzione`" che apre la seguente form.

<figure><img src="../../../.gitbook/assets/image (228).png" alt=""><figcaption></figcaption></figure>

E' necessario selezionare dal menu a tendina la stazione per la quale attivare la manutenzione, la data / ora di inizio di fermo e la data / ora di fine fermo. Inoltre è possibile indicare se durante il fermo della stazione sarà comunque possibile gestire i pagamenti mediante lo StandIN (maggiori info in [https://docs.pagopa.it/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in](https://docs.pagopa.it/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in))

{% hint style="danger" %}
Come già si ribadiva sopra, nel caso in cui il numero di ore di manutenzione previsto per l'anno (36) sia stato superato in caso di nuova manutenzione non è possibile impostare il flag StandIN a true.&#x20;

![](<../../../.gitbook/assets/image (229).png>)
{% endhint %}

Una volta confermata la manutenzione, questa assume lo stato "`In programma`" e viene mostrata nella griglia della manutenzioni programmate così come mostrato di seguito. Raggiunto la data / ora prevista la manutenzione assume lo stato `"In corso`" mentre una volta terminata questa viene spostata nel tab "Passate" con lo stato "`Terminata`".

<figure><img src="../../../.gitbook/assets/image (230).png" alt=""><figcaption></figcaption></figure>

Qualora si dovesse rendere necessaria una modifica ad una manutenzione già creata è possibile procedere utilizzando la funzione di modifica.&#x20;

<figure><img src="../../../.gitbook/assets/image (231).png" alt=""><figcaption></figcaption></figure>

Le modifiche permesse sono quelle relative al flag StandIN e alle date, fermo restando che non sarà possibile impostare una data di avvio inferiore alle 72 ore.

<figure><img src="../../../.gitbook/assets/image (232).png" alt=""><figcaption></figcaption></figure>

Anche nel caso di una manutenzione in corso è possibile procedere alla modifica. In questo caso i vincoli sono i seguenti:

* L'EC **ha la possibilità** di modificare una manutenzione _in corso_ modificando solo il campo`Data ora fine` manutenzione (non può essere precedente alla data e ora attuali)

<figure><img src="../../../.gitbook/assets/image (233).png" alt=""><figcaption></figcaption></figure>

L'EC mediante l'azione "Termina manutenzione" può decidere di eliminare la manutenzione programmata.

<figure><img src="../../../.gitbook/assets/image (234).png" alt=""><figcaption></figcaption></figure>

