# Alloggi sociali

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti l’assegnazione di alloggi sociali nel Comune;
* monitorare e gestire tempestivamente le richieste e comunicazioni per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Alloggi sociali</td></tr><tr><td><strong>Argomento</strong></td><td>Benessere sociale</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda la richiesta e l’assegnazione di alloggi sociali.</p><p>Tramite IO potrai:</p><ul><li>ricevere informazioni sull’apertura dei bandi e sulle modalità di presentazione della domanda e sulle graduatorie;</li><li>ricevere eventuali avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Prenota appuntamento</td></tr></tbody></table>

{% include "../.gitbook/includes/banner-single-sign-on.md" %}

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (87).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Alloggi sociali</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Pubblicazione del bando

<details>

<summary>Pubblicazione bando</summary>

{% include "../.gitbook/includes/allegati+sso.md" %}

***

**🖋 Titolo del messaggio:** Pubblicato un nuovo bando

🗒 **Testo del messaggio**:

Il `<gg/mm/aaaa>` è stato pubblicato il bando per l’assegnazione di alloggi nel Comune di `<Comune>`.

Se vuoi presentare domanda di partecipazione, puoi prenotare un appuntamento presso `<denominazione sportello>` o inviare la modulistica tramite `<canale>`.

Per consultare i criteri di assegnazione e scaricare la modulistica, \[visita questo sito]\(URL).

\[Solo per messaggi con allegato] Trovi il testo completo del bando in allegato a questo messaggio.

**🪄 Pulsante**: Vai ai bandi aperti

<mark style="color:blue;">**📎 Allegato:**</mark> `<testo integrale del bando>`

***

**Destinatari**: I cittadini residenti nell’area di azione del servizio che hanno manifestato interesse verso il servizio.

**Quando inviarlo**: Quando l’ente pubblica un nuovo bando.

**User story**: Come cittadino voglio ricevere comunicazione quando l’ente pubblica un nuovo bando per l’assegnazione di alloggi sociali.

</details>

### Prenotazione appuntamento

<details>

<summary>Conferma prenotazione appuntamento</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per `<oggetto dell’appuntamento>`.

Il numero della prenotazione è `<nnnn>`.

**Dove**: `<indirizzo>`

**Quando**: il `<gg/mm/aaaa>` alle `<hh:mm>`

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari:** I cittadini residenti nell’area di azione del servizio che hanno prenotato un appuntamento per presentare domanda di assegnazione di alloggi sociali.

**Quando inviarlo:** Quando l’appuntamento è confermato.

**User story:** Come cittadino voglio ricevere una conferma quando l’appuntamento viene confermato dall’ente.

</details>

### Pagamento

<details>

<summary>Avviso di pagamento spese di segreteria</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio:**

C'è un avviso da pagare intestato a `<nome>` `<cognome>` e relativo a `<causale>`.

**Devi pagare**: <00,00> €

