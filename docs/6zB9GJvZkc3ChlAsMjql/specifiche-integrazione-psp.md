# Specifiche Integrazione PSP

In questo paragrafo sono presenti le specifiche delle API e delle _redirect_ che il PSP deve mettere a disposizione della piattaforma pagoPA, che si possono sintetizzare nelle seguenti interfacce:

* _API recupero URL_: esposta su rete pubblica dal PSP ed invocata dalla piattaforma pagoPA per recuperare la URL che il browser dell’utente utilizzerà per atterrare in modalità _redirect_, veicolando in anticipo al PSP informazioni sul pagamento che sarà effettuato;
* _redirect_: pagina web ottimizzata per dispositivi mobile su cui l’utente atterra in _redirect,_ che mette a disposizione le funzionalità di autenticazione e autorizzazione del pagamento. A fronte di qualsiasi esito del pagamento o annullo da parte dell’utente deve mandatoriamente scatenare l’API di callback esito e la _redirect_ verso la piattaforma pagoPA all’_urlback_ indicata nell'[#api-recupero-url](specifiche-integrazione-psp.md#api-recupero-url "mention") con il relativo esito;
* _API callback esito transazione_: API esposta da pagoPA ed invocata dal PSP a fronte di qualsiasi esito del pagamento o annullo da parte dell’utente per permettere di chiudere in modo corretto l’operazione in corso, che, essendo una _redirect_ attraverso il browser dell’utente, per definizione non è di sicuro recapito;
* _API storno_: API esposta dal PSP ed invocata da pagoPA per richiedere annullo/storno di un pagamento il cui esito non è mai arrivato alla piattaforma oppure per quei casi residuali dove per problemi tecnici il pagamento non venga finalizzato.

La connettività segue le regole standard della piattaforma pagoPA, consultabili nell'ultima versione delle SANP [https://docs.pagopa.it/sanp/appendici/connettivita](https://docs.pagopa.it/sanp/appendici/connettivita).

## API recupero URL

I parametri che devono essere inoltrati tramite metodo POST alla url di _redirect_ indicata dal PSP:

* _idTransaction_: identificativo univoco dell’operazione di pagamento
* _amount_: importo dell’operazione di pagamento
* _description_ (opt): causale del pagamento ricevuta dall’ente creditore
* _paName_ (opt): descrizione dell’ente creditore che ha emesso l’avviso di pagamento
* _iban_ (opt): iban del conto corrente dell’utente da cui attingere per il pagamento
* _urlBack_ : url della piattaforma pagoPA verso la quale il PSP indirizza l'utente al completamento della transazione passando, in GET, i parametri di risposta con il risultato della transazione.

### Request

Ciascun PSP deve fornire l'url da invocare tramite il backoffice pagoPA per ciascun ambiente (Test e Produzione).

_POST PSP url_

```
{
    "idTransaction": string - "15448fefsfsr48sr84fser84sdf",
    "amount": integer - “12500", comprensivo di fee
    "description": string - (opz.) "TARI 2023",
    "paName" - string - (opz.) "Comune di Paperopoli",
    "iban": string - (opz.) “XX79CXXXXX52770100000000001",    
    "urlBack" - string - "https://checkout.pagopa.it/idTransaction" 
}
```

### Response

In response il PSP deve fornire una url che sarà usata per indirizzare l’utente sul FE del PSP.

```
{
    "url": string - url/idPSPTransaction - id del PSP 
    "idTransaction": string - "15448fefsfsr48sr84fser84sdf",
    "amount": integer - “12500"
}
```

## Redirect

L’utente, tramite GET all’url fornita dal PSP nella response alla chiamata precedente [#api-recupero-url](specifiche-integrazione-psp.md#api-recupero-url "mention"), viene reindirizzato sul FE del PSP per effettuare l’autorizzazione del pagamento.

Il PSP dovrà utilizzare le informazioni relative al pagamento inviate dalla piattaforma pagoPA nella chiamata precedente [#api-recupero-url](specifiche-integrazione-psp.md#api-recupero-url "mention").

### Request

_GET url/idPSPTransaction_&#x20;

#### **Esito**

Il workflow del pagamento sarà interessato dai seguenti step in base all'esito del pagamento:

* _redirect su pagina pagoPA_: l’utente, una volta concluso il pagamento, viene reindirizzato direttamente su pagoPA, all’indirizzo indicato nel parametro _urlBack_ della [#api-recupero-url](specifiche-integrazione-psp.md#api-recupero-url "mention")_;_
* _notifica server to server_: viene inviata una notifica POST all'[#api-callback-esito-transazione](specifiche-integrazione-psp.md#api-callback-esito-transazione "mention") all'indirizzo comunicato in fase di setup da pagoPA. Per confermare l'avvenuta ricezione della notifica il messaggio restituito dalla chiamata deve essere un _HTTP 200_, altrimenti dovrà esser riproposto con una logica di retry.

## API callback esito transazione

Come descritto nel paragrafo precedente è l’API server to server che il PSP in tempo reale deve obbligatoriamente invocare per notificare l’esito del pagamento a pagoPA.

L’API ha il fine di fornire un’esito finale anche nel caso in cui fallisca la _redirect_ dal FE del PSP alla piattaforma pagoPA.

### Request

_POST apiEsitoPagamento/idTransaction_

```
{
  "outcomeGateway": {
    "paymentGatewayType": "PSP", -- identidicativo del PSP
    "outcome": "OK", -- esito del pagamento OK/KO
    "authorizationCode": "string",
    "errorCode": "payment declined because ...." -- solo per esito negativo
  },
  "timestampOperation": "2023-08-21T15:33:21.224Z"
}
```

#### Possibili valori e codifiche

<table><thead><tr><th width="152">Obbligatorio</th><th width="210">Nome</th><th>Descrizione</th><th>Tipo</th></tr></thead><tbody><tr><td>Y</td><td>outcome</td><td>Esito dell'operazione (Valori possibili OK, KO, ANNULLO e ERRORE)</td><td>string</td></tr><tr><td>Y</td><td>paymentGatewayType</td><td>Identificativo del PSP</td><td>string</td></tr><tr><td>Y</td><td>authorizationCode</td><td>codice univoco di autorizzazione del pagamento rilasciato dal PSP</td><td>string</td></tr><tr><td>N</td><td>errorCode</td><td>motivo del diniego da valorizzare solo in caso negativo</td><td>string</td></tr><tr><td>Y</td><td>timestampOperation</td><td>data e ora relativa al pagamento</td><td>timestamp</td></tr></tbody></table>

### Response

```
{
  "idTransaction": "string",
  "outcome": "OK",
}
```

## API Storno

Questa API deve essere esposta da tutti i PSP per permettere alla piattaforma pagoPA di poter stornare o annullare un pagamento a fronte di errore tecnico.

La piattaforma pagoPA invoca questa API per richiedere annullo/storno di un pagamento il cui esito non è mai arrivato alla piattaforma oppure per quei casi residuali dove per problemi tecnici il pagamento non è finalizzato.

Ciascun PSP deve fornire l'url da invocare tramite il backoffice pagoPA per ciascun ambiente (Test e Produzione).

### Request

```
{
    "idTransaction": string - "15448fefsfsr48sr84fser84sdf",
    "action": "refund"
}
```

### Response

A fronte di una mancata risposta con esito 200 è compito di pagoPA riproporre la medesima chiamata con una logica di retry.

L'API ha la caratteristica di essere _idempotente_ e il PSP deve riproporre lo stesso esito anche nel caso in cui abbia già processato precedentemente la stessa richiesta.
