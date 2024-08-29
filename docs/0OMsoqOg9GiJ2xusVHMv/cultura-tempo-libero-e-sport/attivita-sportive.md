# Attività sportive

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti impianti sportivi e aree comunali;
* monitorare e gestire tempestivamente le richieste, le comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Attività sportive</td></tr><tr><td><strong>Argomento</strong></td><td>Cultura, tempo libero e sport</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda le iniziative sportive, gli impianti sportivi e le aree comunali.<br></p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sulle iniziative sportive; </li><li>ricevere avvisi di pagamento per l’uso di impianti sportivi e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Presenta una richiesta</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (8) (1).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Attività sportive</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

## Richieste

### Presentazione richiesta

<details>

<summary>Integrazione documentazione</summary>

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio**:&#x20;

Per elaborare la tua richiesta di \<oggetto della richiesta>, abbiamo bisogno di ricevere entro il \<gg/mm/aaaa> alcuni documenti.

Per aggiungere i documenti alla tua richiesta, \[visita questo sito]\(URL).

**🪄 Pulsante**: Aggiungi documenti

***

**Destinatari**: Tutti i cittadini che hanno aperto una pratica per attività sportive a proprio nome per richieste di competenza dell’Ufficio.

**Quando inviarlo**: Quando l’ente ha bisogno di ulteriori documenti per l’elaborazione della richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta: accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

**🗒 Testo del messaggio:**

La tua richiesta per \<oggetto della richiesta> è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno aperto una pratica a proprio nome per richieste per attività sportiva.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio:**

La tua richiesta per \<oggetto della richiesta> non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno aperto una pratica a proprio nome per richieste per attività sportiva.

**Quando inviarlo**: Quando l’ente non accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

### Pagamento

<details>

<summary>Avviso di pagamento spese di servizio</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:\
\
C'è un avviso da pagare intestato a \<nome> \<cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Vedi Avviso”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante**: Vedi Avviso

***

**Destinatari**: Tutti i cittadini che hanno aperto una pratica a proprio nome per richieste per attività sportiva.

**Quando inviarlo**: Quando, ricevuta la richiesta, è necessario procedere al pagamento delle spese per la pratica.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento.

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

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante**: Vedi Avviso

***

**Destinatari**: Tutti i cittadini che hanno aperto una pratica a proprio nome per richieste per attività sportiva.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

<details>

<summary>Annullamento richiesta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata annullata

🗒 **Testo del messaggio**:&#x20;

La tua richiesta per \<oggetto della richiesta> è stata annullata per mancato pagamento.

Per ulteriori informazioni, (visita questo sito)\[URL].&#x20;

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno aperto una pratica a proprio nome per richieste per attività sportiva e non hanno effettuato il pagamento entro i termini.

**Quando inviarlo**: Quando il pagamento è oltre la data di scadenza.

**User story**: Come cittadino voglio ricevere un promemoria sullo stato della mia richiesta.

</details>

***

## Bandi

### Pubblicazione bando

<details>

<summary>Pubblicazione bando</summary>

:sparkles: <mark style="color:blue;">**Allegati Premium**</mark> — Tramite questa funzionalità Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, puoi allegare documenti all'interno del messaggio.

Questo messaggio è da utilizzare sia per messaggi Premium, sia per messaggi standard. In caso di messaggio standard, **ricorda di eliminare ogni riferimento agli allegati dal corpo del messaggio.**

***

**🖋 Titolo del messaggio:** Pubblicato un nuovo bando

🗒 **Testo del messaggio:**

Dal \<gg/mm/aaaa> puoi fare richiesta di \<oggetto del bando>.

Hai tempo fino al \<gg/mm/aaaa>.

Per consultare i criteri di assegnazione e presentare richiesta, \[visita questo sito]\(URL).

\[Solo per messaggi Premium con allegato] Trovi il testo completo del bando in allegato a questo messaggio.

**🪄 Pulsante**: n/a\
\
<mark style="color:blue;">**📎 Allegato Premium:**</mark> \<testo integrale del bando>

***

**Destinatari:** I cittadini residenti nell’area di azione del servizio che hanno manifestato interesse verso il servizio.

**Quando inviarlo:** Quando l’ente pubblica un nuovo bando.

**User Story:** Come cittadino voglio ricevere comunicazione quando l’ente pubblica un nuovo bando dedicato alle attività sportive.

</details>

### Pubblicazione graduatoria

<details>

<summary>Pubblicazione graduatoria</summary>

**🖋 Titolo del messaggio:** Pubblicata la graduatoria

🗒 **Testo del messaggio:**

È disponibile la graduatoria per il servizio \<tipologia di servizio> per \<nome> \<cognome>.

Se vuoi rinunciare alla tua posizione, hai tempo fino al \<gg/mm/aaaa>.

Per visualizzare la tua posizione in graduatoria \[visita questo sito]\(URL).

**🪄 Pulsante**: Vai alla graduatoria

***

**Destinatari:** Il cittadino che ha partecipato al bando di concorso.

**Quando inviarlo:** Quando è pubblicata la graduatoria.

**User Story:** Come cittadino voglio ricevere aggiornamento sullo stato della mia domanda.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.&#x20;

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Attività sportive.xlsx" %}
{% endhint %}
