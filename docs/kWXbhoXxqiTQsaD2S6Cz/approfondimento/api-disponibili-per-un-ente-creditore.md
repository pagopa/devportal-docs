# API Disponibili per un Ente Creditore

In questa sezione vengono descritte le API REST disponibili per gli EC per la Gestione delle Posizioni Debitorie (GPD), delle Ricevute di Pagamento e dei Flussi di Rendicontazione.

{% hint style="info" %}
È importante evidenziare che tutte le operazioni disponibili attraverso queste API sono segregate per codice fiscale dell'ente creditore (organizationfiscalcode). Questo significa che ogni operazione è specifica e univoca per ciascun ente creditore, garantendo così una gestione sicura e personalizzata delle informazioni.
{% endhint %}

Nel contesto dell'intermediazione, gli intermediari hanno la possibilità di associare alla loro subscription key da uno a un numero indefinito di codici fiscali degli enti intermediati. Questo permette agli intermediari di utilizzare un'unica subscription key per effettuare chiamate API per conto di tutti gli enti che rappresentano. Le richieste per tali abilitazioni devono essere inoltrate a PagoPA sia al momento della creazione della subscription key che successivamente.

{% hint style="info" %}
È inoltre rilevante sottolineare che le subscription key e le relative abilitazioni sono differenziate in base all'ambiente di utilizzo, che può essere UAT (Ambiente di Test/Collaudo) o PROD (Ambiente di Produzione). Questa distinzione assicura che le operazioni di test e quelle effettivamente operative siano ben separate, permettendo agli enti e agli intermediari di testare le loro implementazioni in un ambiente controllato prima di passare alla produzione.\

{% endhint %}

**Gestione delle Posizioni Debitorie**

{% hint style="info" %}
[Base URL](https://developer.pagopa.it/pago-pa/api#/pago-pa/api/operations/getOrganizationPaymentOptionByIUV)
{% endhint %}

| Azione                                      | URL                                                                       | HTTP Request Mehtod |
| ------------------------------------------- | ------------------------------------------------------------------------- | ------------------- |
| Crea una Posizione Debitoria                | ../organizations/{organizationfiscalcode}/debtpositions                   | POST                |
| Recupera la Lista delle Posizioni Debitorie | ../organizations/{organizationfiscalcode}/debtpositions                   | GET                 |
| Recupera una singola Posizione Debitoria    | ../organizations/{organizationfiscalcode}/debtpositions/{iupd}            | GET                 |
| Aggiorna una Posizione Debitoria            | ../organizations/{organizationfiscalcode}/debtpositions/{iupd}            | PUT                 |
| Cancella una Posizione Debitoria            | ../organizations/{organizationfiscalcode}/debtpositions/{iupd}            | DELETE              |
| Pubblicazione di una Posizione Debitoria    | ../organizations/{organizationfiscalcode}/debtpositions/{iupd}/publish    | POST                |
| Invalidazione di una Posizione Debitoria    | ../organizations/{organizationfiscalcode}/debtpositions/{iupd}/invalidate | POST                |

**Gestione delle Ricevute di Pagamento**

| Azione                                                     | URL                                                 | HTTP Request Mehtod |
| ---------------------------------------------------------- | --------------------------------------------------- | ------------------- |
| Recupera la Lista delle Ricevute di Pagamento              | ../payments/{organizationfiscalcode}/receipts       | GET                 |
| Recupera il Dettaglio di una singola Ricevuta di Pagamento | ../payments/{organizationfiscalcode}/receipts/{iuv} | GET                 |

\
