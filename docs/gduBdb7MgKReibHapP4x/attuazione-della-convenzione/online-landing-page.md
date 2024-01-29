# Online - Landing page

Nel caso in cui l’Operatore abbia deciso di aderire al Programma attraverso il proprio sito web e/o e-commerce tramite il _Modello landing page_, deve comunicare:

* l’indirizzo della pagina web (URL) creata / scelta dall’Operatore per la fruizione delle agevolazioni da parte dei Beneficiari; e
* il relativo _Referer_, ovvero una stringa testuale di massimo 20 caratteri, anch'essa predeterminata dall’Operatore e assegnata alla singola agevolazione.

{% hint style="info" %}
**Importante:** La pagina dell’agevolazione dev’essere realmente dedicata e costruita attorno alla descrizione descritta in App IO e non contenere un insieme di iniziative eterogenee che potrebbero creare difficoltà di navigazione ai Beneficiari. Gli Operatori che scelgono questo modello si impegnano pertanto a creare delle “landing” curate nel messaggio e nella definizione dei contenuti che ben incarnano la natura e lo spirito del Programma. Ad esempio, agevolazioni diverse dovrebbero essere associate a landing page diverse ed appositamente dedicate per una maggiore sicurezza e una maggiore chiarezza di intenti.
{% endhint %}

Il parametro _Referer_ deve essere controllato ed accettato dai sistemi dell’Operatore per tutta la durata delle agevolazioni erogate ai Beneficiari.&#x20;

L’identificazione del Beneficiario da parte dell’Operatore avviene secondo questi passaggi:

* Il Beneficiario accede alla sua CGN nell’App IO e seleziona l’Operatore di suo interesse nella lista esercenti visualizzata;&#x20;
* il Beneficiario seleziona l’agevolazione di suo interesse e preme sul pulsante "_Accedi all’agevolazione_";&#x20;
* la landing page configurata dall’Operatore per la fruizione dell’agevolazione viene aperta in webview valorizzando il custom header HTTP **X-PagoPa-CGN-Referer**.

Il controllo del relativo header può essere effettuato sia a livello infrastrutturale (Apache/Nginx) sia applicativo di backend della pagina web dell’Operatore. Di seguito vengono riportati alcuni esempi implementativi per il check del _Referer_ in diversi linguaggi:&#x20;

* [PHP](https://stackoverflow.com/questions/541430/how-do-i-read-any-request-header-in-php)
* [JAVA](https://mkyong.com/java/how-to-get-http-request-header-in-java/)
* [NodeJ](https://www.codegrepper.com/code-examples/javascript/expressjs+custom+header)[s](https://www.codegrepper.com/code-examples/javascript/expressjs+custom+header)&#x20;
* [Wordpress](https://wordpress.stackexchange.com/questions/288865/how-to-get-value-of-custom-http-header)
* [Nginx](https://www.nginx.com/resources/wiki/start/topics/examples/headers\_management/)
* [Apache](https://serverfault.com/questions/751697/how-to-read-specific-character-out-of-request-header-in-apache-http-config)

#### Esperienza utente

![](<../.gitbook/assets/Wallet - Dettaglio carta-1.png>)![](<../.gitbook/assets/Esercenti online.png>)![](<../.gitbook/assets/Dettaglio esercente fisico - online - singola.png>)![](<../.gitbook/assets/BS offerta - landing.png>)

<mark style="color:purple;">**Fig. 6**</mark> <mark style="color:purple;"></mark><mark style="color:purple;">Esperienza d’uso per ricercare il codice sconto di un Operatore che aderisce all’iniziativa tramite Modello landing page</mark>

