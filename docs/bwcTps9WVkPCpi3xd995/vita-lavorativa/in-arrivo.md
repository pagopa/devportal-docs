# Bandi di concorso

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini e le cittadine un riferimento per la ricezione delle comunicazioni riguardanti i bandi di concorso del Comune;
* monitorare e gestire tempestivamente le richieste e le comunicazioni per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/cose-io-e-qual-e-il-suo-obiettivo#perche-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Bandi di concorso</td></tr><tr><td><strong>Argomento</strong></td><td>Vita lavorativa</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda i bandi di concorso.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sui bandi di concorso;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Accedi al portale</td></tr></tbody></table>

{% include "../../0OMsoqOg9GiJ2xusVHM2/.gitbook/includes/banner-single-sign-on.md" %}

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (82).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Bandi di concorso</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Pubblicazione bando

<details>

<summary>Pubblicazione bando</summary>

{% include "../../0OMsoqOg9GiJ2xusVHM2/.gitbook/includes/allegati+sso.md" %}

***

**🖋 Titolo del messaggio:** Pubblicato un nuovo bando

🗒 **Testo del messaggio**:

Dal `<gg/mm/aaaa>` è possibile fare domanda di partecipazione al bando per `<oggetto del bando>`.

Per consultare i criteri di assegnazione e fare domanda, \[visita questo sito]\(URL).

\[Solo per messaggi con allegato] Trovi il testo completo del bando in allegato a questo messaggio.

**🪄 Pulsante**: Fai domanda

<mark style="color:blue;">**📎 Allegato:**</mark> `<testo integrale del bando>`

***

**Destinatari**: I cittadini che hanno manifestato interesse verso il servizio.

**Quando inviarlo**: Quando l’ente pubblica un nuovo bando di concorso.

**User story**: Come cittadino voglio essere informato sull’apertura di bandi di concorso.

</details>

<details>

<summary>Aggiornamento bando</summary>

{% include "../../0OMsoqOg9GiJ2xusVHM2/.gitbook/includes/allegati+sso.md" %}

***

**🖋 Titolo del messaggio:** Il bando è stato aggiornato

🗒 **Testo del messaggio:**

Il `<gg/mm/aaaa>` è stato aggiornato il bando per `<oggetto del bando>`.

Per visualizzare il bando aggiornato, \[visita questo sito]\(URL).

\[Solo per messaggi con allegato] Trovi il testo completo del bando aggiornato in allegato a questo messaggio.

**🪄 Pulsante:** Fai domanda

<mark style="color:blue;">**📎 Allegato:**</mark> `<testo integrale del bando>`

***

**Destinatari:** I cittadini che hanno manifestato interesse verso il servizio.

**Quando inviarlo:** Quando il bando subisce variazioni.

**User story:** Come cittadino voglio ricevere aggiornamenti se i bandi di mio interesse subiscono variazioni.

</details>

### Gestione della domanda

<details>

<summary>Presa in carico della domanda</summary>

**🖋 Titolo del messaggio:** La tua domanda è stata presa in carico

🗒 **Testo del messaggio:**

La tua domanda di partecipazione al bando per `<oggetto del bando>` è stata presa in carico.

Il numero di protocollo è `<nnnn>`.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Il cittadino che ha presentato domanda di partecipazione al bando di concorso pubblicato dall’ente.

**Quando inviarlo:** Quando la domanda viene presa in carico e protocollata.

**User story:** Come cittadino voglio essere informato sullo stato di avanzamento della mia domanda.

</details>

### Processo di selezione

Se è prevista una prova pre-selettiva o una convocazione per una prova, si possono predisporre i seguenti messaggi:

<details>

<summary>Convocazione prova pre-selettiva</summary>

**🖋 Titolo del messaggio:** Convocazione prova pre-selettiva

🗒 **Testo del messaggio:**

Sei convocata/o alla prova pre-selettiva per il bando `<oggetto del bando>`.

**Quando:** `<gg/mm/aaaa>` dalle `<hh:mm>` alle `<hh:mm>`

**Dove:** `<sala>`; `<piano>`; `<edificio>`; `<indirizzo>`

**Cosa portare:** \[indicazione sui documenti da portare]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Il cittadino che ha presentato domanda di partecipazione al bando di concorso pubblicato dall’ente.

