# ✖️ Disattivazione e trasferimento del servizio&#x20;

## Disattivazione del servizio

L'utente deve poter interrompere la ricezione delle richieste di pagamento in qualsiasi momento e in autonomia.

### **Buone pratiche da seguire**

* La CTA di disattivazione deve essere facilmente reperibile, preferibilmente nella sezione di gestione delle notifiche o delle autorizzazioni.&#x20;
* Fornisci all'utente tutte le informazioni per effettuare la scelta, spiegando le implicazioni della disattivazione del servizio.
* Fornisci una conferma esplicita di disattivazione sfruttando i touchpoint a disposizione. (es. feedback immediato e conferma via e-mail).

<figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

## Trasferimento del servizio

{% hint style="warning" %}
**Non è possibile fruire dello stesso servizio RTP con più Service Provider contemporaneamente.**
{% endhint %}

Il trasferimento si verifica quando l'utente sceglie un nuovo PSP per ricevere le richieste RTP, abbandonando il PSP precedente.

Abilitando il servizio presso un nuovo PSP, RTP si disattiverà automaticamente sui canali del precedente secondo questa procedura:

<figure><img src="../.gitbook/assets/image (33).png" alt=""><figcaption></figcaption></figure>

\
Questa informazione va resa nota e previste le adeguate comunicazioni verso l'utente:

1. il vecchio PSP deve notificare l'avvenuta disattivazione del servizio;
2. il nuovo PSP deve comunicare all'utente che il servizio si disabiliterà automaticamente sui canali del vecchio PSP.

### **Esempi di testo**

#### Attivazione per un utente che ha già il servizio attivo presso un altro PSP

{% tabs %}
{% tab title="✅ Testo suggerito" %}
_Attualmente il servizio è attivo su un altro canale. Vuoi trasferirlo su \[nome app] per ricevere le richieste di pagamento direttamente qui? La disattivazione sul canale precedente avverrà in automatico._
{% endtab %}
{% endtabs %}

#### **Disattivazione automatica per un utente che ha attivato il servizio presso un altro PSP**

{% tabs %}
{% tab title="✅ Testo suggerito" %}
_Ti confermiamo che il servizio è stato automaticamente disattivato, in seguito alla tua scelta di attivarlo presso un altro fornitore: le nuove richieste di pagamento pagoPA ti verranno inviate al nuovo canale da te scelto._

_Le richieste di pagamento che avevi già ricevuto restano invece consultabili e pagabili \[esplicitare sezione che ospita le richieste e modalità di pagamento]._

_Se desideri riattivare il servizio con noi in futuro, puoi farlo in qualsiasi momento accedendo a \[Link/Nome Sezione Attivazione]._
{% endtab %}
{% endtabs %}





