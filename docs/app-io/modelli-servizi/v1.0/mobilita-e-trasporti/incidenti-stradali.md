# Incidenti stradali

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti il rilascio di copia cartacea o digitale del rapporto di incidente stradale;
* monitorare e gestire tempestivamente le richieste, comunicazioni e i pagamenti per l'erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Incidenti stradali</td></tr><tr><td><strong>Argomento</strong></td><td>Mobilità e trasporti</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda gli incidenti stradali.</p><p><br>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sulle richieste di copia del rapporto dell’incidente stradale;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Richiedi copia verbale</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (19) (1).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Incidenti stradali</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

## Richiesta copia cartacea

### Presentazione della richiesta

<details>

<summary>Richiesta copia cartacea: accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di copia cartacea del rapporto di incidente stradale è stata accolta.

Per procedere al ritiro, dovrai effettuare il pagamento entro il `<gg/mm/aaaa>`.

Riceverai nei prossimi giorni un messaggio in app con l’avviso di pagamento.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di copia cartacea del rapporto di incidente stradale.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User Story**: Come cittadino voglio ricevere comunicazioni sull’esito della mia richiesta.

</details>

<details>

<summary>Richiesta copia cartacea: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di copia cartacea del rapporto di incidente stradale non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di copia cartacea del rapporto di incidente stradale.

**Quando inviarlo**: Quando l’ente non accoglie la richiesta.

**User Story**: Come cittadino voglio ricevere comunicazioni sull’esito della mia richiesta.

</details>

### Pagamento

<details>

<summary>Avviso di pagamento per richiesta copia cartacea</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:\
\
C'è un avviso da pagare intestato a `<nome cognome>` e relativo a `<causale>`.

**Devi pagare:** <00,00> €

**Entro il:** `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di copia cartacea del rapporto di incidente stradale accolta dall’ente.

**Quando inviarlo**: Quando è necessario che il cittadino richiedente provveda al pagamento.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile effettuare i pagamenti.

</details>

{% hint style="info" %}
**Promemoria automatici —&#x20;**<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento per richiesta copia cartacea: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di copia cartacea del rapporto di incidente stradale accolta dall’ente.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere promemoria dei pagamenti in scadenza.

</details>

### Ritiro

<details>

<summary>Avvenuta consegna della copia cartacea</summary>

**🖋 Titolo del messaggio:** Abbiamo consegnato il documento richiesto

🗒 **Testo del messaggio**:

Il `<gg/mm/aaaa>` abbiamo consegnato la copia cartacea del rapporto di incidente stradale da te richiesto a `<nome e cognome>`.

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di copia cartacea del rapporto di incidente stradale accolta dall’ente.

**Quando inviarlo**: Quando l’ente ha consegnato la copia cartacea del rapporto di incidente stradale al richiedente o a una persona delegata.

**User Story**: Come cittadino vorrei ricevere conferma di avvenuta consegna del rapporto richiesto.

</details>

<details>

<summary>Copia cartacea disponibile per il ritiro</summary>

**🖋 Titolo del messaggio:** La tua copia è pronta per il ritiro

🗒 **Testo del messaggio**:

Dal `<gg/mm/aaaa>` puoi ritirare la copia cartacea del rapporto di incidente stradale da te richiesto.

**Dove**: `<indirizzo>`

**Quando**: \[inserire i giorni e gli orari apertura dello sportello]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di copia cartacea del rapporto di incidente stradale accolta dall’ente.

**Quando inviarlo**: Quando è possibile ritirare il rapporto richiesto.

**User Story**: Come cittadino vorrei ricevere comunicazione quando è possibile procedere al ritiro della copia del rapporto di incidente richiesto.

</details>

***

## Richiesta copia digitale

### Presentazione della richiesta

<details>

<summary>Richiesta copia digitale: accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

**🗒 Testo del messaggio:**

La tua richiesta di copia digitale del rapporto di incidente stradale è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di copia digitale del rapporto di incidente stradale.

**Quando inviarlo:** Quando l’ente accoglie la richiesta.

**User Story:** Come cittadino voglio ricevere comunicazioni sull’esito della mia richiesta.

</details>

<details>

<summary>Richiesta copia digitale: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio:**

La tua richiesta di copia digitale del rapporto di incidente stradale non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di copia digitale del rapporto di incidente stradale.

**Quando inviarlo:** Quando l’ente non accoglie la richiesta.

**User Story:** Come cittadino voglio ricevere comunicazioni sull’esito della mia richiesta.

</details>

### Ottenimento

<details>

<summary>Copia digitale disponibile per il download sul sito dell'ente</summary>

**🖋 Titolo del messaggio:** È possibile scaricare il documento richiesto

**🗒 Testo del messaggio:**

Dal `<gg/mm/aaaa>` puoi scaricare la copia digitale del rapporto di incidente stradale da te richiesta.

Hai tempo fino al `<gg/mm/aaaa>`.

Per scaricare il documento, \[visita questo sito]\(URL).

**🪄 Pulsante**: Scarica il documento

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di copia digitale del rapporto di incidente stradale accolta dall’ente.

**Quando inviarlo:** Quando è possibile scaricare il documento richiesto.

**User story:** Come cittadino vorrei ricevere comunicazione quando è possibile scaricare il documento richiesto.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Incidenti stradali (1).xlsx" %}
{% endhint %}
