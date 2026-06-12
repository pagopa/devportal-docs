# Sviluppo del processo TO-BE

* **Integrazione sincrona:** attualizzazione complessiva della posizione debitoria al momento del pagamento a cura dell’Ente;
* **Integrazione asincrona:** gestione tecnica e attualizzazione della posizione debitoria a cura di PagoPA S.p.A. sulla base delle informazioni fornite dall’Ente.
* **Integrazione manuale:** non prevede nessuna forma di comunicazione tra i sistemi informatici di SEND e quelli dell’Ente.

I soggetti generalmente interessati nel processo di notificazione TO-BE per l’Ente sono:

| Soggetto 1 | Gestionale dei pagamenti: incaricato del gestionale contenente l’archivio dei pagamenti                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Soggetto 2 | PT SEND: si occupa del deposito degli atti di notifica su SEND e comunica con SEND per acquisire le informazioni legate all’intero ciclo di vita della notifica, incluso il costo di notificazione analogica |
| Soggetto 3 | Postalizzatore: si occupa delle operazioni di postalizzazione (consolidatore e recapitisti). Tramite integrazioni, comunica con SEND                                                                         |
| Soggetto 4 | PT pagoPA: il partner tecnologico incaricato della gestione dei pagamenti, comunica al Soggetto 1 il pagamento dell’atto                                                                                     |
| Soggetto 5 | PDF creator: creatore del PDF che rispetta il requisito della firma digitale (gestionale o altro soggetto)                                                                                                   |



Il processo di notificazione TO-BE si svolge di norma come di seguito riportato:

