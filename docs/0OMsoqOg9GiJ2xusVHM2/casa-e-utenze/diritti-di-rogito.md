# Diritti di rogito

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti i diritti di rogito;
* monitorare e gestire tempestivamente le richieste e le comunicazioni per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Diritti di rogito</td></tr><tr><td><strong>Argomento</strong></td><td>Casa e utenze</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda i diritti di rogito dovuti al Comune.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sui diritti di rogito;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>firmare digitalmente gli atti di rogito in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (113).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Diritti di rogito</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Acquisto bene

<details>

<summary>Informazioni relative al Segretario nominato</summary>

**🖋 Titolo del messaggio:** Scelto il Segretario Comunale

🗒 **Testo del messaggio**:

Il Segretario Comunale scelto per la stesura dell’atto di rogito del \<bene> \<riferimenti bene> è \<nome> \<cognome>.

Riceverai un messaggio quando sarà possibile procedere con la firma.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che, a seguito di una compravendita di un bene di cui il Comune è parte interessata, devono procedere con la firma dell’atto e il pagamento dei diritti di rogito al Comune.

**Quando inviarlo**: Quando l'ente sceglie il Segretario Comunale per la stesura dell'atto di rogito.

**User story**: Come cittadino voglio ricevere comunicazioni riguardo lo stato di avanzamento della pratica

</details>

### Pagamento diritti di rogito

<details>

<summary>Avviso di pagamento diritti di rogito</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C’è un avviso da pagare intestato a \<nome> \<cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che devono pagare diritti di rogito per l’acquisto di un bene di cui il Comune è parte interessata.

**Quando inviarlo**: Quando l'atto è stato redatto dal Segretario Comunale.

**User story**: Come cittadino vorrei ricevere avviso di pagamento quando è possibile pagare i diritti di rogito

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento diritti di rogito: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento relativo ai diritti di rogito per l’acquisto di del \<bene> \<riferimenti del bene> è prossimo alla scadenza.

Se hai già provveduto a pagare l’avviso o se hai richiesto la domiciliazione del pagamento sul conto corrente, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno IO e che devono pagare diritti di rogito per l’acquisto di un bene di cui il Comune è parte interessata.

**Quando inviarlo**: Quando l’avviso di pagamento è prossimo alla scadenza

**User story**: Come cittadino vorrei ricevere promemoria sulla scadenza dei miei avvisi di pagamento

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sollecitare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento diritti di rogito: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento relativo ai diritti di rogito per l’acquisto del \<bene> \<riferimenti del bene> non è stato effettuato entro la scadenza del \<gg/mm/aaaa>.

Se hai già provveduto a pagare l’avviso o se hai richiesto la domiciliazione del pagamento sul conto corrente, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che devono pagare diritti di rogito per l’acquisto di un bene di cui il Comune è parte interessata.

**Quando inviarlo**: Quando la data di scadenza del pagamento è stata superata.

**User story**: Come cittadino voglio ricevere promemoria sulla scadenza dei miei avvisi di pagamento.

</details>

### Elaborazione pratica

<details>

<summary>Avvenuta protocollazione della pratica</summary>

**🖋 Titolo del messaggio:** L’atto è stato protocollato

🗒 **Testo del messaggio**:

Il \<gg/mm/aaaa> abbiamo protocollato l’atto di rogito del \<bene> \<riferimenti del bene> firmato il \<gg/mm/aaaa> da \<nome e cognome>.

Il numero di protocollo è: \<nnnn>

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio, a seguito di una compravendita di un bene di cui il Comune è parte attiva, devono procedere alla firma dell’atto di rogito.

**Quando inviarlo**: Quando l’atto viene protocollato.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento delle mie pratiche.

</details>

### Firma dell'atto

{% include "../.gitbook/includes/banner-firma-con-io.md" %}

<details>

<summary>Atto di rogito: disponibile per la firma</summary>

{% include "../.gitbook/includes/allegati.md" %}

***

**🖋 Titolo del messaggio:** L’atto è pronto per la firma

🗒 **Testo del messaggio**:

L’atto di rogito del \<bene> \<riferimento del bene > è pronto per la firma.

Per visualizzare il documento, \[visita questa pagina]\(URL).

Per prenotare il tuo appuntamento per la firma, \[visita questo sito]\(URL),

Per ulteriori informazioni, \[visita questo sito]\(URL).

\[Solo per messaggi con allegato] Puoi trovare in allegato a questo messaggio l'atto di rogito in formato \<formato>.

**🪄 Pulsante**: n/a

<mark style="color:blue;">**📎 Allegato:**</mark> \<atto di rogito>

***

**Destinatari**: Tutti i cittadini che, a seguito di una compravendita di un bene di cui il Comune è parte attiva, devono firmare l’atto di rogito redatto dal Segretario comunale.

**Quando inviarlo**: Quando l’atto è pronto per la firma

**User story**: Come cittadino voglio ricevere comunicazione quando l’atto è pronto per la firma

</details>

<details>

<summary>Conferma prenotazione appuntamento</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per \<oggetto dell’appuntamento>.

**Dove:** \<indirizzo>

**Quando:** \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, (visita questo sito)\[URL].

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari:** Tutti i cittadini che, a seguito di una compravendita di un bene di cui il Comune è parte attiva, hanno prenotato un appuntamento per la firma dell'atto di rogito.

**Quando inviarlo:** Quando l’appuntamento è confermato.

**User story:** Come cittadino voglio ricevere conferma dei miei appuntamenti.

</details>

### Registrazione contratto

<details>

<summary>Registrazione del contratto effettuata</summary>

**🖋 Titolo del messaggio:** Il contratto è stato registrato

🗒 **Testo del messaggio**:

Il \<gg/mm/aaaa> abbiamo registrato il contratto di compravendita del \<bene> \<riferimenti del bene>.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno effettuato il pagamento dei diritti di rogito.

**Quando inviarlo**: Quando l’ente effettua la registrazione del contratto.

**User story**: Come cittadino vorrei ricevere comunicazione quando il contratto è registrato.

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

{% file src="../.gitbook/assets/IO - Template servizi - Diritti di rogito.xlsx" %}
{% endhint %}
