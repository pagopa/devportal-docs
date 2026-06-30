# Servizi per Minori

È disponibile una funzionalità che consente a un Ente di contrassegnare un Servizio come abilitato ai Cittadini minorenni di età compresa tra 14 e 17 anni. In questo modo, i Cittadini minorenni potranno:

* visualizzare il Servizio nella lista Servizi;
* trovare il Servizio nella ricerca dei Servizi;
* ricevere comunicazioni dal Servizio.

Come impostazione di default, tutti i Servizi sono abilitati ai soli Cittadini maggiorenni. Di conseguenza:

* i Cittadini minorenni non visualizzeranno i Servizi destinati solo ai maggiorenni nella lista Servizi;
* i Cittadini minorenni non ritroveranno un Servizio destinato solo ai maggiorenni tra i risultati di ricerca nella lista Servizi;
* i Servizi destinati solo ai maggiorenni riceveranno un errore se provano ad inviare un messaggio ad un Cittadino minorenne

Qualora l’Ente valuti che il Servizio sia idoneo a essere esposto anche ai Cittadini minorenni di età compresa tra 14 e 17 anni, dovrà identificarlo come tale.&#x20;

In qualsiasi momento sarà possibile per l'Ente richiedere la restrizione di un Servizio ai soli Cittadini maggiorenni, se questo era stato precedentemente abilitato anche ai Cittadini minorenni. In tal caso, i messaggi già recapitati ai Cittadini minorenni rimarranno accessibili e consultabili da parte loro.

### Tramite CMS dei servizi

Ti basta entrare nella pagina di dettaglio del tuo Servizio, impostare la spunta su "Servizio abilitato ai minori" e richiedere la pubblicazione del Servizio.

### Tramite Developer Portal

Non sarà possibile creare Servizi abilitati ai minori ne tantomeno abilitare ai minori Servizi già esistenti tramite il Developer Portal.

### Tramite API

Puoi richiedere la modifica del Servizio configurando il flag `suitable_for_minors` (le API programmatiche richiedono a loro volta, in seguito, la pubblicazione).



{% hint style="warning" %}
L’Ente è responsabile della valutazione circa l’idoneità del Servizio a essere rivolto anche a Cittadini minorenni di età compresa tra 14 e 17 anni, tenuto conto della natura del Servizio, delle finalità perseguite, della base giuridica applicabile, dei contenuti delle comunicazioni e dell’eventuale presenza di categorie particolari di dati personali o comunque meritevoli di specifica tutela.\
\
In una prima fase, la funzionalità non consentirà di indicare età specifiche di fruizione, abilitando i Servizi esclusivamente per l'intera fascia anagrafica 14-17 anni. \
\
Il sistema non gestirà, inoltre, eventuali fattispecie particolari relative a minori con titoli o capacità di agire differenziati, quali, a titolo esemplificativo, l’emancipazione. Resta pertanto in capo all’Ente la verifica della sussistenza dei presupposti, dei titoli abilitativi o delle condizioni legittimanti necessari per rendere il Servizio accessibile o per inviare comunicazioni ai Cittadini minorenni, anche rispetto a target anagrafici più specifici o a eventuali casistiche particolari previste dalla normativa applicabile.\
\
L’Ente resta responsabile delle conseguenze derivanti dall’errata qualificazione del Servizio come idoneo ai minori o dall’invio di comunicazioni a Cittadini minorenni in assenza dei relativi presupposti.
{% endhint %}

