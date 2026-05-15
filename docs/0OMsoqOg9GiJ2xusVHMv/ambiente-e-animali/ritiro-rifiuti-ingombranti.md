# Ritiro rifiuti ingombranti

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti le richieste di ritiro rifiuti ingombranti;
* monitorare e gestire tempestivamente le richieste e le comunicazioni per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Ritiro rifiuti ingombranti</td></tr><tr><td><strong>Argomento</strong></td><td>Ambiente e animali</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda il ritiro di rifiuti ingombranti.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sulle richieste di ritiro;</li><li>ricevere eventuali avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Prenota ritiro</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../../app-io/modelli-servizi/v1.0/.gitbook/assets/image (36).png" alt=""><figcaption><p><strong>Ciclo di vita ed event del servizio Ritiro rifiuti ingombranti</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

## Prenotazione ritiro

<details>

<summary>Conferma prenotazione ritiro bordo strada</summary>

**🖋 Titolo del messaggio:** Conferma di prenotazione per ritiro bordo strada

🗒 **Testo del messaggio**:

Ti confermiamo la tua prenotazione per il ritiro di rifiuti ingombranti bordo strada. Ecco i dettagli:

**Dove**: `<indirizzo>`

**Quando**: `<gg/mm/aaaa>` dalle `<hh:mm>`

**Cosa verrà ritirato**: `<oggetto del ritiro>`

\[Inserire indicazioni per la segnalazione del rifiuto da lasciare bordo strada, da completare a cura e responsabilità dell'ente]

**🪄 Pulsante**: Disdici appuntamento

***

**Destinatari**: Tutti i cittadini che hanno richiesto appuntamento per ritiro rifiuti ingombranti bordo strada.

**Quando inviarlo**: Quando l’appuntamento è confermato.

**User story**: Come cittadino voglio ricevere una conferma quando l’appuntamento viene confermato dall’ente.

</details>

<details>

<summary>Conferma prenotazione ritiro al piano</summary>

**🖋 Titolo del messaggio:** Conferma di prenotazione per ritiro al piano

🗒 **Testo del messaggio:**

Ti confermiamo la tua prenotazione per il ritiro di rifiuti ingombranti al piano. Ecco i dettagli:

**Dove**: `<indirizzo>`

**Quando**: `<gg/mm/aaaa>` dalle `<hh:mm>` alle `<hh:mm>`

**Cosa verrà ritirato**: `<oggetto del ritiro>`

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari**: Tutti i cittadini che hanno richiesto appuntamento per ritiro rifiuti ingombranti al piano.

**Quando inviarlo**: Quando l’appuntamento è confermato.

**User story**: Come cittadino voglio ricevere una conferma quando l’appuntamento viene confermato dall’ente.

</details>

<details>

<summary>Promemoria appuntamento</summary>

**🖋 Titolo del messaggio:** Ricordati del ritiro che hai prenotato

🗒 **Testo del messaggio:**

Ti ricordiamo che hai prenotato un ritiro `<in strada/al piano>`.

**Dove**: `<indirizzo>`

**Quando**: `<gg/mm/aaaa>` dalle `<hh:mm>` alle `<hh:mm>`

**Cosa verrà ritirato**: `<oggetto del ritiro>`

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari**: Tutti i cittadini che hanno aperto una pratica per ritiro rifiuti ingombranti.

**Quando inviarlo**: Quando l’appuntamento è imminente.

**User story**: Come cittadino voglio ricevere promemoria dei miei appuntamenti.

</details>

***

## Pagamento ritiro rifiuti ingombranti

Se è previsto un costo per il ritiro dei rifiuti ingombranti, si possono predisporre i seguenti messaggi:

<details>

<summary>Avviso di pagamento ritiro rifiuti ingombranti</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

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

**Destinatari**: I cittadini che hanno presentato una richiesta per ritiro rifiuti ingombranti.

**Quando inviarlo**: Quando è necessario procedere al pagamento per la pratica.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento.

</details>

{% hint style="info" %}
\*\*Promemoria automatici — \*\*<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento ritiro rifiuti ingombranti: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: I cittadini che hanno presentato una richiesta per ritiro rifiuti ingombranti.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

<details>

<summary>Annullamento prenotazione per mancato pagamento</summary>

**🖋 Titolo del messaggio:** La tua prenotazione è stata annullata

🗒 **Testo del messaggio:**

La tua prenotazione per ritiro rifiuti ingombranti è stata annullata per mancato pagamento.

**🪄 Pulsante:** n/a

***

**Destinatari**: I cittadini che hanno presentato una richiesta per ritiro ingombranti.

**Quando inviarlo**: Quando il pagamento non è pervenuto nei termini indicati e la prenotazione è stata annullata.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato delle mie pratiche.

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

{% file src="../../app-io/modelli-servizi/v1.0/.gitbook/assets/IO - Template servizi - Ritiro rifiuti ingombranti.xlsx" %}
{% endhint %}
