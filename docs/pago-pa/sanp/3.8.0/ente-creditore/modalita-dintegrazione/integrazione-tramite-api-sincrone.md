# Integrazione tramite API sincrone

{% hint style="info" %}
Per la gestione degli errori fare riferimento a [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endhint %}

## Archivio Centralizzato Avvisi&#x20;

Se gli Enti Creditori e/o i loro Intermediari Tecnologici e/o Partner Tecnologici si avvalgono dell’integrazione tramite API sincrone sono tenuti al conferimento di tutti i dati delle posizioni debitorie all'Archivio Centralizzato Avvisi (“ACA”), necessari ad assicurare le misure di continuità operativa, che devono essere adottate dai gestori di sistemi di pagamento e dai fornitori critici di infrastrutture o servizi tecnici in conformità con gli obblighi ex art. 146 T.U.B. di sorveglianza svolta dalla Banca d'Italia.

Resta inteso che, per i trattamenti di dati personali connessi al servizio Archivio Centralizzato Avvisi, PagoPa S.p.A. agisce in qualità di titolare autonomo del trattamento, avendo la legge citata assoggettato la stessa agli obblighi di sorveglianza ivi previsti, comportando, pertanto, in capo a quest’ultima la realizzazione della summenzionata finalità di continuità operativa e la relativa determinazione dei mezzi essenziali del trattamento.

Ogni EC, al momento delle creazione di una nuova posizione debitoria, deve effettuare il censimento della stessa sull’ACA tramite una delle seguenti modalità:

