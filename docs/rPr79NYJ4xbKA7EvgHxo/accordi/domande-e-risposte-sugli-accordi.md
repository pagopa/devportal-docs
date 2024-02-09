# ❓ Domande e risposte sugli Accordi

<details>

<summary>Quali sono le formule contrattuali possibili per aderire all'app IO?</summary>

Esistono due tipologie di Accordo per sottoscrivere l'adesione a IO:

* l'Accordo **Base**, che include l'opzione per l'invio dei Messaggi "**Fast**" regolata da appositi [Termini Aggiuntivi](https://docs.pagopa.it/io-documentazione-tecnica/#termini-aggiuntivi)
* l'Accordo **Premium**

Da un punto di vista delle funzionalità offerte, sono disponibili tre opzioni di utilizzo dell'app IO, con focus sull'invio dei Messaggi:&#x20;

* Base
* "Fast"
* Premium

Ciascuna di queste opzioni presenta [differenti caratteristiche](https://docs.pagopa.it/kb-enti-contratti/domande-frequenti/domande-e-risposte-sugli-accordi#in-cosa-differiscono-le-varie-tipologie-di-prodotto-offerte) a valore incrementale.

</details>

<details>

<summary>Esistono dipendenze tra i vari Accordi di adesione?</summary>

Per poter accedere all'Accordo Premium, l'Ente deve aver già sottoscritto l'Accordo Base e questo deve essere in corso di validità.

Nel caso in cui l'Ente, in sede di sottoscrizione dell'Accordo Base, abbia scelto l'invio di Messaggi Fast, la successiva sottoscrizione dell'Accordo Premium fa automaticamente recedere dai [Termini Aggiuntivi "Fast"](https://docs.pagopa.it/io-documentazione-tecnica/#termini-aggiuntivi) (vedi [#in-cosa-differiscono-le-varie-tipologie-di-prodotto-offerte](domande-e-risposte-sugli-accordi.md#in-cosa-differiscono-le-varie-tipologie-di-prodotto-offerte "mention")).

</details>

<details>

<summary>In cosa differiscono i due Accordi di adesione, in termini di funzionalità di prodotto disponibili?</summary>

L'**Accordo Base** include le caratteristiche di integrazione standard, nel dettaglio:

1. l'accesso alle procedure di adesione a IO, tramite l'apposita [Area Riservata](https://selfcare.pagopa.it/) dell'omonimo portale
2. [la creazione e la manutenzione di Servizi su IO](https://docs.pagopa.it/manuale-servizi/)
3. [l'invio di Messaggi](https://docs.pagopa.it/io-guida-tecnica/funzionalita/inviare-un-messaggio), nel rispetto delle linee guida in vigore
4. il recupero delle informazioni sullo [stato di processamento dei Messaggi](https://docs.pagopa.it/io-guida-tecnica/api/api-messaggi/get-message) inviati (preso in carico, consegnato al Cittadino etc.)
5. il recupero delle [informazioni sullo stato di un Cittadino rispetto al suo profilo in app](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/get-a-user-profile-using-post) (effettiva presenza su IO, abilitazione di un Servizio a contattare quel Cittadino etc.)

La connettività API è fornita da PagoPA verificando che il rateo di chiamate (per account) non superi una soglia predeterminata, al fine di preservare l'integrità della piattaforma.

L'utilizzo di IO in regime di Accordo Base è **gratuito**.

I **Termini Aggiuntivi "Fast"**, che si sommano a quanto previsto dall'Accordo Base, offrono:

* connettività API di integrazione con rateo di invocazione potenziato (\~250 chiamate API ogni 5 secondi a livello di account)

L'utilizzo di  IO in regime "Fast" prevede un modello di **tariffazione** come dettagliato nel testo dei [termini aggiuntivi all'Accordo](https://docs.pagopa.it/io-documentazione-tecnica/#termini-aggiuntivi); pertanto, tutti i Messaggi inviati dall'Ente saranno fatturati di conseguenza.

L'**Accordo Premium**, in aggiunta a quanto previsto dall'Accordo Base e dai Termini Aggiuntivi Fast, offre:

1. **stato di lettura**: la possibilità di conoscere, in fase di recupero delle informazioni su un Messaggio inviato, se questo sia stato aperto in app dal destinatario
2. **stato di pagamento**: la possibilità di conoscere, in fase di recupero delle informazioni su un Messaggio inviato, se l'eventuale avviso di pagamento da questo veicolato sia stato saldato
3. **reminder**: l'invio da parte del sistema di promemoria push automatici al Cittadino se [non legge un Messaggio](https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi-io#come-funziona-il-reminder-per-i-messaggi-non-letti) e se [non paga un eventuale avviso](https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi-io#come-funziona-il-reminder-per-i-messaggi-non-pagati) ad esso allegato, ovvero all'approssimarsi della relativa [scadenza](https://docs.pagopa.it/manuale-servizi/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi/messaggi-che-veicolano-una-scadenza), se dichiarata dall'Ente
4. **allegati**: la possibilità di [allegare documenti PDF/A ai Messaggi](https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi-io#come-si-aggiungono-allegati-a-un-messaggio)

L'utilizzo di IO in regime di Accordo Premium prevede una **tariffazione** specifica con possibilità di acquisto di **carnet di Messaggi prepagati** oltre alla normale **tariffazione a consumo**, secondo quanto dettagliato nel testo del relativo Accordo.

</details>

<details>

<summary>Quali tipologie di Enti possono accedere agli Accordi?</summary>

Gli Enti che possono sottoscrivere l'Accordo Base sono quelli indicati nell’art. 2 del decreto legislativo 7 marzo 2005, n. 82 (cd. "CAD") che, al momento, prevede le seguenti quattro tipologie principali:

1. Enti di Pubblica Amministrazione (PA)
2. Gestori di Pubblico Servizio (GPS)
3. Società a Controllo Pubblico (SCP)
4. Partner Tecnologici (PT)

L'Ente dichiara sotto la propria responsabilità di appartenere a una delle suddette categorie.

Tutti gli Enti possono accedere agli Accordi Base e Premium.&#x20;

</details>

<details>

<summary>Dove posso trovare i testi degli Accordi con IO?</summary>

Gli Accordi attualmente disponibili sono visionabili sulla [pagina dedicata](https://docs.pagopa.it/io-accordi-di-adesione/).

</details>

<details>

<summary>Ho acquistato un carnet prepagato: posso acquistarne un altro?</summary>

Puoi acquistare un carnet solo contestualmente alla sottoscrizione dell'Accordo Premium. Esaurito il carnet, passerai automaticamente alla tariffazione a consumo.

</details>

<details>

<summary>Come funziona il sistema degli scaglioni nel calcolo del costo dei Messaggi?</summary>

A seconda dell'Accordo che hai sottoscritto, in caso di tariffazione a consumo il costo di ciascun messaggio a pagamento è determinato sulla base del volume di invii nell'arco dell'anno solare: più messaggi spedisci meno questi ti costeranno.

Il 1° gennaio di ogni anno il conteggio si azzera e tornerai automaticamente al primo scaglione definito.

Trovi tutti i dettagli all'interno degli [Accordi di adesione a IO](https://docs.pagopa.it/io-accordi-di-adesione/) e dei [Termini Aggiuntivi](https://docs.pagopa.it/io-documentazione-tecnica/#termini-aggiuntivi).

</details>

<details>

<summary>Cosa accade se cambio tipologia di Accordo prima di esaurire uno scaglione di invii?</summary>

Il conteggio dei Messaggi inviati viene azzerato: all'attivazione del nuovo Accordo, la fatturazione avverrà secondo le relative regole.

</details>

<details>

<summary>Cosa accade quando esaurisco i Messaggi acquistati col carnet prepagato?</summary>

Passi automaticamente alla tariffazione a consumo, secondo l'Accordo che hai sottoscritto.

</details>
