# Errore nei dati del messaggio

Prima di inviare un messaggio, suggeriamo sempre di:

* **utilizzare uno dei modelli** forniti da PagoPA S.p.A, ove presente e applicabile al proprio caso;
* **inviare a più colleghi un messaggio di test**, seguendo le [istruzioni della guida tecnica](http://127.0.0.1:5000/s/coSKRte21UjDBRWKLtEs/funzionalita/inviare-un-messaggio/messaggi-di-test).
* **chiedere ai tester di controllare tutti i dati** del messaggio, come titolo, data ed eventuali altre informazioni contenute al suo interno.&#x20;
* **ripetere il test** finché il messaggio non deve essere ulteriormente modificato.

{% hint style="warning" %}
**Importante**

Se il messaggio include un avviso di pagamento, prima di inviarlo bisogna verificare che siano state generate le relative posizioni debitorie. In caso contrario, i cittadini si troverebbero con un avviso che non possono pagare.
{% endhint %}

Nel caso in cui venga comunque inviato un messaggio con un errore di questo tipo, suggeriamo di **valutare la gravità dell'errore** rispetto al contenuto del messaggio.

{% hint style="info" %}
**Un esempio**

Un errore di battitura nel corpo del messaggio non è grave: il destinatario comprenderà comunque le informazioni contenute all'interno della comunicazione.

Una data di scadenza o un importo sbagliato sono invece errori gravi.
{% endhint %}

**Se l'errore è grave**, suggeriamo di inviare agli stessi destinatari un **messaggio di errata corrige**. Il messaggio dovrà:

* intitolarsi "Errata corrige + titolo del messaggio errato";
* includere l'errore commesso;
* includere il dato corretto;
* spiegare ai cittadini come devono comportarsi rispetto al messaggio errato, **soprattutto nel caso in cui l'errore riguardi l'avviso di pagamento**.

Infine, se l'errore riguarda l'**avviso di pagamento** (destinatario, importo...), bisogna **annullare le relative posizioni debitorie**, per evitare che i cittadini paghino un importo non dovuto. Per approfondire, [consulta le SANP di pagoPA.](https://docs.pagopa.it/sanp/casi-duso/pagamento-di-un-avviso-presso-psp)

{% hint style="info" %}
Hai dubbi? Prima di inviare un eventuale messaggio di errata corrige **contatta l'assistenza di IO** inviando una mail a [onboarding@io.italia.it](mailto:onboarding@io.italia.it).

Ti ricordiamo che l'ente mittente è l'unico responsabile del contenuto dei messaggi.
{% endhint %}
