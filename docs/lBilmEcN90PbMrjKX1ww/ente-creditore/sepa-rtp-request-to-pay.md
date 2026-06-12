---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/sepa-rtp-request-to-pay
---

# SEPA RTP - Request To Pay

In particolare, la **SEPA Request To Pay** (SRTP) consiste nella veicolazione della posizione debitoria (Pd) di un EC presso il canale censito dal debitore di tale singola posizione debitoria, previa adesione al servizio SRTP da parte del PSP e/o del Service Provider titolare o gestore del canale censito dal debitore.

Tale veicolazione propria della RTP è ricompresa nei servizi della piattaforma pagoPA e, pertanto, la piattaforma pagoPA, a partire 1° marzo 2026, provvede a tale veicolazione in modo automatico senza alcun consenso e/o contrattualizzazione ad hoc da parte dell’EC, risultando necessaria per tale veicolazione solo ed esclusivamente il ricorrere di 3 condizioni, e segnatamente:

1. il PSP e/o il Service Provider (che ha in gestione il canale censito dal debitore della Pd) devono avere già sottoscritto un accordo con la PagoPA S.p.A. avente ad oggetto il servizio SRTP;
2. il debitore della Pd deve avere espressamente eletto un canale presso il quale ricevere in modalità push le proprie Pd tramite il servizio di SRTP;&#x20;
3. l’EC non deve avere utilizzato il prefisso 6/ o 7/ o 8/ nella tassonomia della singola Pd.

Resta fermo, invece, che un codice tassonomico diverso dai prefissi 6/, 7/, 8/, segnala alla piattaforma la piena veicolazione della Pd sui canali dei PSP o Service Provider tempo per tempo aderenti al servizio SRTP e nei confronti dei debitori tempo per tempo che abbiano censito i canali dei medesimi PSP o Service Provider per la ricezione delle proprie Pd.

Resta salva la possibilità in capo all’Ente Creditore di disattivare (opt-out) il servizio SEPA-RTP; tale funzionalità verrà implementata prossimamente all’interno del Back-Office.

La tassonomia deve essere dall’EC correttamente indicata alla creazione della posizione debitoria.

L’Ente Creditore, con riferimento a ciascuna Pd, ha la facoltà di modificare il prefisso inserito sia inserendo il prefisso 6/ o 7/ o 8/ in una Pd che non lo aveva in precedenza, sia eliminando tale prefisso 6/ o 7/ o 8/ in una Pd che lo aveva in precedenza, fermo restando che l’EC dovrà sempre valorizzare il campo relativo al prefisso.

In caso di modifica comportante l’inserimento del prefisso 6/ o 7/ o 8/ la piattaforma pagoPA:

1. non potrà mai richiamare Pd già veicolate presso il relativo debitore;&#x20;
2. potrà esclusivamente non veicolare le Pd ancora non veicolate, poiché intestate a un debitore che alla data della modifica da parte dell'EC non risultava ancora avere censito alcun canale per la SRTP.

In caso di modifica comportante l’eliminazione del prefisso 6/ o 7/ o 8/ la piattaforma pagoPA, ove il debitore della Pd sia già censito per il servizio SRTP all’atto della modifica da parte dell’EC, provvederà a veicolare tale Pd verso i canali già censiti dal relativo debitore.&#x20;

Qualora l’EC abbia effettuato delle modifiche sulla Pd e il debitore abbia nel contempo censito il canale per la SRTP, tale Pd verrà veicolata.

I codici tassonomici indicati dall’EC sono conservati dalla PagoPA S.p.A., unitamente alle loro eventuali modifiche intervenute nel tempo.

PagoPA S.p.A., rende disponibili tali evidenze sulle posizioni debitorie all’EC di riferimento, previa istanza da parte di quest’ultimo.

L’Ente Creditore riconosce che la corretta individuazione dei codici tassonomici associati alle proprie singole Pd, costituisce onere esclusivo dell’Ente medesimo, inclusi quindi eventuali soggetti (es. Partner Tecnologici o Intermediari tecnologici) da esso delegati ad eseguire la relativa attività operativa.

L’EC si impegna, pertanto, a fornire in maniera completa, accurata e tempestiva, tutte le informazioni necessarie ai fini della corretta gestione della Pd per le attività di competenza della PagoPA S.p.A. Quest’ultima non potrà in alcun caso essere ritenuta responsabile, anche con riferimento a soggetti terzi (ivi inclusi gli utenti finali) per inesattezze, omissioni o errori nei codici tassonomici indicati, né per eventuali conseguenze, dirette o indirette, derivanti da informazioni errate o incomplete fornite dall’EC.

L’utilizzo dei prefissi 6/, 7/, 8/ comporta l’esclusione di una determinata posizione debitoria dai servizi di “avvisatura in digitale”, ossia Request to Pay. La posizione sarà, infatti, esclusa solo se sono realizzate entrambe le seguenti condizioni:

* l’EC ha indicato il prefisso 6/, 7/, 8/;
* la tassonomia è sintatticamente corretta.

In caso di avviso multi beneficiario se almeno uno dei transfer ha indicato il prefisso 6/, 7/, 8/ e la tassonomia è sintatticamente corretta sarà escluso.

### Specifiche sintattiche dei prefissi

Nel presente paragrafo si specifica il significato sintattico di ogni singolo prefisso che determina la non veicolazione della singola Pd.

Con il prefisso 6/, l’EC segnala alla piattaforma che la Pd potrebbe essere oggetto di un ravvedimento operoso da parte del debitore, ossia che il tributo/servizio/importo dovuto che ha generato la Pd potrebbe essere pagato dal debitore senza l’applicazione di sanzioni ovvero con una riduzione delle sanzioni stesse.

Tale segnalazione da parte dell’EC è spesso connessa all’esistenza di un processo di notificazione della richiesta di pagamento oggetto della Pd nei confronti del debitore, in quanto l’importo integrale (incluse le eventuali sanzioni) di tale Pd risulterà dovuto dal debitore solo a seguito dell’avvenuto perfezionamento nei suoi confronti della relativa notificazione.\
\
Tale segnalazione da parte dell’EC potrà essere altresì connessa all’esigenza, da parte dell’EC stesso, di vedersi restituite dal debitore in via integrale le spese di notificazione o altre spese indirette in quanto ripetibili nei suoi confronti e pertanto è interesse dell’EC aspettare l’avvenuto perfezionamento della relativa notificazione per poter liquidare e/o ripetere tali spese nei confronti del debitore all'atto del pagamento della Pd. Una possibile soluzione a tale evenienza potrebbe essere rappresentata dalla scelta da parte dell’Ec di forfettizzare ex ante l’ammontare delle spese di notificazione e/o delle ulteriori voci di spesa (es. per spese indirette).

Con il prefisso 7/, l’EC segnala alla piattaforma pagoPA che la Pd non è veicolabile dalla piattaforma pagoPA in quanto l’EC ha già contrattualizzato un servizio di veicolazione della stessa Pd con altro operatore in via esclusiva e pertanto, non può assegnare la veicolazione di tale stessa Pd anche alla PagoPA S.p.A.

Con il prefisso 8/, l’EC segnala alla piattaforma pagoPA il ricorrere di entrambe le casistiche di cui al prefisso 6/ e al prefisso 7/.
