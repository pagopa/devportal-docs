# Numeri civici

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti l’assegnazione, la verifica o la soppressione di numeri civici nel territorio comunale;
* monitorare e gestire tempestivamente le richieste e le comunicazioni per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="375"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Numeri civici</td></tr><tr><td><strong>Argomento</strong></td><td>Servizi anagrafici e civici</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda l’assegnazione e la verifica dei numeri civici a edifici di nuova costruzione o che ne sono sprovvisti.</p><p>Tramite IO potrai:</p><ul><li>ricevere aggiornamenti sulle richieste presentate;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Fai richiesta</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../../app-io/modelli-servizi/v1.0/.gitbook/assets/Servizi anagrafici_Numeri civici.png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Numeri civici</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Presentazione richiesta di assegnazione

<details>

<summary>Integrazione documentazione</summary>

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio**:

Per elaborare la tua richiesta, abbiamo bisogno di ricevere entro il `<gg/mm/aaaa>` altri documenti.

Consulta il riepilogo della richiesta, \[visita questo sito]\(URL).

**🪄 Pulsante**: Aggiungi documenti

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di numero civico.

**Quando inviarlo**: Quando l’ente necessita di integrazione documentale alla richiesta presentata.

**User story**: Come cittadino voglio ricevere comunicazione sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta numero civico accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di assegnazione di numero civico in `<indirizzo>` è stata accolta.

Per procedere al ritiro, dovrai effettuare il pagamento entro il `<gg/mm/aaaa>`.

Nei prossimi giorni riceverai un messaggio in app con l’avviso di pagamento.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di numero civico.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User story**: Come cittadino voglio ricevere comunicazione sull’esito della mia richiesta.

</details>

<details>

<summary>Richiesta numero civico non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di assegnazione di numero civico in `<indirizzo>` non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di numero civico.

**Quando inviarlo**: Quando l’ente non accoglie la richiesta.

**User story**: Come cittadino voglio ricevere comunicazione sull’esito della mia richiesta.

</details>

### Pagamento

<details>

<summary>Avviso di pagamento spese di servizio</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C'è un avviso da pagare intestato a `<nome cognome>` e relativo a `<causale>`.

**Devi pagare:** <00,00> €

**Entro il:** `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di numero civico.

**Quando inviarlo**: Quando è richiesto il pagamento per il ritiro del numero civico.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento.

</details>

{% hint style="info" %}
**Promemoria automatici —&#x20;**<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento spese di servizio: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di numero civico.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Ritiro certificazione

<details>

<summary>Conferma appuntamento</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi dell'appuntamento tramite notifica push.

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio**:

Hai prenotato un appuntamento per `<oggetto dell’appuntamento>`.

Il numero della prenotazione è: `<nnnn>`.

**Dove**: `<indirizzo>`

**Quando**: \[inserire giorni e orari di apertura dello sportello]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: Disdici appuntamento

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno fatto richiesta di numero civico.

**Quando inviarlo**: Quando l’appuntamento è confermato.

**User story**: Come cittadino voglio ricevere una conferma quando l’appuntamento viene confermato dall’ente.

</details>

### Presentazione richiesta di cessazione/soppressione

<details>

<summary>Integrazione documentazione</summary>

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio**:

Per elaborare la tua richiesta, abbiamo bisogno di ricevere entro il `<gg/mm/aaaa>`altri documenti.

Consulta il riepilogo della tua richiesta, \[visita questo sito]\(URL).

**🪄 Pulsante**: Aggiungi documenti

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di cessazione o soppressione del numero civico.

**Quando inviarlo**: Quando l’ente necessita di integrazione documentale alla richiesta presentata.

**User story**: Come cittadino voglio ricevere comunicazione sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta di cessazione/soppressione numero civico accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di `<cessazione/soppressione>` del numero civico in è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di cessazione o soppressione del numero civico.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User story**: Come cittadino voglio ricevere comunicazione sull’esito della mia richiesta.

</details>

<details>

<summary>Richiesta di cessazione/soppressione numero civico non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di `<cessazione/soppressione>` del numero civico in `<indirizzo>` non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di cessazione o soppressione del numero civico.

**Quando inviarlo**: Quando l’ente non accoglie la richiesta.

**User story**: Come cittadino voglio ricevere comunicazione sull’esito della mia richiesta.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../../app-io/modelli-servizi/v1.0/.gitbook/assets/IO - Template servizi - Numeri civici (1).xlsx" %}
{% endhint %}
