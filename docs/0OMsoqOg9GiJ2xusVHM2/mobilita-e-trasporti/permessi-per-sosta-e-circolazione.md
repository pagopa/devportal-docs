# Permessi per sosta e circolazione

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazione riguardanti il rilascio dei permessi di sosta e circolazione nelle aree a sosta e traffico limitato e le eventuali modifiche a tali aree;
* monitorare e gestire tempestivamente le richieste, comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/cose-io-e-qual-e-il-suo-obiettivo#perche-integrarsi-con-io)

## Scheda del servizio

| **Nome servizio**            | Permessi per sosta e circolazione                                                                                                                                                                                                                                                                                      |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Argomento**                | Mobilità e trasporti                                                                                                                                                                                                                                                                                                   |
| **Descrizione del servizio** | <p>Il servizio riguarda i permessi per la sosta e la circolazione in zone a traffico limitato.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sulle richieste presentate;</li><li>ricevere eventuali avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul> |
| **Pulsante**                 | Richiedi un permesso                                                                                                                                                                                                                                                                                                   |

{% include "../.gitbook/includes/banner-single-sign-on.md" %}

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (125).png" alt=""><figcaption><p>Ciclo di vita ed eventi del servizio Permessi per sosta e circolazione</p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio, può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Comunicazioni alla cittadinanza

<details>

<summary>Modifiche al piano urbano del traffico</summary>

**🖋 Titolo del messaggio:** Modifiche al piano urbano del traffico

🗒 **Testo del messaggio**:

Dal \<gg/mm/aaaa> il \<nome area ZTL o tratto di ZTL interessato alla variazione se presente> subirà queste variazioni:

