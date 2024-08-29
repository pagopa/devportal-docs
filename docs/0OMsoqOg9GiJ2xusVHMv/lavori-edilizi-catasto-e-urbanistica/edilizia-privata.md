# Edilizia privata

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la gestione pratiche e gli interventi edilizi per gli immobili di proprietà;
* monitorare e gestire tempestivamente le richieste, comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Edilizia privata</td></tr><tr><td><strong>Argomento</strong></td><td>Lavori edilizi, catasto e urbanistica</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda le pratiche e gli interventi edilizi per gli immobili di proprietà.  </p><p></p><p>Tramite IO potrai: </p><ul><li>ricevere comunicazioni e aggiornamenti sulle pratiche edilizie; </li><li>ricevere avvisi di pagamento per e pagarli in app; </li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Fai domanda</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Edilizia privata</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Presentazione domanda

<details>

<summary>Conferma appuntamento</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi dell'appuntamento tramite notifica push.

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per \<oggetto dell’appuntamento>.

**Dove**: \<indirizzo>

**Quando**: \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, (visita questo sito)\[URL].

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari:** Tutti i cittadini che hanno presentato richiesta per interventi di edilizia privata.

**Quando inviarlo:** Quando l’appuntamento è confermato.

**User story:** Come cittadino voglio ricevere una conferma quando l’appuntamento viene confermato dall’ente.

</details>

### Pagamento pratica

<details>

<summary>Avviso di pagamento pratica</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio:**

C’è un avviso di pagamento intestato a \<nome>\<cognome> e relativo a \<causale>.

**Devi pagare**: <00,00> €

**Entro il**: \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Vedi Avviso”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:**  Vedi Avviso

***

**Destinatari:** Tutti i cittadini che hanno presentato richiesta per interventi di edilizia privata.

**Quando inviarlo:** Quando, ricevuta la richiesta, è necessario procedere al pagamento perché la pratica prosegua il suo iter.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento

</details>

{% hint style="info" %}
**Promemoria automatici — **<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento pratica: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Vedi Avviso

***

**Destinatari:** Tutti i cittadini che hanno presentato richiesta per interventi di edilizia privata.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Autorizzazione edilizia

<details>

<summary>Integrazione documentazione</summary>

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio:**

Per elaborare la tua domanda per \<oggetto> abbiamo bisogno di ricevere entro il \<gg/mm/aaaa> altri documenti.

Per aggiungere i documenti alla tua richiesta, \[visita questo sito]\(URL).

**🪄 Pulsante:** Aggiungi documenti

***

**Destinatari:** Tutti i cittadini che hanno presentato domanda per interventi di edilizia privata.

**Quando inviarlo:** Quando l’ente ha bisogno di ulteriori documenti per l’elaborazione della domanda.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Domanda di autorizzazione edilizia: accolta</summary>

**🖋 Titolo del messaggio:** La tua domanda per autorizzazione edilizia è stata accolta

🗒 **Testo del messaggio:**

La tua domanda per autorizzazione edilizia di \<indirizzo> è stata accolta.

Puoi ora comunicare al Comune la data di inizio lavori tramite \<canale>.

Per richiedere controlli in corso d'opera contatta il Comune tramite \<canale>.

Per ulteriori informazioni, \[visita questa pagina]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini che hanno presentato domanda per interventi di edilizia privata.

**Quando inviarlo:** Quando l’ente accoglie la richiesta.

**User Story:** Come cittadino voglio ricevere comunicazioni sull’esito della mia domanda.

</details>

<details>

<summary>Domanda di autorizzazione edilizia: non accolta</summary>

**🖋 Titolo del messaggio:** La tua domanda per autorizzazione edilizia non è stata accolta

🗒 **Testo del messaggio:**

La tua domanda per autorizzazione edilizia di \<indirizzo> non è stata accolta.

Per ulteriori informazioni, \[visita questa pagina]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini che hanno presentato domanda per interventi di edilizia privata.

**Quando inviarlo:** Quando l’ente rifiuta la richiesta.

**User Story:** Come cittadino voglio ricevere comunicazioni sull’esito della mia domanda.

</details>

### Rilascio certificazione di agibilità

<details>

<summary>Documenti disponibili per la visione e il ritiro</summary>

:sparkles:<mark style="color:blue;">**Allegati Premium**</mark> — Tramite questa funzionalità Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, puoi allegare documenti all'interno del messaggio.

Questo messaggio è da utilizzare sia per messaggi Premium, sia per messaggi standard. In caso di messaggio standard, **ricorda di eliminare ogni riferimento agli allegati dal corpo del messaggio.**

***

**🖋 Titolo del messaggio:** Rilascio certificazione di agibilità

🗒 **Testo del messaggio:**

La tua certificazione di agibilità per l’immobile di \<indirizzo> è disponibile.

Per scaricare la copia digitale in formato \<formato documento> \[visita questa pagina]\(URL).

\[Solo per messaggi Premium con allegato] Trovi la copia digitale in formato \<formato documento> in allegato.

\[Inserire qui istruzioni utili al ritiro ed eventuali possibilità di delega, da compilare a cura e responsabilità dell'ente]

**Dove:** \<indirizzo>

**Quando:** \[Inserire qui i giorni e gli orari di apertura dello sportello]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

<mark style="color:blue;">**📎 Allegato Premium:**</mark> \<certificazione di agibilità>

***

**Destinatari:** Tutti i cittadini che hanno presentato richiesta per interventi di edilizia privata.

**Quando inviarlo:** Quando sono disponibili i documenti per visione/ritiro.

**User story:** Come cittadino vorrei ricevere comunicazione quando è possibile procedere al ritiro/visione dei documenti richiesti.

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

Puoi copiare i testi dei messaggi da personalizzare da questo documento:&#x20;

{% file src="../.gitbook/assets/IO - Template servizi - Edilizia privata.xlsx" %}
{% endhint %}
