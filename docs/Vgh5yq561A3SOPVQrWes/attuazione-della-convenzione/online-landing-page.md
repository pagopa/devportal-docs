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

![](https://lh5.googleusercontent.com/kLVZb6byPObmz2giFTmL8Wc\_ySmMjPZXcvKKjVAhIpb25okX57YeR2-X-cR9H59SZAI6ecrt3SIJp4LE4QKEamLUT9jump6E5swqVHtcR3gVFF1V8\_Q6kXqNkA6HcQ)![](https://lh6.googleusercontent.com/EgY-Ob6dbk2lx-hLwVfaVcMRJ4xxcKJcLAM8512ibqtUNw9duMMYvFnI95Dl7DT7odSsgpKRusGdJMLE0FhGIbkpa52Bx1Qdkq64Ue7PTuBNWC4BSj3pezn\_etbM\_w)![](https://lh3.googleusercontent.com/eo2VYsKM8h0frCep5A-lBvuxVuweuMhTcc0khfLNMXgf-QRbou-5-Afizl2mq0c0cT21lKfcUFKpMHmNf4tGI86zV1zZcOPro0r2EA8oysFFSprwGDjv\_Riyyy-dRw)![](https://lh5.googleusercontent.com/Z5FOTt90FvZJOoa5joUux\_eycMPf8\_3Hb68e6LWkOt3NoAmnzomU9vOn9FLy\_BozLi3JzH4jzj-XDgWf0fsgFC7z6rQv2bjrMnnEZmvU-gbwSXnFC7A-JdTZWMl1Og)

<mark style="color:purple;">**Fig. 6**</mark> <mark style="color:purple;"></mark><mark style="color:purple;">Esperienza d’uso per ricercare il codice sconto di un Operatore che aderisce all’iniziativa tramite Modello landing page</mark>

