# Cittadinanza italiana

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e i cittadini un riferimento per la ricezione delle comunicazioni riguardanti le richieste di cittadinanza italiana;
* monitorare e gestire tempestivamente le richieste, comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Cittadinanza italiana</td></tr><tr><td><strong>Argomento</strong></td><td>Servizi anagrafici e civici</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda le richieste di cittadinanza italiana.</p><p></p><p>Tramite IO potrai:</p><ul><li>ricevere aggiornamenti sulla richiesta di cittadinanza;</li><li>ricevere comunicazioni sulla cerimonia di giuramento;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Prenota appuntamento</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/Servizi anagrafici_Cittadinanza italiana.png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Cittadinanza italiana</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Compimento 18 anni

<details>

<summary>Possibilità di avvio pratica cittadinanza</summary>

**🖋 Titolo del messaggio:** Puoi presentare richiesta di cittadinanza

🗒 **Testo del messaggio:**

Dal \<gg/mm/aaaa> puoi presentare richiesta per ottenere la cittadinanza italiana.

Hai tempo fino al \<gg/mm/aaaa>.

Per presentare richiesta, prenota un appuntamento presso \<denominazione ufficio>.

Per prenotare il tuo appuntamento, \[visita questo sito]\(URL).

**🪄 Pulsante:** Prenota appuntamento

***

**Destinatari:** I cittadini stranieri residenti nell’area di azione del servizio, che hanno compiuto diciotto anni e che posseggono i requisiti necessari per presentare domanda di cittadinanza italiana.

**Quando inviarlo:** Quando è possibile avviare la pratica per l’acquisizione della cittadinanza italiana.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile avviare la pratica per l’acquisizione della cittadinanza italiana.

</details>

### Avvio riconoscimento di identità

<details>

<summary>Conferma prenotazione appuntamento per il riconoscimento</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi dell'appuntamento tramite notifica push.

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per \<oggetto dell’appuntamento>.

Il numero della prenotazione è: \<nnnn>.

**Dove:** \<indirizzo>

**Quando:** \<gg/mm/aaaa> alle \<hh:mm>

Prima dell’appuntamento, dovrai effettuare il pagamento di \<causale>.

Riceverai nei prossimi giorni un messaggio in app con l’avviso di pagamento.

Per ulteriori informazioni, \[visita il sito]\(URL).

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari:** Tutti i cittadini stranieri residenti nell’area di azione del servizio e che hanno richiesto un appuntamento per effettuare il riconoscimento d’identità

**Quando inviarlo:** Quando l’appuntamento è confermato

**User story:** Come cittadino voglio ricevere conferma dei miei appuntamenti

</details>

<details>

<summary>Avviso di pagamento pratica di riconoscimento di identità</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio:**

C’è un avviso da pagare intestato a \<nome> \<cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Vedi Avviso”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Vedi avviso

***

**Destinatari:** Tutti i cittadini stranieri residenti nell’area di azione del servizio e che hanno richiesto un appuntamento per effettuare il riconoscimento d’identità.

**Quando inviarlo:** Quando è necessario procedere al pagamento.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento.

</details>

{% hint style="info" %}
**Promemoria automatici — **<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento pratica di riconoscimento di identità: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per \<causale> sta per scadere.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Vedi avviso

***

**Destinatari:** Tutti i cittadini stranieri residenti nell’area di azione del servizio e che hanno richiesto un appuntamento per effettuare il riconoscimento d’identità.

**Quando inviarlo:** Quando il pagamento per la pratica è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Concessione cittadinanza

Questi messaggi di gestione appuntamenti prenotazione possono essere utilizzati se l'ente già offre questa parte del servizio.&#x20;

<details>

<summary>Possibilità di prenotazione del giuramento</summary>

**🖋 Titolo del messaggio:** Prenota appuntamento per il tuo giuramento

🗒 **Testo del messaggio:**

Dal \<gg/mm/aaaa> puoi prenotare la cerimonia del tuo giuramento.

Hai tempo fino al \<gg/mm/aaaa>.

Per prenotare il tuo giuramento e ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini stranieri residenti nell’area di azione del servizio e che hanno ricevuto la concessione della cittadinanza italiana per la quale è necessario procedere al giuramento.

**Quando inviarlo:** Quando è possibile prenotare la cerimonia di giuramento.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile prenotare la cerimonia di giuramento.

</details>

<details>

<summary>Conferma prenotazione appuntamento per il giuramento</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per \<oggetto dell’appuntamento>.

Il numero della prenotazione è: \<nnnn>.

**Dove:** \<indirizzo>

**Quando:** \<gg/mm/aaaa> alle \<hh:mm>

\[Se previsto] Prima dell’appuntamento, dovrai effettuare il pagamento di \<causale>.

Riceverai nei prossimi giorni un messaggio in app con l’avviso di pagamento.

Per ulteriori informazioni, \[visita il sito]\(URL).

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari:** Tutti i cittadini stranieri residenti nell’area di azione del servizio e che hanno richiesto un appuntamento per effettuare il giuramento.

**Quando inviarlo:** Quando l’appuntamento è confermato.

**User story:** Come cittadino voglio ricevere conferma dei miei appuntamenti.

</details>

### Giuramento

<details>

<summary>Ottenimento della cittadinanza</summary>

**🖋 Titolo del messaggio:** Hai acquisito la cittadinanza italiana

🗒 **Testo del messaggio:**

Il \<gg/mm/aaaa> hai acquisito la cittadinanza italiana.

\[Ad esempio] Se vuoi richiedere il passaporto italiano, \[visita questa pagina]\(URL).

\[Ad esempio] Se vuoi richiedere la Carta d'Identità Elettronica (CIE)\[visita questa pagina]\(URL).

Per ulteriori informazioni, \[visita il sito]\(URL).&#x20;

**🪄 Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio e che, a seguito della richiesta di ottenimento della cittadinanza italiana, hanno prestato giuramento.

**Quando inviarlo:** Quando la pratica viene conclusa per ottenimento della cittadinanza.

**User story:** Come cittadino voglio ricevere conferma della conclusione della mia pratica.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.&#x20;

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Cittadinanza italiana.xlsx" %}
{% endhint %}
