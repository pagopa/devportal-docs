# Integrazione touch point dell’EC con Checkout

Nel caso di [pagamento-presso-frontend-dellec.md](../../casi-duso/pagamento-presso-frontend-dellec.md "mention") l'integrazione con la piattaforma pagoPA  avviene per mezzo di Checkout, un’applicazione web che consente ad ogni utente la navigazione degli strumenti di pagamento resi disponibili dai PSP aderenti alla piattaforma pagoPA.

La navigazione del Checkout può avvenire solo in modalità Guest, viene richiesta una mail a cui inviare l’esito dell’operazione.

![](<../../.gitbook/assets/nuovo\_modello1\_carrello\_V3\_SANP\_EC (3).png>)

## Parametri della redirect <a href="#_om57nyt5rga1" id="_om57nyt5rga1"></a>

L'integrazione con Checkout è attivata per mezzo di una redirect innescata tramite una chiamata   [POST](../../appendici/primitive.md#ec-checkout-api)  specificando i seguenti parametri :&#x20;

* _emailNotice:_ indirizzo mail a cui inviare la ricevuta di pagamento, sarà possibile modificarlo durante il processo di  pagamen_to_&#x20;
* _idCart:_ identificativo del carrello attribuito dall'EC, il parametro viene inserito in fase di attivazione nel tag _paymentNote_ della [paGetPayment](../../appendici/primitive.md#pagetpayment)
* _returnUrls_: indirizzi di ritorno sul sito dell'ente creditore
  * returnOkUrl: casi di successo
  * returnCancelUrl: casi di annullamento
  * returnErrorUrl: casi di errore
* un array degli avvisi da pagare, con un numero massimo di 5, per ognuno dei quale è necessario specificare
  * _noticeNumber_: numero avviso
  * _fiscalCode_: codice fiscale dell'EC
  * _amount_: importo dell'avviso di pagamento ( in centesimi di euro)
  * _companyName_ : denominazione dell'ente creditore
  * _description_ : oggetto del pagamento
  * _allCCP:_ impostandolo a TRUE l'EC comunica alla piattaforma pagoPA che tutti i transfer dell'avviso possono essere associati a IBAN postali, la [paGetPayment](../../appendici/primitive.md#pagetpayment) che l'EC riceverà per l'attivazione dell'avviso corrente conterrà il parametro [_transferType_ valorizzato a _POSTAL_](best-practice.md#bollettino-postale-pa)_._

In risposta a tale chiamata, si ottiene un [HTTP Status 302](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302) che istruisce il browser dell'utente al re-indirizzamento verso la pagina dove procedere con il pagamento.

Terminata la sessione di pagamento l'utente viene riportato alla url indicata dall'EC in base all'esito del pagamento.

## Selezione della Lingua <a href="#_om57nyt5rga1" id="_om57nyt5rga1"></a>

Checkout verrà visualizzato nella lingua impostata all'interno del Browser dell'utente, nel caso di lingua non supportata verrà utilizzata la lingua italiana. In qualsiasi momento, l'utente potrà modificare la lingua.

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