\[Inserire qui le modifiche e le eventuali espansioni delle aree in ZTL, da completare a cura e responsabilità dell'ente]

Per leggere l’ordinanza completa, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno un contrassegno per l’accesso in ZTL.

**Quando inviarlo**: Quando l’ente pubblica un’ordinanza di modifiche alla ZTL.

**User story**: Come cittadino voglio essere informato sulle variazioni della viabilità che interessano l’area a traffico limitato/sosta controllata per cui ho un permesso.

</details>

### Presentazione richiesta di permesso

<details>

<summary>Conferma prenotazione appuntamento</summary>

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per richiedere un permesso di sosta e/o circolazione presso \<nome ufficio>.

Il numero della prenotazione è \<nnnn>

**Dove:** \<indirizzo>

**Quando:** il \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari:** I cittadini nell’area di azione del servizio che hanno prenotato un appuntamento per richiedere un permesso di sosta e/o circolazione in zone a traffico limitato.

**Quando inviarlo:** Quando l’appuntamento è confermato.

**User story:** Come cittadino voglio ricevere una conferma quando l’appuntamento viene confermato dall’ente.

</details>

<details>

<summary>Richiesta di rilascio contrassegno: integrazione documentazione</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio: Richiesta di integrazione**

**🗒 Testo del messaggio:**

Per elaborare la tua richiesta di rilascio contrassegno per sosta e/o circolazione in zone a traffico limitato, abbiamo bisogno di ricevere entro il \<gg/mm/aaaa> altri documenti.

Per aggiungere i documenti alla tua richiesta, \[visita questo sito]\(URL).

Per consultare il riepilogo della richiesta, \[visita questo sito]\(URL).

🪄**Pulsante**: Aggiungi documenti

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto un permesso di sosta e/o circolazione in zone a traffico limitato.

**Quando inviarlo:** Quando l’ente, durante la valutazione della richiesta, necessita di ulteriore documentazione.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta di rilascio contrassegno: accolta</summary>

**🖋 Titolo del messaggio: La tua richiesta è stata accolta**

🗒 **Testo del messaggio:**

La tua richiesta di rilascio contrassegno per \<sosta e/o circolazione> è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto un permesso di sosta e/o circolazione in zone a traffico limitato accettata dall’ente.

**Quando inviarlo:** Quando l’ente accoglie la richiesta.

**User story:** Come cittadino voglio ricevere aggiornamenti sull'esito della mia richiesta.

</details>

<details>

<summary>Richiesta di rilascio contrassegno: non accolta</summary>

**🖋 Titolo del messaggio: La tua richiesta non è stata accolta**

🗒 **Testo del messaggio:**

La tua richiesta di rilascio contrassegno per \<sosta e/o circolazione> non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto un permesso di sosta e/o circolazione in zone a traffico limitato non accettata dall’ente.

**Quando inviarlo:** Quando l’ente non accoglie la richiesta.

**User story:** Come cittadino voglio ricevere aggiornamenti sull'esito della mia richiesta.

</details>

### Pagamento permesso

<details>

<summary>Avviso di pagamento</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**: C'è un avviso da pagare intestato a \<nome cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto un permesso di sosta e/o circolazione in zone a traffico limitato per il quale è necessario procedere al pagamento.

**Quando inviarlo**: Quando è necessario che il cittadino richiedente provveda al pagamento.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile effettuare i pagamenti.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento: pagamento in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto un permesso di sosta e/o circolazione in zone a traffico limitato per il quale è necessario procedere al pagamento.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere promemoria dei pagamenti in scadenza.

</details>

### Firma permesso

Se il contrassegno richiede una firma, è possibile utilizzare questo messaggio.

{% include "../.gitbook/includes/banner-firma-con-io.md" %}

<details>

<summary>Contrassegno disponibile per la firma</summary>

{% include "../.gitbook/includes/allegati.md" %}

***

**🖋 Titolo del messaggio:** Il contrassegno è pronto per la firma

🗒 **Testo del messaggio**:

Il contrassegno per \<sosta e/o circolazione> è pronto per la firma.

Per visualizzare il documento, \[visita questa pagina]\(URL).

Per prenotare il tuo appuntamento per la firma, \[visita questo sito]\(URL),

Per ulteriori informazioni, \[visita questo sito]\(URL).

\[Solo per messaggi con allegato] Puoi trovare in allegato a questo messaggio il contrassegno in formato \<formato>.

**🪄 Pulsante**: n/a

<mark style="color:blue;">**📎 Allegato:**</mark> \<contrassegno>

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto un permesso di sosta e/o circolazione in zone a traffico limitato accettata dall’ente.

**Quando inviarlo**: Quando il contrassegno è disponibile per il ritiro.

**User story**: Come cittadino vorrei ricevere comunicazione quando è possibile procedere alla firma del contrassegno richiesto.

</details>

### Emissione permesso

<details>

<summary>Contrassegno disponibile per la stampa</summary>

{% include "../.gitbook/includes/allegati.md" %}

***

**🖋 Titolo del messaggio:** Il contrassegno è pronto per la stampa

🗒 **Testo del messaggio:**

Il contrassegno per \<sosta e/o circolazione> richiesto in data \<gg/mm/aaaa> è pronto per essere stampato.

Per visualizzare il documento, \[visita questa pagina]\(URL).

\[Solo per messaggi con allegato] Puoi trovare in allegato a questo messaggio il contrassegno in formato \<formato>.

**🪄 Pulsante:** n/a

**📎&#x20;**<mark style="color:blue;">**Allegato**</mark>**:** \<contrassegno>

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto un permesso di sosta e/o circolazione in zone a traffico limitato accettata dall’ente.

**Quando inviarlo**: Quando il contrassegno è disponibile per la stampa.

**User story**: Come cittadino vorrei ricevere comunicazione quando è possibile procedere alla stampa del contrassegno richiesto.

</details>

<details>

<summary>Contrassegno disponibile per il ritiro</summary>

**🖋 Titolo del messaggio:** Il contrassegno è pronto per il ritiro

🗒 **Testo del messaggio:**

Dal \<gg/mm/aaaa> puoi ritirare il tuo contrassegno per \<sosta e/o circolazione>.

\[Inserire qui indicazioni sulle modalità di utilizzo della contrassegno, da compilare a cura e responsabilità dell'ente]

**Dove:** \<indirizzo>

**Quando:** \[Inserire qui i giorni e gli orari di apertura dello sportello]

\[Inserire qui ulteriori istruzioni utili al ritiro ed eventuali possibilità di delega, da compilare a cura e responsabilità dell'ente]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Prenota appuntamento

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno richiesto un permesso di sosta e/o circolazione in zone a traffico limitato che va ritirato presso gli uffici dell’ente.

**Quando inviarlo**: Quando il contrassegno è disponibile per il ritiro.

**User story**: Come cittadino vorrei ricevere comunicazione quando è possibile procedere al ritiro del contrassegno richiesto.

</details>

### Rinnovo permesso

<details>

<summary>Contrassegno in scadenza</summary>

**🖋 Titolo del messaggio:** Il tuo contrassegno sta per scadere

🗒 **Testo del messaggio:**

Ti ricordiamo che il tuo contrassegno per \<sosta e/o circolazione> scadrà in data \<gg/mm/aaaa>.

Per rinnovarlo puoi seguire la \[procedura di rinnovo online]\(URL) o \[prendere appuntamento presso lo sportello]\(URL) \<denominazione ufficio>.

**🪄 Pulsante**: Rinnova contrassegno

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno un permesso di sosta e/o circolazione in zone a traffico limitato in scadenza.

**Quando inviarlo**: Quando è necessario che il cittadino richiedente provveda al rinnovo.

**User story**: Come cittadino voglio ricevere comunicazione quando è necessario rinnovare il permesso per sosta e/o circolazione.

</details>

<details>

<summary>Richiesta di rinnovo contrassegno accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di rinnovo del contrassegno per \<sosta e/o circolazione> è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di rinnovo del permesso di sosta e/o circolazione in zone a traffico limitato.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User story**: Come cittadino voglio ricevere comunicazione sull’esito della mia richiesta.

</details>

<details>

<summary>Avviso di pagamento</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**: C'è un avviso da pagare intestato a \<nome cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno un permesso di sosta e/o circolazione in zone a traffico limitato in rinnovo per il quale è necessario procedere al pagamento.

**Quando inviarlo**: Quando è necessario che il cittadino richiedente provveda al pagamento.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile effettuare i pagamenti.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento: pagamento in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno un permesso di sosta e/o circolazione in zone a traffico limitato in rinnovo per il quale è necessario procedere al pagamento.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere promemoria dei pagamenti in scadenza.

</details>

### Richiesta di variazione o cessazione

<details>

<summary>Richiesta di &#x3C;variazione/cessazione> contrassegno accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di \<variazione/cessazione> del permesso di \<sosta e/o circolazione> è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di variazione o cessazione del permesso di sosta e/o circolazione in zone a traffico limitato.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User story**: Come cittadino voglio ricevere comunicazione sull’esito della mia richiesta.

</details>

### Revoca permesso

<details>

<summary>Contrassegno sosta e/o circolazione revocato</summary>

**🖋 Titolo del messaggio:** Il tuo contrassegno è stato revocato

🗒 **Testo del messaggio:**

In data \<gg/mm/aaaa> il tuo contrassegno per \<categoria> è stato revocato per mancato rispetto dei requisiti che hanno determinato il rilascio.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** I cittadini residenti nell’area di azione del servizio che hanno un contrassegno non più valido.

**Quando inviarlo:** Quando a seguito delle verifiche i requisiti che hanno determinato il rilascio non sono più rispettati.

**User story:** Come cittadino voglio essere informato della revoca del mio permesso.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Permessi per sosta e circolazione.xlsx" %}
{% endhint %}
