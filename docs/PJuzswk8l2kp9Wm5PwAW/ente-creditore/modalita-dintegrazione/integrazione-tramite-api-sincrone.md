# Integrazione tramite API sincrone

{% hint style="info" %}
Per la gestione degli errori fare riferimento a [Gestione degli errori](http://127.0.0.1:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endhint %}

## Archivio Centralizzato Avvisi&#x20;

Se gli Enti Creditori e/o i loro Intermediari Tecnologici e/o Partner Tecnologici si avvalgono dell’integrazione tramite API sincrone sono tenuti al conferimento di tutti i dati delle posizioni debitorie gestite dall'Archivio Centralizzato Avviso (ACA) necessari ad assicurare le misure di continuità operativa, che devono essere adottate dai gestori di sistemi di pagamento e dai fornitori critici di infrastrutture o servizi tecnici in conformità con gli obblighi ex art. 146 T.U.B. di sorveglianza svolta dalla Banca d'Italia.

Resta inteso che, per i trattamenti di dati personali connessi al servizio Archivio Centralizzato Avvisi, PagoPa S.p.A. agisce in qualità di titolare autonomo del trattamento, avendo la legge citata demandato a quest’ultima la realizzazione della summenzionata finalità di continuità operativa e la relativa determinazione dei mezzi essenziali del trattamento.

Ogni Ente Creditore,  al momento delle creazione di una nuova posizione debitoria, deve effettuare il censimento della stessa sull’ACA tramite la paCreatePosition; grazie la proprietà di idempotenza, per mezzo della stessa API è possibile aggiornare la posizione.

Per la procedura di abilitazione all'utilizzo della paCreatePosition è necessario fare riferimento al paragrafo  “Adesione ai servizi con subscription key”.

<figure><img src="https://lh3.googleusercontent.com/Vd05z8M6URcVGBWcwhOOsV0cR_Nxo3q1v-yjJnWvYVqk8pQAn9zaTkMwhhSF4PcF3CwhRjdzxEHU8hQ3hH6tMXuIAJJxHjjx0EghovLtMQdtmE-fqxNhpA9mYHAHLM57vfKk6E76vKoDk2rYENBzoo4" alt=""><figcaption></figcaption></figure>

#### Fase di censimento

La richiesta di creazione di una nuova posizione giunge all’ACA per mezzo della paCreatePosition, fornendo in input i seguenti dati:

* fiscalCodePA: codice fiscale dell’Ente Creditore;
* entityUniqueIdentifierType: tipologia del debitore (F=persona fisica, G=persona giuridica);
* entityUniqueIdentifierValue: codice fiscale del debitore;
* fullName: Nome e Cognome del debitore;
* IUV: identificativo univoco versamento;
* amount: importo;
* description: causale;
* dueDate: data di scadenza della posizione debitoria.

ACA effettua una verifica semantica sulla response e integra le informazioni della posizione:

* viene verificata la presenza di tutti i campi;
* viene verificata l'esistenza dell'EC nella piattaforma pagoPA;
* recupera la denominazione dell’EC;
* recupera l’IBAN indicato dall’EC tramite BO pagoPa che verrà utilizzato in fase di accredito.

Non è possibile censire una posizione con un importo uguale a zero.

Si sottolinea che il servizio non permette la gestione di pagamenti multibeneficiario.

In risposta viene inviato l’esito del censimento.

#### Fase di aggiornamento

E' possibile richiamare la stessa API paCreatePosition per effettuare un aggiornamento della posizione nei seguenti casi:

* aggiornamento dell’importo;
* aggiornamento dello stato, per comunicare la chiusura della posizione, impostando il valore del campo importo a zero;
* aggiornamento della data scadenza.

Ogni volta che verrà eseguito un aggiornamento sulla posizione debitoria la piattaforma aggiorna in automatico anche l’informazione dell' Iban di accredito prelevandolo dal BO pagoPa.

Nel caso non venisse riscontrata l’esistenza sul DB della posizione la richiesta effettuerà un censimento della posizione.

In risposta viene inviato l’esito dell'aggiornamento.

### Fase di richiesta di creazione della posizione debitoria

<figure><img src="https://lh6.googleusercontent.com/R8muVeVP_G3rvkywf5YA5e4oARyXm0EjzcqbRRLuKG4sY3KqpMscEwRnl-nWuYQ1btgpT1asT96DvGqUa59PsyW3277neqsPTx7AfajZthrEUkcqpk-hh4svPRYmZhmgNoq_wudBEy7pyig2IvFAhWQ" alt=""><figcaption></figcaption></figure>

Nel caso “Pagamento spontaneo presso PSP” la paDemandPaymentNotice è utilizzata per richiedere all’Ente Creditore la creazione della posizione debitoria in base ai dati dello specifico servizio inviati, l'Ente Creditore invia in risposta le informazioni necessarie per avviare il processo di pagamento, in particolare:

* il numero avviso;
* il codice fiscale dell'Ente Creditore da utilizzare nella fase di attivazione;
* l'importo.

Durante questa fase la posizione debitoria deve rimanere nello stato aperta.

Gli Enti Creditori mettono a disposizione i dati dello specifico servizio tramite il Catalogo dei servizi.

### Fase di verifica

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

### Fase di attivazione

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

### Fase di invio della ricevuta

<figure><img src="https://lh5.googleusercontent.com/ZT9xut3UrmTGF6_pcCBZJlDp00T4W3KQ12NjsxjXOzywzPVYyZcCBfe3dHfbMSx_JEgAIWzcKhPLlll_jgq2vwVIQ4Jz7GHH9PomeNpPTE4Hi8r2uLyvya8-y2CXeykMVPujEX5eA96fnFdYYG-TXmE" alt=""><figcaption></figcaption></figure>

Tramite la primitiva paSendRT viene inoltrata agli n Enti Creditori interessati al pagamento la receipt (ricevuta) solo se il pagamento è stato effettuato; la receipt è un oggetto generato dalla piattaforma pagoPA.

In questa fase, dopo la ricezione della receipt, la posizione debitoria deve essere posta nello stato “chiuso”.

### Recupero ricevuta

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

