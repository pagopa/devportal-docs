# Prevenzione

Erogare il servizio tramite l'app IO permette agli enti di:

* ridurre il numero di prenotazioni non disdette e di conseguenza ridurre i tempi delle liste d'attesa, ottimizzando l’erogazione delle visite;
* promuovere in modo più efficiente le campagne sanitarie.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Prevenzione</td></tr><tr><td><strong>Argomento</strong></td><td>Salute</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda le campagne di prevenzione e screening.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni sulle campagne di prevenzione e screening;</li><li>ricevere comunicazioni promozionali;</li><li>ricevere aggiornamenti sull'offerta di servizi innovativi;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Scopri di più</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (59).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Prevenzione</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio, può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

{% hint style="warning" %}
**Trattamento dati sensibili**

I messaggi che questo servizio invia al cittadino spesso includono dati sensibili come il nome della visita da effettuare. Per questo, il servizio è considerato come sensibile e richiede l'utilizzo dell'attributo `require_secure_channels` la cui integrazione è spiegata all'interno della [Guida Tecnica all'Integrazione dei Servizi.](https://app.gitbook.com/s/mzwjFv2XaE1mjbz7I8gt/funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi#require_secure_channels)

L'utilizzo di questo attributo permette di anonimizzare le notifiche push e mail, se previste dalle impostazioni del cittadino.\
\
Secondo quanto disposto dal paragrafo [7.3 delle Linee Guida di IO](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto_allegati/213121604430O__OLG+Punto+accesso+telematico+servizi+PA_3.11.2021.pdf), **non è ammesso** includere nel titolo dati sensibili, mentre deve essere **limitato** al minimo l'utilizzo all'interno del corpo del messaggio,

Tra i dati sensibili rientrano, ad esempio:

* nome appuntamento, esame, prescrizione, farmaci;
* nome della struttura;
* esito dei referti.
{% endhint %}

### Comunicazioni alla cittadinanza

I programmi di screening possono avere diverse modalità di esecuzione che dipendono dalla modalità di erogazione dell'ente e dal tipo di screening.

<details>

<summary>Disponibilità programma screening</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Partecipa al programma di screening

🗒 **Testo del messaggio**:

\[Inserire qui la descrizione del programma di screening, da compilare a cura e responsabilità dell'ente]

Prenota un appuntamento per \<nome screening>.

**Dove**: \<luogo>

**Cosa portare**: \[indicazione sui documenti da portare]

L'esame e gli eventuali controlli successivi sono gratuiti.

Per ulteriori informazioni sul programma, \[visita questo sito]\(URL).

**🪄 Pulsante**: Prenota appuntamento

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio e che hanno abilitato il fascicolo sanitario elettronico.

**Quando inviarlo**: Quando si raggiunge una determinata età o idoneità

**User story**: Come cittadino voglio ricevere notifica della mia idoneità per programmi di screening regionali dedicati a me.

</details>

### Prenotazioni

<details>

<summary>Conferma prenotazione appuntamento per lo screening</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Ti attendiamo per effettuare \<oggetto dell’appuntamento>.

Il numero della prenotazione è: \<nnnn>.

**Dove:** \<indirizzo>

**Quando:** \<gg/mm/aaaa> alle \<hh:mm>

L'esame e gli eventuali controlli successivi sono gratuiti. Ricordati di portare con te questo messaggio e la tessera sanitaria.

Per ulteriori informazioni sul programma, \[visita questo sito]\(URL).

**🪄 Pulsante:** Gestisci prenotazione

***

**Destinatari:** Tutti i cittadini stranieri residenti nell’area di azione del servizio e che hanno abilitato il fascicolo sanitario elettronico.

**Quando inviarlo:** Quando si raggiunge una determinata età o idoneità e quando è stato emesso l’appuntamento

**User story:** Come cittadino voglio ricevere conferma dei miei appuntamenti.

</details>

<details>

<summary>Promemoria appuntamento</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Ricordati del tuo appuntamento

🗒 **Testo del messaggio:**

Ti ricordiamo il tuo appuntamento per \<oggetto dell’appuntamento>.

Il numero della prenotazione è: \<nnnn>.

**Dove:** \<indirizzo>

**Quando:** \<gg/mm/aaaa> alle \<hh:mm>

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Gestisci prenotazione

***

**Destinatari**: Tutti i cittadini che hanno aperto effettuato una prenotazione o hanno ricevuto un appuntamento.

**Quando inviarlo**: Quando l’appuntamento è imminente.

**User story**: Come cittadino voglio ricevere promemoria dei miei appuntamenti.

</details>

### Analisi

<details>

<summary>Erogazione kit per screening</summary>

**🖋 Titolo del messaggio:** Il tuo kit per il programma di screening

🗒 **Testo del messaggio**:

\[Inserire qui una breve descrizione del programma di screening, da compilare a cura e responsabilità dell'ente]

\[Descrivere in che modalità, se prevista, avviene la consegna del kit]

\[Inserire se prevista la modalità di raccolta campioni]

L'esito del test sarà consegnato entro il \<gg/mm/aa>. Se non dovesse arrivare nei tempi previsti, ti preghiamo di contattarci \[modalità di contatto].

L'esame e gli eventuali controlli successivi sono gratuiti. Ricordati di portare con te questo messaggio e la tessera sanitaria.

Per ulteriori informazioni sul programma, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno abilitato il fascicolo sanitario elettronico.

**Quando inviarlo**: Quando si raggiunge una determinata età o idoneità

**User story**: Come cittadino voglio ricevere notifica della mia idoneità per programmi di screening regionali dedicati a me.

</details>

<details>

<summary>Promemoria consegna campione analisi</summary>

**🖋 Titolo del messaggio:** Ricordati della tua consegna

🗒 **Testo del messaggio**:

\[Inserire qui una breve descrizione del programma di screening, da compilare a cura e responsabilità dell'ente]

Il campione \<nome campione> può essere riconsegnato nella sede in \<indirizzo> entro il \<gg/mm/aaa>.

L'esito del test sarà consegnato entro il \<gg/mm/aa>. Se non dovesse arrivare nei tempi previsti, ti preghiamo di contattarci \[modalità di contatto].

L'esame e gli eventuali controlli successivi sono gratuiti. Ricordati di portare con te questo messaggio e la tessera sanitaria.

Per ulteriori informazioni sul programma, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio e che hanno abilitato il fascicolo sanitario elettronico.

**Quando inviarlo**: Quando la scadenza della consegna campione è vicina

**User story**: Come cittadino voglio ricevere notifica della mia idoneità per programmi di screening regionali dedicati a me.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Prevenzione.xlsx" %}
{% endhint %}
