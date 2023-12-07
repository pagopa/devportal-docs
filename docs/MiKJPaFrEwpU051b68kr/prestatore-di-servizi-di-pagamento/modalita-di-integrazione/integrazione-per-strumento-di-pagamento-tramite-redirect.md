# Integrazione per strumento di pagamento tramite Redirect

La modalità di pagamento in _redirect_ verso soluzioni fornite dai singoli PSP o terze parti da loro convenzionate, introdotta per facilitare i pagamenti su conto corrente e similari per i cittadini ed imprese, è studiata secondo le seguenti stelle polari:

* _principio di neutralità_: la piattaforma pagoPA **deve** mettere a disposizione di tutti i PSP le medesime interfacce ed integrazioni tecnologiche senza alcuna customizzazione; é chiesto quindi a tutti i PSP che oggi hanno soluzioni custom di adeguarsi alla nuova modalità, unica disponibile per il modello unico di pagamento obbligatorio sulla piattaforma pagoPA;&#x20;
* _compliance PSD2_: come oggi resta responsabilità del PSP, che mette a disposizione lo strumento di pagamento (direttamente o per il tramite di terzi), garantire il rispetto della normativa vigente in termini di sicurezza, autenticazione (SCA) e best practice bancarie;
* _regole chiare descritte nelle SANP_: è scelta della società PagoPA S.p.A. declinare quali modalità di pagamento permettere di veicolare dentro la modalità di _redirect_, secondo principi che devono essere chiari e descritti nelle SANP.

**NB:** le modalità di pagamento, anche se per pagamenti su conto corrente (es: mybank, BancomatPay, ...), nativamente integrate con il payment gateway di pagoPA, non possono essere integrate in modalità _redirect_.

Precondizione del PSP per abilitare tutti gli strumenti di pagamento disponibili, fra cui la _redirect_, è l’integrazione al Nodo dei Pagamenti secondo le specifiche del modello unico e la valorizzazione del catalogo dati informativo per il tramite del backoffice pagoPA fruibile dall’area riservata.

Il PSP deve mettere a disposizione della piattaforma pagoPA le seguenti interfacce:

