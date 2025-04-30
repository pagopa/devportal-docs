# Traffico

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti la viabilità sul territorio del Comune;
* monitorare e gestire tempestivamente le richieste, le comunicazioni e i pagamenti per l'erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Traffico</td></tr><tr><td><strong>Argomento</strong></td><td>Mobilità e trasporti</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio ti invia informazioni sul traffico e su eventuali modifiche della viabilità nel territorio del Comune.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Richiedi modifica viabilità</td></tr></tbody></table>

{% include "../.gitbook/includes/banner-single-sign-on.md" %}

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (123).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Traffico</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

## Avviso di modifica viabilità

### Avviso alla cittadinanza

<details>

<summary>Modifica della viabilità per un giorno</summary>

**🖋 Titolo del messaggio:** Modifica viabilità in \<via/piazza/quartiere>

🗒 **Testo del messaggio**:

Il \<gg/mm/aaaa> dalle \<hh:mm> alle \<hh:mm>, la viabilità di \<via/piazza/quartiere> subirà queste variazioni:

\[Inserire qui indicazioni sulle variazioni alla viabilità, da completare a cura e responsabilità dell'ente]

Per leggere l’ordinanza completa, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica interessata dalla modifica della viabilità.

**Quando inviarlo**: Quando l’ente pubblica un’ordinanza di modifica viabilità.

**User story**: Come cittadino voglio essere informato sulle variazioni della viabilità che interessano la mia zona.

</details>

<details>

<summary>Modifica della viabilità per periodo</summary>

**🖋 Titolo del messaggio:** Modifica viabilità in \<via/piazza/quartiere>

🗒 **Testo del messaggio**:

Dal \<gg/mm/aaaa> al \<gg/mm/aaaa> la viabilità di \<via/piazza/quartiere> subirà queste variazioni:

\[Inserire qui indicazioni sulle variazioni alla viabilità, da completare a cura e responsabilità dell'ente]

Per leggere l’ordinanza completa, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica interessata dalla modifica della viabilità.

**Quando inviarlo**: Quando l’ente pubblica un’ordinanza di modifica viabilità.

**User story**: Come cittadino voglio essere informato sulle variazioni della viabilità che interessano la mia zona.

</details>

***

## Richiesta di ordinanza per modifica viabilità

### Elaborazione della richiesta

<details>

<summary>Richiesta di modifica alla viabilità: integrazione documentazione</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio**:

Per elaborare la tua richiesta di modifica alla viabilità, abbiamo bisogno di ricevere entro il \<gg/mm/aaaa> altri documenti.

Per aggiungere i documenti alla tua richiesta, \[visita questo sito]\(URL).

Per consultare il riepilogo della richiesta, \[visita questo sito]\(URL).\
\
**🪄 Pulsante**: Aggiungi documenti

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta per un’ordinanza di modifica viabilità accettata dall’ente.

**Quando inviarlo**: Quando l’ente, durante la valutazione della richiesta, necessita di ulteriore documentazione.

**User story**: Come cittadino, voglio poter garantire la corretta prosecuzione della mia richiesta.

</details>

<details>

<summary>Richiesta di modifica alla viabilità: accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio:**

La tua richiesta di modifica alla viabilità è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta per un’ordinanza di modifica viabilità accettata dall’ente.

**Quando inviarlo:** Quando l’ente accoglie la richiesta.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta di modifica alla viabilità: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di modifica alla viabilità non è stata accolta.

Per maggiori informazioni, contatta \<denominazione ufficio> tramite \<canale>.

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta per un’ordinanza di modifica viabilità accettata dall’ente.

**Quando inviarlo**: Quando l’ente non accoglie la richiesta.

**User story**: Come cittadino voglio ricevere comunicazione sull’esito della mia richiesta.

</details>

### Pagamento post-accettazione della richiesta

<details>

<summary>Avviso di pagamento spese di servizio</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:\
\
C'è un avviso da pagare intestato a \<nome cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto ordinanza per modifica della viabilità per la quale è necessario procedere al pagamento.

**Quando inviarlo**: Quando è necessario che il cittadino richiedente provveda al pagamento.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile effettuare i pagamenti.

</details>

<details>

<summary>Pagamenti insoluti</summary>

**🖋 Titolo del messaggio:** Richiesta modifica viabilità è bloccata da pagamenti insoluti

🗒 **Testo del messaggio**:

Risultano pagamenti insoluti a carico di \<nome e cognome> e relative a \<causale>.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio e che devono pagare l’ente.

**Quando inviarlo**: Quando risultano pagamenti insoluti a carico del cittadino.

**User story**: Come cittadino voglio ricevere avvisi su pagamenti insoluti a mio carico.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento spese di servizio: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto modifica di viabilità accolta dall’ente.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere promemoria dei pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sollecitare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento spese di servizio: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento per \<causale> è scaduto il \<gg/mm/aaaa>.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto modifica di viabilità accolta dall’ente.

**Quando inviarlo**: Quando il pagamento non è stato effettuato nei termini previsti.

**User story**: Come cittadino voglio ricevere comunicazione di pagamenti non effettuati.

</details>

### Emissione ordinanza

<details>

<summary>Avvenuta pubblicazione dell’ordinanza richiesta</summary>

**🖋 Titolo del messaggio:** Pubblicata l'ordinanza di modifica alla viabilità

🗒 **Testo del messaggio**:

Il \<gg/mm/aaaa> abbiamo pubblicato l’ordinanza di modifica alla viabilità da te richiesta.

Per vedere i dettagli dell’ordinanza, \[visita questo sito]\(URL).

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto modifica di viabilità presa in carico dall’ente.

**Quando inviarlo**: Quando l’ente pubblica l’ordinanza richiesta dal cittadino.

**User story**: Come cittadino voglio ricevere comunicazione quando l’ordinanza di modifica viabilità da me richiesta viene pubblicata dall’ente.

</details>

***

{% hint style="success" %}
**Lo sapevi?**\
IO è integrata con SEND - Servizio Notifiche Digitale, per l'invio di comunicazioni a valore legale.

[**Scopri di più su SEND**](https://notifichedigitali.pagopa.it/) [**->**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali)
{% endhint %}

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Traffico (1).xlsx" %}
{% endhint %}
