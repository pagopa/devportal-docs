# Prestazioni sanitarie

Erogare il servizio tramite l'app IO permette agli enti di:

* ridurre il numero di prenotazioni non disdette e di conseguenza ridurre i tempi delle liste d'attesa, ottimizzando i tempi per l’erogazione delle visite;
* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti il sistema sanitario erogato dalle diverse regioni;
* ridurre il numero dei ticket e sanzioni non pagate, riducendo di conseguenza lunghe procedure di recupero crediti.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Prestazioni sanitarie</td></tr><tr><td><strong>Argomento</strong></td><td>Salute</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda gli esami specialistici tramite SSN (Servizio Sanitario Nazionale) e gli esami da effettuare presso laboratori di analisi e radiologia.</p><p>Tramite IO potrai:</p><ul><li>ricevere conferma di appuntamento;</li><li>ricevere promemoria di appuntamenti imminenti;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>ricevere comunicazioni per il ritiro di referti;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Visita il Fascicolo Sanitario</td></tr></tbody></table>

{% include "../.gitbook/includes/banner-single-sign-on.md" %}

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (109).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Prestazioni sanitarie</strong></p></figcaption></figure>

## Messaggi del servizio&#x20;

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio, può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione.  L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

{% hint style="warning" %}
**Trattamento dati sensibili**

I messaggi che questo servizio invia al cittadino spesso includono dati sensibili come il nome della visita da effettuare. Per questo, il servizio è considerato come sensibile e richiede l'utilizzo dell'attributo `require_secure_channels` la cui integrazione è spiegata all'interno della [Guida Tecnica all'Integrazione dei Servizi. ](https://app.gitbook.com/s/mzwjFv2XaE1mjbz7I8gt/funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi#require_secure_channels)

L'utilizzo di questo attributo permette di anonimizzare le notifiche push e mail, se previste dalle impostazioni del cittadino.\
\
Secondo quanto disposto dal paragrafo [7.3 delle Linee Guida di IO](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto_allegati/213121604430O__OLG+Punto+accesso+telematico+servizi+PA_3.11.2021.pdf), **non è ammesso** includere nel titolo dati sensibili, mentre deve essere **limitato** al minimo l'utilizzo all'interno del corpo del messaggio,&#x20;

Tra i dati sensibili rientrano, ad esempio:

* Nome appuntamento, esame, prescrizione, farmaci;
* Nome della struttura;
* Esito dei referti.
{% endhint %}

### Emissione prescrizione medica

<details>

<summary>Emissione nuova prescrizione medica</summary>

**🖋 Titolo del messaggio:** Hai una nuova prescrizione medica

🗒 **Testo del messaggio**:

\[Inserire la descrizione della prescrizione medica]

Hai ricevuto una prescrizione medica per \<nome-prescrizione>.

Ente: \<ente erogatore>

Medico: \<nome> \<cognome>

Codice impegnativa: \<codice impegnativa>

Scadenza: \<gg/mm/aa>

**🪄 Pulsante:** n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio e che hanno abilitato il fascicolo sanitario elettronico.

**Quando inviarlo**: Quando è stato emessa la prescrizione

**User story**: Come cittadino voglio ricevere notifica dell'emissione di prescrizioni a mio nome

</details>

### Prenotazione appuntamento

<details>

<summary>Conferma prenotazione appuntamento per prestazione</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio**:&#x20;

Ti attendiamo per effettuare \<oggetto dell’appuntamento>.

Il numero della prenotazione è: \<nnnn>.

**Dove:** \<indirizzo>

**Quando:** \<gg/mm/aaaa> alle \<hh:mm>

Ti arriverà un messaggio con l'avviso da pagare per questa prestazione.&#x20;

Potrai pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: Gestisci prenotazione

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio e che hanno abilitato il fascicolo sanitario elettronico.

**Quando inviarlo**: Quando prenotazione è stata confermata

**User story**: Come cittadino voglio ricevere una conferma quando l’appuntamento viene correttamente registrato e le relative informazioni utili.

</details>

<details>

<summary>Promemoria appuntamento</summary>

**🖋 Titolo del messaggio:** Ricordati del tuo appuntamento

🗒 **Testo del messaggio:**

Ti ricordiamo il tuo appuntamento per \<oggetto dell’appuntamento>.

Il numero della prenotazione è: \<nnnn>.

**Dove:** \<indirizzo>

**Quando:** \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄  Pulsante:** Gestisci prenotazione

***

**Destinatari**: Tutti i cittadini che hanno effettuato una prenotazione o hanno ricevuto un appuntamento.

**Quando inviarlo**: Quando l’appuntamento è imminente.

**User story**: Come cittadino voglio ricevere promemoria dei miei appuntamenti.

***

:information\_source: Consigliamo di inviare il promemoria per gli appuntamenti almeno 3 giorni prima dell'appuntamento stesso se non si hanno già tempistiche da seguire.&#x20;

</details>

### Pagamento

<details>

<summary>Avviso di pagamento prestazioni</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C'è un avviso da pagare intestato a \<nome e cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)&#x20;

***

**Destinatari:** Tutti i cittadini residenti nell'area geografica di azione del servizio e che hanno prenotato una prestazione sanitaria.

**Quando inviarlo:** Quando è richiesto il pagamento del servizio.

**User story:** Come cittadino voglio ricevere un promemoria quando ho un nuovo pagamento.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento prestazioni: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per \<oggetto appuntamento> con prenotazione \<nnnn> per il \<gg/mm/aaaa> sta per scadere.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)&#x20;

