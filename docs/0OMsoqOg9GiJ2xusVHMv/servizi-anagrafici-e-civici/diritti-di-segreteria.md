# Diritti di segreteria

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti i diritti di segreteria;
* monitorare e gestire tempestivamente le richieste e le comunicazioni per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Diritti di segreteria</td></tr><tr><td><strong>Argomento</strong></td><td>Servizi anagrafici e civici</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda i diritti di segreteria.</p><p></p><p>Tramite IO potrai:</p><ul><li>ricevere avvisi di pagamento relativi ai diritti di segreteria e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Visualizza tabella diritti di segreteria</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/Servizi anagrafici_Diritti di segreteria.png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Diritti di segreteria</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Pagamento

<details>

<summary>Avviso di pagamento spese di servizio</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C'è un avviso da pagare intestato a \<nome> \<cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Vedi Avviso”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante**: Vedi Avviso

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che devono pagare i diritti di segreteria per le pratiche che lo prevedono.

**Quando inviarlo**: Quando è richiesto il pagamento dei diritti di segreteria.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento dei diritti di segreteria.

</details>

{% hint style="info" %}
**Promemoria automatici — **<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento spese di servizio: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:&#x20;

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante**: Vedi Avviso

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che devono pagare i diritti di segreteria per le pratiche che lo prevedono.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sollecitare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento spese di servizio: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:&#x20;

Il tuo pagamento per \<causale> è scaduto il \<gg/mm/aaaa>.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante**: Vedi Avviso

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che devono pagare i diritti di segreteria per le pratiche che lo prevedono.

**Quando inviarlo**: Quando il pagamento non è stato effettuato nei termini previsti.

**User story**: Come cittadino voglio ricevere comunicazione di pagamenti non effettuati.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.&#x20;

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Diritti di segreteria.xlsx" %}
{% endhint %}
