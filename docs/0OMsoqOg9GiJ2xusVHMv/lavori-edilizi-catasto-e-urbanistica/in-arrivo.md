# Appalti pubblici

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti gli appalti pubblici;
* monitorare e gestire tempestivamente le richieste e comunicazioni per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="370"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Appalti pubblici</td></tr><tr><td><strong>Argomento</strong></td><td>Lavori edilizi, catasto e urbanistica</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda i bandi di gara per gli appalti pubblici.</p><p><br>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sui bandi di gara;</li><li>ricevere eventuali avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Vai ai bandi aperti</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../../../app-io/modelli-servizi/v1.0/.gitbook/assets/image (14) (1).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Appalti pubblici</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

I servizi di IO possono essere erogati anche alle persone fisiche, a condizione che agiscano per conto di persone giuridiche e siano debitamente delegate dalle stesse.

### Pubblicazione bando

<details>

<summary>Pubblicazione bando</summary>

:sparkles: <mark style="color:blue;">**Allegati Premium**</mark> — Tramite questa funzionalità Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, puoi allegare documenti all'interno del messaggio.

Questo messaggio è da utilizzare sia per messaggi Premium, sia per messaggi standard. In caso di messaggio standard, **ricorda di eliminare ogni riferimento agli allegati dal corpo del messaggio.**

***

**🖋 Titolo del messaggio:** Pubblicato un nuovo bando

🗒 **Testo del messaggio**:

Dal `<gg/mm/aaaa>` è possibile presentare la domanda di ammissione al bando `<oggetto del bando>`.

