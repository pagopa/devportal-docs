# 5️⃣ Modalità landing page

Nel caso in cui l’Operatore abbia deciso di aderire al Programma attraverso il proprio sito web e/o e-commerce tramite il _Modello landing page_, deve comunicare:

* l’indirizzo della pagina web (URL) scelta dall’Operatore per la fruizione delle opportunità da parte dei Beneficiari;&#x20;
* il relativo _Referer_, ovvero una stringa testuale di massimo 20 caratteri, anch'essa predeterminata dall’Operatore e assegnata alla singola opportunità.

{% hint style="warning" %}
La pagina dell’opportunità dev’essere coerente con la descrizione esposta <mark style="color:orange;">i</mark>n app IO e non contenere un insieme di iniziative eterogenee che potrebbero creare difficoltà di navigazione ai Beneficiari e contestazioni da parte degli stessi.
{% endhint %}

&#x20;Gli Operatori che scelgono questo modello si impegnano a creare delle “landing” nelle quali sia identificabile che l'opportunità sia riferibile al Programma CGN (innanzitutto con utilizzo del relativo logo, vedasi la sezione dedicata ai Brand) e che siano curate nel messaggio e nella definizione dei contenuti in modo tale da essere coerenti con la natura e lo spirito del Programma. Ad esempio, opportunità diverse dovrebbero essere associate a landing page diverse ed appositamente dedicate per una maggiore sicurezza e una maggiore chiarezza di intenti.

Il parametro _referer_ deve essere controllato ed accettato dai sistemi dell’Operatore per tutta la durata delle opportunità erogate ai Beneficiari.&#x20;

L’identificazione del Beneficiario da parte dell’Operatore avviene secondo questi passaggi:

* Il Beneficiario accede alla sua CGN nell’App IO e seleziona l’Operatore di suo interesse nella lista esercenti visualizzata;&#x20;
* il Beneficiario seleziona l’opportunità di suo interesse e preme sul pulsante "Vai all'opportunità";&#x20;
* la landing page configurata dall’Operatore per la fruizione dell’opportunità viene aperta in webview valorizzando il custom header HTTP **`X-PagoPa-CGN-Referer`**.

Il controllo del relativo _header_ può essere effettuato sia a livello infrastrutturale (Apache/Nginx) sia applicativo di backend della pagina web dell’Operatore. Di seguito vengono riportati alcuni esempi implementativi per il check del _Referer_ in diversi linguaggi:&#x20;

* [PHP](https://stackoverflow.com/questions/541430/how-do-i-read-any-request-header-in-php)
* [JAVA](https://mkyong.com/java/how-to-get-http-request-header-in-java/)
* [NodeJ](https://www.codegrepper.com/code-examples/javascript/expressjs+custom+header)[s](https://www.codegrepper.com/code-examples/javascript/expressjs+custom+header)&#x20;
* [Wordpress](https://wordpress.stackexchange.com/questions/288865/how-to-get-value-of-custom-http-header)
* [Nginx](https://www.nginx.com/resources/wiki/start/topics/examples/headers\_management/)
* [Apache](https://serverfault.com/questions/751697/how-to-read-specific-character-out-of-request-header-in-apache-http-config)



{% hint style="info" %}
Il controllo dei nomi degli header NON deve essere effettuato in maniera _case-sensitive_ (non deve essere effettuata distinzione tra lettere maiuscole e minuscole)&#x20;
{% endhint %}

## Esperienza utente

<figure><img src="../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

<div data-full-width="true">

<figure><img src="../../.gitbook/assets/image (11).png" alt="" width="563"><figcaption><p><mark style="color:purple;"><strong>Fig. 6</strong> Esperienza d’uso per ricercare il codice sconto di un Operatore che aderisce all’iniziativa tramite Modello landing page</mark></p></figcaption></figure>

</div>
