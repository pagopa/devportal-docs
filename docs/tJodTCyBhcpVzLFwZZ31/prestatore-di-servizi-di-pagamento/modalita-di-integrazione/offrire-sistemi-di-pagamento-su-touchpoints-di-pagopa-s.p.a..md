# Offrire sistemi di pagamento su touchpoints di PagoPA S.p.A.

In questo capitolo viene descritto come un PSP possa offrire all’interno della piattaforma pagoPA il pagamento tramite strumenti di pagamento digitali (carta di credito o debito, conto corrente, digital wallet) attraverso i touchpoints gestiti direttamente dalla piattaforma pagoPA.

Le modalità di pagamento disponibili sui touchpoints pagoPA si dividono in 2 macro gruppi:

* _Integrate nativamente con il Payment Gateway_: con particolare riferimento agli strumenti di pagamento soggetti al Payment Card Industry Data Security Standard (PCI DSS), il loro utilizzo viene “centralizzato” all’interno della piattaforma pagoPA in quanto i dati dello strumento di pagamento sono gestiti direttamente dalla piattaforma pagoPA tramite la sua componente di Payment Gateway erogata da un fornitore certificato della PagoPA S.p.A.. Il PSP deve registrarsi e fornire a PagoPA S.p.A. i dati specifici richiesti da ciascuno strumento di pagamento. Gli strumenti di pagamento nativamente integrati con il Payment Gateway sono:
  * Visa®
  * Mastercard®
  * Amex®
  * PayPal®
  * ApplePay®
  * GooglePay®
  * BancomatPay®
  * MyBank®
  * Satispay®
* _Integrate in modalità redirect_: tutti gli strumenti di pagamento non integrati nativamente con il Payment Gateway, che si basano su addebito in conto corrente e/o nativamente offerti dal singolo PSP, e valutati come compatibili, a garanzia di una user experience ottimale per il pagatore.

Precondizione del PSP per abilitare tutti gli strumenti di pagamento disponibili di cui ai punti precedenti - ivi inclusa la modalità redirect - è quella di operare l’integrazione al Nodo dei Pagamenti secondo le specifiche del _modello unico_ e la valorizzazione del catalogo dati informativo per il tramite del backoffice pagoPA, fruibile dall’Area Riservata.

La user experience del pagatore si distingue a seconda di:

* _utente guest_: il pagatore inserisce, per ogni pagamento, ex novo i dati del proprio strumento di pagamento digitale e procede con il pagamento;
* _utente registrato_: utilizzando SPID o CIE accede ai touchpoints e può memorizzare il proprio strumento di pagamento (se  possibile) per poi utilizzarlo nei successivi pagamenti, minimizzando le interazioni, riducendo l’inserimento dati del pagatore e gestendo la transazione nel modo più frictionless possibile.

In entrambi gli scenari il processo di pagamento è descritto sinteticamente in questi punti:

* l’utente può scegliere lo strumento di pagamento memorizzato o inserire ex novo i dati dello strumento di pagamento, utilizzando le interfacce dei touchpoints pagoPA;
* per i pagamenti sopra i 50 euro la piattaforma pagoPA mostra al pagatore il PSP Issuer dello strumento utilizzato , mentre per i pagamenti sotto i 50 euro la piattaforma pagoPA mostra al pagatore il PSP che pratica la commissione più bassa relativa allo strumento di pagamento inserito; a parità di condizione economica, la piattaforma pagoPA, in modalità randomica, seleziona uno dei PSP che praticano la medesima condizione economica;
* l’utente ha SEMPRE la possibilità di modificare la selezione proposta dalla piattaforma pagoPA;
* viene mostrata una pagina di riepilogo del pagamento;
* alla conferma dell’operazione viene effettuato il pagamento nelle modalità previste dallo strumento di pagamento selezionato;
* una volta completata la fase di pagamento, la piattaforma pagoPA invia al PSP i dettagli degli avvisi associati alla transazione;
* quando il PSP selezionato si impegna a riversare agli Enti l’importo ricevuto, viene inviata una mail all'utente contenente il dettaglio del pagamento eseguito;
* qualora il PSP non accetti il pagamento, la piattaforma pagoPA procederà a stornare il pagamento richiesto e a comunicare all'utente il mancato pagamento tramite e-mail.

## Integrazione e workflow per PSP/Strumento di Pagamento  integrato con Payment Gateway

Per gli strumenti di pagamento carte è necessario configurare due negozi (3DS 2.0):

* canale utilizzato per on-boarding della carta
* canale per pagamenti di utenti registrati

Come da direttiva Direttiva UE 2015/2366 (“PSD2”), durante ogni pagamento sarà responsabilità dell’Issuer richiedere l’autenticazione forte del pagatore (SCA) per procedere con le operazioni (memorizzazione dello strumento o pagamento).

L’operazione di pagamento avviene in due fasi:

1. autorizzazione e contabilizzazione;
2. eventuale storno/annullo se necessario.

<figure><img src="https://lh7-eu.googleusercontent.com/yhq9AQelf18Ot0EQ5oghqgvH31BCSrnxdsNpx4IMTRxWac5VbplAkuUjaC_FXa-Hj3hQujBbU6b310J7bTx2FvhXOT6Mi7fZTCGP0So7Euw5IXkqCVpiFoxWC7OpoX8SNnxW0PaN157cmV2XSsmhpH0" alt=""><figcaption></figcaption></figure>

* Avvenuta la selezione dello strumento di pagamento e del PSP, il pagatore innesca l’azione del client;
* la piattaforma pagoPA chiede la verifica della disponibilità dell’importo tramite una chiamata al Payment Gateway;
* il Payment Gateway restituisce l’esito dell’autorizzazione;
* il componente eCommerce della piattaforma pagoPA allinea la componente Nodo;
* nel caso di esito positivo dell’autorizzazione, la piattaforma pagoPA comunica al PSP che l’autorizzazione è avvenuta con successo, utilizzando la primitiva [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment):
  * all’interno della sezione _additionalPaymentInformations_ sono racchiusi i codici identificativi e la risposta ottenuta dal Payment Gateway in modo tale che il PSP possa verificare l’operazione di pagamento;
* nel caso il PSP inviasse una [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome) dopo aver risposto con un KO alla [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment) il Nodo risponderebbe con un KO per segnalare l'esito discorde;
* successivamente, entro 2 sec, il PSP comunica la conclusione del pagamento utilizzando la chiamata [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome), impegnandosi ad effettuare l’accredito sui conti correnti ricevuti sopra;
* nel caso il PSP inviasse un outcome = KO dopo aver accettato la [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment) il Nodo risponderebbe con un KO per segnalare l'esito discorde;
* la piattaforma pagoPA registra la chiusura del pagamento, ed invia la ricevuta dell’operazione agli Enti Creditori, a meno che non si siano verificati dei problemi tecnici, in quel caso la piattaforma pagoPA invierebbe una richiesta di storno/annullo delle somme;
* nel caso in cui il PSP risponda con un KO alla chiamata [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment), la piattaforma esegue la cancellazione dell’operazione e le somme impegnate ritorneranno in possesso dell’utente. Il PSP non deve inviare la comunicazione della conclusione del pagamento utilizzando la chiamata [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome).
