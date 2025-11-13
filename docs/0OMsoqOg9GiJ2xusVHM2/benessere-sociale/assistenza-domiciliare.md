# Assistenza domiciliare

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti l’assistenza domiciliare per persone che hanno limitazioni di autonomia;
* monitorare e gestire tempestivamente le richieste e comunicazioni per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Assistenza domiciliare</td></tr><tr><td><strong>Argomento</strong></td><td>Benessere sociale</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda l’assistenza domiciliare per le persone che hanno limitazioni di autonomia.</p><p>Tramite IO potrai:</p><ul><li>ricevere informazioni sulle modalità di presentazione delle richieste di assistenza domiciliare;</li><li>ricevere comunicazioni e aggiornamenti sulle richieste presentate e su eventuali appuntamenti;</li><li>ricevere eventuali avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Richiedi assistenza</td></tr></tbody></table>

{% include "../.gitbook/includes/banner-single-sign-on.md" %}

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (89).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Assistenza domiciliare</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Prenotazione appuntamento

<details>

<summary>Conferma prenotazione appuntamento</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per `<oggetto dell’appuntamento>` presso il tuo domicilio.

Il numero della prenotazione è `<nnnn>`.

**Quando:** il `<gg/mm/aaaa>` alle `<hh:mm>`

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari:** I cittadini residenti nell’area di azione del servizio che hanno prenotato un appuntamento per presentare richiesta di assistenza domiciliare.

**Quando inviarlo:** Quando l’appuntamento è confermato.

**User story:** Come cittadino voglio ricevere una conferma quando l’appuntamento viene confermato dall’ente.

</details>

<details>

<summary>Promemoria appuntamento</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Ricordati del tuo appuntamento

🗒 **Testo del messaggio:**

Ti ricordiamo l’appuntamento del `<gg/mm/aaaa>` per `<oggetto dell’appuntamento>`.

Il numero della prenotazione è `<nnnn>`.

**Dove:** `<indirizzo>`

**Quando:** il `<gg/mm/aaaa>` alle `<hh:mm>`

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari:** I cittadini residenti nell’area di azione del servizio che hanno prenotato un appuntamento per presentare richiesta di assistenza domiciliare.

**Quando inviarlo:** Quando l’appuntamento è imminente.

**User story:** Come cittadino voglio ricevere un promemoria del mio appuntamento.

</details>

### Definizione piano assistenziale

<details>

<summary>Definizione piano assistenziale</summary>

{% include "../.gitbook/includes/allegati+sso.md" %}

***

**🖋 Titolo del messaggio:** È disponibile il tuo piano assistenziale

🗒 **Testo del messaggio:**

Puoi ora consultare il tuo piano assistenziale.

\[Inserire qui ulteriori indicazioni sul contenuto del piano assistenziale]

\[Solo per messaggi con allegato] Trovi il testo completo nel piano assistenziale in allegato.

**🪄 Pulsante:** Consulta il piano

<mark style="color:blue;">**📎 Allegato:**</mark> `<piano assistenziale>`

***

**Destinatari:** I cittadini residenti nell’area di azione del servizio che hanno richiesto il servizio di assistenza domiciliare.

**Quando inviarlo:** Quando il piano assistenziale è pronto.

**User story:** Come cittadino voglio ricevere comunicazione quando il piano assistenziale è pronto.

</details>

### Erogazione del servizio

<details>

<summary>Attivazione del servizio</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Attivazione del servizio di assistenza domiciliare

🗒 **Testo del messaggio:**

Il servizio di assistenza domiciliare da te richiesto sarà attivo dal `<gg/mm/aaaa>`.

Per i dettagli sulle prestazioni erogate, puoi fare riferimento al tuo piano assistenziale consultabile \[visita questo sito]\(URL).

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Consulta il piano

***

**Destinatari:** I cittadini beneficiari del servizio di assistenza domiciliare.

**Quando inviarlo:** Quando è necessario comunicare al beneficiario la data di attivazione del servizio.

**User story:** Come cittadino voglio ricevere comunicazione sull’avvio del servizio da me richiesto.

</details>

### Pagamento servizio di assistenza domiciliare

<details>

<summary>Avviso di pagamento servizio di assistenza domiciliare</summary>

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

**Destinatari:** I cittadini beneficiari del servizio di assistenza domiciliare per il quale è previsto il pagamento.

**Quando inviarlo:** Quando è necessario procedere al pagamento.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento servizio di assistenza domiciliare: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** I cittadini beneficiari del servizio di assistenza domiciliare per il quale è previsto il pagamento.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sollecitare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica)
{% endhint %}

<details>

<summary>Avviso di pagamento servizio di assistenza domiciliare: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio:**

Il tuo pagamento relativo a `<causale>` è scaduto il `<gg/mm/aaaa>`.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** I cittadini beneficiari del servizio di assistenza domiciliare per il quale è previsto il pagamento.

**Quando inviarlo:** Quando la data di scadenza del pagamento è stata superata.

**User story:** Come cittadino voglio ricevere comunicazione dei pagamenti non effettuati.

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

{% file src="../.gitbook/assets/IO - Template servizi - Assistenza domiciliare.xlsx" %}
{% endhint %}
