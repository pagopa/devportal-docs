# Messaggi che veicolano un pagamento

I messaggi che veicolano un pagamento sono messaggi che contengono un **avviso di pagamento** e che danno all'utente la possibilità di pagarlo all'interno dell'app tramite il pulsante "Vedi Avviso".

Questi messaggi devono:

* spiegare **a cosa fa riferimento** il pagamento e dare eventuali indicazioni di contesto;
* indicare l'**importo** da pagare;
* specificare in modo chiaro la **data entro cui bisogna pagare**.

{% tabs %}
{% tab title="✅ Un messaggio di pagamento ben scritto" %}
**`Titolo`**\
`Infrazione al codice stradale`

**`Messaggio`**\
`Ciao Maria Rossi,`

`alle ore [12:44] del giorno [01/01/2022], in [Via Ettore Ponti 78, Verona], il conducente del veicolo targato [Numero targa] ha commesso queste violazioni:`

* **`[Tipologia di violazione]`**\
  `Vedi il verbale (link).`

`Importo: xx,yy € (già scontato del 30%)`

`Se paghi entro il [mm/gg/aa], non ti verranno addebitate le spese di notifica.`

`[Vedi Avviso]`



**In questo caso, il messaggio:**

✅ è discorsivo e scritto con un linguaggio chiaro;

✅ è autoconsistente;

✅ non contiene errori grammaticali.

✅ è ricco di informazioni utili per il destinatario, che non deve andare a cercarle altrove;

✅ dà la possibilità di approfondire tramite link esterno;
{% endtab %}

{% tab title="❌ Un messaggio di pagamento da migliorare" %}
**`Titolo`**\
`CITTA' DI IPAZIA`

**`Messaggio`**\
`Avviso di pagamento Numero 12345678912345678`\
`Intestatario Maria Rossi`\
`Importo xxx,yy €`\


**`Causale`**` ``PAGAMENTO TARI NR 112211221122`\


**`Scadenza`**`: gg/mm/aa`\
`Puoi pagare direttamente in app premendo Paga, oppure tramite tutti i canali di pagamento del circuito PagoPA. Per ulteriori informazioni visualizza la scheda del servizio al link sottostante.`&#x20;

`[Vedi Avviso]`



**In questo caso, il messaggio:**

❌  il titolo del messaggio non è corretto, poiché riporta il nome dell'ente che lo invia e non l'oggetto del messaggio;

❌ non è discorsivo;

❌ le informazioni sono frammentate e senza contesto;

❌ c'è un errore di contenuto fuorviante per l'utente (il pulsante non è "Paga", ma "Vedi Avviso");

❌ ci sono alcuni errori di stile (per esempio, "PagoPA" dovrebbe essere "pagoPA", come da [linee guida del brand](http://localhost:5000/s/8phwN5u2QXllSKsqBjQU/specifiche-tecniche/il-logo-pagopa)).
{% endtab %}
{% endtabs %}

### Importi massimi per i pagamenti con IO

Al momento, i metodi di pagamento registrabili in app consentono ai cittadini di pagare **importi massimi che variano a seconda del tipo di metodo**.&#x20;

Il metodo che garantisce di pagare l'importo più alto, ovvero 9.000 €, è American Express. Le carte dei circuiti Visa e Mastercard possono arrivare a 6.000 € se l'utente sceglie Nexi come prestatore di servizi di pagamento (PSP), ma vanno considerati anche i massimali delle carte impostate dalle banche. Questi parametri possono subire modifiche nel corso del tempo.

{% hint style="info" %}
**Un esempio di importi massimi**&#x20;

Una cittadina riceve un avviso di pagamento di importo pari a 5.400 €. Potenzialmente può procedere al pagamento con la sua carta Mastercard salvata in app, selezionando Nexi come PSP. Tuttavia, la sua carta ha un massimale mensile impostato nell'home banking di 1.500 €. In questo caso, pagamento fallirà nell'ultima fase.
{% endhint %}

Consigliamo quindi di **fare particolare attenzione agli importi richiesti** e, nel caso in cui superino cifre consistenti (come nell'esempio 1.500 €), di fornire l'opzione di rateizzare il pagamento in più rate, tramite l'invio di avvisi di pagamento diversi, la cui somma dà l'importo totale della posizione debitoria.&#x20;

{% hint style="info" %}
Per maggiori informazioni sui metodi di pagamento, vai alla [sezione dedicata](https://www.pagopa.gov.it/it/cittadini/trasparenza-costi/) sul sito di pagoPA.
{% endhint %}
