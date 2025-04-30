# Vaccinazioni

Erogare il servizio tramite l'app IO permette agli enti di:

* ridurre il numero di prenotazioni non disdette e di conseguenza ridurre i tempi delle liste d'attesa, ottimizzando l’erogazione delle visite;
* promuovere in modo più efficiente le campagne sanitarie.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Vaccinazioni</td></tr><tr><td><strong>Argomento</strong></td><td>Salute</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda la somministrazione di vaccini e relativi richiami.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni sulle campagne vaccinali attive;</li><li>ricevere conferma di prenotazione appuntamento;</li><li>ricevere promemoria per appuntamenti imminenti;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Scopri di più</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (60).png" alt=""><figcaption><p>Ciclo di vita ed eventi del servizio Vaccinazioni</p></figcaption></figure>

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

Le campagne vaccinali gratuite possono essere promosse ed erogate con modalità differenti.

<details>

<summary>Disponibilità nuovo vaccino</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Nuova campagna vaccinale

🗒 **Testo del messaggio**:

\[Inserire qui una breve descrizione della campagna vaccinale, da completare a cura e responsabilità dell'ente]

Prenota il tuo appuntamento per \<nome vaccino>.

**Dove**: \<luogo>

**Cosa portare**: \[indicazione sui documenti da portare]

Per ulteriori informazioni sul programma, \[visita questo sito]\(URL).

**🪄 Pulsante**: Prenota un appuntamento

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio e che hanno abilitato il fascicolo sanitario elettronico.

**Quando inviarlo**: Quando si raggiunge una determinata età o idoneità

**User story**: Come cittadino voglio ricevere notifica della mia idoneità per programmi di screening regionali dedicati a me.

</details>

### Prenotazioni

<details>

<summary>Conferma prenotazione appuntamento per vaccino</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Il tuo appuntamento

🗒 **Testo del messaggio:**

Hai prenotato un appuntamento per \<oggetto dell’appuntamento>.

Il numero della prenotazione è: \<nnnn>.

**Dove:** \<indirizzo>

**Quando:** \<gg/mm/aaaa> alle \<hh:mm>

**Cosa portare**: \[indicazione sui documenti da portare]

Per ulteriori informazioni sul programma, \[visita questo sito]\(URL).

**🪄 Pulsante:** Gestisci prenotazione

***

**Destinatari:** Tutti i cittadini residenti nell’area di azione del servizio e che hanno abilitato il fascicolo sanitario elettronico.

**Quando inviarlo:** Quando si raggiunge una determinata età o idoneità e quando è stato emesso l’appuntamento

**User story:** Come cittadino voglio ricevere conferma dei miei appuntamenti.

</details>

<details>

<summary>Promemoria appuntamento</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Ricordati del tuo appuntamento

🗒 **Testo del messaggio:**

Ti ricordiamo del tuo appuntamento per \<oggetto dell’appuntamento>.

Il numero della prenotazione è: \<nnnn>.

**Dove:** \<indirizzo>

**Quando:** \<gg/mm/aaaa> alle \<hh:mm>

**Cosa portare**: \[indicazione sui documenti da portare]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante:** Gestisci prenotazione

***

**Destinatari**: Tutti i cittadini che hanno aperto effettuato una prenotazione o hanno ricevuto un appuntamento.

**Quando inviarlo**: Quando l’appuntamento è imminente.

**User story**: Come cittadino voglio ricevere promemoria dei miei appuntamenti.

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

{% file src="../.gitbook/assets/IO - Template servizi - Vaccinazioni.xlsx" %}
{% endhint %}
