# Pagamenti e Spese di notifica

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

Se ad una notifica sono collegati più pagamenti non alternativi tra loro, ma che identificano rate della stesso atto notificato, è necessario indicare tramite l'elemento applyCost su quali pagamenti (es: rata unica e prima rata) devono essere applicati i costi di notifica al destinatario.

### Gestione IVA sui costi di invio cartaceo

Il campo **`vat`**&#x6E;ella richiesta di notifica consente al mittente di specificare l'aliquota IVA applicabile ai costi di invio cartaceo, in base al proprio regime fiscale. Il valore di **vat** deve essere un numero intero ed è obbligatorio quando **`notificationFeePolicy`** è impostato su **`DELIVERY_MODE`** o per notifiche con allegati di pagamento modello F24. In assenza di un valore specificato, l'aliquota IVA predefinita è del 22%. Ad esempio, per specificare un'IVA del 22%, il campo vat deve essere impostato su 22.

### Quota del costo di notifica a favore dei mittenti

Il campo **`paFee`** (quota del costo di notifica a favore dei mittenti), indica l'importo in eurocent da applicare al mittente per coprire i costi della spedizione (Decreto Costi del 30 maggio 2022 all'art. 5, comma 1, lettera a).Questo campo diventa obbligatorio per le notifiche che hanno:

* il campo `notificationFeePolicy=DELIVERY_MODE`
* la modalità di integrazione con pagoPA asincrona (`pagoPaIntMode`=`ASYNC`)
* Nel caso la notifica abbia collegato un pagamento tramite modelloF24

Di default, se non è obbligatorio, l'importo predefinito è di 100 eurocent.Esempio: quota di copertura spese mittente 1€ -> specificare l'elemento paFee = 100\


## **Costi di notifica analogica**

L'ammontare delle  spese  di  cui  all'art. 2 del [Decret](https://www.gazzettaufficiale.it/eli/id/2022/08/03/22A04327/sg)[o Costi ](https://www.gazzettaufficiale.it/eli/id/2022/08/03/22A04327/sg)del 30/05/2022 è fissato  nella misura di euro 2,00 per ciascuna notifica effettuata tramite SEND. Tale costo si andrà a sommare alle spese sostenute in caso di notificazione analogica.

A discrezione della Pubblica Amministrazione mittente, i costi di notifica possono essere interamente o in parte ripetuti verso il destinatario.

Per ulteriori informazioni sui costi di postalizzazione, consultare il [Decret](https://www.gazzettaufficiale.it/eli/id/2022/08/03/22A04327/sg)[o Costi ](https://www.gazzettaufficiale.it/eli/id/2022/08/03/22A04327/sg)del 30/05/2022, il documento relativo alla [Gara europea a procedura aperta per l’affidamento dei Servizi postali e dei servizi “a valle” del recapito connessi alla Piattaforma notifiche digitali degli atti pubblici](https://pagopa.portaleamministrazionetrasparente.it/moduli/downloadFile.php?file=oggetto_allegati/23501547570O__OPREZZI+DI+AGGIUDICAZIONE+GARA+SERVIZI+POSTALI+E+SERVIZI+%26%238220%3BA+VALLE%26%238221%3B+DEL+RECAPITO.docx.pdf) e il documento  relativo alla [Gara europea a procedura aperta per l’affidamento dei Servizi “a monte” ed eventuali Servizi “a valle” del recapito](https://pagopa.portaleamministrazionetrasparente.it/moduli/downloadFile.php?file=oggetto_allegati/23501549340O__OPREZZI+DI+AGGIUDICAZIONE+GARA+SERVIZI+_A+MONTE_+ED+EVENTUALI+SERVIZI+_A+VALLE_+DEL+RECAPITO.docx.pdf).

