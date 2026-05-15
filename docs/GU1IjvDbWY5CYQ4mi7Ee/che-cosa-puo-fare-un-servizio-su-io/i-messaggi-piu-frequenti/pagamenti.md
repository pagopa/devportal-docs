# Pagamenti

## Pagamenti

Per i messaggi che veicolano una richiesta di pagamento, ci sono alcuni accorgimenti da tenere a mente.

Sia che si tratti di <mark style="color:blue;">**causale generica**</mark> che di <mark style="color:blue;">**causale specifica**</mark>, l'Ente deve informare correttamente il cittadino in merito alla fonte della sua posizione debitoria (es. contravvenzione n., prenotazione appuntamento n., ecc.).

Un esempio di <mark style="color:blue;">**causale specifica**</mark>**:**

Quando il pagamento è legato ad una **domiciliazione** — anche d. bancaria, d. su conto corrente, RID (Rapporti Interbancari Diretti) — disponibile solo in alcuni casi, va specificato nella causale l'oggetto degli addebiti regolari (es. rette, bollette, abbonamenti,...).

<details>

<summary>Avviso di pagamento <mark style="color:purple;">{oggetto}</mark></summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

<mark style="color:green;">// se causale generica //</mark>\
<mark style="color:orange;">\{{{C'è un avviso da pagare intestato a</mark> <mark style="color:orange;"></mark><mark style="color:orange;">`<nome>`</mark> <mark style="color:orange;">`<cognome>`</mark> <mark style="color:orange;"></mark><mark style="color:orange;">e relativo a</mark> <mark style="color:orange;"></mark><mark style="color:orange;">`<causale>`</mark><mark style="color:orange;">.\}}}</mark>

<mark style="color:green;">// se causale specifica //</mark>\
<mark style="color:orange;">\{{{La tua</mark> <mark style="color:purple;">{domanda di rinuncia per …}</mark> <mark style="color:orange;">è arrivata oltre il termine previsto.\}}}</mark>

**Devi pagare:** <00,00> €

**Entro il:** `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga", oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante**: Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno interesse …………

**Quando inviarlo**: Quando …………

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile effettuare il pagamento per ……………

</details>

***

## In scadenza

💡 Per queste tipologie di messaggi che prevedono un promemoria, suggeriamo l'utilizzo della funzionalità [promemoria dei messaggi premium](../inviare-messaggi/#messaggi-standard-e-premium).

***

## Proroga scadenza

<details>

<summary>Proroga scadenza del pagamento</summary>

**🖋 Titolo del messaggio:** Proroga scadenza del pagamento

🗒 **Testo del messaggio**: È stata prorogata la data di scadenza dell'avviso intestato a `<nome cognome>` e relativo a `<casuale>`.

**Devi pagare**: <00,00> €

**Entro il**: `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo "Paga", oppure tramite tutti i canali di pagamento della piattaforma pagoPA.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante**: Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che devono pagare ....

**Quando inviarlo:** Se la scadenza del pagamento viene prorogata

**User story:** Come cittadino voglio essere avvisato se la scadenza del pagamento è stata prorogata

</details>

***

## Mancato pagamento

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sensibilizzare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica)
{% endhint %}

<details>

<summary>Avviso di pagamento <mark style="color:purple;">{oggetto}</mark>: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento `<causale>` è scaduto il `<gg/mm/aaaa>`.

Se hai già provveduto a pagare l’avviso <mark style="color:orange;">\{{{o se hai richiesto la domiciliazione</mark> <mark style="color:purple;">{delle rette}</mark> <mark style="color:orange;">sul conto corrente, \}}}</mark> ignora questo messaggio.

**🪄 Pulsante**: Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno interesse …………

**Quando inviarlo**: Quando la data di scadenza del pagamento è stata superata.

**User story**: Come cittadino voglio …………

</details>

***

## Conferma del pagamento

❌ Non è stato previsto un template di conferma di un pagamento poiché, quando un cittadino effettua un pagamento verso un ente tramite pagoPA, riceve automaticamente in app IO l'esito della transazione. Per la quietanza di pagamento, con effetto liberatorio ai sensi di legge, invece, il cittadino dovrà sempre rivolgerti all'ente creditore.
