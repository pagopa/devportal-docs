# Passo carrabile

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la richiesta, rinuncia e variazione di proprietà di un passo carrabile;
* monitorare e gestire tempestivamente le richieste, comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Passo carrabile</td></tr><tr><td><strong>Argomento</strong></td><td>Lavori edilizi, catasto e urbanistica</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda la richiesta, rinuncia e variazione di proprietà di un passo carrabile. </p><p>Tramite IO potrai: </p><ul><li>ricevere comunicazioni e aggiornamenti sulle richieste presentate; </li><li>ricevere avvisi di pagamento e pagarli in app; </li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Richiedi passo carrabile</td></tr></tbody></table>

{% include "../.gitbook/includes/banner-single-sign-on.md" %}

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (136).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Passo carrabile</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Richiesta di voltura, rinnovo, modifica, rinuncia

<details>

<summary>Integrazione documentazione</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio:**

Per elaborare la tua `<richiesta di/variazione di/rinuncia al>` passo carrabile abbiamo bisogno di ricevere entro il `<gg/mm/aaaa>` altri documenti.

Per aggiungere i documenti alla tua richiesta, \[visita questo sito]\(URL).

**🪄 Pulsante:** Aggiungi documenti

***

**Destinatari**: Tutti i cittadini che hanno fatto una richiesta relativa al passo carrabile.

**Quando inviarlo**: Quando l’ente ha bisogno di ulteriori documenti per l’elaborazione della richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta di voltura, rinnovo, modifica o rinuncia: accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio:**

La tua `<richiesta di/variazione di/rinuncia al>` passo carrabile per `<indirizzo>` è stata accolta.

\[Nel caso di voltura] Riceverai un pagamento in app per il cartello di passo carrabile.

\[Nel caso di voltura] Una volta effettuato il pagamento riceverai un messaggio in app quando il cartello sarà pronto per il ritiro.

\[Nel caso di rinuncia] Riceverai un messaggio in app con le istruzioni per la restituzione del cartello.

Per ulteriori informazioni, \[visita questa pagina]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un passo carrabile.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User Story**: Come cittadino voglio ricevere comunicazioni sull’esito della mia richiesta.

</details>

<details>

<summary>Richiesta di voltura, rinnovo, modifica o rinuncia: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio:**

La tua `<richiesta di/variazione di/rinuncia al>` passo carrabile per `<indirizzo>` non è stata accolta.

Per ulteriori informazioni, \[visita questa pagina]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio, che hanno IO e che hanno richiesto un passo carrabile.

**Quando inviarlo**: Quando l’ente rifiuta la richiesta.

**User Story**: Come cittadino voglio ricevere comunicazioni sull’esito della mia richiesta.

</details>

### Pagamento pratica

<details>

<summary>Avviso di pagamento</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio:**

C’è un avviso di pagamento intestato a `<nome>` `<cognome>` e relativo a `<causale>`.

**Devi pagare**: <00,00> €

**Entro il**: `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno richiesto un passo carrabile.

**Quando inviarlo**: Quando, ricevuta la richiesta, è necessario procedere al pagamento perché la pratica prosegua il suo iter.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini, che hanno richiesto un passo carrabile.

**Quanto inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Ritiro o installazione

<details>

<summary>Segnale disponibile per il ritiro</summary>

**🖋 Titolo del messaggio:** Il passo carrabile è pronto per il ritiro

🗒 **Testo del messaggio:**

Dal `<gg/mm/aaaa>` puoi ritirare il passo carrabile richiesto.

**Dove**: `<indirizzo>`

**Quando**: \[inserire qui i giorni e gli orari di apertura dello sportello]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un passo carrabile.

**Quando inviarlo**: Quando il passo carrabile è disponibile il ritiro.

**User story**: Come cittadino vorrei ricevere comunicazione quando è possibile procedere al ritiro del bene richiesto.

</details>

<details>

<summary>Segnale disponibile per l'installazione</summary>

**🖋 Titolo del messaggio:** Installazione del tuo passo carrabile

🗒 **Testo del messaggio:**

Il `<gg/mm/aaaa>` verrà installato il passo carrabile da te richiesto.

**Quando:** dalle `<hh:hh>` alle `<hh:hh>`

**Dove:** `<indirizzo>`

\[Inserire qui ulteriori indicazioni sull'installazione, da compilare a cura e responsabilità dell'ente]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un passo carrabile.

**Quando inviarlo**: Quando il passo carrabile è disponibile per l'installazione.

**User story**: Come cittadino vorrei ricevere comunicazione sull'installazione del passo carrabile richiesto.

</details>

### Rinuncia/restituzione

<details>

<summary>Istruzioni per la restituzione</summary>

**🖋 Titolo del messaggio:** Restituzione del passo carrabile

🗒 **Testo del messaggio:**

Dal `<gg/mm/aaaa>` puoi restituire il cartello di passo carrabile in tuo possesso.

\[Inserire qui istruzioni utili alla riconsegna, da compilare a cura e responsabilità dell'ente]

**Dove**: `<indirizzo>`

**Quando**: \[inserire qui i giorni e gli orari di apertura dello sportello]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari**: Tutti i cittadini che devono restituire un passo carrabile per motivi fine concessione o rinuncia.

**Quando inviarlo**: Quando è necessaria la restituzione.

**User story**: Come cittadino vorrei ricevere comunicazione quando è possibile procedere alla restituzione del bene in comodato d’uso.

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

{% file src="../.gitbook/assets/IO - Template servizi - Passo carrabile.xlsx" %}
{% endhint %}
