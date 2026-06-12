# Manuale per onboarding degli Enti

## Glossario

* **Attestazioni opponibili ai terzi**: file firmati digitalmente da PagoPA S.p.A. con Sigillo Digitale Qualificato così come definito dal CAD e dotati di marcatura temporale certificata che vengono generati al verificarsi di alcuni eventi rilevanti per la notificazione;
* **Atto**: il documento informatico oggetto della notifica, firmato digitalmente e depositato su SEND dalla PA mittente, inteso come atto, provvedimento, avviso o comunicazione, reso disponibile telematicamente dall’amministrazione mittente su SEND come documento informatico crittografato;
* **AAR**: Avviso di Avvenuta Ricezione. L’atto formato dal Gestore, con il quale viene dato avviso al destinatario in ordine alle modalità di acquisizione del documento informatico oggetto di notificazione;
* **Codice IUN**: codice che identifica in modo univoco una notifica;
* **Destinatario**: chi riceve una notifica, sia esso persona fisica o giuridica, identificato tramite il Codice Fiscale;
* **Documenti allegati**: documenti allegati ad un atto;&#x20;
* **Indirizzo fisico (del destinatario)**: l’indirizzo al quale viene inoltrata una eventuale comunicazione cartacea;
* **Notifica**: un tipo di messaggio a valore legale;
* **PA Mittente**: le amministrazioni individuate dall’articolo 26, comma 2, lettera c), del decreto-legge 76/2020;&#x20;
* **Partner Tecnologico (PT)**: fornitori che implementano le attività di integrazione alla piattaforma e di cui è possibile avvalersi per un supporto nella gestione degli aspetti tecnici;
* **Raccomandata A/R o 890**: il mezzo cartaceo tramite cui viene inviata una notifica processata in maniera analogica. Può essere di tipo A/R o 890 a seconda della tipologia di invio scelta della PA mittente.
* **Raccomandata Semplice**: raccomandata informativa prevista nel caso in cui non sia possibile consegnare digitalmente l'AAR per PEC satura, non valida, non attiva o per ogni altro problema tecnico per cui non è possibile consegnare la PEC al destinatario;
* **Spese di notifica**: costi correlati all’invio della notifica, esigibili dal destinatario;
* **Workflow della notifica**: ciclo di vita della notifica, dal momento di presa in carico da parte di SEND all’esito del processo di notificazione;

## Premessa

Servizio Notifiche Digitali (SEND), anche nota come Piattaforma Notifiche Digitali di cui all'art. 26 del decreto-legge 76/2020 s.m.i. (di seguito “SEND”), è la piattaforma di gestione della notificazione di atti amministrativi che gestisce il ciclo di vita completo della notifica, dalla sua creazione da parte della Pubblica Amministrazione (PA) Mittente, che integra la piattaforma pagoPA per la gestione completa del pagamento.

<br>

SEND semplifica la gestione del processo di notificazione. La Pubblica Amministrazione mittente deve occuparsi del solo deposito su SEND dell’atto da notificare; sarà poi la piattaforma a occuparsi dell’invio, per via digitale o con l’invio della comunicazione cartacea.

## Obiettivo del documento

Obiettivo del presente documento è quello di supportare gli Enti e i relativi Partner Tecnologici nella fase di adesione a SEND - Servizio Notifiche Digitali, descrivendo il processo di onboarding e integrazione tecnologica con SEND. Inoltre, il documento si configura come punto di raccolta dei materiali prodotti dai team PagoPA S.p.A.

<br>

Qualora l’Ente riscontrasse la necessità di reperire maggiori dettagli sul processo descritto, può fare riferimento alla documentazione dettagliata elencata di seguito e citata nelle diverse sezioni del documento.&#x20;

<br>

