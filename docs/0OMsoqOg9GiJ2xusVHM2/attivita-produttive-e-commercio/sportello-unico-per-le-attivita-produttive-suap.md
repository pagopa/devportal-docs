# Sportello Unico per le Attività Produttive (SUAP)

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti le pratiche presentate presso lo Sportello Unico per le Attività Produttive;
* monitorare e gestire tempestivamente le richieste e comunicazioni per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Sportello Unico per le Attività Produttive (SUAP)</td></tr><tr><td><strong>Argomento</strong></td><td>Attività produttive e commercio</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda lo sportello unico per le attività produttive (SUAP), ovvero il punto di contatto tra imprese e istituzioni pubbliche per sbrigare le pratiche relative all’apertura e alla gestione aziendale.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sulle pratiche;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Accedi al portale</td></tr></tbody></table>

{% include "../.gitbook/includes/banner-single-sign-on.md" %}

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (85).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Sportello Unico per le Attività Produttive</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Istruttoria

<details>

<summary>Aggiornamento sullo stato della pratica</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** C'è un aggiornamento sulla tua pratica

🗒 **Testo del messaggio**:

La tua pratica \<nnnn> per \<oggetto della pratica> è \<stato dell’avanzamento>.

Per seguire lo stato della pratica, \[visita questo sito]\(URL).

**🪄 Pulsante**: Accedi al portale

***

**Destinatari**: Il cittadino che ha avviato una pratica presso lo Sportello Unico per le Attività Produttive.

**Quando inviarlo**: Quando ci sono avanzamenti nella pratica da comunicare al richiedente.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia pratica.

</details>

<details>

<summary>Integrazione documentazione</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio:**

Per elaborare la tua pratica \<nnnn> per \<oggetto della pratica> abbiamo bisogno di ricevere entro il \<gg/mm/aaaa> altri documenti.

Consulta il riepilogo della tua pratica, \[visita questo sito]\(URL).

**🪄 Pulsante:** Aggiungi documenti

***

**Destinatari:** Il cittadino che ha avviato una pratica presso lo Sportello Unico per le Attività Produttive.

**Quando inviarlo:** Quando l’ente necessita di integrazione documentale alla richiesta presentata.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia pratica.

</details>

<details>

<summary>Esito pratica</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Esito della tua pratica

🗒 **Testo del messaggio:**

La tua pratica \<nnnn> per \<oggetto della pratica> si è conclusa.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Consulta la pratica

***

**Destinatari:** Il cittadino che ha avviato una pratica presso lo Sportello Unico per le Attività Produttive.

**Quando inviarlo:** Quando l’ente, effettuate le verifiche necessarie, conclude la pratica e comunica l’esito al cittadino.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia pratica.

</details>

### Pagamento spese istruttorie

<details>

<summary>Avviso di pagamento spese istruttorie</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio:**

C'è un avviso da pagare intestato a \<nome> \<cognome> e relativo a \<causale>.

**Devi pagare**: <00,00> €

**Entro il**: \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Il cittadino richiedente e/o il Legale Rappresentante che ha avviato una pratica presso lo Sportello Unico per le Attività Produttive.

**Quando inviarlo:** Quando è necessario effettuare il pagamento.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento spese istruttorie: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Il cittadino richiedente e/o il Legale Rappresentante che ha avviato una pratica presso lo Sportello Unico per le Attività Produttive.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Iscrizione Registro Imprese

<details>

<summary>Avvenuta iscrizione al Registro Imprese</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Iscrizione al Registro Imprese

🗒 **Testo del messaggio:**

\<Ragione Sociale> è ora iscritta al Registro Imprese.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Accedi al portale

***

**Destinatari:** Il cittadino che ha avviato la pratica di iscrizione della propria impresa nel Registro Imprese.

**Quando inviarlo:** Quando l’ente iscrive l’impresa nel Registro Imprese.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia pratica.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Sportello Unico per le Attività Produttive (SUAP).xlsx" %}
{% endhint %}