* [_API recupero URL_](integrazione-per-strumento-di-pagamento-tramite-redirect.md#api-recupero-url): esposta su rete pubblica dal PSP ed invocata dalla piattaforma pagoPA per recuperare la URL che il browser dell’utente utilizzerà per atterrare in modalità _redirect_, veicolando in anticipo al PSP informazioni sul pagamento che sarà effettuato;
* [_redirect_](integrazione-per-strumento-di-pagamento-tramite-redirect.md#redirect): pagina web ottimizzata per dispositivi mobile su cui l’utente atterra in _redirect,_ che mette a disposizione le funzionalità di autenticazione e autorizzazione del pagamento. A fronte di qualsiasi esito del pagamento o annullo da parte dell’utente deve mandatoriamente scatenare l’API di callback esito e la _redirect_ verso la piattaforma pagoPA all’_urlback_ indicata nell'[#api-recupero-url](integrazione-per-strumento-di-pagamento-tramite-redirect.md#api-recupero-url "mention") con il relativo esito;
* [_API callback esito transazione_](integrazione-per-strumento-di-pagamento-tramite-redirect.md#api-callback-esito-transazione): API esposta da pagoPA ed invocata dal PSP a fronte di qualsiasi esito del pagamento o annullo da parte dell’utente per permettere di chiudere in modo corretto l’operazione in corso, che, essendo una _redirect_ attraverso il browser dell’utente, per definizione non è di sicuro recapito;
* [_API annullo_](integrazione-per-strumento-di-pagamento-tramite-redirect.md#api-annullo): API esposta dal PSP ed invocata da pagoPA per richiedere annullo di un pagamento il cui esito non è mai arrivato alla piattaforma oppure per quei casi residuali dove per problemi tecnici il pagamento non venga finalizzato.

La connettività segue le regole standard della piattaforma pagoPA, consultabili da [connettivita.md](../../appendici/connettivita.md "mention").

## API recupero URL

{% swagger method="post" path="" baseUrl="PSP url" summary="" expanded="false" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idTransaction" required="true" type="String" %}
Identificativo univoco dell’operazione di pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idPsp" required="true" type="String" %}
Identificativo PSP
{% endswagger-parameter %}

{% swagger-parameter in="body" name="amount" type="Integer" required="true" %}
Importo dell’operazione di pagamento in euro cents comprensivo delle fee
{% endswagger-parameter %}

{% swagger-parameter in="body" name="urlBack" required="true" type="String" %}
Url della piattaforma pagoPA verso la quale il PSP indirizza l'utente al completamento della transazione
{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" required="true" type="String" %}
Causale del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentMethod" required="true" type="String" %}
Codifica del metodo di pagamento utilizzato
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paName" type="String" %}
Descrizione dell’ente creditore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idPaymentMethod" type="String" %}
Identificativo del metodo di pagamento dell’utente
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```json
{
    "url": string - url/idPSPTransaction 
    "idTransaction": string - "15448fefsfsr48sr84fser84sdf",
    "idPSPTransaction" : string - "1234567890abcdefgh", - Identificativo univoco 
                                                    dell’operazione di pagamento 
                                                    assegnato dal PSP 
    "amount": integer - “12500",
    "timeout": integer - (opz) “600000" - timeout in ms di attesa della 
                                            callback esito transazione
                                            max 600000
}
```
{% endswagger-response %}

{% swagger-response description="" status="400: Bad Request" %}
```
{
    "status": 400,​
    "detail": string - "There was an error processing the request",
    "idTransaction": string - "15448fefsfsr48sr84fser84sdf"
}
```
{% endswagger-response %}

{% swagger-response description="" status="401: Unauthorized" %}
```
{
    "status": 401,​
    "detail": string - "Unauthorized",
    "idTransaction": string - "15448fefsfsr48sr84fser84sdf"
}
```
{% endswagger-response %}

{% swagger-response description="" status="500: Internal Server Error" %}
```
{
    "status": 500
}
```
{% endswagger-response %}
{% endswagger %}

## Redirect

L’utente, tramite GET all’url fornita dal PSP nella response alla chiamata[#api-recupero-url](integrazione-per-strumento-di-pagamento-tramite-redirect.md#api-recupero-url "mention"), viene reindirizzato dalla piattaforma pagoPA sul FE del PSP per effettuare l’autorizzazione del pagamento.

Il PSP, per la corretta gestione, dovrà utilizzare le informazioni relative al pagamento inviate dalla piattaforma pagoPA nella chiamata[#api-recupero-url](integrazione-per-strumento-di-pagamento-tramite-redirect.md#api-recupero-url "mention").&#x20;

### **Esito**

Il workflow del pagamento sarà interessato dai seguenti step in base all'esito del pagamento:

* _redirect su pagina pagoPA_: l’utente, una volta concluso il pagamento, viene reindirizzato direttamente su pagoPA, all’indirizzo indicato nel parametro _urlBack_ della[#api-recupero-url](integrazione-per-strumento-di-pagamento-tramite-redirect.md#api-recupero-url "mention")_;_
* _notifica server to server_: viene inviata una notifica POST all'[#api-callback-esito-transazione](integrazione-per-strumento-di-pagamento-tramite-redirect.md#api-callback-esito-transazione "mention") all'indirizzo comunicato in fase di setup da PagoPA S.p.A.; per ottenere la conferma dell'avvenuta ricezione della notifica il messaggio restituito dalla chiamata deve essere un _HTTP 200_, altrimenti dovrà esser riproposto con una logica di retry.

## API callback esito transazione

Come descritto nel paragrafo precedente è l’API server to server che il PSP, in tempo reale, deve obbligatoriamente invocare per notificare l’esito del pagamento a pagoPA.

L’API ha il fine di fornire un’esito finale anche nel caso in cui fallisca la _redirect_ dal FE del PSP alla piattaforma pagoPA.

{% swagger method="post" path="" baseUrl="apiEsitoPagamento/idTransaction" summary="" expanded="false" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idPsp" required="true" type="String" %}
Identificativo PSP
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idPSPTransaction" required="true" type="String" %}
Identificativo univoco dell’operazione di pagamento assegnato dal PSP
{% endswagger-parameter %}

{% swagger-parameter in="body" name="outcome" type="String" required="true" %}
Esito dell'operazione (Valori possibili OK, KO, ANNULLO, SCADUTO e ERRORE)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="timestampOperation" type="Timestamp" %}
Data e ora del pagamento, da valorizzare solo in caso di esito positivo
{% endswagger-parameter %}

{% swagger-parameter in="body" name="authorizationCode" required="false" type="String" %}
Codice univoco di autorizzazione del pagamento rilasciato dal PSP, da valorizzare solo in caso di esito positivo


{% endswagger-parameter %}

{% swagger-parameter in="body" name="errorCode" type="String" %}
Motivo del diniego, da valorizzare solo in caso di esito negativo
{% endswagger-parameter %}

{% swagger-parameter in="query" name="idTransaction" type="String" %}
Identificativo univoco dell’operazione di pagamento
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
{
  "idTransaction": "string",
  "outcome": "OK",
}
```
{% endswagger-response %}

{% swagger-response description="" status="400: Bad Request" %}
```
{
    "status": 400,​
    "detail": string - "There was an error processing the request"
}
```
{% endswagger-response %}

{% swagger-response description="" status="401: Unauthorized" %}
```
{
    "status": 401,​
    "detail": string - "Unauthorized",
}
```
{% endswagger-response %}

{% swagger-response description="" status="404: Not Found" %}
```
{
    "status": 404,​
    "detail": string - "idTransaction/amount doesn't exit",
}
```
{% endswagger-response %}

{% swagger-response status="409: Conflict" description="" %}
```
{
    "status": 409,​
    "detail": string - "Conflict"

}
```
{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="" %}
```
{
    "status": 500
}
```
{% endswagger-response %}
{% endswagger %}

## API annullo

Questa API deve essere esposta da tutti i PSP per permettere alla piattaforma pagoPA di poter annullare un pagamento a fronte di errore tecnico.

La piattaforma pagoPA invoca questa API per richiedere l’annullo di un pagamento nei seguenti casi:

1. l’esito (positivo o negativo) non è mai arrivato alla piattaforma pagoPA e, per effetto, neanche all’EC;
2. per problemi tecnici, dopo che la piattaforma pagoPA ha ricevuto l’esito positivo da parte del PSP, il colloquio telematico tra la piattaforma pagoPA e il PSP non è stato possibile ovvero ha determinato una discordanza con il PSP e a fronte di tale mancato colloquio o discordanza, il PSP non ha acquisito i dati necessari per l’accredito nei confronti degli EC interessati dall’operazione.

Nel caso di cui al punto 1, l’annullo consente di rendere di nuovo disponibile il pagamento dello/degli IUV oggetto dell’annullo.

Nel caso di cui al punto 2, in aggiunta all'effetto di cui sopra, la piattaforma pagoPA annulla l’esito positivo ricevuto dal PSP.

Ciascun PSP deve fornire l'url da invocare tramite il backoffice pagoPA per ciascun ambiente (collaudo e produzione).

{% swagger method="delete" path="" baseUrl="apiPSPStorno" summary="" expanded="false" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idTransaction" required="true" type="String" %}
Identificativo del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idPSPTransaction" required="true" type="String" %}
Identificativo univoco dell’operazione di pagamento assegnato dal PSP
{% endswagger-parameter %}

{% swagger-parameter in="body" name="action" type="String" required="true" %}
Azione richiesta

i.e. "refund"
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
{
  "idTransaction": "string",
  "outcome": "OK",
}
```
{% endswagger-response %}

{% swagger-response description="" status="400: Bad Request" %}
```
{
    "status": 400,​
    "detail": string - "There was an error processing the request"
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```json
{
    "status": 400,​
    "detail": string - "idTransaction doesn't exit",
}
```
{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="" %}
```
{
    "status": 500
}
```
{% endswagger-response %}
{% endswagger %}

A fronte di una mancata risposta con esito HTTP 200 (avente valore di esito positivo della risposta alla chiamata) è compito di pagoPA riproporre la medesima chiamata con una logica di _retry_.

L'API ha la caratteristica di essere _idempotente_ e il PSP deve riproporre lo stesso esito anche nel caso in cui abbia già processato precedentemente la stessa richiesta.

## Fase di pagamento <a href="#sequence-diagram-fase-di-pagamento" id="sequence-diagram-fase-di-pagamento"></a>

<figure><img src="../../.gitbook/assets/image (38).png" alt=""><figcaption></figcaption></figure>

## Fase di annullo <a href="#sequence-diagram-fase-di-storno" id="sequence-diagram-fase-di-storno"></a>

### Caso 1 - Mancata ricezione dell’esito del pagamento <a href="#caso-1-mancata-ricezione-dellesito-del-pagamento" id="caso-1-mancata-ricezione-dellesito-del-pagamento"></a>

La piattaforma pagoPA effettua la chiamata di annullo con logica di retry se non riceve l’esito (positivo o negativo) del pagamento entro il _timeout_ indicato nella response alla [#api-recupero-url](integrazione-per-strumento-di-pagamento-tramite-redirect.md#api-recupero-url "mention") dal PSP o il timeout di default di _10 minuti_ dall'invocazione della redirect verso l'URL del PSP.

<figure><img src="../../.gitbook/assets/image (39).png" alt=""><figcaption></figcaption></figure>

### Caso 2 - pspNotifyPayment KO <a href="#caso-3-pspnotifypayment-ko" id="caso-3-pspnotifypayment-ko"></a>

La piattaforma pagoPA effettua la chiamata di annullo con logica di retry quando il PSP ha risposto KO alla [#pspnotifypayment](../../appendici/primitive.md#pspnotifypayment "mention").

<figure><img src="../../.gitbook/assets/image (40).png" alt=""><figcaption></figcaption></figure>
