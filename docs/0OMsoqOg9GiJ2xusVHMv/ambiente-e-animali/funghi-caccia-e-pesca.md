# Funghi, caccia e pesca

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti le attività relative alla raccolta funghi, alla caccia e alla pesca;
* monitorare e gestire tempestivamente le richieste e comunicazioni per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Funghi, caccia e pesca</td></tr><tr><td><strong>Argomento</strong></td><td>Ambiente e animali</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda le attività relative alla raccolta funghi, alla caccia e alla pesca.</p><p></p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Prenota appuntamento</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (6) (1).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Funghi, caccia e pesca</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

Se è prevista l'erogazione e l'utilizzo di un tesserino per la raccolta funghi, la caccia e pesca, si possono predisporre i seguenti messaggi:&#x20;

### Pagamento tesserino

<details>

<summary>Avviso di pagamento tesserino</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:&#x20;

C'è un avviso da pagare intestato a \<nome> \<cognome> e relativo a \<causale>.

Devi pagare: <00,00> €

Entro il: \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Vedi Avviso”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante**: Vedi Avviso

***

**Destinatari**: I cittadini che hanno richiesto il tesserino per la raccolta funghi, caccia o pesca.

**Quando inviarlo**: Quando è necessario effettuare il pagamento.

**User story**: Come cittadino voglio ricevere una comunicazione quando è possibile effettuare il pagamento.

</details>

{% hint style="info" %}
**Promemoria automatici — **<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento tesserino: in scadenza</summary>

**🖋  Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l'avviso ignora questo messaggio.

**🪄 Pulsante:** Vedi Avviso

***

**Destinatari:** I cittadini che hanno richiesto il tesserino per la raccolta funghi, caccia o pesca.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Prenotazione appuntamento

<details>

<summary>Conferma prenotazione appuntamento</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi dell'appuntamento tramite notifica push.&#x20;

***

**🖋  Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per il ritiro del tuo tesserino \<tipo tesserino>.

**Dove**: \<indirizzo>

**Quando**: il \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄  Pulsante:** Disdici appuntamento&#x20;

***

**Destinatari:** I cittadini che hanno fatto domanda per tesserino funghi, caccia o pesca.

**Quando inviarlo:** Quando la tessera è pronta per il ritiro.

**User story:** Come cittadino voglio ricevere comunicazione quando la tessera da me richiesta è pronta per il ritiro.

</details>

### Rinnovo tesserino

<details>

<summary>Tesserino in scadenza</summary>

**🖋 Titolo del messaggio:** Il tuo tesserino sta per scadere

🗒 **Testo del messaggio:**

Il tuo tesserino \<tipo tesserino> sta per scadere.

Per il rinnovo, dovrai prendere appuntamento presso \<sportello>.

Per prenotare il tuo appuntamento, \[visita questo sito]\(URL).

**🪄  Pulsante:** Prenota appuntamento&#x20;

***

**Destinatari:** I cittadini che con prossima scadenza del tesserino.

**Quando inviarlo:** Quando il tesserino è prossimo alla scadenza.

**User story:** Come utente voglio ricevere comunicazione circa la scadenza dei miei tesserini.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.&#x20;

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Funghi, caccia e pesca.xlsx" %}
{% endhint %}
