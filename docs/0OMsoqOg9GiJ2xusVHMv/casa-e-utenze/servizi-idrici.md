# Servizi idrici

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti la fornitura di servizi idrici nel territorio comunale;
* monitorare e gestire tempestivamente le richieste, le comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Servizi idrici</td></tr><tr><td><strong>Argomento</strong></td><td>Casa e utenze</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda l’acqua potabile, l’uso delle fognature e degli impianti di depurazione.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sulle pratiche;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Richiedi preventivo</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../../../app-io/modelli-servizi/v1.0/.gitbook/assets/image (34) (1).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Servizi idrici</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

In base alle scelte della singola amministrazione, questo servizio può essere erogato dal Comune o gestito da soggetti terzi.

Gli stessi possono indirizzare ai cittadini le comunicazioni inerenti al servizio tramite i propri canali e procedure.

## Attivazione fornitura (nuovo allacciamento, subentro o voltura)

### Richiesta preventivo

<details>

<summary>Preventivo inviato</summary>

**🖋 Titolo del messaggio:** Il tuo preventivo

🗒 **Testo del messaggio**:

Il `<gg/mm/aaaa>` ti abbiamo inviato il preventivo da te richiesto tramite `<canale>` per `<l’allacciamento/il subentro/la voltura>` dell’acqua in `<indirizzo>`.

Per completare la tua richiesta, \[visita questo sito]\(URL).

**🪄 Pulsante**: Completa richiesta

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto un preventivo all’ente per l’allacciamento, il subentro o la voltura dell’acqua.

**Quando inviarlo**: Quando è necessario completare la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta e sulle azioni necessarie al suo completamento.

</details>

<details>

<summary>Pagamenti insoluti</summary>

**🖋 Titolo del messaggio:** Richiesta di `<allacciamento/subentro/voltura>` è bloccata da pagamenti insoluti

🗒 **Testo del messaggio**:

Risultano pagamenti insoluti a carico di `<nome>` `<cognome>` e relative a `<causale>`.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto un preventivo all’ente per l’allacciamento, il subentro o la voltura dell’acqua

**Quando inviarlo**: Quando risultano pagamenti insoluti a carico del cittadino bloccanti per l’avanzamento della richiesta

**User story**: Come cittadino voglio ricevere avvisi su pagamenti insoluti a mio carico

</details>

### Rifiuto preventivo

<details>

<summary>Richiesta preventivo decaduta</summary>

**🖋 Titolo del messaggio:** Richiesta di preventivo `<allacciamento/subentro/voltura>` non accolta

🗒 **Testo del messaggio**:

La tua richiesta di preventivo per `<allacciamento/subentro/voltura>` non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto un preventivo all’ente per l’allacciamento, il subentro o la voltura dell’acqua.

**Quando inviarlo**: Quando la richiesta viene rifiutata per mancato invio dei documenti, mancato pagamento o altre motivazioni.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

### Attivazione del servizio

<details>

<summary>Avviso di pagamento costi di attivazione</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C’è un avviso di pagamento intestato a `<nome>` `<cognome>` e relativo a `<causale>`.

**Devi pagare:** `<xx,xx>` €

**Entro il:** `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto un preventivo all’ente per l’allacciamento, il subentro o la voltura dell’acqua.

**Quando inviarlo**: Quando è necessario procedere al pagamento.

**User story**: Come cittadino voglio ricevere aggiornamenti quando è possibile pagare i miei avvisi di pagamento.

</details>

{% hint style="info" %}
**Promemoria automatici —&#x20;**<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento costi di attivazione: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto un preventivo all’ente per l’allacciamento, il subentro o la voltura dell’acqua.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

<details>

<summary>Richiesta atti autorizzativi inoltrata</summary>

**🖋 Titolo del messaggio:** La richiesta degli atti autorizzativi è stata inoltrata

🗒 **Testo del messaggio**:

Il `<gg/mm/aaaa>` abbiamo inoltrato la richiesta degli atti autorizzativi richiesti da `<nome del gestore>` all’ufficio competente `<denominazione ufficio>`.

Riceverai ulteriori messaggio sullo stato di avanzamento della tua richiesta.

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto un preventivo all’ente per l’allacciamento, il subentro o la voltura dell’acqua

**Quando inviarlo**: Quando la pratica viene inoltrata all’ufficio di competenza

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Attivazione del servizio</summary>

**🖋 Titolo del messaggio:** Il servizio è attivo

🗒 **Testo del messaggio**:

Il `<gg/mm/aaaa>` abbiamo attivato il servizio di fornitura per `<allacciamento/subentro/voltura>` dell’acqua in `<indirizzo>`.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto un preventivo all’ente per l’allacciamento, il subentro o la voltura dell’acqua.

**Quando inviarlo**: Quando viene attivato il servizio di fornitura.

**User story**: Come cittadino voglio ricevere aggiornamenti sull’attivazione del servizio di fornitura dell’acqua da me richiesto.

</details>

***

## Bollette dell’acqua

### Pagamento

<details>

<summary>Avviso di pagamento bolletta</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C’è un avviso di pagamento intestato a `<nome>` `<cognome>` e relativo a `<causale>`.

**Devi pagare:** `<xx,xx>` €

**Entro il:** `<gg/mm/aaaa>`

\[Se previsto] Se vuoi richiedere agevolazioni economiche sul pagamento delle bollette, puoi farlo entro il `<gg/mm/aaaa>`.

Per richiedere le agevolazioni, \[visita questo sito]\(URL).

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso o se hai richiesto la domiciliazione delle bollette sul conto corrente, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante**: Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno attivato la fornitura di acqua.

**Quando inviarlo**: Quando è necessario procedere al pagamento della bolletta.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento per le bollette dell’acqua.

</details>

{% hint style="info" %}
**Promemoria automatici —&#x20;**<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento bolletta: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

l tuo pagamento della bolletta per `<tipo di fornitura>` sta per scadere.

Se hai già provveduto a pagare l’avviso o se hai richiesto la domiciliazione della bolletta sul conto corrente, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno attivato la fornitura di acqua.

**Quando inviarlo**: Quando il pagamento è in scadenza.

**User story**: Come cittadino voglio ricevere comunicazione sui pagamenti in scadenza.

</details>

### Richiesta agevolazioni

<details>

<summary>Richiesta di agevolazioni: accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta di agevolazioni è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di agevolazioni per `<tipologia di fornitura>` in `<indirizzo>` che hai inviato il `<gg/mm/aaaa>` è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto agevolazioni per il pagamento delle bollette dell’acqua

**Quando inviarlo:** Quando l’ente accoglie la richiesta

**User story:** Come cittadino voglio ricevere aggiornamenti sull’esito delle mie richieste.

</details>

<details>

<summary>Richiesta di agevolazioni: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta di agevolazioni non è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di agevolazioni per il servizio di fornitura dell’acqua in `<indirizzo>` non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto agevolazioni per il pagamento delle bollette dell’acqua

**Quando inviarlo:** Quando l’ente rigetta a richiesta

**User story:** Come cittadino voglio ricevere aggiornamenti sull’esito delle mie richieste.

</details>

***

## Disattivazione del servizio

### Pagamento fattura chiusura utenza

<details>

<summary>Avviso di pagamento disattivazione del servizio</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C'è un avviso da pagare intestato a `<nome>` `<cognome>` e relativo a `<causale>`.

**Devi pagare:** `<xx,xx>` €

**Entro il:** `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto la disattivazione del servizio.