* API di creazione e aggiornamento del servizio di [Gestione Posizioni Debitorie](../../appendici/posizioni-debitorie/operazioni-disponibili.md#creazione-di-una-posizione-debitoria) (“GPD”);&#x20;
* API [paCreatePosition](../../appendici/primitive.md#pacreateposition).

### Condizioni di esclusione dal conferimento delle posizioni sull’ACA

E’ possibile definire delle  esclusioni dal conferimento delle posizioni sull’ACA tramite il backoffice pagoPA.

La motivazione a cui devono essere ricondotte tutte le casistiche di esclusione è riconducibile esclusivamente alla generazione della posizione debitoria su richiesta diretta del Debitore e contestuale al pagamento (a puro titolo esemplificativo e non esaustivo possono essere associati a tale casistica i cosiddetti pagamenti _on the fly_ presso il frontend dell’EC).

### Conferimento tramite la paCreatePosition

La [paCreatePosition](../../appendici/primitive.md#pacreateposition), grazie alla proprietà di idempotenza, permette sia di inserire sia di aggiornare la posizione.

Per la procedura di abilitazione all'utilizzo della [paCreatePosition](../../appendici/primitive.md#pacreateposition) è necessario fare riferimento al capitolo [connettivita.md](../../appendici/connettivita.md "mention").

<figure><img src="https://lh3.googleusercontent.com/Vd05z8M6URcVGBWcwhOOsV0cR_Nxo3q1v-yjJnWvYVqk8pQAn9zaTkMwhhSF4PcF3CwhRjdzxEHU8hQ3hH6tMXuIAJJxHjjx0EghovLtMQdtmE-fqxNhpA9mYHAHLM57vfKk6E76vKoDk2rYENBzoo4" alt=""><figcaption></figcaption></figure>

#### **Fase di censimento**

La richiesta di creazione di una nuova posizione giunge all’ACA per mezzo della[ paCreatePosition](https://docs.pagopa.it/sanp/appendici/primitive#pacreateposition), fornendo in input i seguenti dati:

* _paFiscalCode_: codice fiscale dell’EC che ha creato la posizione debitoria;
* _entityType_: tipologia del debitore (F=persona fisica, G=persona giuridica);
* _entityFiscalCode_: codice fiscale del debitore;
* _entityFullName_: nome e cognome del debitore;
* _nav_: numero avviso;
* _iuv_: identificativo univoco versamento;
* _amount_: importo (non è possibile censire una posizione con un importo uguale a zero);
* _description_: causale;
* _expirationDate_: data di scadenza della posizione debitoria;
* _Iban_: IBAN di riversamento (opzionale);
* _postalIban_: IBAN postale di riversamento (opzionale);
* _switchToExpired_: flag per indicare se la dueDate è vincolante o meno;
* _payStandIn_: flag per indicare se la posizione è pagabile o meno in Stand In.

ACA effettua una verifica semantica e integra le informazioni della posizione:

* viene verificata la presenza di tutti i campi obbligatori;
* viene verificata l'esistenza dell'EC sulla piattaforma pagoPA;
* recupera la denominazione dell’EC;
* nel caso non siano stati inviati i campi _Iban_ e _postalIban_, recupera l’IBAN che verrà utilizzato in fase di accredito, viene ricercato quello configurato dall’EC tramite backoffice pagoPa o, se non presente tale configurazione, viene utilizzato quello con la modifica più recente.

**Posizioni multi-beneficiario**

Anche le posizioni debitorie multi-beneficiario devono essere inviate all'ACA, con le accortezze di seguito descritte.

Nel campo _fiscalCodePA_ deve essere inserito il CF dell'Ente che ha creato la posizione debitoria.

La struttura dei dati conferma che vi è un solo importo totale comunicato dall’EC, che rappresenta la somma degli importi presenti nei vari transfer della posizione debitoria originaria, questo implica che la funzionalità di [stand-in.md](../../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in.md "mention"), solo ed esclusivamente nel caso di conferimento all’ACA tramite la [paCreatePosition](https://docs.pagopa.it/sanp/appendici/primitive#pacreateposition), non può gestire la suddivisione degli importi di una posizione debitoria di tipo multi-beneficiario, in quanto non vengono fornite le informazioni necessarie per la gestione di tale struttura di pagamento.

{% hint style="info" %}
Qualora il pagamento di una posizione debitoria di tipo multi-beneficiario avvenga in modalità di [stand-in.md](../../specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in.md "mention"), solo ed esclusivamente nel caso di conferimento all’ACA tramite la [paCreatePosition](../../appendici/primitive.md#pacreateposition), verrà effettuato un unico riversamento all’EC che ha creato l’avviso di pagamento con l’importo totale (EC presente nel campo _fiscalCodePA)_, sarà responsabilità di quest’ultimo assicurare una suddivisione accurata delle quote di pagamento tra gli ulteriori EC inseriti come beneficiari, nelle modalità da lui individuate in accordo con gli EC secondari.
{% endhint %}

**Fase di aggiornamento**

E’ obbligatorio effettuare un aggiornamento della posizione debitoria richiamando la summenzionata API [paCreatePosition](../../appendici/primitive.md#pacreateposition) nei seguenti casi:

* aggiornamento dell’importo;
* aggiornamento dello stato, per comunicare la chiusura o l’annullamento della posizione, impostando il valore del campo _amount_ a zero;
* aggiornamento della data di scadenza.

La chiamata deve essere fatta contestualmente alla modifica effettuata sull'archivio dell'EC.

Ogni volta che viene eseguito un aggiornamento della posizione debitoria, la piattaforma aggiorna in automatico anche l’informazione dell'IBAN di accredito recuperandolo dal backoffice pagoPA.

**Fase di annullamento**

E' obbligatorio nel caso di posizione annullata o sostituita con una nuova effettuare l’annullamento della posizione debitoria richiamando la summenzionata API [paCreatePosition](../../appendici/primitive.md#pacreateposition). &#x20;

La chiamata deve essere fatta contestualmente alla modifica effettuata sull'archivio dell'EC.

L’annullamento  può essere effettuato esclusivamente impostando il valore del campo _amount_ a zero.

**Fase di chiusura**

Nel caso di posizione debitoria pagata dal debitore tramite canali diversi dalla piattafroma pagoPA è necessario richiamare la summenzionata API [paCreatePosition](../../appendici/primitive.md#pacreateposition) per effettuare la chiusura della stessa.

La chiusura può essere effettuata  esclusivamente impostando il valore del campo _amount_ a zero.

## Fase di richiesta di creazione della posizione debitoria

<figure><img src="https://lh6.googleusercontent.com/R8muVeVP_G3rvkywf5YA5e4oARyXm0EjzcqbRRLuKG4sY3KqpMscEwRnl-nWuYQ1btgpT1asT96DvGqUa59PsyW3277neqsPTx7AfajZthrEUkcqpk-hh4svPRYmZhmgNoq_wudBEy7pyig2IvFAhWQ" alt=""><figcaption></figcaption></figure>

Nel caso “Pagamento spontaneo presso PSP” la paDemandPaymentNotice è utilizzata per richiedere all’Ente Creditore la creazione della posizione debitoria in base ai dati dello specifico servizio inviati, l'Ente Creditore invia in risposta le informazioni necessarie per avviare il processo di pagamento, in particolare:

* il numero avviso;
* il codice fiscale dell'Ente Creditore da utilizzare nella fase di attivazione;
* l'importo.

Durante questa fase la posizione debitoria deve rimanere nello stato aperta.

Gli Enti Creditori mettono a disposizione i dati dello specifico servizio tramite il Catalogo dei servizi.

## Fase di verifica

<figure><img src="https://lh6.googleusercontent.com/QTpKY_38X1xZfCDMGchbWw4m9E9SrCgz3FxNqewCNi6prxrKR4lry7D39AVyMK2llNJR6KdaRN4B8EkbQBFsc3o_jhT4WYXliF24vviYxV9EgFUEcmYTQF5gUA4e-7RS4m5S3LDcbrbY7IW7r_71ILA" alt=""><figcaption></figcaption></figure>

La paVerifyPaymentNotice è utilizzata per richiedere all’Ente Creditore la verifica dell’opzione di pagamento identificata dal numero avviso, che invia le informazioni di pagamento relative al numero avviso, in particolare:

* importo;
* codice fiscale dell’Ente Creditore beneficiario;
* il parametro allCCP, che indica se l’opzione di pagamento è associabile a tutti conti correnti postali o meno
  * allCCP = true: l’opzione è associabile a tutti i conti correnti postali;
  * allCCP = false: l’opzione non è associabile a tutti i conti correnti postali.

Durante questa fase la posizione debitoria deve rimanere nello stato aperta.

Il Nodo effettua una verifica semantica sulla response:

* deve essere presente la paymentList;
* il tag officeName è opzionale, tutti i restanti tags sono obbligatori.

## Fase di attivazione

<figure><img src="https://lh3.googleusercontent.com/EL6PukaZXmmDYTHBmjMvonObPGIWcm3s48ZO7EGdl8vSBjv1u4ECQyCKhRD0A5btX7BhXERln950nTMEITjeZmM2q8JCWTBAq_xBFgY-MWfrGPVe6mF_gD7BPm1beKi27tAAgK9ZsljL6emcH--m-Cc" alt=""><figcaption></figcaption></figure>

La richiesta di attivazione del pagamento giunge all’Ente Creditore per mezzo della paGetPayment, l'Ente Creditore invia l’importo del pagamento ed i dati necessari per il riversamento della somma, in particolare per ogni versamento:

* importo parziale;
* codice fiscale dell’Ente Creditore beneficiario;
* IBAN da usare per il riversamento.

Durante questa fase la posizione debitoria deve rimanere nello stato aperta, sarà cura del Nodo inibire altri tentativi di pagamento per lo stesso numero di avviso.

Il Nodo effettua una verifica semantica sulla response:

* verifica la corrispondenza tra il valore di paymentAmount e la somma di tutti gli amount presenti nei transfer;
* ci deve essere almeno un'occorrenza di transfer;
* controllo semantico degli IBAN in ogni transfer;
* viene verificata l'esistenza sul Nodo dell'associazione tra fiscalCodePA e IBAN;
* nel caso di presenza di un Ente Creditore secondario viene verificato che sia abilitato sul Nodo.

## Fase di invio della ricevuta <a href="#fase-invio-ricevuta" id="fase-invio-ricevuta"></a>

<figure><img src="https://lh5.googleusercontent.com/ZT9xut3UrmTGF6_pcCBZJlDp00T4W3KQ12NjsxjXOzywzPVYyZcCBfe3dHfbMSx_JEgAIWzcKhPLlll_jgq2vwVIQ4Jz7GHH9PomeNpPTE4Hi8r2uLyvya8-y2CXeykMVPujEX5eA96fnFdYYG-TXmE" alt=""><figcaption></figcaption></figure>

Tramite la primitiva paSendRT viene inoltrata agli n Enti Creditori interessati al pagamento la receipt (ricevuta) solo se il pagamento è stato effettuato; la receipt è un oggetto generato dalla piattaforma pagoPA.

In questa fase, dopo la ricezione della receipt, la posizione debitoria deve essere posta nello stato “chiuso”.

Nel caso in cui la paSendRT vada in timeout/errore response o nel caso in cui l'EC risulti irraggiungibile, viene avviata una procedura di retry per ottenere una response valida dal destinatario secondo le logiche della tabella seguente.

| Numero di tentativi | Intervallo tra ogni tentativo |
| ------------------- | ----------------------------- |
| 48                  | 1 ora                         |

## Recupero ricevuta

Il servizio è rivolto a tutti gli Enti Creditori che, in casi particolari, hanno la necessità di recuperare una receipt non disponibile all’interno del proprio sistema a causa di specifiche anomalie tecniche e/o di processo.

Come verrà ampiamente chiarito nelle sezioni successive, il servizio non è pensato per essere fruito durante tutte le fasi del processo di pagamento, ma soltanto in casi specifici e in modo particolare a valle della ricezione dei flussi di rendicontazione. A protezione della natura del servizio sono state implementate delle politiche di throttling che limitano il numero di chiamate n in un intervallo di tempo t da parte dello stesso Ente Creditore.

<figure><img src="https://lh4.googleusercontent.com/x871MBet02YyYODC_dW5WwseUIAFBo0oPtbrfXb00MRtmQW8G7EKwTPaBeHn3XubHyzd5Uh3hgiVHr5jU-eAQXYgg4I4IJ9EBzg7HpvIUK3Hsv5wvwz3fqGC5yOnEACic9s5atmWj59bgcfrqaMlylQ" alt=""><figcaption></figcaption></figure>

Qualora durante la lavorazione del flusso una receipt non fosse disponibile, l’eccezione può essere gestita tentando di recuperarla mediante l’invocazione del servizio getOrganizationReceipt.

Il diagramma seguente riporta invece uno use case non consentito

<figure><img src="https://lh5.googleusercontent.com/D-1q3_OqSug3EEB3S_poUzkA8NEQIWqTnIOaZI3jRjJREnEwcBIqbBHTSgS1UUjolKAKSDI_xXIo5Tb-sAqrO3IV2f9wpLXml83y1I7ZsimqL--HoGC-xldUv5aIFwjWD7Kw67u2javu6bxfr_8y5o8" alt=""><figcaption></figcaption></figure>

E' assolutamente vietato inserire l’invocazione del servizio getOrganizationReceipt all’interno di un loop in modo indiscriminato senza l’insorgere di un evento di errore che ne giustifichi l’utilizzo.

La procedura di adesione al servizio è descritta in Adesione ai servizi con subscription key.

Dopo aver ottenuto la subscription key, è possibile iniziare ad utilizzare il servizio mediante l’invocazione della API getOrganizationReceipt.

Di seguito i dettagli della signature del servizio:

`GET /organizations/{organizationfiscalcode}/receipts/{iur}/paymentoptions/{iuv}`

Come è possibile osservare il servizio effettua la ricerca della receipt utilizzando come filtro tre parametri ricevuti in input tramite la valorizzazione dei seguenti path parameters:

* organizationalfiscalcode: codice fiscale Ente Creditore;
* iur: identificativo univoco riscossione, presente all’interno del flusso di rendicontazione ricevuto dal nodo pagoPA mediante l’invocazione della primitiva nodoChiediFlussoRendicontazione;
* iuv: Identificativo univoco versamento, anch’esso presente all’interno del flusso di rendicontazione.

Il servizio non è pensato per un utilizzo massivo, a protezione di questa caratteristica sono state attivate delle politiche di throttling che prevedono, per ogni sottoscrizione al servizio, un massimo di 10 chiamate nell’arco di 60 minuti.

Per i tutti i dettagli tecnici relativi al corretto utilizzo del servizio è possibile fare riferimento alle specifiche della primitiva in getOrganizationReceipt.&#x20;

