# Gli stati di una richiesta di pagamento

Al fine di offrire trasparenza e controllo, l'interfaccia di dettaglio del pagamento deve adattare la visualizzazione e le _Call to Action_ (CTA) in base allo stato attuale della richiesta.\
\
I diversi stati di una richiesta di pagamento sono illustrati nel dettaglio come segue:

<details>

<summary><mark style="background-color:$primary;">Da pagare</mark></summary>

## La richiesta di pagamento è attiva, ma non è stata ancora pagata

Questa casistica si verifica appena l'utente riceve la richiesta di pagamento (o quando vi accede in un secondo momento) nel lasso di tempo in cui l'avviso di pagamento è attivo, ma l'utente non ha ancora pagato.&#x20;

In questo caso l'utente può:&#x20;

* procedere al pagamento;
* ignorare la richiesta.

Durante questa fase se l'utente vuole eseguire il pagamento, ma è impossibilitato a procedere per una serie di motivazioni (informazioni incorrette, pagamento non dovuto, già pagato ecc..), è importante offrire la possibilità di segnalare il problema ed essere indirizzato verso l'interlocutore corretto:

* l'Ente creditore, per problemi con il contenuto del pagamento (es. pagamento già effettuato, importo non corretto ecc...);
* l'assistenza del PSP per problemi tecnici (es. pulsante non funzionante).

### Esempio:

<figure><img src="../../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary><mark style="background-color:$warning;">Pagamento programmato</mark>  (Consigliato)</summary>

## L'utente si è impegnato a pagare a una data programmata

Il sistema RTP dà la possibilità, qualora si voglia, di permettere all'utente di programmare un pagamento.&#x20;

{% hint style="info" %}
L'implementazione di questo stato non è obbligatoria, ma è fortemente suggerita. La nostra indagine qualitativa ha rivelato l'elevato valore percepito dagli utenti per le funzionalità di programmazione dei pagamenti (simile ai bonifici dilazionati).
{% endhint %}

<figure><img src="../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary><mark style="background-color:$success;">Pagata</mark></summary>

## Pagamento completato

Quando l'utente finalizza il pagamento, oltre a mostrare un feedback immediato del completamento dell'operazione, è bene aggiornare anche il dettaglio della richiesta di pagamento.&#x20;

In questo caso è utile garantire:

* lo stato del pagamento ben visibile;
* la facile reperibilità della ricevuta che attesti il pagamento.

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary><mark style="background-color:red;">Scaduta</mark></summary>

## La richiesta di pagamento è scaduta

Questo stato indica che l'importo della richiesta di pagamento non è stato ancora versato e che la data di scadenza è stata superata. È fondamentale mostrare questo stato in modo ben visibile nell'interfaccia, al fine di comunicare chiaramente all'utente la situazione e l'eventuale impossibilità di procedere con il pagamento.

<figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary><mark style="background-color:purple;">Annullata</mark></summary>

Questo stato si verifica quando una richiesta di pagamento viene annullata dall'ente. Può succedere per diversi motivi: l'ente può averla revocata o l'utente potrebbe averla pagata su altri canali.

In questo caso, è buona norma mantenere i dettagli della richiesta di pagamento e spiegare all'utente i motivi per cui l'avviso non è pagabile.

<figure><img src="../../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>





</details>

<br>
