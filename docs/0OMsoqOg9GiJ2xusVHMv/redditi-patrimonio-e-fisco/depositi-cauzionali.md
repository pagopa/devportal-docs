# Depositi cauzionali

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un unico punto di riferimento per la ricezione delle comunicazioni riguardanti i depositi cauzionali dovuti al Comune;
* monitorare e gestire tempestivamente le richieste, comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/cose-io-e-qual-e-il-suo-obiettivo#perche-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Depositi cauzionali</td></tr><tr><td><strong>Argomento</strong></td><td>Redditi, patrimonio e fisco</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda i depositi cauzionali dovuti al Comune. Il deposito cauzionale è un importo che il Comune può richiedere a titolo di garanzia per alcuni servizi.</p><p></p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sul pagamento di depositi cauzionali e sul loro rimborso;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Compila il modulo di richiesta restituzione</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (19).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Depositi cauzionali</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Calcolo deposito cauzionale

<details>

<summary>Avviso di pagamento deposito cauzionale</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio:**

C’è un avviso di pagamento intestato a \<nome> \<cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)&#x20;

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio che devono pagare il deposito cauzionale propedeutico all’accesso ad un servizio comunale che lo prevede.

**Quando inviarlo:** Quando è previsto il pagamento del deposito cauzionale.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento.\


</details>

{% hint style="info" %}
**Promemoria automatici —&#x20;**<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento spese di servizio: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)&#x20;

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio che devono pagare il deposito cauzionale propedeutico all’accesso ad un servizio comunale che lo prevede.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.\


</details>

### Restituzione del deposito

<details>

<summary>Richiesta restituzione deposito: accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio:**

La tua richiesta di restituzione del deposito cauzionale per \<oggetto> è stata accolta.

Riceverai: <00,00> €

Entro il: \<gg/mm/aaaa>

Riceverai un messaggio in app per informarti dell’avvenuta restituzione.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante: n/a**

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio che hanno fatto richiesta di restituzione generica del deposito cauzionale.

**Quando inviarlo:** Quando l’ente accoglie la richiesta.

**User story:** Come cittadino voglio essere aggiornato sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta restituzione deposito: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio:**

La tua richiesta di restituzione del deposito cauzionale per \<oggetto> non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio che hanno fatto richiesta di restituzione generica del deposito cauzionale.

**Quando inviarlo:** Quando l’ente accoglie la richiesta.

**User story:** Come cittadino voglio essere aggiornato sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Avvenuta restituzione</summary>

**🖋 Titolo del messaggio:** Il tuo deposito è in arrivo

🗒 **Testo del messaggio:**

Il \<gg/mm/aaaa> abbiamo emesso il pagamento in restituzione del tuo deposito cauzionale relativo a \<oggetto>.

Ti abbiamo restituito: <00,00> €

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

**🪄 Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio che hanno fatto richiesta di restituzione generica del deposito cauzionale.

**Quando inviarlo:** Quando l’ente emette il pagamento per la restituzione del deposito.

**User story:** Come cittadino voglio essere aggiornato sullo stato di avanzamento della mia richiesta.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.&#x20;

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:&#x20;

{% file src="../.gitbook/assets/IO - Template servizi - Depositi cauzionali.xlsx" %}
{% endhint %}