***

**Destinatari:** Tutti i cittadini residenti nell'area geografica di azione del servizio e che hanno prenotato una prestazione sanitaria.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sollecitare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento rette: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento per \<oggetto appuntamento> con prenotazione \<nnnn> per il \<gg/mm/aaaa> è scaduto il \<gg/mm/aaaa>.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)&#x20;

***

**Destinatari:** Tutti i cittadini residenti nell'area geografica di azione del servizio che hanno una prenotato una prestazione sanitaria.

**Quando inviarlo:** Quando il pagamento non è stato effettuato entro il termine.

**User story:** Come cittadino vorrei ricevere promemoria sulla scadenza dei miei avvisi di pagamento.

</details>

### Richiesta rimborso

<details>

<summary>Richiesta di rimborso: accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta di rimborso è stata accolta

🗒 **Testo del messaggio**:&#x20;

La richiesta di rimborso per \<tipologia di prestazione> è stata accolta.

**Ti rimborseremo**: <00,00> €

**Entro il**: \<gg/mm/aaaa>

**🪄 Pulsante**: n/a

***

**Destinatari:** Tutti i cittadini che hanno presentato richiesta di rimborso.

**Quando inviarlo:** Quando la richiesta di rimborso è confermata dall’ente.

**User story:** Come cittadino voglio ricevere aggiornamenti sull’emissione dei rimborsi richiesti.

</details>

<details>

<summary>Richiesta di rimborso: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta di rimborso non è stata accolta

🗒 **Testo del messaggio**:&#x20;

La domanda per rimborso per \<tipologia di prestazione> non è stata accolta.&#x20;

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari:** Tutti i cittadini che hanno presentato richiesta di rimborso.

**Quando inviarlo:** Quando la richiesta di rimborso è rigettata dall’ente.

**User story:** Come cittadino voglio ricevere aggiornamenti sull’emissione dei rimborsi richiesti.

</details>

<details>

<summary>Avvenuto rimborso</summary>

**🖋 Titolo del messaggio:** Il tuo rimborso è in arrivo

🗒 **Testo del messaggio**:&#x20;

Il gg/mm/aaaa abbiamo emesso un rimborso per \<oggetto prestazione>.&#x20;

**Ti abbiamo rimborsato**: <00,00> €

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

**🪄 Pulsante**: Vedi ricevuta

***

**Destinatari:** Tutti i cittadini che hanno presentato richiesta di rimborso, il cittadino che ha ricevuto il rimborso

**Quando inviarlo:** Quando la domanda è confermata dall’ente

**User story:** Come cittadino voglio ricevere aggiornamenti sull’emissione dei rimborsi richiesti

</details>

### Rilascio documento

<details>

<summary>Emissione referto</summary>

**🖋 Titolo del messaggio:** C'è un nuovo referto

🗒 **Testo del messaggio**:&#x20;

Il \<gg/mm/aaaa>, alle ore \<hh:mm>, è stato pubblicato \<nome-referto> da \<ente> \<nome-medico>.

Per ulteriori informazioni, \[visita il fascicolo sanitario elettronico]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno abilitato il fascicolo sanitario elettronico.

**Quando inviarlo**: Quando il medico o l'ente rilascia un documento per il cittadino

**User story**: Come cittadino voglio ricevere notifica dei documenti che sono rilasciati sul mio fascicolo

</details>

<details>

<summary>Emissione certificato</summary>

**🖋 Titolo del messaggio:** C'è un nuovo certificato

🗒 **Testo del messaggio**:&#x20;

Il \<gg/mm/aaaa>, alle ore \<hh:mm>, è stato pubblicato \<nome-certificato>  da \<ente> \<nome-medico>.

Per ulteriori informazioni, \[visita il fascicolo sanitario elettronico]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno abilitato il fascicolo sanitario elettronico.

**Quando inviarlo**: Quando il medico o l'ente rilascia un documento per il cittadino

**User story**: Come cittadino voglio ricevere notifica dei documenti che sono rilasciati sul mio fascicolo

</details>

<details>

<summary>Emissione libretto</summary>

**🖋 Titolo del messaggio:** Il tuo libretto

🗒 **Testo del messaggio**:&#x20;

Il \<gg/mm/aaaa>, alle ore \<hh:mm>, è stato pubblicato \<nome-libretto>  da \<ente> \<nome-medico>.

Per ulteriori informazioni, \[visita il fascicolo sanitario elettronico]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno abilitato il fascicolo sanitario elettronico.

**Quando inviarlo**: Quando il medico o l'ente rilascia un documento per il cittadino

**User story**: Come cittadino voglio ricevere notifica dei documenti che sono rilasciati sul mio fascicolo

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

{% file src="../.gitbook/assets/IO - Template servizi - Prestazioni sanitarie (2).xlsx" %}
{% endhint %}
