# Lavori pubblici

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti interventi di recupero e manutenzione di edifici comunali e aree pubbliche;
* monitorare e gestire tempestivamente le richieste, comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Lavori pubblici</td></tr><tr><td><strong>Argomento</strong></td><td>Lavori edilizi, catasto e urbanistica</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda le opere pubbliche e gli interventi di recupero e manutenzione di edifici comunali e aree pubbliche.</p><p></p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Fai una richiesta</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Lavori pubblici</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Prenotazione appuntamento

<details>

<summary>Conferma prenotazione appuntamento</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi dell'appuntamento tramite notifica push.

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio**:&#x20;

Hai prenotato un appuntamento per \<oggetto dell’appuntamento>.

**Dove**: \<indirizzo>

**Quando**: \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, (visita questo sito)\[URL].&#x20;

**🪄 Pulsante**: Disdici appuntamento

***

**Destinatari**: Tutti i cittadini che hanno richiesto appuntamento per pratiche di intervento su edifici comunali e aree pubbliche di competenza dell’Ufficio.

**Quando inviarlo**: Quando l’appuntamento è confermato.

**User story**: Come cittadino voglio ricevere una conferma quando l’appuntamento viene confermato dall’ente.

</details>

### Pagamento

<details>

<summary>Avviso di pagamento pratica</summary>

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

**Destinatari**: Tutti i cittadini che hanno una pratica aperta a proprio nome per richieste di competenza dell’Ufficio.

**Quando inviarlo**: Quando, ricevuta la richiesta, è necessario procedere al pagamento delle spese per la pratica richiesta.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento.

</details>

{% hint style="info" %}
**Promemoria automatici — **<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento pratica: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:&#x20;

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante**: Vedi Avviso

***

**Destinatari**: Tutti i cittadini che hanno una pratica aperta a proprio nome per richieste di competenza dell’Ufficio.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Analisi richiesta

<details>

<summary>Integrazione documentazione</summary>

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio**:&#x20;

Per elaborare la tua richiesta di \<oggetto della richiesta>, abbiamo bisogno di ricevere entro il \<gg/mm/aaaa> altri documenti.

Per aggiungere i documenti alla tua richiesta, \[visita questo sito]\(URL).

**🪄 Pulsante**: Aggiungi documenti

***

**Destinatari**: Tutti i cittadini che hanno una pratica aperta a proprio nome per richieste di competenza dell’Ufficio.

**Quando inviarlo**: Quando l’ente ha bisogno di ulteriori documenti per l’elaborazione della richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta lavori pubblici accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio**:&#x20;

La tua richiesta di \<oggetto della richiesta> è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL)

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno una pratica aperta a proprio nome per richieste di competenza dell’Ufficio.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta lavori pubblici non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio**:&#x20;

La tua richiesta di \<oggetto della richiesta> non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL)

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno una pratica aperta a proprio nome per richieste di competenza dell’Ufficio.

**Quando inviarlo**: Quando l’ente rigetta la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.&#x20;

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:&#x20;

{% file src="../.gitbook/assets/IO - Template servizi - Lavori pubblici.xlsx" %}
{% endhint %}