\[Inserire qui le modalità di compilazione della domanda e la documentazione necessaria, da compilare a cura e responsabilità dell'ente]

Per consultare i criteri di assegnazione e compilare la domanda, \[visita questo sito]\(URL).

\[Solo per messaggi Premium con allegato] Trovi il testo completo del bando in allegato a questo messaggio.

**🪄 Pulsante**: n/a

<mark style="color:blue;">**📎 Allegato Premium:**</mark> `<testo integrale del bando>`

***

**Destinatari**: I cittadini che hanno manifestato interesse verso il servizio.

**Quando inviarlo**: Quando l’ente pubblica un nuovo bando.

**User story**: Come cittadino voglio essere informato sull’apertura di bandi.

</details>

### Ricezione offerte

<details>

<summary>Richiesta di comprovazione dei requisiti d'accesso</summary>

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio**:

Per comprovare i requisiti di accesso di `<ragione sociale>` al bando `<nome del bando>` `<riferimenti del bando>` abbiamo bisogno di ricevere entro il `<gg/mm/aaaa>` alcuni documenti.

Per ulteriori informazione e aggiungere i documenti, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari:** Il cittadino che ha presentato domanda di partecipazione al bando.

**Quando inviarlo:** Quando è necessario comprovare i requisiti di accesso al bando.

**User story:** Come cittadino voglio ricevere aggiornamento sullo stato di avanzamento della mia domanda.

</details>

<details>

<summary>Richiesta di ammissione al bando: accolta</summary>

**🖋 Titolo del messaggio:** La tua domanda è stata accolta

🗒 **Testo del messaggio:**

La tua domanda di ammissione al bando `<nome del bando>` `<riferimenti del bando>` è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Il cittadino che ha presentato domanda di ammissione al bando pubblicato dall’ente.

**Quando inviarlo:** Quando, valutata l’idoneità dei requisiti, l’ente accoglie la domanda di partecipazione.

**User story:** Come cittadino voglio essere informato sullo stato di avanzamento della mia domanda.

</details>

<details>

<summary>Richiesta di ammissione al bando: non accolta</summary>

**🖋 Titolo del messaggio:** La tua domanda non è stata accolta

🗒 **Testo del messaggio:**

La tua domanda di ammissione al bando `<nome del bando>` `<riferimenti del bando>` non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Il cittadino che ha presentato domanda di ammissione al bando pubblicato dall’ente.

**Quando inviarlo:** Quando, valutata l’idoneità dei requisiti, l’ente rigetta la domanda di partecipazione.

**User story:** Come cittadino voglio essere informato sullo stato di avanzamento della mia domanda.

</details>

### Pagamento garanzie per partecipazioni a gara

<details>

<summary>Avviso di pagamento garanzie per partecipazione a gara</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio:**

C’è un avviso di pagamento intestato a `<nome>` `<cognome>` e relativo a `<causale>`.

Devi pagare: <00,00> €

Entro il: `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Il cittadino che ha presentato domanda di ammissione al bando pubblicato dall’ente.

**Quando inviarlo:** Quando è necessario pagare le spese relative a garanzie previste dal bando.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento.

</details>

{% hint style="info" %}
**Promemoria automatici —&#x20;**<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento garanzie per partecipazione a gara: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Il cittadino che ha presentato domanda di ammissione al bando pubblicato dall’ente.

**Quando inviarlo:** Quando è necessario pagare le spese relative a garanzie previste dal bando.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento.

</details>

### Aggiudicazione

<details>

<summary>Aggiudicazione appalto pubblico</summary>

**🖋 Titolo del messaggio:** Aggiudicazione del bando

🗒 **Testo del messaggio:**

Il `<gg/mm/aaaa>` `<denominazione stazione appaltante>` ha assegnato a `<Ragione sociale>` i lavori relativi a `<nome del bando>` `<riferimento bando>`.

\[Inserire qui passi successivi, da compilare a cura e responsabilità dell'ente]

Nei prossimi giorni riceverai un messaggio in app quando il contratto di appalto sarà pronto per la firma.

Per visualizzare il documento di aggiudicazione, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Il cittadino aggiudicatario dell’appalto.

**Quando inviarlo:** Quando l’ente pubblica l’esito del bando di gara.

**User story:** Come cittadino voglio ricevere aggiornamento sull’esito dei miei bandi.

</details>

<details>

<summary>Selezione non superata</summary>

**🖋 Titolo del messaggio:** Esito del bando `<riferimenti bando>`

🗒 **Testo del messaggio:**

Il `<gg/mm/aaaa>` `<denominazione stazione appaltante>` ha concluso la procedura di selezione per il bando `<oggetto del bando>` `<riferimenti del bando>`.

`<Ragione Sociale>` non ha superato la selezione. Pertanto, non è aggiudicataria dei lavori.

Per visualizzare il documento di aggiudicazione, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Il cittadino che ha partecipato al bando e che non risulta aggiudicatario.

**Quando inviarlo:** Quando l’ente pubblica l’esito del bando di gara.

**User story:** Come cittadino voglio ricevere aggiornamento sull’esito dei miei bandi.

</details>

{% hint style="info" %}
<mark style="color:blue;">**Firma con IO**</mark>

Tramite la funzionalità Firma con IO puoi inviare al destinatario il documento da firmare e permettere la firma direttamente in app. [**Scopri di più**](https://firma.io.italia.it/)

Il seguente messaggio è da utilizzare nei casi di altre modalità di firma e non è necessario quando si utilizza Firma con IO.
{% endhint %}

<details>

<summary>Contratto d'appalto: disponibile per la firma</summary>

:sparkles: <mark style="color:blue;">**Allegati Premium**</mark> — Tramite questa funzionalità Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, puoi allegare documenti all'interno del messaggio.

Questo messaggio è da utilizzare sia per messaggi Premium, sia per messaggi standard. In caso di messaggio standard, **ricorda di eliminare ogni riferimento agli allegati dal corpo del messaggio.**

***

**🖋 Titolo del messaggio:** Il contratto è pronto per la firma

🗒 **Testo del messaggio:**

Il contratto di appalto `<U>` relativo all’assegnazione di `<nome del bando>` a `<Ragione Sociale>` è pronto per la firma.

\[Solo per messaggi Premium con allegato] Puoi trovare in allegato il testo integrale del contratto in formato `<formato>`.

Per visualizzare il contratto, \[visita questo sito]\(URL).

Per prenotare il tuo appuntamento per la firma, \[visita questo sito]\(URL),

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

<mark style="color:blue;">**📎 Allegato Premium:**</mark> `<contratto>`

***

**Destinatari:** Il cittadino aggiudicatario.

**Quando inviarlo:** Quando il contratto di appalto è pronto per la firma.

**User story:** Come cittadino voglio ricevere aggiornamento sull’esito dei miei bandi.

</details>

<details>

<summary>Conferma prenotazione appuntamento</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi dell'appuntamento tramite notifica push.

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per `<oggetto dell’appuntamento>`.

**Dove:** `<indirizzo>`

**Quando:** `<gg/mm/aaaa>` alle `<hh:mm>`

Per ulteriori informazioni, (visita questo sito)\[URL].

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari:** Il cittadino aggiudicatario che ha prenotato un appuntamento per la firma del contratto.

**Quando inviarlo:** Quando l'appuntamento è confermato.

**User story:** Come cittadino voglio ricevere conferma dei miei appuntamenti.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../../../app-io/modelli-servizi/v1.0/.gitbook/assets/IO - Template servizi - Appalti pubblici.xlsx" %}
{% endhint %}
