# Pagamenti presso frontend dell'EC in modalità asincrona

In questa pagina viene fornito un possibile flusso di integrazione relativo ad un pagamento iniziato dal frontend dell'EC, nel caso in cui questo abbia aderito alla piattaforma pagoPA in modalità asincrona.

{% hint style="info" %}
Il flusso descritto in questa sezione è a scopo prettamente esemplificativo e non deve dunque essere considerato come una specifica di implementazione mandatoria.
{% endhint %}

Il punto cruciale di questa soluzione è fare in modo che, in tutti i casi in cui la posizione debitoria non possa essere caricata preventivamente, questa risulti presente sul servizio **posizioni debitorie** PagoPA  prima della fase di attivazione del pagamento.

<figure><img src="../../.gitbook/assets/nuovo_modello1_carrello_V3_SANP-Payment_process_activated_by_EC__asybchronous_integration.png" alt=""><figcaption></figcaption></figure>

* Quando il front end dell'EC riceve la richiesta di pagamento di uno o più avvisi, prima di inoltrare la richiesta a Checkout mediante una [redirect](../../ente-creditore/modalita-dintegrazione/integrazione-touch-point-dellec-con-checkout.md), procede al caricamento della/e relative posizioni debitorie mediante l'invocazione dell'api [`createDebtPosition`](operazioni-disponibili.md)esposta dalla componente GPD-Core;
* al fine di creare, pubblicare e porre le posizioni debitorie nello stato `VALID` con una sola invocazione verso la componente GPD-Core, si suggerisce di valorizzare il query parameter `toPublish=true` e il campo della posizione debitoria `validityDate=null;`
* a questo punto la/e posizioni debitorie sono presenti all'interno del servizio **posizioni debitorie** PagoPA e si trovano nello stato corretto per poter essere pagate;
* Checkout, in base al numero di avvisi che ha ricevuto, chiede al Nodo di attivare gli _n_ pagamenti, a sua volta il Nodo girerà le richieste alla componente GPD-Payments che risponderà alla primitiva paGetPaymentV1/V2 per conto dell'EC;
* il processo di pagamento procede invariato come descritto nella pagina [Pagamento presso frontend dell'EC](../../casi-duso/pagamento-presso-frontend-dellec.md) fino al momento dell'invocazione della primitiva [paSendRT](../primitive.md#pasendrt), che nel caso di integrazione asincrona viene inoltrata alla componente GPD-Payments ed eventualmente alle stazioni di broadcast configurate;
* quando la componente GPD-Payments riceve la _receipt_ provvede alla chiusura della posizione debitoria.
