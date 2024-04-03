# Separazione e divorzio

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti gli atti e pratiche di separazione e divorzio;
* monitorare e gestire tempestivamente le richieste, comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Separazione e divorzio</td></tr><tr><td><strong>Argomento</strong></td><td>Servizi anagrafici e civici</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda separazioni e divorzio.<br></p><p>Tramite IO potrai:</p><ul><li>ricevere aggiornamenti sulle richieste presentate;</li><li>ricevere comunicazioni e aggiornamenti sugli appuntamenti;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Prenota un appuntamento</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/Servizi anagrafici_Separazione e divorzio.png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Separazione e divorzio</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Richiesta appuntamento per separazione, divorzio, modifica delle condizioni di separazione/divorzio o scioglimento Unione Civile

<details>

<summary>Integrazione documentazione</summary>

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio**:&#x20;

Per elaborare la tua richiesta, abbiamo bisogno di ricevere entro il \<gg/mm/aaaa> altri documenti.

Consulta il riepilogo della tua richiesta, \[visita questo sito]\(URL).

**🪄 Pulsante**: Aggiungi documenti

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno presentato richiesta di separazione, divorzio, modifica delle condizioni di separazione/divorzio o di scioglimento Unione Civile.&#x20;

**Quando inviarlo**: Quando l’ente ha bisogno di ulteriori documenti per l’elaborazione della richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Conferma appuntamento fissato dai coniugi</summary>

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio**:&#x20;

Hai prenotato un appuntamento per \<oggetto dell’appuntamento>.

**Dove**: \<indirizzo>

**Quando**: \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: Disdici appuntamento

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno presentato richiesta di separazione, divorzio, modifica delle condizioni di separazione/divorzio o di scioglimento di Unione Civile.

**Quando inviarlo**: Quando l’appuntamento è confermato.

**User story**: Come cittadino voglio ricevere una conferma quando l’appuntamento viene confermato dall’ente.

</details>

<details>

<summary>Conferma appuntamento fissato dall'ente</summary>

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio**:&#x20;

Hai prenotato un appuntamento per \<oggetto dell’appuntamento>.

**Dove**: \<indirizzo>

**Quando**: \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: Disdici appuntamento

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno presentato richiesta di separazione, divorzio, modifica delle condizioni di separazione/divorzio o di scioglimento di Unione Civile.

**Quando inviarlo**: Quando l’appuntamento è confermato.

**User story**: Come cittadino voglio ricevere una conferma quando l’appuntamento viene confermato dall’ente.\


</details>

<details>

<summary>Promemoria appuntamento</summary>

**🖋 Titolo del messaggio:** Ricordati del tuo appuntamento

🗒 **Testo del messaggio**:&#x20;

Ti ricordiamo l’appuntamento del \<gg/mm/aaaa> per \<oggetto dell’appuntamento>.

**Dove**: \<indirizzo>

**Quando**: \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: Disdici appuntamento

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno presentato richiesta di separazione, divorzio, modifica delle condizioni di separazione/divorzio o di scioglimento di Unione Civile.

**Quando inviarlo**: Quando l’appuntamento è imminente.

**User story**: Come cittadino voglio ricevere un promemoria del mio appuntamento.

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

**Destinatari**: Il coniuge o entrambi i coniugi che hanno richiesto appuntamento per la propria pratica di separazione, divorzio o modifica delle condizioni di separazione/divorzio dipendentemente da quanto loro indicato al momento della richiesta.

**Quando inviarlo**: Quando, ricevuta la richiesta, è necessario procedere al pagamento perché la pratica prosegua il suo _iter_.

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

**Destinatari**: Il coniuge o entrambi i coniugi che hanno richiesto appuntamento per la propria pratica di separazione, divorzio o modifica delle condizioni di separazione/divorzio dipendentemente da quanto loro indicato al momento della richiesta.

**Quando inviarlo**: Quando, ricevuta la richiesta, è necessario procedere al pagamento perché la pratica prosegua il suo iter.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sensibilizzare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica)
{% endhint %}

<details>

<summary>Avviso di pagamento pratica: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:&#x20;

Il tuo pagamento per \<causale> è scaduto il \<gg/mm/aaaa>.

\[Inserire qui indicazioni sull’impatto del protrarsi del mancato pagamento]

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante**: Vedi avviso

***

**Destinatari**: Il coniuge o entrambi i coniugi che hanno richiesto appuntamento per la propria pratica di separazione, divorzio o modifica delle condizioni di separazione/divorzio dipendentemente da quanto loro indicato al momento della richiesta.

**Quando inviarlo**: Quando, ricevuta la richiesta, è necessario procedere al pagamento perché la pratica prosegua il suo iter.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento

</details>

### Richiesta secondo appuntamento

<details>

<summary>Conferma secondo appuntamento</summary>

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio**:&#x20;

Ti confermiamo l’appuntamento per \<oggetto dell’appuntamento>.

**Dove**: \<indirizzo>

**Quando**: \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, \[visita il sito]\(URL).

**🪄 Pulsante**: Disdici appuntamento

***

**Destinatari**: I coniugi che, decorso il termine minimo di trenta giorni dalla stipula dell’accordo di separazione o divorzio, devono presentarsi dinanzi all’Ufficiale di stato civile per confermare o meno quanto accordato.

**Quando inviarlo**: Quando l’appuntamento è confermato.

**User story**: Come cittadino voglio ricevere comunicazione quando l’Ente conferma il mio appuntamento.

</details>

<details>

<summary>Promemoria appuntamento</summary>

**🖋 Titolo del messaggio:** Ricordati del tuo appuntamento

🗒 **Testo del messaggio**:&#x20;

Ti ricordiamo l’appuntamento del \<gg/mm/aaaa> per \<oggetto dell’appuntamento>.

**Dove**: \<indirizzo>

**Quando**: \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, \[visita il sito]\(URL).

**🪄 Pulsante**: Disdici appuntamento

***

**Destinatari**: I coniugi che, decorso il termine minimo di trenta giorni dalla stipula dell’accordo di separazione o divorzio, devono presentarsi dinanzi all’Ufficiale di stato civile per confermare o meno quanto accordato.

**Quando inviarlo**: Quando l’appuntamento è imminente.

**User story**: Come cittadino voglio ricevere un promemoria del mio appuntamento.

</details>

### Trascrizione atto di separazione/divorzio

<details>

<summary>Avvenuta trascrizione dell’atto di separazione o divorzio</summary>

**🖋 Titolo del messaggio:** Atto di \<oggetto> trascritto

🗒 **Testo del messaggio**:&#x20;

Il \<gg/mm/aaaa> abbiamo trascritto l’atto di \<oggetto>.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: I coniugi che hanno fatto richiesta di separazione, divorzio, modifica delle condizioni di separazione/divorzio o di scioglimento Unione Civile.&#x20;

**Quando inviarlo**: Quando l’ente trascrive la sentenza.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.&#x20;

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Separazione e divorzio.xlsx" %}
{% endhint %}