1. Creazione della posizione debitoria con relativo IUV dal “Soggetto 1”. &#x20;
2. Produzione dell’atto, degli avvisi pagoPA e ulteriori allegati per il pagamento dal “Soggetto 5” e invio a SEND dal “Soggetto 2”. \*
3. SEND dopo aver effettuato le verifiche preliminari, restituisce lo IUN e avvia la gestione della notifica al fine di inviarla al destinatario digitalmente o in via analogica.&#x20;
4. Esposizione da SEND degli eventi e gli stati relativi al ciclo di vita di una notifica che l’Ente può monitorare. Per tracciare i passaggi di stato rilevanti, la Piattaforma produce [attestazioni opponibili ai terzi](https://docs.pagopa.it/manuale-operativo-pn/piattaforma-notifiche-digitali-manuale-operativo/comprendere-lo-stato-della-notifica-e-gli-atti-disponibili-sul-portale/attestazione-opponibili-ai-terzi) e altra documentazione utile.
5. Gestione del pagamento in modalità sincrona, asincrona o manuale (cfr. sezioni successive dedicate).

(\*) N.B.: Si specifica che tutti i documenti caricati su SEND dalla PA mittente devono possedere delle precise caratteristiche, volte a garantire la valenza legale di questi ed a permettere la corretta elaborazione digitale e la successiva stampa fisica tramite processi industriali. A titolo esemplificativo non esaustivo:

1. **Firma digitale**: la necessità che la PA mittente firmi digitalmente i documenti caricati su SEND discende dall'esigenza di garantire l’identificabilità dell’autore, l’integrità e l’immodificabilità del documento, che se sottoscritto digitalmente si presume riconducibile al titolare del dispositivo di firma ai sensi dell’articolo 21, comma 2 CAD, e soddisfa il requisito della forma scritta. In coerenza con tale impostazione, il [Manuale Operativo](https://docs.pagopa.it/manuale-operativo/piattaforma-notifiche-digitali-manuale-operativo/mittente/referente-tecnico-operatore/utilizzo-di-pn-attraverso-api-b2b/invio-notifiche-tramite-api-b2b) prevede la sottoscrizione digitale di tutti i documenti allegati, a prescindere dal contenuto.
2. **Specifiche tecniche**: I documenti caricati su SEND dalla PA mittente devono (i) essere in formato PDF/A, (ii) avere dimensioni fisiche conformi al formato A4, (iii) possedere una “area di sicurezza” che regola lo spazio effettivamente utilizzabile per la stampa dei documenti da inoltrare. E' responsabilità della PA mittente garantire che i documenti siano aderenti alle note tecniche definite da SEND, su cui, per maggiore dettaglio, si rimanda al [Manuale Operativo](https://docs.pagopa.it/manuale-operativo/piattaforma-notifiche-digitali-manuale-operativo/il-processo-di-notificazione/specifiche-tecniche-dei-pdf-allegati-alla-notifica).&#x20;

## Integrazione sincrona

La modalità di integrazione sincrona presuppone che il PT pagoPA sia a conoscenza del fatto che l’atto notificato su SEND contiene un avviso di pagamento e quindi l’importo deve essere attualizzato con i costi di notifica.

Si tratta di un tipo di attualizzazione complessiva della posizione debitoria al momento del pagamento a cura dell’Ente, per considerare eventuali variazioni del costo di notifica.

Per consentire la corretta attualizzazione è necessario che il PT pagoPA sia a conoscenza dell’esigenza di recepire eventuali variazioni al costo di notifica.

Pertanto, è richiesto uno scambio informativo tra PT di piattaforma pagoPA e il PT SEND al fine di ottenere anche il costo attualizzato della notifica inviata tramite SEND.

Per permettere l’attualizzazione, SEND prevede un API (retrieveNotificationPrice) che, dati gli estremi di un avviso pagoPA, restituisce anche il costo attuale della notifica associata al pagamento.&#x20;

Di seguito si riporta una rappresentazione grafica delle interazioni tra i vari attori coinvolti nel processo di integrazione sincrona:&#x20;

![](https://lh7-eu.googleusercontent.com/JvAebpFBYEQzDsWsOjaKoNqrlPAViP4iZ5dDubPSHTSHhzmu2txL3FjnNCOmAaKv448QqmmLk5aXDQJl_jgM91Uvx-LptJ2NDU8_HyefoXDOHwGn1zXQKkbehYBP0I0jEBXiME4aJef8)

Per un maggiore dettaglio sull’integrazione in modalità sincrona si rimanda al [Modello di Integrazione](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/).

## Integrazione asincrona

Si tratta di un’integrazione mediante la quale l’Ente creditore, direttamente connesso e/o intermediato, avendo creato nell’archivio posizioni debitorie una copia esatta del proprio archivio pagamenti in attesa, delega a pagoPA la gestione della fase online del pagamento. Gli aggiornamenti della posizione debitoria saranno eseguiti direttamente dall’Ente creditore/Partner con riferimento alle variazioni non correlate alle dinamiche della gestione delle notifiche. Di contro, nel caso in cui ci fosse la necessità di modificare la posizione debitoria con riferimento alla quota derivante dalla segnalazione/presenza di una notifica, l’aggiornamento sarà gestito da pagoPA, per mezzo di opportune funzionalità che attualizzeranno l’importo, allineandolo con quello riportato nella notifica.

Pertanto, è necessario che il PT pagoPA [(cfr. “Soggetto 4”, pagina 14)](https://docs.google.com/document/d/1m2vIow6PsPIic_YeaHfSp-9iePfkblYf/edit#heading=h.3l18frh) si integri con la piattaforma pagoPA, seguendo [specifiche attuative del nodo dei pagamenti](https://docs.pagopa.it/sanp/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone) (SANP).

SEND comunica tramite flusso informativo il costo di notifica complessivo al nodo pagoPA.&#x20;

La comunicazione tra SEND e la piattaforma pagoPA è infatti centralizzata, e l’Ente non dovrà occuparsi del recupero e aggiornamento del costo della notifica analogica o della componente a favore del gestore della piattaforma.&#x20;

Per quanto riguarda la componente prevista dal DPCM 30 maggio 2022 c.d. DPCM Costi a favore dei mittenti, si precisa che tale informazione viene raccolta da SEND (tramite il campo paFee) e comunicata all’Archivio Posizioni Debitorie in fase di attualizzazione.

Di seguito si riporta una rappresentazione grafica delle interazioni tra i vari attori coinvolti nel processo di integrazione asincrona:&#x20;

![](https://lh7-eu.googleusercontent.com/PtHxoWxqai29eZ9VGGS9d1vSotCAofrkxAQUl07Lr9YpLHaRycNVoXmXm6rmKGfYUlkyFkBQ7PD0SKpYKbG2gDruEPwrzo06A_MmrWVyC_LWDRbIiNRQdOIGrVoEm7_Wk3yeZoX-FUSg)

Per un maggiore dettaglio sull’integrazione in modalità asincrona si rimanda al [Modello di Integrazione](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/).

## Integrazione manuale

Come definito nel [modello di integrazione a SEND](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/), l’assenza di comunicazione tra i sistemi informatici di SEND e quelli dell’Ente implica l’impossibilità di verificare automaticamente lo stato della notifica e quindi l’accesso manuale a SEND per recuperare le attestazioni e cambi stato. Questo tipo di integrazione è utilizzabile solo per i casi d’uso che non comprendono l’attualizzazione della posizione debitoria.&#x20;

Di conseguenza, i casi di notifica che possono essere gestiti in questa modalità di integrazione sono relativi a notifiche di un limitato numero di atti che non richiedono un pagamento e per i quali l’Ente si accolla i costi di notifica. L'invio di notifiche che richiedono un pagamento è possibile nel momento in cui è comunque garantito l'aggiornamento del costo della notifica.&#x20;

Per un maggiore dettaglio sull’integrazione in modalità manuale si rimanda al [Modello di Integrazione](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/).
