# Integrazione touch point dell’EC con Checkout

L'integrazione del frontend dell'EC con la piattaforma pagoPA avviene per mezzo di Checkout, un’applicazione web che consente ad un utente la navigazione degli strumenti di pagamento resi disponibili dai PSP aderenti alla piattaforma pagoPA.

La navigazione del Checkout può avvenire solo in modalità Guest, viene richiesta una mail dove inviare l’esito dell’operazione.

![](<../../.gitbook/assets/nuovo\_modello1\_carrello\_V3\_SANP (11).png>)

## Parametri della redirect <a href="#_om57nyt5rga1" id="_om57nyt5rga1"></a>

L'integrazione con Checkout è attivata da una redirect dal frontend dell'EC che contiene i seguenti parametri in POST:

* _returnUrl_: l'indirizzo al quale sarà reindirizzato l'utente dopo la conclusione del processo di pagamento;
* _fiscalCodePA_: identificativo dell'EC che ha attivato il processo di pagamento;
* _lang_: opzionalmente la lingua da utilizzare;
* un array degli avvisi da pagare, per ognuno dei quale è necessario
  * _noticeNumber_: numero avviso
  * _fiscalCode_: codice fiscale dell'EC
  * _amount_: importo
  * _agreement_: eventuale codice della convenzione tra EC e PSP

Dopo la conclusione della sessione di pagamento Checkout effettua una redirect verso l'indirizzo indicato dall'EC in _returnUrl_ aggiungendo il parametro _outcome_ in POST (OK = esito positivo, KO = esito negativo), tale parametro indica l'esito del pagamento, nel caso di esito negativo saranno inviati anche i parametri

* _errorCode_: codice dell'errore;
* _errorDescription_: descrizione dell'errore.

Checkout effettua una redirect con _outcome KO_ anche nel caso in cui la verifica delle eventuali convenzioni dia esito negativo.

## Selezione della Lingua <a href="#_om57nyt5rga1" id="_om57nyt5rga1"></a>

L’EC, come precedentemente detto, può selezionare la lingua di avvio del Checkout aggiungendo il parametro _lang_. I valori ammessi sono:

* _it_ (it-IT): Italiano
* _en_ (en-US): Inglese
* _fr_ (fr-FR): Francese
* _sl_ (sl-SI): Sloveno
* _de_ (de-DE): Tedesco

Qualora il parametro non sia presente, oppure errato, verrà proposta la lingua di default.

## Compatibilità Browser <a href="#_e7wxvqb4p73h" id="_e7wxvqb4p73h"></a>

Lo sviluppo del Checkout segue le [linee guida di design per i servizi digitali della PA](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/stabile/index.html).

In particolare, viene assicurata la compatibilità con versioni dei browser che abbiano una penetrazione media tra la popolazione di almeno 1 persona ogni 100 abitanti.

Ciò significa che con i dati disponibili ad oggi i browser supportati sono:

* Chrome
* Safari
* Firefox
* Samsung Internet Browser
* Edge
* Opera

{% hint style="info" %}
Il browser Internet Explorer 11 (IE-11) non rientra tra la lista dei browser supportati. Nel dettaglio, IE-11 non supporta gli standard web moderni ed è un freno all’implementazione all’interno delle nostre piattaforme di API web moderne e con misure di sicurezza più avanzate rispetto a quanto disponibile nel 2013.
{% endhint %}
