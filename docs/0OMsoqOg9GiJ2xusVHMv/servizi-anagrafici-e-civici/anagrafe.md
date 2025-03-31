# Anagrafe

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti i servizi anagrafici;
* monitorare e gestire tempestivamente le richieste, comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Anagrafe</td></tr><tr><td><strong>Argomento</strong></td><td>Servizi anagrafici e civici</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio ti invia informazioni sulle pratiche anagrafiche, sul registro della popolazione, sulle autenticazioni e sulle certificazioni.</p><p></p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sulle pratiche presentate;</li><li>ricevere comunicazioni su autentiche, atti notori e richieste di certificati;</li><li>ricevere comunicazioni e aggiornamenti sugli appuntamenti;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Vai alla modulistica</td></tr></tbody></table>

{% include "../.gitbook/includes/banner-single-sign-on.md" %}

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (96).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Anagrafe</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Scadenza documenti

<details>

<summary>Sollecito rinnovo</summary>

**🖋 Titolo del messaggio:** Hai un documento in scadenza

🗒 **Testo del messaggio**:&#x20;

Il tuo documento \<tipo documento> sta per scadere.

Per il rinnovo, dovrai prendere appuntamento presso \<denominazione ufficio>.

Per prenotare il tuo appuntamento, \[visita questo sito]\(URL).

**🪄 Pulsante**: Prenota appuntamento

***

**Destinatari**: Tutti gli utenti con documenti anagrafici prossimi alla scadenza nell’area geografica di azione del servizio.&#x20;

**Quando inviarlo**: Quando il documento è prossimo alla scadenza.

**User story**: Come utente voglio ricevere comunicazione circa la scadenza dei miei documenti anagrafici.

</details>

### Prenotazione appuntamento

<details>

<summary>Conferma appuntamento</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per \<oggetto dell’appuntamento>.

Il numero della prenotazione è: \<nnnn>.

**Dove**: \<indirizzo>

**Quando**: \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno richiesto un appuntamento per rinnovo documento anagrafico.

**Quando inviarlo:** Quando l’appuntamento è confermato.

**User story:** Come cittadino voglio ricevere conferma dei miei appuntamenti.

</details>

<details>

<summary>Avviso di pagamento spese di servizio</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio:**

C’è un avviso da pagare intestato a \<nome> \<cognome> e relativo a \<causale>.

**Devi pagare**: <00,00> €

**Entro il**: \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)&#x20;

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno richiesto documenti anagrafici a pagamento.

**Quando inviarlo:** Quando è richiesto il pagamento per documenti anagrafici.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento spese di servizio: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)&#x20;

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno IO e che hanno un avviso di pagamento per documenti anagrafici

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Analisi documentazione

<details>

<summary>Integrazione documentazione</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio:**

Per elaborare la tua richiesta di rinnovo per \<tipo documento> al servizio \<tipologia di servizio> abbiamo bisogno di ricevere entro il \<gg/mm/aaaa> altri documenti.&#x20;

Consulta il riepilogo della richiesta<mark style="color:purple;">,</mark>\[visita questo sito]\(URL).

**🪄 Pulsante:** Aggiungi documenti

***

**Destinatari:** Utente che ha presentato richiesta per documenti anagrafici.

**Quando inviarlo:** Quando l’ente, durante la valutazione della richiesta, evidenzia lacune nella documentazione necessaria.

**User story:** Come utente, vorrei integrare la richiesta con i documenti richiesti.

</details>

<details>

<summary>Richiesta documenti anagrafici: accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio:**

La tua richiesta per \<tipo documento> è stata accolta.

\[Se previsto] Riceverai un messaggio su app IO quando i documenti saranno pronti per il ritiro.

Per informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta per documenti anagrafici.

**Quando inviarlo:** Quando l’ente accoglie la richiesta.

**User Story:** Come cittadino voglio ricevere comunicazioni sull’esito della mia richiesta.

</details>

<details>

<summary>Richiesta documenti anagrafici: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio:**

La tua richiesta per \<tipo documento> non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta per documenti anagrafici.

**Quando inviarlo:** Quando l’ente rifiuta la richiesta.

**User Story:** Come cittadino voglio ricevere comunicazioni sull’esito della mia richiesta.

</details>

### Completamento della procedura

<details>

<summary>Chiusura della pratica e passi successivi</summary>

L'invio di questo messaggio serve a comunicare al cittadino i passi successivi alla chiusura della pratica. **Se la chiusura della pratica non implica alcuna azione successiva, consigliamo di non inviare questo messaggio.**

***

**🖋 Titolo del messaggio:** La tua richiesta è stata chiusa

🗒 **Testo del messaggio**:

Il \<gg/mm/aaaa> la tua richiesta \<codice> è stata chiusa.

\[Inserire qui ulteriori passi necessari per il cittadino, da completare a cura e responsabilità dell'ente]

Per informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno inviato una richiesta per documenti anagrafici.

**Quando inviarlo:** Quando l’ente chiude la pratica ed è necessario comunicare al cittadino ulteriori azioni da compiere.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato della mia pratica.

</details>

<details>

<summary>Documenti disponibili per la visione o il ritiro</summary>

**🖋 Titolo del messaggio:** Il tuo documento è pronto / I tuoi documenti sono pronti

🗒 **Testo del messaggio:**

Dal \<gg/mm/aaaa> puoi \<ritirare/visionare> i documenti richiesti.

**Dove**: \<indirizzo>

**Quando**: \[Inserire qui i giorni e gli orari di apertura dello sportello]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio e hanno richiesto documenti anagrafici.

**Quando inviarlo:** Quando sono disponibili i documenti per visione/ritiro.

**User story:** Come cittadino vorrei ricevere comunicazione quando è possibile procedere al ritiro/visione dei documenti richiesti.

</details>

<details>

<summary>Annullamento della richiesta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata annullata

🗒 **Testo del messaggio**:

Il \<gg/mm/aaaa> la tua richiesta \<oggetto> è stata annullata.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno inviato una richiesta per documenti anagrafici.

**Quando inviarlo:** Quando la richiesta decade per impossibilità dell'ente di procedere con la pratica.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato della mia pratica.

</details>

***

{% hint style="success" %}
**Lo sapevi?**\
IO è integrata con SEND - Servizio Notifiche Digitale, per l'invio di comunicazioni a valore legale.

[**Scopri di più su SEND**](https://notifichedigitali.pagopa.it/) [**->**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali)
{% endhint %}

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.&#x20;

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Anagrafe.xlsx" %}
{% endhint %}