**Quando inviarlo:** Quando è necessario procedere al pagamento dei costi di chiusura.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento per la disattivazione del servizio

</details>

<details>

<summary>Pagamenti insoluti</summary>

**🖋 Titolo del messaggio:** Il servizio è bloccato da pagamenti insoluti

🗒 **Testo del messaggio**:

Risultano pagamenti insoluti a carico di `<nome>` `<cognome>` e relative a `<causale>`.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto la disattivazione del servizio.

**Quando inviarlo**: Quando risultano pendenze a carico che bloccano l’avanzamento della richiesta.

**User story**: Come cittadino voglio ricevere comunicazione sulla presenza di pendenze a mio carico.

</details>

{% hint style="info" %}
**Promemoria automatici —&#x20;**<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento disattivazione del servizio: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che hanno richiesto la disattivazione del servizio.

**Quando inviarlo**: Quando la data di scadenza del pagamento si sta avvicinando.

**User story**: Come cittadino voglio ricevere promemoria sulla scadenza dei miei avvisi di pagamento.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sollecitare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento disattivazione del servizio: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento per `<causale>` è scaduto il `<gg/mm/aaaa>`.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione del servizio che non hanno ancora effettuato il pagamento per il servizio.

**Quando inviarlo**: Quando la data di scadenza del pagamento è stata superata.

**User story**: Come cittadino vorrei ricevere promemoria sulla scadenza dei miei avvisi di pagamento

</details>

***

## Guasti e crisi idriche

### Segnalazione modifiche servizio

<details>

<summary>Modifica erogazione del servizio per un giorno</summary>

**🖋 Titolo del messaggio:** Modifica erogazione acqua in `<indirizzo>`

🗒 **Testo del messaggio**:

Il `<gg/mm/aaaa>` dalle `<hh:mm>` alle `<hh:mm>` a causa di `<causa>`, l’erogazione dell’acqua in `<indirizzo>` potrà `<essere interrotta/essere ridotta/subire variazioni>`.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti o domiciliati nell’area geografica interessata dalla modifica dell’erogazione del servizio idrico

**Quando inviarlo**: Quando l’ente pubblica una comunicazione di modifica di erogazione limitato ad una giornata.

**User story**: Come cittadino voglio essere informato sulle variazioni delle erogazioni dell’acqua che interessano la mia zona

</details>

<details>

<summary><strong>Modifica erogazione del servizio per periodo prolungato</strong></summary>

**🖋 Titolo del messaggio:** Modifica erogazione acqua in `<indirizzo>`

🗒 **Testo del messaggio**:

Dal `<gg/mm/aaaa>` al `<gg/mm/aaaa>` a causa di `<causa>`, l’erogazione dell’acqua in `<indirizzo>` potrà `<essere interrotta/essere ridotta/subire variazioni>`.

Le variazioni saranno attive nella fascia oraria dalle `<hh:mm>` alle `<hh:mm>`.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti o domiciliati nell’area geografica interessata dalla modifica dell’erogazione del servizio idrico.

**Quando inviarlo**: Quando l’ente pubblica una comunicazione di modifica di erogazione per un periodo prolungato.

**User story**: Come cittadino voglio essere informato sulle variazioni delle erogazioni dell’acqua che interessano la mia zona.

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

{% file src="../../../app-io/modelli-servizi/v1.0/.gitbook/assets/IO - Template servizi - Servizi idrici.xlsx" %}
{% endhint %}
