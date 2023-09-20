# Offrire sistemi di pagamento su touch point di PagoPA S.p.A.

In questo paragrafo viene descritto come un PSP possa offrire all’interno della piattaforma pagoPA il pagamento tramite strumenti di pagamento digitali (carta di credito o debito, conto corrente, digital wallet) attraverso i touch point gestiti direttamente dalla piattaforma. Il pagamento tramite strumenti di pagamento digitali sui touch point gestiti da PagoPA S.p.A. viene “centralizzato” all’interno della piattaforma, ovvero i dati dello strumento sono gestiti direttamente dalla piattaforma tramite la sua componente PCI DSS (Payment Manager).

Un PSP che volesse esser anche acquirer può integrarsi con la piattaforma pagoPA in due diverse modalità:

* configurandosi come merchant sulla piattaforma @POS di NEXI S.p.A.&#x20;
* integrando un proprio _payment gateway_ direttamente con la componente Payment Manager di PagoPA S.p.A.

Per entrambe le opzioni la user experience del pagatore si divide fra:

* utente guest: il pagatore inserisce _ex novo_ i dati del proprio strumento di pagamento digitale e procede con il pagamento;
* utente registrato: utilizzando SPID o CIE accede ai touch point e memorizza il proprio strumento (se le peculiarità lo permettono) per poi esser utilizzato nei successivi pagamenti minimizzando le interazioni, riducendo l’inserimento dati del pagatore e gestendo la transazione nel modo più _frictionless_ possibile.

In entrambi gli scenari, il processo di pagamento è descritto sinteticamente in questi punti:

* l’utente sceglie o inserisce _ex novo_ i dati dello strumento di pagamento utilizzando le interfacce dei touch point PagoPA;
* la piattaforma seleziona la modalità di acquiring dando priorità al servizio di pagamento del PSP Issuer dello strumento utilizzato (o vi sia evidenza di un rapporto già in essere tra PSP ed utente) per i pagamenti _sopra i 50 euro_, mentre per i pagamenti _sotto i 50 euro_ la piattaforma seleziona la modalità di acquiring dando priorità al servizio di pagamento del PSP che pratica la commissione più bassa, ed a parità di condizione economica applicata tra più PSP la piattaforma in modalità randomica seleziona uno di tali PSP;
* l’utente ha SEMPRE la possibilità di modificare la selezione proposta dalla piattaforma;
* viene mostrata una pagina di riepilogo del pagamento;
* alla conferma dell’operazione viene effettuato il pagamento nelle modalità di integrazione del canale selezionato.
* Ala ricezione dell'autorizzazione del pagamento l'utente viene notificato , mediante apposito messaggio , dell'avvenuto pagamento.
* Nel momento in cui il PSP selezionato per la transazione accetta la notifica del pagamento, viene inviata una mail all'utente contenente il dettaglio del pagamento eseguito.

Qualora il PSP non accetti il pagamento, la piattaforma procederà a stornare il pagamento eseguito e  notificare per mezzo e-mail l'utente del mancato pagamento.

## **Integrazione e workflow per PSP/Acquirer integrato con Virtual POS**

E’ necessario configurare due negozi (3DS 2.0):

* canale utilizzato per on-boarding della carta
* canale per pagamenti di utenti registrati

Come da direttiva PSD2, durante ogni pagamento sarà responsabilità dell’Issuer richiedere il codice di autorizzazione (SCA) per procedere con le operazioni (memorizzazione dello strumento o pagamento).

L’operazione di pagamento avviene in due fasi:

* autorizzazione
* contabilizzazione

![](../../.gitbook/assets/VPOS\_ENG.png)

* avvenuta la selezione dell’acquirer, il pagatore innesca l’azione del client;
* la piattaforma verifica la disponibilità dell’importo verso l’acquirer tramite una chiamata al payment Gateway / Virtual POS;
* il Virtual POS restituisce l’esito dell’autorizzazione;
* il Payment Manager allinea la componente Nodo;
* nel caso di risposta positiva, la piattaforma notifica al PSP associato all’acquirer selezionato che l’autorizzazione è avvenuta con successo, utilizzando la primitiva [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment):
  * all’interno della sezione _additionalPaymentInformations_ sono racchiusi i codici identificativi e la risposta ottenuta dal Virtual POS in modo tale che il PSP possa verificare l’operazione di pagamento;
* in caso di esito positivo, la piattaforma esegue l’operazione di contabilizzazione delle somme;
* nel caso il PSP inviasse una [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome) dopo aver risposto con un KO alla [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment) il Nodo risponderebbe con un KO per segnalare l'esito discorde;
* successivamente, **entro 2sec**, il PSP notifica la conclusione del pagamento impegnandosi ad effettuare l’accredito sui conti correnti ricevuti sopra, utilizzando la chiamata [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome);
* nel caso il PSP inviasse un outcome = KO dopo aver accettato la [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment) il Nodo risponderebbe con un KO per segnalare l'esito discorde;
* la piattaforma registra la chiusura del pagamento, ed invierà ricevuta dell’operazione agli Enti Beneficiari.

Nel caso in cui il PSP risponda con un KO alla chiamata [pspNotifyPayment](../../appendici/primitive.md#pspnotifypayment), la piattaforma esegue la cancellazione dell’operazione e le somme impegnate ritorneranno in possesso dell’utente, il PSP non deve inviare la notifica della conclusione del pagamento utilizzando la chiamata [sendPaymentOutcome](../../appendici/primitive.md#sendpaymentoutcome).

## **Payment Gateway**

In questo scenario PagoPA S.p.A. si rende disponibile ad un’integrazione specifica con il PSP secondo modi e tempi da concordare, che rifletta in ogni caso i flussi descritti nel precedente paragrafo per garantire una _user experience_ uniforme.&#x20;

Ogni Payment Gateway dovrà mettere a disposizione della piattaforma

* un servizio di inizializzazione della richiesta autorizzazione del pagamento&#x20;
* un servizio di verifica dell'autorizzazione&#x20;
* un servizio di storno ( o annullamento ) del pagamento eseguito&#x20;

la piattaforma renderà disponibile un apposito servizio per acquisire l'autorizzazione richiesta.
