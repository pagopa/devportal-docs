# Nascite, adozioni e riconoscimento

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti gli atti e pratiche di nascita, adozione e riconoscimento dei figli
* monitorare e gestire tempestivamente le richieste, comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="371"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Nascite, adozioni e riconoscimento</td></tr><tr><td><strong>Argomento</strong></td><td>Servizi anagrafici e civici</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda atti e pratiche per la nascita, l’adozione e il riconoscimento dei figli.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sulle richieste presentate;</li><li>ricevere aggiornamenti sulla trascrizione dell’atto di nascita;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Prenota appuntamento</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../../../app-io/modelli-servizi/v1.0/.gitbook/assets/Servizi anagrafici_Nascite, adozioni e riconoscimento.png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Nascite, adozioni e riconoscimento</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

## Riconoscimento

### Richiesta appuntamento

<details>

<summary>Conferma prenotazione appuntamento</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi dell'appuntamento tramite notifica push.

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio**:

Hai prenotato un appuntamento per `<oggetto dell’appuntamento>`.

**Dove:** `<indirizzo>`

**Quando:** `<gg/mm/aaaa>` alle `<hh:mm>`

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: Disdici appuntamento

***

**Destinatari**: I cittadini residenti nell’area geografica di azione del servizio che hanno richiesto un appuntamento per pratiche di riconoscimento.

**Quando inviarlo**: Quando l'appuntamento è confermato.

**User story**: Come cittadino voglio ricevere una conferma dei miei appuntamenti.

</details>

***

## Adozioni

### Richiesta appuntamento

<details>

<summary>Conferma prenotazione appuntamento</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi dell'appuntamento tramite notifica push.

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio**:

Hai prenotato un appuntamento per `<oggetto dell’appuntamento>`.

**Dove:** `<indirizzo>`

**Quando:** `<gg/mm/aaaa>` alle `<hh:mm>`

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: Disdici appuntamento

***

**Destinatari**: I cittadini residenti nell’area geografica di azione del servizio che hanno richiesto un appuntamento per pratiche di adozione.

**Quando inviarlo**: Quando l'appuntamento è confermato.

**User story**: Come cittadino voglio ricevere una conferma dei miei appuntamenti.

</details>

### Trascrizione sentenza

<details>

<summary>Avvenuta trascrizione della sentenza e chiusura del procedimento</summary>

**🖋 Titolo del messaggio:** Sentenza di adozione trascritta

🗒 **Testo del messaggio:**

Il `<gg/mm/aaaa>` abbiamo trascritto la sentenza di adozione `<nnnn>`.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄Pulsante:** n/a

***

**Destinatari:** Tutti i cittadini residenti nell'area geografica di azione del servizio che hanno un provvedimento di adozione in corso.

**Quando inviarlo:** Quando l’ente emana la sentenza e la trasmette

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

***

## Nascite

### Richiesta appuntamento

<details>

<summary>Conferma prenotazione appuntamento</summary>

:sparkles:<mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi dell'appuntamento tramite notifica push.

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio**:

Hai prenotato un appuntamento per `<oggetto dell’appuntamento>`.

**Dove:** `<indirizzo>`

**Quando:** `<gg/mm/aaaa>` alle `<hh:mm>`

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: Disdici appuntamento

***

**Destinatari**: I cittadini residenti nell’area geografica di azione del servizio che hanno richiesto un appuntamento per pratiche di nascita.

**Quando inviarlo**: Quando l'appuntamento è confermato.

**User story**: Come cittadino voglio ricevere una conferma dei miei appuntamenti.

</details>

### Richiesta per variazioni o rilascio atti/certificati

<details>

<summary>Integrazione documentazione</summary>

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio:**

Per elaborare la tua richiesta di `<oggetto della richiesta>`, abbiamo bisogno di ricevere entro il `<gg/mm/aaaa>` altri documenti.

Consulta il riepilogo della tua richiesta, \[visita questo sito]\(URL).

**🪄 Pulsante:** Aggiungi documenti

***

**Destinatari:** I cittadini residenti nell’area geografica di azione del servizio che hanno fatto richiesta di rilascio o variazioni dell’atto di nascita.

**Quando inviarlo:** QQuando l’ente ha bisogno di ulteriori documenti per l’elaborazione della richiesta presentata.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

### Rilascio dell'atto o certificato di nascita (non immediato)

<details>

<summary>Richiesta per variazioni o rilascio atto/certificato di nascita: accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio:**

La tua richiesta di `<oggetto della richiesta>` del `<tipologia di documento>` è stata accolta.

Riceverai un messaggio in app quando il documento sarà disponibile per il ritiro.

Per ulteriori informazioni, \[visita questo sito]\(URL)

**🪄 Pulsante:** n/a

***

**Destinatari:** I cittadini residenti nell’area geografica di azione del servizio che hanno fatto richiesta di rilascio o variazioni di atti o certificati di nascita.

**Quando inviarlo:** Quando la richiesta viene accolta dall’ente

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

<details>

<summary>Richiesta per variazioni o rilascio atto/certificato di nascita: non accolta</summary>

**🖋 Titolo del messaggio:** Richiesta `<tipologia di documento>` non accolta

🗒 **Testo del messaggio:**

La tua richiesta di `<oggetto della richiesta>` del `<tipologia documento>` non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** I cittadini residenti nell’area geografica di azione del servizio che hanno fatto richiesta di rilascio o variazioni di atti o certificati di nascita.

**Quando inviarlo:** Quando la richiesta viene rigettata dall’ente.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

<details>

<summary>Rilascio del documento e termine del procedimento</summary>

**🖋 Titolo del messaggio:** `<Tipologia documento>` pronto per il ritiro

🗒 **Testo del messaggio:**

`<Tipologia documento>` da te richiesto è pronto per il ritiro.

Per ulteriori informazioni, \[visita questo sito]\(URL)

**🪄 Pulsante:** n/a

***

**Destinatari:** I cittadini residenti nell’area geografica di azione del servizio che hanno fatto richiesta di variazione o rilascio di atto o certificato di nascita.

**Quando inviarlo:** Quando l’atto è pronto per il rilascio del documento.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

### Rilascio dell'atto o certificato di nascita (immediato)

<details>

<summary>Rilascio del documento e termine del procedimento</summary>

**🖋 Titolo del messaggio:** Rilascio `<tipologia documento>`

🗒 **Testo del messaggio:**

Puoi `<scaricare/ritirare>` `<tipologia documento>` da te richiesto.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄Pulsante:** n/a

***

**Destinatari:** I cittadini residenti nell’area geografica di azione del servizio che hanno fatto richiesta di variazione o rilascio di atto o certificato di nascita.

**Quando inviarlo:** Quando l’ente accoglie la richiesta e procede al rilascio immediato del documento.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

<details>

<summary>Richiesta per variazioni o rilascio atto/certificato di nascita: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio:**

La tua richiesta di `<oggetto della richiesta>` del `<tipologia documento>` non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** n/a

***

**Destinatari:** I cittadini residenti nell’area geografica di azione del servizio che hanno fatto richiesta di variazione o rilascio di atto o certificato di nascita.

**Quando inviarlo:** Quando la richiesta viene rigettata dall’ente.

**User story:** Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../../../app-io/modelli-servizi/v1.0/.gitbook/assets/IO - Template servizi - Nascite, adozioni e riconoscimento.xlsx" %}
{% endhint %}
