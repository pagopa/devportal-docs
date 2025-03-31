# Imposta di soggiorno

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti l’Imposta di soggiorno sul territorio comunale;
* monitorare e gestire tempestivamente le richieste, comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/cose-io-e-qual-e-il-suo-obiettivo#perche-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Imposta di soggiorno</td></tr><tr><td><strong>Argomento</strong></td><td>Viaggi e turismo</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda l’imposta di soggiorno, ovvero l’imposta applicata alle persone che non risiedono nel Comune e che alloggiano in una struttura o immobile a uso turistico. Questo servizio si rivolge a coloro che riscuotono l’importo.</p><p></p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sull’imposta di soggiorno, sulle modalità e sulle scadenze del versamento;</li><li>ricevere informazioni e aggiornamenti sulle comunicazioni periodiche e sulla dichiarazione annuale;</li><li>ricevere avvisi di pagamento e pagarli direttamente in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Accedi al portale</td></tr></tbody></table>

{% include "../.gitbook/includes/banner-single-sign-on.md" %}

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (50).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Imposta di soggiorno</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Comunicazioni

<details>

<summary>Scadenza dichiarazione annuale</summary>

**🖋 Titolo del messaggio:** È ora di presentare la dichiarazione annuale

🗒 **Testo del messaggio**:&#x20;

Hai tempo fino al \<gg/mm/aaaa> per presentare la dichiarazione annuale per l’anno \<aaaa>.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio e che sono gestori di strutture ad uso turistico nel territorio comunale.

**Quando inviarlo:** Quando l’ente comunica la scadenza annuale per la trasmissione della dichiarazione annuale.

**User story:** Come cittadino voglio ricevere comunicazioni sulle scadenze delle mie dichiarazioni.

</details>

<details>

<summary>Scadenza invio trimestrale</summary>

**🖋 Titolo del messaggio:** È ora di inviare il riepilogo trimestrale

🗒 **Testo del messaggio**:&#x20;

Hai tempo fino al \<gg/mm/aaaa> per inviare il riepilogo trimestrale dei pernottamenti.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio e che sono gestori di strutture ad uso turistico nel territorio comunale.

**Quando inviarlo:** Quando l’ente comunica la scadenza per la trasmissione del riepilogo trimestrale dei pernottamenti in struttura.

**User story:** Come cittadino voglio ricevere comunicazioni sulle scadenze delle mie dichiarazioni.

</details>

<details>

<summary>Modifiche al servizio</summary>

**🖋 Titolo del messaggio:** Nuove disposizioni

🗒 **Testo del messaggio**:&#x20;

Dal \<gg/mm/aaaa> \<oggetto della variazione> subirà le seguenti variazioni:

\[Inserire qui le indicazioni sulle variazioni, da compilare a cura e responsabilità dell'ente]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio e che sono gestori di strutture ad uso turistico nel territorio comunale.

**Quando inviarlo:** Quando il servizio subisce variazioni.

**User story:** Come cittadino voglio ricevere comunicazioni su nuove disposizioni relative al servizio.

</details>

### Pagamento

<details>

<summary>Avviso di pagamento imposta di soggiorno</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:&#x20;

C’è un avviso di pagamento intestato a \<nome> \<cognome> e relativo a \<causale>.

**Devi pagare**: <00,00> €

**Entro il**: \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)&#x20;

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio e che sono gestori di una struttura ad uso turistico nel territorio comunale.

**Quando inviarlo:** Quando è necessario procedere al pagamento dell’imposta.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento imposta di soggiorno: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:&#x20;

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)&#x20;

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio e che sono gestori di strutture ad uso turistico nel territorio comunale.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sollecitare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento imposta di soggiorno: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio:**

Il tuo pagamento per \<causale> è scaduto il \<gg/mm/aaaa>.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)&#x20;

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio e che sono gestori di strutture ad uso turistico nel territorio comunale.

**Quando inviarlo:** Quando la data di scadenza del pagamento è stata superata, ma prima che diventi notifica a valore legale.

**User story:** Come cittadino vorrei ricevere promemoria sulla scadenza dei miei avvisi di pagamento.

</details>

***

{% hint style="success" %}
**Lo sapevi?**\
IO è integrata con SEND - Servizio Notifiche Digitale, per l'invio di comunicazioni a valore legale.

[**Scopri di più su SEND**](https://notifichedigitali.pagopa.it/) [**->**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali)
{% endhint %}

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.&#x20;

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:&#x20;

{% file src="../.gitbook/assets/IO - Template servizi - Imposta di soggiorno (4).xlsx" %}
{% endhint %}