**Entro il**: `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** I cittadini residenti nell’area di azione del servizio che hanno presentato domanda di assegnazione di alloggio sociale.

**Quando inviarlo:** Quando è necessario effettuare il pagamento delle spese relative alla pratica.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento spese di segreteria: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** I cittadini residenti nell’area di azione del servizio che hanno presentato domanda di assegnazione di alloggio sociale.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Protocollazione della domanda

<details>

<summary>Conferma di presa in carico della domanda</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** La tua domanda è stata presa in carico

🗒 **Testo del messaggio:**

La tua domanda è stata presa in carico.

Il numero di protocollo è: `<nnnn>`

Riceverai un messaggio in app che ti avverte dell’apertura del periodo di assegnazione degli alloggi. Entro la data che ti verrà indicata, dovrai presentare la tua domanda.

Per vedere la tua domanda, \[visita questo sito]\(URL).

**🪄 Pulsante:** Consulta la pratica

***

**Destinatari:** I cittadini che hanno presentato domanda di assegnazione di alloggio sociale.

**Quando inviarlo:** Quando l’ente prende in carico la domanda e assegna un numero di protocollo.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia domanda.

</details>

### Analisi della domanda

<details>

<summary>Integrazione documentazione</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio:**

Per elaborare la tua domanda abbiamo bisogno di ricevere entro il `<gg/mm/aaaa>` altri documenti.

Consulta il riepilogo della tua domanda, \[visita questo sito]\(URL).

**🪄 Pulsante:** Accedi al portale

***

**Destinatari:** Il cittadino che ha presentato domanda di assegnazione di alloggio sociale.

**Quando inviarlo:** Quando l’ente necessita di integrazione documentale alla domanda presentata.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato della mia domanda.

</details>

### Apertura assegnazione alloggi

<details>

<summary>Apertura assegnazione alloggi</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Apertura assegnazione alloggi

🗒 **Testo del messaggio:**

Dal `<gg/mm/aaaa>` è possibile presentare domanda di assegnazione di alloggi nel Comune di `<Comune>`.

Hai tempo fino al `<gg/mm/aaaa>`.

Per consultare i criteri di assegnazione e presentare domanda, \[visita questo sito]\(URL).

**🪄 Pulsante:** Fai domanda

***

**Destinatari:** Tutti i cittadini che hanno partecipato ad un bando per l'assegnazione alloggi.

**Quando inviarlo:** Quando l’ente apre la finestra di assegnazione di alloggi sociali.

**User story:** Come cittadino voglio ricevere comunicazione quando è aperta la finestra di assegnazione di alloggi sociali.

</details>

### Pubblicazione graduatoria provvisoria

<details>

<summary>Pubblicazione graduatoria provvisoria</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Pubblicata la graduatoria provvisoria

🗒 **Testo del messaggio:**

È disponibile la graduatoria provvisoria per l’assegnazione di alloggi sociali nel Comune di `<Comune>`.

Per visualizzare la tua posizione in graduatoria \[visita questo sito]\(URL).

**🪄 Pulsante:** Vai alla graduatoria

***

**Destinatari:** Tutti i cittadini che hanno fatto domanda di assegnazione di alloggio sociale.

**Quando inviarlo:** Quando l’ente pubblica la graduatoria provvisoria.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato della mia domanda.

</details>

### Pubblicazione graduatoria definitiva

<details>

<summary>Pubblicazione graduatoria definitiva</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Pubblicata la graduatoria definitiva

🗒 **Testo del messaggio:**

È disponibile la graduatoria definitiva per l’assegnazione di alloggi sociali nel Comune di `<Comune>`.

Per visualizzare la tua posizione in graduatoria \[visita questo sito]\(URL).

**🪄 Pulsante:** Vai alla graduatoria

***

**Destinatari:** Tutti i cittadini che hanno fatto domanda di assegnazione di alloggio sociale.

**Quando inviarlo:** Quando l’ente pubblica la graduatoria definitiva.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato della mia domanda.

</details>

### Assegnazione definitiva dell'alloggio

<details>

<summary>Assegnazione definitiva: dettagli</summary>

**🖋 Titolo del messaggio:** Dettagli della tua assegnazione

🗒 **Testo del messaggio:**

Dal `<gg/mm/aaaa>` l'alloggio sociale in `<indirizzo>` è assegnato a te.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** I cittadini assegnatari di alloggio sociale.

**Quando inviarlo:** Quando l’ente deve comunicare i dettagli dell'assegnazione.

**User story:** Come cittadino voglio ricevere informazioni dettagliate sulla mia assegnazione di alloggio sociale.

</details>

{% include "../.gitbook/includes/banner-firma-con-io.md" %}

<details>

<summary>Contratto di alloggio: disponibile per la firma</summary>

{% include "../.gitbook/includes/allegati.md" %}

***

**🖋 Titolo del messaggio:** Il contratto è pronto per la firma

🗒 **Testo del messaggio:**

Il contratto di locazione per l’alloggio `<riferimento alloggio>` assegnato in `<indirizzo>` è pronto per la firma.

Per prenotare l'appuntamento per la firma, \[visita questo sito]\(URL).

\[Solo per messaggi con allegato] Puoi trovare in allegato il testo integrale del contratto in formato `<formato>`.

Per scaricare il contratto, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

<mark style="color:blue;">**📎 Allegato:**</mark> `<contratto>`

***

**Destinatari:** Il cittadino assegnatario di alloggio sociale.

**Quando inviarlo:** Quando il contratto è disponibile per la firma.

**User story:** Come cittadino voglio ricevere comunicazione quando il contratto di locazione dell’alloggio assegnato è pronto per la firma.

</details>

<details>

<summary>Conferma prenotazione appuntamento</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per `<oggetto dell’appuntamento>`.

Il numero della prenotazione è: `<nnnn>`.

**Dove:** `<indirizzo>`

**Quando:** `<gg/mm/aaaa>` alle `<hh:mm>`

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari:** Gli assegnatari di alloggi sociali che hanno prenotato un appuntamento per la firma del contratto.

**Quando inviarlo:** Quando l’appuntamento è confermato.

**User story:** Come cittadino voglio ricevere conferma dei miei appuntamenti.

</details>

### Pagamento

<details>

<summary>Avviso di pagamento canone</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio:**

C'è un avviso da pagare intestato a `<nome>` `<cognome>` e relativo a `<causale>`.

**Devi pagare:** <00,00> €

**Entro il:** `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Il cittadino intestatario dell’alloggio sociale.

**Quando inviarlo:** Quando è necessario effettuare il pagamento del canone.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento canone: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Il cittadino beneficiario dell’alloggio sociale.

**Quando inviarlo:** Quando il pagamento del canone è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sollecitare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento canone: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio:**

Il tuo pagamento relativo a `<causale>` è scaduto il `<gg/mm/aaaa>`.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Il cittadino beneficiario dell’alloggio sociale.

**Quando inviarlo:** Quando il pagamento del canone non risulta effettuato superata la data di scadenza.

**User story:** Come cittadino vorrei ricevere promemoria sulla scadenza dei miei avvisi di pagamento.

</details>

***

{% hint style="success" %}
**Lo sapevi?**\
IO è integrata con SEND - Servizio Notifiche Digitale, per l'invio di comunicazioni a valore legale.

[**Scopri di più su SEND**](https://notifichedigitali.pagopa.it/) [**-->**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali)
{% endhint %}

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Alloggi sociali.xlsx" %}
{% endhint %}