**Quando inviarlo:** Quando l’ente convoca i candidati per la prova pre-selettiva.

**User story:** Come cittadino voglio ricevere comunicazione delle convocazioni relative alla mia partecipazione a bandi di concorso pubblicate dall'ente.

</details>

<details>

<summary>Esito prova pre-selettiva</summary>

**🖋 Titolo del messaggio:** Esito prova pre-selettiva

🗒 **Testo del messaggio:**

In data `<gg/mm/aaaa>` è stato pubblicato l'esito della tua prova pre-selettiva per il bando `<oggetto del bando>`.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Il cittadino che ha presentato domanda di partecipazione al bando di concorso pubblicato dall’ente.

**Quando inviarlo:** Quando l’ente deve comunicare ai candidati l'esito della prova pre-selettiva.

**User story:** Come cittadino voglio essere informato sull'esito delle prove relative alla mia partecipazione a bandi di concorso pubblicate dall'ente.

</details>

<details>

<summary>Convocazione per prova scritta e/o orale</summary>

**🖋 Titolo del messaggio:** Convocazione prova `<scritta e/o orale>`

🗒 **Testo del messaggio:**

Sei `<convocata/convocato>` alla prova `<scritta e/o orale>` per il bando `<oggetto del bando>`.

**Quando:** `<gg/mm/aaaa>` dalle `<hh:mm>` alle `<hh:mm>`

**Dove:** `<sala>`; `<piano>`; `<edificio>`; `<indirizzo>`

**Cosa portare:** \[indicazione sui documenti identificativi da portare]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Il cittadino che ha presentato domanda di partecipazione al bando di concorso pubblicato dall’ente.

**Quando inviarlo:** Quando l’ente convoca i candidati per la scritta e/o orale.

**User story:** Come cittadino voglio ricevere comunicazione sulle convocazioni relative alla mia partecipazione a bandi di concorso pubblicate dall'ente.

</details>

### Esito del bando

<details>

<summary>Pubblicazione graduatoria</summary>

{% include "../../0OMsoqOg9GiJ2xusVHM2/.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Pubblicata la graduatoria

🗒 **Testo del messaggio:**

È disponibile la graduatoria di ammissione al bando per `<oggetto del bando>`.

Per visualizzare la tua posizione in graduatoria, \[visita questo sito]\(URL).

Se vuoi rinunciare alla tua posizione, hai tempo fino al `<gg/mm/aaaa>`.

Per fare domanda di rinuncia, \[visita questo sito]\(URL).

**🪄 Pulsante:** Vai alla graduatoria

***

**Destinatari:** Il cittadino che ha partecipato al bando di concorso.

**Quando inviarlo:** Quando l’ente pubblica l’esito del bando di concorso.

**User story:** Come cittadino voglio ricevere aggiornamento sull’esito dei miei bandi.

</details>

### Rinuncia

<details>

<summary>Rinuncia: accolta</summary>

**🖋 Titolo del messaggio:** Hai rinunciato alla tua posizione

🗒 **Testo del messaggio:**

La tua richiesta di rinuncia alla tua posizione in graduatoria per `<oggetto del bando>` è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Il cittadino che ha inviato richiesta di rinuncia alla propria posizione in graduatoria.

**Quando inviarlo:** Quando l’ente accoglie la richiesta.

**User story:** Come cittadino voglio ricevere aggiornamento sullo stato della mia richiesta.

</details>

<details>

<summary>Avviso di pagamento more per rinuncia fuori dai tempi stabiliti</summary>

{% include "../../0OMsoqOg9GiJ2xusVHM2/.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio:**

La tua richiesta di rinuncia alla tua posizione in graduatoria per `<oggetto del bando>` è arrivata oltre il termine previsto. In questo caso è prevista una penale.

**Devi pagare**: <00,00> €

**Entro il**: `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Il cittadino che ha inviato richiesta di rinuncia alla propria posizione in graduatoria oltre il termine previsto.

**Quando inviarlo:** Quando l’ente rigetta la richiesta e richiede il pagamento della penale prevista.

**User story:** Come cittadino voglio ricevere aggiornamento sullo stato della mia richiesta.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Bandi di concorso.xlsx" %}
{% endhint %}
