# Avvocatura civica

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle avvocate e agli avvocati un unico punto di riferimento per la ricezione delle comunicazioni riguardanti l’iscrizione o alla cancellazione dall’Elenco Speciale del Comune;
* monitorare e gestire tempestivamente le richieste e le comunicazioni per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Avvocatura civica</td></tr><tr><td><strong>Argomento</strong></td><td>Giustizia e legge</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda l’avvocatura civica.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti;</li><li>ricevere eventuali avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Iscriviti all'Elenco Speciale</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../../app-io/modelli-servizi/v1.0/.gitbook/assets/image (14).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Avvocatura civica</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Iscrizione all'Elenco Speciale

<details>

<summary>Integrazione documentazione</summary>

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio**:

Per elaborare la tua domanda di iscrizione all’Elenco Speciale del Comune di `<Comune>` abbiamo bisogno di ricevere entro il `<gg/mm/aaaa>` altri documenti.

Consulta il riepilogo della domanda, \[visita questo sito]\(URL).

**🪄 Pulsante**: Aggiungi documenti

***

**Destinatari:** Gli avvocati e le avvocate che hanno presentato domanda di iscrizione all’Elenco Speciale.

**Quando inviarlo:** Quando l’ente necessita di ulteriore documentazione per verificare i requisiti di iscrizione all’Elenco.

**User story:** Come avvocato o avvocata voglio ricevere aggiornamenti sullo stato di avanzamento della mia domanda.

</details>

<details>

<summary>Domanda di iscrizione: accolta</summary>

**🖋 Titolo del messaggio:** La tua domanda è stata accolta

🗒 **Testo del messaggio:**

La tua domanda di iscrizione all’Elenco Speciale del Comune di `<Comune>` è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Gli avvocati e le avvocate che hanno presentato domanda di iscrizione all’Elenco Speciale.

**Quando inviarlo:** Quando l’ente, verificati i requisiti, accoglie la domanda.

**User story:** Come avvocato o avvocata voglio ricevere aggiornamenti sullo stato di avanzamento della mia domanda.

</details>

<details>

<summary>Domanda di iscrizione: non accolta</summary>

**🖋 Titolo del messaggio:** La tua domanda non è stata accolta

🗒 **Testo del messaggio:**

La tua domanda di iscrizione all’Elenco Speciale del Comune di `<Comune>` non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Gli avvocati e le avvocate che hanno presentato domanda di iscrizione all’Elenco Speciale.

**Quando inviarlo:** Quando l’ente, verificati i requisiti, rigetta la domanda.

**User story:** Come avvocato o avvocata voglio ricevere aggiornamenti sullo stato di avanzamento della mia domanda.

</details>

### Cancellazione attiva dall'Elenco Speciale

<details>

<summary>Domanda di cancellazione: accolta</summary>

**🖋 Titolo del messaggio:** La tua domanda è stata accolta

🗒 **Testo del messaggio:**

La tua domanda di cancellazione dall’Elenco Speciale del Comune di `<Comune>` è stata accolta. Il tuo nominativo non è più presente nell’Elenco.

Per ulteriori informazioni, (visita questo sito)\[URL].

**🪄 Pulsante:** n/a

***

**Destinatari:** Gli avvocati e le avvocate che hanno presentato domanda di cancellazione dall’Elenco Speciale.

**Quando inviarlo:** Quando l’ente accoglie la domanda.

**User story:** Come avvocato o avvocata voglio ricevere aggiornamenti sullo stato di avanzamento della mia domanda.

</details>

<details>

<summary>Domanda di cancellazione: non accolta</summary>

**🖋 Titolo del messaggio:** La tua domanda non è stata accolta

🗒 **Testo del messaggio:**

La tua domanda di cancellazione dall’Elenco Speciale del Comune di `<Comune>` non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Gli avvocati e le avvocate che hanno presentato domanda di cancellazione dall’Elenco Speciale.

**Quando inviarlo:** Quando l’ente rigetta la richiesta.

**User story:** Come avvocato o avvocata voglio ricevere aggiornamenti sullo stato di avanzamento della mia domanda.

</details>

### Cancellazione passiva dall'Elenco Speciale

<details>

<summary>Convocazione per risoluzione</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi dell'appuntamento tramite notifica push.

***

**🖋 Titolo del messaggio:** Sei `<stato convocato>` / `<stata convocata>`

🗒 **Testo del messaggio:**

A seguito dei controlli periodici sugli iscritti all’Elenco Speciale del Comune di `<Comune>`, non sussistono più i requisiti necessari alla tua permanenza in Elenco.

Per verificare una possibile risoluzione, devi recarti presso `<Denominazione Ufficio>`.

**Dove:** `<indirizzo>`

**Quando:** `<gg/mm/aaaa>`; alle `<hh:mm>`

\[Inserire qui ulteriori informazioni utili per la convocazione, da compilare a cura e responsabilità dell'ente]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Gli avvocati e le avvocate che non risultano più in possesso dei requisiti necessari per la permanenza nell’Elenco Speciale.

**Quando inviarlo:** Quando l’ente convoca i professionisti per verificare una possibile soluzione che eviti la cancellazione dall’Elenco.

**User story:** Come avvocato o avvocata voglio ricevere comunicazione delle mie convocazioni presso l’ente.

</details>

<details>

<summary>Cancellazione da Elenco Speciale</summary>

**🖋 Titolo del messaggio:** Cancellazione dall’Elenco Speciale

🗒 **Testo del messaggio:**

La verifica dei tuoi requisiti ha avuto esito negativo. Pertanto, il tuo nominativo è stato cancellato dall’Elenco Speciale del Comune di `<Comune>`.

Potrai presentare nuova domanda di iscrizione una volta in possesso dei requisiti necessari.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Gli avvocati o le avvocate non più in possesso dei requisiti necessari per la permanenza nell’Elenco Speciale.

**Quando inviarlo:** Quando l’ente, svolte le verifiche necessarie, cancella il nominativo dall’Elenco.

**User story:** Come cittadino voglio ricevere aggiornamenti sull’esito delle mie pratiche.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../../app-io/modelli-servizi/v1.0/.gitbook/assets/IO - Template servizi - Avvocatura civica (1).xlsx" %}
{% endhint %}
