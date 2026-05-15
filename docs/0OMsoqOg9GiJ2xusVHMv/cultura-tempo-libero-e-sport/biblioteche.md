# Biblioteche

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti richieste, comunicazioni e prenotazioni dei servizi bibliotecari;
* monitorare e gestire tempestivamente le richieste, le comunicazioni e i pagamenti per l’erogazione del servizio.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Biblioteche</td></tr><tr><td><strong>Argomento</strong></td><td>Cultura, tempo libero e sport</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti sulle biblioteche e sulle iniziative in programma; </li><li>ricevere informazioni sul prestito, sulla consultazione e sulla restituzione; </li><li>ricevere comunicazioni e aggiornamenti sulle prenotazioni; </li><li>ricevere eventuali avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Scopri di più</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../../app-io/modelli-servizi/v1.0/.gitbook/assets/image (36) (1).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Biblioteche</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

## Iscrizione al servizio

### Iscrizione al servizio bibliotecario

<details>

<summary>Conferma iscrizione</summary>

**🖋 Titolo del messaggio:** Iscrizione confermata

🗒 **Testo del messaggio**:

La tua iscrizione è confermata per i servizi bibliotecari del Comune di `<Comune>`.

\[Inserire qui indicazioni sui servizi disponibili per il cittadino iscritto, da completare a cura e responsabilità dell'ente]

Dove: \[Inserire qui la lista delle biblioteche nelle quali l’iscrizione è valida]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto iscrizione al sistema bibliotecario del Comune.

**Quando inviarlo**: Quando l’iscrizione è confermata.

**User story**: Come cittadino voglio ricevere una conferma quando l'iscrizione al servizio bibliotecario viene confermata dall’ente.

</details>

<details>

<summary>Rinnova iscrizione</summary>

**🖋 Titolo del messaggio:** Rinnova la tua iscrizione

🗒 **Testo del messaggio**:

Il `<gg/mm/aaaa>` la tua iscrizione al servizio bibliotecario del Comune di `<Comune>` è scaduta.

Per continuare ad usufruire dei servizi bibliotecari, rinnova la tua iscrizione.

Per ulteriori informazioni su come rinnovare l’iscrizione, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini la cui iscrizione alla biblioteca comunale è scaduta.

**Quando inviarlo**: Quando l’iscrizione alla biblioteca comunale è scaduta.

**User story**: Come cittadino voglio ricevere un promemoria sulla scadenza delle mie iscrizioni.

</details>

***

## Prestito documenti

### Richiesta di prestito

<details>

<summary>Documento disponibile al ritiro</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** `<Libro/Rivista/Dvd/ecc>` disponibile al ritiro

🗒 **Testo del messaggio**:

Dal `<gg/mm/aaaa>` potrai ritirare il `<Libro/Rivista/Dvd/ecc>` richiesto.

**Dove**: `<indirizzo>`

**Orario**: \[Inserire qui i giorni e gli orari di apertura della biblioteca]

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un `<Libro/Rivista/Dvd/ecc>` presso una biblioteca comunale.

**Quando inviarlo**: Quando il `<Libro/Rivista/Dvd/ecc>` è disponibile al ritiro.

**User story**: Come cittadino voglio ricevere un promemoria sulla disponibilità dei beni richiesti.

</details>

### Prestito interbibliotecario

<details>

<summary>Documento disponibile per prestito</summary>

**🖋 Titolo del messaggio:** `<Libro/Rivista/Dvd/ecc>` disponibile per il prestito

🗒 **Testo del messaggio**:

Dal `<gg/mm/aaaa>` il `<Libro/Rivista/Dvd/ecc>` è disponibile per il prestito.

**Dove**: `<indirizzo>`

**Orario**: \[Inserire qui i giorni e gli orari di apertura della biblioteca]

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un `<Libro/Rivista/Dvd/ecc>` per prestito interbibliotecario presso una biblioteca comunale.

**Quando inviarlo**: Quando il `<Libro/Rivista/Dvd/ecc>` è disponibile al prestito ed è proveniente da una biblioteca differente.

**User story**: Come cittadino voglio ricevere un promemoria sulla disponibilità dei beni richiesti.

</details>

Se è previsto un pagamento per il prestito bibliotecario, è possibile prevedere il seguente messaggio:

<details>

<summary>Avviso di pagamento prestito bibliotecario</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C’è un avviso di pagamento intestato a `<nome>` `<cognome>` e relativo a `<causale>`.

**Devi pagare**: <00,00> €

**Entro il**: `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno richiesto un prestito interbibliotecario presso una biblioteca comunale.

**Quando inviarlo**: Quando, ricevuta la richiesta, è necessario procedere al pagamento delle spese per la pratica richiesta.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento.

</details>

{% hint style="info" %}
**Promemoria automatici —&#x20;**<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di pagamento_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento prestito bibliotecario: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno richiesto un prestito interbibliotecario presso una biblioteca comunale.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sollecitare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento prestito bibliotecario: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento relativo a `<causale>` è scaduto il `<gg/mm/aaaa>`.

Se hai già provveduto a pagare l’avviso o se hai richiesto la domiciliazione del pagamento sul conto corrente, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno richiesto un prestito interbibliotecario presso una biblioteca comunale.

**Quando inviarlo**: Quando la data di scadenza del pagamento è stata superata.

**User story**: Come cittadino vorrei ricevere promemoria sulla scadenza dei miei avvisi di pagamento

</details>

<details>

<summary>Documento disponibile al ritiro</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** `<Libro/Rivista/Dvd/ecc>` disponibile al ritiro

🗒 **Testo del messaggio**:

Dal `<gg/mm/aaaa>` potrai ritirare il `<Libro/Rivista/Dvd/ecc>` richiesto.

**Dove**: `<indirizzo>`

**Orario**: \[Inserire qui i giorni e gli orari di apertura della biblioteca]

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un `<Libro/Rivista/Dvd/ecc>` per prestito interbibliotecario presso una biblioteca comunale.

**Quando inviarlo**: Quando il `<Libro/Rivista/Dvd/ecc>` è disponibile al ritiro.

**User story**: Come cittadino voglio ricevere un promemoria sulla disponibilità dei beni richiesti.

</details>

### Prestito bibliotecario

<details>

<summary>Ricevuta prenotazione</summary>

**🖋 Titolo del messaggio:** La tua prenotazione è in attesa

🗒 **Testo del messaggio**:

Abbiamo ricevuto la tua richiesta di prenotazione per `<Libro/Rivista/Dvd/ecc>`.

Il `<Libro/Rivista/Dvd/ecc>`, risulta attualmente in prestito ad altro utente.

Riceverai un messaggio in app non appena il `<Libro/Rivista/Dvd/ecc>` verrà prenotato a tuo nome.

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un prestito per un `<Libro/Rivista/Dvd/ecc>` non disponibile.

**Quando inviarlo**: Quando il `<Libro/Rivista/Dvd/ecc>` richiesto non è al momento disponibile ma prenotabile con una lista di attesa.

**User story**: Come cittadino voglio ricevere un promemoria sulla disponibilità per `<Libro/Rivista/Dvd/ecc>` che al momento non risultano prenotabili.

</details>

<details>

<summary>Documento disponibile al ritiro</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** `<Libro/Rivista/Dvd/ecc>` disponibile al ritiro

🗒 **Testo del messaggio**:

Dal `<gg/mm/aaaa>` potrai ritirare il `<Libro/Rivista/Dvd/ecc>` richiesto.

**Dove**: `<indirizzo>`

**Orario**: \[Inserire qui i giorni e gli orari di apertura della biblioteca]

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un `<Libro/Rivista/Dvd/ecc>` per prestito presso una biblioteca comunale.

**Quando inviarlo**: Quando il `<Libro/Rivista/Dvd/ecc>` è disponibile al ritiro.

**User story**: Come cittadino voglio ricevere un promemoria sulla disponibilità dei beni richiesti.

</details>

### Consegna prestito

<details>

<summary>Consegna ricevuta prestito</summary>

:sparkles: <mark style="color:blue;">**Allegati Premium**</mark> — Tramite questa funzionalità Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, puoi allegare documenti all'interno del messaggio.

Questo messaggio è da utilizzare sia per messaggi Premium, sia per messaggi standard. In caso di messaggio standard, **ricorda di eliminare ogni riferimento agli allegati dal corpo del messaggio.**

***

**🖋 Titolo del messaggio:** La ricevuta del tuo prestito

🗒 **Testo del messaggio**:

A seguire, la ricevuta del tuo prestito.

\[Inserire qui altre informazioni sul contenuto del prestito e informazioni sull’utilizzo della ricevuta, da compilare a cura e responsabilità dell'ente]

\[Solo per messaggi premium con allegato] Trovi la ricevuta del tuo prestito in allegato.

Per visualizzare la tua ricevuta, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

📎 <mark style="color:blue;">**Allegato Premium**</mark>: `<ricevuta prestito>`

***

**Destinatari**: Tutti i cittadini che hanno richiesto un prestito presso una biblioteca comunale.

**Quando inviarlo**: Quando è disponibile la ricevuta per il prestito bibliotecario.

**User story**: Come cittadino voglio ricevere comunicazioni e allegati circa i prestiti bibliotecari richiesti.

</details>

### Prestito in scadenza

<details>

<summary>Prestito in scadenza</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Il tuo prestito sta per terminare

🗒 **Testo del messaggio**:

Il prestito per `<Libro/Rivista/Dvd/ecc>` sta per terminare.

Potrai restituire il prestito entro il `<gg/mm/aaaa>` presso:

**Dove**: `<indirizzo>`

**Orario**: `<orari biblioteca>`

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un prestito presso una biblioteca comunale.

**Quando inviarlo**: Quando è prossima la data di riconsegna del prestito bibliotecario.

**User story**: Come cittadino voglio ricevere comunicazioni circa i prestiti bibliotecari richiesti.

</details>

### Rinnovo prestito

<details>

<summary>Conferma rinnovo prestito</summary>

**🖋 Titolo del messaggio:** Il rinnovo di `<Libro/Rivista/Dvd/ecc>` è confermato

🗒 **Testo del messaggio**:

Il rinnovo del prestito per `<Libro/Rivista/Dvd/ecc>` è confermato fino al `<gg/mm/aaaa>`.

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un rinnovo presso una biblioteca comunale.

**Quando inviarlo**: Quando viene accolta una richiesta di rinnovo prestito.

**User story**: Come cittadino voglio ricevere comunicazioni circa i prestiti bibliotecari richiesti.

</details>

<details>

<summary>Diniego rinnovo + invito a prenotare di nuovo</summary>

**🖋 Titolo del messaggio:** Non è possibile rinnovare il tuo prestito

🗒 **Testo del messaggio**:

Il rinnovo del prestito `<Libro/Rivista/Dvd/ecc>` non è possibile.

Per procedere con una nuova prenotazione \[visita questo sito]\[URL]

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un rinnovo presso una biblioteca comunale.

**Quando inviarlo**: Quando viene negata una richiesta di rinnovo prestito.

**User story**: Come cittadino voglio ricevere comunicazioni circa i prestiti bibliotecari richiesti.

</details>

### Prestito scaduto

<details>

<summary>Prestito scaduto</summary>

**🖋 Titolo del messaggio:** Il tuo prestito è scaduto

🗒 **Testo del messaggio**:

Il prestito per `<Libro/Rivista/Dvd/ecc>` è scaduto il `<gg/mm/aaaa>`.

Deve essere restituito il prima possibile.

**Dove**: `<indirizzo>`

**Orario**: \[Inserire qui i giorni e gli orari di apertura della biblioteca]

Per ulteriori informazioni, (visita questo sito)\[URL].

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un prestito presso una biblioteca comunale.

**Quando inviarlo**: Quando è passata la data di riconsegna del prestito bibliotecario.

**User story**: Come cittadino voglio ricevere comunicazioni circa i prestiti bibliotecari richiesti.

</details>

### Smarrimento/danneggiamento del prestito

Se dopo lo smarrimento o danneggiamento di un prestito, è prevista la sostituzione della copia o il pagamento della stessa è possibile prevedere i seguenti messaggi.

Le comunicazioni sotto riportate hanno scopo informativo e non assumono alcun valore legale.

<details>

<summary>Richiesta sostituzione copia</summary>

**🖋 Titolo del messaggio:** Hai una richiesta di sostituzione copia

🗒 **Testo del messaggio**:

Hai una richiesta di sostituzione copia, causa `<smarrito/danneggiamento>` a seguito del prestito di `<Libro/Rivista/Dvd/ecc>`, registrato in data `<gg/mm/aaaa>`.

Per ulteriori informazioni e consultare il regolamento, (visita questo sito)\[URL].

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno ricevuto una richiesta di sostituzione copia prestito da una biblioteca comunale a seguito di smarrimento e/o danneggiamento.

**Quando inviarlo**: Quando la biblioteca accerta uno smarrimento o danneggiamento di un `<Libro/Rivista/Dvd/ecc>`.

**User story**: Come cittadino voglio ricevere comunicazioni circa i prestiti bibliotecari richiesti.

</details>

<details>

<summary>Avviso di pagamento per sostituzione copia</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C’è un avviso di pagamento intestato a `<nome>` `<cognome>` e relativo a `<causale>`, in base a quanto previsto dal (regolamento)\[URL].

**Devi pagare**: <00,00> €

**Entro il**: `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno ricevuto una richiesta di sostituzione copia presso una biblioteca comunale per danneggiamento o smarrimento.

**Quando inviarlo**: Quando, ricevuta la richiesta, è necessario procedere al pagamento delle spese per la pratica richiesta.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento.

</details>

{% hint style="info" %}
**Promemoria automatici —&#x20;**<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di promemoria_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento per sostituzione copia: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno ricevuto una richiesta di sostituzione copia presso una biblioteca comunale per danneggiamento o smarrimento.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sollecitare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento per sostituzione copia: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento relativo a `<causale>` è scaduto il `<gg/mm/aaaa>`.

Se hai già provveduto a pagare l’avviso o se hai richiesto la domiciliazione del pagamento sul conto corrente, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno ricevuto una richiesta di sostituzione copia presso una biblioteca comunale per danneggiamento o smarrimento.

**Quando inviarlo**: Quando il pagamento non è stato effettuato entro il termine.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

***

## Consegna documenti

### Elaborazione richiesta

<details>

<summary>Documento disponibile per la consegna</summary>

**🖋 Titolo del messaggio:** `<Libro/Rivista/Dvd/ecc>` disponibile alla consegna

🗒 **Testo del messaggio**:

Dal `<gg/mm/aaaa>` il `<Libro/Rivista/Dvd/ecc>` è disponibile per la consegna.

La consegna avverrà secondo le modalità richieste in fase di prenotazione.

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto una consegna `<Libro/Rivista/Dvd/ecc>` presso una biblioteca comunale.

**Quando inviarlo**: Quando il `<Libro/Rivista/Dvd/ecc>` è disponibile alla consegna.

**User story**: Come cittadino voglio ricevere un promemoria sulla disponibilità dei beni richiesti.

</details>

### Pagamento

<details>

<summary>Avviso di pagamento per consegna documenti</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C’è un avviso di pagamento intestato a `<nome>` `<cognome>` e relativo a `<causale>`.

**Devi pagare**: <00,00> €

**Entro il**: `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno richiesto una consegna documenti presso una biblioteca comunale.

**Quando inviarlo**: Quando, ricevuta la richiesta, è necessario procedere al pagamento delle spese per la pratica richiesta.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile procedere al pagamento.

</details>

{% hint style="info" %}
**Promemoria automatici —&#x20;**<mark style="color:blue;">**Messaggi Premium**</mark>

Impostando il messaggio di _Avviso di promemoria_ come Messaggio Premium, disponibile a seconda della tipologia di contratto sottoscritto dall’ente, non è necessario inviare il seguente messaggio di promemoria.

Gli utenti che hanno dato il loro consenso, infatti, riceveranno automaticamente una notifica push sui loro dispositivi all’avvicinarsi della scadenza.
{% endhint %}

<details>

<summary>Avviso di pagamento per ritiro documenti: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno richiesto una consegna documenti presso una biblioteca comunale.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sollecitare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento per consegna documenti: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento relativo a `<causale>` è scaduto il `<gg/mm/aaaa>`.

Se hai già provveduto a pagare l’avviso o se hai richiesto la domiciliazione del pagamento sul conto corrente, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini che hanno richiesto una consegna documento presso una biblioteca comunale.

**Quando inviarlo**: Quando il pagamento non è stato effettuato entro il termine.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Consegna

<details>

<summary>Spedizione/invio documenti</summary>

**🖋 Titolo del messaggio:** Il `<Libro/Rivista/Dvd/ecc>` è stato inviato

🗒 **Testo del messaggio**:

Ti abbiamo inviato la copia del `<Libro/Rivista/Dvd/ecc>` richiesto.\
\[Se l’utente ha richiesto invio digitale] Troverai l’allegato nella tua email\
\[Se l’utente ha richiesto invio fisico]: Il `<Libro/Rivista/Dvd/ecc>` arriverà al tuo domicilio.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto l’invio di `<Libro/Rivista/Dvd/ecc>` da una biblioteca comunale.

**Quando inviarlo**: Quando la biblioteca deve avvisare l’utente dell’invio effettuato.

**User story**: Come cittadino voglio ricevere comunicazione sullo stato dei documenti richiesti alla biblioteca.

</details>

***

## Richiesta acquisto libri

### Elaborazione proposta acquisto

<details>

<summary>Proposta acquisto: accolta</summary>

**🖋 Titolo del messaggio:** La tua proposta è stata accolta

🗒 **Testo del messaggio**:

La tua proposta per l’acquisto di `<Libro/Rivista/Dvd/ecc>` è stata accolta.

Riceverai nei prossimi giorni un messaggio in app con le indicazioni utili al ritiro.

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno proposto un acquisto alla biblioteca comunale.

**Quando inviarlo**: Quando l’ente accoglie la proposta di nuovo acquisto.

**User Story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Proposta acquisto: non accolta</summary>

**🖋 Titolo del messaggio:** La tua proposta non è stata accolta

🗒 **Testo del messaggio**:

La tua proposta per l’acquisto di `<Libro/Rivista/Dvd/ecc>` non è stata accolta.

Per ulteriori informazioni, (visita questo sito)\[URL].

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno proposto un acquisto alla biblioteca comunale.

**Quando inviarlo**: Quando l’ente non accoglie la proposta di nuovo acquisto.

**User Story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Documento disponibile al ritiro</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** `<Libro/Rivista/Dvd/ecc>` disponibile al ritiro

🗒 **Testo del messaggio**:

Dal `<gg/mm/aaaa>` potrai ritirare il `<Libro/Rivista/Dvd/ecc>` richiesto.

**Dove**: `<indirizzo>`

**Orario**: \[Inserire qui i giorni e gli orari di apertura della biblioteca]

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno richiesto un `<Libro/Rivista/Dvd/ecc>` presso una biblioteca comunale.

**Quando inviarlo**: Quando il `<Libro/Rivista/Dvd/ecc>` è disponibile al ritiro.

**User story**: Come cittadino voglio ricevere un promemoria sulla disponibilità dei beni richiesti.

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../../app-io/modelli-servizi/v1.0/.gitbook/assets/IO - Template servizi - Biblioteche.xlsx" %}
{% endhint %}
