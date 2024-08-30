# Elezioni

Erogare il servizio tramite l'app IO permette agli enti di:

* mandare comunicazioni aggiornate sulle elezioni e le modalità di voto;
* incentivare la presenza degli elettori ai seggi;
* promuovere servizi aggiuntivi di assistenza e partecipazione ai seggi.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Elezioni</td></tr><tr><td><strong>Argomento</strong></td><td>Servizi elettorali</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio ti invia comunicazioni relative alle elezioni.</p><p><br>Tramite IO potrai:</p><ul><li>ricevere aggiornamenti sulle elezioni imminenti;</li><li>ricevere informazioni su come esercitare il voto dall'estero;</li><li>ricevere informazioni su come chiedere l'iscrizione alle liste elettorali;</li><li>ricevere informazioni su come richiedere il voto assistito o domiciliare;</li><li>ricevere conferma degli appuntamenti per voto domiciliare, assistito o per il trasporto ai seggi per le persone con disabilità;</li><li>ricevere promemoria per gli appuntamenti presi;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Scopri di più</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (14).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Elezioni</strong></p></figcaption></figure>

## Messaggi del servizio&#x20;

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio, può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

{% hint style="warning" %}
**Trattamento dati sensibili**

I messaggi che questo servizio invia al cittadino possono includere dati sensibili come la richiesta di voto domiciliare o assistito e le comunicazioni per appuntamenti. Per questo, il servizio è considerato come sensibile e richiede l'utilizzo dell'attributo `require_secure_channels` la cui integrazione è spiegata all'interno della [Guida Tecnica all'Integrazione dei Servizi. ](https://app.gitbook.com/s/mzwjFv2XaE1mjbz7I8gt/funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi#require\_secure\_channels)

L'utilizzo di questo attributo permette di anonimizzare le notifiche push e mail, se previste dalle impostazioni del cittadino.\
\
Secondo quanto disposto dal paragrafo [7.3 delle Linee Guida di IO](https://www.agid.gov.it/sites/default/files/repository\_files/lg\_punto\_accesso\_telematico\_servizi\_pa\_3112021.pdf), **non è ammesso** includere nel titolo dati sensibili, mentre deve essere **limitato** al minimo l'utilizzo all'interno del corpo del messaggio,&#x20;

Tra i dati sensibili rientrano, ad esempio:

* Esito della richiesta di voto assistito o domiciliare;
* Motivazioni della richiesta di voto assistito o domiciliare.
{% endhint %}

### Nuove elezioni

<details>

<summary>Nuove elezioni: voto in Italia</summary>

**🖋 Titolo del messaggio:** \<Elezioni o referendum> del \<gg/mm/aaaa>

🗒 **Testo del messaggio**:&#x20;

Per partecipare \<alle elezioni o al referendum> del \<gg/mm/aaaa>, recati al il seggio, indicato sulla tua tessera elettorale, dalle ore hh:mm alle hh:mm.

\[Se previsto] Per le persone con disabilità è attivo il servizio di trasporto gratuito. Per richiedere il servizio \<modalità di richiesta>.&#x20;

Per ulteriori informazioni, \[visita questo sito]\(URL).&#x20;

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che possono votare.

**Quando inviarlo**: Quando i cittadini sono chiamati al voto&#x20;

**User story**: Come cittadino voglio essere aggiornato sull'imminente voto ed elezioni.

</details>

<details>

<summary>Domanda di iscrizione lista elettorale aggiunta</summary>

**🖋 Titolo del messaggio:** Iscriviti alla lista elettorale aggiunta per votare

🗒 **Testo del messaggio**:&#x20;

Dal \<gg/mm/aaaa> al \<gg/mm/aaaa>, se sei cittadino dell'Unione Europea, puoi presentare la richiesta di iscrizione gratuita per poter votare alle elezioni del Consiglio Comunale del \<gg/mm/aaaa>. Puoi iscriverti nell'apposita lista elettorale dedicata se:&#x20;

• hai diritto a votare nel tuo Stato di origine o di appartenenza;&#x20;

• sei maggiorenne e residente nel Comune \<nome Comune>.

Per ulteriori informazioni, \[visita questo sito]\(URL).&#x20;

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio, maggiorenni e cittadini dell' Unione Europea

**Quando inviarlo**: Quando le elezioni del Consiglio Comunale sono prossime

**User story**: Come cittadino voglio sapere se è possibile accedere al voto del Consiglio Comunale come cittadino europeo

</details>

<details>

<summary>Voto dall'estero: come partecipare</summary>

**🖋 Titolo del messaggio:**  \<Elezioni o referendum> del \<gg/mm/aaaa>: voto dall'estero

🗒 **Testo del messaggio**:&#x20;

Per \<le elezioni o il referendum>  del \<gg/mm/aaaa>, puoi votare anche dall'estero.&#x20;

Se sei all'estero da almeno tre mesi per motivi di lavoro, studio o cure mediche, puoi richiedere di votare per corrispondenza \<modalità di richiesta>.&#x20;

Se invece vivi all'estero da più di un anno e sei iscritto all'Anagrafe Italiani Residenti all'Estero (AIRE), scopri come puoi votare consultando il \[sito]\(URL).&#x20;

Per ulteriori informazioni, \[visita questo sito]\(URL).&#x20;

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che possono votare e sono all'estero

**Quando inviarlo**: Quando i cittadini sono chiamati al voto&#x20;

**User story**: Come cittadino voglio sapere come poter votare se non sono in Italia

</details>

### Richiesta voto assistito o domiciliare

<details>

<summary>Richiedi voto assistito o domiciliare</summary>

**🖋 Titolo del messaggio:** Assistenza al voto

🗒 **Testo del messaggio**:&#x20;

Dal \<gg/mm/aaaa> al \<gg/mm/aaaa> è possibile richiedere il voto assistito o il voto domiciliare per \<le elezioni o il referendum> del \<gg/mm/aaaa>.&#x20;

Le richieste possono essere presentate anche da un delegato, scopri come \[visitando questi sito]\(URL).&#x20;

Per ulteriori informazioni, \[visita questo sito]\(URL).&#x20;

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio con gravi infermità o non vedenti, e le persone che li assistono.&#x20;

**Quando inviarlo**: Quando i cittadini sono chiamati al voto

**User story**: Come cittadino voglio sapere quando è possibile presentare le domande per il voto assistito o domiciliare

</details>

<details>

<summary>Conferma appuntamento</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi dell'appuntamento tramite notifica push.

***

**🖋 Titolo del messaggio:** Il tuo appuntamento&#x20;

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per \<voto domiciliare o trasporto ai seggi> per \<le elezioni o il referendum> del \<gg/mm/aaaa>.

\[Se previsto] Il numero della prenotazione è \<nnnn>.

**Dove**: \<indirizzo>

**Quando**: il \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Disdici appuntamento

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno richiesto il voto domiciliare o il trasporto ai seggi&#x20;

**Quando inviarlo**: Quando l'appuntamento è confermato

**User story**: Come cittadino voglio sapere quando il mio appuntamento è stato confermato

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

Puoi copiare i testi dei messaggi da personalizzare da questo documento:&#x20;

{% file src="../.gitbook/assets/IO - Template servizi - Elezioni.xlsx" %}
{% endhint %}
