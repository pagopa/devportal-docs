# Portale di fatturazione

Per espletare gli adempimenti legati ai processi di fatturazione delle notifiche inviate tramite SEND, PagoPA S.p.A. ha creato un portale apposito accessibile tramite l’[Area Riservata](https://www.pagopa.it/it/area-riservata/).

Una volta effettuato l’onboarding su Area Riservata (cfr. sezione “Accordo di adesione e allegati - Area Riservata), l’Ente è automaticamente abilitato all’accesso al portale.&#x20;

Ai fini della fatturazione, l’Ente, tramite il portale, deve:&#x20;

1. Inserire i dati relativi alla fatturazione (dati relativi all’ordine di acquisto e dati relativi al contratto);
2. Inserire i dati relativi al modulo di commessa (volumi di notifiche che si prevede di inviare tramite SEND nel mese successivo alla compilazione);
3. Prendere visione del report di dettaglio delle notifiche gestite da SEND;
4. Inserire le contestazioni per le notifiche ritenute non gestite correttamente;
5. Caricare le Regolari Esecuzioni firmate al fine di autorizzare PagoPA S.p.A. all'emissione delle fatture di saldo.

Il portale gestisce infatti i processi relativi a:

* **Fatturazione**: Il ciclo di fatturazione prevede l’emissione, su base mensile, di fatture di anticipo, acconto e saldo. Le fatture di anticipo vengono emesse sulla base del numero di notifiche indicate nel Modulo di Commessa per Anticipazione. Le fatture di acconto vengono emesse sulla base del numero di notifiche realmente processate via SEND nel mese di riferimento. Al termine di ogni mese, PagoPA S.p.A. estrae tutti i dati relativi al mese concluso e produce, per ciascun Ente, un report contenente le informazioni relative ai servizi fatturabili. Sulla base dei dati contenuti in questo report, viene emessa la fattura a saldo.
* **Modulo di commessa**: Entro il giorno 15 di ogni mese, l’Ente deve compilare, tramite il Portale, il Modulo di Commessa per Anticipazione, relativo alle notifiche pianificate per il mese successivo. Nel Modulo, l’Ente deve indicare il numero di notifiche che prevede di inviare nel mese di riferimento, con indicazione del numero di notifiche da processare in via digitale e del numero di notifiche da processare in via analogica (distinguendo tra atti da notificare tramite raccomandata A/R e atti da notificare tramite raccomandata 890). L’Ente è invitato a compilare il modulo anche qualora i volumi di notificazione dovessero essere pari a zero.
* **Reportistica di dettaglio**: Attraverso l’apposita sezione del Portale, l’Ente può visualizzare un report di dettaglio di tutte le notifiche processate a mezzo SEND e quindi soggette a fatturazione. La scheda del Report di Dettaglio permette all’utente di filtrare la tipologia di notifica (digitale/ analogica, nazionale/ internazionale, AR/ 890) per avere una visione aggregata e di poter scaricare il report di dettaglio (conservato sul Portale di Fatturazione per un periodo pari all’anno fiscale). Inoltre, dalla stessa schermata l’utente potrà accedere ad una sezione apposita per la gestione delle contestazioni.
* **Gestione delle contestazioni**: Qualora l’Ente dovesse avere necessità di contestare una o più notifiche riassunte nel report di dettaglio prodotto dal Portale, potrà farlo e indicarne la motivazione nell’apposita sezione dello stesso. Il Supporto SEND potrà di seguito accedere al Portale, prendere visione delle contestazioni e gestirle come previsto dalla Lettera di Adesione e dal relativo allegato 4.

Per dettagli sui processi di fatturazione, commessa e gestione delle contestazioni, si rimanda alla Lettera di adesione e al relativo documento [ Ciclo PN.](https://docs.pagopa.it/documento-4-ciclo-attivo-pn)

## Spese Notifica

Il costo della notifica si determina sulla base di quanto previsto dal Decreto 30 maggio 2022 «Individuazione dei costi e dei criteri e modalità di ripartizione e ripetizione delle spese di notifica degli atti tramite la piattaforma di cui all'art. 26, comma 14 del decreto-legge 16 luglio 2022, n. 76». Tale decreto considera due componenti di costo. La prima componente, a copertura dei costi di gestione sostenuti da PagoPA S.p.A., è indicata in 1€ più il costo di eventuali comunicazioni cartacee determinato sulla base delle gare di postalizzazione indette da PagoPA. La seconda componente a copertura dei costi, sostenuti dai mittenti, per l'elaborazione degli atti, provvedimenti, avvisi e comunicazioni oggetto di notifica, per il relativo deposito sulla piattaforma e per la gestione degli esiti della notifica, è indicata in 1€. Questa seconda componente non è prevista per la notifica degli atti dell'amministrazione finanziaria e dell'agente della riscossione.

PN permette alla PA mittente di definire, all'atto della creazione di ciascuna notifica, se il costo di notificazione da ripetere al cittadino sia calcolato alla luce del Decreto citato nel precedente paragrafo o se debba essere calcolato in modo forfettario. Questo secondo caso si applica in caso di leggi speciali relative a particolari notifiche o nel caso in cui la PA mittente voglia farsi carico integralmente dei costi di notifica.&#x20;

In ogni caso PN fatturerà alla PA mittente le spese effettive di notificazione sostenute per ciascun destinatario della notifica. In caso di destinatari multipli, il pagamento sarà reso disponibile a tutti i destinatari fino al pagamento effettuato da parte di uno di essi (il primo che effettua il pagamento). I costi di notifica sostenuti per raggiungere gli altri destinatari dovranno essere riscossi dalla PA in autonomia.

PN fornisce alla PA mittente indicazione precisa delle diverse componenti del costo della notifica così come previste nel Decreto. In caso di spedizioni cartacee multiple saranno forniti separatamente i costi di ciascuna di esse.

Per permettere la corretta determinazione del costo della notifica, PN mette a disposizione della PA mittente una specifica API che, fornendo Codice Avviso e Codice Fiscale dell’Ente creditore per il pagamento, restituisce il costo della notifica e la data di perfezionamento per il destinatario della stessa. Queste stesse informazioni possono essere dedotte dalla PA mittente a partire dalle informazioni relative allo stato della notifica fornite da PN ma, non essendo queste informazioni disponibili in tempo reale, la modalità corretta di gestione dell'attualizzazione del costo è quella di effettuare tale attualizzazione all'atto del pagamento ed utilizzando l'API menzionata precedentemente. Per gli intermediari tecnologici della piattaforma pagoPA che adottano la modalità asincrona di aggiornamento della posizione debitoria è invece disponibile l’opzione di attualizzazione gestita direttamente da PN integrata nativamente con pagoPA. PagoPA e gli enti apriranno un tavolo di confronto per analizzare le esigenze degli enti per quanto concerne la modalità sincrona di aggiornamento della posizione debitoria e individuare eventuali interventi e funzionalità necessarie, i cui dettagli saranno oggetto di aggiornamento del presente manuale.

A causa dei tempi necessari per inviare a PN gli esiti della spedizione cartacea, la data di perfezionamento potrebbe non essere sempre disponibile all'atto della chiamata all'API. Ad esempio, potrebbe essere disponibile la data di prima visualizzazione della notifica ma non ancora disponibile la data di conclusione della procedura di recapito cartaceo. In questo caso non sarebbe determinabile con certezza la data di perfezionamento.

È responsabilità della PA mittente utilizzare gli strumenti messi a disposizione da parte di PN per attualizzare correttamente, prima del suo pagamento, la posizione debitoria eventualmente associata ad una notifica. Non sono imputabili a PagoPA S.p.A. errati pagamenti dovuti all'errata attualizzazione delle posizioni debitorie.

Per permettere una corretta gestione dei pagamenti effettuati al di fuori di PN, la PA mittente deve informare PN sull'avvenuto pagamento appena ne viene a conoscenza.

***

Le spese di notifica non sono note a priori e possono essere diverse per notifica e all'interno della stessa notifica anche tra un destinatario ed un altro.

Le spese di notifica sono calcolate in base a:

* Il decreto 30 maggio 2022 "Individuazione dei costi e dei criteri e modalita' di ripartizione e ripetizione delle spese di notifica degli atti tramite la piattaforma di cui all'art. 26, comma 14 del decreto-legge 16 luglio 2020, n. 76."
* Costi sostenuti per l'invio cartaceo definiti come da Bando di Gara.

Per i dettagli si veda anche "Costi di notifica digitale e analogica" su&#x20;

[https://notifichedigitali.it/enti-come-aderire](https://notifichedigitali.it/enti-come-aderire)

I pagamenti supportati da SEND al momento sono di due tipologie:

* pagoPA
* modello F24

Per entrambe le modalità di pagamento è previsto che le spese di notificazione degli atti siamo a carico del destinatario, questo viene realizzando aggiungendo le spese registrate dalla piattaforma a quelle indicate dal mittente.

### Pagamento puntuale o forfettario

SEND prevede anche la possibilità di gestire le spese in maniera forfettaria (già incluse nell'atto notificato) indicando il parametro `notificationFeePolicy=FLAT_RATE`. In questa modalità il costo della notifica calcolato dalla piattaforma verso il destinatario sarà sempre nullo.\


{% hint style="info" %}
È rimessa alla libera valutazione dell’Ente mittente la possibilità di non applicare dei costi di notifica, rinunciando alla ripetibilità della totalità degli stessi, ad esempio quando l’atto oggetto di notificazione non preveda alcuna forma di pagamento da parte del destinatario.&#x20;

È rimessa alla libera valutazione dell’Ente mittente la possibilità di applicare dei costi forfettari alla notifica, rinunciando alla ripetibilità di quota degli stessi, ad esempio, indicando un valore forfettario pari a 2 Euro previsti dal Decreto Costi oltre il valore minimo pubblicato dalla PagoPA per la Raccomandata A/R ovvero i medesimi 2 Euro oltre al valore minimo pubblicato dalla PagoPA per la raccomandata ex L. 890/1982. NOTA: L'Ente deve valutare in proprio di essere legittimato in virtù di specifica normativa ad applicare costi forfettari.
{% endhint %}

Per tutte le notifiche depositate con `notificationFeePolicy=DELIVERY_MODE`il calcolo delle spese di notifica sarà effettuato in base ai parametri paFee (quota a copertura delle spese del mittente), vat (iva da applicare al costo dell'invio cartaceo), il costo della gestione della notifica e il costo di eventuali invii cartacei.

### Pagamenti Rateali

Se a una notifica sono collegati più pagamenti non alternativi tra loro, ma che identificano rate dello stesso atto notificato, è necessario indicare tramite l'elemento applyCost su quali pagamenti (es: rata unica e prima rata) devono essere applicati i costi di notifica al destinatario.

### **Trattamento fiscale connesso alle attività di notifica**

All'esito dell'interpello presentato da PagoPA S.p.A. all'Agenzia delle Entrate, in cui la società chiedeva chiarimenti circa il corretto trattamento fiscale delle operazioni connesse alle attività erogate in favore degli enti come previsto dall'art. 26 D.L. 76/2020, l'amministrazione finanziaria stabiliva, con risposta del 15 dicembre 2023, che tutte le attività di notifica in via digitale e in via analogica sono da considerarsi **assoggettabili ad IVA**, avendo natura di corrispettivo, ai sensi degli articoli 3, primo comma, e 13, primo comma, del DPR 633/1972. Pertanto, ai sensi dell'accordo di adesione, le prestazioni di notifica in via digitale e in via analogica ed i relativi corrispettivi sono da confermarsi oltre IVA in quanto dovuta.

### Gestione IVA sui costi di invio cartaceo

Il campo **`vat`**&#x6E;ella richiesta di notifica consente al mittente di specificare l'aliquota IVA applicabile ai costi di invio cartaceo, in base al proprio regime fiscale. Il valore di **vat** deve essere un numero intero ed è obbligatorio quando **`notificationFeePolicy`** è impostato su **`DELIVERY_MODE`** o per notifiche con allegati di pagamento modello F24. In assenza di un valore specificato, l'aliquota IVA predefinita è del 22%. Ad esempio, per specificare un'IVA del 22%, il campo vat deve essere impostato su 22.

### Quota del costo di notifica a favore dei mittenti

Il campo **`paFee`** (quota del costo di notifica a favore dei mittenti), indica l'importo in eurocent da applicare al mittente per coprire i costi della spedizione (Decreto Costi del 30 maggio 2022 all'art. 5, comma 1, lettera a).Questo campo diventa obbligatorio per le notifiche che hanno:

* il campo `notificationFeePolicy=DELIVERY_MODE`
* la modalità di integrazione con pagoPA asincrona (`pagoPaIntMode`=`ASYNC`)
* Nel caso la notifica abbia collegato un pagamento tramite modelloF24

Di default, se non è obbligatorio, l'importo predefinito è di 100 eurocent.Esempio: quota di copertura spese mittente 1€ -> specificare l'elemento paFee = 100&#x20;

## **Costi di notifica analogica**

L'ammontare delle  spese  di  cui  all'art. 2 del [Decret](https://www.gazzettaufficiale.it/eli/id/2022/08/03/22A04327/sg)[o Costi ](https://www.gazzettaufficiale.it/eli/id/2022/08/03/22A04327/sg)del 30/05/2022 è fissato  nella misura di euro 2,00 per ciascuna notifica effettuata tramite SEND. Tale costo si andrà a sommare alle spese sostenute in caso di notificazione analogica.

A discrezione della Pubblica Amministrazione mittente, i costi di notifica possono essere interamente o in parte ripetuti verso il destinatario.

Per ulteriori informazioni sui costi di postalizzazione, consultare il [Decret](https://www.gazzettaufficiale.it/eli/id/2022/08/03/22A04327/sg)[o Costi ](https://www.gazzettaufficiale.it/eli/id/2022/08/03/22A04327/sg)del 30/05/2022, il documento relativo alla [Gara europea a procedura aperta per l’affidamento dei Servizi postali e dei servizi “a valle” del recapito connessi alla Piattaforma notifiche digitali degli atti pubblici](https://pagopa.portaleamministrazionetrasparente.it/moduli/downloadFile.php?file=oggetto_allegati/23501547570O__OPREZZI+DI+AGGIUDICAZIONE+GARA+SERVIZI+POSTALI+E+SERVIZI+%26%238220%3BA+VALLE%26%238221%3B+DEL+RECAPITO.docx.pdf) e il documento  relativo alla [Gara europea a procedura aperta per l’affidamento dei Servizi “a monte” ed eventuali Servizi “a valle” del recapito](https://pagopa.portaleamministrazionetrasparente.it/moduli/downloadFile.php?file=oggetto_allegati/23501549340O__OPREZZI+DI+AGGIUDICAZIONE+GARA+SERVIZI+_A+MONTE_+ED+EVENTUALI+SERVIZI+_A+VALLE_+DEL+RECAPITO.docx.pdf).