1. **Contratto di adesione**: cfr. sezione successiva “Accordo di adesione e allegati – Area Riservata”
2. [**Allegati a contratto di adesione**](https://notifichedigitali.pagopa.it/pubbliche-amministrazioni/): gli allegati che l’ente è tenuto a inviare unitamente all'accordo di adesione, sono disponibili sul [Sito vetrina.](https://notifichedigitali.pagopa.it/documenti/)
3. **FAQ Enti**: le FAQ sono disponibili a [questo riferimento](https://docs.pagopa.it/send-faq-enti/argomenti/adesione/chi-puo-aderire).
4. **Costi di notificazione digitale e analogica**: la tabella costi può essere consultata nell’apposita sezione del [Sito vetrina](https://notifichedigitali.pagopa.it/documenti/).
5. **Lista codici tassonomici**: La lista dei codici tassonomici è reperibile tramite l’[apposita pagina](https://developer.pagopa.it/send/guides/knowledge-base/tassonomia-send) della documentazione tecnica.
6. **Link Privacy**: la PA mittente deve inviare al team Privacy di PagoPA S.p.A. il link della propria informativa sulla privacy via mail all’indirizzo [pn-linkinformativa@pagopa.it](mailto:pn-linkinformativa@pagopa.it).
7. **Workflow della notifica**: la descrizione del Workflow della notifica è disponibile sul [Developer Portal](https://developer.pagopa.it/).
8. [**Manuale operativo**](https://developer.pagopa.it/send/guides/manuale-operativo): il Manuale operativo di SEND è disponibile sul [Sito vetrina](https://docs.pagopa.it/manuale-operativo/).
9. **Descrizione API (B2B; invio notifica)**: la descrizione delle API utilizzate dalle Pubbliche Amministrazioni per inviare richieste di notifiche e ottenere informazioni sullo stato della richiesta di notifica e sulle comunicazioni effettuate, sono disponibili sul [Developer Portal](https://developer.pagopa.it/send/api/send-api-external-b2b-pa-bundle#/)[.](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/pagopa/pn-delivery/pn-openapi-prod/docs/openapi/api-external-b2b-pa-bundle.yaml)
10. [**Knowledge Base di SEND**](https://developer.pagopa.it/send/guides/knowledge-base): il documento che raccoglie gli insight tecnici di SEND è disponibile sul [Developer Portal](https://developer.pagopa.it/).
11. [**Modello di integrazione**](https://developer.pagopa.it/send/guides/modello-di-integrazione): il documento che descrive i diversi scenari di integrazione di SEND è disponibile sul [Developer Portal](https://developer.pagopa.it/).
12. [**Test di validazione Validator Tool**](https://developer.pagopa.it/send/guides/knowledge-base/readme/pn-test-di-validazione-avvenuta-integrazione-con-piattaforma-notifiche): il documento che raccoglie i test che una PA mittente, o il suo partner tecnologico, devono effettuare e documentare per validare l’avvenuta integrazione con SEND è disponibile sul [Developer Portal](https://developer.pagopa.it/).

\
<br>

In caso di incoerenza tra le informazioni riportate nel presente documento e quelle presenti sulla documentazione di dettaglio, si invita l’Ente a far fede a quanto riportato nei link presenti sul [Sito vetrina](https://notifichedigitali.pagopa.it/pubbliche-amministrazioni/).

<br>

Il manuale illustra il modello operativo standard per l’adeguamento dei processi interni delle Pubbliche Amministrazioni a SEND.&#x20;

<br>

Di seguito si riporta l’elenco delle attività che l’Ente e il Partner Tecnologico (PT) sono tenuti a seguire per portare a termine in maniera corretta il processo di adesione e integrazione alla piattaforma:

<br>

* **Adempimenti amministrativi e preliminari (Owner: Ente)**: messa a disposizione e sottoscrizione dell’accordo di adesione dell’Ente e ulteriore documentazione necessaria, attestazione PT, processi di fatturazione tramite l’apposito Portale.
* **Scelta dello use-case (Owner: Ente)**: Individuazione degli use-case per i quali utilizzare SEND, a valle di un assessment interno che aiuti l’Ente ad identificare gli impatti dell’utilizzo di SEND sui propri sistemi interni.
* **Analisi del processo attuale (Owner: Ente; PT)**: Censimento dell’attuale processo di notifica interno attraverso una mappatura effettuata inizialmente da un punto di vista funzionale, e successivamente da un punto di vista tecnologico, se già digitalizzato anche solo in parte.
* **Sviluppo del processo TO-BE (Owner: Ente; PT)**: Definizione di un processo di notifica digitale TO-BE con chiara individuazione degli impatti sui sistemi dell’Ente. È auspicabile che l’Ente non trasli il processo fisico, ma che lo «ripensi digitalmente».
* **Sviluppo dell’integrazione (Owner: PT o Ente)**: Integrazione del processo digitale dell’Ente secondo le procedure di SEND, anche tramite un supporto di documentazione tecnica, ivi compreso il “Manuale Operativo”, nonché tramite le FAQ. In alternativa si può ricorrere all’invio manuale per le sole notifiche di atti che non prevedono pagamento.
* **Test E2E (Owner: PT o Ente)**: Test del corretto invio della notifica digitale attraverso il dispiegamento di almeno i test case prescelti da PagoPA S.p.A.. Tali test sono da effettuare a livello di singolo Ente.
* **Rilascio in produzione e avvio in esercizio (Owner: Ente; PT)**: il processo viene rilasciato in produzione ed utilizzato per le attività legate agli use-case considerati.

<br>

Per un maggior dettaglio delle attività descritte si rimanda alle sezioni successive del presente documento.

<br>

## Adempimenti preliminari all’onboarding

Gli adempimenti e le relative scadenze sono da rispettare durante il corso di tutto il processo.&#x20;

<br>

Preliminarmente agli adempimenti e all’avvio delle attività di onboarding, è necessaria una verifica che il soggetto sia in perimetro SEND, tramite consultazione delle [FAQ amministrative](https://docs.pagopa.it/faq-enti).&#x20;

<br>

Se il soggetto è anche in perimetro PDND Interoperabilità (art. 2 comma 2 CAD), si veda il successivo paragrafo “Soggetti in perimetro PDND Interoperabilità”.

<br>

Di seguito sono elencati e descritti gli adempimenti cui è tenuto l’Ente con l’ausilio del Partner Tecnologico (PT) scelto.

<br>

### Accordo di adesione e allegati – Area Riservata





Verificato che il soggetto possa aderire a SEND (ex art. 26 del DL 76/2020, comma 2, lettera c) e individuato il Partner Tecnologico (PT), esso procederà alla sottoscrizione dell’accordo di adesione secondo le seguenti modalità:&#x20;

<br>

1. avviare il processo di adesione disponibile a [questo link](https://selfcare.pagopa.it/onboarding/prod-pn) per inserire le informazioni relative all’ente e ricevere via PEC il contratto;
2. scaricare, firmare digitalmente il contratto ricevuto via PEC e ricaricarlo in Area Riservata attraverso il link presente nell’e-mail, seguendo i passaggi descritti nella [guida](https://docs.pagopa.it/area-riservata-enti-piattaforma-notifiche/) messa a disposizione. Prima di sottoscrivere il contratto, è necessario prendere inoltre visione degli [SLA](https://docs.pagopa.it/sla-di-servizio/) di servizio e degli ulteriori allegati presenti sul sito;
3. inviare via mail ([pn-linkinformativa@pagopa.it](mailto:pn-linkinformativa@pagopa.it)) il link dell’informativa sul trattamento dei dati pubblicata sul proprio sito a PagoPA S.p.A.

<br>

Qualora l’Ente, pur rientrando nel perimetro soggettivo di SEND, non sia ricompreso nelle categorie descritte su[ Area Riservata](https://selfcare.pagopa.it/auth/login), si riporta di seguito il processo di fall-back:

<br>

1. Richiedere a PagoPA S.p.A l’invio dei documenti necessari per aderire a SEND;
2. Ricevere, compilare e inviare all’indirizzo PEC [pagopaspa@pec.pagopa.it](mailto:pagopa@pec.governo.it) il Contratto di Adesione firmato digitalmente e il Documento di Termini e Condizioni compilato ove richiesto;
3. Inviare via mail ([pn-linkinformativa@pagopa.it](mailto:pn-linkinformativa@pagopa.it)) il link dell’informativa sul trattamento dei dati pubblicata sul proprio sito a PagoPA S.p.A.

<br>

### Portale di fatturazione

Per espletare gli adempimenti legati ai processi di fatturazione delle notifiche inviate tramite SEND, PagoPA S.p.A. ha creato un portale apposito accessibile tramite l’[Area Riservata](https://www.pagopa.it/it/area-riservata/).

<br>

Una volta effettuato l’onboarding su Area Riservata (cfr. sezione “Accordo di adesione e allegati - Area Riservata), l’Ente è automaticamente abilitato all’accesso al portale.&#x20;

<br>

Ai fini della fatturazione, l’Ente, tramite il portale, deve:&#x20;

<br>

1. Inserire i dati relativi alla fatturazione (dati relativi all’ordine di acquisto e dati relativi al contratto);
2. Inserire i dati relativi al modulo di commessa (volumi di notifiche che si prevede di inviare tramite SEND nel mese successivo alla compilazione);
3. Prendere visione del report di dettaglio delle notifiche gestite da SEND;
4. Inserire le contestazioni per le notifiche ritenute non gestite correttamente;
5. Caricare le Regolari Esecuzioni firmate al fine di autorizzare PagoPA S.p.A. all'emissione delle fatture di saldo.

<br>

Il portale gestisce infatti i processi relativi a:

<br>

* **Fatturazione**: Il ciclo di fatturazione prevede l’emissione, su base mensile, di fatture di anticipo, acconto e saldo. Le fatture di anticipo vengono emesse sulla base del numero di notifiche indicate nel Modulo di Commessa per Anticipazione. Le fatture di acconto vengono emesse sulla base del numero di notifiche realmente processate via SEND nel mese di riferimento. Al termine di ogni mese, PagoPA S.p.A. estrae tutti i dati relativi al mese concluso e produce, per ciascun Ente, un report contenente le informazioni relative ai servizi fatturabili. Sulla base dei dati contenuti in questo report, viene emessa la fattura a saldo.
* **Modulo di commessa**: Entro il giorno 15 di ogni mese, l’Ente deve compilare, tramite il Portale, il Modulo di Commessa per Anticipazione, relativo alle notifiche pianificate per il mese successivo. Nel Modulo, l’Ente deve indicare il numero di notifiche che prevede di inviare nel mese di riferimento, con indicazione del numero di notifiche da processare in via digitale e del numero di notifiche da processare in via analogica (distinguendo tra atti da notificare tramite raccomandata A/R e atti da notificare tramite raccomandata 890). L’Ente è invitato a compilare il modulo anche qualora i volumi di notificazione dovessero essere pari a zero.
* **Reportistica di dettaglio**: Attraverso l’apposita sezione del Portale, l’Ente può visualizzare un report di dettaglio di tutte le notifiche processate a mezzo SEND e quindi soggette a fatturazione. La scheda del Report di Dettaglio permette all’utente di filtrare la tipologia di notifica (digitale/ analogica, nazionale/ internazionale, AR/ 890) per avere una visione aggregata e di poter scaricare il report di dettaglio (conservato sul Portale di Fatturazione per un periodo pari all’anno fiscale). Inoltre, dalla stessa schermata l’utente potrà accedere ad una sezione apposita per la gestione delle contestazioni.
* **Gestione delle contestazioni**: Qualora l’Ente dovesse avere necessità di contestare una o più notifiche riassunte nel report di dettaglio prodotto dal Portale, potrà farlo e indicarne la motivazione nell’apposita sezione dello stesso. Il Supporto SEND potrà di seguito accedere al Portale, prendere visione delle contestazioni e gestirle come previsto dalla Lettera di Adesione e dal relativo [allegato 4 - Ciclo Attivo](https://docs.pagopa.it/documento-4-ciclo-attivo-pn).

<br>

Per dettagli sui processi di fatturazione, commessa e gestione delle contestazioni, si rimanda alla Lettera di adesione e al relativo documento [allegato 4 - Ciclo Attivo](https://docs.pagopa.it/documento-4-ciclo-attivo-pn).



### PDND Interoperabilità – soggetti in perimetro PDND Interoperabilità

Per i soggetti rientranti nell’ art. 2 comma 2 CAD è possibile inviare notifiche selezionando l’e-service SEND attraverso PDND Interoperabilità. A tal fine tali Enti sono tenuti ad accreditarsi anche a PDND Interoperabilità nelle modalità indicate nella [Guida all’adesione](https://developer.pagopa.it/pdnd-interoperabilita/guides/pdnd-manuale-operativo/manuale-operativo/guida-alladesione).

## Scelta dello use-case&#x20;

Gli Enti aderenti, a prescindere dalla loro dimensione, per completare l’onboarding su SEND devono integrare i loro processi con la Piattaforma, identificando gli use-case da implementare su SEND.

<br>

In questa fase è necessario che l’Ente:

<br>

1. identifichi il perimetro complessivo di use-case che possono essere portati su SEND in base a quanto definito nell’art. 26, del D.L. n. 76/2020;
2. definisca un ordine di priorità per portare nel tempo i diversi use-case su SEND;
3. selezioni i codici tassonomici di appartenenza in base alla tipologia di operatività associata allo use-case scelto.&#x20;

### Perimetro complessivo di use-case

Il primo passo per delimitare il perimetro complessivo degli use-case da portare su SEND è per l’Ente quello di consultare il riferimento normativo principale di SEND: l’articolo 26 del Decreto Legge n. 76 del 16 luglio 2020 “Misure urgenti per la semplificazione e l’innovazione digitale” (cd. Decreto Semplificazioni), come convertito dalla legge n. 120 dell’11 settembre 2020 e come successivamente modificato dal Decreto Legge n. 77 del 31 maggio 2021.

<br>

L’Ente dovrà fare particolare attenzione agli [atti esclusi dallo scope di notificazione della Piattaforma](https://docs.pagopa.it/faq-enti/) (ref. art. 26 comma 17 D.L. n. 76/2020).&#x20;

### Prioritizzazione e Valutazione di Impatto&#x20;

Una volta identificato il perimetro complessivo di use-case che l’Ente può portare su SEND, è opportuno svolgere alcune valutazioni per identificare il primo use-case da integrare su SEND, nonché gli use-case successivi secondo uno specifico ordine di priorità.

<br>

A tal fine, almeno per gli use-case maggiormente rappresentativi della propria operatività, l’Ente deve effettuare un assessment interno preliminare su impatti relativi a sistemi, attività e fornitori coinvolti nel processo di invio e gestione delle notifiche pre e post integrazione a SEND, nonché considerare la complessità di integrazione degli specifici use-case identificati.

<br>

Si riportano, a titolo esemplificativo non esaustivo, alcuni esempi di elementi che potrebbero contribuire alla prioritizzazione degli use-case:

<br>

1. **Volumi delle notifiche**: considerano la gestione dell’intero processo di notificazione da parte di SEND, l’Ente avrà maggior beneficio nell’integrare use-case che prevedono un numero di notifiche elevato rispetto all’operatività complessiva.
2. **Incertezza dei domicili digitali o fisici**: SEND consente una significativa riduzione dei costi interni per la gestione della notificazione, non richiedendo tra le altre l'integrazione e l’interrogazione da parte dell’Ente di registi pubblici:

* laddove non registrato sulla SEND dal destinatario o presso l’Ente, SEND effettua una ricerca del domicilio digitale sui registri pubblici;
* in caso di notificazione analogica, qualora il primo tentativo di invio cartaceo all'indirizzo fisico fornito dall’Ente fallisca per cause diverse dalla temporanea assenza o dal rifiuto del destinatario o delle altre persone alle quali può essere consegnato il plico, l'operatore postale (incaricato da SEND) ricerca tramite indagine in loco un nuovo indirizzo del destinatario o, ove non disponibile, la piattaforma ricerca un indirizzo fisico sui registri pubblici (ANPR o registro delle imprese). In ogni caso l’Ente dovrà comunque fornire a SEND un primo indirizzo fisico per la presa in carico della notifica.

3. **Ruolo di attori a valle del processo di notificazione**: SEND si occupa della gestione del processo di notificazione tra l’Ente mittente e il destinatario finale della notifica. Laddove intervengano nell'iter notificatorio soggetti terzi ai quali l’Ente mittente non ha fornito accesso a SEND (es. soggetti terzi incaricati dall’Ente), la gestione di eventuali flussi informativi verso tali soggetti terzi dovrà essere gestita direttamente dall’Ente.&#x20;
4. **Partner Tecnologico**: un (o diversi) Partner Tecnologico già integrato con SEND con altri Enti/ altri use-case dell’Ente potrebbe ridurre la complessità e le tempistiche di integrazione degli use-case di interesse dell’Ente.
5. **Integrazione Manuale**: in assenza di integrazioni automatiche, l’Ente deve gestire manualmente tutte le operazioni relative ad una singola notifica. Tale soluzione potrebbe essere percorribile esclusivamente laddove (i) l’Ente ha a proprio carico i costi di notifica, (ii) l’Ente applica un costo di notifica forfettario, (iii) l’Ente invia un numero contenuto di notifiche. Il ciclo di vita della notifica deve in questo caso essere monitorato manualmente da parte dell’Ente con conseguente aumento della complessità di interazione e gestione della notifica.
6. **Servizi attivi su piattaforma pagoPA**: se lo use-case prevede un pagamento, è obbligatorio attivare i servizi messi a disposizione dalla [piattaforma](https://docs.pagopa.it/portale-delle-adesioni/portale-delle-adesioni) dei pagamenti pagoPA prima di attivare il processo di notificazione in produzione tramite SEND, al fine di consentire la corretta attualizzazione della posizione debitoria.
7. **Multi-destinatario**: la gestione dello use-case che prevede più di un destinatario di notifica subisce un aumento di complessità poiché il perfezionamento avviene in maniera indipendente per ogni destinatario e di conseguenza, gli eventi devono essere ricostruiti dal Partner Tecnologico per essere ricollegati alla singola notifica.
8. **Livello di digitalizzazione territoriale**: maggior vantaggio economico per i cittadini dotati di domicilio digitale e/o raggiungibili tramite avvisi di cortesia su altri recapiti digitali come AppIO, mail e/o numero di cellulare.



### Codici tassonomici&#x20;

Il codice tassonomico viene utilizzato per definire la tipologia di atto che l’Ente sceglie di notificare al destinatario. La lista dei codici tassonomici è consultabile in [questa pagina](https://docs.pagopa.it/f.a.q.-per-integratori/tassonomia-send).

In fase di creazione di ciascuna notifica, l’Ente dovrà indicare nell’apposito campo il codice relativo all’atto da notificare, già specificato al team di Supporto Enti di PagoPA S.p.A.

## Adempimenti tecnici preliminari all’onboarding

### Selezione Partner Tecnologico

Il Partner Tecnologico (PT) è il soggetto (es.: fornitore terzo o società in house) di cui è possibile avvalersi per un supporto nella gestione degli aspetti tecnici. Ogni soggetto può decidere se integrarsi tramite un fornitore già affiliato a SEND o se richiedere al proprio Partner Tecnologico di attestarsi su SEND, secondo quanto indicato al seguente [riferimento](https://docs.pagopa.it/lista-partner-tecnologici-pn_pagopa-s.p.a./). Qualora l’ente non intenda avvalersi di un PT potrà effettuare l’integrazione in autonomia, facendosi carico delle attività che nel presente documento risultano in carico al PT.

### Generazione API key

Dopo aver eseguito l’onboarding amministrativo su SEND tramite l’[Area Riservata](https://www.pagopa.it/it/area-riservata/), l’Ente deve generare le API key di produzione e accedere alla documentazione di SEND che guida le PA e i propri Partner Tecnologici (PT) nel processo di integrazione. Una volta eseguito l’accesso a [Area Riservata](https://selfcare.pagopa.it/), cliccando sul prodotto attivo “SEND Servizio Notifiche Digitali” il soggetto ha modo di generare le API key che deve consegnare in modo sicuro al Partner Tecnologico (PT) scelto, unitamente alla documentazione tecnica a supporto dell’integrazione.&#x20;

<br>

Per dettagli si rimanda alle informazioni disponibili sul [Developer Portal](https://developer.pagopa.it/).

### Richiesta di fruizione dell’e-service SEND su PDND

Per poter notificare su SEND è necessario che l’ente faccia domanda di fruizione del e-service SEND e configuri un client associato ad una finalità del e-service stesso.

<br>

Per i dettagli si rimanda alle informazioni disponibili sul Developer Portal.

<br>

## **Analisi del processo AS-IS**&#x20;

**Una volta identificato il primo use-case da portare su SEND, l’Ente effettua un assessment accurato dello stesso.**

**Di seguito si illustra un approccio metodologico che l’Ente potrebbe utilizzare per effettuare l’analisi del processo di notificazione attuale.**&#x20;

1. **Individuare e formalizzare ogni attività del flusso di notificazione AS-IS, censendo tutti i sistemi informativi coinvolti;**
2. **Definire ruoli e responsabilità di ciascun attore/ struttura coinvolta nel processo;**
3. **Individuare tutte le integrazioni in essere tra sistemi informativi coinvolti.**

**La suddetta analisi è propedeutica alla corretta definizione del processo TO-BE, integrato su piattaforma SEND.**

**In maniera esemplificativa e non esaustiva si riportano gli attori coinvolti in un processo di notificazione standard, con il relativo ruolo.**&#x20;

| **Soggetto 1** | Incaricato del gestionale contenente l’archivio dei pagamenti                                   |
| -------------- | ----------------------------------------------------------------------------------------------- |
| **Soggetto 2** | Si occupa della creazione degli atti di notifica                                                |
| **Soggetto 3** | Si occupa delle operazioni di stampa, imbustamento e recapito                                   |
| **Soggetto 4** | Integrato con piattaforma pagoPA e con il Soggetto 1, è incaricato della gestione dei pagamenti |

**N.B.: uno dei suddetti soggetti potrebbe gestire anche più attività o la medesima attività potrebbe essere gestita da uno o N soggetti.**&#x20;

**Si riporta di seguito, in maniera esemplificativa e non esaustiva, un processo standard di notificazione AS-IS:**

1. **Creazione della posizione debitoria con relativo IUV;**&#x20;
2. **Recupero dal “Soggetto 1” del domicilio fisico e, ove presente, digitale;**
3. **Generazione dell’atto di notifica con i relativi allegati dal “Soggetto 2”;**
4. **L’atto e i suoi allegati (tra cui l’avviso pagoPA) vengono stampati, imbustati e spediti ai destinatari di notifica tramite posta (“Soggetto 3”) oppure inviati a mezzo PEC dall’Ente (“Soggetto 1” o “Soggetto 3”);**
5. **L’Ente (mittente) riceve dal Soggetto Appaltatore l’esito del processo di notificazione (es: riceve le ricevute di ritorno della raccomandata o di accettazione e consegna PEC);**
6. **Quando il destinatario di notifica avvia il pagamento il nodo pagoPA interroga il Soggetto 4 per ottenere il costo di notifica;**
7. **Nel momento in cui il nodo pagoPA riceve l’informazione della posizione debitoria e la comunica al PSP, il cittadino paga l’importo dovuto e il “Soggetto 4” informa il gestionale dei pagamenti (“Soggetto 1”) che chiude la posizione debitoria.**

<br>

<figure><img src="https://lh7-eu.googleusercontent.com/CFT76DKUA6u0HKbC4F_SHVXMrm2PnV-k2IyzXLk0GyWbCk2KeEKjU5nyV1mzooNktJKVcvFVQU2wRUJo1cdPgwGWinSgZTAv4X3snKYBR1MKMzRJm0m1KbAftL0XsHV-V142sYGWVkV3" alt=""><figcaption></figcaption></figure>

<br>



## Sviluppo della soluzione TO-BE

L’Ente, dopo aver valutato l’impatto dello use-case selezionato sui propri processi interni e definito ruoli e responsabilità, può mappare il processo di notificazione attraverso SEND. Anche nel caso del processo TO-BE, si evidenzia che lo stesso attore di processo può occuparsi di più attività.

<br>

È essenziale che in questa fase l’Ente valuti di quale tipologia di integrazione alla piattaforma pagoPA  usufruire, consultando il [modello di integrazione](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/) di SEND:&#x20;

<br>

* Integrazione manuale: non prevede nessuna forma di comunicazione tra i sistemi informatici di SEND e quelli dell’Ente.
* Integrazione automatici: il sistema gestionale dell’ente comunica via API per la gestione della notifica.\
  Se la notifica prevede un pagamento tramite sistema pagoPA si possono avere due modalità di integrazione per l’addebito delle spese di notifica al destinatario:
*
  * Integrazione automatica “sincrona”: con attualizzazione complessiva della posizione debitoria con le spese di notifica al momento del pagamento a cura dell’Ente;
  * Integrazione automatica “asincrona”: con gestione tecnica e attualizzazione della posizione debitoria con le spese di notifica a cura di PagoPA S.p.A. sulla base delle informazioni fornite dall’Ente sulla notifica stessa.

<br>

I soggetti generalmente interessati nel processo di notificazione TO-BE per l’Ente sono:

<br>

| **Soggetto 1** | Gestionale dei pagamenti: incaricato del gestionale contenente l’archivio dei pagamenti                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Soggetto 2** | PT SEND: si occupa del deposito degli atti di notifica su SEND e comunica con SEND per acquisire le informazioni legate all’intero ciclo di vita della notifica, incluso il costo di notificazione  |
| **Soggetto 3** | Postalizzatore: si occupa delle operazioni di postalizzazione (consolidatore e recapitisti). Tramite integrazioni, comunica con SEND                                                                |
| **Soggetto 4** | PT pagoPA: il partner tecnologico incaricato della gestione dei pagamenti, comunica al Soggetto 1 il pagamento dell’atto                                                                            |
| **Soggetto 5** | PDF creator: creatore del PDF che rispetta il requisito della firma digitale (gestionale o altro soggetto)                                                                                          |

<br>

Il processo di notificazione TO-BE si svolge di norma come di seguito riportato:

<br>

1. Creazione della posizione debitoria con relativo Numero Avviso (NAV) dal “Soggetto 1”.&#x20;
2. Produzione dell’atto, degli avvisi pagoPA e ulteriori allegati per il pagamento dal “Soggetto 5” e invio a SEND dal “Soggetto 2”. \*
3. SEND dopo aver effettuato le verifiche preliminari, restituisce lo IUN e avvia la gestione della notifica al fine di inviarla al destinatario digitalmente o in via analogica.&#x20;
4. SEND mette a disposizione gli eventi e gli stati relativi al ciclo di vita di una notifica che l’Ente può monitorare, tracciare i passaggi di stato rilevanti, scaricare le  [attestazioni opponibili ai terzi](https://docs.pagopa.it/manuale-operativo-pn/piattaforma-notifiche-digitali-manuale-operativo/comprendere-lo-stato-della-notifica-e-gli-atti-disponibili-sul-portale/attestazione-opponibili-ai-terzi) prodotte dalla Piattaforma e altra documentazione relativa al processo di notifica.
5. Gestione dell’attualizzazione delle spese di notifica sul pagamento in modalità sincrona o asincrona(cfr. sezioni successive dedicate).

<br>

(\*) N.B. : Si specifica che tutti i documenti caricati su SEND dalla PA mittente devono possedere delle precise caratteristiche, volte a garantire la valenza legale di questi ed a permettere la corretta elaborazione digitale e la successiva stampa fisica tramite processi industriali. A titolo esemplificativo non esaustivo:

<br>

1. **Firma digitale**: la necessità che la PA mittente firmi digitalmente i documenti caricati su SEND discende dall'esigenza di garantire l’identificabilità dell’autore, l’integrità e l’immodificabilità del documento, che se sottoscritto digitalmente si presume riconducibile al titolare del dispositivo di firma ai sensi dell’articolo 21, comma 2 CAD, e soddisfa il requisito della forma scritta. In coerenza con tale impostazione, il [Manuale Operativo](https://docs.pagopa.it/manuale-operativo/piattaforma-notifiche-digitali-manuale-operativo/mittente/referente-tecnico-operatore/utilizzo-di-pn-attraverso-api-b2b/invio-notifiche-tramite-api-b2b) prevede la sottoscrizione digitale di tutti i documenti allegati, a prescindere dal contenuto.
2. **Specifiche tecniche**: I documenti caricati su SEND dalla PA mittente devono (i) essere in formato PDF/A, (ii) avere dimensioni fisiche conformi al formato A4, (iii) possedere una “area di sicurezza” che regola lo spazio effettivamente utilizzabile per la stampa dei documenti da inoltrare. E' responsabilità della PA mittente garantire che i documenti siano aderenti alle note tecniche definite da SEND, su cui, per maggiore dettaglio, si rimanda al [Manuale Operativo](https://docs.pagopa.it/manuale-operativo/piattaforma-notifiche-digitali-manuale-operativo/il-processo-di-notificazione/specifiche-tecniche-dei-pdf-allegati-alla-notifica).&#x20;

### Integrazione sincrona di attualizzazione dei costi di notifica

La modalità di integrazione sincrona presuppone che il PT pagoPA sia a conoscenza del fatto che l’atto notificato su SEND contiene un avviso di pagamento pagoPA e quindi l’importo deve essere attualizzato con i costi di notifica.

<br>

Si tratta di un tipo di attualizzazione complessiva della posizione debitoria al momento del pagamento a cura dell’Ente, per considerare eventuali variazioni del costo di notifica.

<br>

Per consentire la corretta attualizzazione è necessario che il PT pagoPA sia a conoscenza dell’esigenza di recepire eventuali variazioni al costo di notifica.

<br>

Pertanto, è richiesto uno scambio informativo tra PT di piattaforma pagoPA e il PT SEND al fine di ottenere anche il costo attualizzato della notifica inviata tramite SEND.

<br>

Per permettere l’attualizzazione, SEND prevede un API (retrieveNotificationPrice) che, dati gli estremi di un avviso pagoPA (codice fiscale ente creditore e numero avviso), restituisce il costo attuale della notifica associata al pagamento oltre ad altre informazioni quali le componenti del costo di notifica e informazioni relative all’accesso o al perfezionamento per decorrenza termini della notifica.&#x20;

<br>

Di seguito si riporta una rappresentazione grafica delle interazioni tra i vari attori coinvolti nel processo di integrazione sincrona:&#x20;

<figure><img src="https://lh7-qw.googleusercontent.com/docsz/AD_4nXcsXBw58p9zc44co3HWQgyL8yNqWmeEFFp3Q6FmCV9ygLPczEwPRzA4QEd4DU-b7SEbEOM8xsb4FCyaFkiSLQ0G3nzf4qC8clxS9w7SJNmsEP94JBo6OeUaICgWLIolQtyHLoef?key=DYJCNPleCFrlxQwvjV30hjiw" alt=""><figcaption></figcaption></figure>

<br>

Per un maggiore dettaglio sull’integrazione in modalità sincrona si rimanda al [Modello di Integrazione](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/).

### Integrazione asincrona di attualizzazione dei costi di notifica

Si tratta di un’integrazione mediante la quale l’Ente creditore, direttamente connesso e/o intermediato, avendo creato su Gestione Posizioni Debitorie (GPD) una copia esatta del proprio archivio pagamenti in attesa, delega a pagoPA la gestione della fase online del pagamento. Gli aggiornamenti della posizione debitoria saranno eseguiti direttamente dall’Ente creditore/Partner con riferimento alle variazioni non correlate alle dinamiche della gestione delle notifiche. Di contro, nel caso in cui ci fosse la necessità di modificare la posizione debitoria con riferimento alla quota derivante dalla segnalazione/presenza di una notifica, l’aggiornamento sarà gestito da pagoPA, per mezzo di opportune funzionalità che attualizzeranno l’importo, allineandolo con quello riportato nella notifica.

<br>

Pertanto, è necessario che il PT pagoPA [(cfr. “Soggetto 4”, pagina 14)](https://docs.google.com/document/d/1m2vIow6PsPIic_YeaHfSp-9iePfkblYf/edit#heading=h.3l18frh) si integri con la piattaforma pagoPA, seguendo [specifiche attuative del nodo dei pagamenti](https://docs.pagopa.it/sanp/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone) (SANP).

\
\
<br>

La comunicazione tra SEND e la piattaforma pagoPA è centralizzata, e l’Ente non dovrà occuparsi del recupero e aggiornamento del costo della notifica.&#x20;

<br>

Per quanto riguarda la componente prevista dal DPCM 30 maggio 2022 c.d. DPCM Costi a favore dei mittenti, si precisa che tale informazione viene raccolta da SEND (tramite il campo paFee) e comunicata a Gestione Posizioni Debitorie. In modo angolo l’iva imponibile sui costi dell’invio cartaceo deve essere indicata sulla notifica (tramite il campo vat).

<br>

Di seguito si riporta una rappresentazione grafica delle interazioni tra i vari attori coinvolti nel processo di integrazione asincrona:&#x20;

<figure><img src="https://lh7-qw.googleusercontent.com/docsz/AD_4nXeyeHELCcytxdvqYpSOm-dKEWplRM0jSjlEev-JYlYlX29ndZpdwMeEiy4ypCqbTaQ36LN_lLmGTCx0bwZdVMnEM4TTDabaqk60DJO7D64xYHrEA5jJvoUiZw8U2ON-G6YkGcx5Pg?key=DYJCNPleCFrlxQwvjV30hjiw" alt=""><figcaption></figcaption></figure>

<br>

Per un maggiore dettaglio sull’integrazione in modalità asincrona si rimanda al [Modello di Integrazione](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/).

### Caricamento manuale delle notifiche

Come definito nel [modello di integrazione a SEND](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/), l’assenza di comunicazione tra i sistemi informatici di SEND e quelli dell’Ente implica l’impossibilità di verificare automaticamente lo stato della notifica e quindi l’accesso manuale a SEND per recuperare le attestazioni e cambi stato. Questo tipo di integrazione è utilizzabile solo per i casi d’uso che non comprendono l’attualizzazione della posizione debitoria.&#x20;

<br>

Di conseguenza, i casi di notifica che possono essere gestiti in questa modalità di integrazione sono relativi a notifiche di un limitato numero di atti che non richiedono un pagamento e per i quali l’Ente si accolla i costi di notifica. L'invio di notifiche che richiedono un pagamento è possibile nel momento in cui è comunque garantito l'aggiornamento del costo della notifica.&#x20;

<br>

Per un maggiore dettaglio sull’integrazione in modalità manuale si rimanda al [Modello di Integrazione](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/).

## Sviluppo dell’integrazione e Test

Ai fini dello sviluppo dell’integrazione tecnica, l’Ente deve seguire gli step di processo illustrati e quindi:&#x20;

<br>

1. completare gli adempimenti amministrativi legati alla selezione del PT (qualora scelga un PT già affiliato su SEND) o all’accreditamento del PT su ambienti SEND (qualora scelga di richiedere al proprio PT di attestarsi su SEND - cfr. [Adempimenti amministrativi e preliminari](https://docs.google.com/document/d/1m2vIow6PsPIic_YeaHfSp-9iePfkblYf/edit#heading=h.2u6wntf));
2. fornire le API key generate in ambiente di produzione (cfr. Adempimenti amministrativi - generazione API Key) al PT SEND;
3. sottoscrivere il servizio PDND (e-service SEND) e completare le operazioni di configurazione per il rilascio dei voucher di accesso;
4. completare gli sviluppi, con il supporto del PT, utilizzando come guida quanto indicato nel Developer Portal.

<br>

PagoPA S.p.A. ha implementato il portale “[Developer Portal](https://developer.pagopa.it/)”, per guidare i Partner Tecnologici degli Enti nella fase di sviluppo all’integrazione attraverso approfondimenti sulla documentazione già esistente, video tutorial, mock-up.

<br>

Il Partner Tecnologico dell’Ente, tramite questo strumento, può essere guidato negli sviluppi per l’integrazione in modo da:

<br>

* Avere una panoramica del prodotto.
* Comprendere le finalità della SEND.
* Poter utilizzare i materiali prodotti dal team PagoPA S.p.A. negli step di flusso corretti.
* Approfondire gli argomenti d’interesse in maniera efficiente ed efficace.
* Imparare ad utilizzare gli strumenti che la Piattaforma mette a disposizione.

<br>

Dopo aver generato le API Key e configurato il client per [l’e-service SEND su PDND](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/guida-alladesione), gli step da seguire per sviluppare l’integrazione con SEND sono i seguenti:

<br>

1. Generazione dei client a partire dalla documentazione Swagger per la pagina API B2B per le Pubbliche Amministrazioni;
2. Creazione e gestione di uno o più stream per recupero esiti.
3. Inserimento della notifica: caricamento documenti e inserimento notifica.&#x20;
4. Dove richiesto,[ attualizzazione della posizione debitoria](https://docs.pagopa.it/modello-di-integrazione-di-piattaforma-notifiche/).
5. [Test di validazione](https://docs.pagopa.it/f.a.q.-per-integratori/knowledge-base-di-piattaforma-notifiche/pn-test-di-validazione-avvenuta-integrazione-con-piattaforma-notifiche) e avvenuta integrazione con SEND.&#x20;
6. Ottimento report generato tramite il Validator Tool e invio a PagoPA S.p.A. del buon esito tramite [ticket Jira](https://pagopa.atlassian.net/servicedesk/customer/portal/5/group/28/create/150).
7. PagoPA S.p.A. invierà conferma dell'avvenuta integrazione in ambiente di collaudo UAT.

<br>

Per dettagli sugli step sopra riportati, fare riferimento alla pagina [Knowledge Base](https://developer.pagopa.it/send/guides/knowledge-base) e sezione Quick Start [Developer Portal](https://developer.pagopa.it/).

<br>

Con particolare riferimento ai test di validazione, PagoPA S.p.A. mette a disposizione un tool che permette ai Partner Tecnologici degli Enti di eseguire una simulazione minimale dei servizi erogati da SEND e un endpoint che produce un report dell'avvenuta integrazione ([Validator tool](https://docs.pagopa.it/f.a.q.-per-integratori/knowledge-base-di-piattaforma-notifiche/focus-sulla-validazione-dei-test-con-il-tool-pnvalidator)).

<br>

I requisiti minimi per validare l’integrazione alla SEND, come definiti dal tool, sono:

<br>

* **TC-INVIO-01**: Creazione di una notifica che non richiede un pagamento per un singolo destinatario;
* **TC-INVIO-02**: Creazione di una notifica che richiede un pagamento per un singolo destinatario;
* **TC-INVIO-03**: Ricezione dello IUN e degli stati di una notifica;
* **TC-INVIO-04**: Scaricamento attestazioni opponibili ai terzi e ricevute;
* **TC-COSTO-01**: Attualizzazione posizione debitoria:
* **Scenario 1**: La PA mittente coincide con l’Ente Creditore
* **Scenario 2**: La PA mittente non coincide con l’Ente Creditore

<br>

Il tool deve essere utilizzato dal PT per conto di ciascun Ente, anche laddove lo stesso PT dovesse ricoprire il medesimo ruolo per più Enti.

<br>

Per ulteriori informazioni si invita l’utente a consultare la [pagina dedicata](https://docs.pagopa.it/f.a.q.-per-integratori/knowledge-base-di-piattaforma-notifiche/pn-test-di-validazione-avvenuta-integrazione-con-piattaforma-notifiche).

<br>

## Rilascio in produzione e avvio in esercizio

Nel momento in cui gli Enti completano con successo i lavori di integrazione tecnica con SEND, PagoPA S.p.A. mette a disposizione l’ambiente di produzione per l’avvio in esercizio.&#x20;

<br>

<figure><img src="https://lh7-qw.googleusercontent.com/docsz/AD_4nXfhdVjUyYMaOQi8PR7mxkruAlBqPR_-y3SMeie-PTC02sv4yT9ztRAhC7XB0RWuUBU7R9clQZDsypIEg0erjh-8-Qj_U8mZ1mdXpovj_6U42s1QcokBiatdYg0_zbO1W-Ya3GSG?key=DYJCNPleCFrlxQwvjV30hjiw" alt=""><figcaption></figcaption></figure>

<br>

Nella fase iniziale di avvio in esercizio, si suggerisce all’Ente di:&#x20;

<br>

* Inviare tramite SEND un numero limitato di notifiche, aumentando in seguito i volumi di invio progressivamente.
* Prevedere un periodo di transizione in cui mantenere operativi il processo AS-IS (e i suoi canali /strumenti) e il processo integrato con SEND.

<br>

Accertata quindi la corretta gestione delle notifiche, l’Ente procederà con l’invio delle stesse come previsto dal modulo di profilazione comunicato a PagoPA S.p.A.&#x20;

<br>

Ogni mese dal momento di avvio in esercizio, SEND fatturerà all’Ente mittente le spese effettive di notificazione sostenute per ciascun destinatario della notifica.

<br>

### Rete RADD

Per i cittadini in condizione di digital divide, SEND mette a disposizione la Rete di Assorbimento del Divario Digitale (RADD).&#x20;

Recandosi agli appositi “Punti di ritiro SEND” (punti fisici convenzionati sul territorio), il cittadino potrà richiedere la stampa degli atti e degli eventuali Avvisi di Avvenuta Ricezione (AAR) per il quale è stato risultato nella condizione di irreperibilità al prezzo di €1,40.&#x20;

<br>

Per ulteriori informazioni in merito si veda il [Sito Vetrina](https://notifichedigitali.it/punti-di-ritiro).

<br>

Per eventuali ulteriori dubbi si riporta di seguito una lista dei riferimenti utili a cui gli Enti e i Partner Tecnologici possono rivolgersi

<br>

Per eventuali ulteriori dubbi si riporta di seguito una lista dei riferimenti utili a cui gli Enti e i Partner Tecnologici possono rivolgersi:

<br>

| Ambito                  | Riferimenti utili                                                   | Quando contattare                                                                | Indicazioni ulteriori                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tecnologico             | send-tech-support@pagopa.it                                         | Chiarimenti sulle specifiche tecniche di sviluppo e implementazione              | -                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Commerciale             | [account@pagopa.it](mailto:account@pagopa.it)                       | Overview sulle peculiarità della piattaforma                                     | -                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Amministrativo          | [account@pagopa.it](mailto:account@pagopa.it)                       | Maggiori informazioni in merito a questioni amministrative legate all'onboarding | -                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Legal                   | [legal@pagopa.it](mailto:legal@pagopa.it)                           | Questioni legate al contenzioso                                                  | -                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Privacy                 | [pn-linkinformativa@pagopa.it](mailto:pn-linkinformativa@pagopa.it) | Per inviare il link che riporta all'informativa sulla privacy dell'Ente          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Procurement             | [procurement@pagopa.it](mailto:procurement@pagopa.it)               | Chiarimenti su gare di postalizzazione                                           | -                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Portale di Fatturazione | click sul link "Assistenza" in alto a destra del portale            | Questioni legate alla fatturazione                                               | Se dopo l'autenticazione in Area Riservata, l'Ente accede a portale fatturazione e poi clicca sul link in alto a destra "Assistenza", richiederà assistenza tramite un meccanismo di mail-to-ticket                                                                                                                                                                                                                                                |
| Assistenza              | click sul link "Assistenza" in alto a destra del portale            | Procedura di onboarding su SelfCare (Area Riservata)                             | Se l'Ente è autenticato in Area Riservata, quindi è entrato con spid/cie, cliccando sul link "Assistenza", richiederà assistenza tramite un webform in cui potrà indicare sia la email a cui essere ri-contattato sia la categoria/sottocategoria del problema riscontrato. Se il richiedente non è autenticato in Area Riservata e vuole chiedere assistenza, lo farà cliccando sul link "Assistenza" in alto a destra della pagina di pre-login. |

\
<br>
