# Configurazione Opzioni di Pagamento

PagoPA mette a disposizione degli Enti Creditori (EC) una funzionalità per gestire le opzioni di pagamento (OdP), come piani rateali, maggiorazioni o riduzioni dell’importo. Grazie a questa nuova funzionalità gli EC possono gestire il proprio archivio delle posizioni debitorie contemplando la possibilità di gestire le opzioni di pagamento che possono offrire al cittadino. Ad esempio possono dare al cittadino la possibilità di pagare un avviso in modalità unica piuttosto che con dei piani rateali.

Il nuovo servizio gestisce internamente la configurazione necessaria per poter contattare l’endpoint esposto dagli EC, che dunque devono esporre un nuovo servizio mediante la seguente URL:

```
<baseEcUrl>/payment-options/organizations/{fiscal-code}/notices/{notice-number}
```

Tale URL viene invocata dalla nuova componente mediante una chiamata `GET REST`.

L’esposizione del servizio sopraindicato è in carico all’EC in caso di integrazione sincrona, o in carico a Gestione Posizioni Debitorie (GPD) in caso di integrazione asincrona.

Per riassumere, gli EC che vogliono utilizzare la nuova funzionalità di OdP devono configurare le stazioni per specificare se si supporta o meno il recupero delle opzioni di pagamento.&#x20;

Il primo passo è entrare nel dettaglio delle impostazioni della stazione da configurare:

<figure><img src="../../../.gitbook/assets/image (215).png" alt=""><figcaption></figcaption></figure>



A questo punto bisogna configurare un nuovo endpoint REST per le stazioni che supportano le opzioni di pagamento:

<figure><img src="../../../.gitbook/assets/image (2) (3).png" alt=""><figcaption></figcaption></figure>

Quindi la configurazione finale sarà:

<figure><img src="../../../.gitbook/assets/image (1) (7).png" alt=""><figcaption></figcaption></figure>

Di seguito il dettaglio della stazione configurata:

<figure><img src="../../../.gitbook/assets/image (3) (3).png" alt=""><figcaption></figcaption></figure>
