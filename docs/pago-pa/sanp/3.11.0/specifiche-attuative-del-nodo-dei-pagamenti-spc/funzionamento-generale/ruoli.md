# Ruoli

Il modello di funzionamento della Piattaforma pagoPA fa riferimento ai principi del Four Corners model definito dall’European Payment Council:

![](../../.gitbook/assets/4corners.png)

| Utilizzatore finale **(Debtor)**                                | Rappresenta il privato cittadino, professionista, impresa, che effettua pagamenti a favore della Pubblica Amministrazione, delle Società a controllo pubblico e dei Gestori dei Pubblici Servizi con modalità informatiche. L’identità dell’utilizzatore finale può essere determinata con modalità informatiche (tipicamente SPID) per accedere ai servizi informatici dell’EC. Nell’ambito del processo di pagamento si distingue il ruolo del soggetto debitore, cioè colui che ha contratto un debito a favore dell’EC, ovvero effettua un pagamento di sua iniziativa per ottenere un servizio o una certificazione. Nel rapporto con l'EC si può presumere che l’utilizzatore finale sia il soggetto debitore. Si distingue, infine, il soggetto versante, ossia come colui che accede ai servizi informatici dal PSP e dispone il pagamento a favore dell’EC. |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ente Creditore **(Creditor)**                                   | Soggetto a cui l’utilizzatore finale richiede il servizio e che nei confronti del quali si configura come “creditore” per le somme a vario titolo da questi dovute. L’EC, che identifica il soggetto pagatore e la causale del pagamento, offre il servizio tramite il Nodo dei Pagamenti-SPC a cui accede direttamente o tramite un soggetto pubblico o privato, quale intermediario tecnologico nei confronti dell’EC.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Prestatore di Servizi di Pagamento **(Debtor e Creditor Bank)** | È il soggetto, abilitato dalle norme vigenti in materia, ad eseguire le richieste di pagamento in via elettronica ed a restituire la ricevuta elettronica di avvenuto pagamento/incasso. Il PSP offre i propri servizi di pagamento mettendo a disposizione direttamente o tramite terze parti (intermediari) i canali di pagamento, fisici e telematici, su cui l’utilizzatore finale può effettuare l’operazione. In questo contesto il PSP può svolgere anche, sulla base di appositi accordi con l’ente, funzioni di “Incasso” per conto dello stesso e provvedere al successivo riversamento delle somme percepite sui conti di tesoreria che l’EC detiene presso il PSP.                                                                                                                                                                                       |

Il perfezionamento delle operazioni disposte tramite la piattaforma pagoPA avviene attraverso il sistema di regolamento e compensazione (CSM) utilizzando le regole SEPA.

La piattaforma pagoPA prevede che le attività legate all’effettuazione dei pagamenti siano eseguite dagli EC o in forma diretta o tramite altri soggetti (pubblici e/o privati).

A tale proposito è utile fare una distinzione tra intermediario e partner tecnologico:

* intermediario tecnologico è un soggetto che offre, previa adesione alla piattaforma pagoPA, ad altri un servizio per il collegamento e per lo scambio dei flussi con la piattaforma pagoPA, nel pieno rispetto delle [Linee Guida](https://www.gazzettaufficiale.it/eli/id/2018/07/03/18A04494/sg) e dei relativi standard tecnici;
* partner tecnologico è un soggetto imprenditoriale, che non può aderire alla piattaforma pagoPA, di cui gli EC si avvalgono in via strumentale per l’esecuzione delle attività tecniche relative alla fornitura dei servizi IT, non necessariamente caratterizzabili, per l’interfacciamento con la piattaforma pagoPA, ferma restando la responsabilità nei confronti di PagoPA S.p.A. in capo all’EC.

La piattaforma pagoPA prevede che le attività legate all’effettuazione dei pagamenti siano eseguite dai PSP o in forma diretta o tramite altri soggetti, di cui i PSP si avvalgono in via strumentale per l’esecuzione delle attività tecniche relative alla fornitura dei servizi IT, non necessariamente caratterizzabili, per l’interfacciamento con la piattaforma pagoPA, ferma restando la responsabilità nei confronti di PagoPA S.p.A. in capo al PSP.

## Ruolo e responsabilità del PSP <a href="#thmzlt865ej6" id="thmzlt865ej6"></a>

Il PSP è il soggetto abilitato dalle norme vigenti in materia ad eseguire le richieste di pagamento in via elettronica.

Il PSP è tenuto a eseguire l’operazione di pagamento richiesta dall’utilizzatore finale secondo le modalità e le tempistiche previste dal D.lgs. del 27 gennaio 2010, n. 11 e relativi provvedimenti attuativi emanati dalla Banca d’Italia.

Il PSP è responsabile anche sotto il profilo giuridico:

* della qualità, della correttezza e della completezza dei dati che trasmette;
* del corretto aggiornamento dei dati del proprio sistema informativo;
* della sicurezza all’interno del proprio dominio;
* del rispetto di quanto previsto in [indicatori-di-qualita-per-i-soggetti-aderenti](../../appendici/indicatori-di-qualita-per-i-soggetti-aderenti/ "mention");

A prescindere dall’identificazione del pagatore eseguita dall’EC, se del caso, anche per il tramite del proprio Intermediario/Partner Tecnologico, il PSP resta responsabile dell’identificazione del soggetto Versante (titolare del C/C di addebito), in quanto suo cliente.

## Ruolo e responsabilità dell’EC <a href="#bt1apskhfea" id="bt1apskhfea"></a>

Nel contesto di pagoPA la categoria degli EC comprende le pubbliche amministrazioni, le società a controllo pubblico, come definite nel decreto legislativo adottato in attuazione dell’articolo 18 della legge n. 124 del 2015, escluse le società quotate, ed i gestori di pubblici servizi.

L’EC è responsabile anche sotto il profilo giuridico:

* della qualità, della correttezza e della completezza dei dati che trasmette, ivi incluso l’IBAN del conto da accreditare;
* del corretto aggiornamento dei dati del proprio sistema informativo;
* della sicurezza all’interno del proprio dominio;
* del rispetto di quanto previsto in [indicatori-di-qualita-per-i-soggetti-aderenti](../../appendici/indicatori-di-qualita-per-i-soggetti-aderenti/ "mention");

L’EC è altresì responsabile dell’errata e/o omessa indicazione/pubblicazione dei dati comunicati all’utilizzatore finale per l’esecuzione dei pagamenti, compresa la mancata attualizzazione dell'importo.

Nel caso in cui l’EC proceda all’identificazione del soggetto pagatore, lo stesso risulterà responsabile della correttezza e dell’autenticità dei dati identificativi del pagatore ai fini del buon esito del pagamento.

Ai fini del rilascio della quietanza di pagamento sarà responsabilità dell’EC accertare che i dati contenuti nella ricevuta elettronica siano coerenti con quelli della richiesta di pagamento.

## Ruolo e responsabilità di PagoPA S.p.A. <a href="#rbtjsx52ef6i" id="rbtjsx52ef6i"></a>

La mission di PagoPA S.p.A. è la capillare diffusione del sistema di pagamenti e servizi digitali nel Paese, attraverso la gestione della piattaforma pagoPA per i pagamenti digitali verso la Pubblica Amministrazione.

La Piattaforma pagoPA, prodotto della PagoPA S.p.A., funzionalmente assume un ruolo determinante all’interno del processo di esecuzione di un pagamento in favore di un EC:

* per l’attivazione degli automatismi di allineamento dell’importo dovuto;
* perché abilita il pagamento della posizione debitoria (e ne garantisce la sua estinzione) senza che vi sia un rapporto diretto tra PSP e EC;
* per la garanzia assicurata all’Ente erogatore della finalizzazione del pagamento.

Queste funzionalità fanno assumere alla ricevuta emessa dalla PagoPA S.p.A. ed inviata all’EC, il valore liberatorio del pagamento nei confronti del cittadino, rappresentando per l’EC l'impegno all’accredito delle somme da parte del PSP, autorizzando l’erogazione del servizio e consentendo inoltre l’attivazione di processi amministrativi digitalizzati.

I PSP e gli EC autorizzano PagoPA S.p.A e/o suoi aventi causa, a monitorare l’erogazione dei servizi offerti oggetto delle presenti specifiche attuative, nonché alla pubblicazione dei dati provenienti dal relativo monitoraggio.

In considerazione di ogni possibile servizio in sussidiarietà che la PagoPA S.p.A. possa svolgere, la stessa potrà essere qualificata come Partner Tecnologico per ogni EC aderente.

A tale qualificazione corrisponderà un'effettiva erogazione di servizi in sussidiarietà al ricorrere di una o di entrambe le seguenti condizioni:

* esistenza di una previsione normativa, primaria e/o secondaria, che identifichi PagoPA S.p.A. quale Partner Tecnologico;
* possesso da parte dell’EC dei requisiti eventualmente previsti per l’operatività di tali servizi in sussidiarietà.

Resta comunque ferma ogni facoltà in capo all’EC di scegliere di non utilizzare i servizi in sussidiarietà della PagoPA S.p.A. dotandosi per i medesimi servizi di incasso di un proprio intermediario e/o Partner Tecnologico.

## Ruolo e responsabilità di Intermediari e Partner Tecnologici <a href="#fts4d9groovv" id="fts4d9groovv"></a>

L'intermediario EC è un soggetto che permette all'EC di accedere al Nodo Dei Pagamenti. Gli EC, infatti, possono offrire il servizio e accedere al Nodo dei Pagamenti-SPC oltre che in totale autonomia, anche attraverso un intermediario tecnologico o un partner tecnologico.

Un Intermediario tecnologico è un soggetto aderente al Nodo dei Pagamenti-SPC come EC (ad esempio: Regione), che quindi ha già accettato e si è obbligato al rispetto delle Linee Guida e dei relativi allegati e che risulta, altresì, responsabile delle attività tecniche per l’ interfacciamento con il Nodo dei Pagamenti-SPC.

Viceversa, il Partner tecnologico è un mero fornitore dell’EC utilizzato in via strumentale per l’esecuzione delle attività tecniche per l’interfacciamento con il NodoSPC, ferma restando la responsabilità in capo all’EC. Si precisa che si esclude l’adesione al Nodo dei Pagamenti-SPC da parte del Partner Tecnologico in quanto tale.

Anche i PSP, come gli EC, possono utilizzare degli intermediari per connettersi al NodoSPC o per offrire i propri servizi di pagamento; tali soggetti possono essere rappresentati da altri PSP ovvero da circuiti o consorzi costituiti in ambito finanziario.

Come per gli Intermediari EC nei confronti degli EC, gli intermediari PSP sono i soggetti che mettono a disposizione del PSP i propri servizi.

## Rispetto dei workflow di pagamento <a href="#e81j9gcphkbr" id="e81j9gcphkbr"></a>

Ogni soggetto aderente al sistema pagoPA è tenuto a rispettare scrupolosamente i workflow di pagamento descritti nel presente documento.

L’eventuale intercettazione, mediante l’analisi del traffico dei pagamenti o il ricorso a strumenti di monitoraggio, di personalizzazioni e/o adattamenti dei workflow potrà comportare l’esclusione del soggetto dalla piattaforma dei pagamenti.
